// app.js - client-only storage + helpers (with click tracking)
(function(){
  const LS_KEY = 'ab_listings_v1';
  const CLICK_KEY = 'ab_clicks_v1';

  function slugify(s){
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  }

  function googleSearchUrl(name){ return 'https://www.google.com/search?q=' + encodeURIComponent(name); }

  // Build seed listings from DATA.tools - used if no localStorage present
  function buildInitialListings(){
    const out = [];
    const ts = new Date().toISOString();
    for(const cat of (window.DATA && window.DATA.categories || [])){
      const list = (window.DATA.tools && window.DATA.tools[cat.id]) || [];
      for(const t of list){
        const slug = slugify(t.name);
        const id = `seed-${cat.id}-${slug}`;
        out.push({
          id,
          title: t.title || t.name,
          name: t.name,
          url: t.url || googleSearchUrl(t.name),
          category: cat.id,
          format: t.format || 'built',
          price: t.price || 0,
          desc: t.desc || `${t.name} — visit the product page.`,
          seller: t.seller || (t.name && t.name.split(' ')[0]) || 'Official',
          boosted: false,
          created_at: ts
        });
      }
    }
    // two demo user examples so UI isn't empty on first visit
    out.unshift({ id:'demo1', title:'Viral Caption Pack', url: googleSearchUrl('Viral Caption Pack'), category:'writing', format:'prompt', price:3.99, desc:'150 prompts for captions', seller:'@teencoder', boosted:false, created_at: new Date().toISOString() });
    out.unshift({ id:'demo2', title:'SpriteBot — Discord NPC', url: googleSearchUrl('SpriteBot'), category:'gaming', format:'built', price:9.99, desc:'Event-driven NPC', seller:'@playmaker', boosted:false, created_at: new Date().toISOString() });
    return out;
  }

  // LISTINGS
  window.loadListings = function(){
    try{
      const raw = localStorage.getItem(LS_KEY);
      if(!raw){
        const seed = buildInitialListings();
        localStorage.setItem(LS_KEY, JSON.stringify(seed));
        return seed.slice();
      }
      return JSON.parse(raw) || [];
    }catch(e){
      console.error('loadListings error', e);
      const seed = buildInitialListings();
      localStorage.setItem(LS_KEY, JSON.stringify(seed));
      return seed.slice();
    }
  };

  window.saveListings = function(arr){
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  };

  window.getCategory = function(id){ return (window.DATA && window.DATA.categories.find(c=>c.id===id)) || {name:'Other', followers:0, color:'#999'} };

  // CLICKS: persist click counts per listing id
  function readClicks(){
    try{
      const raw = localStorage.getItem(CLICK_KEY);
      if(!raw) return {};
      return JSON.parse(raw) || {};
    }catch(e){
      return {};
    }
  }
  function writeClicks(obj){
    try{ localStorage.setItem(CLICK_KEY, JSON.stringify(obj)); }catch(e){}
  }

  window.getClickCount = function(id){
    if(!id) return 0;
    const clicks = readClicks();
    return Number(clicks[id] || 0);
  };

  window.incrementClick = function(id){
    if(!id) return 0;
    const clicks = readClicks();
    clicks[id] = (Number(clicks[id]||0) + 1);
    writeClicks(clicks);
    // If a page-level refresh hook exists, call it so UI can update immediately
    try{ if(typeof window.__refreshView === 'function') window.__refreshView(); }catch(e){}
    return clicks[id];
  };

  window.getAllClicks = function(){
    return readClicks();
  };

  // Track-and-visit helper: increments click and opens URL in new tab
  window.trackAndVisit = function(id, url){
    try{
      if(id) incrementClick(id);
    }catch(e){}
    // open the url in a new tab
    try{
      window.open(url, '_blank', 'noopener');
    }catch(e){
      // fallback: navigate
      location.href = url;
    }
  };

  // export listings -> download listings.txt (JSONL)
  window.exportListings = function(){
    const arr = loadListings();
    const lines = arr.map(o => JSON.stringify(o)).join('\n');
    const blob = new Blob([lines], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'listings.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=> URL.revokeObjectURL(url), 5000);
  };

  // import listings file (File object). mode: 'merge' or 'replace'
  window.importListingsFile = function(file, mode='merge'){
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = function(){
        const text = r.result;
        try{
          const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
          const parsed = [];
          for(const line of lines){
            try{
              const obj = JSON.parse(line);
              if(!obj.id) obj.id = 'imp-' + Date.now() + '-' + Math.floor(Math.random()*10000);
              if(!obj.title && obj.name) obj.title = obj.name;
              if(!obj.title) obj.title = 'Untitled';
              if(!obj.url) obj.url = googleSearchUrl(obj.title);
              parsed.push(obj);
            }catch(err){
              console.warn('Skipping invalid line in import:', line);
            }
          }
          if(parsed.length===0) return reject(new Error('No valid listings found in file.'));
          const existing = loadListings();
          let added = 0, skipped = 0;
          if(mode === 'replace'){
            saveListings(parsed);
            added = parsed.length;
            skipped = 0;
          } else {
            const ids = new Set(existing.map(x=>x.id));
            for(const p of parsed){
              if(ids.has(p.id)){ skipped++; continue; }
              existing.push(p); ids.add(p.id); added++;
            }
            saveListings(existing);
          }
          resolve({ added, skipped });
        }catch(err){
          reject(err);
        }
      };
      r.onerror = function(e){
        reject(e);
      };
      r.readAsText(file);
    });
  };

  // simple simulated checkout modal (returns Promise<boolean>)
  window.simulatedCheckout = function(opts){
    return new Promise(resolve=>{
      const amount = Number(opts.amount || 0).toFixed(2);
      const desc = opts.description || 'Demo payment';
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `<div class="modal-content" style="max-width:420px">
        <button class="modal-close" id="close_sim">×</button>
        <h3>Demo Checkout</h3>
        <p class="muted small">${desc}</p>
        <p>Amount: <strong>$${amount}</strong></p>
        <p class="muted small">This is a simulated demo payment. No real money will be charged.</p>
        <div style="display:flex;gap:8px;margin-top:12px"><button id="pay_ok" class="btn primary">Simulate success</button><button id="pay_cancel" class="btn outline">Cancel</button></div>
      </div>`;
      document.body.appendChild(modal);
      document.getElementById('close_sim').onclick = ()=> { document.body.removeChild(modal); resolve(false); };
      document.getElementById('pay_cancel').onclick = ()=> { document.body.removeChild(modal); resolve(false); };
      document.getElementById('pay_ok').onclick = ()=> {
        document.body.removeChild(modal);
        setTimeout(()=> resolve(true), 250);
      };
    });
  };

  window.debounce = function(fn, ms=250){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; };
})();