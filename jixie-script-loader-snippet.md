**Fullepisodes - Home**

```javascript
    var is_homepage = {{IS_HOMEPAGE}}
    var is_mobile = {{IS_MOBILE}}
    
    if(is_homepage && !is_mobile){
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        var gptRan = false;
        window.jxHBLoadedCb = function(){ //onescript on load callback is used to load GPT
        loadGPT();
        };
        var loadGPT = function() {
        // Check the gptRan flag
        if (!gptRan) {
            gptRan = true;
            var gads = document.createElement('script');
            /*** HERE ASSUMING YOU HAD BEEN USING THIS STANDARD GPT.JS URL ***/
            /*** PUT WHATEVER YOUR SITE HAD BEEN USING FOR GPT.JS ***/
            gads.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        }
    };
    // Failsafe to call gpt even if onescript does not load in time.
    setTimeout(loadGPT, 2000);
    (function() {
        var wtads = document.createElement('script');
        wtads.async = true;
        wtads.type = 'text/javascript';
        wtads.src = 'https://scripts.jixie.media/onescript/GM180iIHc4/jx-GM29180G0dns.min.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(wtads, node);
    })();
        
        console.info("%c Fullepisodes (Home) Jixie HB - Loaded", "color: yellow;");

    }
```

**Fullepisodes - Home (Mobile)**

```javascript
    var is_homepage = {{IS_HOMEPAGE}}
    var is_mobile = {{IS_MOBILE}}
    
    if(is_homepage && is_mobile){
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      var gptRan = false;
      window.jxHBLoadedCb = function(){ //onescript on load callback is used to load GPT
          loadGPT();
      };
      var loadGPT = function() {
        // Check the gptRan flag
        if (!gptRan) {
            gptRan = true;
            var gads = document.createElement('script');
            /*** HERE ASSUMING YOU HAD BEEN USING THIS STANDARD GPT.JS URL ***/
            /*** PUT WHATEVER YOUR SITE HAD BEEN USING FOR GPT.JS ***/
            gads.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        }
      };
      // Failsafe to call gpt even if onescript does not load in time.
      setTimeout(loadGPT, 2000);
      (function() {
          var wtads = document.createElement('script');
          wtads.async = true;
          wtads.type = 'text/javascript';
          wtads.src = 'https://scripts.jixie.media/onescript/GM180iIHc4/jx-GM301806MBEG.min.js';
          var node = document.getElementsByTagName('script')[0];
          node.parentNode.insertBefore(wtads, node);
      })();
      
      console.info("%c Fullepisodes (Home - Mobile) Jixie HB - Loaded", "color: yellow;");
    }
```

**Fullepisodes - Subdirectories**

```javascript
    var is_homepage = {{IS_HOMEPAGE}}
    var is_mobile = {{IS_MOBILE}}
    
    if(!is_homepage && !is_mobile){
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        var gptRan = false;
        window.jxHBLoadedCb = function(){ 
            //onescript on load callback is used to load GPT
            loadGPT();
        };
        var loadGPT = function() {
            // Check the gptRan flag
            if (!gptRan) {
                gptRan = true;
                var gads = document.createElement('script');
                /*** HERE ASSUMING YOU HAD BEEN USING THIS STANDARD GPT.JS URL ***/
                /*** PUT WHATEVER YOUR SITE HAD BEEN USING FOR GPT.JS ***/
                gads.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            }
        };
        // Failsafe to call gpt even if onescript does not load in time.
        setTimeout(loadGPT, 2000);
        (function() {
            var wtads = document.createElement('script');
            wtads.async = true;
            wtads.type = 'text/javascript';
            wtads.src = 'https://scripts.jixie.media/onescript/GM180iIHc4/jx-GM31180lY1Ap.min.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(wtads, node);
        })();
        
        console.info("%c Fullepisodes (/*) Jixie HB - Loaded", "color: yellow;");

    }
```

**Fullepisodes - Subdirectories (Mobile)**

```javascript
    var is_homepage = {{IS_HOMEPAGE}}
    var is_mobile = {{IS_MOBILE}}

    if(!is_homepage && is_mobile){

        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        var gptRan = false;
        window.jxHBLoadedCb = function(){ //onescript on load callback is used to load GPT
            loadGPT();
        };
        var loadGPT = function() {
            // Check the gptRan flag
            if (!gptRan) {
                gptRan = true;
                var gads = document.createElement('script');
                /*** HERE ASSUMING YOU HAD BEEN USING THIS STANDARD GPT.JS URL ***/
                /*** PUT WHATEVER YOUR SITE HAD BEEN USING FOR GPT.JS ***/
                gads.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            }
        };
        // Failsafe to call gpt even if onescript does not load in time.
        setTimeout(loadGPT, 2000);
        (function() {
            var wtads = document.createElement('script');
            wtads.async = true;
            wtads.type = 'text/javascript';
            wtads.src = 'https://scripts.jixie.media/onescript/GM180iIHc4/jx-GM32180jLwTM.min.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(wtads, node);
        })();
    
        console.info("%c Fullepisodes (/* - Mobile) Jixie HB - Loaded", "color: yellow;");
    
    }
```

