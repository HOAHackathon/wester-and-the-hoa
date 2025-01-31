// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d5pqN":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"jeorp":[function(require,module,exports,__globalThis) {
// main.ts
var _excalibur = require("excalibur");
var _wester = require("./wester");
var _slime = require("./slime");
const game = new (0, _excalibur.Engine)({
    backgroundColor: (0, _excalibur.Color).fromHex("#cfc7a1"),
    pixelArt: true,
    snapToPixel: true,
    pixelRatio: 1,
    displayMode: (0, _excalibur.DisplayMode).FitScreen
});
const wester = new (0, _wester.Wester)(game);
game.currentScene.add(wester);
for(let i = 0; i < 20; i++)game.currentScene.add(new (0, _slime.Slime)((0, _excalibur.Vector).fromAngle(Math.random() * Math.PI * 2).scaleEqual(800 + Math.random() * 600).add((0, _excalibur.vec)(game.screen.width / 2, game.screen.height / 2))));
game.start();

},{"excalibur":"ee0bS","./wester":"4cdGP","./slime":"86mzP"}],"ee0bS":[function(require,module,exports,__globalThis) {
/*! For license information please see excalibur.min.js.LICENSE.txt */ !function(t, e) {
    module.exports = e();
}(self, ()=>(()=>{
        "use strict";
        var t = {
            851: (t, e, i)=>{
                i.d(e, {
                    A: ()=>a
                });
                var s = i(1), n = i.n(s), r = i(935), o = i.n(r)()(n());
                o.push([
                    t.id,
                    "/* Buttons styles start */\n\nbutton#excalibur-play {\n  display: inline-block;\n  position: relative;\n  z-index: 999;\n  border-radius: 6px;\n  border: none;\n  /*border: 3px solid;\n    border-color: white;\n    box-shadow: 0 0 10px #ccc;*/\n  padding: 1rem 1.5rem 1rem 4rem;\n  margin: 0;\n  text-decoration: none;\n  background: #00b233;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 2rem;\n  white-space: nowrap;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  transition:\n    background 250ms ease-in-out,\n    transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\n  animation: excalibur-button-fadein 200ms;\n}\n\n/*\nbutton#excalibur-play {\n  display: none;\n}*/\n\nbutton#excalibur-play:after {\n  position: absolute;\n  content: '';\n  border: 8px solid;\n  border-color: transparent transparent transparent white;\n  left: 35px;\n  top: 24px;\n  width: 0;\n  height: 0;\n}\n\nbutton#excalibur-play:before {\n  position: absolute;\n  content: '';\n  border: 3px solid;\n  left: 19px;\n  top: 14px;\n  border-radius: 20px;\n  width: 30px;\n  height: 30px;\n}\n\nbutton#excalibur-play:hover,\nbutton#excalibur-play:focus {\n  background: #00982c;\n}\n\nbutton#excalibur-play:focus {\n  outline: 1px solid #fff;\n  outline-offset: -4px;\n}\n\nbutton#excalibur-play:active {\n  transform: scale(0.99);\n}\n\n@keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Internet Explorer */\n@-ms-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n",
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./Director/Loader.css"
                        ],
                        names: [],
                        mappings: "AAAA,yBAAyB;;AAEzB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ;;+BAE6B;EAC7B,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB;;wBAEsB;EACtB,wBAAwB;EACxB,qBAAqB;;EAErB,gDAAgD,EAAE,oCAAoC;EACtF,6CAA6C,EAAE,iBAAiB;EAChE,4CAA4C,EAAE,sBAAsB;EACpE,2CAA2C,EAAE,iBAAiB;EAC9D,wCAAwC;AAC1C;;AAEA;;;EAGE;;AAEF;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uDAAuD;EACvD,UAAU;EACV,SAAS;EACT,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,oCAAoC;AACpC;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF",
                        sourcesContent: [
                            "/* Buttons styles start */\r\n\r\nbutton#excalibur-play {\r\n  display: inline-block;\r\n  position: relative;\r\n  z-index: 999;\r\n  border-radius: 6px;\r\n  border: none;\r\n  /*border: 3px solid;\r\n    border-color: white;\r\n    box-shadow: 0 0 10px #ccc;*/\r\n  padding: 1rem 1.5rem 1rem 4rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  background: #00b233;\r\n  color: #ffffff;\r\n  font-family: sans-serif;\r\n  font-size: 2rem;\r\n  white-space: nowrap;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  transition:\r\n    background 250ms ease-in-out,\r\n    transform 150ms ease;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\r\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\r\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\r\n  animation: excalibur-button-fadein 200ms;\r\n}\r\n\r\n/*\r\nbutton#excalibur-play {\r\n  display: none;\r\n}*/\r\n\r\nbutton#excalibur-play:after {\r\n  position: absolute;\r\n  content: '';\r\n  border: 8px solid;\r\n  border-color: transparent transparent transparent white;\r\n  left: 35px;\r\n  top: 24px;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\nbutton#excalibur-play:before {\r\n  position: absolute;\r\n  content: '';\r\n  border: 3px solid;\r\n  left: 19px;\r\n  top: 14px;\r\n  border-radius: 20px;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\nbutton#excalibur-play:hover,\r\nbutton#excalibur-play:focus {\r\n  background: #00982c;\r\n}\r\n\r\nbutton#excalibur-play:focus {\r\n  outline: 1px solid #fff;\r\n  outline-offset: -4px;\r\n}\r\n\r\nbutton#excalibur-play:active {\r\n  transform: scale(0.99);\r\n}\r\n\r\n@keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Firefox < 16 */\r\n@-moz-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Internet Explorer */\r\n@-ms-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Opera < 12.1 */\r\n@-o-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n"
                        ],
                        sourceRoot: ""
                    }
                ]);
                const a = o;
            },
            296: (t, e, i)=>{
                i.d(e, {
                    A: ()=>a
                });
                var s = i(1), n = i.n(s), r = i(935), o = i.n(r)()(n());
                o.push([
                    t.id,
                    "#ex-toast-container {\n  position: absolute;\n  height: 0;\n  min-width: 50%;\n  left: 50%;\n  top: 0;\n}\n\n.ex-toast-message {\n  left: -50%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  padding: 10px;\n  margin-top: 5px;\n  font-size: 18px;\n  font-family: sans-serif;\n  border-radius: 6px;\n  border: 3px solid #b7b779;\n  background-color: rgb(253, 253, 192);\n}\n\n.ex-toast-message button {\n  align-self: flex-start;\n}\n",
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./Util/Toaster.css"
                        ],
                        names: [],
                        mappings: "AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,SAAS;EACT,MAAM;AACR;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,8BAA8B;;EAE9B,aAAa;EACb,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB",
                        sourcesContent: [
                            "#ex-toast-container {\r\n  position: absolute;\r\n  height: 0;\r\n  min-width: 50%;\r\n  left: 50%;\r\n  top: 0;\r\n}\r\n\r\n.ex-toast-message {\r\n  left: -50%;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  padding: 10px;\r\n  margin-top: 5px;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n  border-radius: 6px;\r\n  border: 3px solid #b7b779;\r\n  background-color: rgb(253, 253, 192);\r\n}\r\n\r\n.ex-toast-message button {\r\n  align-self: flex-start;\r\n}\r\n"
                        ],
                        sourceRoot: ""
                    }
                ]);
                const a = o;
            },
            935: (t)=>{
                t.exports = function(t) {
                    var e = [];
                    return e.toString = function() {
                        return this.map(function(e) {
                            var i = "", s = void 0 !== e[5];
                            return e[4] && (i += "@supports (".concat(e[4], ") {")), e[2] && (i += "@media ".concat(e[2], " {")), s && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), i += t(e), s && (i += "}"), e[2] && (i += "}"), e[4] && (i += "}"), i;
                        }).join("");
                    }, e.i = function(t, i, s, n, r) {
                        "string" == typeof t && (t = [
                            [
                                null,
                                t,
                                void 0
                            ]
                        ]);
                        var o = {};
                        if (s) for(var a = 0; a < this.length; a++){
                            var h = this[a][0];
                            null != h && (o[h] = !0);
                        }
                        for(var l = 0; l < t.length; l++){
                            var c = [].concat(t[l]);
                            s && o[c[0]] || (void 0 !== r && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = r), i && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = i) : c[2] = i), n && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = n) : c[4] = "".concat(n)), e.push(c));
                        }
                    }, e;
                };
            },
            1: (t)=>{
                t.exports = function(t) {
                    var e = t[1], i = t[3];
                    if (!i) return e;
                    if ("function" == typeof btoa) {
                        var s = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), r = "/*# ".concat(n, " */");
                        return [
                            e
                        ].concat([
                            r
                        ]).join("\n");
                    }
                    return [
                        e
                    ].join("\n");
                };
            }
        }, e = {};
        function i(s) {
            var n = e[s];
            if (void 0 !== n) return n.exports;
            var r = e[s] = {
                id: s,
                exports: {}
            };
            return t[s](r, r.exports, i), r.exports;
        }
        i.n = (t)=>{
            var e = t && t.__esModule ? ()=>t.default : ()=>t;
            return i.d(e, {
                a: e
            }), e;
        }, i.d = (t, e)=>{
            for(var s in e)i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: e[s]
            });
        }, i.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e), i.r = (t)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        };
        var s = {};
        i.r(s), i.d(s, {
            ActionCompleteEvent: ()=>ei,
            ActionContext: ()=>yn,
            ActionQueue: ()=>Fs,
            ActionSequence: ()=>Po,
            ActionStartEvent: ()=>ti,
            ActionsComponent: ()=>bn,
            ActionsSystem: ()=>fr,
            ActivateEvent: ()=>Ze,
            Actor: ()=>Tn,
            ActorEvents: ()=>An,
            AddEvent: ()=>ii,
            AddedComponent: ()=>ni,
            AffineMatrix: ()=>$,
            Animation: ()=>Kt,
            AnimationDirection: ()=>Nt,
            AnimationEvents: ()=>jt,
            AnimationStrategy: ()=>Wt,
            ArcadeSolver: ()=>rr,
            AudioContextFactory: ()=>Si,
            Axes: ()=>Sr,
            Axis: ()=>Un,
            BaseAlign: ()=>ie,
            BezierCurve: ()=>vn,
            Blink: ()=>dn,
            BodyComponent: ()=>Ss,
            BoundingBox: ()=>U,
            BrowserComponent: ()=>Jr,
            BrowserEvents: ()=>to,
            Buttons: ()=>Tr,
            Camera: ()=>qn,
            CameraEvents: ()=>Vn,
            Canvas: ()=>Ei,
            Circle: ()=>Es,
            CircleCollider: ()=>us,
            Clock: ()=>no,
            ClosestLineJumpTable: ()=>ds,
            Collider: ()=>is,
            ColliderComponent: ()=>As,
            CollisionContact: ()=>_s,
            CollisionEndEvent: ()=>Xe,
            CollisionGroup: ()=>$i,
            CollisionGroupManager: ()=>Zi,
            CollisionJumpTable: ()=>xs,
            CollisionPostSolveEvent: ()=>Ve,
            CollisionPreSolveEvent: ()=>Ge,
            CollisionStartEvent: ()=>qe,
            CollisionSystem: ()=>hr,
            CollisionType: ()=>qi,
            Color: ()=>R,
            ColorBlindFlags: ()=>$r,
            ColorBlindnessMode: ()=>Xr,
            ColorBlindnessPostProcessor: ()=>Zr,
            Component: ()=>Yt,
            CompositeCollider: ()=>hs,
            ConsoleAppender: ()=>L,
            ContactConstraintPoint: ()=>or,
            ContactEndEvent: ()=>We,
            ContactSolveBias: ()=>Yi,
            ContactStartEvent: ()=>Ne,
            CoordPlane: ()=>Ht,
            CrossFade: ()=>ta,
            CurveBy: ()=>wn,
            CurveTo: ()=>xn,
            DeactivateEvent: ()=>$e,
            Debug: ()=>ys,
            DebugConfig: ()=>jr,
            DebugGraphicsComponent: ()=>Rn,
            DebugSystem: ()=>dr,
            DebugText: ()=>ft,
            DefaultAntialiasOptions: ()=>eo,
            DefaultGarbageCollectionOptions: ()=>go,
            DefaultLoader: ()=>Hi,
            DefaultPixelArtOptions: ()=>io,
            DegreeOfFreedom: ()=>Ts,
            Delay: ()=>_n,
            Detector: ()=>Vi,
            Die: ()=>gn,
            Direction: ()=>ne,
            Director: ()=>co,
            DirectorEvents: ()=>lo,
            DisplayMode: ()=>bi,
            DynamicTree: ()=>Ji,
            DynamicTreeCollisionProcessor: ()=>es,
            EX_VERSION: ()=>ga,
            EaseBy: ()=>cn,
            EaseTo: ()=>ln,
            EasingFunctions: ()=>Rs,
            EdgeCollider: ()=>ws,
            ElasticToActorStrategy: ()=>Nn,
            EmitterType: ()=>vo,
            Engine: ()=>xo,
            EngineEvents: ()=>fo,
            EnterTriggerEvent: ()=>Qe,
            EnterViewPortEvent: ()=>Ke,
            Entity: ()=>li,
            EntityEvents: ()=>hi,
            EntityManager: ()=>Kn,
            EventEmitter: ()=>g,
            EventTypes: ()=>re,
            Events: ()=>o,
            ExResponse: ()=>Ii,
            ExcaliburGraphicsContext2DCanvas: ()=>yi,
            ExcaliburGraphicsContextWebGL: ()=>vi,
            ExitTriggerEvent: ()=>Je,
            ExitViewPortEvent: ()=>je,
            Fade: ()=>un,
            FadeInOut: ()=>Jo,
            Flags: ()=>d,
            Flash: ()=>mn,
            Follow: ()=>pn,
            Font: ()=>_e,
            FontCache: ()=>ue,
            FontSource: ()=>Yo,
            FontStyle: ()=>se,
            FontUnit: ()=>te,
            FpsSampler: ()=>so,
            FrameStats: ()=>Kr,
            Future: ()=>_,
            GameEvent: ()=>me,
            GameStartEvent: ()=>ye,
            GameStopEvent: ()=>be,
            Gamepad: ()=>Ar,
            GamepadAxisEvent: ()=>Le,
            GamepadButtonEvent: ()=>ke,
            GamepadConnectEvent: ()=>De,
            GamepadDisconnectEvent: ()=>Be,
            Gamepads: ()=>Cr,
            GarbageCollector: ()=>po,
            Gif: ()=>Wo,
            GifParser: ()=>Xo,
            GlobalCoordinates: ()=>Mr,
            GpuParticleEmitter: ()=>Ao,
            GpuParticleRenderer: ()=>Co,
            Graphic: ()=>nt,
            GraphicsComponent: ()=>fe,
            GraphicsGroup: ()=>Qt,
            GraphicsSystem: ()=>cr,
            HashColliderProxy: ()=>wr,
            HashGridCell: ()=>_r,
            HashGridProxy: ()=>ur,
            HiddenEvent: ()=>Ue,
            HorizontalFirst: ()=>ns,
            ImageFiltering: ()=>ot,
            ImageSource: ()=>ut,
            ImageSourceAttributeConstants: ()=>dt,
            ImageWrapping: ()=>at,
            InitializeEvent: ()=>Ye,
            InputHost: ()=>Nr,
            InputMapper: ()=>Er,
            IsometricEntityComponent: ()=>mr,
            IsometricEntitySystem: ()=>vr,
            IsometricMap: ()=>So,
            IsometricTile: ()=>To,
            KeyEvent: ()=>Rr,
            Keyboard: ()=>Fr,
            Keys: ()=>Pr,
            KillEvent: ()=>ve,
            Label: ()=>wo,
            LimitCameraBoundsStrategy: ()=>Gn,
            Line: ()=>ia,
            LineSegment: ()=>ls,
            Loader: ()=>Wi,
            LoaderEvents: ()=>Ui,
            LockCameraToActorAxisStrategy: ()=>Hn,
            LockCameraToActorStrategy: ()=>On,
            LogLevel: ()=>M,
            Logger: ()=>k,
            Material: ()=>Ut,
            Matrix: ()=>Z,
            MatrixLocations: ()=>B,
            MediaEvent: ()=>Mi,
            Meet: ()=>fn,
            MotionComponent: ()=>ci,
            MotionSystem: ()=>nr,
            MoveBy: ()=>qs,
            MoveByWithOptions: ()=>Vs,
            MoveTo: ()=>Zs,
            MoveToWithOptions: ()=>Ys,
            NativePointerButton: ()=>zr,
            NativeSoundEvent: ()=>Di,
            NativeSoundProcessedEvent: ()=>Bi,
            NineSlice: ()=>ra,
            NineSliceStretch: ()=>na,
            None: ()=>rs,
            Observable: ()=>Zt,
            OffscreenSystem: ()=>xr,
            Pair: ()=>ji,
            ParallaxComponent: ()=>In,
            ParallelActions: ()=>Eo,
            Particle: ()=>ui,
            ParticleEmitter: ()=>yo,
            ParticleRenderer: ()=>gi,
            ParticleTransform: ()=>_i,
            PhysicsStats: ()=>Qr,
            PhysicsWorld: ()=>br,
            PointerAbstraction: ()=>kr,
            PointerButton: ()=>Ur,
            PointerComponent: ()=>Is,
            PointerEvent: ()=>Dr,
            PointerEventReceiver: ()=>Hr,
            PointerScope: ()=>a,
            PointerSystem: ()=>pr,
            PointerType: ()=>Or,
            Polygon: ()=>sa,
            PolygonCollider: ()=>bs,
            Pool: ()=>Lt,
            PostCollisionEvent: ()=>He,
            PostDebugDrawEvent: ()=>Ee,
            PostDrawEvent: ()=>Ae,
            PostFrameEvent: ()=>Me,
            PostKillEvent: ()=>we,
            PostTransformDrawEvent: ()=>Se,
            PostUpdateEvent: ()=>Re,
            PreCollisionEvent: ()=>Oe,
            PreDebugDrawEvent: ()=>Pe,
            PreDrawEvent: ()=>Ce,
            PreFrameEvent: ()=>Fe,
            PreKillEvent: ()=>xe,
            PreLoadEvent: ()=>Wr,
            PreTransformDrawEvent: ()=>Te,
            PreUpdateEvent: ()=>Ie,
            Projection: ()=>Ki,
            QuadIndexBuffer: ()=>Mt,
            QuadTree: ()=>Io,
            Query: ()=>Qn,
            QueryManager: ()=>tr,
            RadiusAroundActorStrategy: ()=>Wn,
            Random: ()=>f,
            Raster: ()=>Jt,
            Ray: ()=>ts,
            RealisticSolver: ()=>ar,
            Rectangle: ()=>Ps,
            RemoveEvent: ()=>si,
            RemovedComponent: ()=>oi,
            Repeat: ()=>Bs,
            RepeatForever: ()=>ks,
            Resolution: ()=>Ci,
            Resource: ()=>et,
            ResourceEvents: ()=>tt,
            RotateBy: ()=>tn,
            RotateByWithOptions: ()=>Js,
            RotateTo: ()=>Ks,
            RotateToWithOptions: ()=>js,
            RotationType: ()=>h,
            ScaleBy: ()=>an,
            ScaleByWithOptions: ()=>on,
            ScaleTo: ()=>nn,
            ScaleToWithOptions: ()=>sn,
            Scene: ()=>qr,
            SceneEvents: ()=>Gr,
            Screen: ()=>Ti,
            ScreenAppender: ()=>z,
            ScreenElement: ()=>Pn,
            ScreenEvents: ()=>Ai,
            ScreenShader: ()=>Yr,
            ScrollPreventionMode: ()=>mo,
            Semaphore: ()=>_a,
            SeparatingAxis: ()=>ps,
            SeparationInfo: ()=>gs,
            Shader: ()=>Tt,
            Shape: ()=>Cs,
            Side: ()=>D,
            Slide: ()=>ea,
            SolverStrategy: ()=>Xi,
            Sound: ()=>zi,
            SoundEvents: ()=>Li,
            SparseHashGrid: ()=>gr,
            SparseHashGridCollisionProcessor: ()=>yr,
            SpatialPartitionStrategy: ()=>os,
            Sprite: ()=>rt,
            SpriteFont: ()=>_t,
            SpriteSheet: ()=>pt,
            StandardClock: ()=>ro,
            StateMachine: ()=>Ri,
            StrategyContainer: ()=>zn,
            Stream: ()=>qo,
            System: ()=>jn,
            SystemManager: ()=>ir,
            SystemPriority: ()=>Zn,
            SystemType: ()=>$n,
            TagQuery: ()=>Jn,
            TestClock: ()=>oo,
            Text: ()=>ge,
            TextAlign: ()=>ee,
            TextureLoader: ()=>ct,
            Tile: ()=>Ln,
            TileMap: ()=>kn,
            TileMapEvents: ()=>Bn,
            TiledAnimation: ()=>oa,
            TiledSprite: ()=>gt,
            Timer: ()=>En,
            Toaster: ()=>ho,
            Transform: ()=>qt,
            TransformComponent: ()=>$t,
            Transition: ()=>Qo,
            TreeNode: ()=>Qi,
            Trigger: ()=>Yn,
            TriggerEvents: ()=>Xn,
            TwoPI: ()=>m,
            Util: ()=>l,
            Vector: ()=>E,
            VectorView: ()=>Gt,
            VertexBuffer: ()=>St,
            VertexLayout: ()=>Pt,
            VerticalFirst: ()=>ss,
            VisibleEvent: ()=>ze,
            WebAudio: ()=>Pi,
            WebAudioInstance: ()=>Fi,
            WheelDeltaMode: ()=>Lr,
            WheelEvent: ()=>Br,
            World: ()=>sr,
            approximatelyEqual: ()=>y,
            assert: ()=>bo,
            canonicalizeAngle: ()=>b,
            clamp: ()=>w,
            coroutine: ()=>Ko,
            createId: ()=>u,
            frac: ()=>v,
            getDefaultPhysicsConfig: ()=>as,
            hasGraphicsTick: ()=>pe,
            hasOnAdd: ()=>Uo,
            hasOnInitialize: ()=>Do,
            hasOnPostUpdate: ()=>zo,
            hasOnPreUpdate: ()=>ko,
            hasOnRemove: ()=>Oo,
            hasPostDraw: ()=>No,
            hasPreDraw: ()=>Ho,
            has_add: ()=>Fo,
            has_initialize: ()=>Ro,
            has_postupdate: ()=>Lo,
            has_preupdate: ()=>Bo,
            has_remove: ()=>Mo,
            inverseLerp: ()=>Os,
            inverseLerpVector: ()=>Hs,
            isActor: ()=>Cn,
            isAddedComponent: ()=>ri,
            isComponentCtor: ()=>Xt,
            isLoaderConstructor: ()=>Oi,
            isMoveByOptions: ()=>Gs,
            isMoveToOptions: ()=>Xs,
            isRemovedComponent: ()=>ai,
            isRotateByOptions: ()=>Qs,
            isRotateToOptions: ()=>$s,
            isScaleByOptions: ()=>rn,
            isScaleToOptions: ()=>en,
            isSceneConstructor: ()=>Vr,
            isScreenElement: ()=>Sn,
            isSystemConstructor: ()=>er,
            lerp: ()=>Ls,
            lerpAngle: ()=>zs,
            lerpVector: ()=>Us,
            maxMessages: ()=>aa,
            nextActionId: ()=>Ds,
            obsolete: ()=>da,
            parseImageFiltering: ()=>ht,
            parseImageWrapping: ()=>lt,
            pixelSnapEpsilon: ()=>fi,
            randomInRange: ()=>S,
            randomIntInRange: ()=>P,
            range: ()=>T,
            remap: ()=>Ns,
            remapVector: ()=>Ws,
            resetObsoleteCounter: ()=>la,
            sign: ()=>x,
            toDegrees: ()=>C,
            toRadians: ()=>A,
            vec: ()=>I,
            webgl: ()=>n
        });
        var n = {};
        i.r(n), i.d(n, {
            getAttributeComponentSize: ()=>bt,
            getAttributePointerType: ()=>Ct,
            getGLTypeFromSource: ()=>yt,
            getGlTypeSizeBytes: ()=>xt,
            getMaxShaderComplexity: ()=>At,
            isAttributeInSource: ()=>wt
        });
        var r = {};
        i.r(r), i.d(r, {
            circle: ()=>ce,
            line: ()=>oe,
            point: ()=>ae,
            roundRect: ()=>le,
            vector: ()=>he
        });
        var o = {};
        i.r(o), i.d(o, {
            ActionCompleteEvent: ()=>ei,
            ActionStartEvent: ()=>ti,
            ActivateEvent: ()=>Ze,
            AddEvent: ()=>ii,
            CollisionEndEvent: ()=>Xe,
            CollisionPostSolveEvent: ()=>Ve,
            CollisionPreSolveEvent: ()=>Ge,
            CollisionStartEvent: ()=>qe,
            ContactEndEvent: ()=>We,
            ContactStartEvent: ()=>Ne,
            DeactivateEvent: ()=>$e,
            EnterTriggerEvent: ()=>Qe,
            EnterViewPortEvent: ()=>Ke,
            EventTypes: ()=>re,
            ExitTriggerEvent: ()=>Je,
            ExitViewPortEvent: ()=>je,
            GameEvent: ()=>me,
            GameStartEvent: ()=>ye,
            GameStopEvent: ()=>be,
            GamepadAxisEvent: ()=>Le,
            GamepadButtonEvent: ()=>ke,
            GamepadConnectEvent: ()=>De,
            GamepadDisconnectEvent: ()=>Be,
            HiddenEvent: ()=>Ue,
            InitializeEvent: ()=>Ye,
            KillEvent: ()=>ve,
            PostCollisionEvent: ()=>He,
            PostDebugDrawEvent: ()=>Ee,
            PostDrawEvent: ()=>Ae,
            PostFrameEvent: ()=>Me,
            PostKillEvent: ()=>we,
            PostTransformDrawEvent: ()=>Se,
            PostUpdateEvent: ()=>Re,
            PreCollisionEvent: ()=>Oe,
            PreDebugDrawEvent: ()=>Pe,
            PreDrawEvent: ()=>Ce,
            PreFrameEvent: ()=>Fe,
            PreKillEvent: ()=>xe,
            PreTransformDrawEvent: ()=>Te,
            PreUpdateEvent: ()=>Ie,
            RemoveEvent: ()=>si,
            VisibleEvent: ()=>ze
        });
        var a, h, l = {};
        function c() {
            if ("undefined" == typeof window && (window = {
                audioContext: function() {}
            }), "undefined" == typeof window || window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setInterval(t, 1e3 / 60);
            }), "undefined" == typeof window || window.cancelAnimationFrame || (window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function() {}), "undefined" != typeof window && !window.AudioContext) {
                if (window.webkitAudioContext) {
                    const t = window.webkitAudioContext.prototype.decodeAudioData;
                    window.webkitAudioContext.prototype.decodeAudioData = function(e) {
                        return new Promise((i, s)=>{
                            t.call(this, e, i, s);
                        });
                    };
                }
                window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext;
            }
            "undefined" == typeof window || window.devicePixelRatio || (window.devicePixelRatio = window.devicePixelRatio || 1), "undefined" == typeof window || window.requestIdleCallback || (window.requestIdleCallback = window.requestIdleCallback || function(t) {
                const e = Date.now();
                return setTimeout(function() {
                    t({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - e));
                        }
                    });
                }, 1);
            }, window.cancelIdleCallback = window.cancelIdleCallback || function(t) {
                clearTimeout(t);
            });
        }
        i.r(l), i.d(l, {
            ConsoleAppender: ()=>L,
            DrawUtil: ()=>r,
            EasingFunctions: ()=>Rs,
            LogLevel: ()=>M,
            Logger: ()=>k,
            Observable: ()=>Zt,
            ScreenAppender: ()=>z,
            addItemToArray: ()=>H,
            contains: ()=>W,
            delay: ()=>V,
            fail: ()=>G,
            getPosition: ()=>O,
            isObject: ()=>X,
            mergeDeep: ()=>Y,
            omit: ()=>q,
            removeItemFromArray: ()=>N
        });
        class d {
            static useCanvasGraphicsContext() {
                d.enable("use-canvas-context");
            }
            static useLegacyImageRenderer() {
                d.enable("use-legacy-image-renderer");
            }
            static freeze() {
                d._FROZEN = !0;
            }
            static _reset() {
                d._FROZEN = !1, d._FLAGS = {};
            }
            static enable(t) {
                if (this._FROZEN) throw Error("Feature flags can only be enabled before Engine constructor time");
                d._FLAGS[t] = !0;
            }
            static disable(t) {
                if (this._FROZEN) throw Error("Feature flags can only be disabled before Engine constructor time");
                d._FLAGS[t] = !1;
            }
            static isEnabled(t) {
                return !!d._FLAGS[t];
            }
            static show() {
                return Object.keys(d._FLAGS);
            }
        }
        function u(t, e) {
            return {
                type: t,
                value: e
            };
        }
        d._FROZEN = !1, d._FLAGS = {};
        class _ {
            constructor(){
                this._isCompleted = !1, this.promise = new Promise((t, e)=>{
                    this._resolver = t, this._rejecter = e;
                });
            }
            get isCompleted() {
                return this._isCompleted;
            }
            resolve(t) {
                this._isCompleted || (this._isCompleted = !0, this._resolver(t));
            }
            reject(t) {
                this._isCompleted || (this._isCompleted = !0, this._rejecter(t));
            }
        }
        class g {
            constructor(){
                this._paused = !1, this._empty = !0, this._listeners = {}, this._listenersOnce = {}, this._pipes = [];
            }
            clear() {
                this._listeners = {}, this._listenersOnce = {}, this._pipes.length = 0, this._empty = !0;
            }
            on(t, e) {
                var i;
                return this._empty = !1, this._listeners[t] = null !== (i = this._listeners[t]) && void 0 !== i ? i : [], this._listeners[t].push(e), {
                    close: ()=>this.off(t, e)
                };
            }
            once(t, e) {
                var i;
                return this._empty = !1, this._listenersOnce[t] = null !== (i = this._listenersOnce[t]) && void 0 !== i ? i : [], this._listenersOnce[t].push(e), {
                    close: ()=>this.off(t, e)
                };
            }
            off(t, e) {
                var i, s;
                if (e) {
                    const n = null === (i = this._listeners[t]) || void 0 === i ? void 0 : i.filter((t)=>t !== e);
                    this._listeners[t] = n;
                    const r = null === (s = this._listenersOnce[t]) || void 0 === s ? void 0 : s.filter((t)=>t !== e);
                    this._listenersOnce[t] = r;
                } else delete this._listeners[t];
            }
            emit(t, e) {
                if (this._empty) return;
                if (this._paused) return;
                const i = this._listeners[t];
                if (i) for(let t = 0; t < i.length; t++)i[t](e);
                const s = this._listenersOnce[t];
                if (this._listenersOnce[t] = [], s) for(let t = 0; t < s.length; t++)s[t](e);
                for(let i = 0; i < this._pipes.length; i++)this._pipes[i].emit(t, e);
            }
            pipe(t) {
                if (this === t) throw Error("Cannot pipe to self");
                return this._empty = !1, this._pipes.push(t), {
                    close: ()=>{
                        const e = this._pipes.indexOf(t);
                        e > -1 && this._pipes.splice(e, 1);
                    }
                };
            }
            unpipe(t) {
                const e = this._pipes.indexOf(t);
                e > -1 && this._pipes.splice(e, 1);
            }
            pause() {
                this._paused = !0;
            }
            unpause() {
                this._paused = !1;
            }
        }
        !function(t) {
            t.Canvas = "Canvas", t.Document = "Document";
        }(a || (a = {})), function(t) {
            t.ShortestPath = "shortest-path", t.LongestPath = "longest-path", t.Clockwise = "clockwise", t.CounterClockwise = "counter-clockwise";
        }(h || (h = {}));
        const p = 4294967295;
        class f {
            constructor(t){
                this.seed = t, this._lowerMask = 2147483647, this._upperMask = 2147483648, this._w = 32, this._n = 624, this._m = 397, this._a = 2567483615, this._u = 11, this._s = 7, this._b = 2636928640, this._t = 15, this._c = 4022730752, this._l = 18, this._f = 1812433253, this._mt = new Array(this._n), this._mt[0] = (t || Date.now()) >>> 0;
                for(let t = 1; t < this._n; t++){
                    const e = this._mt[t - 1] ^ this._mt[t - 1] >>> this._w - 2;
                    this._mt[t] = (this._f * ((4294901760 & e) >>> 16) << 16) + this._f * (65535 & e) + t >>> 0;
                }
                this._index = this._n;
            }
            _twist() {
                const t = [
                    0,
                    this._a
                ];
                let e = 0, i = 0;
                for(; i < this._n - this._m; i++)e = this._mt[i] & this._upperMask | this._mt[i + 1] & this._lowerMask, this._mt[i] = this._mt[i + this._m] ^ e >>> 1 ^ t[1 & e] & p;
                for(; i < this._n - 1; i++)e = this._mt[i] & this._upperMask | this._mt[i + 1] & this._lowerMask, this._mt[i] = this._mt[i + (this._m - this._n)] ^ e >>> 1 ^ t[1 & e] & p;
                e = this._mt[this._n - 1] & this._upperMask | this._mt[0] & this._lowerMask, this._mt[this._n - 1] = this._mt[this._m - 1] ^ e >>> 1 ^ t[1 & e] & p, this._index = 0;
            }
            nextInt() {
                this._index >= this._n && this._twist();
                let t = this._mt[this._index++];
                return t ^= t >>> this._u, t ^= t << this._s & this._b, t ^= t << this._t & this._c, t ^= t >>> this._l, t >>> 0;
            }
            next() {
                return this.nextInt() * (1 / 4294967296);
            }
            floating(t, e) {
                return (e - t) * this.next() + t;
            }
            integer(t, e) {
                return Math.floor((e - t + 1) * this.next() + t);
            }
            bool(t = .5) {
                return this.next() <= t;
            }
            pickOne(t) {
                return t[this.integer(0, t.length - 1)];
            }
            pickSet(t, e, i = !1) {
                return i ? this._pickSetWithDuplicates(t, e) : this._pickSetWithoutDuplicates(t, e);
            }
            _pickSetWithoutDuplicates(t, e) {
                if (e > t.length || e < 0) throw new Error("Invalid number of elements to pick, must pick a value 0 < n <= length");
                if (e === t.length) return t;
                const i = new Array(e);
                let s = 0;
                const n = t.slice(0);
                for(; s < e;){
                    const t = this.integer(0, n.length - 1);
                    i[s++] = n[t], n.splice(t, 1);
                }
                return i;
            }
            _pickSetWithDuplicates(t, e) {
                if (e < 0) throw new Error("Invalid number of elements to pick, must pick a value 0 <= n < MAX_INT");
                const i = new Array(e);
                for(let s = 0; s < e; s++)i[s] = this.pickOne(t);
                return i;
            }
            shuffle(t) {
                const e = t.slice(0);
                let i;
                for(let t = 0; t < e.length - 2; t++){
                    const s = this.integer(t, e.length - 1);
                    i = e[t], e[t] = e[s], e[s] = i;
                }
                return e;
            }
            range(t, e, i) {
                const s = new Array(t);
                for(let n = 0; n < t; n++)s[n] = this.integer(e, i);
                return s;
            }
            d4() {
                return this.integer(1, 4);
            }
            d6() {
                return this.integer(1, 6);
            }
            d8() {
                return this.integer(1, 8);
            }
            d10() {
                return this.integer(1, 10);
            }
            d12() {
                return this.integer(1, 12);
            }
            d20() {
                return this.integer(1, 20);
            }
        }
        const m = 2 * Math.PI;
        function v(t) {
            return t >= 0 ? t - Math.floor(t) : t - Math.ceil(t);
        }
        function x(t) {
            return 0 === t ? 0 : t < 0 ? -1 : 1;
        }
        function w(t, e, i) {
            return Math.min(Math.max(e, t), i);
        }
        function y(t, e, i) {
            return Math.abs(t - e) < i;
        }
        function b(t) {
            let e = t;
            if (t >= m) for(; e >= m;)e -= m;
            if (t < 0) for(; e < 0;)e += m;
            return e;
        }
        function C(t) {
            return 180 / Math.PI * t;
        }
        function A(t) {
            return t / 180 * Math.PI;
        }
        const T = (t, e)=>Array.from(new Array(e - t + 1), (e, i)=>i + t);
        function S(t, e, i = new f) {
            return i ? i.floating(t, e) : t + Math.random() * (e - t);
        }
        function P(t, e, i = new f) {
            return i ? i.integer(t, e) : Math.round(S(t, e));
        }
        class E {
            static get Zero() {
                return new E(0, 0);
            }
            static get One() {
                return new E(1, 1);
            }
            static get Half() {
                return new E(.5, .5);
            }
            static get Up() {
                return new E(0, -1);
            }
            static get Down() {
                return new E(0, 1);
            }
            static get Left() {
                return new E(-1, 0);
            }
            static get Right() {
                return new E(1, 0);
            }
            static fromAngle(t) {
                return new E(Math.cos(t), Math.sin(t));
            }
            static isValid(t) {
                return null != t && !isNaN(t.x) && !isNaN(t.y) && t.x !== 1 / 0 && t.y !== 1 / 0 && t.x !== -1 / 0 && t.y !== -1 / 0;
            }
            static distance(t, e) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
            }
            static min(t, e) {
                return new E(Math.min(t.x, e.x), Math.min(t.y, e.y));
            }
            static max(t, e) {
                return new E(Math.max(t.x, e.x), Math.max(t.y, e.y));
            }
            constructor(t, e){
                this._x = 0, this._y = 0, this._x = t, this._y = e;
            }
            get x() {
                return this._x;
            }
            set x(t) {
                this._x = t;
            }
            get y() {
                return this._y;
            }
            set y(t) {
                this._y = t;
            }
            setTo(t, e) {
                this.x = t, this.y = e;
            }
            equals(t, e = E.EQUALS_EPSILON) {
                return Math.abs(this.x - t.x) <= e && Math.abs(this.y - t.y) <= e;
            }
            distance(t) {
                if (!t) return Math.sqrt(this.x * this.x + this.y * this.y);
                const e = this.x - t.x, i = this.y - t.y;
                return Math.sqrt(e * e + i * i);
            }
            squareDistance(t) {
                t || (t = E.Zero);
                const e = this.x - t.x, i = this.y - t.y;
                return e * e + i * i;
            }
            clampMagnitude(t) {
                const e = w(this.magnitude, 0, t);
                return this.magnitude = e, this;
            }
            get size() {
                return this.distance();
            }
            set size(t) {
                const e = this.normalize().scale(t);
                this.setTo(e.x, e.y);
            }
            get magnitude() {
                return this.distance();
            }
            set magnitude(t) {
                this.normalize().scale(t, this);
            }
            normalize() {
                const t = this.distance();
                return 0 === t ? E.Zero : new E(this.x / t, this.y / t);
            }
            average(t) {
                return this.add(t).scale(.5);
            }
            scale(t, e) {
                const i = e || new E(0, 0);
                return t instanceof E ? (i.x = this.x * t.x, i.y = this.y * t.y) : (i.x = this.x * t, i.y = this.y * t), i;
            }
            add(t, e) {
                return e ? (e.x = this.x + t.x, e.y = this.y + t.y, e) : new E(this.x + t.x, this.y + t.y);
            }
            sub(t, e) {
                const i = e || new E(0, 0), s = this.x - t.x, n = this.y - t.y;
                return i.x = s, i.y = n, i;
            }
            addEqual(t) {
                return this.setTo(this.x + t.x, this.y + t.y), this;
            }
            subEqual(t) {
                return this.setTo(this.x - t.x, this.y - t.y), this;
            }
            scaleEqual(t) {
                return this.setTo(this.x * t, this.y * t), this;
            }
            dot(t) {
                return this.x * t.x + this.y * t.y;
            }
            cross(t) {
                return t instanceof E ? this.x * t.y - this.y * t.x : "number" == typeof t ? new E(t * this.y, -t * this.x) : void 0;
            }
            static cross(t, e) {
                return new E(-t * e.y, t * e.x);
            }
            perpendicular() {
                return new E(this.y, -this.x);
            }
            normal() {
                return this.perpendicular().normalize();
            }
            negate() {
                return this.scale(-1);
            }
            toAngle() {
                return b(Math.atan2(this.y, this.x));
            }
            angleBetween(t, e) {
                const i = this.toAngle(), s = b(t);
                let n = 0, r = 0;
                switch(n = s > i ? s - i : (m - i + s) % m, r = (n - m) % m, e){
                    case h.ShortestPath:
                        return Math.abs(n) < Math.abs(r) ? n : r;
                    case h.LongestPath:
                        return Math.abs(n) > Math.abs(r) ? n : r;
                    case h.Clockwise:
                        return n;
                    case h.CounterClockwise:
                        return r;
                }
            }
            rotate(t, e, i) {
                const s = i || new E(0, 0);
                e || (e = new E(0, 0));
                const n = Math.sin(t), r = Math.cos(t), o = r * (this.x - e.x) - n * (this.y - e.y) + e.x, a = n * (this.x - e.x) + r * (this.y - e.y) + e.y;
                return s.x = o, s.y = a, s;
            }
            clone(t) {
                const e = null != t ? t : new E(0, 0);
                return e.x = this.x, e.y = this.y, e;
            }
            toString(t) {
                return t ? `(${this.x.toFixed(t)}, ${this.y.toFixed(t)})` : `(${this.x}, ${this.y})`;
            }
        }
        function I(t, e) {
            return new E(t, e);
        }
        E.EQUALS_EPSILON = .001;
        class R {
            constructor(t, e, i, s){
                this.r = t, this.g = e, this.b = i, this.a = null != s ? s : 1;
            }
            static fromRGB(t, e, i, s) {
                return new R(t, e, i, s);
            }
            static fromRGBString(t) {
                let e = null;
                if (e = t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/i)) {
                    const t = parseInt(e[1], 10), i = parseInt(e[2], 10), s = parseInt(e[3], 10);
                    let n = 1;
                    return e[4] && (n = parseFloat(e[4])), new R(t, i, s, n);
                }
                throw new Error("Invalid rgb/a string: " + t);
            }
            static fromHex(t) {
                let e = null;
                if (e = t.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i)) {
                    const t = parseInt(e[1], 16), i = parseInt(e[2], 16), s = parseInt(e[3], 16);
                    let n = 1;
                    return e[4] && (n = parseInt(e[4], 16) / 255), new R(t, i, s, n);
                }
                throw new Error("Invalid hex string: " + t);
            }
            static fromHSL(t, e, i, s = 1) {
                return new F(t, e, i, s).toRGBA();
            }
            lighten(t = .1) {
                const e = F.fromRGBA(this.r, this.g, this.b, this.a);
                return e.l += (1 - e.l) * t, e.toRGBA();
            }
            darken(t = .1) {
                const e = F.fromRGBA(this.r, this.g, this.b, this.a);
                return e.l -= e.l * t, e.toRGBA();
            }
            saturate(t = .1) {
                const e = F.fromRGBA(this.r, this.g, this.b, this.a);
                return e.s += e.s * t, e.toRGBA();
            }
            desaturate(t = .1) {
                const e = F.fromRGBA(this.r, this.g, this.b, this.a);
                return e.s -= e.s * t, e.toRGBA();
            }
            multiply(t) {
                const e = t.r / 255 * this.r / 255 * 255, i = t.g / 255 * this.g / 255 * 255, s = t.b / 255 * this.b / 255 * 255, n = t.a * this.a;
                return new R(e, i, s, n);
            }
            screen(t) {
                const e = t.invert(), i = t.invert();
                return e.multiply(i).invert();
            }
            invert() {
                return new R(255 - this.r, 255 - this.g, 255 - this.b, 1 - this.a);
            }
            average(t) {
                const e = (t.r + this.r) / 2, i = (t.g + this.g) / 2, s = (t.b + this.b) / 2, n = (t.a + this.a) / 2;
                return new R(e, i, s, n);
            }
            equal(t) {
                return this.toString() === t.toString();
            }
            toString(t = "rgb") {
                switch(t){
                    case "rgb":
                        return this.toRGBA();
                    case "hsl":
                        return this.toHSLA();
                    case "hex":
                        return this.toHex();
                    default:
                        throw new Error("Invalid Color format");
                }
            }
            _componentToHex(t) {
                const e = Math.max(Math.round(t), 0).toString(16);
                return 1 === e.length ? "0" + e : e;
            }
            toHex() {
                let t = "#" + this._componentToHex(this.r) + this._componentToHex(this.g) + this._componentToHex(this.b);
                return 1 !== this.a && (t += this._componentToHex(255 * this.a)), t;
            }
            toRGBA() {
                const t = String(this.r.toFixed(0)) + ", " + String(this.g.toFixed(0)) + ", " + String(this.b.toFixed(0));
                return void 0 !== this.a || null !== this.a ? "rgba(" + t + ", " + String(this.a) + ")" : "rgb(" + t + ")";
            }
            toHSLA() {
                return F.fromRGBA(this.r, this.g, this.b, this.a).toString();
            }
            fillStyle() {
                return this.toString();
            }
            clone(t) {
                const e = t || new R(this.r, this.g, this.b, this.a);
                return e.r = this.r, e.g = this.g, e.b = this.b, e.a = this.a, e;
            }
            static get Black() {
                return R.fromHex("#000000");
            }
            static get White() {
                return R.fromHex("#FFFFFF");
            }
            static get Gray() {
                return R.fromHex("#808080");
            }
            static get LightGray() {
                return R.fromHex("#D3D3D3");
            }
            static get DarkGray() {
                return R.fromHex("#A9A9A9");
            }
            static get Yellow() {
                return R.fromHex("#FFFF00");
            }
            static get Orange() {
                return R.fromHex("#FFA500");
            }
            static get Red() {
                return R.fromHex("#FF0000");
            }
            static get Vermilion() {
                return R.fromHex("#FF5B31");
            }
            static get Rose() {
                return R.fromHex("#FF007F");
            }
            static get Pink() {
                return R.fromHex("#FFC0CB");
            }
            static get Magenta() {
                return R.fromHex("#FF00FF");
            }
            static get Violet() {
                return R.fromHex("#7F00FF");
            }
            static get Purple() {
                return R.fromHex("#800080");
            }
            static get Blue() {
                return R.fromHex("#0000FF");
            }
            static get Azure() {
                return R.fromHex("#007FFF");
            }
            static get Cyan() {
                return R.fromHex("#00FFFF");
            }
            static get Viridian() {
                return R.fromHex("#59978F");
            }
            static get Teal() {
                return R.fromHex("#008080");
            }
            static get Green() {
                return R.fromHex("#00FF00");
            }
            static get Chartreuse() {
                return R.fromHex("#7FFF00");
            }
            static get Transparent() {
                return R.fromHex("#FFFFFF00");
            }
            static get ExcaliburBlue() {
                return R.fromHex("#176BAA");
            }
            static get Brown() {
                return R.fromHex("#964B00");
            }
        }
        class F {
            constructor(t, e, i, s){
                this.h = t, this.s = e, this.l = i, this.a = s;
            }
            static hue2rgb(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
            }
            static fromRGBA(t, e, i, s) {
                t /= 255, e /= 255, i /= 255;
                const n = Math.max(t, e, i), r = Math.min(t, e, i);
                let o, a;
                const h = (n + r) / 2;
                if (n === r) o = a = 0;
                else {
                    const s = n - r;
                    switch(a = h > .5 ? s / (2 - n - r) : s / (n + r), n){
                        case t:
                            o = (e - i) / s + (e < i ? 6 : 0);
                            break;
                        case e:
                            o = (i - t) / s + 2;
                            break;
                        case i:
                            o = (t - e) / s + 4;
                    }
                    o /= 6;
                }
                return new F(o, a, h, s);
            }
            toRGBA() {
                let t, e, i;
                if (0 === this.s) t = e = i = this.l;
                else {
                    const s = this.l < .5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s, n = 2 * this.l - s;
                    t = F.hue2rgb(n, s, this.h + 1 / 3), e = F.hue2rgb(n, s, this.h), i = F.hue2rgb(n, s, this.h - 1 / 3);
                }
                return new R(255 * t, 255 * e, 255 * i, this.a);
            }
            toString() {
                return `hsla(${this.h.toFixed(0)}, ${this.s.toFixed(0)}, ${this.l.toFixed(0)}, ${this.a.toFixed(0)})`;
            }
        }
        var M, D, B;
        !function(t) {
            t[t.Debug = 0] = "Debug", t[t.Info = 1] = "Info", t[t.Warn = 2] = "Warn", t[t.Error = 3] = "Error", t[t.Fatal = 4] = "Fatal";
        }(M || (M = {}));
        class k {
            constructor(){
                if (this._appenders = [], this.defaultLevel = M.Info, this._logOnceSet = new Set, k._INSTANCE) throw new Error("Logger is a singleton");
                return k._INSTANCE = this, k._INSTANCE.addAppender(new L), k._INSTANCE;
            }
            static getInstance() {
                return null == k._INSTANCE && (k._INSTANCE = new k), k._INSTANCE;
            }
            addAppender(t) {
                this._appenders.push(t);
            }
            clearAppenders() {
                this._appenders.length = 0;
            }
            _log(t, e) {
                null == t && (t = this.defaultLevel);
                const i = this._appenders.length;
                for(let s = 0; s < i; s++)t >= this.defaultLevel && this._appenders[s].log(t, e);
            }
            _logOnce(t, e) {
                const i = t + e.join("+");
                this._logOnceSet.has(i) || (this._logOnceSet.add(i), this._log(t, e));
            }
            debug(...t) {
                this._log(M.Debug, t);
            }
            debugOnce(...t) {
                this._logOnce(M.Debug, t);
            }
            info(...t) {
                this._log(M.Info, t);
            }
            infoOnce(...t) {
                this._logOnce(M.Info, t);
            }
            warn(...t) {
                this._log(M.Warn, t);
            }
            warnOnce(...t) {
                this._logOnce(M.Warn, t);
            }
            error(...t) {
                this._log(M.Error, t);
            }
            errorOnce(...t) {
                this._logOnce(M.Error, t);
            }
            fatal(...t) {
                this._log(M.Fatal, t);
            }
            fatalOnce(...t) {
                this._logOnce(M.Fatal, t);
            }
        }
        k._INSTANCE = null;
        class L {
            log(t, e) {
                if (!console && !console.log && console.warn && console.error) return;
                const i = [];
                i.unshift.apply(i, e), i.unshift("[" + M[t] + "] : "), t < M.Warn ? console.log.apply ? console.log.apply(console, i) : console.log(i.join(" ")) : t < M.Error ? console.warn.apply ? console.warn.apply(console, i) : console.warn(i.join(" ")) : console.error.apply ? console.error.apply(console, i) : console.error(i.join(" "));
            }
        }
        class z {
            constructor(t){
                var e, i;
                this._messages = [], this._pos = 10, this._color = R.Black, this._options = t, this.canvas = document.createElement("canvas"), this._ctx = this.canvas.getContext("2d"), this.canvas.style.position = "absolute", this.canvas.style.zIndex = null !== (i = null === (e = t.zIndex) || void 0 === e ? void 0 : e.toString()) && void 0 !== i ? i : "99", document.body.appendChild(this.canvas), this._positionScreenAppenderCanvas(), t.engine.screen.events.on("resize", ()=>{
                    this._positionScreenAppenderCanvas();
                });
            }
            _positionScreenAppenderCanvas() {
                var t, e, i, s;
                const n = this._options;
                this.canvas.width = null !== (t = n.width) && void 0 !== t ? t : n.engine.screen.resolution.width, this.canvas.height = null !== (e = n.height) && void 0 !== e ? e : n.engine.screen.resolution.height, this.canvas.style.position = "absolute";
                const r = n.engine.screen.screenToPageCoordinates(I(0, 0));
                this.canvas.style.left = r.x + "px", this.canvas.style.top = r.y + "px", this._pos = null !== (i = n.xPos) && void 0 !== i ? i : this._pos, this._color = null !== (s = n.color) && void 0 !== s ? s : this._color;
            }
            log(t, e) {
                const i = e.join(",");
                this._ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this._messages.unshift("[" + M[t] + "] : " + i);
                let s = 10;
                this._messages = this._messages.slice(0, 1e3);
                for(let t = 0; t < this._messages.length; t++)this._ctx.fillStyle = this._color.toRGBA(), this._ctx.fillText(this._messages[t], this._pos, s), s += 10;
            }
        }
        !function(t) {
            t.None = "None", t.Top = "Top", t.Bottom = "Bottom", t.Left = "Left", t.Right = "Right";
        }(D || (D = {})), function(t) {
            t.getOpposite = function(e) {
                return e === t.Top ? t.Bottom : e === t.Bottom ? t.Top : e === t.Left ? t.Right : e === t.Right ? t.Left : t.None;
            }, t.fromDirection = function(e) {
                return Math.abs(e.x) >= Math.abs(e.y) ? e.x <= 0 ? t.Left : t.Right : e.y <= 0 ? t.Top : t.Bottom;
            };
        }(D || (D = {}));
        class U {
            constructor(t = 0, e = 0, i = 0, s = 0){
                this._points = [], "object" == typeof t ? (this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom) : "number" == typeof t && (this.left = t, this.top = e, this.right = i, this.bottom = s);
            }
            clone(t) {
                const e = t || new U(0, 0, 0, 0);
                return e.left = this.left, e.right = this.right, e.top = this.top, e.bottom = this.bottom, e;
            }
            reset() {
                this.left = 0, this.top = 0, this.bottom = 0, this.right = 0;
            }
            static getSideFromIntersection(t) {
                return t && t ? Math.abs(t.x) > Math.abs(t.y) ? t.x < 0 ? D.Right : D.Left : t.y < 0 ? D.Bottom : D.Top : D.None;
            }
            static fromPoints(t) {
                let e = 1 / 0, i = 1 / 0, s = -1 / 0, n = -1 / 0;
                for(let r = 0; r < t.length; r++)t[r].x < e && (e = t[r].x), t[r].x > s && (s = t[r].x), t[r].y < i && (i = t[r].y), t[r].y > n && (n = t[r].y);
                return new U(e, i, s, n);
            }
            static fromDimension(t, e, i = E.Half, s = E.Zero) {
                return new U(-t * i.x + s.x, -e * i.y + s.y, t - t * i.x + s.x, e - e * i.y + s.y);
            }
            get width() {
                return this.right - this.left;
            }
            get height() {
                return this.bottom - this.top;
            }
            hasZeroDimensions() {
                return 0 === this.width || 0 === this.height;
            }
            get center() {
                return new E((this.left + this.right) / 2, (this.top + this.bottom) / 2);
            }
            get topLeft() {
                return new E(this.left, this.top);
            }
            get bottomRight() {
                return new E(this.right, this.bottom);
            }
            get topRight() {
                return new E(this.right, this.top);
            }
            get bottomLeft() {
                return new E(this.left, this.bottom);
            }
            translate(t) {
                return new U(this.left + t.x, this.top + t.y, this.right + t.x, this.bottom + t.y);
            }
            rotate(t, e = E.Zero) {
                const i = this.getPoints().map((i)=>i.rotate(t, e));
                return U.fromPoints(i);
            }
            scale(t, e = E.Zero) {
                const i = this.translate(e);
                return new U(i.left * t.x, i.top * t.y, i.right * t.x, i.bottom * t.y);
            }
            transform(t) {
                const e = t.data[0] * this.left, i = t.data[1] * this.left, s = t.data[0] * this.right, n = t.data[1] * this.right, r = t.data[2] * this.top, o = t.data[3] * this.top, a = t.data[2] * this.bottom, h = t.data[3] * this.bottom, l = t.getPosition(), c = Math.min(e, s) + Math.min(r, a) + l.x, d = Math.min(i, n) + Math.min(o, h) + l.y, u = Math.max(e, s) + Math.max(r, a) + l.x, _ = Math.max(i, n) + Math.max(o, h) + l.y;
                return new U({
                    left: c,
                    top: d,
                    right: u,
                    bottom: _
                });
            }
            getPerimeter() {
                return 2 * (this.width + this.height);
            }
            getPoints() {
                return this._left === this.left && this._right === this.right && this._top === this.top && this._bottom === this.bottom || (this._points.length = 0, this._points.push(new E(this.left, this.top)), this._points.push(new E(this.right, this.top)), this._points.push(new E(this.right, this.bottom)), this._points.push(new E(this.left, this.bottom)), this._left = this.left, this._right = this.right, this._top = this.top, this._bottom = this.bottom), this._points;
            }
            rayCast(t, e = 1 / 0) {
                let i = -1 / 0, s = 1 / 0;
                const n = 0 === t.dir.x ? Number.MAX_VALUE : 1 / t.dir.x, r = 0 === t.dir.y ? Number.MAX_VALUE : 1 / t.dir.y, o = (this.left - t.pos.x) * n, a = (this.right - t.pos.x) * n;
                i = Math.min(o, a), s = Math.max(o, a);
                const h = (this.top - t.pos.y) * r, l = (this.bottom - t.pos.y) * r;
                return i = Math.max(i, Math.min(h, l)), s = Math.min(s, Math.max(h, l)), s >= Math.max(0, i) && i < e;
            }
            rayCastTime(t, e = 1 / 0) {
                let i = -1 / 0, s = 1 / 0;
                const n = 0 === t.dir.x ? Number.MAX_VALUE : 1 / t.dir.x, r = 0 === t.dir.y ? Number.MAX_VALUE : 1 / t.dir.y, o = (this.left - t.pos.x) * n, a = (this.right - t.pos.x) * n;
                i = Math.min(o, a), s = Math.max(o, a);
                const h = (this.top - t.pos.y) * r, l = (this.bottom - t.pos.y) * r;
                return i = Math.max(i, Math.min(h, l)), s = Math.min(s, Math.max(h, l)), s >= Math.max(0, i) && i < e ? i : -1;
            }
            contains(t) {
                return t instanceof E ? this.left <= t.x && this.top <= t.y && t.y <= this.bottom && t.x <= this.right : t instanceof U && this.left <= t.left && this.top <= t.top && t.bottom <= this.bottom && t.right <= this.right;
            }
            combine(t, e) {
                const i = e || new U(0, 0, 0, 0), s = Math.min(this.left, t.left), n = Math.min(this.top, t.top), r = Math.max(this.right, t.right), o = Math.max(this.bottom, t.bottom);
                return i.left = s, i.top = n, i.right = r, i.bottom = o, i;
            }
            get dimensions() {
                return new E(this.width, this.height);
            }
            overlaps(t, e) {
                const i = e || 0;
                if (t.hasZeroDimensions()) return this.contains(t);
                if (this.hasZeroDimensions()) return t.contains(this);
                const s = this.combine(t);
                return s.width + i < t.width + this.width && s.height + i < t.height + this.height;
            }
            intersect(t) {
                const e = this.combine(t);
                if (e.width < t.width + this.width && e.height < t.height + this.height && !e.dimensions.equals(t.dimensions) && !e.dimensions.equals(this.dimensions)) {
                    let e = 0;
                    e = this.right >= t.left && this.right <= t.right ? t.left - this.right : t.right - this.left;
                    let i = 0;
                    return i = this.top <= t.bottom && this.top >= t.top ? t.bottom - this.top : t.top - this.bottom, Math.abs(e) < Math.abs(i) ? new E(e, 0) : new E(0, i);
                }
                if (e.dimensions.equals(t.dimensions) || e.dimensions.equals(this.dimensions)) {
                    let e = 0;
                    e = this.width - t.width >= 0 ? this.right - t.right <= t.left - this.left ? t.left - this.right : t.right - this.left : t.right - this.right <= this.left - t.left ? this.left - t.right : this.right - t.left;
                    let i = 0;
                    return i = this.height - t.height >= 0 ? this.bottom - t.bottom <= t.top - this.top ? t.top - this.bottom : t.bottom - this.top : t.bottom - this.bottom <= this.top - t.top ? this.top - t.bottom : this.bottom - t.top, Math.abs(e) < Math.abs(i) ? new E(e, 0) : new E(0, i);
                }
                return null;
            }
            intersectWithSide(t) {
                const e = this.intersect(t);
                return U.getSideFromIntersection(e);
            }
            draw(t, e = R.Yellow) {
                t.debug.drawRect(this.left, this.top, this.width, this.height, {
                    color: e
                });
            }
        }
        function O(t) {
            if (t && t.getBoundingClientRect) {
                const e = t.getBoundingClientRect();
                return I(e.x + window.scrollX, e.y + window.scrollY);
            }
            return E.Zero;
        }
        function H(t, e) {
            return -1 === e.indexOf(t) && (e.push(t), !0);
        }
        function N(t, e) {
            let i = -1;
            return (i = e.indexOf(t)) > -1 && (e.splice(i, 1), !0);
        }
        function W(t, e) {
            for(let i = 0; i < t.length; i++)if (t[i] === e) return !0;
            return !1;
        }
        function G(t) {
            throw new Error(t);
        }
        function V(t, e) {
            var i;
            const s = new _;
            return (null !== (i = null == e ? void 0 : e.schedule.bind(e)) && void 0 !== i ? i : setTimeout)(()=>{
                s.resolve();
            }, t), s.promise;
        }
        function q(t, e) {
            const i = {};
            for(const s in t)e.includes(s) || (i[s] = t[s]);
            return i;
        }
        function X(t) {
            return t && "object" == typeof t && !Array.isArray(t);
        }
        function Y(t, ...e) {
            if (!e.length) return t;
            const i = e.shift();
            if (X(t) && X(i)) for(const e in i)X(i[e]) ? (t[e] || Object.assign(t, {
                [e]: {}
            }), Y(t[e], i[e])) : Object.assign(t, {
                [e]: i[e]
            });
            return Y(t, ...e);
        }
        !function(t) {
            t[t.X = 12] = "X", t[t.Y = 13] = "Y";
        }(B || (B = {}));
        class Z {
            constructor(){
                this.data = new Float32Array(16), this._scaleX = 1, this._scaleSignX = 1, this._scaleY = 1, this._scaleSignY = 1;
            }
            static ortho(t, e, i, s, n, r) {
                const o = new Z;
                return o.data[0] = 2 / (e - t), o.data[1] = 0, o.data[2] = 0, o.data[3] = 0, o.data[4] = 0, o.data[5] = 2 / (s - i), o.data[6] = 0, o.data[7] = 0, o.data[8] = 0, o.data[9] = 0, o.data[10] = -2 / (r - n), o.data[11] = 0, o.data[12] = -(e + t) / (e - t), o.data[13] = -(s + i) / (s - i), o.data[14] = -(r + n) / (r - n), o.data[15] = 1, o;
            }
            clone(t) {
                const e = t || new Z;
                return e.data[0] = this.data[0], e.data[1] = this.data[1], e.data[2] = this.data[2], e.data[3] = this.data[3], e.data[4] = this.data[4], e.data[5] = this.data[5], e.data[6] = this.data[6], e.data[7] = this.data[7], e.data[8] = this.data[8], e.data[9] = this.data[9], e.data[10] = this.data[10], e.data[11] = this.data[11], e.data[12] = this.data[12], e.data[13] = this.data[13], e.data[14] = this.data[14], e.data[15] = this.data[15], e;
            }
            toDOMMatrix() {
                return new DOMMatrix([
                    ...this.data
                ]);
            }
            static fromFloat32Array(t) {
                const e = new Z;
                return e.data = t, e;
            }
            static identity() {
                const t = new Z;
                return t.data[0] = 1, t.data[1] = 0, t.data[2] = 0, t.data[3] = 0, t.data[4] = 0, t.data[5] = 1, t.data[6] = 0, t.data[7] = 0, t.data[8] = 0, t.data[9] = 0, t.data[10] = 1, t.data[11] = 0, t.data[12] = 0, t.data[13] = 0, t.data[14] = 0, t.data[15] = 1, t;
            }
            reset() {
                const t = this;
                return t.data[0] = 1, t.data[1] = 0, t.data[2] = 0, t.data[3] = 0, t.data[4] = 0, t.data[5] = 1, t.data[6] = 0, t.data[7] = 0, t.data[8] = 0, t.data[9] = 0, t.data[10] = 1, t.data[11] = 0, t.data[12] = 0, t.data[13] = 0, t.data[14] = 0, t.data[15] = 1, t;
            }
            static translation(t, e) {
                const i = Z.identity();
                return i.data[12] = t, i.data[13] = e, i;
            }
            static scale(t, e) {
                const i = Z.identity();
                return i.data[0] = t, i.data[5] = e, i.data[10] = 1, i.data[15] = 1, i;
            }
            static rotation(t) {
                const e = Z.identity();
                return e.data[0] = Math.cos(t), e.data[4] = -Math.sin(t), e.data[1] = Math.sin(t), e.data[5] = Math.cos(t), e;
            }
            multiply(t, e) {
                if (t instanceof E) {
                    const i = e || new E(0, 0), s = t, n = s.x * this.data[0] + s.y * this.data[4] + this.data[12], r = s.x * this.data[1] + s.y * this.data[5] + this.data[13];
                    return i.x = n, i.y = r, i;
                }
                {
                    const i = e || new Z, s = t, n = this.data[0], r = this.data[1], o = this.data[2], a = this.data[3], h = this.data[4], l = this.data[5], c = this.data[6], d = this.data[7], u = this.data[8], _ = this.data[9], g = this.data[10], p = this.data[11], f = this.data[12], m = this.data[13], v = this.data[14], w = this.data[15], y = s.data[0], b = s.data[1], C = s.data[2], A = s.data[3], T = s.data[4], S = s.data[5], P = s.data[6], E = s.data[7], I = s.data[8], R = s.data[9], F = s.data[10], M = s.data[11], D = s.data[12], B = s.data[13], k = s.data[14], L = s.data[15];
                    i.data[0] = n * y + h * b + u * C + f * A, i.data[1] = r * y + l * b + _ * C + m * A, i.data[2] = o * y + c * b + g * C + v * A, i.data[3] = a * y + d * b + p * C + w * A, i.data[4] = n * T + h * S + u * P + f * E, i.data[5] = r * T + l * S + _ * P + m * E, i.data[6] = o * T + c * S + g * P + v * E, i.data[7] = a * T + d * S + p * P + w * E, i.data[8] = n * I + h * R + u * F + f * M, i.data[9] = r * I + l * R + _ * F + m * M, i.data[10] = o * I + c * R + g * F + v * M, i.data[11] = a * I + d * R + p * F + w * M, i.data[12] = n * D + h * B + u * k + f * L, i.data[13] = r * D + l * B + _ * k + m * L, i.data[14] = o * D + c * B + g * k + v * L, i.data[15] = a * D + d * B + p * k + w * L;
                    const z = this.getScale();
                    return i._scaleSignX = x(z.x) * x(i._scaleSignX), i._scaleSignY = x(z.y) * x(i._scaleSignY), i;
                }
            }
            translate(t, e) {
                const i = this.data[0], s = this.data[1], n = this.data[2], r = this.data[3], o = this.data[4], a = this.data[5], h = this.data[6], l = this.data[7], c = this.data[8], d = this.data[9], u = this.data[10], _ = this.data[11], g = this.data[12], p = this.data[13], f = this.data[14], m = this.data[15];
                return this.data[12] = i * t + o * e + 0 * c + 1 * g, this.data[13] = s * t + a * e + 0 * d + 1 * p, this.data[14] = n * t + h * e + 0 * u + 1 * f, this.data[15] = r * t + l * e + 0 * _ + 1 * m, this;
            }
            setPosition(t, e) {
                this.data[12] = t, this.data[13] = e;
            }
            getPosition() {
                return I(this.data[12], this.data[13]);
            }
            rotate(t) {
                const e = this.data[0], i = this.data[1], s = this.data[2], n = this.data[3], r = this.data[4], o = this.data[5], a = this.data[6], h = this.data[7], l = Math.sin(t), c = Math.cos(t);
                return this.data[0] = c * e + l * r, this.data[1] = c * i + l * o, this.data[2] = c * s + l * a, this.data[3] = c * n + l * h, this.data[4] = c * r - l * e, this.data[5] = c * o - l * i, this.data[6] = c * a - l * s, this.data[7] = c * h - l * n, this;
            }
            scale(t, e) {
                const i = this.data[0], s = this.data[1], n = this.data[2], r = this.data[3], o = this.data[4], a = this.data[5], h = this.data[6], l = this.data[7];
                return this.data[0] = i * t, this.data[1] = s * t, this.data[2] = n * t, this.data[3] = r * t, this.data[4] = o * e, this.data[5] = a * e, this.data[6] = h * e, this.data[7] = l * e, this;
            }
            setRotation(t) {
                const e = this.getScale(), i = Math.sin(t), s = Math.cos(t);
                this.data[0] = s * e.x, this.data[1] = i * e.y, this.data[4] = -i * e.x, this.data[5] = s * e.y;
            }
            getRotation() {
                return b(Math.atan2(this.data[1] / this.getScaleY(), this.data[0] / this.getScaleX()));
            }
            getScaleX() {
                const t = I(this.data[0], this.data[4]).magnitude;
                return this._scaleSignX * t;
            }
            getScaleY() {
                const t = I(this.data[1], this.data[5]).magnitude;
                return this._scaleSignY * t;
            }
            getScale() {
                return I(this.getScaleX(), this.getScaleY());
            }
            setScaleX(t) {
                if (this._scaleX === t) return;
                this._scaleSignX = x(t);
                const e = I(this.data[0] * this._scaleSignX, this.data[4] * this._scaleSignX).normalize();
                this.data[0] = e.x * t, this.data[4] = e.y * t, this._scaleX = t;
            }
            setScaleY(t) {
                if (this._scaleY === t) return;
                this._scaleSignY = x(t);
                const e = I(this.data[1] * this._scaleSignY, this.data[5] * this._scaleSignY).normalize();
                this.data[1] = e.x * t, this.data[5] = e.y * t, this._scaleY = t;
            }
            setScale(t) {
                this.setScaleX(t.x), this.setScaleY(t.y);
            }
            getBasisDeterminant() {
                return this.data[0] * this.data[5] - this.data[1] * this.data[4];
            }
            getAffineInverse(t) {
                const e = 1 / this.getBasisDeterminant(), i = this.data[0], s = this.data[4], n = this.data[1], r = this.data[5], o = t || Z.identity();
                o.data[0] = r * e, o.data[1] = -n * e, o.data[4] = -s * e, o.data[5] = i * e;
                const a = this.data[12], h = this.data[13];
                return o.data[12] = -(a * o.data[0] + h * o.data[4]), o.data[13] = -(a * o.data[1] + h * o.data[5]), o;
            }
            isIdentity() {
                return 1 === this.data[0] && 0 === this.data[1] && 0 === this.data[2] && 0 === this.data[3] && 0 === this.data[4] && 1 === this.data[5] && 0 === this.data[6] && 0 === this.data[7] && 0 === this.data[8] && 0 === this.data[9] && 1 === this.data[10] && 0 === this.data[11] && 0 === this.data[12] && 0 === this.data[13] && 0 === this.data[14] && 1 === this.data[15];
            }
            toString() {
                return `\n[${this.data[0]} ${this.data[4]} ${this.data[8]} ${this.data[12]}]\n[${this.data[1]} ${this.data[5]} ${this.data[9]} ${this.data[13]}]\n[${this.data[2]} ${this.data[6]} ${this.data[10]} ${this.data[14]}]\n[${this.data[3]} ${this.data[7]} ${this.data[11]} ${this.data[15]}]\n`;
            }
        }
        class $ {
            constructor(){
                this.data = new Float64Array(6), this._scale = new Float64Array([
                    1,
                    1
                ]), this._scaleSignX = 1, this._scaleSignY = 1;
            }
            toDOMMatrix() {
                return new DOMMatrix([
                    ...this.data
                ]);
            }
            static identity() {
                const t = new $;
                return t.data[0] = 1, t.data[1] = 0, t.data[2] = 0, t.data[3] = 1, t.data[4] = 0, t.data[5] = 0, t;
            }
            static translation(t, e) {
                const i = $.identity();
                return i.data[4] = t, i.data[5] = e, i;
            }
            static scale(t, e) {
                const i = $.identity();
                return i.data[0] = t, i.data[3] = e, i._scale[0] = t, i._scale[1] = e, i;
            }
            static rotation(t) {
                const e = $.identity();
                return e.data[0] = Math.cos(t), e.data[1] = Math.sin(t), e.data[2] = -Math.sin(t), e.data[3] = Math.cos(t), e;
            }
            setPosition(t, e) {
                this.data[4] = t, this.data[5] = e;
            }
            getPosition() {
                return I(this.data[4], this.data[5]);
            }
            rotate(t) {
                const e = this.data[0], i = this.data[1], s = this.data[2], n = this.data[3], r = Math.sin(t), o = Math.cos(t);
                return this.data[0] = o * e + r * s, this.data[1] = o * i + r * n, this.data[2] = o * s - r * e, this.data[3] = o * n - r * i, this;
            }
            translate(t, e) {
                const i = this.data[0], s = this.data[1], n = this.data[2], r = this.data[3], o = this.data[4], a = this.data[5];
                return this.data[4] = i * t + n * e + o, this.data[5] = s * t + r * e + a, this;
            }
            scale(t, e) {
                const i = this.data[0], s = this.data[1], n = this.data[2], r = this.data[3];
                return this.data[0] = i * t, this.data[1] = s * t, this.data[2] = n * e, this.data[3] = r * e, this._scale[0] = t, this._scale[1] = e, this._scaleSignX = x(t), this._scaleSignY = x(e), this;
            }
            determinant() {
                return this.data[0] * this.data[3] - this.data[1] * this.data[2];
            }
            inverse(t) {
                const e = this.determinant();
                let i = e;
                0 !== e && (i = 1 / e);
                const s = this.data[0], n = this.data[2], r = this.data[1], o = this.data[3], a = t || $.identity();
                a.data[0] = o * i, a.data[1] = -r * i, a.data[2] = -n * i, a.data[3] = s * i;
                const h = this.data[4], l = this.data[5];
                return a.data[4] = -(h * a.data[0] + l * a.data[2]), a.data[5] = -(h * a.data[1] + l * a.data[3]), a;
            }
            multiply(t, e) {
                if (t instanceof E) {
                    const i = e || new E(0, 0), s = t, n = s.x * this.data[0] + s.y * this.data[2] + this.data[4], r = s.x * this.data[1] + s.y * this.data[3] + this.data[5];
                    return i.x = n, i.y = r, i;
                }
                {
                    const i = e || new $, s = t, n = this.data[0], r = this.data[1], o = this.data[2], a = this.data[3], h = this.data[4], l = this.data[5], c = s.data[0], d = s.data[1], u = s.data[2], _ = s.data[3], g = s.data[4], p = s.data[5];
                    i.data[0] = n * c + o * d, i.data[1] = r * c + a * d, i.data[2] = n * u + o * _, i.data[3] = r * u + a * _, i.data[4] = n * g + o * p + h, i.data[5] = r * g + a * p + l;
                    const f = this._scaleSignX, m = this._scaleSignY;
                    return i._scaleSignX = f * x(i._scaleSignX), i._scaleSignY = m * x(i._scaleSignY), i;
                }
            }
            multiplyQuadInPlace(t) {
                const e = t[0] * this.data[0] + t[1] * this.data[2] + this.data[4], i = t[0] * this.data[1] + t[1] * this.data[3] + this.data[5];
                t[0] = e, t[1] = i;
                const s = t[2] * this.data[0] + t[3] * this.data[2] + this.data[4], n = t[2] * this.data[1] + t[3] * this.data[3] + this.data[5];
                t[2] = s, t[3] = n;
                const r = t[4] * this.data[0] + t[5] * this.data[2] + this.data[4], o = t[4] * this.data[1] + t[5] * this.data[3] + this.data[5];
                t[4] = r, t[5] = o;
                const a = t[6] * this.data[0] + t[7] * this.data[2] + this.data[4], h = t[6] * this.data[1] + t[7] * this.data[3] + this.data[5];
                t[6] = a, t[7] = h;
            }
            to4x4() {
                const t = new Z;
                return t.data[0] = this.data[0], t.data[1] = this.data[1], t.data[2] = 0, t.data[3] = 0, t.data[4] = this.data[2], t.data[5] = this.data[3], t.data[6] = 0, t.data[7] = 0, t.data[8] = 0, t.data[9] = 0, t.data[10] = 1, t.data[11] = 0, t.data[12] = this.data[4], t.data[13] = this.data[5], t.data[14] = 0, t.data[15] = 1, t;
            }
            setRotation(t) {
                const e = this.getScale(), i = Math.sin(t), s = Math.cos(t);
                this.data[0] = s * e.x, this.data[1] = i * e.y, this.data[2] = -i * e.x, this.data[3] = s * e.y;
            }
            getRotation() {
                return b(Math.atan2(this.data[1] / this.getScaleY(), this.data[0] / this.getScaleX()));
            }
            getScaleX() {
                const t = this.data[0] * this.data[0] + this.data[2] * this.data[2];
                return 1 === t ? this._scaleSignX : this._scaleSignX * Math.sqrt(t);
            }
            getScaleY() {
                const t = this.data[1] * this.data[1] + this.data[3] * this.data[3];
                return 1 === t ? this._scaleSignY : this._scaleSignY * Math.sqrt(t);
            }
            getScale() {
                return I(this.getScaleX(), this.getScaleY());
            }
            setScaleX(t) {
                if (t === this._scale[0]) return;
                this._scaleSignX = x(t);
                const e = I(this.data[0] * this._scaleSignX, this.data[2] * this._scaleSignX).normalize();
                this.data[0] = e.x * t, this.data[2] = e.y * t, this._scale[0] = t;
            }
            setScaleY(t) {
                if (t === this._scale[1]) return;
                this._scaleSignY = x(t);
                const e = I(this.data[1] * this._scaleSignY, this.data[3] * this._scaleSignY).normalize();
                this.data[1] = e.x * t, this.data[3] = e.y * t, this._scale[1] = t;
            }
            setScale(t) {
                this.setScaleX(t.x), this.setScaleY(t.y);
            }
            isIdentity() {
                return 1 === this.data[0] && 0 === this.data[1] && 0 === this.data[2] && 1 === this.data[3] && 0 === this.data[4] && 0 === this.data[5];
            }
            reset() {
                const t = this;
                return t.data[0] = 1, t.data[1] = 0, t.data[2] = 0, t.data[3] = 1, t.data[4] = 0, t.data[5] = 0, t;
            }
            clone(t) {
                const e = t || new $;
                return e.data[0] = this.data[0], e.data[1] = this.data[1], e.data[2] = this.data[2], e.data[3] = this.data[3], e.data[4] = this.data[4], e.data[5] = this.data[5], e._scaleSignX = this._scaleSignX, e._scaleSignY = this._scaleSignY, e;
            }
            toString() {
                return `\n[${this.data[0]} ${this.data[2]} ${this.data[4]}]\n[${this.data[1]} ${this.data[3]} ${this.data[5]}]\n[0 0 1]\n`;
            }
        }
        class j {
            constructor(t, e, i = 1){
                this.builder = t, this.cleaner = e, this._pool = [], this._size = 0, this.grow(i);
            }
            grow(t) {
                if (t > 0) {
                    this._size += t;
                    for(let e = 0; e < t; e++)this._pool.push(this.builder());
                }
            }
            rent(t = !1) {
                return 0 === this._pool.length && this.grow(this._size), t ? this.cleaner(this._pool.pop()) : this._pool.pop();
            }
            return(t) {
                this._pool.push(t);
            }
        }
        class K {
            constructor(){
                this._pool = new j(()=>$.identity(), (t)=>t.reset(), 100), this._transforms = [], this._currentTransform = this._pool.rent(!0);
            }
            save() {
                this._transforms.push(this._currentTransform), this._currentTransform = this._currentTransform.clone(this._pool.rent());
            }
            restore() {
                this._pool.return(this._currentTransform), this._currentTransform = this._transforms.pop();
            }
            translate(t, e) {
                return this._currentTransform.translate(t, e);
            }
            rotate(t) {
                return this._currentTransform.rotate(t);
            }
            scale(t, e) {
                return this._currentTransform.scale(t, e);
            }
            reset() {
                this._currentTransform.reset();
            }
            set current(t) {
                this._currentTransform = t;
            }
            get current() {
                return this._currentTransform;
            }
        }
        class Q {
            constructor(){
                this.opacity = 1, this.z = 0, this.tint = R.White, this.material = null;
            }
        }
        class J {
            constructor(){
                this._pool = new j(()=>new Q, (t)=>(t.opacity = 1, t.z = 0, t.tint = R.White, t.material = null, t), 100), this.current = this._pool.rent(!0), this._states = [];
            }
            _cloneState(t) {
                var e;
                return t.opacity = this.current.opacity, t.z = this.current.z, t.tint = null === (e = this.current.tint) || void 0 === e ? void 0 : e.clone(), t.material = this.current.material, t;
            }
            save() {
                this._states.push(this.current), this.current = this._cloneState(this._pool.rent());
            }
            restore() {
                this._pool.return(this.current), this.current = this._states.pop();
            }
        }
        const tt = {
            Complete: "complete",
            Load: "load",
            LoadStart: "loadstart",
            Progress: "progress",
            Error: "error"
        };
        class et {
            constructor(t, e, i = !1){
                this.path = t, this.responseType = e, this.bustCache = i, this.data = null, this.logger = k.getInstance(), this.events = new g;
            }
            isLoaded() {
                return null !== this.data;
            }
            _cacheBust(t) {
                return /\?\w*=\w*/.test(t) ? t += "&__=" + Date.now() : t += "?__=" + Date.now(), t;
            }
            load() {
                return new Promise((t, e)=>{
                    if (null !== this.data) return this.logger.debug("Already have data for resource", this.path), this.events.emit("complete", this.data), void t(this.data);
                    const i = new XMLHttpRequest;
                    i.open("GET", this.bustCache ? this._cacheBust(this.path) : this.path, !0), i.responseType = this.responseType, i.addEventListener("loadstart", (t)=>this.events.emit("loadstart", t)), i.addEventListener("progress", (t)=>this.events.emit("progress", t)), i.addEventListener("error", (t)=>this.events.emit("error", t)), i.addEventListener("load", (t)=>this.events.emit("load", t)), i.addEventListener("load", ()=>{
                        if (0 !== i.status && 200 !== i.status) return this.logger.error("Failed to load resource ", this.path, " server responded with error code", i.status), this.events.emit("error", i.response), void e(new Error(i.statusText));
                        if (i.response instanceof Blob && "text/html" === i.response.type) {
                            const t = `Expected blob (usually image) data from the server when loading ${this.path}, but got HTML content instead!\n\nCheck your server configuration, for example Vite serves static files from the /public folder`;
                            return this.events.emit("error", i.response), void e(new Error(t));
                        }
                        this.data = i.response, this.events.emit("complete", this.data), this.logger.debug("Completed loading resource", this.path), t(this.data);
                    }), i.send();
                });
            }
        }
        function it(t, e) {
            return t && void 0 === t.__isProxy ? new Proxy(t, {
                set: (t, i, s)=>(t[i] !== s && (t[i] = s, "string" == typeof i && "_" !== i[0] && e(t)), !0),
                get: (t, e)=>"__isProxy" === e || t[e]
            }) : t;
        }
        const st = (t = [], e, i)=>({
                get: (s, n)=>"__isProxy" === n || ("object" == typeof s[n] && null != s[n] ? new Proxy(s[n], st([
                        ...t,
                        n
                    ], e, i)) : s[n]),
                set: (t, s, n)=>("string" == typeof s && "_" !== s[0] && e(i), t[s] = n, !0)
            });
        class nt {
            isStale() {
                return this._transformStale;
            }
            get flipHorizontal() {
                return this._flipHorizontal;
            }
            set flipHorizontal(t) {
                this._flipHorizontal = t, this._transformStale = !0;
            }
            get flipVertical() {
                return this._flipVertical;
            }
            set flipVertical(t) {
                this._flipVertical = t, this._transformStale = !0;
            }
            get rotation() {
                return this._rotation;
            }
            set rotation(t) {
                this._rotation = t, this._transformStale = !0;
            }
            get scale() {
                return this._scale;
            }
            set scale(t) {
                this._scale = it(t, ()=>{
                    this._transformStale = !0;
                }), this._transformStale = !0;
            }
            get origin() {
                return this._origin;
            }
            set origin(t) {
                t && (this._origin = it(t, ()=>{
                    this._transformStale = !0;
                })), this._transformStale = !0;
            }
            constructor(t){
                var e, i, s, n, r, o, a;
                this.id = nt._ID++, this.transform = $.identity(), this._transformStale = !0, this.showDebug = !1, this._flipHorizontal = !1, this._flipVertical = !1, this._rotation = 0, this.opacity = 1, this._scale = E.One, this._width = 0, this._height = 0, t && (this.origin = null !== (e = t.origin) && void 0 !== e ? e : this.origin, this.flipHorizontal = null !== (i = t.flipHorizontal) && void 0 !== i ? i : this.flipHorizontal, this.flipVertical = null !== (s = t.flipVertical) && void 0 !== s ? s : this.flipVertical, this.rotation = null !== (n = t.rotation) && void 0 !== n ? n : this.rotation, this.opacity = null !== (r = t.opacity) && void 0 !== r ? r : this.opacity, this.scale = null !== (o = t.scale) && void 0 !== o ? o : this.scale, this.tint = null !== (a = t.tint) && void 0 !== a ? a : this.tint, t.width && (this._width = t.width), t.height && (this._height = t.height));
            }
            cloneGraphicOptions() {
                return {
                    width: this.width / this.scale.x,
                    height: this.height / this.scale.y,
                    origin: this.origin ? this.origin.clone() : void 0,
                    flipHorizontal: this.flipHorizontal,
                    flipVertical: this.flipVertical,
                    rotation: this.rotation,
                    opacity: this.opacity,
                    scale: this.scale ? this.scale.clone() : void 0,
                    tint: this.tint ? this.tint.clone() : void 0
                };
            }
            get width() {
                return Math.abs(this._width * this.scale.x);
            }
            get height() {
                return Math.abs(this._height * this.scale.y);
            }
            set width(t) {
                this._width = t, this._transformStale = !0;
            }
            set height(t) {
                this._height = t, this._transformStale = !0;
            }
            get localBounds() {
                return U.fromDimension(this.width, this.height, E.Zero);
            }
            draw(t, e, i) {
                this._preDraw(t, e, i), this._drawImage(t, 0, 0), this._postDraw(t);
            }
            _preDraw(t, e, i) {
                t.save(), t.translate(e, i), this._transformStale && (this.transform.reset(), this.transform.scale(Math.abs(this.scale.x), Math.abs(this.scale.y)), this._rotate(this.transform), this._flip(this.transform), this._transformStale = !1), t.multiply(this.transform), t.opacity = t.opacity * this.opacity, this.tint && (t.tint = this.tint);
            }
            _rotate(t) {
                var e;
                const i = this.scale.x > 0 ? 1 : -1, s = this.scale.y > 0 ? 1 : -1, n = null !== (e = this.origin) && void 0 !== e ? e : I(this.width / 2, this.height / 2);
                t.translate(n.x, n.y), t.rotate(this.rotation), t.scale(i, s), t.translate(-n.x, -n.y);
            }
            _flip(t) {
                this.flipHorizontal && (t.translate(this.width / this.scale.x, 0), t.scale(-1, 1)), this.flipVertical && (t.translate(0, this.height / this.scale.y), t.scale(1, -1));
            }
            _postDraw(t) {
                this.showDebug && t.debug.drawRect(0, 0, this.width, this.height), t.restore();
            }
        }
        nt._ID = 0;
        class rt extends nt {
            static from(t, e) {
                return new rt({
                    image: t,
                    ...e
                });
            }
            constructor(t){
                var e, i;
                super(t), this._logger = k.getInstance(), this._dirty = !0, this.image = t.image;
                const { width: s, height: n } = t;
                this.sourceView = null !== (e = t.sourceView) && void 0 !== e ? e : {
                    x: 0,
                    y: 0,
                    width: null != s ? s : 0,
                    height: null != n ? n : 0
                }, this.destSize = null !== (i = t.destSize) && void 0 !== i ? i : {
                    width: null != s ? s : 0,
                    height: null != n ? n : 0
                }, this._updateSpriteDimensions(), this.image.ready.then(()=>{
                    this._updateSpriteDimensions();
                });
            }
            get width() {
                return Math.abs(this.destSize.width * this.scale.x);
            }
            get height() {
                return Math.abs(this.destSize.height * this.scale.y);
            }
            set width(t) {
                t /= Math.abs(this.scale.x), this.destSize.width = t, super.width = Math.ceil(this.destSize.width);
            }
            set height(t) {
                t /= Math.abs(this.scale.y), this.destSize.height = t, super.height = Math.ceil(this.destSize.height);
            }
            _updateSpriteDimensions() {
                var t, e, i, s, n, r;
                const { width: o, height: a } = this.image;
                this.sourceView.width = (null === (t = this.sourceView) || void 0 === t ? void 0 : t.width) || o, this.sourceView.height = (null === (e = this.sourceView) || void 0 === e ? void 0 : e.height) || a, this.destSize.width = (null === (i = this.destSize) || void 0 === i ? void 0 : i.width) || (null === (s = this.sourceView) || void 0 === s ? void 0 : s.width) || o, this.destSize.height = (null === (n = this.destSize) || void 0 === n ? void 0 : n.height) || (null === (r = this.sourceView) || void 0 === r ? void 0 : r.height) || a, this.width = Math.ceil(this.destSize.width) * this.scale.x, this.height = Math.ceil(this.destSize.height) * this.scale.y;
            }
            _preDraw(t, e, i) {
                this.image.isLoaded() && this._dirty && (this._dirty = !1, this._updateSpriteDimensions()), super._preDraw(t, e, i);
            }
            _drawImage(t, e, i) {
                this.image.isLoaded() ? t.drawImage(this.image.image, this.sourceView.x, this.sourceView.y, this.sourceView.width, this.sourceView.height, e, i, this.destSize.width, this.destSize.height) : this._logger.warnOnce(`ImageSource ${this.image.path} is not yet loaded and won't be drawn. Please call .load() or include in a Loader.\n\nRead https://excaliburjs.com/docs/imagesource for more information.`);
            }
            clone() {
                return new rt({
                    image: this.image,
                    sourceView: {
                        ...this.sourceView
                    },
                    destSize: {
                        ...this.destSize
                    },
                    ...this.cloneGraphicOptions()
                });
            }
        }
        var ot, at;
        function ht(t) {
            switch(t){
                case ot.Pixel:
                    return ot.Pixel;
                case ot.Blended:
                    return ot.Blended;
                default:
                    return;
            }
        }
        function lt(t) {
            switch(t){
                case at.Clamp:
                    return at.Clamp;
                case at.Repeat:
                    return at.Repeat;
                case at.Mirror:
                    return at.Mirror;
                default:
                    return at.Clamp;
            }
        }
        !function(t) {
            t.Pixel = "Pixel", t.Blended = "Blended";
        }(ot || (ot = {})), function(t) {
            t.Clamp = "Clamp", t.Repeat = "Repeat", t.Mirror = "Mirror";
        }(at || (at = {}));
        class ct {
            constructor(t, e){
                var i;
                this._garbageCollector = e, this._textureMap = new Map, this._collect = (t)=>{
                    var e;
                    if (this._gl) {
                        const i = null !== (e = t.dataset.originalSrc) && void 0 !== e ? e : t.constructor.name;
                        return ct._LOGGER.debug(`WebGL Texture for ${i} collected`), this.delete(t), !0;
                    }
                    return !1;
                }, this._gl = t, ct._MAX_TEXTURE_SIZE = t.getParameter(t.MAX_TEXTURE_SIZE), this._garbageCollector && (ct._LOGGER.debug("WebGL Texture collection interval:", this._garbageCollector.collectionInterval), null === (i = this._garbageCollector.garbageCollector) || void 0 === i || i.registerCollector("texture", this._garbageCollector.collectionInterval, this._collect));
            }
            dispose() {
                for (const [t] of this._textureMap)this.delete(t);
                this._textureMap.clear(), this._gl = null;
            }
            get(t) {
                return this._textureMap.get(t);
            }
            has(t) {
                return this._textureMap.has(t);
            }
            load(t, e, i = !1) {
                var s, n;
                const r = this._gl;
                if (!r) return null;
                const { filtering: o, wrapping: a } = {
                    ...e
                };
                let h, l = null;
                if (this.has(t) && (l = this.get(t)), l) return i && (r.bindTexture(r.TEXTURE_2D, l), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t)), null === (s = this._garbageCollector) || void 0 === s || s.garbageCollector.touch(t), l;
                l = r.createTexture(), ct.checkImageSizeSupportedAndLog(t), r.bindTexture(r.TEXTURE_2D, l), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), a && (h = "string" == typeof a ? {
                    x: a,
                    y: a
                } : {
                    x: a.x,
                    y: a.y
                });
                const { x: c, y: d } = null != h ? h : ct.wrapping;
                switch(c){
                    case at.Clamp:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
                        break;
                    case at.Repeat:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.REPEAT);
                        break;
                    case at.Mirror:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.MIRRORED_REPEAT);
                        break;
                    default:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
                }
                switch(d){
                    case at.Clamp:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
                        break;
                    case at.Repeat:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.REPEAT);
                        break;
                    case at.Mirror:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.MIRRORED_REPEAT);
                        break;
                    default:
                        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
                }
                const u = null != o ? o : ct.filtering;
                return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, u === ot.Pixel ? r.NEAREST : r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, u === ot.Pixel ? r.NEAREST : r.LINEAR), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), this._textureMap.set(t, l), null === (n = this._garbageCollector) || void 0 === n || n.garbageCollector.addCollectableResource("texture", t), l;
            }
            delete(t) {
                const e = this._gl;
                if (e && this.has(t)) {
                    const i = this.get(t);
                    i && (this._textureMap.delete(t), e.deleteTexture(i));
                }
            }
            static checkImageSizeSupportedAndLog(t) {
                var e;
                const i = null !== (e = t.dataset.originalSrc) && void 0 !== e ? e : "internal canvas bitmap";
                return t.width > ct._MAX_TEXTURE_SIZE || t.height > ct._MAX_TEXTURE_SIZE ? (ct._LOGGER.error(`The image [${i}] provided to Excalibur is too large for the device's maximum texture size of (${ct._MAX_TEXTURE_SIZE}x${ct._MAX_TEXTURE_SIZE}) please resize to an image for excalibur to render properly.\n\nImages will likely render as black rectangles.\n\nRead more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`), !1) : ((t.width > 4096 || t.height > 4096) && ct._LOGGER.warn(`The image [${i}] provided to excalibur is too large may not work on all mobile devices, it is recommended you resize images to a maximum (4096x4096).\n\nImages will likely render as black rectangles on some mobile platforms.\n\nRead more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`), !0);
            }
        }
        ct._LOGGER = k.getInstance(), ct.filtering = ot.Blended, ct.wrapping = {
            x: at.Clamp,
            y: at.Clamp
        }, ct._MAX_TEXTURE_SIZE = 4096;
        const dt = {
            Filtering: "filtering",
            WrappingX: "wrapping-x",
            WrappingY: "wrapping-y"
        };
        class ut {
            get width() {
                return this.image.naturalWidth;
            }
            get height() {
                return this.image.naturalHeight;
            }
            isLoaded() {
                return this._src || (this._src = this.data.src), !!this._src;
            }
            get image() {
                return this.data;
            }
            constructor(t, e, i){
                this._logger = k.getInstance(), this.data = new Image, this._readyFuture = new _, this.ready = this._readyFuture.promise, this.path = t;
                let s, n = !1;
                "boolean" == typeof e ? n = e : { filtering: i, wrapping: s, bustCache: n } = {
                    ...e
                }, this._resource = new et(t, "blob", n), this.filtering = null != i ? i : this.filtering, this.wrapping = "string" == typeof s ? {
                    x: s,
                    y: s
                } : null != s ? s : this.wrapping, t.endsWith(".gif") && this._logger.warn(`Use the ex.Gif type to load gifs, you may have mixed results with ${t} in ex.ImageSource. Fully supported: svg, jpg, bmp, and png`);
            }
            static fromHtmlImageElement(t, e) {
                const i = new ut("");
                if (i._src = "image-element", i.data = t, i.data.setAttribute("data-original-src", "image-element"), (null == e ? void 0 : e.filtering) ? i.data.setAttribute(dt.Filtering, null == e ? void 0 : e.filtering) : i.data.setAttribute(dt.Filtering, ot.Blended), null == e ? void 0 : e.wrapping) {
                    let t;
                    t = "string" == typeof e.wrapping ? {
                        x: e.wrapping,
                        y: e.wrapping
                    } : {
                        x: e.wrapping.x,
                        y: e.wrapping.y
                    }, i.data.setAttribute(dt.WrappingX, t.x), i.data.setAttribute(dt.WrappingY, t.y);
                } else i.data.setAttribute(dt.WrappingX, at.Clamp), i.data.setAttribute(dt.WrappingY, at.Clamp);
                return ct.checkImageSizeSupportedAndLog(t), i._readyFuture.resolve(t), i;
            }
            static fromHtmlCanvasElement(t, e) {
                const i = new ut("");
                if (i._src = "canvas-element-blob", i.data.setAttribute("data-original-src", "canvas-element-blob"), (null == e ? void 0 : e.filtering) ? i.data.setAttribute(dt.Filtering, null == e ? void 0 : e.filtering) : i.data.setAttribute(dt.Filtering, ot.Blended), null == e ? void 0 : e.wrapping) {
                    let t;
                    t = "string" == typeof e.wrapping ? {
                        x: e.wrapping,
                        y: e.wrapping
                    } : {
                        x: e.wrapping.x,
                        y: e.wrapping.y
                    }, i.data.setAttribute(dt.WrappingX, t.x), i.data.setAttribute(dt.WrappingY, t.y);
                } else i.data.setAttribute(dt.WrappingX, at.Clamp), i.data.setAttribute(dt.WrappingY, at.Clamp);
                return ct.checkImageSizeSupportedAndLog(t), t.toBlob((t)=>{
                    const e = URL.createObjectURL(t);
                    i.image.onload = ()=>{
                        URL.revokeObjectURL(e), i.data = i.image, i._readyFuture.resolve(i.image);
                    }, i.image.src = e;
                }), i;
            }
            static fromSvgString(t, e) {
                const i = new Blob([
                    t
                ], {
                    type: "image/svg+xml"
                }), s = URL.createObjectURL(i);
                return new ut(s, e);
            }
            get bustCache() {
                return this._resource.bustCache;
            }
            set bustCache(t) {
                this._resource.bustCache = t;
            }
            async load() {
                var t, e, i, s;
                if (this.isLoaded()) return this.data;
                try {
                    let t;
                    if (this.path.includes("data:image/")) t = this.path;
                    else {
                        const e = await this._resource.load();
                        t = URL.createObjectURL(e);
                    }
                    const e = new Image, i = new _;
                    e.onload = ()=>i.resolve(), e.src = t, e.setAttribute("data-original-src", this.path), await i.promise, this.data = e, ct.checkImageSizeSupportedAndLog(this.data);
                } catch (t) {
                    throw `Error loading ImageSource from path '${this.path}' with error [${t.message}]`;
                }
                return this.data.setAttribute(dt.Filtering, this.filtering), this.data.setAttribute(dt.WrappingX, null !== (e = null === (t = this.wrapping) || void 0 === t ? void 0 : t.x) && void 0 !== e ? e : at.Clamp), this.data.setAttribute(dt.WrappingY, null !== (s = null === (i = this.wrapping) || void 0 === i ? void 0 : i.y) && void 0 !== s ? s : at.Clamp), this._readyFuture.resolve(this.data), this.data;
            }
            toSprite(t) {
                return rt.from(this, t);
            }
            unload() {
                this.data = new Image;
            }
        }
        class _t extends nt {
            constructor(t){
                super(t), this._text = "", this.alphabet = "", this.shadow = void 0, this.caseInsensitive = !1, this.spacing = 0, this.lineHeight = void 0, this._logger = k.getInstance();
                const { alphabet: e, spriteSheet: i, caseInsensitive: s, spacing: n, shadow: r, lineHeight: o } = t;
                this.alphabet = e, this.spriteSheet = i, this.caseInsensitive = null != s ? s : this.caseInsensitive, this.spacing = null != n ? n : this.spacing, this.shadow = null != r ? r : this.shadow, this.lineHeight = null != o ? o : this.lineHeight;
            }
            _getCharacterSprites(t) {
                const e = [], i = this.caseInsensitive ? t.toLocaleLowerCase() : t, s = this.caseInsensitive ? this.alphabet.toLocaleLowerCase() : this.alphabet;
                for(let t = 0; t < i.length; t++){
                    const n = i[t];
                    let r = s.indexOf(n);
                    -1 === r && (r = 0, this._logger.warnOnce(`SpriteFont - Cannot find letter '${n}' in configured alphabet '${s}'.`), this._logger.warnOnce("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged."));
                    const o = this.spriteSheet.sprites[r];
                    o ? e.push(o) : (this._logger.warnOnce(`SpriteFont - Cannot find sprite for '${n}' at index '${r}' in configured SpriteSheet`), this._logger.warnOnce("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged."));
                }
                return e;
            }
            measureText(t, e) {
                const i = this._getLinesFromText(t, e), s = i.reduce((t, e)=>t.length > e.length ? t : e), n = this._getCharacterSprites(s);
                let r = 0, o = 0;
                for (const t of n)r += t.width + this.spacing, o = Math.max(o, t.height);
                return U.fromDimension(r * this.scale.x, o * i.length * this.scale.y, E.Zero);
            }
            _drawImage(t, e, i, s) {
                var n;
                let r = 0, o = 0, a = 0;
                const h = this._getLinesFromText(this._text, s);
                for (const s of h){
                    for (const n of this._getCharacterSprites(s))n.draw(t, e + r, i + o), r += n.width + this.spacing, a = Math.max(a, n.height);
                    r = 0, o += null !== (n = this.lineHeight) && void 0 !== n ? n : a;
                }
            }
            render(t, e, i, s, n, r) {
                this._text = e;
                const o = this.measureText(e, r);
                this.width = o.width, this.height = o.height, this.shadow && (t.save(), t.translate(this.shadow.offset.x, this.shadow.offset.y), this._preDraw(t, s, n), this._drawImage(t, 0, 0, r), this._postDraw(t), t.restore()), this._preDraw(t, s, n), this._drawImage(t, 0, 0, r), this._postDraw(t);
            }
            clone() {
                return new _t({
                    alphabet: this.alphabet,
                    spriteSheet: this.spriteSheet,
                    spacing: this.spacing
                });
            }
            _getLinesFromText(t, e) {
                var i;
                if (this._cachedText === t && this._cachedRenderWidth === e && (null === (i = this._cachedLines) || void 0 === i ? void 0 : i.length)) return this._cachedLines;
                const s = t.split("\n");
                if (null == e) return s;
                for(let t = 0; t < s.length; t++){
                    let i = s[t], n = "";
                    if (this.measureText(i).width > e) {
                        for(; this.measureText(i).width > e;)n = i[i.length - 1] + n, i = i.slice(0, -1);
                        s[t] = i, s[t + 1] = n;
                    }
                }
                return this._cachedText = t, this._cachedLines = s, this._cachedRenderWidth = e, s;
            }
        }
        class gt extends rt {
            constructor(t){
                super({
                    image: t.image,
                    sourceView: t.sourceView,
                    destSize: {
                        width: t.width,
                        height: t.height
                    },
                    flipHorizontal: t.flipHorizontal,
                    flipVertical: t.flipVertical,
                    rotation: t.rotation,
                    scale: t.scale,
                    opacity: t.opacity,
                    tint: t.tint,
                    origin: t.origin
                }), this._ready = new _, this.ready = this._ready.promise, this._options = t, this.image.isLoaded() ? this._applyTiling() : this.image.ready.then(()=>this._applyTiling());
            }
            static fromSprite(t, e) {
                return new gt({
                    sourceView: {
                        ...t.sourceView
                    },
                    width: t.width,
                    height: t.height,
                    ...e,
                    image: t.image
                });
            }
            _applyTiling() {
                const { width: t, height: e, filtering: i, wrapping: s } = {
                    ...this._options
                }, n = document.createElement("canvas");
                n.width = this.sourceView.width, n.height = this.sourceView.height;
                n.getContext("2d").drawImage(this.image.image, this.sourceView.x, this.sourceView.y, this.sourceView.width, this.sourceView.height, 0, 0, this.sourceView.width, this.sourceView.height);
                const r = ut.fromHtmlCanvasElement(n, {
                    wrapping: null != s ? s : at.Repeat,
                    filtering: i
                });
                t && (this.destSize.width = t, this.sourceView.width = t), e && (this.destSize.height = e, this.sourceView.height = e), this.sourceView.x = 0, this.sourceView.y = 0, this.image = r, this.image.ready.then(()=>this._ready.resolve());
            }
        }
        class pt {
            constructor(t){
                this.sprites = [];
                const { sprites: e, rows: i, columns: s } = t;
                this.sprites = e, this.rows = null != i ? i : 1, this.columns = null != s ? s : this.sprites.length;
            }
            getSprite(t, e, i) {
                var s, n, r, o, a, h, l, c, d;
                if (t >= this.columns || t < 0) throw Error(`No sprite exists in the SpriteSheet at (${t}, ${e}), x: ${t} should be between 0 and ${this.columns - 1} columns`);
                if (e >= this.rows || e < 0) throw Error(`No sprite exists in the SpriteSheet at (${t}, ${e}), y: ${e} should be between 0 and ${this.rows - 1} rows`);
                const u = t + e * this.columns, _ = this.sprites[u];
                if (_) {
                    if (i) {
                        const t = _.clone();
                        return t.flipHorizontal = null !== (s = i.flipHorizontal) && void 0 !== s ? s : t.flipHorizontal, t.flipVertical = null !== (n = i.flipVertical) && void 0 !== n ? n : t.flipVertical, t.width = null !== (r = i.width) && void 0 !== r ? r : t.width, t.height = null !== (o = i.height) && void 0 !== o ? o : t.height, t.rotation = null !== (a = i.rotation) && void 0 !== a ? a : t.rotation, t.scale = null !== (h = i.scale) && void 0 !== h ? h : t.scale, t.opacity = null !== (l = i.opacity) && void 0 !== l ? l : t.opacity, t.tint = null !== (c = i.tint) && void 0 !== c ? c : t.tint, t.origin = null !== (d = i.origin) && void 0 !== d ? d : t.origin, t;
                    }
                    return _;
                }
                throw Error(`Invalid sprite coordinates (${t}, ${e})`);
            }
            getTiledSprite(t, e, i) {
                if (t >= this.columns || t < 0) throw Error(`No sprite exists in the SpriteSheet at (${t}, ${e}), x: ${t} should be between 0 and ${this.columns - 1} columns`);
                if (e >= this.rows || e < 0) throw Error(`No sprite exists in the SpriteSheet at (${t}, ${e}), y: ${e} should be between 0 and ${this.rows - 1} rows`);
                const s = t + e * this.columns, n = this.sprites[s];
                if (n) return gt.fromSprite(n, i);
                throw Error(`Invalid sprite coordinates (${t}, ${e})`);
            }
            static fromImageSourceWithSourceViews(t) {
                const e = t.sourceViews.map((e)=>new rt({
                        image: t.image,
                        sourceView: e
                    }));
                return new pt({
                    sprites: e
                });
            }
            static fromImageSource(t) {
                var e;
                const i = [];
                t.spacing = null !== (e = t.spacing) && void 0 !== e ? e : {};
                const { image: s, grid: { rows: n, columns: r, spriteWidth: o, spriteHeight: a }, spacing: { originOffset: h, margin: l } } = t, c = {
                    x: 0,
                    y: 0,
                    ...h
                }, d = {
                    x: 0,
                    y: 0,
                    ...l
                };
                for(let t = 0; t < r; t++)for(let e = 0; e < n; e++)i[t + e * r] = new rt({
                    image: s,
                    sourceView: {
                        x: t * o + d.x * t + c.x,
                        y: e * a + d.y * e + c.y,
                        width: o,
                        height: a
                    },
                    destSize: {
                        height: a,
                        width: o
                    }
                });
                return new pt({
                    sprites: i,
                    rows: n,
                    columns: r
                });
            }
            clone() {
                return new pt({
                    sprites: this.sprites.map((t)=>t.clone()),
                    rows: this.rows,
                    columns: this.columns
                });
            }
        }
        class ft {
            constructor(){
                this.fontSheet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABACAYAAAD1Xam+AAAAAXNSR0IArs4c6QAABlFJREFUeJztndmy4yoMRcWt/v9fdr8EWoDAaDD4JntVpeqcxBrMIGQDNhEAAAAAAAAAAAAAAOCrSbMfr+u6yoEpTY+906GV57YtPkjyXj9WZZ+wHWHfo2N3/bU6Tte9Rv6ptruqRyMvKvvIX/zY3I/vjLeqsg6l/CWdp0KHKO/1Y1H2EdsR9j06Ntdfp+N03SvkH2u7i3pu5XkQ+DNTkgNJSok+/183xpcdWZHjgUzpQ2pGD67vaf//KRAGAq3tdhCy2tcMQKPyXyz7iPqrdBjbX5h9g7xbtvWf4ZJvM4D/BKG24Sd+IkQ0TC9aW5NM5FbO2HgrPVzW2vmN50DZNv/QWtl5bfPy85SBtdy9dFmjsf2F2SehTBVE+u+tkE5+lAGcJlFwGuodwRRU2Qe3rx0FhPNflc3HWC7BEh8EDGVR5IMCiLnDONtPp87qhxVH/S/LvzUAuDs/kyGimA5oSONKR1w8vsLpv+v+S9vhmS71JRiX1xB5CWZNw7m6rMrllMag/RJyWb67BEgpDVMWSydc+K47pr35w05kWd7ReEq6116KaG4CsbJ7OmV9PdZLEKkONiC1/7ZONVgDsajLIJPYp2OUAXRpnPcGmnIE6eSK4nv5YQqqSYO52JqnYfYj/PdQXQIY7XszuMofMgZRT/1LdeC5h2I5/0EdWDMY2Yb05WDE1RodVdpSA5r85slArAVnSf+89iP896St0f5bZKVA7Gk/3ja8q+152/+wrLqBWZTem3IBADbRBoDuHgAA4HdAAADgh0EAAOCHQQAA4IdBAADgh0EAAOCHuVsKbJ3P9M7jjuxHzGfv8j9iDt47Dx7hP8cjq5F/o/0T62Aer//ZOgDrajBp6aNlOWTEajKLjgj/Pcs/vfZD/a++3Pc8hNfZ966EVeh5vP75luDRJUAl0KzJfnopaqbaTuzZiulc2BS5lltFXntu3dcQsXadl59Wn1H+dfYNtrt2d6D/LDF9HkCQw6eXFbr8P9X5W/un5Ol8gz1t39p5pWOPn0vLynbgdnfe8maEQw+UIPJdfxdOd/4oTtVD0IYg8wDywGas0I04T5O3P8/qf2UWwPpkn1PbOT1bN2tFe59EM7TvKf+TRFw+erZ2ey4hpS3hp9qBkqq/tjsSU1OYqucBWB1yynt5QxC42Mdk30pAEIio//zRG3feBzLUX+TTjCKwlH83aI/KbpQBVEHgUGF0j/SitcLofHem8q6AyH0wBhFv4WszuOjy0yK2vc/oRWQoP2X9ve78jfaLnpncbBqQSC6s0HnIRT0a2yNZjfxT8+ir8t+yDsDTWaS6X70GP33+d77stp+I5HtBdwEAAPBl8ECApcAA/DBvfSowAGAB7/05ZAAA/DAIAADMMU3fOuS2ggAAwBjrorKoxWiPBxHMAgAg490Ts0VeePdA+ZfJDKcCh7sBqY88mmjklZeOt9iXPrvx2I2QPRnN2/qzyJ84h4gNcbtfasq5mM1rZr+bBWh2A+bIIX13Z9wqL+nQvFno7v3oq4tJItCed7isUT6C/I7BUn9KP95wDicYBYpcjncrO2c/dmW4tBtw4RiRld1IDxDyYsoXMHxF1w3dyz0Nne8033AOFsT6VgRCafl89fenTZUfbm8CGhrgdDcS7anAsvnkkP0IeCfQ+JzYunky6jhNYj5bl7++4fJvN9WDSKS/292A0wyANyKDI91bfkm3kcH7ckaP/SKW/VHKRZAcI14pP3beu0fPyn/DuZQbWMogNnsc16sziE96f7H/iai7uTf0/3N8lwFz/e13T00Djt4OrInCnkeChXT+qOcKOLA21tJpsv/G8/COnGnw97J9QwbTvd6djYSv7fxEVTuV/LzNhj7nOawv6bfbAGCYEpQ6HxFtuxs6sq9tzOYHobQ6Nje+6vo5BwFrPZ4OgMayS4PPt1NlzdLfbRCYBoBc+NaO4JWPwLEf33oN3unY3InKPQBW6Z7nEZzEmrl4iZjC804lqgePPEOguQcwWghUphxm343wyt/pWpWR0OrR+jvyxavHajfb9pTjbt9bH07Z5/expM4TLWfwb7QQqMoC+UDWXZo/4RgA38LOgUvLJAAQ1Td9y9//0ylxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+g79apuVUsS5ZmwAAAABJRU5ErkJggg==", this.size = 16, this.load();
            }
            load() {
                return this._imageSource = new ut(this.fontSheet), this._imageSource.load().then(()=>{
                    this._spriteSheet = pt.fromImageSource({
                        image: this._imageSource,
                        grid: {
                            rows: 4,
                            columns: 16,
                            spriteWidth: 16,
                            spriteHeight: 16
                        }
                    }), this._spriteFont = new _t({
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ,!'&.\"?-()+# ",
                        caseInsensitive: !0,
                        spriteSheet: this._spriteSheet,
                        spacing: -6
                    });
                });
            }
            write(t, e, i) {
                this._imageSource.isLoaded() && this._spriteFont.render(t, e, null, i.x, i.y);
            }
        }
        class mt {
            constructor(t, e){
                this._gl = t, this._texture = e;
            }
            use() {
                const t = this._gl;
                t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, this._texture);
            }
            disable() {
                const t = this._gl;
                t.bindTexture(t.TEXTURE_2D, null);
            }
        }
        class vt {
            constructor(t){
                var e, i;
                this.antialias = !1, this.samples = 1, this._gl = t.gl, this.width = t.width, this.height = t.height, this.transparency = t.transparency, this.antialias = null !== (e = t.antialias) && void 0 !== e ? e : this.antialias, this.samples = null !== (i = t.samples) && void 0 !== i ? i : this._gl.getParameter(this._gl.MAX_SAMPLES);
                const s = this._gl;
                s.drawingBufferFormat ? this.bufferFormat = s.drawingBufferFormat : this.transparency ? this.bufferFormat = s.RGBA8 : this.bufferFormat = s.RGB8, this._setupRenderBuffer(), this._setupFramebuffer();
            }
            setResolution(t, e) {
                const i = this._gl;
                this.width = t, this.height = e, i.bindTexture(i.TEXTURE_2D, this._frameTexture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, this.width, this.height, 0, i.RGBA, i.UNSIGNED_BYTE, null), this._renderBuffer && (i.bindRenderbuffer(i.RENDERBUFFER, this._renderBuffer), i.renderbufferStorageMultisample(i.RENDERBUFFER, Math.min(this.samples, i.getParameter(i.MAX_SAMPLES)), this.bufferFormat, this.width, this.height));
            }
            get renderBuffer() {
                return this._renderBuffer;
            }
            get renderFrameBuffer() {
                return this._renderFrameBuffer;
            }
            get frameBuffer() {
                return this._frameBuffer;
            }
            get frameTexture() {
                return this._frameTexture;
            }
            _setupRenderBuffer() {
                if (this.antialias) {
                    const t = this._gl;
                    this._renderBuffer = t.createRenderbuffer(), this._renderFrameBuffer = t.createFramebuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this._renderBuffer), t.renderbufferStorageMultisample(t.RENDERBUFFER, Math.min(this.samples, t.getParameter(t.MAX_SAMPLES)), this.bufferFormat, this.width, this.height), t.bindFramebuffer(t.FRAMEBUFFER, this._renderFrameBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, this._renderBuffer);
                }
            }
            _setupFramebuffer() {
                const t = this._gl;
                this._frameTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this._frameTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
                const e = t.COLOR_ATTACHMENT0;
                this._frameBuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, this._frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, e, t.TEXTURE_2D, this._frameTexture, 0), this.disable();
            }
            toRenderSource() {
                this.renderBuffer && this.blitRenderBufferToFrameBuffer();
                return new mt(this._gl, this._frameTexture);
            }
            blitToScreen() {
                const t = this._gl;
                this._renderBuffer ? (t.bindFramebuffer(t.READ_FRAMEBUFFER, this.renderFrameBuffer), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), t.clearBufferfv(t.COLOR, 0, [
                    0,
                    0,
                    1,
                    1
                ]), t.blitFramebuffer(0, 0, this.width, this.height, 0, 0, this.width, this.height, t.COLOR_BUFFER_BIT, t.LINEAR)) : (t.bindFramebuffer(t.READ_FRAMEBUFFER, this.frameBuffer), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), t.clearBufferfv(t.COLOR, 0, [
                    0,
                    0,
                    1,
                    1
                ]), t.blitFramebuffer(0, 0, this.width, this.height, 0, 0, this.width, this.height, t.COLOR_BUFFER_BIT, t.LINEAR));
            }
            blitRenderBufferToFrameBuffer() {
                if (this._renderBuffer) {
                    const t = this._gl;
                    t.bindFramebuffer(t.READ_FRAMEBUFFER, this.renderFrameBuffer), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, this.frameBuffer), t.clearBufferfv(t.COLOR, 0, [
                        0,
                        0,
                        1,
                        1
                    ]), t.blitFramebuffer(0, 0, this.width, this.height, 0, 0, this.width, this.height, t.COLOR_BUFFER_BIT, t.LINEAR);
                }
            }
            copyToTexture(t) {
                const e = this._gl;
                this._renderBuffer && this.blitRenderBufferToFrameBuffer(), e.bindFramebuffer(e.FRAMEBUFFER, this._frameBuffer), e.bindTexture(e.TEXTURE_2D, t), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGBA, 0, 0, this.width, this.height, 0);
            }
            use() {
                const t = this._gl;
                this.antialias ? t.bindFramebuffer(t.FRAMEBUFFER, this._renderFrameBuffer) : t.bindFramebuffer(t.FRAMEBUFFER, this._frameBuffer), t.viewport(0, 0, this.width, this.height);
            }
            disable() {
                const t = this._gl;
                t.bindFramebuffer(t.FRAMEBUFFER, null), t.bindTexture(t.TEXTURE_2D, null);
            }
        }
        function xt(t, e) {
            switch(e){
                case t.INT:
                case t.UNSIGNED_INT:
                case t.FLOAT:
                    return 4;
                case t.SHORT:
                case t.UNSIGNED_SHORT:
                    return 2;
                case t.BYTE:
                case t.UNSIGNED_BYTE:
                default:
                    return 1;
            }
        }
        function wt(t, e) {
            const i = new RegExp(`(?<type>[a-z0-9]+)\\s+${e};`, "g").exec(t);
            return (null == i ? void 0 : i.length) > 0;
        }
        function yt(t, e, i) {
            var s;
            const n = new RegExp(`(?<type>[a-z0-9]+)\\s+${i};`, "g").exec(e);
            switch(null === (s = null == n ? void 0 : n.groups) || void 0 === s ? void 0 : s.type){
                case "float":
                case "vec2":
                case "vec3":
                case "vec4":
                default:
                    return t.FLOAT;
                case "int":
                case "ivec2":
                case "ivec3":
                case "ivec4":
                    return t.INT;
                case "uint":
                case "uvec2":
                case "uvec3":
                case "uvec4":
                    return t.UNSIGNED_INT;
                case "bool":
                case "bvec2":
                case "bvec3":
                case "bvec4":
                    return t.BOOL;
                case "short":
                    return t.SHORT;
                case "ushort":
                    return t.UNSIGNED_SHORT;
                case "ubyte":
                    return t.UNSIGNED_BYTE;
                case "byte":
                    return t.BYTE;
            }
        }
        function bt(t, e) {
            switch(e){
                case t.LOW_FLOAT:
                case t.HIGH_FLOAT:
                case t.FLOAT:
                    return 1;
                case t.FLOAT_VEC2:
                    return 2;
                case t.FLOAT_VEC3:
                    return 3;
                case t.FLOAT_VEC4:
                    return 4;
                case t.BYTE:
                case t.UNSIGNED_BYTE:
                case t.UNSIGNED_SHORT:
                case t.SHORT:
                default:
                    return 1;
            }
        }
        function Ct(t, e) {
            switch(e){
                case t.LOW_FLOAT:
                case t.HIGH_FLOAT:
                case t.FLOAT:
                case t.FLOAT_VEC2:
                case t.FLOAT_VEC3:
                case t.FLOAT_VEC4:
                    return t.FLOAT;
                case t.BYTE:
                    return t.BYTE;
                case t.UNSIGNED_BYTE:
                    return t.UNSIGNED_BYTE;
                case t.SHORT:
                    return t.SHORT;
                case t.UNSIGNED_SHORT:
                    return t.UNSIGNED_SHORT;
                default:
                    return t.FLOAT;
            }
        }
        function At(t, e) {
            const i = (t)=>{
                const e = "#version 300 es\n    precision mediump float;\n    out vec4 fragColor;\n    void main() {\n      float index = 1.01;\n      %%complexity%%\n    }";
                let i = "";
                for(let e = 0; e < t; e++)i += 0 === e ? `if (index <= ${e}.5) {\n` : `   else if (index <= ${e}.5) {\n`, i += "      fragColor = vec4(1.0);\n", i += "   }\n";
                return e.replace("%%complexity%%", i);
            };
            let s = !1;
            do {
                const n = i(e), r = t.createShader(t.FRAGMENT_SHADER);
                t.shaderSource(r, n), t.compileShader(r), s = t.getShaderParameter(r, t.COMPILE_STATUS), s || (e = e / 2 | 0);
            }while (!s);
            return e;
        }
        class Tt {
            get compiled() {
                return this._compiled;
            }
            constructor(t){
                this._logger = k.getInstance(), this.uniforms = {}, this.attributes = {}, this._compiled = !1;
                const { gl: e, vertexSource: i, fragmentSource: s, onPreLink: n, onPostCompile: r } = t;
                this._gl = e, this.vertexSource = i, this.fragmentSource = s, this._onPreLink = n, this._onPostCompile = r;
            }
            dispose() {
                this._gl.deleteProgram(this.program), this._gl = null;
            }
            use() {
                this._gl.useProgram(this.program), Tt._ACTIVE_SHADER_INSTANCE = this;
            }
            isCurrentlyBound() {
                return Tt._ACTIVE_SHADER_INSTANCE === this;
            }
            compile() {
                const t = this._gl, e = this._compileShader(t, this.vertexSource, t.VERTEX_SHADER), i = this._compileShader(t, this.fragmentSource, t.FRAGMENT_SHADER);
                this.program = this._createProgram(t, e, i);
                const s = this.getAttributes();
                for (const t of s)this.attributes[t.name] = t;
                const n = this.getUniforms();
                for (const t of n)this.uniforms[t.name] = t;
                return this._compiled = !0, this._onPostCompile && this._onPostCompile(this), this.program;
            }
            getUniforms() {
                const t = this._gl, e = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS), i = [];
                for(let s = 0; s < e; s++){
                    const e = t.getActiveUniform(this.program, s), n = t.getUniformLocation(this.program, e.name);
                    i.push({
                        name: e.name,
                        glType: e.type,
                        location: n
                    });
                }
                return i;
            }
            getAttributes() {
                const t = this._gl, e = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES), i = [];
                for(let s = 0; s < e; s++){
                    const e = t.getActiveAttrib(this.program, s), n = t.getAttribLocation(this.program, e.name);
                    i.push({
                        name: e.name,
                        glType: Ct(t, e.type),
                        size: bt(t, e.type),
                        location: n,
                        normalized: !1
                    });
                }
                return i;
            }
            setTexture(t, e) {
                const i = this._gl;
                i.activeTexture(i.TEXTURE0 + t), i.bindTexture(i.TEXTURE_2D, e);
            }
            setUniformInt(t, e) {
                this.setUniform("uniform1i", t, ~~e);
            }
            trySetUniformInt(t, e) {
                return this.trySetUniform("uniform1i", t, ~~e);
            }
            setUniformIntArray(t, e) {
                this.setUniform("uniform1iv", t, e);
            }
            trySetUniformIntArray(t, e) {
                return this.trySetUniform("uniform1iv", t, e);
            }
            setUniformBoolean(t, e) {
                this.setUniform("uniform1i", t, e ? 1 : 0);
            }
            trySetUniformBoolean(t, e) {
                return this.trySetUniform("uniform1i", t, e ? 1 : 0);
            }
            setUniformFloat(t, e) {
                this.setUniform("uniform1f", t, e);
            }
            trySetUniformFloat(t, e) {
                return this.trySetUniform("uniform1f", t, e);
            }
            setUniformFloatArray(t, e) {
                this.setUniform("uniform1fv", t, e);
            }
            trySetUniformFloatArray(t, e) {
                return this.trySetUniform("uniform1fv", t, e);
            }
            setUniformFloatVector(t, e) {
                this.setUniform("uniform2f", t, e.x, e.y);
            }
            trySetUniformFloatVector(t, e) {
                return this.trySetUniform("uniform2f", t, e.x, e.y);
            }
            setUniformFloatColor(t, e) {
                this.setUniform("uniform4f", t, e.r / 255, e.g / 255, e.b / 255, e.a);
            }
            trySetUniformFloatColor(t, e) {
                return this.trySetUniform("uniform4f", t, e.r / 255, e.g / 255, e.b / 255, e.a);
            }
            setUniformMatrix(t, e) {
                this.setUniform("uniformMatrix4fv", t, !1, e.data);
            }
            setUniformAffineMatrix(t, e) {
                this.setUniform("uniformMatrix4fv", t, !1, [
                    e.data[0],
                    e.data[1],
                    0,
                    0,
                    e.data[2],
                    e.data[3],
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    e.data[4],
                    e.data[5],
                    0,
                    1
                ]);
            }
            trySetUniformMatrix(t, e) {
                return this.trySetUniform("uniformMatrix4fv", t, !1, e.data);
            }
            setUniform(t, e, ...i) {
                if (!this._compiled) throw Error(`Must compile shader before setting a uniform ${t}:${e}`);
                if (!this.isCurrentlyBound()) throw Error("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms");
                const s = this._gl.getUniformLocation(this.program, e);
                if (!s) throw Error(`Uniform ${t}:${e} doesn't exist or is not used in the shader source code, unused uniforms are optimized away by most browsers`);
                {
                    const e = [
                        s,
                        ...i
                    ];
                    this._gl[t].apply(this._gl, e);
                }
            }
            trySetUniform(t, e, ...i) {
                if (!this._compiled) return this._logger.warn(`Must compile shader before setting a uniform ${t}:${e}`), !1;
                if (!this.isCurrentlyBound()) return this._logger.warn("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms"), !1;
                const s = this._gl.getUniformLocation(this.program, e);
                if (!s) return !1;
                {
                    const e = [
                        s,
                        ...i
                    ];
                    this._gl[t].apply(this._gl, e);
                }
                return !0;
            }
            _createProgram(t, e, i) {
                const s = t.createProgram();
                if (null === s) throw Error("Could not create graphics shader program");
                t.attachShader(s, e), t.attachShader(s, i), this._onPreLink && this._onPreLink(s), t.linkProgram(s);
                if (!t.getProgramParameter(s, t.LINK_STATUS)) throw Error(`Could not link the program: [${t.getProgramInfoLog(s)}]`);
                return s;
            }
            _compileShader(t, e, i) {
                const s = t.VERTEX_SHADER === i ? "vertex" : "fragment", n = t.createShader(i);
                if (null === n) throw Error(`Could not build shader: [${e}]`);
                t.shaderSource(n, e), t.compileShader(n);
                if (!t.getShaderParameter(n, t.COMPILE_STATUS)) {
                    const i = t.getShaderInfoLog(n);
                    throw Error(`Could not compile ${s} shader:\n\n${i}${this._processSourceForError(e, i)}`);
                }
                return n;
            }
            _processSourceForError(t, e) {
                if (!t) return e;
                const i = t.split("\n"), s = e.search(/\d:\d/), n = e.indexOf(" ", s), [r, o] = e.slice(s, n).split(":").map((t)=>Number(t));
                for(let t = 0; t < i.length; t++)i[t] = `${t + 1}: ${i[t]}${o === t + 1 ? " <----- ERROR!" : ""}`;
                return "\n\nSource:\n" + i.join("\n");
            }
        }
        Tt._ACTIVE_SHADER_INSTANCE = null;
        class St {
            constructor(t){
                this.type = "dynamic";
                const { gl: e, size: i, type: s, data: n } = t;
                if (this._gl = e, this.buffer = this._gl.createBuffer(), !n && !i) throw Error("Must either provide data or a size to the VertexBuffer");
                this.bufferData = n || new Float32Array(i), this.type = null != s ? s : this.type, e.bindBuffer(e.ARRAY_BUFFER, this.buffer), e.bufferData(e.ARRAY_BUFFER, this.bufferData, "static" === this.type ? e.STATIC_DRAW : e.DYNAMIC_DRAW);
            }
            bind() {
                const t = this._gl;
                t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
            }
            unbind() {
                const t = this._gl;
                t.bindBuffer(t.ARRAY_BUFFER, null);
            }
            upload(t) {
                const e = this._gl;
                e.bindBuffer(e.ARRAY_BUFFER, this.buffer), t ? e.bufferSubData(e.ARRAY_BUFFER, 0, this.bufferData, 0, t) : e.bufferData(e.ARRAY_BUFFER, this.bufferData, "static" === this.type ? e.STATIC_DRAW : e.DYNAMIC_DRAW);
            }
            dispose() {
                this._gl.deleteBuffer(this.buffer), this._gl = null;
            }
        }
        class Pt {
            get vertexBuffer() {
                return this._vertexBuffer;
            }
            get attributes() {
                return this._attributes;
            }
            constructor(t){
                this._logger = k.getInstance(), this._suppressWarnings = !1, this._layout = [], this._attributes = [], this._vertexTotalSizeBytes = 0, this._initialized = !1;
                const { gl: e, shader: i, vertexBuffer: s, attributes: n, suppressWarnings: r } = t;
                this._gl = e, this._vertexBuffer = s, this._attributes = n, this._shader = i, this._suppressWarnings = r, i && this.initialize();
            }
            get totalVertexSizeBytes() {
                return this._vertexTotalSizeBytes;
            }
            set shader(t) {
                t && this._shader !== t && (this._shader = t, this.initialize());
            }
            get shader() {
                return this._shader;
            }
            initialize() {
                if (this._initialized) return;
                if (!this._shader) return;
                if (!this._shader.compiled) throw Error("Shader not compiled, shader must be compiled before defining a vertex layout");
                this._vertexTotalSizeBytes = 0, this._layout.length = 0;
                const t = this._shader.attributes;
                for (const e of this._attributes){
                    const i = t[e[0]];
                    if (!i) {
                        if (!wt(this._shader.vertexSource, e[0])) throw Error(`The attribute named: ${e[0]} size ${e[1]} not found in the shader source code:\n ${this._shader.vertexSource}`);
                        this._suppressWarnings || this._logger.warn(`The attribute named: ${e[0]} size ${e[1]} not found in the compiled shader. This is possibly a bug:\n 1. Not a bug, but should remove unused code - attribute "${e[0]}" is unused in vertex/fragment and has been automatically removed by glsl compiler.\n 2. Definitely a bug, attribute "${e[0]}" in layout has been mistyped or is missing in shader, check vertex/fragment source.`);
                        const t = yt(this._gl, this._shader.vertexSource, e[0]);
                        this._layout.push({
                            name: e[0],
                            glType: t,
                            size: e[1],
                            location: -1,
                            normalized: !1
                        });
                    }
                    if (i) {
                        if (i.size !== e[1]) throw Error(`VertexLayout size definition for attribute: [${e[0]}, ${e[1]}], doesn't match shader source size ${i.size}:\n ${this._shader.vertexSource}`);
                        this._layout.push(i);
                    }
                }
                let e = 0;
                for (const t of this._layout){
                    const i = xt(this._gl, t.glType);
                    this._vertexTotalSizeBytes += i * t.size, e += t.size;
                }
                this._vertexBuffer.bufferData.length % e != 0 && this._logger.warn(`The vertex component size (${e})  does NOT divide evenly into the specified vertex buffer (${this._vertexBuffer.bufferData.length})`);
                const i = this._gl;
                this._vao = i.createVertexArray(), i.bindVertexArray(this._vao), this._vertexBuffer.bind();
                let s = 0;
                for (const t of this._layout)-1 !== t.location && (t.glType === i.INT ? i.vertexAttribIPointer(t.location, t.size, t.glType, this.totalVertexSizeBytes, s) : i.vertexAttribPointer(t.location, t.size, t.glType, t.normalized, this.totalVertexSizeBytes, s), i.enableVertexAttribArray(t.location)), s += xt(i, t.glType) * t.size;
                i.bindVertexArray(null), this._vertexBuffer.unbind(), this._initialized = !0;
            }
            use(t = !1, e) {
                if (!this._shader) throw Error("No shader is associated with this vertex layout, a shader must be set");
                const i = this._gl;
                if (!this._shader.isCurrentlyBound()) throw Error("Shader associated with this vertex layout is not active! Call shader.use() before layout.use()");
                this._vertexBuffer.bind(), t && this._vertexBuffer.upload(e), i.bindVertexArray(this._vao);
            }
        }
        class Et {
            static clear() {
                Et.DrawCallCount = 0, Et.DrawnImagesCount = 0;
            }
        }
        Et.DrawCallCount = 0, Et.DrawnImagesCount = 0;
        class It {
            constructor(){
                this.type = "ex.line", this.priority = 0, this._maxLines = 10922, this._vertexIndex = 0, this._lineCount = 0, this._startScratch = I(0, 0), this._endScratch = I(0, 0);
            }
            initialize(t, e) {
                this._gl = t, this._context = e, this._shader = new Tt({
                    gl: t,
                    vertexSource: "#version 300 es\r\nin vec2 a_position;\r\nin vec4 a_color;\r\n\r\nout lowp vec4 v_color;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Passthrough the color\r\n   v_color = a_color;\r\n}",
                    fragmentSource: "#version 300 es\r\nprecision mediump float;\r\n\r\n// Color\r\nin lowp vec4 v_color;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  fragColor = v_color;\r\n}"
                }), this._shader.compile(), this._shader.use(), this._shader.setUniformMatrix("u_matrix", this._context.ortho), this._vertexBuffer = new St({
                    gl: t,
                    size: 12 * this._maxLines,
                    type: "dynamic"
                }), this._layout = new Pt({
                    gl: t,
                    vertexBuffer: this._vertexBuffer,
                    shader: this._shader,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_color",
                            4
                        ]
                    ]
                });
            }
            dispose() {
                this._vertexBuffer.dispose(), this._shader.dispose(), this._context = null, this._gl = null;
            }
            draw(t, e, i) {
                this._isFull() && this.flush(), this._lineCount++;
                const s = this._context.getTransform(), n = s.multiply(t, this._startScratch), r = s.multiply(e, this._endScratch), o = this._vertexBuffer.bufferData;
                o[this._vertexIndex++] = n.x, o[this._vertexIndex++] = n.y, o[this._vertexIndex++] = i.r / 255, o[this._vertexIndex++] = i.g / 255, o[this._vertexIndex++] = i.b / 255, o[this._vertexIndex++] = i.a, o[this._vertexIndex++] = r.x, o[this._vertexIndex++] = r.y, o[this._vertexIndex++] = i.r / 255, o[this._vertexIndex++] = i.g / 255, o[this._vertexIndex++] = i.b / 255, o[this._vertexIndex++] = i.a;
            }
            _isFull() {
                return this._lineCount >= this._maxLines;
            }
            hasPendingDraws() {
                return 0 !== this._lineCount;
            }
            flush() {
                if (0 === this._lineCount) return;
                const t = this._gl;
                this._shader.use(), this._layout.use(!0), this._shader.setUniformMatrix("u_matrix", this._context.ortho), t.drawArrays(t.LINES, 0, 2 * this._lineCount), Et.DrawnImagesCount += this._lineCount, Et.DrawCallCount++, this._vertexIndex = 0, this._lineCount = 0;
            }
        }
        class Rt {
            constructor(){
                this.type = "ex.point", this.priority = 0, this._maxPoints = 10922, this._pointCount = 0, this._vertexIndex = 0;
            }
            initialize(t, e) {
                this._gl = t, this._context = e, this._shader = new Tt({
                    gl: t,
                    vertexSource: "#version 300 es\r\nin vec2 a_position;\r\nin vec4 a_color;\r\nin float a_size;\r\nout lowp vec4 v_color;\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n  gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n  gl_PointSize = a_size * 2.0;\r\n  v_color = a_color;\r\n}",
                    fragmentSource: '#version 300 es\r\n\r\nprecision mediump float;\r\nin lowp vec4 v_color;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  float r = 0.0, delta = 0.0, alpha = 1.0;\r\n  vec2 cxy = 2.0 * gl_PointCoord - 1.0;\r\n  r = dot(cxy, cxy);\r\n\r\n  delta = fwidth(r);\r\n  alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);\r\n  // "premultiply" the color by alpha\r\n  vec4 color = v_color;\r\n  color.a = color.a * alpha;\r\n  color.rgb = color.rgb * color.a;\r\n  fragColor = color;\r\n}'
                }), this._shader.compile(), this._shader.use(), this._shader.setUniformMatrix("u_matrix", this._context.ortho), this._buffer = new St({
                    gl: t,
                    size: 7 * this._maxPoints,
                    type: "dynamic"
                }), this._layout = new Pt({
                    gl: t,
                    shader: this._shader,
                    vertexBuffer: this._buffer,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_color",
                            4
                        ],
                        [
                            "a_size",
                            1
                        ]
                    ]
                });
            }
            dispose() {
                this._buffer.dispose(), this._shader.dispose(), this._context = null, this._gl = null;
            }
            draw(t, e, i) {
                this._isFull() && this.flush(), this._pointCount++;
                const s = this._context.getTransform(), n = this._context.opacity, r = this._context.snapToPixel, o = s.multiply(t);
                r && (o.x = ~~(o.x + fi), o.y = ~~(o.y + fi));
                const a = this._buffer.bufferData;
                a[this._vertexIndex++] = o.x, a[this._vertexIndex++] = o.y, a[this._vertexIndex++] = e.r / 255, a[this._vertexIndex++] = e.g / 255, a[this._vertexIndex++] = e.b / 255, a[this._vertexIndex++] = e.a * n, a[this._vertexIndex++] = i * Math.max(s.getScaleX(), s.getScaleY());
            }
            _isFull() {
                return this._pointCount >= this._maxPoints;
            }
            hasPendingDraws() {
                return 0 !== this._pointCount;
            }
            flush() {
                if (0 === this._pointCount) return;
                const t = this._gl;
                this._shader.use(), this._layout.use(!0), this._shader.setUniformMatrix("u_matrix", this._context.ortho), t.drawArrays(t.POINTS, 0, this._pointCount), Et.DrawnImagesCount += this._pointCount, Et.DrawCallCount++, this._pointCount = 0, this._vertexIndex = 0;
            }
        }
        class Ft {
            constructor(t){
                this._gl = t, this._shader = new Tt({
                    gl: t,
                    vertexSource: "#version 300 es\r\nin vec2 a_position;\r\n\r\nin vec2 a_texcoord;\r\nout vec2 v_texcoord;\r\n\r\nvoid main() {\r\n  gl_Position = vec4(a_position, 0.0, 1.0);\r\n\r\n  // Pass the texcoord to the fragment shader.\r\n  v_texcoord = a_texcoord;\r\n}",
                    fragmentSource: "#version 300 es\r\nprecision mediump float;\r\n\r\n// Passed in from the vertex shader.\r\nin vec2 v_texcoord;\r\n\r\n// The texture.\r\nuniform sampler2D u_texture;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n   fragColor = texture(u_texture, v_texcoord);\r\n}"
                }), this._shader.compile(), this._buffer = new St({
                    gl: t,
                    type: "static",
                    data: new Float32Array([
                        -1,
                        -1,
                        0,
                        0,
                        -1,
                        1,
                        0,
                        1,
                        1,
                        -1,
                        1,
                        0,
                        1,
                        -1,
                        1,
                        0,
                        -1,
                        1,
                        0,
                        1,
                        1,
                        1,
                        1,
                        1
                    ])
                }), this._layout = new Pt({
                    gl: t,
                    shader: this._shader,
                    vertexBuffer: this._buffer,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_texcoord",
                            2
                        ]
                    ]
                }), this._buffer.upload();
            }
            renderWithPostProcessor(t) {
                const e = this._gl, i = t.getShader();
                i.use(), t.getLayout().use(), e.activeTexture(e.TEXTURE0), i.trySetUniformInt("u_image", 0), t.onDraw && t.onDraw(), e.drawArrays(e.TRIANGLES, 0, 6);
            }
            renderToScreen() {
                const t = this._gl;
                this._shader.use(), this._layout.use(), t.drawArrays(t.TRIANGLES, 0, 6);
            }
        }
        class Mt {
            constructor(t, e, i){
                this._logger = k.getInstance(), this._gl = t, this.buffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.buffer);
                const s = 6 * e;
                if (i) {
                    const i = 65535, n = Math.floor((i - 1) / 4);
                    this.bufferGlType = t.UNSIGNED_SHORT, this.bufferData = new Uint16Array(s), e > n && this._logger.warn(`Total quads exceeds hardware index buffer limit (uint16), max(${n}) requested quads(${e})`);
                } else this.bufferData = new Uint32Array(s);
                let n = 0;
                for(let t = 0; t < s; t += 6)this.bufferData[t + 0] = n + 0, this.bufferData[t + 1] = n + 1, this.bufferData[t + 2] = n + 2, this.bufferData[t + 3] = n + 2, this.bufferData[t + 4] = n + 1, this.bufferData[t + 5] = n + 3, n += 4;
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.bufferData, t.STATIC_DRAW);
            }
            get size() {
                return this.bufferData.length;
            }
            upload() {
                const t = this._gl;
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.buffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.bufferData, t.STATIC_DRAW);
            }
            bind() {
                const t = this._gl;
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.buffer);
            }
            dispose() {
                this._gl.deleteBuffer(this.buffer), this._gl = null;
            }
        }
        class Dt {
            constructor(t){
                this.type = "ex.image", this.priority = 0, this._maxImages = 10922, this._maxTextures = 0, this._imageCount = 0, this._textures = [], this._textureIndex = 0, this._textureToIndex = new Map, this._images = new Set, this._vertexIndex = 0, this._imageToWidth = new Map, this._imageToHeight = new Map, this._view = [
                    0,
                    0,
                    0,
                    0
                ], this._dest = [
                    0,
                    0
                ], this._quad = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], this._defaultTint = R.White, this.pixelArtSampler = t.pixelArtSampler, this.uvPadding = t.uvPadding;
            }
            initialize(t, e) {
                this._gl = t, this._context = e;
                const i = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), s = At(t, i);
                this._maxTextures = Math.min(i, s);
                const n = this._transformFragmentSource("#version 300 es\r\nprecision mediump float;\r\n\r\n// UV coord\r\nin vec2 v_texcoord;\r\n\r\n// Texture index\r\nin lowp float v_textureIndex;\r\n\r\n// Textures in the current draw\r\nuniform sampler2D u_textures[%%count%%];\r\n\r\nuniform bool u_pixelart;\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nin vec4 v_tint;\r\n\r\nin vec2 v_res;\r\n\r\nout vec4 fragColor;\r\n\r\n// Inigo Quilez pixel art filter https://jorenjoestar.github.io/post/pixel_art_filtering/\r\nvec2 uv_iq(in vec2 uv, in vec2 texture_size) {\r\n  vec2 pixel = uv * texture_size;\r\n  \r\n  vec2 seam=floor(pixel+.5);\r\n  vec2 dudv=fwidth(pixel);\r\n  pixel=seam+clamp((pixel-seam)/dudv,-.5,.5);\r\n  \r\n  return pixel/texture_size;\r\n}\r\n\r\nvoid main(){\r\n  // In order to support the most efficient sprite batching, we have multiple\r\n  // textures loaded into the gpu (usually 8) this picker logic skips over textures\r\n  // that do not apply to a particular sprite.\r\n  \r\n  vec4 color=vec4(1.,0,0,1.);\r\n  \r\n  // GLSL is templated out to pick the right texture and set the vec4 color\r\n  %%texture_picker%%\r\n  \r\n  color.rgb=color.rgb*v_opacity;\r\n  color.a=color.a*v_opacity;\r\n  fragColor=color*v_tint;\r\n}", this._maxTextures);
                this._shader = new Tt({
                    gl: t,
                    fragmentSource: n,
                    vertexSource: "#version 300 es\r\nin vec2 a_position;\r\n\r\n// Opacity\r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\n// UV coordinate\r\nin vec2 a_texcoord;\r\nout vec2 v_texcoord;\r\n\r\n// Texture res\r\nin vec2 a_res;\r\nout vec2 v_res;\r\n\r\n// Texture number\r\nin lowp float a_textureIndex;\r\nout lowp float v_textureIndex;\r\n\r\nin vec4 a_tint;\r\nout vec4 v_tint;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvoid main(){\r\n  // Set the vertex position using the ortho transform matrix\r\n  gl_Position=u_matrix*vec4(a_position,0.,1.);\r\n  \r\n  // Pass through the Opacity to the fragment shader\r\n  v_opacity=a_opacity;\r\n  // Pass through the UV coord to the fragment shader\r\n  v_texcoord=a_texcoord;\r\n\r\n  v_res = a_res;\r\n\r\n  // Pass through the texture number to the fragment shader\r\n  v_textureIndex=a_textureIndex;\r\n  // Pass through the tint\r\n  v_tint=a_tint;\r\n}"
                }), this._shader.compile(), this._shader.use(), this._shader.setUniformMatrix("u_matrix", e.ortho), this._shader.setUniformIntArray("u_textures", [
                    ...Array(this._maxTextures)
                ].map((t, e)=>e)), this._buffer = new St({
                    gl: t,
                    size: 48 * this._maxImages,
                    type: "dynamic"
                }), this._layout = new Pt({
                    gl: t,
                    shader: this._shader,
                    vertexBuffer: this._buffer,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_opacity",
                            1
                        ],
                        [
                            "a_res",
                            2
                        ],
                        [
                            "a_texcoord",
                            2
                        ],
                        [
                            "a_textureIndex",
                            1
                        ],
                        [
                            "a_tint",
                            4
                        ]
                    ]
                }), this._quads = new Mt(t, this._maxImages, !0);
            }
            dispose() {
                this._buffer.dispose(), this._quads.dispose(), this._shader.dispose(), this._textures.length = 0, this._context = null, this._gl = null;
            }
            _transformFragmentSource(t, e) {
                let i = t.replace("%%count%%", e.toString()), s = "";
                for(let t = 0; t < e; t++)s += 0 === t ? `if (v_textureIndex <= ${t}.5) {\n` : `   else if (v_textureIndex <= ${t}.5) {\n`, s += "      vec2 uv = u_pixelart ? uv_iq(v_texcoord, v_res) : v_texcoord;\n", s += `      color = texture(u_textures[${t}], uv);\n`, s += "   }\n";
                return i = i.replace("%%texture_picker%%", s), i;
            }
            _addImageAsTexture(t) {
                if (this._images.has(t)) return;
                const e = t.getAttribute(dt.Filtering), i = e ? ht(e) : void 0, s = lt(t.getAttribute(dt.WrappingX)), n = lt(t.getAttribute(dt.WrappingY)), r = "true" === t.getAttribute("forceUpload"), o = this._context.textureLoader.load(t, {
                    filtering: i,
                    wrapping: {
                        x: s,
                        y: n
                    }
                }, r);
                t.removeAttribute("forceUpload"), -1 === this._textures.indexOf(o) && (this._textures.push(o), this._textureToIndex.set(o, this._textureIndex++), this._images.add(t));
            }
            _bindTextures(t) {
                for(let e = 0; e < this._maxTextures; e++)t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, this._textures[e] || this._textures[0]);
            }
            _getTextureIdForImage(t) {
                var e;
                if (t) {
                    const i = this._context.textureLoader.get(t);
                    return null !== (e = this._textureToIndex.get(i)) && void 0 !== e ? e : -1;
                }
                return -1;
            }
            _isFull() {
                return this._imageCount >= this._maxImages || this._textures.length >= this._maxTextures;
            }
            _getImageWidth(t) {
                let e = this._imageToWidth.get(t);
                return void 0 === e && (e = t.width, this._imageToWidth.set(t, e)), e;
            }
            _getImageHeight(t) {
                let e = this._imageToHeight.get(t);
                return void 0 === e && (e = t.height, this._imageToHeight.set(t, e)), e;
            }
            draw(t, e, i, s, n, r, o, a, h) {
                var l, c, d, u;
                this._isFull() && this.flush(), this._imageCount++, this._addImageAsTexture(t);
                const _ = this._getImageWidth(t), g = this._getImageHeight(t);
                let p = _ || s || 0, f = g || n || 0;
                this._view[0] = 0, this._view[1] = 0, this._view[2] = null !== (l = null != s ? s : _) && void 0 !== l ? l : 0, this._view[3] = null !== (c = null != n ? n : g) && void 0 !== c ? c : 0, this._dest[0] = null != e ? e : 1, this._dest[1] = null != i ? i : 1, void 0 !== r && void 0 !== o && void 0 !== a && void 0 !== h && (this._view[0] = null != e ? e : 1, this._view[1] = null != i ? i : 1, this._view[2] = null !== (d = null != s ? s : _) && void 0 !== d ? d : 0, this._view[3] = null !== (u = null != n ? n : g) && void 0 !== u ? u : 0, this._dest[0] = r, this._dest[1] = o, p = a, f = h), e = this._view[0], i = this._view[1];
                const m = this._view[2], v = this._view[3], w = this._context.getTransform(), y = this._context.opacity, b = this._context.snapToPixel;
                this._quad[0] = this._dest[0], this._quad[1] = this._dest[1], this._quad[2] = this._dest[0] + p, this._quad[3] = this._dest[1], this._quad[4] = this._dest[0], this._quad[5] = this._dest[1] + f, this._quad[6] = this._dest[0] + p, this._quad[7] = this._dest[1] + f, w.multiplyQuadInPlace(this._quad), b && (this._quad[0] = ~~(this._quad[0] + x(this._quad[0]) * fi), this._quad[1] = ~~(this._quad[1] + x(this._quad[1]) * fi), this._quad[2] = ~~(this._quad[2] + x(this._quad[2]) * fi), this._quad[3] = ~~(this._quad[3] + x(this._quad[3]) * fi), this._quad[4] = ~~(this._quad[4] + x(this._quad[4]) * fi), this._quad[5] = ~~(this._quad[5] + x(this._quad[5]) * fi), this._quad[6] = ~~(this._quad[6] + x(this._quad[6]) * fi), this._quad[7] = ~~(this._quad[7] + x(this._quad[7]) * fi));
                const C = this._context.tint || this._defaultTint, A = this._getTextureIdForImage(t), T = _ || p, S = g || f, P = (e + this.uvPadding) / T, E = (i + this.uvPadding) / S, I = (e + m - this.uvPadding) / T, R = (i + v - this.uvPadding) / S, F = _, M = g, D = this._layout.vertexBuffer.bufferData;
                D[this._vertexIndex++] = this._quad[0], D[this._vertexIndex++] = this._quad[1], D[this._vertexIndex++] = y, D[this._vertexIndex++] = F, D[this._vertexIndex++] = M, D[this._vertexIndex++] = P, D[this._vertexIndex++] = E, D[this._vertexIndex++] = A, D[this._vertexIndex++] = C.r / 255, D[this._vertexIndex++] = C.g / 255, D[this._vertexIndex++] = C.b / 255, D[this._vertexIndex++] = C.a, D[this._vertexIndex++] = this._quad[4], D[this._vertexIndex++] = this._quad[5], D[this._vertexIndex++] = y, D[this._vertexIndex++] = F, D[this._vertexIndex++] = M, D[this._vertexIndex++] = P, D[this._vertexIndex++] = R, D[this._vertexIndex++] = A, D[this._vertexIndex++] = C.r / 255, D[this._vertexIndex++] = C.g / 255, D[this._vertexIndex++] = C.b / 255, D[this._vertexIndex++] = C.a, D[this._vertexIndex++] = this._quad[2], D[this._vertexIndex++] = this._quad[3], D[this._vertexIndex++] = y, D[this._vertexIndex++] = F, D[this._vertexIndex++] = M, D[this._vertexIndex++] = I, D[this._vertexIndex++] = E, D[this._vertexIndex++] = A, D[this._vertexIndex++] = C.r / 255, D[this._vertexIndex++] = C.g / 255, D[this._vertexIndex++] = C.b / 255, D[this._vertexIndex++] = C.a, D[this._vertexIndex++] = this._quad[6], D[this._vertexIndex++] = this._quad[7], D[this._vertexIndex++] = y, D[this._vertexIndex++] = F, D[this._vertexIndex++] = M, D[this._vertexIndex++] = I, D[this._vertexIndex++] = R, D[this._vertexIndex++] = A, D[this._vertexIndex++] = C.r / 255, D[this._vertexIndex++] = C.g / 255, D[this._vertexIndex++] = C.b / 255, D[this._vertexIndex++] = C.a;
            }
            hasPendingDraws() {
                return 0 !== this._imageCount;
            }
            flush() {
                if (0 === this._imageCount) return;
                const t = this._gl;
                this._shader.use(), this._layout.use(!0, 48 * this._imageCount), this._shader.setUniformMatrix("u_matrix", this._context.ortho), this._shader.setUniformBoolean("u_pixelart", this.pixelArtSampler), this._bindTextures(t), this._quads.bind(), t.drawElements(t.TRIANGLES, 6 * this._imageCount, this._quads.bufferGlType, 0), Et.DrawnImagesCount += this._imageCount, Et.DrawCallCount++, this._imageCount = 0, this._vertexIndex = 0, this._textures.length = 0, this._textureIndex = 0, this._textureToIndex.clear(), this._images.clear(), this._imageToWidth.clear(), this._imageToHeight.clear();
            }
        }
        class Bt {
            constructor(){
                this.type = "ex.rectangle", this.priority = 0, this._maxRectangles = 10922, this._rectangleCount = 0, this._vertexIndex = 0, this._transparent = R.Transparent, this._scratch1 = I(0, 0), this._scratch2 = I(0, 0), this._scratch3 = I(0, 0), this._scratch4 = I(0, 0);
            }
            initialize(t, e) {
                this._gl = t, this._context = e, this._shader = new Tt({
                    gl: t,
                    fragmentSource: "#version 300 es\r\n\r\nprecision mediump float;\r\n\r\n// UV coord\r\nin vec2 v_uv;\r\n\r\nin vec2 v_size; // in pixels\r\n\r\n// Color coord to blend with image\r\nin lowp vec4 v_color;\r\n\r\n// Stroke color if used\r\nin lowp vec4 v_strokeColor;\r\n\r\n// Stroke thickness if used\r\nin lowp float v_strokeThickness; // in pixels\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n    // modified from https://stackoverflow.com/questions/59197671/glsl-rounded-rectangle-with-variable-border\r\n    vec2 uv = v_uv;\r\n    vec2 fragCoord = uv * v_size;\r\n    float maxX = v_size.x - v_strokeThickness;\r\n    float minX = v_strokeThickness;\r\n    float maxY = v_size.y - v_strokeThickness;\r\n    float minY = v_strokeThickness;\r\n\r\n    if (fragCoord.x < maxX && fragCoord.x > minX &&\r\n        fragCoord.y < maxY && fragCoord.y > minY) {\r\n      fragColor = v_color;\r\n    } else {\r\n      fragColor = v_strokeColor;\r\n    }\r\n    fragColor.a *= v_opacity;\r\n    fragColor.rgb *= fragColor.a;\r\n\r\n    // vec2 v2CenteredPos     = abs(fragCoord - v_size.xy / 2.0);\r\n    // vec2 v2HalfShapeSizePx = v_size.xy/2.0 - v_strokeThickness/2.0;\r\n\r\n    // float fHalfBorderDist      = 0.0;\r\n    // float fHalfBorderThickness = 0.0;\r\n\r\n    // if (fragCoord.x > max(v_radius, v_strokeThickness) && \r\n    //     fragCoord.x < v_size.x - max(v_radius, v_strokeThickness))\r\n    // {\r\n    //     fHalfBorderDist      = v2CenteredPos.y - v2HalfShapeSizePx.y;\r\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\r\n    // }\r\n    // else if (fragCoord.y > max(v_radius, v_strokeThickness) && \r\n    //          fragCoord.y < v_size.y - max(v_radius, v_strokeThickness))\r\n    // {\r\n    //     fHalfBorderDist      = v2CenteredPos.x - v2HalfShapeSizePx.x;\r\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\r\n    // }\r\n    // else\r\n    // {\r\n    //     vec2 edgeVec = max(vec2(0.0), v_radius - vec2(\r\n    //         uv.x > 0.5 ? v_size.x - fragCoord.x : fragCoord.x,\r\n    //         uv.y > 0.5 ? v_size.y - fragCoord.y : fragCoord.y));\r\n        \r\n    //     float ellipse_ab    = v_radius-v_strokeThickness;\r\n    //     vec2 ellipse_isect = (v_strokeThickness > v_radius || v_strokeThickness > v_radius) ? vec2(0.0) :\r\n    //                             edgeVec.xy * ellipse_ab*ellipse_ab / length(ellipse_ab*edgeVec.yx); \r\n            \r\n    //     fHalfBorderThickness = (v_radius - length(ellipse_isect)) / 2.0;\r\n    //     fHalfBorderDist      = length(edgeVec) - (v_radius - fHalfBorderThickness);\r\n    // }\r\n\r\n    // vec4 v4FromColor = v_strokeColor;\r\n    // v4FromColor.rgb *= v4FromColor.a;\r\n    // vec4 v4ToColor   = vec4(0.0); // background color is transparent\r\n    // if (fHalfBorderDist < 0.0) {\r\n    //     v4ToColor = v_color;\r\n    //     v4ToColor.rgb *= v4ToColor.a;\r\n    // }\r\n\r\n    // float mixPct = abs(fHalfBorderDist) - fHalfBorderThickness;\r\n\r\n    // vec4 finalColor = mix(v4FromColor, v4ToColor, mixPct);\r\n    // gl_FragColor = finalColor;\r\n}",
                    vertexSource: "#version 300 es\r\nin vec2 a_position;\r\n\r\n// UV coordinate\r\nin vec2 a_uv;\r\nout vec2 v_uv;\r\n\r\nin vec2 a_size;\r\nout vec2 v_size;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\nin vec4 a_color;\r\nout vec4 v_color;\r\n\r\nin vec4 a_strokeColor;\r\nout vec4 v_strokeColor;\r\n\r\nin float a_strokeThickness;\r\nout float v_strokeThickness;\r\n\r\nuniform mat4 u_matrix;\r\n\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through UV coords\r\n   v_uv = a_uv;\r\n   // Pass through size\r\n   v_size = a_size;\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the color to the fragment shader\r\n   v_color = a_color;\r\n   // Pass through the stroke color to the fragment shader\r\n   v_strokeColor = a_strokeColor;\r\n   // Pass through the stroke thickenss to the fragment shader\r\n   v_strokeThickness = a_strokeThickness;\r\n}"
                }), this._shader.compile(), this._shader.use(), this._shader.setUniformMatrix("u_matrix", e.ortho), this._buffer = new St({
                    gl: t,
                    size: 64 * this._maxRectangles,
                    type: "dynamic"
                }), this._layout = new Pt({
                    gl: t,
                    shader: this._shader,
                    vertexBuffer: this._buffer,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_uv",
                            2
                        ],
                        [
                            "a_size",
                            2
                        ],
                        [
                            "a_opacity",
                            1
                        ],
                        [
                            "a_color",
                            4
                        ],
                        [
                            "a_strokeColor",
                            4
                        ],
                        [
                            "a_strokeThickness",
                            1
                        ]
                    ]
                }), this._quads = new Mt(t, this._maxRectangles, !0);
            }
            dispose() {
                this._buffer.dispose(), this._quads.dispose(), this._shader.dispose(), this._context = null, this._gl = null;
            }
            _isFull() {
                return this._rectangleCount >= this._maxRectangles;
            }
            draw(...t) {
                t[0] instanceof E && t[1] instanceof E ? this.drawLine.apply(this, t) : this.drawRectangle.apply(this, t);
            }
            drawLine(t, e, i, s = 1) {
                this._isFull() && this.flush(), this._rectangleCount++;
                const n = this._context.getTransform(), r = this._context.opacity, o = this._context.snapToPixel, a = e.sub(t), h = a.magnitude, l = a.normalize().perpendicular(), c = s / 2, d = n.multiply(l.scale(c, this._scratch1).add(t, this._scratch1), this._scratch1), u = n.multiply(l.scale(-c, this._scratch2).add(t, this._scratch2), this._scratch2), _ = n.multiply(l.scale(c, this._scratch3).add(e, this._scratch3), this._scratch3), g = n.multiply(l.scale(-c, this._scratch4).add(e, this._scratch4), this._scratch4);
                o && (d.x = ~~(d.x + fi), d.y = ~~(d.y + fi), _.x = ~~(_.x + fi), _.y = ~~(_.y + fi), u.x = ~~(u.x + fi), u.y = ~~(u.y + fi), g.x = ~~(g.x + fi), g.y = ~~(g.y + fi));
                const p = this._transparent, f = this._layout.vertexBuffer.bufferData;
                f[this._vertexIndex++] = d.x, f[this._vertexIndex++] = d.y, f[this._vertexIndex++] = 0, f[this._vertexIndex++] = 0, f[this._vertexIndex++] = h, f[this._vertexIndex++] = s, f[this._vertexIndex++] = r, f[this._vertexIndex++] = i.r / 255, f[this._vertexIndex++] = i.g / 255, f[this._vertexIndex++] = i.b / 255, f[this._vertexIndex++] = i.a, f[this._vertexIndex++] = p.r / 255, f[this._vertexIndex++] = p.g / 255, f[this._vertexIndex++] = p.b / 255, f[this._vertexIndex++] = p.a, f[this._vertexIndex++] = 0, f[this._vertexIndex++] = u.x, f[this._vertexIndex++] = u.y, f[this._vertexIndex++] = 0, f[this._vertexIndex++] = 1, f[this._vertexIndex++] = h, f[this._vertexIndex++] = s, f[this._vertexIndex++] = r, f[this._vertexIndex++] = i.r / 255, f[this._vertexIndex++] = i.g / 255, f[this._vertexIndex++] = i.b / 255, f[this._vertexIndex++] = i.a, f[this._vertexIndex++] = p.r / 255, f[this._vertexIndex++] = p.g / 255, f[this._vertexIndex++] = p.b / 255, f[this._vertexIndex++] = p.a, f[this._vertexIndex++] = 0, f[this._vertexIndex++] = _.x, f[this._vertexIndex++] = _.y, f[this._vertexIndex++] = 1, f[this._vertexIndex++] = 0, f[this._vertexIndex++] = h, f[this._vertexIndex++] = s, f[this._vertexIndex++] = r, f[this._vertexIndex++] = i.r / 255, f[this._vertexIndex++] = i.g / 255, f[this._vertexIndex++] = i.b / 255, f[this._vertexIndex++] = i.a, f[this._vertexIndex++] = p.r / 255, f[this._vertexIndex++] = p.g / 255, f[this._vertexIndex++] = p.b / 255, f[this._vertexIndex++] = p.a, f[this._vertexIndex++] = 0, f[this._vertexIndex++] = g.x, f[this._vertexIndex++] = g.y, f[this._vertexIndex++] = 1, f[this._vertexIndex++] = 1, f[this._vertexIndex++] = h, f[this._vertexIndex++] = s, f[this._vertexIndex++] = r, f[this._vertexIndex++] = i.r / 255, f[this._vertexIndex++] = i.g / 255, f[this._vertexIndex++] = i.b / 255, f[this._vertexIndex++] = i.a, f[this._vertexIndex++] = p.r / 255, f[this._vertexIndex++] = p.g / 255, f[this._vertexIndex++] = p.b / 255, f[this._vertexIndex++] = p.a, f[this._vertexIndex++] = 0;
            }
            drawRectangle(t, e, i, s, n = R.Transparent, r = 0) {
                this._isFull() && this.flush(), this._rectangleCount++;
                const o = this._context.getTransform(), a = this._context.opacity, h = this._context.snapToPixel, l = o.multiply(t.add(I(0, 0))), c = o.multiply(t.add(I(e, 0))), d = o.multiply(t.add(I(e, i))), u = o.multiply(t.add(I(0, i)));
                h && (l.x = ~~(l.x + fi), l.y = ~~(l.y + fi), c.x = ~~(c.x + fi), c.y = ~~(c.y + fi), u.x = ~~(u.x + fi), u.y = ~~(u.y + fi), d.x = ~~(d.x + fi), d.y = ~~(d.y + fi));
                const _ = this._layout.vertexBuffer.bufferData;
                _[this._vertexIndex++] = l.x, _[this._vertexIndex++] = l.y, _[this._vertexIndex++] = 0, _[this._vertexIndex++] = 0, _[this._vertexIndex++] = e, _[this._vertexIndex++] = i, _[this._vertexIndex++] = a, _[this._vertexIndex++] = s.r / 255, _[this._vertexIndex++] = s.g / 255, _[this._vertexIndex++] = s.b / 255, _[this._vertexIndex++] = s.a, _[this._vertexIndex++] = n.r / 255, _[this._vertexIndex++] = n.g / 255, _[this._vertexIndex++] = n.b / 255, _[this._vertexIndex++] = n.a, _[this._vertexIndex++] = r, _[this._vertexIndex++] = u.x, _[this._vertexIndex++] = u.y, _[this._vertexIndex++] = 0, _[this._vertexIndex++] = 1, _[this._vertexIndex++] = e, _[this._vertexIndex++] = i, _[this._vertexIndex++] = a, _[this._vertexIndex++] = s.r / 255, _[this._vertexIndex++] = s.g / 255, _[this._vertexIndex++] = s.b / 255, _[this._vertexIndex++] = s.a, _[this._vertexIndex++] = n.r / 255, _[this._vertexIndex++] = n.g / 255, _[this._vertexIndex++] = n.b / 255, _[this._vertexIndex++] = n.a, _[this._vertexIndex++] = r, _[this._vertexIndex++] = c.x, _[this._vertexIndex++] = c.y, _[this._vertexIndex++] = 1, _[this._vertexIndex++] = 0, _[this._vertexIndex++] = e, _[this._vertexIndex++] = i, _[this._vertexIndex++] = a, _[this._vertexIndex++] = s.r / 255, _[this._vertexIndex++] = s.g / 255, _[this._vertexIndex++] = s.b / 255, _[this._vertexIndex++] = s.a, _[this._vertexIndex++] = n.r / 255, _[this._vertexIndex++] = n.g / 255, _[this._vertexIndex++] = n.b / 255, _[this._vertexIndex++] = n.a, _[this._vertexIndex++] = r, _[this._vertexIndex++] = d.x, _[this._vertexIndex++] = d.y, _[this._vertexIndex++] = 1, _[this._vertexIndex++] = 1, _[this._vertexIndex++] = e, _[this._vertexIndex++] = i, _[this._vertexIndex++] = a, _[this._vertexIndex++] = s.r / 255, _[this._vertexIndex++] = s.g / 255, _[this._vertexIndex++] = s.b / 255, _[this._vertexIndex++] = s.a, _[this._vertexIndex++] = n.r / 255, _[this._vertexIndex++] = n.g / 255, _[this._vertexIndex++] = n.b / 255, _[this._vertexIndex++] = n.a, _[this._vertexIndex++] = r;
            }
            hasPendingDraws() {
                return 0 !== this._rectangleCount;
            }
            flush() {
                if (0 === this._rectangleCount) return;
                const t = this._gl;
                this._shader.use(), this._layout.use(!0), this._shader.setUniformMatrix("u_matrix", this._context.ortho), this._quads.bind(), t.drawElements(t.TRIANGLES, 6 * this._rectangleCount, this._quads.bufferGlType, 0), Et.DrawnImagesCount += this._rectangleCount, Et.DrawCallCount++, this._rectangleCount = 0, this._vertexIndex = 0;
            }
        }
        class kt {
            constructor(){
                this.type = "ex.circle", this.priority = 0, this._maxCircles = 10922, this._circleCount = 0, this._vertexIndex = 0;
            }
            initialize(t, e) {
                this._gl = t, this._context = e, this._shader = new Tt({
                    gl: t,
                    fragmentSource: "#version 300 es\r\nprecision highp float;\r\n\r\n// UV coord\r\nin vec2 v_uv;\r\n\r\n// Color coord to blend with image\r\nin lowp vec4 v_color;\r\n\r\n// Stroke color if used\r\nin lowp vec4 v_strokeColor;\r\n\r\n// Stroke thickness if used\r\nin lowp float v_strokeThickness;\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  // make (0, 0) the center the uv \r\n  vec2 uv = v_uv * 2.0 - 1.0;\r\n\r\n  vec4 color = v_color;\r\n  vec4 strokeColor = v_strokeColor;\r\n\r\n  // circle border is at radius 1.0 \r\n  // dist is > 0 when inside the circle \r\n  float d = length(uv);\r\n  float dist = 1.0 - length(uv);\r\n\r\n  // Fade based on fwidth\r\n  float fade = fwidth(dot(uv, uv));\r\n\r\n  // if dist is greater than 0 step to 1;\r\n  // when we cross this 0 threshold add a smooth fade\r\n  float fill = smoothstep(-fade/2.0, fade/2.0, dist);\r\n\r\n  // if dist is greater than the stroke thickness step to 1\r\n  float stroke = 1.0 - smoothstep(v_strokeThickness, v_strokeThickness + fade, dist);\r\n\r\n  strokeColor.a *= fill * stroke;\r\n  strokeColor.rgb *= strokeColor.a;\r\n\r\n  color.a *= fill * (1.0 - stroke);\r\n  color.rgb *= color.a;\r\n\r\n  vec4 finalColor = mix(vec4(0.0), (color + strokeColor), fill);\r\n  finalColor.rgb = finalColor.rgb * v_opacity;\r\n  finalColor.a = finalColor.a * v_opacity;\r\n  fragColor = finalColor;\r\n}",
                    vertexSource: "#version 300 es\r\nin vec2 a_position;\r\n\r\n// UV coordinate\r\nin vec2 a_uv;\r\nout vec2 v_uv;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\nin vec4 a_color;\r\nout vec4 v_color;\r\n\r\nin vec4 a_strokeColor;\r\nout vec4 v_strokeColor;\r\n\r\nin float a_strokeThickness;\r\nout float v_strokeThickness;\r\n\r\nuniform mat4 u_matrix;\r\n\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through UV coords\r\n   v_uv = a_uv;\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the color to the fragment shader\r\n   v_color = a_color;\r\n   // Pass through the stroke color to the fragment shader\r\n   v_strokeColor = a_strokeColor;\r\n   // Pass through the stroke thickenss to the fragment shader\r\n   v_strokeThickness = a_strokeThickness;\r\n}"
                }), this._shader.compile(), this._shader.use(), this._shader.setUniformMatrix("u_matrix", e.ortho), this._buffer = new St({
                    gl: t,
                    size: 56 * this._maxCircles,
                    type: "dynamic"
                }), this._layout = new Pt({
                    gl: t,
                    shader: this._shader,
                    vertexBuffer: this._buffer,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_uv",
                            2
                        ],
                        [
                            "a_opacity",
                            1
                        ],
                        [
                            "a_color",
                            4
                        ],
                        [
                            "a_strokeColor",
                            4
                        ],
                        [
                            "a_strokeThickness",
                            1
                        ]
                    ]
                }), this._quads = new Mt(t, this._maxCircles, !0);
            }
            dispose() {
                this._buffer.dispose(), this._quads.dispose(), this._shader.dispose(), this._context = null, this._gl = null;
            }
            _isFull() {
                return this._circleCount >= this._maxCircles;
            }
            draw(t, e, i, s = R.Transparent, n = 0) {
                this._isFull() && this.flush(), this._circleCount++;
                const r = this._context.getTransform(), o = this._context.opacity, a = this._context.snapToPixel, h = r.multiply(t.add(I(-e, -e))), l = r.multiply(t.add(I(e, -e))), c = r.multiply(t.add(I(e, e))), d = r.multiply(t.add(I(-e, e)));
                a && (h.x = ~~(h.x + fi), h.y = ~~(h.y + fi), l.x = ~~(l.x + fi), l.y = ~~(l.y + fi), d.x = ~~(d.x + fi), d.y = ~~(d.y + fi), c.x = ~~(c.x + fi), c.y = ~~(c.y + fi));
                const u = this._layout.vertexBuffer.bufferData;
                u[this._vertexIndex++] = h.x, u[this._vertexIndex++] = h.y, u[this._vertexIndex++] = 0, u[this._vertexIndex++] = 0, u[this._vertexIndex++] = o, u[this._vertexIndex++] = i.r / 255, u[this._vertexIndex++] = i.g / 255, u[this._vertexIndex++] = i.b / 255, u[this._vertexIndex++] = i.a, u[this._vertexIndex++] = s.r / 255, u[this._vertexIndex++] = s.g / 255, u[this._vertexIndex++] = s.b / 255, u[this._vertexIndex++] = s.a, u[this._vertexIndex++] = n / e, u[this._vertexIndex++] = d.x, u[this._vertexIndex++] = d.y, u[this._vertexIndex++] = 0, u[this._vertexIndex++] = 1, u[this._vertexIndex++] = o, u[this._vertexIndex++] = i.r / 255, u[this._vertexIndex++] = i.g / 255, u[this._vertexIndex++] = i.b / 255, u[this._vertexIndex++] = i.a, u[this._vertexIndex++] = s.r / 255, u[this._vertexIndex++] = s.g / 255, u[this._vertexIndex++] = s.b / 255, u[this._vertexIndex++] = s.a, u[this._vertexIndex++] = n / e, u[this._vertexIndex++] = l.x, u[this._vertexIndex++] = l.y, u[this._vertexIndex++] = 1, u[this._vertexIndex++] = 0, u[this._vertexIndex++] = o, u[this._vertexIndex++] = i.r / 255, u[this._vertexIndex++] = i.g / 255, u[this._vertexIndex++] = i.b / 255, u[this._vertexIndex++] = i.a, u[this._vertexIndex++] = s.r / 255, u[this._vertexIndex++] = s.g / 255, u[this._vertexIndex++] = s.b / 255, u[this._vertexIndex++] = s.a, u[this._vertexIndex++] = n / e, u[this._vertexIndex++] = c.x, u[this._vertexIndex++] = c.y, u[this._vertexIndex++] = 1, u[this._vertexIndex++] = 1, u[this._vertexIndex++] = o, u[this._vertexIndex++] = i.r / 255, u[this._vertexIndex++] = i.g / 255, u[this._vertexIndex++] = i.b / 255, u[this._vertexIndex++] = i.a, u[this._vertexIndex++] = s.r / 255, u[this._vertexIndex++] = s.g / 255, u[this._vertexIndex++] = s.b / 255, u[this._vertexIndex++] = s.a, u[this._vertexIndex++] = n / e;
            }
            hasPendingDraws() {
                return 0 !== this._circleCount;
            }
            flush() {
                if (0 === this._circleCount) return;
                const t = this._gl;
                this._shader.use(), this._layout.use(!0), this._shader.setUniformMatrix("u_matrix", this._context.ortho), this._quads.bind(), t.drawElements(t.TRIANGLES, 6 * this._circleCount, this._quads.bufferGlType, 0), Et.DrawnImagesCount += this._circleCount, Et.DrawCallCount++, this._circleCount = 0, this._vertexIndex = 0;
            }
        }
        class Lt {
            constructor(t, e, i = 100){
                this.builder = t, this.recycler = e, this.maxObjects = i, this.totalAllocations = 0, this.index = 0, this.objects = [], this.disableWarnings = !1, this._logger = k.getInstance();
            }
            dispose() {
                this.objects.length = 0;
            }
            preallocate() {
                for(let t = 0; t < this.maxObjects; t++)this.objects[t] = this.builder();
            }
            using(t) {
                const e = t(this);
                return e ? this.done(...e) : this.done();
            }
            borrow(t) {
                t(this.get()), this.index--;
            }
            get() {
                if (this.index === this.maxObjects && (this.disableWarnings || this._logger.warn("Max pooled objects reached, possible memory leak? Doubling"), this.maxObjects = 2 * this.maxObjects), this.objects[this.index]) return this.recycler ? this.recycler(this.objects[this.index++]) : this.objects[this.index++];
                this.totalAllocations++;
                return this.objects[this.index++] = this.builder();
            }
            done(...t) {
                this.index = 0;
                for (const e of t){
                    const t = this.objects.indexOf(e);
                    this.objects[t] = this.builder(), this.totalAllocations++;
                }
                return t;
            }
        }
        class zt {
            constructor(){
                this.z = 0, this.priority = 0, this.renderer = "", this.transform = $.identity(), this.state = {
                    z: 0,
                    opacity: 1,
                    tint: R.White,
                    material: null
                }, this.args = new Array(10);
            }
        }
        class Ut {
            constructor(t){
                this._logger = k.getInstance(), this._color = R.Transparent, this._initialized = !1, this._images = new Map, this._textures = new Map;
                const { color: e, name: i, vertexSource: s, fragmentSource: n, graphicsContext: r, images: o } = t;
                if (this._name = null != i ? i : "anonymous material", this._vertexSource = null != s ? s : "#version 300 es\nin vec2 a_position;\n\nin vec2 a_uv;\nout vec2 v_uv;\n\nin vec2 a_screenuv;\nout vec2 v_screenuv;\n\nuniform mat4 u_matrix;\nuniform mat4 u_transform;\n\nvoid main() {\n  // Set the vertex position using the ortho & transform matrix\n  gl_Position = u_matrix * u_transform * vec4(a_position, 0.0, 1.0);\n\n  // Pass through the UV coord to the fragment shader\n  v_uv = a_uv;\n  v_screenuv = a_screenuv;\n}\n", this._fragmentSource = n, this._color = null != e ? e : this._color, !r) throw Error(`Material ${i} must be provided an excalibur webgl graphics context`);
                if (r instanceof vi ? (this._graphicsContext = r, this._initialize(r)) : this._logger.warn(`Material ${i} was created in 2D Canvas mode, currently only WebGL is supported`), o) for(const t in o)this.addImageSource(t, o[t]);
            }
            _initialize(t) {
                if (this._initialized) return;
                const e = t.__gl;
                this._maxTextureSlots = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS) - 2, this._shader = t.createShader({
                    vertexSource: this._vertexSource,
                    fragmentSource: this._fragmentSource
                }), this._shader.compile(), this._initialized = !0;
            }
            get color() {
                return this._color;
            }
            set color(t) {
                this._color = t;
            }
            get name() {
                var t;
                return null !== (t = this._name) && void 0 !== t ? t : "anonymous material";
            }
            get isUsingScreenTexture() {
                return this._fragmentSource.includes("u_screen_texture");
            }
            update(t) {
                this._shader && (this._shader.use(), t(this._shader));
            }
            getShader() {
                return this._shader;
            }
            addImageSource(t, e) {
                this._images.size < this._maxTextureSlots ? this._images.set(t, e) : this._logger.warn(`Max number texture slots ${this._maxTextureSlots} have been reached for material "${this.name}", no more textures will be uploaded due to hardware constraints.`);
            }
            removeImageSource(t) {
                const e = this._images.get(t);
                this._graphicsContext.textureLoader.delete(e.image), this._images.delete(t);
            }
            _loadImageSource(t) {
                const e = t.image, i = e.getAttribute(dt.Filtering), s = i ? ht(i) : void 0, n = lt(e.getAttribute(dt.WrappingX)), r = lt(e.getAttribute(dt.WrappingY)), o = "true" === e.getAttribute("forceUpload"), a = this._graphicsContext.textureLoader.load(e, {
                    filtering: s,
                    wrapping: {
                        x: n,
                        y: r
                    }
                }, o);
                return e.removeAttribute("forceUpload"), this._textures.has(t) || this._textures.set(t, a), a;
            }
            uploadAndBind(t, e = 2) {
                let i = e;
                for (const [e, s] of this._images.entries()){
                    if (!s.isLoaded()) {
                        this._logger.warnOnce(`Image named ${e} in material ${this.name} not loaded, nothing will be uploaded to the shader. Did you forget to add this to a loader? https://excaliburjs.com/docs/loaders/`);
                        continue;
                    }
                    const n = this._loadImageSource(s);
                    t.activeTexture(t.TEXTURE0 + i), t.bindTexture(t.TEXTURE_2D, n), this._shader.trySetUniformInt(e, i), i++;
                }
            }
            use() {
                if (!this._initialized) throw Error(`Material ${this.name} not yet initialized, use the ExcaliburGraphicsContext.createMaterial() to work around this.`);
                this._shader.use(), this._shader.trySetUniformFloatColor("u_color", this._color);
            }
        }
        class Ot {
            constructor(){
                this.type = "ex.material", this.priority = 0, this._textures = [];
            }
            initialize(t, e) {
                this._gl = t, this._context = e, this._buffer = new St({
                    gl: t,
                    size: 24,
                    type: "dynamic"
                }), this._layout = new Pt({
                    gl: t,
                    vertexBuffer: this._buffer,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_uv",
                            2
                        ],
                        [
                            "a_screenuv",
                            2
                        ]
                    ],
                    suppressWarnings: !0
                }), this._quads = new Mt(t, 1, !0);
            }
            dispose() {
                this._buffer.dispose(), this._quads.dispose(), this._textures.length = 0, this._context = null, this._gl = null;
            }
            draw(t, e, i, s, n, r, o, a, h) {
                var l, c, d, u;
                const _ = this._gl, g = this._context.material;
                if (!g) return;
                const p = this._context.getTransform(), f = this._context.opacity, m = g.getShader(), v = this._layout.vertexBuffer.bufferData;
                let x = 0, w = (null == t ? void 0 : t.width) || s || 0, y = (null == t ? void 0 : t.height) || n || 0, b = [
                    0,
                    0,
                    null !== (l = null != s ? s : null == t ? void 0 : t.width) && void 0 !== l ? l : 0,
                    null !== (c = null != n ? n : null == t ? void 0 : t.height) && void 0 !== c ? c : 0
                ], C = [
                    null != e ? e : 1,
                    null != i ? i : 1
                ];
                void 0 !== r && void 0 !== o && void 0 !== a && void 0 !== h && (b = [
                    null != e ? e : 1,
                    null != i ? i : 1,
                    null !== (d = null != s ? s : null == t ? void 0 : t.width) && void 0 !== d ? d : 0,
                    null !== (u = null != n ? n : null == t ? void 0 : t.height) && void 0 !== u ? u : 0
                ], C = [
                    r,
                    o
                ], w = a, y = h), e = b[0], i = b[1];
                const A = b[2], T = b[3], S = I(C[0], C[1]), P = I(C[0] + w, C[1]), E = I(C[0], C[1] + y), R = I(C[0] + w, C[1] + y), F = t.width || w, M = t.height || y, D = e / F, B = i / M, k = (e + A - .01) / F, L = (i + T - .01) / M, z = p.getPosition(), U = z.add(R), O = z.x / this._context.width, H = z.y / this._context.height, N = U.x / this._context.width, W = U.y / this._context.height;
                v[x++] = S.x, v[x++] = S.y, v[x++] = D, v[x++] = B, v[x++] = O, v[x++] = H, v[x++] = E.x, v[x++] = E.y, v[x++] = D, v[x++] = L, v[x++] = O, v[x++] = W, v[x++] = P.x, v[x++] = P.y, v[x++] = k, v[x++] = B, v[x++] = N, v[x++] = H, v[x++] = R.x, v[x++] = R.y, v[x++] = k, v[x++] = L, v[x++] = N, v[x++] = W;
                const G = this._addImageAsTexture(t);
                g.use(), this._layout.shader = m, this._layout.use(!0), m.trySetUniformFloat("u_time_ms", performance.now()), m.trySetUniformFloat("u_opacity", f), m.trySetUniformFloatVector("u_resolution", I(this._context.width, this._context.height)), m.trySetUniformFloatVector("u_graphic_resolution", I(F, M)), m.trySetUniformFloatVector("u_size", I(A, T)), m.trySetUniformMatrix("u_matrix", this._context.ortho), m.trySetUniformMatrix("u_transform", p.to4x4()), _.activeTexture(_.TEXTURE0 + 0), _.bindTexture(_.TEXTURE_2D, G), m.trySetUniformInt("u_graphic", 0), _.activeTexture(_.TEXTURE0 + 1), _.bindTexture(_.TEXTURE_2D, this._context.materialScreenTexture), m.trySetUniformInt("u_screen_texture", 1), g.uploadAndBind(_), this._quads.bind(), _.drawElements(_.TRIANGLES, 6, this._quads.bufferGlType, 0), Et.DrawnImagesCount++, Et.DrawCallCount++;
            }
            _addImageAsTexture(t) {
                const e = t.getAttribute(dt.Filtering), i = e ? ht(e) : void 0, s = lt(t.getAttribute(dt.WrappingX)), n = lt(t.getAttribute(dt.WrappingY)), r = "true" === t.getAttribute("forceUpload"), o = this._context.textureLoader.load(t, {
                    filtering: i,
                    wrapping: {
                        x: s,
                        y: n
                    }
                }, r);
                return t.removeAttribute("forceUpload"), -1 === this._textures.indexOf(o) && this._textures.push(o), o;
            }
            hasPendingDraws() {
                return !1;
            }
            flush() {}
        }
        var Ht, Nt, Wt;
        !function(t) {
            t.World = "world", t.Screen = "screen";
        }(Ht || (Ht = {}));
        class Gt extends E {
            constructor(t){
                super(0, 0), this._getX = t.getX, this._getY = t.getY, this._setX = t.setX, this._setY = t.setY;
            }
            get x() {
                return this._x = this._getX();
            }
            set x(t) {
                this._setX(t), this._x = t;
            }
            get y() {
                return this._y = this._getY();
            }
            set y(t) {
                this._setY(t), this._y = t;
            }
        }
        class Vt extends E {
            constructor(t, e){
                super(t.x, t.y), this.original = t, this.change = e;
            }
            get x() {
                return this._x = this.original.x;
            }
            set x(t) {
                t !== this._x && (this.change(t, this._y), this._x = this.original.x = t);
            }
            get y() {
                return this._y = this.original.y;
            }
            set y(t) {
                t !== this._y && (this.change(this._x, t), this._y = this.original.y = t);
            }
            setTo(t, e) {
                this.x = t, this.y = e;
            }
        }
        class qt {
            constructor(){
                this._parent = null, this._children = [], this._pos = new Vt(I(0, 0), ()=>{
                    this.flagDirty();
                }), this._globalPos = new Gt({
                    getX: ()=>this.matrix.data[4],
                    getY: ()=>this.matrix.data[5],
                    setX: (t)=>{
                        if (this.parent) {
                            const { x: e } = this.parent.inverse.multiply(I(t, this.pos.y));
                            this.pos.x = e;
                        } else this.pos.x = t;
                        t !== this.matrix.data[4] && this.flagDirty();
                    },
                    setY: (t)=>{
                        if (this.parent) {
                            const { y: e } = this.parent.inverse.multiply(I(this.pos.x, t));
                            this.pos.y = e;
                        } else this.pos.y = t;
                        t !== this.matrix.data[5] && this.flagDirty();
                    }
                }), this._rotation = 0, this._scale = new Vt(I(1, 1), ()=>{
                    this.flagDirty();
                }), this._globalScale = new Gt({
                    getX: ()=>this.parent ? this.matrix.getScaleX() : this.scale.x,
                    getY: ()=>this.parent ? this.matrix.getScaleY() : this.scale.y,
                    setX: (t)=>{
                        if (this.parent) {
                            const e = this.parent.globalScale.x;
                            this.scale.x = t / e;
                        } else this.scale.x = t;
                    },
                    setY: (t)=>{
                        if (this.parent) {
                            const e = this.parent.globalScale.y;
                            this.scale.y = t / e;
                        } else this.scale.y = t;
                    }
                }), this._z = 0, this._isDirty = !1, this._isInverseDirty = !1, this._matrix = $.identity(), this._inverse = $.identity(), this._scratch = $.identity();
            }
            get parent() {
                return this._parent;
            }
            set parent(t) {
                if (this._parent) {
                    const t = this._parent._children.indexOf(this);
                    t > -1 && this._parent._children.splice(t, 1);
                }
                this._parent = t, this._parent && this._parent._children.push(this), this.flagDirty();
            }
            get children() {
                return this._children;
            }
            set pos(t) {
                this._pos.x = t.x, this._pos.y = t.y;
            }
            get pos() {
                return this._pos;
            }
            set globalPos(t) {
                let e = t.clone();
                this.parent && (e = this.parent.inverse.multiply(t)), e.equals(this._pos) || (this._pos = e, this.flagDirty());
            }
            get globalPos() {
                return this._globalPos;
            }
            set rotation(t) {
                const e = b(t);
                e !== this._rotation && this.flagDirty(), this._rotation = e;
            }
            get rotation() {
                return this._rotation;
            }
            set globalRotation(t) {
                let e = 0;
                this.parent && (e = this.parent.globalRotation);
                const i = b(t + e);
                i !== this._rotation && this.flagDirty(), this._rotation = i;
            }
            get globalRotation() {
                return this.parent ? this.matrix.getRotation() : this.rotation;
            }
            set scale(t) {
                this._scale.x = t.x, this._scale.y = t.y;
            }
            get scale() {
                return this._scale;
            }
            set globalScale(t) {
                let e = I(1, 1);
                this.parent && (e = this.parent.globalScale), this.scale = t.scale(I(1 / e.x, 1 / e.y));
            }
            get globalScale() {
                return this._globalScale;
            }
            set z(t) {
                this._z = t, this.flagDirty();
            }
            get z() {
                return this._z;
            }
            set globalZ(t) {
                this.parent ? this.z = t - this.parent.globalZ : this.z = t;
            }
            get globalZ() {
                return this.parent ? this.z + this.parent.globalZ : this.z;
            }
            get matrix() {
                return this._isDirty && (null === this.parent ? this._calculateMatrix().clone(this._matrix) : this.parent.matrix.multiply(this._calculateMatrix()).clone(this._matrix), this._isDirty = !1), this._matrix;
            }
            get inverse() {
                return this._isInverseDirty && (this.matrix.inverse(this._inverse), this._isInverseDirty = !1), this._inverse;
            }
            _calculateMatrix() {
                return this._scratch.data[0] = Math.cos(this._rotation), this._scratch.data[1] = Math.sin(this._rotation), this._scratch.data[2] = -Math.sin(this._rotation), this._scratch.data[3] = Math.cos(this.rotation), this._scratch.data[4] = this._pos.x, this._scratch.data[5] = this._pos.y, this._scratch.scale(this._scale.x, this._scale.y), this._scratch;
            }
            flagDirty() {
                this._isDirty = !0, this._isInverseDirty = !0;
                for(let t = 0; t < this._children.length; t++)this._children[t].flagDirty();
            }
            apply(t) {
                return this.matrix.multiply(t);
            }
            applyInverse(t) {
                return this.inverse.multiply(t);
            }
            setTransform(t, e, i) {
                this._pos.x = t.x, this._pos.y = t.y, this._rotation = b(e), this._scale.x = i.x, this._scale.y = i.y, this.flagDirty();
            }
            isMirrored() {
                return !!(x(this.scale.x) >>> 31 ^ x(this.scale.y) >>> 31);
            }
            clone(t) {
                const e = null != t ? t : new qt;
                return this._pos.clone(e._pos), e._z = this._z, e._rotation = this._rotation, this._scale.clone(e._scale), e.flagDirty(), e;
            }
            cloneWithParent(t) {
                const e = null != t ? t : new qt;
                return this._pos.clone(e._pos), e._z = this._z, e._rotation = this._rotation, this._scale.clone(e._scale), e.parent = this.parent, e.flagDirty(), e;
            }
            toString() {
                return this.matrix.toString();
            }
        }
        function Xt(t) {
            return !!t && !!t.prototype && !!t.prototype.constructor;
        }
        class Yt {
            constructor(){
                this.owner = void 0;
            }
            clone() {
                const t = new this.constructor;
                for(const i in this)if (this.hasOwnProperty(i)) {
                    const s = this[i];
                    (null == (e = s) ? void 0 : e.clone) && "owner" !== i && "clone" !== i ? t[i] = s.clone() : t[i] = s;
                }
                var e;
                return t;
            }
        }
        class Zt {
            constructor(){
                this.observers = [], this.subscriptions = [];
            }
            register(t) {
                this.observers.push(t);
            }
            subscribe(t) {
                this.subscriptions.push(t);
            }
            unregister(t) {
                const e = this.observers.indexOf(t);
                -1 !== e && this.observers.splice(e, 1);
            }
            unsubscribe(t) {
                const e = this.subscriptions.indexOf(t);
                -1 !== e && this.subscriptions.splice(e, 1);
            }
            notifyAll(t) {
                const e = this.observers.length;
                for(let i = 0; i < e; i++)this.observers[i].notify(t);
                const i = this.subscriptions.length;
                for(let e = 0; e < i; e++)this.subscriptions[e](t);
            }
            clear() {
                this.observers.length = 0, this.subscriptions.length = 0;
            }
        }
        class $t extends Yt {
            constructor(){
                super(...arguments), this._logger = k.getInstance(), this._parentComponent = null, this._transform = new qt, this._addChildTransform = (t)=>{
                    const e = t.get($t);
                    e && (e._transform.parent = this._transform, e._parentComponent = this);
                }, this.zIndexChanged$ = new Zt, this._coordPlane = Ht.World;
            }
            get() {
                return this._transform;
            }
            onAdd(t) {
                for (const e of t.children)this._addChildTransform(e);
                t.childrenAdded$.subscribe((t)=>this._addChildTransform(t)), t.childrenRemoved$.subscribe((t)=>{
                    const e = t.get($t);
                    e && (e._transform.parent = null, e._parentComponent = null);
                });
            }
            onRemove(t) {
                this._transform.parent = null, this._parentComponent = null;
            }
            get z() {
                return this._transform.z;
            }
            set z(t) {
                const e = this._transform.z;
                this._transform.z = t, e !== t && this.zIndexChanged$.notifyAll(t);
            }
            get globalZ() {
                return this._transform.globalZ;
            }
            set globalZ(t) {
                this._transform.globalZ = t;
            }
            get coordPlane() {
                return this._parentComponent ? this._parentComponent.coordPlane : this._coordPlane;
            }
            set coordPlane(t) {
                var e;
                this._parentComponent ? this._logger.warn(`Cannot set coordinate plane on child entity ${null === (e = this.owner) || void 0 === e ? void 0 : e.name}, children inherit their coordinate plane from their parents.`) : this._coordPlane = t;
            }
            get pos() {
                return this._transform.pos;
            }
            set pos(t) {
                this._transform.pos = t;
            }
            get globalPos() {
                return this._transform.globalPos;
            }
            set globalPos(t) {
                this._transform.globalPos = t;
            }
            get rotation() {
                return this._transform.rotation;
            }
            set rotation(t) {
                this._transform.rotation = t;
            }
            get globalRotation() {
                return this._transform.globalRotation;
            }
            set globalRotation(t) {
                this._transform.globalRotation = t;
            }
            get scale() {
                return this._transform.scale;
            }
            set scale(t) {
                this._transform.scale = t;
            }
            get globalScale() {
                return this._transform.globalScale;
            }
            set globalScale(t) {
                this._transform.globalScale = t;
            }
            applyInverse(t) {
                return this._transform.applyInverse(t);
            }
            apply(t) {
                return this._transform.apply(t);
            }
            clone() {
                const t = new $t;
                return t._transform = this._transform.clone(), t;
            }
        }
        !function(t) {
            t.Forward = "forward", t.Backward = "backward";
        }(Nt || (Nt = {})), function(t) {
            t.End = "end", t.Loop = "loop", t.PingPong = "pingpong", t.Freeze = "freeze";
        }(Wt || (Wt = {}));
        const jt = {
            Frame: "frame",
            Loop: "loop",
            End: "end"
        };
        class Kt extends nt {
            constructor(t){
                var e, i, s;
                super(t), this.events = new g, this.frames = [], this.strategy = Wt.Loop, this.frameDuration = 100, this._idempotencyToken = -1, this._firstTick = !0, this._currentFrame = 0, this._timeLeftInFrame = 0, this._pingPongDirection = 1, this._done = !1, this._playing = !0, this._speed = 1, this._reversed = !1, this.frames = t.frames, this.speed = null !== (e = t.speed) && void 0 !== e ? e : this.speed, this.strategy = null !== (i = t.strategy) && void 0 !== i ? i : this.strategy, this.frameDuration = t.totalDuration ? t.totalDuration / this.frames.length : null !== (s = t.frameDuration) && void 0 !== s ? s : this.frameDuration, t.reverse && this.reverse(), this.goToFrame(0);
            }
            clone() {
                return new Kt({
                    frames: this.frames.map((t)=>({
                            ...t
                        })),
                    frameDuration: this.frameDuration,
                    speed: this.speed,
                    reverse: this._reversed,
                    strategy: this.strategy,
                    ...this.cloneGraphicOptions()
                });
            }
            get width() {
                const t = this.currentFrame;
                return t && t.graphic ? Math.abs(t.graphic.width * this.scale.x) : 0;
            }
            get height() {
                const t = this.currentFrame;
                return t && t.graphic ? Math.abs(t.graphic.height * this.scale.y) : 0;
            }
            static fromSpriteSheet(t, e, i, s = Wt.Loop) {
                const n = t.sprites.length - 1, r = e.filter((t)=>t < 0 || t > n);
                return r.length && Kt._LOGGER.warn(`Indices into SpriteSheet were provided that don't exist: ${r.join(",")} no frame will be shown`), new Kt({
                    frames: t.sprites.filter((t, i)=>e.indexOf(i) > -1).map((t)=>({
                            graphic: t,
                            duration: i
                        })),
                    strategy: s
                });
            }
            static fromSpriteSheetCoordinates(t) {
                var e;
                const { spriteSheet: i, frameCoordinates: s, durationPerFrame: n, durationPerFrameMs: r, speed: o, strategy: a, reverse: h } = t, l = null !== (e = null != n ? n : r) && void 0 !== e ? e : 100, c = [];
                for (const t of s){
                    const { x: e, y: s, duration: n, options: r } = t, o = i.getSprite(e, s, r);
                    o ? c.push({
                        graphic: o,
                        duration: null != n ? n : l
                    }) : Kt._LOGGER.warn(`Skipping frame! SpriteSheet does not have coordinate (${e}, ${s}), please check your SpriteSheet to confirm that sprite exists`);
                }
                return new Kt({
                    frames: c,
                    strategy: a,
                    speed: o,
                    reverse: h
                });
            }
            get speed() {
                return this._speed;
            }
            set speed(t) {
                this._speed = w(Math.abs(t), 0, 1 / 0);
            }
            get currentFrame() {
                return this._currentFrame >= 0 && this._currentFrame < this.frames.length ? this.frames[this._currentFrame] : null;
            }
            get currentFrameIndex() {
                return this._currentFrame;
            }
            get currentFrameTimeLeft() {
                return this._timeLeftInFrame;
            }
            get isPlaying() {
                return this._playing;
            }
            get isReversed() {
                return this._reversed;
            }
            reverse() {
                this.frames = this.frames.slice().reverse(), this._reversed = !this._reversed;
            }
            get direction() {
                return !(!this._reversed || 1 !== this._pingPongDirection) ? Nt.Backward : Nt.Forward;
            }
            play() {
                this._playing = !0;
            }
            pause() {
                this._playing = !1, this._firstTick = !0;
            }
            reset() {
                this._done = !1, this._firstTick = !0, this._currentFrame = 0, this._timeLeftInFrame = this.frameDuration;
                const t = this.frames[this._currentFrame];
                t && (this._timeLeftInFrame = (null == t ? void 0 : t.duration) || this.frameDuration);
            }
            get canFinish() {
                switch(this.strategy){
                    case Wt.End:
                    case Wt.Freeze:
                        return !0;
                    default:
                        return !1;
                }
            }
            get done() {
                return this._done;
            }
            goToFrame(t, e) {
                this._currentFrame = t, this._timeLeftInFrame = null != e ? e : this.frameDuration;
                const i = this.frames[this._currentFrame];
                i && !this._done && (this._timeLeftInFrame = null != e ? e : (null == i ? void 0 : i.duration) || this.frameDuration, this.events.emit("frame", {
                    ...i,
                    frameIndex: this.currentFrameIndex
                }));
            }
            _nextFrame() {
                const t = this._currentFrame;
                if (this._done) return t;
                let e = -1;
                switch(this.strategy){
                    case Wt.Loop:
                        e = (t + 1) % this.frames.length, 0 === e && this.events.emit("loop", this);
                        break;
                    case Wt.End:
                        e = t + 1, e >= this.frames.length && (this._done = !0, this._currentFrame = this.frames.length, this.events.emit("end", this));
                        break;
                    case Wt.Freeze:
                        e = w(t + 1, 0, this.frames.length - 1), e >= this.frames.length - 1 && (this._done = !0, this.events.emit("end", this));
                        break;
                    case Wt.PingPong:
                        t + this._pingPongDirection >= this.frames.length && (this._pingPongDirection = -1, this.events.emit("loop", this)), t + this._pingPongDirection < 0 && (this._pingPongDirection = 1, this.events.emit("loop", this)), e = t + this._pingPongDirection % this.frames.length;
                }
                return e;
            }
            tick(t, e = 0) {
                this._idempotencyToken !== e && (this._idempotencyToken = e, this._playing && (this._firstTick && (this._firstTick = !1, this.events.emit("frame", {
                    ...this.currentFrame,
                    frameIndex: this.currentFrameIndex
                })), this._timeLeftInFrame -= t * this._speed, this._timeLeftInFrame <= 0 && this.goToFrame(this._nextFrame())));
            }
            _drawImage(t, e, i) {
                this.currentFrame && this.currentFrame.graphic && this.currentFrame.graphic.draw(t, e, i);
            }
        }
        Kt._LOGGER = k.getInstance();
        class Qt extends nt {
            constructor(t){
                var e;
                super(t), this._logger = k.getInstance(), this.useAnchor = !0, this.members = [], this.members = t.members, this.useAnchor = null !== (e = t.useAnchor) && void 0 !== e ? e : this.useAnchor, this._updateDimensions();
            }
            clone() {
                return new Qt({
                    members: [
                        ...this.members
                    ],
                    ...this.cloneGraphicOptions()
                });
            }
            _updateDimensions() {
                const t = this.localBounds;
                return this.width = t.width, this.height = t.height, t;
            }
            get localBounds() {
                const t = new U;
                for (const e of this.members)if (e instanceof nt) e.localBounds.combine(t, t);
                else {
                    const { graphic: i, offset: s, useBounds: n } = e;
                    i ? (void 0 === n || n) && i.localBounds.translate(s).combine(t, t) : this._logger.warnOnce(`Graphics group member has an null or undefined graphic, member definition: ${JSON.stringify(e)}.`);
                }
                return t;
            }
            _isAnimationOrGroup(t) {
                return t instanceof Kt || t instanceof Qt;
            }
            tick(t, e) {
                for (const i of this.members){
                    let s;
                    s = i instanceof nt ? i : i.graphic, this._isAnimationOrGroup(s) && s.tick(t, e);
                }
            }
            reset() {
                for (const t of this.members){
                    let e;
                    e = t instanceof nt ? t : t.graphic, this._isAnimationOrGroup(e) && e.reset();
                }
            }
            _preDraw(t, e, i) {
                this._updateDimensions(), super._preDraw(t, this.useAnchor ? e : 0, this.useAnchor ? i : 0);
            }
            _drawImage(t, e, i) {
                const s = E.Zero;
                for (const n of this.members){
                    let r;
                    n instanceof nt ? r = n : (r = n.graphic, n.offset.clone(s)), r && (t.save(), t.translate(e, i), r.draw(t, s.x, s.y), this.showDebug && t.debug.drawRect(0, 0, this.width, this.height), t.restore());
                }
            }
        }
        class Jt extends nt {
            constructor(t){
                var e, i, s, n, r, o, a, h, l, c;
                super(q({
                    ...t
                }, [
                    "width",
                    "height"
                ])), this.lineCap = "butt", this.quality = 1, this._dirty = !0, this._smoothing = !1, this._color = it(R.Black, ()=>this.flagDirty()), this._lineWidth = 1, this._lineDash = [], this._padding = 0, t && (this.quality = null !== (e = t.quality) && void 0 !== e ? e : this.quality, this.color = null !== (i = t.color) && void 0 !== i ? i : R.Black, this.strokeColor = null == t ? void 0 : t.strokeColor, this.smoothing = null !== (s = t.smoothing) && void 0 !== s ? s : this.smoothing, this.lineWidth = null !== (n = t.lineWidth) && void 0 !== n ? n : this.lineWidth, this.lineDash = null !== (r = t.lineDash) && void 0 !== r ? r : this.lineDash, this.lineCap = null !== (o = t.lineCap) && void 0 !== o ? o : this.lineCap, this.padding = null !== (a = t.padding) && void 0 !== a ? a : this.padding, this.filtering = null !== (h = t.filtering) && void 0 !== h ? h : this.filtering), this._bitmap = document.createElement("canvas");
                const d = null !== (l = null == t ? void 0 : t.width) && void 0 !== l ? l : this._bitmap.width, u = null !== (c = null == t ? void 0 : t.height) && void 0 !== c ? c : this._bitmap.height;
                this.width = d, this.height = u;
                const _ = this._bitmap.getContext("2d");
                if (!_) throw new Error("Browser does not support 2d canvas drawing, cannot create Raster graphic");
                this._ctx = _;
            }
            cloneRasterOptions() {
                return {
                    color: this.color ? this.color.clone() : void 0,
                    strokeColor: this.strokeColor ? this.strokeColor.clone() : void 0,
                    smoothing: this.smoothing,
                    lineWidth: this.lineWidth,
                    lineDash: this.lineDash,
                    lineCap: this.lineCap,
                    quality: this.quality,
                    padding: this.padding
                };
            }
            get dirty() {
                return this._dirty;
            }
            flagDirty() {
                this._dirty = !0;
            }
            get width() {
                return Math.abs(this._getTotalWidth() * this.scale.x);
            }
            set width(t) {
                t /= Math.abs(this.scale.x), this._bitmap.width = t, this._originalWidth = t, this.flagDirty();
            }
            get height() {
                return Math.abs(this._getTotalHeight() * this.scale.y);
            }
            set height(t) {
                t /= Math.abs(this.scale.y), this._bitmap.height = t, this._originalHeight = t, this.flagDirty();
            }
            _getTotalWidth() {
                var t;
                return 1 * ((null !== (t = this._originalWidth) && void 0 !== t ? t : this._bitmap.width) + 2 * this.padding);
            }
            _getTotalHeight() {
                var t;
                return 1 * ((null !== (t = this._originalHeight) && void 0 !== t ? t : this._bitmap.height) + 2 * this.padding);
            }
            get localBounds() {
                return U.fromDimension(this._getTotalWidth() * this.scale.x, this._getTotalHeight() * this.scale.y, E.Zero);
            }
            get smoothing() {
                return this._smoothing;
            }
            set smoothing(t) {
                this._smoothing = t, this.flagDirty();
            }
            get color() {
                return this._color;
            }
            set color(t) {
                this.flagDirty(), this._color = it(t, ()=>this.flagDirty());
            }
            get strokeColor() {
                return this._strokeColor;
            }
            set strokeColor(t) {
                this.flagDirty(), t && (this._strokeColor = it(t, ()=>this.flagDirty()));
            }
            get lineWidth() {
                return this._lineWidth;
            }
            set lineWidth(t) {
                this._lineWidth = t, this.flagDirty();
            }
            get lineDash() {
                return this._lineDash;
            }
            set lineDash(t) {
                this._lineDash = t, this.flagDirty();
            }
            get padding() {
                return this._padding;
            }
            set padding(t) {
                this._padding = t, this.flagDirty();
            }
            rasterize() {
                this._dirty = !1, this._ctx.clearRect(0, 0, this._getTotalWidth(), this._getTotalHeight()), this._ctx.save(), this._applyRasterProperties(this._ctx), this.execute(this._ctx), this._ctx.restore();
            }
            _applyRasterProperties(t) {
                var e, i, s, n;
                this._bitmap.width = this._getTotalWidth() * this.quality, this._bitmap.height = this._getTotalHeight() * this.quality, this._bitmap.setAttribute("filtering", this.filtering), this._bitmap.setAttribute("forceUpload", "true"), t.scale(this.quality, this.quality), t.translate(this.padding, this.padding), t.imageSmoothingEnabled = this.smoothing, t.lineWidth = this.lineWidth, t.setLineDash(null !== (e = this.lineDash) && void 0 !== e ? e : t.getLineDash()), t.lineCap = this.lineCap, t.strokeStyle = null !== (s = null === (i = this.strokeColor) || void 0 === i ? void 0 : i.toString()) && void 0 !== s ? s : "", t.fillStyle = null === (n = this.color) || void 0 === n ? void 0 : n.toString();
            }
            _drawImage(t, e, i) {
                this._dirty && this.rasterize(), t.scale(1 / this.quality, 1 / this.quality), t.drawImage(this._bitmap, e, i);
            }
        }
        var te, ee, ie, se, ne, re;
        function oe(t, e = R.Red, i, s, n, r, o = 1, a = "butt") {
            t.save(), t.beginPath(), t.lineWidth = o, t.lineCap = a, t.strokeStyle = e.toString(), t.moveTo(i, s), t.lineTo(n, r), t.closePath(), t.stroke(), t.restore();
        }
        function ae(t, e = R.Red, i) {
            t.beginPath(), t.strokeStyle = e.toString(), t.arc(i.x, i.y, 5, 0, 2 * Math.PI), t.closePath(), t.stroke();
        }
        function he(t, e, i, s, n = 1) {
            const r = e ? e.toString() : "blue", o = s.scale(n);
            t.beginPath(), t.strokeStyle = r, t.moveTo(i.x, i.y), t.lineTo(i.x + o.x, i.y + o.y), t.closePath(), t.stroke();
        }
        function le(t, e, i, s, n, r = 5, o = R.White, a = null) {
            let h;
            if ("number" == typeof r) h = {
                tl: r,
                tr: r,
                br: r,
                bl: r
            };
            else {
                const t = {
                    tl: 0,
                    tr: 0,
                    br: 0,
                    bl: 0
                };
                for(const e in t)if (t.hasOwnProperty(e)) {
                    const i = e;
                    h[i] = r[i] || t[i];
                }
            }
            t.beginPath(), t.moveTo(e + h.tl, i), t.lineTo(e + s - h.tr, i), t.quadraticCurveTo(e + s, i, e + s, i + h.tr), t.lineTo(e + s, i + n - h.br), t.quadraticCurveTo(e + s, i + n, e + s - h.br, i + n), t.lineTo(e + h.bl, i + n), t.quadraticCurveTo(e, i + n, e, i + n - h.bl), t.lineTo(e, i + h.tl), t.quadraticCurveTo(e, i, e + h.tl, i), t.closePath(), a && (t.fillStyle = a.toString(), t.fill()), o && (t.strokeStyle = o.toString(), t.stroke());
        }
        function ce(t, e, i, s, n = R.White, r = null) {
            t.beginPath(), t.arc(e, i, s, 0, 2 * Math.PI), t.closePath(), r && (t.fillStyle = r.toString(), t.fill()), n && (t.strokeStyle = n.toString(), t.stroke());
        }
        !function(t) {
            t.Em = "em", t.Rem = "rem", t.Px = "px", t.Pt = "pt", t.Percent = "%";
        }(te || (te = {})), function(t) {
            t.Left = "left", t.Right = "right", t.Center = "center", t.Start = "start", t.End = "end";
        }(ee || (ee = {})), function(t) {
            t.Top = "top", t.Hanging = "hanging", t.Middle = "middle", t.Alphabetic = "alphabetic", t.Ideographic = "ideographic", t.Bottom = "bottom";
        }(ie || (ie = {})), function(t) {
            t.Normal = "normal", t.Italic = "italic", t.Oblique = "oblique";
        }(se || (se = {})), function(t) {
            t.LeftToRight = "ltr", t.RightToLeft = "rtl";
        }(ne || (ne = {}));
        class de {
            constructor(t, e, i, s){
                this.font = t, this.text = e, this.color = i, this.maxWidth = s, this._textFragments = [], this.disposed = !1, this._dirty = !0, this.canvas = document.createElement("canvas");
                const n = this.canvas.getContext("2d");
                if (!n) throw new Error("Unable to create FontTextInstance, internal canvas failed to create");
                this.ctx = n, this.dimensions = this.measureText(e), this._setDimension(this.dimensions, this.ctx), this._lastHashCode = this.getHashCode();
            }
            measureText(t, e) {
                if (this.disposed) throw Error("Accessing disposed text instance! " + this.text);
                let i = null;
                i = null != e ? this._getLinesFromText(t, e) : t.split("\n");
                const s = i.reduce((t, e)=>t.length > e.length ? t : e);
                this._applyFont(this.ctx);
                const n = this.ctx.measureText(s);
                let r = Math.abs(n.actualBoundingBoxAscent) + Math.abs(n.actualBoundingBoxDescent);
                const o = r * i.length;
                r = o;
                const a = o - Math.abs(n.actualBoundingBoxAscent);
                return new U({
                    left: 0 - Math.abs(n.actualBoundingBoxLeft) - this.font.padding,
                    top: 0 - Math.abs(n.actualBoundingBoxAscent) - this.font.padding,
                    bottom: 0 + a + this.font.padding,
                    right: 0 + Math.abs(n.actualBoundingBoxRight) + this.font.padding
                });
            }
            _setDimension(t, e) {
                let i = 1;
                this.font.lineHeight && (i = this.font.lineHeight / this.font.size), e.canvas.width = 2 * (t.width + 2 * this.font.padding) * this.font.quality, e.canvas.height = 2 * (t.height + 2 * this.font.padding) * this.font.quality * i;
            }
            static getHashCode(t, e, i) {
                var s;
                return e + "__hashcode__" + t.fontString + t.showDebug + t.textAlign + t.baseAlign + t.direction + t.lineHeight + JSON.stringify(t.shadow) + (t.padding.toString() + t.smoothing.toString() + t.lineWidth.toString() + t.lineDash.toString() + (null === (s = t.strokeColor) || void 0 === s ? void 0 : s.toString()) + (i ? i.toString() : t.color.toString()));
            }
            getHashCode(t = !0) {
                return de.getHashCode(this.font, this.text, t ? this.color : void 0);
            }
            _applyRasterProperties(t) {
                var e, i, s;
                t.translate(this.font.padding, this.font.padding), t.imageSmoothingEnabled = this.font.smoothing, t.lineWidth = this.font.lineWidth, t.setLineDash(null !== (e = this.font.lineDash) && void 0 !== e ? e : t.getLineDash()), t.strokeStyle = null !== (s = null === (i = this.font.strokeColor) || void 0 === i ? void 0 : i.toString()) && void 0 !== s ? s : "", t.fillStyle = this.color.toString();
            }
            _applyFont(t) {
                t.resetTransform(), t.translate(this.font.padding + t.canvas.width / 2, this.font.padding + t.canvas.height / 2), t.scale(this.font.quality, this.font.quality), t.textAlign = this.font.textAlign, t.textBaseline = this.font.baseAlign, t.font = this.font.fontString, t.direction = this.font.direction, this.font.shadow && (this.font.shadow.color && (t.shadowColor = this.font.shadow.color.toString()), this.font.shadow.blur && (t.shadowBlur = this.font.shadow.blur), this.font.shadow.offset && (t.shadowOffsetX = this.font.shadow.offset.x, t.shadowOffsetY = this.font.shadow.offset.y));
            }
            _drawText(t, e, i) {
                this._applyRasterProperties(t), this._applyFont(t);
                for(let s = 0; s < e.length; s++){
                    const n = e[s];
                    this.color && t.fillText(n, 0, s * i), this.font.strokeColor && t.strokeText(n, 0, s * i);
                }
                this.font.showDebug && (oe(t, R.Green, -t.canvas.width / 2, 0, t.canvas.width / 2, 0, 2), oe(t, R.Red, 0, -t.canvas.height / 2, 0, t.canvas.height / 2, 2));
            }
            _splitTextBitmap(t) {
                const e = [];
                let i = 0, s = 0;
                const n = Math.min(4096, t.canvas.width), r = Math.min(4096, t.canvas.height);
                for(; i < t.canvas.width;){
                    for(; s < t.canvas.height;){
                        const o = document.createElement("canvas");
                        o.width = n, o.height = r;
                        const a = o.getContext("2d");
                        if (!a) throw new Error("Unable to split internal FontTextInstance bitmap, failed to create internal canvas");
                        a.drawImage(t.canvas, i, s, n, r, 0, 0, n, r), e.push({
                            x: i,
                            y: s,
                            canvas: o
                        }), s += r;
                    }
                    i += n, s = 0;
                }
                return e;
            }
            flagDirty() {
                this._dirty = !0;
            }
            render(t, e, i, s) {
                var n;
                if (this.disposed) throw Error("Accessing disposed text instance! " + this.text);
                this._ex = t;
                const r = this.getHashCode();
                if (this._lastHashCode !== r && (this._dirty = !0), this._dirty) {
                    this.dimensions = this.measureText(this.text, s), this._setDimension(this.dimensions, this.ctx);
                    const e = this._getLinesFromText(this.text, s), i = null !== (n = this.font.lineHeight) && void 0 !== n ? n : this.dimensions.height / e.length;
                    if (this._drawText(this.ctx, e, i), t instanceof vi) for (const e of this._textFragments)t.textureLoader.delete(e.canvas);
                    if (this._textFragments = this._splitTextBitmap(this.ctx), t instanceof vi) for (const e of this._textFragments)t.textureLoader.load(e.canvas, {
                        filtering: this.font.filtering
                    }, !0);
                    this._lastHashCode = r, this._dirty = !1;
                }
                for (const s of this._textFragments)t.drawImage(s.canvas, 0, 0, s.canvas.width, s.canvas.height, s.x / this.font.quality + e - this.ctx.canvas.width / this.font.quality / 2, s.y / this.font.quality + i - this.ctx.canvas.height / this.font.quality / 2, s.canvas.width / this.font.quality, s.canvas.height / this.font.quality);
            }
            dispose() {
                if (this.disposed = !0, this.dimensions = void 0, this.canvas = void 0, this.ctx = void 0, this._ex instanceof vi) for (const t of this._textFragments)this._ex.textureLoader.delete(t.canvas);
                this._textFragments.length = 0;
            }
            _getLinesFromText(t, e) {
                var i;
                if (this._cachedText === t && this._cachedRenderWidth === e && (null === (i = this._cachedLines) || void 0 === i ? void 0 : i.length)) return this._cachedLines;
                const s = t.split("\n");
                if (null == e) return s;
                for(let t = 0; t < s.length; t++){
                    let i = s[t], n = "";
                    if (this.measureText(i).width > e) {
                        for(; this.measureText(i).width > e;)n = i[i.length - 1] + n, i = i.slice(0, -1);
                        s[t] = i, s[t + 1] = n;
                    }
                }
                return this._cachedText = t, this._cachedLines = s, this._cachedRenderWidth = e, s;
            }
        }
        class ue {
            static measureText(t, e, i) {
                const s = de.getHashCode(e, t);
                if (ue._MEASURE_CACHE.has(s)) return ue._MEASURE_CACHE.get(s);
                ue._LOGGER.debug("Font text measurement cache miss");
                const n = e.measureTextWithoutCache(t, i);
                return ue._MEASURE_CACHE.set(s, n), n;
            }
            static getTextInstance(t, e, i) {
                const s = de.getHashCode(e, t, i);
                let n = ue._TEXT_CACHE.get(s);
                return n || (n = new de(e, t, i), ue._TEXT_CACHE.set(s, n), ue._LOGGER.debug("Font text instance cache miss")), ue._TEXT_USAGE.set(n, performance.now()), n;
            }
            static checkAndClearCache() {
                const t = [], e = new Set;
                for (const [i, s] of ue._TEXT_USAGE.entries())if (s + ue.FONT_TIMEOUT < performance.now()) ue._LOGGER.debug(`Text cache entry timed out ${i.text}`), t.push(i), i.dispose();
                else {
                    const t = i.getHashCode(!1);
                    e.add(t);
                }
                t.forEach((t)=>{
                    ue._TEXT_USAGE.delete(t);
                }), this._TEXT_CACHE.clear();
                for (const [t] of this._TEXT_USAGE.entries())this._TEXT_CACHE.set(t.getHashCode(), t);
                const i = new Map;
                for (const t of e)ue._MEASURE_CACHE.has(t) && i.set(t, ue._MEASURE_CACHE.get(t));
                this._MEASURE_CACHE.clear(), this._MEASURE_CACHE = i;
            }
            static get cacheSize() {
                return ue._TEXT_USAGE.size;
            }
            static clearCache() {
                for (const [t] of ue._TEXT_USAGE.entries())t.dispose();
                ue._TEXT_USAGE.clear(), ue._TEXT_CACHE.clear(), ue._MEASURE_CACHE.clear();
            }
        }
        ue.FONT_TIMEOUT = 500, ue._LOGGER = k.getInstance(), ue._TEXT_USAGE = new Map, ue._TEXT_CACHE = new Map, ue._MEASURE_CACHE = new Map;
        class _e extends nt {
            constructor(t = {}){
                var e, i, s, n, r, o, a, h, l, c, d, u, _, g, p, f, m, v, x, w;
                super(t), this.filtering = ot.Blended, this.quality = 2, this.padding = 2, this.smoothing = !1, this.lineWidth = 1, this.lineDash = [], this.color = R.Black, this.family = "sans-serif", this.style = se.Normal, this.bold = !1, this.unit = te.Px, this.textAlign = ee.Left, this.baseAlign = ie.Top, this.direction = ne.LeftToRight, this.lineHeight = void 0, this.size = 10, this._textBounds = new U, this._textMeasurement = new de(this, "", R.Black), this.smoothing = null !== (e = null == t ? void 0 : t.smoothing) && void 0 !== e ? e : this.smoothing, this.padding = null !== (i = null == t ? void 0 : t.padding) && void 0 !== i ? i : this.padding, this.color = null !== (s = null == t ? void 0 : t.color) && void 0 !== s ? s : this.color, this.strokeColor = null !== (n = null == t ? void 0 : t.strokeColor) && void 0 !== n ? n : this.strokeColor, this.lineDash = null !== (r = null == t ? void 0 : t.lineDash) && void 0 !== r ? r : this.lineDash, this.lineWidth = null !== (o = null == t ? void 0 : t.lineWidth) && void 0 !== o ? o : this.lineWidth, this.filtering = null !== (a = null == t ? void 0 : t.filtering) && void 0 !== a ? a : this.filtering, this.family = null !== (h = null == t ? void 0 : t.family) && void 0 !== h ? h : this.family, this.style = null !== (l = null == t ? void 0 : t.style) && void 0 !== l ? l : this.style, this.bold = null !== (c = null == t ? void 0 : t.bold) && void 0 !== c ? c : this.bold, this.size = null !== (d = null == t ? void 0 : t.size) && void 0 !== d ? d : this.size, this.unit = null !== (u = null == t ? void 0 : t.unit) && void 0 !== u ? u : this.unit, this.textAlign = null !== (_ = null == t ? void 0 : t.textAlign) && void 0 !== _ ? _ : this.textAlign, this.baseAlign = null !== (g = null == t ? void 0 : t.baseAlign) && void 0 !== g ? g : this.baseAlign, this.direction = null !== (p = null == t ? void 0 : t.direction) && void 0 !== p ? p : this.direction, this.lineHeight = null !== (f = null == t ? void 0 : t.lineHeight) && void 0 !== f ? f : this.lineHeight, this.quality = null !== (m = null == t ? void 0 : t.quality) && void 0 !== m ? m : this.quality, (null == t ? void 0 : t.shadow) && (this.shadow = {}, this.shadow.blur = null !== (v = t.shadow.blur) && void 0 !== v ? v : this.shadow.blur, this.shadow.offset = null !== (x = t.shadow.offset) && void 0 !== x ? x : this.shadow.offset, this.shadow.color = null !== (w = t.shadow.color) && void 0 !== w ? w : this.shadow.color);
            }
            clone() {
                return new _e({
                    ...this.cloneGraphicOptions(),
                    size: this.size,
                    unit: this.unit,
                    family: this.family,
                    style: this.style,
                    bold: this.bold,
                    textAlign: this.textAlign,
                    baseAlign: this.baseAlign,
                    direction: this.direction,
                    shadow: this.shadow ? {
                        blur: this.shadow.blur,
                        offset: this.shadow.offset,
                        color: this.shadow.color
                    } : void 0
                });
            }
            get fontString() {
                return `${this.style} ${this.bold ? "bold" : ""} ${this.size}${this.unit} ${this.family}`;
            }
            get localBounds() {
                return this._textBounds;
            }
            _drawImage(t, e, i) {}
            _rotate(t) {
                var e;
                const i = null !== (e = this.origin) && void 0 !== e ? e : this._textBounds.center;
                t.translate(i.x, i.y), t.rotate(this.rotation), t.translate(-i.x, -i.y);
            }
            _flip(t) {
                this.flipHorizontal && (t.translate(this._textBounds.width / this.scale.x, 0), t.scale(-1, 1)), this.flipVertical && (t.translate(0, -this._textBounds.height / 2 / this.scale.y), t.scale(1, -1));
            }
            measureTextWithoutCache(t, e) {
                return this._textMeasurement.measureText(t, e);
            }
            measureText(t, e) {
                return ue.measureText(t, this, e);
            }
            _postDraw(t) {
                t.restore();
            }
            render(t, e, i, s, n, r) {
                const o = ue.getTextInstance(e, this, i);
                this._textBounds = o.dimensions, this._preDraw(t, s, n), o.render(t, s, n, r), this._postDraw(t);
            }
        }
        class ge extends nt {
            constructor(t){
                var e, i;
                super(t), this._text = "", this._textWidth = 0, this._textHeight = 0, this.font = null !== (e = t.font) && void 0 !== e ? e : new _e, this.color = null !== (i = t.color) && void 0 !== i ? i : this.color, this.text = t.text, this.maxWidth = t.maxWidth;
            }
            clone() {
                var t, e;
                return new ge({
                    text: this.text.slice(),
                    color: null !== (e = null === (t = this.color) || void 0 === t ? void 0 : t.clone()) && void 0 !== e ? e : R.Black,
                    font: this.font.clone(),
                    maxWidth: this.maxWidth
                });
            }
            get text() {
                return this._text;
            }
            set text(t) {
                this._text = t, this._calculateDimension();
            }
            get font() {
                return this._font;
            }
            set font(t) {
                this._font = t;
            }
            get width() {
                return 0 === this._textWidth && this._calculateDimension(), this._textWidth * this.scale.x;
            }
            get height() {
                return 0 === this._textHeight && this._calculateDimension(), this._textHeight * this.scale.y;
            }
            _calculateDimension() {
                const { width: t, height: e } = this.font.measureText(this._text, this.maxWidth);
                this._textWidth = t, this._textHeight = e;
            }
            get localBounds() {
                return this.font.measureText(this._text, this.maxWidth).scale(this.scale);
            }
            _rotate(t) {}
            _flip(t) {}
            _preDraw(t, e, i) {
                (this.isStale() || this.font.isStale()) && (this.font.flipHorizontal = this.flipHorizontal, this.font.flipVertical = this.flipVertical, this.font.rotation = this.rotation, this.font.origin = this.origin, this.font.opacity = this.opacity), this.font.tint = this.tint, super._preDraw(t, e, i);
            }
            _drawImage(t, e, i) {
                var s;
                let n = R.Black;
                this.font instanceof _e && (n = null !== (s = this.color) && void 0 !== s ? s : this.font.color);
                const { width: r, height: o } = this.font.measureText(this._text, this.maxWidth);
                this._textWidth = r, this._textHeight = o, this.font.render(t, this._text, n, e, i, this.maxWidth), this.font.showDebug && (t.debug.drawRect(e - r, i - o, 2 * r, 2 * o), null != this.maxWidth && t.debug.drawRect(e, i, this.maxWidth, this.height, {
                    color: R.Yellow
                }));
            }
        }
        function pe(t) {
            return !!t.tick;
        }
        class fe extends Yt {
            get visible() {
                return this.isVisible;
            }
            set visible(t) {
                this.isVisible = t;
            }
            get offset() {
                return this._offset;
            }
            set offset(t) {
                this._offset = new Vt(t, ()=>this.recalculateBounds()), this.recalculateBounds();
            }
            get anchor() {
                return this._anchor;
            }
            set anchor(t) {
                this._anchor = new Vt(t, ()=>this.recalculateBounds()), this.recalculateBounds();
            }
            get color() {
                return this._color;
            }
            set color(t) {
                if (t) {
                    this._color = t.clone();
                    const e = this.graphics.current;
                    (e instanceof Jt || e instanceof ge) && (e.color = this._color);
                }
            }
            constructor(t){
                super(), this._logger = k.getInstance(), this._current = "default", this._graphics = {}, this._options = {}, this.material = null, this.isVisible = !0, this.forceOnScreen = !1, this.opacity = 1, this._offset = new Vt(E.Zero, ()=>this.recalculateBounds()), this._anchor = new Vt(E.Half, ()=>this.recalculateBounds()), this.flipHorizontal = !1, this.flipVertical = !1, this.copyGraphics = !1, t = {
                    visible: this.isVisible,
                    graphics: {},
                    ...t
                };
                const { current: e, anchor: i, color: s, opacity: n, visible: r, graphics: o, offset: a, copyGraphics: h, onPreDraw: l, onPostDraw: c, onPreTransformDraw: d, onPostTransformDraw: u } = t;
                for (const [t, e] of Object.entries(o))e instanceof nt ? this._graphics[t] = e : (this._graphics[t] = e.graphic, this._options[t] = e.options);
                this.offset = null != a ? a : this.offset, this.opacity = null != n ? n : this.opacity, this.anchor = null != i ? i : this.anchor, this.color = null != s ? s : this.color, this.copyGraphics = null != h ? h : this.copyGraphics, this.onPreDraw = null != l ? l : this.onPreDraw, this.onPostDraw = null != c ? c : this.onPostDraw, this.onPreDraw = null != d ? d : this.onPreTransformDraw, this.onPostTransformDraw = null != u ? u : this.onPostTransformDraw, this.isVisible = !!r, this._current = null != e ? e : this._current, e && this._graphics[e] && this.use(e);
            }
            getGraphic(t) {
                return this._graphics[t];
            }
            getOptions(t) {
                return this._options[t];
            }
            getNames() {
                return Object.keys(this._graphics);
            }
            get current() {
                return this._graphics[this._current];
            }
            get currentOptions() {
                return this._options[this._current];
            }
            get graphics() {
                return this._graphics;
            }
            get options() {
                return this._options;
            }
            add(t, e, i) {
                let s, n = "default", r = null;
                if ("string" == typeof t && e instanceof nt && (n = t, r = e, s = i), t instanceof nt && !(e instanceof nt) && (r = t, s = e), !r) throw new Error("Need to provide a graphic or valid graphic string");
                return this._graphics[n] = this.copyGraphics ? r.clone() : r, this._options[n] = this.copyGraphics ? {
                    ...s
                } : s, "default" === n && this.use("default"), r;
            }
            remove(t) {
                delete this._graphics[t], delete this._options[t], this._current === t && (this._current = "default", this.recalculateBounds());
            }
            use(t, e) {
                var i;
                if (t instanceof nt) {
                    let i = t;
                    this.copyGraphics && (i = t.clone()), this._current = "default", this._graphics[this._current] = i, this._options[this._current] = e;
                } else this._current = t, this._options[this._current] = e, this._current in this._graphics || this._logger.warn(`Graphic ${this._current} is not registered with the graphics component owned by ${null === (i = this.owner) || void 0 === i ? void 0 : i.name}. Nothing will be drawn.`);
                return this.recalculateBounds(), this.current;
            }
            hide() {
                this._current = "ex.none";
            }
            set localBounds(t) {
                this._localBounds = t;
            }
            recalculateBounds() {
                let t = new U;
                const e = this._graphics[this._current], i = this._options[this._current];
                if (!e) return void (this._localBounds = t);
                let s = this.anchor, n = this.offset;
                (null == i ? void 0 : i.anchor) && (s = i.anchor), (null == i ? void 0 : i.offset) && (n = i.offset);
                const r = e.localBounds, o = -r.width * s.x + n.x, a = -r.height * s.y + n.y;
                t = e instanceof Qt && !e.useAnchor ? null == e ? void 0 : e.localBounds.combine(t) : null == e ? void 0 : e.localBounds.translate(I(o, a)).combine(t), this._localBounds = t;
            }
            get localBounds() {
                return this._localBounds && !this._localBounds.hasZeroDimensions() || this.recalculateBounds(), this._localBounds;
            }
            get bounds() {
                let t = this.localBounds;
                if (this.owner) {
                    const e = this.owner.get($t);
                    e && (t = t.transform(e.get().matrix));
                }
                return t;
            }
            update(t, e = 0) {
                const i = this.current;
                i && pe(i) && i.tick(t, e);
            }
            clone() {
                const t = new fe;
                return t._graphics = {
                    ...this._graphics
                }, t._options = {
                    ...this._options
                }, t.offset = this.offset.clone(), this.color && (t.color = this.color.clone()), t.opacity = this.opacity, t.anchor = this.anchor.clone(), t.copyGraphics = this.copyGraphics, t.onPreDraw = this.onPreDraw, t.onPostDraw = this.onPostDraw, t.isVisible = this.isVisible, t;
            }
        }
        !function(t) {
            t.Kill = "kill", t.PreKill = "prekill", t.PostKill = "postkill", t.PreDraw = "predraw", t.PostDraw = "postdraw", t.PreDebugDraw = "predebugdraw", t.PostDebugDraw = "postdebugdraw", t.PreUpdate = "preupdate", t.PostUpdate = "postupdate", t.PreFrame = "preframe", t.PostFrame = "postframe", t.PreCollision = "precollision", t.CollisionStart = "collisionstart", t.CollisionEnd = "collisionend", t.PostCollision = "postcollision", t.Initialize = "initialize", t.Activate = "activate", t.Deactivate = "deactivate", t.ExitViewport = "exitviewport", t.EnterViewport = "enterviewport", t.ExitTrigger = "exit", t.EnterTrigger = "enter", t.Connect = "connect", t.Disconnect = "disconnect", t.Button = "button", t.Axis = "axis", t.Visible = "visible", t.Hidden = "hidden", t.Start = "start", t.Stop = "stop", t.PointerUp = "pointerup", t.PointerDown = "pointerdown", t.PointerMove = "pointermove", t.PointerEnter = "pointerenter", t.PointerLeave = "pointerleave", t.PointerCancel = "pointercancel", t.PointerWheel = "pointerwheel", t.Up = "up", t.Down = "down", t.Move = "move", t.Enter = "enter", t.Leave = "leave", t.Cancel = "cancel", t.Wheel = "wheel", t.Press = "press", t.Release = "release", t.Hold = "hold", t.PointerDragStart = "pointerdragstart", t.PointerDragEnd = "pointerdragend", t.PointerDragEnter = "pointerdragenter", t.PointerDragLeave = "pointerdragleave", t.PointerDragMove = "pointerdragmove", t.ActionStart = "actionstart", t.ActionComplete = "actioncomplete", t.Add = "add", t.Remove = "remove";
        }(re || (re = {}));
        class me {
            constructor(){
                this.other = null, this._bubbles = !0;
            }
            get bubbles() {
                return this._bubbles;
            }
            set bubbles(t) {
                this._bubbles = t;
            }
            stopPropagation() {
                this.bubbles = !1;
            }
        }
        class ve extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class xe extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class we extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class ye extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class be extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class Ce extends me {
            constructor(t, e, i){
                super(), this.ctx = t, this.elapsed = e, this.self = i, this.target = i;
            }
        }
        class Ae extends me {
            constructor(t, e, i){
                super(), this.ctx = t, this.elapsed = e, this.self = i, this.target = i;
            }
        }
        class Te extends me {
            constructor(t, e, i){
                super(), this.ctx = t, this.elapsed = e, this.self = i, this.target = i;
            }
        }
        class Se extends me {
            constructor(t, e, i){
                super(), this.ctx = t, this.elapsed = e, this.self = i, this.target = i;
            }
        }
        class Pe extends me {
            constructor(t, e){
                super(), this.ctx = t, this.self = e, this.target = e;
            }
        }
        class Ee extends me {
            constructor(t, e){
                super(), this.ctx = t, this.self = e, this.target = e;
            }
        }
        class Ie extends me {
            constructor(t, e, i){
                super(), this.engine = t, this.elapsed = e, this.self = i, this.target = i;
            }
        }
        class Re extends me {
            constructor(t, e, i){
                super(), this.engine = t, this.elapsed = e, this.self = i, this.target = i;
            }
        }
        class Fe extends me {
            constructor(t, e){
                super(), this.engine = t, this.prevStats = e, this.target = t;
            }
        }
        class Me extends me {
            constructor(t, e){
                super(), this.engine = t, this.stats = e, this.target = t;
            }
        }
        class De extends me {
            constructor(t, e){
                super(), this.index = t, this.gamepad = e, this.target = e;
            }
        }
        class Be extends me {
            constructor(t, e){
                super(), this.index = t, this.gamepad = e, this.target = e;
            }
        }
        class ke extends me {
            constructor(t, e, i, s){
                super(), this.button = t, this.index = e, this.value = i, this.self = s, this.target = s;
            }
        }
        class Le extends me {
            constructor(t, e, i){
                super(), this.axis = t, this.value = e, this.self = i, this.target = i;
            }
        }
        class ze extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class Ue extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class Oe extends me {
            constructor(t, e, i, s, n){
                super(), this.self = t, this.other = e, this.side = i, this.intersection = s, this.contact = n, this.target = t;
            }
        }
        class He extends me {
            constructor(t, e, i, s, n){
                super(), this.self = t, this.other = e, this.side = i, this.intersection = s, this.contact = n, this.target = t;
            }
        }
        class Ne {
            constructor(t, e, i, s){
                this.self = t, this.other = e, this.side = i, this.contact = s;
            }
        }
        class We {
            constructor(t, e, i, s){
                this.self = t, this.other = e, this.side = i, this.lastContact = s;
            }
        }
        class Ge {
            constructor(t, e, i, s, n){
                this.self = t, this.other = e, this.side = i, this.intersection = s, this.contact = n;
            }
        }
        class Ve {
            constructor(t, e, i, s, n){
                this.self = t, this.other = e, this.side = i, this.intersection = s, this.contact = n;
            }
        }
        class qe extends me {
            constructor(t, e, i, s){
                super(), this.self = t, this.other = e, this.side = i, this.contact = s, this.target = t;
            }
        }
        class Xe extends me {
            constructor(t, e, i, s){
                super(), this.self = t, this.other = e, this.side = i, this.lastContact = s, this.target = t;
            }
        }
        class Ye extends me {
            constructor(t, e){
                super(), this.engine = t, this.self = e, this.target = e;
            }
        }
        class Ze extends me {
            constructor(t, e){
                super(), this.context = t, this.self = e, this.target = e;
            }
        }
        class $e extends me {
            constructor(t, e){
                super(), this.context = t, this.self = e, this.target = e;
            }
        }
        class je extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class Ke extends me {
            constructor(t){
                super(), this.self = t, this.target = t;
            }
        }
        class Qe extends me {
            constructor(t, e){
                super(), this.self = t, this.entity = e, this.target = t;
            }
        }
        class Je extends me {
            constructor(t, e){
                super(), this.self = t, this.entity = e, this.target = t;
            }
        }
        class ti extends me {
            constructor(t, e){
                super(), this.action = t, this.self = e, this.target = e;
            }
        }
        class ei extends me {
            constructor(t, e){
                super(), this.action = t, this.self = e, this.target = e;
            }
        }
        class ii extends me {
            constructor(t, e){
                super(), this.engine = t, this.self = e, this.target = e;
            }
        }
        class si extends me {
            constructor(t, e){
                super(), this.engine = t, this.self = e, this.target = e;
            }
        }
        class ni {
            constructor(t){
                this.data = t, this.type = "Component Added";
            }
        }
        function ri(t) {
            return !!t && "Component Added" === t.type;
        }
        class oi {
            constructor(t){
                this.data = t, this.type = "Component Removed";
            }
        }
        function ai(t) {
            return !!t && "Component Removed" === t.type;
        }
        const hi = {
            Add: "add",
            Remove: "remove",
            Initialize: "initialize",
            PreUpdate: "preupdate",
            PostUpdate: "postupdate",
            Kill: "kill"
        };
        class li {
            constructor(t, e){
                let i, s;
                this.id = li._ID++, this.name = `Entity#${this.id}`, this.events = new g, this._tags = new Set, this.componentAdded$ = new Zt, this.componentRemoved$ = new Zt, this.tagAdded$ = new Zt, this.tagRemoved$ = new Zt, this.components = new Map, this.componentValues = [], this._componentsToRemove = [], this.scene = null, this.isActive = !0, this._parent = null, this.childrenAdded$ = new Zt, this.childrenRemoved$ = new Zt, this._children = [], this._isInitialized = !1, this._isAdded = !1;
                let n = !1;
                if (Array.isArray(t)) i = t, s = e;
                else if (t && "object" == typeof t) {
                    const { components: e, name: r, silenceWarnings: o } = t;
                    i = null != e ? e : [], s = r, n = !!o;
                }
                if (s && (this.name = s), i) for (const t of i)this.addComponent(t);
            }
            get active() {
                return this.isActive;
            }
            set active(t) {
                this.isActive = t;
            }
            kill() {
                this.isActive && (this.isActive = !1, this.unparent()), this.emit("kill", new ve(this));
            }
            isKilled() {
                return !this.isActive;
            }
            get tags() {
                return this._tags;
            }
            hasTag(t) {
                return this._tags.has(t);
            }
            addTag(t) {
                return this._tags.add(t), this.tagAdded$.notifyAll(t), this;
            }
            removeTag(t) {
                return this._tags.delete(t), this.tagRemoved$.notifyAll(t), this;
            }
            get types() {
                return Array.from(this.components.keys());
            }
            getComponents() {
                return Array.from(this.components.values());
            }
            hasAll(t) {
                for(let e = 0; e < t.length; e++)if (!this.components.has(t[e])) return !1;
                return !0;
            }
            hasAllTags(t) {
                for(let e = 0; e < t.length; e++)if (!this.tags.has(t[e])) return !1;
                return !0;
            }
            get(t) {
                return this.components.get(t);
            }
            get parent() {
                return this._parent;
            }
            get children() {
                return this._children;
            }
            unparent() {
                this._parent && (this._parent.removeChild(this), this._parent = null);
            }
            addChild(t) {
                if (null !== t.parent) throw new Error("Entity already has a parent, cannot add without unparenting");
                if (this.getAncestors().includes(t)) throw new Error("Cycle detected, cannot add entity");
                return this._children.push(t), t._parent = this, this.childrenAdded$.notifyAll(t), this;
            }
            removeChild(t) {
                return t.parent === this && (N(t, this._children), t._parent = null, this.childrenRemoved$.notifyAll(t)), this;
            }
            removeAllChildren() {
                for(let t = this.children.length - 1; t >= 0; t--)this.removeChild(this.children[t]);
                return this;
            }
            getAncestors() {
                const t = [
                    this
                ];
                let e = this.parent;
                for(; e;)t.push(e), e = e.parent;
                return t.reverse();
            }
            getDescendants() {
                let t = [
                    this
                ], e = [
                    this
                ];
                for(; e.length > 0;){
                    const i = e.pop();
                    i && (e = e.concat(i.children), t = t.concat(i.children));
                }
                return t;
            }
            clone() {
                const t = new li;
                for (const e of this.types){
                    const i = this.get(e);
                    i && t.addComponent(i.clone());
                }
                for (const e of this.children)t.addChild(e.clone());
                return t;
            }
            addTemplate(t, e = !1) {
                for (const i of t.getComponents())this.addComponent(i.clone(), e);
                for (const e of t.children)this.addChild(e.clone().addTemplate(e));
                return this;
            }
            _getClassHierarchyRoot(t) {
                var e, i;
                let s = t, n = null === (e = Object.getPrototypeOf(s.prototype)) || void 0 === e ? void 0 : e.constructor;
                for(; n && n !== Object && n !== Yt;)s = n, n = null === (i = Object.getPrototypeOf(s.prototype)) || void 0 === i ? void 0 : i.constructor;
                return s;
            }
            addComponent(t, e = !1) {
                if (this.has(t.constructor)) {
                    if (!e) return this;
                    this.removeComponent(t.constructor, !0);
                }
                if (t.dependencies && t.dependencies.length) for (const e of t.dependencies)this.addComponent(new e);
                t.owner = this;
                const i = this._getClassHierarchyRoot(t.constructor);
                return this.components.set(i, t), this.components.set(t.constructor, t), this.componentValues.push(t), t.onAdd && t.onAdd(this), this.componentAdded$.notifyAll(t), this;
            }
            removeComponent(t, e = !1) {
                let i;
                if (i = Xt(t) ? t : t.constructor, e) {
                    const t = this.components.get(i);
                    if (t) {
                        this.componentRemoved$.notifyAll(t), t.owner = void 0, t.onRemove && t.onRemove(this);
                        const e = this.componentValues.indexOf(t);
                        e > -1 && this.componentValues.splice(e, 1);
                    }
                    const e = this._getClassHierarchyRoot(i);
                    this.components.delete(e), this.components.delete(i);
                } else this._componentsToRemove.push(i);
                return this;
            }
            clearComponents() {
                const t = this.types;
                for (const e of t)this.removeComponent(e);
            }
            processComponentRemoval() {
                for (const t of this._componentsToRemove)this.removeComponent(t, !0);
                this._componentsToRemove.length = 0;
            }
            has(t) {
                return this.components.has(t);
            }
            get isInitialized() {
                return this._isInitialized;
            }
            get isAdded() {
                return this._isAdded;
            }
            _initialize(t) {
                this.isInitialized || (this.onInitialize(t), this.events.emit("initialize", new Ye(t, this)), this._isInitialized = !0);
            }
            _add(t) {
                !this.isAdded && this.isActive && (this.onAdd(t), this.events.emit("add", new ii(t, this)), this._isAdded = !0);
            }
            _remove(t) {
                this.isAdded && !this.isActive && (this.onRemove(t), this.events.emit("remove", new si(t, this)), this._isAdded = !1);
            }
            _preupdate(t, e) {
                this.events.emit("preupdate", new Ie(t, e, this)), this.onPreUpdate(t, e);
            }
            _postupdate(t, e) {
                this.events.emit("postupdate", new Re(t, e, this)), this.onPostUpdate(t, e);
            }
            onInitialize(t) {}
            onAdd(t) {}
            onRemove(t) {}
            onPreUpdate(t, e) {}
            onPostUpdate(t, e) {}
            update(t, e) {
                this._initialize(t), this._add(t), this._preupdate(t, e);
                for (const i of this.children)i.update(t, e);
                this._postupdate(t, e), this._remove(t);
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                e ? this.events.off(t, e) : this.events.off(t);
            }
        }
        li._ID = 0;
        class ci extends Yt {
            constructor(){
                super(...arguments), this.vel = E.Zero, this.acc = E.Zero, this.scaleFactor = E.Zero, this.angularVelocity = 0, this.torque = 0, this.inertia = 1;
            }
        }
        class di {
            static integrate(t, e, i, s) {
                const n = s / 1e3;
                e.vel.addEqual(i.scale(n, di._ACC)), t.pos.add(e.vel.scale(n, di._VEL), di._POS).addEqual(i.scale(.5 * n * n, di._VEL_ACC)), e.angularVelocity += e.torque * (1 / e.inertia) * n;
                const r = t.rotation + e.angularVelocity * n;
                t.scale.add(e.scaleFactor.scale(n, this._SCALE_FACTOR), di._SCALE);
                t.get().setTransform(di._POS, r, di._SCALE);
            }
        }
        di._POS = new E(0, 0), di._SCALE = new E(1, 1), di._ACC = new E(0, 0), di._VEL = new E(0, 0), di._VEL_ACC = new E(0, 0), di._SCALE_FACTOR = new E(0, 0);
        class ui extends li {
            constructor(t){
                super({
                    silenceWarnings: !0
                }), this.beginColor = R.White, this.endColor = R.White, this.life = 300, this.fade = !1, this._rRate = 1, this._gRate = 1, this._bRate = 1, this._aRate = 0, this._currentColor = R.White, this.size = 5, this.sizeRate = 0, this.visible = !0, this.isOffscreen = !1, this.particleTransform = _i.Global, this.name = `Particle#${this.id}`, this.addComponent(this.transform = new $t), this.addComponent(this.motion = new ci), this.addComponent(this.graphics = new fe), this.configure(t);
            }
            registerEmitter(t) {
                if (this._emitter = t, this.particleTransform === _i.Global) {
                    const t = this._emitter.transform.globalPos;
                    this.transform.pos = this.transform.pos.add(t), this.motion.vel = this.motion.vel.rotate(this._emitter.transform.globalRotation);
                }
            }
            configure(t) {
                var e, i, s, n, r, o, a, h, l, c, d, u, _, g;
                this.particleTransform = null !== (e = t.transform) && void 0 !== e ? e : this.particleTransform, this.life = null !== (i = t.life) && void 0 !== i ? i : this.life, this.fade = null !== (s = t.fade) && void 0 !== s ? s : this.fade, this.size = null !== (n = t.size) && void 0 !== n ? n : this.size, this.endColor = null !== (r = t.endColor) && void 0 !== r ? r : this.endColor.clone(), this.beginColor = null !== (o = t.beginColor) && void 0 !== o ? o : this.beginColor.clone(), this._currentColor = this.beginColor.clone(), this.graphic = t.graphic, this.graphics.opacity = null !== (a = t.opacity) && void 0 !== a ? a : this.graphics.opacity, this.transform.pos = null !== (h = t.pos) && void 0 !== h ? h : this.transform.pos, this.transform.rotation = null !== (l = t.rotation) && void 0 !== l ? l : 0, this.transform.scale = I(1, 1), this.motion.vel = null !== (c = t.vel) && void 0 !== c ? c : this.motion.vel, this.motion.angularVelocity = null !== (d = t.angularVelocity) && void 0 !== d ? d : 0, this.motion.acc = null !== (u = t.acc) && void 0 !== u ? u : this.motion.acc, this._rRate = (this.endColor.r - this.beginColor.r) / this.life, this._gRate = (this.endColor.g - this.beginColor.g) / this.life, this._bRate = (this.endColor.b - this.beginColor.b) / this.life, this._aRate = this.graphics.opacity / this.life, this.startSize = null !== (_ = t.startSize) && void 0 !== _ ? _ : 0, this.endSize = null !== (g = t.endSize) && void 0 !== g ? g : 0, this.endSize > 0 && this.startSize > 0 && (this.sizeRate = (this.endSize - this.startSize) / this.life, this.size = this.startSize), this.graphic ? (this.graphics.use(this.graphic), this.graphics.onPostDraw = void 0) : (this.graphics.localBounds = U.fromDimension(this.size, this.size, E.Half), this.graphics.onPostDraw = (t)=>{
                    t.save(), t.debug.drawPoint(I(0, 0), {
                        color: this._currentColor,
                        size: this.size
                    }), t.restore();
                });
            }
            kill() {
                var t;
                (null === (t = this._emitter) || void 0 === t ? void 0 : t.isActive) ? this._emitter.removeParticle(this) : super.kill();
            }
            update(t, e) {
                this.life = this.life - e, this.life < 0 && this.kill(), this.fade && (this.graphics.opacity = w(this._aRate * this.life, 1e-4, 1)), this.startSize && this.endSize && this.startSize > 0 && this.endSize > 0 && (this.size = w(this.sizeRate * e + this.size, Math.min(this.startSize, this.endSize), Math.max(this.startSize, this.endSize))), this._currentColor.r = w(this._currentColor.r + this._rRate * e, 0, 255), this._currentColor.g = w(this._currentColor.g + this._gRate * e, 0, 255), this._currentColor.b = w(this._currentColor.b + this._bRate * e, 0, 255), this._currentColor.a = this.graphics.opacity;
                let i = this.motion.acc;
                this.focus && (i = this.focus.sub(this.transform.pos).normalize().scale(this.focusAccel || 0).scale(e / 1e3)), di.integrate(this.transform, this.motion, i, e);
            }
        }
        var _i;
        ui.DefaultConfig = {
            beginColor: R.White,
            endColor: R.White,
            life: 300,
            fade: !1,
            size: 5,
            graphic: void 0,
            startSize: void 0,
            endSize: void 0
        }, function(t) {
            t.Global = "global", t.Local = "local";
        }(_i || (_i = {}));
        class gi {
            constructor(){
                this.type = "ex.particle", this.priority = 0;
            }
            initialize(t, e) {
                this._gl = t, this._context = e, this._shader = new Tt({
                    gl: t,
                    vertexSource: "#version 300 es\r\nprecision mediump float;\r\n\r\nuniform float deltaMs;\r\nuniform float maxLifeMs;\r\nuniform vec2 gravity;\r\nuniform vec2 focus;\r\nuniform float focusAccel;\r\nuniform mat4 u_matrix;\r\nuniform mat4 u_transform;\r\nuniform float startSize;\r\nuniform float endSize;\r\n// uniform sampler2D obstacle;\r\n\r\nlayout(location=0)in vec2 position;\r\nlayout(location=1)in vec2 velocity;\r\nlayout(location=2)in float rotation;\r\nlayout(location=3)in float angularVelocity;\r\nlayout(location=4)in float lifeMs;\r\n\r\n// TODO z index to handle buffer wrapping?\r\n\r\n// DO NOT RE-ORDER\r\nout vec2 finalPosition;\r\nout vec2 finalVelocity;\r\nout float finalRotation;\r\nout float finalAngularVelocity;\r\nout float finalLifeMs;\r\nvoid main(){\r\n  // Evolve particle\r\n  float seconds = deltaMs / 1000.;\r\n  // euler integration\r\n  // Weird artifact of re-using the same buffer layout for update/draw\r\n  // we need differently named variables\r\n  vec2 finalGravity = gravity + normalize(focus - position) * focusAccel;\r\n  finalVelocity = velocity + finalGravity * seconds;\r\n  finalPosition = position + velocity * seconds + finalGravity * .5 * seconds * seconds;\r\n  finalRotation = rotation + angularVelocity * seconds;\r\n  finalAngularVelocity = angularVelocity;\r\n  finalLifeMs = clamp(lifeMs - deltaMs, 0., maxLifeMs);\r\n\r\n  // Collision mask sampling\r\n  // vec2 samplePoint = finalPosition / vec2(width, height);\r\n  // vec4 collides = texture(obstacle, samplePoint);\r\n  // if (distance(collides,vec4(0.)) > .01) {\r\n  //   // non opaque means we collide! recalc final pos/vel\r\n  //   vec2 newVelocity = velocity * -.1;// lose energy\r\n  //   finalVelocity = newVelocity + gravity * seconds;\r\n  //   finalPosition = position + newVelocity * seconds + gravity * .5 * seconds * seconds;\r\n  // }\r\n\r\n  float lifePercent = finalLifeMs / maxLifeMs;\r\n  vec2 transformedPos = (u_matrix * u_transform * vec4(finalPosition,0.,1.)).xy;\r\n  float scale = sqrt(u_transform[0][0] * u_transform[0][0] + u_transform[1][1] * u_transform[1][1]);\r\n  gl_Position = vec4(transformedPos, 1.0 - lifePercent, 1.); // use life percent to sort z\r\n  gl_PointSize = mix(startSize, endSize, 1.0 - lifePercent) * scale;\r\n}",
                    fragmentSource: "#version 300 es\r\nprecision mediump float;\r\n\r\nuniform sampler2D graphic;\r\nuniform bool useTexture;\r\nuniform float maxLifeMs;\r\n\r\nuniform vec4 beginColor;\r\nuniform vec4 endColor;\r\nuniform bool fade;\r\nuniform float startOpacity;\r\n\r\nin float finalRotation;\r\nin float finalLifeMs;\r\nout vec4 fragColor;\r\n\r\nvoid main(){\r\n\r\n  float lifePct = finalLifeMs / maxLifeMs;\r\n\r\n  if (useTexture) {\r\n    /** Draw texture */\r\n    if (lifePct <= 0.) discard;\r\n    float mid = .5;\r\n    float cosine = cos(finalRotation);\r\n    float sine = sin(finalRotation);\r\n    vec2 rotated = vec2(cosine * (gl_PointCoord.x - mid) + sine * (gl_PointCoord.y - mid) + mid,\r\n                        cosine * (gl_PointCoord.y - mid) - sine * (gl_PointCoord.x - mid) + mid);\r\n    vec4 color = texture(graphic, rotated);\r\n    fragColor = color * (fade ? lifePct : 1.0);\r\n  } else {\r\n    /** Draw circle */\r\n    if (lifePct <= 0.) discard;\r\n    vec2 uv = gl_PointCoord.xy * 2.0 - 1.0;\r\n    float dist = 1.0 - length(uv);\r\n    float edge = fwidth(dot(uv, uv));\r\n    float circle = smoothstep(-edge/2.0, edge/2.0, dist);\r\n    vec3 color = mix(beginColor.rgb, endColor.rgb, 1.0 - lifePct);\r\n    fragColor.rgb = color;\r\n    fragColor.a = startOpacity * circle * (fade ? lifePct : 1.0);// * mix(beginColor.a, endColor.a, 1.0 - lifePct);\r\n    fragColor.rgb *= fragColor.a;\r\n  }\r\n}",
                    onPreLink: (e)=>{
                        t.transformFeedbackVaryings(e, [
                            "finalPosition",
                            "finalVelocity",
                            "finalRotation",
                            "finalAngularVelocity",
                            "finalLifeMs"
                        ], t.INTERLEAVED_ATTRIBS);
                    }
                }), this._shader.compile(), this._shader.use(), this._shader.setUniformMatrix("u_matrix", this._context.ortho);
            }
            _getTexture(t) {
                const e = t.getAttribute(dt.Filtering), i = e ? ht(e) : void 0, s = lt(t.getAttribute(dt.WrappingX)), n = lt(t.getAttribute(dt.WrappingY)), r = "true" === t.getAttribute("forceUpload"), o = this._context.textureLoader.load(t, {
                    filtering: i,
                    wrapping: {
                        x: s,
                        y: n
                    }
                }, r);
                return t.removeAttribute("forceUpload"), o;
            }
            draw(t, e) {
                var i, s, n, r, o, a, h, l, c;
                const d = this._gl;
                this._shader.use(), this._shader.setUniformMatrix("u_matrix", this._context.ortho);
                const u = t.particle.transform === _i.Local ? this._context.getTransform() : this._context.getTransform().multiply(t.emitter.transform.get().inverse);
                this._shader.setUniformAffineMatrix("u_transform", u), this._shader.setUniformBoolean("fade", !!t.particle.fade), this._shader.setUniformBoolean("useTexture", !!t.particle.graphic), this._shader.setUniformFloat("maxLifeMs", null !== (i = t.particle.life) && void 0 !== i ? i : 2e3), this._shader.setUniformFloat("deltaMs", e), this._shader.setUniformFloatVector("gravity", null !== (s = t.particle.acc) && void 0 !== s ? s : I(0, 0)), this._shader.setUniformFloatColor("beginColor", null !== (n = t.particle.beginColor) && void 0 !== n ? n : R.Transparent), this._shader.setUniformFloatColor("endColor", null !== (r = t.particle.endColor) && void 0 !== r ? r : R.Transparent);
                let _ = null !== (o = t.particle.startSize) && void 0 !== o ? o : 0, g = null !== (a = t.particle.endSize) && void 0 !== a ? a : 0;
                const p = null !== (h = t.particle.size) && void 0 !== h ? h : 0;
                if (p > 0 && (_ = p, g = p), this._shader.setUniformFloat("startSize", null != _ ? _ : 10), this._shader.setUniformFloat("endSize", null != g ? g : 10), this._shader.setUniformFloat("startOpacity", null !== (l = t.particle.opacity) && void 0 !== l ? l : 1), t.particle.focus && (this._shader.setUniformFloatVector("focus", t.particle.focus), this._shader.setUniformFloat("focusAccel", null !== (c = t.particle.focusAccel) && void 0 !== c ? c : 0)), t.particle.graphic) {
                    const e = t.particle.graphic, i = this._getTexture(e.image.image);
                    d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, i), this._shader.setUniformInt("graphic", 0);
                }
                t.draw(d);
            }
            hasPendingDraws() {
                return !1;
            }
            flush() {}
            dispose() {}
        }
        class pi {
            constructor(t){
                this.type = "ex.image-v2", this.priority = 0, this._maxImages = 2e4, this._maxTextures = 0, this._components = 22, this._imageCount = 0, this._textures = [], this._textureIndex = 0, this._textureToIndex = new Map, this._images = new Set, this._vertexIndex = 0, this._imageToWidth = new Map, this._imageToHeight = new Map, this._view = [
                    0,
                    0,
                    0,
                    0
                ], this._dest = [
                    0,
                    0
                ], this._defaultTint = R.White, this.pixelArtSampler = t.pixelArtSampler, this.uvPadding = t.uvPadding;
            }
            initialize(t, e) {
                this._gl = t, this._context = e;
                const i = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), s = At(t, i);
                this._maxTextures = Math.min(i, s);
                const n = this._transformFragmentSource("#version 300 es\r\nprecision mediump float;\r\n\r\n// UV coord\r\nin vec2 v_texcoord;\r\n\r\n// Textures in the current draw\r\nuniform sampler2D u_textures[%%count%%];\r\n\r\nuniform bool u_pixelart;\r\n\r\nin float v_texture_index;\r\n\r\nin float v_opacity;\r\n\r\nin vec4 v_tint;\r\n\r\n// texture resolution\r\nin vec2 v_res;\r\n\r\nin vec2 v_size;\r\n\r\nin vec2 v_uv_min;\r\nin vec2 v_uv_max;\r\n\r\nout vec4 fragColor;\r\n\r\n// Inigo Quilez pixel art filter https://jorenjoestar.github.io/post/pixel_art_filtering/\r\nvec2 uv_iq(in vec2 uv, in vec2 texture_size) {\r\n  vec2 pixel = uv * texture_size;\r\n\r\n  vec2 seam=floor(pixel+.5);\r\n  vec2 dudv=fwidth(pixel);\r\n  pixel=seam+clamp((pixel-seam)/dudv,-.5,.5);\r\n\r\n  return pixel/texture_size;\r\n}\r\n\r\nfloat lerp(float from, float to, float rel){\r\n  return ((1. - rel) * from) + (rel * to);\r\n}\r\n\r\nfloat invLerp(float from, float to, float value){\r\n  return (value - from) / (to - from);\r\n}\r\n\r\nfloat remap(float origFrom, float origTo, float targetFrom, float targetTo, float value){\r\n  float rel = invLerp(origFrom, origTo, value);\r\n  return lerp(targetFrom, targetTo, rel);\r\n}\r\n\r\nvoid main(){\r\n  // In order to support the most efficient sprite batching, we have multiple\r\n  // textures loaded into the gpu (usually 8) this picker logic skips over textures\r\n  // that do not apply to a particular sprite.\r\n\r\n  vec4 color=vec4(1.,0,0,1.);\r\n  vec2 remapped_uv = v_texcoord;\r\n  remapped_uv.x = remap(0.,1., v_uv_min.x, v_uv_max.x, v_texcoord.x);\r\n  remapped_uv.y = remap(0.,1., v_uv_min.y, v_uv_max.y, v_texcoord.y);\r\n  vec2 uv = u_pixelart ? uv_iq(remapped_uv, v_size) : remapped_uv;\r\n\r\n  // GLSL is templated out to pick the right texture and set the vec4 color\r\n  %%texture_picker%%\r\n\r\n  color.rgb = color.rgb * v_opacity;\r\n  color.a = color.a * v_opacity;\r\n  fragColor = color * v_tint;\r\n}", this._maxTextures);
                this._shader = new Tt({
                    gl: t,
                    fragmentSource: n,
                    vertexSource: "#version 300 es\r\nlayout(location=0) in vec2 pos;\r\nlayout(location=1) in vec2 a_texcoord;\r\nout vec2 v_texcoord;\r\n\r\nlayout(location=2) in vec2 a_offset;\r\nlayout(location=3) in vec2 a_mat_column1;\r\nlayout(location=4) in vec2 a_mat_column2;\r\nlayout(location=5) in vec2 a_mat_column3;\r\n\r\nlayout(location=6) in float a_opacity;\r\nout float v_opacity;\r\n\r\n// Texture resolution (could be bigger than a_size)\r\nlayout(location=7) in vec2 a_res;\r\nout vec2 v_res;\r\n\r\n// Final size of graphic\r\nlayout(location=8) in vec2 a_size;\r\nout vec2 v_size;\r\n\r\nlayout(location=9) in lowp float a_texture_index;\r\nout lowp float v_texture_index;\r\n\r\nlayout(location=10) in vec2 a_uv_min;\r\nout vec2 v_uv_min;\r\n\r\nlayout(location=11) in vec2 a_uv_max;\r\nout vec2 v_uv_max;\r\n\r\nlayout(location=12) in vec4 a_tint;\r\nout vec4 v_tint;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvoid main(){\r\n  mat4 world_mat = mat4(\r\n    a_mat_column1.x, a_mat_column1.y, 0., 0.,\r\n    a_mat_column2.x, a_mat_column2.y, 0., 0.,\r\n    0.             , 0.             , 1., 0.,\r\n    a_mat_column3.x, a_mat_column3.y, 0., 1.\r\n  );\r\n\r\n  vec2 newPos = vec2(pos.x * a_res.x, pos.y * a_res.y);\r\n  gl_Position = u_matrix * world_mat * vec4(newPos + a_offset, 0., 1.);\r\n\r\n  v_opacity = a_opacity;\r\n  v_texcoord = a_texcoord;\r\n  v_uv_min = a_uv_min;\r\n  v_uv_max = a_uv_max;\r\n  v_res = a_res;\r\n  v_size = a_size;\r\n  v_texture_index = a_texture_index;\r\n  v_tint = a_tint;\r\n}"
                }), this._shader.compile(), this._shader.use(), this._shader.setUniformMatrix("u_matrix", e.ortho), this._shader.setUniformIntArray("u_textures", [
                    ...Array(this._maxTextures)
                ].map((t, e)=>e)), this._vao = t.createVertexArray(), t.bindVertexArray(this._vao), this._quadMesh = new Float32Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    1,
                    1,
                    1
                ]), this._meshBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this._meshBuffer), t.bufferData(t.ARRAY_BUFFER, this._quadMesh, t.STATIC_DRAW), t.vertexAttribPointer(0, 2, t.FLOAT, !1, 16, 0), t.enableVertexAttribArray(0), t.vertexAttribPointer(1, 2, t.FLOAT, !1, 16, 8), t.enableVertexAttribArray(1), t.bindBuffer(t.ARRAY_BUFFER, null);
                const r = this._components;
                this._transformData = new St({
                    gl: t,
                    size: r * this._maxImages,
                    type: "dynamic"
                }), this._transformData.bind();
                let o = 0, a = 2;
                const h = 4 * r;
                t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(2), o += 8, t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(3), o += 8, t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(4), o += 8, t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(5), o += 8, t.vertexAttribPointer(a++, 1, t.FLOAT, !1, h, o), t.enableVertexAttribArray(6), o += 4, t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(7), o += 8, t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(8), o += 8, t.vertexAttribPointer(a++, 1, t.FLOAT, !1, h, o), t.enableVertexAttribArray(9), o += 4, t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(10), o += 8, t.vertexAttribPointer(a++, 2, t.FLOAT, !1, h, o), t.enableVertexAttribArray(11), o += 8, t.vertexAttribPointer(a++, 4, t.FLOAT, !1, h, o), t.enableVertexAttribArray(12), o += 16, t.vertexAttribDivisor(2, 1), t.vertexAttribDivisor(3, 1), t.vertexAttribDivisor(4, 1), t.vertexAttribDivisor(5, 1), t.vertexAttribDivisor(6, 1), t.vertexAttribDivisor(7, 1), t.vertexAttribDivisor(8, 1), t.vertexAttribDivisor(9, 1), t.vertexAttribDivisor(10, 1), t.vertexAttribDivisor(11, 1), t.vertexAttribDivisor(12, 1), t.bindVertexArray(null);
            }
            _bindData(t) {
                const e = this._components;
                this._transformData.bind(), this._transformData.upload(e * this._imageCount), t.bindVertexArray(this._vao);
            }
            dispose() {
                this._transformData.dispose(), this._shader.dispose(), this._textures.length = 0, this._context = null, this._gl = null;
            }
            _transformFragmentSource(t, e) {
                let i = t.replace("%%count%%", e.toString()), s = "";
                for(let t = 0; t < e; t++)s += 0 === t ? `if (v_texture_index <= ${t}.5) {\n` : `   else if (v_texture_index <= ${t}.5) {\n`, s += `      color = texture(u_textures[${t}], uv);\n`, s += "   }\n";
                return i = i.replace("%%texture_picker%%", s), i;
            }
            _addImageAsTexture(t) {
                if (this._images.has(t)) return;
                const e = t.getAttribute(dt.Filtering), i = e ? ht(e) : void 0, s = lt(t.getAttribute(dt.WrappingX)), n = lt(t.getAttribute(dt.WrappingY)), r = "true" === t.getAttribute("forceUpload"), o = this._context.textureLoader.load(t, {
                    filtering: i,
                    wrapping: {
                        x: s,
                        y: n
                    }
                }, r);
                t.removeAttribute("forceUpload"), -1 === this._textures.indexOf(o) && (this._textures.push(o), this._textureToIndex.set(o, this._textureIndex++), this._images.add(t));
            }
            _bindTextures(t) {
                const e = Math.min(this._textureIndex, this._maxTextures);
                for(let i = 0; i < e; i++)t.activeTexture(t.TEXTURE0 + i), t.bindTexture(t.TEXTURE_2D, this._textures[i] || this._textures[0]);
            }
            _getTextureIdForImage(t) {
                var e;
                if (t) {
                    const i = this._context.textureLoader.get(t);
                    return null !== (e = this._textureToIndex.get(i)) && void 0 !== e ? e : -1;
                }
                return -1;
            }
            _isFull() {
                return this._imageCount >= this._maxImages || this._textures.length >= this._maxTextures;
            }
            _getImageWidth(t) {
                let e = this._imageToWidth.get(t);
                return void 0 === e && (e = t.width, this._imageToWidth.set(t, e)), e;
            }
            _getImageHeight(t) {
                let e = this._imageToHeight.get(t);
                return void 0 === e && (e = t.height, this._imageToHeight.set(t, e)), e;
            }
            draw(t, e, i, s, n, r, o, a, h) {
                var l, c, d, u;
                this._isFull() && this.flush(), this._imageCount++, this._addImageAsTexture(t);
                const _ = this._getImageWidth(t), g = this._getImageHeight(t);
                let p = _ || s || 0, f = g || n || 0;
                this._view[0] = 0, this._view[1] = 0, this._view[2] = null !== (l = null != s ? s : _) && void 0 !== l ? l : 0, this._view[3] = null !== (c = null != n ? n : g) && void 0 !== c ? c : 0, this._dest[0] = null != e ? e : 1, this._dest[1] = null != i ? i : 1, void 0 !== r && void 0 !== o && void 0 !== a && void 0 !== h && (this._view[0] = null != e ? e : 1, this._view[1] = null != i ? i : 1, this._view[2] = null !== (d = null != s ? s : _) && void 0 !== d ? d : 0, this._view[3] = null !== (u = null != n ? n : g) && void 0 !== u ? u : 0, this._dest[0] = r, this._dest[1] = o, p = a, f = h), e = this._view[0], i = this._view[1];
                const m = this._view[2], v = this._view[3], x = this._context.getTransform(), w = this._context.opacity;
                this._context.snapToPixel && (this._dest[0] = ~~(this._dest[0] + fi), this._dest[1] = ~~(this._dest[1] + fi));
                const y = this._context.tint || this._defaultTint, b = this._getTextureIdForImage(t), C = _ || p, A = g || f, T = (e + this.uvPadding) / C, S = (i + this.uvPadding) / A, P = (e + m - this.uvPadding) / C, E = (i + v - this.uvPadding) / A, I = _, R = g, F = this._transformData.bufferData;
                F[this._vertexIndex++] = this._dest[0], F[this._vertexIndex++] = this._dest[1], F[this._vertexIndex++] = x.data[0], F[this._vertexIndex++] = x.data[1], F[this._vertexIndex++] = x.data[2], F[this._vertexIndex++] = x.data[3], F[this._vertexIndex++] = x.data[4], F[this._vertexIndex++] = x.data[5], F[this._vertexIndex++] = w, F[this._vertexIndex++] = p, F[this._vertexIndex++] = f, F[this._vertexIndex++] = I, F[this._vertexIndex++] = R, F[this._vertexIndex++] = b, F[this._vertexIndex++] = T, F[this._vertexIndex++] = S, F[this._vertexIndex++] = P, F[this._vertexIndex++] = E, F[this._vertexIndex++] = y.r / 255, F[this._vertexIndex++] = y.g / 255, F[this._vertexIndex++] = y.b / 255, F[this._vertexIndex++] = y.a;
            }
            hasPendingDraws() {
                return 0 !== this._imageCount;
            }
            flush() {
                if (0 === this._imageCount) return;
                const t = this._gl;
                this._shader.use(), this._bindData(t), this._shader.setUniformMatrix("u_matrix", this._context.ortho), this._shader.setUniformBoolean("u_pixelart", this.pixelArtSampler), this._bindTextures(t), t.drawArraysInstanced(t.TRIANGLES, 0, 6, this._imageCount), Et.DrawnImagesCount += this._imageCount, Et.DrawCallCount++, t.bindVertexArray(null), this._imageCount = 0, this._vertexIndex = 0, this._textures.length = 0, this._textureIndex = 0, this._textureToIndex.clear(), this._images.clear(), this._imageToWidth.clear(), this._imageToHeight.clear();
            }
        }
        const fi = 1e-4;
        class mi {
            constructor(t){
                this._webglCtx = t, this._debugText = new ft;
            }
            drawRect(t, e, i, s, n = {
                color: R.Black
            }) {
                this.drawLine(I(t, e), I(t + i, e), {
                    ...n
                }), this.drawLine(I(t + i, e), I(t + i, e + s), {
                    ...n
                }), this.drawLine(I(t + i, e + s), I(t, e + s), {
                    ...n
                }), this.drawLine(I(t, e + s), I(t, e), {
                    ...n
                });
            }
            drawLine(t, e, i) {
                var s;
                this._webglCtx.draw("ex.line", t, e, null !== (s = null == i ? void 0 : i.color) && void 0 !== s ? s : R.Black);
            }
            drawPoint(t, e = {
                color: R.Black,
                size: 5
            }) {
                this._webglCtx.draw("ex.point", t, e.color, e.size);
            }
            drawText(t, e) {
                this._debugText.write(this._webglCtx, t, e);
            }
        }
        class vi {
            get z() {
                return this._state.current.z;
            }
            set z(t) {
                this._state.current.z = t;
            }
            get opacity() {
                return this._state.current.opacity;
            }
            set opacity(t) {
                this._state.current.opacity = t;
            }
            get tint() {
                return this._state.current.tint;
            }
            set tint(t) {
                this._state.current.tint = t;
            }
            get width() {
                return this.__gl.canvas.width;
            }
            get height() {
                return this.__gl.canvas.height;
            }
            get ortho() {
                return this._ortho;
            }
            checkIfResolutionSupported(t) {
                let e = !0;
                return (t.width > 4096 || t.height > 4096) && (e = !1), e;
            }
            constructor(t){
                this._logger = k.getInstance(), this._renderers = new Map, this._lazyRenderersFactory = new Map, this.imageRenderer = d.isEnabled("use-legacy-image-renderer") ? "ex.image" : "ex.image-v2", this._isDrawLifecycle = !1, this.useDrawSorting = !0, this._drawCallPool = new Lt(()=>new zt, void 0, 4e3), this._drawCallIndex = 0, this._drawCalls = new Array(4e3).fill(null), this._postProcessTargets = [], this._postprocessors = [], this._transform = new K, this._state = new J, this.snapToPixel = !1, this.smoothing = !1, this.pixelArtSampler = !1, this.uvPadding = .01, this.backgroundColor = R.ExcaliburBlue, this.multiSampleAntialiasing = !0, this.transparency = !0, this._isContextLost = !1, this._disposed = !1, this._imageToWidth = new Map, this._imageToHeight = new Map, this.debug = new mi(this), this._totalPostProcessorTime = 0;
                const { canvasElement: e, context: i, enableTransparency: s, antialiasing: n, uvPadding: r, multiSampleAntialiasing: o, pixelArtSampler: a, powerPreference: h, snapToPixel: l, backgroundColor: c, useDrawSorting: u, garbageCollector: _, handleContextLost: g, handleContextRestored: p } = t;
                if (this.__gl = null != i ? i : e.getContext("webgl2", {
                    antialias: null != n ? n : this.smoothing,
                    premultipliedAlpha: !1,
                    alpha: null != s ? s : this.transparency,
                    depth: !1,
                    powerPreference: null != h ? h : "high-performance"
                }), !this.__gl) throw Error("Failed to retrieve webgl context from browser");
                g && this.__gl.canvas.addEventListener("webglcontextlost", g, !1), p && this.__gl.canvas.addEventListener("webglcontextrestored", p, !1), this.__gl.canvas.addEventListener("webglcontextlost", ()=>{
                    this._isContextLost = !0;
                }), this.__gl.canvas.addEventListener("webglcontextrestored", ()=>{
                    this._isContextLost = !1;
                }), this.textureLoader = new ct(this.__gl, _), this.snapToPixel = null != l ? l : this.snapToPixel, this.smoothing = null != n ? n : this.smoothing, this.transparency = null != s ? s : this.transparency, this.pixelArtSampler = null != a ? a : this.pixelArtSampler, this.uvPadding = null != r ? r : this.uvPadding, this.multiSampleAntialiasing = "boolean" == typeof o ? o : this.multiSampleAntialiasing, this.samples = "object" == typeof o ? o.samples : void 0, this.backgroundColor = null != c ? c : this.backgroundColor, this.useDrawSorting = null != u ? u : this.useDrawSorting, this._drawCallPool.disableWarnings = !0, this._drawCallPool.preallocate(), this._init();
            }
            dispose() {
                if (!this._disposed) {
                    this._disposed = !0, this.textureLoader.dispose();
                    for (const t of this._renderers.values())t.dispose();
                    this._renderers.clear(), this._drawCallPool.dispose(), this._drawCalls.length = 0, this.__gl = null;
                }
            }
            _init() {
                const t = this.__gl;
                if (this._ortho = Z.ortho(0, t.canvas.width, t.canvas.height, 0, 400, -400), t.viewport(0, 0, t.canvas.width, t.canvas.height), t.clearColor(this.backgroundColor.r / 255, this.backgroundColor.g / 255, this.backgroundColor.b / 255, this.backgroundColor.a), t.clear(t.COLOR_BUFFER_BIT), t.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA), t.depthMask(!1), this.register(new Dt({
                    uvPadding: this.uvPadding,
                    pixelArtSampler: this.pixelArtSampler
                })), this.register(new Ot), this.register(new Bt), this.register(new kt), this.register(new Rt), this.register(new It), this.lazyRegister("ex.particle", ()=>new gi), this.register(new pi({
                    uvPadding: this.uvPadding,
                    pixelArtSampler: this.pixelArtSampler
                })), this.materialScreenTexture = t.createTexture(), !this.materialScreenTexture) throw new Error("Could not create screen texture!");
                t.bindTexture(t.TEXTURE_2D, this.materialScreenTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT), t.bindTexture(t.TEXTURE_2D, null), this._screenRenderer = new Ft(t), this._renderTarget = new vt({
                    gl: t,
                    transparency: this.transparency,
                    width: t.canvas.width,
                    height: t.canvas.height
                }), this._postProcessTargets = [
                    new vt({
                        gl: t,
                        transparency: this.transparency,
                        width: t.canvas.width,
                        height: t.canvas.height
                    }),
                    new vt({
                        gl: t,
                        transparency: this.transparency,
                        width: t.canvas.width,
                        height: t.canvas.height
                    })
                ], this._msaaTarget = new vt({
                    gl: t,
                    transparency: this.transparency,
                    width: t.canvas.width,
                    height: t.canvas.height,
                    antialias: this.multiSampleAntialiasing,
                    samples: this.samples
                });
            }
            register(t) {
                this._renderers.set(t.type, t), t.initialize(this.__gl, this);
            }
            lazyRegister(t, e) {
                this._lazyRenderersFactory.set(t, e);
            }
            get(t) {
                let e = this._renderers.get(t);
                if (!e) {
                    const i = this._lazyRenderersFactory.get(t);
                    i && (this._logger.debug("lazy init renderer:", t), e = i(), this.register(e));
                }
                return e;
            }
            _isCurrentRenderer(t) {
                return !this._currentRenderer || this._currentRenderer === t;
            }
            beginDrawLifecycle() {
                this._isDrawLifecycle = !0;
            }
            endDrawLifecycle() {
                this._isDrawLifecycle = !1;
            }
            draw(t, ...e) {
                if (this._isDrawLifecycle || this._logger.warnOnce("Attempting to draw outside the the drawing lifecycle (preDraw/postDraw) is not supported and is a source of bugs/errors.\nIf you want to do custom drawing, use Actor.graphics, or any onPreDraw or onPostDraw handler."), this._isContextLost) return void this._logger.errorOnce(`Unable to draw ${t}, the webgl context is lost`);
                const i = this.get(t);
                if (!i) throw Error(`No renderer with name ${t} has been registered`);
                if (this.useDrawSorting) {
                    const s = this._drawCallPool.get();
                    s.z = this._state.current.z, s.priority = i.priority, s.renderer = t, this.getTransform().clone(s.transform), s.state.z = this._state.current.z, s.state.opacity = this._state.current.opacity, s.state.tint = this._state.current.tint, s.state.material = this._state.current.material, s.args[0] = e[0], s.args[1] = e[1], s.args[2] = e[2], s.args[3] = e[3], s.args[4] = e[4], s.args[5] = e[5], s.args[6] = e[6], s.args[7] = e[7], s.args[8] = e[8], s.args[9] = e[9], this._drawCalls[this._drawCallIndex++] = s;
                } else this._currentRenderer || (this._currentRenderer = i), this._isCurrentRenderer(i) || this._currentRenderer.flush(), i.draw(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9]), this._currentRenderer = i;
            }
            resetTransform() {
                this._transform.reset();
            }
            updateViewport(t) {
                const e = this.__gl;
                this._ortho = this._ortho = Z.ortho(0, t.width, t.height, 0, 400, -400), this._renderTarget.setResolution(e.canvas.width, e.canvas.height), this._msaaTarget.setResolution(e.canvas.width, e.canvas.height), this._postProcessTargets[0].setResolution(e.canvas.width, e.canvas.height), this._postProcessTargets[1].setResolution(e.canvas.width, e.canvas.height);
            }
            _getImageWidth(t) {
                let e = this._imageToWidth.get(t);
                return void 0 === e && (e = t.width, this._imageToWidth.set(t, e)), e;
            }
            _getImageHeight(t) {
                let e = this._imageToHeight.get(t);
                return void 0 === e && (e = t.height, this._imageToHeight.set(t, e)), e;
            }
            drawImage(t, e, i, s, n, r, o, a, h) {
                if (0 !== s && 0 !== n && 0 !== a && 0 !== h && 0 !== this._getImageWidth(t) && 0 !== this._getImageHeight(t)) return t ? void (this._state.current.material ? this.draw("ex.material", t, e, i, s, n, r, o, a, h) : (this.imageRenderer, this.draw(this.imageRenderer, t, e, i, s, n, r, o, a, h))) : (k.getInstance().warn("Cannot draw a null or undefined image"), void (console.trace && console.trace()));
            }
            drawLine(t, e, i, s = 1) {
                this.draw("ex.rectangle", t, e, i, s);
            }
            drawRectangle(t, e, i, s, n, r) {
                this.draw("ex.rectangle", t, e, i, s, n, r);
            }
            drawCircle(t, e, i, s, n) {
                this.draw("ex.circle", t, e, i, s, n);
            }
            save() {
                this._transform.save(), this._state.save();
            }
            restore() {
                this._transform.restore(), this._state.restore();
            }
            translate(t, e) {
                this._transform.translate(this.snapToPixel ? ~~(t + fi) : t, this.snapToPixel ? ~~(e + fi) : e);
            }
            rotate(t) {
                this._transform.rotate(t);
            }
            scale(t, e) {
                this._transform.scale(t, e);
            }
            transform(t) {
                this._transform.current = t;
            }
            getTransform() {
                return this._transform.current;
            }
            multiply(t) {
                this._transform.current.multiply(t, this._transform.current);
            }
            addPostProcessor(t) {
                this._postprocessors.push(t), t.initialize(this.__gl);
            }
            removePostProcessor(t) {
                const e = this._postprocessors.indexOf(t);
                -1 !== e && this._postprocessors.splice(e, 1);
            }
            clearPostProcessors() {
                this._postprocessors.length = 0;
            }
            updatePostProcessors(t) {
                for (const e of this._postprocessors){
                    const i = e.getShader();
                    i.use();
                    const s = i.getUniforms();
                    this._totalPostProcessorTime += t, s.find((t)=>"u_time_ms" === t.name) && i.setUniformFloat("u_time_ms", this._totalPostProcessorTime), s.find((t)=>"u_elapsed_ms" === t.name) && i.setUniformFloat("u_elapsed_ms", t), s.find((t)=>"u_resolution" === t.name) && i.setUniformFloatVector("u_resolution", I(this.width, this.height)), e.onUpdate && e.onUpdate(t);
                }
            }
            set material(t) {
                this._state.current.material = t;
            }
            get material() {
                return this._state.current.material;
            }
            createMaterial(t) {
                return new Ut({
                    ...t,
                    graphicsContext: this
                });
            }
            createShader(t) {
                const e = this.__gl, { vertexSource: i, fragmentSource: s } = t, n = new Tt({
                    gl: e,
                    vertexSource: i,
                    fragmentSource: s
                });
                return n.compile(), n;
            }
            clear() {
                const t = this.__gl;
                (this.multiSampleAntialiasing ? this._msaaTarget : this._renderTarget).use(), t.clearColor(this.backgroundColor.r / 255, this.backgroundColor.g / 255, this.backgroundColor.b / 255, this.backgroundColor.a), t.clear(t.COLOR_BUFFER_BIT);
            }
            flush() {
                var t;
                if (this._isContextLost) return void this._logger.errorOnce("Unable to flush the webgl context is lost");
                let e = this.multiSampleAntialiasing ? this._msaaTarget : this._renderTarget;
                if (e.use(), this.useDrawSorting) {
                    for(let t = this._drawCallIndex; t < this._drawCalls.length; t++)this._drawCalls[t] = null;
                    const i = new Map;
                    for (const [t] of this._renderers){
                        let e = 0;
                        for(e = 0; e < this._drawCallIndex && this._drawCalls[e].renderer !== t; e++);
                        i.set(t, e);
                    }
                    this._drawCalls.sort((t, e)=>{
                        if (null === t || null === e) return 0;
                        const s = t.z - e.z, n = i.get(t.renderer) - i.get(e.renderer), r = t.priority - e.priority;
                        return 0 === s ? 0 === r ? n : r : s;
                    });
                    const s = this._transform.current, n = this._state.current;
                    if (this._drawCalls.length && this._drawCallIndex) {
                        let i = this._drawCalls[0].renderer, s = this.get(i);
                        for(let n = 0; n < this._drawCallIndex; n++)this._transform.current = this._drawCalls[n].transform, this._state.current = this._drawCalls[n].state, this._drawCalls[n].renderer !== i && (s.flush(), i = this._drawCalls[n].renderer, s = this.get(i)), s instanceof Ot && (null === (t = this.material) || void 0 === t ? void 0 : t.isUsingScreenTexture) && (e.copyToTexture(this.materialScreenTexture), e.use()), s.draw(...this._drawCalls[n].args);
                        s.hasPendingDraws() && s.flush();
                    }
                    this._transform.current = s, this._state.current = n, this._drawCallPool.done(), this._drawCallIndex = 0, this._imageToHeight.clear(), this._imageToWidth.clear();
                } else for (const t of this._renderers.values())t.hasPendingDraws() && t.flush();
                e.disable(), this._postprocessors.length > 0 && e.toRenderSource().use();
                for(let t = 0; t < this._postprocessors.length; t++)e = this._postProcessTargets[t % 2], this._postProcessTargets[t % 2].use(), this._screenRenderer.renderWithPostProcessor(this._postprocessors[t]), this._postProcessTargets[t % 2].toRenderSource().use();
                e.blitToScreen();
            }
        }
        const xi = 1e-4;
        class wi {
            constructor(t){
                this._ex = t, this._debugText = new ft;
            }
            drawRect(t, e, i, s) {
                this._ex.__ctx.save(), this._ex.__ctx.strokeStyle = "red", this._ex.__ctx.strokeRect(this._ex.snapToPixel ? ~~(t + xi) : t, this._ex.snapToPixel ? ~~(e + xi) : e, this._ex.snapToPixel ? ~~(i + xi) : i, this._ex.snapToPixel ? ~~(s + xi) : s), this._ex.__ctx.restore();
            }
            drawLine(t, e, i = {
                color: R.Black
            }) {
                var s, n;
                this._ex.__ctx.save(), this._ex.__ctx.beginPath(), this._ex.__ctx.strokeStyle = null !== (n = null === (s = i.color) || void 0 === s ? void 0 : s.toString()) && void 0 !== n ? n : "", this._ex.__ctx.moveTo(this._ex.snapToPixel ? ~~(t.x + xi) : t.x, this._ex.snapToPixel ? ~~(t.y + xi) : t.y), this._ex.__ctx.lineTo(this._ex.snapToPixel ? ~~(e.x + xi) : e.x, this._ex.snapToPixel ? ~~(e.y + xi) : e.y), this._ex.__ctx.lineWidth = 2, this._ex.__ctx.stroke(), this._ex.__ctx.closePath(), this._ex.__ctx.restore();
            }
            drawPoint(t, e = {
                color: R.Black,
                size: 5
            }) {
                this._ex.__ctx.save(), this._ex.__ctx.beginPath(), this._ex.__ctx.fillStyle = e.color.toString(), this._ex.__ctx.arc(this._ex.snapToPixel ? ~~(t.x + xi) : t.x, this._ex.snapToPixel ? ~~(t.y + xi) : t.y, e.size, 0, 2 * Math.PI), this._ex.__ctx.fill(), this._ex.__ctx.closePath(), this._ex.__ctx.restore();
            }
            drawText(t, e) {
                this._debugText.write(this._ex, t, e);
            }
        }
        class yi {
            get width() {
                return this.__ctx.canvas.width;
            }
            get height() {
                return this.__ctx.canvas.height;
            }
            get opacity() {
                return this._state.current.opacity;
            }
            set opacity(t) {
                this._state.current.opacity = t;
            }
            get tint() {
                return this._state.current.tint;
            }
            set tint(t) {
                this._state.current.tint = t;
            }
            get smoothing() {
                return this.__ctx.imageSmoothingEnabled;
            }
            set smoothing(t) {
                this.__ctx.imageSmoothingEnabled = t;
            }
            constructor(t){
                this.useDrawSorting = !1, this.z = 0, this.backgroundColor = R.ExcaliburBlue, this._state = new J, this.snapToPixel = !1, this.debug = new wi(this);
                const { canvasElement: e, context: i, enableTransparency: s, snapToPixel: n, antialiasing: r, backgroundColor: o } = t;
                if (this.__ctx = null != i ? i : e.getContext("2d", {
                    alpha: null == s || s
                }), !this.__ctx) throw new Error("Cannot build new ExcaliburGraphicsContext2D for some reason!");
                this.backgroundColor = null != o ? o : this.backgroundColor, this.snapToPixel = null != n ? n : this.snapToPixel, this.smoothing = null != r ? r : this.smoothing;
            }
            resetTransform() {
                this.__ctx.resetTransform();
            }
            updateViewport(t) {}
            drawImage(t, e, i, s, n, r, o, a, h) {
                if (0 === s || 0 === n) return;
                if (0 === a || 0 === h) return;
                if (0 === t.width || 0 === t.height) return;
                this.__ctx.globalAlpha = this.opacity;
                const l = [
                    t,
                    e,
                    i,
                    s,
                    n,
                    r,
                    o,
                    a,
                    h
                ].filter((t)=>void 0 !== t).map((t)=>"number" == typeof t && this.snapToPixel ? ~~t : t);
                this.__ctx.drawImage.apply(this.__ctx, l), Et.DrawCallCount++, Et.DrawnImagesCount = 1;
            }
            drawLine(t, e, i, s = 1) {
                this.__ctx.save(), this.__ctx.beginPath(), this.__ctx.strokeStyle = i.toString(), this.__ctx.moveTo(this.snapToPixel ? ~~(t.x + xi) : t.x, this.snapToPixel ? ~~(t.y + xi) : t.y), this.__ctx.lineTo(this.snapToPixel ? ~~(e.x + xi) : e.x, this.snapToPixel ? ~~(e.y + xi) : e.y), this.__ctx.lineWidth = s, this.__ctx.stroke(), this.__ctx.closePath(), this.__ctx.restore();
            }
            drawRectangle(t, e, i, s) {
                this.__ctx.save(), this.__ctx.fillStyle = s.toString(), this.__ctx.fillRect(this.snapToPixel ? ~~(t.x + xi) : t.x, this.snapToPixel ? ~~(t.y + xi) : t.y, this.snapToPixel ? ~~(e + xi) : e, this.snapToPixel ? ~~(i + xi) : i), this.__ctx.restore();
            }
            drawCircle(t, e, i, s, n) {
                this.__ctx.save(), this.__ctx.beginPath(), s && (this.__ctx.strokeStyle = s.toString()), n && (this.__ctx.lineWidth = n), this.__ctx.fillStyle = i.toString(), this.__ctx.arc(this.snapToPixel ? ~~(t.x + xi) : t.x, this.snapToPixel ? ~~(t.y + xi) : t.y, e, 0, 2 * Math.PI), this.__ctx.fill(), s && this.__ctx.stroke(), this.__ctx.closePath(), this.__ctx.restore();
            }
            save() {
                this.__ctx.save(), this._state.save();
            }
            restore() {
                this.__ctx.restore(), this._state.restore();
            }
            translate(t, e) {
                this.__ctx.translate(this.snapToPixel ? ~~(t + xi) : t, this.snapToPixel ? ~~(e + xi) : e);
            }
            rotate(t) {
                this.__ctx.rotate(t);
            }
            scale(t, e) {
                this.__ctx.scale(t, e);
            }
            getTransform() {
                throw new Error("Not implemented");
            }
            multiply(t) {
                this.__ctx.setTransform(this.__ctx.getTransform().multiply(t.toDOMMatrix()));
            }
            addPostProcessor(t) {}
            removePostProcessor(t) {}
            clearPostProcessors() {}
            updatePostProcessors(t) {}
            beginDrawLifecycle() {}
            endDrawLifecycle() {}
            set material(t) {
                this._state.current.material = t;
            }
            get material() {
                return this._state.current.material;
            }
            createMaterial(t) {
                return null;
            }
            clear() {
                this.__ctx.clearRect(0, 0, this.width, this.height), this.__ctx.fillStyle = this.backgroundColor.toString(), this.__ctx.fillRect(0, 0, this.width, this.height), Et.clear();
            }
            flush() {}
            dispose() {
                this.__ctx = void 0;
            }
        }
        var bi;
        !function(t) {
            t.Fixed = "Fixed", t.FitContainerAndFill = "FitContainerAndFill", t.FitScreenAndFill = "FitScreenAndFill", t.FitContainerAndZoom = "FitContainerAndZoom", t.FitScreenAndZoom = "FitScreenAndZoom", t.FitScreen = "FitScreen", t.FillScreen = "FillScreen", t.FitContainer = "FitContainer", t.FillContainer = "FillContainer";
        }(bi || (bi = {}));
        class Ci {
            static get SVGA() {
                return {
                    width: 800,
                    height: 600
                };
            }
            static get Standard() {
                return {
                    width: 1920,
                    height: 1080
                };
            }
            static get Atari2600() {
                return {
                    width: 160,
                    height: 192
                };
            }
            static get GameBoy() {
                return {
                    width: 160,
                    height: 144
                };
            }
            static get GameBoyAdvance() {
                return {
                    width: 240,
                    height: 160
                };
            }
            static get NintendoDS() {
                return {
                    width: 256,
                    height: 192
                };
            }
            static get NES() {
                return {
                    width: 256,
                    height: 224
                };
            }
            static get SNES() {
                return {
                    width: 256,
                    height: 244
                };
            }
        }
        const Ai = {
            ScreenResize: "resize",
            PixelRatioChange: "pixelratio",
            FullScreenChange: "fullscreen"
        };
        class Ti {
            constructor(t){
                var e, i, s, n;
                this.events = new g, this._antialiasing = !0, this._canvasImageRendering = "auto", this._resolutionStack = [], this._viewportStack = [], this._pixelRatioOverride = null, this._isFullscreen = !1, this._isDisposed = !1, this._logger = k.getInstance(), this._fullscreenChangeHandler = ()=>{
                    this._isDisposed || (this._isFullscreen = !this._isFullscreen, this._logger.debug("Fullscreen Change", this._isFullscreen), this.events.emit("fullscreen", {
                        fullscreen: this.isFullscreen
                    }));
                }, this._pixelRatioChangeHandler = ()=>{
                    this._isDisposed || (this._logger.debug("Pixel Ratio Change", window.devicePixelRatio), this._listenForPixelRatio(), this._devicePixelRatio = this._calculateDevicePixelRatio(), this.applyResolutionAndViewport(), this.events.emit("pixelratio", {
                        pixelRatio: this.pixelRatio
                    }));
                }, this._resizeHandler = ()=>{
                    if (this._isDisposed) return;
                    const t = this.parent;
                    this._logger.debug("View port resized"), this._setResolutionAndViewportByDisplayMode(t), this.applyResolutionAndViewport(), this.events.emit("resize", {
                        resolution: this.resolution,
                        viewport: this.viewport
                    });
                }, this._devicePixelRatio = this._calculateDevicePixelRatio(), this._contentArea = new U, this._unsafeArea = new U, this.viewport = t.viewport, this.resolution = null !== (e = t.resolution) && void 0 !== e ? e : {
                    ...this.viewport
                }, this._contentResolution = this.resolution, this._displayMode = null !== (i = t.displayMode) && void 0 !== i ? i : bi.Fixed, this._canvas = t.canvas, this.graphicsContext = t.context, this._antialiasing = null !== (s = t.antialiasing) && void 0 !== s ? s : this._antialiasing, this._canvasImageRendering = null !== (n = t.canvasImageRendering) && void 0 !== n ? n : this._canvasImageRendering, this._browser = t.browser, this._pixelRatioOverride = t.pixelRatio, this._applyDisplayMode(), this._listenForPixelRatio(), this._canvas.addEventListener("fullscreenchange", this._fullscreenChangeHandler), this.applyResolutionAndViewport();
            }
            _listenForPixelRatio() {
                this._mediaQueryList && !this._mediaQueryList.addEventListener && this._mediaQueryList.removeListener(this._pixelRatioChangeHandler), this._mediaQueryList = this._browser.window.nativeComponent.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), this._mediaQueryList.addEventListener ? this._mediaQueryList.addEventListener("change", this._pixelRatioChangeHandler, {
                    once: !0
                }) : this._mediaQueryList.addListener(this._pixelRatioChangeHandler);
            }
            dispose() {
                this._isDisposed || (this._isDisposed = !0, this.events.clear(), this._browser.window.off("resize", this._resizeHandler), this._browser.window.clear(), this._resizeObserver && this._resizeObserver.disconnect(), this.parent.removeEventListener("resize", this._resizeHandler), this._mediaQueryList.removeEventListener ? this._mediaQueryList.removeEventListener("change", this._pixelRatioChangeHandler) : this._mediaQueryList.removeListener(this._pixelRatioChangeHandler), this._canvas.removeEventListener("fullscreenchange", this._fullscreenChangeHandler), this._canvas = null);
            }
            _calculateDevicePixelRatio() {
                if (window.devicePixelRatio < 1) return 1;
                return window.devicePixelRatio || 1;
            }
            get pixelRatio() {
                return this._pixelRatioOverride ? this._pixelRatioOverride : this._devicePixelRatio;
            }
            get worldToPagePixelRatio() {
                if (this._canvas) {
                    const t = this.worldToPageCoordinates(E.Zero);
                    return this.worldToPageCoordinates(I(1, 0)).sub(t).x;
                }
                return 1;
            }
            get pixelRatioOverride() {
                return this._pixelRatioOverride;
            }
            set pixelRatioOverride(t) {
                this._pixelRatioOverride = t;
            }
            get isHiDpi() {
                return 1 !== this.pixelRatio;
            }
            get displayMode() {
                return this._displayMode;
            }
            get canvas() {
                return this._canvas;
            }
            get parent() {
                switch(this.displayMode){
                    case bi.FillContainer:
                    case bi.FitContainer:
                    case bi.FitContainerAndFill:
                    case bi.FitContainerAndZoom:
                        return this.canvas.parentElement || document.body;
                    default:
                        return window;
                }
            }
            get resolution() {
                return this._resolution;
            }
            set resolution(t) {
                this._resolution = t;
            }
            get viewport() {
                return this._viewport ? this._viewport : this._resolution;
            }
            set viewport(t) {
                this._viewport = t;
            }
            get aspectRatio() {
                return this._resolution.width / this._resolution.height;
            }
            get scaledWidth() {
                return this._resolution.width * this.pixelRatio;
            }
            get scaledHeight() {
                return this._resolution.height * this.pixelRatio;
            }
            setCurrentCamera(t) {
                this._camera = t;
            }
            pushResolutionAndViewport() {
                this._resolutionStack.push(this.resolution), this._viewportStack.push(this.viewport), this.resolution = {
                    ...this.resolution
                }, this.viewport = {
                    ...this.viewport
                };
            }
            peekViewport() {
                return this._viewportStack[this._viewportStack.length - 1];
            }
            peekResolution() {
                return this._resolutionStack[this._resolutionStack.length - 1];
            }
            popResolutionAndViewport() {
                this._resolutionStack.length && this._viewportStack.length && (this.resolution = this._resolutionStack.pop(), this.viewport = this._viewportStack.pop());
            }
            applyResolutionAndViewport() {
                if (this.graphicsContext instanceof vi) {
                    if (!this.graphicsContext.checkIfResolutionSupported({
                        width: this.scaledWidth,
                        height: this.scaledHeight
                    }) && (this._logger.warnOnce(`The currently configured resolution (${this.resolution.width}x${this.resolution.height}) and pixel ratio (${this.pixelRatio}) are too large for the platform WebGL implementation, this may work but cause WebGL rendering to behave oddly. Try reducing the resolution or disabling Hi DPI scaling to avoid this (read more here https://excaliburjs.com/docs/screens#understanding-viewport--resolution).`), !this.pixelRatioOverride)) {
                        let t = Math.max(1, this.pixelRatio - .5), e = !1;
                        for(; t > 1 && !e;){
                            t = Math.max(1, t - .5);
                            const i = this._resolution.width * t, s = this._resolution.height * t;
                            e = this.graphicsContext.checkIfResolutionSupported({
                                width: i,
                                height: s
                            });
                        }
                        this.pixelRatioOverride = t, this._logger.warnOnce(`Scaled resolution too big attempted recovery! Pixel ratio was automatically reduced to (${this.pixelRatio}) to avoid 4k texture limit. Setting \`ex.Engine({pixelRatio: ...}) will override any automatic recalculation, do so at your own risk.\`  (read more here https://excaliburjs.com/docs/screens#understanding-viewport--resolution).`);
                    }
                }
                this._canvas.width = this.scaledWidth, this._canvas.height = this.scaledHeight, "auto" === this._canvasImageRendering ? this._canvas.style.imageRendering = "auto" : (this._canvas.style.imageRendering = "pixelated", "" === this._canvas.style.imageRendering && (this._canvas.style.imageRendering = "crisp-edges"));
                const t = "percent" === this.viewport.widthUnit ? "%" : "px", e = "percent" === this.viewport.heightUnit ? "%" : "px";
                this._canvas.style.width = this.viewport.width + t, this._canvas.style.height = this.viewport.height + e, this.graphicsContext.updateViewport(this.resolution), this.graphicsContext.resetTransform(), this.graphicsContext.smoothing = this._antialiasing, this.graphicsContext instanceof yi && this.graphicsContext.scale(this.pixelRatio, this.pixelRatio), document.documentElement.style.setProperty("--ex-pixel-ratio", this.worldToPagePixelRatio.toString());
            }
            get antialiasing() {
                return this._antialiasing;
            }
            set antialiasing(t) {
                this._antialiasing = t, this.graphicsContext.smoothing = this._antialiasing;
            }
            get isFullScreen() {
                return this._isFullscreen;
            }
            get isFullscreen() {
                return this._isFullscreen;
            }
            goFullScreen(t) {
                return this.enterFullscreen(t);
            }
            enterFullscreen(t) {
                var e, i, s, n, r, o;
                if (t) {
                    const s = document.getElementById(t);
                    if ((null == s ? void 0 : s.requestFullscreen) || (null == s ? void 0 : s.webkitRequestFullscreen)) {
                        if (s.getAttribute("ex-fullscreen-listener") || (s.setAttribute("ex-fullscreen-listener", "true"), s.addEventListener("fullscreenchange", this._fullscreenChangeHandler)), s.requestFullscreen) return null !== (e = s.requestFullscreen()) && void 0 !== e ? e : Promise.resolve();
                        if (s.webkitRequestFullscreen) return null !== (i = s.webkitRequestFullscreen()) && void 0 !== i ? i : Promise.resolve();
                    }
                }
                return (null === (s = this._canvas) || void 0 === s ? void 0 : s.requestFullscreen) ? null !== (r = null === (n = this._canvas) || void 0 === n ? void 0 : n.requestFullscreen()) && void 0 !== r ? r : Promise.resolve() : this._canvas.webkitRequestFullscreen ? null !== (o = this._canvas.webkitRequestFullscreen()) && void 0 !== o ? o : Promise.resolve() : (this._logger.warnOnce("Could not go fullscreen, is this an iPhone? Currently Apple does not support fullscreen on iPhones"), Promise.resolve());
            }
            exitFullScreen() {
                return this.exitFullscreen();
            }
            exitFullscreen() {
                return document.exitFullscreen();
            }
            _viewportToPixels(t) {
                return {
                    width: "percent" === t.widthUnit ? this.canvas.offsetWidth : t.width,
                    height: "percent" === t.heightUnit ? this.canvas.offsetHeight : t.height
                };
            }
            pageToScreenCoordinates(t) {
                let e = t.x, i = t.y;
                this._isFullscreen || (e -= O(this._canvas).x, i -= O(this._canvas).y);
                const s = this._viewportToPixels(this.viewport);
                if (this._isFullscreen) {
                    if (window.innerWidth / this.aspectRatio < window.innerHeight) {
                        const t = window.innerWidth / this.aspectRatio;
                        i = (i - (window.innerHeight - t) / 2) / t * s.height, e = e / window.innerWidth * s.width;
                    } else {
                        const t = window.innerHeight * this.aspectRatio;
                        e = (e - (window.innerWidth - t) / 2) / t * s.width, i = i / window.innerHeight * s.height;
                    }
                }
                return e = e / s.width * this.resolution.width, i = i / s.height * this.resolution.height, e -= this.contentArea.left, i -= this.contentArea.top, new E(e, i);
            }
            screenToPageCoordinates(t) {
                let e = t.x, i = t.y;
                const s = this._viewportToPixels(this.viewport);
                if (e = e / this.resolution.width * s.width, i = i / this.resolution.height * s.height, this._isFullscreen) {
                    if (window.innerWidth / this.aspectRatio < window.innerHeight) {
                        const t = window.innerWidth / this.aspectRatio, n = (window.innerHeight - t) / 2;
                        i = i / s.height * t + n, e = e / s.width * window.innerWidth;
                    } else {
                        const t = window.innerHeight * this.aspectRatio, n = (window.innerWidth - t) / 2;
                        e = e / s.width * t + n, i = i / s.height * window.innerHeight;
                    }
                }
                return this._isFullscreen || (e += O(this._canvas).x, i += O(this._canvas).y), new E(e, i);
            }
            screenToWorldCoordinates(t) {
                return t = t.add(I(this.contentArea.left, this.contentArea.top)), this._camera ? this._camera.inverse.multiply(t) : t.sub(I(this.resolution.width / 2, this.resolution.height / 2));
            }
            worldToScreenCoordinates(t) {
                return this._camera ? this._camera.transform.multiply(t) : t.add(I(this.resolution.width / 2, this.resolution.height / 2));
            }
            pageToWorldCoordinates(t) {
                const e = this.pageToScreenCoordinates(t);
                return this.screenToWorldCoordinates(e);
            }
            worldToPageCoordinates(t) {
                const e = this.worldToScreenCoordinates(t);
                return this.screenToPageCoordinates(e);
            }
            getWorldBounds() {
                return U.fromDimension(this.resolution.width, this.resolution.height, E.Half).scale(I(1 / this._camera.zoom, 1 / this._camera.zoom)).rotate(this._camera.rotation).translate(this._camera.drawPos);
            }
            getScreenBounds() {
                return U.fromDimension(this.resolution.width, this.resolution.height, E.Zero, E.Zero);
            }
            get canvasWidth() {
                return this.canvas.width;
            }
            get halfCanvasWidth() {
                return this.canvas.width / 2;
            }
            get canvasHeight() {
                return this.canvas.height;
            }
            get halfCanvasHeight() {
                return this.canvas.height / 2;
            }
            get drawWidth() {
                return this._camera ? this.resolution.width / this._camera.zoom : this.resolution.width;
            }
            get width() {
                return this._camera ? this.resolution.width / this._camera.zoom : this.resolution.width;
            }
            get halfDrawWidth() {
                return this.drawWidth / 2;
            }
            get drawHeight() {
                return this._camera ? this.resolution.height / this._camera.zoom : this.resolution.height;
            }
            get height() {
                return this._camera ? this.resolution.height / this._camera.zoom : this.resolution.height;
            }
            get halfDrawHeight() {
                return this.drawHeight / 2;
            }
            get center() {
                return I(this.halfDrawWidth, this.halfDrawHeight);
            }
            get contentArea() {
                return this._contentArea;
            }
            get unsafeArea() {
                return this._unsafeArea;
            }
            _computeFit() {
                document.body.style.margin = "0px", document.body.style.overflow = "hidden";
                const t = this.aspectRatio;
                let e = 0, i = 0;
                window.innerWidth / t < window.innerHeight ? (e = window.innerWidth, i = window.innerWidth / t) : (e = window.innerHeight * t, i = window.innerHeight), this.viewport = {
                    width: e,
                    height: i
                }, this._contentArea = U.fromDimension(this.resolution.width, this.resolution.height, E.Zero), this._unsafeArea = U.fromDimension(this.resolution.width, this.resolution.height, E.Zero), this.events.emit("resize", {
                    resolution: this.resolution,
                    viewport: this.viewport
                });
            }
            _computeFitScreenAndFill() {
                document.body.style.margin = "0px", document.body.style.overflow = "hidden";
                const t = window.innerWidth, e = window.innerHeight;
                this._computeFitAndFill(t, e), this.events.emit("resize", {
                    resolution: this.resolution,
                    viewport: this.viewport
                });
            }
            _computeFitContainerAndFill() {
                this.canvas.style.width = "100%", this.canvas.style.height = "100%", this._computeFitAndFill(this.canvas.offsetWidth, this.canvas.offsetHeight, {
                    width: 100,
                    widthUnit: "percent",
                    height: 100,
                    heightUnit: "percent"
                }), this.events.emit("resize", {
                    resolution: this.resolution,
                    viewport: this.viewport
                });
            }
            _computeFitAndFill(t, e, i) {
                if (this.viewport = null != i ? i : {
                    width: t,
                    height: e
                }, t / e <= this._contentResolution.width / this._contentResolution.height) {
                    this.resolution = {
                        width: t * this._contentResolution.width / t,
                        height: t * this._contentResolution.width / t * e / t
                    };
                    const i = (this.resolution.height - this._contentResolution.height) / 2;
                    this._contentArea = new U({
                        top: i,
                        left: 0,
                        right: this._contentResolution.width,
                        bottom: this.resolution.height - i
                    }), this._unsafeArea = new U({
                        top: -i,
                        left: 0,
                        right: this._contentResolution.width,
                        bottom: this.resolution.height + i
                    });
                } else {
                    this.resolution = {
                        width: e * this._contentResolution.height / e * t / e,
                        height: e * this._contentResolution.height / e
                    };
                    const i = (this.resolution.width - this._contentResolution.width) / 2;
                    this._contentArea = new U({
                        top: 0,
                        left: i,
                        right: this.resolution.width - i,
                        bottom: this._contentResolution.height
                    }), this._unsafeArea = new U({
                        top: 0,
                        left: -i,
                        right: this.resolution.width + i,
                        bottom: this._contentResolution.height
                    });
                }
            }
            _computeFitScreenAndZoom() {
                document.body.style.margin = "0px", document.body.style.overflow = "hidden", this.canvas.style.position = "absolute";
                const t = window.innerWidth, e = window.innerHeight;
                this._computeFitAndZoom(t, e), this.events.emit("resize", {
                    resolution: this.resolution,
                    viewport: this.viewport
                });
            }
            _computeFitContainerAndZoom() {
                this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "relative";
                this.canvas.parentElement.style.overflow = "hidden";
                const { offsetWidth: t, offsetHeight: e } = this.canvas;
                this._computeFitAndZoom(t, e), this.events.emit("resize", {
                    resolution: this.resolution,
                    viewport: this.viewport
                });
            }
            _computeFitAndZoom(t, e) {
                const i = this.aspectRatio;
                let s = 0, n = 0;
                t / i < e ? (s = t, n = t / i) : (s = e * i, n = e);
                const r = t / s, o = e / n, a = Math.max(r, o), h = s * a, l = n * a;
                this.canvas.style.left = h > t ? -(h - t) / 2 + "px" : "", this.canvas.style.top = l > e ? -(l - e) / 2 + "px" : "", this.viewport = {
                    width: h,
                    height: l
                };
                const c = U.fromDimension(this.viewport.width, this.viewport.height, E.Zero);
                if (this.viewport.width > t) {
                    const e = (this.viewport.width - t) / this.viewport.width * this.resolution.width;
                    c.top = 0, c.left = e / 2, c.right = this.resolution.width - e / 2, c.bottom = this.resolution.height;
                }
                if (this.viewport.height > e) {
                    const t = (this.viewport.height - e) / this.viewport.height * this.resolution.height;
                    c.top = t / 2, c.left = 0, c.bottom = this.resolution.height - t / 2, c.right = this.resolution.width;
                }
                this._contentArea = c;
            }
            _computeFitContainer() {
                const t = this.aspectRatio;
                let e = 0, i = 0, s = "pixel", n = "pixel";
                const r = this.canvas.parentElement;
                r.clientWidth / t < r.clientHeight ? (this.canvas.style.width = "100%", e = 100, s = "percent", i = this.canvas.offsetWidth / t) : (this.canvas.style.height = "100%", i = 100, n = "percent", e = this.canvas.offsetHeight * t), this.viewport = {
                    width: e,
                    widthUnit: s,
                    height: i,
                    heightUnit: n
                }, this._contentArea = U.fromDimension(this.resolution.width, this.resolution.height, E.Zero), this.events.emit("resize", {
                    resolution: this.resolution,
                    viewport: this.viewport
                });
            }
            _applyDisplayMode() {
                this._setResolutionAndViewportByDisplayMode(this.parent), this.parent instanceof Window ? this._browser.window.on("resize", this._resizeHandler) : (this._resizeObserver = new ResizeObserver(()=>{
                    this._resizeHandler();
                }), this._resizeObserver.observe(this.parent)), this.parent.addEventListener("resize", this._resizeHandler);
            }
            _setResolutionAndViewportByDisplayMode(t) {
                this.displayMode === bi.FillContainer && (this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.viewport = {
                    width: 100,
                    widthUnit: "percent",
                    height: 100,
                    heightUnit: "percent"
                }, this.resolution = {
                    width: this.canvas.offsetWidth,
                    height: this.canvas.offsetHeight
                }), this.displayMode === bi.FillScreen && (document.body.style.margin = "0px", document.body.style.overflow = "hidden", this.resolution = {
                    width: t.innerWidth,
                    height: t.innerHeight
                }, this.viewport = this.resolution), this._contentArea = U.fromDimension(this.resolution.width, this.resolution.height, E.Zero), this.displayMode === bi.FitScreen && this._computeFit(), this.displayMode === bi.FitContainer && this._computeFitContainer(), this.displayMode === bi.FitScreenAndFill && this._computeFitScreenAndFill(), this.displayMode === bi.FitContainerAndFill && this._computeFitContainerAndFill(), this.displayMode === bi.FitScreenAndZoom && this._computeFitScreenAndZoom(), this.displayMode === bi.FitContainerAndZoom && this._computeFitContainerAndZoom();
            }
        }
        class Si {
            static create() {
                return this._INSTANCE || (window.AudioContext || window.webkitAudioContext) && (this._INSTANCE = new AudioContext), this._INSTANCE;
            }
        }
        class Pi {
            static unlock() {
                return new Promise((t, e)=>{
                    if (Pi._UNLOCKED || !Si.create()) return t(!0);
                    const i = setTimeout(()=>{
                        k.getInstance().warn("Excalibur was unable to unlock the audio context, audio probably will not play in this browser."), t(!1);
                    }, 200), s = Si.create();
                    s.resume().then(()=>{
                        const e = s.createBuffer(1, 1, 22050), n = s.createBufferSource();
                        let r = !1;
                        n.buffer = e, n.connect(s.destination), n.onended = ()=>r = !0, n.start(0), setTimeout(()=>{
                            !function(t) {
                                return !!t.playbackState;
                            }(n) ? (s.currentTime > 0 || r) && (Pi._UNLOCKED = !0) : n.playbackState !== n.PLAYING_STATE && n.playbackState !== n.FINISHED_STATE || (Pi._UNLOCKED = !0);
                        }, 0), clearTimeout(i), t(!0);
                    }, ()=>{
                        e();
                    });
                });
            }
            static isUnlocked() {
                return this._UNLOCKED;
            }
        }
        Pi._UNLOCKED = !1;
        class Ei extends Jt {
            get ctx() {
                return this._ctx;
            }
            constructor(t = {}){
                super(t), this._options = t;
            }
            clone() {
                return new Ei({
                    ...this._options,
                    ...this.cloneGraphicOptions(),
                    ...this.cloneRasterOptions()
                });
            }
            execute(t) {
                var e, i;
                (null === (e = this._options) || void 0 === e ? void 0 : e.draw) && (null === (i = this._options) || void 0 === i || i.draw(t)), this._options.cache || this.flagDirty();
            }
        }
        class Ii {
        }
        Ii.type = {
            any: "",
            blob: "blob",
            json: "json",
            text: "text",
            document: "document",
            arraybuffer: "arraybuffer"
        };
        class Ri {
            constructor(){
                this.states = new Map;
            }
            get currentState() {
                return this._currentState;
            }
            set currentState(t) {
                this._currentState = t;
            }
            static create(t, e) {
                const i = new Ri;
                i.data = e;
                for(const e in t.states)i.states.set(e, {
                    name: e,
                    ...t.states[e]
                });
                for (const t of i.states.values())for (const e of t.transitions)if ("*" !== e && !i.states.has(e)) throw Error(`Invalid state machine, state [${t.name}] has a transition to another state that doesn't exist [${e}]`);
                return i.currentState = i.startState = i.states.get(t.start), i;
            }
            in(t) {
                return this.currentState.name === t;
            }
            go(t, e) {
                var i, s;
                if (this.currentState.transitions.includes(t) || this.currentState.transitions.includes("*")) {
                    const n = this.states.get(t);
                    if (this.currentState.onExit) {
                        if (!1 === (null === (i = this.currentState) || void 0 === i ? void 0 : i.onExit({
                            to: n.name,
                            data: this.data
                        }))) return !1;
                    }
                    if (null == n ? void 0 : n.onEnter) {
                        if (!1 === (null == n ? void 0 : n.onEnter({
                            from: this.currentState.name,
                            eventData: e,
                            data: this.data
                        }))) return !1;
                    }
                    return this.currentState = n, (null === (s = this.currentState) || void 0 === s ? void 0 : s.onState) && this.currentState.onState(), !0;
                }
                return !1;
            }
            update(t) {
                this.currentState.onUpdate && this.currentState.onUpdate(this.data, t);
            }
            save(t) {
                localStorage.setItem(t, JSON.stringify({
                    currentState: this.currentState.name,
                    data: this.data
                }));
            }
            restore(t) {
                const e = JSON.parse(localStorage.getItem(t));
                this.currentState = this.states.get(e.currentState), this.data = e.data;
            }
        }
        class Fi {
            _createNewBufferSource() {
                this._instance = this._audioContext.createBufferSource(), this._instance.buffer = this._src, this._instance.loop = this.loop, this._instance.playbackRate.value = this._playbackRate, this._instance.connect(this._volumeNode), this._volumeNode.connect(this._audioContext.destination);
            }
            _handleEnd() {
                this.loop || (this._instance.onended = ()=>{
                    this._playingFuture.resolve(!0);
                });
            }
            set loop(t) {
                this._loop = t, this._instance && (this._instance.loop = t, this.loop || (this._instance.onended = ()=>{
                    this._playingFuture.resolve(!0);
                }));
            }
            get loop() {
                return this._loop;
            }
            set volume(t) {
                t = w(t, 0, 1), this._volume = t, this._stateMachine.in("PLAYING") && this._volumeNode.gain.setTargetAtTime ? this._volumeNode.gain.setTargetAtTime(t, this._audioContext.currentTime, .1) : this._volumeNode.gain.value = t;
            }
            get volume() {
                return this._volume;
            }
            get duration() {
                var t;
                return null !== (t = this._duration) && void 0 !== t ? t : this.getTotalPlaybackDuration();
            }
            set duration(t) {
                this._duration = t;
            }
            constructor(t){
                this._src = t, this._audioContext = Si.create(), this._volumeNode = this._audioContext.createGain(), this._playingFuture = new _, this._stateMachine = Ri.create({
                    start: "STOPPED",
                    states: {
                        PLAYING: {
                            onEnter: ({ data: t })=>{
                                this._createNewBufferSource(), this._handleEnd(), this.loop ? this._instance.start(0, t.pausedAt * this._playbackRate) : this._instance.start(0, t.pausedAt * this._playbackRate, this.duration), t.startedAt = this._audioContext.currentTime - t.pausedAt, t.pausedAt = 0;
                            },
                            onState: ()=>this._playStarted(),
                            onExit: ({ to: t })=>{
                                "STOPPED" === t && this._playingFuture.resolve(!0), this._instance.onended = null, this._instance.disconnect(), this._instance.stop(0), this._instance = null;
                            },
                            transitions: [
                                "STOPPED",
                                "PAUSED",
                                "SEEK"
                            ]
                        },
                        SEEK: {
                            onEnter: ({ eventData: t, data: e })=>{
                                e.pausedAt = (null != t ? t : 0) / this._playbackRate, e.startedAt = 0;
                            },
                            transitions: [
                                "*"
                            ]
                        },
                        STOPPED: {
                            onEnter: ({ data: t })=>{
                                t.pausedAt = 0, t.startedAt = 0, this._playingFuture.resolve(!0);
                            },
                            transitions: [
                                "PLAYING",
                                "PAUSED",
                                "SEEK"
                            ]
                        },
                        PAUSED: {
                            onEnter: ({ data: t })=>{
                                t.pausedAt = this._audioContext.currentTime - t.startedAt;
                            },
                            transitions: [
                                "PLAYING",
                                "STOPPED",
                                "SEEK"
                            ]
                        }
                    }
                }, {
                    startedAt: 0,
                    pausedAt: 0
                }), this._volume = 1, this._loop = !1, this._playStarted = ()=>{}, this._playbackRate = 1, this._createNewBufferSource();
            }
            isPlaying() {
                return this._stateMachine.in("PLAYING");
            }
            isPaused() {
                return this._stateMachine.in("PAUSED") || this._stateMachine.in("SEEK");
            }
            isStopped() {
                return this._stateMachine.in("STOPPED");
            }
            play(t = ()=>{}) {
                return this._playStarted = t, this._stateMachine.go("PLAYING"), this._playingFuture.promise;
            }
            pause() {
                this._stateMachine.go("PAUSED");
            }
            stop() {
                this._stateMachine.go("STOPPED");
            }
            seek(t) {
                this._stateMachine.go("PAUSED"), this._stateMachine.go("SEEK", t);
            }
            getTotalPlaybackDuration() {
                return this._src.duration;
            }
            getPlaybackPosition() {
                const { pausedAt: t, startedAt: e } = this._stateMachine.data;
                return t ? t * this._playbackRate : e ? (this._audioContext.currentTime - e) * this._playbackRate : 0;
            }
            set playbackRate(t) {
                this._instance.playbackRate.value = this._playbackRate = t;
            }
            get playbackRate() {
                return this._instance.playbackRate.value;
            }
        }
        class Mi extends me {
            set bubbles(t) {}
            get bubbles() {
                return !1;
            }
            get _path() {
                return null;
            }
            set _path(t) {}
            constructor(t, e = "MediaEvent"){
                super(), this.target = t, this._name = e;
            }
            stopPropagation() {}
            action() {}
            propagate() {}
            layPath(t) {}
        }
        class Di extends Mi {
            constructor(t, e){
                super(t, "NativeSoundEvent"), this.track = e;
            }
        }
        class Bi extends Mi {
            constructor(t, e){
                super(t, "NativeSoundProcessedEvent"), this._processedData = e, this.data = this._processedData;
            }
        }
        function ki(t) {
            try {
                const e = new Audio, i = /.*\.([A-Za-z0-9]+)(?:(?:\?|\#).*)*$/, s = t.match(i)[1];
                return !!e.canPlayType("audio/" + s);
            } catch (t) {
                return k.getInstance().warn("Cannot determine audio support, assuming no support for the Audio Tag", t), !1;
            }
        }
        const Li = {
            VolumeChange: "volumechange",
            Processed: "processed",
            Pause: "pause",
            Stop: "stop",
            PlaybackEnd: "playbackend",
            Resume: "resume",
            PlaybackStart: "playbackstart"
        };
        class zi {
            set loop(t) {
                this._loop = t;
                for (const t of this._tracks)t.loop = this._loop;
                this.logger.debug("Set loop for all instances of sound", this.path, "to", this._loop);
            }
            get loop() {
                return this._loop;
            }
            set volume(t) {
                this._volume = t;
                for (const t of this._tracks)t.volume = this._volume;
                this.events.emit("volumechange", new Di(this)), this.logger.debug("Set loop for all instances of sound", this.path, "to", this._volume);
            }
            get volume() {
                return this._volume;
            }
            get duration() {
                return this._duration;
            }
            set duration(t) {
                this._duration = t;
            }
            get instances() {
                return this._tracks;
            }
            get path() {
                return this._resource.path;
            }
            set path(t) {
                this._resource.path = t;
            }
            get bustCache() {
                return this._resource.bustCache;
            }
            set bustCache(t) {
                this._resource.bustCache = t;
            }
            constructor(...t){
                this.events = new g, this.logger = k.getInstance(), this._loop = !1, this._volume = 1, this._isStopped = !1, this._tracks = [], this._wasPlayingOnHidden = !1, this._playbackRate = 1, this._audioContext = Si.create(), this._resource = new et("", Ii.type.arraybuffer);
                for (const e of t)if (ki(e)) {
                    this.path = e;
                    break;
                }
                this.path || (this.logger.warn("This browser does not support any of the audio files specified:", t.join(", ")), this.logger.warn("Attempting to use", t[0]), this.path = t[0]);
            }
            isLoaded() {
                return !!this.data;
            }
            async load() {
                var t, e;
                if (this.data) return this.data;
                const i = await this._resource.load(), s = await this.decodeAudio(i.slice(0));
                return this._duration = null !== (e = null !== (t = this._duration) && void 0 !== t ? t : null == s ? void 0 : s.duration) && void 0 !== e ? e : void 0, this.events.emit("processed", new Bi(this, s)), this.data = s;
            }
            async decodeAudio(t) {
                try {
                    return await this._audioContext.decodeAudioData(t.slice(0));
                } catch (t) {
                    return this.logger.error("Unable to decode  this browser may not fully support this format, or the file may be corrupt, if this is an mp3 try removing id3 tags and album art from the file."), await Promise.reject();
                }
            }
            wireEngine(t) {
                t && (this._engine = t, this._engine.on("hidden", ()=>{
                    t.pauseAudioWhenHidden && this.isPlaying() && (this._wasPlayingOnHidden = !0, this.pause());
                }), this._engine.on("visible", ()=>{
                    t.pauseAudioWhenHidden && this._wasPlayingOnHidden && (this.play(), this._wasPlayingOnHidden = !1);
                }), this._engine.on("start", ()=>{
                    this._isStopped = !1;
                }), this._engine.on("stop", ()=>{
                    this.stop(), this._isStopped = !0;
                }));
            }
            instanceCount() {
                return this._tracks.length;
            }
            isPlaying() {
                return this._tracks.some((t)=>t.isPlaying());
            }
            isPaused() {
                return this._tracks.some((t)=>t.isPaused());
            }
            isStopped() {
                return this._tracks.some((t)=>t.isStopped());
            }
            play(t) {
                return this.isLoaded() ? this._isStopped ? (this.logger.warn("Cannot start playing. Engine is in a stopped state."), Promise.resolve(!1)) : (this.volume = t || this.volume, this.isPaused() ? this._resumePlayback() : this._startPlayback()) : (this.logger.warn("Cannot start playing. Resource", this.path, "is not loaded yet"), Promise.resolve(!0));
            }
            pause() {
                if (this.isPlaying()) {
                    for (const t of this._tracks)t.pause();
                    this.events.emit("pause", new Di(this)), this.logger.debug("Paused all instances of sound", this.path);
                }
            }
            stop() {
                for (const t of this._tracks)t.stop();
                this.events.emit("stop", new Di(this)), this._tracks.length = 0, this.logger.debug("Stopped all instances of sound", this.path);
            }
            get playbackRate() {
                return this._playbackRate;
            }
            set playbackRate(t) {
                this._playbackRate = t, this._tracks.forEach((t)=>{
                    t.playbackRate = this._playbackRate;
                });
            }
            seek(t, e = 0) {
                0 === this._tracks.length && this._getTrackInstance(this.data), this._tracks[e].seek(t);
            }
            getTotalPlaybackDuration() {
                return this.isLoaded() ? this.data.duration : (this.logger.warnOnce(`Sound from ${this.path} is not loaded, cannot return total playback duration.Did you forget to add Sound to a loader? https://excaliburjs.com/docs/loaders/`), 0);
            }
            getPlaybackPosition(t = 0) {
                return this._tracks.length ? this._tracks[t].getPlaybackPosition() : 0;
            }
            getTrackId(t) {
                return this._tracks.indexOf(t);
            }
            async _resumePlayback() {
                if (this.isPaused()) {
                    const t = [];
                    for (const e of this._tracks)t.push(e.play().then(()=>(this._tracks.splice(this.getTrackId(e), 1), !0)));
                    this.events.emit("resume", new Di(this)), this.logger.debug("Resuming paused instances for sound", this.path, this._tracks), await Promise.all(t);
                }
                return !0;
            }
            async _startPlayback() {
                const t = this._getTrackInstance(this.data), e = await t.play(()=>{
                    this.events.emit("playbackstart", new Di(this, t)), this.logger.debug("Playing new instance for sound", this.path);
                });
                this.events.emit("playbackend", new Di(this, t));
                const i = this.getTrackId(t);
                return -1 !== i && this._tracks.splice(i, 1), e;
            }
            _getTrackInstance(t) {
                var e;
                const i = new Fi(t);
                return i.loop = this.loop, i.volume = this.volume, i.duration = null !== (e = this.duration) && void 0 !== e ? e : 0, i.playbackRate = this._playbackRate, this._tracks.push(i), i;
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
        }
        const Ui = {
            BeforeLoad: "beforeload",
            AfterLoad: "afterload",
            UserAction: "useraction",
            LoadResourceStart: "loadresourcestart",
            LoadResourceEnd: "loadresourceend"
        };
        function Oi(t) {
            var e, i;
            return !!(null == t ? void 0 : t.prototype) && !!(null === (i = null === (e = null == t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.constructor) || void 0 === i ? void 0 : i.name);
        }
        class Hi {
            get resources() {
                return this._resources;
            }
            constructor(t){
                var e;
                this.events = new g, this.canvas = new Ei({
                    filtering: ot.Blended,
                    smoothing: !0,
                    cache: !1,
                    draw: this.onDraw.bind(this)
                }), this._resources = [], this._numLoaded = 0, this._totalTimeMs = 0, this._loadingFuture = new _, t && (null === (e = t.loadables) || void 0 === e ? void 0 : e.length) && this.addResources(t.loadables);
            }
            onInitialize(t) {
                this.engine = t, this.canvas.width = this.engine.screen.resolution.width, this.canvas.height = this.engine.screen.resolution.height;
            }
            async onUserAction() {
                return await Promise.resolve();
            }
            async onBeforeLoad() {}
            async onAfterLoad() {
                await V(500, this.engine.clock);
            }
            addResource(t) {
                this._resources.push(t);
            }
            addResources(t) {
                let e = 0;
                const i = t.length;
                for(; e < i; e++)this.addResource(t[e]);
            }
            markResourceComplete() {
                this._numLoaded++;
            }
            get progress() {
                const t = this._resources.length;
                return t > 0 ? w(this._numLoaded, 0, t) / t : 1;
            }
            isLoaded() {
                return this._numLoaded === this._resources.length;
            }
            onUpdate(t, e) {
                this._totalTimeMs += e;
            }
            onDraw(t) {
                const e = this._totalTimeMs / 1e3;
                t.fillStyle = R.Black.toRGBA(), t.fillRect(0, 0, this.engine.screen.resolution.width, this.engine.screen.resolution.height), t.save(), t.translate(this.engine.screen.resolution.width / 2, this.engine.screen.resolution.height / 2);
                const i = 10 * e;
                t.strokeStyle = "white", t.lineWidth = 10, t.lineCap = "round", t.arc(0, 0, 40, i, i + 3 * Math.PI / 2), t.stroke(), t.fillStyle = "white", t.font = "16px sans-serif";
                const s = (100 * this.progress).toFixed(0) + "%", n = t.measureText(s), r = Math.abs(n.actualBoundingBoxLeft) + Math.abs(n.actualBoundingBoxRight), o = Math.abs(n.actualBoundingBoxAscent) + Math.abs(n.actualBoundingBoxDescent);
                t.fillText(s, -r / 2, o / 2), t.restore();
            }
            areResourcesLoaded() {
                return 0 === this._resources.length ? Promise.resolve() : this._loadingFuture.promise;
            }
            async load() {
                await this.onBeforeLoad(), this.events.emit("beforeload"), this.canvas.flagDirty(), await Promise.all(this._resources.map(async (t)=>{
                    this.events.emit("loadresourcestart", t), await t.load().finally(()=>{
                        this._numLoaded++, this.canvas.flagDirty(), this.events.emit("loadresourceend", t);
                    });
                }));
                for (const t of this._resources)t instanceof zi && t.wireEngine(this.engine);
                return this._loadingFuture.resolve(), this.canvas.flagDirty(), await this.onUserAction(), this.events.emit("useraction"), await Pi.unlock(), await this.onAfterLoad(), this.events.emit("afterload"), this.data = this._resources;
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
        }
        var Ni = i(851);
        class Wi extends Hi {
            get _image() {
                return this._imageElement || (this._imageElement = new Image, this._imageElement.onload = ()=>this._imageLoaded.resolve(), this._imageElement.src = this.logo), this._imageElement;
            }
            get playButtonRootElement() {
                return this._playButtonRootElement;
            }
            get playButtonElement() {
                return this._playButtonElement;
            }
            get _playButton() {
                const t = document.getElementById("excalibur-play-root");
                return t && (this._playButtonRootElement = t), this._playButtonRootElement || (this._playButtonRootElement = document.createElement("div"), this._playButtonRootElement.id = "excalibur-play-root", this._playButtonRootElement.style.position = "absolute", document.body.appendChild(this._playButtonRootElement)), this._styleBlock || (this._styleBlock = document.createElement("style"), this._styleBlock.textContent = this._playButtonStyles, document.head.appendChild(this._styleBlock)), this._playButtonElement || (this._playButtonElement = this.startButtonFactory(), this._playButtonRootElement.appendChild(this._playButtonElement)), this._playButtonElement;
            }
            constructor(t){
                const e = Array.isArray(t) ? {
                    loadables: t
                } : t;
                super(e), this._logger = k.getInstance(), this._originalOptions = {
                    loadables: []
                }, this.events = new g, this._playButtonShown = !1, this.logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAAB2CAYAAABxhGI9AAAACXBIWXMAAAsSAAALEgHS3X78AAAKnUlEQVR42u3dP2wjSx0H8N8hJIonIRmJjsq0SBR+BQ1dcqKhe0lD77SvSwpKkJKGPulpktfRIMUdEqKIqV57rpAokM4dbSiyq7ONPTP7x39ifz7SFbnEnp3xer47O7uzH15fXwMA6OYHmgAABCoACFQAEKgAgEAFAIEKAAIVAAQqACBQAUCgAoBABQCBCgAIVAAQqAAgUAFAoAIAAhUABCoACFQAEKgAgECFLbmOiNeFf2PbAyz68Pr6qhUgbRwR92v+/zwiJrYHMEKFMmcN///UtgcQqFBk1PD/97U9Qx8VCFSgu4EmAIEKAAIVAAQqACBQ4Z25jojP8eX+0WtNAgIVaOY+Im5j+eKh24h41jQgUIEyZ7F5NaPU7wCBCiwYd/w9cOB+qAlgJ3KLLow0EV198803RWvJfvfddx+0lhEqHKu5JgAjVCBvlhmFzjQRXUekHz9+TP79y8uLRjNChXfvoePvAYEKxNtj1e42/O5JoIJABcrdRMRVLM+X3kTEpaaB988cKuzWg9EobTWdMx0Oly8uN4dqhAoARqgnaN3arHfqu7OyH8ItKLVB/P+CEfMTHyGPY3npx1m8zWGDEeoBfUk/xdti57dr/r1Wv2+6EPow3tZ5rRdS72s1neuF97xvWd+XTH0/V+UMttDWqbI/r2nrxfp+jv2uSjSO7S+OXy/A/3lN+9xX5T5HxEUPZZ0tfB71+w57eJ/HFu+z+jkv1u92YX9fbI/HhX3JA9rp5MPr66tWaG9UfUGbrHIzi7cLUyYFf/tpTady03EEeL8mUJ6i7MKYNvWNqr4Pe2jradXO60LrvPAz2PQ5RPX684ah8dxD+2zantnCgVipSVV+m/tgB9W2DDq2Sx/vM95wcHhZhWVJm8yrv58cSgfTdc70+++/X/r522+/tUKSEepBqo+om4ZLPerMjUwuNnQCtx1GWJtee1FwdD5uWd86xLs8UaVt2aNEO1/saZ/Z5rYMW4zq6v34rGV9Bg3q2eZ9SkeNm9qwyUh30OPIHYFKx5FG03C7znSOqYBq+qW/zpQ3anH037TNHluG6f0WPsPhHvab4QFty7ogOeuxDYcNy2/zu2214WNYWxmBurNO8bGn97pNBOO8xy/9uCorZZ4I2r4C7aJgO7ZV9iE49Dm6NvOWx+pWE9CUq3zbdTp9doz38TbXtzqH9RT5CyWe422OaZoZGeZCabrhPQY9HjwsjpTvCg4YtlE2+Ta/j2bzn8fqrDqgm+6yUHOmAvWUjAtGhbNYvsBknDnqH1Qhc7VmxHgeb/NbudA5j/UXlYwif2p6luhAc9teu1npiHKnDs8if6tCm7JLX3NKpgttXe9ruc9mHMd7a83iwdxF5vt8tutARaCeklRnNK9C8WnNF7geJQ4T4XG3JhSnVdilQrG+yOnrlVHfsEGYzhNBn7Lu6tS7+HJafJQ4EMiNlNqWXZ9WPvVgnVYHG5M1ByDXkT6leX2EgTqJtyt45yv7S2qO3sEZjZhDLXeR+YKdJ0Zdk8QocvH9N732KrNtq+FZ/zzIHABcJrYpd+Xv14lOd5ap76SgrduW/VTQ1qcQpqnbgu4ifZvUMNpd9XuoZmvCtPaQ2Y/BCHVLgbrJTeRPDdVf6pfMKDU2fOkHmVFFfXr3MsouLsnNvV5kRoe5+s431PeuoKPqWnaurY/ZPBEeqwceN4l96iwO6H7Mjq4y7VGPVNe10VaZMzVCPVWpI/Z6FZbcv5fMqGCU+dLfFGzj58jP8+bCdJCo7yzKTwdOF0bu9Ug7V4c+yz7FJfYeGoysUss0HssIdVZwYLDujMqlESoCdTtGsZtbHnJBeNdDSJSs0jTKdMJN1HNX54Wv7bvsU9NkVJVa13dX+/wuArV0X/l5RHyo/lnfF4G6p6DrS0kHdtXhy35TGErDPYZUn2WfWqDOo/lVqdMD2O/hKJhD7S/odukymq9s02QN4EEPR/zbaOumZc+r15zK1Zqznl9jsfiemTM1QmV3HUuTkedlg9HIQzRbUD93dfC+2tpj2fIHEH2+RqCCQH13gZq7hWXTNpVu19OB1fc9nQ0AKOKUb5lU0P1kDyOneoWk0lOZ9cIP0x7qu8+2BhCoR2wYu1+e7DmaXzBSsu5vaX1ne2zrpmUPTmxf7PM1Dm4y/vC7ny7Nif7+z/9ZmtM0Z3panPLtPmra9f16bcK0Dpbnwk43Vd/RHtu6zfNQTy1QBy3aqG2g9nVmxml+BOoJyT3NpWmn9xhfFnu4bvDa+44BXhqqfdf3uUF9+yz77AT31Yue2mjecYQ62NLfgkA9ghHqLNEhNem4H1c6vdyDxhf/bpz5m4coW/c39wi6VH2bPtHlcaV9cvXts+zxCe6rTeqc2ndL7uGd93QwM9bFcAzMoZZ7SgTBbWx+asui61h/iq1+RmjqdbnQXQ3T1DNQ63V/U9ucqm/pMzPb1rePsk/1iTOjgvatR4W3Lc8ULB78pELyrnAfeTcj1NU509/86mfJ33/8+Mf00a05UyPUEw7UVCeWG/WNEiExyHRMt5ltW30izUPk18ytt7lNfc8i//DvtvXto+ySA5BjljsLUF8lPkqMPEtW1JomDsiGBZ9Byb4NAvUITSN9GuwsIj6t6UTOqk7jJREkmzqli8xIs96udSO20sX0H1vW92IL9e1a9rgqVyf91gbPsTy9UD9n9lOkT8k+RfkFR5PMNqxOcdSf32PBvg3vilO+zdxE+okx9Wm0ph36XYsRZCpMF993GOk5qvqB3Dct6jvssb67KvuUNJ3frw92bhr8/STSF0JdRPMLpUCgnsgo9S76PZ246ZFk1wWvK5m3vVoYvW1Sz7nN91jfXbQ1ZQc7TW6HeaoOalypG/8/p/rP1aNAc6ZHzSnfdqPUPhdy2PQw6Nz9gSVhuhiqueUHR3uu7y7K3rdDX4u46ZrPbUa0IFBZ0seKQ3XQTRt2vm3W/a2DbNKys++rvm3ep6+y1x2UdP3bWU9lzra47U1GmlctX/sQ23t+aOlByLTh/4NAPaCRxtcdO5HLSJ/6vNtCwGx67VPmPbvWd1q9frKHtp4kAqRJ2HR9j762JfX3bZ//elPtj13PPDx1+D5tqk/Xi6NO8SHz7MmH19dXrdBNfVFP6T2PT1UHNit87/t4m5+aRH+nQBdvqyhZDKJLfZs8h7XPsqdV2ZOV+tanKB8aln0dyxdAXbV4j4gvt4oMOrbP6vbU73NW7TMlbdTnPrWpfqXfh9HKZ9vke7KuTeZRNtXRSe6+1FV//ce/ln5eXfsXgcqXzr6+9261M3moOoa7E6nvTZTfy7iNsmfb7kjfgXGsvxe0vihsEts9HTquPpt1q1vtahu2TqAiUAEEKj0zhwoARqgAu/OnX/442WH+9xc/Wvr58re/Tr7f41/+ZsRqhAoACFQAEKgAcHjMoQJskJsz/eqrr5Z+vvr7v5fmQFevAl5lztQIFQAQqAAgUAHgIJlDBdhgdQ41N2eKESoAIFABQKACwFEwhwoARqgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAEKgAgUAFAoAKAQAUAgQoACFQAEKgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAQqAAgUAFAoAKAQAUAlvwPcFDns1DsH4sAAAAASUVORK5CYII=", this.logoWidth = 468, this.logoHeight = 118, this.loadingBarColor = R.White, this.backgroundColor = "#176BAA", this._imageLoaded = new _, this.suppressPlayButton = !1, this._playButtonStyles = Ni.A.toString(), this.playButtonText = "Play game", this.startButtonFactory = ()=>{
                    let t = document.getElementById("excalibur-play");
                    return t || (t = document.createElement("button")), t.id = "excalibur-play", t.textContent = this.playButtonText, t.style.display = "none", t;
                }, this._originalOptions = {
                    ...Wi._DEFAULT_LOADER_OPTIONS,
                    ...e
                };
            }
            onInitialize(t) {
                this.engine = t, this.screen = t.screen, this.canvas.width = this.engine.canvas.width, this.canvas.height = this.engine.canvas.height, this.screen.events.on("resize", ()=>{
                    this.canvas.width = this.engine.canvas.width, this.canvas.height = this.engine.canvas.height;
                });
            }
            async showPlayButton() {
                var t, e;
                if (!this.suppressPlayButton) {
                    const t = ()=>{
                        try {
                            this._positionPlayButton();
                        } catch (t) {}
                    };
                    (null === (e = this.engine) || void 0 === e ? void 0 : e.browser) && this.engine.browser.window.on("resize", t), this._playButtonShown = !0, this._playButton.style.display = "block", document.body.addEventListener("keyup", (t)=>{
                        "Enter" === t.key && this._playButton.click();
                    }), this._positionPlayButton();
                    const i = new Promise((e)=>{
                        const i = (i)=>{
                            var s;
                            if (i.stopPropagation(), this.hidePlayButton(), (null === (s = this.engine) || void 0 === s ? void 0 : s.browser) && this.engine.browser.window.off("resize", t), this._originalOptions.fullscreenAfterLoad) try {
                                this._logger.info("requesting fullscreen"), this._originalOptions.fullscreenContainer instanceof HTMLElement ? this._originalOptions.fullscreenContainer.requestFullscreen() : this.engine.screen.enterFullscreen(this._originalOptions.fullscreenContainer);
                            } catch (t) {
                                this._logger.error("could not go fullscreen", t);
                            }
                            e();
                        };
                        this._playButton.addEventListener("click", i), this._playButton.addEventListener("touchend", i), this._playButton.addEventListener("pointerup", i), this.engine && this.engine.input.gamepads.once("button", ()=>i(new Event("button")));
                    });
                    return await i;
                }
                this.hidePlayButton(), await V(500, null === (t = this.engine) || void 0 === t ? void 0 : t.clock);
            }
            hidePlayButton() {
                this._playButtonShown = !1, this._playButton.style.display = "none";
            }
            dispose() {
                this._playButtonRootElement.parentElement && (this._playButtonRootElement.removeChild(this._playButtonElement), document.body.removeChild(this._playButtonRootElement), document.head.removeChild(this._styleBlock), this._playButtonRootElement = null, this._playButtonElement = null, this._styleBlock = null);
            }
            async onUserAction() {
                var t;
                await V(200, null === (t = this.engine) || void 0 === t ? void 0 : t.clock), this.canvas.flagDirty(), await this.showPlayButton();
            }
            async onBeforeLoad() {
                this.screen.pushResolutionAndViewport(), this.screen.resolution = {
                    width: this.canvas.width,
                    height: this.canvas.height
                }, this.screen.applyResolutionAndViewport();
                const t = this._image;
                await this._imageLoaded.promise, await (null == t ? void 0 : t.decode());
            }
            async onAfterLoad() {
                this.screen.popResolutionAndViewport(), this.screen.applyResolutionAndViewport(), this.dispose();
            }
            _positionPlayButton() {
                if (this.engine) {
                    const { x: t, y: e, width: i, height: s } = this.engine.canvas.getBoundingClientRect();
                    if (this._playButtonRootElement) {
                        const n = this._playButton.clientWidth, r = this._playButton.clientHeight;
                        this.playButtonPosition ? (this._playButtonRootElement.style.left = `${this.playButtonPosition.x}px`, this._playButtonRootElement.style.top = `${this.playButtonPosition.y}px`) : (this._playButtonRootElement.style.left = t + i / 2 - n / 2 + "px", this._playButtonRootElement.style.top = e + s / 2 - r / 2 + 100 + "px");
                    }
                }
            }
            onDraw(t) {
                const e = this.engine.canvasHeight / this.engine.pixelRatio, i = this.engine.canvasWidth / this.engine.pixelRatio;
                this._positionPlayButton(), t.fillStyle = this.backgroundColor, t.fillRect(0, 0, i, e);
                let s = e / 2;
                const n = Math.min(this.logoWidth, .75 * i);
                let r = i / 2 - n / 2;
                this.logoPosition && (r = this.logoPosition.x, s = this.logoPosition.y);
                const o = Math.floor(n * (this.logoHeight / this.logoWidth)), a = this.engine.screen.antialiasing;
                if (this.engine.screen.antialiasing = !0, this.logoPosition ? t.drawImage(this._image, 0, 0, this.logoWidth, this.logoHeight, r, s, n, o) : t.drawImage(this._image, 0, 0, this.logoWidth, this.logoHeight, r, s - o - 20, n, o), !this.suppressPlayButton && this._playButtonShown) return void (this.engine.screen.antialiasing = a);
                let h = r, l = s;
                this.loadingBarPosition && (h = this.loadingBarPosition.x, l = this.loadingBarPosition.y), t.lineWidth = 2, le(t, h, l, n, 20, 10, this.loadingBarColor);
                const c = n * this.progress - 10;
                le(t, h + 5, l + 5, c > 10 ? c : 10, 10, 5, null, this.loadingBarColor), this.engine.screen.antialiasing = a;
            }
        }
        Wi._DEFAULT_LOADER_OPTIONS = {
            loadables: [],
            fullscreenAfterLoad: !1,
            fullscreenContainer: void 0
        };
        const Gi = {
            webgl: "WebGL",
            webaudio: "WebAudio",
            gamepadapi: "Gamepad API"
        };
        class Vi {
            constructor(){
                this._features = null, this.failedTests = [], this._criticalTests = {
                    canvasSupport: function() {
                        const t = document.createElement("canvas");
                        return !(!t.getContext || !t.getContext("2d"));
                    },
                    arrayBufferSupport: function() {
                        const t = new XMLHttpRequest;
                        t.open("GET", "/");
                        try {
                            t.responseType = "arraybuffer";
                        } catch (t) {
                            return !1;
                        }
                        return "arraybuffer" === t.responseType;
                    },
                    dataUrlSupport: function() {
                        return 0 === document.createElement("canvas").toDataURL("image/png").indexOf("data:image/png");
                    },
                    objectUrlSupport: function() {
                        return "URL" in window && "revokeObjectURL" in URL && "createObjectURL" in URL;
                    },
                    rgbaSupport: function() {
                        const t = document.createElement("a").style;
                        return t.cssText = "background-color:rgba(150,255,150,.5)", ("" + t.backgroundColor).indexOf("rgba") > -1;
                    }
                }, this._warningTest = {
                    webAudioSupport: function() {
                        return !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext);
                    },
                    webglSupport: function() {
                        const t = document.createElement("canvas");
                        return !(!t.getContext || !t.getContext("webgl"));
                    }
                }, this._features = this._loadBrowserFeatures();
            }
            getBrowserFeatures() {
                return null === this._features && (this._features = this._loadBrowserFeatures()), this._features;
            }
            logBrowserFeatures() {
                let t = "%cSUPPORTED BROWSER FEATURES\n==========================%c\n";
                const e = [
                    "font-weight: bold; color: navy",
                    "font-weight: normal; color: inherit"
                ], i = this.getBrowserFeatures();
                for (const s of Object.keys(Gi))i[s] ? (t += "(%c\u2713%c)", e.push("font-weight: bold; color: green"), e.push("font-weight: normal; color: inherit")) : (t += "(%c\u2717%c)", e.push("font-weight: bold; color: red"), e.push("font-weight: normal; color: inherit")), t += " " + Gi[s] + "\n";
                e.unshift(t), console.log.apply(console, e);
            }
            _loadBrowserFeatures() {
                return {
                    canvas: (()=>this._criticalTests.canvasSupport())(),
                    arraybuffer: (()=>this._criticalTests.arrayBufferSupport())(),
                    dataurl: (()=>this._criticalTests.dataUrlSupport())(),
                    objecturl: (()=>this._criticalTests.objectUrlSupport())(),
                    rgba: (()=>this._criticalTests.rgbaSupport())(),
                    webaudio: (()=>this._warningTest.webAudioSupport())(),
                    webgl: (()=>this._warningTest.webglSupport())(),
                    gamepadapi: !!navigator.getGamepads
                };
            }
            test() {
                let t = !1;
                for(const e in this._criticalTests)this._criticalTests[e].call(this) || (this.failedTests.push(e), k.getInstance().error("Critical browser feature missing, Excalibur requires:", e), t = !0);
                if (t) return !1;
                for(const t in this._warningTest)this._warningTest[t]() || k.getInstance().warn("Warning browser feature missing, Excalibur will have reduced performance:", t);
                return !0;
            }
        }
        var qi, Xi, Yi;
        !function(t) {
            t.PreventCollision = "PreventCollision", t.Passive = "Passive", t.Active = "Active", t.Fixed = "Fixed";
        }(qi || (qi = {}));
        class Zi {
            static create(t, e) {
                if (this._CURRENT_GROUP > this._MAX_GROUPS) throw new Error(`Cannot have more than ${this._MAX_GROUPS} collision groups`);
                if (this._GROUPS.get(t)) {
                    const i = this._GROUPS.get(t);
                    if (i.mask === e) return i;
                    throw new Error(`Collision group ${t} already exists with a different mask!`);
                }
                const i = new $i(t, this._CURRENT_BIT, void 0 !== e ? e : ~this._CURRENT_BIT);
                return this._CURRENT_BIT = this._CURRENT_BIT << 1, this._CURRENT_GROUP++, this._GROUPS.set(t, i), i;
            }
            static get groups() {
                return Array.from(this._GROUPS.values());
            }
            static groupByName(t) {
                return this._GROUPS.get(t);
            }
            static reset() {
                this._GROUPS = new Map, this._CURRENT_BIT = this._STARTING_BIT, this._CURRENT_GROUP = 1;
            }
        }
        Zi._STARTING_BIT = 1, Zi._MAX_GROUPS = 32, Zi._CURRENT_GROUP = 1, Zi._CURRENT_BIT = Zi._STARTING_BIT, Zi._GROUPS = new Map;
        class $i {
            constructor(t, e, i){
                this._name = t, this._category = e, this._mask = i;
            }
            get name() {
                return this._name;
            }
            get category() {
                return this._category;
            }
            get mask() {
                return this._mask;
            }
            canCollide(t) {
                const e = this.category & t.mask, i = this.mask & t.category;
                return 0 !== e && 0 !== i;
            }
            invert() {
                const t = Zi.create("~(" + this.name + ")", 0 | ~this.mask);
                return t._category = ~this.category, t;
            }
            static combine(t) {
                const e = t.map((t)=>t.name).join("+"), i = ~t.reduce((t, e)=>e.category | t, 0);
                return Zi.create(e, i);
            }
            static collidesWith(t) {
                const e = `collidesWith(${t.map((t)=>t.name).join("+")})`, i = t.reduce((t, e)=>e.category | t, 0);
                return Zi.create(e, i);
            }
            toString() {
                return `\ncategory: ${this.category.toString(2).padStart(32, "0")}\nmask:     ${(this.mask >>> 0).toString(2).padStart(32, "0")}\n    `;
            }
        }
        $i.All = new $i("Collide with all groups", -1, -1);
        class ji {
            constructor(t, e){
                this.colliderA = t, this.colliderB = e, this.id = null, this.id = ji.calculatePairHash(t.id, e.id);
            }
            static canCollide(t, e) {
                var i, s;
                if (t.id === e.id) return !1;
                if (t.owner && e.owner && t.owner.id === e.owner.id) return !1;
                if (t.localBounds.hasZeroDimensions() || e.localBounds.hasZeroDimensions()) return !1;
                const n = null === (i = null == t ? void 0 : t.owner) || void 0 === i ? void 0 : i.get(Ss), r = null === (s = null == e ? void 0 : e.owner) || void 0 === s ? void 0 : s.get(Ss);
                return !(!n || !r) && !!n.group.canCollide(r.group) && (n.collisionType !== qi.Fixed || r.collisionType !== qi.Fixed) && r.collisionType !== qi.PreventCollision && n.collisionType !== qi.PreventCollision && !(!n.isActive || !r.isActive);
            }
            get canCollide() {
                const t = this.colliderA, e = this.colliderB;
                return ji.canCollide(t, e);
            }
            collide() {
                return this.colliderA.collide(this.colliderB);
            }
            hasCollider(t) {
                return t === this.colliderA || t === this.colliderB;
            }
            static calculatePairHash(t, e) {
                return t.value < e.value ? `#${t.value}+${e.value}` : `#${e.value}+${t.value}`;
            }
        }
        class Ki {
            constructor(t, e){
                this.min = t, this.max = e;
            }
            overlaps(t) {
                return this.max > t.min && t.max > this.min;
            }
            getOverlap(t) {
                return this.overlaps(t) ? this.max > t.max ? t.max - this.min : this.max - t.min : 0;
            }
        }
        class Qi {
            constructor(t){
                this.parent = t, this.parent = t || null, this.data = null, this.bounds = new U, this.left = null, this.right = null, this.height = 0;
            }
            isLeaf() {
                return !this.left && !this.right;
            }
        }
        class Ji {
            constructor(t, e = new U(-Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)){
                this._config = t, this.worldBounds = e, this.root = null, this.nodes = {};
            }
            _insert(t) {
                if (null === this.root) return this.root = t, void (this.root.parent = null);
                const e = t.bounds;
                let i = this.root;
                for(; !i.isLeaf();){
                    const t = i.left, s = i.right, n = i.bounds.getPerimeter(), r = i.bounds.combine(e).getPerimeter(), o = 2 * r, a = 2 * (r - n);
                    let h = 0;
                    const l = e.combine(t.bounds);
                    let c, d;
                    t.isLeaf() ? h = l.getPerimeter() + a : (d = t.bounds.getPerimeter(), c = l.getPerimeter(), h = c - d + a);
                    let u = 0;
                    const _ = e.combine(s.bounds);
                    if (s.isLeaf() ? u = _.getPerimeter() + a : (d = s.bounds.getPerimeter(), c = _.getPerimeter(), u = c - d + a), o < h && o < u) break;
                    i = h < u ? t : s;
                }
                const s = i.parent, n = new Qi(s);
                n.bounds = e.combine(i.bounds), n.height = i.height + 1, null !== s ? (s.left === i ? s.left = n : s.right = n, n.left = i, n.right = t, i.parent = n, t.parent = n) : (n.left = i, n.right = t, i.parent = n, t.parent = n, this.root = n);
                let r = t.parent;
                for(; r;){
                    if (r = this._balance(r), !r.left) throw new Error("Parent of current leaf cannot have a null left child" + r);
                    if (!r.right) throw new Error("Parent of current leaf cannot have a null right child" + r);
                    r.height = 1 + Math.max(r.left.height, r.right.height), r.bounds = r.left.bounds.combine(r.right.bounds), r = r.parent;
                }
            }
            _remove(t) {
                if (t === this.root) return void (this.root = null);
                const e = t.parent, i = e.parent;
                let s;
                if (s = e.left === t ? e.right : e.left, i) {
                    i.left === e ? i.left = s : i.right = s, s.parent = i;
                    let t = i;
                    for(; t;)t = this._balance(t), t.bounds = t.left.bounds.combine(t.right.bounds), t.height = 1 + Math.max(t.left.height, t.right.height), t = t.parent;
                } else this.root = s, s.parent = null;
            }
            trackCollider(t) {
                const e = new Qi;
                e.data = t, e.bounds = t.bounds, e.bounds.left -= 2, e.bounds.top -= 2, e.bounds.right += 2, e.bounds.bottom += 2, this.nodes[t.id.value] = e, this._insert(e);
            }
            updateCollider(t) {
                var e;
                const i = this.nodes[t.id.value];
                if (!i) return !1;
                const s = t.bounds;
                if (!this.worldBounds.contains(s)) return k.getInstance().warn("Collider with id " + t.id.value + " is outside the world bounds and will no longer be tracked for physics"), this.untrackCollider(t), !1;
                if (i.bounds.contains(s)) return !1;
                if (this._remove(i), s.left -= this._config.boundsPadding, s.top -= this._config.boundsPadding, s.right += this._config.boundsPadding, s.bottom += this._config.boundsPadding, t.owner) {
                    const i = null === (e = t.owner) || void 0 === e ? void 0 : e.get(Ss);
                    if (i) {
                        const t = 32 * i.vel.x / 1e3 * this._config.velocityMultiplier, e = 32 * i.vel.y / 1e3 * this._config.velocityMultiplier;
                        t < 0 ? s.left += t : s.right += t, e < 0 ? s.top += e : s.bottom += e;
                    }
                }
                return i.bounds = s, this._insert(i), !0;
            }
            untrackCollider(t) {
                const e = this.nodes[t.id.value];
                e && (this._remove(e), this.nodes[t.id.value] = null, delete this.nodes[t.id.value]);
            }
            _balance(t) {
                if (null === t) throw new Error("Cannot balance at null node");
                if (t.isLeaf() || t.height < 2) return t;
                const e = t.left, i = t.right, s = t, n = e, r = i, o = e.left, a = e.right, h = i.left, l = i.right, c = r.height - n.height;
                if (c > 1) return r.left = s, r.parent = s.parent, s.parent = r, r.parent ? r.parent.left === s ? r.parent.left = r : r.parent.right = r : this.root = r, h.height > l.height ? (r.right = h, s.right = l, l.parent = s, s.bounds = n.bounds.combine(l.bounds), r.bounds = s.bounds.combine(h.bounds), s.height = 1 + Math.max(n.height, l.height), r.height = 1 + Math.max(s.height, h.height)) : (r.right = l, s.right = h, h.parent = s, s.bounds = n.bounds.combine(h.bounds), r.bounds = s.bounds.combine(l.bounds), s.height = 1 + Math.max(n.height, h.height), r.height = 1 + Math.max(s.height, l.height)), r;
                if (c < -1) {
                    if (n.left = s, n.parent = s.parent, s.parent = n, n.parent) {
                        if (n.parent.left === s) n.parent.left = n;
                        else {
                            if (n.parent.right !== s) throw "Error rotating Dynamic Tree";
                            n.parent.right = n;
                        }
                    } else this.root = n;
                    return o.height > a.height ? (n.right = o, s.left = a, a.parent = s, s.bounds = r.bounds.combine(a.bounds), n.bounds = s.bounds.combine(o.bounds), s.height = 1 + Math.max(r.height, a.height), n.height = 1 + Math.max(s.height, o.height)) : (n.right = a, s.left = o, o.parent = s, s.bounds = r.bounds.combine(o.bounds), n.bounds = s.bounds.combine(a.bounds), s.height = 1 + Math.max(r.height, o.height), n.height = 1 + Math.max(s.height, a.height)), n;
                }
                return t;
            }
            getHeight() {
                return null === this.root ? 0 : this.root.height;
            }
            query(t, e) {
                const i = t.bounds, s = (n)=>{
                    if (n && n.bounds.overlaps(i)) {
                        if (!n.isLeaf() || n.data === t) return s(n.left) || s(n.right);
                        if (e.call(t, n.data)) return !0;
                    }
                    return !1;
                };
                s(this.root);
            }
            rayCastQuery(t, e = 1 / 0, i) {
                const s = (n)=>{
                    if (n && n.bounds.rayCast(t, e)) {
                        if (!n.isLeaf()) return s(n.left) || s(n.right);
                        if (i.call(t, n.data)) return !0;
                    }
                    return !1;
                };
                s(this.root);
            }
            getNodes() {
                const t = (e)=>e ? [
                        e
                    ].concat(t(e.left), t(e.right)) : [];
                return t(this.root);
            }
            debug(t) {
                const e = (i)=>{
                    i && (i.isLeaf() ? i.bounds.draw(t, R.Green) : i.bounds.draw(t, R.White), i.left && e(i.left), i.right && e(i.right));
                };
                e(this.root);
            }
        }
        class ts {
            constructor(t, e){
                this.pos = t, this.dir = e.normalize();
            }
            intersect(t) {
                const e = t.begin.sub(this.pos);
                if (0 === this.dir.cross(t.getSlope()) && 0 !== e.cross(this.dir)) return -1;
                const i = this.dir.cross(t.getSlope());
                if (0 === i) return -1;
                const s = e.cross(t.getSlope()) / i;
                if (s >= 0) {
                    const n = e.cross(this.dir) / i / t.getLength();
                    if (n >= 0 && n <= 1) return s;
                }
                return -1;
            }
            intersectPoint(t) {
                const e = this.intersect(t);
                return e < 0 ? null : this.getPoint(e);
            }
            getPoint(t) {
                return this.pos.add(this.dir.scale(t));
            }
        }
        class es {
            constructor(t){
                this._config = t, this._pairs = new Set, this._collisionPairCache = [], this._colliders = [], this._dynamicCollisionTree = new Ji(t.dynamicTree);
            }
            getColliders() {
                return this._colliders;
            }
            query(t) {
                const e = [];
                return t instanceof U ? this._dynamicCollisionTree.query({
                    id: u("collider", -1),
                    owner: null,
                    bounds: t
                }, (t)=>(e.push(t), !1)) : this._dynamicCollisionTree.query({
                    id: u("collider", -1),
                    owner: null,
                    bounds: new U(t.x, t.y, t.x, t.y)
                }, (t)=>(e.push(t), !1)), e;
            }
            rayCast(t, e) {
                var i, s, n;
                const r = [], o = null !== (i = null == e ? void 0 : e.maxDistance) && void 0 !== i ? i : 1 / 0, a = null == e ? void 0 : e.collisionGroup, h = a ? a.category : null !== (s = null == e ? void 0 : e.collisionMask) && void 0 !== s ? s : $i.All.category, l = null !== (n = null == e ? void 0 : e.searchAllColliders) && void 0 !== n && n;
                return this._dynamicCollisionTree.rayCastQuery(t, o, (i)=>{
                    const s = i.owner.get(Ss);
                    if ((null == e ? void 0 : e.ignoreCollisionGroupAll) && s.group === $i.All) return !1;
                    const n = !!(h & s.group.category);
                    if ((null == s ? void 0 : s.group) && !n) return !1;
                    const a = i.rayCast(t, o);
                    if (a) {
                        if (null == e ? void 0 : e.filter) {
                            if (e.filter(a) && (r.push(a), !l)) return !0;
                        } else if (r.push(a), !l) return !0;
                    }
                    return !1;
                }), r;
            }
            track(t) {
                if (t) {
                    if (t instanceof hs) {
                        const e = t.getColliders();
                        for (const i of e)i.owner = t.owner, this._colliders.push(i), this._dynamicCollisionTree.trackCollider(i);
                    } else this._colliders.push(t), this._dynamicCollisionTree.trackCollider(t);
                } else k.getInstance().warn("Cannot track null collider");
            }
            untrack(t) {
                if (t) {
                    if (t instanceof hs) {
                        const e = t.getColliders();
                        for (const t of e){
                            const e = this._colliders.indexOf(t);
                            -1 !== e && this._colliders.splice(e, 1), this._dynamicCollisionTree.untrackCollider(t);
                        }
                    } else {
                        const e = this._colliders.indexOf(t);
                        -1 !== e && this._colliders.splice(e, 1), this._dynamicCollisionTree.untrackCollider(t);
                    }
                } else k.getInstance().warn("Cannot untrack a null collider");
            }
            _pairExists(t, e) {
                const i = ji.calculatePairHash(t.id, e.id);
                return this._pairs.has(i);
            }
            broadphase(t, e, i) {
                const s = e / 1e3, n = t.filter((t)=>{
                    var e, i;
                    const s = null === (e = t.owner) || void 0 === e ? void 0 : e.get(Ss);
                    return (null === (i = t.owner) || void 0 === i ? void 0 : i.isActive) && s.collisionType !== qi.PreventCollision;
                });
                let r;
                this._collisionPairCache = [], this._pairs.clear();
                for(let t = 0, e = n.length; t < e; t++)r = n[t], this._dynamicCollisionTree.query(r, (t)=>{
                    if (!this._pairExists(r, t) && ji.canCollide(r, t)) {
                        const e = new ji(r, t);
                        this._pairs.add(e.id), this._collisionPairCache.push(e);
                    }
                    return !1;
                });
                if (i && (i.physics.pairs = this._collisionPairCache.length), this._config.continuous.checkForFastBodies) for (const t of n){
                    const e = t.owner.get(Ss);
                    if (e.collisionType !== qi.Active) continue;
                    const n = e.vel.magnitude * s + .5 * e.acc.magnitude * s * s, r = Math.min(t.bounds.height, t.bounds.width);
                    if (this._config.continuous.disableMinimumSpeedForFastBody || n > r / 2) {
                        i && i.physics.fastBodies++;
                        const s = e.globalPos.sub(e.oldPos), r = t.center, o = t.getFurthestPoint(e.vel), a = o.sub(s), h = new ts(a, e.vel);
                        let l;
                        h.pos = h.pos.add(h.dir.scale(-2 * this._config.continuous.surfaceEpsilon));
                        let c = new E(1 / 0, 1 / 0);
                        if (this._dynamicCollisionTree.rayCastQuery(h, n + 2 * this._config.continuous.surfaceEpsilon, (e)=>{
                            if (!this._pairExists(t, e) && ji.canCollide(t, e)) {
                                const t = e.rayCast(h, n + 10 * this._config.continuous.surfaceEpsilon);
                                if (t) {
                                    const i = t.point.sub(a);
                                    i.magnitude < c.magnitude && (c = i, l = e);
                                }
                            }
                            return !1;
                        }), l && E.isValid(c)) {
                            const s = new ji(t, l);
                            this._pairs.has(s.id) || (this._pairs.add(s.id), this._collisionPairCache.push(s));
                            const n = r.sub(o);
                            e.globalPos = a.add(n).add(c).add(h.dir.scale(10 * this._config.continuous.surfaceEpsilon)), t.update(e.transform.get()), i && i.physics.fastBodyCollisions++;
                        }
                    }
                }
                return this._collisionPairCache;
            }
            narrowphase(t, e) {
                let i = [];
                for(let s = 0; s < t.length; s++){
                    const n = t[s].collide();
                    if (i = i.concat(n), e && n.length > 0) for (const t of n)e.physics.contacts.set(t.id, t);
                }
                return e && (e.physics.collisions += i.length), i;
            }
            update(t) {
                let e = 0;
                const i = t.length;
                for(let s = 0; s < i; s++)this._dynamicCollisionTree.updateCollider(t[s]) && e++;
                return e;
            }
            debug(t) {
                this._dynamicCollisionTree.debug(t);
            }
        }
        class is {
            constructor(){
                this.id = u("collider", is._ID++), this.composite = null, this.events = new g, this.offset = E.Zero;
            }
            touching(t) {
                return !!this.collide(t);
            }
        }
        is._ID = 0, function(t) {
            t.Arcade = "arcade", t.Realistic = "realistic";
        }(Xi || (Xi = {})), function(t) {
            t.None = "none", t.VerticalFirst = "vertical-first", t.HorizontalFirst = "horizontal-first";
        }(Yi || (Yi = {}));
        const ss = {
            vertical: 1,
            horizontal: 2
        }, ns = {
            horizontal: 1,
            vertical: 2
        }, rs = {
            horizontal: 0,
            vertical: 0
        };
        var os;
        !function(t) {
            t.DynamicTree = "dynamic-tree", t.SparseHashGrid = "sparse-hash-grid";
        }(os || (os = {}));
        const as = ()=>({
                enabled: !0,
                gravity: I(0, 0).clone(),
                solver: Xi.Arcade,
                substep: 1,
                colliders: {
                    compositeStrategy: "together"
                },
                continuous: {
                    checkForFastBodies: !0,
                    disableMinimumSpeedForFastBody: !1,
                    surfaceEpsilon: .1
                },
                bodies: {
                    canSleepByDefault: !1,
                    sleepEpsilon: .07,
                    wakeThreshold: .07 * 3,
                    sleepBias: .9,
                    defaultMass: 10
                },
                spatialPartition: os.SparseHashGrid,
                sparseHashGrid: {
                    size: 100
                },
                dynamicTree: {
                    boundsPadding: 5,
                    velocityMultiplier: 2
                },
                arcade: {
                    contactSolveBias: Yi.None
                },
                realistic: {
                    contactSolveBias: Yi.None,
                    positionIterations: 3,
                    velocityIterations: 8,
                    slop: 1,
                    steeringFactor: .2,
                    warmStart: !0
                }
            });
        class hs extends is {
            set compositeStrategy(t) {
                this._compositeStrategy = t;
            }
            get compositeStrategy() {
                return this._compositeStrategy;
            }
            constructor(t){
                super(), this._collisionProcessor = new es({
                    ...as()
                }), this._dynamicAABBTree = new Ji({
                    boundsPadding: 5,
                    velocityMultiplier: 2
                }), this._colliders = [];
                for (const e of t)this.addCollider(e);
            }
            clearColliders() {
                this._colliders = [];
            }
            addCollider(t) {
                let e;
                t instanceof hs ? (e = t.getColliders(), e.forEach((e)=>e.offset.addEqual(t.offset))) : e = [
                    t
                ];
                for (const t of e)t.events.pipe(this.events), t.composite = this, this._colliders.push(t), this._collisionProcessor.track(t), this._dynamicAABBTree.trackCollider(t);
            }
            removeCollider(t) {
                t.events.pipe(this.events), t.composite = null, N(t, this._colliders), this._collisionProcessor.untrack(t), this._dynamicAABBTree.untrackCollider(t);
            }
            getColliders() {
                return this._colliders;
            }
            get worldPos() {
                var t, e;
                return (null !== (e = null === (t = this._transform) || void 0 === t ? void 0 : t.pos) && void 0 !== e ? e : E.Zero).add(this.offset);
            }
            get center() {
                var t, e;
                return (null !== (e = null === (t = this._transform) || void 0 === t ? void 0 : t.pos) && void 0 !== e ? e : E.Zero).add(this.offset);
            }
            get bounds() {
                var t, e;
                const i = this.getColliders();
                return i.reduce((t, e)=>t.combine(e.bounds), null !== (e = null === (t = i[0]) || void 0 === t ? void 0 : t.bounds) && void 0 !== e ? e : (new U).translate(this.worldPos)).translate(this.offset);
            }
            get localBounds() {
                var t, e;
                const i = this.getColliders();
                return i.reduce((t, e)=>t.combine(e.localBounds), null !== (e = null === (t = i[0]) || void 0 === t ? void 0 : t.localBounds) && void 0 !== e ? e : new U);
            }
            get axes() {
                const t = this.getColliders();
                let e = [];
                for (const i of t)e = e.concat(i.axes);
                return e;
            }
            getFurthestPoint(t) {
                const e = this.getColliders(), i = [];
                for (const s of e)i.push(s.getFurthestPoint(t));
                let s = i[0], n = -Number.MAX_VALUE;
                for (const e of i){
                    const i = e.dot(t);
                    i > n && (s = e, n = i);
                }
                return s;
            }
            getInertia(t) {
                const e = this.getColliders();
                let i = 0;
                for (const s of e)i += s.getInertia(t);
                return i;
            }
            collide(t) {
                let e = [
                    t
                ];
                t instanceof hs && (e = t.getColliders());
                const i = [];
                for (const t of e)this._dynamicAABBTree.query(t, (e)=>(i.push(new ji(t, e)), !1));
                let s = [];
                for (const t of i)s = s.concat(t.collide());
                return s;
            }
            getClosestLineBetween(t) {
                const e = this.getColliders(), i = [];
                if (t instanceof hs) {
                    const s = t.getColliders();
                    for (const t of e)for (const e of s){
                        const s = t.getClosestLineBetween(e);
                        s && i.push(s);
                    }
                } else for (const s of e){
                    const e = t.getClosestLineBetween(s);
                    e && i.push(e);
                }
                if (i.length) {
                    let t = i[0].getLength(), e = i[0];
                    for (const s of i){
                        const i = s.getLength();
                        i < t && (t = i, e = s);
                    }
                    return e;
                }
                return null;
            }
            contains(t) {
                const e = this.getColliders();
                for (const i of e)if (i.contains(t)) return !0;
                return !1;
            }
            rayCast(t, e) {
                const i = this.getColliders(), s = [];
                for (const n of i){
                    const i = n.rayCast(t, e);
                    i && s.push(i);
                }
                if (s.length) {
                    let e = s[0], i = e.point.dot(t.dir);
                    for (const n of s){
                        const s = t.dir.dot(n.point);
                        s < i && (e = n, i = s);
                    }
                    return e;
                }
                return null;
            }
            project(t) {
                const e = this.getColliders(), i = [];
                for (const s of e){
                    const e = s.project(t);
                    e && i.push(e);
                }
                if (i.length) {
                    const t = new Ki(i[0].min, i[0].max);
                    for (const e of i)t.min = Math.min(e.min, t.min), t.max = Math.max(e.max, t.max);
                    return t;
                }
                return null;
            }
            update(t) {
                if (t) {
                    const e = this.getColliders();
                    for (const i of e)i.owner = this.owner, i.update(t);
                }
            }
            debug(t, e, i) {
                const s = this.getColliders();
                t.save(), t.translate(this.offset.x, this.offset.y);
                for (const n of s)n.debug(t, e, i);
                t.restore();
            }
            clone() {
                const t = new hs(this._colliders.map((t)=>t.clone()));
                return t.offset = this.offset.clone(), t;
            }
        }
        class ls {
            constructor(t, e){
                this.begin = t, this.end = e;
            }
            clone(t) {
                const e = t || new ls(this.begin.clone(), this.end.clone());
                return e.begin = this.begin.clone(e.begin), e.end = this.end.clone(e.end), e;
            }
            transform(t, e) {
                const i = e || new ls(E.Zero, E.Zero);
                return i.begin = t.multiply(this.begin, i.begin), i.end = t.multiply(this.end, i.end), i;
            }
            get slope() {
                return (this.end.y - this.begin.y) / (this.end.x - this.begin.x);
            }
            get intercept() {
                return this.begin.y - this.slope * this.begin.x;
            }
            normal() {
                return this._normal ? this._normal : this._normal = this.end.sub(this.begin).normal();
            }
            dir() {
                return this._dir ? this._dir : this._dir = this.end.sub(this.begin);
            }
            getPoints() {
                return [
                    this.begin,
                    this.end
                ];
            }
            getSlope() {
                if (this._slope) return this._slope;
                const t = this.begin, e = this.end, i = t.distance(e);
                return this._slope = e.sub(t).scale(1 / i);
            }
            getEdge() {
                const t = this.begin;
                return this.end.sub(t);
            }
            getLength() {
                const t = this.begin, e = this.end;
                return t.distance(e);
            }
            get midpoint() {
                return this.begin.add(this.end).scale(.5);
            }
            flip() {
                return new ls(this.end, this.begin);
            }
            below(t) {
                return (this.end.x - this.begin.x) * (t.y - this.begin.y) - (this.end.y - this.begin.y) * (t.x - this.begin.x) >= 0;
            }
            clip(t, e, i = !0) {
                let s = t;
                i && (s = s.normalize());
                const n = s.dot(this.begin) - e, r = s.dot(this.end) - e, o = [];
                if (n <= 0 && o.push(this.begin), r <= 0 && o.push(this.end), n * r < 0) {
                    const t = n / (n - r);
                    o.push(this.begin.add(this.end.sub(this.begin).scale(t)));
                }
                return 2 !== o.length ? null : new ls(o[0], o[1]);
            }
            distanceToPoint(t, e = !1) {
                const i = t.x, s = t.y, n = this.getLength(), r = ((this.end.y - this.begin.y) * i - (this.end.x - this.begin.x) * s + this.end.x * this.begin.y - this.end.y * this.begin.x) / n;
                return e ? r : Math.abs(r);
            }
            findVectorToPoint(t) {
                const e = this.begin.sub(t), i = this.getSlope();
                return e.sub(i.scale(e.dot(i)));
            }
            findPoint(t = null, e = null) {
                const i = this.slope, s = this.intercept;
                if (null !== t) return new E(t, i * t + s);
                if (null !== e) return new E((e - s) / i, e);
                throw new Error("You must provide an X or a Y value");
            }
            hasPoint() {
                let t, e = 0;
                if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) t = new E(arguments[0], arguments[1]), e = arguments[2] || 0;
                else {
                    if (!(arguments[0] instanceof E)) throw "Could not determine the arguments for Vector.hasPoint";
                    t = arguments[0], e = arguments[1] || 0;
                }
                const i = t.x - this.begin.x, s = t.y - this.begin.y, n = this.end.x - this.begin.x, r = this.end.y - this.begin.y, o = i * r - s * n;
                return !(Math.abs(o) > e) && (Math.abs(n) >= Math.abs(r) ? n > 0 ? this.begin.x <= t.x && t.x <= this.end.x : this.end.x <= t.x && t.x <= this.begin.x : r > 0 ? this.begin.y <= t.y && t.y <= this.end.y : this.end.y <= t.y && t.y <= this.begin.y);
            }
        }
        function cs(t, e) {
            const i = 1e-9, s = t.dir(), n = e.dir(), r = s.dot(s), o = n.dot(n);
            if (r < i && o < i) return new ls(t.begin, e.begin);
            if (r < i) {
                const i = w(n.dot(t.begin.sub(e.begin)) / o, 0, 1), s = e.begin.add(n.scale(i));
                return new ls(t.begin, s);
            }
            if (o < i) {
                const i = w(s.dot(e.begin.sub(t.begin)) / r, 0, 1), n = t.begin.add(s.scale(i));
                return new ls(n, e.begin);
            }
            const a = t.begin.sub(e.begin), h = r, l = o, c = n.dot(a), d = h * l - Math.pow(s.dot(n), 2);
            let u = 0, _ = 0;
            u = Math.abs(d) > i ? w((s.dot(n) * c - l * s.dot(a)) / d, 0, 1) : w(s.dot(a) / h, 0, 1), _ = Math.abs(l) > i ? w((s.dot(n) * u + c) / l, 0, 1) : 0;
            const g = t.begin.add(s.scale(u)), p = e.begin.add(n.scale(_));
            return new ls(g, p);
        }
        const ds = {
            PolygonPolygonClosestLine (t, e) {
                const i = t.getSides(), s = e.getSides();
                let n = Number.MAX_VALUE, r = null;
                for(let t = 0; t < i.length; t++)for(let e = 0; e < s.length; e++){
                    const o = cs(i[t], s[e]), a = o.getLength();
                    a < n && (n = a, r = o);
                }
                return r;
            },
            PolygonEdgeClosestLine (t, e) {
                const i = e.worldPos.sub(t.worldPos), s = new ts(t.worldPos, i), n = t.rayCast(s).point.add(s.dir.scale(.1)), r = t.getClosestFace(n), o = e.asLine();
                return cs(r.face, o);
            },
            PolygonCircleClosestLine (t, e) {
                const i = e.worldPos, s = i.sub(t.worldPos), n = new ts(t.worldPos, s.normalize()), r = t.rayCast(n).point.add(n.dir.scale(.1)), o = t.getClosestFace(r), a = o.face.begin, h = o.face.getEdge();
                let l = (h.x * (i.x - a.x) + h.y * (i.y - a.y)) / (h.x * h.x + h.y * h.y);
                l > 1 ? l = 1 : l < 0 && (l = 0);
                const c = Math.sqrt(Math.pow(a.x + h.x * l - i.x, 2) + Math.pow(a.y + h.y * l - i.y, 2)) - e.radius, d = (a.x + h.x * l - i.x) * e.radius / (e.radius + c), u = (a.y + h.y * l - i.y) * e.radius / (e.radius + c);
                return new ls(h.scale(l).add(a), new E(i.x + d, i.y + u));
            },
            CircleCircleClosestLine (t, e) {
                const i = e.worldPos.sub(t.worldPos), s = t.worldPos.sub(e.worldPos), n = new ts(t.worldPos, i), r = new ts(e.worldPos, s), o = t.rayCast(n), a = e.rayCast(r);
                return new ls(o.point, a.point);
            },
            CircleEdgeClosestLine (t, e) {
                const i = t.worldPos, s = e.asLine(), n = s.begin, r = s.getEdge();
                let o = (r.x * (i.x - n.x) + r.y * (i.y - n.y)) / (r.x * r.x + r.y * r.y);
                o > 1 ? o = 1 : o < 0 && (o = 0);
                const a = Math.sqrt(Math.pow(n.x + r.x * o - i.x, 2) + Math.pow(n.y + r.y * o - i.y, 2)) - t.radius, h = (n.x + r.x * o - i.x) * t.radius / (t.radius + a), l = (n.y + r.y * o - i.y) * t.radius / (t.radius + a);
                return new ls(r.scale(o).add(n), new E(i.x + h, i.y + l));
            },
            EdgeEdgeClosestLine: (t, e)=>cs(t.asLine(), e.asLine())
        };
        class us extends is {
            get worldPos() {
                return this._globalMatrix.getPosition();
            }
            get radius() {
                var t;
                if (this._radius) return this._radius;
                const e = this._transform, i = null !== (t = null == e ? void 0 : e.globalScale) && void 0 !== t ? t : E.One;
                return this._radius = this._naturalRadius * Math.min(i.x, i.y);
            }
            set radius(t) {
                var e;
                const i = this._transform, s = null !== (e = null == i ? void 0 : i.globalScale) && void 0 !== e ? e : E.One;
                this._naturalRadius = t / Math.min(s.x, s.y), this._localBoundsDirty = !0, this._radius = t;
            }
            constructor(t){
                super(), this.offset = E.Zero, this._globalMatrix = $.identity(), this._localBoundsDirty = !0, this.offset = t.offset || E.Zero, this.radius = t.radius || 0, this._globalMatrix.translate(this.offset.x, this.offset.y);
            }
            clone() {
                return new us({
                    offset: this.offset.clone(),
                    radius: this.radius
                });
            }
            get center() {
                return this._globalMatrix.getPosition();
            }
            contains(t) {
                var e, i;
                return (null !== (i = null === (e = this._transform) || void 0 === e ? void 0 : e.pos) && void 0 !== i ? i : this.offset).distance(t) <= this.radius;
            }
            rayCast(t, e = 1 / 0) {
                var i, s;
                const n = this.center, r = t.dir, o = t.pos, a = n.sub(o), h = r.scale(a.dot(r)), l = a.sub(h).magnitude;
                if (l > this.radius) return null;
                {
                    let a = 0;
                    if (y(l, this.radius, 1e-4)) {
                        if (a = -r.dot(o.sub(n)), a > 0 && a < e) {
                            const e = t.getPoint(a);
                            return {
                                point: e,
                                normal: e.sub(n).normalize(),
                                collider: this,
                                body: null === (i = this.owner) || void 0 === i ? void 0 : i.get(Ss),
                                distance: a
                            };
                        }
                        return null;
                    }
                    {
                        const i = Math.sqrt(Math.pow(r.dot(o.sub(n)), 2) - Math.pow(o.sub(n).distance(), 2) + Math.pow(this.radius, 2)), a = -r.dot(o.sub(n)) + i, h = -r.dot(o.sub(n)) - i, l = [];
                        a >= 0 && l.push(a), h >= 0 && l.push(h);
                        const c = Math.min(...l);
                        if (c <= e) {
                            const e = t.getPoint(c);
                            return {
                                point: e,
                                normal: e.sub(n).normalize(),
                                collider: this,
                                body: null === (s = this.owner) || void 0 === s ? void 0 : s.get(Ss),
                                distance: c
                            };
                        }
                        return null;
                    }
                }
            }
            getClosestLineBetween(t) {
                if (t instanceof us) return ds.CircleCircleClosestLine(this, t);
                if (t instanceof bs) return ds.PolygonCircleClosestLine(t, this).flip();
                if (t instanceof ws) return ds.CircleEdgeClosestLine(this, t).flip();
                throw new Error("Polygon could not collide with unknown CollisionShape " + typeof t);
            }
            collide(t) {
                if (t instanceof us) return xs.CollideCircleCircle(this, t);
                if (t instanceof bs) return xs.CollideCirclePolygon(this, t);
                if (t instanceof ws) return xs.CollideCircleEdge(this, t);
                throw new Error("Circle could not collide with unknown CollisionShape " + typeof t);
            }
            getFurthestPoint(t) {
                return this.center.add(t.normalize().scale(this.radius));
            }
            getFurthestLocalPoint(t) {
                return t.normalize().scale(this.radius);
            }
            get bounds() {
                return this.localBounds.transform(this._globalMatrix);
            }
            get localBounds() {
                return this._localBoundsDirty && (this._localBounds = new U(-this._naturalRadius, -this._naturalRadius, +this._naturalRadius, +this._naturalRadius), this._localBoundsDirty = !1), this._localBounds;
            }
            get axes() {
                return [];
            }
            getInertia(t) {
                return t * this.radius * this.radius / 2;
            }
            update(t) {
                var e;
                this._transform = t;
                (null !== (e = t.matrix) && void 0 !== e ? e : this._globalMatrix).clone(this._globalMatrix), this._globalMatrix.translate(this.offset.x, this.offset.y), this._radius = void 0;
            }
            project(t) {
                const e = [], i = this.center.dot(t);
                return e.push(i), e.push(i + this.radius), e.push(i - this.radius), new Ki(Math.min.apply(Math, e), Math.max.apply(Math, e));
            }
            debug(t, e, i) {
                var s, n, r, o;
                const { lineWidth: a } = {
                    lineWidth: 1,
                    ...i
                }, h = this._transform, l = null !== (s = null == h ? void 0 : h.globalScale) && void 0 !== s ? s : E.One, c = null !== (n = null == h ? void 0 : h.globalRotation) && void 0 !== n ? n : 0, d = null !== (r = null == h ? void 0 : h.globalPos) && void 0 !== r ? r : E.Zero;
                t.save(), t.translate(d.x, d.y), t.rotate(c), t.scale(l.x, l.y), t.drawCircle(null !== (o = this.offset) && void 0 !== o ? o : E.Zero, this._naturalRadius, R.Transparent, e, a), t.restore();
            }
        }
        class _s {
            constructor(t, e, i, s, n, r, o, a){
                var h, l, c, d, u, _;
                if (this._canceled = !1, this.bodyA = null, this.bodyB = null, this.colliderA = t, this.colliderB = e, this.mtv = i, this.normal = s, this.tangent = n, this.points = r, this.localPoints = o, this.info = a, this.id = ji.calculatePairHash(t.id, e.id), t.composite || e.composite) {
                    const i = "separate" === (null === (h = t.composite) || void 0 === h ? void 0 : h.compositeStrategy) ? t.id : null !== (c = null === (l = t.composite) || void 0 === l ? void 0 : l.id) && void 0 !== c ? c : t.id, s = "separate" === (null === (d = e.composite) || void 0 === d ? void 0 : d.compositeStrategy) ? e.id : null !== (_ = null === (u = e.composite) || void 0 === u ? void 0 : u.id) && void 0 !== _ ? _ : e.id;
                    this.id += "|" + ji.calculatePairHash(i, s);
                }
                this.colliderA.owner && (this.bodyA = this.colliderA.owner.get(Ss)), this.colliderB.owner && (this.bodyB = this.colliderB.owner.get(Ss));
            }
            matchAwake() {
                const t = this.bodyA, e = this.bodyB;
                t && e && t.isSleeping !== e.isSleeping && (t.isSleeping && t.collisionType !== qi.Fixed && e.sleepMotion >= t.wakeThreshold && (t.isSleeping = !1), e.isSleeping && e.collisionType !== qi.Fixed && t.sleepMotion >= e.wakeThreshold && (e.isSleeping = !1));
            }
            isCanceled() {
                return this._canceled;
            }
            cancel() {
                this._canceled = !0;
            }
            bias(t) {
                if (t !== this.colliderA && t !== this.colliderB) throw new Error("Collider must be either colliderA or colliderB from this contact");
                if (t === this.colliderA) return this;
                const e = this.colliderA, i = this.colliderB;
                return this.colliderB = e, this.colliderA = i, this.mtv = this.mtv.negate(), this.normal = this.normal.negate(), this.tangent = this.tangent.negate(), this;
            }
        }
        class gs {
            constructor(){
                this.axis = I(0, 0), this.localAxis = I(0, 0), this.side = new ls(I(0, 0), I(0, 0)), this.localSide = new ls(I(0, 0), I(0, 0)), this.point = I(0, 0), this.localPoint = I(0, 0);
            }
        }
        class ps {
            static findPolygonPolygonSeparation(t, e) {
                if (0 === e.transform.matrix.determinant()) return ps.findPolygonPolygonSeparationDegenerate(t, e);
                let i, s = -Number.MAX_VALUE, n = -1;
                const r = e.transform.inverse.multiply(t.transform.matrix, ps._SCRATCH_MATRIX), o = r.getRotation(), a = t.normals, h = t.points, l = e.points;
                for(let t = 0; t < h.length; t++){
                    const e = a[t].rotate(o, ps._ZERO, ps._SCRATCH_NORMAL), c = r.multiply(h[t], ps._SCRATCH_POINT);
                    let d, u = Number.MAX_VALUE;
                    for(let t = 0; t < l.length; t++){
                        const i = e.dot(l[t].sub(c, ps._SCRATCH_SUB_POINT));
                        i < u && (u = i, d = l[t]);
                    }
                    u > s && (s = u, n = t, i = d);
                }
                const c = (n + 1) % h.length, d = ps.SeparationPool.get();
                return d.collider = t, d.separation = s, s > 0 || (a[n].clone(d.localAxis), a[n].rotate(t.transform.rotation, ps._ZERO, d.axis), t.transform.matrix.multiply(h[n], d.side.begin), t.transform.matrix.multiply(h[c], d.side.end), e.transform.matrix.multiply(i, d.point), d.sideId = n, i.clone(d.localPoint), h[n].clone(d.localSide.begin), h[c].clone(d.localSide.end)), d;
            }
            static findCirclePolygonSeparation(t, e) {
                const i = e.axes, s = e.center.sub(t.worldPos), n = e.getFurthestPoint(s.negate());
                i.push(n.sub(t.worldPos).normalize());
                let r = Number.MAX_VALUE, o = null, a = -1;
                for(let s = 0; s < i.length; s++){
                    const n = e.project(i[s]), h = t.project(i[s]), l = n.getOverlap(h);
                    if (l <= 0) return null;
                    l < r && (r = l, o = i[s], a = s);
                }
                return a < 0 ? null : o.normalize().scale(r);
            }
            static findPolygonPolygonSeparationDegenerate(t, e) {
                let i = -Number.MAX_VALUE, s = null, n = null, r = -1, o = null;
                const a = t.getSides(), h = t.getLocalSides();
                for(let t = 0; t < a.length; t++){
                    const h = a[t], l = h.normal(), c = e.getFurthestPoint(l.negate()), d = h.distanceToPoint(c, !0);
                    d > i && (i = d, s = h, n = l, r = t, o = c);
                }
                return {
                    collider: t,
                    separation: n ? i : 99,
                    axis: n,
                    side: s,
                    localSide: h[r],
                    sideId: r,
                    point: o,
                    localPoint: n ? e.getFurthestLocalPoint(n.negate()) : null
                };
            }
        }
        ps.SeparationPool = new Lt(()=>new gs, (t)=>t, 500), ps._ZERO = I(0, 0), ps._SCRATCH_POINT = I(0, 0), ps._SCRATCH_SUB_POINT = I(0, 0), ps._SCRATCH_NORMAL = I(0, 0), ps._SCRATCH_MATRIX = $.identity(), ps.SeparationPool.disableWarnings = !0;
        const fs = E.Zero, ms = E.Zero, vs = $.identity(), xs = {
            CollideCircleCircle (t, e) {
                const i = t.worldPos, s = e.worldPos, n = t.radius + e.radius, r = i.distance(s);
                if (r > n) return [];
                const o = n - r, a = s.sub(i).normalize(), h = a.perpendicular(), l = a.scale(o), c = t.getFurthestPoint(a), d = t.getFurthestLocalPoint(a);
                return [
                    new _s(t, e, l, a, h, [
                        c
                    ], [
                        d
                    ], {
                        collider: t,
                        separation: o,
                        axis: a,
                        point: c
                    })
                ];
            },
            CollideCirclePolygon (t, e) {
                var i, s;
                let n = ps.findCirclePolygonSeparation(t, e);
                if (!n) return [];
                const r = n.dot(e.center.sub(t.center));
                n = r < 0 ? n.negate() : n;
                const o = t.getFurthestPoint(n), a = (null !== (s = null === (i = t.owner) || void 0 === i ? void 0 : i.get($t)) && void 0 !== s ? s : new $t).applyInverse(o), h = n.normalize(), l = {
                    collider: t,
                    separation: -n.magnitude,
                    axis: h,
                    point: o,
                    localPoint: a,
                    side: e.findSide(h.negate()),
                    localSide: e.findLocalSide(h.negate())
                };
                return [
                    new _s(t, e, n, h, h.perpendicular(), [
                        o
                    ], [
                        a
                    ], l)
                ];
            },
            CollideCircleEdge (t, e) {
                const i = t.center, s = e.asLine(), n = s.end.sub(s.begin), r = n.dot(s.end.sub(i)), o = n.dot(i.sub(s.begin)), a = e.asLine(), h = e.asLocalLine();
                if (o <= 0) {
                    const n = s.begin.sub(i), r = n.dot(n);
                    if (r > t.radius * t.radius) return [];
                    const o = n.normalize(), l = t.radius - Math.sqrt(r), c = {
                        collider: t,
                        separation: l,
                        axis: o,
                        point: a.begin,
                        side: a,
                        localSide: h
                    };
                    return [
                        new _s(t, e, o.scale(l), o, o.perpendicular(), [
                            a.begin
                        ], [
                            h.begin
                        ], c)
                    ];
                }
                if (r <= 0) {
                    const n = s.end.sub(i), r = n.dot(n);
                    if (r > t.radius * t.radius) return [];
                    const o = n.normalize(), l = t.radius - Math.sqrt(r), c = {
                        collider: t,
                        separation: l,
                        axis: o,
                        point: a.end,
                        side: a,
                        localSide: h
                    };
                    return [
                        new _s(t, e, o.scale(l), o, o.perpendicular(), [
                            a.end
                        ], [
                            h.end
                        ], c)
                    ];
                }
                const l = n.dot(n), c = s.begin.scale(r).add(s.end.scale(o)).scale(1 / l), d = i.sub(c), u = d.dot(d);
                if (u > t.radius * t.radius) return [];
                let _ = n.perpendicular();
                _.dot(i.sub(s.begin)) < 0 && (_.x = -_.x, _.y = -_.y), _ = _.normalize();
                const g = t.radius - Math.sqrt(u), p = _.scale(g), f = {
                    collider: t,
                    separation: g,
                    axis: _,
                    point: c,
                    side: a,
                    localSide: h
                };
                return [
                    new _s(t, e, p, _.negate(), _.negate().perpendicular(), [
                        c
                    ], [
                        c.sub(e.worldPos)
                    ], f)
                ];
            },
            CollideEdgeEdge: ()=>[],
            CollidePolygonEdge (t, e) {
                var i;
                const s = t.center, n = e.center.sub(s).normalize(), r = new bs({
                    points: [
                        e.begin,
                        e.end,
                        e.end.add(n.scale(100)),
                        e.begin.add(n.scale(100))
                    ],
                    offset: e.offset
                });
                r.owner = e.owner;
                (null === (i = e.owner) || void 0 === i ? void 0 : i.get($t)) && r.update(e.owner.get($t).get());
                const o = this.CollidePolygonPolygon(t, r);
                return o.length && (o[0].colliderB = e, o[0].id = ji.calculatePairHash(t.id, e.id)), o;
            },
            CollidePolygonPolygon (t, e) {
                const i = ps.findPolygonPolygonSeparation(t, e);
                if (i.separation > 0) return [];
                const s = ps.findPolygonPolygonSeparation(e, t);
                if (s.separation > 0) return [];
                const n = i.separation > s.separation ? i : s, r = n.collider === t ? e : t, o = n.collider === t ? t : e, a = r.transform.inverse.multiply(o.transform.matrix, vs), h = a.getRotation(), l = o.normals[n.sideId].rotate(h, fs, ms);
                let c = Number.MAX_VALUE, d = 0;
                for(let t = 0; t < r.normals.length; t++){
                    const e = l.dot(r.normals[t]);
                    e < c && (c = e, d = t);
                }
                if (!n.localSide || !n.localAxis || !n.axis) return [];
                const u = n.localSide.transform(a), _ = n.localAxis.perpendicular().negate().rotate(h), g = new ls(r.points[d], r.points[(d + 1) % r.points.length]).clip(_.negate(), -_.dot(u.begin), !1);
                let p = null;
                if (g && (p = g.clip(_, _.dot(u.end), !1)), p) {
                    const i = [], s = [], o = p.getPoints();
                    for(let t = 0; t < o.length; t++){
                        const e = o[t];
                        u.below(e) && (i.push(e), s.push(r.transform.apply(e)));
                    }
                    let a = n.axis, h = a.perpendicular();
                    return e.center.sub(t.center).dot(a) < 0 && (a = a.negate(), h = a.perpendicular()), [
                        new _s(t, e, a.scale(-n.separation), a, h, s, i, n)
                    ];
                }
                return [];
            },
            FindContactSeparation (t, e) {
                var i, s, n, r;
                const o = t.colliderA, a = null !== (s = null === (i = t.bodyA) || void 0 === i ? void 0 : i.transform) && void 0 !== s ? s : new $t, h = t.colliderB, l = null !== (r = null === (n = t.bodyB) || void 0 === n ? void 0 : n.transform) && void 0 !== r ? r : new $t;
                if (o instanceof us && h instanceof us) return -(o.radius + h.radius - a.pos.distance(l.pos));
                if (o instanceof bs && h instanceof bs && t.info.localSide) {
                    let i, s;
                    return t.info.collider === o ? (i = new ls(a.apply(t.info.localSide.begin).add(o.offset), a.apply(t.info.localSide.end).add(o.offset)), s = l.apply(e).add(h.offset)) : (i = new ls(l.apply(t.info.localSide.begin).add(h.offset), l.apply(t.info.localSide.end).add(h.offset)), s = a.apply(e).add(o.offset)), i.distanceToPoint(s, !0);
                }
                if (o instanceof bs && h instanceof us || h instanceof bs && o instanceof us) {
                    const i = a.apply(e);
                    if (t.info.side) return t.info.side.distanceToPoint(i, !0);
                }
                if (o instanceof ws && h instanceof bs || h instanceof ws && o instanceof bs) {
                    let i;
                    if (i = t.info.collider === o ? l.apply(e) : a.apply(e), t.info.side) return t.info.side.distanceToPoint(i, !0);
                }
                if (o instanceof us && h instanceof ws || h instanceof us && o instanceof ws) {
                    const i = l.apply(e);
                    let s;
                    o instanceof us && (s = o.getFurthestPoint(t.normal));
                    const n = i.distance(s);
                    if (t.info.side) return n > 0 ? -n : 0;
                }
                return 0;
            }
        };
        class ws extends is {
            constructor(t){
                var e;
                super(), this._globalMatrix = $.identity(), this.begin = t.begin || E.Zero, this.end = t.end || E.Zero, this.offset = null !== (e = t.offset) && void 0 !== e ? e : E.Zero;
            }
            clone() {
                return new ws({
                    begin: this.begin.clone(),
                    end: this.end.clone()
                });
            }
            get worldPos() {
                var t;
                const e = this._transform;
                return null !== (t = null == e ? void 0 : e.globalPos.add(this.offset)) && void 0 !== t ? t : this.offset;
            }
            get center() {
                const t = this._getTransformedBegin(), e = this._getTransformedEnd();
                return t.average(e);
            }
            _getTransformedBegin() {
                return this._globalMatrix.multiply(this.begin);
            }
            _getTransformedEnd() {
                return this._globalMatrix.multiply(this.end);
            }
            getSlope() {
                const t = this._getTransformedBegin(), e = this._getTransformedEnd(), i = t.distance(e);
                return e.sub(t).scale(1 / i);
            }
            getLength() {
                const t = this._getTransformedBegin(), e = this._getTransformedEnd();
                return t.distance(e);
            }
            contains() {
                return !1;
            }
            rayCast(t, e = 1 / 0) {
                var i;
                const s = this._getTransformedBegin().sub(t.pos);
                if (0 === t.dir.cross(this.getSlope()) && 0 !== s.cross(t.dir)) return null;
                const n = t.dir.cross(this.getSlope());
                if (0 === n) return null;
                const r = s.cross(this.getSlope()) / n;
                if (r >= 0 && r <= e) {
                    const e = s.cross(t.dir) / n / this.getLength();
                    if (e >= 0 && e <= 1) return {
                        distance: r,
                        normal: this.asLine().normal(),
                        collider: this,
                        body: null === (i = this.owner) || void 0 === i ? void 0 : i.get(Ss),
                        point: t.getPoint(r)
                    };
                }
                return null;
            }
            getClosestLineBetween(t) {
                if (t instanceof us) return ds.CircleEdgeClosestLine(t, this);
                if (t instanceof bs) return ds.PolygonEdgeClosestLine(t, this).flip();
                if (t instanceof ws) return ds.EdgeEdgeClosestLine(this, t);
                throw new Error("Polygon could not collide with unknown CollisionShape " + typeof t);
            }
            collide(t) {
                if (t instanceof us) return xs.CollideCircleEdge(t, this);
                if (t instanceof bs) return xs.CollidePolygonEdge(t, this);
                if (t instanceof ws) return xs.CollideEdgeEdge();
                throw new Error("Edge could not collide with unknown CollisionShape " + typeof t);
            }
            getFurthestPoint(t) {
                const e = this._getTransformedBegin(), i = this._getTransformedEnd();
                return t.dot(e) > 0 ? e : i;
            }
            _boundsFromBeginEnd(t, e, i = 10) {
                return new U(Math.min(t.x, e.x) - i, Math.min(t.y, e.y) - i, Math.max(t.x, e.x) + i, Math.max(t.y, e.y) + i);
            }
            get bounds() {
                const t = this._getTransformedBegin(), e = this._getTransformedEnd();
                return this._boundsFromBeginEnd(t, e);
            }
            get localBounds() {
                return this._boundsFromBeginEnd(this.begin, this.end);
            }
            asLine() {
                return new ls(this._getTransformedBegin(), this._getTransformedEnd());
            }
            asLocalLine() {
                return new ls(this.begin, this.end);
            }
            get axes() {
                const t = this._getTransformedEnd().sub(this._getTransformedBegin()).normal(), e = [];
                return e.push(t), e.push(t.negate()), e.push(t.normal()), e.push(t.normal().negate()), e;
            }
            getInertia(t) {
                const e = this.end.sub(this.begin).distance() / 2;
                return t * e * e;
            }
            update(t) {
                var e;
                this._transform = t;
                (null !== (e = t.matrix) && void 0 !== e ? e : this._globalMatrix).clone(this._globalMatrix), this._globalMatrix.translate(this.offset.x, this.offset.y);
            }
            project(t) {
                const e = [], i = [
                    this._getTransformedBegin(),
                    this._getTransformedEnd()
                ], s = i.length;
                for(let n = 0; n < s; n++)e.push(i[n].dot(t));
                return new Ki(Math.min.apply(Math, e), Math.max.apply(Math, e));
            }
            debug(t, e) {
                const i = this._getTransformedBegin(), s = this._getTransformedEnd();
                t.drawLine(i, s, e, 2), t.drawCircle(i, 2, e), t.drawCircle(s, 2, e);
            }
        }
        class ys {
            static registerGraphicsContext(t) {
                ys._ctx = t;
            }
            static draw(t) {
                this._drawCalls.push(t);
            }
            static drawPoint(t, e) {
                ys.draw((i)=>{
                    i.debug.drawPoint(t, e);
                });
            }
            static drawLine(t, e, i) {
                ys.draw((s)=>{
                    s.debug.drawLine(t, e, i);
                });
            }
            static drawLines(t, e) {
                t.length > 1 && ys.draw((i)=>{
                    for(let s = 0; s < t.length - 1; s++)i.debug.drawLine(t[s], t[s + 1], e);
                });
            }
            static drawText(t, e) {
                ys.draw((i)=>{
                    i.debug.drawText(t, e);
                });
            }
            static drawPolygon(t, e) {
                t.length > 1 && ys.draw((i)=>{
                    const s = t[0], n = [
                        ...t,
                        s
                    ];
                    for(let t = 0; t < n.length - 1; t++)i.debug.drawLine(n[t], n[t + 1], e);
                });
            }
            static drawCircle(t, e, i) {
                const { color: s, strokeColor: n, width: r } = {
                    color: R.Black,
                    strokeColor: void 0,
                    width: void 0,
                    ...i
                };
                ys.draw((i)=>{
                    i.drawCircle(t, e, s, n, r);
                });
            }
            static drawBounds(t, e) {
                ys.draw((i)=>{
                    i.debug.drawRect(t.left, t.top, t.width, t.height, e);
                });
            }
            static drawRay(t, e) {
                const { distance: i, color: s } = {
                    color: R.Blue,
                    distance: 10,
                    ...e
                };
                ys.draw((e)=>{
                    const n = t.pos, r = t.pos.add(t.dir.scale(i));
                    e.debug.drawLine(n, r, {
                        color: s
                    });
                });
            }
            static flush(t) {
                t.save(), t.z = ys.z;
                for (const e of ys._drawCalls)e(t);
                t.restore(), ys.clear();
            }
            static clear() {
                ys._drawCalls.length = 0;
            }
        }
        ys._drawCalls = [], ys.z = 1 / 0;
        class bs extends is {
            flagDirty() {
                this._localBoundsDirty = !0, this._localSidesDirty = !0, this._transformedPointsDirty = !0, this._sidesDirty = !0;
            }
            get normals() {
                return this._normals;
            }
            set points(t) {
                if (t.length < 3) throw new Error("PolygonCollider cannot be created with less that 3 points");
                this._points = t, this._checkAndUpdateWinding(this._points), this._calculateNormals(), this.flagDirty();
            }
            _calculateNormals() {
                const t = [];
                for(let e = 0; e < this._points.length; e++)t.push(this._points[(e + 1) % this._points.length].sub(this._points[e]).normal());
                this._normals = t;
            }
            get points() {
                return this._points;
            }
            get transform() {
                return this._transform;
            }
            constructor(t){
                var e;
                super(), this._logger = k.getInstance(), this._transform = new qt, this._transformedPoints = [], this._sides = [], this._localSides = [], this._transformedPointsDirty = !0, this._sidesDirty = !0, this._localSidesDirty = !0, this._localBoundsDirty = !0, this.offset = null !== (e = t.offset) && void 0 !== e ? e : E.Zero, this._transform.pos.x += this.offset.x, this._transform.pos.y += this.offset.y, this.points = t.points, this.isConvex() || t.suppressConvexWarning || this._logger.warn("Excalibur only supports convex polygon colliders and will not behave properly.Call PolygonCollider.triangulate() to build a new collider composed of smaller convex triangles"), this._calculateTransformation();
            }
            _checkAndUpdateWinding(t) {
                this._isCounterClockwiseWinding(t) || t.reverse();
            }
            _isCounterClockwiseWinding(t) {
                let e = 0;
                for(let i = 0; i < t.length; i++)e += (t[(i + 1) % t.length].x - t[i].x) * (t[(i + 1) % t.length].y + t[i].y);
                return e < 0;
            }
            isConvex() {
                if (this.points.length < 3) return !1;
                let t = this.points[this.points.length - 2], e = this.points[this.points.length - 1], i = Math.atan2(e.y - t.y, e.x - t.x), s = 0, n = 0, r = 0;
                for (const [o, a] of this.points.entries()){
                    if (t = e, s = i, e = a, i = Math.atan2(e.y - t.y, e.x - t.x), t.equals(e)) return !1;
                    let h = i - s;
                    if (h <= -Math.PI ? h += 2 * Math.PI : h > Math.PI && (h -= 2 * Math.PI), 0 === o) {
                        if (0 === h) return !1;
                        n = h > 0 ? 1 : -1;
                    } else if (n * h <= 0) return !1;
                    r += h;
                }
                return 1 === Math.abs(Math.round(r / (2 * Math.PI)));
            }
            tessellate() {
                const t = [];
                for(let e = 1; e < this.points.length - 2; e++)t.push([
                    this.points[0],
                    this.points[e + 1],
                    this.points[e + 2]
                ]);
                return t.push([
                    this.points[0],
                    this.points[1],
                    this.points[2]
                ]), new hs(t.map((t)=>Cs.Polygon(t)));
            }
            triangulate() {
                if (this.points.length < 3) throw Error("Invalid polygon");
                const t = [], e = [
                    ...this.points
                ].reverse();
                let i = e.length;
                function s(t) {
                    return 0 === t ? i - 1 : t - 1;
                }
                function n(t) {
                    return t === i - 1 ? 0 : t + 1;
                }
                function r(t) {
                    const i = s(t), r = n(t), o = e[i], a = e[t], h = e[r], l = o.sub(a), c = h.sub(a);
                    return !(l.cross(c) < 0);
                }
                const o = e.map((t, e)=>r(e));
                function a(t, e, i, s) {
                    const n = i.sub(e), r = s.sub(i), o = e.sub(s), a = t.sub(e), h = t.sub(i), l = t.sub(s), c = n.cross(a), d = r.cross(h), u = o.cross(l);
                    return !(c > 0 || d > 0 || u > 0);
                }
                function h() {
                    for(let t = 0; t < i; t++)if (o[t]) {
                        const r = s(t), o = n(t), h = e[r], l = e[t], c = e[o];
                        let d = !0;
                        for(let s = 0; s < i; s++){
                            if (s === t || s === r || s === o) continue;
                            if (a(e[s], h, l, c)) {
                                d = !1;
                                break;
                            }
                        }
                        if (d) return t;
                    }
                    for(let t = 0; t < i; t++)if (o[t]) return t;
                    return 0;
                }
                function l(r) {
                    const a = s(r), h = n(r), l = e[a], c = e[r], d = e[h];
                    t.push([
                        l,
                        c,
                        d
                    ]), e.splice(r, 1), o.splice(r, 1), i--;
                }
                for(; i > 3;){
                    l(h());
                    for(let t = 0; t < i; t++)o[t] = r(t);
                }
                return t.push([
                    e[0],
                    e[1],
                    e[2]
                ]), new hs(t.map((t)=>Cs.Polygon(t, E.Zero, !0)));
            }
            clone() {
                return new bs({
                    offset: this.offset.clone(),
                    points: this.points.map((t)=>t.clone())
                });
            }
            get worldPos() {
                return this._transform.pos;
            }
            get center() {
                return this.bounds.center;
            }
            _calculateTransformation() {
                const t = this.points, e = t.length;
                this._transformedPoints.length = 0;
                for(let i = 0; i < e; i++)this._transformedPoints[i] = this._transform.apply(t[i].clone());
            }
            getTransformedPoints() {
                return this._transformedPointsDirty && (this._calculateTransformation(), this._transformedPointsDirty = !1), this._transformedPoints;
            }
            getSides() {
                if (this._sidesDirty) {
                    const t = [], e = this.getTransformedPoints(), i = e.length;
                    for(let s = 0; s < i; s++)t.push(new ls(e[s], e[(s + 1) % i]));
                    this._sides = t, this._sidesDirty = !1;
                }
                return this._sides;
            }
            getLocalSides() {
                if (this._localSidesDirty) {
                    const t = [], e = this.points, i = e.length;
                    for(let s = 0; s < i; s++)t.push(new ls(e[s], e[(s + 1) % i]));
                    this._localSides = t, this._localSidesDirty = !1;
                }
                return this._localSides;
            }
            findSide(t) {
                const e = this.getSides();
                let i = e[0], s = -Number.MAX_VALUE;
                for(let n = 0; n < e.length; n++){
                    const r = e[n], o = r.normal().dot(t);
                    o > s && (i = r, s = o);
                }
                return i;
            }
            findLocalSide(t) {
                const e = this.getLocalSides();
                let i = e[0], s = -Number.MAX_VALUE;
                for(let n = 0; n < e.length; n++){
                    const r = e[n], o = r.normal().dot(t);
                    o > s && (i = r, s = o);
                }
                return i;
            }
            get axes() {
                const t = [], e = this.getSides();
                for(let i = 0; i < e.length; i++)t.push(e[i].normal());
                return t;
            }
            update(t) {
                t && (t.cloneWithParent(this._transform), this._transformedPointsDirty = !0, this._sidesDirty = !0, 0 === this.offset.x && 0 === this.offset.y || (this._transform.pos.x += this.offset.x, this._transform.pos.y += this.offset.y), this._transform.isMirrored() && (this.points = this.points.map((t)=>I(t.x * x(this._transform.scale.x), t.y * x(this._transform.scale.y))), this._transform.scale.x = Math.abs(this._transform.scale.x), this._transform.scale.y = Math.abs(this._transform.scale.y)));
            }
            contains(t) {
                const e = this._transform.applyInverse(t), i = new ts(e, new E(1, 0));
                let s = 0;
                const n = this.getLocalSides();
                for(let t = 0; t < n.length; t++){
                    const e = n[t];
                    i.intersect(e) >= 0 && s++;
                }
                return s % 2 != 0;
            }
            getClosestLineBetween(t) {
                if (t instanceof us) return ds.PolygonCircleClosestLine(this, t);
                if (t instanceof bs) return ds.PolygonPolygonClosestLine(this, t);
                if (t instanceof ws) return ds.PolygonEdgeClosestLine(this, t);
                throw new Error("Polygon could not collide with unknown CollisionShape " + typeof t);
            }
            collide(t) {
                if (t instanceof us) return xs.CollideCirclePolygon(t, this);
                if (t instanceof bs) return xs.CollidePolygonPolygon(this, t);
                if (t instanceof ws) return xs.CollidePolygonEdge(this, t);
                throw new Error("Polygon could not collide with unknown CollisionShape " + typeof t);
            }
            getFurthestPoint(t) {
                const e = this.getTransformedPoints();
                let i = null, s = -Number.MAX_VALUE;
                for(let n = 0; n < e.length; n++){
                    const r = t.dot(e[n]);
                    r > s && (s = r, i = e[n]);
                }
                return i;
            }
            getFurthestLocalPoint(t) {
                const e = this.points;
                let i = e[0], s = -Number.MAX_VALUE;
                for(let n = 0; n < e.length; n++){
                    const r = t.dot(e[n]);
                    r > s && (s = r, i = e[n]);
                }
                return i;
            }
            getClosestFace(t) {
                const e = this.getSides();
                let i = Number.POSITIVE_INFINITY, s = -1, n = -1;
                for(let r = 0; r < e.length; r++){
                    const o = e[r].distanceToPoint(t);
                    o < i && (i = o, s = r, n = o);
                }
                return -1 !== s ? {
                    distance: e[s].normal().scale(n),
                    face: e[s]
                } : null;
            }
            get bounds() {
                return this.localBounds.transform(this._transform.matrix);
            }
            get localBounds() {
                return this._localBoundsDirty && (this._localBounds = U.fromPoints(this.points), this._localBoundsDirty = !1), this._localBounds;
            }
            getInertia(t) {
                if (this._cachedMass === t && this._cachedInertia) return this._cachedInertia;
                let e = 0, i = 0;
                const s = this.points;
                for(let t = 0; t < s.length; t++){
                    const n = (t + 1) % s.length, r = s[n].cross(s[t]);
                    e += r * (s[t].dot(s[t]) + s[t].dot(s[n]) + s[n].dot(s[n])), i += r;
                }
                return this._cachedMass = t, this._cachedInertia = t / 6 * (e / i);
            }
            rayCast(t, e = 1 / 0) {
                var i;
                const s = this.getSides(), n = s.length;
                let r, o = Number.MAX_VALUE, a = -1;
                for(let i = 0; i < n; i++){
                    const n = t.intersect(s[i]);
                    n >= 0 && n < o && n <= e && (o = n, r = s[i], a = i);
                }
                return a >= 0 ? {
                    collider: this,
                    distance: o,
                    body: null === (i = this.owner) || void 0 === i ? void 0 : i.get(Ss),
                    point: t.getPoint(o),
                    normal: r.normal()
                } : null;
            }
            project(t) {
                const e = this.getTransformedPoints(), i = e.length;
                let s = Number.MAX_VALUE, n = -Number.MAX_VALUE;
                for(let r = 0; r < i; r++){
                    const i = e[r].dot(t);
                    s = Math.min(s, i), n = Math.max(n, i);
                }
                return new Ki(s, n);
            }
            debug(t, e, i) {
                const s = this.getTransformedPoints();
                ys.drawPolygon(s, {
                    color: e
                });
            }
        }
        class Cs {
            static Box(t, e, i = E.Half, s = E.Zero) {
                return new bs({
                    points: new U(-t * i.x, -e * i.y, t - t * i.x, e - e * i.y).getPoints(),
                    offset: s
                });
            }
            static Polygon(t, e = E.Zero, i = !1) {
                return new bs({
                    points: t,
                    offset: e,
                    suppressConvexWarning: i
                });
            }
            static Circle(t, e = E.Zero) {
                return new us({
                    radius: t,
                    offset: e
                });
            }
            static Edge(t, e) {
                return new ws({
                    begin: t,
                    end: e
                });
            }
            static Capsule(t, e, i = E.Zero) {
                const s = k.getInstance();
                t === e && s.warn("A capsule collider with equal width and height is a circle, consider using a ex.Shape.Circle or ex.CircleCollider");
                if (e >= t) return new hs([
                    Cs.Circle(t / 2, I(0, -e / 2 + t / 2).add(i)),
                    Cs.Box(t, e - t, E.Half, i),
                    Cs.Circle(t / 2, I(0, e / 2 - t / 2).add(i))
                ]);
                return new hs([
                    Cs.Circle(e / 2, I(-t / 2 + e / 2, 0).add(i)),
                    Cs.Box(t - e, e, E.Half, i),
                    Cs.Circle(e / 2, I(t / 2 - e / 2, 0).add(i))
                ]);
            }
        }
        class As extends Yt {
            constructor(t){
                super(), this.events = new g, this.$colliderAdded = new Zt, this.$colliderRemoved = new Zt, this._collidersToRemove = [], this.set(t);
            }
            get() {
                return this._collider;
            }
            set(t) {
                return this.clear(), t && (this._collider = t, this._collider.owner = this.owner, t.events.pipe(this.events), this.$colliderAdded.notifyAll(t), this.update()), t;
            }
            clear() {
                this._collider && (this._collidersToRemove.push(this._collider), this._collider = null);
            }
            processColliderRemoval() {
                for (const t of this._collidersToRemove)t.events.unpipe(this.events), this.$colliderRemoved.notifyAll(t), t.owner = null;
            }
            clone() {
                return new As(this._collider.clone());
            }
            get bounds() {
                var t, e;
                return null !== (e = null === (t = this._collider) || void 0 === t ? void 0 : t.bounds) && void 0 !== e ? e : new U;
            }
            get localBounds() {
                var t, e;
                return null !== (e = null === (t = this._collider) || void 0 === t ? void 0 : t.localBounds) && void 0 !== e ? e : new U;
            }
            update() {
                var t;
                const e = null === (t = this.owner) || void 0 === t ? void 0 : t.get($t);
                this._collider && (this._collider.owner = this.owner, e && this._collider.update(e.get()));
            }
            collide(t) {
                let e = this._collider, i = t._collider;
                if (!e || !i) return [];
                let s = !1;
                if (i instanceof hs && (e = i, i = this._collider, s = !0), this._collider) {
                    const n = e.collide(i);
                    return n ? (s && n.forEach((e)=>{
                        e.mtv = e.mtv.negate(), e.normal = e.normal.negate(), e.tangent = e.normal.perpendicular(), e.colliderA = this._collider, e.colliderB = t._collider;
                    }), n) : [];
                }
                return [];
            }
            onAdd(t) {
                this._collider && this.update(), this.events.on("precollision", (e)=>{
                    const i = e;
                    t.events.emit("precollision", new Oe(i.self, i.other, i.side, i.intersection, i.contact)), t instanceof Tn && t.onPreCollisionResolve(i.self, i.other, i.side, i.contact);
                }), this.events.on("postcollision", (e)=>{
                    const i = e;
                    t.events.emit("postcollision", new He(i.self, i.other, i.side, i.intersection, i.contact)), t instanceof Tn && t.onPostCollisionResolve(i.self, i.other, i.side, i.contact);
                }), this.events.on("collisionstart", (e)=>{
                    const i = e;
                    t.events.emit("collisionstart", new qe(i.self, i.other, i.side, i.contact)), t instanceof Tn && t.onCollisionStart(i.self, i.other, i.side, i.contact);
                }), this.events.on("collisionend", (e)=>{
                    const i = e;
                    t.events.emit("collisionend", new Xe(i.self, i.other, i.side, i.lastContact)), t instanceof Tn && t.onCollisionEnd(i.self, i.other, i.side, i.lastContact);
                });
            }
            onRemove() {
                this.events.clear(), this.$colliderRemoved.notifyAll(this._collider);
            }
            useBoxCollider(t, e, i = E.Half, s = E.Zero) {
                const n = Cs.Box(t, e, i, s);
                return this.set(n);
            }
            usePolygonCollider(t, e = E.Zero) {
                const i = Cs.Polygon(t, e);
                return this.set(i);
            }
            useCircleCollider(t, e = E.Zero) {
                const i = Cs.Circle(t, e);
                return this.set(i);
            }
            useEdgeCollider(t, e) {
                const i = Cs.Edge(t, e);
                return this.set(i);
            }
            useCompositeCollider(t) {
                return this.set(new hs(t));
            }
        }
        var Ts;
        !function(t) {
            t.Rotation = "rotation", t.X = "x", t.Y = "y";
        }(Ts || (Ts = {}));
        class Ss extends Yt {
            constructor(t){
                var e, i, s;
                super(), this.dependencies = [
                    $t,
                    ci
                ], this.id = u("body", Ss._ID++), this.events = new g, this.oldTransform = new qt, this.__oldTransformCaptured = !1, this.enableFixedUpdateInterpolate = !0, this.collisionType = qi.PreventCollision, this.group = $i.All, this._sleeping = !1, this.bounciness = .2, this.friction = .99, this.useGravity = !0, this.limitDegreeOfFreedom = [], this._oldGlobalPos = E.Zero, this.oldVel = new E(0, 0), this.oldAcc = E.Zero, this._impulseScratch = I(0, 0), this._distanceFromCenterScratch = I(0, 0), t ? (this.collisionType = null !== (e = t.type) && void 0 !== e ? e : this.collisionType, this.group = null !== (i = t.group) && void 0 !== i ? i : this.group, this.useGravity = null !== (s = t.useGravity) && void 0 !== s ? s : this.useGravity, this._bodyConfig = {
                    ...as().bodies,
                    ...t.config
                }) : this._bodyConfig = {
                    ...as().bodies
                }, this.updatePhysicsConfig(this._bodyConfig), this._mass = Ss._DEFAULT_CONFIG.defaultMass;
            }
            get matrix() {
                return this.transform.get().matrix;
            }
            updatePhysicsConfig(t) {
                this._bodyConfig = {
                    ...as().bodies,
                    ...t
                }, this.canSleep = this._bodyConfig.canSleepByDefault, this.sleepMotion = 5 * this._bodyConfig.sleepEpsilon, this.wakeThreshold = this._bodyConfig.wakeThreshold;
            }
            static updateDefaultPhysicsConfig(t) {
                Ss._DEFAULT_CONFIG = t;
            }
            get mass() {
                return this._mass;
            }
            set mass(t) {
                this._mass = t, this._cachedInertia = void 0, this._cachedInverseInertia = void 0;
            }
            get inverseMass() {
                return this.collisionType === qi.Fixed ? 0 : 1 / this.mass;
            }
            get sleeping() {
                return this.isSleeping;
            }
            get isSleeping() {
                return this._sleeping;
            }
            setSleeping(t) {
                this.isSleeping = t;
            }
            set isSleeping(t) {
                this._sleeping = t, t ? (this.vel = E.Zero, this.acc = E.Zero, this.angularVelocity = 0, this.sleepMotion = 0) : this.sleepMotion = 5 * this._bodyConfig.sleepEpsilon;
            }
            updateMotion() {
                this._sleeping && (this.isSleeping = !0);
                const t = this.vel.magnitude * this.vel.magnitude + Math.abs(this.angularVelocity * this.angularVelocity), e = this._bodyConfig.sleepBias;
                this.sleepMotion = e * this.sleepMotion + (1 - e) * t, this.sleepMotion = w(this.sleepMotion, 0, 10 * this._bodyConfig.sleepEpsilon), this.canSleep && this.sleepMotion < this._bodyConfig.sleepEpsilon && (this.isSleeping = !0);
            }
            get inertia() {
                if (this._cachedInertia) return this._cachedInertia;
                const t = this.owner.get(As);
                if (t) {
                    t.$colliderAdded.subscribe(()=>{
                        this._cachedInertia = null;
                    }), t.$colliderRemoved.subscribe(()=>{
                        this._cachedInertia = null;
                    });
                    const e = t.get();
                    if (e) return this._cachedInertia = e.getInertia(this.mass);
                }
                return 0;
            }
            get inverseInertia() {
                return this._cachedInverseInertia ? this._cachedInverseInertia : this._cachedInverseInertia = this.collisionType === qi.Fixed ? 0 : 1 / this.inertia;
            }
            get active() {
                var t;
                return !!(null === (t = this.owner) || void 0 === t ? void 0 : t.isActive);
            }
            get isActive() {
                var t;
                return !!(null === (t = this.owner) || void 0 === t ? void 0 : t.isActive);
            }
            get center() {
                return this.globalPos;
            }
            onAdd(t) {
                var e, i;
                this.transform = null === (e = this.owner) || void 0 === e ? void 0 : e.get($t), this.motion = null === (i = this.owner) || void 0 === i ? void 0 : i.get(ci);
            }
            get pos() {
                return this.transform.pos;
            }
            set pos(t) {
                this.transform.pos = t;
            }
            get globalPos() {
                return this.transform.globalPos;
            }
            set globalPos(t) {
                this.transform.globalPos = t;
            }
            get oldPos() {
                return this.oldTransform.pos;
            }
            get oldGlobalPos() {
                return this._oldGlobalPos;
            }
            get vel() {
                return this.motion.vel;
            }
            set vel(t) {
                this.motion.vel = t;
            }
            get acc() {
                return this.motion.acc;
            }
            set acc(t) {
                this.motion.acc = t;
            }
            get torque() {
                return this.motion.torque;
            }
            set torque(t) {
                this.motion.torque = t;
            }
            get oldRotation() {
                return this.oldTransform.rotation;
            }
            get rotation() {
                return this.transform.globalRotation;
            }
            set rotation(t) {
                this.transform.globalRotation = t;
            }
            get scale() {
                return this.transform.globalScale;
            }
            set scale(t) {
                this.transform.globalScale = t;
            }
            get oldScale() {
                return this.oldTransform.scale;
            }
            get scaleFactor() {
                return this.motion.scaleFactor;
            }
            set scaleFactor(t) {
                this.motion.scaleFactor = t;
            }
            get angularVelocity() {
                return this.motion.angularVelocity;
            }
            set angularVelocity(t) {
                this.motion.angularVelocity = t;
            }
            applyImpulse(t, e) {
                if (this.collisionType !== qi.Active) return;
                const i = e.scale(this.inverseMass, this._impulseScratch);
                if (this.limitDegreeOfFreedom.indexOf(Ts.X) > -1 && (i.x = 0), this.limitDegreeOfFreedom.indexOf(Ts.Y) > -1 && (i.y = 0), this.vel.addEqual(i), !this.limitDegreeOfFreedom.includes(Ts.Rotation)) {
                    const i = t.sub(this.globalPos, this._distanceFromCenterScratch);
                    this.angularVelocity += this.inverseInertia * i.cross(e);
                }
            }
            applyLinearImpulse(t) {
                if (this.collisionType !== qi.Active) return;
                const e = t.scale(this.inverseMass);
                this.limitDegreeOfFreedom.includes(Ts.X) && (e.x = 0), this.limitDegreeOfFreedom.includes(Ts.Y) && (e.y = 0), this.vel = this.vel.add(e);
            }
            applyAngularImpulse(t, e) {
                if (this.collisionType === qi.Active && !this.limitDegreeOfFreedom.includes(Ts.Rotation)) {
                    const i = t.sub(this.globalPos);
                    this.angularVelocity += this.inverseInertia * i.cross(e);
                }
            }
            captureOldTransform() {
                this.__oldTransformCaptured = !0;
                const t = this.transform.get();
                t.clone(this.oldTransform), this.oldTransform.parent = t.parent, this.oldVel.setTo(this.vel.x, this.vel.y), this.oldAcc.setTo(this.acc.x, this.acc.y), this.oldGlobalPos.setTo(this.globalPos.x, this.globalPos.y);
            }
            clone() {
                return super.clone();
            }
        }
        Ss._ID = 0, Ss._DEFAULT_CONFIG = {
            ...as().bodies
        };
        class Ps extends Jt {
            constructor(t){
                super(t), this.width = t.width, this.height = t.height, this.rasterize();
            }
            clone() {
                return new Ps({
                    width: this.width,
                    height: this.height,
                    ...this.cloneGraphicOptions(),
                    ...this.cloneRasterOptions()
                });
            }
            execute(t) {
                this.color && t.fillRect(0, 0, this.width, this.height), this.strokeColor && t.strokeRect(0, 0, this.width, this.height);
            }
        }
        class Es extends Jt {
            get radius() {
                return this._radius;
            }
            set radius(t) {
                this._radius = t, this.width = 2 * this._radius, this.height = 2 * this._radius, this.flagDirty();
            }
            constructor(t){
                var e, i, s;
                super(t), this._radius = 0;
                const n = null !== (e = t.lineWidth) && void 0 !== e ? e : t.strokeColor ? 1 : 0;
                this.padding = null !== (i = t.padding) && void 0 !== i ? i : 2 + n / 2, this.radius = t.radius, this.filtering = null !== (s = t.filtering) && void 0 !== s ? s : ot.Blended, this.rasterize();
            }
            clone() {
                return new Es({
                    radius: this.radius,
                    ...this.cloneGraphicOptions(),
                    ...this.cloneRasterOptions()
                });
            }
            execute(t) {
                this.radius > 0 && (t.beginPath(), t.arc(this.radius, this.radius, this.radius, 0, 2 * Math.PI), this.color && t.fill(), this.strokeColor && t.stroke());
            }
        }
        class Is extends Yt {
            constructor(t){
                var e, i;
                super(), this.useColliderShape = !0, this.useGraphicsBounds = !0, this.useColliderShape = null !== (e = null == t ? void 0 : t.useColliderShape) && void 0 !== e ? e : this.useColliderShape, this.useGraphicsBounds = null !== (i = null == t ? void 0 : t.useGraphicsBounds) && void 0 !== i ? i : this.useGraphicsBounds, this.localBounds = null == t ? void 0 : t.localBounds;
            }
        }
        class Rs {
            static CreateReversibleEasingFunction(t) {
                return (e, i, s, n)=>s < i ? i - (t(e, s, i, n) - s) : t(e, i, s, n);
            }
            static CreateVectorEasingFunction(t) {
                return (e, i, s, n)=>new E(t(e, i.x, s.x, n), t(e, i.y, s.y, n));
            }
        }
        Rs.Linear = Rs.CreateReversibleEasingFunction((t, e, i, s)=>(i -= e) * t / s + e), Rs.EaseInQuad = Rs.CreateReversibleEasingFunction((t, e, i, s)=>(i -= e) * (t /= s) * t + e), Rs.EaseOutQuad = Rs.CreateReversibleEasingFunction((t, e, i, s)=>-(i -= e) * (t /= s) * (t - 2) + e), Rs.EaseInOutQuad = Rs.CreateReversibleEasingFunction((t, e, i, s)=>(i -= e, (t /= s / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e)), Rs.EaseInCubic = Rs.CreateReversibleEasingFunction((t, e, i, s)=>(i -= e) * (t /= s) * t * t + e), Rs.EaseOutCubic = Rs.CreateReversibleEasingFunction((t, e, i, s)=>(t /= s, (i -= e) * (--t * t * t + 1) + e)), Rs.EaseInOutCubic = Rs.CreateReversibleEasingFunction((t, e, i, s)=>(i -= e, (t /= s / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e));
        class Fs {
            constructor(t){
                this._actions = [], this._currentAction = null, this._completedActions = [], this._entity = t;
            }
            add(t) {
                this._actions.push(t);
            }
            remove(t) {
                const e = this._actions.indexOf(t);
                this._actions.splice(e, 1);
            }
            clearActions() {
                this._actions.length = 0, this._completedActions.length = 0, this._currentAction && this._currentAction.stop();
            }
            getActions() {
                return this._actions.concat(this._completedActions);
            }
            getIncompleteActions() {
                return this._actions;
            }
            getCurrentAction() {
                return this._currentAction;
            }
            hasNext() {
                return this._actions.length > 0;
            }
            isComplete() {
                return 0 === this._actions.length;
            }
            reset() {
                this._actions = this.getActions();
                const t = this._actions.length;
                for(let e = 0; e < t; e++)this._actions[e].reset();
                this._completedActions = [];
            }
            update(t) {
                if (this._actions.length > 0 && (this._currentAction !== this._actions[0] && (this._currentAction = this._actions[0], this._entity.emit("actionstart", new ti(this._currentAction, this._entity))), this._currentAction.update(t), this._currentAction.isComplete(this._entity))) {
                    this._entity.emit("actioncomplete", new ei(this._currentAction, this._entity));
                    const t = this._actions.shift();
                    t && this._completedActions.push(t);
                }
            }
        }
        let Ms = 0;
        function Ds() {
            return Ms++;
        }
        class Bs {
            constructor(t, e, i){
                this.id = Ds(), this._stopped = !1, this._repeatBuilder = e, this._repeatContext = new yn(t), this._actionQueue = this._repeatContext.getQueue(), this._repeat = i, this._originalRepeat = i, this._repeatBuilder(this._repeatContext), this._repeat--;
            }
            update(t) {
                this._actionQueue.isComplete() && (this._actionQueue.clearActions(), this._repeatBuilder(this._repeatContext), this._repeat--), this._actionQueue.update(t);
            }
            isComplete() {
                return this._stopped || this._repeat <= 0 && this._actionQueue.isComplete();
            }
            stop() {
                this._stopped = !0;
            }
            reset() {
                this._repeat = this._originalRepeat;
            }
        }
        class ks {
            constructor(t, e){
                this.id = Ds(), this._stopped = !1, this._repeatBuilder = e, this._repeatContext = new yn(t), this._actionQueue = this._repeatContext.getQueue(), this._repeatBuilder(this._repeatContext);
            }
            update(t) {
                this._stopped || (this._actionQueue.isComplete() && (this._actionQueue.clearActions(), this._repeatBuilder(this._repeatContext)), this._actionQueue.update(t));
            }
            isComplete() {
                return this._stopped;
            }
            stop() {
                this._stopped = !0, this._actionQueue.clearActions();
            }
            reset() {}
        }
        function Ls(t, e, i) {
            return (1 - i) * t + e * i;
        }
        function zs(t, e, i, s) {
            const n = (t - e + m) % m >= Math.PI, r = Math.abs(e - t), o = m - r;
            let a = 0, l = 0;
            r > o ? (a = o, l = r) : (a = r, l = o);
            let c = 0, d = 1;
            switch(i){
                case h.ShortestPath:
                    c = a, d = n ? 1 : -1;
                    break;
                case h.LongestPath:
                    c = l, d = n ? -1 : 1;
                    break;
                case h.Clockwise:
                    d = 1, c = n ? a : l;
                    break;
                case h.CounterClockwise:
                    d = -1, c = n ? l : a;
            }
            return t + d * (c * s);
        }
        function Us(t, e, i) {
            return t.scale(1 - i).add(e.scale(i));
        }
        function Os(t, e, i) {
            return (i - t) / (e - t);
        }
        function Hs(t, e, i) {
            const s = i.sub(t), n = e.sub(t), r = s.x / n.x, o = s.y / n.y;
            return Math.min(r, o);
        }
        function Ns(t, e, i, s, n) {
            return Ls(i, s, Os(t, e, n));
        }
        function Ws(t, e, i, s, n) {
            return Us(i, s, Hs(t, e, n));
        }
        function Gs(t) {
            return t.offset instanceof E && "number" == typeof t.duration;
        }
        class Vs {
            constructor(t, e){
                var i;
                if (this.entity = t, this.id = Ds(), this._started = !1, this._stopped = !1, this._easing = Rs.Linear, this._offset = e.offset, this._easing = null !== (i = e.easing) && void 0 !== i ? i : this._easing, this._tx = t.get($t), this._motion = t.get(ci), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only MoveBy on Entities with TransformComponents.`);
                this._durationMs = e.duration, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._start = this._tx.pos.clone(), this._end = this._start.add(this._offset), this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1), i = this._tx.pos, s = this._easing(e, this._start.x, this._end.x, 1), n = this._easing(e, this._start.y, this._end.y, 1), r = (s - i.x) / (t / 1e3), o = (n - i.y) / (t / 1e3);
                this._motion.vel.x = r, this._motion.vel.y = o, this.isComplete(this.entity) && (this._tx.pos = I(this._end.x, this._end.y), this._motion.vel = I(0, 0));
            }
            isComplete(t) {
                return this._stopped || this._currentMs < 0;
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0, this._currentMs = 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
        }
        class qs {
            constructor(t, e, i, s){
                if (this.id = Ds(), this._started = !1, this._stopped = !1, this._entity = t, this._tx = t.get($t), this._motion = t.get(ci), this._speed = s, this._offset = new E(e, i), s <= 0) throw k.getInstance().error("Attempted to moveBy with speed less than or equal to zero : " + s), new Error("Speed must be greater than 0 pixels per second");
            }
            update(t) {
                this._started || (this._started = !0, this._start = new E(this._tx.pos.x, this._tx.pos.y), this._end = this._start.add(this._offset), this._distance = this._offset.magnitude, this._dir = this._end.sub(this._start).normalize()), this.isComplete(this._entity) ? (this._tx.pos = I(this._end.x, this._end.y), this._motion.vel = I(0, 0)) : this._motion.vel = this._dir.scale(this._speed);
            }
            isComplete(t) {
                const e = t.get($t);
                return this._stopped || e.pos.distance(this._start) >= this._distance;
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1;
            }
        }
        function Xs(t) {
            return t.pos instanceof E && "number" == typeof t.duration;
        }
        class Ys {
            constructor(t, e){
                var i;
                if (this.entity = t, this.id = Ds(), this._started = !1, this._stopped = !1, this._easing = Rs.Linear, this._end = e.pos, this._easing = null !== (i = e.easing) && void 0 !== i ? i : this._easing, this._tx = t.get($t), this._motion = t.get(ci), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only moveTo on Entities with TransformComponents.`);
                this._durationMs = e.duration, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._start = this._tx.pos.clone(), this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1), i = this._tx.pos, s = this._easing(e, this._start.x, this._end.x, 1), n = this._easing(e, this._start.y, this._end.y, 1), r = (s - i.x) / (t / 1e3), o = (n - i.y) / (t / 1e3);
                this._motion.vel.x = r, this._motion.vel.y = o, this.isComplete(this.entity) && (this._tx.pos = I(this._end.x, this._end.y), this._motion.vel = I(0, 0));
            }
            isComplete(t) {
                return this._stopped || this._currentMs < 0;
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0, this._currentMs = 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
        }
        class Zs {
            constructor(t, e, i, s){
                this.entity = t, this.id = Ds(), this._started = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._end = new E(e, i), this._speed = s;
            }
            update(t) {
                this._started || (this._started = !0, this._start = new E(this._tx.pos.x, this._tx.pos.y), this._distance = this._start.distance(this._end), this._dir = this._end.sub(this._start).normalize());
                const e = this._dir.scale(this._speed);
                this._motion.vel = I(e.x, e.y), this.isComplete(this.entity) && (this._tx.pos = I(this._end.x, this._end.y), this._motion.vel = I(0, 0));
            }
            isComplete(t) {
                const e = t.get($t);
                return this._stopped || new E(e.pos.x, e.pos.y).distance(this._start) >= this._distance;
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1;
            }
        }
        function $s(t) {
            return "number" == typeof t.angle && "number" == typeof t.duration;
        }
        class js {
            constructor(t, e){
                var i;
                if (this.entity = t, this.id = Ds(), this._started = !1, this._stopped = !1, this._endAngle = 0, this._startAngle = 0, this._endAngle = e.angle, this._tx = t.get($t), this._motion = t.get(ci), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only RotateTo on Entities with TransformComponents.`);
                this._durationMs = e.duration, this._rotationType = null !== (i = e.rotationType) && void 0 !== i ? i : h.ShortestPath, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._startAngle = this._tx.rotation, this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1), i = (zs(this._startAngle, this._endAngle, this._rotationType, e) - this._tx.rotation) / (t / 1e3);
                this._motion.angularVelocity = i, this.isComplete(this.entity) && (this._tx.rotation = this._endAngle, this._motion.angularVelocity = 0);
            }
            isComplete(t) {
                return this._stopped || this._currentMs < 0;
            }
            stop() {
                this._motion.angularVelocity = 0, this._stopped = !0, this._currentMs = 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
        }
        class Ks {
            constructor(t, e, i, s){
                this.id = Ds(), this._started = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._end = e, this._speed = i, this._rotationType = s || h.ShortestPath;
            }
            update(t) {
                if (!this._started) {
                    this._started = !0, this._start = this._tx.rotation, this._currentNonCannonAngle = this._tx.rotation;
                    const t = Math.abs(this._end - this._start), e = m - t;
                    switch(t > e ? (this._shortDistance = e, this._longDistance = t) : (this._shortDistance = t, this._longDistance = e), this._shortestPathIsPositive = (this._start - this._end + m) % m >= Math.PI, this._rotationType){
                        case h.ShortestPath:
                            this._distance = this._shortDistance, this._shortestPathIsPositive ? this._direction = 1 : this._direction = -1;
                            break;
                        case h.LongestPath:
                            this._distance = this._longDistance, this._shortestPathIsPositive ? this._direction = -1 : this._direction = 1;
                            break;
                        case h.Clockwise:
                            this._direction = 1, this._shortestPathIsPositive ? this._distance = this._shortDistance : this._distance = this._longDistance;
                            break;
                        case h.CounterClockwise:
                            this._direction = -1, this._shortestPathIsPositive ? this._distance = this._longDistance : this._distance = this._shortDistance;
                    }
                }
                this._motion.angularVelocity = this._direction * this._speed, this._currentNonCannonAngle += this._direction * this._speed * (t / 1e3), this.isComplete() && (this._tx.rotation = this._end, this._motion.angularVelocity = 0, this._stopped = !0);
            }
            isComplete() {
                const t = Math.abs(this._currentNonCannonAngle - this._start);
                return this._stopped || t >= Math.abs(this._distance);
            }
            stop() {
                this._motion.angularVelocity = 0, this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1;
            }
        }
        function Qs(t) {
            return "number" == typeof t.angleRadiansOffset && "number" == typeof t.duration;
        }
        class Js {
            constructor(t, e){
                var i;
                if (this.entity = t, this.id = Ds(), this._started = !1, this._stopped = !1, this._offset = 0, this._startAngle = 0, this._endAngle = 0, this._offset = e.angleRadiansOffset, this._tx = t.get($t), this._motion = t.get(ci), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only RotateBy on Entities with TransformComponents.`);
                this._durationMs = e.duration, this._rotationType = null !== (i = e.rotationType) && void 0 !== i ? i : h.ShortestPath, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._startAngle = this._tx.rotation, this._endAngle = b(this._startAngle + this._offset), this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1), i = (zs(this._startAngle, this._endAngle, this._rotationType, e) - this._tx.rotation) / (t / 1e3);
                this._motion.angularVelocity = i, this.isComplete() && (this._tx.rotation = this._endAngle, this._motion.angularVelocity = 0);
            }
            isComplete() {
                return this._stopped || this._currentMs < 0;
            }
            stop() {
                this._motion.angularVelocity = 0, this._stopped = !0, this._currentMs = 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
        }
        class tn {
            constructor(t, e, i, s){
                this.id = Ds(), this._started = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._speed = i, this._offset = e, this._rotationType = s || h.ShortestPath;
            }
            update(t) {
                if (!this._started) {
                    this._started = !0, this._start = this._tx.rotation, this._currentNonCannonAngle = this._tx.rotation, this._end = this._start + this._offset;
                    const t = Math.abs(this._end - this._start), e = m - t;
                    switch(t > e ? (this._shortDistance = e, this._longDistance = t) : (this._shortDistance = t, this._longDistance = e), this._shortestPathIsPositive = (this._start - this._end + m) % m >= Math.PI, this._rotationType){
                        case h.ShortestPath:
                            this._distance = this._shortDistance, this._shortestPathIsPositive ? this._direction = 1 : this._direction = -1;
                            break;
                        case h.LongestPath:
                            this._distance = this._longDistance, this._shortestPathIsPositive ? this._direction = -1 : this._direction = 1;
                            break;
                        case h.Clockwise:
                            this._direction = 1, this._shortDistance >= 0 ? this._distance = this._shortDistance : this._distance = this._longDistance;
                            break;
                        case h.CounterClockwise:
                            this._direction = -1, this._shortDistance <= 0 ? this._distance = this._shortDistance : this._distance = this._longDistance;
                    }
                }
                this._motion.angularVelocity = this._direction * this._speed, this._currentNonCannonAngle += this._direction * this._speed * (t / 1e3), this.isComplete() && (this._tx.rotation = this._end, this._motion.angularVelocity = 0, this._stopped = !0);
            }
            isComplete() {
                const t = Math.abs(this._currentNonCannonAngle - this._start);
                return this._stopped || t >= Math.abs(this._distance);
            }
            stop() {
                this._motion.angularVelocity = 0, this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1, this._start = void 0, this._currentNonCannonAngle = void 0, this._distance = void 0;
            }
        }
        function en(t) {
            return "object" == typeof t.scale && "number" == typeof t.duration;
        }
        class sn {
            constructor(t, e){
                if (this.entity = t, this.id = Ds(), this._started = !1, this._stopped = !1, this._endScale = I(1, 1), this._startScale = I(1, 1), this._endScale = e.scale, this._tx = t.get($t), this._motion = t.get(ci), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only ScaleTo on Entities with TransformComponents.`);
                this._durationMs = e.duration, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._startScale = this._tx.scale, this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1), i = Us(this._startScale, this._endScale, e), s = this._tx.scale, n = i.sub(s).scale(1 / (t / 1e3));
                this._motion.scaleFactor = n, this.isComplete() && (this._tx.scale = this._endScale, this._motion.angularVelocity = 0);
            }
            isComplete() {
                return this._stopped || this._currentMs < 0;
            }
            stop() {
                this._motion.scaleFactor = E.Zero, this._stopped = !0, this._currentMs = 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
        }
        class nn {
            constructor(t, e, i, s, n){
                this.id = Ds(), this._started = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._endX = e, this._endY = i, this._speedX = s, this._speedY = n;
            }
            update(t) {
                if (this._started || (this._started = !0, this._startX = this._tx.scale.x, this._startY = this._tx.scale.y, this._distanceX = Math.abs(this._endX - this._startX), this._distanceY = Math.abs(this._endY - this._startY)), Math.abs(this._tx.scale.x - this._startX) >= this._distanceX) this._motion.scaleFactor.x = 0;
                else {
                    const t = this._endY < this._startY ? -1 : 1;
                    this._motion.scaleFactor.x = this._speedX * t;
                }
                if (Math.abs(this._tx.scale.y - this._startY) >= this._distanceY) this._motion.scaleFactor.y = 0;
                else {
                    const t = this._endY < this._startY ? -1 : 1;
                    this._motion.scaleFactor.y = this._speedY * t;
                }
                this.isComplete() && (this._tx.scale = I(this._endX, this._endY), this._motion.scaleFactor.x = 0, this._motion.scaleFactor.y = 0);
            }
            isComplete() {
                return this._stopped || Math.abs(this._tx.scale.x - this._startX) >= this._distanceX - .01 && Math.abs(this._tx.scale.y - this._startY) >= this._distanceY - .01;
            }
            stop() {
                this._motion.scaleFactor.x = 0, this._motion.scaleFactor.y = 0, this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1;
            }
        }
        function rn(t) {
            return "object" == typeof t.scaleOffset && "number" == typeof t.duration;
        }
        class on {
            constructor(t, e){
                if (this.entity = t, this.id = Ds(), this._started = !1, this._stopped = !1, this._endScale = I(1, 1), this._scaleOffset = I(0, 0), this._startScale = I(1, 1), this._scaleOffset = e.scaleOffset, this._tx = t.get($t), this._motion = t.get(ci), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only ScaleBy on Entities with TransformComponents.`);
                this._durationMs = e.duration, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._startScale = this._tx.scale, this._endScale = this._startScale.add(this._scaleOffset), this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1), i = Us(this._startScale, this._endScale, e), s = this._tx.scale, n = i.sub(s).scale(1 / (t / 1e3));
                this._motion.scaleFactor = n, this.isComplete() && (this._tx.scale = this._endScale, this._motion.angularVelocity = 0);
            }
            isComplete() {
                return this._stopped || this._currentMs < 0;
            }
            stop() {
                this._motion.scaleFactor = E.Zero, this._stopped = !0, this._currentMs = 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
        }
        class an {
            constructor(t, e, i, s){
                this.id = Ds(), this._started = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._offset = new E(e, i), this._speedX = this._speedY = s;
            }
            update(t) {
                this._started || (this._started = !0, this._startScale = this._tx.scale.clone(), this._endScale = this._startScale.add(this._offset), this._distanceX = Math.abs(this._endScale.x - this._startScale.x), this._distanceY = Math.abs(this._endScale.y - this._startScale.y), this._directionX = this._endScale.x < this._startScale.x ? -1 : 1, this._directionY = this._endScale.y < this._startScale.y ? -1 : 1), this._motion.scaleFactor.x = this._speedX * this._directionX, this._motion.scaleFactor.y = this._speedY * this._directionY, this.isComplete() && (this._tx.scale = this._endScale, this._motion.scaleFactor.x = 0, this._motion.scaleFactor.y = 0);
            }
            isComplete() {
                return this._stopped || Math.abs(this._tx.scale.x - this._startScale.x) >= this._distanceX - .01 && Math.abs(this._tx.scale.y - this._startScale.y) >= this._distanceY - .01;
            }
            stop() {
                this._motion.scaleFactor.x = 0, this._motion.scaleFactor.y = 0, this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1;
            }
        }
        class hn {
            constructor(t){
                this.id = Ds(), this._hasBeenCalled = !1, this._method = t;
            }
            update(t) {
                this._method(), this._hasBeenCalled = !0;
            }
            isComplete() {
                return this._hasBeenCalled;
            }
            reset() {
                this._hasBeenCalled = !1;
            }
            stop() {
                this._hasBeenCalled = !0;
            }
        }
        class ln {
            constructor(t, e, i, s, n){
                this.easingFcn = n, this.id = Ds(), this._currentLerpTime = 0, this._lerpDuration = 1e3, this._lerpStart = new E(0, 0), this._lerpEnd = new E(0, 0), this._initialized = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._lerpDuration = s, this._lerpEnd = new E(e, i);
            }
            _initialize() {
                this._lerpStart = new E(this._tx.pos.x, this._tx.pos.y), this._currentLerpTime = 0;
            }
            update(t) {
                this._initialized || (this._initialize(), this._initialized = !0), this._currentLerpTime += t;
                let e = this._tx.pos.x, i = this._tx.pos.y;
                this._currentLerpTime < this._lerpDuration ? (e = this._lerpEnd.x < this._lerpStart.x ? this._lerpStart.x - (this.easingFcn(this._currentLerpTime, this._lerpEnd.x, this._lerpStart.x, this._lerpDuration) - this._lerpEnd.x) : this.easingFcn(this._currentLerpTime, this._lerpStart.x, this._lerpEnd.x, this._lerpDuration), i = this._lerpEnd.y < this._lerpStart.y ? this._lerpStart.y - (this.easingFcn(this._currentLerpTime, this._lerpEnd.y, this._lerpStart.y, this._lerpDuration) - this._lerpEnd.y) : this.easingFcn(this._currentLerpTime, this._lerpStart.y, this._lerpEnd.y, this._lerpDuration), this._motion.vel = I((e - this._tx.pos.x) / (t / 1e3), (i - this._tx.pos.y) / (t / 1e3))) : (this._tx.pos = I(this._lerpEnd.x, this._lerpEnd.y), this._motion.vel = E.Zero);
            }
            isComplete() {
                return this._stopped || this._currentLerpTime >= this._lerpDuration;
            }
            reset() {
                this._initialized = !1, this._stopped = !1, this._currentLerpTime = 0;
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0;
            }
        }
        class cn {
            constructor(t, e, i, s, n){
                this.easingFcn = n, this.id = Ds(), this._currentLerpTime = 0, this._lerpDuration = 1e3, this._lerpStart = new E(0, 0), this._lerpEnd = new E(0, 0), this._initialized = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._lerpDuration = s, this._offset = new E(e, i);
            }
            _initialize() {
                this._lerpStart = new E(this._tx.pos.x, this._tx.pos.y), this._currentLerpTime = 0, this._lerpEnd = this._lerpStart.add(this._offset);
            }
            update(t) {
                this._initialized || (this._initialize(), this._initialized = !0), this._currentLerpTime += t;
                let e = this._tx.pos.x, i = this._tx.pos.y;
                this._currentLerpTime < this._lerpDuration ? (e = this._lerpEnd.x < this._lerpStart.x ? this._lerpStart.x - (this.easingFcn(this._currentLerpTime, this._lerpEnd.x, this._lerpStart.x, this._lerpDuration) - this._lerpEnd.x) : this.easingFcn(this._currentLerpTime, this._lerpStart.x, this._lerpEnd.x, this._lerpDuration), i = this._lerpEnd.y < this._lerpStart.y ? this._lerpStart.y - (this.easingFcn(this._currentLerpTime, this._lerpEnd.y, this._lerpStart.y, this._lerpDuration) - this._lerpEnd.y) : this.easingFcn(this._currentLerpTime, this._lerpStart.y, this._lerpEnd.y, this._lerpDuration), this._motion.vel = I((e - this._tx.pos.x) / (t / 1e3), (i - this._tx.pos.y) / (t / 1e3))) : (this._tx.pos = I(this._lerpEnd.x, this._lerpEnd.y), this._motion.vel = E.Zero);
            }
            isComplete() {
                return this._stopped || this._currentLerpTime >= this._lerpDuration;
            }
            reset() {
                this._initialized = !1, this._stopped = !1, this._currentLerpTime = 0;
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0;
            }
        }
        class dn {
            constructor(t, e, i, s = 1){
                this.id = Ds(), this._timeVisible = 0, this._timeNotVisible = 0, this._elapsedTime = 0, this._totalTime = 0, this._stopped = !1, this._started = !1, this._graphics = t.get(fe), this._timeVisible = e, this._timeNotVisible = i, this._duration = (e + i) * s;
            }
            update(t) {
                this._started || (this._started = !0, this._elapsedTime = 0, this._totalTime = 0), this._graphics && (this._elapsedTime += t, this._totalTime += t, this._graphics.isVisible && this._elapsedTime >= this._timeVisible && (this._graphics.isVisible = !1, this._elapsedTime = 0), !this._graphics.isVisible && this._elapsedTime >= this._timeNotVisible && (this._graphics.isVisible = !0, this._elapsedTime = 0), this.isComplete() && (this._graphics.isVisible = !0));
            }
            isComplete() {
                return this._stopped || this._totalTime >= this._duration;
            }
            stop() {
                this._graphics && (this._graphics.isVisible = !0), this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1, this._elapsedTime = 0, this._totalTime = 0;
            }
        }
        class un {
            constructor(t, e, i){
                this.id = Ds(), this._multiplier = 1, this._started = !1, this._stopped = !1, this._graphics = t.get(fe), this._endOpacity = e, this._remainingTime = this._originalTime = i;
            }
            update(t) {
                this._graphics && (this._started || (this._started = !0, this._remainingTime = this._originalTime, this._endOpacity < this._graphics.opacity ? this._multiplier = -1 : this._multiplier = 1), this._remainingTime > 0 && (this._graphics.opacity += this._multiplier * (Math.abs(this._graphics.opacity - this._endOpacity) * t) / this._remainingTime), this._remainingTime -= t, this.isComplete() && (this._graphics.opacity = this._endOpacity), k.getInstance().debug("[Action fade] Actor opacity:", this._graphics.opacity));
            }
            isComplete() {
                return this._stopped || this._remainingTime <= 0;
            }
            stop() {
                this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1, this._remainingTime = this._originalTime;
            }
        }
        class _n {
            constructor(t){
                this.id = Ds(), this._elapsedTime = 0, this._started = !1, this._stopped = !1, this._delay = t;
            }
            update(t) {
                this._started || (this._started = !0), this._elapsedTime += t;
            }
            isComplete() {
                return this._stopped || this._elapsedTime >= this._delay;
            }
            stop() {
                this._stopped = !0;
            }
            reset() {
                this._elapsedTime = 0, this._started = !1, this._stopped = !1;
            }
        }
        class gn {
            constructor(t){
                this.id = Ds(), this._stopped = !1, this._entity = t;
            }
            update(t) {
                this._entity.get(bn).clearActions(), this._entity.kill(), this._stopped = !0;
            }
            isComplete() {
                return this._stopped;
            }
            stop() {}
            reset() {}
        }
        class pn {
            constructor(t, e, i){
                this.id = Ds(), this._started = !1, this._stopped = !1, this._tx = t.get($t), this._motion = t.get(ci), this._followTx = e.get($t), this._followMotion = e.get(ci), this._current = new E(this._tx.pos.x, this._tx.pos.y), this._end = new E(this._followTx.pos.x, this._followTx.pos.y), this._maximumDistance = void 0 !== i ? i : this._current.distance(this._end), this._speed = 0;
            }
            update(t) {
                this._started || (this._started = !0, this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize());
                const e = Math.sqrt(Math.pow(this._followMotion.vel.x, 2) + Math.pow(this._followMotion.vel.y, 2));
                if (0 !== e && (this._speed = e), this._current = I(this._tx.pos.x, this._tx.pos.y), this._end = I(this._followTx.pos.x, this._followTx.pos.y), this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize(), this._distanceBetween >= this._maximumDistance) {
                    const t = this._dir.scale(this._speed);
                    this._motion.vel = I(t.x, t.y);
                } else this._motion.vel = I(0, 0);
                this.isComplete() && (this._tx.pos = I(this._end.x, this._end.y), this._motion.vel = I(0, 0));
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0;
            }
            isComplete() {
                return this._stopped;
            }
            reset() {
                this._started = !1, this._stopped = !1;
            }
        }
        class fn {
            constructor(t, e, i){
                this.id = Ds(), this._started = !1, this._stopped = !1, this._speedWasSpecified = !1, this._tx = t.get($t), this._motion = t.get(ci), this._meetTx = e.get($t), this._meetMotion = e.get(ci), this._current = new E(this._tx.pos.x, this._tx.pos.y), this._end = new E(this._meetTx.pos.x, this._meetTx.pos.y), this._speed = i || 0, void 0 !== i && (this._speedWasSpecified = !0);
            }
            update(t) {
                this._started || (this._started = !0, this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize());
                const e = Math.sqrt(Math.pow(this._meetMotion.vel.x, 2) + Math.pow(this._meetMotion.vel.y, 2));
                0 === e || this._speedWasSpecified || (this._speed = e), this._current = I(this._tx.pos.x, this._tx.pos.y), this._end = I(this._meetTx.pos.x, this._meetTx.pos.y), this._distanceBetween = this._current.distance(this._end), this._dir = this._end.sub(this._current).normalize();
                const i = this._dir.scale(this._speed);
                this._motion.vel = I(i.x, i.y), this.isComplete() && (this._tx.pos = I(this._end.x, this._end.y), this._motion.vel = I(0, 0));
            }
            isComplete() {
                return this._stopped || this._distanceBetween <= 1;
            }
            stop() {
                this._motion.vel = I(0, 0), this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1, this._distanceBetween = 1 / 0;
            }
        }
        class mn {
            constructor(t, e, i = 1e3){
                var s;
                this.id = Ds(), this._stopped = !1, this._started = !1, this._total = 0, this._currentDuration = 0, this._graphics = t.get(fe), this._duration = i, this._entity = t, this._material = null === (s = t.scene) || void 0 === s ? void 0 : s.engine.graphicsContext.createMaterial({
                    name: "flash-material",
                    color: e,
                    fragmentSource: "#version 300 es\n    \n        precision mediump float;\n        uniform float u_blend;\n        uniform sampler2D u_graphic;\n        uniform vec4 u_color;\n    \n        in vec2 v_uv; \n        out vec4 color;\n    \n        void main() { \n            vec4 textureColor = texture(u_graphic, v_uv); \n            color = mix(textureColor, u_color, u_blend * textureColor.a);\n            color.rgb = color.rgb * color.a;\n        }"
                }), this._total = i;
            }
            update(t) {
                var e;
                this._started || (this._started = !0, this._total = this._duration, this._currentDuration = this._duration, this._entity.graphics.material = this._material), this._graphics && (this._currentDuration -= t, this._graphics && (null === (e = this._material) || void 0 === e || e.update((t)=>{
                    t.trySetUniformFloat("u_blend", this._currentDuration / this._total);
                })), this.isComplete() && (this._entity.graphics.material = null));
            }
            isComplete() {
                return this._stopped || this._currentDuration <= 0;
            }
            stop() {
                this._graphics && (this._graphics.isVisible = !0), this._stopped = !0;
            }
            reset() {
                this._started = !1, this._stopped = !1;
            }
        }
        class vn {
            constructor(t){
                var e;
                if (this._distLookup = [], this.quality = 4, 4 !== t.controlPoints.length) throw new Error("Only cubic bezier curves are supported");
                this._controlPoints = [
                    ...t.controlPoints
                ], this.quality = null !== (e = t.quality) && void 0 !== e ? e : this.quality, this._calculateLookup();
            }
            get arcLength() {
                return this._arcLength;
            }
            get controlPoints() {
                return this._controlPoints;
            }
            set controlPoints(t) {
                this._controlPoints = [
                    ...t
                ], this._calculateLookup();
            }
            setControlPoint(t, e) {
                this._controlPoints[t] = e, this._calculateLookup();
            }
            _calculateLookup() {
                let t = 0;
                this._distLookup.length = 0;
                let e = this.controlPoints[0];
                const i = this.controlPoints.length * this.quality;
                for(let s = 0; s < i; s++){
                    const n = s / (i - 1), r = this.getPoint(n);
                    t += e.distance(r), this._distLookup.push(t), e = r;
                }
                this._arcLength = t;
            }
            _getTimeGivenDistance(t) {
                const e = this._distLookup.length, i = this.arcLength;
                if (t >= 0 && t < i) {
                    for(let i = 0; i < e - 1; i++)if (this._distLookup[i] <= t && t < this._distLookup[i + 1]) return Ns(this._distLookup[i], this._distLookup[i + 1], i / (e - 1), (i + 1) / (e - 1), t);
                }
                return t / i;
            }
            getPoint(t) {
                const e = [
                    ...this.controlPoints
                ];
                for(let i = 1; i < e.length; i++)for(let s = 0; s < e.length - i; s++)e[s] = Us(e[s], e[s + 1], t);
                return e[0];
            }
            getTangent(t) {
                const e = t * t, i = this.controlPoints[0], s = this.controlPoints[1], n = this.controlPoints[2], r = this.controlPoints[3];
                return i.scale(-3 * e + 6 * t - 3).add(s.scale(9 * e - 12 * t + 3).add(n.scale(-9 * e + 6 * t).add(r.scale(3 * e)))).normalize();
            }
            getUniformTangent(t) {
                const e = t * this.arcLength, i = this._getTimeGivenDistance(e);
                return this.getTangent(i);
            }
            getNormal(t) {
                return this.getTangent(t).normal();
            }
            getUniformNormal(t) {
                return this.getUniformTangent(t).normal();
            }
            getUniformPoint(t) {
                const e = t * this.arcLength, i = this._getTimeGivenDistance(e);
                return this.getPoint(i);
            }
            clone() {
                return new vn({
                    controlPoints: [
                        ...this.controlPoints
                    ],
                    quality: this.quality
                });
            }
        }
        class xn {
            constructor(t, e){
                var i;
                if (this.id = Ds(), this._started = !1, this._stopped = !1, this._mode = "dynamic", this._entity = t, this._tx = this._entity.get($t), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only curveTo on Entities with TransformComponents.`);
                this._curve = new vn({
                    controlPoints: [
                        I(0, 0),
                        ...e.controlPoints
                    ],
                    quality: e.quality
                }), this._durationMs = e.duration, this._mode = null !== (i = e.mode) && void 0 !== i ? i : this._mode, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._curve.setControlPoint(0, this._tx.globalPos.clone()), this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1);
                "dynamic" === this._mode ? this._tx.pos = this._curve.getPoint(e) : this._tx.pos = this._curve.getUniformPoint(e), this.isComplete(this._entity) && ("dynamic" === this._mode ? this._tx.pos = this._curve.getPoint(1) : this._tx.pos = this._curve.getUniformPoint(1));
            }
            isComplete(t) {
                return this._stopped || this._currentMs < 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
            stop() {
                this._stopped = !0, this._currentMs = 0;
            }
        }
        class wn {
            constructor(t, e){
                var i;
                if (this.id = Ds(), this._started = !1, this._stopped = !1, this._mode = "dynamic", this._entity = t, this._tx = this._entity.get($t), !this._tx) throw new Error(`Entity ${t.name} has no TransformComponent, can only curveTo on Entities with TransformComponents.`);
                this._curve = this._curve = new vn({
                    controlPoints: [
                        I(0, 0),
                        ...e.controlPoints
                    ],
                    quality: e.quality
                }), this._durationMs = e.duration, this._mode = null !== (i = e.mode) && void 0 !== i ? i : this._mode, this._currentMs = this._durationMs;
            }
            update(t) {
                this._started || (this._curve.setControlPoint(0, this._tx.globalPos), this._curve.setControlPoint(1, this._curve.controlPoints[1].add(this._tx.globalPos)), this._curve.setControlPoint(2, this._curve.controlPoints[2].add(this._tx.globalPos)), this._curve.setControlPoint(3, this._curve.controlPoints[3].add(this._tx.globalPos)), this._started = !0), this._currentMs -= t;
                const e = w(Ns(0, this._durationMs, 0, 1, this._durationMs - this._currentMs), 0, 1);
                "dynamic" === this._mode ? this._tx.pos = this._curve.getPoint(e) : this._tx.pos = this._curve.getUniformPoint(e), this.isComplete(this._entity) && ("dynamic" === this._mode ? this._tx.pos = this._curve.getPoint(1) : this._tx.pos = this._curve.getUniformPoint(1));
            }
            isComplete(t) {
                return this._stopped || this._currentMs < 0;
            }
            reset() {
                this._currentMs = this._durationMs, this._started = !1, this._stopped = !1;
            }
            stop() {
                this._stopped = !0;
            }
        }
        class yn {
            constructor(t){
                this._entity = t, this._queue = new Fs(t);
            }
            getQueue() {
                return this._queue;
            }
            update(t) {
                this._queue.update(t);
            }
            clearActions() {
                this._queue.clearActions();
            }
            runAction(t) {
                return t.reset(), this._queue.add(t), this;
            }
            curveBy(t) {
                return this._queue.add(new wn(this._entity, t)), this;
            }
            curveTo(t) {
                return this._queue.add(new xn(this._entity, t)), this;
            }
            easeTo(...t) {
                var e, i;
                let s = 0, n = 0, r = 0, o = Rs.Linear;
                return t[0] instanceof E ? (s = t[0].x, n = t[0].y, r = t[1], o = null !== (e = t[2]) && void 0 !== e ? e : o) : (s = t[0], n = t[1], r = t[2], o = null !== (i = t[3]) && void 0 !== i ? i : o), this._queue.add(new ln(this._entity, s, n, r, o)), this;
            }
            easeBy(...t) {
                var e, i;
                let s = 0, n = 0, r = 0, o = Rs.Linear;
                return t[0] instanceof E ? (s = t[0].x, n = t[0].y, r = t[1], o = null !== (e = t[2]) && void 0 !== e ? e : o) : (s = t[0], n = t[1], r = t[2], o = null !== (i = t[3]) && void 0 !== i ? i : o), this._queue.add(new cn(this._entity, s, n, r, o)), this;
            }
            moveTo(t, e, i) {
                let s = 0, n = 0, r = 0;
                return t instanceof E ? (s = t.x, n = t.y, r = +(null != e ? e : 0), this._queue.add(new Zs(this._entity, s, n, r))) : "number" == typeof t && "number" == typeof e && "number" == typeof i ? (s = t, n = e, r = i, this._queue.add(new Zs(this._entity, s, n, r))) : Xs(t) && this._queue.add(new Ys(this._entity, t)), this;
            }
            moveBy(t, e, i) {
                let s = 0, n = 0, r = 0;
                return t instanceof E && "number" == typeof e ? (s = t.x, n = t.y, r = e, this._queue.add(new qs(this._entity, s, n, r))) : "number" == typeof t && "number" == typeof e && "number" == typeof i ? (s = t, n = e, r = i, this._queue.add(new qs(this._entity, s, n, r))) : Gs(t) && this._queue.add(new Vs(this._entity, t)), this;
            }
            rotateTo(t, e, i) {
                return "number" == typeof t && "number" == typeof e ? this._queue.add(new Ks(this._entity, t, e, i)) : "object" == typeof t && this._queue.add(new js(this._entity, t)), this;
            }
            rotateBy(t, e, i) {
                return "object" == typeof t ? this._queue.add(new Js(this._entity, t)) : this._queue.add(new tn(this._entity, t, e, i)), this;
            }
            scaleTo(t, e, i, s) {
                let n = 1, r = 1, o = 0, a = 0;
                return en(t) ? (this._queue.add(new sn(this._entity, t)), this) : (t instanceof E && e instanceof E && (n = t.x, r = t.y, o = e.x, a = e.y), "number" == typeof t && "number" == typeof e && (n = t, r = e, o = i, a = s), this._queue.add(new nn(this._entity, n, r, o, a)), this);
            }
            scaleBy(t, e, i) {
                if (rn(t)) return this._queue.add(new on(this._entity, t)), this;
                let s = 1, n = 1;
                return t instanceof E && (s = t.x, n = t.y, i = e), "number" == typeof t && "number" == typeof e && (s = t, n = e), this._queue.add(new an(this._entity, s, n, i)), this;
            }
            blink(t, e, i = 1) {
                return this._queue.add(new dn(this._entity, t, e, i)), this;
            }
            fade(t, e) {
                return this._queue.add(new un(this._entity, t, e)), this;
            }
            flash(t, e = 1e3) {
                return this._queue.add(new mn(this._entity, t, e)), this;
            }
            delay(t) {
                return this._queue.add(new _n(t)), this;
            }
            die() {
                return this._queue.add(new gn(this._entity)), this;
            }
            callMethod(t) {
                return this._queue.add(new hn(t)), this;
            }
            repeat(t, e) {
                return e ? (this._queue.add(new Bs(this._entity, t, e)), this) : (this.repeatForever(t), this);
            }
            repeatForever(t) {
                return this._queue.add(new ks(this._entity, t)), this;
            }
            follow(t, e) {
                return void 0 === e ? this._queue.add(new pn(this._entity, t)) : this._queue.add(new pn(this._entity, t, e)), this;
            }
            meet(t, e) {
                return void 0 === e ? this._queue.add(new fn(this._entity, t)) : this._queue.add(new fn(this._entity, t, e)), this;
            }
            toPromise() {
                return new Promise((t)=>{
                    this._queue.add(new hn(()=>{
                        t();
                    }));
                });
            }
        }
        class bn extends Yt {
            constructor(){
                super(...arguments), this.dependencies = [
                    $t,
                    ci
                ], this._ctx = null;
            }
            onAdd(t) {
                this._ctx = new yn(t);
            }
            onRemove() {
                this._ctx = null;
            }
            _getCtx() {
                if (!this._ctx) throw new Error("Actions component not attached to an entity, no context available");
                return this._ctx;
            }
            getQueue() {
                if (!this._ctx) throw new Error("Actions component not attached to an entity, no queue available");
                return this._ctx.getQueue();
            }
            runAction(t) {
                if (!this._ctx) throw new Error("Actions component not attached to an entity, cannot run action");
                return this._ctx.runAction(t);
            }
            update(t) {
                var e;
                return null === (e = this._ctx) || void 0 === e ? void 0 : e.update(t);
            }
            clearActions() {
                var t;
                null === (t = this._ctx) || void 0 === t || t.clearActions();
            }
            curveBy(t) {
                return this._getCtx().curveBy.apply(this._ctx, [
                    t
                ]);
            }
            curveTo(t) {
                return this._getCtx().curveTo.apply(this._ctx, [
                    t
                ]);
            }
            easeTo(...t) {
                return this._getCtx().easeTo.apply(this._ctx, t);
            }
            easeBy(...t) {
                return this._getCtx().easeBy.apply(this._ctx, t);
            }
            moveTo(t, e, i) {
                return this._getCtx().moveTo.apply(this._ctx, [
                    t,
                    e,
                    i
                ]);
            }
            moveBy(t, e, i) {
                return this._getCtx().moveBy.apply(this._ctx, [
                    t,
                    e,
                    i
                ]);
            }
            rotateTo(t, e, i) {
                return this._getCtx().rotateTo.apply(this._ctx, [
                    t,
                    e,
                    i
                ]);
            }
            rotateBy(t, e, i) {
                return this._getCtx().rotateBy.apply(this._ctx, [
                    t,
                    e,
                    i
                ]);
            }
            scaleTo(t, e, i, s) {
                return this._getCtx().scaleTo.apply(this._ctx, [
                    t,
                    e,
                    i,
                    s
                ]);
            }
            scaleBy(t, e, i) {
                return this._getCtx().scaleBy.apply(this._ctx, [
                    t,
                    e,
                    i
                ]);
            }
            blink(t, e, i) {
                return this._getCtx().blink(t, e, i);
            }
            fade(t, e) {
                return this._getCtx().fade(t, e);
            }
            flash(t, e = 1e3) {
                return this._getCtx().flash(t, e);
            }
            delay(t) {
                return this._getCtx().delay(t);
            }
            die() {
                return this._getCtx().die();
            }
            callMethod(t) {
                return this._getCtx().callMethod(t);
            }
            repeat(t, e) {
                return this._getCtx().repeat(t, e);
            }
            repeatForever(t) {
                return this._getCtx().repeatForever(t);
            }
            follow(t, e) {
                return this._getCtx().follow(t, e);
            }
            meet(t, e) {
                return this._getCtx().meet(t, e);
            }
            toPromise() {
                return this._getCtx().toPromise();
            }
        }
        function Cn(t) {
            return t instanceof Tn;
        }
        const An = {
            CollisionStart: "collisionstart",
            CollisionEnd: "collisionend",
            PreCollision: "precollision",
            PostCollision: "postcollision",
            Kill: "kill",
            PreKill: "prekill",
            PostKill: "postkill",
            PreDraw: "predraw",
            PostDraw: "postdraw",
            PreTransformDraw: "pretransformdraw",
            PostTransformDraw: "posttransformdraw",
            PreDebugDraw: "predebugdraw",
            PostDebugDraw: "postdebugdraw",
            PointerUp: "pointerup",
            PointerDown: "pointerdown",
            PointerEnter: "pointerenter",
            PointerLeave: "pointerleave",
            PointerMove: "pointermove",
            PointerCancel: "pointercancel",
            Wheel: "pointerwheel",
            PointerDrag: "pointerdragstart",
            PointerDragEnd: "pointerdragend",
            PointerDragEnter: "pointerdragenter",
            PointerDragLeave: "pointerdragleave",
            PointerDragMove: "pointerdragmove",
            EnterViewPort: "enterviewport",
            ExitViewPort: "exitviewport",
            ActionStart: "actionstart",
            ActionComplete: "actioncomplete"
        };
        class Tn extends li {
            get pos() {
                return this.transform.pos;
            }
            set pos(t) {
                this.transform.pos = t.clone();
            }
            get oldPos() {
                return this.body.oldPos;
            }
            get oldGlobalPos() {
                return this.body.oldGlobalPos;
            }
            set oldPos(t) {
                this.body.oldPos.setTo(t.x, t.y);
            }
            get vel() {
                return this.motion.vel;
            }
            set vel(t) {
                this.motion.vel = t.clone();
            }
            get oldVel() {
                return this.body.oldVel;
            }
            set oldVel(t) {
                this.body.oldVel.setTo(t.x, t.y);
            }
            get acc() {
                return this.motion.acc;
            }
            set acc(t) {
                this.motion.acc = t.clone();
            }
            set oldAcc(t) {
                this.body.oldAcc.setTo(t.x, t.y);
            }
            get oldAcc() {
                return this.body.oldAcc;
            }
            get rotation() {
                return this.transform.rotation;
            }
            set rotation(t) {
                this.transform.rotation = t;
            }
            get angularVelocity() {
                return this.motion.angularVelocity;
            }
            set angularVelocity(t) {
                this.motion.angularVelocity = t;
            }
            get scale() {
                return this.get($t).scale;
            }
            set scale(t) {
                this.get($t).scale = t;
            }
            get anchor() {
                return this._anchor;
            }
            set anchor(t) {
                this._anchor = it(t, (t)=>this._handleAnchorChange(t)), this._handleAnchorChange(t);
            }
            _handleAnchorChange(t) {
                this.graphics && (this.graphics.anchor = t);
            }
            get offset() {
                return this._offset;
            }
            set offset(t) {
                this._offset = it(t, (t)=>this._handleOffsetChange(t)), this._handleOffsetChange(t);
            }
            _handleOffsetChange(t) {
                this.graphics && (this.graphics.offset = t);
            }
            get isOffScreen() {
                return this.hasTag("ex.offscreen");
            }
            get draggable() {
                return this._draggable;
            }
            set draggable(t) {
                t && (t && !this._draggable ? (this.events.on("pointerdragstart", this._pointerDragStartHandler), this.events.on("pointerdragend", this._pointerDragEndHandler), this.events.on("pointerdragmove", this._pointerDragMoveHandler), this.events.on("pointerdragleave", this._pointerDragLeaveHandler)) : !t && this._draggable && (this.events.off("pointerdragstart", this._pointerDragStartHandler), this.events.off("pointerdragend", this._pointerDragEndHandler), this.events.off("pointerdragmove", this._pointerDragMoveHandler), this.events.off("pointerdragleave", this._pointerDragLeaveHandler)), this._draggable = t);
            }
            get color() {
                return this.graphics.color;
            }
            set color(t) {
                this.graphics.color = t;
            }
            constructor(t){
                super(), this.events = new g, this._anchor = it(E.Half, (t)=>this._handleAnchorChange(t)), this._offset = it(E.Zero, (t)=>this._handleOffsetChange(t)), this.logger = k.getInstance(), this._draggable = !1, this._dragging = !1, this._pointerDragStartHandler = ()=>{
                    this._dragging = !0;
                }, this._pointerDragEndHandler = ()=>{
                    this._dragging = !1;
                }, this._pointerDragMoveHandler = (t)=>{
                    this._dragging && (this.pos = t.worldPos);
                }, this._pointerDragLeaveHandler = (t)=>{
                    this._dragging && (this.pos = t.worldPos);
                };
                const { name: e, x: i, y: s, pos: n, coordPlane: r, scale: o, width: a, height: h, radius: l, collider: c, vel: d, acc: u, rotation: _, angularVelocity: p, z: f, color: m, visible: v, opacity: x, anchor: w, offset: y, collisionType: b, collisionGroup: C, silenceWarnings: A } = {
                    ...t
                };
                this.name = null != e ? e : this.name, this.anchor = null != w ? w : Tn.defaults.anchor.clone(), this.offset = null != y ? y : E.Zero, this.transform = new $t, this.addComponent(this.transform), this.pos = null != n ? n : I(null != i ? i : 0, null != s ? s : 0), this.rotation = null != _ ? _ : 0, this.scale = null != o ? o : I(1, 1), this.z = null != f ? f : 0, this.transform.coordPlane = null != r ? r : Ht.World, this._silenceWarnings = null != A && A, this.pointer = new Is, this.addComponent(this.pointer), this.graphics = new fe({
                    anchor: this.anchor,
                    offset: this.offset,
                    opacity: x
                }), this.addComponent(this.graphics), this.motion = new ci, this.addComponent(this.motion), this.vel = null != d ? d : E.Zero, this.acc = null != u ? u : E.Zero, this.angularVelocity = null != p ? p : 0, this.actions = new bn, this.addComponent(this.actions), this.body = new Ss, this.addComponent(this.body), this.body.collisionType = null != b ? b : qi.Passive, C && (this.body.group = C), m && (this.color = m), c ? (this.collider = new As(c), this.addComponent(this.collider)) : l ? (this.collider = new As(Cs.Circle(l)), this.addComponent(this.collider), m && this.graphics.add(new Es({
                    color: m,
                    radius: l
                }))) : a > 0 && h > 0 ? (this.collider = new As(Cs.Box(a, h, this.anchor)), this.addComponent(this.collider), m && a && h && this.graphics.add(new Ps({
                    color: m,
                    width: a,
                    height: h
                }))) : (this.collider = new As, this.addComponent(this.collider)), this.graphics.isVisible = null == v || v;
            }
            clone() {
                const t = new Tn({
                    silenceWarnings: this._silenceWarnings,
                    color: this.color.clone(),
                    anchor: this.anchor.clone(),
                    offset: this.offset.clone()
                });
                t.clearComponents(), t.processComponentRemoval(), t.addComponent(t.transform = this.transform.clone(), !0), t.addComponent(t.pointer = this.pointer.clone(), !0), t.addComponent(t.graphics = this.graphics.clone(), !0), t.addComponent(t.motion = this.motion.clone(), !0), t.addComponent(t.actions = this.actions.clone(), !0), t.addComponent(t.body = this.body.clone(), !0), t.addComponent(t.collider = this.collider.clone(), !0);
                const e = [
                    this.transform,
                    this.pointer,
                    this.graphics,
                    this.motion,
                    this.actions,
                    this.body,
                    this.collider
                ], i = this.getComponents();
                for (const s of i)e.includes(s) || t.addComponent(s.clone(), !0);
                return t;
            }
            onInitialize(t) {}
            _initialize(t) {
                super._initialize(t);
                for (const e of this.children)e._initialize(t);
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            _prekill(t) {
                this.events.emit("prekill", new xe(this)), this.onPreKill(t);
            }
            onPreKill(t) {}
            _postkill(t) {
                this.events.emit("postkill", new we(this)), this.onPostKill(t);
            }
            onPostKill(t) {}
            kill() {
                this.scene ? (this._prekill(this.scene), this.events.emit("kill", new ve(this)), super.kill(), this._postkill(this.scene)) : this.logger.warn(`Cannot kill actor named "${this.name}", it was never added to the Scene`);
            }
            unkill() {
                this.isActive = !0;
            }
            isKilled() {
                return !this.isActive;
            }
            get z() {
                return this.get($t).z;
            }
            set z(t) {
                this.get($t).z = t;
            }
            get center() {
                const t = this.getGlobalPos();
                return new E(t.x + this.width / 2 - this.anchor.x * this.width, t.y + this.height / 2 - this.anchor.y * this.height);
            }
            get localCenter() {
                return new E(this.pos.x + this.width / 2 - this.anchor.x * this.width, this.pos.y + this.height / 2 - this.anchor.y * this.height);
            }
            get width() {
                return this.collider.localBounds.width * this.getGlobalScale().x;
            }
            get height() {
                return this.collider.localBounds.height * this.getGlobalScale().y;
            }
            getGlobalRotation() {
                return this.get($t).globalRotation;
            }
            get globalRotation() {
                return this.get($t).globalRotation;
            }
            getGlobalPos() {
                return this.get($t).globalPos;
            }
            get globalPos() {
                return this.get($t).globalPos;
            }
            getGlobalScale() {
                return this.get($t).globalScale;
            }
            get globalScale() {
                return this.get($t).globalScale;
            }
            get globalZ() {
                return this.get($t).globalZ;
            }
            contains(t, e, i = !1) {
                const s = I(t, e), n = this.get(As);
                n.update();
                const r = n.get();
                if (!r) return !1;
                const o = r.contains(s);
                return i ? o || this.children.some((i)=>i.contains(t, e, !0)) : o;
            }
            within(t, e) {
                const i = this.get(As), s = t.get(As), n = i.get(), r = s.get();
                return !(!n || !r) && n.getClosestLineBetween(r).getLength() <= e;
            }
            update(t, e) {
                this._initialize(t), this._add(t), this._preupdate(t, e), this._postupdate(t, e), this._remove(t);
            }
            onPreUpdate(t, e) {}
            onPostUpdate(t, e) {}
            onPreCollisionResolve(t, e, i, s) {}
            onPostCollisionResolve(t, e, i, s) {}
            onCollisionStart(t, e, i, s) {}
            onCollisionEnd(t, e, i, s) {}
            _preupdate(t, e) {
                this.events.emit("preupdate", new Ie(t, e, this)), this.onPreUpdate(t, e);
            }
            _postupdate(t, e) {
                this.events.emit("postupdate", new Re(t, e, this)), this.onPostUpdate(t, e);
            }
        }
        function Sn(t) {
            return t instanceof Pn;
        }
        Tn.defaults = {
            anchor: E.Half
        };
        class Pn extends Tn {
            constructor(t){
                var e, i;
                super({
                    ...t
                }), this.get($t).coordPlane = Ht.Screen, this.anchor = null !== (e = null == t ? void 0 : t.anchor) && void 0 !== e ? e : I(0, 0), this.body.collisionType = null !== (i = null == t ? void 0 : t.collisionType) && void 0 !== i ? i : qi.PreventCollision, this.pointer.useGraphicsBounds = !0, this.pointer.useColliderShape = !1, !(null == t ? void 0 : t.collider) && (null == t ? void 0 : t.width) > 0 && (null == t ? void 0 : t.height) > 0 && this.collider.useBoxCollider(this.width, this.height, this.anchor);
            }
            _initialize(t) {
                this._engine = t, super._initialize(t);
            }
            contains(t, e, i = !0) {
                if (i) return super.contains(t, e);
                const s = this._engine.worldToScreenCoordinates(new E(t, e));
                return super.contains(s.x, s.y);
            }
        }
        class En {
            get complete() {
                return this._complete;
            }
            constructor(t){
                var e;
                this._logger = k.getInstance(), this.id = 0, this._elapsedTime = 0, this._totalTimeAlive = 0, this._running = !1, this._numberOfTicks = 0, this.interval = 10, this.repeats = !1, this.maxNumberOfRepeats = -1, this.randomRange = [
                    0,
                    0
                ], this._baseInterval = 10, this._generateRandomInterval = ()=>this._baseInterval + this.random.integer(this.randomRange[0], this.randomRange[1]), this._complete = !1, this.scene = null;
                const i = null !== (e = t.action) && void 0 !== e ? e : t.fcn, s = t.interval, n = t.repeats, r = t.numberOfRepeats, o = t.randomRange, a = t.random;
                if (r && r >= 0 && (this.maxNumberOfRepeats = r, !n)) throw new Error("repeats must be set to true if numberOfRepeats is set");
                if (this.id = En._MAX_ID++, this._callbacks = [], this._baseInterval = this.interval = s, o) {
                    if (o[0] > o[1]) throw new Error("min value must be lower than max value for range");
                    this.random = null != a ? a : new f, this.randomRange = o, this.interval = this._generateRandomInterval(), this.on(()=>{
                        this.interval = this._generateRandomInterval();
                    });
                }
                this.repeats = n || this.repeats, i && this.on(i);
            }
            on(t) {
                this._callbacks.push(t);
            }
            off(t) {
                const e = this._callbacks.indexOf(t);
                this._callbacks.splice(e, 1);
            }
            update(t) {
                this._running && (this._totalTimeAlive += t, this._elapsedTime += t, this.maxNumberOfRepeats > -1 && this._numberOfTicks >= this.maxNumberOfRepeats && (this._complete = !0, this._running = !1, this._elapsedTime = 0), !this.complete && this._elapsedTime >= this.interval && (this._callbacks.forEach((t)=>{
                    t.call(this);
                }), this._numberOfTicks++, this.repeats || (this._complete = !0, this._running = !1), this._elapsedTime = 0));
            }
            reset(t, e) {
                if (t && t >= 0 && (this._baseInterval = this.interval = t), this.maxNumberOfRepeats && this.maxNumberOfRepeats >= 0 && (this.maxNumberOfRepeats = e, !this.repeats)) throw new Error("repeats must be set to true if numberOfRepeats is set");
                this._complete = !1, this._elapsedTime = 0, this._numberOfTicks = 0;
            }
            get timesRepeated() {
                return this._numberOfTicks;
            }
            getTimeRunning() {
                return this._totalTimeAlive;
            }
            get timeToNextAction() {
                return this.complete ? 0 : this.interval - this._elapsedTime;
            }
            get timeElapsedTowardNextAction() {
                return this._elapsedTime;
            }
            get isRunning() {
                return this._running;
            }
            pause() {
                return this._running = !1, this;
            }
            resume() {
                return this._running = !0, this;
            }
            start() {
                return this.scene || this._logger.warn("Cannot start a timer not part of a scene, timer wont start until added"), this._running = !0, this.complete && (this._complete = !1, this._elapsedTime = 0, this._numberOfTicks = 0), this;
            }
            stop() {
                return this._running = !1, this._elapsedTime = 0, this._numberOfTicks = 0, this;
            }
            cancel() {
                this.pause(), this.scene && this.scene.cancelTimer(this);
            }
        }
        En._MAX_ID = 0;
        class In extends Yt {
            constructor(t){
                super(), this.parallaxFactor = I(1, 1), this.parallaxFactor = null != t ? t : this.parallaxFactor;
            }
        }
        class Rn extends Yt {
            constructor(t, e = !0){
                super(), this.draw = t, this.useTransform = e;
            }
        }
        function Fn(t) {
            return t && t._dispatchPointerEvents && t._processPointerToObject;
        }
        class Mn {
            get events() {
                return this.object.events;
            }
            init(t, e, i) {
                this.object = t, this.contains = e, this.active = i;
            }
        }
        class Dn {
            constructor(){
                this._proxyPool = new j(()=>new Mn, (t)=>t, 100), this._objectToProxy = new Map, this._proxies = [], this._lastFrameObjectToPointers = new Map, this._currentFrameObjectToPointers = new Map;
            }
            addObject(t, e, i) {
                const s = this._proxyPool.rent(!1);
                s.init(t, e, i), this._proxies.push(s), this._objectToProxy.set(t, s);
            }
            _getProxy(t) {
                const e = this._objectToProxy.get(t);
                if (e) return e;
                throw new Error("No PointerTargetProxy for object");
            }
            removeObject(t) {
                const e = this._objectToProxy.get(t);
                if (e) {
                    const t = this._proxies.indexOf(e);
                    t > -1 && this._proxies.splice(t, 1), this._proxyPool.return(e);
                }
            }
            _objectCurrentlyUnderPointer(t, e) {
                return !(!this._currentFrameObjectToPointers.has(t) || !this._currentFrameObjectToPointers.get(t).includes(e));
            }
            _objectWasUnderPointer(t, e) {
                return !(!this._lastFrameObjectToPointers.has(t) || !this._lastFrameObjectToPointers.get(t).includes(e));
            }
            _entered(t, e) {
                return this._objectCurrentlyUnderPointer(t, e) && !this._lastFrameObjectToPointers.has(t);
            }
            _left(t, e) {
                return !this._currentFrameObjectToPointers.has(t) && this._objectWasUnderPointer(t, e);
            }
            addPointerToObject(t, e) {
                const i = this._objectToProxy.get(t);
                i && this._addPointerToProxy(i, e);
            }
            _addPointerToProxy(t, e) {
                if (!this._currentFrameObjectToPointers.has(t)) return void this._currentFrameObjectToPointers.set(t, [
                    e
                ]);
                const i = this._currentFrameObjectToPointers.get(t);
                this._currentFrameObjectToPointers.set(t, i.concat(e));
            }
            dispatchEvents(t, e) {
                const i = new Set(this._lastFrameObjectToPointers.keys()), s = new Set(this._currentFrameObjectToPointers.keys());
                let n, r, o;
                for(let a = 0; a < e.length; a++){
                    const h = e[a], l = this._getProxy(h);
                    if (Fn(h) && h._dispatchPointerEvents(t), i.has(l) || s.has(l)) {
                        o = this._processDownAndEmit(t, l), r = this._processUpAndEmit(t, l), n = this._processMoveAndEmit(t, l);
                        const e = [
                            ...n.values(),
                            ...o.values(),
                            ...r.values()
                        ];
                        this._processEnterLeaveAndEmit(t, l, e), this._processCancelAndEmit(t, l), this._processWheelAndEmit(t, l);
                    }
                }
            }
            processPointerToObject(t, e) {
                for(let i = 0; i < e.length; i++){
                    const s = e[i], n = this._getProxy(s);
                    Fn(s) && s._processPointerToObject(t);
                    for (const [e, i] of t.currentFramePointerCoords.entries())n.contains(i) && this._addPointerToProxy(n, e);
                }
            }
            clear() {
                this._lastFrameObjectToPointers.clear(), this._lastFrameObjectToPointers = new Map(this._currentFrameObjectToPointers), this._currentFrameObjectToPointers.clear();
            }
            _processDownAndEmit(t, e) {
                const i = new Map;
                for (const s of t.currentFrameDown)s.active && this._objectCurrentlyUnderPointer(e, s.pointerId) && (e.events.emit("pointerdown", s), t.isDragStart(s.pointerId) && e.events.emit("pointerdragstart", s)), i.set(s.pointerId, s);
                return i;
            }
            _processUpAndEmit(t, e) {
                const i = new Map;
                for (const s of t.currentFrameUp)s.active && this._objectCurrentlyUnderPointer(e, s.pointerId) && (e.events.emit("pointerup", s), t.isDragEnd(s.pointerId) && e.events.emit("pointerdragend", s)), i.set(s.pointerId, s);
                return i;
            }
            _processMoveAndEmit(t, e) {
                const i = new Map;
                for (const s of t.currentFrameMove)s.active && e.active() && this._objectCurrentlyUnderPointer(e, s.pointerId) && (e.events.emit("pointermove", s), t.isDragging(s.pointerId) && e.events.emit("pointerdragmove", s)), i.set(s.pointerId, s);
                return i;
            }
            _processEnterLeaveAndEmit(t, e, i) {
                for (const s of i){
                    if (s.active && e.active() && this._entered(e, s.pointerId)) {
                        e.events.emit("pointerenter", s), t.isDragging(s.pointerId) && e.events.emit("pointerdragenter", s);
                        break;
                    }
                    if (s.active && e.active() && (this._left(e, s.pointerId) || this._objectCurrentlyUnderPointer(e, s.pointerId) && "up" === s.type)) {
                        e.events.emit("pointerleave", s), t.isDragging(s.pointerId) && e.events.emit("pointerdragleave", s);
                        break;
                    }
                }
            }
            _processCancelAndEmit(t, e) {
                for (const i of t.currentFrameCancel)i.active && e.active() && this._objectCurrentlyUnderPointer(e, i.pointerId) && e.events.emit("pointercancel", i);
            }
            _processWheelAndEmit(t, e) {
                for (const i of t.currentFrameWheel)i.active && e.active() && this._objectCurrentlyUnderPointer(e, 0) && e.events.emit("pointerwheel", i);
            }
        }
        const Bn = {
            PreUpdate: "preupdate",
            PostUpdate: "postupdate",
            PreDraw: "predraw",
            PostDraw: "postdraw",
            PointerUp: "pointerup",
            PointerDown: "pointerdown",
            PointerMove: "pointermove",
            PointerCancel: "pointercancel"
        };
        class kn extends li {
            flagCollidersDirty() {
                this._collidersDirty = !0;
            }
            flagTilesDirty() {
                for(let t = 0; t < this.tiles.length; t++)this.tiles[t] && this.tiles[t].flagDirty();
            }
            get x() {
                var t;
                return null !== (t = this.transform.pos.x) && void 0 !== t ? t : 0;
            }
            set x(t) {
                var e;
                (null === (e = this.transform) || void 0 === e ? void 0 : e.pos) && (this.get($t).pos = I(t, this.y));
            }
            get y() {
                var t, e;
                return null !== (e = null === (t = this.transform) || void 0 === t ? void 0 : t.pos.y) && void 0 !== e ? e : 0;
            }
            set y(t) {
                var e;
                (null === (e = this.transform) || void 0 === e ? void 0 : e.pos) && (this.transform.pos = I(this.x, t));
            }
            get z() {
                var t;
                return null !== (t = this.transform.z) && void 0 !== t ? t : 0;
            }
            set z(t) {
                this.transform && (this.transform.z = t);
            }
            get rotation() {
                var t, e;
                return null !== (e = null === (t = this.transform) || void 0 === t ? void 0 : t.rotation) && void 0 !== e ? e : 0;
            }
            set rotation(t) {
                this.transform && (this.transform.rotation = t);
            }
            get scale() {
                var t, e;
                return null !== (e = null === (t = this.transform) || void 0 === t ? void 0 : t.scale) && void 0 !== e ? e : E.One;
            }
            set scale(t) {
                var e;
                (null === (e = this.transform) || void 0 === e ? void 0 : e.scale) && (this.transform.scale = t);
            }
            get pos() {
                return this.transform.pos;
            }
            set pos(t) {
                this.transform.pos = t;
            }
            get vel() {
                return this._motion.vel;
            }
            set vel(t) {
                this._motion.vel = t;
            }
            get width() {
                return this.tileWidth * this.columns * this.scale.x;
            }
            get height() {
                return this.tileHeight * this.rows * this.scale.y;
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            constructor(t){
                var e, i, s;
                super([], t.name), this.events = new g, this._token = 0, this.logger = k.getInstance(), this.tiles = [], this._rows = [], this._cols = [], this.renderFromTopOfGraphic = !1, this.meshingLookBehind = 10, this._collidersDirty = !0, this._oldRotation = 0, this._originalOffsets = new WeakMap, this.meshingLookBehind = null !== (e = t.meshingLookBehind) && void 0 !== e ? e : this.meshingLookBehind, this.addComponent(new $t), this.addComponent(new ci), this.addComponent(new Ss({
                    type: qi.Fixed
                })), this.addComponent(new fe({
                    onPostDraw: (t, e)=>this.draw(t, e)
                })), this.addComponent(new Rn((t, e)=>this.debug(t, e), !1)), this.addComponent(new As), this.addComponent(new Is), this.pointer = this.get(Is), this._graphics = this.get(fe), this.transform = this.get($t), this._motion = this.get(ci), this.collider = this.get(As), this._composite = this.collider.useCompositeCollider([]), this.transform.pos = null !== (i = t.pos) && void 0 !== i ? i : E.Zero, this._oldPos = this.transform.pos.clone(), this._oldScale = this.transform.scale.clone(), this.renderFromTopOfGraphic = null !== (s = t.renderFromTopOfGraphic) && void 0 !== s ? s : this.renderFromTopOfGraphic, this.tileWidth = t.tileWidth, this.tileHeight = t.tileHeight, this.rows = t.rows, this.columns = t.columns, this._pointerEventDispatcher = new Dn, this.tiles = new Array(this.rows * this.columns), this._rows = new Array(this.rows), this._cols = new Array(this.columns);
                let n = [];
                for(let t = 0; t < this.columns; t++){
                    for(let e = 0; e < this.rows; e++){
                        const i = new Ln({
                            x: t,
                            y: e,
                            map: this
                        });
                        i.map = this, this.tiles[t + e * this.columns] = i, this._pointerEventDispatcher.addObject(i, (t)=>i.bounds.contains(t.worldPos), ()=>!0), n.push(i), this._rows[e] || (this._rows[e] = []), this._rows[e].push(i);
                    }
                    this._cols[t] = n, n = [];
                }
                this._graphics.localBounds = new U({
                    left: 0,
                    top: 0,
                    right: this.columns * this.tileWidth * this.scale.x,
                    bottom: this.rows * this.tileHeight * this.scale.y
                });
            }
            _initialize(t) {
                super._initialize(t), this._engine = t;
            }
            _getOrSetColliderOriginalOffset(t) {
                var e;
                if (this._originalOffsets.has(t)) return null !== (e = this._originalOffsets.get(t)) && void 0 !== e ? e : E.Zero;
                {
                    const e = t.offset;
                    return this._originalOffsets.set(t, e), e;
                }
            }
            _updateColliders() {
                this.collider.$colliderRemoved.notifyAll(this._composite), this._composite.clearColliders();
                const t = [];
                this._composite = this.collider.useCompositeCollider([]);
                let e = null;
                const i = (t, e)=>!(!t || !e) && t.top === e.top && t.bottom === e.bottom && t.right === e.left, s = (t, e, s = this.meshingLookBehind)=>{
                    if (!t) return !1;
                    for(let n = e.length - 1; n >= 0; n--){
                        if (s-- < 0) return !1;
                        const r = e[n];
                        if (i(r, t)) return e[n] = r.combine(t), !0;
                    }
                    return !1;
                };
                for(let i = 0; i < this.columns; i++){
                    for(let n = 0; n < this.rows; n++){
                        const r = this.tiles[i + n * this.columns];
                        if (r.solid) {
                            if (r.getColliders().length > 0) {
                                for (const t of r.getColliders()){
                                    const e = this._getOrSetColliderOriginalOffset(t);
                                    t.offset = I(r.x * this.tileWidth * this.scale.x, r.y * this.tileHeight * this.scale.y).add(e), t.owner = this, this._composite.addCollider(t);
                                }
                                e && !s(e, t) && t.push(e), e = null;
                            } else e = e ? e.combine(r.defaultGeometry) : r.defaultGeometry;
                        } else e && !s(e, t) && t.push(e), e = null;
                    }
                    e && !s(e, t) && t.push(e), e = null;
                }
                for (const e of t){
                    const t = Cs.Box(e.width, e.height, E.Zero, I(e.left - this.pos.x, e.top - this.pos.y));
                    t.owner = this, this._composite.addCollider(t);
                }
                this.collider.update(), this.collider.$colliderAdded.notifyAll(this._composite);
            }
            getTileByIndex(t) {
                var e;
                return null !== (e = this.tiles[t]) && void 0 !== e ? e : null;
            }
            getTile(t, e) {
                return t < 0 || e < 0 || t >= this.columns || e >= this.rows ? null : this.tiles[t + e * this.columns];
            }
            getTileByPoint(t) {
                const { x: e, y: i } = this._getTileCoordinates(t), s = this.getTile(e, i);
                return e >= 0 && i >= 0 && e < this.columns && i < this.rows && s ? s : null;
            }
            _getTileCoordinates(t) {
                t = this.transform.applyInverse(t);
                return {
                    x: Math.floor(t.x / this.tileWidth),
                    y: Math.floor(t.y / this.tileHeight)
                };
            }
            getRows() {
                return this._rows;
            }
            getColumns() {
                return this._cols;
            }
            getOnScreenTiles() {
                let t = this._engine.screen.getWorldBounds();
                const e = this.get(In);
                if (e && this.isInitialized) {
                    let i = this.pos;
                    const s = E.One.sub(e.parallaxFactor), n = this._engine.currentScene.camera.pos.scale(s);
                    i = i.sub(n), t = t.translate(i);
                }
                const i = this.transform.coordPlane === Ht.Screen ? this._engine.screen.getScreenBounds() : t, s = this._getTileCoordinates(i.topLeft), n = this._getTileCoordinates(i.topRight), r = this._getTileCoordinates(i.bottomRight), o = this._getTileCoordinates(i.bottomLeft), a = Math.min(w(s.x, 0, this.columns - 1), w(n.x, 0, this.columns - 1)), h = Math.min(w(s.y, 0, this.rows - 1), w(n.y, 0, this.rows - 1)), l = Math.max(w(r.x, 0, this.columns - 1), w(o.x, 0, this.columns - 1)), c = Math.max(w(r.y, 0, this.rows - 1), w(o.y, 0, this.rows - 1)), d = [];
                for(let t = a; t <= l; t++)for(let e = h; e <= c; e++)d.push(this.getTile(t, e));
                return d;
            }
            _processPointerToObject(t) {
                this._pointerEventDispatcher.processPointerToObject(t, this.tiles);
            }
            _dispatchPointerEvents(t) {
                this._pointerEventDispatcher.dispatchEvents(t, this.tiles);
            }
            update(t, e) {
                this._initialize(t), this.onPreUpdate(t, e), this.emit("preupdate", new Ie(t, e, this)), this._oldPos.equals(this.pos) && this._oldRotation === this.rotation && this._oldScale.equals(this.scale) || (this.flagCollidersDirty(), this.flagTilesDirty()), this._collidersDirty && (this._collidersDirty = !1, this._updateColliders()), this._pointerEventDispatcher.clear(), this._token++, this.pos.clone(this._oldPos), this._oldRotation = this.rotation, this.scale.clone(this._oldScale), this.transform.pos = this.pos, this.onPostUpdate(t, e), this.emit("postupdate", new Re(t, e, this));
            }
            draw(t, e) {
                if (!this.isInitialized) return;
                let i, s, n;
                this.emit("predraw", new Ce(t, e, this));
                const r = this.getOnScreenTiles();
                for(let o = 0; o < r.length; o++){
                    const a = r[o], h = a.getGraphicsOffsets();
                    for(i = a.getGraphics(), s = 0, n = i.length; s < n; s++){
                        const n = i[s], r = h[s];
                        if (n) {
                            pe(n) && (null == n || n.tick(e, this._token));
                            const i = this.renderFromTopOfGraphic ? 0 : n.height - this.tileHeight;
                            n.draw(t, a.x * this.tileWidth + r.x, a.y * this.tileHeight - i + r.y);
                        }
                    }
                }
                this.emit("postdraw", new Ae(t, e, this));
            }
            debug(t, e) {
                const { showAll: i, showGrid: s, gridColor: n, gridWidth: r, showSolidBounds: o, solidBoundsColor: a, showColliderGeometry: h } = e.tilemap, { geometryColor: l, geometryLineWidth: c, geometryPointSize: d } = e.collider, u = this.tileWidth * this.columns * this.scale.x, _ = this.tileHeight * this.rows * this.scale.y, g = this.pos;
                if (s || i) {
                    for(let e = 0; e < this.rows + 1; e++){
                        const i = I(0, e * this.tileHeight * this.scale.y);
                        t.drawLine(g.add(i), g.add(I(u, i.y)), n, r);
                    }
                    for(let e = 0; e < this.columns + 1; e++){
                        const i = I(e * this.tileWidth * this.scale.x, 0);
                        t.drawLine(g.add(i), g.add(I(i.x, _)), n, r);
                    }
                }
                if (i || o || h) {
                    const e = this._composite.getColliders();
                    t.save(), t.translate(this.pos.x, this.pos.y), t.scale(this.scale.x, this.scale.y);
                    for (const i of e){
                        const e = i.localBounds, s = i.worldPos.sub(this.pos);
                        o && t.drawRectangle(s, e.width, e.height, a);
                    }
                    if (t.restore(), h) for (const i of e)i.debug(t, l, {
                        lineWidth: c,
                        pointSize: d
                    });
                }
                if (i || o) {
                    if (t.save(), t.z = 999, o) for(let e = 0; e < this.tiles.length; e++)this.tiles[e].bounds.draw(t);
                    t.restore();
                }
            }
        }
        class Ln {
            get pos() {
                return this._posDirty && (this._recalculate(), this._posDirty = !1), this._pos;
            }
            get width() {
                return this._width;
            }
            get height() {
                return this._height;
            }
            get solid() {
                return this._solid;
            }
            set solid(t) {
                var e;
                null === (e = this.map) || void 0 === e || e.flagCollidersDirty(), this._solid = t;
            }
            getGraphics() {
                return this._graphics;
            }
            getGraphicsOffsets() {
                return this._offsets;
            }
            addGraphic(t, e) {
                this._graphics.push(t), (null == e ? void 0 : e.offset) ? this._offsets.push(e.offset) : this._offsets.push(E.Zero);
            }
            removeGraphic(t) {
                const e = this._graphics.indexOf(t);
                e > -1 && (this._graphics.splice(e, 1), this._offsets.splice(e, 1));
            }
            clearGraphics() {
                this._graphics.length = 0, this._offsets.length = 0;
            }
            getColliders() {
                return this._colliders;
            }
            addCollider(t) {
                this._colliders.push(t), this.map.flagCollidersDirty();
            }
            removeCollider(t) {
                const e = this._colliders.indexOf(t);
                e > -1 && this._colliders.splice(e, 1), this.map.flagCollidersDirty();
            }
            clearColliders() {
                this._colliders.length = 0, this.map.flagCollidersDirty();
            }
            constructor(t){
                var e, i;
                this._posDirty = !1, this.events = new g, this._solid = !1, this._graphics = [], this._offsets = [], this._colliders = [], this.data = new Map, this.x = t.x, this.y = t.y, this.map = t.map, this._width = t.map.tileWidth * this.map.scale.x, this._height = t.map.tileHeight * this.map.scale.y, this.solid = null !== (e = t.solid) && void 0 !== e ? e : this.solid, this._graphics = null !== (i = t.graphics) && void 0 !== i ? i : [], this._recalculate();
            }
            flagDirty() {
                return this._posDirty = !0;
            }
            _recalculate() {
                const t = this.map.pos.add(I(this.x * this.map.tileWidth, this.y * this.map.tileHeight));
                this._geometry = new U(t.x, t.y, t.x + this.map.tileWidth, t.y + this.map.tileHeight), this._width = this.map.tileWidth * this.map.scale.x, this._height = this.map.tileHeight * this.map.scale.y, this._pos = this.map.pos.add(I(this.x * this._width, this.y * this._height)), this._bounds = new U(this._pos.x, this._pos.y, this._pos.x + this._width, this._pos.y + this._height), this.map.rotation && (this._bounds = this._bounds.rotate(this.map.rotation, this.map.pos)), this._posDirty = !1;
            }
            get bounds() {
                return this._posDirty && this._recalculate(), this._bounds;
            }
            get defaultGeometry() {
                return this._geometry;
            }
            get center() {
                return this._posDirty && this._recalculate(), new E(this._pos.x + this._width / 2, this._pos.y + this._height / 2);
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                e ? this.events.off(t, e) : this.events.off(t);
            }
        }
        class zn {
            constructor(t){
                this.camera = t;
            }
            lockToActor(t) {
                this.camera.addStrategy(new On(t));
            }
            lockToActorAxis(t, e) {
                this.camera.addStrategy(new Hn(t, e));
            }
            elasticToActor(t, e, i) {
                this.camera.addStrategy(new Nn(t, e, i));
            }
            radiusAroundActor(t, e) {
                this.camera.addStrategy(new Wn(t, e));
            }
            limitCameraBounds(t) {
                this.camera.addStrategy(new Gn(t));
            }
        }
        var Un;
        !function(t) {
            t[t.X = 0] = "X", t[t.Y = 1] = "Y";
        }(Un || (Un = {}));
        class On {
            constructor(t){
                this.target = t, this.action = (t, e, i, s)=>t.center;
            }
        }
        class Hn {
            constructor(t, e){
                this.target = t, this.axis = e, this.action = (t, e, i, s)=>{
                    const n = t.center, r = e.getFocus();
                    return this.axis === Un.X ? new E(n.x, r.y) : new E(r.x, n.y);
                };
            }
        }
        class Nn {
            constructor(t, e, i){
                this.target = t, this.cameraElasticity = e, this.cameraFriction = i, this.action = (t, e, i, s)=>{
                    const n = t.center;
                    let r = e.getFocus(), o = e.vel.clone();
                    const a = n.sub(r).scale(this.cameraElasticity);
                    o = o.add(a);
                    const h = o.scale(-1).scale(this.cameraFriction);
                    return o = o.add(h), r = r.add(o), r;
                };
            }
        }
        class Wn {
            constructor(t, e){
                this.target = t, this.radius = e, this.action = (t, e, i, s)=>{
                    const n = t.center, r = e.getFocus(), o = n.sub(r), a = o.magnitude;
                    if (a >= this.radius) {
                        const t = a - this.radius;
                        return r.add(o.normalize().scale(t));
                    }
                    return r;
                };
            }
        }
        class Gn {
            constructor(t){
                this.target = t, this.boundSizeChecked = !1, this.action = (t, e, i, s)=>{
                    const n = e.getFocus();
                    this.boundSizeChecked || ((t.bottom - t.top < i.drawHeight || t.right - t.left < i.drawWidth) && k.getInstance().warn("Camera bounds should not be smaller than the engine viewport"), this.boundSizeChecked = !0);
                    let r = n.x, o = n.y;
                    return n.x < t.left + i.halfDrawWidth ? r = t.left + i.halfDrawWidth : n.x > t.right - i.halfDrawWidth && (r = t.right - i.halfDrawWidth), n.y < t.top + i.halfDrawHeight ? o = t.top + i.halfDrawHeight : n.y > t.bottom - i.halfDrawHeight && (o = t.bottom - i.halfDrawHeight), I(r, o);
                };
            }
        }
        const Vn = {
            Initialize: "initialize",
            PreUpdate: "preupdate",
            PostUpdate: "postupdate"
        };
        class qn {
            constructor(){
                this.events = new g, this.transform = $.identity(), this.inverse = $.identity(), this._cameraStrategies = [], this.strategy = new zn(this), this._z = 1, this.dz = 0, this.az = 0, this.rotation = 0, this._angularVelocity = 0, this._posChanged = !1, this._pos = new Vt(E.Zero, ()=>{
                    this._posChanged = !0;
                }), this.drawPos = this.pos.clone(), this._oldPos = this.pos.clone(), this.vel = E.Zero, this.acc = E.Zero, this._cameraMoving = !1, this._currentLerpTime = 0, this._lerpDuration = 1e3, this._lerpStart = null, this._lerpEnd = null, this._isShaking = !1, this._shakeMagnitudeX = 0, this._shakeMagnitudeY = 0, this._shakeDuration = 0, this._elapsedShakeTime = 0, this._xShake = 0, this._yShake = 0, this._isZooming = !1, this._zoomStart = 1, this._zoomEnd = 1, this._currentZoomTime = 0, this._zoomDuration = 0, this._zoomEasing = Rs.EaseInOutCubic, this._easing = Rs.EaseInOutCubic, this._halfWidth = 0, this._halfHeight = 0, this._viewport = null, this._isInitialized = !1, this._snapPos = I(0, 0);
            }
            get zoom() {
                return this._z;
            }
            set zoom(t) {
                this._z = t, this._engine && (this._halfWidth = this._engine.halfDrawWidth, this._halfHeight = this._engine.halfDrawHeight);
            }
            get angularVelocity() {
                return this._angularVelocity;
            }
            set angularVelocity(t) {
                this._angularVelocity = t;
            }
            get pos() {
                return this._pos;
            }
            set pos(t) {
                this._posChanged = !0, this._pos = new Vt(t, ()=>{
                    this._posChanged = !0;
                });
            }
            hasChanged() {
                return this._posChanged;
            }
            get x() {
                return this.pos.x;
            }
            set x(t) {
                this._follow || this._cameraMoving || (this.pos = I(t, this.pos.y));
            }
            get y() {
                return this.pos.y;
            }
            set y(t) {
                this._follow || this._cameraMoving || (this.pos = I(this.pos.x, t));
            }
            get dx() {
                return this.vel.x;
            }
            set dx(t) {
                this.vel = I(t, this.vel.y);
            }
            get dy() {
                return this.vel.y;
            }
            set dy(t) {
                this.vel = I(this.vel.x, t);
            }
            get ax() {
                return this.acc.x;
            }
            set ax(t) {
                this.acc = I(t, this.acc.y);
            }
            get ay() {
                return this.acc.y;
            }
            set ay(t) {
                this.acc = I(this.acc.x, t);
            }
            getFocus() {
                return this.pos;
            }
            move(t, e, i = Rs.EaseInOutCubic) {
                if ("function" != typeof i) throw "Please specify an EasingFunction";
                return this._follow ? Promise.reject(t) : (this._lerpPromise && this._lerpResolve && this._lerpResolve(t), this._lerpPromise = new Promise((t)=>{
                    this._lerpResolve = t;
                }), this._lerpStart = this.getFocus().clone(), this._lerpDuration = e, this._lerpEnd = t, this._currentLerpTime = 0, this._cameraMoving = !0, this._easing = i, this._lerpPromise);
            }
            shake(t, e, i) {
                this._isShaking = !0, this._shakeMagnitudeX = t, this._shakeMagnitudeY = e, this._shakeDuration = i;
            }
            zoomOverTime(t, e = 0, i = Rs.EaseInOutCubic) {
                return this._zoomPromise = new Promise((t)=>{
                    this._zoomResolve = t;
                }), e ? (this._isZooming = !0, this._zoomEasing = i, this._currentZoomTime = 0, this._zoomDuration = e, this._zoomStart = this.zoom, this._zoomEnd = t, this._zoomPromise) : (this._isZooming = !1, this.zoom = t, Promise.resolve(!0));
            }
            get viewport() {
                return this._viewport ? this._viewport : new U(0, 0, 0, 0);
            }
            addStrategy(t) {
                this._cameraStrategies.push(t);
            }
            removeStrategy(t) {
                N(t, this._cameraStrategies);
            }
            clearAllStrategies() {
                this._cameraStrategies.length = 0;
            }
            _preupdate(t, e) {
                this.events.emit("preupdate", new Ie(t, e, this)), this.onPreUpdate(t, e);
            }
            onPreUpdate(t, e) {}
            _postupdate(t, e) {
                this.events.emit("postupdate", new Re(t, e, this)), this.onPostUpdate(t, e);
            }
            onPostUpdate(t, e) {}
            get isInitialized() {
                return this._isInitialized;
            }
            _initialize(t) {
                if (!this.isInitialized) {
                    this._engine = t, this._screen = t.screen;
                    const e = this._screen.contentArea;
                    let i = I(e.width / 2, e.height / 2);
                    if (!this._engine.loadingComplete) {
                        const t = this._screen.peekResolution();
                        t && (i = I(t.width / 2, t.height / 2));
                    }
                    this._halfWidth = i.x, this._halfHeight = i.y, this._posChanged || (this.pos = i), this.pos.clone(this.drawPos), this.updateTransform(this.pos), this.runStrategies(t, t.clock.elapsed()), this.updateViewport(), this.updateTransform(this.pos), this.pos.clone(this._oldPos), this.onInitialize(t), this.events.emit("initialize", new Ye(t, this)), this._isInitialized = !0;
                }
            }
            onInitialize(t) {}
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            runStrategies(t, e) {
                for (const i of this._cameraStrategies)this.pos = i.action.call(i, i.target, this, t, e);
            }
            updateViewport() {
                this._viewport = new U(this.x - this._halfWidth, this.y - this._halfHeight, this.x + this._halfWidth, this.y + this._halfHeight);
            }
            update(t, e) {
                if (this._initialize(t), this._preupdate(t, e), this.pos.clone(this._oldPos), this.pos = this.pos.add(this.vel.scale(e / 1e3)), this.zoom += this.dz * e / 1e3, this.vel = this.vel.add(this.acc.scale(e / 1e3)), this.dz += this.az * e / 1e3, this.rotation += this.angularVelocity * e / 1e3, this._isZooming) {
                    if (this._currentZoomTime < this._zoomDuration) {
                        const t = (0, this._zoomEasing)(this._currentZoomTime, this._zoomStart, this._zoomEnd, this._zoomDuration);
                        this.zoom = t, this._currentZoomTime += e;
                    } else this._isZooming = !1, this.zoom = this._zoomEnd, this._currentZoomTime = 0, this._zoomResolve(!0);
                }
                if (this._cameraMoving) {
                    if (this._currentLerpTime < this._lerpDuration) {
                        const t = Rs.CreateVectorEasingFunction(this._easing)(this._currentLerpTime, this._lerpStart, this._lerpEnd, this._lerpDuration);
                        this.pos = t, this._currentLerpTime += e;
                    } else {
                        this.pos = this._lerpEnd;
                        const t = this._lerpEnd.clone();
                        this._lerpStart = null, this._lerpEnd = null, this._currentLerpTime = 0, this._cameraMoving = !1, this._lerpResolve(t);
                    }
                }
                this._isDoneShaking() ? (this._isShaking = !1, this._elapsedShakeTime = 0, this._shakeMagnitudeX = 0, this._shakeMagnitudeY = 0, this._shakeDuration = 0, this._xShake = 0, this._yShake = 0) : (this._elapsedShakeTime += e, this._xShake = 1 + (Math.random() * this._shakeMagnitudeX | 0), this._yShake = 1 + (Math.random() * this._shakeMagnitudeY | 0)), this.runStrategies(t, e), this.updateViewport(), this.updateTransform(this.pos), this._postupdate(t, e), this._posChanged = !1;
            }
            draw(t) {
                if (this.pos.clone(this.drawPos), this._engine.fixedUpdateTimestep) {
                    const t = this._engine.currentFrameLagMs / this._engine.fixedUpdateTimestep, e = this.pos.scale(t).add(this._oldPos.scale(1 - t));
                    e.clone(this.drawPos), this.updateTransform(e);
                }
                if (t.snapToPixel) {
                    const t = this.drawPos.clone(this._snapPos);
                    t.x = ~~(t.x + fi * x(t.x)), t.y = ~~(t.y + fi * x(t.y)), t.clone(this.drawPos), this.updateTransform(t);
                }
                t.multiply(this.transform);
            }
            updateTransform(t) {
                const e = this._screen.resolution.width / this.zoom, i = this._screen.resolution.height / this.zoom, s = I(-t.x + e / 2 + this._xShake, -t.y + i / 2 + this._yShake);
                this.transform.reset(), this.transform.scale(this.zoom, this.zoom), this.transform.translate(e / 2, i / 2), this.transform.rotate(this.rotation), this.transform.translate(-e / 2, -i / 2), this.transform.translate(s.x, s.y), this.transform.inverse(this.inverse);
            }
            _isDoneShaking() {
                return !this._isShaking || this._elapsedShakeTime >= this._shakeDuration;
            }
        }
        const Xn = {
            ExitTrigger: "exit",
            EnterTrigger: "enter"
        };
        class Yn extends Tn {
            constructor(t){
                var e, i, s, n;
                super({
                    ...t
                }), this.events = new g, this.filter = null !== (e = t.filter) && void 0 !== e ? e : ()=>!0, this.repeat = null !== (i = t.repeat) && void 0 !== i ? i : -1, this.action = null !== (s = t.action) && void 0 !== s ? s : ()=>{}, this.target = t.target, this.graphics.isVisible = null !== (n = t.visible) && void 0 !== n && n, this.body.collisionType = qi.Passive, this.events.on("collisionstart", ({ other: t })=>{
                    this._matchesTarget(t.owner) && (this.events.emit("enter", new Qe(this, t.owner)), this._dispatchAction(t.owner), 0 === this.repeat && this.kill());
                }), this.events.on("collisionend", ({ other: t })=>{
                    this._matchesTarget(t.owner) && this.events.emit("exit", new Je(this, t.owner));
                });
            }
            _matchesTarget(t) {
                return this.filter(t) && (void 0 === this.target || this.target === t);
            }
            _dispatchAction(t) {
                0 !== this.repeat && (this.action.call(this, t), this.repeat--);
            }
        }
        const Zn = {
            Highest: -1 / 0,
            Higher: -5,
            Average: 0,
            Lower: 5,
            Lowest: 1 / 0
        };
        var $n;
        !function(t) {
            t.Update = "update", t.Draw = "draw";
        }($n || ($n = {}));
        class jn {
        }
        jn.priority = Zn.Average;
        class Kn {
            constructor(t){
                this._world = t, this.entities = [], this._entityIndex = {}, this._childAddedHandlerMap = new Map, this._childRemovedHandlerMap = new Map, this._createChildAddedHandler = ()=>(t)=>{
                        this.addEntity(t);
                    }, this._createChildRemovedHandler = ()=>(t)=>{
                        this.removeEntity(t, !1);
                    }, this._entitiesToRemove = [];
            }
            updateEntities(t, e) {
                for(let i = 0; i < this.entities.length; i++){
                    const s = this.entities[i];
                    s.update(t.engine, e), s.isActive || this.removeEntity(s);
                }
            }
            findEntitiesForRemoval() {
                for(let t = 0; t < this.entities.length; t++){
                    const e = this.entities[t];
                    e.isActive || this.removeEntity(e);
                }
            }
            addEntity(t) {
                if (t.isActive = !0, t.scene = this._world.scene, t && !this._entityIndex[t.id]) {
                    this._entityIndex[t.id] = t, this.entities.push(t), this._world.queryManager.addEntity(t), t.children.forEach((e)=>{
                        e.scene = t.scene, this.addEntity(e);
                    });
                    const e = this._createChildAddedHandler();
                    this._childAddedHandlerMap.set(t, e);
                    const i = this._createChildRemovedHandler();
                    this._childRemovedHandlerMap.set(t, i), t.childrenAdded$.subscribe(e), t.childrenRemoved$.subscribe(i);
                }
            }
            removeEntity(t, e = !0) {
                var i, s;
                let n = 0;
                n = t instanceof li ? t.id : t;
                const r = this._entityIndex[n];
                if (r && r.isActive && (r.isActive = !1), r && e) this._entitiesToRemove.push(r);
                else if (delete this._entityIndex[n], r) {
                    r.scene = null, N(r, this.entities), this._world.queryManager.removeEntity(r), r.children.forEach((t)=>{
                        t.scene = null, this.removeEntity(t, e);
                    });
                    const t = this._childAddedHandlerMap.get(r);
                    t && r.childrenAdded$.unsubscribe(t);
                    const n = this._childRemovedHandlerMap.get(r);
                    n && r.childrenRemoved$.unsubscribe(n), (null === (s = null === (i = this._world) || void 0 === i ? void 0 : i.scene) || void 0 === s ? void 0 : s.engine) && this._world.scene.engine.stats.currFrame.actors.killed++;
                }
            }
            processEntityRemovals() {
                for(let t = 0; t < this._entitiesToRemove.length; t++){
                    const e = this._entitiesToRemove[t];
                    e.isActive || this.removeEntity(e, !1);
                }
                this._entitiesToRemove.length = 0;
            }
            processComponentRemovals() {
                for(let t = 0; t < this.entities.length; t++)this.entities[t].processComponentRemoval();
            }
            getById(t) {
                return this._entityIndex[t];
            }
            getByName(t) {
                return this.entities.filter((e)=>e.name === t);
            }
            clear() {
                for(let t = this.entities.length - 1; t >= 0; t--)this.removeEntity(this.entities[t]);
            }
        }
        class Qn {
            constructor(t){
                if (this.requiredComponents = t, this.components = new Set, this.entities = [], this.entityAdded$ = new Zt, this.entityRemoved$ = new Zt, 0 === t.length) throw new Error("Cannot create query without components");
                for (const e of t)this.components.add(e);
                this.id = Qn.createId(t);
            }
            static createId(t) {
                return t.slice().map((t)=>t.name).sort().join("-");
            }
            checkAndAdd(t) {
                return !(this.entities.includes(t) || !t.hasAll(Array.from(this.components))) && (this.entities.push(t), this.entityAdded$.notifyAll(t), !0);
            }
            removeEntity(t) {
                const e = this.entities.indexOf(t);
                e > -1 && (this.entities.splice(e, 1), this.entityRemoved$.notifyAll(t));
            }
            getEntities(t) {
                return t && this.entities.sort(t), this.entities;
            }
        }
        class Jn {
            constructor(t){
                if (this.requiredTags = t, this.tags = new Set, this.entities = [], this.entityAdded$ = new Zt, this.entityRemoved$ = new Zt, 0 === t.length) throw new Error("Cannot create tag query without tags");
                for (const e of t)this.tags.add(e);
                this.id = Jn.createId(t);
            }
            static createId(t) {
                return t.slice().sort().join("-");
            }
            checkAndAdd(t) {
                return !(this.entities.includes(t) || !t.hasAllTags(Array.from(this.tags))) && (this.entities.push(t), this.entityAdded$.notifyAll(t), !0);
            }
            removeEntity(t) {
                const e = this.entities.indexOf(t);
                e > -1 && (this.entities.splice(e, 1), this.entityRemoved$.notifyAll(t));
            }
            getEntities(t) {
                return t && this.entities.sort(t), this.entities;
            }
        }
        class tr {
            constructor(t){
                this._world = t, this._queries = new Map, this._addComponentHandlers = new Map, this._removeComponentHandlers = new Map, this._componentToQueriesIndex = new Map, this._tagQueries = new Map, this._addTagHandlers = new Map, this._removeTagHandlers = new Map, this._tagToQueriesIndex = new Map, this._createAddComponentHandler = (t)=>(e)=>{
                        this.addComponent(t, e);
                    }, this._createRemoveComponentHandler = (t)=>(e)=>{
                        this.removeComponent(t, e);
                    }, this._createAddTagHandler = (t)=>(e)=>{
                        this.addTag(t, e);
                    }, this._createRemoveTagHandler = (t)=>(e)=>{
                        this.removeTag(t, e);
                    };
            }
            createQuery(t) {
                const e = Qn.createId(t);
                if (this._queries.has(e)) return this._queries.get(e);
                const i = new Qn(t);
                this._queries.set(i.id, i);
                for (const e of t){
                    const t = this._componentToQueriesIndex.get(e);
                    t ? t.push(i) : this._componentToQueriesIndex.set(e, [
                        i
                    ]);
                }
                for (const t of this._world.entities)this.addEntity(t);
                return i;
            }
            createTagQuery(t) {
                const e = Jn.createId(t);
                if (this._tagQueries.has(e)) return this._tagQueries.get(e);
                const i = new Jn(t);
                this._tagQueries.set(i.id, i);
                for (const e of t){
                    const t = this._tagToQueriesIndex.get(e);
                    t ? t.push(i) : this._tagToQueriesIndex.set(e, [
                        i
                    ]);
                }
                for (const t of this._world.entities)this.addEntity(t);
                return i;
            }
            addEntity(t) {
                const e = this._addComponentHandlers.get(t), i = this._removeComponentHandlers.get(t), s = null != e ? e : this._createAddComponentHandler(t), n = null != i ? i : this._createRemoveComponentHandler(t);
                this._addComponentHandlers.set(t, s), this._removeComponentHandlers.set(t, n);
                const r = this._addTagHandlers.get(t), o = this._removeTagHandlers.get(t), a = null != r ? r : this._createAddTagHandler(t), h = null != o ? o : this._createRemoveTagHandler(t);
                this._addTagHandlers.set(t, a), this._removeTagHandlers.set(t, h);
                for (const e of this._queries.values())e.checkAndAdd(t);
                for (const e of this._tagQueries.values())e.checkAndAdd(t);
                t.componentAdded$.subscribe(s), t.componentRemoved$.subscribe(n), t.tagAdded$.subscribe(a), t.tagRemoved$.subscribe(h);
            }
            removeEntity(t) {
                const e = this._addComponentHandlers.get(t), i = this._removeComponentHandlers.get(t);
                for (const e of this._queries.values())e.removeEntity(t);
                e && t.componentAdded$.unsubscribe(e), i && t.componentRemoved$.unsubscribe(i);
                const s = this._addTagHandlers.get(t), n = this._removeTagHandlers.get(t);
                for (const e of this._tagQueries.values())e.removeEntity(t);
                s && t.tagAdded$.unsubscribe(s), n && t.tagRemoved$.unsubscribe(n);
            }
            addComponent(t, e) {
                var i;
                const s = null !== (i = this._componentToQueriesIndex.get(e.constructor)) && void 0 !== i ? i : [];
                for (const e of s)e.checkAndAdd(t);
            }
            removeComponent(t, e) {
                var i;
                const s = null !== (i = this._componentToQueriesIndex.get(e.constructor)) && void 0 !== i ? i : [];
                for (const e of s)e.removeEntity(t);
            }
            addTag(t, e) {
                var i;
                const s = null !== (i = this._tagToQueriesIndex.get(e)) && void 0 !== i ? i : [];
                for (const e of s)e.checkAndAdd(t);
            }
            removeTag(t, e) {
                var i;
                const s = null !== (i = this._tagToQueriesIndex.get(e)) && void 0 !== i ? i : [];
                for (const e of s)e.removeEntity(t);
            }
        }
        function er(t) {
            var e, i;
            return !!(null == t ? void 0 : t.prototype) && !!(null === (i = null === (e = null == t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.constructor) || void 0 === i ? void 0 : i.name);
        }
        class ir {
            constructor(t){
                this._world = t, this.systems = [], this.initialized = !1;
            }
            get(t) {
                return this.systems.find((e)=>e instanceof t);
            }
            addSystem(t) {
                let e;
                e = t instanceof jn ? t : new t(this._world), this.systems.push(e), this.systems.sort((t, e)=>t.constructor.priority - e.constructor.priority), this.initialized && e.initialize && e.initialize(this._world, this._world.scene);
            }
            removeSystem(t) {
                N(t, this.systems);
            }
            initialize() {
                if (!this.initialized) {
                    this.initialized = !0;
                    for (const t of this.systems)t.initialize && t.initialize(this._world, this._world.scene);
                }
            }
            updateSystems(t, e, i) {
                const s = this.systems.filter((e)=>e.systemType === t);
                for (const t of s)t.preupdate && t.preupdate(e, i);
                for (const t of s)t.update(i);
                for (const t of s)t.postupdate && t.postupdate(e, i);
            }
            clear() {
                for(let t = this.systems.length - 1; t >= 0; t--)this.removeSystem(this.systems[t]);
            }
        }
        class sr {
            constructor(t){
                this.scene = t, this._logger = k.getInstance(), this.queryManager = new tr(this), this.entityManager = new Kn(this), this.systemManager = new ir(this);
            }
            query(t) {
                return this.queryManager.createQuery(t);
            }
            queryTags(t) {
                return this.queryManager.createTagQuery(t);
            }
            update(t, e) {
                t === $n.Update && this.entityManager.updateEntities(this.scene, e), this.systemManager.updateSystems(t, this.scene, e), this.entityManager.findEntitiesForRemoval(), this.entityManager.processComponentRemovals(), this.entityManager.processEntityRemovals();
            }
            add(t) {
                t instanceof li ? this.entityManager.addEntity(t) : t instanceof jn || er(t) ? this.systemManager.addSystem(t) : this._logger.warn(`Could not add entity/system ${t.constructor.name} to Excalibur!\n\nIf this looks like an Excalibur type, this can be caused by 2 versions of excalibur being included on the page.\n\nCheck your bundler settings to make sure this is not the case! Excalibur has ESM & UMD bundles be sure one 1 is loaded.`);
            }
            get(t) {
                return this.systemManager.get(t);
            }
            remove(t, e = !0) {
                t instanceof li ? this.entityManager.removeEntity(t, e) : t instanceof jn ? this.systemManager.removeSystem(t) : this._logger.warn(`Could not remove entity/system ${t.constructor.name} to Excalibur!\n\nIf this looks like an Excalibur type, this can be caused by 2 versions of excalibur being included on the page.\n\nCheck your bundler settings to make sure this is not the case! Excalibur has ESM & UMD bundles be sure one 1 is loaded.`);
            }
            get entities() {
                return this.entityManager.entities;
            }
            clearEntities() {
                this.entityManager.clear();
            }
            clearSystems() {
                this.systemManager.clear();
            }
        }
        class nr extends jn {
            constructor(t, e){
                super(), this.world = t, this.physics = e, this.systemType = $n.Update, this._physicsConfigDirty = !1, e.$configUpdate.subscribe(()=>this._physicsConfigDirty = !0), this.query = this.world.query([
                    $t,
                    ci
                ]);
            }
            update(t) {
                let e, i;
                const s = this.query.entities, n = this.physics.config.substep;
                for(let r = 0; r < s.length; r++){
                    e = s[r].get($t), i = s[r].get(ci);
                    const o = s[r].get(Ss);
                    if (this._physicsConfigDirty && o && o.updatePhysicsConfig(this.physics.config.bodies), null == o ? void 0 : o.isSleeping) continue;
                    const a = i.acc.clone();
                    (null == o ? void 0 : o.collisionType) === qi.Active && (null == o ? void 0 : o.useGravity) && a.addEqual(this.physics.config.gravity), s[r].parent || this.captureOldTransformWithChildren(s[r]), di.integrate(e, i, a, t / n);
                }
                this._physicsConfigDirty = !1;
            }
            captureOldTransformWithChildren(t) {
                var e;
                null === (e = t.get(Ss)) || void 0 === e || e.captureOldTransform();
                for(let e = 0; e < t.children.length; e++)this.captureOldTransformWithChildren(t.children[e]);
            }
        }
        nr.priority = Zn.Higher;
        class rr {
            constructor(t){
                this.config = t, this.directionMap = new Map, this.distanceMap = new Map;
            }
            solve(t) {
                let e;
                switch(this.preSolve(t), t = t.filter((t)=>!t.isCanceled()), this.config.contactSolveBias){
                    case Yi.HorizontalFirst:
                        e = ns;
                        break;
                    case Yi.VerticalFirst:
                        e = ss;
                        break;
                    default:
                        e = rs;
                }
                t.sort((t, i)=>{
                    const s = this.directionMap.get(t.id), n = this.directionMap.get(i.id), r = this.distanceMap.get(t.id), o = this.distanceMap.get(i.id);
                    return e[s] - e[n] || r - o;
                });
                for (const e of t)this.solvePosition(e), this.solveVelocity(e);
                return this.postSolve(t), t;
            }
            preSolve(t) {
                const e = 1e-4;
                for(let i = 0; i < t.length; i++){
                    const s = t[i];
                    if (Math.abs(s.mtv.x) < e && Math.abs(s.mtv.y) < e) {
                        s.cancel();
                        continue;
                    }
                    const n = D.fromDirection(s.mtv), r = s.mtv.negate(), o = Math.abs(s.info.separation);
                    this.distanceMap.set(s.id, o), this.directionMap.set(s.id, n === D.Left || n === D.Right ? "horizontal" : "vertical"), s.colliderA.events.emit("precollision", new Oe(s.colliderA, s.colliderB, n, r, s)), s.colliderB.events.emit("precollision", new Oe(s.colliderB, s.colliderA, D.getOpposite(n), r.negate(), s));
                }
            }
            postSolve(t) {
                var e, i;
                for(let s = 0; s < t.length; s++){
                    const n = t[s];
                    if (n.isCanceled()) continue;
                    const r = n.colliderA, o = n.colliderB, a = null === (e = r.owner) || void 0 === e ? void 0 : e.get(Ss), h = null === (i = o.owner) || void 0 === i ? void 0 : i.get(Ss);
                    if (a && h && (a.collisionType === qi.Passive || h.collisionType === qi.Passive)) continue;
                    const l = D.fromDirection(n.mtv), c = n.mtv.negate();
                    n.colliderA.events.emit("postcollision", new He(n.colliderA, n.colliderB, l, c, n)), n.colliderB.events.emit("postcollision", new He(n.colliderB, n.colliderA, D.getOpposite(l), c.negate(), n));
                }
            }
            solvePosition(t) {
                var e, i;
                const s = 1e-4;
                if (!t.colliderA.bounds.overlaps(t.colliderB.bounds, s)) return void t.cancel();
                if (Math.abs(t.mtv.x) < s && Math.abs(t.mtv.y) < s) return void t.cancel();
                let n = t.mtv;
                const r = t.colliderA, o = t.colliderB, a = null === (e = r.owner) || void 0 === e ? void 0 : e.get(Ss), h = null === (i = o.owner) || void 0 === i ? void 0 : i.get(Ss);
                if (a && h) {
                    if (a.collisionType === qi.Passive || h.collisionType === qi.Passive) return;
                    a.collisionType === qi.Active && h.collisionType === qi.Active && (n = n.scale(.5)), a.collisionType === qi.Active && (a.globalPos.x -= n.x, a.globalPos.y -= n.y, r.update(a.transform.get())), h.collisionType === qi.Active && (h.globalPos.x += n.x, h.globalPos.y += n.y, o.update(h.transform.get()));
                }
            }
            solveVelocity(t) {
                var e, i;
                if (t.isCanceled()) return;
                const s = t.colliderA, n = t.colliderB, r = null === (e = s.owner) || void 0 === e ? void 0 : e.get(Ss), o = null === (i = n.owner) || void 0 === i ? void 0 : i.get(Ss);
                if (r && o) {
                    if (r.collisionType === qi.Passive || o.collisionType === qi.Passive) return;
                    const e = t.normal, i = e.negate();
                    if (r.collisionType === qi.Active && r.vel.normalize().dot(i) < 0) {
                        const t = e.scale(e.dot(r.vel.negate()));
                        r.vel = r.vel.add(t);
                    }
                    if (o.collisionType === qi.Active && o.vel.normalize().dot(e) < 0) {
                        const t = i.scale(i.dot(o.vel.negate()));
                        o.vel = o.vel.add(t);
                    }
                }
            }
        }
        class or {
            constructor(t, e, i){
                this.point = t, this.local = e, this.contact = i, this.normalImpulse = 0, this.tangentImpulse = 0, this.normalMass = 0, this.tangentMass = 0, this.aToContact = new E(0, 0), this.bToContact = new E(0, 0), this.originalVelocityAndRestitution = 0, this.update();
            }
            update() {
                const t = this.contact.bodyA, e = this.contact.colliderA, i = this.contact.bodyB, s = this.contact.colliderB;
                if (t && i) {
                    const n = this.contact.normal, r = this.contact.tangent;
                    this.aToContact = this.point.sub(e.center), this.bToContact = this.point.sub(s.center);
                    const o = this.aToContact.cross(n), a = this.bToContact.cross(n);
                    this.normalMass = t.inverseMass + i.inverseMass + t.inverseInertia * o * o + i.inverseInertia * a * a;
                    const h = this.aToContact.cross(r), l = this.bToContact.cross(r);
                    this.tangentMass = t.inverseMass + i.inverseMass + t.inverseInertia * h * h + i.inverseInertia * l * l;
                }
                return this;
            }
            getRelativeVelocity() {
                const t = this.contact.bodyA, e = this.contact.bodyB;
                if (t && e) {
                    const i = t.vel.add(E.cross(t.angularVelocity, this.aToContact));
                    return e.vel.add(E.cross(e.angularVelocity, this.bToContact)).sub(i);
                }
                return E.Zero;
            }
        }
        class ar {
            constructor(t){
                this.config = t, this.directionMap = new Map, this.distanceMap = new Map, this.lastFrameContacts = new Map, this.idToContactConstraint = new Map;
            }
            getContactConstraints(t) {
                var e;
                return null !== (e = this.idToContactConstraint.get(t)) && void 0 !== e ? e : [];
            }
            solve(t) {
                let e;
                switch(this.preSolve(t), t = t.filter((t)=>!t.isCanceled()), this.config.contactSolveBias){
                    case Yi.HorizontalFirst:
                        e = ns;
                        break;
                    case Yi.VerticalFirst:
                        e = ss;
                        break;
                    default:
                        e = rs;
                }
                return t.sort((t, i)=>{
                    const s = this.directionMap.get(t.id), n = this.directionMap.get(i.id), r = this.distanceMap.get(t.id), o = this.distanceMap.get(i.id);
                    return e[s] - e[n] || r - o;
                }), this.solveVelocity(t), this.solvePosition(t), this.postSolve(t), t;
            }
            preSolve(t) {
                var e, i, s, n;
                const r = 1e-4;
                for(let i = 0; i < t.length; i++){
                    const s = t[i];
                    if (Math.abs(s.mtv.x) < r && Math.abs(s.mtv.y) < r) {
                        s.cancel();
                        continue;
                    }
                    const n = D.fromDirection(s.mtv), o = Math.abs((null === (e = null == s ? void 0 : s.info) || void 0 === e ? void 0 : e.separation) || 0);
                    this.distanceMap.set(s.id, o), this.directionMap.set(s.id, n === D.Left || n === D.Right ? "horizontal" : "vertical"), s.colliderA.events.emit("precollision", new Oe(s.colliderA, s.colliderB, n, s.mtv, s)), s.colliderA.events.emit("beforecollisionresolve", new Ge(s.colliderA, s.colliderB, n, s.mtv, s)), s.colliderB.events.emit("precollision", new Oe(s.colliderB, s.colliderA, D.getOpposite(n), s.mtv.negate(), s)), s.colliderB.events.emit("beforecollisionresolve", new Ge(s.colliderB, s.colliderA, D.getOpposite(n), s.mtv.negate(), s)), s.matchAwake();
                }
                const o = Array.from(this.idToContactConstraint.keys());
                for(let e = 0; e < t.length; e++){
                    const r = t[e], a = o.indexOf(r.id);
                    a > -1 && o.splice(a, 1);
                    const h = null !== (i = this.idToContactConstraint.get(r.id)) && void 0 !== i ? i : [];
                    let l = 0;
                    const c = r.bodyA, d = r.colliderA, u = r.bodyB, _ = r.colliderB;
                    if (c && u) for(let t = 0; t < r.points.length; t++){
                        const e = r.points[t], i = r.normal, o = r.tangent, a = e.sub(d.center), g = e.sub(_.center), p = a.cross(i), f = g.cross(i), m = c.inverseMass + u.inverseMass + c.inverseInertia * p * p + u.inverseInertia * f * f, v = a.cross(o), x = g.cross(o), w = c.inverseMass + u.inverseMass + c.inverseInertia * v * v + u.inverseInertia * x * x;
                        h[l] && (null === (n = null === (s = h[l]) || void 0 === s ? void 0 : s.point) || void 0 === n ? void 0 : n.squareDistance(e)) < 4 ? (h[l].point = e, h[l].local = r.localPoints[l]) : h[l] = new or(e, r.localPoints[l], r), h[l].aToContact = a, h[l].bToContact = g, h[l].normalMass = 1 / m, h[l].tangentMass = 1 / w;
                        const y = c.bounciness > u.bounciness ? c.bounciness : u.bounciness, b = r.normal.dot(h[l].getRelativeVelocity());
                        h[l].originalVelocityAndRestitution = 0, b < -0.1 && (h[l].originalVelocityAndRestitution = -y * b), l++;
                    }
                    this.idToContactConstraint.set(r.id, h);
                }
                for (const t of o)this.idToContactConstraint.delete(t);
                if (this.config.warmStart) this.warmStart(t);
                else for(let e = 0; e < t.length; e++){
                    const i = t[e], s = this.getContactConstraints(i.id);
                    for (const t of s)t.normalImpulse = 0, t.tangentImpulse = 0;
                }
            }
            postSolve(t) {
                for(let e = 0; e < t.length; e++){
                    const i = t[e], s = i.bodyA, n = i.bodyB;
                    if (s && n) {
                        if (s.collisionType === qi.Passive || n.collisionType === qi.Passive) continue;
                        s.updateMotion(), n.updateMotion();
                    }
                    const r = D.fromDirection(i.mtv);
                    i.colliderA.events.emit("postcollision", new He(i.colliderA, i.colliderB, r, i.mtv, i)), i.colliderA.events.emit("aftercollisionresolve", new Ve(i.colliderA, i.colliderB, r, i.mtv, i)), i.colliderB.events.emit("postcollision", new He(i.colliderB, i.colliderA, D.getOpposite(r), i.mtv.negate(), i)), i.colliderB.events.emit("aftercollisionresolve", new Ve(i.colliderB, i.colliderA, D.getOpposite(r), i.mtv.negate(), i));
                }
                this.lastFrameContacts.clear();
                for(let e = 0; e < t.length; e++){
                    const i = t[e];
                    this.lastFrameContacts.set(i.id, i);
                }
            }
            warmStart(t) {
                var e;
                for(let i = 0; i < t.length; i++){
                    const s = t[i], n = s.bodyA, r = s.bodyB;
                    if (n && r) {
                        const t = null !== (e = this.idToContactConstraint.get(s.id)) && void 0 !== e ? e : [];
                        for (const e of t)if (this.config.warmStart) {
                            const t = s.normal.scale(e.normalImpulse), i = s.tangent.scale(e.tangentImpulse), o = t.add(i);
                            n.applyImpulse(e.point, o.negate()), r.applyImpulse(e.point, o);
                        } else e.normalImpulse = 0, e.tangentImpulse = 0;
                    }
                }
            }
            solvePosition(t) {
                var e;
                for(let i = 0; i < this.config.positionIterations; i++)for(let i = 0; i < t.length; i++){
                    const s = t[i], n = s.bodyA, r = s.bodyB;
                    if (n && r) {
                        if (n.collisionType === qi.Passive || r.collisionType === qi.Passive) continue;
                        const t = null !== (e = this.idToContactConstraint.get(s.id)) && void 0 !== e ? e : [];
                        for (const e of t){
                            const t = s.normal, i = xs.FindContactSeparation(s, e.local), o = -5, a = w(this.config.steeringFactor * (i + this.config.slop), o, 0), h = t.scale(-a * e.normalMass);
                            if (n.collisionType === qi.Active) {
                                const t = h.negate().scale(n.inverseMass);
                                n.limitDegreeOfFreedom.includes(Ts.X) && (t.x = 0), n.limitDegreeOfFreedom.includes(Ts.Y) && (t.y = 0), n.globalPos = n.globalPos.add(t), n.limitDegreeOfFreedom.includes(Ts.Rotation) || (n.rotation -= e.aToContact.cross(h) * n.inverseInertia);
                            }
                            if (r.collisionType === qi.Active) {
                                const t = h.scale(r.inverseMass);
                                r.limitDegreeOfFreedom.includes(Ts.X) && (t.x = 0), r.limitDegreeOfFreedom.includes(Ts.Y) && (t.y = 0), r.globalPos = r.globalPos.add(t), r.limitDegreeOfFreedom.includes(Ts.Rotation) || (r.rotation += e.bToContact.cross(h) * r.inverseInertia);
                            }
                        }
                    }
                }
            }
            solveVelocity(t) {
                var e;
                for(let i = 0; i < this.config.velocityIterations; i++)for(let i = 0; i < t.length; i++){
                    const s = t[i], n = s.bodyA, r = s.bodyB;
                    if (n && r) {
                        if (n.collisionType === qi.Passive || r.collisionType === qi.Passive) continue;
                        const t = Math.min(n.friction, r.friction), i = null !== (e = this.idToContactConstraint.get(s.id)) && void 0 !== e ? e : [];
                        for (const e of i){
                            let i = -e.getRelativeVelocity().dot(s.tangent) * e.tangentMass;
                            const o = t * e.normalImpulse, a = w(e.tangentImpulse + i, -o, o);
                            i = a - e.tangentImpulse, e.tangentImpulse = a;
                            const h = s.tangent.scale(i);
                            n.applyImpulse(e.point, h.negate()), r.applyImpulse(e.point, h);
                        }
                        for (const t of i){
                            const e = t.getRelativeVelocity().dot(s.normal);
                            let i = -t.normalMass * (e - t.originalVelocityAndRestitution);
                            const o = Math.max(t.normalImpulse + i, 0);
                            i = o - t.normalImpulse, t.normalImpulse = o;
                            const a = s.normal.scale(i);
                            n.applyImpulse(t.point, a.negate()), r.applyImpulse(t.point, a);
                        }
                    }
                }
            }
        }
        class hr extends jn {
            get _processor() {
                return this._physics.collisionProcessor;
            }
            constructor(t, e){
                super(), this._physics = e, this.systemType = $n.Update, this._configDirty = !1, this._lastFrameContacts = new Map, this._currentFrameContacts = new Map, this._arcadeSolver = new rr(e.config.arcade), this._realisticSolver = new ar(e.config.realistic), this._physics.$configUpdate.subscribe(()=>this._configDirty = !0), this._trackCollider = (t)=>this._processor.track(t), this._untrackCollider = (t)=>this._processor.untrack(t), this.query = t.query([
                    $t,
                    ci,
                    As
                ]), this.query.entityAdded$.subscribe((t)=>{
                    const e = t.get(As);
                    e.$colliderAdded.subscribe(this._trackCollider), e.$colliderRemoved.subscribe(this._untrackCollider);
                    const i = e.get();
                    i && this._processor.track(i);
                }), this.query.entityRemoved$.subscribe((t)=>{
                    const e = t.get(As), i = e.get();
                    e && i && this._processor.untrack(i);
                }), this._motionSystem = t.get(nr);
            }
            initialize(t, e) {
                this._engine = e.engine;
            }
            update(t) {
                var e, i, s, n;
                if (!this._physics.config.enabled) return;
                let r = [];
                for(let t = 0; t < this.query.entities.length; t++){
                    const i = this.query.entities[t].get(As), s = null == i ? void 0 : i.get();
                    if (i && (null === (e = i.owner) || void 0 === e ? void 0 : e.isActive) && s) {
                        if (i.update(), s instanceof hs) {
                            const t = s.getColliders();
                            s.compositeStrategy || (s.compositeStrategy = this._physics.config.colliders.compositeStrategy), r = r.concat(t);
                        } else r.push(s);
                    }
                }
                this._processor.update(r, t);
                let o = this._processor.broadphase(r, t);
                this._currentFrameContacts.clear();
                let a = [];
                const h = this.getSolver(), l = this._physics.config.substep;
                for(let e = 0; e < l; e++)if (e > 0 && this._motionSystem.update(t), a.length && (o = a.map((t)=>new ji(t.colliderA, t.colliderB))), o.length) {
                    a = this._processor.narrowphase(o, null === (n = null === (s = null === (i = this._engine) || void 0 === i ? void 0 : i.debug) || void 0 === s ? void 0 : s.stats) || void 0 === n ? void 0 : n.currFrame), a = h.solve(a);
                    for (const t of a){
                        if (t.isCanceled()) continue;
                        const e = t.id.indexOf("|");
                        if (e > 0) {
                            const i = t.id.substring(e + 1);
                            this._currentFrameContacts.set(i, t);
                        } else this._currentFrameContacts.set(t.id, t);
                    }
                }
                this.runContactStartEnd(), this._lastFrameContacts.clear(), this._lastFrameContacts = new Map(this._currentFrameContacts);
                for (const t of this.query.entities){
                    const e = t.get(As);
                    e && e.processColliderRemoval();
                }
            }
            postupdate() {
                ps.SeparationPool.done();
            }
            getSolver() {
                return this._configDirty && (this._configDirty = !1, this._arcadeSolver = new rr(this._physics.config.arcade), this._realisticSolver = new ar(this._physics.config.realistic)), this._physics.config.solver === Xi.Realistic ? this._realisticSolver : this._arcadeSolver;
            }
            debug(t) {
                this._processor.debug(t, 0);
            }
            runContactStartEnd() {
                for (const [t, e] of this._currentFrameContacts)if (!this._lastFrameContacts.has(t)) {
                    const t = e.colliderA, i = e.colliderB, s = D.fromDirection(e.mtv), n = D.getOpposite(s);
                    t.events.emit("collisionstart", new qe(t, i, s, e)), t.events.emit("contactstart", new Ne(t, i, s, e)), i.events.emit("collisionstart", new qe(i, t, n, e)), i.events.emit("contactstart", new Ne(i, t, n, e));
                }
                for (const [t, e] of this._lastFrameContacts)if (!this._currentFrameContacts.has(t)) {
                    const t = e.colliderA, i = e.colliderB, s = D.fromDirection(e.mtv), n = D.getOpposite(s);
                    t.events.emit("collisionend", new Xe(t, i, s, e)), t.events.emit("contactend", new We(t, i, s, e)), i.events.emit("collisionend", new Xe(i, t, n, e)), i.events.emit("contactend", new We(i, t, n, e));
                }
            }
        }
        function lr(t, e, i, s) {
            if (t.parent !== e.parent) {
                const i = t.clone(), s = t.globalPos.clone(), n = t.globalScale.clone(), r = t.globalRotation;
                i.parent = e.parent, i.globalPos = s, i.globalScale = n, i.globalRotation = r, t = i;
            }
            let n = e.pos, r = e.scale, o = e.rotation;
            n = e.pos.scale(i).add(t.pos.scale(1 - i)), r = e.scale.scale(i).add(t.scale.scale(1 - i));
            const a = (1 - i) * Math.cos(t.rotation) + i * Math.cos(e.rotation), h = (1 - i) * Math.sin(t.rotation) + i * Math.sin(e.rotation);
            o = Math.atan2(h, a);
            const l = null != s ? s : new qt;
            return l.setTransform(n, o, r), l;
        }
        hr.priority = Zn.Higher;
        class cr extends jn {
            get sortedTransforms() {
                return this._sortedTransforms;
            }
            constructor(t){
                super(), this.world = t, this.systemType = $n.Draw, this._token = 0, this._sortedTransforms = [], this._zHasChanged = !1, this._zIndexUpdate = ()=>{
                    this._zHasChanged = !0;
                }, this._targetInterpolationTransform = new qt, this.query = this.world.query([
                    $t,
                    fe
                ]), this.query.entityAdded$.subscribe((t)=>{
                    const e = t.get($t);
                    this._sortedTransforms.push(e), e.zIndexChanged$.subscribe(this._zIndexUpdate), this._zHasChanged = !0;
                }), this.query.entityRemoved$.subscribe((t)=>{
                    const e = t.get($t);
                    e.zIndexChanged$.unsubscribe(this._zIndexUpdate);
                    const i = this._sortedTransforms.indexOf(e);
                    i > -1 && this._sortedTransforms.splice(i, 1);
                });
            }
            initialize(t, e) {
                this._camera = e.camera, this._engine = e.engine;
            }
            preupdate() {
                this._graphicsContext = this._engine.graphicsContext, this._zHasChanged && (this._sortedTransforms.sort((t, e)=>t.globalZ - e.globalZ), this._zHasChanged = !1);
            }
            update(t) {
                let e;
                this._token++, ue.checkAndClearCache(), this._graphicsContext.save(), this._camera && this._camera.draw(this._graphicsContext);
                for(let i = 0; i < this._sortedTransforms.length; i++){
                    const s = this._sortedTransforms[i], n = s.owner;
                    if (n.hasTag("ex.offscreen")) continue;
                    if (e = n.get(fe), !e.isVisible) continue;
                    e.onPreTransformDraw && e.onPreTransformDraw(this._graphicsContext, t), n.events.emit("pretransformdraw", new Te(this._graphicsContext, t, n)), s.coordPlane === Ht.Screen && this._graphicsContext.restore(), this._graphicsContext.save(), s.coordPlane === Ht.Screen && this._graphicsContext.translate(this._engine.screen.contentArea.left, this._engine.screen.contentArea.top), e.update(t, this._token);
                    const r = n.get(In);
                    if (r) {
                        const t = E.One.sub(r.parallaxFactor), e = this._camera.drawPos.scale(t);
                        this._graphicsContext.translate(e.x, e.y);
                    }
                    this._applyTransform(n), e.material && (this._graphicsContext.material = e.material), e.onPreDraw && e.onPreDraw(this._graphicsContext, t), n.events.emit("predraw", new Ce(this._graphicsContext, t, n)), this._applyOpacity(n), this._drawGraphicsComponent(e, s), e.onPostDraw && e.onPostDraw(this._graphicsContext, t), n.events.emit("postdraw", new Ae(this._graphicsContext, t, n)), this._graphicsContext.restore(), s.coordPlane === Ht.Screen && (this._graphicsContext.save(), this._camera && this._camera.draw(this._graphicsContext)), e.onPostTransformDraw && e.onPostTransformDraw(this._graphicsContext, t), n.events.emit("posttransformdraw", new Se(this._graphicsContext, t, n));
                }
                this._graphicsContext.restore();
            }
            _drawGraphicsComponent(t, e) {
                var i, s;
                if (t.isVisible) {
                    const n = t.flipHorizontal, r = t.flipVertical, o = t.current, a = null !== (i = t.currentOptions) && void 0 !== i ? i : {};
                    if (o) {
                        let i = t.anchor, h = t.offset, l = 1, c = 1;
                        (null == a ? void 0 : a.anchor) && (i = a.anchor), (null == a ? void 0 : a.offset) && (h = a.offset);
                        const d = e.globalScale;
                        l *= o.scale.x * d.x, c *= o.scale.y * d.y;
                        const u = -o.width * i.x + h.x * l, _ = -o.height * i.y + h.y * c, g = o.flipHorizontal, p = o.flipVertical;
                        if ((n || r) && (o.flipHorizontal = n ? !g : g, o.flipVertical = r ? !p : p), null == o || o.draw(this._graphicsContext, u, _), (n || r) && (o.flipHorizontal = g, o.flipVertical = p), (null === (s = this._engine) || void 0 === s ? void 0 : s.isDebug) && this._engine.debug.graphics.showBounds) {
                            const t = I(u, _);
                            if (o instanceof Qt) for (const e of o.members){
                                let i, s = E.Zero;
                                e instanceof nt ? i = e : (i = e.graphic, s = e.offset), o.useAnchor ? null == i || i.localBounds.translate(t.add(s)).draw(this._graphicsContext, this._engine.debug.graphics.boundsColor) : null == i || i.localBounds.translate(s).draw(this._graphicsContext, this._engine.debug.graphics.boundsColor);
                            }
                            else null == o || o.localBounds.translate(t).draw(this._graphicsContext, this._engine.debug.graphics.boundsColor);
                        }
                    }
                }
            }
            _applyTransform(t) {
                const e = t.getAncestors();
                for(let t = 0; t < e.length; t++){
                    const i = e[t], s = null == i ? void 0 : i.get($t), n = null == i ? void 0 : i.get(Ss);
                    if (s) {
                        let t = s.get();
                        if (n && this._engine.fixedUpdateTimestep && n.__oldTransformCaptured && n.enableFixedUpdateInterpolate) {
                            const e = this._engine.currentFrameLagMs / this._engine.fixedUpdateTimestep;
                            t = lr(n.oldTransform, s.get(), e, this._targetInterpolationTransform);
                        }
                        this._graphicsContext.z = s.globalZ, this._graphicsContext.translate(t.pos.x, t.pos.y), this._graphicsContext.scale(t.scale.x, t.scale.y), this._graphicsContext.rotate(t.rotation);
                    }
                }
            }
            _applyOpacity(t) {
                var e;
                const i = t.getAncestors();
                for(let t = 0; t < i.length; t++){
                    const s = i[t], n = null == s ? void 0 : s.get(fe);
                    this._graphicsContext.opacity *= null !== (e = null == n ? void 0 : n.opacity) && void 0 !== e ? e : 1;
                }
            }
        }
        cr.priority = Zn.Average;
        class dr extends jn {
            constructor(t){
                super(), this.world = t, this.systemType = $n.Draw, this.query = this.world.query([
                    $t
                ]);
            }
            initialize(t, e) {
                this._graphicsContext = e.engine.graphicsContext, this._camera = e.camera, this._engine = e.engine, this._collisionSystem = t.systemManager.get(hr);
            }
            update() {
                var t;
                if (!this._engine.isDebug) return;
                const e = this._engine.debug.filter;
                let i, s;
                const n = this._engine.debug.entity;
                let r;
                const o = this._engine.debug.transform;
                let a;
                const h = this._engine.debug.motion;
                let l;
                const c = this._engine.debug.collider, d = this._engine.debug.physics;
                let u;
                const _ = this._engine.debug.graphics;
                let g, p;
                const f = this._engine.debug.body, m = this._engine.debug.camera;
                for(let d = 0; d < this.query.entities.length; d++){
                    const m = this.query.entities[d];
                    if (m.hasTag("offscreen")) continue;
                    if (m instanceof ui) continue;
                    if (e.useFilter) {
                        if (!(0 === e.ids.length || e.ids.includes(m.id))) continue;
                        if (!("" === e.nameQuery || m.name.includes(e.nameQuery))) continue;
                    }
                    let v = E.Zero;
                    const x = I(0, 16);
                    if (i = m.id, s = m.name, r = m.get($t), this._pushCameraTransform(r), this._graphicsContext.save(), r.coordPlane === Ht.Screen && this._graphicsContext.translate(this._engine.screen.contentArea.left, this._engine.screen.contentArea.top), this._graphicsContext.z = o.debugZIndex, this._applyTransform(m), r && ((o.showAll || o.showPosition) && this._graphicsContext.debug.drawPoint(E.Zero, {
                        size: 4,
                        color: o.positionColor
                    }), (o.showAll || o.showPositionLabel) && (this._graphicsContext.debug.drawText(`pos${r.pos.toString(2)}`, v), v = v.add(x)), (o.showAll || o.showZIndex) && (this._graphicsContext.debug.drawText(`z(${r.z.toFixed(1)})`, v), v = v.add(x)), (n.showAll || n.showId) && (this._graphicsContext.debug.drawText(`id(${i}) ${m.parent ? "child of id(" + (null === (t = m.parent) || void 0 === t ? void 0 : t.id) + ")" : ""}`, v), v = v.add(x)), (n.showAll || n.showName) && (this._graphicsContext.debug.drawText(`name(${s})`, v), v = v.add(x)), (o.showAll || o.showRotation) && (this._graphicsContext.drawLine(E.Zero, E.fromAngle(r.rotation).scale(50).add(E.Zero), o.rotationColor, 2), this._graphicsContext.debug.drawText(`rot deg(${C(r.rotation).toFixed(2)})`, v), v = v.add(x)), (o.showAll || o.showScale) && this._graphicsContext.drawLine(E.Zero, r.scale.add(E.Zero), o.scaleColor, 2)), u = m.get(fe), u && (_.showAll || _.showBounds)) u.localBounds.draw(this._graphicsContext, _.boundsColor);
                    if (g = m.get(Rn), g && (g.useTransform || this._graphicsContext.restore(), g.draw(this._graphicsContext, this._engine.debug), g.useTransform || (this._graphicsContext.save(), this._applyTransform(m))), p = m.get(Ss), p && ((f.showAll || f.showCollisionGroup) && (this._graphicsContext.debug.drawText(`collision group(${p.group.name})`, v), v = v.add(x)), (f.showAll || f.showCollisionType) && (this._graphicsContext.debug.drawText(`collision type(${p.collisionType})`, v), v = v.add(x)), (f.showAll || f.showMass) && (this._graphicsContext.debug.drawText(`mass(${p.mass})`, v), v = v.add(x)), (f.showAll || f.showMotion) && (this._graphicsContext.debug.drawText(`motion(${p.sleepMotion})`, v), v = v.add(x)), (f.showAll || f.showSleeping) && (this._graphicsContext.debug.drawText(`sleeping(${p.canSleep ? p.isSleeping : "cant sleep"})`, v), v = v.add(x))), this._graphicsContext.restore(), this._graphicsContext.save(), r.coordPlane === Ht.Screen && this._graphicsContext.translate(this._engine.screen.contentArea.left, this._engine.screen.contentArea.top), this._graphicsContext.z = o.debugZIndex, a = m.get(ci), a && ((h.showAll || h.showVelocity) && (this._graphicsContext.debug.drawText(`vel${a.vel.toString(2)}`, v.add(r.globalPos)), this._graphicsContext.drawLine(r.globalPos, r.globalPos.add(a.vel), h.velocityColor, 2), v = v.add(x)), (h.showAll || h.showAcceleration) && this._graphicsContext.drawLine(r.globalPos, r.globalPos.add(a.acc), h.accelerationColor, 2)), l = m.get(As), l) {
                        const t = l.get();
                        if ((c.showAll || c.showGeometry) && t && t.debug(this._graphicsContext, c.geometryColor, {
                            lineWidth: c.geometryLineWidth,
                            pointSize: c.geometryPointSize
                        }), c.showAll || c.showBounds) {
                            if (t instanceof hs) {
                                const e = t.getColliders();
                                for (const t of e){
                                    const e = t.bounds, i = I(e.left, e.top);
                                    this._graphicsContext.debug.drawRect(i.x, i.y, e.width, e.height, {
                                        color: c.boundsColor
                                    }), (c.showAll || c.showOwner) && this._graphicsContext.debug.drawText(`owner id(${t.owner.id})`, i);
                                }
                                l.bounds.draw(this._graphicsContext, c.boundsColor);
                            } else if (t) {
                                const t = l.bounds, e = I(t.left, t.top);
                                this._graphicsContext.debug.drawRect(e.x, e.y, t.width, t.height, {
                                    color: c.boundsColor
                                }), (c.showAll || c.showOwner) && this._graphicsContext.debug.drawText(`owner id(${l.owner.id})`, e);
                            }
                        }
                    }
                    this._graphicsContext.restore(), this._popCameraTransform(r);
                }
                if (this._graphicsContext.save(), this._camera.draw(this._graphicsContext), (d.showAll || d.showBroadphaseSpacePartitionDebug) && this._collisionSystem.debug(this._graphicsContext), d.showAll || d.showCollisionContacts || d.showCollisionNormals) for (const [t, e] of this._engine.debug.stats.currFrame.physics.contacts){
                    if (d.showAll || d.showCollisionContacts) for (const t of e.points)this._graphicsContext.debug.drawPoint(t, {
                        size: d.contactSize,
                        color: d.collisionContactColor
                    });
                    if (d.showAll || d.showCollisionNormals) for (const t of e.points)this._graphicsContext.debug.drawLine(t, e.normal.scale(30).add(t), {
                        color: d.collisionNormalColor
                    });
                }
                this._graphicsContext.restore(), m && (this._graphicsContext.save(), this._camera.draw(this._graphicsContext), (m.showAll || m.showFocus) && this._graphicsContext.drawCircle(this._camera.pos, 4, m.focusColor), (m.showAll || m.showZoom) && this._graphicsContext.debug.drawText(`zoom(${this._camera.zoom})`, this._camera.pos), this._graphicsContext.restore()), this._graphicsContext.flush();
            }
            postupdate(t, e) {
                this._engine.isDebug && (this._graphicsContext.save(), this._camera && this._camera.draw(this._graphicsContext), ys.flush(this._graphicsContext), this._graphicsContext.restore());
            }
            _applyTransform(t) {
                const e = t.getAncestors();
                for (const t of e){
                    const e = null == t ? void 0 : t.get($t);
                    e && (this._graphicsContext.translate(e.pos.x, e.pos.y), this._graphicsContext.scale(e.scale.x, e.scale.y), this._graphicsContext.rotate(e.rotation));
                }
            }
            _pushCameraTransform(t) {
                t.coordPlane === Ht.World && (this._graphicsContext.save(), this._camera && this._camera.draw(this._graphicsContext));
            }
            _popCameraTransform(t) {
                t.coordPlane === Ht.World && this._graphicsContext.restore();
            }
        }
        dr.priority = Zn.Lowest;
        class ur {
            constructor(t, e){
                this.object = t, this.id = -1, this.cells = [], this.hasZeroBounds = !1, this.gridSize = e, this.bounds = t.bounds, this.hasZeroBounds = this.bounds.hasZeroDimensions(), this.leftX = Math.floor(this.bounds.left / this.gridSize), this.rightX = Math.floor(this.bounds.right / this.gridSize), this.bottomY = Math.floor(this.bounds.bottom / this.gridSize), this.topY = Math.floor(this.bounds.top / this.gridSize);
            }
            hasChanged() {
                const t = this.object.bounds, e = Math.floor(t.left / this.gridSize), i = Math.floor(t.right / this.gridSize), s = Math.floor(t.bottom / this.gridSize), n = Math.floor(t.top / this.gridSize);
                return this.leftX !== e || this.rightX !== i || this.bottomY !== s || this.topY !== n;
            }
            clear() {
                for (const t of this.cells){
                    const e = t.proxies.indexOf(this);
                    e > -1 && t.proxies.splice(e, 1);
                }
            }
            updateBounds() {
                this.bounds = this.object.bounds;
            }
            update() {
                this.bounds = this.object.bounds, this.leftX = Math.floor(this.bounds.left / this.gridSize), this.rightX = Math.floor(this.bounds.right / this.gridSize), this.bottomY = Math.floor(this.bounds.bottom / this.gridSize), this.topY = Math.floor(this.bounds.top / this.gridSize), this.hasZeroBounds = this.object.bounds.hasZeroDimensions();
            }
        }
        class _r {
            constructor(){
                this.proxies = [];
            }
            configure(t, e) {
                this.x = t, this.y = e, this.key = _r.calculateHashKey(t, e);
            }
            static calculateHashKey(t, e) {
                return `${t}+${e}`;
            }
        }
        class gr {
            constructor(t){
                this.bounds = new U, this._hashGridCellPool = new j(()=>new _r, (t)=>(t.configure(0, 0), t.proxies.length = 0, t), 1e3), this.gridSize = t.size, this.sparseHashGrid = new Map, this.objectToProxy = new Map, t.proxyFactory ? this._buildProxy = (e)=>t.proxyFactory(e, this.gridSize) : this._buildProxy = (t)=>new ur(t, this.gridSize);
            }
            query(t) {
                const e = new Set;
                if (t instanceof U) {
                    const i = t, s = Math.floor(i.left / this.gridSize), n = Math.floor(i.right / this.gridSize), r = Math.floor(i.bottom / this.gridSize), o = Math.floor(i.top / this.gridSize);
                    for(let t = s; t <= n; t++)for(let s = o; s <= r; s++){
                        const n = _r.calculateHashKey(t, s), r = this.sparseHashGrid.get(n);
                        if (r) for(let t = 0; t < r.proxies.length; t++)r.proxies[t].updateBounds(), r.proxies[t].bounds.intersect(i) && e.add(r.proxies[t].object);
                    }
                } else {
                    const i = t, s = _r.calculateHashKey(Math.floor(i.x / this.gridSize), Math.floor(i.y / this.gridSize)), n = this.sparseHashGrid.get(s);
                    if (n) for(let t = 0; t < n.proxies.length; t++)n.proxies[t].updateBounds(), n.proxies[t].bounds.contains(i) && e.add(n.proxies[t].object);
                }
                return Array.from(e);
            }
            get(t, e) {
                const i = _r.calculateHashKey(t, e);
                return this.sparseHashGrid.get(i);
            }
            _insert(t, e, i) {
                const s = _r.calculateHashKey(t, e);
                let n = this.sparseHashGrid.get(s);
                n || (n = this._hashGridCellPool.rent(), n.configure(t, e), this.sparseHashGrid.set(n.key, n)), n.proxies.push(i), i.cells.push(n), this.bounds.combine(i.bounds, this.bounds);
            }
            _remove(t, e, i) {
                const s = _r.calculateHashKey(t, e), n = this.sparseHashGrid.get(s);
                if (n) {
                    const t = n.proxies.indexOf(i);
                    t > -1 && n.proxies.splice(t, 1);
                    const e = i.cells.indexOf(n);
                    e > -1 && i.cells.splice(e, 1), 0 === n.proxies.length && (this._hashGridCellPool.return(n), this.sparseHashGrid.delete(s));
                }
            }
            track(t) {
                const e = this._buildProxy(t);
                this.objectToProxy.set(t, e);
                for(let t = e.leftX; t <= e.rightX; t++)for(let i = e.topY; i <= e.bottomY; i++)this._insert(t, i, e);
            }
            untrack(t) {
                const e = this.objectToProxy.get(t);
                e && (e.clear(), this.objectToProxy.delete(t));
            }
            update(t) {
                let e = 0;
                for (const i of t){
                    const t = this.objectToProxy.get(i);
                    if (t && t.hasChanged()) {
                        for(let e = t.leftX; e <= t.rightX; e++)for(let i = t.topY; i <= t.bottomY; i++)this._remove(e, i, t);
                        t.update();
                        for(let e = t.leftX; e <= t.rightX; e++)for(let i = t.topY; i <= t.bottomY; i++)this._insert(e, i, t);
                        e++;
                    }
                }
                return e;
            }
            debug(t, e) {
                const i = R.Transparent, s = R.White;
                for (const e of this.sparseHashGrid.values())t.drawRectangle(I(e.x * this.gridSize, e.y * this.gridSize), this.gridSize, this.gridSize, i, s, 2);
            }
        }
        class pr extends jn {
            constructor(t){
                super(), this.world = t, this.systemType = $n.Update, this._graphicsHashGrid = new gr({
                    size: 100
                }), this._graphics = [], this._entityToPointer = new Map, this._pointerEventDispatcher = new Dn, this.overrideUseColliderShape = !1, this.overrideUseGraphicsBounds = !1, this._sortedTransforms = [], this._sortedEntities = [], this._zHasChanged = !1, this._zIndexUpdate = ()=>{
                    this._zHasChanged = !0;
                }, this.query = this.world.query([
                    $t,
                    Is
                ]), this.query.entityAdded$.subscribe((t)=>{
                    const e = t.get($t), i = t.get(Is);
                    this._pointerEventDispatcher.addObject(t, (t)=>{
                        if (i && i.localBounds) return i.localBounds.transform(e.get().matrix).contains(e.coordPlane === Ht.World ? t.worldPos : t.screenPos);
                        return !1;
                    }, ()=>t.isActive), this._entityToPointer.set(t, i);
                    const s = t.get(fe);
                    s && (this._graphics.push(s), this._graphicsHashGrid.track(s)), this._sortedTransforms.push(e), this._sortedEntities.push(e.owner), e.zIndexChanged$.subscribe(this._zIndexUpdate), this._zHasChanged = !0;
                }), this.query.entityRemoved$.subscribe((t)=>{
                    this._pointerEventDispatcher.removeObject(t);
                    const e = t.get($t);
                    this._entityToPointer.delete(t);
                    const i = t.get(fe);
                    if (i) {
                        const t = this._graphics.indexOf(i);
                        t > -1 && this._graphics.splice(t, 1), this._graphicsHashGrid.untrack(i);
                    }
                    e.zIndexChanged$.unsubscribe(this._zIndexUpdate);
                    const s = this._sortedTransforms.indexOf(e);
                    s > -1 && (this._sortedTransforms.splice(s, 1), this._sortedEntities.splice(s, 1));
                });
            }
            initialize(t, e) {
                this._engine = e.engine, this._scene = e;
            }
            preupdate() {
                this._scene.camera.hasChanged() && this._scene.camera.updateTransform(this._scene.camera.pos), this._receivers = [
                    this._engine.input.pointers,
                    this._scene.input.pointers
                ], this._engineReceiver = this._engine.input.pointers, this._zHasChanged && (this._sortedTransforms.sort((t, e)=>e.z - t.z), this._sortedEntities = this._sortedTransforms.map((t)=>t.owner), this._zHasChanged = !1);
            }
            update() {
                this._graphicsHashGrid.update(this._graphics);
                for (const [t, e] of this._engineReceiver.currentFramePointerCoords.entries()){
                    const i = this._scene.physics.query(e.worldPos);
                    for(let e = 0; e < i.length; e++){
                        const s = i[e], n = this._entityToPointer.get(s.owner);
                        n && (n.useColliderShape || this.overrideUseColliderShape) && this._pointerEventDispatcher.addPointerToObject(s.owner, t);
                    }
                    const s = this._graphicsHashGrid.query(e.worldPos);
                    for(let e = 0; e < s.length; e++){
                        const i = s[e], n = this._entityToPointer.get(i.owner);
                        n && (n.useGraphicsBounds || this.overrideUseGraphicsBounds) && this._pointerEventDispatcher.addPointerToObject(i.owner, t);
                    }
                }
                this._pointerEventDispatcher.processPointerToObject(this._engineReceiver, this._sortedEntities), this._pointerEventDispatcher.dispatchEvents(this._engineReceiver, this._sortedEntities), this._receivers.forEach((t)=>t.update()), this._pointerEventDispatcher.clear(), this._receivers.forEach((t)=>t.clear());
            }
        }
        pr.priority = Zn.Higher;
        class fr extends jn {
            constructor(t){
                super(), this.world = t, this.systemType = $n.Update, this._actions = [], this.query = this.world.query([
                    bn
                ]), this.query.entityAdded$.subscribe((t)=>this._actions.push(t.get(bn))), this.query.entityRemoved$.subscribe((t)=>{
                    const e = t.get(bn), i = this._actions.indexOf(e);
                    i > -1 && this._actions.splice(i, 1);
                });
            }
            update(t) {
                for(let e = 0; e < this._actions.length; e++)this._actions[e].update(t);
            }
        }
        fr.priority = Zn.Higher;
        class mr extends Yt {
            constructor(t){
                super(), this.elevation = 0, this.columns = t.columns, this.rows = t.rows, this.tileWidth = t.tileWidth, this.tileHeight = t.tileHeight;
            }
        }
        class vr extends jn {
            constructor(t){
                super(), this.world = t, this.systemType = $n.Update, this.query = this.world.query([
                    $t,
                    mr
                ]);
            }
            update() {
                let t, e;
                for(let i = 0; i < this.query.entities.length; i++){
                    const s = this.query.entities[i];
                    t = s.get($t), e = s.get(mr);
                    const n = Math.max(e.columns * e.tileWidth, e.rows * e.tileHeight) * e.elevation + t.pos.y;
                    t.z = n;
                }
            }
        }
        vr.priority = Zn.Lower;
        class xr extends jn {
            constructor(t){
                super(), this.world = t, this.systemType = $n.Draw, this.query = this.world.query([
                    $t,
                    fe
                ]);
            }
            initialize(t, e) {
                this._camera = e.camera, this._screen = e.engine.screen;
            }
            update() {
                let t, e, i;
                this._worldBounds = this._screen.getWorldBounds();
                for(let s = 0; s < this.query.entities.length; s++){
                    const n = this.query.entities[s];
                    let r;
                    if (e = n.get(fe), t = n.get($t), i = n.get(In), i) {
                        const t = E.One.sub(i.parallaxFactor);
                        r = this._camera.pos.scale(t);
                    }
                    const o = this._isOffscreen(t, e, r);
                    o && !n.hasTag("ex.offscreen") && (n.events.emit("exitviewport", new je(n)), n.addTag("ex.offscreen")), !o && n.hasTag("ex.offscreen") && (n.events.emit("enterviewport", new Ke(n)), n.removeTag("ex.offscreen"));
                }
            }
            _isOffscreen(t, e, i) {
                if (e.forceOnScreen) return !1;
                if (t.coordPlane === Ht.World) {
                    let s = e.localBounds;
                    i && (s = s.translate(i));
                    const n = s.transform(t.get().matrix);
                    return !this._worldBounds.overlaps(n);
                }
                return !1;
            }
        }
        xr.priority = Zn.Higher;
        class wr extends ur {
            constructor(t, e){
                var i, s;
                super(t, e), this.collider = t, this.id = -1, this.hasZeroBounds = !1, this.cells = [], this.gridSize = e;
                const n = t.bounds;
                this.hasZeroBounds = n.hasZeroDimensions(), this.leftX = Math.floor(n.left / this.gridSize), this.rightX = Math.floor(n.right / this.gridSize), this.bottomY = Math.floor(n.bottom / this.gridSize), this.topY = Math.floor(n.top / this.gridSize), this.owner = t.owner, this.body = null === (i = this.owner) || void 0 === i ? void 0 : i.get(Ss), this.collisionType = null !== (s = this.body.collisionType) && void 0 !== s ? s : qi.PreventCollision;
            }
            update() {
                var t, e;
                super.update(), this.body = null === (t = this.owner) || void 0 === t ? void 0 : t.get(Ss), this.collisionType = null !== (e = this.body.collisionType) && void 0 !== e ? e : qi.PreventCollision, this.hasZeroBounds = this.collider.localBounds.hasZeroDimensions();
            }
        }
        class yr {
            constructor(t){
                this._pairs = new Set, this._nonPairs = new Set, this._pairPool = new Lt(()=>new ji({
                        id: u("collider", 0)
                    }, {
                        id: u("collider", 0)
                    }), (t)=>(t.colliderA = null, t.colliderB = null, t), 200), this.gridSize = t.size, this.hashGrid = new gr({
                    size: this.gridSize,
                    proxyFactory: (t, e)=>new wr(t, e)
                }), this._pairPool.disableWarnings = !0;
            }
            getColliders() {
                return Array.from(this.hashGrid.objectToProxy.keys());
            }
            query(t) {
                return this.hashGrid.query(t);
            }
            rayCast(t, e) {
                var i, s, n;
                const r = [], o = null !== (i = null == e ? void 0 : e.maxDistance) && void 0 !== i ? i : 1 / 0, a = null == e ? void 0 : e.collisionGroup, h = a ? a.category : null !== (s = null == e ? void 0 : e.collisionMask) && void 0 !== s ? s : $i.All.category, l = null !== (n = null == e ? void 0 : e.searchAllColliders) && void 0 !== n && n, c = t.dir.normalize(), d = c.y / c.x, u = c.x / c.y, _ = Math.sqrt(1 + d * d) * this.gridSize, g = Math.sqrt(1 + u * u) * this.gridSize, p = t.pos.x / this.gridSize, f = t.pos.y / this.gridSize, m = I(1, 1);
                let v = ~~p, x = ~~f, w = 0, y = 0;
                c.x < 0 ? (m.x = -1, w = (p - v) * _) : (m.x = 1, w = (v + 1 - p) * _), c.y < 0 ? (m.y = -1, y = (f - x) * g) : (m.y = 1, y = (x + 1 - f) * g);
                const b = new Set;
                let C = !1, A = 9999;
                for(; !C && A > 0 && (A--, this.hashGrid.bounds.contains(I(v * this.gridSize, x * this.gridSize)));){
                    const i = _r.calculateHashKey(v, x), s = this.hashGrid.sparseHashGrid.get(i);
                    if (s) {
                        const i = [];
                        for(let n = 0; n < s.proxies.length; n++){
                            const r = s.proxies[n];
                            if (!b.has(r.collider.id.value)) {
                                if (b.add(r.collider.id.value), (null == e ? void 0 : e.ignoreCollisionGroupAll) && r.body.group === $i.All) continue;
                                const s = !!(h & r.body.group.category);
                                if (r.body.group && !s) continue;
                                const n = r.collider.rayCast(t, o);
                                n && i.push(n);
                            }
                        }
                        i.sort((t, e)=>t.distance - e.distance);
                        for(let t = 0; t < i.length; t++){
                            const s = i[t];
                            if (null == e ? void 0 : e.filter) {
                                if (e.filter(s) && (r.push(s), !l)) {
                                    C = !0;
                                    break;
                                }
                            } else if (r.push(s), !l) {
                                C = !0;
                                break;
                            }
                        }
                    }
                    w < y ? (v += m.x, w += _) : (x += m.y, y += g);
                }
                return r.sort((t, e)=>t.distance - e.distance), !l && r.length ? [
                    r[0]
                ] : r;
            }
            track(t) {
                let e = [
                    t
                ];
                if (t instanceof hs) {
                    const i = t.getColliders();
                    for (const e of i)e.owner = t.owner;
                    e = i;
                }
                for (const t of e)this.hashGrid.track(t);
            }
            untrack(t) {
                let e = [
                    t
                ];
                t instanceof hs && (e = t.getColliders());
                for (const t of e)this.hashGrid.untrack(t);
            }
            _canCollide(t, e) {
                return t.collider.id !== e.collider.id && (!t.owner || !e.owner || t.owner.id !== e.owner.id) && !t.hasZeroBounds && !e.hasZeroBounds && !!t.body.group.canCollide(e.body.group) && (t.collisionType !== qi.Fixed || e.collisionType !== qi.Fixed) && t.collisionType !== qi.PreventCollision && e.collisionType !== qi.PreventCollision && !(!t.owner.isActive || !e.owner.isActive);
            }
            broadphase(t, e) {
                const i = [];
                this._pairs.clear(), this._nonPairs.clear();
                let s = 0;
                for (const t of this.hashGrid.objectToProxy.values())if (t.id = s++, t.owner.isActive && t.collisionType !== qi.PreventCollision) for(let e = 0; e < t.cells.length; e++){
                    const s = t.cells[e];
                    for(let e = 0; e < s.proxies.length; e++){
                        const n = s.proxies[e];
                        if (n.id === t.id) continue;
                        const r = ji.calculatePairHash(t.collider.id, n.collider.id);
                        if (!this._nonPairs.has(r)) {
                            if (!this._pairs.has(r) && this._canCollide(t, n) && t.object.bounds.overlaps(n.object.bounds)) {
                                const e = this._pairPool.get();
                                e.colliderA = t.collider, e.colliderB = n.collider, e.id = r, this._pairs.add(r), i.push(e);
                            } else this._nonPairs.add(r);
                        }
                    }
                }
                return i;
            }
            narrowphase(t, e) {
                const i = [];
                for(let s = 0; s < t.length; s++){
                    const n = t[s].collide();
                    for(let t = 0; t < n.length; t++){
                        const s = n[t];
                        i.push(s), e && e.physics.contacts.set(s.id, s);
                    }
                }
                return this._pairPool.done(), e && (e.physics.collisions += i.length), i;
            }
            update(t, e) {
                return this.hashGrid.update(t);
            }
            debug(t, e) {
                this.hashGrid.debug(t, e);
            }
        }
        class br {
            get config() {
                var t, e;
                return t = this._config, e = (t)=>{
                    this.$configUpdate.notifyAll(t);
                }, t && void 0 === t.__isProxy ? new Proxy(t, st([], e, t)) : t;
            }
            set config(t) {
                this._config = t, this.$configUpdate.notifyAll(t);
            }
            get collisionProcessor() {
                if (this._configDirty) {
                    this._configDirty = !1;
                    const t = this._collisionProcessor.getColliders();
                    this._config.spatialPartition === os.SparseHashGrid ? this._collisionProcessor = new yr(this._config.sparseHashGrid) : this._collisionProcessor = new es(this._config);
                    for (const e of t)this._collisionProcessor.track(e);
                }
                return this._collisionProcessor;
            }
            constructor(t){
                this.$configUpdate = new Zt, this._configDirty = !1, this.config = t, this.$configUpdate.subscribe((t)=>{
                    this._configDirty = !0, Ss.updateDefaultPhysicsConfig(t.bodies);
                }), this._config.spatialPartition === os.SparseHashGrid ? this._collisionProcessor = new yr(this._config.sparseHashGrid) : this._collisionProcessor = new es(this._config);
            }
            rayCast(t, e) {
                return this.collisionProcessor.rayCast(t, e);
            }
            query(t) {
                return this._collisionProcessor.query(t);
            }
        }
        class Cr {
            constructor(){
                this.events = new g, this.enabled = !1, this.supported = !!navigator.getGamepads, this._gamePadTimeStamps = [
                    0,
                    0,
                    0,
                    0
                ], this._oldPads = [], this._pads = [], this._initSuccess = !1, this._navigator = navigator, this._minimumConfiguration = null, this._enabled = !0;
            }
            init() {
                this.supported && (this._initSuccess || (this._oldPads = this._clonePads(this._navigator.getGamepads()), this._oldPads.length && this._oldPads[0] && (this._initSuccess = !0)));
            }
            toggleEnabled(t) {
                this._enabled = t;
            }
            setMinimumGamepadConfiguration(t) {
                this._enableAndUpdate(), this._minimumConfiguration = t;
            }
            _enableAndUpdate() {
                this.enabled || (this.enabled = !0, this.update());
            }
            _isGamepadValid(t) {
                if (!this._minimumConfiguration) return !0;
                if (!t) return !1;
                const e = t.axes.filter((t)=>true).length, i = t.buttons.filter((t)=>true).length;
                return e >= this._minimumConfiguration.axis && i >= this._minimumConfiguration.buttons && t.connected;
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this._enableAndUpdate(), this.events.on(t, e);
            }
            once(t, e) {
                return this._enableAndUpdate(), this.events.once(t, e);
            }
            off(t, e) {
                this._enableAndUpdate(), this.events.off(t, e);
            }
            update() {
                var t, e;
                if (!this.enabled || !this.supported) return;
                if (!this._enabled) return;
                this.init();
                const i = this._navigator.getGamepads();
                for(let s = 0; s < i.length; s++){
                    if (!i[s]) {
                        const t = this.at(s);
                        t.connected && (this.events.emit("disconnect", new Be(s, t)), t.events.unpipe(this.events)), t.connected = !1;
                        continue;
                    }
                    {
                        const t = this.at(s);
                        !this.at(s).connected && this._isGamepadValid(i[s]) && (t.events.pipe(this.events), this.events.emit("connect", new De(s, this.at(s)))), this.at(s).connected = !0;
                    }
                    if (this.at(s).update(), i[s].timestamp && i[s].timestamp === this._gamePadTimeStamps[s]) continue;
                    this._gamePadTimeStamps[s] = i[s].timestamp, this.at(s).navigatorGamepad = i[s];
                    const n = i[s];
                    if (n) {
                        for(let e = 0; e < n.buttons.length; e++){
                            const i = n.buttons[e], r = null == i ? void 0 : i.value;
                            r !== (null === (t = this._oldPads[s]) || void 0 === t ? void 0 : t.getButton(e)) && ((null == i ? void 0 : i.pressed) ? (this.at(s).updateButton(e, r), this.at(s).events.emit("button", new ke(e in Tr ? e : Tr.Unknown, e, r, this.at(s)))) : this.at(s).updateButton(e, 0));
                        }
                        for(let t = 0; t < n.axes.length; t++){
                            const i = n.axes[t];
                            i !== (null === (e = this._oldPads[s]) || void 0 === e ? void 0 : e.getAxes(t)) && (this.at(s).updateAxes(t, i), this.at(s).events.emit("axis", new Le(t, i, this.at(s))));
                        }
                    }
                    this._oldPads[s] = this._clonePad(i[s]);
                }
            }
            at(t) {
                if (this._enableAndUpdate(), t >= this._pads.length) for(let e = this._pads.length - 1, i = t; e < i; e++)this._pads.push(new Ar), this._oldPads.push(new Ar);
                return this._pads[t];
            }
            getValidGamepads() {
                this._enableAndUpdate();
                const t = [];
                for(let e = 0; e < this._pads.length; e++)this._isGamepadValid(this.at(e).navigatorGamepad) && this.at(e).connected && t.push(this.at(e));
                return t;
            }
            count() {
                return this._pads.filter((t)=>t.connected).length;
            }
            _clonePads(t) {
                const e = [];
                for(let i = 0, s = t.length; i < s; i++)e.push(this._clonePad(t[i]));
                return e;
            }
            _clonePad(t) {
                let e, i;
                const s = new Ar;
                if (!t) return s;
                for(e = 0, i = t.buttons.length; e < i; e++)t.buttons[e] && s.updateButton(e, t.buttons[e].value);
                for(e = 0, i = t.axes.length; e < i; e++)s.updateAxes(e, t.axes[e]);
                return s;
            }
        }
        Cr.MinAxisMoveThreshold = .05;
        class Ar {
            constructor(){
                this.events = new g, this.connected = !1, this._axes = new Array(4), this._buttons = new Array(16), this._buttonsUp = new Array(16), this._buttonsDown = new Array(16);
                for(let t = 0; t < this._buttons.length; t++)this._buttons[t] = 0;
                for(let t = 0; t < this._axes.length; t++)this._axes[t] = 0;
            }
            update() {
                this._buttonsDown = new Array(16), this._buttonsUp = new Array(16);
            }
            isButtonPressed(t, e = 1) {
                return this._buttons[t] >= e;
            }
            isButtonHeld(t, e = 1) {
                return this._buttons[t] >= e;
            }
            wasButtonPressed(t, e = 1) {
                return this._buttonsDown[t] >= e;
            }
            wasButtonReleased(t) {
                return Boolean(this._buttonsUp[t]);
            }
            getButton(t) {
                return this._buttons[t];
            }
            getAxes(t) {
                const e = this._axes[t];
                return Math.abs(e) < Cr.MinAxisMoveThreshold ? 0 : e;
            }
            updateButton(t, e) {
                0 === e && this._buttons[t] ? this._buttonsUp[t] = 1 : this._buttonsDown[t] = e, this._buttons[t] = e;
            }
            updateAxes(t, e) {
                this._axes[t] = e;
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
        }
        var Tr, Sr, Pr;
        !function(t) {
            t[t.Unknown = -1] = "Unknown", t[t.Face1 = 0] = "Face1", t[t.Face2 = 1] = "Face2", t[t.Face3 = 2] = "Face3", t[t.Face4 = 3] = "Face4", t[t.LeftBumper = 4] = "LeftBumper", t[t.RightBumper = 5] = "RightBumper", t[t.LeftTrigger = 6] = "LeftTrigger", t[t.RightTrigger = 7] = "RightTrigger", t[t.Select = 8] = "Select", t[t.Start = 9] = "Start", t[t.LeftStick = 10] = "LeftStick", t[t.RightStick = 11] = "RightStick", t[t.DpadUp = 12] = "DpadUp", t[t.DpadDown = 13] = "DpadDown", t[t.DpadLeft = 14] = "DpadLeft", t[t.DpadRight = 15] = "DpadRight", t[t.CenterButton = 16] = "CenterButton", t[t.MiscButton1 = 17] = "MiscButton1";
        }(Tr || (Tr = {})), function(t) {
            t[t.LeftStickX = 0] = "LeftStickX", t[t.LeftStickY = 1] = "LeftStickY", t[t.RightStickX = 2] = "RightStickX", t[t.RightStickY = 3] = "RightStickY";
        }(Sr || (Sr = {}));
        class Er {
            constructor(t){
                this.inputs = t, this._handlers = new Map;
            }
            execute() {
                for (const [t, e] of this._handlers.entries()){
                    const i = t(this.inputs);
                    i && e(i);
                }
            }
            on(t, e) {
                this._handlers.set(t, e);
            }
        }
        function Ir() {
            try {
                const t = ()=>{};
                window.top.addEventListener("blur", t), window.top.removeEventListener("blur", t);
            } catch (t) {
                return !0;
            }
            return !1;
        }
        !function(t) {
            t.Backquote = "Backquote", t.Backslash = "Backslash", t.BracketLeft = "BracketLeft", t.BracketRight = "BracketRight", t.Comma = "Comma", t.Key0 = "Digit0", t.Key1 = "Digit1", t.Key2 = "Digit2", t.Key3 = "Digit3", t.Key4 = "Digit4", t.Key5 = "Digit5", t.Key6 = "Digit6", t.Key7 = "Digit7", t.Key8 = "Digit8", t.Key9 = "Digit9", t.Digit0 = "Digit0", t.Digit1 = "Digit1", t.Digit2 = "Digit2", t.Digit3 = "Digit3", t.Digit4 = "Digit4", t.Digit5 = "Digit5", t.Digit6 = "Digit6", t.Digit7 = "Digit7", t.Digit8 = "Digit8", t.Digit9 = "Digit9", t.Equal = "Equal", t.IntlBackslash = "IntlBackslash", t.IntlRo = "IntlRo", t.IntlYen = "IntlYen", t.A = "KeyA", t.B = "KeyB", t.C = "KeyC", t.D = "KeyD", t.E = "KeyE", t.F = "KeyF", t.G = "KeyG", t.H = "KeyH", t.I = "KeyI", t.J = "KeyJ", t.K = "KeyK", t.L = "KeyL", t.M = "KeyM", t.N = "KeyN", t.O = "KeyO", t.P = "KeyP", t.Q = "KeyQ", t.R = "KeyR", t.S = "KeyS", t.T = "KeyT", t.U = "KeyU", t.V = "KeyV", t.W = "KeyW", t.X = "KeyX", t.Y = "KeyY", t.Z = "KeyZ", t.KeyA = "KeyA", t.KeyB = "KeyB", t.KeyC = "KeyC", t.KeyD = "KeyD", t.KeyE = "KeyE", t.KeyF = "KeyF", t.KeyG = "KeyG", t.KeyH = "KeyH", t.KeyI = "KeyI", t.KeyJ = "KeyJ", t.KeyK = "KeyK", t.KeyL = "KeyL", t.KeyM = "KeyM", t.KeyN = "KeyN", t.KeyO = "KeyO", t.KeyP = "KeyP", t.KeyQ = "KeyQ", t.KeyR = "KeyR", t.KeyS = "KeyS", t.KeyT = "KeyT", t.KeyU = "KeyU", t.KeyV = "KeyV", t.KeyW = "KeyW", t.KeyX = "KeyX", t.KeyY = "KeyY", t.KeyZ = "KeyZ", t.Minus = "Minus", t.Period = "Period", t.Quote = "Quote", t.Semicolon = "Semicolon", t.Slash = "Slash", t.AltLeft = "AltLeft", t.AltRight = "AltRight", t.Alt = "Alt", t.AltGraph = "AltGraph", t.Backspace = "Backspace", t.CapsLock = "CapsLock", t.ContextMenu = "ContextMenu", t.ControlLeft = "ControlLeft", t.ControlRight = "ControlRight", t.Enter = "Enter", t.MetaLeft = "MetaLeft", t.MetaRight = "MetaRight", t.ShiftLeft = "ShiftLeft", t.ShiftRight = "ShiftRight", t.Space = "Space", t.Tab = "Tab", t.Convert = "Convert", t.KanaMode = "KanaMode", t.NonConvert = "NonConvert", t.Delete = "Delete", t.End = "End", t.Help = "Help", t.Home = "Home", t.Insert = "Insert", t.PageDown = "PageDown", t.PageUp = "PageUp", t.Up = "ArrowUp", t.Down = "ArrowDown", t.Left = "ArrowLeft", t.Right = "ArrowRight", t.ArrowUp = "ArrowUp", t.ArrowDown = "ArrowDown", t.ArrowLeft = "ArrowLeft", t.ArrowRight = "ArrowRight", t.NumLock = "NumLock", t.Numpad0 = "Numpad0", t.Numpad1 = "Numpad1", t.Numpad2 = "Numpad2", t.Numpad3 = "Numpad3", t.Numpad4 = "Numpad4", t.Numpad5 = "Numpad5", t.Numpad6 = "Numpad6", t.Numpad7 = "Numpad7", t.Numpad8 = "Numpad8", t.Numpad9 = "Numpad9", t.Num0 = "Numpad0", t.Num1 = "Numpad1", t.Num2 = "Numpad2", t.Num3 = "Numpad3", t.Num4 = "Numpad4", t.Num5 = "Numpad5", t.Num6 = "Numpad6", t.Num7 = "Numpad7", t.Num8 = "Numpad8", t.Num9 = "Numpad9", t.NumAdd = "NumpadAdd", t.NumpadAdd = "NumpadAdd", t.NumDecimal = "NumpadDecimal", t.NumpadDecimal = "NumpadDecimal", t.NumDivide = "NumpadDivide", t.NumpadDivide = "NumpadDivide", t.NumEnter = "NumpadEnter", t.NumpadEnter = "NumpadEnter", t.NumMultiply = "NumpadMultiply", t.NumpadMultiply = "NumpadMultiply", t.NumSubtract = "NumpadSubtract", t.NumpadSubtract = "NumpadSubtract", t.Esc = "Escape", t.Escape = "Escape", t.F1 = "F1", t.F2 = "F2", t.F3 = "F3", t.F4 = "F4", t.F5 = "F5", t.F6 = "F6", t.F7 = "F7", t.F8 = "F8", t.F9 = "F9", t.F10 = "F10", t.F11 = "F11", t.F12 = "F12", t.F13 = "F13", t.F14 = "F14", t.F15 = "F15", t.F16 = "F16", t.F17 = "F17", t.F18 = "F18", t.F19 = "F19", t.F20 = "F20", t.PrintScreen = "PrintScreen", t.ScrollLock = "ScrollLock", t.Pause = "Pause", t.Unidentified = "Unidentified";
        }(Pr || (Pr = {}));
        class Rr extends me {
            constructor(t, e, i){
                super(), this.key = t, this.value = e, this.originalEvent = i;
            }
        }
        class Fr {
            constructor(){
                this.events = new g, this._enabled = !0, this._keys = [], this._keysUp = [], this._keysDown = [], this._releaseAllKeys = (t)=>{
                    for (const e of this._keys){
                        const i = new Rr(e, t.key, t);
                        this.events.emit("up", i), this.events.emit("release", i);
                    }
                    this._keysUp = Array.from(new Set(this._keys.concat(this._keysUp))), this._keys.length = 0;
                }, this._handleKeyDown = (t)=>{
                    if (!this._enabled) return;
                    t.metaKey || !this._keys.includes(Pr.MetaLeft) && !this._keys.includes(Pr.MetaRight) || this._releaseAllKeys(t);
                    const e = t.code;
                    if (-1 === this._keys.indexOf(e)) {
                        this._keys.push(e), this._keysDown.push(e);
                        const i = new Rr(e, t.key, t);
                        this.events.emit("down", i), this.events.emit("press", i);
                    }
                }, this._handleKeyUp = (t)=>{
                    if (!this._enabled) return;
                    const e = t.code, i = this._keys.indexOf(e);
                    this._keys.splice(i, 1), this._keysUp.push(e);
                    const s = new Rr(e, t.key, t);
                    this.events.emit("up", s), this.events.emit("release", s), "Meta" === t.key && this._releaseAllKeys(t);
                };
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            init(t) {
                let { global: e } = t;
                const { grabWindowFocus: i } = t;
                e || (Ir() ? (e = window, i && window.focus(), k.getInstance().warn("Excalibur might be in a cross-origin iframe, in order to receive keyboard events it must be in focus")) : e = window.top), e.addEventListener("blur", ()=>{
                    this._keys.length = 0;
                }), e.addEventListener("keyup", this._handleKeyUp), e.addEventListener("keydown", this._handleKeyDown);
            }
            toggleEnabled(t) {
                this._enabled = t;
            }
            clear() {
                this._keysDown.length = 0, this._keysUp.length = 0, this._keys.length = 0;
            }
            update() {
                this._keysDown.length = 0, this._keysUp.length = 0;
                for(let t = 0; t < this._keys.length; t++)this.events.emit("hold", new Rr(this._keys[t]));
            }
            getKeys() {
                return this._keys;
            }
            wasPressed(t) {
                return !!this._enabled && this._keysDown.indexOf(t) > -1;
            }
            isHeld(t) {
                return !!this._enabled && this._keys.indexOf(t) > -1;
            }
            wasReleased(t) {
                return !!this._enabled && this._keysUp.indexOf(t) > -1;
            }
            triggerEvent(t, e, i) {
                "down" === t && this._handleKeyDown(new KeyboardEvent("keydown", {
                    code: e,
                    key: null != i ? i : null
                })), "up" === t && this._handleKeyUp(new KeyboardEvent("keyup", {
                    code: e,
                    key: null != i ? i : null
                }));
            }
        }
        class Mr {
            static fromPagePosition(t, e, i) {
                let s, n, r, o;
                3 === arguments.length ? (s = t, n = e, r = new E(s, n), o = i) : (r = t, s = r.x, n = r.y, o = e);
                const a = o.screen.pageToScreenCoordinates(r), h = o.screen.screenToWorldCoordinates(a);
                return new Mr(h, r, a);
            }
            constructor(t, e, i){
                this.worldPos = t, this.pagePos = e, this.screenPos = i;
            }
        }
        class Dr {
            cancel() {
                this.active = !1;
            }
            get pagePos() {
                return this.coordinates.pagePos;
            }
            get screenPos() {
                return this.coordinates.screenPos;
            }
            get worldPos() {
                return this.coordinates.worldPos;
            }
            constructor(t, e, i, s, n, r){
                this.type = t, this.pointerId = e, this.button = i, this.pointerType = s, this.coordinates = n, this.nativeEvent = r, this.active = !0;
            }
        }
        class Br {
            cancel() {
                this.active = !1;
            }
            constructor(t, e, i, s, n, r, o, a, h, l, c, d){
                this.x = t, this.y = e, this.pageX = i, this.pageY = s, this.screenX = n, this.screenY = r, this.index = o, this.deltaX = a, this.deltaY = h, this.deltaZ = l, this.deltaMode = c, this.ev = d, this.active = !0;
            }
        }
        class kr {
            constructor(){
                this.events = new g, this.lastPagePos = E.Zero, this.lastScreenPos = E.Zero, this.lastWorldPos = E.Zero, this._onPointerMove = (t)=>{
                    this.lastPagePos = new E(t.pagePos.x, t.pagePos.y), this.lastScreenPos = new E(t.screenPos.x, t.screenPos.y), this.lastWorldPos = new E(t.worldPos.x, t.worldPos.y);
                }, this._onPointerDown = (t)=>{
                    this.lastPagePos = new E(t.pagePos.x, t.pagePos.y), this.lastScreenPos = new E(t.screenPos.x, t.screenPos.y), this.lastWorldPos = new E(t.worldPos.x, t.worldPos.y);
                }, this.on("move", this._onPointerMove), this.on("down", this._onPointerDown);
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            _updateWorldPosition(t) {
                const e = Mr.fromPagePosition(this.lastPagePos, t);
                this.lastScreenPos = e.screenPos, this.lastWorldPos = e.worldPos;
            }
        }
        var Lr, zr, Ur, Or;
        !function(t) {
            t.Pixel = "Pixel", t.Line = "Line", t.Page = "Page";
        }(Lr || (Lr = {})), function(t) {
            t[t.NoButton = -1] = "NoButton", t[t.Left = 0] = "Left", t[t.Middle = 1] = "Middle", t[t.Right = 2] = "Right", t[t.Unknown = 3] = "Unknown";
        }(zr || (zr = {})), function(t) {
            t.Left = "Left", t.Middle = "Middle", t.Right = "Right", t.Unknown = "Unknown", t.NoButton = "NoButton";
        }(Ur || (Ur = {})), function(t) {
            t.Touch = "Touch", t.Mouse = "Mouse", t.Pen = "Pen", t.Unknown = "Unknown";
        }(Or || (Or = {}));
        class Hr {
            constructor(t, e){
                this.target = t, this.engine = e, this.events = new g, this.primary = new kr, this._activeNativePointerIdsToNormalized = new Map, this.lastFramePointerCoords = new Map, this.currentFramePointerCoords = new Map, this.currentFramePointerDown = new Map, this.lastFramePointerDown = new Map, this.currentFrameDown = [], this.currentFrameUp = [], this.currentFrameMove = [], this.currentFrameCancel = [], this.currentFrameWheel = [], this._enabled = !0, this._pointers = [
                    this.primary
                ], this._boundHandle = this._handle.bind(this), this._boundWheel = this._handleWheel.bind(this);
            }
            toggleEnabled(t) {
                this._enabled = t;
            }
            recreate(t, e) {
                const i = new Hr(t, e);
                return i.primary = this.primary, i._pointers = this._pointers, i;
            }
            at(t) {
                if (t >= this._pointers.length) for(let e = this._pointers.length - 1, i = t; e < i; e++)this._pointers.push(new kr);
                return this._pointers[t];
            }
            count() {
                return this._pointers.length;
            }
            isDown(t) {
                var e;
                return !!this._enabled && null !== (e = this.currentFramePointerDown.get(t)) && void 0 !== e && e;
            }
            wasDown(t) {
                var e;
                return !!this._enabled && null !== (e = this.lastFramePointerDown.get(t)) && void 0 !== e && e;
            }
            isDragging(t) {
                return !!this._enabled && this.isDown(t);
            }
            isDragStart(t) {
                return !!this._enabled && this.isDown(t) && !this.wasDown(t);
            }
            isDragEnd(t) {
                return !!this._enabled && !this.isDown(t) && this.wasDown(t);
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            update() {
                this.lastFramePointerDown = new Map(this.currentFramePointerDown), this.lastFramePointerCoords = new Map(this.currentFramePointerCoords);
                for (const t of this.currentFrameDown){
                    if (!t.active) continue;
                    this.emit("down", t);
                    this.at(t.pointerId).emit("down", t), this.primary.emit("pointerdown", t);
                }
                for (const t of this.currentFrameUp){
                    if (!t.active) continue;
                    this.emit("up", t);
                    this.at(t.pointerId).emit("up", t);
                }
                for (const t of this.currentFrameMove){
                    if (!t.active) continue;
                    this.emit("move", t);
                    this.at(t.pointerId).emit("move", t);
                }
                for (const t of this.currentFrameCancel){
                    if (!t.active) continue;
                    this.emit("cancel", t);
                    this.at(t.pointerId).emit("cancel", t);
                }
                for (const t of this.currentFrameWheel)t.active && (this.emit("pointerwheel", t), this.emit("wheel", t), this.primary.emit("pointerwheel", t), this.primary.emit("wheel", t));
                if (this.engine.currentScene.camera.hasChanged()) for (const t of this._pointers)t._updateWorldPosition(this.engine);
            }
            clear() {
                for (const t of this.currentFrameUp){
                    this.currentFramePointerCoords.delete(t.pointerId);
                    const e = this._activeNativePointerIdsToNormalized.entries();
                    for (const [i, s] of e)s === t.pointerId && this._activeNativePointerIdsToNormalized.delete(i);
                }
                this.currentFrameDown.length = 0, this.currentFrameUp.length = 0, this.currentFrameMove.length = 0, this.currentFrameCancel.length = 0, this.currentFrameWheel.length = 0;
            }
            init(t) {
                var e;
                if (this.engine.isDisposed()) return;
                this.target === this.engine.canvas ? this.engine.canvas.style.touchAction = "none" : document.body.style.touchAction = "none", window.PointerEvent ? (this.target.addEventListener("pointerdown", this._boundHandle), this.target.addEventListener("pointerup", this._boundHandle), this.target.addEventListener("pointermove", this._boundHandle), this.target.addEventListener("pointercancel", this._boundHandle)) : (this.target.addEventListener("touchstart", this._boundHandle), this.target.addEventListener("touchend", this._boundHandle), this.target.addEventListener("touchmove", this._boundHandle), this.target.addEventListener("touchcancel", this._boundHandle), this.target.addEventListener("mousedown", this._boundHandle), this.target.addEventListener("mouseup", this._boundHandle), this.target.addEventListener("mousemove", this._boundHandle));
                const i = {
                    passive: !(this.engine.pageScrollPreventionMode === mo.All || this.engine.pageScrollPreventionMode === mo.Canvas)
                };
                "onwheel" in document.createElement("div") ? this.target.addEventListener("wheel", this._boundWheel, i) : void 0 !== document.onmousewheel ? this.target.addEventListener("mousewheel", this._boundWheel, i) : this.target.addEventListener("MozMousePixelScroll", this._boundWheel, i);
                if ((null === (e = null == t ? void 0 : t.grabWindowFocus) || void 0 === e || e) && Ir()) {
                    const t = ()=>{
                        window.focus();
                    };
                    window.PointerEvent ? this.target.addEventListener("pointerdown", t) : (this.target.addEventListener("touchstart", t), this.target.addEventListener("mousedown", t));
                }
            }
            detach() {
                window.PointerEvent ? (this.target.removeEventListener("pointerdown", this._boundHandle), this.target.removeEventListener("pointerup", this._boundHandle), this.target.removeEventListener("pointermove", this._boundHandle), this.target.removeEventListener("pointercancel", this._boundHandle)) : (this.target.removeEventListener("touchstart", this._boundHandle), this.target.removeEventListener("touchend", this._boundHandle), this.target.removeEventListener("touchmove", this._boundHandle), this.target.removeEventListener("touchcancel", this._boundHandle), this.target.removeEventListener("mousedown", this._boundHandle), this.target.removeEventListener("mouseup", this._boundHandle), this.target.removeEventListener("mousemove", this._boundHandle)), "onwheel" in document.createElement("div") ? this.target.removeEventListener("wheel", this._boundWheel) : void 0 !== document.onmousewheel ? this.target.addEventListener("mousewheel", this._boundWheel) : this.target.addEventListener("MozMousePixelScroll", this._boundWheel);
            }
            _normalizePointerId(t) {
                this._activeNativePointerIdsToNormalized.set(t, -1);
                const e = Array.from(this._activeNativePointerIdsToNormalized.keys()).sort((t, e)=>t - e).findIndex((e)=>e === t);
                return this._activeNativePointerIdsToNormalized.set(t, e), e;
            }
            _handle(t) {
                if (!this._enabled) return;
                t.preventDefault();
                const e = new Map;
                let i, s;
                if (n = t, globalThis.TouchEvent && n instanceof globalThis.TouchEvent) {
                    i = Ur.Unknown, s = Or.Touch;
                    for(let i = 0; i < t.changedTouches.length; i++){
                        const s = t.changedTouches[i], n = Mr.fromPagePosition(s.pageX, s.pageY, this.engine), r = i + 1, o = this._normalizePointerId(r);
                        this.currentFramePointerCoords.set(o, n), e.set(o, n);
                    }
                } else {
                    i = this._nativeButtonToPointerButton(t.button), s = Or.Mouse;
                    const n = Mr.fromPagePosition(t.pageX, t.pageY, this.engine);
                    let r = 1;
                    (function(t) {
                        return globalThis.PointerEvent && t instanceof globalThis.PointerEvent;
                    })(t) && (r = t.pointerId, s = this._stringToPointerType(t.pointerType));
                    const o = this._normalizePointerId(r);
                    this.currentFramePointerCoords.set(o, n), e.set(o, n);
                }
                var n;
                for (const [n, r] of e.entries())switch(t.type){
                    case "mousedown":
                    case "pointerdown":
                    case "touchstart":
                        this.currentFrameDown.push(new Dr("down", n, i, s, r, t)), this.currentFramePointerDown.set(n, !0);
                        break;
                    case "mouseup":
                    case "pointerup":
                    case "touchend":
                        this.currentFrameUp.push(new Dr("up", n, i, s, r, t)), this.currentFramePointerDown.set(n, !1);
                        break;
                    case "mousemove":
                    case "pointermove":
                    case "touchmove":
                        this.currentFrameMove.push(new Dr("move", n, i, s, r, t));
                        break;
                    case "touchcancel":
                    case "pointercancel":
                        this.currentFrameCancel.push(new Dr("cancel", n, i, s, r, t));
                }
            }
            _handleWheel(t) {
                if (!this._enabled) return;
                (this.engine.pageScrollPreventionMode === mo.All || this.engine.pageScrollPreventionMode === mo.Canvas && t.target === this.engine.canvas) && t.preventDefault();
                const e = this.engine.screen.pageToScreenCoordinates(I(t.pageX, t.pageY)), i = this.engine.screen.screenToWorldCoordinates(e), s = -1 / 40, n = t.deltaX || t.wheelDeltaX * s || 0, r = t.deltaY || t.wheelDeltaY * s || t.wheelDelta * s || t.detail || 0, o = t.deltaZ || 0;
                let a = Lr.Pixel;
                t.deltaMode && (1 === t.deltaMode ? a = Lr.Line : 2 === t.deltaMode && (a = Lr.Page));
                const h = new Br(i.x, i.y, t.pageX, t.pageY, e.x, e.y, 0, n, r, o, a, t);
                this.currentFrameWheel.push(h);
            }
            triggerEvent(t, e) {
                const i = this.engine.screen.worldToPageCoordinates(e);
                window.PointerEvent ? this._handle(new window.PointerEvent("pointer" + t, {
                    pointerId: 0,
                    clientX: i.x,
                    clientY: i.y
                })) : this._handle(new window.MouseEvent("mouse" + t, {
                    clientX: i.x,
                    clientY: i.y
                }));
                const s = this.engine.currentScene.world.get(pr);
                s.preupdate(this.engine.currentScene, 1), s.update(1);
            }
            _nativeButtonToPointerButton(t) {
                switch(t){
                    case zr.NoButton:
                        return Ur.NoButton;
                    case zr.Left:
                        return Ur.Left;
                    case zr.Middle:
                        return Ur.Middle;
                    case zr.Right:
                        return Ur.Right;
                    case zr.Unknown:
                        return Ur.Unknown;
                    default:
                        return G(t);
                }
            }
            _stringToPointerType(t) {
                switch(t){
                    case "touch":
                        return Or.Touch;
                    case "mouse":
                        return Or.Mouse;
                    case "pen":
                        return Or.Pen;
                    default:
                        return Or.Unknown;
                }
            }
        }
        class Nr {
            constructor(t){
                this._enabled = !0;
                const { pointerTarget: e, grabWindowFocus: i, engine: s } = t;
                this.keyboard = new Fr, this.pointers = new Hr(e, s), this.gamepads = new Cr, this.keyboard.init({
                    grabWindowFocus: i
                }), this.pointers.init({
                    grabWindowFocus: i
                }), this.gamepads.init(), this.inputMapper = new Er({
                    keyboard: this.keyboard,
                    pointers: this.pointers,
                    gamepads: this.gamepads
                });
            }
            get enabled() {
                return this._enabled;
            }
            toggleEnabled(t) {
                this._enabled = t, this.keyboard.toggleEnabled(this._enabled), this.pointers.toggleEnabled(this._enabled), this.gamepads.toggleEnabled(this._enabled);
            }
            update() {
                this._enabled && (this.inputMapper.execute(), this.keyboard.update(), this.gamepads.update());
            }
            clear() {
                this.keyboard.clear(), this.pointers.clear();
            }
        }
        class Wr {
        }
        const Gr = {
            Initialize: "initialize",
            Activate: "activate",
            Deactivate: "deactivate",
            PreUpdate: "preupdate",
            PostUpdate: "postupdate",
            PreDraw: "predraw",
            PostDraw: "postdraw",
            PreDebugDraw: "predebugdraw",
            PostDebugDraw: "postdebugdraw",
            PreLoad: "preload"
        };
        function Vr(t) {
            var e, i;
            return !!(null == t ? void 0 : t.prototype) && !!(null === (i = null === (e = null == t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.constructor) || void 0 === i ? void 0 : i.name);
        }
        class qr {
            get actors() {
                return this.world.entityManager.entities.filter((t)=>t instanceof Tn);
            }
            get entities() {
                return this.world.entityManager.entities;
            }
            get triggers() {
                return this.world.entityManager.entities.filter((t)=>t instanceof Yn);
            }
            get tileMaps() {
                return this.world.entityManager.entities.filter((t)=>t instanceof kn);
            }
            get timers() {
                return this._timers;
            }
            constructor(){
                this._logger = k.getInstance(), this.events = new g, this.camera = new qn, this.world = new sr(this), this.physics = new br(as()), this._isInitialized = !1, this._timers = [], this._cancelQueue = [], this.world.add(fr), this.world.add(new nr(this.world, this.physics)), this.world.add(new hr(this.world, this.physics)), this.world.add(pr), this.world.add(vr), this.world.add(xr), this.world.add(cr), this.world.add(dr);
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            onPreLoad(t) {}
            onTransition(t) {}
            onInitialize(t) {}
            onActivate(t) {}
            onDeactivate(t) {}
            onPreUpdate(t, e) {}
            onPostUpdate(t, e) {}
            onPreDraw(t, e) {}
            onPostDraw(t, e) {}
            _initializeChildren() {
                for (const t of this.entities)t._initialize(this.engine);
            }
            get isInitialized() {
                return this._isInitialized;
            }
            async _initialize(t) {
                var e;
                if (!this.isInitialized) {
                    try {
                        this.engine = t, this.physics.config = this.engine.physics, this.input = new Nr({
                            pointerTarget: t.pointerScope === a.Canvas ? t.canvas : document,
                            grabWindowFocus: t.grabWindowFocus,
                            engine: t
                        }), this.camera._initialize(t), this.world.systemManager.initialize(), await this.onInitialize(t), this._initializeChildren(), this._logger.debug("Scene.onInitialize", this, t), this.events.emit("initialize", new Ye(t, this));
                    } catch (i) {
                        throw this._logger.error(`Error during scene initialization for scene ${null === (e = t.director) || void 0 === e ? void 0 : e.getSceneName(this)}!`), i;
                    }
                    this._isInitialized = !0;
                }
            }
            async _activate(t) {
                var e, i;
                try {
                    this._logger.debug("Scene.onActivate", this), this.input.toggleEnabled(!0), await this.onActivate(t);
                } catch (t) {
                    throw this._logger.error(`Error during scene activation for scene ${null === (i = null === (e = this.engine) || void 0 === e ? void 0 : e.director) || void 0 === i ? void 0 : i.getSceneName(this)}!`), t;
                }
            }
            async _deactivate(t) {
                this._logger.debug("Scene.onDeactivate", this), this.input.toggleEnabled(!1), await this.onDeactivate(t);
            }
            _preupdate(t, e) {
                this.emit("preupdate", new Ie(t, e, this)), this.onPreUpdate(t, e);
            }
            _postupdate(t, e) {
                this.emit("postupdate", new Re(t, e, this)), this.onPostUpdate(t, e);
            }
            _predraw(t, e) {
                this.emit("predraw", new Ce(t, e, this)), this.onPreDraw(t, e);
            }
            _postdraw(t, e) {
                this.emit("postdraw", new Ae(t, e, this)), this.onPostDraw(t, e);
            }
            update(t, e) {
                var i;
                if (!this.isInitialized) return void this._logger.warnOnce(`Scene update called before initialize for scene ${null === (i = t.director) || void 0 === i ? void 0 : i.getSceneName(this)}!`);
                let s, n;
                for(this._preupdate(t, e), s = 0, n = this._cancelQueue.length; s < n; s++)this.removeTimer(this._cancelQueue[s]);
                this._cancelQueue.length = 0;
                for (const t of this._timers)t.update(e);
                this.world.update($n.Update, e), this.camera && this.camera.update(t, e), this._collectActorStats(t), this._postupdate(t, e), this.input.update();
            }
            draw(t, e) {
                var i;
                this.isInitialized ? (this._predraw(t, e), this.world.update($n.Draw, e), (null === (i = this.engine) || void 0 === i ? void 0 : i.isDebug) && this.debugDraw(t), this._postdraw(t, e)) : this._logger.warnOnce("Scene draw called before initialize!");
            }
            debugDraw(t) {
                this.emit("predebugdraw", new Pe(t, this)), this.emit("postdebugdraw", new Ee(t, this));
            }
            contains(t) {
                return this.actors.indexOf(t) > -1;
            }
            add(t) {
                this.emit("entityadded", {
                    target: t
                }), t instanceof En ? W(this._timers, t) || this.addTimer(t) : (this.world.add(t), t.scene = this);
            }
            transfer(t) {
                let e;
                t instanceof li && t.scene && t.scene !== this && (e = t.scene, t.scene.world.remove(t, !1)), t instanceof En && t.scene && (e = t.scene, t.scene.removeTimer(t)), null == e || e.emit("entityremoved", {
                    target: t
                }), this.add(t);
            }
            remove(t) {
                this.emit("entityremoved", {
                    target: t
                }), t instanceof li && (t.isActive && t.kill(), this.world.remove(t)), t instanceof En && this.removeTimer(t);
            }
            clear(t = !0) {
                for(let e = this.entities.length - 1; e >= 0; e--)this.world.remove(this.entities[e], t);
                for(let t = this.timers.length - 1; t >= 0; t--)this.removeTimer(this.timers[t]);
            }
            addTimer(t) {
                return this._timers.push(t), t.scene = this, t;
            }
            removeTimer(t) {
                const e = this._timers.indexOf(t);
                return -1 !== e && this._timers.splice(e, 1), t;
            }
            cancelTimer(t) {
                return this._cancelQueue.push(t), t;
            }
            isTimerActive(t) {
                return this._timers.indexOf(t) > -1 && !t.complete;
            }
            isCurrentScene() {
                return !!this.engine && this.engine.currentScene === this;
            }
            _collectActorStats(t) {
                const e = this.actors;
                for(let i = 0; i < e.length; i++){
                    const s = e[i];
                    s instanceof Pn && t.stats.currFrame.actors.ui++, t.stats.currFrame.actors.alive++;
                    for(let e = 0; e < s.children.length; e++)Sn(s.children[e]) ? t.stats.currFrame.actors.ui++ : t.stats.currFrame.actors.alive++;
                }
            }
        }
        var Xr;
        !function(t) {
            t.Protanope = "Protanope", t.Deuteranope = "Deuteranope", t.Tritanope = "Tritanope";
        }(Xr || (Xr = {}));
        class Yr {
            constructor(t, e){
                this._shader = new Tt({
                    gl: t,
                    vertexSource: "#version 300 es\n      in vec2 a_position;\n      in vec2 a_uv;\n      out vec2 v_texcoord;\n      out vec2 v_uv;\n\n      void main() {\n        gl_Position = vec4(a_position, 0.0, 1.0);\n        // Pass the texcoord to the fragment shader.\n        v_texcoord = a_uv;\n        v_uv = a_uv;\n      }",
                    fragmentSource: e
                }), this._shader.compile(), this._buffer = new St({
                    gl: t,
                    type: "static",
                    data: new Float32Array([
                        -1,
                        -1,
                        0,
                        0,
                        -1,
                        1,
                        0,
                        1,
                        1,
                        -1,
                        1,
                        0,
                        1,
                        -1,
                        1,
                        0,
                        -1,
                        1,
                        0,
                        1,
                        1,
                        1,
                        1,
                        1
                    ])
                }), this._layout = new Pt({
                    gl: t,
                    shader: this._shader,
                    vertexBuffer: this._buffer,
                    attributes: [
                        [
                            "a_position",
                            2
                        ],
                        [
                            "a_uv",
                            2
                        ]
                    ]
                }), this._buffer.upload();
            }
            getShader() {
                return this._shader;
            }
            getLayout() {
                return this._layout;
            }
        }
        class Zr {
            constructor(t, e = !1){
                this._colorBlindnessMode = t, this._simulate = !1, this._simulate = e;
            }
            initialize(t) {
                this._shader = new Yr(t, "#version 300 es\r\nprecision mediump float;\r\n// our texture\r\nuniform sampler2D u_image;\r\n// the texCoords passed in from the vertex shader.\r\nin vec2 v_texcoord;\r\n\r\n// color blind type\r\nuniform int u_type;\r\n\r\n// simulation?\r\nuniform bool u_simulate;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  vec4 o =  texture(u_image, v_texcoord);\r\n  // RGB to LMS matrix conversion\r\n  float L = (17.8824 * o.r) + (43.5161 * o.g) + (4.11935 * o.b);\r\n  float M = (3.45565 * o.r) + (27.1554 * o.g) + (3.86714 * o.b);\r\n  float S = (0.0299566 * o.r) + (0.184309 * o.g) + (1.46709 * o.b);\r\n  // Simulate color blindness\r\n  float l;\r\n  float m;\r\n  float s;\r\n  //MODE CODE//\r\n  if (u_type == 0) {\r\n    // Protanope\r\n    l = 0.0 * L + 2.02344 * M + -2.52581 * S;\r\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\r\n    s = 0.0 * L + 0.0 * M + 1.0 * S;;\r\n  } else if (u_type == 1) {\r\n    // Deuteranope\r\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\r\n    m = 0.494207 * L + 0.0 * M + 1.24827 * S;\r\n    s = 0.0 * L + 0.0 * M + 1.0 * S;\r\n  } else if (u_type == 2) {\r\n    // Tritanope\r\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\r\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\r\n    s = -0.395913 * L + 0.801109 * M + 0.0 * S;\r\n  }\r\n\r\n  // LMS to RGB matrix conversion\r\n  vec4 error; // simulate the colors\r\n  error.r = (0.0809444479 * l) + (-0.130504409 * m) + (0.116721066 * s);\r\n  error.g = (-0.0102485335 * l) + (0.0540193266 * m) + (-0.113614708 * s);\r\n  error.b = (-0.000365296938 * l) + (-0.00412161469 * m) + (0.693511405 * s);\r\n  error.a = 1.0;\r\n  vec4 diff = o - error;\r\n  vec4 correction; // correct the colors\r\n  correction.r = 0.0;\r\n  correction.g =  (diff.r * 0.7) + (diff.g * 1.0);\r\n  correction.b =  (diff.r * 0.7) + (diff.b * 1.0);\r\n  correction = o + correction;\r\n  correction.a = o.a;\r\n  //SIMULATE//\r\n\r\n  // sim \r\n  if (u_simulate) {\r\n    fragColor = error.rgba;\r\n  } else {\r\n    fragColor = correction.rgba;\r\n  }\r\n}"), this.simulate = this._simulate, this.colorBlindnessMode = this._colorBlindnessMode;
            }
            getShader() {
                return this._shader.getShader();
            }
            getLayout() {
                return this._shader.getLayout();
            }
            set colorBlindnessMode(t) {
                if (this._colorBlindnessMode = t, this._shader) {
                    const t = this._shader.getShader();
                    t.use(), this._colorBlindnessMode === Xr.Protanope ? t.setUniformInt("u_type", 0) : this._colorBlindnessMode === Xr.Deuteranope ? t.setUniformInt("u_type", 1) : this._colorBlindnessMode === Xr.Tritanope && t.setUniformInt("u_type", 2);
                }
            }
            get colorBlindnessMode() {
                return this._colorBlindnessMode;
            }
            set simulate(t) {
                if (this._simulate = t, this._shader) {
                    const e = this._shader.getShader();
                    e.use(), e.setUniformBoolean("u_simulate", t);
                }
            }
            get simulate() {
                return this._simulate;
            }
        }
        class $r {
            constructor(t){
                this._engine = t, this._colorBlindPostProcessor = new Zr(Xr.Protanope);
            }
            correct(t) {
                this._engine.graphicsContext instanceof vi && (this.clear(), this._colorBlindPostProcessor.colorBlindnessMode = t, this._colorBlindPostProcessor.simulate = !1, this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor));
            }
            simulate(t) {
                this._engine.graphicsContext instanceof vi && (this.clear(), this._colorBlindPostProcessor.colorBlindnessMode = t, this._colorBlindPostProcessor.simulate = !0, this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor));
            }
            clear() {
                this._engine.graphicsContext.removePostProcessor(this._colorBlindPostProcessor);
            }
        }
        class jr {
            constructor(t){
                this.stats = {
                    currFrame: new Kr,
                    prevFrame: new Kr
                }, this.filter = {
                    useFilter: !1,
                    nameQuery: "",
                    ids: []
                }, this.entity = {
                    showAll: !1,
                    showId: !1,
                    showName: !1
                }, this.transform = {
                    showAll: !1,
                    debugZIndex: 1e7,
                    showPosition: !1,
                    showPositionLabel: !1,
                    positionColor: R.Yellow,
                    showZIndex: !1,
                    showScale: !1,
                    scaleColor: R.Green,
                    showRotation: !1,
                    rotationColor: R.Blue
                }, this.graphics = {
                    showAll: !1,
                    showBounds: !1,
                    boundsColor: R.Yellow
                }, this.collider = {
                    showAll: !1,
                    showBounds: !1,
                    boundsColor: R.Blue,
                    showOwner: !1,
                    showGeometry: !0,
                    geometryColor: R.Green,
                    geometryLineWidth: 1,
                    geometryPointSize: .5
                }, this.physics = {
                    showAll: !1,
                    showBroadphaseSpacePartitionDebug: !1,
                    showCollisionNormals: !1,
                    collisionNormalColor: R.Cyan,
                    showCollisionContacts: !0,
                    contactSize: 2,
                    collisionContactColor: R.Red
                }, this.motion = {
                    showAll: !1,
                    showVelocity: !1,
                    velocityColor: R.Yellow,
                    showAcceleration: !1,
                    accelerationColor: R.Red
                }, this.body = {
                    showAll: !1,
                    showCollisionGroup: !1,
                    showCollisionType: !1,
                    showSleeping: !1,
                    showMotion: !1,
                    showMass: !1
                }, this.camera = {
                    showAll: !1,
                    showFocus: !1,
                    focusColor: R.Red,
                    showZoom: !1
                }, this.tilemap = {
                    showAll: !1,
                    showGrid: !1,
                    gridColor: R.Red,
                    gridWidth: .5,
                    showSolidBounds: !1,
                    solidBoundsColor: R.fromHex("#8080807F"),
                    showColliderGeometry: !0
                }, this.isometric = {
                    showAll: !1,
                    showPosition: !1,
                    positionColor: R.Yellow,
                    positionSize: 1,
                    showGrid: !1,
                    gridColor: R.Red,
                    gridWidth: 1,
                    showColliderGeometry: !0
                }, this._engine = t, this.colorBlindMode = new $r(this._engine);
            }
            useTestClock() {
                const t = this._engine.clock, e = t.isRunning();
                t.stop();
                const i = t.toTestClock();
                return e && i.start(), this._engine.clock = i, i;
            }
            useStandardClock() {
                const t = this._engine.clock, e = t.isRunning();
                t.stop();
                const i = t.toStandardClock();
                return e && i.start(), this._engine.clock = i, i;
            }
        }
        class Kr {
            constructor(){
                this._id = 0, this._elapsedMs = 0, this._fps = 0, this._actorStats = {
                    alive: 0,
                    killed: 0,
                    ui: 0,
                    get remaining () {
                        return this.alive - this.killed;
                    },
                    get total () {
                        return this.remaining + this.ui;
                    }
                }, this._durationStats = {
                    update: 0,
                    draw: 0,
                    get total () {
                        return this.update + this.draw;
                    }
                }, this._physicsStats = new Qr, this._graphicsStats = {
                    drawCalls: 0,
                    drawnImages: 0
                };
            }
            reset(t) {
                t ? (this.id = t.id, this.elapsedMs = t.elapsedMs, this.fps = t.fps, this.actors.alive = t.actors.alive, this.actors.killed = t.actors.killed, this.actors.ui = t.actors.ui, this.duration.update = t.duration.update, this.duration.draw = t.duration.draw, this._physicsStats.reset(t.physics), this.graphics.drawCalls = t.graphics.drawCalls, this.graphics.drawnImages = t.graphics.drawnImages) : (this.id = this.elapsedMs = this.fps = 0, this.actors.alive = this.actors.killed = this.actors.ui = 0, this.duration.update = this.duration.draw = 0, this._physicsStats.reset(), this.graphics.drawnImages = this.graphics.drawCalls = 0);
            }
            clone() {
                const t = new Kr;
                return t.reset(this), t;
            }
            get id() {
                return this._id;
            }
            set id(t) {
                this._id = t;
            }
            get elapsedMs() {
                return this._elapsedMs;
            }
            set elapsedMs(t) {
                this._elapsedMs = t;
            }
            get fps() {
                return this._fps;
            }
            set fps(t) {
                this._fps = t;
            }
            get actors() {
                return this._actorStats;
            }
            get duration() {
                return this._durationStats;
            }
            get physics() {
                return this._physicsStats;
            }
            get graphics() {
                return this._graphicsStats;
            }
        }
        class Qr {
            constructor(){
                this._pairs = 0, this._collisions = 0, this._contacts = new Map, this._fastBodies = 0, this._fastBodyCollisions = 0, this._broadphase = 0, this._narrowphase = 0;
            }
            reset(t) {
                t ? (this.pairs = t.pairs, this.collisions = t.collisions, this.contacts = t.contacts, this.fastBodies = t.fastBodies, this.fastBodyCollisions = t.fastBodyCollisions, this.broadphase = t.broadphase, this.narrowphase = t.narrowphase) : (this.pairs = this.collisions = this.fastBodies = 0, this.fastBodyCollisions = this.broadphase = this.narrowphase = 0, this.contacts.clear());
            }
            clone() {
                const t = new Qr;
                return t.reset(this), t;
            }
            get pairs() {
                return this._pairs;
            }
            set pairs(t) {
                this._pairs = t;
            }
            get collisions() {
                return this._collisions;
            }
            set collisions(t) {
                this._collisions = t;
            }
            get contacts() {
                return this._contacts;
            }
            set contacts(t) {
                this._contacts = t;
            }
            get fastBodies() {
                return this._fastBodies;
            }
            set fastBodies(t) {
                this._fastBodies = t;
            }
            get fastBodyCollisions() {
                return this._fastBodyCollisions;
            }
            set fastBodyCollisions(t) {
                this._fastBodyCollisions = t;
            }
            get broadphase() {
                return this._broadphase;
            }
            set broadphase(t) {
                this._broadphase = t;
            }
            get narrowphase() {
                return this._narrowphase;
            }
            set narrowphase(t) {
                this._narrowphase = t;
            }
        }
        class Jr {
            on(t, e) {
                this._nativeHandlers[t] && this.off(t, this._nativeHandlers[t]), this._nativeHandlers[t] = this._decorate(e), this.nativeComponent.addEventListener(t, this._nativeHandlers[t]);
            }
            off(t, e) {
                e || (e = this._nativeHandlers[t]), this.nativeComponent.removeEventListener(t, e), this._nativeHandlers[t] = null;
            }
            _decorate(t) {
                return (e)=>{
                    this._paused || t(e);
                };
            }
            pause() {
                this._paused = !0;
            }
            resume() {
                this._paused = !1;
            }
            clear() {
                for(const t in this._nativeHandlers)this.off(t);
            }
            constructor(t){
                this.nativeComponent = t, this._paused = !1, this._nativeHandlers = {};
            }
        }
        class to {
            constructor(t, e){
                this._windowGlobal = t, this._documentGlobal = e, this._windowComponent = new Jr(this._windowGlobal), this._documentComponent = new Jr(this._documentGlobal);
            }
            get window() {
                return this._windowComponent;
            }
            get document() {
                return this._documentComponent;
            }
            pause() {
                this.window.pause(), this.document.pause();
            }
            resume() {
                this.window.resume(), this.document.resume();
            }
            clear() {
                this.window.clear(), this.document.clear();
            }
        }
        const eo = {
            pixelArtSampler: !1,
            nativeContextAntialiasing: !1,
            multiSampleAntialiasing: !0,
            filtering: ot.Blended,
            canvasImageRendering: "auto"
        }, io = {
            pixelArtSampler: !0,
            nativeContextAntialiasing: !1,
            multiSampleAntialiasing: !0,
            filtering: ot.Blended,
            canvasImageRendering: "auto"
        };
        class so {
            constructor(t){
                var e;
                this._samplePeriod = 100, this._currentFrameTime = 0, this._frames = 0, this._previousSampleTime = 0, this._beginFrameTime = 0, this._fps = t.initialFps, this._samplePeriod = null !== (e = t.samplePeriod) && void 0 !== e ? e : this._samplePeriod, this._currentFrameTime = 1e3 / t.initialFps, this._nowFn = t.nowFn, this._previousSampleTime = this._nowFn();
            }
            start() {
                this._beginFrameTime = this._nowFn();
            }
            end() {
                this._frames++;
                const t = this._nowFn();
                this._currentFrameTime = t - this._beginFrameTime, t >= this._previousSampleTime + this._samplePeriod && (this._fps = 1e3 * this._frames / (t - this._previousSampleTime), this._previousSampleTime = t, this._frames = 0);
            }
            get fps() {
                return this._fps;
            }
            get instant() {
                return 1e3 / this._currentFrameTime;
            }
        }
        class no {
            constructor(t){
                var e, i, s;
                this._onFatalException = ()=>{}, this._maxFps = 1 / 0, this._lastTime = 0, this._elapsed = 1, this._scheduledCbs = [], this._totalElapsed = 0, this._options = t, this.tick = t.tick, this._lastTime = null !== (e = this.now()) && void 0 !== e ? e : 0, this._maxFps = null !== (i = t.maxFps) && void 0 !== i ? i : this._maxFps, this._onFatalException = null !== (s = t.onFatalException) && void 0 !== s ? s : this._onFatalException, this.fpsSampler = new so({
                    initialFps: 60,
                    nowFn: ()=>this.now()
                });
            }
            elapsed() {
                return this._elapsed;
            }
            now() {
                return performance.now();
            }
            toTestClock() {
                return new oo({
                    ...this._options,
                    defaultUpdateMs: 16.6
                });
            }
            toStandardClock() {
                return new ro({
                    ...this._options
                });
            }
            setFatalExceptionHandler(t) {
                this._onFatalException = t;
            }
            schedule(t, e = 0, i = "preframe") {
                const s = this._totalElapsed + e;
                this._scheduledCbs.push([
                    t,
                    s,
                    i
                ]);
            }
            __runScheduledCbs(t = "preframe") {
                for(let e = this._scheduledCbs.length - 1; e > -1; e--)t === this._scheduledCbs[e][2] && this._scheduledCbs[e][1] <= this._totalElapsed && (this._scheduledCbs[e][0](this._elapsed), this._scheduledCbs.splice(e, 1));
            }
            update(t) {
                try {
                    this.fpsSampler.start();
                    const e = this.now();
                    let i = e - this._lastTime || 1;
                    const s = 1e3 / this._maxFps;
                    if (i >= s) {
                        let n = 0;
                        0 !== s && (n = i % s, i -= n), i > 200 && (i = 1), this._elapsed = t || i, this._totalElapsed += this._elapsed, this.__runScheduledCbs("preframe"), this.tick(t || i), this.__runScheduledCbs("postframe"), this._lastTime = 0 !== s ? e - n : e, this.fpsSampler.end();
                    }
                } catch (t) {
                    this._onFatalException(t), this.stop();
                }
            }
        }
        class ro extends no {
            constructor(t){
                super(t), this._running = !1;
            }
            isRunning() {
                return this._running;
            }
            start() {
                if (this._running) return;
                this._running = !0;
                const t = ()=>{
                    if (this._running) try {
                        this._requestId = window.requestAnimationFrame(t), this.update();
                    } catch (t) {
                        throw window.cancelAnimationFrame(this._requestId), t;
                    }
                };
                t();
            }
            stop() {
                window.cancelAnimationFrame(this._requestId), this._running = !1;
            }
        }
        class oo extends no {
            constructor(t){
                super({
                    ...t
                }), this._logger = k.getInstance(), this._running = !1, this._currentTime = 0, this._updateMs = t.defaultUpdateMs;
            }
            now() {
                var t;
                return null !== (t = this._currentTime) && void 0 !== t ? t : 0;
            }
            isRunning() {
                return this._running;
            }
            start() {
                this._running = !0;
            }
            stop() {
                this._running = !1;
            }
            step(t) {
                const e = null != t ? t : this._updateMs;
                this._running ? (this.update(e), this._currentTime += e) : this._logger.warn("The clock is not running, no step will be performed");
            }
            run(t, e) {
                for(let i = 0; i < t; i++)this.step(null != e ? e : this._updateMs);
            }
        }
        var ao = i(296);
        class ho {
            constructor(){
                this._toasterCss = ao.A.toString(), this._isInitialized = !1;
            }
            _initialize() {
                this._isInitialized || (this._container = document.createElement("div"), this._container.id = "ex-toast-container", document.body.appendChild(this._container), this._isInitialized = !0, this._styleBlock = document.createElement("style"), this._styleBlock.textContent = this._toasterCss, document.head.appendChild(this._styleBlock));
            }
            dispose() {
                this._container.parentElement.removeChild(this._container), this._styleBlock.parentElement.removeChild(this._styleBlock), this._isInitialized = !1;
            }
            _createFragment(t) {
                const e = document.createElement("span");
                return e.innerText = t, e;
            }
            toast(t, e, i) {
                this._initialize();
                const s = document.createElement("div");
                s.className = "ex-toast-message";
                const n = t.split("[LINK]").map((t)=>this._createFragment(t));
                if (e) {
                    const t = document.createElement("a");
                    t.href = e, t.innerText = i || e, n.splice(1, 0, t);
                }
                const r = document.createElement("div");
                n.forEach((t)=>{
                    r.appendChild(t);
                }), s.appendChild(r);
                const o = document.createElement("button");
                o.innerText = "x", o.addEventListener("click", ()=>{
                    this._container.removeChild(s);
                }), s.appendChild(o);
                const a = (t)=>{
                    if ("Escape" === t.key) try {
                        this._container.removeChild(s);
                    } catch (t) {}
                    document.removeEventListener("keydown", a);
                };
                document.addEventListener("keydown", a);
                const h = this._container.firstChild;
                this._container.insertBefore(s, h);
            }
        }
        const lo = {
            NavigationStart: "navigationstart",
            Navigation: "navigation",
            NavigationEnd: "navigationend"
        };
        class co {
            get isTransitioning() {
                return this._isTransitioning;
            }
            constructor(t, e){
                this._engine = t, this.events = new g, this._logger = k.getInstance(), this._initialized = !1, this.scenes = {}, this._sceneToInstance = new Map, this._sceneToLoader = new Map, this._sceneToTransition = new Map, this._loadedScenes = new Set, this._isTransitioning = !1, this.rootScene = this.currentScene = new qr, this.add("root", this.rootScene), this.currentScene = this.rootScene, this.currentSceneName = "root";
                for(const t in e){
                    const i = e[t];
                    this.add(t, i), "root" === t && (this.rootScene = this.getSceneInstance("root"), this.currentScene = this.rootScene);
                }
            }
            async onInitialize() {
                if (!this._initialized) {
                    if (this._initialized = !0, this._deferredGoto) {
                        const t = this._deferredGoto;
                        this._deferredGoto = void 0;
                        const e = this._deferredTransition;
                        this._deferredTransition = void 0;
                        const i = this.getSceneInstance(t);
                        i && e && e._addToTargetScene(this._engine, i), await this.swapScene(t), i && e && await this.playTransition(e, i);
                    } else await this.swapScene("root");
                }
            }
            get isInitialized() {
                return this._initialized;
            }
            configureStart(t, e) {
                const i = null == e ? void 0 : e.loader;
                let s;
                if (i instanceof Hi ? this.mainLoader = i : Oi(i) ? this.mainLoader = new i : this.mainLoader = new Wi, null == e ? void 0 : e.inTransition) {
                    const { inTransition: t } = e;
                    s = t;
                }
                if (this.startScene = t, s) {
                    const t = this.getSceneInstance(this.startScene);
                    t && (s._addToTargetScene(this._engine, t), this.swapScene(this.startScene).then(()=>this.playTransition(s, t)));
                } else this.swapScene(this.startScene);
                this.currentSceneName = this.startScene;
            }
            _getLoader(t) {
                return this._sceneToLoader.get(t);
            }
            _getInTransition(t) {
                var e;
                const i = this.scenes[t];
                if (!(i instanceof qr || Vr(i))) return null === (e = null == i ? void 0 : i.transitions) || void 0 === e ? void 0 : e.in;
            }
            _getOutTransition(t) {
                var e;
                const i = this.scenes[t];
                if (!(i instanceof qr || Vr(i))) return null === (e = null == i ? void 0 : i.transitions) || void 0 === e ? void 0 : e.out;
            }
            getDeferredScene() {
                const t = this.getSceneDefinition(this._deferredGoto);
                return this._deferredGoto && t ? t : null;
            }
            getSceneDefinition(t) {
                const e = this.scenes[t];
                return e instanceof qr || Vr(e) ? e : e ? e.scene : void 0;
            }
            getSceneName(t) {
                for (const [e, i] of Object.entries(this.scenes))if (i instanceof qr) {
                    if (t === i) return e;
                } else if (!Vr(i) && t === i.scene) return e;
                for (const [e, i] of Object.entries(this.scenes))if (Vr(i)) {
                    if (t.constructor === i) return e;
                } else if (!(i instanceof qr) && t.constructor === i.scene) return e;
                return null;
            }
            assertAdded(t) {
                return this;
            }
            assertRemoved(t) {
                return this;
            }
            add(t, e) {
                if (!(e instanceof qr || Vr(e))) {
                    const { loader: i, transitions: s } = e, { in: n, out: r } = null != s ? s : {};
                    this._sceneToTransition.set(t, {
                        in: n,
                        out: r
                    }), Oi(i) ? this._sceneToLoader.set(t, new i) : i && this._sceneToLoader.set(t, i);
                }
                return this.scenes[t] && this._logger.warn("Scene", t, "already exists overwriting"), this.scenes[t] = e, this.assertAdded(t);
            }
            remove(t) {
                if (t instanceof qr || Vr(t)) {
                    const e = t;
                    for(const t in this.scenes)if (this.scenes.hasOwnProperty(t)) {
                        const i = this.scenes[t];
                        let s;
                        if (s = i instanceof qr || Vr(i) ? i : i.scene, s === e) {
                            if (t === this.currentSceneName) throw new Error(`Cannot remove a currently active scene: ${t}`);
                            this._sceneToInstance.delete(t), this._sceneToTransition.delete(t), this._sceneToLoader.delete(t), delete this.scenes[t];
                        }
                    }
                }
                if ("string" == typeof t) {
                    if (t === this.currentSceneName) throw new Error(`Cannot remove a currently active scene: ${t}`);
                    this._sceneToInstance.delete(t), this._sceneToTransition.delete(t), this._sceneToLoader.delete(t), delete this.scenes[t];
                }
            }
            async goToScene(t, e) {
                var i, s, n, r, o, a;
                const h = this.getSceneInstance(t);
                if (!h) return void this._logger.warn(`Scene ${t} does not exist! Check the name, are you sure you added it?`);
                const l = this.currentScene, c = this.currentSceneName, d = null === (s = null === (i = this._engine.input) || void 0 === i ? void 0 : i.enabled) || void 0 === s || s;
                this._isTransitioning = !0;
                const u = null === (n = this.getSceneInstance(c)) || void 0 === n ? void 0 : n.onTransition("out"), _ = null == h ? void 0 : h.onTransition("in");
                e = {
                    sourceOut: null !== (r = this._getOutTransition(this.currentSceneName)) && void 0 !== r ? r : u,
                    destinationIn: null !== (o = this._getInTransition(t)) && void 0 !== o ? o : _,
                    ...e
                };
                const { sourceOut: g, destinationIn: p, sceneActivationData: f } = e, m = null != g ? g : this._getOutTransition(this.currentSceneName), v = null != p ? p : this._getInTransition(t), x = (null == m ? void 0 : m.hideLoader) || (null == v ? void 0 : v.hideLoader);
                x && this.maybeLoadScene(t, x), this._emitEvent("navigationstart", c, t), m && await this.playTransition(m, l), await this.maybeLoadScene(t, x), v && await v.onPreviousSceneDeactivate(this.currentScene), v && v._addToTargetScene(this._engine, h), await this.swapScene(t, f), this._emitEvent("navigation", c, t), v && await this.playTransition(v, h), this._emitEvent("navigationend", c, t), null === (a = this._engine.input) || void 0 === a || a.toggleEnabled(d), this._isTransitioning = !1;
            }
            getSceneInstance(t) {
                const e = this.getSceneDefinition(t);
                if (!e) return;
                if (this._sceneToInstance.has(t)) return this._sceneToInstance.get(t);
                if (e instanceof qr) return this._sceneToInstance.set(t, e), e;
                const i = new e;
                return this._sceneToInstance.set(t, i), i;
            }
            async maybeLoadScene(t, e = !1) {
                var i;
                const s = null !== (i = this._getLoader(t)) && void 0 !== i ? i : new Hi, n = this.getSceneDefinition(t), r = this.getSceneInstance(t);
                n && r && !this._loadedScenes.has(r) && (r.onPreLoad(s), r.events.emit("preload", {
                    loader: s
                }), e ? this._engine.load(s, e) : await this._engine.load(s), this._loadedScenes.add(r));
            }
            async playTransition(t, e) {
                var i, s, n, r, o, a, h;
                if (this.isInitialized) {
                    if (t) {
                        this.currentTransition = t;
                        const a = null === (s = null === (i = e.input) || void 0 === i ? void 0 : i.enabled) || void 0 === s || s;
                        null === (n = e.input) || void 0 === n || n.toggleEnabled(!t.blockInput), null === (r = this._engine.input) || void 0 === r || r.toggleEnabled(!t.blockInput), this.currentTransition._addToTargetScene(this._engine, e), await this.currentTransition._play(), null === (o = e.input) || void 0 === o || o.toggleEnabled(a);
                    }
                    null === (a = this.currentTransition) || void 0 === a || a.kill(), null === (h = this.currentTransition) || void 0 === h || h.reset(), this.currentTransition = void 0;
                } else this._deferredTransition = t;
            }
            async swapScene(t, e) {
                const i = this._engine;
                if (!this.isInitialized) return void (this._deferredGoto = t);
                const s = this.getSceneInstance(t);
                if (s) {
                    const n = this.currentScene, r = s;
                    if (this._logger.debug("Going to scene:", t), this.currentScene.isInitialized) {
                        const t = {
                            engine: i,
                            previousScene: n,
                            nextScene: r
                        };
                        await this.currentScene._deactivate(t), this.currentScene.events.emit("deactivate", new $e(t, this.currentScene)), this.currentScene.input.clear();
                    }
                    const o = this._sceneToLoader.get(t);
                    await (null == o ? void 0 : o.areResourcesLoaded()), this.currentScene = r, this.currentSceneName = t, i.screen.setCurrentCamera(r.camera), await this.currentScene._initialize(i);
                    const a = {
                        engine: i,
                        previousScene: n,
                        nextScene: r,
                        data: e
                    };
                    await this.currentScene._activate(a), this.currentScene.events.emit("activate", new Ze(a, this.currentScene));
                } else this._logger.error("Scene", t, "does not exist!");
            }
            _emitEvent(t, e, i) {
                const s = this.getSceneDefinition(e), n = this.getSceneDefinition(i);
                this.events.emit(t, {
                    sourceScene: s,
                    sourceName: e,
                    destinationScene: n,
                    destinationName: i
                });
            }
        }
        function uo() {
            const t = {
                scope: (e, i)=>{
                    const s = t.value;
                    t.value = e;
                    try {
                        return i();
                    } catch (t) {
                        throw t;
                    } finally{
                        t.value = s;
                    }
                },
                value: void 0
            };
            return t;
        }
        function _o(t) {
            return t.value;
        }
        const go = {
            textureCollectInterval: 6e4
        };
        class po {
            constructor(t){
                this.options = t, this._running = !1, this._collectionMap = new Map, this._collectors = new Map, this.collectStaleResources = (t)=>{
                    if (this._running) {
                        for (const [t, [e, i]] of this._collectors.entries()){
                            const s = this.options.getTimestamp();
                            for (const [n, [r, o]] of this._collectionMap.entries()){
                                if (t !== r || o + i >= s) continue;
                                e(n) && this._collectionMap.delete(n);
                            }
                        }
                        this._collectHandle = requestIdleCallback(this.collectStaleResources);
                    }
                };
            }
            registerCollector(t, e, i) {
                this._collectors.set(t, [
                    i,
                    e
                ]);
            }
            addCollectableResource(t, e) {
                this._collectionMap.set(e, [
                    t,
                    this.options.getTimestamp()
                ]);
            }
            touch(t) {
                const e = this._collectionMap.get(t);
                e && this._collectionMap.set(t, [
                    e[0],
                    this.options.getTimestamp()
                ]);
            }
            forceCollectAll() {
                for (const [t, [e]] of this._collectors.entries())for (const [t] of this._collectionMap.entries())e(t) && this._collectionMap.delete(t);
            }
            start() {
                this._running = !0, this.collectStaleResources();
            }
            stop() {
                this._running = !1, cancelIdleCallback(this._collectHandle);
            }
        }
        c();
        const fo = {
            FallbackGraphicsContext: "fallbackgraphicscontext",
            Initialize: "initialize",
            Visible: "visible",
            Hidden: "hidden",
            Start: "start",
            Stop: "stop",
            PreUpdate: "preupdate",
            PostUpdate: "postupdate",
            PreFrame: "preframe",
            PostFrame: "postframe",
            PreDraw: "predraw",
            PostDraw: "postdraw"
        };
        var mo, vo;
        !function(t) {
            t[t.None = 0] = "None", t[t.Canvas = 1] = "Canvas", t[t.All = 2] = "All";
        }(mo || (mo = {}));
        class xo {
            static useEngine() {
                const t = _o(xo.Context);
                if (!t) throw new Error("Cannot inject engine with `useEngine()`, `useEngine()` was called outside of Engine lifecycle scope.");
                return t;
            }
            get canvasWidth() {
                return this.screen.canvasWidth;
            }
            get halfCanvasWidth() {
                return this.screen.halfCanvasWidth;
            }
            get canvasHeight() {
                return this.screen.canvasHeight;
            }
            get halfCanvasHeight() {
                return this.screen.halfCanvasHeight;
            }
            get drawWidth() {
                return this.screen.drawWidth;
            }
            get halfDrawWidth() {
                return this.screen.halfDrawWidth;
            }
            get drawHeight() {
                return this.screen.drawHeight;
            }
            get halfDrawHeight() {
                return this.screen.halfDrawHeight;
            }
            get isHiDpi() {
                return this.screen.isHiDpi;
            }
            get stats() {
                return this.debug.stats;
            }
            get currentScene() {
                return this.director.currentScene;
            }
            get currentSceneName() {
                return this.director.currentSceneName;
            }
            get rootScene() {
                return this.director.rootScene;
            }
            get scenes() {
                return this.director.scenes;
            }
            get isFullscreen() {
                return this.screen.isFullScreen;
            }
            get displayMode() {
                return this.screen.displayMode;
            }
            get pixelRatio() {
                return this.screen.pixelRatio;
            }
            get isDebug() {
                return this._isDebug;
            }
            get snapToPixel() {
                return this.graphicsContext.snapToPixel;
            }
            set snapToPixel(t) {
                this.graphicsContext.snapToPixel = t;
            }
            emit(t, e) {
                this.events.emit(t, e);
            }
            on(t, e) {
                return this.events.on(t, e);
            }
            once(t, e) {
                return this.events.once(t, e);
            }
            off(t, e) {
                this.events.off(t, e);
            }
            constructor(t){
                var e, i, s, n, r, o, a, h, l;
                this.scope = (t)=>xo.Context.scope(this, t), this.version = ga, this.events = new g, this.maxFps = Number.POSITIVE_INFINITY, this._inputEnabled = !0, this._suppressPlayButton = !1, this.pauseAudioWhenHidden = !0, this._isDebug = !1, this.enableCanvasTransparency = !0, this.onFatalException = (t)=>{
                    k.getInstance().fatal(t, t.stack);
                }, this._toaster = new ho, this._timescale = 1, this._isInitialized = !1, this._originalOptions = {}, this._handleWebGLContextLost = (t)=>{
                    var e;
                    t.preventDefault(), this.clock.stop(), this._logger.fatalOnce("WebGL Graphics Lost", t);
                    const i = document.createElement("div");
                    i.id = "ex-webgl-graphics-context-lost", i.style.position = "absolute", i.style.zIndex = "99", i.style.left = "50%", i.style.top = "50%", i.style.display = "flex", i.style.flexDirection = "column", i.style.transform = "translate(-50%, -50%)", i.style.backgroundColor = "white", i.style.padding = "10px", i.style.borderStyle = "solid 1px";
                    const s = document.createElement("div");
                    if (s.innerHTML = '\n      <h1>There was an issue rendering, please refresh the page.</h1>\n      <div>\n        <p>WebGL Graphics Context Lost</p>\n\n        <button id="ex-webgl-graphics-reload">Refresh Page</button>\n\n        <p>There are a few reasons this might happen:</p>\n        <ul>\n          <li>Two or more pages are placing a high demand on the GPU</li>\n          <li>Another page or operation has stalled the GPU and the browser has decided to reset the GPU</li>\n          <li>The computer has multiple GPUs and the user has switched between them</li>\n          <li>Graphics driver has crashed or restarted</li>\n          <li>Graphics driver was updated</li>\n        </ul>\n      </div>\n    ', i.appendChild(s), null === (e = this.canvas) || void 0 === e ? void 0 : e.parentElement) {
                        this.canvas.parentElement.appendChild(i);
                        const t = s.querySelector("#ex-webgl-graphics-reload");
                        null == t || t.addEventListener("click", ()=>location.reload());
                    }
                }, this._performanceThresholdTriggered = !1, this._fpsSamples = [], this._disposed = !1, this._isLoading = !1, this._hideLoader = !1, this._isReadyFuture = new _, this.currentFrameElapsedMs = 0, this.currentFrameLagMs = 0, this._lagMs = 0, this._screenShotRequests = [], t = {
                    ...xo._DEFAULT_ENGINE_OPTIONS,
                    ...t
                }, this._originalOptions = t, d.freeze(), this.browser = new to(window, document);
                const c = new Vi;
                if (!t.suppressMinimumBrowserFeatureDetection && !(this._compatible = c.test())) {
                    const e = document.createElement("div");
                    if (e.innerText = "Sorry, your browser does not support all the features needed for Excalibur", document.body.appendChild(e), c.failedTests.forEach(function(t) {
                        const e = document.createElement("div");
                        e.innerText = "Browser feature missing " + t, document.body.appendChild(e);
                    }), t.canvasElementId) {
                        const e = document.getElementById(t.canvasElementId);
                        e && e.parentElement.removeChild(e);
                    }
                    return;
                }
                if (this._compatible = !0, console.log && !t.suppressConsoleBootMessage && (console.log(`%cPowered by Excalibur.js (v${ga})`, "background: #176BAA; color: white; border-radius: 5px; padding: 15px; font-size: 1.5em; line-height: 80px;"), console.log("\n      /| ________________\nO|===|* >________________>\n      \\|"), console.log("Visit", "http://excaliburjs.com", "for more information")), t.suppressPlayButton && (this._suppressPlayButton = !0), this._logger = k.getInstance(), this._logger.defaultLevel === M.Debug && c.logBrowserFeatures(), this._logger.debug("Building engine..."), !0 === t.garbageCollection ? this.garbageCollectorConfig = {
                    ...go
                } : !1 === t.garbageCollection ? (this._logger.warn("WebGL Garbage Collection Disabled!!! If you leak any images over time your game will crash when GPU memory is exhausted"), this.garbageCollectorConfig = null) : this.garbageCollectorConfig = {
                    ...go,
                    ...t.garbageCollection
                }, this._garbageCollector = new po({
                    getTimestamp: Date.now
                }), this.canvasElementId = t.canvasElementId, t.canvasElementId) {
                    if (this._logger.debug("Using Canvas element specified: " + t.canvasElementId), null === document.getElementById(t.canvasElementId)) throw new Error("Cannot find existing element in the DOM, please ensure element is created prior to engine creation.");
                    this.canvas = document.getElementById(t.canvasElementId);
                } else t.canvasElement ? (this._logger.debug("Using Canvas element specified:", t.canvasElement), this.canvas = t.canvasElement) : (this._logger.debug("Using generated canvas element"), this.canvas = document.createElement("canvas"));
                this.canvas && !t.enableCanvasContextMenu && this.canvas.addEventListener("contextmenu", (t)=>{
                    t.preventDefault();
                });
                let u, p, f, m, v, x, w = null !== (e = t.displayMode) && void 0 !== e ? e : bi.Fixed;
                t.width && t.height || t.viewport ? (void 0 === t.displayMode && (w = bi.Fixed), this._logger.debug("Engine viewport is size " + t.width + " x " + t.height)) : t.displayMode || (this._logger.debug("Engine viewport is fit"), w = bi.FitScreen), this.grabWindowFocus = t.grabWindowFocus, this.pointerScope = t.pointerScope, this._originalDisplayMode = w, "object" == typeof t.antialiasing ? { pixelArtSampler: u, nativeContextAntialiasing: f, multiSampleAntialiasing: x, filtering: v, canvasImageRendering: m } = {
                    ...t.pixelArt ? io : eo,
                    ...t.antialiasing
                } : (u = !!t.pixelArt, f = !1, x = t.antialiasing, m = t.antialiasing ? "auto" : "pixelated", v = t.antialiasing ? ot.Blended : ot.Pixel), f && x && this._logger.warnOnce("Cannot use antialias setting nativeContextAntialiasing and multiSampleAntialiasing at the same time, they are incompatible settings. If you aren't sure use multiSampleAntialiasing"), t.pixelArt && (p = .25), t.antialiasing && v !== ot.Pixel || (p = 0), p = null !== (s = null !== (i = t.uvPadding) && void 0 !== i ? i : p) && void 0 !== s ? s : .01;
                let y = d.isEnabled("use-canvas-context");
                if (!y) try {
                    this.graphicsContext = new vi({
                        canvasElement: this.canvas,
                        enableTransparency: this.enableCanvasTransparency,
                        pixelArtSampler: u,
                        antialiasing: f,
                        multiSampleAntialiasing: x,
                        uvPadding: p,
                        powerPreference: t.powerPreference,
                        backgroundColor: t.backgroundColor,
                        snapToPixel: t.snapToPixel,
                        useDrawSorting: t.useDrawSorting,
                        garbageCollector: this.garbageCollectorConfig ? {
                            garbageCollector: this._garbageCollector,
                            collectionInterval: this.garbageCollectorConfig.textureCollectInterval
                        } : null,
                        handleContextLost: null !== (n = t.handleContextLost) && void 0 !== n ? n : this._handleWebGLContextLost,
                        handleContextRestored: t.handleContextRestored
                    });
                } catch (t) {
                    this._logger.warn(`Excalibur could not load webgl for some reason (${t.message}) and loaded a Canvas 2D fallback. Some features of Excalibur will not work in this mode. \n\nRead more about this issue at https://excaliburjs.com/docs/performance`), y = !0;
                }
                y && (this.graphicsContext = new yi({
                    canvasElement: this.canvas,
                    enableTransparency: this.enableCanvasTransparency,
                    antialiasing: f,
                    backgroundColor: t.backgroundColor,
                    snapToPixel: t.snapToPixel,
                    useDrawSorting: t.useDrawSorting
                })), this.screen = new Ti({
                    canvas: this.canvas,
                    context: this.graphicsContext,
                    antialiasing: f,
                    canvasImageRendering: m,
                    browser: this.browser,
                    viewport: null !== (r = t.viewport) && void 0 !== r ? r : t.width && t.height ? {
                        width: t.width,
                        height: t.height
                    } : Ci.SVGA,
                    resolution: t.resolution,
                    displayMode: w,
                    pixelRatio: t.suppressHiDPIScaling ? 1 : null !== (o = t.pixelRatio) && void 0 !== o ? o : null
                }), ct.filtering = v, t.backgroundColor && (this.backgroundColor = t.backgroundColor.clone()), this.maxFps = null !== (a = t.maxFps) && void 0 !== a ? a : this.maxFps, this.fixedUpdateTimestep = null !== (h = t.fixedUpdateTimestep) && void 0 !== h ? h : this.fixedUpdateTimestep, this.fixedUpdateFps = null !== (l = t.fixedUpdateFps) && void 0 !== l ? l : this.fixedUpdateFps, this.fixedUpdateTimestep = this.fixedUpdateTimestep || 1e3 / this.fixedUpdateFps, this.clock = new ro({
                    maxFps: this.maxFps,
                    tick: this._mainloop.bind(this),
                    onFatalException: (t)=>this.onFatalException(t)
                }), this.enableCanvasTransparency = t.enableCanvasTransparency, "boolean" == typeof t.physics ? this.physics = {
                    ...as(),
                    enabled: t.physics
                } : (this.physics = {
                    ...as()
                }, Y(this.physics, t.physics)), this.debug = new jr(this), this.director = new co(this, t.scenes), this._initialize(t), window.___EXCALIBUR_DEVTOOL = this, xo.InstanceCount++;
            }
            _monitorPerformanceThresholdAndTriggerFallback() {
                const { allow: t } = this._originalOptions.configurePerformanceCanvas2DFallback;
                let { threshold: e, showPlayerMessage: i } = this._originalOptions.configurePerformanceCanvas2DFallback;
                if (void 0 === e && (e = xo._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.threshold), void 0 === i && (i = xo._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.showPlayerMessage), !d.isEnabled("use-canvas-context") && t && this.ready && !this._performanceThresholdTriggered) {
                    this._fpsSamples.length === e.numberOfFrames && this._fpsSamples.splice(0, 1), this._fpsSamples.push(this.clock.fpsSampler.fps);
                    let t = 0;
                    for(let e = 0; e < this._fpsSamples.length; e++)t += this._fpsSamples[e];
                    const s = t / this._fpsSamples.length;
                    this._fpsSamples.length === e.numberOfFrames && s <= e.fps && (this._performanceThresholdTriggered = !0, this._logger.warn('Switching to browser 2D Canvas fallback due to performance. Some features of Excalibur will not work in this mode.\nthis might mean your browser doesn\'t have webgl enabled or hardware acceleration is unavailable.\n\nIf in Chrome:\n  * Visit Settings > Advanced > System, and ensure "Use Hardware Acceleration" is checked.\n  * Visit chrome://flags/#ignore-gpu-blocklist and ensure "Override software rendering list" is "enabled"\nIf in Firefox, visit about:config\n  * Ensure webgl.disabled = false\n  * Ensure webgl.force-enabled = true\n  * Ensure layers.acceleration.force-enabled = true\n\nRead more about this issue at https://excaliburjs.com/docs/performance'), i && this._toaster.toast("Excalibur is encountering performance issues. It's possible that your browser doesn't have hardware acceleration enabled. Visit [LINK] for more information and potential solutions.", "https://excaliburjs.com/docs/performance"), this.useCanvas2DFallback(), this.emit("fallbackgraphicscontext", this.graphicsContext));
                }
            }
            useCanvas2DFallback() {
                var t, e, i;
                const s = this.canvas.cloneNode(!1);
                this.canvas.parentNode.replaceChild(s, this.canvas), this.canvas = s;
                const n = {
                    ...this._originalOptions,
                    antialiasing: this.screen.antialiasing
                }, r = this._originalDisplayMode;
                this.graphicsContext = new yi({
                    canvasElement: this.canvas,
                    enableTransparency: this.enableCanvasTransparency,
                    antialiasing: n.antialiasing,
                    backgroundColor: n.backgroundColor,
                    snapToPixel: n.snapToPixel,
                    useDrawSorting: n.useDrawSorting
                }), this.screen && this.screen.dispose(), this.screen = new Ti({
                    canvas: this.canvas,
                    context: this.graphicsContext,
                    antialiasing: null === (t = n.antialiasing) || void 0 === t || t,
                    browser: this.browser,
                    viewport: null !== (e = n.viewport) && void 0 !== e ? e : n.width && n.height ? {
                        width: n.width,
                        height: n.height
                    } : Ci.SVGA,
                    resolution: n.resolution,
                    displayMode: r,
                    pixelRatio: n.suppressHiDPIScaling ? 1 : null !== (i = n.pixelRatio) && void 0 !== i ? i : null
                }), this.screen.setCurrentCamera(this.currentScene.camera), this.input.pointers.detach();
                const o = n && n.pointerScope === a.Document ? document : this.canvas;
                this.input.pointers = this.input.pointers.recreate(o, this), this.input.pointers.init();
            }
            dispose() {
                this._disposed || (this._disposed = !0, this.stop(), this._garbageCollector.forceCollectAll(), this.input.toggleEnabled(!1), this.canvas.parentNode.removeChild(this.canvas), this.canvas = null, this.screen.dispose(), this.graphicsContext.dispose(), this.graphicsContext = null, xo.InstanceCount--);
            }
            isDisposed() {
                return this._disposed;
            }
            getWorldBounds() {
                return this.screen.getWorldBounds();
            }
            get timescale() {
                return this._timescale;
            }
            set timescale(t) {
                t < 0 ? k.getInstance().warnOnce("engine.timescale to a value less than 0 are ignored") : this._timescale = t;
            }
            addTimer(t) {
                return this.currentScene.addTimer(t);
            }
            removeTimer(t) {
                return this.currentScene.removeTimer(t);
            }
            addScene(t, e) {
                return this.director.add(t, e), this;
            }
            removeScene(t) {
                this.director.remove(t);
            }
            add(t) {
                if (2 === arguments.length) return void this.director.add(arguments[0], arguments[1]);
                const e = this.director.getDeferredScene();
                e instanceof qr ? e.add(t) : this.currentScene.add(t);
            }
            remove(t) {
                t instanceof li && this.currentScene.remove(t), (t instanceof qr || Vr(t)) && this.removeScene(t), "string" == typeof t && this.removeScene(t);
            }
            async goToScene(t, e) {
                await this.scope(async ()=>{
                    await this.director.goToScene(t, e);
                });
            }
            screenToWorldCoordinates(t) {
                return this.screen.screenToWorldCoordinates(t);
            }
            worldToScreenCoordinates(t) {
                return this.screen.worldToScreenCoordinates(t);
            }
            _initialize(t) {
                var e, i;
                this.pageScrollPreventionMode = t.scrollPreventionMode;
                const s = t && t.pointerScope === a.Document ? document : this.canvas, n = null === (i = null === (e = this._originalOptions) || void 0 === e ? void 0 : e.grabWindowFocus) || void 0 === i || i;
                this.input = new Nr({
                    pointerTarget: s,
                    grabWindowFocus: n,
                    engine: this
                }), this.inputMapper = this.input.inputMapper, this.browser.document.on("visibilitychange", ()=>{
                    "hidden" === document.visibilityState ? (this.events.emit("hidden", new Ue(this)), this._logger.debug("Window hidden")) : "visible" === document.visibilityState && (this.events.emit("visible", new ze(this)), this._logger.debug("Window visible"));
                }), this.canvasElementId || t.canvasElement || document.body.appendChild(this.canvas);
            }
            toggleInputEnabled(t) {
                this._inputEnabled = t, this.input.toggleEnabled(this._inputEnabled);
            }
            onInitialize(t) {}
            get isInitialized() {
                return this._isInitialized;
            }
            async _overrideInitialize(t) {
                this.isInitialized || (await this.director.onInitialize(), await this.onInitialize(t), this.events.emit("initialize", new Ye(t, this)), this._isInitialized = !0);
            }
            _update(t) {
                var e;
                if (this._isLoading) return null === (e = this._loader) || void 0 === e || e.onUpdate(this, t), void this.input.update();
                this.clock.__runScheduledCbs("preupdate"), this._preupdate(t), this.currentScene.update(this, t), this.graphicsContext.updatePostProcessors(t), this.clock.__runScheduledCbs("postupdate"), this._postupdate(t), this.input.update();
            }
            _preupdate(t) {
                this.emit("preupdate", new Ie(this, t, this)), this.onPreUpdate(this, t);
            }
            onPreUpdate(t, e) {}
            _postupdate(t) {
                this.emit("postupdate", new Re(this, t, this)), this.onPostUpdate(this, t);
            }
            onPostUpdate(t, e) {}
            _draw(t) {
                var e, i;
                this.graphicsContext.backgroundColor = null !== (e = this.currentScene.backgroundColor) && void 0 !== e ? e : this.backgroundColor, this.graphicsContext.beginDrawLifecycle(), this.graphicsContext.clear(), this.clock.__runScheduledCbs("predraw"), this._predraw(this.graphicsContext, t), this._isLoading ? this._hideLoader || (null === (i = this._loader) || void 0 === i || i.canvas.draw(this.graphicsContext, 0, 0), this.clock.__runScheduledCbs("postdraw"), this.graphicsContext.flush(), this.graphicsContext.endDrawLifecycle()) : (this.currentScene.draw(this.graphicsContext, t), this.clock.__runScheduledCbs("postdraw"), this._postdraw(this.graphicsContext, t), this.graphicsContext.flush(), this.graphicsContext.endDrawLifecycle(), this._checkForScreenShots());
            }
            _predraw(t, e) {
                this.emit("predraw", new Ce(t, e, this)), this.onPreDraw(t, e);
            }
            onPreDraw(t, e) {}
            _postdraw(t, e) {
                this.emit("postdraw", new Ae(t, e, this)), this.onPostDraw(t, e);
            }
            onPostDraw(t, e) {}
            showDebug(t) {
                this._isDebug = t;
            }
            toggleDebug() {
                return this._isDebug = !this._isDebug, this._isDebug;
            }
            get loadingComplete() {
                return !this._isLoading;
            }
            get ready() {
                return this._isReadyFuture.isCompleted;
            }
            isReady() {
                return this._isReadyFuture.promise;
            }
            async start(t, e) {
                await this.scope(async ()=>{
                    if (!this._compatible) throw new Error("Excalibur is incompatible with your browser");
                    let i;
                    return this._isLoading = !0, t instanceof Hi ? i = t : "string" == typeof t && (this.director.configureStart(t, e), i = this.director.mainLoader), this._logger.debug("Starting game clock..."), this.browser.resume(), this.clock.start(), this.garbageCollectorConfig && this._garbageCollector.start(), this._logger.debug("Game clock started"), await this.load(null != i ? i : new Wi), await this._overrideInitialize(this), this._isReadyFuture.resolve(), this.emit("start", new ye(this)), this._isReadyFuture.promise;
                });
            }
            _mainloop(t) {
                this.scope(()=>{
                    this.emit("preframe", new Fe(this, this.stats.prevFrame));
                    const e = t * this.timescale;
                    this.currentFrameElapsedMs = e;
                    const i = this.stats.prevFrame.id + 1;
                    this.stats.currFrame.reset(), this.stats.currFrame.id = i, this.stats.currFrame.elapsedMs = e, this.stats.currFrame.fps = this.clock.fpsSampler.fps, Et.clear();
                    const s = this.clock.now(), n = this.fixedUpdateTimestep;
                    if (this.fixedUpdateTimestep) for(this._lagMs += e; this._lagMs >= n;)this._update(n), this._lagMs -= n;
                    else this._update(e);
                    const r = this.clock.now();
                    this.currentFrameLagMs = this._lagMs, this._draw(e);
                    const o = this.clock.now();
                    this.stats.currFrame.duration.update = r - s, this.stats.currFrame.duration.draw = o - r, this.stats.currFrame.graphics.drawnImages = Et.DrawnImagesCount, this.stats.currFrame.graphics.drawCalls = Et.DrawCallCount, this.emit("postframe", new Me(this, this.stats.currFrame)), this.stats.prevFrame.reset(this.stats.currFrame), this._monitorPerformanceThresholdAndTriggerFallback();
                });
            }
            stop() {
                this.clock.isRunning() && (this.emit("stop", new be(this)), this.browser.pause(), this.clock.stop(), this._garbageCollector.stop(), this._logger.debug("Game stopped"));
            }
            isRunning() {
                return this.clock.isRunning();
            }
            screenshot(t = !1) {
                return new Promise((e)=>{
                    this._screenShotRequests.push({
                        preserveHiDPIResolution: t,
                        resolve: e
                    });
                });
            }
            _checkForScreenShots() {
                for (const t of this._screenShotRequests){
                    const e = t.preserveHiDPIResolution ? this.canvas.width : this.screen.resolution.width, i = t.preserveHiDPIResolution ? this.canvas.height : this.screen.resolution.height, s = document.createElement("canvas");
                    s.width = e, s.height = i;
                    const n = s.getContext("2d");
                    n.imageSmoothingEnabled = this.screen.antialiasing, n.drawImage(this.canvas, 0, 0, e, i);
                    const r = new Image, o = s.toDataURL("image/png");
                    r.onload = ()=>{
                        t.resolve(r);
                    }, r.src = o;
                }
                this._screenShotRequests.length = 0;
            }
            async load(t, e = !1) {
                await this.scope(async ()=>{
                    try {
                        if (t.isLoaded()) return;
                        this._loader = t, this._isLoading = !0, this._hideLoader = e, t instanceof Wi && (t.suppressPlayButton = t.suppressPlayButton || this._suppressPlayButton), this._loader.onInitialize(this), await t.load();
                    } catch (t) {
                        this._logger.error("Error loading resources, things may not behave properly", t), await Promise.resolve();
                    } finally{
                        this._isLoading = !1, this._hideLoader = !1, this._loader = null;
                    }
                });
            }
        }
        xo.Context = uo(), xo.InstanceCount = 0, xo._DEFAULT_ENGINE_OPTIONS = {
            width: 0,
            height: 0,
            enableCanvasTransparency: !0,
            useDrawSorting: !0,
            configurePerformanceCanvas2DFallback: {
                allow: !1,
                showPlayerMessage: !1,
                threshold: {
                    fps: 20,
                    numberOfFrames: 100
                }
            },
            canvasElementId: "",
            canvasElement: void 0,
            enableCanvasContextMenu: !1,
            snapToPixel: !1,
            antialiasing: !0,
            pixelArt: !1,
            garbageCollection: !0,
            powerPreference: "high-performance",
            pointerScope: a.Canvas,
            suppressConsoleBootMessage: null,
            suppressMinimumBrowserFeatureDetection: null,
            suppressHiDPIScaling: null,
            suppressPlayButton: null,
            grabWindowFocus: !0,
            scrollPreventionMode: mo.Canvas,
            backgroundColor: R.fromHex("#2185d0")
        };
        class wo extends Tn {
            set maxWidth(t) {
                this._text.maxWidth = t;
            }
            get maxWidth() {
                return this._text.maxWidth;
            }
            get font() {
                return this._font;
            }
            set font(t) {
                this._font = t, this._text.font = t;
            }
            get text() {
                return this._text.text;
            }
            set text(t) {
                this._text.text = t;
            }
            get color() {
                return this._text.color;
            }
            set color(t) {
                this._text && (this._text.color = t);
            }
            get opacity() {
                return this.graphics.opacity;
            }
            set opacity(t) {
                this.graphics.opacity = t;
            }
            get spriteFont() {
                return this._spriteFont;
            }
            set spriteFont(t) {
                t && (this._spriteFont = t, this._text.font = this._spriteFont);
            }
            constructor(t){
                super(t), this._font = new _e, this._text = new ge({
                    text: "",
                    font: this._font
                });
                const { text: e, pos: i, x: s, y: n, spriteFont: r, font: o, color: a, maxWidth: h } = {
                    text: "",
                    ...t
                };
                this.pos = null != i ? i : s && n ? I(s, n) : this.pos, this.text = null != e ? e : this.text, this.font = null != o ? o : this.font, this.maxWidth = null != h ? h : this.maxWidth, this.spriteFont = null != r ? r : this.spriteFont, this._text.color = null != a ? a : this.color;
                const l = this.get(fe);
                l.anchor = E.Zero, l.use(this._text);
            }
            _initialize(t) {
                super._initialize(t);
            }
            getTextWidth() {
                return this._text.width;
            }
        }
        !function(t) {
            t.Circle = "circle", t.Rectangle = "rectangle";
        }(vo || (vo = {}));
        class yo extends Tn {
            constructor(t){
                var e, i;
                super({
                    width: null !== (e = t.width) && void 0 !== e ? e : 0,
                    height: null !== (i = t.height) && void 0 !== i ? i : 0
                }), this._particlesToEmit = 0, this._particlePool = new j(()=>new ui({}), (t)=>t, 500), this.numParticles = 0, this.isEmitting = !0, this.deadParticles = [], this.emitRate = 1, this.emitterType = vo.Rectangle, this.radius = 0, this.particle = {
                    life: 2e3,
                    transform: _i.Global,
                    graphic: void 0,
                    opacity: 1,
                    angularVelocity: 0,
                    focus: void 0,
                    focusAccel: void 0,
                    randomRotation: !1
                }, this._activeParticles = [];
                const { particle: s, x: n, y: r, z: o, pos: a, isEmitting: h, emitRate: l, emitterType: c, radius: d, random: u } = {
                    ...t
                };
                this.particle = {
                    ...this.particle,
                    ...s
                }, this.pos = null != a ? a : I(null != n ? n : 0, null != r ? r : 0), this.z = null != o ? o : 0, this.isEmitting = null != h ? h : this.isEmitting, this.emitRate = null != l ? l : this.emitRate, this.emitterType = null != c ? c : this.emitterType, this.radius = null != d ? d : this.radius, this.body.collisionType = qi.PreventCollision, this.random = null != u ? u : new f;
            }
            removeParticle(t) {
                this.deadParticles.push(t);
            }
            emitParticles(t) {
                var e;
                if (!(t <= 0)) {
                    t |= 0;
                    for(let i = 0; i < t; i++){
                        const t = this._createParticle();
                        (null === (e = null == this ? void 0 : this.scene) || void 0 === e ? void 0 : e.world) && (this.particle.transform === _i.Global ? this.scene.world.add(t) : this.addChild(t)), this._activeParticles.push(t);
                    }
                }
            }
            clearParticles() {
                for(let t = 0; t < this._activeParticles.length; t++)this.removeParticle(this._activeParticles[t]);
            }
            _createParticle() {
                let t = 0, e = 0;
                const i = S(this.particle.minAngle || 0, this.particle.maxAngle || 2 * Math.PI, this.random), s = S(this.particle.minSpeed || 0, this.particle.maxSpeed || 0, this.random), n = this.particle.startSize || S(this.particle.minSize || 5, this.particle.maxSize || 5, this.random), r = s * Math.cos(i), o = s * Math.sin(i);
                if (this.emitterType === vo.Rectangle) t = S(0, this.width, this.random), e = S(0, this.height, this.random);
                else if (this.emitterType === vo.Circle) {
                    const s = S(0, this.radius, this.random);
                    t = s * Math.cos(i), e = s * Math.sin(i);
                }
                const a = this._particlePool.rent();
                return a.configure({
                    life: this.particle.life,
                    opacity: this.particle.opacity,
                    beginColor: this.particle.beginColor,
                    endColor: this.particle.endColor,
                    pos: I(t, e),
                    vel: I(r, o),
                    acc: this.particle.acc,
                    angularVelocity: this.particle.angularVelocity,
                    startSize: this.particle.startSize,
                    endSize: this.particle.endSize,
                    size: n,
                    graphic: this.particle.graphic,
                    fade: this.particle.fade
                }), a.registerEmitter(this), this.particle.randomRotation && (a.transform.rotation = S(0, 2 * Math.PI, this.random)), this.particle.focus && (a.focus = this.particle.focus.add(I(this.pos.x, this.pos.y)), a.focusAccel = this.particle.focusAccel), a;
            }
            update(t, e) {
                var i;
                super.update(t, e), this.isEmitting && (this._particlesToEmit += this.emitRate * (e / 1e3), this._particlesToEmit > 1 && (this.emitParticles(Math.floor(this._particlesToEmit)), this._particlesToEmit = this._particlesToEmit - Math.floor(this._particlesToEmit)));
                for(let t = 0; t < this.deadParticles.length; t++){
                    (null === (i = null == this ? void 0 : this.scene) || void 0 === i ? void 0 : i.world) && (this.scene.world.remove(this.deadParticles[t], !1), this._particlePool.return(this.deadParticles[t]));
                    const e = this._activeParticles.indexOf(this.deadParticles[t]);
                    e > -1 && this._activeParticles.splice(e, 1);
                }
                this.deadParticles.length = 0;
            }
        }
        function bo(t, e) {}
        class Co {
            constructor(t, e, i){
                var s;
                this.emitRate = 1, this._initialized = !1, this._vaos = [], this._buffers = [], this._drawIndex = 0, this._numInputFloats = 7, this._particleIndex = 0, this._uploadIndex = 0, this._wrappedLife = 0, this._wrappedParticles = 0, this._particleLife = 0, this._clearRequested = !1, this._emitted = [], this.emitter = t, this.particle = i, this._particleData = new Float32Array(this.emitter.maxParticles * this._numInputFloats), this._random = e, this._particleLife = null !== (s = this.particle.life) && void 0 !== s ? s : 2e3;
            }
            get isInitialized() {
                return this._initialized;
            }
            get maxParticles() {
                return this.emitter.maxParticles;
            }
            initialize(t, e) {
                if (this._initialized) return;
                const i = this.emitter.maxParticles, s = this._numInputFloats, n = this._particleData, r = t.createBuffer(), o = t.createVertexArray();
                t.bindVertexArray(o), t.bindBuffer(t.ARRAY_BUFFER, r), t.bufferData(t.ARRAY_BUFFER, i * s * 4, t.DYNAMIC_DRAW), t.bufferSubData(t.ARRAY_BUFFER, 0, n);
                let a = 0;
                t.vertexAttribPointer(0, 2, t.FLOAT, !1, 4 * s, 0), a += 8, t.vertexAttribPointer(1, 2, t.FLOAT, !1, 4 * s, a), a += 8, t.vertexAttribPointer(2, 1, t.FLOAT, !1, 4 * s, a), a += 4, t.vertexAttribPointer(3, 1, t.FLOAT, !1, 4 * s, a), a += 4, t.vertexAttribPointer(4, 1, t.FLOAT, !1, 4 * s, a), a += 4, t.enableVertexAttribArray(0), t.enableVertexAttribArray(1), t.enableVertexAttribArray(2), t.enableVertexAttribArray(3), t.enableVertexAttribArray(4), this._vaos.push(o), this._buffers.push(r), t.bindVertexArray(null), t.bindBuffer(t.ARRAY_BUFFER, null);
                const h = t.createBuffer(), l = t.createVertexArray();
                t.bindVertexArray(l), t.bindBuffer(t.ARRAY_BUFFER, h), t.bufferData(t.ARRAY_BUFFER, i * s * 4, t.DYNAMIC_DRAW), a = 0, t.vertexAttribPointer(0, 2, t.FLOAT, !1, 4 * s, 0), a += 8, t.vertexAttribPointer(1, 2, t.FLOAT, !1, 4 * s, a), a += 8, t.vertexAttribPointer(2, 1, t.FLOAT, !1, 4 * s, a), a += 4, t.vertexAttribPointer(3, 1, t.FLOAT, !1, 4 * s, a), a += 4, t.vertexAttribPointer(4, 1, t.FLOAT, !1, 4 * s, a), a += 4, t.enableVertexAttribArray(0), t.enableVertexAttribArray(1), t.enableVertexAttribArray(2), t.enableVertexAttribArray(3), t.enableVertexAttribArray(4), this._vaos.push(l), this._buffers.push(h), t.bindVertexArray(null), t.bindBuffer(t.ARRAY_BUFFER, null), this._currentVao = this._vaos[this._drawIndex % 2], this._currentBuffer = this._buffers[(this._drawIndex + 1) % 2], this._initialized = !0;
            }
            clearParticles() {
                this._particleData.fill(0), this._clearRequested = !0;
            }
            emitParticles(t) {
                const e = this._particleIndex, i = this.maxParticles * this._numInputFloats, s = t * this._numInputFloats + e;
                for(let t = e; t < s; t += this._numInputFloats){
                    const e = this._random.floating(this.particle.minAngle || 0, this.particle.maxAngle || m), i = this._random.floating(this.particle.minSpeed || 0, this.particle.maxSpeed || 0), s = this._random.floating(this.particle.minSpeed || 0, this.particle.maxSpeed || 0), n = i * Math.cos(e), r = s * Math.sin(e);
                    let o = 0, a = 0;
                    if (this.emitter.emitterType === vo.Rectangle) o = this._random.floating(-0.5, .5) * this.emitter.width, a = this._random.floating(-0.5, .5) * this.emitter.height;
                    else {
                        const t = this._random.floating(0, this.emitter.radius);
                        o = t * Math.cos(e), a = t * Math.sin(e);
                    }
                    const h = this.emitter.transform.apply(I(o, a)), l = [
                        this.particle.transform === _i.Local ? o : h.x,
                        this.particle.transform === _i.Local ? a : h.y,
                        n,
                        r,
                        this.particle.randomRotation ? S(0, m, this._random) : this.particle.rotation || 0,
                        this.particle.angularVelocity || 0,
                        this._particleLife
                    ];
                    this._particleData.set(l, t % this._particleData.length);
                }
                s >= i ? (this._wrappedParticles += (s - i) / this._numInputFloats, this._wrappedLife = this._particleLife) : this._wrappedLife > 0 && (this._wrappedParticles += t), this._particleIndex = s % i, this._emitted.push([
                    this._particleLife,
                    e
                ]);
            }
            _uploadEmitted(t) {
                this._particleIndex !== this._uploadIndex && (t.bindBuffer(t.ARRAY_BUFFER, this._buffers[(this._drawIndex + 1) % 2]), this._particleIndex >= this._uploadIndex ? t.bufferSubData(t.ARRAY_BUFFER, 4 * this._uploadIndex, this._particleData, this._uploadIndex, this._particleIndex - this._uploadIndex) : (t.bufferSubData(t.ARRAY_BUFFER, 4 * this._uploadIndex, this._particleData, this._uploadIndex, this._particleData.length - this._uploadIndex), this._wrappedParticles && t.bufferSubData(t.ARRAY_BUFFER, 0, this._particleData, 0, this._wrappedParticles * this._numInputFloats), this._wrappedLife = this._particleLife), t.bindBuffer(t.ARRAY_BUFFER, null)), this._uploadIndex = this._particleIndex % (this.maxParticles * this._numInputFloats);
            }
            update(t) {
                var e;
                if (this._particleLife = null !== (e = this.particle.life) && void 0 !== e ? e : this._particleLife, this._wrappedLife > 0 ? this._wrappedLife -= t : (this._wrappedLife = 0, this._wrappedParticles = 0), this._emitted.length) {
                    for(let e = this._emitted.length - 1; e >= 0; e--){
                        const i = this._emitted[e];
                        i[0] -= t;
                        i[0] <= 0 && this._emitted.splice(e, 1);
                    }
                    this._emitted.sort((t, e)=>t[0] - e[0]);
                }
            }
            draw(t) {
                if (this._initialized) {
                    if (this._clearRequested ? (t.bindBuffer(t.ARRAY_BUFFER, this._buffers[(this._drawIndex + 1) % 2]), t.bufferSubData(t.ARRAY_BUFFER, 0, this._particleData), t.bindBuffer(t.ARRAY_BUFFER, null), this._clearRequested = !1) : this._uploadEmitted(t), t.bindVertexArray(this._currentVao), t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, 0, this._currentBuffer), this._wrappedLife && this._emitted[0] && this._emitted[0][1] > 0) {
                        const e = this._emitted[0][1] / this._numInputFloats;
                        bo(), bo(), t.bindBufferRange(t.TRANSFORM_FEEDBACK_BUFFER, 0, this._currentBuffer, 4 * this._emitted[0][1], (this.maxParticles - e) * this._numInputFloats * 4), t.beginTransformFeedback(t.POINTS), t.drawArrays(t.POINTS, e, this.maxParticles - e), t.endTransformFeedback(), t.bindBufferRange(t.TRANSFORM_FEEDBACK_BUFFER, 0, this._currentBuffer, 0, 4 * this._emitted[0][1]), t.beginTransformFeedback(t.POINTS), t.drawArrays(t.POINTS, 0, e), t.endTransformFeedback();
                    } else t.bindBufferRange(t.TRANSFORM_FEEDBACK_BUFFER, 0, this._currentBuffer, 0, 4 * this._particleData.length), t.beginTransformFeedback(t.POINTS), t.drawArrays(t.POINTS, 0, this.maxParticles), t.endTransformFeedback();
                    t.bindVertexArray(null), t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, 0, null), this._currentVao = this._vaos[this._drawIndex % 2], this._currentBuffer = this._buffers[(this._drawIndex + 1) % 2], this._drawIndex = (this._drawIndex + 1) % 2;
                }
            }
        }
        Co.GPU_MAX_PARTICLES = 1e5;
        class Ao extends Tn {
            get pos() {
                return this.transform.pos;
            }
            set pos(t) {
                this.transform.pos = t;
            }
            get z() {
                return this.transform.z;
            }
            set z(t) {
                this.transform.z = t;
            }
            constructor(t){
                super({
                    name: "GpuParticleEmitter",
                    width: t.width,
                    height: t.height
                }), this.particle = {
                    life: 2e3,
                    transform: _i.Global,
                    graphic: void 0,
                    opacity: 1,
                    angularVelocity: 0,
                    focus: void 0,
                    focusAccel: void 0,
                    randomRotation: !1
                }, this.graphics = new fe, this.isEmitting = !1, this.emitRate = 1, this.emitterType = vo.Rectangle, this.radius = 0, this.maxParticles = 2e3, this._particlesToEmit = 0, this.addComponent(this.graphics, !0), this.graphics.onPostDraw = this.draw.bind(this);
                const { particle: e, maxParticles: i, x: s, y: n, z: r, pos: o, isEmitting: a, emitRate: h, emitterType: l, radius: c, random: d } = {
                    ...t
                };
                this.maxParticles = w(null != i ? i : this.maxParticles, 0, Co.GPU_MAX_PARTICLES), this.pos = null != o ? o : I(null != s ? s : 0, null != n ? n : 0), this.z = null != r ? r : 0, this.isEmitting = null != a ? a : this.isEmitting, this.emitRate = null != h ? h : this.emitRate, this.emitterType = null != l ? l : this.emitterType, this.radius = null != c ? c : this.radius, this.particle = {
                    ...this.particle,
                    ...e
                }, this.random = null != d ? d : new f, this.renderer = new Co(this, this.random, this.particle);
            }
            _initialize(t) {
                super._initialize(t);
                const e = t.graphicsContext;
                this.renderer.initialize(e.__gl, e);
            }
            update(t, e) {
                super.update(t, e), this.isEmitting && (this._particlesToEmit += this.emitRate * (e / 1e3), this._particlesToEmit > 1 && (this.emitParticles(Math.floor(this._particlesToEmit)), this._particlesToEmit = this._particlesToEmit - Math.floor(this._particlesToEmit))), this.renderer.update(e);
            }
            emitParticles(t) {
                t <= 0 || this.renderer.emitParticles(0 | t);
            }
            clearParticles() {
                this.renderer.clearParticles();
            }
            draw(t, e) {
                t.draw("ex.particle", this.renderer, e);
            }
        }
        class To extends li {
            getGraphics() {
                return this._graphics;
            }
            addGraphic(t, e) {
                this._graphics.push(t), this._gfx.isVisible = this.map.isVisible, this._gfx.opacity = this.map.opacity, (null == e ? void 0 : e.offset) && (this._gfx.offset = e.offset), this._gfx.localBounds = this._recalculateBounds();
            }
            _recalculateBounds() {
                let t = this._tileBounds.clone();
                for (const e of this._graphics){
                    const i = I(this.map.graphicsOffset.x - this.map.tileWidth / 2, this.map.graphicsOffset.y - (this.map.renderFromTopOfGraphic ? 0 : e.height - this.map.tileHeight));
                    t = t.combine(e.localBounds.translate(i));
                }
                return t;
            }
            removeGraphic(t) {
                const e = this._graphics.indexOf(t);
                e > -1 && this._graphics.splice(e, 1), this._gfx.localBounds = this._recalculateBounds();
            }
            clearGraphics() {
                this._graphics.length = 0, this._gfx.isVisible = !1, this._gfx.localBounds = this._recalculateBounds();
            }
            getColliders() {
                return this._colliders;
            }
            addCollider(t) {
                this._colliders.push(t), this.map.flagCollidersDirty();
            }
            removeCollider(t) {
                const e = this._colliders.indexOf(t);
                e > -1 && this._colliders.splice(e, 1), this.map.flagCollidersDirty();
            }
            clearColliders() {
                this._colliders.length = 0, this.map.flagCollidersDirty();
            }
            get pos() {
                return this.map.tileToWorld(I(this.x, this.y));
            }
            get center() {
                return this.pos.add(I(0, this.map.tileHeight / 2));
            }
            constructor(t, e, i, s){
                super([
                    new $t,
                    new fe({
                        offset: null != i ? i : E.Zero,
                        onPostDraw: (t, e)=>this.draw(t, e)
                    }),
                    new mr(s)
                ]), this.solid = !1, this.events = new g, this._tileBounds = new U, this._graphics = [], this._colliders = [], this.data = new Map, this.x = t, this.y = e, this.map = s, this._transform = this.get($t), this._isometricEntityComponent = this.get(mr);
                const n = this.map.tileWidth / 2, r = this.map.tileHeight / 2, o = (this.x - this.y) * n, a = (this.x + this.y) * r;
                this._transform.pos = I(o, a), this._isometricEntityComponent.elevation = s.elevation, this._gfx = this.get(fe), this._gfx.isVisible = !1;
                const h = this.map.tileWidth, l = this.map.tileHeight, c = I(0, this.map.renderFromTopOfGraphic ? l : 0);
                this._gfx.localBounds = this._tileBounds = new U({
                    left: -h / 2,
                    top: -l,
                    right: h / 2,
                    bottom: l
                }).translate(c);
            }
            draw(t, e) {
                const i = this.map.tileWidth / 2;
                t.save(), t.translate(-i, 0);
                for (const e of this._graphics)e.draw(t, this.map.graphicsOffset.x, this.map.graphicsOffset.y - (this.map.renderFromTopOfGraphic ? 0 : e.height - this.map.tileHeight));
                t.restore();
            }
        }
        class So extends li {
            get visible() {
                return this.isVisible;
            }
            set visible(t) {
                this.isVisible = t;
            }
            constructor(t){
                super([
                    new $t,
                    new Ss({
                        type: qi.Fixed
                    }),
                    new As,
                    new Is,
                    new Rn((t, e)=>this.debug(t, e), !1)
                ], t.name), this.elevation = 0, this.isVisible = !0, this.opacity = 1, this.renderFromTopOfGraphic = !1, this.graphicsOffset = I(0, 0), this._collidersDirty = !1, this._originalOffsets = new WeakMap;
                const { pos: e, tileWidth: i, tileHeight: s, columns: n, rows: r, renderFromTopOfGraphic: o, graphicsOffset: a, elevation: h } = t;
                this.transform = this.get($t), e && (this.transform.pos = e), this.collider = this.get(As), this.collider && this.collider.set(this._composite = new hs([])), this.pointer = this.get(Is), this.renderFromTopOfGraphic = null != o ? o : this.renderFromTopOfGraphic, this.graphicsOffset = null != a ? a : this.graphicsOffset, this.elevation = null != h ? h : this.elevation, this.tileWidth = i, this.tileHeight = s, this.columns = n, this.rows = r, this._pointerEventDispatcher = new Dn, this.tiles = new Array(n * r);
                for(let t = 0; t < r; t++)for(let e = 0; e < n; e++){
                    const i = new To(e, t, this.graphicsOffset, this);
                    this.tiles[e + t * n] = i, this.addChild(i), this._pointerEventDispatcher.addObject(i, (t)=>this.getTileByPoint(t.worldPos) === i, ()=>!0);
                }
                this.pointer.localBounds = U.fromDimension(i * n * this.transform.scale.x, s * r * this.transform.scale.y, I(.5, 0));
            }
            _processPointerToObject(t) {
                this._pointerEventDispatcher.processPointerToObject(t, this.tiles);
            }
            _dispatchPointerEvents(t) {
                this._pointerEventDispatcher.dispatchEvents(t, this.tiles);
            }
            update() {
                this._collidersDirty && (this.updateColliders(), this._collidersDirty = !1), this._pointerEventDispatcher.clear();
            }
            flagCollidersDirty() {
                this._collidersDirty = !0;
            }
            _getOrSetColliderOriginalOffset(t) {
                var e;
                if (this._originalOffsets.has(t)) return null !== (e = this._originalOffsets.get(t)) && void 0 !== e ? e : E.Zero;
                {
                    const e = t.offset;
                    return this._originalOffsets.set(t, e), e;
                }
            }
            updateColliders() {
                this._composite.clearColliders();
                const t = this.get($t).pos;
                for (const e of this.tiles)if (e.solid) for (const i of e.getColliders()){
                    const s = this._getOrSetColliderOriginalOffset(i);
                    i.offset = this.tileToWorld(I(e.x, e.y)).sub(t).add(s).sub(I(this.tileWidth / 2, this.tileHeight)), i.owner = this, this._composite.addCollider(i);
                }
                this.collider.update();
            }
            worldToTile(t) {
                t = t.sub(this.transform.globalPos);
                const e = this.tileWidth / 2, i = this.tileHeight / 2;
                return I(~~((t.x / e + t.y / i) / 2), ~~((t.y / i - t.x / e) / 2));
            }
            tileToWorld(t) {
                const e = this.tileWidth / 2, i = this.tileHeight / 2;
                return I((t.x - t.y) * e, (t.x + t.y) * i).add(this.transform.pos);
            }
            getTile(t, e) {
                return t < 0 || e < 0 || t >= this.columns || e >= this.rows ? null : this.tiles[t + e * this.columns];
            }
            getTileByPoint(t) {
                const e = this.worldToTile(t);
                return this.getTile(e.x, e.y);
            }
            _getMaxZIndex() {
                let t = Number.NEGATIVE_INFINITY;
                for (const e of this.tiles){
                    const i = e.get($t).z;
                    i > t && (t = i);
                }
                return t;
            }
            debug(t, e) {
                const { showAll: i, showPosition: s, positionColor: n, positionSize: r, showGrid: o, gridColor: a, gridWidth: h, showColliderGeometry: l } = e.isometric, { geometryColor: c, geometryLineWidth: d, geometryPointSize: u } = e.collider;
                if (t.save(), t.z = this._getMaxZIndex() + .5, i || o) {
                    for(let e = 0; e < this.rows + 1; e++){
                        const i = this.tileToWorld(I(0, e)), s = this.tileToWorld(I(this.columns, e));
                        t.drawLine(i, s, a, h);
                    }
                    for(let e = 0; e < this.columns + 1; e++){
                        const i = this.tileToWorld(I(e, 0)), s = this.tileToWorld(I(e, this.rows));
                        t.drawLine(i, s, a, h);
                    }
                }
                if (i || s) for (const e of this.tiles)t.drawCircle(this.tileToWorld(I(e.x, e.y)), r, n);
                if (i || l) {
                    for (const e of this.tiles)if (e.solid) for (const i of e.getColliders())i.debug(t, c, {
                        lineWidth: d,
                        pointSize: u
                    });
                }
                t.restore();
            }
        }
        class Po {
            constructor(t, e){
                this.id = Ds(), this._stopped = !1, this._sequenceBuilder = e, this._sequenceContext = new yn(t), this._actionQueue = this._sequenceContext.getQueue(), this._sequenceBuilder(this._sequenceContext);
            }
            update(t) {
                this._actionQueue.update(t);
            }
            isComplete() {
                return this._stopped || this._actionQueue.isComplete();
            }
            stop() {
                this._stopped = !0;
            }
            reset() {
                this._stopped = !1, this._actionQueue.reset();
            }
            clone(t) {
                return new Po(t, this._sequenceBuilder);
            }
        }
        class Eo {
            constructor(t){
                this.id = Ds(), this._actions = t;
            }
            update(t) {
                for(let e = 0; e < this._actions.length; e++)this._actions[e].update(t);
            }
            isComplete(t) {
                return this._actions.every((e)=>e.isComplete(t));
            }
            reset() {
                this._actions.forEach((t)=>t.reset());
            }
            stop() {
                this._actions.forEach((t)=>t.stop());
            }
        }
        class Io {
            constructor(t, e){
                this.bounds = t, this.options = e, this._defaultOptions = {
                    maxDepth: 10,
                    capacity: 10,
                    level: 0
                }, this.items = [], this._isDivided = !1, this.topLeft = null, this.topRight = null, this.bottomLeft = null, this.bottomRight = null, this.options = {
                    ...this._defaultOptions,
                    ...e
                }, this.halfWidth = t.width / 2, this.halfHeight = t.height / 2;
            }
            _split() {
                this._isDivided = !0;
                const t = {
                    maxDepth: this.options.maxDepth,
                    capacity: this.options.capacity,
                    level: this.options.level + 1
                };
                this.topLeft = new Io(new U({
                    left: this.bounds.left,
                    top: this.bounds.top,
                    right: this.bounds.left + this.halfWidth,
                    bottom: this.bounds.top + this.halfHeight
                }), t), this.topRight = new Io(new U({
                    left: this.bounds.left + this.halfWidth,
                    top: this.bounds.top,
                    right: this.bounds.right,
                    bottom: this.bounds.top + this.halfHeight
                }), t), this.bottomLeft = new Io(new U({
                    left: this.bounds.left,
                    top: this.bounds.top + this.halfHeight,
                    right: this.bounds.left + this.halfWidth,
                    bottom: this.bounds.bottom
                }), t), this.bottomRight = new Io(new U({
                    left: this.bounds.left + this.halfWidth,
                    top: this.bounds.top + this.halfHeight,
                    right: this.bounds.right,
                    bottom: this.bounds.bottom
                }), t);
            }
            _insertIntoSubNodes(t) {
                var e, i, s, n;
                (null === (e = this.topLeft) || void 0 === e ? void 0 : e.bounds.overlaps(t.bounds)) && this.topLeft.insert(t), (null === (i = this.topRight) || void 0 === i ? void 0 : i.bounds.overlaps(t.bounds)) && this.topRight.insert(t), (null === (s = this.bottomLeft) || void 0 === s ? void 0 : s.bounds.overlaps(t.bounds)) && this.bottomLeft.insert(t), (null === (n = this.bottomRight) || void 0 === n ? void 0 : n.bounds.overlaps(t.bounds)) && this.bottomRight.insert(t);
            }
            insert(t) {
                if (this._isDivided) this._insertIntoSubNodes(t);
                else if (this.items.push(t), this.items.length > this.options.capacity && this.options.level < this.options.maxDepth) {
                    this._isDivided || this._split();
                    for (const t of this.items)this._insertIntoSubNodes(t);
                    this.items.length = 0;
                }
            }
            remove(t) {
                var e, i, s, n;
                if (this.bounds.overlaps(t.bounds)) {
                    if (this._isDivided) (null === (e = this.topLeft) || void 0 === e ? void 0 : e.bounds.overlaps(t.bounds)) && this.topLeft.remove(t), (null === (i = this.topRight) || void 0 === i ? void 0 : i.bounds.overlaps(t.bounds)) && this.topRight.remove(t), (null === (s = this.bottomLeft) || void 0 === s ? void 0 : s.bounds.overlaps(t.bounds)) && this.bottomLeft.remove(t), (null === (n = this.bottomRight) || void 0 === n ? void 0 : n.bounds.overlaps(t.bounds)) && this.bottomRight.remove(t);
                    else {
                        const e = this.items.indexOf(t);
                        e > -1 && this.items.splice(e, 1);
                    }
                }
            }
            query(t) {
                let e = this.items;
                return this._isDivided && (this.topLeft.bounds.overlaps(t) && (e = e.concat(this.topLeft.query(t))), this.topRight.bounds.overlaps(t) && (e = e.concat(this.topRight.query(t))), this.bottomLeft.bounds.overlaps(t) && (e = e.concat(this.bottomLeft.query(t))), this.bottomRight.bounds.overlaps(t) && (e = e.concat(this.bottomRight.query(t)))), e = e.filter((t, i)=>e.indexOf(t) >= i), e;
            }
            clear() {
                this.items = [], this._isDivided = !1, this.topLeft = null, this.topRight = null, this.bottomLeft = null, this.bottomRight = null;
            }
            getAllItems() {
                let t = this.items;
                return this._isDivided && (t = t.concat(this.topLeft.getAllItems()), t = t.concat(this.topRight.getAllItems()), t = t.concat(this.bottomLeft.getAllItems()), t = t.concat(this.bottomRight.getAllItems())), t = t.filter((e, i)=>t.indexOf(e) >= i), t;
            }
            getTreeDepth() {
                return this._isDivided ? 1 + Math.max(this.topLeft.getTreeDepth(), this.topRight.getTreeDepth(), this.bottomLeft.getTreeDepth(), this.bottomRight.getTreeDepth()) : 0;
            }
            debug(t) {
                this.bounds.draw(t, R.Yellow), this._isDivided && (this.topLeft.bounds.draw(t, R.Yellow), this.topRight.bounds.draw(t, R.Yellow), this.bottomLeft.bounds.draw(t, R.Yellow), this.bottomRight.bounds.draw(t, R.Yellow));
            }
        }
        function Ro(t) {
            return !!t._initialize;
        }
        function Fo(t) {
            return !!t.onAdd;
        }
        function Mo(t) {
            return !!t.onRemove;
        }
        function Do(t) {
            return !!t.onInitialize;
        }
        function Bo(t) {
            return !!t._preupdate;
        }
        function ko(t) {
            return !!t.onPreUpdate;
        }
        function Lo(t) {
            return !!t.onPostUpdate;
        }
        function zo(t) {
            return !!t.onPostUpdate;
        }
        function Uo(t) {
            return !!t.onAdd;
        }
        function Oo(t) {
            return !!t.onRemove;
        }
        function Ho(t) {
            return !!t.onPreDraw;
        }
        function No(t) {
            return !!t.onPostDraw;
        }
        class Wo {
            constructor(t, e = !1){
                this.path = t, this.width = 0, this.height = 0, this._images = [], this.data = [], this._sprites = [], this._resource = new et(t, "arraybuffer", e);
            }
            get bustCache() {
                return this._resource.bustCache;
            }
            set bustCache(t) {
                this._resource.bustCache = t;
            }
            async load() {
                const t = await this._resource.load();
                this._stream = new qo(t), this._gif = new Xo(this._stream);
                const e = this._gif.images.map((t)=>new ut(t.src, !1));
                return await Promise.all(e.map((t)=>t.load())), this.data = this._images = e, this._sprites = this._images.map((t)=>t.toSprite()), this.data;
            }
            isLoaded() {
                return !!this.data;
            }
            toSprite(t = 0) {
                var e;
                return null !== (e = this._sprites[t]) && void 0 !== e ? e : null;
            }
            toSpriteSheet() {
                const t = this._sprites;
                return t.length ? new pt({
                    sprites: t
                }) : null;
            }
            toAnimation(t) {
                var e;
                const i = null === (e = this._gif) || void 0 === e ? void 0 : e.images;
                if (null == i ? void 0 : i.length) {
                    const e = i.map((t, e)=>{
                        var i;
                        return {
                            graphic: this._sprites[e],
                            duration: (null === (i = this._gif) || void 0 === i ? void 0 : i.frames[e].delayMs) || void 0
                        };
                    });
                    return this._animation = new Kt({
                        frames: e,
                        frameDuration: t
                    }), this._animation;
                }
                return null;
            }
            get readCheckBytes() {
                var t, e;
                return null !== (e = null === (t = this._gif) || void 0 === t ? void 0 : t.checkBytes) && void 0 !== e ? e : [];
            }
        }
        const Go = (t)=>t.reduce(function(t, e) {
                return 2 * t + e;
            }, 0), Vo = (t)=>{
            const e = [];
            for(let i = 7; i >= 0; i--)e.push(!!(t & 1 << i));
            return e;
        };
        class qo {
            constructor(t){
                if (this.len = 0, this.position = 0, this.readByte = ()=>{
                    if (this.position >= this.data.byteLength) throw new Error("Attempted to read past end of stream.");
                    return this.data[this.position++];
                }, this.readBytes = (t)=>{
                    const e = [];
                    for(let i = 0; i < t; i++)e.push(this.readByte());
                    return e;
                }, this.read = (t)=>{
                    let e = "";
                    for(let i = 0; i < t; i++)e += String.fromCharCode(this.readByte());
                    return e;
                }, this.readUnsigned = ()=>{
                    const t = this.readBytes(2);
                    return (t[1] << 8) + t[0];
                }, this.data = new Uint8Array(t), this.len = this.data.byteLength, 0 === this.len) throw new Error("No data loaded from file");
            }
        }
        class Xo {
            constructor(t){
                this._handler = {}, this.frames = [], this.images = [], this.globalColorTableBytes = [], this.checkBytes = [], this.parseColorTableBytes = (t)=>{
                    const e = [];
                    for(let i = 0; i < t; i++){
                        const t = this._st.readBytes(3);
                        e.push(t);
                    }
                    return e;
                }, this.readSubBlocks = ()=>{
                    let t, e;
                    e = "";
                    do t = this._st.readByte(), e += this._st.read(t);
                    while (0 !== t);
                    return e;
                }, this.parseHeader = ()=>{
                    const t = {
                        sig: "",
                        ver: "",
                        width: 0,
                        height: 0,
                        colorResolution: 0,
                        globalColorTableSize: 0,
                        gctFlag: !1,
                        sortedFlag: !1,
                        globalColorTable: [],
                        backgroundColorIndex: 0,
                        pixelAspectRatio: 0
                    };
                    if (t.sig = this._st.read(3), t.ver = this._st.read(3), "GIF" !== t.sig) throw new Error("Not a GIF file.");
                    t.width = this._st.readUnsigned(), t.height = this._st.readUnsigned(), this._currentFrameCanvas.width = t.width, this._currentFrameCanvas.height = t.height;
                    const e = Vo(this._st.readByte());
                    t.gctFlag = e.shift(), t.colorResolution = Go(e.splice(0, 3)), t.sortedFlag = e.shift(), t.globalColorTableSize = Go(e.splice(0, 3)), t.backgroundColorIndex = this._st.readByte(), t.pixelAspectRatio = this._st.readByte(), t.gctFlag && (this.globalColorTableBytes = this.parseColorTableBytes(1 << t.globalColorTableSize + 1)), this._handler.hdr && this._handler.hdr(t) && this.checkBytes.push(this._handler.hdr);
                }, this.parseExt = (t)=>{
                    const e = (t)=>{
                        this.checkBytes.push(this._st.readByte());
                        const e = Vo(this._st.readByte());
                        return t.reserved = e.splice(0, 3), t.disposalMethod = Go(e.splice(0, 3)), t.userInputFlag = e.shift(), t.transparentColorFlag = e.shift(), t.delayTime = this._st.readUnsigned(), t.transparentColorIndex = this._st.readByte(), t.terminator = this._st.readByte(), this._handler.gce && this._handler.gce(t) && this.checkBytes.push(this._handler.gce), t;
                    }, i = (t)=>{
                        t.comment = this.readSubBlocks(), this._handler.com && this._handler.com(t) && this.checkBytes.push(this._handler.com);
                    }, s = (t)=>{
                        this.checkBytes.push(this._st.readByte()), t.ptHeader = this._st.readBytes(12), t.ptData = this.readSubBlocks(), this._handler.pte && this._handler.pte(t) && this.checkBytes.push(this._handler.pte);
                    }, n = (t)=>{
                        const e = (t)=>{
                            this.checkBytes.push(this._st.readByte()), t.unknown = this._st.readByte(), t.iterations = this._st.readUnsigned(), t.terminator = this._st.readByte(), this._handler.app && this._handler.app.NETSCAPE && this._handler.app.NETSCAPE(t) && this.checkBytes.push(this._handler.app);
                        }, i = (t)=>{
                            t.appData = this.readSubBlocks(), this._handler.app && this._handler.app[t.identifier] && this._handler.app[t.identifier](t) && this.checkBytes.push(this._handler.app[t.identifier]);
                        };
                        if (this.checkBytes.push(this._st.readByte()), t.identifier = this._st.read(8), t.authCode = this._st.read(3), "NETSCAPE" === t.identifier) e(t);
                        else i(t);
                    }, r = (t)=>{
                        t.data = this.readSubBlocks(), this._handler.unknown && this._handler.unknown(t) && this.checkBytes.push(this._handler.unknown);
                    };
                    switch(t.label = this._st.readByte(), t.label){
                        case 249:
                            t.extType = "gce", this._gce = e(t);
                            break;
                        case 254:
                            t.extType = "com", i(t);
                            break;
                        case 1:
                            t.extType = "pte", s(t);
                            break;
                        case 255:
                            t.extType = "app", n(t);
                            break;
                        default:
                            t.extType = "unknown", r(t);
                    }
                }, this.parseImg = (t)=>{
                    var e;
                    t.leftPos = this._st.readUnsigned(), t.topPos = this._st.readUnsigned(), t.width = this._st.readUnsigned(), t.height = this._st.readUnsigned();
                    const i = Vo(this._st.readByte());
                    t.lctFlag = i.shift(), t.interlaced = i.shift(), t.sorted = i.shift(), t.reserved = i.splice(0, 2), t.lctSize = Go(i.splice(0, 3)), t.lctFlag && (t.lctBytes = this.parseColorTableBytes(1 << t.lctSize + 1)), t.lzwMinCodeSize = this._st.readByte();
                    const s = this.readSubBlocks();
                    t.pixels = function(t, e) {
                        let i = 0;
                        const s = function(t) {
                            let s = 0;
                            for(let n = 0; n < t; n++)e.charCodeAt(i >> 3) & 1 << (7 & i) && (s |= 1 << n), i++;
                            return s;
                        }, n = [], r = 1 << t, o = r + 1;
                        let a = t + 1, h = [];
                        const l = function() {
                            h = [], a = t + 1;
                            for(let t = 0; t < r; t++)h[t] = [
                                t
                            ];
                            h[r] = [], h[o] = null;
                        };
                        let c = 0, d = 0;
                        for(;;)if (d = c, c = s(a), c !== r) {
                            if (c === o) break;
                            if (c < h.length) d !== r && h.push(h[d].concat(h[c][0]));
                            else {
                                if (c !== h.length) throw new Error("Invalid LZW code.");
                                h.push(h[d].concat(h[d][0]));
                            }
                            n.push.apply(n, h[c]), h.length === 1 << a && a < 12 && a++;
                        } else l();
                        return n;
                    }(t.lzwMinCodeSize, s), t.interlaced && (t.pixels = ((t, e)=>{
                        const i = new Array(t.length), s = t.length / e, n = (s, n)=>{
                            const r = t.slice(n * e, (n + 1) * e);
                            i.splice.apply(i, [
                                s * e,
                                e
                            ].concat(r));
                        }, r = [
                            0,
                            4,
                            2,
                            1
                        ], o = [
                            8,
                            8,
                            4,
                            2
                        ];
                        let a = 0;
                        for(let t = 0; t < 4; t++)for(let e = r[t]; e < s; e += o[t])n(e, a), a++;
                        return i;
                    })(t.pixels, t.width)), (null === (e = this._gce) || void 0 === e ? void 0 : e.delayTime) && (t.delayMs = 10 * this._gce.delayTime), this.frames.push(t), this.arrayToImage(t, t.lctFlag ? t.lctBytes : this.globalColorTableBytes), this._handler.img && this._handler.img(t) && this.checkBytes.push(this._handler);
                }, this.parseBlocks = ()=>{
                    const t = {
                        sentinel: this._st.readByte(),
                        type: ""
                    };
                    switch(String.fromCharCode(t.sentinel)){
                        case "!":
                            t.type = "ext", this.parseExt(t);
                            break;
                        case ",":
                            t.type = "img", this.parseImg(t);
                            break;
                        case ";":
                            t.type = "eof", this._handler.eof && this._handler.eof(t) && this.checkBytes.push(this._handler.eof);
                            break;
                        default:
                            throw new Error("Unknown block: 0x" + t.sentinel.toString(16));
                    }
                    "eof" !== t.type && this.parseBlocks();
                }, this.arrayToImage = (t, e)=>{
                    var i, s, n, r;
                    const o = document.createElement("canvas");
                    o.width = t.width, o.height = t.height;
                    const a = o.getContext("2d"), h = a.getImageData(0, 0, o.width, o.height);
                    let l = -1;
                    (null === (i = this._gce) || void 0 === i ? void 0 : i.transparentColorFlag) && (l = this._gce.transparentColorIndex);
                    for(let i = 0; i < t.pixels.length; i++){
                        const s = t.pixels[i], n = e[s];
                        s === l ? h.data.set([
                            0,
                            0,
                            0,
                            0
                        ], 4 * i) : h.data.set([
                            ...n,
                            255
                        ], 4 * i);
                    }
                    if (a.putImageData(h, 0, 0), 1 === (null === (s = this._gce) || void 0 === s ? void 0 : s.disposalMethod) && this.images.length) this._currentFrameContext.drawImage(this.images[this.images.length - 1], 0, 0);
                    else if (2 === (null === (n = this._gce) || void 0 === n ? void 0 : n.disposalMethod) && (null === (r = this._hdr) || void 0 === r ? void 0 : r.gctFlag)) {
                        const t = e[this._hdr.backgroundColorIndex];
                        this._currentFrameContext.fillStyle = `rgb(${t[0]}, ${t[1]}, ${t[2]})`, this._currentFrameContext.fillRect(0, 0, this._hdr.width, this._hdr.height);
                    } else this._currentFrameContext.clearRect(0, 0, this._currentFrameCanvas.width, this._currentFrameCanvas.height);
                    this._currentFrameContext.drawImage(o, t.leftPos, t.topPos, t.width, t.height);
                    const c = new Image;
                    c.src = this._currentFrameCanvas.toDataURL(), this.images.push(c);
                }, this._st = t, this._handler = {}, this._currentFrameCanvas = document.createElement("canvas"), this._currentFrameContext = this._currentFrameCanvas.getContext("2d"), this.parseHeader(), this.parseBlocks();
            }
        }
        class Yo {
            constructor(t, e, { bustCache: i, ...s } = {}){
                this.path = t, this.family = e, this._isLoaded = !1, this._resource = new et(t, "blob", i), this._options = s;
            }
            async load() {
                if (this.isLoaded()) return this.data;
                try {
                    const t = await this._resource.load(), e = URL.createObjectURL(t);
                    this.data || (this.data = new FontFace(this.family, `url(${e})`), document.fonts.add(this.data)), await this.data.load(), this._isLoaded = !0;
                } catch (t) {
                    throw `Error loading FontSource from path '${this.path}' with error [${t.message}]`;
                }
                return this.data;
            }
            isLoaded() {
                return this._isLoaded;
            }
            toFont(t) {
                return new _e({
                    family: this.family,
                    ...this._options,
                    ...t
                });
            }
        }
        const Zo = uo(), $o = /^\s*(?:function)?\*/;
        function jo(t) {
            return "function" == typeof t && (!!$o.test(Function.prototype.toString.call(t)) || !!Object.getPrototypeOf && Object.getPrototypeOf(t) === Object.getPrototypeOf(new Function("return function * () {}")()));
        }
        function Ko(...t) {
            var e;
            const i = k.getInstance();
            let s, n, r, o;
            jo(t[0]) && (n = globalThis, s = t[0], r = t[1]), jo(t[1]) && (n = t[0], s = t[1], r = t[2]), t[1] instanceof xo && (n = t[0], o = t[1], s = t[2], r = t[3]), t[0] instanceof xo && (n = globalThis, o = t[0], s = t[1], r = t[2]);
            const a = _o(Zo), h = null == r ? void 0 : r.timing, l = !a && (null === (e = null == r ? void 0 : r.autostart) || void 0 === e || e);
            let c;
            try {
                c = null != o ? o : xo.useEngine();
            } catch (t) {
                throw Error("Cannot run coroutine without engine parameter outside of an excalibur lifecycle method.\nPass an engine parameter to ex.coroutine(engine, function * {...})");
            }
            let d = !1, u = !1, _ = !1;
            const g = s.bind(n), p = g();
            let f;
            const m = new Promise((t, e)=>{
                f = (i)=>{
                    try {
                        if (_) return u = !0, void t();
                        const { done: e, value: s } = Zo.scope(!0, ()=>p.next(i));
                        if (e || _) return u = !0, void t();
                        s instanceof Promise ? s.then(()=>{
                            c.clock.schedule(f, 0, h);
                        }) : void 0 === s || void 0 === s ? c.clock.schedule(f, 0, h) : c.clock.schedule(f, s || 0, h);
                    } catch (t) {
                        return void e(t);
                    }
                }, l && (d = !0, f(c.clock.elapsed()));
            }), v = {
                isRunning: ()=>d && !_ && !u,
                isComplete: ()=>u,
                cancel: ()=>{
                    _ = !0;
                },
                start: ()=>(d ? i.warn(".start() was called on a coroutine that was already started, this is probably a bug:\n", Function.prototype.toString.call(g)) : (d = !0, f(c.clock.elapsed())), v),
                generator: p,
                done: m,
                then: m.then.bind(m),
                [Symbol.iterator]: ()=>p
            };
            return v;
        }
        class Qo extends li {
            get progress() {
                return this._currentProgress;
            }
            get complete() {
                return "out" === this.direction ? this.progress >= 1 : this.progress <= 0;
            }
            constructor(t){
                var e, i, s, n;
                super(), this._logger = k.getInstance(), this.transform = new $t, this.graphics = new fe, this._completeFuture = new _, this.started = !1, this._currentDistance = 0, this._currentProgress = 0, this.done = this._completeFuture.promise, this.name = `Transition#${this.id}`, this.duration = t.duration, this.easing = null !== (e = t.easing) && void 0 !== e ? e : Rs.Linear, this.direction = null !== (i = t.direction) && void 0 !== i ? i : "out", this.hideLoader = null !== (s = t.hideLoader) && void 0 !== s && s, this.blockInput = null !== (n = t.blockInput) && void 0 !== n && n, this.transform.coordPlane = Ht.Screen, this.transform.pos = E.Zero, this.transform.z = 1 / 0, this.graphics.anchor = E.Zero, this.addComponent(this.transform), this.addComponent(this.graphics), "out" === this.direction ? this._currentProgress = 0 : this._currentProgress = 1;
            }
            updateTransition(t, e) {
                this.complete || (this._currentDistance += w(e / this.duration, 0, 1), this._currentDistance >= 1 && (this._currentDistance = 1), "out" === this.direction ? this._currentProgress = w(this.easing(this._currentDistance, 0, 1, 1), 0, 1) : this._currentProgress = w(this.easing(this._currentDistance, 1, 0, 1), 0, 1));
            }
            async onPreviousSceneDeactivate(t) {}
            onStart(t) {}
            onUpdate(t) {}
            onEnd(t) {}
            onReset() {}
            reset() {
                this.started = !1, this._completeFuture = new _, this.done = this._completeFuture.promise, this._currentDistance = 0, "out" === this.direction ? this._currentProgress = 0 : this._currentProgress = 1, this.onReset();
            }
            _addToTargetScene(t, e) {
                const i = e;
                if (this.started && this._logger.warn(`Attempted to add a transition ${this.name} that is already playing.`), i.world.entityManager.getById(this.id)) return this._co;
                this._engine = t, i.add(this);
                const s = this;
                return this._co = Ko(t, function*() {
                    for(; !s.complete;){
                        const t = yield;
                        s.updateTransition(s._engine, t), s._execute();
                    }
                }, {
                    autostart: !1
                }), this._co;
            }
            async _play() {
                this.started && (this.reset(), this._logger.warn(`Attempted to play a transition ${this.name} that is already playing, reset transition.`)), this._engine && this._co || (this.reset(), this._logger.warn(`Attempted to play a transition ${this.name} that hasn't been added`)), this._co && await this._co.start();
            }
            _execute() {
                this.isInitialized && (this.started || (this.started = !0, this.onStart(this.progress)), this.onUpdate(this.progress), this.complete && !this._completeFuture.isCompleted && (this.onEnd(this.progress), this._completeFuture.resolve()));
            }
        }
        class Jo extends Qo {
            constructor(t){
                var e, i;
                super({
                    ...t,
                    duration: null !== (e = t.duration) && void 0 !== e ? e : 2e3
                }), this.name = `FadeInOut#${this.id}`, this.color = null !== (i = t.color) && void 0 !== i ? i : R.Black;
            }
            onInitialize(t) {
                this.transform.pos = t.screen.unsafeArea.topLeft, this.screenCover = new Ps({
                    width: t.screen.resolution.width,
                    height: t.screen.resolution.height,
                    color: this.color
                }), this.graphics.add(this.screenCover), this.graphics.opacity = this.progress;
            }
            onReset() {
                this.graphics.opacity = this.progress;
            }
            onStart(t) {
                this.graphics.opacity = t;
            }
            onEnd(t) {
                this.graphics.opacity = t;
            }
            onUpdate(t) {
                this.graphics.opacity = t;
            }
        }
        class ta extends Qo {
            constructor(t){
                super({
                    direction: "in",
                    ...t
                }), this.name = `CrossFade#${this.id}`;
            }
            async onPreviousSceneDeactivate(t) {
                this.image = await t.engine.screenshot(!0), await this.image.decode();
            }
            onInitialize(t) {
                this.engine = t, this.transform.pos = t.screen.unsafeArea.topLeft, this.screenCover = ut.fromHtmlImageElement(this.image).toSprite(), this.graphics.add(this.screenCover), this.transform.scale = I(1 / t.screen.pixelRatio, 1 / t.screen.pixelRatio), this.graphics.opacity = this.progress;
            }
            onStart(t) {
                this.graphics.opacity = this.progress;
            }
            onReset() {
                this.graphics.opacity = this.progress;
            }
            onEnd(t) {
                this.graphics.opacity = t;
            }
            onUpdate(t) {
                this.graphics.opacity = t;
            }
        }
        class ea extends Qo {
            constructor(t){
                var e;
                super({
                    direction: "in",
                    ...t
                }), this._easing = Rs.Linear, this.name = `Slide#${this.id}`, this.slideDirection = t.slideDirection, this.transform.coordPlane = Ht.World, this.graphics.forceOnScreen = !0, this._easing = null !== (e = t.easingFunction) && void 0 !== e ? e : this._easing, this._vectorEasing = Rs.CreateVectorEasingFunction(this._easing);
            }
            async onPreviousSceneDeactivate(t) {
                this._image = await t.engine.screenshot(!0), await this._image.decode(), this._screenCover = ut.fromHtmlImageElement(this._image).toSprite();
            }
            onInitialize(t) {
                switch(this._engine = t, this.slideDirection){
                    case "up":
                        this._directionOffset = I(0, -t.screen.resolution.height);
                        break;
                    case "down":
                        this._directionOffset = I(0, t.screen.resolution.height);
                        break;
                    case "left":
                        this._directionOffset = I(-t.screen.resolution.width, 0);
                        break;
                    case "right":
                        this._directionOffset = I(t.screen.resolution.width, 0);
                }
                this._camera = this._engine.currentScene.camera, this._destinationCameraPosition = this._camera.pos.clone(), this._camera.pos = this._camera.pos.add(this._directionOffset), this.transform.pos = this.transform.pos.add(this._directionOffset), this._startCameraPosition = this._camera.pos.clone(), this.graphics.use(this._screenCover), this.transform.scale = I(1 / t.screen.pixelRatio, 1 / t.screen.pixelRatio);
            }
            onUpdate(t) {
                this._camera.pos = this._vectorEasing(t, this._destinationCameraPosition, this._startCameraPosition, 1);
            }
        }
        class ia extends nt {
            constructor(t){
                super(), this.color = R.Black, this.thickness = 1;
                const { start: e, end: i, color: s, thickness: n } = t;
                this.start = e, this.end = i, this.color = null != s ? s : this.color, this.thickness = null != n ? n : this.thickness, this._localBounds = this._calculateBounds();
                const { width: r, height: o } = this._localBounds;
                this.width = r, this.height = o;
            }
            get localBounds() {
                return this._localBounds;
            }
            _calculateBounds() {
                const t = this.end.sub(this.start).normal(), e = this.thickness / 2, i = [
                    this.start.add(t.scale(e)),
                    this.end.add(t.scale(e)),
                    this.end.add(t.scale(-e)),
                    this.start.add(t.scale(-e))
                ];
                return U.fromPoints(i);
            }
            _drawImage(t, e, i) {
                t.drawLine(this.start, this.end, this.color, this.thickness);
            }
            clone() {
                return new ia({
                    start: this.start,
                    end: this.end,
                    color: this.color,
                    thickness: this.thickness
                });
            }
        }
        class sa extends Jt {
            get points() {
                return this._points;
            }
            set points(t) {
                this._points = t;
                const e = this.minPoint;
                this.width = this._points.reduce((t, e)=>Math.max(e.x, t), 0) - e.x, this.height = this._points.reduce((t, e)=>Math.max(e.y, t), 0) - e.y, this.flagDirty();
            }
            get minPoint() {
                return I(this._points.reduce((t, e)=>Math.min(e.x, t), 1 / 0), this._points.reduce((t, e)=>Math.min(e.y, t), 1 / 0));
            }
            constructor(t){
                super(t), this._points = [], this.points = t.points, this.filtering = ot.Blended, this.rasterize();
            }
            clone() {
                return new sa({
                    points: this.points.map((t)=>t.clone()),
                    ...this.cloneGraphicOptions(),
                    ...this.cloneRasterOptions()
                });
            }
            execute(t) {
                if (this.points && this.points.length) {
                    t.beginPath();
                    const e = this.minPoint.negate(), i = this.points[0].add(e);
                    t.moveTo(i.x, i.y), this.points.forEach((i)=>{
                        t.lineTo(i.x + e.x, i.y + e.y);
                    }), t.lineTo(i.x, i.y), t.closePath(), this.color && t.fill(), this.strokeColor && t.stroke();
                }
            }
        }
        var na;
        !function(t) {
            t.Stretch = "stretch", t.Tile = "tile", t.TileFit = "tile-fit";
        }(na || (na = {}));
        class ra extends nt {
            constructor(t){
                super(t), this._logger = k.getInstance(), this._config = t, this._imgSource = t.source, this._canvasA = document.createElement("canvas"), this._canvasB = document.createElement("canvas"), this._canvasC = document.createElement("canvas"), this._canvasD = document.createElement("canvas"), this._canvasE = document.createElement("canvas"), this._canvasF = document.createElement("canvas"), this._canvasG = document.createElement("canvas"), this._canvasH = document.createElement("canvas"), this._canvasI = document.createElement("canvas"), this._initialize(), this._imgSource.ready.then(()=>{
                    this._initialize();
                });
            }
            setTargetWidth(t, e = !1) {
                this._config.width = t, e && this._initialize();
            }
            setTargetHeight(t, e = !1) {
                this._config.height = t, e && this._initialize();
            }
            setMargins(t, e, i, s, n = !1) {
                this._config.sourceConfig.leftMargin = t, this._config.sourceConfig.topMargin = e, this._config.sourceConfig.rightMargin = i, this._config.sourceConfig.bottomMargin = s, n && this._initialize();
            }
            setStretch(t, e, i = !1) {
                "horizontal" === t ? this._config.destinationConfig.horizontalStretch = e : ("vertical" === t || (this._config.destinationConfig.horizontalStretch = e), this._config.destinationConfig.verticalStretch = e), i && this._initialize();
            }
            getConfig() {
                return this._config;
            }
            _drawTile(t, e, i, s, n, r, o) {
                const a = r || 0, h = o || 0;
                let l, c, d, u;
                const _ = this._getNumberOfTiles(e.width, i.x, s), g = this._getNumberOfTiles(e.height, i.y, n);
                for(let s = 0; s < _; s++)for(let n = 0; n < g; n++){
                    let { tempSize: r, tempPosition: o } = this._calculateParams(s, _, e.width, i.x, this._config.destinationConfig.horizontalStretch);
                    l = r, c = o, ({ tempSize: r, tempPosition: o } = this._calculateParams(n, g, e.height, i.y, this._config.destinationConfig.verticalStretch)), d = r, u = o, t.drawImage(e, 0, 0, e.width, e.height, a + c, h + u, l, d);
                }
            }
            _drawImage(t, e, i) {
                this._imgSource.isLoaded() ? (this._drawTile(t, this._canvasA, new E(this._config.sourceConfig.leftMargin, this._config.sourceConfig.topMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch), this._drawTile(t, this._canvasB, new E(this._config.width - this._config.sourceConfig.leftMargin - this._config.sourceConfig.rightMargin, this._config.sourceConfig.topMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, this._config.sourceConfig.leftMargin, 0), this._drawTile(t, this._canvasC, new E(this._config.sourceConfig.rightMargin, this._config.sourceConfig.topMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, this._config.width - this._config.sourceConfig.rightMargin, 0), this._drawTile(t, this._canvasD, new E(this._config.sourceConfig.leftMargin, this._config.height - this._config.sourceConfig.bottomMargin - this._config.sourceConfig.topMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, 0, this._config.sourceConfig.topMargin), this._config.destinationConfig.drawCenter && this._drawTile(t, this._canvasE, new E(this._config.width - this._config.sourceConfig.leftMargin - this._config.sourceConfig.rightMargin, this._config.height - this._config.sourceConfig.bottomMargin - this._config.sourceConfig.topMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, this._config.sourceConfig.leftMargin, this._config.sourceConfig.topMargin), this._drawTile(t, this._canvasF, new E(this._config.sourceConfig.rightMargin, this._config.height - this._config.sourceConfig.bottomMargin - this._config.sourceConfig.topMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, this._config.width - this._config.sourceConfig.rightMargin, this._config.sourceConfig.topMargin), this._drawTile(t, this._canvasG, new E(this._config.sourceConfig.leftMargin, this._config.sourceConfig.bottomMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, 0, this._config.height - this._config.sourceConfig.bottomMargin), this._drawTile(t, this._canvasH, new E(this._config.width - this._config.sourceConfig.leftMargin - this._config.sourceConfig.rightMargin, this._config.sourceConfig.bottomMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, this._config.sourceConfig.leftMargin, this._config.height - this._config.sourceConfig.bottomMargin), this._drawTile(t, this._canvasI, new E(this._config.sourceConfig.rightMargin, this._config.sourceConfig.bottomMargin), this._config.destinationConfig.horizontalStretch, this._config.destinationConfig.verticalStretch, this._config.width - this._config.sourceConfig.rightMargin, this._config.height - this._config.sourceConfig.bottomMargin)) : this._logger.warnOnce(`NineSlice ImageSource ${this._imgSource.path} is not yet loaded and won't be drawn. Please call .load() or include in a Loader.\n\nRead https://excaliburjs.com/docs/imagesource for more information.`);
            }
            _initialize() {
                this._sourceSprite = this._imgSource.image, this._canvasA.width = this._config.sourceConfig.leftMargin, this._canvasA.height = this._config.sourceConfig.topMargin;
                const t = this._canvasA.getContext("2d");
                null == t || t.drawImage(this._sourceSprite, 0, 0, this._canvasA.width, this._canvasA.height, 0, 0, this._canvasA.width, this._canvasA.height), this._canvasB.width = this._config.sourceConfig.width - this._config.sourceConfig.leftMargin - this._config.sourceConfig.rightMargin, this._canvasB.height = this._config.sourceConfig.topMargin;
                const e = this._canvasB.getContext("2d");
                null == e || e.drawImage(this._sourceSprite, this._config.sourceConfig.leftMargin, 0, this._canvasB.width, this._canvasB.height, 0, 0, this._canvasB.width, this._canvasB.height), this._canvasC.width = this._config.sourceConfig.rightMargin, this._canvasC.height = this._config.sourceConfig.topMargin;
                const i = this._canvasC.getContext("2d");
                null == i || i.drawImage(this._sourceSprite, this._sourceSprite.width - this._config.sourceConfig.rightMargin, 0, this._canvasC.width, this._canvasC.height, 0, 0, this._canvasC.width, this._canvasC.height), this._canvasD.width = this._config.sourceConfig.leftMargin, this._canvasD.height = this._config.sourceConfig.height - this._config.sourceConfig.topMargin - this._config.sourceConfig.bottomMargin;
                const s = this._canvasD.getContext("2d");
                null == s || s.drawImage(this._sourceSprite, 0, this._config.sourceConfig.topMargin, this._canvasD.width, this._canvasD.height, 0, 0, this._canvasD.width, this._canvasD.height), this._canvasE.width = this._config.sourceConfig.width - this._config.sourceConfig.leftMargin - this._config.sourceConfig.rightMargin, this._canvasE.height = this._config.sourceConfig.height - this._config.sourceConfig.topMargin - this._config.sourceConfig.bottomMargin;
                const n = this._canvasE.getContext("2d");
                null == n || n.drawImage(this._sourceSprite, this._config.sourceConfig.leftMargin, this._config.sourceConfig.topMargin, this._canvasE.width, this._canvasE.height, 0, 0, this._canvasE.width, this._canvasE.height), this._canvasF.width = this._config.sourceConfig.rightMargin, this._canvasF.height = this._config.sourceConfig.height - this._config.sourceConfig.topMargin - this._config.sourceConfig.bottomMargin;
                const r = this._canvasF.getContext("2d");
                null == r || r.drawImage(this._sourceSprite, this._config.sourceConfig.width - this._config.sourceConfig.rightMargin, this._config.sourceConfig.topMargin, this._canvasF.width, this._canvasF.height, 0, 0, this._canvasF.width, this._canvasF.height), this._canvasG.width = this._config.sourceConfig.leftMargin, this._canvasG.height = this._config.sourceConfig.bottomMargin;
                const o = this._canvasG.getContext("2d");
                null == o || o.drawImage(this._sourceSprite, 0, this._config.sourceConfig.height - this._config.sourceConfig.bottomMargin, this._canvasG.width, this._canvasG.height, 0, 0, this._canvasG.width, this._canvasG.height), this._canvasH.width = this._config.sourceConfig.width - this._config.sourceConfig.leftMargin - this._config.sourceConfig.rightMargin, this._canvasH.height = this._config.sourceConfig.bottomMargin;
                const a = this._canvasH.getContext("2d");
                null == a || a.drawImage(this._sourceSprite, this._config.sourceConfig.leftMargin, this._config.sourceConfig.height - this._config.sourceConfig.bottomMargin, this._canvasH.width, this._canvasH.height, 0, 0, this._canvasH.width, this._canvasH.height), this._canvasI.width = this._config.sourceConfig.rightMargin, this._canvasI.height = this._config.sourceConfig.bottomMargin;
                const h = this._canvasI.getContext("2d");
                null == h || h.drawImage(this._sourceSprite, this._sourceSprite.width - this._config.sourceConfig.rightMargin, this._config.sourceConfig.height - this._config.sourceConfig.bottomMargin, this._canvasI.width, this._canvasI.height, 0, 0, this._canvasI.width, this._canvasI.height);
            }
            clone() {
                return new ra(this._config);
            }
            _getNumberOfTiles(t, e, i) {
                switch(i){
                    case na.Stretch:
                        return 1;
                    case na.Tile:
                    case na.TileFit:
                        return Math.ceil(e / t);
                }
            }
            _calculateParams(t, e, i, s, n) {
                switch(n){
                    case na.Stretch:
                        return {
                            tempPosition: 0,
                            tempSize: s
                        };
                    case na.Tile:
                        return t === e - 1 ? {
                            tempPosition: t * i,
                            tempSize: i - (e * i - s)
                        } : {
                            tempPosition: t * i,
                            tempSize: i
                        };
                    case na.TileFit:
                        const n1 = s / e;
                        return {
                            tempPosition: t * n1,
                            tempSize: n1
                        };
                }
            }
        }
        class oa extends Kt {
            constructor(t){
                super({
                    ...t,
                    frames: t.animation.frames.slice(),
                    strategy: t.animation.strategy,
                    frameDuration: t.animation.frameDuration,
                    speed: t.animation.speed,
                    reverse: t.animation.isReversed
                }), this._ready = new _, this.ready = this._ready.promise, this._tiledWidth = 0, this._tiledHeight = 0, this._sourceView = {}, this._sourceView = {
                    ...t.sourceView
                }, this._tiledWidth = t.width, this._tiledHeight = t.height;
                const e = [];
                for(let i = 0; i < this.frames.length; i++){
                    const s = this.frames[i].graphic;
                    if (s && s instanceof rt) {
                        const n = new gt({
                            image: s.image,
                            width: t.width,
                            height: t.height,
                            sourceView: {
                                ...s.sourceView
                            },
                            wrapping: t.wrapping,
                            filtering: t.filtering
                        });
                        this.frames[i].graphic = n, n.ready.then(()=>{
                            n.sourceView = {
                                ...n.sourceView,
                                ...this._sourceView
                            };
                        }), e.push(n.ready);
                    }
                }
                Promise.all(e).then(()=>this._ready.resolve());
            }
            static fromAnimation(t, e) {
                return new oa({
                    width: t.width,
                    height: t.height,
                    ...e,
                    animation: t
                });
            }
            _updateSourceView() {
                for(let t = 0; t < this.frames.length; t++){
                    const e = this.frames[t].graphic;
                    e && e instanceof rt && (e.sourceView = {
                        ...e.sourceView,
                        ...this._sourceView
                    });
                }
            }
            get sourceView() {
                return it(this._sourceView, ()=>this._updateSourceView());
            }
            set sourceView(t) {
                this._sourceView = it(t, ()=>this._updateSourceView()), this._updateSourceView();
            }
            _updateWidthHeight() {
                for(let t = 0; t < this.frames.length; t++){
                    const e = this.frames[t].graphic;
                    e && e instanceof rt && (e.sourceView.height = this._tiledHeight || e.height, e.destSize.height = this._tiledHeight || e.height, e.sourceView.width = this._tiledWidth || e.width, e.destSize.width = this._tiledWidth || e.width);
                }
            }
            get width() {
                return this._tiledWidth;
            }
            get height() {
                return this._tiledHeight;
            }
            set width(t) {
                this._tiledWidth = t, this._updateWidthHeight();
            }
            set height(t) {
                this._tiledHeight = t, this._updateWidthHeight();
            }
        }
        const aa = 5, ha = {}, la = ()=>{
            for(const t in ha)ha[t] = 0;
        }, ca = (t, e)=>{
            const i = d.isEnabled("suppress-obsolete-message");
            ha[t] < aa && !i && (k.getInstance().warn(t), console.trace && e.showStackTrace && console.trace()), ha[t]++;
        };
        function da(t) {
            return t = {
                message: "This feature will be removed in future versions of Excalibur.",
                alternateMethod: null,
                showStackTrace: !1,
                ...t
            }, function(e, i, s) {
                if (s && "function" != typeof s.value && "function" != typeof s.get && "function" != typeof s.set) throw new SyntaxError("Only classes/functions/getters/setters can be marked as obsolete");
                const n = `${`${e.name || ""}${e.name && i ? "." : ""}${i || ""}`} is marked obsolete: ${t.message}` + (t.alternateMethod ? ` Use ${t.alternateMethod} instead` : "");
                ha[n] || (ha[n] = 0);
                const r = s ? {
                    ...s
                } : e;
                if (!s) {
                    class e extends r {
                        constructor(...e){
                            ca(n, t), super(...e);
                        }
                    }
                    return e;
                }
                return s && s.value ? (r.value = function() {
                    return ca(n, t), s.value.apply(this, arguments);
                }, r) : (s && s.get && (r.get = function() {
                    return ca(n, t), s.get.apply(this, arguments);
                }), s && s.set && (r.set = function() {
                    return ca(n, t), s.set.apply(this, arguments);
                }), r);
            };
        }
        class ua {
            constructor(){
                this._queue = [];
            }
            get length() {
                return this._queue.length;
            }
            enqueue() {
                const t = new _;
                return this._queue.push(t), t.promise;
            }
            dequeue(t) {
                this._queue.shift().resolve(t);
            }
        }
        class _a {
            constructor(t){
                this._count = t, this._waitQueue = new ua;
            }
            get count() {
                return this._count;
            }
            get waiting() {
                return this._waitQueue.length;
            }
            async enter() {
                return 0 !== this._count ? (this._count--, Promise.resolve()) : this._waitQueue.enqueue();
            }
            exit(t = 1) {
                if (0 !== t) {
                    for(; 0 !== t && 0 !== this._waitQueue.length;)this._waitQueue.dequeue(null), t--;
                    this._count += t;
                }
            }
        }
        const ga = "0.30.3";
        return c(), s;
    })());

},{}],"4cdGP":[function(require,module,exports,__globalThis) {
// wester.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayerCollisionGroup", ()=>PlayerCollisionGroup);
parcelHelpers.export(exports, "Wester", ()=>Wester);
var _excalibur = require("excalibur");
var _bullet = require("./bullet");
var _livingentity = require("./livingentity");
const PlayerCollisionGroup = (0, _excalibur.CollisionGroupManager).create('player');
class Wester extends (0, _livingentity.LivingEntity) {
    constructor(engine){
        super({
            pos: (0, _excalibur.vec)(engine.screen.width / 2, engine.screen.height / 2),
            width: 32,
            height: 32,
            color: (0, _excalibur.Color).Yellow,
            collisionType: (0, _excalibur.CollisionType).Passive,
            collisionGroup: PlayerCollisionGroup
        }), this.health = 10, this.maxHealth = 10, this.moveSpeed = 300, this.ammo = 6, this.maxAmmo = 6, this.canShoot = true, this.INVINCIBILITY_TIME = 1000, this.GUN_COOLDOWN_TIME = 200;
    }
    shootGun(engine) {
        if (this.canShoot) {
            const gunTimer = new (0, _excalibur.Timer)({
                fcn: ()=>this.canShoot = true,
                repeats: false,
                interval: this.GUN_COOLDOWN_TIME
            });
            const bullet = new (0, _bullet.Bullet)(this.pos, (0, _bullet.getAngleTowards)(this.pos, engine.input.pointers.primary.lastScreenPos), PlayerCollisionGroup);
            engine.currentScene.add(bullet);
            engine.currentScene.add(gunTimer);
            this.canShoot = false;
            gunTimer.start();
        }
    }
    onInitialize(engine) {
        const wester = this;
        wester.addTag("player");
        wester.addTag("living");
        engine.input.pointers.primary.on('down', function(evt) {
            wester.shootGun(engine);
        });
        this.on('collisionstart', (event)=>{
            if ('DAMAGE' in event.other.owner) wester.dealDamage(engine, event.other.owner.DAMAGE);
        });
    }
    onPostUpdate(engine, dt) {
        const moveVector = (0, _excalibur.vec)((engine.input.keyboard.isHeld((0, _excalibur.Keys).A) ? -1 : 0) + (engine.input.keyboard.isHeld((0, _excalibur.Keys).D) ? 1 : 0), (engine.input.keyboard.isHeld((0, _excalibur.Keys).W) ? -1 : 0) + (engine.input.keyboard.isHeld((0, _excalibur.Keys).S) ? 1 : 0)).normalize().scaleEqual(this.moveSpeed);
        this.vel = moveVector;
    }
}

},{"excalibur":"ee0bS","./bullet":"bzwxK","./livingentity":"8dBz2","@parcel/transformer-js/src/esmodule-helpers.js":"3prP9"}],"bzwxK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bullet", ()=>Bullet);
parcelHelpers.export(exports, "getAngleTowards", ()=>getAngleTowards);
var _excalibur = require("excalibur");
class Bullet extends (0, _excalibur.Actor) {
    constructor(pos, rotation, collisionGroup){
        super({
            width: 8,
            height: 8,
            color: (0, _excalibur.Color).Black,
            rotation: rotation,
            pos: pos,
            collisionGroup: collisionGroup
        }), this.BULLET_SPEED = 1000, this.DAMAGE = 1;
    }
    onInitialize(engine) {
        const bullet = this;
        // bullet despawn timer
        const timer = new (0, _excalibur.Timer)({
            fcn: ()=>{
                engine.currentScene.remove(this);
            },
            repeats: false,
            interval: 2000
        });
        engine.currentScene.add(timer);
        timer.start();
        // bullets damage entities that are not the creator
        this.on('collisionstart', (event)=>{
            if ('dealDamage' in event.other.owner) event.other.owner.dealDamage(engine, bullet.DAMAGE);
            engine.currentScene.remove(bullet);
        });
    }
    onPostUpdate(engine, dt) {
        this.vel = (0, _excalibur.Vector).fromAngle(this.rotation).scaleEqual(this.BULLET_SPEED);
    }
}
function getAngleTowards(from, to) {
    return Math.atan((to.y - from.y) / (to.x - from.x)) + (to.x > from.x ? 2 * Math.PI : Math.PI) || 0;
}

},{"excalibur":"ee0bS","@parcel/transformer-js/src/esmodule-helpers.js":"3prP9"}],"3prP9":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8dBz2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LivingEntity", ()=>LivingEntity);
var _excalibur = require("excalibur");
class LivingEntity extends (0, _excalibur.Actor) {
    dealDamage(engine, amt) {
        if (!this.invincible) {
            this.health -= amt;
            if (this.INVINCIBILITY_TIME > 0) {
                this.invincible = true;
                const invincibilityTimer = new (0, _excalibur.Timer)({
                    fcn: ()=>this.invincible = false,
                    repeats: false,
                    interval: this.INVINCIBILITY_TIME
                });
                engine.currentScene.add(invincibilityTimer);
                invincibilityTimer.start();
            }
        }
    }
    heal(amt) {
        this.health = Math.min(this.health + amt, this.maxHealth);
    }
    constructor(...args){
        super(...args), this.invincible = false;
    }
}

},{"excalibur":"ee0bS","@parcel/transformer-js/src/esmodule-helpers.js":"3prP9"}],"86mzP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slime", ()=>Slime);
var _excalibur = require("excalibur");
var _enemy = require("./enemy");
class Slime extends (0, _enemy.Enemy) {
    constructor(pos){
        super({
            pos: pos,
            width: 32,
            height: 32,
            color: (0, _excalibur.Color).Green,
            collisionType: (0, _excalibur.CollisionType).Active
        }), this.health = 2, this.maxHealth = 2, this.moveSpeed = 150, this.INVINCIBILITY_TIME = 0, this.DAMAGE = 2;
    }
    onInitialize(engine) {
        this.addTag("enemy");
        this.addTag("living");
    }
    onPostUpdate(engine, dt) {
        const wester = engine.currentScene.world.queryTags([
            "player"
        ]).entities[0];
        if (wester) {
            this.target = wester.pos;
            this.moving = true;
        } else this.moving = false;
        this.moveTowardsTarget();
        this.testForDeath(engine);
    }
}

},{"excalibur":"ee0bS","./enemy":"e8Rej","@parcel/transformer-js/src/esmodule-helpers.js":"3prP9"}],"e8Rej":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Enemy", ()=>Enemy);
var _excalibur = require("excalibur");
var _bullet = require("./bullet");
var _livingentity = require("./livingentity");
class Enemy extends (0, _livingentity.LivingEntity) {
    testForDeath(engine) {
        if (this.health <= 0) engine.currentScene.remove(this);
    }
    moveTowardsTarget() {
        if (this.moving) this.vel = (0, _excalibur.Vector).fromAngle((0, _bullet.getAngleTowards)(this.pos, this.target)).scaleEqual(this.moveSpeed);
    }
}

},{"excalibur":"ee0bS","./bullet":"bzwxK","./livingentity":"8dBz2","@parcel/transformer-js/src/esmodule-helpers.js":"3prP9"}]},["d5pqN","jeorp"], "jeorp", "parcelRequire94c2")

//# sourceMappingURL=index.b7a05eb9.js.map
