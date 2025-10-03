var scriptConfig = {
    'home-desktop' : {
        scriptId: 'jx-GM29180G0dns.min.js',
        message: 'Fullepisodes (Home) Jixie HB - Loaded'
    },

    'home-mobile': {
        scriptId: 'jx-GM301806MBEG.min.js', 
        message: 'Fullepisodes (Home - Mobile) Jixie HB - Loaded'
    },

    'sub-desktop' : {
        scriptId: 'jx-GM31180lY1Ap.min.js',
        message: 'Fullepisodes (/*) Jixie HB - Loaded'
    },

    'sub-mobile': {
        scriptId: 'jx-GM32180jLwTM.min.js',
        message: 'Fullepisodes (/* - Mobile) Jixie HB - Loaded'
    }
}

function generateScript(script){
    var usedConfig = scriptConfig[script];

    if(usedConfig == undefined){
        throw new Error('Script Configuration error: No Script found - ' + script);
    }

    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    var gptRan = false;
    window.jxHBLoadedCb = function(){
        loadGPT();
    }

    var loadGPT = function(){
        if(!gptRan){
            gptRan = true;
            var gads = document.createElement('script');
            gads.src = 'https://securepubads.g.doubleclick.net/tag/js.gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        }
    }

    setTimeout(loadGPT, 2000);

    (function(){
        var wtads = document.createElement('script');
        wtads.async = true;
        wtads.type = 'text/javascript';
        // wtads.src = 'https://scripts.jixie.media/onescript/GM180iIHc4/jx-GM29180G0dns.min.js';
        wtads.src = `https://scripts.jixie.media/onescript/GM180iIHc4/${usedConfig.scriptId}`
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(wtads, node);
    })();

    console.info(`%c ${usedConfig.message}`, 'color: yellow');
}