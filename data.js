// Updated DATA with url fields for each tool. Uses canonical product pages when known,
// otherwise falls back to a Google search for the product name.
(function(){
  function g(name){ return 'https://www.google.com/search?q=' + encodeURIComponent(name); }

  window.DATA = {
    categories: [
      { id: 'chatbots', name: 'Chatbots & Assistants', color: '#6C5CE7', followers: 12000 },
      { id: 'writing', name: 'Writing & Content', color: '#FF7675', followers: 9800 },
      { id: 'image', name: 'Image & Design', color: '#74B9FF', followers: 14000 },
      { id: 'video', name: 'Video & Animation', color: '#00B894', followers: 9200 },
      { id: 'audio', name: 'Audio & Music', color: '#FD79A8', followers: 7300 },
      { id: 'code', name: 'Coding & Development', color: '#0984E3', followers: 8600 },
      { id: 'productivity', name: 'Business & Productivity', color: '#F6AA1C', followers: 6500 },
      { id: 'marketing', name: 'Marketing & Sales', color: '#FFD166', followers: 5600 },
      { id: 'education', name: 'Education & Study', color: '#B39BC8', followers: 6100 },
      { id: 'finance', name: 'Finance & Investing', color: '#A2D2FF', followers: 4800 },
      { id: 'social', name: 'Social Media & Creator Tools', color: '#FFB4A2', followers: 7700 },
      { id: 'ecommerce', name: 'E-Commerce', color: '#C1F0C1', followers: 4100 },
      { id: 'automation', name: 'Automation & Agents', color: '#F7D794', followers: 5300 },
      { id: 'support', name: 'Customer Support', color: '#D6EAF8', followers: 3000 },
      { id: 'fashion', name: 'Fashion & Lifestyle', color: '#F3C4FB', followers: 2600 },
      { id: 'research', name: 'Research & Data', color: '#E6F7FF', followers: 3900 },
      { id: 'hr', name: 'HR & Career', color: '#FFE6A7', followers: 2100 },
      { id: 'legal', name: 'Legal & Compliance', color: '#EDE7F6', followers: 1800 },
      { id: 'health', name: 'Health & Fitness', color: '#CFF4D2', followers: 4700 },
      { id: 'gaming', name: 'Gaming & Community Bots', color: '#FFD6A5', followers: 9400 }
    ],

    tools: {
      // CHATBOTS
      chatbots: [
        { id:'chatgpt', name:'ChatGPT', desc:'OpenAI conversational assistant', format:'built', price:0, url:'https://chat.openai.com', seller:'OpenAI' },
        { id:'claude', name:'Claude', desc:'Anthropic assistant', format:'built', price:0, url:'https://www.anthropic.com/claude', seller:'Anthropic' },
        { id:'gemini', name:'Google Gemini', desc:"Google's assistant", format:'built', price:0, url:'https://www.google.com/gemini', seller:'Google' },
        { id:'copilot-ms', name:'Microsoft Copilot', desc:'Integrated assistant for Microsoft apps', format:'built', price:0, url:'https://www.microsoft.com/en-us/copilot', seller:'Microsoft' },
        { id:'perplexity', name:'Perplexity', desc:'Search + chat', format:'built', price:0, url:'https://www.perplexity.ai', seller:'Perplexity' },
        { id:'poe', name:'Poe', desc:'Multi-model chat', format:'built', price:0, url:'https://poe.com', seller:'Poe' },
        { id:'metaai', name:'Meta AI', desc:'Meta conversational AI', format:'built', price:0, url:'https://ai.meta.com', seller:'Meta' },
        { id:'grok', name:'Grok', desc:'Grok assistant (X/Twitter)', format:'built', price:0, url: g('Grok AI'), seller:'Grok' },
        { id:'youcom', name:'You.com AI', desc:'Search + assistant', format:'built', price:0, url:'https://you.com', seller:'You.com' },
        { id:'characterai', name:'Character.AI', desc:'Custom character agents', format:'built', price:0, url:'https://beta.character.ai', seller:'Character.AI' },
        { id:'pi', name:'Pi', desc:'Personal AI assistant (Inflection)', format:'built', price:0, url:'https://www.pi.ai', seller:'Inflection' },
        { id:'hugging', name:'HuggingChat', desc:'Community-hosted chat', format:'built', price:0, url:'https://huggingface.co/chat', seller:'Hugging Face' },
        { id:'phind', name:'Phind', desc:'Code-aware search assistant', format:'built', price:0, url:'https://www.phind.com', seller:'Phind' },
        { id:'forefront', name:'Forefront AI', desc:'Chat models explorer', format:'built', price:0, url:'https://www.forefront.ai', seller:'Forefront' },
        { id:'andi', name:'Andi', desc:'Search and chat for quick answers', format:'built', price:0, url:'https://www.andi.com', seller:'Andi' },
        { id:'komo', name:'Komo AI', desc:'AI for communities', format:'built', price:0, url:'https://komo.ai', seller:'Komo' },
        { id:'monica', name:'Monica', desc:'Virtual assistant', format:'built', price:0, url: g('Monica AI assistant'), seller:'Monica' },
        { id:'merlin', name:'Merlin AI', desc:'Browser assistant', format:'built', price:0, url:'https://merlin.fo', seller:'Merlin' },
        { id:'chatsonic', name:'ChatSonic', desc:'Extended ChatGPT-style assistant', format:'built', price:9.99, url:'https://writesonic.com/chat', seller:'Writesonic' },
        { id:'openrouter', name:'OpenRouter Chat', desc:'Open model router', format:'built', price:0, url:'https://openrouter.ai', seller:'OpenRouter' }
      ],

      // WRITING
      writing: [
        { id:'grammarly', name:'Grammarly', desc:'Writing assistant', format:'built', price:0, url:'https://www.grammarly.com', seller:'Grammarly' },
        { id:'jasper', name:'Jasper', desc:'AI writing studio', format:'built', price:29, url:'https://www.jasper.ai', seller:'Jasper' },
        { id:'copyai', name:'Copy.ai', desc:'Copywriting tools', format:'built', price:19, url:'https://www.copy.ai', seller:'Copy.ai' },
        { id:'writesonic', name:'Writesonic', desc:'Content generation', format:'built', price:15, url:'https://writesonic.com', seller:'Writesonic' },
        { id:'rytr', name:'Rytr', desc:'AI writing assistant', format:'built', price:9, url:'https://rytr.me', seller:'Rytr' },
        { id:'quillbot', name:'QuillBot', desc:'Paraphrasing & grammar', format:'built', price:6.95, url:'https://quillbot.com', seller:'QuillBot' },
        { id:'wordtune', name:'Wordtune', desc:'Rewrite suggestions', format:'built', price:9.99, url:'https://www.wordtune.com', seller:'Wordtune' },
        { id:'sudowrite', name:'Sudowrite', desc:'Fiction writing assistant', format:'built', price:10, url:'https://www.sudowrite.com', seller:'Sudowrite' },
        { id:'notionai', name:'Notion AI', desc:'AI features in Notion', format:'built', price:0, url:'https://www.notion.so/product/ai', seller:'Notion' },
        { id:'anyword', name:'Anyword', desc:'Marketing copy optimized by data', format:'built', price:19, url:'https://www.anyword.com', seller:'Anyword' },
        { id:'hyperwrite', name:'HyperWrite', desc:'AI writing assistant', format:'built', price:8, url:'https://hyperwrite.ai', seller:'HyperWrite' },
        { id:'prowritingaid', name:'ProWritingAid', desc:'Writing analytics and corrections', format:'built', price:20, url:'https://prowritingaid.com', seller:'ProWritingAid' },
        { id:'frase', name:'Frase', desc:'SEO content assistant', format:'built', price:14, url:'https://www.frase.io', seller:'Frase' },
        { id:'surfer', name:'Surfer SEO', desc:'SEO + content drafting', format:'built', price:0, url:'https://surferseo.com', seller:'Surfer' },
        { id:'contentshake', name:'ContentShake AI', desc:'Content generator', format:'built', price:5, url:'https://contentshake.com', seller:'ContentShake' },
        { id:'scalenut', name:'Scalenut', desc:'AI content workflows', format:'built', price:39, url:'https://www.scalenut.com', seller:'Scalenut' },
        { id:'textcortex', name:'TextCortex', desc:'AI writing assistant', format:'built', price:7, url:'https://textcortex.com', seller:'TextCortex' },
        { id:'writerdotcom', name:'Writer.com', desc:'Enterprise writing assistant', format:'built', price:0, url:'https://writer.com', seller:'Writer' },
        { id:'shortly', name:'ShortlyAI', desc:'Long-form writing assistant', format:'built', price:9, url:'https://shortlyai.com', seller:'ShortlyAI' },
        { id:'ink', name:'INK', desc:'SEO writing + AI', format:'built', price:5, url:'https://inkforall.com', seller:'INK' }
      ],

      // IMAGE & DESIGN
      image: [
        { id:'midjourney', name:'Midjourney', desc:'Creative image generation', format:'built', price:10, url:'https://www.midjourney.com', seller:'Midjourney' },
        { id:'dalle', name:'DALL-E', desc:'OpenAI image model', format:'built', price:0, url:'https://labs.openai.com', seller:'OpenAI' },
        { id:'firefly', name:'Adobe Firefly', desc:'Generative image tools', format:'built', price:0, url:'https://www.adobe.com/sensei/generative-ai.html', seller:'Adobe' },
        { id:'leonardo', name:'Leonardo AI', desc:'Production-ready images', format:'built', price:0, url:'https://leonardo.ai', seller:'Leonardo' },
        { id:'canvaai', name:'Canva AI', desc:'Design tools with AI', format:'built', price:0, url:'https://www.canva.com', seller:'Canva' },
        { id:'ideogram', name:'Ideogram', desc:'Text-to-image generator', format:'built', price:0, url:'https://ideogram.ai', seller:'Ideogram' },
        { id:'stable', name:'Stable Diffusion', desc:'Open image models', format:'built', price:0, url:'https://stability.ai', seller:'Stability AI' },
        { id:'dreamstudio', name:'DreamStudio', desc:'Stable Diffusion UI', format:'built', price:0, url:'https://dreamstudio.ai', seller:'Stability' },
        { id:'playgroundai', name:'Playground AI', desc:'Image creation platform', format:'built', price:0, url:'https://playgroundai.com', seller:'Playground' },
        { id:'krea', name:'Krea AI', desc:'Image prompts marketplace', format:'built', price:0, url:'https://www.krea.ai', seller:'Krea' },
        { id:'freepik', name:'Freepik AI', desc:'AI for assets', format:'built', price:0, url:'https://www.freepik.com', seller:'Freepik' },
        { id:'clipdrop', name:'Clipdrop', desc:'Image tools & background removal', format:'built', price:0, url:'https://clipdrop.co', seller:'Clipdrop' },
        { id:'looka', name:'Looka', desc:'Logo maker with AI', format:'built', price:0, url:'https://looka.com', seller:'Looka' },
        { id:'uizard', name:'Uizard', desc:'Design to UI from text', format:'built', price:0, url:'https://uizard.io', seller:'Uizard' },
        { id:'designsai', name:'Designs.ai', desc:'Branding & assets', format:'built', price:0, url:'https://designs.ai', seller:'Designs.ai' },
        { id:'figmaai', name:'Figma AI', desc:'Design assistant in Figma', format:'built', price:0, url:'https://www.figma.com', seller:'Figma' },
        { id:'khroma', name:'Khroma', desc:'Color palette generator', format:'built', price:0, url:'https://www.khroma.co', seller:'Khroma' },
        { id:'flair', name:'Flair AI', desc:'Product visuals generator', format:'built', price:0, url:'https://flair.ai', seller:'Flair' }
      ],

      // VIDEO & ANIMATION
      video: [
        { id:'runway', name:'Runway', desc:'Video editing with ML', format:'built', price:12, url:'https://runwayml.com', seller:'Runway' },
        { id:'pika', name:'Pika Labs', desc:'Text-to-video generation', format:'built', price:0, url:'https://pikalabs.com', seller:'Pika Labs' },
        { id:'luma', name:'Luma', desc:'3D & view synthesis', format:'built', price:0, url:'https://lumalabs.ai', seller:'Luma' },
        { id:'synthesia', name:'Synthesia', desc:'AI avatar videos', format:'built', price:30, url:'https://www.synthesia.io', seller:'Synthesia' },
        { id:'heygen', name:'HeyGen', desc:'AI-generated presenters', format:'built', price:15, url:'https://www.heygen.com', seller:'HeyGen' },
        { id:'invideo', name:'InVideo', desc:'Shorts editor with AI', format:'built', price:0, url:'https://invideo.io', seller:'InVideo' },
        { id:'veed', name:'Veed', desc:'Video tools with AI', format:'built', price:0, url:'https://www.veed.io', seller:'Veed' },
        { id:'descript', name:'Descript', desc:'Audio/video editing + transcripts', format:'built', price:12, url:'https://www.descript.com', seller:'Descript' },
        { id:'opusclip', name:'OpusClip', desc:'Clip auto-cutting for socials', format:'built', price:0, url:'https://www.opusclip.com', seller:'OpusClip' },
        { id:'kaiber', name:'Kaiber', desc:'AI creative video', format:'built', price:0, url:'https://www.kaiber.ai', seller:'Kaiber' },
        { id:'colossyan', name:'Colossyan', desc:'AI video generation', format:'built', price:0, url:'https://www.colossyan.com', seller:'Colossyan' },
        { id:'elai', name:'Elai', desc:'AI video generator', format:'built', price:0, url:'https://elai.io', seller:'Elai' },
        { id:'deepbrain', name:'DeepBrain', desc:'AI avatars & video', format:'built', price:0, url:'https://www.deepbrain.io', seller:'DeepBrain' },
        { id:'fliki', name:'Fliki', desc:'Text-to-speech video maker', format:'built', price:0, url:'https://fliki.ai', seller:'Fliki' },
        { id:'vizard', name:'Vizard AI', desc:'Video editor with AI', format:'built', price:0, url:'https://vizard.ai', seller:'Vizard' },
        { id:'steveai', name:'Steve AI', desc:'Auto-video from text', format:'built', price:0, url:'https://www.steve.ai', seller:'Steve AI' }
      ],

      // AUDIO & MUSIC
      audio: [
        { id:'elevenlabs', name:'ElevenLabs', desc:'Text-to-voice & voice cloning', format:'built', price:5, url:'https://elevenlabs.io', seller:'ElevenLabs' },
        { id:'suno', name:'Suno', desc:'Music generation', format:'built', price:0, url:'https://suno.ai', seller:'Suno' },
        { id:'descript-audio', name:'Descript', desc:'Audio editing & overdub', format:'built', price:12, url:'https://www.descript.com', seller:'Descript' },
        { id:'murf', name:'Murf AI', desc:'Voiceover generation', format:'built', price:0, url:'https://murf.ai', seller:'Murf' },
        { id:'playht', name:'PlayHT', desc:'Neural voices', format:'built', price:0, url:'https://play.ht', seller:'PlayHT' },
        { id:'resemble', name:'Resemble AI', desc:'Voice cloning', format:'built', price:0, url:'https://www.resemble.ai', seller:'Resemble' },
        { id:'lalam', name:'LALAL.AI', desc:'Stem separation', format:'built', price:0, url:'https://www.lalal.ai', seller:'LALAL' },
        { id:'aiva', name:'AIVA', desc:'AI music composer', format:'built', price:0, url:'https://www.aiva.ai', seller:'AIVA' },
        { id:'soundraw', name:'Soundraw', desc:'Music creation assistant', format:'built', price:0, url:'https://soundraw.io', seller:'Soundraw' },
        { id:'boomy', name:'Boomy', desc:'Instant music creation', format:'built', price:0, url:'https://boomy.com', seller:'Boomy' },
        { id:'beatoven', name:'Beatoven.ai', desc:'AI music for creators', format:'built', price:0, url:'https://www.beatoven.ai', seller:'Beatoven' },
        { id:'voicemod', name:'Voicemod', desc:'Real-time voice changer', format:'built', price:0, url:'https://www.voicemod.net', seller:'Voicemod' },
        { id:'podcastle', name:'Podcastle', desc:'Podcast recording & editing', format:'built', price:0, url:'https://podcastle.ai', seller:'Podcastle' },
        { id:'cleanvoice', name:'Cleanvoice AI', desc:'Audio cleanup', format:'built', price:0, url:'https://cleanvoice.ai', seller:'Cleanvoice' },
        { id:'krisp', name:'Krisp', desc:'Noise removal', format:'built', price:0, url:'https://krisp.ai', seller:'Krisp' },
        { id:'moises', name:'Moises.ai', desc:'Music separation & stems', format:'built', price:0, url:'https://moises.ai', seller:'Moises' }
      ],

      // CODE & DEVELOPMENT
      code: [
        { id:'copilot', name:'GitHub Copilot', desc:'AI pair programmer', format:'built', price:0, url:'https://github.com/features/copilot', seller:'GitHub' },
        { id:'cursor', name:'Cursor', desc:'AI dev environment', format:'built', price:0, url:'https://www.cursor.so', seller:'Cursor' },
        { id:'replit', name:'Replit AI', desc:'AI coding assistant in Replit', format:'built', price:0, url:'https://replit.com', seller:'Replit' },
        { id:'claudecode', name:'Claude Code', desc:'Anthropic code assistant', format:'built', price:0, url:g('Claude Code Anthropic'), seller:'Anthropic' },
        { id:'codex', name:'OpenAI Codex', desc:'Program synthesis', format:'built', price:0, url:'https://openai.com/research/codex', seller:'OpenAI' },
        { id:'codeium', name:'Codeium', desc:'Code completion & search', format:'built', price:0, url:'https://www.codeium.com', seller:'Codeium' },
        { id:'tabnine', name:'Tabnine', desc:'Code completion AI', format:'built', price:0, url:'https://www.tabnine.com', seller:'Tabnine' },
        { id:'sourcegraph', name:'Sourcegraph Cody', desc:'Code search & assistant', format:'built', price:0, url:'https://sourcegraph.com/cody', seller:'Sourcegraph' },
        { id:'phind-code', name:'Phind', desc:'Code-aware search', format:'built', price:0, url:'https://www.phind.com', seller:'Phind' },
        { id:'blackbox', name:'Blackbox AI', desc:'Code search & completion', format:'built', price:0, url:'https://www.blackbox.ai', seller:'Blackbox AI' },
        { id:'snyk', name:'Snyk AI', desc:'Security for code', format:'built', price:0, url:'https://snyk.io', seller:'Snyk' }
      ],

      // BUSINESS & PRODUCTIVITY
      productivity: [
        { id:'notion-prod', name:'Notion AI', desc:'Notes & docs assistant', format:'built', price:0, url:'https://www.notion.so/product/ai', seller:'Notion' },
        { id:'mscopilot-prod', name:'Microsoft Copilot (Workspace)', desc:'Copilot for productivity', format:'built', price:0, url:'https://www.microsoft.com/en-us/microsoft-365/copilot', seller:'Microsoft' },
        { id:'google-workspace', name:'Google Gemini for Workspace', desc:'AI in Google Workspace', format:'built', price:0, url:'https://workspace.google.com', seller:'Google' },
        { id:'slackai', name:'Slack AI', desc:'AI in Slack', format:'built', price:0, url:'https://slack.com', seller:'Slack' },
        { id:'clickup', name:'ClickUp AI', desc:'Task & project AI', format:'built', price:0, url:'https://clickup.com', seller:'ClickUp' },
        { id:'asana', name:'Asana Intelligence', desc:'AI for tasks', format:'built', price:0, url:'https://asana.com', seller:'Asana' },
        { id:'otter', name:'Otter.ai', desc:'Meeting transcription', format:'built', price:0, url:'https://otter.ai', seller:'Otter.ai' },
        { id:'fireflies', name:'Fireflies.ai', desc:'Meeting notes automation', format:'built', price:0, url:'https://fireflies.ai', seller:'Fireflies' }
      ],

      // MARKETING & SALES
      marketing: [
        { id:'hubspot', name:'HubSpot AI', desc:'Sales & marketing assistant', format:'built', price:0, url:'https://www.hubspot.com', seller:'HubSpot' },
        { id:'adcreative', name:'AdCreative.ai', desc:'Ad generation', format:'built', price:0, url:'https://www.adcreative.ai', seller:'AdCreative' },
        { id:'semrush', name:'Semrush', desc:'SEO & marketing', format:'built', price:0, url:'https://www.semrush.com', seller:'Semrush' },
        { id:'surferseo', name:'Surfer SEO', desc:'SEO content assistant', format:'built', price:0, url:'https://surferseo.com', seller:'Surfer' }
      ],

      // EDUCATION & STUDY
      education: [
        { id:'khanmigo', name:'Khanmigo', desc:'Khan Academy tutor', format:'built', price:0, url:'https://www.khanacademy.org', seller:'Khan Academy' },
        { id:'quizlet', name:'Quizlet AI', desc:'Study assistant', format:'built', price:0, url:'https://quizlet.com', seller:'Quizlet' },
        { id:'photomath', name:'Photomath', desc:'Math problem solver', format:'built', price:0, url:'https://photomath.com', seller:'Photomath' },
        { id:'duolingo', name:'Duolingo Max', desc:'Enhanced Duolingo with AI', format:'built', price:0, url:'https://www.duolingo.com', seller:'Duolingo' },
        { id:'wolfram', name:'Wolfram Alpha', desc:'Computational answers', format:'built', price:0, url:'https://www.wolframalpha.com', seller:'Wolfram' }
      ],

      // FINANCE & INVESTING
      finance: [
        { id:'bloomberg', name:'BloombergGPT', desc:'Finance research assistant', format:'built', price:0, url:'https://www.bloomberg.com', seller:'Bloomberg' },
        { id:'alphasense', name:'AlphaSense', desc:'Market research assistant', format:'built', price:0, url:'https://www.alpha-sense.com', seller:'AlphaSense' },
        { id:'finviz', name:'Finviz', desc:'Market screener', format:'built', price:0, url:'https://finviz.com', seller:'Finviz' },
        { id:'seekingalpha', name:'Seeking Alpha', desc:'Market research & signals', format:'built', price:0, url:'https://seekingalpha.com', seller:'Seeking Alpha' }
      ],

      // SOCIAL & CREATOR TOOLS
      social: [
        { id:'canva-social', name:'Canva AI', desc:'Creator visuals', format:'built', price:0, url:'https://www.canva.com', seller:'Canva' },
        { id:'capcut', name:'CapCut', desc:'Shorts editing', format:'built', price:0, url:'https://www.capcut.com', seller:'CapCut' },
        { id:'veed-social', name:'VEED', desc:'Social video tools', format:'built', price:0, url:'https://www.veed.io', seller:'Veed' }
      ],

      // E-COMMERCE
      ecommerce: [
        { id:'shopifymagic', name:'Shopify Magic', desc:'Commerce content & images', format:'built', price:0, url:'https://www.shopify.com', seller:'Shopify' },
        { id:'klaviyo', name:'Klaviyo AI', desc:'Email & segmentation AI', format:'built', price:0, url:'https://www.klaviyo.com', seller:'Klaviyo' }
      ],

      // AUTOMATION & AGENTS
      automation: [
        { id:'zapier', name:'Zapier', desc:'Create automation workflows', format:'built', price:0, url:'https://zapier.com', seller:'Zapier' },
        { id:'make', name:'Make', desc:'Visual automation builder', format:'built', price:0, url:'https://www.make.com', seller:'Make' },
        { id:'n8n', name:'n8n', desc:'Open automation platform', format:'built', price:0, url:'https://n8n.io', seller:'n8n' },
        { id:'langchain', name:'LangChain', desc:'Agent & chaining framework', format:'built', price:0, url:'https://langchain.com', seller:'LangChain' }
      ],

      // CUSTOMER SUPPORT
      support: [
        { id:'intercom', name:'Intercom', desc:'Customer messaging with AI', format:'built', price:0, url:'https://www.intercom.com', seller:'Intercom' },
        { id:'zendesk', name:'Zendesk AI', desc:'Support AI features', format:'built', price:0, url:'https://www.zendesk.com', seller:'Zendesk' }
      ],

      // FASHION & LIFESTYLE
      fashion: [
        { id:'botika', name:'Botika', desc:'Fashion AI tools', format:'built', price:0, url: g('Botika AI fashion'), seller:'Botika' },
        { id:'zmo', name:'ZMO.ai', desc:'Virtual try-on & product visuals', format:'built', price:0, url:'https://zmo.ai', seller:'ZMO' }
      ],

      // RESEARCH & DATA
      research: [
        { id:'perplexity-research', name:'Perplexity', desc:'Research-oriented answers', format:'built', price:0, url:'https://www.perplexity.ai', seller:'Perplexity' },
        { id:'elicit', name:'Elicit', desc:'Research workflows', format:'built', price:0, url:'https://elicit.org', seller:'Elicit' },
        { id:'consensus', name:'Consensus', desc:'Research summarization', format:'built', price:0, url:'https://consensus.app', seller:'Consensus' }
      ],

      // HR & CAREER
      hr: [
        { id:'linkedinai', name:'LinkedIn AI', desc:'Career assistant', format:'built', price:0, url:'https://www.linkedin.com', seller:'LinkedIn' },
        { id:'teal', name:'Teal', desc:'Job search assistant', format:'built', price:0, url:'https://www.tealhq.com', seller:'Teal' }
      ],

      // LEGAL & COMPLIANCE
      legal: [
        { id:'harvey', name:'Harvey', desc:'Legal assistant', format:'built', price:0, url:'https://www.harveylaw.ai', seller:'Harvey' },
        { id:'spellbook', name:'Spellbook', desc:'Contract AI', format:'built', price:0, url:'https://www.spellbook.com', seller:'Spellbook' }
      ],

      // HEALTH & FITNESS
      health: [
        { id:'whoop', name:'WHOOP Coach', desc:'Fitness coaching', format:'built', price:0, url:'https://www.whoop.com', seller:'WHOOP' },
        { id:'myfitnesspal', name:'MyFitnessPal AI', desc:'Nutrition assistant', format:'built', price:0, url:'https://www.myfitnesspal.com', seller:'MyFitnessPal' }
      ],

      // GAMING & COMMUNITY BOTS
      gaming: [
        { id:'characterai-gaming', name:'Character.AI (gaming)', desc:'Game character agents', format:'built', price:0, url:'https://beta.character.ai', seller:'Character.AI' },
        { id:'inworld', name:'Inworld AI', desc:'Character platform', format:'built', price:0, url:'https://www.inworld.ai', seller:'Inworld' }
      ]
    }
  };
})();