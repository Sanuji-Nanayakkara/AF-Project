// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"uLt6d":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "5be0b5f36fca71fab5c2d924536d583b"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
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
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
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
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6Qgkg":[function(require,module,exports) {
var process = require("process");
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
require('core-js/modules/es.object.to-string.js');
require('core-js/modules/es.promise.js');
require('core-js/modules/es.reflect.delete-property.js');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
require('core-js/modules/es.array.map.js');
require('core-js/modules/es.parse-float.js');
require('core-js/modules/es.regexp.exec.js');
require('core-js/modules/es.string.match.js');
require('core-js/modules/es.string.replace.js');
require('core-js/modules/es.string.starts-with.js');
require('core-js/modules/es.array.join.js');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
require('core-js/modules/es.array.concat.js');
require('core-js/modules/es.array.every.js');
require('core-js/modules/es.array.reduce.js');
require('core-js/modules/es.string.ends-with.js');
require('core-js/modules/es.string.split.js');
var requestAnimationFrame = require('raf');
require('core-js/modules/es.function.name.js');
require('core-js/modules/es.string.trim.js');
var RGBColor = require('rgbcolor');
require('core-js/modules/es.array.for-each.js');
require('core-js/modules/web.dom-collections.for-each.js');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
require('core-js/modules/es.array.from.js');
require('core-js/modules/es.array.includes.js');
require('core-js/modules/es.array.index-of.js');
require('core-js/modules/es.array.some.js');
require('core-js/modules/es.string.includes.js');
require('core-js/modules/es.string.iterator.js');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
require('core-js/modules/es.array.reverse.js');
require('core-js/modules/es.number.constructor.js');
var _get = require('@babel/runtime/helpers/get');
require('core-js/modules/es.array.fill.js');
var svgPathdata = require('svg-pathdata');
require('core-js/modules/es.regexp.to-string.js');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
require('core-js/modules/es.array.iterator.js');
require('core-js/modules/web.dom-collections.iterator.js');
require('core-js/modules/es.map.js');
require('core-js/modules/es.reflect.apply.js');
require('core-js/modules/es.reflect.get-prototype-of.js');
var stackblurCanvas = require('stackblur-canvas');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var _regeneratorRuntime__default = /*#__PURE__*/ _interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/ _interopDefaultLegacy(_asyncToGenerator);
var _slicedToArray__default = /*#__PURE__*/ _interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_defineProperty);
var _classCallCheck__default = /*#__PURE__*/ _interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/ _interopDefaultLegacy(_createClass);
var requestAnimationFrame__default = /*#__PURE__*/ _interopDefaultLegacy(requestAnimationFrame);
var RGBColor__default = /*#__PURE__*/ _interopDefaultLegacy(RGBColor);
var _inherits__default = /*#__PURE__*/ _interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/ _interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/ _interopDefaultLegacy(_getPrototypeOf);
var _toConsumableArray__default = /*#__PURE__*/ _interopDefaultLegacy(_toConsumableArray);
var _get__default = /*#__PURE__*/ _interopDefaultLegacy(_get);
var _assertThisInitialized__default = /*#__PURE__*/ _interopDefaultLegacy(_assertThisInitialized);
/**
 * Options preset for `OffscreenCanvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @returns Preset object.
 */ function offscreen() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    }, DOMParserFallback = _ref.DOMParser;
    var preset = {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParserFallback,
        createCanvas: function createCanvas(width, height) {
            return new OffscreenCanvas(width, height);
        },
        createImage: function createImage(url) {
            return _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee() {
                var response, blob, img;
                return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                    while(true)switch(_context.prev = _context.next){
                        case 0:
                            _context.next = 2;
                            return fetch(url);
                        case 2:
                            response = _context.sent;
                            _context.next = 5;
                            return response.blob();
                        case 5:
                            blob = _context.sent;
                            _context.next = 8;
                            return createImageBitmap(blob);
                        case 8:
                            img = _context.sent;
                            return _context.abrupt("return", img);
                        case 10:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }))();
        }
    };
    if (typeof DOMParser !== 'undefined' || typeof DOMParserFallback === 'undefined') Reflect.deleteProperty(preset, 'DOMParser');
    return preset;
}
/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 * @returns Preset object.
 */ function node(_ref) {
    var DOMParser1 = _ref.DOMParser, canvas = _ref.canvas, fetch = _ref.fetch;
    return {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParser1,
        fetch: fetch,
        createCanvas: canvas.createCanvas,
        createImage: canvas.loadImage
    };
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    offscreen: offscreen,
    node: node
});
/**
 * HTML-safe compress white-spaces.
 * @param str - String to compress.
 * @returns String.
 */ function compressSpaces(str) {
    return str.replace(/(?!\u3000)\s+/gm, ' ');
}
/**
 * HTML-safe left trim.
 * @param str - String to trim.
 * @returns String.
 */ function trimLeft(str) {
    return str.replace(/^[\n \t]+/, '');
}
/**
 * HTML-safe right trim.
 * @param str - String to trim.
 * @returns String.
 */ function trimRight(str) {
    return str.replace(/[\n \t]+$/, '');
}
/**
 * String to numbers array.
 * @param str - Numbers string.
 * @returns Numbers array.
 */ function toNumbers(str) {
    var matches = (str || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
    return matches.map(parseFloat);
} // Microsoft Edge fix
var allUppercase = /^[A-Z-]+$/;
/**
 * Normalize attribute name.
 * @param name - Attribute name.
 * @returns Normalized attribute name.
 */ function normalizeAttributeName(name) {
    if (allUppercase.test(name)) return name.toLowerCase();
    return name;
}
/**
 * Parse external URL.
 * @param url - CSS url string.
 * @returns Parsed URL.
 */ function parseExternalUrl(url) {
    //                      single quotes [2]
    //                      v         double quotes [3]
    //                      v         v         no quotes [4]
    //                      v         v         v
    var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
    return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
 * Transform floats to integers in rgb colors.
 * @param color - Color to normalize.
 * @returns Normalized color.
 */ function normalizeColor(color) {
    if (!color.startsWith('rgb')) return color;
    var rgbParts = 3;
    var normalizedColor = color.replace(/\d+(\.\d+)?/g, function(num, isFloat) {
        return (rgbParts--) && isFloat ? String(Math.round(parseFloat(num))) : num;
    });
    return normalizedColor;
}
// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s+>~.[:]+)/g;
var classRegex = /(\.[^\s+>~.[:]+)/g;
var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
var elementRegex = /([^\s+>~.[:]+)/g;
function findSelectorMatch(selector, regex) {
    var matches = regex.exec(selector);
    if (!matches) return [
        selector,
        0
    ];
    return [
        selector.replace(regex, ' '),
        matches.length
    ];
}
/**
 * Measure selector specificity.
 * @param selector - Selector to measure.
 * @returns Specificity.
 */ function getSelectorSpecificity(selector) {
    var specificity = [
        0,
        0,
        0
    ];
    var currentSelector = selector.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' ');
    var delta = 0;
    var _findSelectorMatch = findSelectorMatch(currentSelector, attributeRegex);
    var _findSelectorMatch2 = _slicedToArray__default["default"](_findSelectorMatch, 2);
    currentSelector = _findSelectorMatch2[0];
    delta = _findSelectorMatch2[1];
    specificity[1] += delta;
    var _findSelectorMatch3 = findSelectorMatch(currentSelector, idRegex);
    var _findSelectorMatch4 = _slicedToArray__default["default"](_findSelectorMatch3, 2);
    currentSelector = _findSelectorMatch4[0];
    delta = _findSelectorMatch4[1];
    specificity[0] += delta;
    var _findSelectorMatch5 = findSelectorMatch(currentSelector, classRegex);
    var _findSelectorMatch6 = _slicedToArray__default["default"](_findSelectorMatch5, 2);
    currentSelector = _findSelectorMatch6[0];
    delta = _findSelectorMatch6[1];
    specificity[1] += delta;
    var _findSelectorMatch7 = findSelectorMatch(currentSelector, pseudoElementRegex);
    var _findSelectorMatch8 = _slicedToArray__default["default"](_findSelectorMatch7, 2);
    currentSelector = _findSelectorMatch8[0];
    delta = _findSelectorMatch8[1];
    specificity[2] += delta;
    var _findSelectorMatch9 = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
    var _findSelectorMatch10 = _slicedToArray__default["default"](_findSelectorMatch9, 2);
    currentSelector = _findSelectorMatch10[0];
    delta = _findSelectorMatch10[1];
    specificity[1] += delta;
    var _findSelectorMatch11 = findSelectorMatch(currentSelector, pseudoClassRegex);
    var _findSelectorMatch12 = _slicedToArray__default["default"](_findSelectorMatch11, 2);
    currentSelector = _findSelectorMatch12[0];
    delta = _findSelectorMatch12[1];
    specificity[1] += delta;
    currentSelector = currentSelector.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ');
    var _findSelectorMatch13 = findSelectorMatch(currentSelector, elementRegex);
    var _findSelectorMatch14 = _slicedToArray__default["default"](_findSelectorMatch13, 2);
    currentSelector = _findSelectorMatch14[0];
    delta = _findSelectorMatch14[1];
    // lgtm [js/useless-assignment-to-local]
    specificity[2] += delta;
    return specificity.join('');
}
var PSEUDO_ZERO = 0.00000001;
/**
 * Vector magnitude.
 * @param v
 * @returns Number result.
 */ function vectorMagnitude(v) {
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
/**
 * Ratio between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */ function vectorsRatio(u, v) {
    return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
/**
 * Angle between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */ function vectorsAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}
function CB1(t) {
    return t * t * t;
}
function CB2(t) {
    return 3 * t * t * (1 - t);
}
function CB3(t) {
    return 3 * t * (1 - t) * (1 - t);
}
function CB4(t) {
    return (1 - t) * (1 - t) * (1 - t);
}
function QB1(t) {
    return t * t;
}
function QB2(t) {
    return 2 * t * (1 - t);
}
function QB3(t) {
    return (1 - t) * (1 - t);
}
var Property = /*#__PURE__*/ function() {
    function Property1(document, name, value) {
        _classCallCheck__default["default"](this, Property1);
        this.document = document;
        this.name = name;
        this.value = value;
        this.isNormalizedColor = false;
    }
    _createClass__default["default"](Property1, [
        {
            key: "split",
            value: function split() {
                var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
                var document = this.document, name = this.name;
                return compressSpaces(this.getString()).trim().split(separator).map(function(value) {
                    return new Property1(document, name, value);
                });
            }
        },
        {
            key: "hasValue",
            value: function hasValue(zeroIsValue) {
                var value = this.value;
                return value !== null && value !== '' && (zeroIsValue || value !== 0) && typeof value !== 'undefined';
            }
        },
        {
            key: "isString",
            value: function isString(regexp) {
                var value = this.value;
                var result = typeof value === 'string';
                if (!result || !regexp) return result;
                return regexp.test(value);
            }
        },
        {
            key: "isUrlDefinition",
            value: function isUrlDefinition() {
                return this.isString(/^url\(/);
            }
        },
        {
            key: "isPixels",
            value: function isPixels() {
                if (!this.hasValue()) return false;
                var asString = this.getString();
                return false;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.value = value;
                return this;
            }
        },
        {
            key: "getValue",
            value: function getValue(def) {
                if (typeof def === 'undefined' || this.hasValue()) return this.value;
                return def;
            }
        },
        {
            key: "getNumber",
            value: function getNumber(def) {
                if (!this.hasValue()) {
                    if (typeof def === 'undefined') return 0;
                    return parseFloat(def);
                }
                var value = this.value;
                var n = parseFloat(value);
                if (this.isString(/%$/)) n /= 100;
                return n;
            }
        },
        {
            key: "getString",
            value: function getString(def) {
                if (typeof def === 'undefined' || this.hasValue()) return typeof this.value === 'undefined' ? '' : String(this.value);
                return String(def);
            }
        },
        {
            key: "getColor",
            value: function getColor(def) {
                var color = this.getString(def);
                if (this.isNormalizedColor) return color;
                this.isNormalizedColor = true;
                color = normalizeColor(color);
                this.value = color;
                return color;
            }
        },
        {
            key: "getDpi",
            value: function getDpi() {
                return 96; // TODO: compute?
            }
        },
        {
            key: "getRem",
            value: function getRem() {
                return this.document.rootEmSize;
            }
        },
        {
            key: "getEm",
            value: function getEm() {
                return this.document.emSize;
            }
        },
        {
            key: "getUnits",
            value: function getUnits() {
                return this.getString().replace(/[0-9.-]/g, '');
            }
        },
        {
            key: "getPixels",
            value: function getPixels(axisOrIsFontSize) {
                var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                if (!this.hasValue()) return 0;
                var _ref = typeof axisOrIsFontSize === 'boolean' ? [
                    undefined,
                    axisOrIsFontSize
                ] : [
                    axisOrIsFontSize
                ], _ref2 = _slicedToArray__default["default"](_ref, 2), axis = _ref2[0], isFontSize = _ref2[1];
                var viewPort = this.document.screen.viewPort;
                switch(true){
                    case this.isString(/vmin$/):
                        return this.getNumber() / 100 * Math.min(viewPort.computeSize('x'), viewPort.computeSize('y'));
                    case this.isString(/vmax$/):
                        return this.getNumber() / 100 * Math.max(viewPort.computeSize('x'), viewPort.computeSize('y'));
                    case this.isString(/vw$/):
                        return this.getNumber() / 100 * viewPort.computeSize('x');
                    case this.isString(/vh$/):
                        return this.getNumber() / 100 * viewPort.computeSize('y');
                    case this.isString(/rem$/):
                        return this.getNumber() * this.getRem();
                    case this.isString(/em$/):
                        return this.getNumber() * this.getEm();
                    case this.isString(/ex$/):
                        return this.getNumber() * this.getEm() / 2;
                    case this.isString(/px$/):
                        return this.getNumber();
                    case this.isString(/pt$/):
                        return this.getNumber() * this.getDpi() * (1 / 72);
                    case this.isString(/pc$/):
                        return this.getNumber() * 15;
                    case this.isString(/cm$/):
                        return this.getNumber() * this.getDpi() / 2.54;
                    case this.isString(/mm$/):
                        return this.getNumber() * this.getDpi() / 25.4;
                    case this.isString(/in$/):
                        return this.getNumber() * this.getDpi();
                    case this.isString(/%$/) && isFontSize:
                        return this.getNumber() * this.getEm();
                    case this.isString(/%$/):
                        return this.getNumber() * viewPort.computeSize(axis);
                    default:
                        var n = this.getNumber();
                        if (processPercent && n < 1) return n * viewPort.computeSize(axis);
                        return n;
                }
            }
        },
        {
            key: "getMilliseconds",
            value: function getMilliseconds() {
                if (!this.hasValue()) return 0;
                if (this.isString(/ms$/)) return this.getNumber();
                return this.getNumber() * 1000;
            }
        },
        {
            key: "getRadians",
            value: function getRadians() {
                if (!this.hasValue()) return 0;
                return this.getNumber() * (Math.PI / 180);
            }
        },
        {
            key: "getDefinition",
            value: function getDefinition() {
                var asString = this.getString();
                var name = /#([^)'"]+)/.exec(asString);
                if (name) name = name[1];
                if (!name) name = asString;
                return this.document.definitions[name];
            }
        },
        {
            key: "getFillStyleDefinition",
            value: function getFillStyleDefinition(element, opacity) {
                var def = this.getDefinition();
                if (!def) return null;
                 // gradient
                if (typeof def.createGradient === 'function') return def.createGradient(this.document.ctx, element, opacity);
                 // pattern
                if (typeof def.createPattern === 'function') {
                    if (def.getHrefAttribute().hasValue()) {
                        var patternTransform = def.getAttribute('patternTransform');
                        def = def.getHrefAttribute().getDefinition();
                        if (patternTransform.hasValue()) def.getAttribute('patternTransform', true).setValue(patternTransform.value);
                    }
                    return def.createPattern(this.document.ctx, element, opacity);
                }
                return null;
            }
        },
        {
            key: "getTextBaseline",
            value: function getTextBaseline() {
                if (!this.hasValue()) return null;
                return Property1.textBaselineMapping[this.getString()];
            }
        },
        {
            key: "addOpacity",
            value: function addOpacity(opacity) {
                var value = this.getColor();
                var len = value.length;
                var commas = 0; // Simulate old RGBColor version, which can't parse rgba.
                for(var i = 0; i < len; i++){
                    if (value[i] === ',') commas++;
                    if (commas === 3) break;
                }
                if (opacity.hasValue() && this.isString() && commas !== 3) {
                    var color = new RGBColor__default["default"](value);
                    if (color.ok) {
                        color.alpha = opacity.getNumber();
                        value = color.toRGBA();
                    }
                }
                return new Property1(this.document, this.name, value);
            }
        }
    ], [
        {
            key: "empty",
            value: function empty(document) {
                return new Property1(document, 'EMPTY', '');
            }
        }
    ]);
    return Property1;
}();
Property.textBaselineMapping = {
    'baseline': 'alphabetic',
    'before-edge': 'top',
    'text-before-edge': 'top',
    'middle': 'middle',
    'central': 'middle',
    'after-edge': 'bottom',
    'text-after-edge': 'bottom',
    'ideographic': 'ideographic',
    'alphabetic': 'alphabetic',
    'hanging': 'hanging',
    'mathematical': 'alphabetic'
};
var ViewPort = /*#__PURE__*/ function() {
    function ViewPort1() {
        _classCallCheck__default["default"](this, ViewPort1);
        this.viewPorts = [];
    }
    _createClass__default["default"](ViewPort1, [
        {
            key: "clear",
            value: function clear() {
                this.viewPorts = [];
            }
        },
        {
            key: "setCurrent",
            value: function setCurrent(width, height) {
                this.viewPorts.push({
                    width: width,
                    height: height
                });
            }
        },
        {
            key: "removeCurrent",
            value: function removeCurrent() {
                this.viewPorts.pop();
            }
        },
        {
            key: "getCurrent",
            value: function getCurrent() {
                var viewPorts = this.viewPorts;
                return viewPorts[viewPorts.length - 1];
            }
        },
        {
            key: "computeSize",
            value: function computeSize(d) {
                if (typeof d === 'number') return d;
                if (d === 'x') return this.width;
                if (d === 'y') return this.height;
                return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
            }
        },
        {
            key: "width",
            get: function get() {
                return this.getCurrent().width;
            }
        },
        {
            key: "height",
            get: function get() {
                return this.getCurrent().height;
            }
        }
    ]);
    return ViewPort1;
}();
var Point = /*#__PURE__*/ function() {
    function Point1(x, y) {
        _classCallCheck__default["default"](this, Point1);
        this.x = x;
        this.y = y;
    }
    _createClass__default["default"](Point1, [
        {
            key: "angleTo",
            value: function angleTo(point) {
                return Math.atan2(point.y - this.y, point.x - this.x);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                var x = this.x, y = this.y;
                var xp = x * transform[0] + y * transform[2] + transform[4];
                var yp = x * transform[1] + y * transform[3] + transform[5];
                this.x = xp;
                this.y = yp;
            }
        }
    ], [
        {
            key: "parse",
            value: function parse(point) {
                var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var _toNumbers = toNumbers(point), _toNumbers2 = _slicedToArray__default["default"](_toNumbers, 2), _toNumbers2$ = _toNumbers2[0], x = _toNumbers2$ === void 0 ? defaultValue : _toNumbers2$, _toNumbers2$2 = _toNumbers2[1], y = _toNumbers2$2 === void 0 ? defaultValue : _toNumbers2$2;
                return new Point1(x, y);
            }
        },
        {
            key: "parseScale",
            value: function parseScale(scale) {
                var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var _toNumbers3 = toNumbers(scale), _toNumbers4 = _slicedToArray__default["default"](_toNumbers3, 2), _toNumbers4$ = _toNumbers4[0], x = _toNumbers4$ === void 0 ? defaultValue : _toNumbers4$, _toNumbers4$2 = _toNumbers4[1], y = _toNumbers4$2 === void 0 ? x : _toNumbers4$2;
                return new Point1(x, y);
            }
        },
        {
            key: "parsePath",
            value: function parsePath(path) {
                var points = toNumbers(path);
                var len = points.length;
                var pathPoints = [];
                for(var i = 0; i < len; i += 2)pathPoints.push(new Point1(points[i], points[i + 1]));
                return pathPoints;
            }
        }
    ]);
    return Point1;
}();
var Mouse = /*#__PURE__*/ function() {
    function Mouse1(screen) {
        _classCallCheck__default["default"](this, Mouse1);
        this.screen = screen;
        this.working = false;
        this.events = [];
        this.eventElements = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.onClick = this.onClick.bind(this); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    _createClass__default["default"](Mouse1, [
        {
            key: "isWorking",
            value: function isWorking() {
                return this.working;
            }
        },
        {
            key: "start",
            value: function start() {
                if (this.working) return;
                var screen = this.screen, onClick = this.onClick, onMouseMove = this.onMouseMove;
                var canvas = screen.ctx.canvas;
                canvas.onclick = onClick;
                canvas.onmousemove = onMouseMove;
                this.working = true;
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (!this.working) return;
                var canvas = this.screen.ctx.canvas;
                this.working = false;
                canvas.onclick = null;
                canvas.onmousemove = null;
            }
        },
        {
            key: "hasEvents",
            value: function hasEvents() {
                return this.working && this.events.length > 0;
            }
        },
        {
            key: "runEvents",
            value: function runEvents() {
                if (!this.working) return;
                var document = this.screen, events = this.events, eventElements = this.eventElements;
                var style = document.ctx.canvas.style;
                if (style) style.cursor = '';
                events.forEach(function(_ref, i) {
                    var run = _ref.run;
                    var element = eventElements[i];
                    while(element){
                        run(element);
                        element = element.parent;
                    }
                }); // done running, clear
                this.events = [];
                this.eventElements = [];
            }
        },
        {
            key: "checkPath",
            value: function checkPath(element, ctx) {
                if (!this.working || !ctx) return;
                var events = this.events, eventElements = this.eventElements;
                events.forEach(function(_ref2, i) {
                    var x = _ref2.x, y = _ref2.y;
                    if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) eventElements[i] = element;
                });
            }
        },
        {
            key: "checkBoundingBox",
            value: function checkBoundingBox(element, boundingBox) {
                if (!this.working || !boundingBox) return;
                var events = this.events, eventElements = this.eventElements;
                events.forEach(function(_ref3, i) {
                    var x = _ref3.x, y = _ref3.y;
                    if (!eventElements[i] && boundingBox.isPointInBox(x, y)) eventElements[i] = element;
                });
            }
        },
        {
            key: "mapXY",
            value: function mapXY(x, y) {
                var _this$screen = this.screen, window = _this$screen.window, ctx = _this$screen.ctx;
                var point = new Point(x, y);
                var element = ctx.canvas;
                while(element){
                    point.x -= element.offsetLeft;
                    point.y -= element.offsetTop;
                    element = element.offsetParent;
                }
                if (window.scrollX) point.x += window.scrollX;
                if (window.scrollY) point.y += window.scrollY;
                return point;
            }
        },
        {
            key: "onClick",
            value: function onClick(event) {
                var _this$mapXY = this.mapXY(event.clientX, event.clientY), x = _this$mapXY.x, y = _this$mapXY.y;
                this.events.push({
                    type: 'onclick',
                    x: x,
                    y: y,
                    run: function run(eventTarget) {
                        if (eventTarget.onClick) eventTarget.onClick();
                    }
                });
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove(event) {
                var _this$mapXY2 = this.mapXY(event.clientX, event.clientY), x = _this$mapXY2.x, y = _this$mapXY2.y;
                this.events.push({
                    type: 'onmousemove',
                    x: x,
                    y: y,
                    run: function run(eventTarget) {
                        if (eventTarget.onMouseMove) eventTarget.onMouseMove();
                    }
                });
            }
        }
    ]);
    return Mouse1;
}();
var defaultWindow = typeof window !== 'undefined' ? window : null;
var defaultFetch$1 = typeof fetch !== 'undefined' ? fetch.bind(undefined) : null;
var Screen1 = /*#__PURE__*/ function() {
    function Screen2(ctx) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        }, _ref$fetch = _ref.fetch, fetch = _ref$fetch === void 0 ? defaultFetch$1 : _ref$fetch, _ref$window = _ref.window, window = _ref$window === void 0 ? defaultWindow : _ref$window;
        _classCallCheck__default["default"](this, Screen2);
        this.ctx = ctx;
        this.FRAMERATE = 30;
        this.MAX_VIRTUAL_PIXELS = 30000;
        this.CLIENT_WIDTH = 800;
        this.CLIENT_HEIGHT = 600;
        this.viewPort = new ViewPort();
        this.mouse = new Mouse(this);
        this.animations = [];
        this.waits = [];
        this.frameDuration = 0;
        this.isReadyLock = false;
        this.isFirstRender = true;
        this.intervalId = null;
        this.window = window;
        this.fetch = fetch;
    }
    _createClass__default["default"](Screen2, [
        {
            key: "wait",
            value: function wait(checker) {
                this.waits.push(checker);
            }
        },
        {
            key: "ready",
            value: function ready() {
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                if (!this.readyPromise) return Promise.resolve();
                return this.readyPromise;
            }
        },
        {
            key: "isReady",
            value: function isReady() {
                if (this.isReadyLock) return true;
                var isReadyLock = this.waits.every(function(_) {
                    return _();
                });
                if (isReadyLock) {
                    this.waits = [];
                    if (this.resolveReady) this.resolveReady();
                }
                this.isReadyLock = isReadyLock;
                return isReadyLock;
            }
        },
        {
            key: "setDefaults",
            value: function setDefaults(ctx) {
                // initial values and defaults
                ctx.strokeStyle = 'rgba(0,0,0,0)';
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                ctx.miterLimit = 4;
            }
        },
        {
            key: "setViewBox",
            value: function setViewBox(_ref2) {
                var document = _ref2.document, ctx = _ref2.ctx, aspectRatio = _ref2.aspectRatio, width = _ref2.width, desiredWidth = _ref2.desiredWidth, height = _ref2.height, desiredHeight = _ref2.desiredHeight, _ref2$minX = _ref2.minX, minX = _ref2$minX === void 0 ? 0 : _ref2$minX, _ref2$minY = _ref2.minY, minY = _ref2$minY === void 0 ? 0 : _ref2$minY, refX = _ref2.refX, refY = _ref2.refY, _ref2$clip = _ref2.clip, clip = _ref2$clip === void 0 ? false : _ref2$clip, _ref2$clipX = _ref2.clipX, clipX = _ref2$clipX === void 0 ? 0 : _ref2$clipX, _ref2$clipY = _ref2.clipY, clipY = _ref2$clipY === void 0 ? 0 : _ref2$clipY;
                // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
                var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ''); // ignore defer
                var _cleanAspectRatio$spl = cleanAspectRatio.split(' '), _cleanAspectRatio$spl2 = _slicedToArray__default["default"](_cleanAspectRatio$spl, 2), aspectRatioAlign = _cleanAspectRatio$spl2[0], aspectRatioMeetOrSlice = _cleanAspectRatio$spl2[1];
                var align = aspectRatioAlign || 'xMidYMid';
                var meetOrSlice = aspectRatioMeetOrSlice || 'meet'; // calculate scale
                var scaleX = width / desiredWidth;
                var scaleY = height / desiredHeight;
                var scaleMin = Math.min(scaleX, scaleY);
                var scaleMax = Math.max(scaleX, scaleY);
                var finalDesiredWidth = desiredWidth;
                var finalDesiredHeight = desiredHeight;
                if (meetOrSlice === 'meet') {
                    finalDesiredWidth *= scaleMin;
                    finalDesiredHeight *= scaleMin;
                }
                if (meetOrSlice === 'slice') {
                    finalDesiredWidth *= scaleMax;
                    finalDesiredHeight *= scaleMax;
                }
                var refXProp = new Property(document, 'refX', refX);
                var refYProp = new Property(document, 'refY', refY);
                var hasRefs = refXProp.hasValue() && refYProp.hasValue();
                if (hasRefs) ctx.translate(-scaleMin * refXProp.getPixels('x'), -scaleMin * refYProp.getPixels('y'));
                if (clip) {
                    var scaledClipX = scaleMin * clipX;
                    var scaledClipY = scaleMin * clipY;
                    ctx.beginPath();
                    ctx.moveTo(scaledClipX, scaledClipY);
                    ctx.lineTo(width, scaledClipY);
                    ctx.lineTo(width, height);
                    ctx.lineTo(scaledClipX, height);
                    ctx.closePath();
                    ctx.clip();
                }
                if (!hasRefs) {
                    var isMeetMinY = meetOrSlice === 'meet' && scaleMin === scaleY;
                    var isSliceMaxY = meetOrSlice === 'slice' && scaleMax === scaleY;
                    var isMeetMinX = meetOrSlice === 'meet' && scaleMin === scaleX;
                    var isSliceMaxX = meetOrSlice === 'slice' && scaleMax === scaleX;
                    if (align.startsWith('xMid') && (isMeetMinY || isSliceMaxY)) ctx.translate(width / 2 - finalDesiredWidth / 2, 0);
                    if (align.endsWith('YMid') && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height / 2 - finalDesiredHeight / 2);
                    if (align.startsWith('xMax') && (isMeetMinY || isSliceMaxY)) ctx.translate(width - finalDesiredWidth, 0);
                    if (align.endsWith('YMax') && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height - finalDesiredHeight);
                } // scale
                switch(true){
                    case align === 'none':
                        ctx.scale(scaleX, scaleY);
                        break;
                    case meetOrSlice === 'meet':
                        ctx.scale(scaleMin, scaleMin);
                        break;
                    case meetOrSlice === 'slice':
                        ctx.scale(scaleMax, scaleMax);
                        break;
                } // translate
                ctx.translate(-minX, -minY);
            }
        },
        {
            key: "start",
            value: function start(element) {
                var _this = this;
                var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                }, _ref3$enableRedraw = _ref3.enableRedraw, enableRedraw = _ref3$enableRedraw === void 0 ? false : _ref3$enableRedraw, _ref3$ignoreMouse = _ref3.ignoreMouse, ignoreMouse = _ref3$ignoreMouse === void 0 ? false : _ref3$ignoreMouse, _ref3$ignoreAnimation = _ref3.ignoreAnimation, ignoreAnimation = _ref3$ignoreAnimation === void 0 ? false : _ref3$ignoreAnimation, _ref3$ignoreDimension = _ref3.ignoreDimensions, ignoreDimensions = _ref3$ignoreDimension === void 0 ? false : _ref3$ignoreDimension, _ref3$ignoreClear = _ref3.ignoreClear, ignoreClear = _ref3$ignoreClear === void 0 ? false : _ref3$ignoreClear, forceRedraw = _ref3.forceRedraw, scaleWidth = _ref3.scaleWidth, scaleHeight = _ref3.scaleHeight, offsetX = _ref3.offsetX, offsetY = _ref3.offsetY;
                var FRAMERATE = this.FRAMERATE, mouse = this.mouse;
                var frameDuration = 1000 / FRAMERATE;
                this.frameDuration = frameDuration;
                this.readyPromise = new Promise(function(resolve) {
                    _this.resolveReady = resolve;
                });
                if (this.isReady()) this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                if (!enableRedraw) return;
                var now = Date.now();
                var then = now;
                var delta = 0;
                var tick = function tick1() {
                    now = Date.now();
                    delta = now - then;
                    if (delta >= frameDuration) {
                        then = now - delta % frameDuration;
                        if (_this.shouldUpdate(ignoreAnimation, forceRedraw)) {
                            _this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                            mouse.runEvents();
                        }
                    }
                    _this.intervalId = requestAnimationFrame__default["default"](tick1);
                };
                if (!ignoreMouse) mouse.start();
                this.intervalId = requestAnimationFrame__default["default"](tick);
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.intervalId) {
                    requestAnimationFrame__default["default"].cancel(this.intervalId);
                    this.intervalId = null;
                }
                this.mouse.stop();
            }
        },
        {
            key: "shouldUpdate",
            value: function shouldUpdate(ignoreAnimation, forceRedraw) {
                // need update from animations?
                if (!ignoreAnimation) {
                    var frameDuration = this.frameDuration;
                    var shouldUpdate = this.animations.reduce(function(shouldUpdate1, animation) {
                        return animation.update(frameDuration) || shouldUpdate1;
                    }, false);
                    if (shouldUpdate) return true;
                } // need update from redraw?
                if (typeof forceRedraw === 'function' && forceRedraw()) return true;
                if (!this.isReadyLock && this.isReady()) return true;
                 // need update from mouse events?
                if (this.mouse.hasEvents()) return true;
                return false;
            }
        },
        {
            key: "render",
            value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
                var CLIENT_WIDTH = this.CLIENT_WIDTH, CLIENT_HEIGHT = this.CLIENT_HEIGHT, viewPort = this.viewPort, ctx = this.ctx, isFirstRender = this.isFirstRender;
                var canvas = ctx.canvas;
                viewPort.clear();
                if (canvas.width && canvas.height) viewPort.setCurrent(canvas.width, canvas.height);
                else viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
                var widthStyle = element.getStyle('width');
                var heightStyle = element.getStyle('height');
                if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== 'number' && typeof scaleHeight !== 'number')) {
                    // set canvas size
                    if (widthStyle.hasValue()) {
                        canvas.width = widthStyle.getPixels('x');
                        if (canvas.style) canvas.style.width = "".concat(canvas.width, "px");
                    }
                    if (heightStyle.hasValue()) {
                        canvas.height = heightStyle.getPixels('y');
                        if (canvas.style) canvas.style.height = "".concat(canvas.height, "px");
                    }
                }
                var cWidth = canvas.clientWidth || canvas.width;
                var cHeight = canvas.clientHeight || canvas.height;
                if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
                    cWidth = widthStyle.getPixels('x');
                    cHeight = heightStyle.getPixels('y');
                }
                viewPort.setCurrent(cWidth, cHeight);
                if (typeof offsetX === 'number') element.getAttribute('x', true).setValue(offsetX);
                if (typeof offsetY === 'number') element.getAttribute('y', true).setValue(offsetY);
                if (typeof scaleWidth === 'number' || typeof scaleHeight === 'number') {
                    var viewBox = toNumbers(element.getAttribute('viewBox').getString());
                    var xRatio = 0;
                    var yRatio = 0;
                    if (typeof scaleWidth === 'number') {
                        var _widthStyle = element.getStyle('width');
                        if (_widthStyle.hasValue()) xRatio = _widthStyle.getPixels('x') / scaleWidth;
                        else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / scaleWidth;
                    }
                    if (typeof scaleHeight === 'number') {
                        var _heightStyle = element.getStyle('height');
                        if (_heightStyle.hasValue()) yRatio = _heightStyle.getPixels('y') / scaleHeight;
                        else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / scaleHeight;
                    }
                    if (!xRatio) xRatio = yRatio;
                    if (!yRatio) yRatio = xRatio;
                    element.getAttribute('width', true).setValue(scaleWidth);
                    element.getAttribute('height', true).setValue(scaleHeight);
                    var transformStyle = element.getStyle('transform', true, true);
                    transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1 / xRatio, ", ").concat(1 / yRatio, ")"));
                } // clear and render
                if (!ignoreClear) ctx.clearRect(0, 0, cWidth, cHeight);
                element.render(ctx);
                if (isFirstRender) this.isFirstRender = false;
            }
        }
    ]);
    return Screen2;
}();
Screen1.defaultWindow = defaultWindow;
Screen1.defaultFetch = defaultFetch$1;
var defaultFetch = Screen1.defaultFetch;
var DefaultDOMParser = typeof DOMParser !== 'undefined' ? DOMParser : null;
var Parser = /*#__PURE__*/ function() {
    function Parser1() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, _ref$fetch = _ref.fetch, fetch = _ref$fetch === void 0 ? defaultFetch : _ref$fetch, _ref$DOMParser = _ref.DOMParser, DOMParser1 = _ref$DOMParser === void 0 ? DefaultDOMParser : _ref$DOMParser;
        _classCallCheck__default["default"](this, Parser1);
        this.fetch = fetch;
        this.DOMParser = DOMParser1;
    }
    _createClass__default["default"](Parser1, [
        {
            key: "parse",
            value: function() {
                var _parse = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee(resource) {
                    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                if (!resource.startsWith('<')) {
                                    _context.next = 2;
                                    break;
                                }
                                return _context.abrupt("return", this.parseFromString(resource));
                            case 2:
                                return _context.abrupt("return", this.load(resource));
                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function parse(_x) {
                    return _parse.apply(this, arguments);
                }
                return parse;
            }()
        },
        {
            key: "parseFromString",
            value: function parseFromString(xml) {
                var parser = new this.DOMParser();
                try {
                    return this.checkDocument(parser.parseFromString(xml, 'image/svg+xml'));
                } catch (err) {
                    return this.checkDocument(parser.parseFromString(xml, 'text/xml'));
                }
            }
        },
        {
            key: "checkDocument",
            value: function checkDocument(document) {
                var parserError = document.getElementsByTagName('parsererror')[0];
                if (parserError) throw new Error(parserError.textContent);
                return document;
            }
        },
        {
            key: "load",
            value: function() {
                var _load = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee2(url) {
                    var response, xml;
                    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.fetch(url);
                            case 2:
                                response = _context2.sent;
                                _context2.next = 5;
                                return response.text();
                            case 5:
                                xml = _context2.sent;
                                return _context2.abrupt("return", this.parseFromString(xml));
                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function load(_x2) {
                    return _load.apply(this, arguments);
                }
                return load;
            }()
        }
    ]);
    return Parser1;
}();
var Translate = /*#__PURE__*/ function() {
    function Translate1(_, point) {
        _classCallCheck__default["default"](this, Translate1);
        this.type = 'translate';
        this.point = null;
        this.point = Point.parse(point);
    }
    _createClass__default["default"](Translate1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this$point = this.point, x = _this$point.x, y = _this$point.y;
                ctx.translate(x || 0, y || 0);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this$point2 = this.point, x = _this$point2.x, y = _this$point2.y;
                ctx.translate(-1 * x || 0, -1 * y || 0);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var _this$point3 = this.point, x = _this$point3.x, y = _this$point3.y;
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    x || 0,
                    y || 0
                ]);
            }
        }
    ]);
    return Translate1;
}();
var Rotate = /*#__PURE__*/ function() {
    function Rotate1(document, rotate, transformOrigin) {
        _classCallCheck__default["default"](this, Rotate1);
        this.type = 'rotate';
        this.angle = null;
        this.originX = null;
        this.originY = null;
        this.cx = 0;
        this.cy = 0;
        var numbers = toNumbers(rotate);
        this.angle = new Property(document, 'angle', numbers[0]);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
        this.cx = numbers[1] || 0;
        this.cy = numbers[2] || 0;
    }
    _createClass__default["default"](Rotate1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var cx = this.cx, cy = this.cy, originX = this.originX, originY = this.originY, angle = this.angle;
                var tx = cx + originX.getPixels('x');
                var ty = cy + originY.getPixels('y');
                ctx.translate(tx, ty);
                ctx.rotate(angle.getRadians());
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var cx = this.cx, cy = this.cy, originX = this.originX, originY = this.originY, angle = this.angle;
                var tx = cx + originX.getPixels('x');
                var ty = cy + originY.getPixels('y');
                ctx.translate(tx, ty);
                ctx.rotate(-1 * angle.getRadians());
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var cx = this.cx, cy = this.cy, angle = this.angle;
                var rad = angle.getRadians();
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    cx || 0,
                    cy || 0
                ]);
                point.applyTransform([
                    Math.cos(rad),
                    Math.sin(rad),
                    -Math.sin(rad),
                    Math.cos(rad),
                    0,
                    0
                ]);
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    -cx || 0,
                    -cy || 0
                ]);
            }
        }
    ]);
    return Rotate1;
}();
var Scale = /*#__PURE__*/ function() {
    function Scale1(_, scale, transformOrigin) {
        _classCallCheck__default["default"](this, Scale1);
        this.type = 'scale';
        this.scale = null;
        this.originX = null;
        this.originY = null;
        var scaleSize = Point.parseScale(scale); // Workaround for node-canvas
        if (scaleSize.x === 0 || scaleSize.y === 0) {
            scaleSize.x = PSEUDO_ZERO;
            scaleSize.y = PSEUDO_ZERO;
        }
        this.scale = scaleSize;
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
    }
    _createClass__default["default"](Scale1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this$scale = this.scale, x = _this$scale.x, y = _this$scale.y, originX = this.originX, originY = this.originY;
                var tx = originX.getPixels('x');
                var ty = originY.getPixels('y');
                ctx.translate(tx, ty);
                ctx.scale(x, y || x);
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this$scale2 = this.scale, x = _this$scale2.x, y = _this$scale2.y, originX = this.originX, originY = this.originY;
                var tx = originX.getPixels('x');
                var ty = originY.getPixels('y');
                ctx.translate(tx, ty);
                ctx.scale(1 / x, 1 / y || x);
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var _this$scale3 = this.scale, x = _this$scale3.x, y = _this$scale3.y;
                point.applyTransform([
                    x || 0,
                    0,
                    0,
                    y || 0,
                    0,
                    0
                ]);
            }
        }
    ]);
    return Scale1;
}();
var Matrix = /*#__PURE__*/ function() {
    function Matrix1(_, matrix, transformOrigin) {
        _classCallCheck__default["default"](this, Matrix1);
        this.type = 'matrix';
        this.matrix = [];
        this.originX = null;
        this.originY = null;
        this.matrix = toNumbers(matrix);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
    }
    _createClass__default["default"](Matrix1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var originX = this.originX, originY = this.originY, matrix = this.matrix;
                var tx = originX.getPixels('x');
                var ty = originY.getPixels('y');
                ctx.translate(tx, ty);
                ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var originX = this.originX, originY = this.originY, matrix = this.matrix;
                var a = matrix[0];
                var b = matrix[2];
                var c = matrix[4];
                var d = matrix[1];
                var e = matrix[3];
                var f = matrix[5];
                var g = 0;
                var h = 0;
                var i = 1;
                var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
                var tx = originX.getPixels('x');
                var ty = originY.getPixels('y');
                ctx.translate(tx, ty);
                ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                point.applyTransform(this.matrix);
            }
        }
    ]);
    return Matrix1;
}();
function _createSuper$M(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$M();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$M() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var Skew1 = /*#__PURE__*/ function(_Matrix) {
    _inherits__default["default"](Skew2, _Matrix);
    var _super = _createSuper$M(Skew2);
    function Skew2(document, skew, transformOrigin) {
        var _this;
        _classCallCheck__default["default"](this, Skew2);
        _this = _super.call(this, document, skew, transformOrigin);
        _this.type = 'skew';
        _this.angle = null;
        _this.angle = new Property(document, 'angle', skew);
        return _this;
    }
    return Skew2;
}(Matrix);
function _createSuper$L(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$L();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$L() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SkewX1 = /*#__PURE__*/ function(_Skew) {
    _inherits__default["default"](SkewX2, _Skew);
    var _super = _createSuper$L(SkewX2);
    function SkewX2(document, skew, transformOrigin) {
        var _this;
        _classCallCheck__default["default"](this, SkewX2);
        _this = _super.call(this, document, skew, transformOrigin);
        _this.type = 'skewX';
        _this.matrix = [
            1,
            0,
            Math.tan(_this.angle.getRadians()),
            1,
            0,
            0
        ];
        return _this;
    }
    return SkewX2;
}(Skew1);
function _createSuper$K(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$K();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$K() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SkewY1 = /*#__PURE__*/ function(_Skew) {
    _inherits__default["default"](SkewY2, _Skew);
    var _super = _createSuper$K(SkewY2);
    function SkewY2(document, skew, transformOrigin) {
        var _this;
        _classCallCheck__default["default"](this, SkewY2);
        _this = _super.call(this, document, skew, transformOrigin);
        _this.type = 'skewY';
        _this.matrix = [
            1,
            Math.tan(_this.angle.getRadians()),
            0,
            1,
            0,
            0
        ];
        return _this;
    }
    return SkewY2;
}(Skew1);
function parseTransforms(transform) {
    return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
}
function parseTransform(transform) {
    var _transform$split = transform.split('('), _transform$split2 = _slicedToArray__default["default"](_transform$split, 2), type = _transform$split2[0], value = _transform$split2[1];
    return [
        type.trim(),
        value.trim().replace(')', '')
    ];
}
var Transform = /*#__PURE__*/ function() {
    function Transform1(document, transform, transformOrigin) {
        var _this = this;
        _classCallCheck__default["default"](this, Transform1);
        this.document = document;
        this.transforms = [];
        var data = parseTransforms(transform);
        data.forEach(function(transform1) {
            if (transform1 === 'none') return;
            var _parseTransform = parseTransform(transform1), _parseTransform2 = _slicedToArray__default["default"](_parseTransform, 2), type = _parseTransform2[0], value = _parseTransform2[1];
            var TransformType = Transform1.transformTypes[type];
            if (typeof TransformType !== 'undefined') _this.transforms.push(new TransformType(_this.document, value, transformOrigin));
        });
    }
    _createClass__default["default"](Transform1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = 0; i < len; i++)transforms[i].apply(ctx);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = len - 1; i >= 0; i--)transforms[i].unapply(ctx);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = 0; i < len; i++)transforms[i].applyToPoint(point);
            }
        }
    ], [
        {
            key: "fromElement",
            value: function fromElement(document, element) {
                var transformStyle = element.getStyle('transform', false, true);
                var _element$getStyle$spl = element.getStyle('transform-origin', false, true).split(), _element$getStyle$spl2 = _slicedToArray__default["default"](_element$getStyle$spl, 2), transformOriginXProperty = _element$getStyle$spl2[0], _element$getStyle$spl3 = _element$getStyle$spl2[1], transformOriginYProperty = _element$getStyle$spl3 === void 0 ? transformOriginXProperty : _element$getStyle$spl3;
                var transformOrigin = [
                    transformOriginXProperty,
                    transformOriginYProperty
                ];
                if (transformStyle.hasValue()) return new Transform1(document, transformStyle.getString(), transformOrigin);
                return null;
            }
        }
    ]);
    return Transform1;
}();
Transform.transformTypes = {
    translate: Translate,
    rotate: Rotate,
    scale: Scale,
    matrix: Matrix,
    skewX: SkewX1,
    skewY: SkewY1
};
var Element1 = /*#__PURE__*/ function() {
    function Element2(document, node1) {
        var _this = this;
        var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        _classCallCheck__default["default"](this, Element2);
        this.document = document;
        this.node = node1;
        this.captureTextNodes = captureTextNodes;
        this.attributes = {
        };
        this.styles = {
        };
        this.stylesSpecificity = {
        };
        this.animationFrozen = false;
        this.animationFrozenValue = '';
        this.parent = null;
        this.children = [];
        if (!node1 || node1.nodeType !== 1) // ELEMENT_NODE
        return;
         // add attributes
        Array.from(node1.attributes).forEach(function(attribute) {
            var nodeName = normalizeAttributeName(attribute.nodeName);
            _this.attributes[nodeName] = new Property(document, nodeName, attribute.value);
        });
        this.addStylesFromStyleDefinition(); // add inline styles
        if (this.getAttribute('style').hasValue()) {
            var styles = this.getAttribute('style').getString().split(';').map(function(_) {
                return _.trim();
            });
            styles.forEach(function(style) {
                if (!style) return;
                var _style$split$map = style.split(':').map(function(_) {
                    return _.trim();
                }), _style$split$map2 = _slicedToArray__default["default"](_style$split$map, 2), name = _style$split$map2[0], value = _style$split$map2[1];
                _this.styles[name] = new Property(document, name, value);
            });
        }
        var definitions = document.definitions;
        var id = this.getAttribute('id'); // add id
        if (id.hasValue()) {
            if (!definitions[id.getString()]) definitions[id.getString()] = this;
        }
        Array.from(node1.childNodes).forEach(function(childNode) {
            if (childNode.nodeType === 1) _this.addChild(childNode); // ELEMENT_NODE
            else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
                var textNode = document.createTextNode(childNode);
                if (textNode.getText().length > 0) _this.addChild(textNode); // TEXT_NODE
            }
        });
    }
    _createClass__default["default"](Element2, [
        {
            key: "getAttribute",
            value: function getAttribute(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var attr = this.attributes[name];
                if (!attr && createIfNotExists) {
                    var _attr = new Property(this.document, name, '');
                    this.attributes[name] = _attr;
                    return _attr;
                }
                return attr || Property.empty(this.document);
            }
        },
        {
            key: "getHrefAttribute",
            value: function getHrefAttribute() {
                for(var key in this.attributes){
                    if (key === 'href' || key.endsWith(':href')) return this.attributes[key];
                }
                return Property.empty(this.document);
            }
        },
        {
            key: "getStyle",
            value: function getStyle(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var style = this.styles[name];
                if (style) return style;
                var attr = this.getAttribute(name);
                if (attr !== null && attr !== void 0 && attr.hasValue()) {
                    this.styles[name] = attr; // move up to me to cache
                    return attr;
                }
                if (!skipAncestors) {
                    var parent = this.parent;
                    if (parent) {
                        var parentStyle = parent.getStyle(name);
                        if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) return parentStyle;
                    }
                }
                if (createIfNotExists) {
                    var _style = new Property(this.document, name, '');
                    this.styles[name] = _style;
                    return _style;
                }
                return style || Property.empty(this.document);
            }
        },
        {
            key: "render",
            value: function render(ctx) {
                // don't render display=none
                // don't render visibility=hidden
                if (this.getStyle('display').getString() === 'none' || this.getStyle('visibility').getString() === 'hidden') return;
                ctx.save();
                if (this.getStyle('mask').hasValue()) {
                    // mask
                    var mask = this.getStyle('mask').getDefinition();
                    if (mask) {
                        this.applyEffects(ctx);
                        mask.apply(ctx, this);
                    }
                } else if (this.getStyle('filter').getValue('none') !== 'none') {
                    // filter
                    var filter = this.getStyle('filter').getDefinition();
                    if (filter) {
                        this.applyEffects(ctx);
                        filter.apply(ctx, this);
                    }
                } else {
                    this.setContext(ctx);
                    this.renderChildren(ctx);
                    this.clearContext(ctx);
                }
                ctx.restore();
            }
        },
        {
            key: "setContext",
            value: function setContext(_) {
            }
        },
        {
            key: "applyEffects",
            value: function applyEffects(ctx) {
                // transform
                var transform = Transform.fromElement(this.document, this);
                if (transform) transform.apply(ctx);
                 // clip
                var clipPathStyleProp = this.getStyle('clip-path', false, true);
                if (clipPathStyleProp.hasValue()) {
                    var clip = clipPathStyleProp.getDefinition();
                    if (clip) clip.apply(ctx);
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(_) {
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.children.forEach(function(child) {
                    child.render(ctx);
                });
            }
        },
        {
            key: "addChild",
            value: function addChild(childNode) {
                var child = childNode instanceof Element2 ? childNode : this.document.createElement(childNode);
                child.parent = this;
                if (!Element2.ignoreChildTypes.includes(child.type)) this.children.push(child);
            }
        },
        {
            key: "matchesSelector",
            value: function matchesSelector(selector) {
                var _node$getAttribute;
                var node1 = this.node;
                if (typeof node1.matches === 'function') return node1.matches(selector);
                var styleClasses = (_node$getAttribute = node1.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node1, 'class');
                if (!styleClasses || styleClasses === '') return false;
                return styleClasses.split(' ').some(function(styleClass) {
                    return ".".concat(styleClass) === selector;
                });
            }
        },
        {
            key: "addStylesFromStyleDefinition",
            value: function addStylesFromStyleDefinition() {
                var _this$document = this.document, styles = _this$document.styles, stylesSpecificity = _this$document.stylesSpecificity;
                for(var selector in styles)if (!selector.startsWith('@') && this.matchesSelector(selector)) {
                    var style = styles[selector];
                    var specificity = stylesSpecificity[selector];
                    if (style) for(var name in style){
                        var existingSpecificity = this.stylesSpecificity[name];
                        if (typeof existingSpecificity === 'undefined') existingSpecificity = '000';
                        if (specificity >= existingSpecificity) {
                            this.styles[name] = style[name];
                            this.stylesSpecificity[name] = specificity;
                        }
                    }
                }
            }
        },
        {
            key: "removeStyles",
            value: function removeStyles(element, ignoreStyles) {
                var toRestore = ignoreStyles.reduce(function(toRestore1, name) {
                    var styleProp = element.getStyle(name);
                    if (!styleProp.hasValue()) return toRestore1;
                    var value = styleProp.getString();
                    styleProp.setValue('');
                    return [].concat(_toConsumableArray__default["default"](toRestore1), [
                        [
                            name,
                            value
                        ]
                    ]);
                }, []);
                return toRestore;
            }
        },
        {
            key: "restoreStyles",
            value: function restoreStyles(element, styles) {
                styles.forEach(function(_ref) {
                    var _ref2 = _slicedToArray__default["default"](_ref, 2), name = _ref2[0], value = _ref2[1];
                    element.getStyle(name, true).setValue(value);
                });
            }
        },
        {
            key: "isFirstChild",
            value: function isFirstChild() {
                var _this$parent;
                return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
            }
        }
    ]);
    return Element2;
}();
Element1.ignoreChildTypes = [
    'title'
];
function _createSuper$J(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$J();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$J() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var UnknownElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](UnknownElement2, _Element);
    var _super = _createSuper$J(UnknownElement2);
    function UnknownElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, UnknownElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        return _this;
    }
    return UnknownElement2;
}(Element1);
function wrapFontFamily(fontFamily) {
    var trimmed = fontFamily.trim();
    return /^('|")/.test(trimmed) ? trimmed : "\"".concat(trimmed, "\"");
}
function prepareFontFamily(fontFamily) {
    return typeof process === 'undefined' ? fontFamily : fontFamily.trim().split(',').map(wrapFontFamily).join(',');
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 * @param fontStyle
 * @returns CSS font style.
 */ function prepareFontStyle(fontStyle) {
    if (!fontStyle) return '';
    var targetFontStyle = fontStyle.trim().toLowerCase();
    switch(targetFontStyle){
        case 'normal':
        case 'italic':
        case 'oblique':
        case 'inherit':
        case 'initial':
        case 'unset':
            return targetFontStyle;
        default:
            if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) return targetFontStyle;
            return '';
    }
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * @param fontWeight
 * @returns CSS font weight.
 */ function prepareFontWeight(fontWeight) {
    if (!fontWeight) return '';
    var targetFontWeight = fontWeight.trim().toLowerCase();
    switch(targetFontWeight){
        case 'normal':
        case 'bold':
        case 'lighter':
        case 'bolder':
        case 'inherit':
        case 'initial':
        case 'unset':
            return targetFontWeight;
        default:
            if (/^[\d.]+$/.test(targetFontWeight)) return targetFontWeight;
            return '';
    }
}
var Font = /*#__PURE__*/ function() {
    function Font1(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
        _classCallCheck__default["default"](this, Font1);
        var inheritFont = inherit ? typeof inherit === 'string' ? Font1.parse(inherit) : inherit : {
        };
        this.fontFamily = fontFamily || inheritFont.fontFamily;
        this.fontSize = fontSize || inheritFont.fontSize;
        this.fontStyle = fontStyle || inheritFont.fontStyle;
        this.fontWeight = fontWeight || inheritFont.fontWeight;
        this.fontVariant = fontVariant || inheritFont.fontVariant;
    }
    _createClass__default["default"](Font1, [
        {
            key: "toString",
            value: function toString() {
                return [
                    prepareFontStyle(this.fontStyle),
                    this.fontVariant,
                    prepareFontWeight(this.fontWeight),
                    this.fontSize,
                    prepareFontFamily(this.fontFamily)
                ].join(' ').trim();
            }
        }
    ], [
        {
            key: "parse",
            value: function parse() {
                var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var inherit = arguments.length > 1 ? arguments[1] : undefined;
                var fontStyle = '';
                var fontVariant = '';
                var fontWeight = '';
                var fontSize = '';
                var fontFamily = '';
                var parts = compressSpaces(font).trim().split(' ');
                var set = {
                    fontSize: false,
                    fontStyle: false,
                    fontWeight: false,
                    fontVariant: false
                };
                parts.forEach(function(part) {
                    if (part !== 'inherit') fontFamily += part;
                });
                return new Font1(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
            }
        }
    ]);
    return Font1;
}();
Font.styles = 'normal|italic|oblique|inherit';
Font.variants = 'normal|small-caps|inherit';
Font.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';
var BoundingBox = /*#__PURE__*/ function() {
    function BoundingBox1() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
        _classCallCheck__default["default"](this, BoundingBox1);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }
    _createClass__default["default"](BoundingBox1, [
        {
            key: "addPoint",
            value: function addPoint(x, y) {
                if (typeof x !== 'undefined') {
                    if (isNaN(this.x1) || isNaN(this.x2)) {
                        this.x1 = x;
                        this.x2 = x;
                    }
                    if (x < this.x1) this.x1 = x;
                    if (x > this.x2) this.x2 = x;
                }
                if (typeof y !== 'undefined') {
                    if (isNaN(this.y1) || isNaN(this.y2)) {
                        this.y1 = y;
                        this.y2 = y;
                    }
                    if (y < this.y1) this.y1 = y;
                    if (y > this.y2) this.y2 = y;
                }
            }
        },
        {
            key: "addX",
            value: function addX(x) {
                this.addPoint(x, null);
            }
        },
        {
            key: "addY",
            value: function addY(y) {
                this.addPoint(null, y);
            }
        },
        {
            key: "addBoundingBox",
            value: function addBoundingBox(boundingBox) {
                if (!boundingBox) return;
                var x1 = boundingBox.x1, y1 = boundingBox.y1, x2 = boundingBox.x2, y2 = boundingBox.y2;
                this.addPoint(x1, y1);
                this.addPoint(x2, y2);
            }
        },
        {
            key: "sumCubic",
            value: function sumCubic(t, p0, p1, p2, p3) {
                return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
            }
        },
        {
            key: "bezierCurveAdd",
            value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
                var b = 6 * p0 - 12 * p1 + 6 * p2;
                var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
                var c = 3 * p1 - 3 * p0;
                if (a === 0) {
                    if (b === 0) return;
                    var t = -c / b;
                    if (0 < t && t < 1) {
                        if (forX) this.addX(this.sumCubic(t, p0, p1, p2, p3));
                        else this.addY(this.sumCubic(t, p0, p1, p2, p3));
                    }
                    return;
                }
                var b2ac = Math.pow(b, 2) - 4 * c * a;
                if (b2ac < 0) return;
                var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
                if (0 < t1 && t1 < 1) {
                    if (forX) this.addX(this.sumCubic(t1, p0, p1, p2, p3));
                    else this.addY(this.sumCubic(t1, p0, p1, p2, p3));
                }
                var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
                if (0 < t2 && t2 < 1) {
                    if (forX) this.addX(this.sumCubic(t2, p0, p1, p2, p3));
                    else this.addY(this.sumCubic(t2, p0, p1, p2, p3));
                }
            }
        },
        {
            key: "addBezierCurve",
            value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
                this.addPoint(p0x, p0y);
                this.addPoint(p3x, p3y);
                this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
                this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
            }
        },
        {
            key: "addQuadraticCurve",
            value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
                var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
                var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
                this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
            }
        },
        {
            key: "isPointInBox",
            value: function isPointInBox(x, y) {
                var x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2;
                return x1 <= x && x <= x2 && y1 <= y && y <= y2;
            }
        },
        {
            key: "x",
            get: function get() {
                return this.x1;
            }
        },
        {
            key: "y",
            get: function get() {
                return this.y1;
            }
        },
        {
            key: "width",
            get: function get() {
                return this.x2 - this.x1;
            }
        },
        {
            key: "height",
            get: function get() {
                return this.y2 - this.y1;
            }
        }
    ]);
    return BoundingBox1;
}();
function _createSuper$I(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$I();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$I() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PathParser1 = /*#__PURE__*/ function(_SVGPathData) {
    _inherits__default["default"](PathParser2, _SVGPathData);
    var _super = _createSuper$I(PathParser2);
    function PathParser2(path) {
        var _this;
        _classCallCheck__default["default"](this, PathParser2);
        _this = _super.call(this, path.replace(/([+\-.])\s+/gm, '$1').replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''));
        _this.control = null;
        _this.start = null;
        _this.current = null;
        _this.command = null;
        _this.commands = _this.commands;
        _this.i = -1;
        _this.previousCommand = null;
        _this.points = [];
        _this.angles = [];
        return _this;
    }
    _createClass__default["default"](PathParser2, [
        {
            key: "reset",
            value: function reset() {
                this.i = -1;
                this.command = null;
                this.previousCommand = null;
                this.start = new Point(0, 0);
                this.control = new Point(0, 0);
                this.current = new Point(0, 0);
                this.points = [];
                this.angles = [];
            }
        },
        {
            key: "isEnd",
            value: function isEnd() {
                var i = this.i, commands = this.commands;
                return i >= commands.length - 1;
            }
        },
        {
            key: "next",
            value: function next() {
                var command = this.commands[++this.i];
                this.previousCommand = this.command;
                this.command = command;
                return command;
            }
        },
        {
            key: "getPoint",
            value: function getPoint() {
                var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
                var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
                var point = new Point(this.command[xProp], this.command[yProp]);
                return this.makeAbsolute(point);
            }
        },
        {
            key: "getAsControlPoint",
            value: function getAsControlPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.control = point;
                return point;
            }
        },
        {
            key: "getAsCurrentPoint",
            value: function getAsCurrentPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.current = point;
                return point;
            }
        },
        {
            key: "getReflectedControlPoint",
            value: function getReflectedControlPoint() {
                var previousCommand = this.previousCommand.type;
                if (previousCommand !== svgPathdata.SVGPathData.CURVE_TO && previousCommand !== svgPathdata.SVGPathData.SMOOTH_CURVE_TO && previousCommand !== svgPathdata.SVGPathData.QUAD_TO && previousCommand !== svgPathdata.SVGPathData.SMOOTH_QUAD_TO) return this.current;
                 // reflect point
                var _this$current = this.current, cx = _this$current.x, cy = _this$current.y, _this$control = this.control, ox = _this$control.x, oy = _this$control.y;
                var point = new Point(2 * cx - ox, 2 * cy - oy);
                return point;
            }
        },
        {
            key: "makeAbsolute",
            value: function makeAbsolute(point) {
                if (this.command.relative) {
                    var _this$current2 = this.current, x = _this$current2.x, y = _this$current2.y;
                    point.x += x;
                    point.y += y;
                }
                return point;
            }
        },
        {
            key: "addMarker",
            value: function addMarker(point, from, priorTo) {
                var points = this.points, angles = this.angles; // if the last angle isn't filled in because we didn't have this point yet ...
                if (priorTo && angles.length > 0 && !angles[angles.length - 1]) angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
                this.addMarkerAngle(point, from ? from.angleTo(point) : null);
            }
        },
        {
            key: "addMarkerAngle",
            value: function addMarkerAngle(point, angle) {
                this.points.push(point);
                this.angles.push(angle);
            }
        },
        {
            key: "getMarkerPoints",
            value: function getMarkerPoints() {
                return this.points;
            }
        },
        {
            key: "getMarkerAngles",
            value: function getMarkerAngles() {
                var angles = this.angles;
                var len = angles.length;
                for(var i = 0; i < len; i++)if (!angles[i]) {
                    for(var j = i + 1; j < len; j++)if (angles[j]) {
                        angles[i] = angles[j];
                        break;
                    }
                }
                return angles;
            }
        }
    ]);
    return PathParser2;
}(svgPathdata.SVGPathData);
function _createSuper$H(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$H();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$H() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var RenderedElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](RenderedElement2, _Element);
    var _super = _createSuper$H(RenderedElement2);
    function RenderedElement2() {
        var _this;
        _classCallCheck__default["default"](this, RenderedElement2);
        _this = _super.apply(this, arguments);
        _this.modifiedEmSizeStack = false;
        return _this;
    }
    _createClass__default["default"](RenderedElement2, [
        {
            key: "calculateOpacity",
            value: function calculateOpacity() {
                var opacity = 1; // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
                var element = this;
                while(element){
                    var opacityStyle = element.getStyle('opacity', false, true); // no ancestors on style call
                    if (opacityStyle.hasValue(true)) opacity *= opacityStyle.getNumber();
                    element = element.parent;
                }
                return opacity;
            }
        },
        {
            key: "setContext",
            value: function setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                if (!fromMeasure) {
                    // causes stack overflow when measuring text with gradients
                    // fill
                    var fillStyleProp = this.getStyle('fill');
                    var fillOpacityStyleProp = this.getStyle('fill-opacity');
                    var strokeStyleProp = this.getStyle('stroke');
                    var strokeOpacityProp = this.getStyle('stroke-opacity');
                    if (fillStyleProp.isUrlDefinition()) {
                        var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
                        if (fillStyle) ctx.fillStyle = fillStyle;
                    } else if (fillStyleProp.hasValue()) {
                        if (fillStyleProp.getString() === 'currentColor') fillStyleProp.setValue(this.getStyle('color').getColor());
                        var _fillStyle = fillStyleProp.getColor();
                        if (_fillStyle !== 'inherit') ctx.fillStyle = _fillStyle === 'none' ? 'rgba(0,0,0,0)' : _fillStyle;
                    }
                    if (fillOpacityStyleProp.hasValue()) {
                        var _fillStyle2 = new Property(this.document, 'fill', ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
                        ctx.fillStyle = _fillStyle2;
                    } // stroke
                    if (strokeStyleProp.isUrlDefinition()) {
                        var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
                        if (strokeStyle) ctx.strokeStyle = strokeStyle;
                    } else if (strokeStyleProp.hasValue()) {
                        if (strokeStyleProp.getString() === 'currentColor') strokeStyleProp.setValue(this.getStyle('color').getColor());
                        var _strokeStyle = strokeStyleProp.getString();
                        if (_strokeStyle !== 'inherit') ctx.strokeStyle = _strokeStyle === 'none' ? 'rgba(0,0,0,0)' : _strokeStyle;
                    }
                    if (strokeOpacityProp.hasValue()) {
                        var _strokeStyle2 = new Property(this.document, 'stroke', ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
                        ctx.strokeStyle = _strokeStyle2;
                    }
                    var strokeWidthStyleProp = this.getStyle('stroke-width');
                    if (strokeWidthStyleProp.hasValue()) {
                        var newLineWidth = strokeWidthStyleProp.getPixels();
                        ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO : newLineWidth;
                    }
                    var strokeLinecapStyleProp = this.getStyle('stroke-linecap');
                    var strokeLinejoinStyleProp = this.getStyle('stroke-linejoin');
                    var strokeMiterlimitProp = this.getStyle('stroke-miterlimit'); // NEED TEST
                    // const pointOrderStyleProp = this.getStyle('paint-order');
                    var strokeDasharrayStyleProp = this.getStyle('stroke-dasharray');
                    var strokeDashoffsetProp = this.getStyle('stroke-dashoffset');
                    if (strokeLinecapStyleProp.hasValue()) ctx.lineCap = strokeLinecapStyleProp.getString();
                    if (strokeLinejoinStyleProp.hasValue()) ctx.lineJoin = strokeLinejoinStyleProp.getString();
                    if (strokeMiterlimitProp.hasValue()) ctx.miterLimit = strokeMiterlimitProp.getNumber();
                     // NEED TEST
                    // if (pointOrderStyleProp.hasValue()) {
                    // 	// ?
                    // 	ctx.paintOrder = pointOrderStyleProp.getValue();
                    // }
                    if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== 'none') {
                        var gaps = toNumbers(strokeDasharrayStyleProp.getString());
                        if (typeof ctx.setLineDash !== 'undefined') ctx.setLineDash(gaps);
                        else if (typeof ctx.webkitLineDash !== 'undefined') // @ts-expect-error Handle browser prefix.
                        ctx.webkitLineDash = gaps;
                        else if (typeof ctx.mozDash !== 'undefined' && !(gaps.length === 1 && gaps[0] === 0)) // @ts-expect-error Handle browser prefix.
                        ctx.mozDash = gaps;
                        var offset = strokeDashoffsetProp.getPixels();
                        if (typeof ctx.lineDashOffset !== 'undefined') ctx.lineDashOffset = offset;
                        else if (typeof ctx.webkitLineDashOffset !== 'undefined') // @ts-expect-error Handle browser prefix.
                        ctx.webkitLineDashOffset = offset;
                        else if (typeof ctx.mozDashOffset !== 'undefined') // @ts-expect-error Handle browser prefix.
                        ctx.mozDashOffset = offset;
                    }
                } // font
                this.modifiedEmSizeStack = false;
                if (typeof ctx.font !== 'undefined') {
                    var fontStyleProp = this.getStyle('font');
                    var fontStyleStyleProp = this.getStyle('font-style');
                    var fontVariantStyleProp = this.getStyle('font-variant');
                    var fontWeightStyleProp = this.getStyle('font-weight');
                    var fontSizeStyleProp = this.getStyle('font-size');
                    var fontFamilyStyleProp = this.getStyle('font-family');
                    var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : '', fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
                    fontStyleStyleProp.setValue(font.fontStyle);
                    fontVariantStyleProp.setValue(font.fontVariant);
                    fontWeightStyleProp.setValue(font.fontWeight);
                    fontSizeStyleProp.setValue(font.fontSize);
                    fontFamilyStyleProp.setValue(font.fontFamily);
                    ctx.font = font.toString();
                    if (fontSizeStyleProp.isPixels()) {
                        this.document.emSize = fontSizeStyleProp.getPixels();
                        this.modifiedEmSizeStack = true;
                    }
                }
                if (!fromMeasure) {
                    // effects
                    this.applyEffects(ctx); // opacity
                    ctx.globalAlpha = this.calculateOpacity();
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(ctx) {
                _get__default["default"](_getPrototypeOf__default["default"](RenderedElement2.prototype), "clearContext", this).call(this, ctx);
                if (this.modifiedEmSizeStack) this.document.popEmSize();
            }
        }
    ]);
    return RenderedElement2;
}(Element1);
function _createSuper$G(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$G();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$G() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PathElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default["default"](PathElement2, _RenderedElement);
    var _super = _createSuper$G(PathElement2);
    function PathElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, PathElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'path';
        _this.pathParser = null;
        _this.pathParser = new PathParser1(_this.getAttribute('d').getString());
        return _this;
    }
    _createClass__default["default"](PathElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var pathParser = this.pathParser;
                var boundingBox = new BoundingBox();
                pathParser.reset();
                if (ctx) ctx.beginPath();
                while(!pathParser.isEnd())switch(pathParser.next().type){
                    case PathParser1.MOVE_TO:
                        this.pathM(ctx, boundingBox);
                        break;
                    case PathParser1.LINE_TO:
                        this.pathL(ctx, boundingBox);
                        break;
                    case PathParser1.HORIZ_LINE_TO:
                        this.pathH(ctx, boundingBox);
                        break;
                    case PathParser1.VERT_LINE_TO:
                        this.pathV(ctx, boundingBox);
                        break;
                    case PathParser1.CURVE_TO:
                        this.pathC(ctx, boundingBox);
                        break;
                    case PathParser1.SMOOTH_CURVE_TO:
                        this.pathS(ctx, boundingBox);
                        break;
                    case PathParser1.QUAD_TO:
                        this.pathQ(ctx, boundingBox);
                        break;
                    case PathParser1.SMOOTH_QUAD_TO:
                        this.pathT(ctx, boundingBox);
                        break;
                    case PathParser1.ARC:
                        this.pathA(ctx, boundingBox);
                        break;
                    case PathParser1.CLOSE_PATH:
                        this.pathZ(ctx, boundingBox);
                        break;
                }
                return boundingBox;
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(_) {
                return this.path();
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var pathParser = this.pathParser;
                var points = pathParser.getMarkerPoints();
                var angles = pathParser.getMarkerAngles();
                var markers = points.map(function(point, i) {
                    return [
                        point,
                        angles[i]
                    ];
                });
                return markers;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.path(ctx);
                this.document.screen.mouse.checkPath(this, ctx);
                var fillRuleStyleProp = this.getStyle('fill-rule');
                if (ctx.fillStyle !== '') {
                    if (fillRuleStyleProp.getString('inherit') !== 'inherit') ctx.fill(fillRuleStyleProp.getString());
                    else ctx.fill();
                }
                if (ctx.strokeStyle !== '') {
                    if (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke') {
                        ctx.save();
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                        ctx.stroke();
                        ctx.restore();
                    } else ctx.stroke();
                }
                var markers = this.getMarkers();
                if (markers) {
                    var markersLastIndex = markers.length - 1;
                    var markerStartStyleProp = this.getStyle('marker-start');
                    var markerMidStyleProp = this.getStyle('marker-mid');
                    var markerEndStyleProp = this.getStyle('marker-end');
                    if (markerStartStyleProp.isUrlDefinition()) {
                        var marker = markerStartStyleProp.getDefinition();
                        var _markers$ = _slicedToArray__default["default"](markers[0], 2), point = _markers$[0], angle = _markers$[1];
                        marker.render(ctx, point, angle);
                    }
                    if (markerMidStyleProp.isUrlDefinition()) {
                        var _marker = markerMidStyleProp.getDefinition();
                        for(var i = 1; i < markersLastIndex; i++){
                            var _markers$i = _slicedToArray__default["default"](markers[i], 2), _point = _markers$i[0], _angle = _markers$i[1];
                            _marker.render(ctx, _point, _angle);
                        }
                    }
                    if (markerEndStyleProp.isUrlDefinition()) {
                        var _marker2 = markerEndStyleProp.getDefinition();
                        var _markers$markersLastI = _slicedToArray__default["default"](markers[markersLastIndex], 2), _point2 = _markers$markersLastI[0], _angle2 = _markers$markersLastI[1];
                        _marker2.render(ctx, _point2, _angle2);
                    }
                }
            }
        },
        {
            key: "pathM",
            value: function pathM(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathM = PathElement2.pathM(pathParser), point = _PathElement$pathM.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.moveTo(x, y);
            }
        },
        {
            key: "pathL",
            value: function pathL(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathL = PathElement2.pathL(pathParser), current = _PathElement$pathL.current, point = _PathElement$pathL.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathH",
            value: function pathH(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathH = PathElement2.pathH(pathParser), current = _PathElement$pathH.current, point = _PathElement$pathH.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathV",
            value: function pathV(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathV = PathElement2.pathV(pathParser), current = _PathElement$pathV.current, point = _PathElement$pathV.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathC",
            value: function pathC(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathC = PathElement2.pathC(pathParser), current = _PathElement$pathC.current, point = _PathElement$pathC.point, controlPoint = _PathElement$pathC.controlPoint, currentPoint = _PathElement$pathC.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathS",
            value: function pathS(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathS = PathElement2.pathS(pathParser), current = _PathElement$pathS.current, point = _PathElement$pathS.point, controlPoint = _PathElement$pathS.controlPoint, currentPoint = _PathElement$pathS.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathQ",
            value: function pathQ(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathQ = PathElement2.pathQ(pathParser), current = _PathElement$pathQ.current, controlPoint = _PathElement$pathQ.controlPoint, currentPoint = _PathElement$pathQ.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathT",
            value: function pathT(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathT = PathElement2.pathT(pathParser), current = _PathElement$pathT.current, controlPoint = _PathElement$pathT.controlPoint, currentPoint = _PathElement$pathT.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathA",
            value: function pathA(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathA = PathElement2.pathA(pathParser), currentPoint = _PathElement$pathA.currentPoint, rX = _PathElement$pathA.rX, rY = _PathElement$pathA.rY, sweepFlag = _PathElement$pathA.sweepFlag, xAxisRotation = _PathElement$pathA.xAxisRotation, centp = _PathElement$pathA.centp, a1 = _PathElement$pathA.a1, ad = _PathElement$pathA.ad; // for markers
                var dir = 1 - sweepFlag ? 1 : -1;
                var ah = a1 + dir * (ad / 2);
                var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
                pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
                boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better
                if (ctx && !isNaN(a1) && !isNaN(ad)) {
                    var r = rX > rY ? rX : rY;
                    var sx = rX > rY ? 1 : rX / rY;
                    var sy = rX > rY ? rY / rX : 1;
                    ctx.translate(centp.x, centp.y);
                    ctx.rotate(xAxisRotation);
                    ctx.scale(sx, sy);
                    ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
                    ctx.scale(1 / sx, 1 / sy);
                    ctx.rotate(-xAxisRotation);
                    ctx.translate(-centp.x, -centp.y);
                }
            }
        },
        {
            key: "pathZ",
            value: function pathZ(ctx, boundingBox) {
                PathElement2.pathZ(this.pathParser);
                if (ctx) // only close path if it is not a straight line
                {
                    if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) ctx.closePath();
                }
            }
        }
    ], [
        {
            key: "pathM",
            value: function pathM(pathParser) {
                var point = pathParser.getAsCurrentPoint();
                pathParser.start = pathParser.current;
                return {
                    point: point
                };
            }
        },
        {
            key: "pathL",
            value: function pathL(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathH",
            value: function pathH(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
                pathParser.current = point;
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathV",
            value: function pathV(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
                pathParser.current = point;
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathC",
            value: function pathC(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getPoint('x1', 'y1');
                var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathS",
            value: function pathS(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getReflectedControlPoint();
                var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathQ",
            value: function pathQ(pathParser) {
                var current = pathParser.current;
                var controlPoint = pathParser.getAsControlPoint('x1', 'y1');
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathT",
            value: function pathT(pathParser) {
                var current = pathParser.current;
                var controlPoint = pathParser.getReflectedControlPoint();
                pathParser.control = controlPoint;
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathA",
            value: function pathA(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var rX = command.rX, rY = command.rY, xRot = command.xRot, lArcFlag = command.lArcFlag, sweepFlag = command.sweepFlag;
                var xAxisRotation = xRot * (Math.PI / 180);
                var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
                // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                // x1', y1'
                var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2); // adjust radii
                var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
                if (l > 1) {
                    rX *= Math.sqrt(l);
                    rY *= Math.sqrt(l);
                } // cx', cy'
                var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
                if (isNaN(s)) s = 0;
                var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy
                var centp = new Point((current.x + currentPoint.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle
                var a1 = vectorsAngle([
                    1,
                    0
                ], [
                    (currp.x - cpp.x) / rX,
                    (currp.y - cpp.y) / rY
                ]); // θ1
                // angle delta
                var u = [
                    (currp.x - cpp.x) / rX,
                    (currp.y - cpp.y) / rY
                ];
                var v = [
                    (-currp.x - cpp.x) / rX,
                    (-currp.y - cpp.y) / rY
                ];
                var ad = vectorsAngle(u, v); // Δθ
                if (vectorsRatio(u, v) <= -1) ad = Math.PI;
                if (vectorsRatio(u, v) >= 1) ad = 0;
                return {
                    currentPoint: currentPoint,
                    rX: rX,
                    rY: rY,
                    sweepFlag: sweepFlag,
                    xAxisRotation: xAxisRotation,
                    centp: centp,
                    a1: a1,
                    ad: ad
                };
            }
        },
        {
            key: "pathZ",
            value: function pathZ(pathParser) {
                pathParser.current = pathParser.start;
            }
        }
    ]);
    return PathElement2;
}(RenderedElement1);
function _createSuper$F(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$F();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$F() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var GlyphElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default["default"](GlyphElement2, _PathElement);
    var _super = _createSuper$F(GlyphElement2);
    function GlyphElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, GlyphElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'glyph';
        _this.horizAdvX = _this.getAttribute('horiz-adv-x').getNumber();
        _this.unicode = _this.getAttribute('unicode').getString();
        _this.arabicForm = _this.getAttribute('arabic-form').getString();
        return _this;
    }
    return GlyphElement2;
}(PathElement1);
function _createSuper$E(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$E();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$E() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TextElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default["default"](TextElement2, _RenderedElement);
    var _super = _createSuper$E(TextElement2);
    function TextElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, TextElement2);
        _this = _super.call(this, document, node1, (this instanceof TextElement2 ? this.constructor : void 0) === TextElement2 ? true : captureTextNodes);
        _this.type = 'text';
        _this.x = 0;
        _this.y = 0;
        _this.measureCache = -1;
        return _this;
    }
    _createClass__default["default"](TextElement2, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                _get__default["default"](_getPrototypeOf__default["default"](TextElement2.prototype), "setContext", this).call(this, ctx, fromMeasure);
                var textBaseline = this.getStyle('dominant-baseline').getTextBaseline() || this.getStyle('alignment-baseline').getTextBaseline();
                if (textBaseline) ctx.textBaseline = textBaseline;
            }
        },
        {
            key: "initializeCoordinates",
            value: function initializeCoordinates() {
                this.x = 0;
                this.y = 0;
                this.leafTexts = [];
                this.textChunkStart = 0;
                this.minX = Number.POSITIVE_INFINITY;
                this.maxX = Number.NEGATIVE_INFINITY;
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var _this2 = this;
                if (this.type !== 'text') return this.getTElementBoundingBox(ctx);
                 // first, calculate child positions
                this.initializeCoordinates();
                this.adjustChildCoordinatesRecursive(ctx);
                var boundingBox = null; // then calculate bounding box
                this.children.forEach(function(_, i) {
                    var childBoundingBox = _this2.getChildBoundingBox(ctx, _this2, _this2, i);
                    if (!boundingBox) boundingBox = childBoundingBox;
                    else boundingBox.addBoundingBox(childBoundingBox);
                });
                return boundingBox;
            }
        },
        {
            key: "getFontSize",
            value: function getFontSize() {
                var document = this.document, parent = this.parent;
                var inheritFontSize = Font.parse(document.ctx.font).fontSize;
                var fontSize = parent.getStyle('font-size').getNumber(inheritFontSize);
                return fontSize;
            }
        },
        {
            key: "getTElementBoundingBox",
            value: function getTElementBoundingBox(ctx) {
                var fontSize = this.getFontSize();
                return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
            }
        },
        {
            key: "getGlyph",
            value: function getGlyph(font, text, i) {
                var char = text[i];
                var glyph = null;
                if (font.isArabic) {
                    var len = text.length;
                    var prevChar = text[i - 1];
                    var nextChar = text[i + 1];
                    var arabicForm = 'isolated';
                    if ((i === 0 || prevChar === ' ') && i < len - 1 && nextChar !== ' ') arabicForm = 'terminal';
                    if (i > 0 && prevChar !== ' ' && i < len - 1 && nextChar !== ' ') arabicForm = 'medial';
                    if (i > 0 && prevChar !== ' ' && (i === len - 1 || nextChar === ' ')) arabicForm = 'initial';
                    if (typeof font.glyphs[char] !== 'undefined') {
                        // NEED TEST
                        var maybeGlyph = font.glyphs[char];
                        glyph = maybeGlyph instanceof GlyphElement1 ? maybeGlyph : maybeGlyph[arabicForm];
                    }
                } else glyph = font.glyphs[char];
                if (!glyph) glyph = font.missingGlyph;
                return glyph;
            }
        },
        {
            key: "getText",
            value: function getText() {
                return '';
            }
        },
        {
            key: "getTextFromNode",
            value: function getTextFromNode(node1) {
                var textNode = node1 || this.node;
                var childNodes = Array.from(textNode.parentNode.childNodes);
                var index1 = childNodes.indexOf(textNode);
                var lastIndex = childNodes.length - 1;
                var text = compressSpaces(// || textNode.text
                textNode.textContent || '');
                if (index1 === 0) text = trimLeft(text);
                if (index1 === lastIndex) text = trimRight(text);
                return text;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var _this3 = this;
                if (this.type !== 'text') {
                    this.renderTElementChildren(ctx);
                    return;
                } // first, calculate child positions
                this.initializeCoordinates();
                this.adjustChildCoordinatesRecursive(ctx); // then render
                this.children.forEach(function(_, i) {
                    _this3.renderChild(ctx, _this3, _this3, i);
                });
                var mouse = this.document.screen.mouse; // Do not calc bounding box if mouse is not working.
                if (mouse.isWorking()) mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
            }
        },
        {
            key: "renderTElementChildren",
            value: function renderTElementChildren(ctx) {
                var document = this.document, parent = this.parent;
                var renderText = this.getText();
                var customFont = parent.getStyle('font-family').getDefinition();
                if (customFont) {
                    var unitsPerEm = customFont.fontFace.unitsPerEm;
                    var ctxFont = Font.parse(document.ctx.font);
                    var fontSize = parent.getStyle('font-size').getNumber(ctxFont.fontSize);
                    var fontStyle = parent.getStyle('font-style').getString(ctxFont.fontStyle);
                    var scale = fontSize / unitsPerEm;
                    var text = customFont.isRTL ? renderText.split('').reverse().join('') : renderText;
                    var dx = toNumbers(parent.getAttribute('dx').getString());
                    var len = text.length;
                    for(var i = 0; i < len; i++){
                        var glyph = this.getGlyph(customFont, text, i);
                        ctx.translate(this.x, this.y);
                        ctx.scale(scale, -scale);
                        var lw = ctx.lineWidth;
                        ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
                        if (fontStyle === 'italic') ctx.transform(1, 0, 0.4, 1, 0, 0);
                        glyph.render(ctx);
                        if (fontStyle === 'italic') ctx.transform(1, 0, -0.4, 1, 0, 0);
                        ctx.lineWidth = lw;
                        ctx.scale(1 / scale, -1 / scale);
                        ctx.translate(-this.x, -this.y);
                        this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
                        if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) this.x += dx[i];
                    }
                    return;
                }
                var x = this.x, y = this.y; // NEED TEST
                // if (ctx.paintOrder === 'stroke') {
                // 	if (ctx.strokeStyle) {
                // 		ctx.strokeText(renderText, x, y);
                // 	}
                // 	if (ctx.fillStyle) {
                // 		ctx.fillText(renderText, x, y);
                // 	}
                // } else {
                if (ctx.fillStyle) ctx.fillText(renderText, x, y);
                if (ctx.strokeStyle) ctx.strokeText(renderText, x, y);
                 // }
            }
        },
        {
            key: "applyAnchoring",
            value: function applyAnchoring() {
                if (this.textChunkStart >= this.leafTexts.length) return;
                 // This is basically the "Apply anchoring" part of https://www.w3.org/TR/SVG2/text.html#TextLayoutAlgorithm.
                // The difference is that we apply the anchoring as soon as a chunk is finished. This saves some extra looping.
                // Vertical text is not supported.
                var firstElement = this.leafTexts[this.textChunkStart];
                var textAnchor = firstElement.getStyle('text-anchor').getString('start');
                var isRTL = false; // we treat RTL like LTR
                var shift = 0;
                if (textAnchor === 'start' && !isRTL || textAnchor === 'end' && isRTL) shift = firstElement.x - this.minX;
                else if (textAnchor === 'end' && !isRTL || textAnchor === 'start' && isRTL) shift = firstElement.x - this.maxX;
                else shift = firstElement.x - (this.minX + this.maxX) / 2;
                for(var i = this.textChunkStart; i < this.leafTexts.length; i++)this.leafTexts[i].x += shift;
                 // start new chunk
                this.minX = Number.POSITIVE_INFINITY;
                this.maxX = Number.NEGATIVE_INFINITY;
                this.textChunkStart = this.leafTexts.length;
            }
        },
        {
            key: "adjustChildCoordinatesRecursive",
            value: function adjustChildCoordinatesRecursive(ctx) {
                var _this4 = this;
                this.children.forEach(function(_, i) {
                    _this4.adjustChildCoordinatesRecursiveCore(ctx, _this4, _this4, i);
                });
                this.applyAnchoring();
            }
        },
        {
            key: "adjustChildCoordinatesRecursiveCore",
            value: function adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (child.children.length > 0) child.children.forEach(function(_, i1) {
                    textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i1);
                });
                else // only leafs are relevant
                this.adjustChildCoordinates(ctx, textParent, parent, i);
            }
        },
        {
            key: "adjustChildCoordinates",
            value: function adjustChildCoordinates(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (typeof child.measureText !== 'function') return child;
                ctx.save();
                child.setContext(ctx, true);
                var xAttr = child.getAttribute('x');
                var yAttr = child.getAttribute('y');
                var dxAttr = child.getAttribute('dx');
                var dyAttr = child.getAttribute('dy');
                var customFont = child.getStyle('font-family').getDefinition();
                var isRTL = Boolean(customFont) && customFont.isRTL;
                if (i === 0) {
                    // First children inherit attributes from parent(s). Positional attributes
                    // are only inherited from a parent to it's first child.
                    if (!xAttr.hasValue()) xAttr.setValue(child.getInheritedAttribute('x'));
                    if (!yAttr.hasValue()) yAttr.setValue(child.getInheritedAttribute('y'));
                    if (!dxAttr.hasValue()) dxAttr.setValue(child.getInheritedAttribute('dx'));
                    if (!dyAttr.hasValue()) dyAttr.setValue(child.getInheritedAttribute('dy'));
                }
                var width = child.measureText(ctx);
                if (isRTL) textParent.x -= width;
                if (xAttr.hasValue()) {
                    // an "x" attribute marks the start of a new chunk
                    textParent.applyAnchoring();
                    child.x = xAttr.getPixels('x');
                    if (dxAttr.hasValue()) child.x += dxAttr.getPixels('x');
                } else {
                    if (dxAttr.hasValue()) textParent.x += dxAttr.getPixels('x');
                    child.x = textParent.x;
                }
                textParent.x = child.x;
                if (!isRTL) textParent.x += width;
                if (yAttr.hasValue()) {
                    child.y = yAttr.getPixels('y');
                    if (dyAttr.hasValue()) child.y += dyAttr.getPixels('y');
                } else {
                    if (dyAttr.hasValue()) textParent.y += dyAttr.getPixels('y');
                    child.y = textParent.y;
                }
                textParent.y = child.y; // update the current chunk and it's bounds
                textParent.leafTexts.push(child);
                textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
                textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
                child.clearContext(ctx);
                ctx.restore();
                return child;
            }
        },
        {
            key: "getChildBoundingBox",
            value: function getChildBoundingBox(ctx, textParent, parent, i) {
                var child = parent.children[i]; // not a text node?
                if (typeof child.getBoundingBox !== 'function') return null;
                var boundingBox = child.getBoundingBox(ctx);
                if (!boundingBox) return null;
                child.children.forEach(function(_, i1) {
                    var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i1);
                    boundingBox.addBoundingBox(childBoundingBox);
                });
                return boundingBox;
            }
        },
        {
            key: "renderChild",
            value: function renderChild(ctx, textParent, parent, i) {
                var child = parent.children[i];
                child.render(ctx);
                child.children.forEach(function(_, i1) {
                    textParent.renderChild(ctx, textParent, child, i1);
                });
            }
        },
        {
            key: "measureText",
            value: function measureText(ctx) {
                var measureCache = this.measureCache;
                if (~measureCache) return measureCache;
                var renderText = this.getText();
                var measure = this.measureTargetText(ctx, renderText);
                this.measureCache = measure;
                return measure;
            }
        },
        {
            key: "measureTargetText",
            value: function measureTargetText(ctx, targetText) {
                if (!targetText.length) return 0;
                var parent = this.parent;
                var customFont = parent.getStyle('font-family').getDefinition();
                if (customFont) {
                    var fontSize = this.getFontSize();
                    var text = customFont.isRTL ? targetText.split('').reverse().join('') : targetText;
                    var dx = toNumbers(parent.getAttribute('dx').getString());
                    var len = text.length;
                    var _measure = 0;
                    for(var i = 0; i < len; i++){
                        var glyph = this.getGlyph(customFont, text, i);
                        _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
                        if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) _measure += dx[i];
                    }
                    return _measure;
                }
                if (!ctx.measureText) return targetText.length * 10;
                ctx.save();
                this.setContext(ctx, true);
                var _ctx$measureText = ctx.measureText(targetText), measure = _ctx$measureText.width;
                this.clearContext(ctx);
                ctx.restore();
                return measure;
            }
        },
        {
            key: "getInheritedAttribute",
            value: function getInheritedAttribute(name) {
                // eslint-disable-next-line @typescript-eslint/no-this-alias,consistent-this
                var current = this;
                while(current instanceof TextElement2 && current.isFirstChild()){
                    var parentAttr = current.parent.getAttribute(name);
                    if (parentAttr.hasValue(true)) return parentAttr.getValue('0');
                    current = current.parent;
                }
                return null;
            }
        }
    ]);
    return TextElement2;
}(RenderedElement1);
function _createSuper$D(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$D();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$D() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TSpanElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default["default"](TSpanElement2, _TextElement);
    var _super = _createSuper$D(TSpanElement2);
    function TSpanElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, TSpanElement2);
        _this = _super.call(this, document, node1, (this instanceof TSpanElement2 ? this.constructor : void 0) === TSpanElement2 ? true : captureTextNodes);
        _this.type = 'tspan'; // if this node has children, then they own the text
        _this.text = _this.children.length > 0 ? '' : _this.getTextFromNode();
        return _this;
    }
    _createClass__default["default"](TSpanElement2, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        }
    ]);
    return TSpanElement2;
}(TextElement1);
function _createSuper$C(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$C();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$C() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TextNode1 = /*#__PURE__*/ function(_TSpanElement) {
    _inherits__default["default"](TextNode2, _TSpanElement);
    var _super = _createSuper$C(TextNode2);
    function TextNode2() {
        var _this;
        _classCallCheck__default["default"](this, TextNode2);
        _this = _super.apply(this, arguments);
        _this.type = 'textNode';
        return _this;
    }
    return TextNode2;
}(TSpanElement1);
function _createSuper$B(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$B();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$B() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SVGElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default["default"](SVGElement2, _RenderedElement);
    var _super = _createSuper$B(SVGElement2);
    function SVGElement2() {
        var _this;
        _classCallCheck__default["default"](this, SVGElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'svg';
        _this.root = false;
        return _this;
    }
    _createClass__default["default"](SVGElement2, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                var _this$node$parentNode;
                var document = this.document;
                var screen = document.screen, window = document.window;
                var canvas = ctx.canvas;
                screen.setDefaults(ctx);
                if (canvas.style && typeof ctx.font !== 'undefined' && window && typeof window.getComputedStyle !== 'undefined') {
                    ctx.font = window.getComputedStyle(canvas).getPropertyValue('font');
                    var fontSizeProp = new Property(document, 'fontSize', Font.parse(ctx.font).fontSize);
                    if (fontSizeProp.hasValue()) {
                        document.rootEmSize = fontSizeProp.getPixels('y');
                        document.emSize = document.rootEmSize;
                    }
                } // create new view port
                if (!this.getAttribute('x').hasValue()) this.getAttribute('x', true).setValue(0);
                if (!this.getAttribute('y').hasValue()) this.getAttribute('y', true).setValue(0);
                var _screen$viewPort = screen.viewPort, width = _screen$viewPort.width, height = _screen$viewPort.height;
                if (!this.getStyle('width').hasValue()) this.getStyle('width', true).setValue('100%');
                if (!this.getStyle('height').hasValue()) this.getStyle('height', true).setValue('100%');
                if (!this.getStyle('color').hasValue()) this.getStyle('color', true).setValue('black');
                var refXAttr = this.getAttribute('refX');
                var refYAttr = this.getAttribute('refY');
                var viewBoxAttr = this.getAttribute('viewBox');
                var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
                var clip = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible';
                var minX = 0;
                var minY = 0;
                var clipX = 0;
                var clipY = 0;
                if (viewBox) {
                    minX = viewBox[0];
                    minY = viewBox[1];
                }
                if (!this.root) {
                    width = this.getStyle('width').getPixels('x');
                    height = this.getStyle('height').getPixels('y');
                    if (this.type === 'marker') {
                        clipX = minX;
                        clipY = minY;
                        minX = 0;
                        minY = 0;
                    }
                }
                screen.viewPort.setCurrent(width, height); // Default value of transform-origin is center only for root SVG elements
                // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform-origin
                if (this.node && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === 'foreignObject') && this.getStyle('transform', false, true).hasValue() && !this.getStyle('transform-origin', false, true).hasValue()) this.getStyle('transform-origin', true, true).setValue('50% 50%');
                _get__default["default"](_getPrototypeOf__default["default"](SVGElement2.prototype), "setContext", this).call(this, ctx);
                ctx.translate(this.getAttribute('x').getPixels('x'), this.getAttribute('y').getPixels('y'));
                if (viewBox) {
                    width = viewBox[2];
                    height = viewBox[3];
                }
                document.setViewBox({
                    ctx: ctx,
                    aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
                    width: screen.viewPort.width,
                    desiredWidth: width,
                    height: screen.viewPort.height,
                    desiredHeight: height,
                    minX: minX,
                    minY: minY,
                    refX: refXAttr.getValue(),
                    refY: refYAttr.getValue(),
                    clip: clip,
                    clipX: clipX,
                    clipY: clipY
                });
                if (viewBox) {
                    screen.viewPort.removeCurrent();
                    screen.viewPort.setCurrent(width, height);
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(ctx) {
                _get__default["default"](_getPrototypeOf__default["default"](SVGElement2.prototype), "clearContext", this).call(this, ctx);
                this.document.screen.viewPort.removeCurrent();
            }
        },
        {
            key: "resize",
            value: function resize(width) {
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var widthAttr = this.getAttribute('width', true);
                var heightAttr = this.getAttribute('height', true);
                var viewBoxAttr = this.getAttribute('viewBox');
                var styleAttr = this.getAttribute('style');
                var originWidth = widthAttr.getNumber(0);
                var originHeight = heightAttr.getNumber(0);
                if (preserveAspectRatio) {
                    if (typeof preserveAspectRatio === 'string') this.getAttribute('preserveAspectRatio', true).setValue(preserveAspectRatio);
                    else {
                        var preserveAspectRatioAttr = this.getAttribute('preserveAspectRatio');
                        if (preserveAspectRatioAttr.hasValue()) preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
                    }
                }
                widthAttr.setValue(width);
                heightAttr.setValue(height);
                if (!viewBoxAttr.hasValue()) viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
                if (styleAttr.hasValue()) {
                    var widthStyle = this.getStyle('width');
                    var heightStyle = this.getStyle('height');
                    if (widthStyle.hasValue()) widthStyle.setValue("".concat(width, "px"));
                    if (heightStyle.hasValue()) heightStyle.setValue("".concat(height, "px"));
                }
            }
        }
    ]);
    return SVGElement2;
}(RenderedElement1);
function _createSuper$A(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$A();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$A() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var RectElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default["default"](RectElement2, _PathElement);
    var _super = _createSuper$A(RectElement2);
    function RectElement2() {
        var _this;
        _classCallCheck__default["default"](this, RectElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'rect';
        return _this;
    }
    _createClass__default["default"](RectElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width', false, true).getPixels('x');
                var height = this.getStyle('height', false, true).getPixels('y');
                var rxAttr = this.getAttribute('rx');
                var ryAttr = this.getAttribute('ry');
                var rx = rxAttr.getPixels('x');
                var ry = ryAttr.getPixels('y');
                if (rxAttr.hasValue() && !ryAttr.hasValue()) ry = rx;
                if (ryAttr.hasValue() && !rxAttr.hasValue()) rx = ry;
                rx = Math.min(rx, width / 2);
                ry = Math.min(ry, height / 2);
                if (ctx) {
                    var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                    ctx.beginPath(); // always start the path so we don't fill prior paths
                    if (height > 0 && width > 0) {
                        ctx.moveTo(x + rx, y);
                        ctx.lineTo(x + width - rx, y);
                        ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
                        ctx.lineTo(x + width, y + height - ry);
                        ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
                        ctx.lineTo(x + rx, y + height);
                        ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
                        ctx.lineTo(x, y + ry);
                        ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
                        ctx.closePath();
                    }
                }
                return new BoundingBox(x, y, x + width, y + height);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return RectElement2;
}(PathElement1);
function _createSuper$z(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$z();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$z() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var CircleElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default["default"](CircleElement2, _PathElement);
    var _super = _createSuper$z(CircleElement2);
    function CircleElement2() {
        var _this;
        _classCallCheck__default["default"](this, CircleElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'circle';
        return _this;
    }
    _createClass__default["default"](CircleElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var cx = this.getAttribute('cx').getPixels('x');
                var cy = this.getAttribute('cy').getPixels('y');
                var r = this.getAttribute('r').getPixels();
                if (ctx && r > 0) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
                    ctx.closePath();
                }
                return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return CircleElement2;
}(PathElement1);
function _createSuper$y(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$y();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$y() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var EllipseElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default["default"](EllipseElement2, _PathElement);
    var _super = _createSuper$y(EllipseElement2);
    function EllipseElement2() {
        var _this;
        _classCallCheck__default["default"](this, EllipseElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'ellipse';
        return _this;
    }
    _createClass__default["default"](EllipseElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                var rx = this.getAttribute('rx').getPixels('x');
                var ry = this.getAttribute('ry').getPixels('y');
                var cx = this.getAttribute('cx').getPixels('x');
                var cy = this.getAttribute('cy').getPixels('y');
                if (ctx && rx > 0 && ry > 0) {
                    ctx.beginPath();
                    ctx.moveTo(cx + rx, cy);
                    ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
                    ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
                    ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
                    ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
                    ctx.closePath();
                }
                return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return EllipseElement2;
}(PathElement1);
function _createSuper$x(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$x();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$x() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var LineElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default["default"](LineElement2, _PathElement);
    var _super = _createSuper$x(LineElement2);
    function LineElement2() {
        var _this;
        _classCallCheck__default["default"](this, LineElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'line';
        return _this;
    }
    _createClass__default["default"](LineElement2, [
        {
            key: "getPoints",
            value: function getPoints() {
                return [
                    new Point(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')),
                    new Point(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y'))
                ];
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var _this$getPoints = this.getPoints(), _this$getPoints2 = _slicedToArray__default["default"](_this$getPoints, 2), _this$getPoints2$ = _this$getPoints2[0], x0 = _this$getPoints2$.x, y0 = _this$getPoints2$.y, _this$getPoints2$2 = _this$getPoints2[1], x1 = _this$getPoints2$2.x, y1 = _this$getPoints2$2.y;
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                    ctx.lineTo(x1, y1);
                }
                return new BoundingBox(x0, y0, x1, y1);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var _this$getPoints3 = this.getPoints(), _this$getPoints4 = _slicedToArray__default["default"](_this$getPoints3, 2), p0 = _this$getPoints4[0], p1 = _this$getPoints4[1];
                var a = p0.angleTo(p1);
                return [
                    [
                        p0,
                        a
                    ],
                    [
                        p1,
                        a
                    ]
                ];
            }
        }
    ]);
    return LineElement2;
}(PathElement1);
function _createSuper$w(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$w();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$w() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PolylineElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default["default"](PolylineElement2, _PathElement);
    var _super = _createSuper$w(PolylineElement2);
    function PolylineElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, PolylineElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'polyline';
        _this.points = [];
        _this.points = Point.parsePath(_this.getAttribute('points').getString());
        return _this;
    }
    _createClass__default["default"](PolylineElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var points = this.points;
                var _points = _slicedToArray__default["default"](points, 1), _points$ = _points[0], x0 = _points$.x, y0 = _points$.y;
                var boundingBox = new BoundingBox(x0, y0);
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                }
                points.forEach(function(_ref) {
                    var x = _ref.x, y = _ref.y;
                    boundingBox.addPoint(x, y);
                    if (ctx) ctx.lineTo(x, y);
                });
                return boundingBox;
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var points = this.points;
                var lastIndex = points.length - 1;
                var markers = [];
                points.forEach(function(point, i) {
                    if (i === lastIndex) return;
                    markers.push([
                        point,
                        point.angleTo(points[i + 1])
                    ]);
                });
                if (markers.length > 0) markers.push([
                    points[points.length - 1],
                    markers[markers.length - 1][1]
                ]);
                return markers;
            }
        }
    ]);
    return PolylineElement2;
}(PathElement1);
function _createSuper$v(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$v();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$v() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PolygonElement1 = /*#__PURE__*/ function(_PolylineElement) {
    _inherits__default["default"](PolygonElement2, _PolylineElement);
    var _super = _createSuper$v(PolygonElement2);
    function PolygonElement2() {
        var _this;
        _classCallCheck__default["default"](this, PolygonElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'polygon';
        return _this;
    }
    _createClass__default["default"](PolygonElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var boundingBox = _get__default["default"](_getPrototypeOf__default["default"](PolygonElement2.prototype), "path", this).call(this, ctx);
                var _this$points = _slicedToArray__default["default"](this.points, 1), _this$points$ = _this$points[0], x = _this$points$.x, y = _this$points$.y;
                if (ctx) {
                    ctx.lineTo(x, y);
                    ctx.closePath();
                }
                return boundingBox;
            }
        }
    ]);
    return PolygonElement2;
}(PolylineElement1);
function _createSuper$u(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$u();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$u() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PatternElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](PatternElement2, _Element);
    var _super = _createSuper$u(PatternElement2);
    function PatternElement2() {
        var _this;
        _classCallCheck__default["default"](this, PatternElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'pattern';
        return _this;
    }
    _createClass__default["default"](PatternElement2, [
        {
            key: "createPattern",
            value: function createPattern(ctx, _, parentOpacityProp) {
                var width = this.getStyle('width').getPixels('x', true);
                var height = this.getStyle('height').getPixels('y', true); // render me using a temporary svg element
                var patternSvg = new SVGElement1(this.document, null);
                patternSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
                patternSvg.attributes.width = new Property(this.document, 'width', "".concat(width, "px"));
                patternSvg.attributes.height = new Property(this.document, 'height', "".concat(height, "px"));
                patternSvg.attributes.transform = new Property(this.document, 'transform', this.getAttribute('patternTransform').getValue());
                patternSvg.children = this.children;
                var patternCanvas = this.document.createCanvas(width, height);
                var patternCtx = patternCanvas.getContext('2d');
                var xAttr = this.getAttribute('x');
                var yAttr = this.getAttribute('y');
                if (xAttr.hasValue() && yAttr.hasValue()) patternCtx.translate(xAttr.getPixels('x', true), yAttr.getPixels('y', true));
                if (parentOpacityProp.hasValue()) this.styles['fill-opacity'] = parentOpacityProp;
                else Reflect.deleteProperty(this.styles, 'fill-opacity');
                 // render 3x3 grid so when we transform there's no white space on edges
                for(var x = -1; x <= 1; x++)for(var y = -1; y <= 1; y++){
                    patternCtx.save();
                    patternSvg.attributes.x = new Property(this.document, 'x', x * patternCanvas.width);
                    patternSvg.attributes.y = new Property(this.document, 'y', y * patternCanvas.height);
                    patternSvg.render(patternCtx);
                    patternCtx.restore();
                }
                var pattern = ctx.createPattern(patternCanvas, 'repeat');
                return pattern;
            }
        }
    ]);
    return PatternElement2;
}(Element1);
function _createSuper$t(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$t();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$t() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var MarkerElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](MarkerElement2, _Element);
    var _super = _createSuper$t(MarkerElement2);
    function MarkerElement2() {
        var _this;
        _classCallCheck__default["default"](this, MarkerElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'marker';
        return _this;
    }
    _createClass__default["default"](MarkerElement2, [
        {
            key: "render",
            value: function render(ctx, point, angle) {
                if (!point) return;
                var x = point.x, y = point.y;
                var orient = this.getAttribute('orient').getString('auto');
                var markerUnits = this.getAttribute('markerUnits').getString('strokeWidth');
                ctx.translate(x, y);
                if (orient === 'auto') ctx.rotate(angle);
                if (markerUnits === 'strokeWidth') ctx.scale(ctx.lineWidth, ctx.lineWidth);
                ctx.save(); // render me using a temporary svg element
                var markerSvg = new SVGElement1(this.document, null);
                markerSvg.type = this.type;
                markerSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
                markerSvg.attributes.refX = new Property(this.document, 'refX', this.getAttribute('refX').getValue());
                markerSvg.attributes.refY = new Property(this.document, 'refY', this.getAttribute('refY').getValue());
                markerSvg.attributes.width = new Property(this.document, 'width', this.getAttribute('markerWidth').getValue());
                markerSvg.attributes.height = new Property(this.document, 'height', this.getAttribute('markerHeight').getValue());
                markerSvg.attributes.overflow = new Property(this.document, 'overflow', this.getAttribute('overflow').getValue());
                markerSvg.attributes.fill = new Property(this.document, 'fill', this.getAttribute('fill').getColor('black'));
                markerSvg.attributes.stroke = new Property(this.document, 'stroke', this.getAttribute('stroke').getValue('none'));
                markerSvg.children = this.children;
                markerSvg.render(ctx);
                ctx.restore();
                if (markerUnits === 'strokeWidth') ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
                if (orient === 'auto') ctx.rotate(-angle);
                ctx.translate(-x, -y);
            }
        }
    ]);
    return MarkerElement2;
}(Element1);
function _createSuper$s(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$s();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$s() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var DefsElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](DefsElement2, _Element);
    var _super = _createSuper$s(DefsElement2);
    function DefsElement2() {
        var _this;
        _classCallCheck__default["default"](this, DefsElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'defs';
        return _this;
    }
    _createClass__default["default"](DefsElement2, [
        {
            key: "render",
            value: function render() {
            }
        }
    ]);
    return DefsElement2;
}(Element1);
function _createSuper$r(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$r();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$r() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var GElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default["default"](GElement2, _RenderedElement);
    var _super = _createSuper$r(GElement2);
    function GElement2() {
        var _this;
        _classCallCheck__default["default"](this, GElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'g';
        return _this;
    }
    _createClass__default["default"](GElement2, [
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var boundingBox = new BoundingBox();
                this.children.forEach(function(child) {
                    boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                });
                return boundingBox;
            }
        }
    ]);
    return GElement2;
}(RenderedElement1);
function _createSuper$q(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$q();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$q() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var GradientElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](GradientElement2, _Element);
    var _super = _createSuper$q(GradientElement2);
    function GradientElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, GradientElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.attributesToInherit = [
            'gradientUnits'
        ];
        _this.stops = [];
        var _assertThisInitialize = _assertThisInitialized__default["default"](_this), stops = _assertThisInitialize.stops, children = _assertThisInitialize.children;
        children.forEach(function(child) {
            if (child.type === 'stop') stops.push(child);
        });
        return _this;
    }
    _createClass__default["default"](GradientElement2, [
        {
            key: "getGradientUnits",
            value: function getGradientUnits() {
                return this.getAttribute('gradientUnits').getString('objectBoundingBox');
            }
        },
        {
            key: "createGradient",
            value: function createGradient(ctx, element, parentOpacityProp) {
                var _this2 = this;
                // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
                var stopsContainer = this;
                if (this.getHrefAttribute().hasValue()) {
                    stopsContainer = this.getHrefAttribute().getDefinition();
                    this.inheritStopContainer(stopsContainer);
                }
                var _stopsContainer = stopsContainer, stops = _stopsContainer.stops;
                var gradient = this.getGradient(ctx, element);
                if (!gradient) return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
                stops.forEach(function(stop) {
                    gradient.addColorStop(stop.offset, _this2.addParentOpacity(parentOpacityProp, stop.color));
                });
                if (this.getAttribute('gradientTransform').hasValue()) {
                    // render as transformed pattern on temporary canvas
                    var document = this.document;
                    var _document$screen = document.screen, MAX_VIRTUAL_PIXELS = _document$screen.MAX_VIRTUAL_PIXELS, viewPort = _document$screen.viewPort;
                    var _viewPort$viewPorts = _slicedToArray__default["default"](viewPort.viewPorts, 1), rootView = _viewPort$viewPorts[0];
                    var rect = new RectElement1(document, null);
                    rect.attributes.x = new Property(document, 'x', -MAX_VIRTUAL_PIXELS / 3);
                    rect.attributes.y = new Property(document, 'y', -MAX_VIRTUAL_PIXELS / 3);
                    rect.attributes.width = new Property(document, 'width', MAX_VIRTUAL_PIXELS);
                    rect.attributes.height = new Property(document, 'height', MAX_VIRTUAL_PIXELS);
                    var group = new GElement1(document, null);
                    group.attributes.transform = new Property(document, 'transform', this.getAttribute('gradientTransform').getValue());
                    group.children = [
                        rect
                    ];
                    var patternSvg = new SVGElement1(document, null);
                    patternSvg.attributes.x = new Property(document, 'x', 0);
                    patternSvg.attributes.y = new Property(document, 'y', 0);
                    patternSvg.attributes.width = new Property(document, 'width', rootView.width);
                    patternSvg.attributes.height = new Property(document, 'height', rootView.height);
                    patternSvg.children = [
                        group
                    ];
                    var patternCanvas = document.createCanvas(rootView.width, rootView.height);
                    var patternCtx = patternCanvas.getContext('2d');
                    patternCtx.fillStyle = gradient;
                    patternSvg.render(patternCtx);
                    return patternCtx.createPattern(patternCanvas, 'no-repeat');
                }
                return gradient;
            }
        },
        {
            key: "inheritStopContainer",
            value: function inheritStopContainer(stopsContainer) {
                var _this3 = this;
                this.attributesToInherit.forEach(function(attributeToInherit) {
                    if (!_this3.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) _this3.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
                });
            }
        },
        {
            key: "addParentOpacity",
            value: function addParentOpacity(parentOpacityProp, color) {
                if (parentOpacityProp.hasValue()) {
                    var colorProp = new Property(this.document, 'color', color);
                    return colorProp.addOpacity(parentOpacityProp).getColor();
                }
                return color;
            }
        }
    ]);
    return GradientElement2;
}(Element1);
function _createSuper$p(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$p();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$p() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var LinearGradientElement1 = /*#__PURE__*/ function(_GradientElement) {
    _inherits__default["default"](LinearGradientElement2, _GradientElement);
    var _super = _createSuper$p(LinearGradientElement2);
    function LinearGradientElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, LinearGradientElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'linearGradient';
        _this.attributesToInherit.push('x1', 'y1', 'x2', 'y2');
        return _this;
    }
    _createClass__default["default"](LinearGradientElement2, [
        {
            key: "getGradient",
            value: function getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
                var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute('x1').hasValue() && !this.getAttribute('y1').hasValue() && !this.getAttribute('x2').hasValue() && !this.getAttribute('y2').hasValue()) {
                    this.getAttribute('x1', true).setValue(0);
                    this.getAttribute('y1', true).setValue(0);
                    this.getAttribute('x2', true).setValue(1);
                    this.getAttribute('y2', true).setValue(0);
                }
                var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x1').getNumber() : this.getAttribute('x1').getPixels('x');
                var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y1').getNumber() : this.getAttribute('y1').getPixels('y');
                var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x2').getNumber() : this.getAttribute('x2').getPixels('x');
                var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y2').getNumber() : this.getAttribute('y2').getPixels('y');
                if (x1 === x2 && y1 === y2) return null;
                return ctx.createLinearGradient(x1, y1, x2, y2);
            }
        }
    ]);
    return LinearGradientElement2;
}(GradientElement1);
function _createSuper$o(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$o();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$o() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var RadialGradientElement1 = /*#__PURE__*/ function(_GradientElement) {
    _inherits__default["default"](RadialGradientElement2, _GradientElement);
    var _super = _createSuper$o(RadialGradientElement2);
    function RadialGradientElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, RadialGradientElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'radialGradient';
        _this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');
        return _this;
    }
    _createClass__default["default"](RadialGradientElement2, [
        {
            key: "getGradient",
            value: function getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
                var boundingBox = element.getBoundingBox(ctx);
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute('cx').hasValue()) this.getAttribute('cx', true).setValue('50%');
                if (!this.getAttribute('cy').hasValue()) this.getAttribute('cy', true).setValue('50%');
                if (!this.getAttribute('r').hasValue()) this.getAttribute('r', true).setValue('50%');
                var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('cx').getNumber() : this.getAttribute('cx').getPixels('x');
                var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('cy').getNumber() : this.getAttribute('cy').getPixels('y');
                var fx = cx;
                var fy = cy;
                if (this.getAttribute('fx').hasValue()) fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('fx').getNumber() : this.getAttribute('fx').getPixels('x');
                if (this.getAttribute('fy').hasValue()) fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('fy').getNumber() : this.getAttribute('fy').getPixels('y');
                var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2 * this.getAttribute('r').getNumber() : this.getAttribute('r').getPixels();
                var fr = this.getAttribute('fr').getPixels();
                return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
            }
        }
    ]);
    return RadialGradientElement2;
}(GradientElement1);
function _createSuper$n(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$n();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$n() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var StopElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](StopElement2, _Element);
    var _super = _createSuper$n(StopElement2);
    function StopElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, StopElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'stop';
        var offset = Math.max(0, Math.min(1, _this.getAttribute('offset').getNumber()));
        var stopOpacity = _this.getStyle('stop-opacity');
        var stopColor = _this.getStyle('stop-color', true);
        if (stopColor.getString() === '') stopColor.setValue('#000');
        if (stopOpacity.hasValue()) stopColor = stopColor.addOpacity(stopOpacity);
        _this.offset = offset;
        _this.color = stopColor.getColor();
        return _this;
    }
    return StopElement2;
}(Element1);
function _createSuper$m(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$m();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$m() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AnimateElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](AnimateElement2, _Element);
    var _super = _createSuper$m(AnimateElement2);
    function AnimateElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, AnimateElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'animate';
        _this.duration = 0;
        _this.initialValue = null;
        _this.initialUnits = '';
        _this.removed = false;
        _this.frozen = false;
        document.screen.animations.push(_assertThisInitialized__default["default"](_this));
        _this.begin = _this.getAttribute('begin').getMilliseconds();
        _this.maxDuration = _this.begin + _this.getAttribute('dur').getMilliseconds();
        _this.from = _this.getAttribute('from');
        _this.to = _this.getAttribute('to');
        _this.values = new Property(document, 'values', null);
        var valuesAttr = _this.getAttribute('values');
        if (valuesAttr.hasValue()) _this.values.setValue(valuesAttr.getString().split(';'));
        return _this;
    }
    _createClass__default["default"](AnimateElement2, [
        {
            key: "getProperty",
            value: function getProperty() {
                var attributeType = this.getAttribute('attributeType').getString();
                var attributeName = this.getAttribute('attributeName').getString();
                if (attributeType === 'CSS') return this.parent.getStyle(attributeName, true);
                return this.parent.getAttribute(attributeName, true);
            }
        },
        {
            key: "calcValue",
            value: function calcValue() {
                var initialUnits = this.initialUnits;
                var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to; // tween value linearly
                var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
                if (initialUnits === '%') newValue *= 100; // numValue() returns 0-1 whereas properties are 0-100
                return "".concat(newValue).concat(initialUnits);
            }
        },
        {
            key: "update",
            value: function update(delta) {
                var parent = this.parent;
                var prop = this.getProperty(); // set initial value
                if (!this.initialValue) {
                    this.initialValue = prop.getString();
                    this.initialUnits = prop.getUnits();
                } // if we're past the end time
                if (this.duration > this.maxDuration) {
                    var fill = this.getAttribute('fill').getString('remove'); // loop for indefinitely repeating animations
                    if (this.getAttribute('repeatCount').getString() === 'indefinite' || this.getAttribute('repeatDur').getString() === 'indefinite') this.duration = 0;
                    else if (fill === 'freeze' && !this.frozen) {
                        this.frozen = true;
                        parent.animationFrozen = true;
                        parent.animationFrozenValue = prop.getString();
                    } else if (fill === 'remove' && !this.removed) {
                        this.removed = true;
                        prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
                        return true;
                    }
                    return false;
                }
                this.duration += delta; // if we're past the begin time
                var updated = false;
                if (this.begin < this.duration) {
                    var newValue = this.calcValue(); // tween
                    var typeAttr = this.getAttribute('type');
                    if (typeAttr.hasValue()) {
                        // for transform, etc.
                        var type = typeAttr.getString();
                        newValue = "".concat(type, "(").concat(newValue, ")");
                    }
                    prop.setValue(newValue);
                    updated = true;
                }
                return updated;
            }
        },
        {
            key: "getProgress",
            value: function getProgress() {
                var document = this.document, values = this.values;
                var result = {
                    progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (values.hasValue()) {
                    var p = result.progress * (values.getValue().length - 1);
                    var lb = Math.floor(p);
                    var ub = Math.ceil(p);
                    result.from = new Property(document, 'from', parseFloat(values.getValue()[lb]));
                    result.to = new Property(document, 'to', parseFloat(values.getValue()[ub]));
                    result.progress = (p - lb) / (ub - lb);
                } else {
                    result.from = this.from;
                    result.to = this.to;
                }
                return result;
            }
        }
    ]);
    return AnimateElement2;
}(Element1);
function _createSuper$l(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$l();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$l() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AnimateColorElement1 = /*#__PURE__*/ function(_AnimateElement) {
    _inherits__default["default"](AnimateColorElement2, _AnimateElement);
    var _super = _createSuper$l(AnimateColorElement2);
    function AnimateColorElement2() {
        var _this;
        _classCallCheck__default["default"](this, AnimateColorElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'animateColor';
        return _this;
    }
    _createClass__default["default"](AnimateColorElement2, [
        {
            key: "calcValue",
            value: function calcValue() {
                var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to;
                var colorFrom = new RGBColor__default["default"](from.getColor());
                var colorTo = new RGBColor__default["default"](to.getColor());
                if (colorFrom.ok && colorTo.ok) {
                    // tween color linearly
                    var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
                    var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
                    var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha
                    return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
                }
                return this.getAttribute('from').getColor();
            }
        }
    ]);
    return AnimateColorElement2;
}(AnimateElement1);
function _createSuper$k(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$k();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$k() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AnimateTransformElement1 = /*#__PURE__*/ function(_AnimateElement) {
    _inherits__default["default"](AnimateTransformElement2, _AnimateElement);
    var _super = _createSuper$k(AnimateTransformElement2);
    function AnimateTransformElement2() {
        var _this;
        _classCallCheck__default["default"](this, AnimateTransformElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'animateTransform';
        return _this;
    }
    _createClass__default["default"](AnimateTransformElement2, [
        {
            key: "calcValue",
            value: function calcValue() {
                var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to; // tween value linearly
                var transformFrom = toNumbers(from.getString());
                var transformTo = toNumbers(to.getString());
                var newValue = transformFrom.map(function(from1, i) {
                    var to1 = transformTo[i];
                    return from1 + (to1 - from1) * progress;
                }).join(' ');
                return newValue;
            }
        }
    ]);
    return AnimateTransformElement2;
}(AnimateElement1);
function _createForOfIteratorHelper$1(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createSuper$j(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$j();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$j() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FontElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FontElement2, _Element);
    var _super = _createSuper$j(FontElement2);
    function FontElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FontElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'font';
        _this.glyphs = {
        };
        _this.horizAdvX = _this.getAttribute('horiz-adv-x').getNumber();
        var definitions = document.definitions;
        var _assertThisInitialize = _assertThisInitialized__default["default"](_this), children = _assertThisInitialize.children;
        var _iterator = _createForOfIteratorHelper$1(children), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var child = _step.value;
                switch(child.type){
                    case 'font-face':
                        _this.fontFace = child;
                        var fontFamilyStyle = child.getStyle('font-family');
                        if (fontFamilyStyle.hasValue()) definitions[fontFamilyStyle.getString()] = _assertThisInitialized__default["default"](_this);
                        break;
                    case 'missing-glyph':
                        _this.missingGlyph = child;
                        break;
                    case 'glyph':
                        var glyph = child;
                        if (glyph.arabicForm) {
                            _this.isRTL = true;
                            _this.isArabic = true;
                            if (typeof _this.glyphs[glyph.unicode] === 'undefined') _this.glyphs[glyph.unicode] = {
                            };
                            _this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
                        } else _this.glyphs[glyph.unicode] = glyph;
                        break;
                    default:
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        return _this;
    }
    _createClass__default["default"](FontElement2, [
        {
            key: "render",
            value: function render() {
            }
        }
    ]);
    return FontElement2;
}(Element1);
function _createSuper$i(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$i();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$i() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FontFaceElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FontFaceElement2, _Element);
    var _super = _createSuper$i(FontFaceElement2);
    function FontFaceElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FontFaceElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'font-face';
        _this.ascent = _this.getAttribute('ascent').getNumber();
        _this.descent = _this.getAttribute('descent').getNumber();
        _this.unitsPerEm = _this.getAttribute('units-per-em').getNumber();
        return _this;
    }
    return FontFaceElement2;
}(Element1);
function _createSuper$h(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$h();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$h() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var MissingGlyphElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default["default"](MissingGlyphElement2, _PathElement);
    var _super = _createSuper$h(MissingGlyphElement2);
    function MissingGlyphElement2() {
        var _this;
        _classCallCheck__default["default"](this, MissingGlyphElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'missing-glyph';
        _this.horizAdvX = 0;
        return _this;
    }
    return MissingGlyphElement2;
}(PathElement1);
function _createSuper$g(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$g();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$g() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TRefElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default["default"](TRefElement2, _TextElement);
    var _super = _createSuper$g(TRefElement2);
    function TRefElement2() {
        var _this;
        _classCallCheck__default["default"](this, TRefElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'tref';
        return _this;
    }
    _createClass__default["default"](TRefElement2, [
        {
            key: "getText",
            value: function getText() {
                var element = this.getHrefAttribute().getDefinition();
                if (element) {
                    var firstChild = element.children[0];
                    if (firstChild) return firstChild.getText();
                }
                return '';
            }
        }
    ]);
    return TRefElement2;
}(TextElement1);
function _createSuper$f(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$f();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$f() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default["default"](AElement2, _TextElement);
    var _super = _createSuper$f(AElement2);
    function AElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, AElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'a';
        var childNodes = node1.childNodes;
        var firstChild = childNodes[0];
        var hasText = childNodes.length > 0 && Array.from(childNodes).every(function(node2) {
            return node2.nodeType === 3;
        });
        _this.hasText = hasText;
        _this.text = hasText ? _this.getTextFromNode(firstChild) : '';
        return _this;
    }
    _createClass__default["default"](AElement2, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                if (this.hasText) {
                    // render as text element
                    _get__default["default"](_getPrototypeOf__default["default"](AElement2.prototype), "renderChildren", this).call(this, ctx);
                    var document = this.document, x = this.x, y = this.y;
                    var mouse = document.screen.mouse;
                    var fontSize = new Property(document, 'fontSize', Font.parse(document.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.
                    if (mouse.isWorking()) mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels('y'), x + this.measureText(ctx), y));
                } else if (this.children.length > 0) {
                    // render as temporary group
                    var g = new GElement1(this.document, null);
                    g.children = this.children;
                    g.parent = this;
                    g.render(ctx);
                }
            }
        },
        {
            key: "onClick",
            value: function onClick() {
                var window = this.document.window;
                if (window) window.open(this.getHrefAttribute().getString());
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove() {
                var ctx = this.document.ctx;
                ctx.canvas.style.cursor = 'pointer';
            }
        }
    ]);
    return AElement2;
}(TextElement1);
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys$2(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _createSuper$e(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$e();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$e() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TextPathElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default["default"](TextPathElement2, _TextElement);
    var _super = _createSuper$e(TextPathElement2);
    function TextPathElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, TextPathElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'textPath';
        _this.textWidth = 0;
        _this.textHeight = 0;
        _this.pathLength = -1;
        _this.glyphInfo = null;
        _this.letterSpacingCache = [];
        _this.measuresCache = new Map([
            [
                '',
                0
            ]
        ]);
        var pathElement = _this.getHrefAttribute().getDefinition();
        _this.text = _this.getTextFromNode();
        _this.dataArray = _this.parsePathData(pathElement);
        return _this;
    }
    _createClass__default["default"](TextPathElement2, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var dataArray = this.dataArray;
                if (ctx) ctx.beginPath();
                dataArray.forEach(function(_ref) {
                    var type = _ref.type, points = _ref.points;
                    switch(type){
                        case PathParser1.LINE_TO:
                            if (ctx) ctx.lineTo(points[0], points[1]);
                            break;
                        case PathParser1.MOVE_TO:
                            if (ctx) ctx.moveTo(points[0], points[1]);
                            break;
                        case PathParser1.CURVE_TO:
                            if (ctx) ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
                            break;
                        case PathParser1.QUAD_TO:
                            if (ctx) ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
                            break;
                        case PathParser1.ARC:
                            var _points = _slicedToArray__default["default"](points, 8), cx = _points[0], cy = _points[1], rx = _points[2], ry = _points[3], theta = _points[4], dTheta = _points[5], psi = _points[6], fs = _points[7];
                            var r = rx > ry ? rx : ry;
                            var scaleX = rx > ry ? 1 : rx / ry;
                            var scaleY = rx > ry ? ry / rx : 1;
                            if (ctx) {
                                ctx.translate(cx, cy);
                                ctx.rotate(psi);
                                ctx.scale(scaleX, scaleY);
                                ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                                ctx.scale(1 / scaleX, 1 / scaleY);
                                ctx.rotate(-psi);
                                ctx.translate(-cx, -cy);
                            }
                            break;
                        case PathParser1.CLOSE_PATH:
                            if (ctx) ctx.closePath();
                            break;
                    }
                });
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.setTextData(ctx);
                ctx.save();
                var textDecoration = this.parent.getStyle('text-decoration').getString();
                var fontSize = this.getFontSize();
                var glyphInfo = this.glyphInfo;
                var fill = ctx.fillStyle;
                if (textDecoration === 'underline') ctx.beginPath();
                glyphInfo.forEach(function(glyph, i) {
                    var p0 = glyph.p0, p1 = glyph.p1, rotation = glyph.rotation, partialText = glyph.text;
                    ctx.save();
                    ctx.translate(p0.x, p0.y);
                    ctx.rotate(rotation);
                    if (ctx.fillStyle) ctx.fillText(partialText, 0, 0);
                    if (ctx.strokeStyle) ctx.strokeText(partialText, 0, 0);
                    ctx.restore();
                    if (textDecoration === 'underline') {
                        if (i === 0) ctx.moveTo(p0.x, p0.y + fontSize / 8);
                        ctx.lineTo(p1.x, p1.y + fontSize / 5);
                    } // // To assist with debugging visually, uncomment following
                //
                // ctx.beginPath();
                // if (i % 2)
                // 	ctx.strokeStyle = 'red';
                // else
                // 	ctx.strokeStyle = 'green';
                // ctx.moveTo(p0.x, p0.y);
                // ctx.lineTo(p1.x, p1.y);
                // ctx.stroke();
                // ctx.closePath();
                });
                if (textDecoration === 'underline') {
                    ctx.lineWidth = fontSize / 20;
                    ctx.strokeStyle = fill;
                    ctx.stroke();
                    ctx.closePath();
                }
                ctx.restore();
            }
        },
        {
            key: "getLetterSpacingAt",
            value: function getLetterSpacingAt() {
                var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return this.letterSpacingCache[idx] || 0;
            }
        },
        {
            key: "findSegmentToFitChar",
            value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
                var offset = inputOffset;
                var glyphWidth = this.measureText(ctx, c);
                if (c === ' ' && anchor === 'justify' && textFullWidth < fullPathWidth) glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
                if (charI > -1) offset += this.getLetterSpacingAt(charI);
                var splineStep = this.textHeight / 20;
                var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
                var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
                var segment = {
                    p0: p0,
                    p1: p1
                };
                var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
                if (dy) {
                    var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
                    var dyY = Math.cos(-rotation) * dy;
                    segment.p0 = _objectSpread$2(_objectSpread$2({
                    }, p0), {
                    }, {
                        x: p0.x + dyX,
                        y: p0.y + dyY
                    });
                    segment.p1 = _objectSpread$2(_objectSpread$2({
                    }, p1), {
                    }, {
                        x: p1.x + dyX,
                        y: p1.y + dyY
                    });
                }
                offset += glyphWidth;
                return {
                    offset: offset,
                    segment: segment,
                    rotation: rotation
                };
            }
        },
        {
            key: "measureText",
            value: function measureText(ctx, text) {
                var measuresCache = this.measuresCache;
                var targetText = text || this.getText();
                if (measuresCache.has(targetText)) return measuresCache.get(targetText);
                var measure = this.measureTargetText(ctx, targetText);
                measuresCache.set(targetText, measure);
                return measure;
            }
        },
        {
            key: "setTextData",
            value: function setTextData(ctx) {
                var _this2 = this;
                if (this.glyphInfo) return;
                var renderText = this.getText();
                var chars = renderText.split('');
                var spacesNumber = renderText.split(' ').length - 1;
                var dx = this.parent.getAttribute('dx').split().map(function(_) {
                    return _.getPixels('x');
                });
                var dy = this.parent.getAttribute('dy').getPixels('y');
                var anchor = this.parent.getStyle('text-anchor').getString('start');
                var thisSpacing = this.getStyle('letter-spacing');
                var parentSpacing = this.parent.getStyle('letter-spacing');
                var letterSpacing = 0;
                if (!thisSpacing.hasValue() || thisSpacing.getValue() === 'inherit') letterSpacing = parentSpacing.getPixels();
                else if (thisSpacing.hasValue()) {
                    if (thisSpacing.getValue() !== 'initial' && thisSpacing.getValue() !== 'unset') letterSpacing = thisSpacing.getPixels();
                } // fill letter-spacing cache
                var letterSpacingCache = [];
                var textLen = renderText.length;
                this.letterSpacingCache = letterSpacingCache;
                for(var i = 0; i < textLen; i++)letterSpacingCache.push(typeof dx[i] !== 'undefined' ? dx[i] : letterSpacing);
                var dxSum = letterSpacingCache.reduce(function(acc, cur, i1) {
                    return i1 === 0 ? 0 : acc + cur || 0;
                }, 0);
                var textWidth = this.measureText(ctx);
                var textFullWidth = Math.max(textWidth + dxSum, 0);
                this.textWidth = textWidth;
                this.textHeight = this.getFontSize();
                this.glyphInfo = [];
                var fullPathWidth = this.getPathLength();
                var startOffset = this.getStyle('startOffset').getNumber(0) * fullPathWidth;
                var offset = 0;
                if (anchor === 'middle' || anchor === 'center') offset = -textFullWidth / 2;
                if (anchor === 'end' || anchor === 'right') offset = -textFullWidth;
                offset += startOffset;
                chars.forEach(function(char, i1) {
                    // Find such segment what distance between p0 and p1 is approx. width of glyph
                    var _this2$findSegmentToF = _this2.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i1), nextOffset = _this2$findSegmentToF.offset, segment = _this2$findSegmentToF.segment, rotation = _this2$findSegmentToF.rotation;
                    offset = nextOffset;
                    if (!segment.p0 || !segment.p1) return;
                     // const width = this.getLineLength(
                    // 	segment.p0.x,
                    // 	segment.p0.y,
                    // 	segment.p1.x,
                    // 	segment.p1.y
                    // );
                    // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
                    // Can foresee having a rough pair table built in that the developer can override as needed.
                    // Or use "dx" attribute of the <text> node as a naive replacement
                    // const kern = 0;
                    // placeholder for future implementation
                    // const midpoint = this.getPointOnLine(
                    // 	kern + width / 2.0,
                    // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
                    // );
                    _this2.glyphInfo.push({
                        // transposeX: midpoint.x,
                        // transposeY: midpoint.y,
                        text: chars[i1],
                        p0: segment.p0,
                        p1: segment.p1,
                        rotation: rotation
                    });
                });
            }
        },
        {
            key: "parsePathData",
            value: function parsePathData(path) {
                this.pathLength = -1; // reset path length
                if (!path) return [];
                var pathCommands = [];
                var pathParser = path.pathParser;
                pathParser.reset(); // convert l, H, h, V, and v to L
                while(!pathParser.isEnd()){
                    var current = pathParser.current;
                    var startX = current ? current.x : 0;
                    var startY = current ? current.y : 0;
                    var command = pathParser.next();
                    var nextCommandType = command.type;
                    var points = [];
                    switch(command.type){
                        case PathParser1.MOVE_TO:
                            this.pathM(pathParser, points);
                            break;
                        case PathParser1.LINE_TO:
                            nextCommandType = this.pathL(pathParser, points);
                            break;
                        case PathParser1.HORIZ_LINE_TO:
                            nextCommandType = this.pathH(pathParser, points);
                            break;
                        case PathParser1.VERT_LINE_TO:
                            nextCommandType = this.pathV(pathParser, points);
                            break;
                        case PathParser1.CURVE_TO:
                            this.pathC(pathParser, points);
                            break;
                        case PathParser1.SMOOTH_CURVE_TO:
                            nextCommandType = this.pathS(pathParser, points);
                            break;
                        case PathParser1.QUAD_TO:
                            this.pathQ(pathParser, points);
                            break;
                        case PathParser1.SMOOTH_QUAD_TO:
                            nextCommandType = this.pathT(pathParser, points);
                            break;
                        case PathParser1.ARC:
                            points = this.pathA(pathParser);
                            break;
                        case PathParser1.CLOSE_PATH:
                            PathElement1.pathZ(pathParser);
                            break;
                    }
                    if (command.type !== PathParser1.CLOSE_PATH) pathCommands.push({
                        type: nextCommandType,
                        points: points,
                        start: {
                            x: startX,
                            y: startY
                        },
                        pathLength: this.calcLength(startX, startY, nextCommandType, points)
                    });
                    else pathCommands.push({
                        type: PathParser1.CLOSE_PATH,
                        points: [],
                        pathLength: 0
                    });
                }
                return pathCommands;
            }
        },
        {
            key: "pathM",
            value: function pathM(pathParser, points) {
                var _PathElement$pathM$po = PathElement1.pathM(pathParser).point, x = _PathElement$pathM$po.x, y = _PathElement$pathM$po.y;
                points.push(x, y);
            }
        },
        {
            key: "pathL",
            value: function pathL(pathParser, points) {
                var _PathElement$pathL$po = PathElement1.pathL(pathParser).point, x = _PathElement$pathL$po.x, y = _PathElement$pathL$po.y;
                points.push(x, y);
                return PathParser1.LINE_TO;
            }
        },
        {
            key: "pathH",
            value: function pathH(pathParser, points) {
                var _PathElement$pathH$po = PathElement1.pathH(pathParser).point, x = _PathElement$pathH$po.x, y = _PathElement$pathH$po.y;
                points.push(x, y);
                return PathParser1.LINE_TO;
            }
        },
        {
            key: "pathV",
            value: function pathV(pathParser, points) {
                var _PathElement$pathV$po = PathElement1.pathV(pathParser).point, x = _PathElement$pathV$po.x, y = _PathElement$pathV$po.y;
                points.push(x, y);
                return PathParser1.LINE_TO;
            }
        },
        {
            key: "pathC",
            value: function pathC(pathParser, points) {
                var _PathElement$pathC = PathElement1.pathC(pathParser), point = _PathElement$pathC.point, controlPoint = _PathElement$pathC.controlPoint, currentPoint = _PathElement$pathC.currentPoint;
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathS",
            value: function pathS(pathParser, points) {
                var _PathElement$pathS = PathElement1.pathS(pathParser), point = _PathElement$pathS.point, controlPoint = _PathElement$pathS.controlPoint, currentPoint = _PathElement$pathS.currentPoint;
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser1.CURVE_TO;
            }
        },
        {
            key: "pathQ",
            value: function pathQ(pathParser, points) {
                var _PathElement$pathQ = PathElement1.pathQ(pathParser), controlPoint = _PathElement$pathQ.controlPoint, currentPoint = _PathElement$pathQ.currentPoint;
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathT",
            value: function pathT(pathParser, points) {
                var _PathElement$pathT = PathElement1.pathT(pathParser), controlPoint = _PathElement$pathT.controlPoint, currentPoint = _PathElement$pathT.currentPoint;
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser1.QUAD_TO;
            }
        },
        {
            key: "pathA",
            value: function pathA(pathParser) {
                var _PathElement$pathA = PathElement1.pathA(pathParser), rX = _PathElement$pathA.rX, rY = _PathElement$pathA.rY, sweepFlag = _PathElement$pathA.sweepFlag, xAxisRotation = _PathElement$pathA.xAxisRotation, centp = _PathElement$pathA.centp, a1 = _PathElement$pathA.a1, ad = _PathElement$pathA.ad;
                if (sweepFlag === 0 && ad > 0) ad -= 2 * Math.PI;
                if (sweepFlag === 1 && ad < 0) ad += 2 * Math.PI;
                return [
                    centp.x,
                    centp.y,
                    rX,
                    rY,
                    a1,
                    ad,
                    xAxisRotation,
                    sweepFlag
                ];
            }
        },
        {
            key: "calcLength",
            value: function calcLength(x, y, commandType, points) {
                var len = 0;
                var p1 = null;
                var p2 = null;
                var t = 0;
                switch(commandType){
                    case PathParser1.LINE_TO:
                        return this.getLineLength(x, y, points[0], points[1]);
                    case PathParser1.CURVE_TO:
                        // Approximates by breaking curve into 100 line segments
                        len = 0;
                        p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                        for(t = 0.01; t <= 1; t += 0.01){
                            p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        return len;
                    case PathParser1.QUAD_TO:
                        // Approximates by breaking curve into 100 line segments
                        len = 0;
                        p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                        for(t = 0.01; t <= 1; t += 0.01){
                            p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        return len;
                    case PathParser1.ARC:
                        // Approximates by breaking curve into line segments
                        len = 0;
                        var start = points[4]; // 4 = theta
                        var dTheta = points[5]; // 5 = dTheta
                        var end = points[4] + dTheta;
                        var inc = Math.PI / 180; // 1 degree resolution
                        if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
                         // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
                        p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                        if (dTheta < 0) // clockwise
                        for(t = start - inc; t > end; t -= inc){
                            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        else // counter-clockwise
                        for(t = start + inc; t < end; t += inc){
                            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                        len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        return len;
                }
                return 0;
            }
        },
        {
            key: "getPointOnLine",
            value: function getPointOnLine(dist, p1x, p1y, p2x, p2y) {
                var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p1x;
                var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : p1y;
                var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
                var run = Math.sqrt(dist * dist / (1 + m * m));
                if (p2x < p1x) run *= -1;
                var rise = m * run;
                var pt = null;
                if (p2x === p1x) // vertical line
                pt = {
                    x: fromX,
                    y: fromY + rise
                };
                else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) pt = {
                    x: fromX + run,
                    y: fromY + rise
                };
                else {
                    var ix = 0;
                    var iy = 0;
                    var len = this.getLineLength(p1x, p1y, p2x, p2y);
                    if (len < PSEUDO_ZERO) return null;
                    var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
                    u /= len * len;
                    ix = p1x + u * (p2x - p1x);
                    iy = p1y + u * (p2y - p1y);
                    var pRise = this.getLineLength(fromX, fromY, ix, iy);
                    var pRun = Math.sqrt(dist * dist - pRise * pRise);
                    run = Math.sqrt(pRun * pRun / (1 + m * m));
                    if (p2x < p1x) run *= -1;
                    rise = m * run;
                    pt = {
                        x: ix + run,
                        y: iy + rise
                    };
                }
                return pt;
            }
        },
        {
            key: "getPointOnPath",
            value: function getPointOnPath(distance) {
                var fullLen = this.getPathLength();
                var cumulativePathLength = 0;
                var p = null;
                if (distance < -0.00005 || distance - 0.00005 > fullLen) return null;
                var dataArray = this.dataArray;
                var _iterator = _createForOfIteratorHelper(dataArray), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var command = _step.value;
                        if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
                            cumulativePathLength += command.pathLength;
                            continue;
                        }
                        var delta = distance - cumulativePathLength;
                        var currentT = 0;
                        switch(command.type){
                            case PathParser1.LINE_TO:
                                p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
                                break;
                            case PathParser1.ARC:
                                var start = command.points[4]; // 4 = theta
                                var dTheta = command.points[5]; // 5 = dTheta
                                var end = command.points[4] + dTheta;
                                currentT = start + delta / command.pathLength * dTheta;
                                if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) break;
                                p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                                break;
                            case PathParser1.CURVE_TO:
                                currentT = delta / command.pathLength;
                                if (currentT > 1) currentT = 1;
                                p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
                                break;
                            case PathParser1.QUAD_TO:
                                currentT = delta / command.pathLength;
                                if (currentT > 1) currentT = 1;
                                p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
                                break;
                            default:
                        }
                        if (p) return p;
                        break;
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                return null;
            }
        },
        {
            key: "getLineLength",
            value: function getLineLength(x1, y1, x2, y2) {
                return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            }
        },
        {
            key: "getPathLength",
            value: function getPathLength() {
                if (this.pathLength === -1) this.pathLength = this.dataArray.reduce(function(length, command) {
                    return command.pathLength > 0 ? length + command.pathLength : length;
                }, 0);
                return this.pathLength;
            }
        },
        {
            key: "getPointOnCubicBezier",
            value: function getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
                var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
                var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
                return {
                    x: x,
                    y: y
                };
            }
        },
        {
            key: "getPointOnQuadraticBezier",
            value: function getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
                var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
                var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
                return {
                    x: x,
                    y: y
                };
            }
        },
        {
            key: "getPointOnEllipticalArc",
            value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
                var cosPsi = Math.cos(psi);
                var sinPsi = Math.sin(psi);
                var pt = {
                    x: rx * Math.cos(theta),
                    y: ry * Math.sin(theta)
                };
                return {
                    x: cx + (pt.x * cosPsi - pt.y * sinPsi),
                    y: cy + (pt.x * sinPsi + pt.y * cosPsi)
                };
            }
        },
        {
            key: "buildEquidistantCache",
            value: function buildEquidistantCache(inputStep, inputPrecision) {
                var fullLen = this.getPathLength();
                var precision = inputPrecision || 0.25; // accuracy vs performance
                var step = inputStep || fullLen / 100;
                if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
                    // Prepare cache
                    this.equidistantCache = {
                        step: step,
                        precision: precision,
                        points: []
                    }; // Calculate points
                    var s = 0;
                    for(var l = 0; l <= fullLen; l += precision){
                        var p0 = this.getPointOnPath(l);
                        var p1 = this.getPointOnPath(l + precision);
                        if (!p0 || !p1) continue;
                        s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
                        if (s >= step) {
                            this.equidistantCache.points.push({
                                x: p0.x,
                                y: p0.y,
                                distance: l
                            });
                            s -= step;
                        }
                    }
                }
            }
        },
        {
            key: "getEquidistantPointOnPath",
            value: function getEquidistantPointOnPath(targetDistance, step, precision) {
                this.buildEquidistantCache(step, precision);
                if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) return null;
                var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
                return this.equidistantCache.points[idx] || null;
            }
        }
    ]);
    return TextPathElement2;
}(TextElement1);
function _createSuper$d(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$d();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$d() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
var ImageElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default["default"](ImageElement2, _RenderedElement);
    var _super = _createSuper$d(ImageElement2);
    function ImageElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, ImageElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'image';
        _this.loaded = false;
        var href = _this.getHrefAttribute().getString();
        if (!href) return _possibleConstructorReturn__default["default"](_this);
        var isSvg = href.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(href);
        document.images.push(_assertThisInitialized__default["default"](_this));
        if (!isSvg) _this.loadImage(href);
        else _this.loadSvg(href);
        _this.isSvg = isSvg;
        return _this;
    }
    _createClass__default["default"](ImageElement2, [
        {
            key: "loadImage",
            value: function() {
                var _loadImage = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee(href) {
                    var image;
                    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this.document.createImage(href);
                            case 3:
                                image = _context.sent;
                                this.image = image;
                                _context.next = 10;
                                break;
                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context["catch"](0);
                                console.error("Error while loading image \"".concat(href, "\":"), _context.t0);
                            case 10:
                                this.loaded = true;
                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            7
                        ]
                    ]);
                }));
                function loadImage(_x) {
                    return _loadImage.apply(this, arguments);
                }
                return loadImage;
            }()
        },
        {
            key: "loadSvg",
            value: function() {
                var _loadSvg = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee2(href) {
                    var match, data, response, svg;
                    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                match = dataUriRegex.exec(href);
                                if (!match) {
                                    _context2.next = 6;
                                    break;
                                }
                                data = match[5];
                                if (match[4] === 'base64') this.image = atob(data);
                                else this.image = decodeURIComponent(data);
                                _context2.next = 19;
                                break;
                            case 6:
                                _context2.prev = 6;
                                _context2.next = 9;
                                return this.document.fetch(href);
                            case 9:
                                response = _context2.sent;
                                _context2.next = 12;
                                return response.text();
                            case 12:
                                svg = _context2.sent;
                                this.image = svg;
                                _context2.next = 19;
                                break;
                            case 16:
                                _context2.prev = 16;
                                _context2.t0 = _context2["catch"](6);
                                console.error("Error while loading image \"".concat(href, "\":"), _context2.t0);
                            case 19:
                                this.loaded = true;
                            case 20:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this, [
                        [
                            6,
                            16
                        ]
                    ]);
                }));
                function loadSvg(_x2) {
                    return _loadSvg.apply(this, arguments);
                }
                return loadSvg;
            }()
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var document = this.document, image = this.image, loaded = this.loaded;
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width').getPixels('x');
                var height = this.getStyle('height').getPixels('y');
                if (!loaded || !image || !width || !height) return;
                ctx.save();
                ctx.translate(x, y);
                if (this.isSvg) {
                    var subDocument = document.canvg.forkString(ctx, this.image, {
                        ignoreMouse: true,
                        ignoreAnimation: true,
                        ignoreDimensions: true,
                        ignoreClear: true,
                        offsetX: 0,
                        offsetY: 0,
                        scaleWidth: width,
                        scaleHeight: height
                    });
                    subDocument.document.documentElement.parent = this;
                    subDocument.render();
                } else {
                    var _image = this.image;
                    document.setViewBox({
                        ctx: ctx,
                        aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
                        width: width,
                        desiredWidth: _image.width,
                        height: height,
                        desiredHeight: _image.height
                    });
                    if (this.loaded) {
                        if (typeof _image.complete === 'undefined' || _image.complete) ctx.drawImage(_image, 0, 0);
                    }
                }
                ctx.restore();
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox() {
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width').getPixels('x');
                var height = this.getStyle('height').getPixels('y');
                return new BoundingBox(x, y, x + width, y + height);
            }
        }
    ]);
    return ImageElement2;
}(RenderedElement1);
function _createSuper$c(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$c();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$c() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SymbolElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default["default"](SymbolElement2, _RenderedElement);
    var _super = _createSuper$c(SymbolElement2);
    function SymbolElement2() {
        var _this;
        _classCallCheck__default["default"](this, SymbolElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'symbol';
        return _this;
    }
    _createClass__default["default"](SymbolElement2, [
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return SymbolElement2;
}(RenderedElement1);
var SVGFontLoader = /*#__PURE__*/ function() {
    function SVGFontLoader1(document) {
        _classCallCheck__default["default"](this, SVGFontLoader1);
        this.document = document;
        this.loaded = false;
        document.fonts.push(this);
    }
    _createClass__default["default"](SVGFontLoader1, [
        {
            key: "load",
            value: function() {
                var _load = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee(fontFamily, url) {
                    var document, svgDocument, fonts;
                    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.prev = 0;
                                document = this.document;
                                _context.next = 4;
                                return document.canvg.parser.load(url);
                            case 4:
                                svgDocument = _context.sent;
                                fonts = svgDocument.getElementsByTagName('font');
                                Array.from(fonts).forEach(function(fontNode) {
                                    var font = document.createElement(fontNode);
                                    document.definitions[fontFamily] = font;
                                });
                                _context.next = 12;
                                break;
                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](0);
                                console.error("Error while loading font \"".concat(url, "\":"), _context.t0);
                            case 12:
                                this.loaded = true;
                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            9
                        ]
                    ]);
                }));
                function load(_x, _x2) {
                    return _load.apply(this, arguments);
                }
                return load;
            }()
        }
    ]);
    return SVGFontLoader1;
}();
function _createSuper$b(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$b();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$b() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var StyleElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](StyleElement2, _Element);
    var _super = _createSuper$b(StyleElement2);
    function StyleElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, StyleElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'style';
        var css = compressSpaces(Array.from(node1.childNodes).map(function(_) {
            return _.textContent;
        }).join('').replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '').replace(/@import.*;/g, '')// remove imports
        );
        var cssDefs = css.split('}');
        cssDefs.forEach(function(_) {
            var def = _.trim();
            if (!def) return;
            var cssParts = def.split('{');
            var cssClasses = cssParts[0].split(',');
            var cssProps = cssParts[1].split(';');
            cssClasses.forEach(function(_1) {
                var cssClass = _1.trim();
                if (!cssClass) return;
                var props = document.styles[cssClass] || {
                };
                cssProps.forEach(function(cssProp) {
                    var prop = cssProp.indexOf(':');
                    var name = cssProp.substr(0, prop).trim();
                    var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
                    if (name && value) props[name] = new Property(document, name, value);
                });
                document.styles[cssClass] = props;
                document.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
                if (cssClass === '@font-face') {
                    //  && !nodeEnv
                    var fontFamily = props['font-family'].getString().replace(/"|'/g, '');
                    var srcs = props.src.getString().split(',');
                    srcs.forEach(function(src) {
                        if (src.indexOf('format("svg")') > 0) {
                            var url = parseExternalUrl(src);
                            if (url) new SVGFontLoader(document).load(fontFamily, url);
                        }
                    });
                }
            });
        });
        return _this;
    }
    return StyleElement2;
}(Element1);
StyleElement1.parseExternalUrl = parseExternalUrl;
function _createSuper$a(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$a();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$a() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var UseElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default["default"](UseElement2, _RenderedElement);
    var _super = _createSuper$a(UseElement2);
    function UseElement2() {
        var _this;
        _classCallCheck__default["default"](this, UseElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'use';
        return _this;
    }
    _createClass__default["default"](UseElement2, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                _get__default["default"](_getPrototypeOf__default["default"](UseElement2.prototype), "setContext", this).call(this, ctx);
                var xAttr = this.getAttribute('x');
                var yAttr = this.getAttribute('y');
                if (xAttr.hasValue()) ctx.translate(xAttr.getPixels('x'), 0);
                if (yAttr.hasValue()) ctx.translate(0, yAttr.getPixels('y'));
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var element = this.element;
                if (element) element.path(ctx);
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var document = this.document, element = this.element;
                if (element) {
                    var tempSvg = element;
                    if (element.type === 'symbol') {
                        // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
                        tempSvg = new SVGElement1(document, null);
                        tempSvg.attributes.viewBox = new Property(document, 'viewBox', element.getAttribute('viewBox').getString());
                        tempSvg.attributes.preserveAspectRatio = new Property(document, 'preserveAspectRatio', element.getAttribute('preserveAspectRatio').getString());
                        tempSvg.attributes.overflow = new Property(document, 'overflow', element.getAttribute('overflow').getString());
                        tempSvg.children = element.children; // element is still the parent of the children
                        element.styles.opacity = new Property(document, 'opacity', this.calculateOpacity());
                    }
                    if (tempSvg.type === 'svg') {
                        var widthStyle = this.getStyle('width', false, true);
                        var heightStyle = this.getStyle('height', false, true); // if symbol or svg, inherit width/height from me
                        if (widthStyle.hasValue()) tempSvg.attributes.width = new Property(document, 'width', widthStyle.getString());
                        if (heightStyle.hasValue()) tempSvg.attributes.height = new Property(document, 'height', heightStyle.getString());
                    }
                    var oldParent = tempSvg.parent;
                    tempSvg.parent = this;
                    tempSvg.render(ctx);
                    tempSvg.parent = oldParent;
                }
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var element = this.element;
                if (element) return element.getBoundingBox(ctx);
                return null;
            }
        },
        {
            key: "elementTransform",
            value: function elementTransform() {
                var document = this.document, element = this.element;
                return Transform.fromElement(document, element);
            }
        },
        {
            key: "element",
            get: function get() {
                if (!this.cachedElement) this.cachedElement = this.getHrefAttribute().getDefinition();
                return this.cachedElement;
            }
        }
    ]);
    return UseElement2;
}(RenderedElement1);
function _createSuper$9(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$9() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function imGet(img, x, y, width, _height, rgba) {
    return img[y * width * 4 + x * 4 + rgba];
}
function imSet(img, x, y, width, _height, rgba, val) {
    img[y * width * 4 + x * 4 + rgba] = val;
}
function m(matrix, i, v) {
    var mi = matrix[i];
    return mi * v;
}
function c(a, m1, m2, m3) {
    return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}
var FeColorMatrixElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FeColorMatrixElement2, _Element);
    var _super = _createSuper$9(FeColorMatrixElement2);
    function FeColorMatrixElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FeColorMatrixElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'feColorMatrix';
        var matrix = toNumbers(_this.getAttribute('values').getString());
        switch(_this.getAttribute('type').getString('matrix')){
            // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
            case 'saturate':
                var s = matrix[0];
                /* eslint-disable array-element-newline */ matrix = [
                    0.213 + 0.787 * s,
                    0.715 - 0.715 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 + 0.285 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 - 0.715 * s,
                    0.072 + 0.928 * s,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case 'hueRotate':
                var a = matrix[0] * Math.PI / 180;
                /* eslint-disable array-element-newline */ matrix = [
                    c(a, 0.213, 0.787, -0.213),
                    c(a, 0.715, -0.715, -0.715),
                    c(a, 0.072, -0.072, 0.928),
                    0,
                    0,
                    c(a, 0.213, -0.213, 0.143),
                    c(a, 0.715, 0.285, 0.14),
                    c(a, 0.072, -0.072, -0.283),
                    0,
                    0,
                    c(a, 0.213, -0.213, -0.787),
                    c(a, 0.715, -0.715, 0.715),
                    c(a, 0.072, 0.928, 0.072),
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case 'luminanceToAlpha':
                /* eslint-disable array-element-newline */ matrix = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0.2125,
                    0.7154,
                    0.0721,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
        }
        _this.matrix = matrix;
        _this.includeOpacity = _this.getAttribute('includeOpacity').hasValue();
        return _this;
    }
    _createClass__default["default"](FeColorMatrixElement2, [
        {
            key: "apply",
            value: function apply(ctx, _x, _y, width, height) {
                // assuming x==0 && y==0 for now
                var includeOpacity = this.includeOpacity, matrix = this.matrix;
                var srcData = ctx.getImageData(0, 0, width, height);
                for(var y = 0; y < height; y++)for(var x = 0; x < width; x++){
                    var r = imGet(srcData.data, x, y, width, height, 0);
                    var g = imGet(srcData.data, x, y, width, height, 1);
                    var b = imGet(srcData.data, x, y, width, height, 2);
                    var a = imGet(srcData.data, x, y, width, height, 3);
                    var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
                    var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
                    var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
                    var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);
                    if (includeOpacity) {
                        nr = 0;
                        ng = 0;
                        nb = 0;
                        na *= a / 255;
                    }
                    imSet(srcData.data, x, y, width, height, 0, nr);
                    imSet(srcData.data, x, y, width, height, 1, ng);
                    imSet(srcData.data, x, y, width, height, 2, nb);
                    imSet(srcData.data, x, y, width, height, 3, na);
                }
                ctx.clearRect(0, 0, width, height);
                ctx.putImageData(srcData, 0, 0);
            }
        }
    ]);
    return FeColorMatrixElement2;
}(Element1);
function _createSuper$8(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$8() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var MaskElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](MaskElement2, _Element);
    var _super = _createSuper$8(MaskElement2);
    function MaskElement2() {
        var _this;
        _classCallCheck__default["default"](this, MaskElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'mask';
        return _this;
    }
    _createClass__default["default"](MaskElement2, [
        {
            key: "apply",
            value: function apply(ctx, element) {
                var document = this.document; // render as temp svg
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width').getPixels('x');
                var height = this.getStyle('height').getPixels('y');
                if (!width && !height) {
                    var boundingBox = new BoundingBox();
                    this.children.forEach(function(child) {
                        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                    });
                    x = Math.floor(boundingBox.x1);
                    y = Math.floor(boundingBox.y1);
                    width = Math.floor(boundingBox.width);
                    height = Math.floor(boundingBox.height);
                }
                var ignoredStyles = this.removeStyles(element, MaskElement2.ignoreStyles);
                var maskCanvas = document.createCanvas(x + width, y + height);
                var maskCtx = maskCanvas.getContext('2d');
                document.screen.setDefaults(maskCtx);
                this.renderChildren(maskCtx); // convert mask to alpha with a fake node
                // TODO: refactor out apply from feColorMatrix
                new FeColorMatrixElement1(document, {
                    nodeType: 1,
                    childNodes: [],
                    attributes: [
                        {
                            nodeName: 'type',
                            value: 'luminanceToAlpha'
                        },
                        {
                            nodeName: 'includeOpacity',
                            value: 'true'
                        }
                    ]
                }).apply(maskCtx, 0, 0, x + width, y + height);
                var tmpCanvas = document.createCanvas(x + width, y + height);
                var tmpCtx = tmpCanvas.getContext('2d');
                document.screen.setDefaults(tmpCtx);
                element.render(tmpCtx);
                tmpCtx.globalCompositeOperation = 'destination-in';
                tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, 'no-repeat');
                tmpCtx.fillRect(0, 0, x + width, y + height);
                ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, 'no-repeat');
                ctx.fillRect(0, 0, x + width, y + height); // reassign mask
                this.restoreStyles(element, ignoredStyles);
            }
        },
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return MaskElement2;
}(Element1);
MaskElement1.ignoreStyles = [
    'mask',
    'transform',
    'clip-path'
];
function _createSuper$7(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$7();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$7() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var noop = function noop1() {
};
var ClipPathElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](ClipPathElement2, _Element);
    var _super = _createSuper$7(ClipPathElement2);
    function ClipPathElement2() {
        var _this;
        _classCallCheck__default["default"](this, ClipPathElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'clipPath';
        return _this;
    }
    _createClass__default["default"](ClipPathElement2, [
        {
            key: "apply",
            value: function apply(ctx) {
                var document = this.document;
                var contextProto = Reflect.getPrototypeOf(ctx);
                var beginPath = ctx.beginPath, closePath = ctx.closePath;
                if (contextProto) {
                    contextProto.beginPath = noop;
                    contextProto.closePath = noop;
                }
                Reflect.apply(beginPath, ctx, []);
                this.children.forEach(function(child) {
                    if (typeof child.path === 'undefined') return;
                    var transform = typeof child.elementTransform !== 'undefined' ? child.elementTransform() : null; // handle <use />
                    if (!transform) transform = Transform.fromElement(document, child);
                    if (transform) transform.apply(ctx);
                    child.path(ctx);
                    if (contextProto) contextProto.closePath = closePath;
                    if (transform) transform.unapply(ctx);
                });
                Reflect.apply(closePath, ctx, []);
                ctx.clip();
                if (contextProto) {
                    contextProto.beginPath = beginPath;
                    contextProto.closePath = closePath;
                }
            }
        },
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return ClipPathElement2;
}(Element1);
function _createSuper$6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$6();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$6() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FilterElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FilterElement2, _Element);
    var _super = _createSuper$6(FilterElement2);
    function FilterElement2() {
        var _this;
        _classCallCheck__default["default"](this, FilterElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'filter';
        return _this;
    }
    _createClass__default["default"](FilterElement2, [
        {
            key: "apply",
            value: function apply(ctx, element) {
                // render as temp svg
                var document = this.document, children = this.children;
                var boundingBox = element.getBoundingBox(ctx);
                if (!boundingBox) return;
                var px = 0;
                var py = 0;
                children.forEach(function(child) {
                    var efd = child.extraFilterDistance || 0;
                    px = Math.max(px, efd);
                    py = Math.max(py, efd);
                });
                var width = Math.floor(boundingBox.width);
                var height = Math.floor(boundingBox.height);
                var tmpCanvasWidth = width + 2 * px;
                var tmpCanvasHeight = height + 2 * py;
                if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) return;
                var x = Math.floor(boundingBox.x);
                var y = Math.floor(boundingBox.y);
                var ignoredStyles = this.removeStyles(element, FilterElement2.ignoreStyles);
                var tmpCanvas = document.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
                var tmpCtx = tmpCanvas.getContext('2d');
                document.screen.setDefaults(tmpCtx);
                tmpCtx.translate(-x + px, -y + py);
                element.render(tmpCtx); // apply filters
                children.forEach(function(child) {
                    if (typeof child.apply === 'function') child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
                }); // render on me
                ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
                this.restoreStyles(element, ignoredStyles);
            }
        },
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return FilterElement2;
}(Element1);
FilterElement1.ignoreStyles = [
    'filter',
    'transform',
    'clip-path'
];
function _createSuper$5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$5() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeDropShadowElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FeDropShadowElement2, _Element);
    var _super = _createSuper$5(FeDropShadowElement2);
    function FeDropShadowElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FeDropShadowElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'feDropShadow';
        _this.addStylesFromStyleDefinition();
        return _this;
    }
    _createClass__default["default"](FeDropShadowElement2, [
        {
            key: "apply",
            value: function apply(_, _x, _y, _width, _height) {
            }
        }
    ]);
    return FeDropShadowElement2;
}(Element1);
function _createSuper$4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$4() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeMorphologyElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FeMorphologyElement2, _Element);
    var _super = _createSuper$4(FeMorphologyElement2);
    function FeMorphologyElement2() {
        var _this;
        _classCallCheck__default["default"](this, FeMorphologyElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'feMorphology';
        return _this;
    }
    _createClass__default["default"](FeMorphologyElement2, [
        {
            key: "apply",
            value: function apply(_, _x, _y, _width, _height) {
            }
        }
    ]);
    return FeMorphologyElement2;
}(Element1);
function _createSuper$3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$3() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeCompositeElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FeCompositeElement2, _Element);
    var _super = _createSuper$3(FeCompositeElement2);
    function FeCompositeElement2() {
        var _this;
        _classCallCheck__default["default"](this, FeCompositeElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'feComposite';
        return _this;
    }
    _createClass__default["default"](FeCompositeElement2, [
        {
            key: "apply",
            value: function apply(_, _x, _y, _width, _height) {
            }
        }
    ]);
    return FeCompositeElement2;
}(Element1);
function _createSuper$2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeGaussianBlurElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](FeGaussianBlurElement2, _Element);
    var _super = _createSuper$2(FeGaussianBlurElement2);
    function FeGaussianBlurElement2(document, node1, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FeGaussianBlurElement2);
        _this = _super.call(this, document, node1, captureTextNodes);
        _this.type = 'feGaussianBlur';
        _this.blurRadius = Math.floor(_this.getAttribute('stdDeviation').getNumber());
        _this.extraFilterDistance = _this.blurRadius;
        return _this;
    }
    _createClass__default["default"](FeGaussianBlurElement2, [
        {
            key: "apply",
            value: function apply(ctx, x, y, width, height) {
                var document = this.document, blurRadius = this.blurRadius;
                var body = document.window ? document.window.document.body : null;
                var canvas = ctx.canvas; // StackBlur requires canvas be on document
                canvas.id = document.getUniqueId();
                if (body) {
                    canvas.style.display = 'none';
                    body.appendChild(canvas);
                }
                stackblurCanvas.canvasRGBA(canvas, x, y, width, height, blurRadius);
                if (body) body.removeChild(canvas);
            }
        }
    ]);
    return FeGaussianBlurElement2;
}(Element1);
function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TitleElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](TitleElement2, _Element);
    var _super = _createSuper$1(TitleElement2);
    function TitleElement2() {
        var _this;
        _classCallCheck__default["default"](this, TitleElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'title';
        return _this;
    }
    return TitleElement2;
}(Element1);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default["default"](this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default["default"](this, result);
    };
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var DescElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default["default"](DescElement2, _Element);
    var _super = _createSuper(DescElement2);
    function DescElement2() {
        var _this;
        _classCallCheck__default["default"](this, DescElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'desc';
        return _this;
    }
    return DescElement2;
}(Element1);
var elements = {
    'svg': SVGElement1,
    'rect': RectElement1,
    'circle': CircleElement1,
    'ellipse': EllipseElement1,
    'line': LineElement1,
    'polyline': PolylineElement1,
    'polygon': PolygonElement1,
    'path': PathElement1,
    'pattern': PatternElement1,
    'marker': MarkerElement1,
    'defs': DefsElement1,
    'linearGradient': LinearGradientElement1,
    'radialGradient': RadialGradientElement1,
    'stop': StopElement1,
    'animate': AnimateElement1,
    'animateColor': AnimateColorElement1,
    'animateTransform': AnimateTransformElement1,
    'font': FontElement1,
    'font-face': FontFaceElement1,
    'missing-glyph': MissingGlyphElement1,
    'glyph': GlyphElement1,
    'text': TextElement1,
    'tspan': TSpanElement1,
    'tref': TRefElement1,
    'a': AElement1,
    'textPath': TextPathElement1,
    'image': ImageElement1,
    'g': GElement1,
    'symbol': SymbolElement1,
    'style': StyleElement1,
    'use': UseElement1,
    'mask': MaskElement1,
    'clipPath': ClipPathElement1,
    'filter': FilterElement1,
    'feDropShadow': FeDropShadowElement1,
    'feMorphology': FeMorphologyElement1,
    'feComposite': FeCompositeElement1,
    'feColorMatrix': FeColorMatrixElement1,
    'feGaussianBlur': FeGaussianBlurElement1,
    'title': TitleElement1,
    'desc': DescElement1
};
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys$1(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function createImage(_x) {
    return _createImage.apply(this, arguments);
}
function _createImage() {
    _createImage = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee(src) {
        var anonymousCrossOrigin, image, _args = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    anonymousCrossOrigin = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                    image = document.createElement('img');
                    if (anonymousCrossOrigin) image.crossOrigin = 'Anonymous';
                    return _context.abrupt("return", new Promise(function(resolve, reject) {
                        image.onload = function() {
                            resolve(image);
                        };
                        image.onerror = function(_event, _source, _lineno, _colno, error) {
                            reject(error);
                        };
                        image.src = src;
                    }));
                case 4:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return _createImage.apply(this, arguments);
}
var Document1 = /*#__PURE__*/ function() {
    function Document2(canvg) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        }, _ref$rootEmSize = _ref.rootEmSize, rootEmSize = _ref$rootEmSize === void 0 ? 12 : _ref$rootEmSize, _ref$emSize = _ref.emSize, emSize = _ref$emSize === void 0 ? 12 : _ref$emSize, _ref$createCanvas = _ref.createCanvas, createCanvas1 = _ref$createCanvas === void 0 ? Document2.createCanvas : _ref$createCanvas, _ref$createImage = _ref.createImage, createImage1 = _ref$createImage === void 0 ? Document2.createImage : _ref$createImage, anonymousCrossOrigin = _ref.anonymousCrossOrigin;
        _classCallCheck__default["default"](this, Document2);
        this.canvg = canvg;
        this.definitions = {
        };
        this.styles = {
        };
        this.stylesSpecificity = {
        };
        this.images = [];
        this.fonts = [];
        this.emSizeStack = [];
        this.uniqueId = 0;
        this.screen = canvg.screen;
        this.rootEmSize = rootEmSize;
        this.emSize = emSize;
        this.createCanvas = createCanvas1;
        this.createImage = this.bindCreateImage(createImage1, anonymousCrossOrigin);
        this.screen.wait(this.isImagesLoaded.bind(this));
        this.screen.wait(this.isFontsLoaded.bind(this));
    }
    _createClass__default["default"](Document2, [
        {
            key: "bindCreateImage",
            value: function bindCreateImage(createImage1, anonymousCrossOrigin) {
                if (typeof anonymousCrossOrigin === 'boolean') return function(source, forceAnonymousCrossOrigin) {
                    return createImage1(source, typeof forceAnonymousCrossOrigin === 'boolean' ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
                };
                return createImage1;
            }
        },
        {
            key: "popEmSize",
            value: function popEmSize() {
                var emSizeStack = this.emSizeStack;
                emSizeStack.pop();
            }
        },
        {
            key: "getUniqueId",
            value: function getUniqueId() {
                return "canvg".concat(++this.uniqueId);
            }
        },
        {
            key: "isImagesLoaded",
            value: function isImagesLoaded() {
                return this.images.every(function(_) {
                    return _.loaded;
                });
            }
        },
        {
            key: "isFontsLoaded",
            value: function isFontsLoaded() {
                return this.fonts.every(function(_) {
                    return _.loaded;
                });
            }
        },
        {
            key: "createDocumentElement",
            value: function createDocumentElement(document) {
                var documentElement = this.createElement(document.documentElement);
                documentElement.root = true;
                documentElement.addStylesFromStyleDefinition();
                this.documentElement = documentElement;
                return documentElement;
            }
        },
        {
            key: "createElement",
            value: function createElement(node1) {
                var elementType = node1.nodeName.replace(/^[^:]+:/, '');
                var ElementType = Document2.elementTypes[elementType];
                if (typeof ElementType !== 'undefined') return new ElementType(this, node1);
                return new UnknownElement1(this, node1);
            }
        },
        {
            key: "createTextNode",
            value: function createTextNode(node1) {
                return new TextNode1(this, node1);
            }
        },
        {
            key: "setViewBox",
            value: function setViewBox(config) {
                this.screen.setViewBox(_objectSpread$1({
                    document: this
                }, config));
            }
        },
        {
            key: "window",
            get: function get() {
                return this.screen.window;
            }
        },
        {
            key: "fetch",
            get: function get() {
                return this.screen.fetch;
            }
        },
        {
            key: "ctx",
            get: function get() {
                return this.screen.ctx;
            }
        },
        {
            key: "emSize",
            get: function get() {
                var emSizeStack = this.emSizeStack;
                return emSizeStack[emSizeStack.length - 1];
            },
            set: function set(value) {
                var emSizeStack = this.emSizeStack;
                emSizeStack.push(value);
            }
        }
    ]);
    return Document2;
}();
Document1.createCanvas = createCanvas;
Document1.createImage = createImage;
Document1.elementTypes = elements;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * SVG renderer on canvas.
 */ var Canvg = /*#__PURE__*/ function() {
    /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */ function Canvg1(ctx, svg) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        };
        _classCallCheck__default["default"](this, Canvg1);
        this.parser = new Parser(options);
        this.screen = new Screen1(ctx, options);
        this.options = options;
        var document = new Document1(this, options);
        var documentElement = document.createDocumentElement(svg);
        this.document = document;
        this.documentElement = documentElement;
    }
    /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ _createClass__default["default"](Canvg1, [
        {
            key: "fork",
            /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string or URL.
     * @param options - Rendering options.
     * @returns Canvg instance.
     */ value: function fork(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                return Canvg1.from(ctx, svg, _objectSpread(_objectSpread({
                }, this.options), options));
            }
        },
        {
            key: "forkString",
            value: function forkString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                return Canvg1.fromString(ctx, svg, _objectSpread(_objectSpread({
                }, this.options), options));
            }
        },
        {
            key: "ready",
            value: function ready() {
                return this.screen.ready();
            }
        },
        {
            key: "isReady",
            value: function isReady() {
                return this.screen.isReady();
            }
        },
        {
            key: "render",
            value: function() {
                var _render = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee() {
                    var options, _args = arguments;
                    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
                                };
                                this.start(_objectSpread({
                                    enableRedraw: true,
                                    ignoreAnimation: true,
                                    ignoreMouse: true
                                }, options));
                                _context.next = 4;
                                return this.ready();
                            case 4:
                                this.stop();
                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function render() {
                    return _render.apply(this, arguments);
                }
                return render;
            }()
        },
        {
            key: "start",
            value: function start() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                var documentElement = this.documentElement, screen = this.screen, baseOptions = this.options;
                screen.start(documentElement, _objectSpread(_objectSpread({
                    enableRedraw: true
                }, baseOptions), options));
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.screen.stop();
            }
        },
        {
            key: "resize",
            value: function resize(width) {
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                this.documentElement.resize(width, height, preserveAspectRatio);
            }
        }
    ], [
        {
            key: "from",
            value: function() {
                var _from = _asyncToGenerator__default["default"](/*#__PURE__*/ _regeneratorRuntime__default["default"].mark(function _callee2(ctx, svg) {
                    var options, parser, svgDocument, _args2 = arguments;
                    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {
                                };
                                parser = new Parser(options);
                                _context2.next = 4;
                                return parser.parse(svg);
                            case 4:
                                svgDocument = _context2.sent;
                                return _context2.abrupt("return", new Canvg1(ctx, svgDocument, options));
                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2);
                }));
                function from(_x, _x2) {
                    return _from.apply(this, arguments);
                }
                return from;
            }()
        },
        {
            key: "fromString",
            value: function fromString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                var parser = new Parser(options);
                var svgDocument = parser.parseFromString(svg);
                return new Canvg1(ctx, svgDocument, options);
            }
        }
    ]);
    return Canvg1;
}();
exports.AElement = AElement1;
exports.AnimateColorElement = AnimateColorElement1;
exports.AnimateElement = AnimateElement1;
exports.AnimateTransformElement = AnimateTransformElement1;
exports.BoundingBox = BoundingBox;
exports.CB1 = CB1;
exports.CB2 = CB2;
exports.CB3 = CB3;
exports.CB4 = CB4;
exports.Canvg = Canvg;
exports.CircleElement = CircleElement1;
exports.ClipPathElement = ClipPathElement1;
exports.DefsElement = DefsElement1;
exports.DescElement = DescElement1;
exports.Document = Document1;
exports.Element = Element1;
exports.EllipseElement = EllipseElement1;
exports.FeColorMatrixElement = FeColorMatrixElement1;
exports.FeCompositeElement = FeCompositeElement1;
exports.FeDropShadowElement = FeDropShadowElement1;
exports.FeGaussianBlurElement = FeGaussianBlurElement1;
exports.FeMorphologyElement = FeMorphologyElement1;
exports.FilterElement = FilterElement1;
exports.Font = Font;
exports.FontElement = FontElement1;
exports.FontFaceElement = FontFaceElement1;
exports.GElement = GElement1;
exports.GlyphElement = GlyphElement1;
exports.GradientElement = GradientElement1;
exports.ImageElement = ImageElement1;
exports.LineElement = LineElement1;
exports.LinearGradientElement = LinearGradientElement1;
exports.MarkerElement = MarkerElement1;
exports.MaskElement = MaskElement1;
exports.Matrix = Matrix;
exports.MissingGlyphElement = MissingGlyphElement1;
exports.Mouse = Mouse;
exports.PSEUDO_ZERO = PSEUDO_ZERO;
exports.Parser = Parser;
exports.PathElement = PathElement1;
exports.PathParser = PathParser1;
exports.PatternElement = PatternElement1;
exports.Point = Point;
exports.PolygonElement = PolygonElement1;
exports.PolylineElement = PolylineElement1;
exports.Property = Property;
exports.QB1 = QB1;
exports.QB2 = QB2;
exports.QB3 = QB3;
exports.RadialGradientElement = RadialGradientElement1;
exports.RectElement = RectElement1;
exports.RenderedElement = RenderedElement1;
exports.Rotate = Rotate;
exports.SVGElement = SVGElement1;
exports.SVGFontLoader = SVGFontLoader;
exports.Scale = Scale;
exports.Screen = Screen1;
exports.Skew = Skew1;
exports.SkewX = SkewX1;
exports.SkewY = SkewY1;
exports.StopElement = StopElement1;
exports.StyleElement = StyleElement1;
exports.SymbolElement = SymbolElement1;
exports.TRefElement = TRefElement1;
exports.TSpanElement = TSpanElement1;
exports.TextElement = TextElement1;
exports.TextPathElement = TextPathElement1;
exports.TitleElement = TitleElement1;
exports.Transform = Transform;
exports.Translate = Translate;
exports.UnknownElement = UnknownElement1;
exports.UseElement = UseElement1;
exports.ViewPort = ViewPort;
exports.compressSpaces = compressSpaces;
exports["default"] = Canvg;
exports.getSelectorSpecificity = getSelectorSpecificity;
exports.normalizeAttributeName = normalizeAttributeName;
exports.normalizeColor = normalizeColor;
exports.parseExternalUrl = parseExternalUrl;
exports.presets = index;
exports.toNumbers = toNumbers;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.vectorMagnitude = vectorMagnitude;
exports.vectorsAngle = vectorsAngle;
exports.vectorsRatio = vectorsRatio; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

},{"process":"7AgFc","core-js/modules/es.object.to-string.js":"6QtYO","core-js/modules/es.promise.js":"GERqx","core-js/modules/es.reflect.delete-property.js":"57oZ8","@babel/runtime/regenerator":"4KKBo","@babel/runtime/helpers/asyncToGenerator":"7vj2t","core-js/modules/es.array.map.js":"7KZ6O","core-js/modules/es.parse-float.js":"fNaKs","core-js/modules/es.regexp.exec.js":"3y9v7","core-js/modules/es.string.match.js":"6pHLn","core-js/modules/es.string.replace.js":"2iTl6","core-js/modules/es.string.starts-with.js":"6h2Lf","core-js/modules/es.array.join.js":"7IMuG","@babel/runtime/helpers/slicedToArray":"53tC9","@babel/runtime/helpers/defineProperty":"5PI63","@babel/runtime/helpers/classCallCheck":"2bdFw","@babel/runtime/helpers/createClass":"2EITm","core-js/modules/es.array.concat.js":"7GpR1","core-js/modules/es.array.every.js":"5Y5Wu","core-js/modules/es.array.reduce.js":"6ECkF","core-js/modules/es.string.ends-with.js":"3VlaV","core-js/modules/es.string.split.js":"64exK","raf":"5SXY1","core-js/modules/es.function.name.js":"3Y953","core-js/modules/es.string.trim.js":"2V1KE","rgbcolor":"6hDU8","core-js/modules/es.array.for-each.js":"1uGSR","core-js/modules/web.dom-collections.for-each.js":"4R0aZ","@babel/runtime/helpers/inherits":"dNu3I","@babel/runtime/helpers/possibleConstructorReturn":"3vcut","@babel/runtime/helpers/getPrototypeOf":"7d4Cy","core-js/modules/es.array.from.js":"drpwf","core-js/modules/es.array.includes.js":"570Fu","core-js/modules/es.array.index-of.js":"6WSIB","core-js/modules/es.array.some.js":"4Puoj","core-js/modules/es.string.includes.js":"lkI9x","core-js/modules/es.string.iterator.js":"5WvFl","@babel/runtime/helpers/toConsumableArray":"7KUD7","core-js/modules/es.array.reverse.js":"YSU7n","core-js/modules/es.number.constructor.js":"2IcTj","@babel/runtime/helpers/get":"4Eot7","core-js/modules/es.array.fill.js":"4DgK8","svg-pathdata":"61Uk2","core-js/modules/es.regexp.to-string.js":"2YnJv","@babel/runtime/helpers/assertThisInitialized":"1BXAs","core-js/modules/es.array.iterator.js":"4Ngo5","core-js/modules/web.dom-collections.iterator.js":"3GR48","core-js/modules/es.map.js":"3BzdB","core-js/modules/es.reflect.apply.js":"1bxm5","core-js/modules/es.reflect.get-prototype-of.js":"6ajRS","stackblur-canvas":"1a5hN"}],"6QtYO":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var redefine = require('../internals/redefine');
var toString = require('../internals/object-to-string');
// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) redefine(Object.prototype, 'toString', toString, {
    unsafe: true
});

},{"../internals/to-string-tag-support":"1c1BF","../internals/redefine":"QBTn4","../internals/object-to-string":"3OT3I"}],"1c1BF":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {
};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"1p7x0"}],"1p7x0":[function(require,module,exports) {
var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var WellKnownSymbolsStore = shared('wks');
var Symbol1 = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol1 : Symbol1 && Symbol1.withoutSetter || uid;
module.exports = function(name) {
    if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
        if (NATIVE_SYMBOL && has(Symbol1, name)) WellKnownSymbolsStore[name] = Symbol1[name];
        else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"2QuID","../internals/shared":"3fuj7","../internals/has":"5p6Hg","../internals/uid":"5Yt6V","../internals/native-symbol":"5sQEy","../internals/use-symbol-as-uid":"2TSRl"}],"2QuID":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
(function() {
    return this;
})() || Function('return this')();

},{}],"3fuj7":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {
    });
})('versions', []).push({
    version: '3.13.1',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"2rRdV","../internals/shared-store":"549hT"}],"2rRdV":[function(require,module,exports) {
module.exports = false;

},{}],"549hT":[function(require,module,exports) {
var global = require('../internals/global');
var setGlobal = require('../internals/set-global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {
});
module.exports = store;

},{"../internals/global":"2QuID","../internals/set-global":"22rJn"}],"22rJn":[function(require,module,exports) {
var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
module.exports = function(key, value) {
    try {
        createNonEnumerableProperty(global, key, value);
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"2QuID","../internals/create-non-enumerable-property":"7GpEi"}],"7GpEi":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"3t0KX","../internals/object-define-property":"2Spf8","../internals/create-property-descriptor":"2q31l"}],"3t0KX":[function(require,module,exports) {
var fails = require('../internals/fails');
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({
    }, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"5YzzT"}],"5YzzT":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"2Spf8":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"3t0KX","../internals/ie8-dom-define":"2rqA6","../internals/an-object":"zIcM0","../internals/to-primitive":"Ud71x"}],"2rqA6":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');
// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"3t0KX","../internals/fails":"5YzzT","../internals/document-create-element":"6HeRK"}],"6HeRK":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {
    };
};

},{"../internals/global":"2QuID","../internals/is-object":"6LaDF"}],"6LaDF":[function(require,module,exports) {
module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"zIcM0":[function(require,module,exports) {
var isObject = require('../internals/is-object');
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(String(it) + ' is not an object');
    return it;
};

},{"../internals/is-object":"6LaDF"}],"Ud71x":[function(require,module,exports) {
var isObject = require('../internals/is-object');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":"6LaDF"}],"2q31l":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"5p6Hg":[function(require,module,exports) {
var toObject = require('../internals/to-object');
var hasOwnProperty = {
}.hasOwnProperty;
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
};

},{"../internals/to-object":"4XEgD"}],"4XEgD":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"71cc3"}],"71cc3":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
};

},{}],"5Yt6V":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();
module.exports = function(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + ((++id) + postfix).toString(36);
};

},{}],"5sQEy":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"4TyYX","../internals/fails":"5YzzT"}],"4TyYX":[function(require,module,exports) {
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
    }
}
module.exports = version && +version;

},{"../internals/global":"2QuID","../internals/engine-user-agent":"7803c"}],"7803c":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"6rniu"}],"6rniu":[function(require,module,exports) {
var path = require('../internals/path');
var global = require('../internals/global');
var aFunction = function(variable) {
    return typeof variable == 'function' ? variable : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/path":"2TM2k","../internals/global":"2QuID"}],"2TM2k":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global;

},{"../internals/global":"2QuID"}],"2TSRl":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('../internals/native-symbol');
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"5sQEy"}],"QBTn4":[function(require,module,exports) {
var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var setGlobal = require('../internals/set-global');
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function(O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        state = enforceInternalState(value);
        if (!state.source) state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
    if (O === global) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
    } else if (!unsafe) delete O[key];
    else if (!noTargetGet && O[key]) simple = true;
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

},{"../internals/global":"2QuID","../internals/create-non-enumerable-property":"7GpEi","../internals/has":"5p6Hg","../internals/set-global":"22rJn","../internals/inspect-source":"2prbC","../internals/internal-state":"41JRX"}],"2prbC":[function(require,module,exports) {
var store = require('../internals/shared-store');
var functionToString = Function.toString;
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') store.inspectSource = function(it) {
    return functionToString.call(it);
};
module.exports = store.inspectSource;

},{"../internals/shared-store":"549hT"}],"41JRX":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap1 = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {
    });
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap1());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function(it, metadata) {
        if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset.call(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget.call(store, it) || {
        };
    };
    has = function(it) {
        return wmhas.call(store, it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return objectHas(it, STATE) ? it[STATE] : {
        };
    };
    has = function(it) {
        return objectHas(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/native-weak-map":"5g6OD","../internals/global":"2QuID","../internals/is-object":"6LaDF","../internals/create-non-enumerable-property":"7GpEi","../internals/has":"5p6Hg","../internals/shared-store":"549hT","../internals/shared-key":"5Qr1S","../internals/hidden-keys":"5jCyL"}],"5g6OD":[function(require,module,exports) {
var global = require('../internals/global');
var inspectSource = require('../internals/inspect-source');
var WeakMap1 = global.WeakMap;
module.exports = typeof WeakMap1 === 'function' && /native code/.test(inspectSource(WeakMap1));

},{"../internals/global":"2QuID","../internals/inspect-source":"2prbC"}],"5Qr1S":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"3fuj7","../internals/uid":"5Yt6V"}],"5jCyL":[function(require,module,exports) {
module.exports = {
};

},{}],"3OT3I":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');
// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? ({
}).toString : function toString() {
    return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"1c1BF","../internals/classof":"2gKjt"}],"2gKjt":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {
    }
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

},{"../internals/to-string-tag-support":"1c1BF","../internals/classof-raw":"1JsjO","../internals/well-known-symbol":"1p7x0"}],"1JsjO":[function(require,module,exports) {
var toString = {
}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};

},{}],"GERqx":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var NativePromise = require('../internals/native-promise-constructor');
var redefine = require('../internals/redefine');
var redefineAll = require('../internals/redefine-all');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var setSpecies = require('../internals/set-species');
var isObject = require('../internals/is-object');
var aFunction = require('../internals/a-function');
var anInstance = require('../internals/an-instance');
var inspectSource = require('../internals/inspect-source');
var iterate = require('../internals/iterate');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var speciesConstructor = require('../internals/species-constructor');
var task = require('../internals/task').set;
var microtask = require('../internals/microtask');
var promiseResolve = require('../internals/promise-resolve');
var hostReportErrors = require('../internals/host-report-errors');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var InternalStateModule = require('../internals/internal-state');
var isForced = require('../internals/is-forced');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_BROWSER = require('../internals/engine-is-browser');
var IS_NODE = require('../internals/engine-is-node');
var V8_VERSION = require('../internals/engine-v8-version');
var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError1 = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var FORCED = isForced(PROMISE, function() {
    var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#finally in the pure version for preventing prototype pollution
    if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = new PromiseConstructor(function(resolve) {
        resolve(1);
    });
    var FakePromise = function(exec) {
        exec(function() {
        }, function() {
        });
    };
    var constructor = promise.constructor = {
    };
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});
var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
    PromiseConstructor.all(iterable)['catch'](function() {
    });
});
// helpers
var isThenable = function(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function() {
        var value = state.value;
        var ok = state.state == FULFILLED;
        var index = 0;
        // variable length - can't use forEach
        while(chain.length > index){
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
                if (handler) {
                    if (!ok) {
                        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                        state.rejection = HANDLED;
                    }
                    if (handler === true) result = value;
                    else {
                        if (domain) domain.enter();
                        result = handler(value); // can throw
                        if (domain) {
                            domain.exit();
                            exited = true;
                        }
                    }
                    if (result === reaction.promise) reject(TypeError1('Promise-chain cycle'));
                    else if (then = isThenable(result)) then.call(result, resolve, reject);
                    else resolve(result);
                } else reject(value);
            } catch (error) {
                if (domain && !exited) domain.exit();
                reject(error);
            }
        }
        state.reactions = [];
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(state);
    });
};
var dispatchEvent = function(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
        event = document.createEvent('Event');
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function(state) {
    task.call(global, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = perform(function() {
                if (IS_NODE) process.emit('unhandledRejection', value, promise);
                else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
    task.call(global, function() {
        var promise = state.facade;
        if (IS_NODE) process.emit('rejectionHandled', promise);
        else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
};
var bind = function(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var internalReject = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw TypeError1("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) microtask(function() {
            var wrapper = {
                done: false
            };
            try {
                then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
            } catch (error) {
                internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
        }
    } catch (error) {
        internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if (FORCED) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise1(executor) {
        anInstance(this, PromiseConstructor, PROMISE);
        aFunction(executor);
        Internal.call(this);
        var state = getInternalState(this);
        try {
            executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
            internalReject(state, error);
        }
    };
    PromiseConstructorPrototype = PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise2(executor) {
        setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
        });
    };
    Internal.prototype = redefineAll(PromiseConstructorPrototype, {
        // `Promise.prototype.then` method
        // https://tc39.es/ecma262/#sec-promise.prototype.then
        then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify(state, false);
            return reaction.promise;
        },
        // `Promise.prototype.catch` method
        // https://tc39.es/ecma262/#sec-promise.prototype.catch
        'catch': function(onRejected) {
            return this.then(undefined, onRejected);
        }
    });
    OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!SUBCLASSING) {
            // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
            redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
                var that = this;
                return new PromiseConstructor(function(resolve, reject) {
                    nativeThen.call(that, resolve, reject);
                }).then(onFulfilled, onRejected);
            // https://github.com/zloirock/core-js/issues/640
            }, {
                unsafe: true
            });
            // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
            redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
                unsafe: true
            });
        }
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete NativePromisePrototype.constructor;
        } catch (error) {
        }
        // make `instanceof Promise` work for native promise-based APIs
        if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
}
$({
    global: true,
    wrap: true,
    forced: FORCED
}, {
    Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);
PromiseWrapper = getBuiltIn(PROMISE);
// statics
$({
    target: PROMISE,
    stat: true,
    forced: FORCED
}, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
        var capability = newPromiseCapability(this);
        capability.reject.call(undefined, r);
        return capability.promise;
    }
});
$({
    target: PROMISE,
    stat: true,
    forced: IS_PURE || FORCED
}, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
        return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
    }
});
$({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                $promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    (--remaining) || resolve(values);
                }, reject);
            });
            (--remaining) || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aFunction(C.resolve);
            iterate(iterable, function(promise) {
                $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"7f5VM","../internals/is-pure":"2rRdV","../internals/global":"2QuID","../internals/get-built-in":"6rniu","../internals/native-promise-constructor":"cYC4d","../internals/redefine":"QBTn4","../internals/redefine-all":"45sdL","../internals/object-set-prototype-of":"eaKkl","../internals/set-to-string-tag":"62qxJ","../internals/set-species":"15qEM","../internals/is-object":"6LaDF","../internals/a-function":"79hCL","../internals/an-instance":"iE3Kv","../internals/inspect-source":"2prbC","../internals/iterate":"mOi9h","../internals/check-correctness-of-iteration":"2GTab","../internals/species-constructor":"6HDa1","../internals/task":"1VOgr","../internals/microtask":"3Krb8","../internals/promise-resolve":"36t0k","../internals/host-report-errors":"2sntZ","../internals/new-promise-capability":"58xtN","../internals/perform":"4inh2","../internals/internal-state":"41JRX","../internals/is-forced":"3uGlO","../internals/well-known-symbol":"1p7x0","../internals/engine-is-browser":"srWEp","../internals/engine-is-node":"mb8j2","../internals/engine-v8-version":"4TyYX"}],"7f5VM":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var setGlobal = require('../internals/set-global');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {
    });
    else target = (global[TARGET] || {
    }).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        // extend global
        redefine(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"2QuID","../internals/object-get-own-property-descriptor":"1BKD3","../internals/create-non-enumerable-property":"7GpEi","../internals/redefine":"QBTn4","../internals/set-global":"22rJn","../internals/copy-constructor-properties":"1fVTM","../internals/is-forced":"3uGlO"}],"1BKD3":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"3t0KX","../internals/object-property-is-enumerable":"5kFkj","../internals/create-property-descriptor":"2q31l","../internals/to-indexed-object":"BdKP0","../internals/to-primitive":"Ud71x","../internals/has":"5p6Hg","../internals/ie8-dom-define":"2rqA6"}],"5kFkj":[function(require,module,exports) {
'use strict';
var $propertyIsEnumerable = {
}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"BdKP0":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"3R7xB","../internals/require-object-coercible":"71cc3"}],"3R7xB":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');
var split = ''.split;
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"5YzzT","../internals/classof-raw":"1JsjO"}],"1fVTM":[function(require,module,exports) {
var has = require('../internals/has');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
module.exports = function(target, source) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has":"5p6Hg","../internals/own-keys":"1Sfn8","../internals/object-get-own-property-descriptor":"1BKD3","../internals/object-define-property":"2Spf8"}],"1Sfn8":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"6rniu","../internals/object-get-own-property-names":"3cY8Y","../internals/object-get-own-property-symbols":"54b4e","../internals/an-object":"zIcM0"}],"3cY8Y":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"2VaKP","../internals/enum-bug-keys":"PBzVX"}],"2VaKP":[function(require,module,exports) {
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
    return result;
};

},{"../internals/has":"5p6Hg","../internals/to-indexed-object":"BdKP0","../internals/array-includes":"3twN8","../internals/hidden-keys":"5jCyL"}],"3twN8":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"BdKP0","../internals/to-length":"3fB31","../internals/to-absolute-index":"7LRuV"}],"3fB31":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"5fV1o"}],"5fV1o":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"7LRuV":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":"5fV1o"}],"PBzVX":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"54b4e":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"3uGlO":[function(require,module,exports) {
var fails = require('../internals/fails');
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {
};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"../internals/fails":"5YzzT"}],"cYC4d":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global.Promise;

},{"../internals/global":"2QuID"}],"45sdL":[function(require,module,exports) {
var redefine = require('../internals/redefine');
module.exports = function(target, src, options) {
    for(var key in src)redefine(target, key, src[key], options);
    return target;
};

},{"../internals/redefine":"QBTn4"}],"eaKkl":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */ var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {
} ? (function() {
    var CORRECT_SETTER = false;
    var test = {
    };
    var setter;
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);
        else O.__proto__ = proto;
        return O;
    };
})() : undefined);

},{"../internals/an-object":"zIcM0","../internals/a-possible-prototype":"iDgWO"}],"iDgWO":[function(require,module,exports) {
var isObject = require('../internals/is-object');
module.exports = function(it) {
    if (!isObject(it) && it !== null) throw TypeError("Can't set " + String(it) + ' as a prototype');
    return it;
};

},{"../internals/is-object":"6LaDF"}],"62qxJ":[function(require,module,exports) {
var defineProperty = require('../internals/object-define-property').f;
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function(it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};

},{"../internals/object-define-property":"2Spf8","../internals/has":"5p6Hg","../internals/well-known-symbol":"1p7x0"}],"15qEM":[function(require,module,exports) {
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var definePropertyModule = require('../internals/object-define-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');
var SPECIES = wellKnownSymbol('species');
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"../internals/get-built-in":"6rniu","../internals/object-define-property":"2Spf8","../internals/well-known-symbol":"1p7x0","../internals/descriptors":"3t0KX"}],"79hCL":[function(require,module,exports) {
module.exports = function(it) {
    if (typeof it != 'function') throw TypeError(String(it) + ' is not a function');
    return it;
};

},{}],"iE3Kv":[function(require,module,exports) {
module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    return it;
};

},{}],"mOi9h":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var bind = require('../internals/function-bind-context');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = toLength(iterable.length); length > index; index++){
                result = callFn(iterable[index]);
                if (result && result instanceof Result) return result;
            }
            return new Result(false);
        }
        iterator = iterFn.call(iterable);
    }
    next = iterator.next;
    while(!(step = next.call(iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator);
            throw error;
        }
        if (typeof result == 'object' && result && result instanceof Result) return result;
    }
    return new Result(false);
};

},{"../internals/an-object":"zIcM0","../internals/is-array-iterator-method":"2EFsq","../internals/to-length":"3fB31","../internals/function-bind-context":"7CQyb","../internals/get-iterator-method":"1OMhJ","../internals/iterator-close":"YTc13"}],"2EFsq":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/well-known-symbol":"1p7x0","../internals/iterators":"7hiLE"}],"7hiLE":[function(require,module,exports) {
module.exports = {
};

},{}],"7CQyb":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
// optional / simple context binding
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 0:
            return function() {
                return fn.call(that);
            };
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/a-function":"79hCL"}],"1OMhJ":[function(require,module,exports) {
var classof = require('../internals/classof');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function(it) {
    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

},{"../internals/classof":"2gKjt","../internals/iterators":"7hiLE","../internals/well-known-symbol":"1p7x0"}],"YTc13":[function(require,module,exports) {
var anObject = require('../internals/an-object');
module.exports = function(iterator) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) return anObject(returnMethod.call(iterator)).value;
};

},{"../internals/an-object":"zIcM0"}],"2GTab":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        'return': function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {
}
module.exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {
        };
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":"1p7x0"}],"6HDa1":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

},{"../internals/an-object":"zIcM0","../internals/a-function":"79hCL","../internals/well-known-symbol":"1p7x0"}],"1VOgr":[function(require,module,exports) {
var global = require('../internals/global');
var fails = require('../internals/fails');
var bind = require('../internals/function-bind-context');
var html = require('../internals/html');
var createElement = require('../internals/document-create-element');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');
var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel1 = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {
};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function(id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(id + '', location.protocol + '//' + location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while(arguments.length > i)args.push(arguments[i++]);
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func -- spec requirement
            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel1 && !IS_IOS) {
        channel = new MessageChannel1();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
        defer = post;
        global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"2QuID","../internals/fails":"5YzzT","../internals/function-bind-context":"7CQyb","../internals/html":"3Zpwg","../internals/document-create-element":"6HeRK","../internals/engine-is-ios":"fDjVf","../internals/engine-is-node":"mb8j2"}],"3Zpwg":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"6rniu"}],"fDjVf":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"7803c"}],"mb8j2":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
var global = require('../internals/global');
module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":"1JsjO","../internals/global":"2QuID"}],"3Krb8":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var macrotask = require('../internals/task').set;
var IS_IOS = require('../internals/engine-is-ios');
var IS_WEBOS_WEBKIT = require('../internals/engine-is-webos-webkit');
var IS_NODE = require('../internals/engine-is-node');
var MutationObserver1 = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise1 = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify, toggle, node, promise, then;
// modern engines have queueMicrotask method
if (!queueMicrotask) {
    flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain)) parent.exit();
        while(head){
            fn = head.fn;
            head = head.next;
            try {
                fn();
            } catch (error) {
                if (head) notify();
                else last = undefined;
                throw error;
            }
        }
        last = undefined;
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver1 && document) {
        toggle = true;
        node = document.createTextNode('');
        new MutationObserver1(flush).observe(node, {
            characterData: true
        });
        notify = function() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise1 && Promise1.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise1.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise1;
        then = promise.then;
        notify = function() {
            then.call(promise, flush);
        };
    // Node.js without promises
    } else if (IS_NODE) notify = function() {
        process.nextTick(flush);
    };
    else notify = function() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
    };
}
module.exports = queueMicrotask || function(fn) {
    var task = {
        fn: fn,
        next: undefined
    };
    if (last) last.next = task;
    if (!head) {
        head = task;
        notify();
    }
    last = task;
};

},{"../internals/global":"2QuID","../internals/object-get-own-property-descriptor":"1BKD3","../internals/task":"1VOgr","../internals/engine-is-ios":"fDjVf","../internals/engine-is-webos-webkit":"35mR1","../internals/engine-is-node":"mb8j2"}],"35mR1":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":"7803c"}],"36t0k":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var newPromiseCapability = require('../internals/new-promise-capability');
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"../internals/an-object":"zIcM0","../internals/is-object":"6LaDF","../internals/new-promise-capability":"58xtN"}],"58xtN":[function(require,module,exports) {
'use strict';
var aFunction = require('../internals/a-function');
var PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
};
// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"../internals/a-function":"79hCL"}],"2sntZ":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = function(a, b) {
    var console = global.console;
    if (console && console.error) arguments.length === 1 ? console.error(a) : console.error(a, b);
};

},{"../internals/global":"2QuID"}],"4inh2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return {
            error: false,
            value: exec()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};

},{}],"srWEp":[function(require,module,exports) {
module.exports = typeof window == 'object';

},{}],"57oZ8":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({
    target: 'Reflect',
    stat: true
}, {
    deleteProperty: function deleteProperty(target, propertyKey) {
        var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
        return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
});

},{"../internals/export":"7f5VM","../internals/an-object":"zIcM0","../internals/object-get-own-property-descriptor":"1BKD3"}],"4KKBo":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"62Qib"}],"62Qib":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    IteratorPrototype[iteratorSymbol] = function() {
        return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value1) {
                    invoke("next", value1, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
    };
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
        return this;
    };
    Gp.toString = function() {
        return "[object Generator]";
    };
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key1 = keys.pop();
                if (key1 in object) {
                    next.value = key1;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next1() {
                    while((++i) < iterable.length)if (hasOwn.call(iterable, i)) {
                        next1.value = iterable[i];
                        next1.done = false;
                        return next1;
                    }
                    next1.value = undefined;
                    next1.done = true;
                    return next1;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"7vj2t":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"7KZ6O":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    map: function map(callbackfn/* , thisArg */ ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"7f5VM","../internals/array-iteration":"38CSN","../internals/array-method-has-species-support":"4s1gN"}],"38CSN":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');
var push = [].push;
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
        var value, result;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return value; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        push.call(target, value); // filter
                }
                else switch(TYPE){
                    case 4:
                        return false; // every
                    case 7:
                        push.call(target, value); // filterOut
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
module.exports = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod(7)
};

},{"../internals/function-bind-context":"7CQyb","../internals/indexed-object":"3R7xB","../internals/to-object":"4XEgD","../internals/to-length":"3fB31","../internals/array-species-create":"2fSRv"}],"2fSRv":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray, length) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-object":"6LaDF","../internals/is-array":"1KA40","../internals/well-known-symbol":"1p7x0"}],"1KA40":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
    return classof(arg) == 'Array';
};

},{"../internals/classof-raw":"1JsjO"}],"4s1gN":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var SPECIES = wellKnownSymbol('species');
module.exports = function(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {
        };
        constructor[SPECIES] = function() {
            return {
                foo: 1
            };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    });
};

},{"../internals/fails":"5YzzT","../internals/well-known-symbol":"1p7x0","../internals/engine-v8-version":"4TyYX"}],"fNaKs":[function(require,module,exports) {
var $ = require('../internals/export');
var parseFloatImplementation = require('../internals/number-parse-float');
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({
    global: true,
    forced: parseFloat != parseFloatImplementation
}, {
    parseFloat: parseFloatImplementation
});

},{"../internals/export":"7f5VM","../internals/number-parse-float":"4clZM"}],"4clZM":[function(require,module,exports) {
var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');
var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
    var trimmedString = trim(String(string));
    var result = $parseFloat(trimmedString);
    return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"../internals/global":"2QuID","../internals/string-trim":"7dSxo","../internals/whitespaces":"6g7Q4"}],"7dSxo":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var whitespaces = require('../internals/whitespaces');
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');
// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function(TYPE) {
    return function($this) {
        var string = String(requireObjectCoercible($this));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
    };
};
module.exports = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
};

},{"../internals/require-object-coercible":"71cc3","../internals/whitespaces":"6g7Q4"}],"6g7Q4":[function(require,module,exports) {
// a string of all valid unicode whitespaces
module.exports = "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";

},{}],"3y9v7":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var exec = require('../internals/regexp-exec');
// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec
}, {
    exec: exec
});

},{"../internals/export":"7f5VM","../internals/regexp-exec":"2VXLZ"}],"2VXLZ":[function(require,module,exports) {
'use strict';
/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */ /* eslint-disable regexp/no-useless-quantifier -- testing */ var regexpFlags = require('./regexp-flags');
var stickyHelpers = require('./regexp-sticky-helpers');
var shared = require('./shared');
var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var patchedExec = nativeExec;
var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
if (PATCH) patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) flags += 'g';
        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
            source = '(?: ' + source + ')';
            strCopy = ' ' + strCopy;
            charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
    }
    if (NPCG_INCLUDED) reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);
    if (sticky) {
        if (match) {
            match.input = match.input.slice(charsAdded);
            match[0] = match[0].slice(charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
    nativeReplace.call(match[0], reCopy, function() {
        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
    });
    return match;
};
module.exports = patchedExec;

},{"./regexp-flags":"3CcHH","./regexp-sticky-helpers":"4nCTO","./shared":"3fuj7"}],"3CcHH":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
};

},{"../internals/an-object":"zIcM0"}],"4nCTO":[function(require,module,exports) {
'use strict';
var fails = require('./fails');
// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
    return RegExp(s, f);
}
exports.UNSUPPORTED_Y = fails(function() {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
});
exports.BROKEN_CARET = fails(function() {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
});

},{"./fails":"5YzzT"}],"6pHLn":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var regExpExec = require('../internals/regexp-exec-abstract');
// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function(MATCH, nativeMatch, maybeCallNative) {
    return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = regexp == undefined ? undefined : regexp[MATCH];
            return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function(regexp) {
            var res = maybeCallNative(nativeMatch, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while((result = regExpExec(rx, S)) !== null){
                var matchStr = String(result[0]);
                A[n] = matchStr;
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
            }
            return n === 0 ? null : A;
        }
    ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"4vfrm","../internals/an-object":"zIcM0","../internals/to-length":"3fB31","../internals/require-object-coercible":"71cc3","../internals/advance-string-index":"2hcYK","../internals/regexp-exec-abstract":"1Aw0v"}],"4vfrm":[function(require,module,exports) {
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var redefine = require('../internals/redefine');
var regexpExec = require('../internals/regexp-exec');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: '7'
        };
        return result;
    };
    return ''.replace(re, '$<a>') !== '7';
});
// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = function() {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
}();
var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
    if (/./[REPLACE]) return /./[REPLACE]('a', '$0') === '';
    return false;
}();
// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});
module.exports = function(KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
        // String methods call symbol-named RegEp methods
        var O = {
        };
        O[SYMBOL] = function() {
            return 7;
        };
        return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        if (KEY === 'split') {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {
            };
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {
            };
            re.constructor[SPECIES] = function() {
                return re;
            };
            re.flags = '';
            re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
            execCalled = true;
            return null;
        };
        re[SYMBOL]('');
        return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
        var nativeRegExpMethod = /./[SYMBOL];
        var methods = exec(SYMBOL, ''[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
            var $exec = regexp.exec;
            if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                };
                return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        }, {
            REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
        });
        var stringMethod = methods[0];
        var regexMethod = methods[1];
        redefine(String.prototype, KEY, stringMethod);
        redefine(RegExpPrototype, SYMBOL, length == 2 ? function(string, arg) {
            return regexMethod.call(string, this, arg);
        } : function(string) {
            return regexMethod.call(string, this);
        });
    }
    if (sham) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

},{"../modules/es.regexp.exec":"3y9v7","../internals/redefine":"QBTn4","../internals/regexp-exec":"2VXLZ","../internals/fails":"5YzzT","../internals/well-known-symbol":"1p7x0","../internals/create-non-enumerable-property":"7GpEi"}],"2hcYK":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function(S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
};

},{"../internals/string-multibyte":"1YtEe"}],"1YtEe":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = String(requireObjectCoercible($this));
        var position = toInteger(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"../internals/to-integer":"5fV1o","../internals/require-object-coercible":"71cc3"}],"1Aw0v":[function(require,module,exports) {
var classof = require('./classof-raw');
var regexpExec = require('./regexp-exec');
// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function(R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
        var result = exec.call(R, S);
        if (typeof result !== 'object') throw TypeError('RegExp exec method returned something other than an Object or null');
        return result;
    }
    if (classof(R) !== 'RegExp') throw TypeError('RegExp#exec called on incompatible receiver');
    return regexpExec.call(R, S);
};

},{"./classof-raw":"1JsjO","./regexp-exec":"2VXLZ"}],"2iTl6":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var getSubstitution = require('../internals/get-substitution');
var regExpExec = require('../internals/regexp-exec-abstract');
var max = Math.max;
var min = Math.min;
var maybeToString = function(it) {
    return it === undefined ? it : String(it);
};
// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
            return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function(regexp, replaceValue) {
            if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                if (res.done) return res.value;
            }
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global = rx.global;
            if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            var results = [];
            while(true){
                var result = regExpExec(rx, S);
                if (result === null) break;
                results.push(result);
                if (!global) break;
                var matchStr = String(result[0]);
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = '';
            var nextSourcePosition = 0;
            for(var i = 0; i < results.length; i++){
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = [];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = [
                        matched
                    ].concat(captures, position, S);
                    if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                if (position >= nextSourcePosition) {
                    accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
        }
    ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"4vfrm","../internals/an-object":"zIcM0","../internals/to-length":"3fB31","../internals/to-integer":"5fV1o","../internals/require-object-coercible":"71cc3","../internals/advance-string-index":"2hcYK","../internals/get-substitution":"1Y8nc","../internals/regexp-exec-abstract":"1Aw0v"}],"1Y8nc":[function(require,module,exports) {
var toObject = require('../internals/to-object');
var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace.call(replacement, symbols, function(match, ch) {
        var capture;
        switch(ch.charAt(0)){
            case '$':
                return '$';
            case '&':
                return matched;
            case '`':
                return str.slice(0, position);
            case "'":
                return str.slice(tailPos);
            case '<':
                capture = namedCaptures[ch.slice(1, -1)];
                break;
            default:
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                }
                capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
    });
};

},{"../internals/to-object":"4XEgD"}],"6h2Lf":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toLength = require('../internals/to-length');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var IS_PURE = require('../internals/is-pure');
// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
}();
// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString/* , position = 0 */ ) {
        var that = String(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
});

},{"../internals/export":"7f5VM","../internals/object-get-own-property-descriptor":"1BKD3","../internals/to-length":"3fB31","../internals/not-a-regexp":"7DjxO","../internals/require-object-coercible":"71cc3","../internals/correct-is-regexp-logic":"26rXA","../internals/is-pure":"2rRdV"}],"7DjxO":[function(require,module,exports) {
var isRegExp = require('../internals/is-regexp');
module.exports = function(it) {
    if (isRegExp(it)) throw TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"../internals/is-regexp":"3zSC9"}],"3zSC9":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/is-object":"6LaDF","../internals/classof-raw":"1JsjO","../internals/well-known-symbol":"1p7x0"}],"26rXA":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        '/./'[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
        } catch (error2) {
        }
    }
    return false;
};

},{"../internals/well-known-symbol":"1p7x0"}],"7IMuG":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IndexedObject = require('../internals/indexed-object');
var toIndexedObject = require('../internals/to-indexed-object');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var nativeJoin = [].join;
var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');
// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD
}, {
    join: function join(separator) {
        return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
});

},{"../internals/export":"7f5VM","../internals/indexed-object":"3R7xB","../internals/to-indexed-object":"BdKP0","../internals/array-method-is-strict":"4NJHA"}],"4NJHA":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
        method.call(null, argument || function() {
            throw 1;
        }, 1);
    });
};

},{"../internals/fails":"5YzzT"}],"53tC9":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArrayLimit = require("./iterableToArrayLimit.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./arrayWithHoles.js":"2eoFF","./iterableToArrayLimit.js":"5Lc8C","./unsupportedIterableToArray.js":"2BZXI","./nonIterableRest.js":"5fR3t"}],"2eoFF":[function(require,module,exports) {
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"5Lc8C":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"2BZXI":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./arrayLikeToArray.js":"3neg6"}],"3neg6":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"5fR3t":[function(require,module,exports) {
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"5PI63":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"2bdFw":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"2EITm":[function(require,module,exports) {
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"7GpR1":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 9007199254740991;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
var isConcatSpreadable = function(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for(i = -1, length = arguments.length; i < length; i++){
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
                len = toLength(E.length);
                if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for(k = 0; k < len; k++, n++)if (k in E) createProperty(A, n, E[k]);
            } else {
                if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
            }
        }
        A.length = n;
        return A;
    }
});

},{"../internals/export":"7f5VM","../internals/fails":"5YzzT","../internals/is-array":"1KA40","../internals/is-object":"6LaDF","../internals/to-object":"4XEgD","../internals/to-length":"3fB31","../internals/create-property":"2hdSr","../internals/array-species-create":"2fSRv","../internals/array-method-has-species-support":"4s1gN","../internals/well-known-symbol":"1p7x0","../internals/engine-v8-version":"4TyYX"}],"2hdSr":[function(require,module,exports) {
'use strict';
var toPrimitive = require('../internals/to-primitive');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = function(object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
};

},{"../internals/to-primitive":"Ud71x","../internals/object-define-property":"2Spf8","../internals/create-property-descriptor":"2q31l"}],"5Y5Wu":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $every = require('../internals/array-iteration').every;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('every');
// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    every: function every(callbackfn/* , thisArg */ ) {
        return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"7f5VM","../internals/array-iteration":"38CSN","../internals/array-method-is-strict":"4NJHA"}],"6ECkF":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');
var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD || CHROME_BUG
}, {
    reduce: function reduce(callbackfn/* , initialValue */ ) {
        return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"7f5VM","../internals/array-reduce":"5Navm","../internals/array-method-is-strict":"4NJHA","../internals/engine-v8-version":"4TyYX","../internals/engine-is-node":"mb8j2"}],"5Navm":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var toLength = require('../internals/to-length');
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
        aFunction(callbackfn);
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = toLength(O.length);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while(true){
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) throw TypeError('Reduce of empty array with no initial value');
        }
        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
        return memo;
    };
};
module.exports = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
};

},{"../internals/a-function":"79hCL","../internals/to-object":"4XEgD","../internals/indexed-object":"3R7xB","../internals/to-length":"3fB31"}],"3VlaV":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toLength = require('../internals/to-length');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var IS_PURE = require('../internals/is-pure');
// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var $endsWith = ''.endsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
}();
// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    endsWith: function endsWith(searchString/* , endPosition = @length */ ) {
        var that = String(requireObjectCoercible(this));
        notARegExp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = toLength(that.length);
        var end = endPosition === undefined ? len : min(toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
});

},{"../internals/export":"7f5VM","../internals/object-get-own-property-descriptor":"1BKD3","../internals/to-length":"3fB31","../internals/not-a-regexp":"7DjxO","../internals/require-object-coercible":"71cc3","../internals/correct-is-regexp-logic":"26rXA","../internals/is-pure":"2rRdV"}],"64exK":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var isRegExp = require('../internals/is-regexp');
var anObject = require('../internals/an-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
var speciesConstructor = require('../internals/species-constructor');
var advanceStringIndex = require('../internals/advance-string-index');
var toLength = require('../internals/to-length');
var callRegExpExec = require('../internals/regexp-exec-abstract');
var regexpExec = require('../internals/regexp-exec');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 4294967295;
// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function(SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) // based on es5-shim implementation, need to rework it
    internalSplit = function(separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [
            string
        ];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return nativeSplit.call(string, separator, lim);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while(match = regexpExec.call(separatorCopy, string)){
            lastIndex = separatorCopy.lastIndex;
            if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
            }
            if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
            if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
    };
    else if ('0'.split(undefined, 0).length) internalSplit = function(separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
    else internalSplit = nativeSplit;
    return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y');
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [
                S
            ] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while(q < S.length){
                splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
                var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
                var e;
                if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) return A;
                    for(var i = 1; i <= z.length - 1; i++){
                        A.push(z[i]);
                        if (A.length === lim) return A;
                    }
                    q = p = e;
                }
            }
            A.push(S.slice(p));
            return A;
        }
    ];
}, UNSUPPORTED_Y);

},{"../internals/fix-regexp-well-known-symbol-logic":"4vfrm","../internals/is-regexp":"3zSC9","../internals/an-object":"zIcM0","../internals/require-object-coercible":"71cc3","../internals/species-constructor":"6HDa1","../internals/advance-string-index":"2hcYK","../internals/to-length":"3fB31","../internals/regexp-exec-abstract":"1Aw0v","../internals/regexp-exec":"2VXLZ","../internals/regexp-sticky-helpers":"4nCTO"}],"5SXY1":[function(require,module,exports) {
var global = arguments[3];
var now = require('performance-now'), root = typeof window === 'undefined' ? global : window, vendors = [
    'moz',
    'webkit'
], suffix = 'AnimationFrame', raf = root['request' + suffix], caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
    raf = function(callback) {
        if (queue.length === 0) {
            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
            last = next + _now;
            setTimeout(function() {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for(var i1 = 0; i1 < cp.length; i1++){
                    if (!cp[i1].cancelled) try {
                        cp[i1].callback(last);
                    } catch (e) {
                        setTimeout(function() {
                            throw e;
                        }, 0);
                    }
                }
            }, Math.round(next));
        }
        queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
        });
        return id;
    };
    caf = function(handle) {
        for(var i1 = 0; i1 < queue.length; i1++)if (queue[i1].handle === handle) queue[i1].cancelled = true;
    };
}
module.exports = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
};
module.exports.cancel = function() {
    caf.apply(root, arguments);
};
module.exports.polyfill = function(object) {
    if (!object) object = root;
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
};

},{"performance-now":"3LCsj"}],"3LCsj":[function(require,module,exports) {
var process = require("process");
// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
        return performance.now();
    };
    else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
            return (getNanoSeconds() - nodeLoadTime) / 1000000;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
            var hr;
            hr = hrtime();
            return hr[0] * 1000000000 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1000000000;
        nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(this);

},{"process":"7AgFc"}],"3Y953":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var defineProperty = require('../internals/object-define-property').f;
var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';
// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function() {
        try {
            return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
            return '';
        }
    }
});

},{"../internals/descriptors":"3t0KX","../internals/object-define-property":"2Spf8"}],"2V1KE":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $trim = require('../internals/string-trim').trim;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
}, {
    trim: function trim() {
        return $trim(this);
    }
});

},{"../internals/export":"7f5VM","../internals/string-trim":"7dSxo","../internals/string-trim-forced":"6ELKr"}],"6ELKr":[function(require,module,exports) {
var fails = require('../internals/fails');
var whitespaces = require('../internals/whitespaces');
var non = '\u200B\u0085\u180E';
// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function(METHOD_NAME) {
    return fails(function() {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
};

},{"../internals/fails":"5YzzT","../internals/whitespaces":"6g7Q4"}],"6hDU8":[function(require,module,exports) {
/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/ module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1;
    // strip any leading #
    if (color_string.charAt(0) == '#') color_string = color_string.substr(1, 6);
    color_string = color_string.replace(/ /g, '');
    color_string = color_string.toLowerCase();
    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors
    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: [
                'rgba(123, 234, 45, 0.8)',
                'rgba(255,234,245,1.0)'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [
                'rgb(123, 234, 45)',
                'rgb(255,234,245)'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: [
                '#00ff00',
                '336699'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: [
                '#fb0',
                'f0f'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];
    // search through the definitions to find a match
    for(var i = 0; i < color_defs.length; i++){
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) this.alpha = channels[3];
            this.ok = true;
        }
    }
    // validate/cleanup values
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
    this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha;
    // some getters
    this.toRGB = function() {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    };
    this.toRGBA = function() {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    };
    this.toHex = function() {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    };
    // help
    this.getHelpXML = function() {
        var examples = new Array();
        // add regexps
        for(var i1 = 0; i1 < color_defs.length; i1++){
            var example = color_defs[i1].example;
            for(var j = 0; j < example.length; j++)examples[examples.length] = example[j];
        }
        // add type-in colors
        for(var sc in simple_colors)examples[examples.length] = sc;
        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for(var i1 = 0; i1 < examples.length; i1++)try {
            var list_item = document.createElement('li');
            var list_color = new RGBColor(examples[i1]);
            var example_div = document.createElement('div');
            example_div.style.cssText = "margin: 3px; border: 1px solid black; background:" + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
            example_div.appendChild(document.createTextNode('test'));
            var list_item_value = document.createTextNode(' ' + examples[i1] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
            list_item.appendChild(example_div);
            list_item.appendChild(list_item_value);
            xml.appendChild(list_item);
        } catch (e) {
        }
        return xml;
    };
};

},{}],"1uGSR":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');
// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({
    target: 'Array',
    proto: true,
    forced: [].forEach != forEach
}, {
    forEach: forEach
});

},{"../internals/export":"7f5VM","../internals/array-for-each":"6NneG"}],"6NneG":[function(require,module,exports) {
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('forEach');
// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn/* , thisArg */ ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":"38CSN","../internals/array-method-is-strict":"4NJHA"}],"4R0aZ":[function(require,module,exports) {
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var forEach = require('../internals/array-for-each');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
for(var COLLECTION_NAME in DOMIterables){
    var Collection = global[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
        CollectionPrototype.forEach = forEach;
    }
}

},{"../internals/global":"2QuID","../internals/dom-iterables":"2wjSj","../internals/array-for-each":"6NneG","../internals/create-non-enumerable-property":"7GpEi"}],"2wjSj":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};

},{}],"dNu3I":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf.js");
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./setPrototypeOf.js":"37Yld"}],"3vcut":[function(require,module,exports) {
var _typeof = require("@babel/runtime/helpers/typeof")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime/helpers/typeof":"3F8fn","./assertThisInitialized.js":"1BXAs"}],"1BXAs":[function(require,module,exports) {
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"7d4Cy":[function(require,module,exports) {
function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"drpwf":[function(require,module,exports) {
var $ = require('../internals/export');
var from = require('../internals/array-from');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
});
// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    from: from
});

},{"../internals/export":"7f5VM","../internals/array-from":"3cVQ2","../internals/check-correctness-of-iteration":"2GTab"}],"3cVQ2":[function(require,module,exports) {
'use strict';
var bind = require('../internals/function-bind-context');
var toObject = require('../internals/to-object');
var callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var getIteratorMethod = require('../internals/get-iterator-method');
// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike/* , mapfn = undefined, thisArg = undefined */ ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = iteratorMethod.call(O);
        next = iterator.next;
        result = new C();
        for(; !(step = next.call(iterator)).done; index++){
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                step.value,
                index
            ], true) : step.value;
            createProperty(result, index, value);
        }
    } else {
        length = toLength(O.length);
        result = new C(length);
        for(; length > index; index++){
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
        }
    }
    result.length = index;
    return result;
};

},{"../internals/function-bind-context":"7CQyb","../internals/to-object":"4XEgD","../internals/call-with-safe-iteration-closing":"4aJv5","../internals/is-array-iterator-method":"2EFsq","../internals/to-length":"3fB31","../internals/create-property":"2hdSr","../internals/get-iterator-method":"1OMhJ"}],"4aJv5":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var iteratorClose = require('../internals/iterator-close');
// call something on iterator step with safe closing on error
module.exports = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator);
        throw error;
    }
};

},{"../internals/an-object":"zIcM0","../internals/iterator-close":"YTc13"}],"570Fu":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({
    target: 'Array',
    proto: true
}, {
    includes: function includes(el/* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/export":"7f5VM","../internals/array-includes":"3twN8","../internals/add-to-unscopables":"1U0HE"}],"1U0HE":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var definePropertyModule = require('../internals/object-define-property');
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/well-known-symbol":"1p7x0","../internals/object-create":"6Aq1Z","../internals/object-define-property":"2Spf8"}],"6Aq1Z":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function() {
    try {
        /* global ActiveXObject -- old IE */ activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
    }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":"zIcM0","../internals/object-define-properties":"4Mp54","../internals/enum-bug-keys":"PBzVX","../internals/hidden-keys":"5jCyL","../internals/html":"3Zpwg","../internals/document-create-element":"6HeRK","../internals/shared-key":"5Qr1S"}],"4Mp54":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var objectKeys = require('../internals/object-keys');
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], Properties[key]);
    return O;
};

},{"../internals/descriptors":"3t0KX","../internals/object-define-property":"2Spf8","../internals/an-object":"zIcM0","../internals/object-keys":"4J3XL"}],"4J3XL":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"2VaKP","../internals/enum-bug-keys":"PBzVX"}],"6WSIB":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = require('../internals/export');
var $indexOf = require('../internals/array-includes').indexOf;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var nativeIndexOf = [].indexOf;
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [
    1
].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD
}, {
    indexOf: function indexOf(searchElement/* , fromIndex = 0 */ ) {
        return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"7f5VM","../internals/array-includes":"3twN8","../internals/array-method-is-strict":"4NJHA"}],"4Puoj":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $some = require('../internals/array-iteration').some;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('some');
// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    some: function some(callbackfn/* , thisArg */ ) {
        return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"7f5VM","../internals/array-iteration":"38CSN","../internals/array-method-is-strict":"4NJHA"}],"lkI9x":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
}, {
    includes: function includes(searchString/* , position = 0 */ ) {
        return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"7f5VM","../internals/not-a-regexp":"7DjxO","../internals/require-object-coercible":"71cc3","../internals/correct-is-regexp-logic":"26rXA"}],"5WvFl":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function(iterated) {
    setInternalState(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
        value: undefined,
        done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
        value: point,
        done: false
    };
});

},{"../internals/string-multibyte":"1YtEe","../internals/internal-state":"41JRX","../internals/define-iterator":"1JGE9"}],"1JGE9":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() {
            return nativeIterator.call(this);
        };
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
    Iterators[NAME] = defaultIterator;
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
        else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    return methods;
};

},{"../internals/export":"7f5VM","../internals/create-iterator-constructor":"3Ht8p","../internals/object-get-prototype-of":"2c9KB","../internals/object-set-prototype-of":"eaKkl","../internals/set-to-string-tag":"62qxJ","../internals/create-non-enumerable-property":"7GpEi","../internals/redefine":"QBTn4","../internals/well-known-symbol":"1p7x0","../internals/is-pure":"2rRdV","../internals/iterators":"7hiLE","../internals/iterators-core":"1JzpF"}],"3Ht8p":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');
var returnThis = function() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"../internals/iterators-core":"1JzpF","../internals/object-create":"6Aq1Z","../internals/create-property-descriptor":"2q31l","../internals/set-to-string-tag":"62qxJ","../internals/iterators":"7hiLE"}],"1JzpF":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
var returnThis = function() {
    return this;
};
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function() {
    var test = {
    };
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {
};
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":"5YzzT","../internals/object-get-prototype-of":"2c9KB","../internals/create-non-enumerable-property":"7GpEi","../internals/has":"5p6Hg","../internals/well-known-symbol":"1p7x0","../internals/is-pure":"2rRdV"}],"2c9KB":[function(require,module,exports) {
var has = require('../internals/has');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) return O.constructor.prototype;
    return O instanceof Object ? ObjectPrototype : null;
};

},{"../internals/has":"5p6Hg","../internals/to-object":"4XEgD","../internals/shared-key":"5Qr1S","../internals/correct-prototype-getter":"6MiZW"}],"6MiZW":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    function F() {
    }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"5YzzT"}],"7KUD7":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./arrayWithoutHoles.js":"3Uv5h","./iterableToArray.js":"6kldf","./unsupportedIterableToArray.js":"2BZXI","./nonIterableSpread.js":"30X0e"}],"3Uv5h":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./arrayLikeToArray.js":"3neg6"}],"6kldf":[function(require,module,exports) {
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"30X0e":[function(require,module,exports) {
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"YSU7n":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
var nativeReverse = [].reverse;
var test = [
    1,
    2
];
// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
    target: 'Array',
    proto: true,
    forced: String(test) === String(test.reverse())
}, {
    reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length;
        return nativeReverse.call(this);
    }
});

},{"../internals/export":"7f5VM","../internals/is-array":"1KA40"}],"2IcTj":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var has = require('../internals/has');
var classof = require('../internals/classof-raw');
var inheritIfRequired = require('../internals/inherit-if-required');
var toPrimitive = require('../internals/to-primitive');
var fails = require('../internals/fails');
var create = require('../internals/object-create');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var defineProperty = require('../internals/object-define-property').f;
var trim = require('../internals/string-trim').trim;
var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;
// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function(argument) {
    var it = toPrimitive(argument, false);
    var first, third, radix, maxCode, digits, length, index, code;
    if (typeof it == 'string' && it.length > 2) {
        it = trim(it);
        first = it.charCodeAt(0);
        if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
            switch(it.charCodeAt(1)){
                case 66:
                case 98:
                    radix = 2;
                    maxCode = 49;
                    break; // fast equal of /^0b[01]+$/i
                case 79:
                case 111:
                    radix = 8;
                    maxCode = 55;
                    break; // fast equal of /^0o[0-7]+$/i
                default:
                    return +it;
            }
            digits = it.slice(2);
            length = digits.length;
            for(index = 0; index < length; index++){
                code = digits.charCodeAt(index);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
            }
            return parseInt(digits, radix);
        }
    }
    return +it;
};
// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number1(value) {
        var it = arguments.length < 1 ? 0 : value;
        var dummy = this;
        return dummy instanceof NumberWrapper && (BROKEN_CLASSOF ? fails(function() {
            NumberPrototype.valueOf.call(dummy);
        }) : classof(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
    };
    for(var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(','), j = 0, key; keys.length > j; j++)if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global, NUMBER, NumberWrapper);
}

},{"../internals/descriptors":"3t0KX","../internals/global":"2QuID","../internals/is-forced":"3uGlO","../internals/redefine":"QBTn4","../internals/has":"5p6Hg","../internals/classof-raw":"1JsjO","../internals/inherit-if-required":"6ZeDw","../internals/to-primitive":"Ud71x","../internals/fails":"5YzzT","../internals/object-create":"6Aq1Z","../internals/object-get-own-property-names":"3cY8Y","../internals/object-get-own-property-descriptor":"1BKD3","../internals/object-define-property":"2Spf8","../internals/string-trim":"7dSxo"}],"6ZeDw":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var setPrototypeOf = require('../internals/object-set-prototype-of');
// makes subclassing work correct for wrapped built-ins
module.exports = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (// it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
};

},{"../internals/is-object":"6LaDF","../internals/object-set-prototype-of":"eaKkl"}],"4Eot7":[function(require,module,exports) {
var superPropBase = require("./superPropBase.js");
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        module.exports = _get = Reflect.get;
        module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
        module.exports = _get = function _get1(target1, property1, receiver1) {
            var base = superPropBase(target1, property1);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property1);
            if (desc.get) return desc.get.call(receiver1);
            return desc.value;
        };
        module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
    return _get(target, property, receiver || target);
}
module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./superPropBase.js":"6AQ27"}],"6AQ27":[function(require,module,exports) {
var getPrototypeOf = require("./getPrototypeOf.js");
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./getPrototypeOf.js":"7d4Cy"}],"4DgK8":[function(require,module,exports) {
var $ = require('../internals/export');
var fill = require('../internals/array-fill');
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({
    target: 'Array',
    proto: true
}, {
    fill: fill
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');

},{"../internals/export":"7f5VM","../internals/array-fill":"178jC","../internals/add-to-unscopables":"1U0HE"}],"178jC":[function(require,module,exports) {
'use strict';
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value/* , start = 0, end = @length */ ) {
    var O = toObject(this);
    var length = toLength(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
};

},{"../internals/to-object":"4XEgD","../internals/to-absolute-index":"7LRuV","../internals/to-length":"3fB31"}],"61Uk2":[function(require,module,exports) {
!function(t, r) {
    "object" == typeof exports && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], r) : r((t = "undefined" != typeof globalThis ? globalThis : t || self).svgpathdata = {
    });
}(this, function(t) {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var r = function(t1, e) {
        return (r = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t2, r1) {
            t2.__proto__ = r1;
        } || function(t2, r1) {
            for(var e1 in r1)Object.prototype.hasOwnProperty.call(r1, e1) && (t2[e1] = r1[e1]);
        })(t1, e);
    };
    function e(t1, e1) {
        if ("function" != typeof e1 && null !== e1) throw new TypeError("Class extends value " + String(e1) + " is not a constructor or null");
        function a() {
            this.constructor = t1;
        }
        r(t1, e1), t1.prototype = null === e1 ? Object.create(e1) : (a.prototype = e1.prototype, new a);
    }
    var a = " ";
    function i2(t1) {
        var r1 = "";
        Array.isArray(t1) || (t1 = [
            t1
        ]);
        for(var e1 = 0; e1 < t1.length; e1++){
            var i1 = t1[e1];
            if (i1.type === N.CLOSE_PATH) r1 += "z";
            else if (i1.type === N.HORIZ_LINE_TO) r1 += (i1.relative ? "h" : "H") + i1.x;
            else if (i1.type === N.VERT_LINE_TO) r1 += (i1.relative ? "v" : "V") + i1.y;
            else if (i1.type === N.MOVE_TO) r1 += (i1.relative ? "m" : "M") + i1.x + a + i1.y;
            else if (i1.type === N.LINE_TO) r1 += (i1.relative ? "l" : "L") + i1.x + a + i1.y;
            else if (i1.type === N.CURVE_TO) r1 += (i1.relative ? "c" : "C") + i1.x1 + a + i1.y1 + a + i1.x2 + a + i1.y2 + a + i1.x + a + i1.y;
            else if (i1.type === N.SMOOTH_CURVE_TO) r1 += (i1.relative ? "s" : "S") + i1.x2 + a + i1.y2 + a + i1.x + a + i1.y;
            else if (i1.type === N.QUAD_TO) r1 += (i1.relative ? "q" : "Q") + i1.x1 + a + i1.y1 + a + i1.x + a + i1.y;
            else if (i1.type === N.SMOOTH_QUAD_TO) r1 += (i1.relative ? "t" : "T") + i1.x + a + i1.y;
            else {
                if (i1.type !== N.ARC) throw new Error('Unexpected command type "' + i1.type + '" at index ' + e1 + ".");
                r1 += (i1.relative ? "a" : "A") + i1.rX + a + i1.rY + a + i1.xRot + a + +i1.lArcFlag + a + +i1.sweepFlag + a + i1.x + a + i1.y;
            }
        }
        return r1;
    }
    function n(t1, r1) {
        var e1 = t1[0], a1 = t1[1];
        return [
            e1 * Math.cos(r1) - a1 * Math.sin(r1),
            e1 * Math.sin(r1) + a1 * Math.cos(r1)
        ];
    }
    function o() {
        for(var t1 = [], r1 = 0; r1 < arguments.length; r1++)t1[r1] = arguments[r1];
        for(var e1 = 0; e1 < t1.length; e1++)if ("number" != typeof t1[e1]) throw new Error("assertNumbers arguments[" + e1 + "] is not a number. " + typeof t1[e1] + " == typeof " + t1[e1]);
        return !0;
    }
    var s = Math.PI;
    function u(t1, r1, e1) {
        t1.lArcFlag = 0 === t1.lArcFlag ? 0 : 1, t1.sweepFlag = 0 === t1.sweepFlag ? 0 : 1;
        var a1 = t1.rX, i2 = t1.rY, o1 = t1.x, u1 = t1.y;
        a1 = Math.abs(t1.rX), i2 = Math.abs(t1.rY);
        var h = n([
            (r1 - o1) / 2,
            (e1 - u1) / 2
        ], -t1.xRot / 180 * s), c = h[0], m = h[1], y = Math.pow(c, 2) / Math.pow(a1, 2) + Math.pow(m, 2) / Math.pow(i2, 2);
        1 < y && (a1 *= Math.sqrt(y), i2 *= Math.sqrt(y)), t1.rX = a1, t1.rY = i2;
        var p = Math.pow(a1, 2) * Math.pow(m, 2) + Math.pow(i2, 2) * Math.pow(c, 2), f = (t1.lArcFlag !== t1.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a1, 2) * Math.pow(i2, 2) - p) / p)), T = a1 * m / i2 * f, O = -i2 * c / a1 * f, l = n([
            T,
            O
        ], t1.xRot / 180 * s);
        t1.cX = l[0] + (r1 + o1) / 2, t1.cY = l[1] + (e1 + u1) / 2, t1.phi1 = Math.atan2((m - O) / i2, (c - T) / a1), t1.phi2 = Math.atan2((-m - O) / i2, (-c - T) / a1), 0 === t1.sweepFlag && t1.phi2 > t1.phi1 && (t1.phi2 -= 2 * s), 1 === t1.sweepFlag && t1.phi2 < t1.phi1 && (t1.phi2 += 2 * s), t1.phi1 *= 180 / s, t1.phi2 *= 180 / s;
    }
    function h(t1, r1, e1) {
        o(t1, r1, e1);
        var a1 = t1 * t1 + r1 * r1 - e1 * e1;
        if (0 > a1) return [];
        if (0 === a1) return [
            [
                t1 * e1 / (t1 * t1 + r1 * r1),
                r1 * e1 / (t1 * t1 + r1 * r1)
            ]
        ];
        var i2 = Math.sqrt(a1);
        return [
            [
                (t1 * e1 + r1 * i2) / (t1 * t1 + r1 * r1),
                (r1 * e1 - t1 * i2) / (t1 * t1 + r1 * r1)
            ],
            [
                (t1 * e1 - r1 * i2) / (t1 * t1 + r1 * r1),
                (r1 * e1 + t1 * i2) / (t1 * t1 + r1 * r1)
            ]
        ];
    }
    var c = Math.PI / 180;
    function m(t1, r1, e1) {
        return (1 - e1) * t1 + e1 * r1;
    }
    function y(t1, r1, e1, a1) {
        return t1 + Math.cos(a1 / 180 * s) * r1 + Math.sin(a1 / 180 * s) * e1;
    }
    function p(t1, r1, e1, a1) {
        var i2 = 0.000001, n1 = r1 - t1, o1 = e1 - r1, s1 = 3 * n1 + 3 * (a1 - e1) - 6 * o1, u1 = 6 * (o1 - n1), h1 = 3 * n1;
        return Math.abs(s1) < i2 ? [
            -h1 / u1
        ] : (function(t2, r2, e2) {
            (void 0) === e2 && (e2 = 0.000001);
            var a2 = t2 * t2 / 4 - r2;
            if (a2 < -e2) return [];
            if (a2 <= e2) return [
                -t2 / 2
            ];
            var i3 = Math.sqrt(a2);
            return [
                -t2 / 2 - i3,
                -t2 / 2 + i3
            ];
        })(u1 / s1, h1 / s1, i2);
    }
    function f(t1, r1, e1, a1, i2) {
        var n1 = 1 - i2;
        return t1 * (n1 * n1 * n1) + r1 * (3 * n1 * n1 * i2) + e1 * (3 * n1 * i2 * i2) + a1 * (i2 * i2 * i2);
    }
    t.SVGPathDataTransformer = void 0, (function(t1) {
        function r1() {
            return i3(function(t2, r2, e1) {
                return t2.relative && ((void 0) !== t2.x1 && (t2.x1 += r2), (void 0) !== t2.y1 && (t2.y1 += e1), (void 0) !== t2.x2 && (t2.x2 += r2), (void 0) !== t2.y2 && (t2.y2 += e1), (void 0) !== t2.x && (t2.x += r2), (void 0) !== t2.y && (t2.y += e1), t2.relative = !1), t2;
            });
        }
        function e1() {
            var t2 = NaN, r2 = NaN, e2 = NaN, a1 = NaN;
            return i3(function(i3, n1, o1) {
                return i3.type & N.SMOOTH_CURVE_TO && (i3.type = N.CURVE_TO, t2 = isNaN(t2) ? n1 : t2, r2 = isNaN(r2) ? o1 : r2, i3.x1 = i3.relative ? n1 - t2 : 2 * n1 - t2, i3.y1 = i3.relative ? o1 - r2 : 2 * o1 - r2), i3.type & N.CURVE_TO ? (t2 = i3.relative ? n1 + i3.x2 : i3.x2, r2 = i3.relative ? o1 + i3.y2 : i3.y2) : (t2 = NaN, r2 = NaN), i3.type & N.SMOOTH_QUAD_TO && (i3.type = N.QUAD_TO, e2 = isNaN(e2) ? n1 : e2, a1 = isNaN(a1) ? o1 : a1, i3.x1 = i3.relative ? n1 - e2 : 2 * n1 - e2, i3.y1 = i3.relative ? o1 - a1 : 2 * o1 - a1), i3.type & N.QUAD_TO ? (e2 = i3.relative ? n1 + i3.x1 : i3.x1, a1 = i3.relative ? o1 + i3.y1 : i3.y1) : (e2 = NaN, a1 = NaN), i3;
            });
        }
        function a1() {
            var t2 = NaN, r2 = NaN;
            return i3(function(e2, a2, i3) {
                if (e2.type & N.SMOOTH_QUAD_TO && (e2.type = N.QUAD_TO, t2 = isNaN(t2) ? a2 : t2, r2 = isNaN(r2) ? i3 : r2, e2.x1 = e2.relative ? a2 - t2 : 2 * a2 - t2, e2.y1 = e2.relative ? i3 - r2 : 2 * i3 - r2), e2.type & N.QUAD_TO) {
                    t2 = e2.relative ? a2 + e2.x1 : e2.x1, r2 = e2.relative ? i3 + e2.y1 : e2.y1;
                    var n1 = e2.x1, o1 = e2.y1;
                    e2.type = N.CURVE_TO, e2.x1 = ((e2.relative ? 0 : a2) + 2 * n1) / 3, e2.y1 = ((e2.relative ? 0 : i3) + 2 * o1) / 3, e2.x2 = (e2.x + 2 * n1) / 3, e2.y2 = (e2.y + 2 * o1) / 3;
                } else t2 = NaN, r2 = NaN;
                return e2;
            });
        }
        function i3(t2) {
            var r2 = 0, e2 = 0, a2 = NaN, i4 = NaN;
            return function(n2) {
                if (isNaN(a2) && !(n2.type & N.MOVE_TO)) throw new Error("path must start with moveto");
                var o2 = t2(n2, r2, e2, a2, i4);
                return n2.type & N.CLOSE_PATH && (r2 = a2, e2 = i4), (void 0) !== n2.x && (r2 = n2.relative ? r2 + n2.x : n2.x), (void 0) !== n2.y && (e2 = n2.relative ? e2 + n2.y : n2.y), n2.type & N.MOVE_TO && (a2 = r2, i4 = e2), o2;
            };
        }
        function s1(t2, r2, e2, a2, n2, s2) {
            return o(t2, r2, e2, a2, n2, s2), i3(function(i4, o2, u1, h1) {
                var c1 = i4.x1, m1 = i4.x2, y1 = i4.relative && !isNaN(h1), p1 = (void 0) !== i4.x ? i4.x : y1 ? 0 : o2, f1 = (void 0) !== i4.y ? i4.y : y1 ? 0 : u1;
                function T(t3) {
                    return t3 * t3;
                }
                i4.type & N.HORIZ_LINE_TO && 0 !== r2 && (i4.type = N.LINE_TO, i4.y = i4.relative ? 0 : u1), i4.type & N.VERT_LINE_TO && 0 !== e2 && (i4.type = N.LINE_TO, i4.x = i4.relative ? 0 : o2), (void 0) !== i4.x && (i4.x = i4.x * t2 + f1 * e2 + (y1 ? 0 : n2)), (void 0) !== i4.y && (i4.y = p1 * r2 + i4.y * a2 + (y1 ? 0 : s2)), (void 0) !== i4.x1 && (i4.x1 = i4.x1 * t2 + i4.y1 * e2 + (y1 ? 0 : n2)), (void 0) !== i4.y1 && (i4.y1 = c1 * r2 + i4.y1 * a2 + (y1 ? 0 : s2)), (void 0) !== i4.x2 && (i4.x2 = i4.x2 * t2 + i4.y2 * e2 + (y1 ? 0 : n2)), (void 0) !== i4.y2 && (i4.y2 = m1 * r2 + i4.y2 * a2 + (y1 ? 0 : s2));
                var O = t2 * a2 - r2 * e2;
                if ((void 0) !== i4.xRot && (1 !== t2 || 0 !== r2 || 0 !== e2 || 1 !== a2)) {
                    if (0 === O) delete i4.rX, delete i4.rY, delete i4.xRot, delete i4.lArcFlag, delete i4.sweepFlag, i4.type = N.LINE_TO;
                    else {
                        var l = i4.xRot * Math.PI / 180, v = Math.sin(l), _ = Math.cos(l), d = 1 / T(i4.rX), x = 1 / T(i4.rY), A = T(_) * d + T(v) * x, E = 2 * v * _ * (d - x), C = T(v) * d + T(_) * x, M = A * a2 * a2 - E * r2 * a2 + C * r2 * r2, R = E * (t2 * a2 + r2 * e2) - 2 * (A * e2 * a2 + C * t2 * r2), S = A * e2 * e2 - E * t2 * e2 + C * t2 * t2, g = (Math.atan2(R, M - S) + Math.PI) % Math.PI / 2, I = Math.sin(g), V = Math.cos(g);
                        i4.rX = Math.abs(O) / Math.sqrt(M * T(V) + R * I * V + S * T(I)), i4.rY = Math.abs(O) / Math.sqrt(M * T(I) - R * I * V + S * T(V)), i4.xRot = 180 * g / Math.PI;
                    }
                }
                return (void 0) !== i4.sweepFlag && 0 > O && (i4.sweepFlag = +!i4.sweepFlag), i4;
            });
        }
        function T() {
            return function(t2) {
                var r2 = {
                };
                for(var e2 in t2)r2[e2] = t2[e2];
                return r2;
            };
        }
        t1.ROUND = function(t2) {
            function r2(r3) {
                return Math.round(r3 * t2) / t2;
            }
            return (void 0) === t2 && (t2 = 10000000000000), o(t2), function(t3) {
                return (void 0) !== t3.x1 && (t3.x1 = r2(t3.x1)), (void 0) !== t3.y1 && (t3.y1 = r2(t3.y1)), (void 0) !== t3.x2 && (t3.x2 = r2(t3.x2)), (void 0) !== t3.y2 && (t3.y2 = r2(t3.y2)), (void 0) !== t3.x && (t3.x = r2(t3.x)), (void 0) !== t3.y && (t3.y = r2(t3.y)), (void 0) !== t3.rX && (t3.rX = r2(t3.rX)), (void 0) !== t3.rY && (t3.rY = r2(t3.rY)), t3;
            };
        }, t1.TO_ABS = r1, t1.TO_REL = function() {
            return i3(function(t2, r2, e2) {
                return t2.relative || ((void 0) !== t2.x1 && (t2.x1 -= r2), (void 0) !== t2.y1 && (t2.y1 -= e2), (void 0) !== t2.x2 && (t2.x2 -= r2), (void 0) !== t2.y2 && (t2.y2 -= e2), (void 0) !== t2.x && (t2.x -= r2), (void 0) !== t2.y && (t2.y -= e2), t2.relative = !0), t2;
            });
        }, t1.NORMALIZE_HVZ = function(t2, r2, e2) {
            return (void 0) === t2 && (t2 = !0), (void 0) === r2 && (r2 = !0), (void 0) === e2 && (e2 = !0), i3(function(a2, i4, n2, o2, s2) {
                if (isNaN(o2) && !(a2.type & N.MOVE_TO)) throw new Error("path must start with moveto");
                return r2 && a2.type & N.HORIZ_LINE_TO && (a2.type = N.LINE_TO, a2.y = a2.relative ? 0 : n2), e2 && a2.type & N.VERT_LINE_TO && (a2.type = N.LINE_TO, a2.x = a2.relative ? 0 : i4), t2 && a2.type & N.CLOSE_PATH && (a2.type = N.LINE_TO, a2.x = a2.relative ? o2 - i4 : o2, a2.y = a2.relative ? s2 - n2 : s2), a2.type & N.ARC && (0 === a2.rX || 0 === a2.rY) && (a2.type = N.LINE_TO, delete a2.rX, delete a2.rY, delete a2.xRot, delete a2.lArcFlag, delete a2.sweepFlag), a2;
            });
        }, t1.NORMALIZE_ST = e1, t1.QT_TO_C = a1, t1.INFO = i3, t1.SANITIZE = function(t2) {
            (void 0) === t2 && (t2 = 0), o(t2);
            var r2 = NaN, e2 = NaN, a2 = NaN, n2 = NaN;
            return i3(function(i4, o2, s2, u1, h1) {
                var c1 = Math.abs, m1 = !1, y1 = 0, p1 = 0;
                if (i4.type & N.SMOOTH_CURVE_TO && (y1 = isNaN(r2) ? 0 : o2 - r2, p1 = isNaN(e2) ? 0 : s2 - e2), i4.type & (N.CURVE_TO | N.SMOOTH_CURVE_TO) ? (r2 = i4.relative ? o2 + i4.x2 : i4.x2, e2 = i4.relative ? s2 + i4.y2 : i4.y2) : (r2 = NaN, e2 = NaN), i4.type & N.SMOOTH_QUAD_TO ? (a2 = isNaN(a2) ? o2 : 2 * o2 - a2, n2 = isNaN(n2) ? s2 : 2 * s2 - n2) : i4.type & N.QUAD_TO ? (a2 = i4.relative ? o2 + i4.x1 : i4.x1, n2 = i4.relative ? s2 + i4.y1 : i4.y2) : (a2 = NaN, n2 = NaN), i4.type & N.LINE_COMMANDS || i4.type & N.ARC && (0 === i4.rX || 0 === i4.rY || !i4.lArcFlag) || i4.type & N.CURVE_TO || i4.type & N.SMOOTH_CURVE_TO || i4.type & N.QUAD_TO || i4.type & N.SMOOTH_QUAD_TO) {
                    var f1 = (void 0) === i4.x ? 0 : i4.relative ? i4.x : i4.x - o2, T1 = (void 0) === i4.y ? 0 : i4.relative ? i4.y : i4.y - s2;
                    y1 = isNaN(a2) ? (void 0) === i4.x1 ? y1 : i4.relative ? i4.x : i4.x1 - o2 : a2 - o2, p1 = isNaN(n2) ? (void 0) === i4.y1 ? p1 : i4.relative ? i4.y : i4.y1 - s2 : n2 - s2;
                    var O = (void 0) === i4.x2 ? 0 : i4.relative ? i4.x : i4.x2 - o2, l = (void 0) === i4.y2 ? 0 : i4.relative ? i4.y : i4.y2 - s2;
                    c1(f1) <= t2 && c1(T1) <= t2 && c1(y1) <= t2 && c1(p1) <= t2 && c1(O) <= t2 && c1(l) <= t2 && (m1 = !0);
                }
                return i4.type & N.CLOSE_PATH && c1(o2 - u1) <= t2 && c1(s2 - h1) <= t2 && (m1 = !0), m1 ? [] : i4;
            });
        }, t1.MATRIX = s1, t1.ROTATE = function(t2, r2, e2) {
            (void 0) === r2 && (r2 = 0), (void 0) === e2 && (e2 = 0), o(t2, r2, e2);
            var a2 = Math.sin(t2), i4 = Math.cos(t2);
            return s1(i4, a2, -a2, i4, r2 - r2 * i4 + e2 * a2, e2 - r2 * a2 - e2 * i4);
        }, t1.TRANSLATE = function(t2, r2) {
            return (void 0) === r2 && (r2 = 0), o(t2, r2), s1(1, 0, 0, 1, t2, r2);
        }, t1.SCALE = function(t2, r2) {
            return (void 0) === r2 && (r2 = t2), o(t2, r2), s1(t2, 0, 0, r2, 0, 0);
        }, t1.SKEW_X = function(t2) {
            return o(t2), s1(1, 0, Math.atan(t2), 1, 0, 0);
        }, t1.SKEW_Y = function(t2) {
            return o(t2), s1(1, Math.atan(t2), 0, 1, 0, 0);
        }, t1.X_AXIS_SYMMETRY = function(t2) {
            return (void 0) === t2 && (t2 = 0), o(t2), s1(-1, 0, 0, 1, t2, 0);
        }, t1.Y_AXIS_SYMMETRY = function(t2) {
            return (void 0) === t2 && (t2 = 0), o(t2), s1(1, 0, 0, -1, 0, t2);
        }, t1.A_TO_C = function() {
            return i3(function(t2, r2, e2) {
                return N.ARC === t2.type ? (function(t3, r3, e3) {
                    var a2, i4, o2, s2;
                    t3.cX || u(t3, r3, e3);
                    for(var h1 = Math.min(t3.phi1, t3.phi2), y1 = Math.max(t3.phi1, t3.phi2) - h1, p1 = Math.ceil(y1 / 90), f2 = new Array(p1), T2 = r3, O = e3, l = 0; l < p1; l++){
                        var v = m(t3.phi1, t3.phi2, l / p1), _ = m(t3.phi1, t3.phi2, (l + 1) / p1), d = _ - v, x = 4 / 3 * Math.tan(d * c / 4), A = [
                            Math.cos(v * c) - x * Math.sin(v * c),
                            Math.sin(v * c) + x * Math.cos(v * c)
                        ], E = A[0], C = A[1], M = [
                            Math.cos(_ * c),
                            Math.sin(_ * c)
                        ], R = M[0], S = M[1], g = [
                            R + x * Math.sin(_ * c),
                            S - x * Math.cos(_ * c)
                        ], I = g[0], V = g[1];
                        f2[l] = {
                            relative: t3.relative,
                            type: N.CURVE_TO
                        };
                        var D = function(r4, e4) {
                            var a3 = n([
                                r4 * t3.rX,
                                e4 * t3.rY
                            ], t3.xRot), i5 = a3[0], o3 = a3[1];
                            return [
                                t3.cX + i5,
                                t3.cY + o3
                            ];
                        };
                        a2 = D(E, C), f2[l].x1 = a2[0], f2[l].y1 = a2[1], i4 = D(I, V), f2[l].x2 = i4[0], f2[l].y2 = i4[1], o2 = D(R, S), f2[l].x = o2[0], f2[l].y = o2[1], t3.relative && (f2[l].x1 -= T2, f2[l].y1 -= O, f2[l].x2 -= T2, f2[l].y2 -= O, f2[l].x -= T2, f2[l].y -= O), T2 = (s2 = [
                            f2[l].x,
                            f2[l].y
                        ])[0], O = s2[1];
                    }
                    return f2;
                })(t2, t2.relative ? 0 : r2, t2.relative ? 0 : e2) : t2;
            });
        }, t1.ANNOTATE_ARCS = function() {
            return i3(function(t2, r2, e2) {
                return t2.relative && (r2 = 0, e2 = 0), N.ARC === t2.type && u(t2, r2, e2), t2;
            });
        }, t1.CLONE = T, t1.CALCULATE_BOUNDS = function() {
            var t2 = function(t3) {
                var r2 = {
                };
                for(var e2 in t3)r2[e2] = t3[e2];
                return r2;
            }, n2 = r1(), o2 = a1(), s2 = e1(), c1 = i3(function(r2, e2, a2) {
                var i4 = s2(o2(n2(t2(r2))));
                function m1(t3) {
                    t3 > c1.maxX && (c1.maxX = t3), t3 < c1.minX && (c1.minX = t3);
                }
                function T2(t3) {
                    t3 > c1.maxY && (c1.maxY = t3), t3 < c1.minY && (c1.minY = t3);
                }
                if (i4.type & N.DRAWING_COMMANDS && (m1(e2), T2(a2)), i4.type & N.HORIZ_LINE_TO && m1(i4.x), i4.type & N.VERT_LINE_TO && T2(i4.y), i4.type & N.LINE_TO && (m1(i4.x), T2(i4.y)), i4.type & N.CURVE_TO) {
                    m1(i4.x), T2(i4.y);
                    for(var O = 0, l = p(e2, i4.x1, i4.x2, i4.x); O < l.length; O++)0 < (H = l[O]) && 1 > H && m1(f(e2, i4.x1, i4.x2, i4.x, H));
                    for(var v = 0, _ = p(a2, i4.y1, i4.y2, i4.y); v < _.length; v++)0 < (H = _[v]) && 1 > H && T2(f(a2, i4.y1, i4.y2, i4.y, H));
                }
                if (i4.type & N.ARC) {
                    m1(i4.x), T2(i4.y), u(i4, e2, a2);
                    for(var d = i4.xRot / 180 * Math.PI, x = Math.cos(d) * i4.rX, A = Math.sin(d) * i4.rX, E = -Math.sin(d) * i4.rY, C = Math.cos(d) * i4.rY, M = i4.phi1 < i4.phi2 ? [
                        i4.phi1,
                        i4.phi2
                    ] : -180 > i4.phi2 ? [
                        i4.phi2 + 360,
                        i4.phi1 + 360
                    ] : [
                        i4.phi2,
                        i4.phi1
                    ], R = M[0], S = M[1], g = function(t3) {
                        var r3 = t3[0], e3 = t3[1], a3 = 180 * Math.atan2(e3, r3) / Math.PI;
                        return a3 < R ? a3 + 360 : a3;
                    }, I = 0, V = h(E, -x, 0).map(g); I < V.length; I++)(H = V[I]) > R && H < S && m1(y(i4.cX, x, E, H));
                    for(var D = 0, L = h(C, -A, 0).map(g); D < L.length; D++){
                        var H;
                        (H = L[D]) > R && H < S && T2(y(i4.cY, A, C, H));
                    }
                }
                return r2;
            });
            return c1.minX = 1 / 0, c1.maxX = -1 / 0, c1.minY = 1 / 0, c1.maxY = -1 / 0, c1;
        };
    })(t.SVGPathDataTransformer || (t.SVGPathDataTransformer = {
    }));
    var T2, O = function() {
        function r1() {
        }
        return r1.prototype.round = function(r2) {
            return this.transform(t.SVGPathDataTransformer.ROUND(r2));
        }, r1.prototype.toAbs = function() {
            return this.transform(t.SVGPathDataTransformer.TO_ABS());
        }, r1.prototype.toRel = function() {
            return this.transform(t.SVGPathDataTransformer.TO_REL());
        }, r1.prototype.normalizeHVZ = function(r2, e1, a1) {
            return this.transform(t.SVGPathDataTransformer.NORMALIZE_HVZ(r2, e1, a1));
        }, r1.prototype.normalizeST = function() {
            return this.transform(t.SVGPathDataTransformer.NORMALIZE_ST());
        }, r1.prototype.qtToC = function() {
            return this.transform(t.SVGPathDataTransformer.QT_TO_C());
        }, r1.prototype.aToC = function() {
            return this.transform(t.SVGPathDataTransformer.A_TO_C());
        }, r1.prototype.sanitize = function(r2) {
            return this.transform(t.SVGPathDataTransformer.SANITIZE(r2));
        }, r1.prototype.translate = function(r2, e1) {
            return this.transform(t.SVGPathDataTransformer.TRANSLATE(r2, e1));
        }, r1.prototype.scale = function(r2, e1) {
            return this.transform(t.SVGPathDataTransformer.SCALE(r2, e1));
        }, r1.prototype.rotate = function(r2, e1, a1) {
            return this.transform(t.SVGPathDataTransformer.ROTATE(r2, e1, a1));
        }, r1.prototype.matrix = function(r2, e1, a1, i3, n2, o2) {
            return this.transform(t.SVGPathDataTransformer.MATRIX(r2, e1, a1, i3, n2, o2));
        }, r1.prototype.skewX = function(r2) {
            return this.transform(t.SVGPathDataTransformer.SKEW_X(r2));
        }, r1.prototype.skewY = function(r2) {
            return this.transform(t.SVGPathDataTransformer.SKEW_Y(r2));
        }, r1.prototype.xSymmetry = function(r2) {
            return this.transform(t.SVGPathDataTransformer.X_AXIS_SYMMETRY(r2));
        }, r1.prototype.ySymmetry = function(r2) {
            return this.transform(t.SVGPathDataTransformer.Y_AXIS_SYMMETRY(r2));
        }, r1.prototype.annotateArcs = function() {
            return this.transform(t.SVGPathDataTransformer.ANNOTATE_ARCS());
        }, r1;
    }(), l = function(t1) {
        return " " === t1 || "\t" === t1 || "\r" === t1 || "\n" === t1;
    }, v = function(t1) {
        return "0".charCodeAt(0) <= t1.charCodeAt(0) && t1.charCodeAt(0) <= "9".charCodeAt(0);
    }, _ = function(t1) {
        function r1() {
            var r2 = t1.call(this) || this;
            return r2.curNumber = "", r2.curCommandType = -1, r2.curCommandRelative = !1, r2.canParseCommandOrComma = !0, r2.curNumberHasExp = !1, r2.curNumberHasExpDigits = !1, r2.curNumberHasDecimal = !1, r2.curArgs = [], r2;
        }
        return e(r1, t1), r1.prototype.finish = function(t2) {
            if ((void 0) === t2 && (t2 = []), this.parse(" ", t2), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
            return t2;
        }, r1.prototype.parse = function(t2, r2) {
            var e1 = this;
            (void 0) === r2 && (r2 = []);
            for(var a1 = function(t3) {
                r2.push(t3), e1.curArgs.length = 0, e1.canParseCommandOrComma = !0;
            }, i3 = 0; i3 < t2.length; i3++){
                var n2 = t2[i3], o2 = !(this.curCommandType !== N.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s1 = v(n2) && ("0" === this.curNumber && "0" === n2 || o2);
                if (!v(n2) || s1) {
                    if ("e" !== n2 && "E" !== n2) {
                        if ("-" !== n2 && "+" !== n2 || !this.curNumberHasExp || this.curNumberHasExpDigits) {
                            if ("." !== n2 || this.curNumberHasExp || this.curNumberHasDecimal || o2) {
                                if (this.curNumber && -1 !== this.curCommandType) {
                                    var u1 = Number(this.curNumber);
                                    if (isNaN(u1)) throw new SyntaxError("Invalid number ending at " + i3);
                                    if (this.curCommandType === N.ARC) {
                                        if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                            if (0 > u1) throw new SyntaxError('Expected positive number, got "' + u1 + '" at index "' + i3 + '"');
                                        } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i3 + '"');
                                    }
                                    this.curArgs.push(u1), this.curArgs.length === d[this.curCommandType] && (N.HORIZ_LINE_TO === this.curCommandType ? a1({
                                        type: N.HORIZ_LINE_TO,
                                        relative: this.curCommandRelative,
                                        x: u1
                                    }) : N.VERT_LINE_TO === this.curCommandType ? a1({
                                        type: N.VERT_LINE_TO,
                                        relative: this.curCommandRelative,
                                        y: u1
                                    }) : this.curCommandType === N.MOVE_TO || this.curCommandType === N.LINE_TO || this.curCommandType === N.SMOOTH_QUAD_TO ? (a1({
                                        type: this.curCommandType,
                                        relative: this.curCommandRelative,
                                        x: this.curArgs[0],
                                        y: this.curArgs[1]
                                    }), N.MOVE_TO === this.curCommandType && (this.curCommandType = N.LINE_TO)) : this.curCommandType === N.CURVE_TO ? a1({
                                        type: N.CURVE_TO,
                                        relative: this.curCommandRelative,
                                        x1: this.curArgs[0],
                                        y1: this.curArgs[1],
                                        x2: this.curArgs[2],
                                        y2: this.curArgs[3],
                                        x: this.curArgs[4],
                                        y: this.curArgs[5]
                                    }) : this.curCommandType === N.SMOOTH_CURVE_TO ? a1({
                                        type: N.SMOOTH_CURVE_TO,
                                        relative: this.curCommandRelative,
                                        x2: this.curArgs[0],
                                        y2: this.curArgs[1],
                                        x: this.curArgs[2],
                                        y: this.curArgs[3]
                                    }) : this.curCommandType === N.QUAD_TO ? a1({
                                        type: N.QUAD_TO,
                                        relative: this.curCommandRelative,
                                        x1: this.curArgs[0],
                                        y1: this.curArgs[1],
                                        x: this.curArgs[2],
                                        y: this.curArgs[3]
                                    }) : this.curCommandType === N.ARC && a1({
                                        type: N.ARC,
                                        relative: this.curCommandRelative,
                                        rX: this.curArgs[0],
                                        rY: this.curArgs[1],
                                        xRot: this.curArgs[2],
                                        lArcFlag: this.curArgs[3],
                                        sweepFlag: this.curArgs[4],
                                        x: this.curArgs[5],
                                        y: this.curArgs[6]
                                    })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                                }
                                if (!l(n2)) {
                                    if ("," === n2 && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
                                    else if ("+" !== n2 && "-" !== n2 && "." !== n2) {
                                        if (s1) this.curNumber = n2, this.curNumberHasDecimal = !1;
                                        else {
                                            if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + i3 + ".");
                                            if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n2 + '" at index ' + i3 + ". Command cannot follow comma");
                                            if (this.canParseCommandOrComma = !1, "z" !== n2 && "Z" !== n2) {
                                                if ("h" === n2 || "H" === n2) this.curCommandType = N.HORIZ_LINE_TO, this.curCommandRelative = "h" === n2;
                                                else if ("v" === n2 || "V" === n2) this.curCommandType = N.VERT_LINE_TO, this.curCommandRelative = "v" === n2;
                                                else if ("m" === n2 || "M" === n2) this.curCommandType = N.MOVE_TO, this.curCommandRelative = "m" === n2;
                                                else if ("l" === n2 || "L" === n2) this.curCommandType = N.LINE_TO, this.curCommandRelative = "l" === n2;
                                                else if ("c" === n2 || "C" === n2) this.curCommandType = N.CURVE_TO, this.curCommandRelative = "c" === n2;
                                                else if ("s" === n2 || "S" === n2) this.curCommandType = N.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n2;
                                                else if ("q" === n2 || "Q" === n2) this.curCommandType = N.QUAD_TO, this.curCommandRelative = "q" === n2;
                                                else if ("t" === n2 || "T" === n2) this.curCommandType = N.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n2;
                                                else {
                                                    if ("a" !== n2 && "A" !== n2) throw new SyntaxError('Unexpected character "' + n2 + '" at index ' + i3 + ".");
                                                    this.curCommandType = N.ARC, this.curCommandRelative = "a" === n2;
                                                }
                                            } else r2.push({
                                                type: N.CLOSE_PATH
                                            }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                                        }
                                    } else this.curNumber = n2, this.curNumberHasDecimal = "." === n2;
                                }
                            } else this.curNumber += n2, this.curNumberHasDecimal = !0;
                        } else this.curNumber += n2;
                    } else this.curNumber += n2, this.curNumberHasExp = !0;
                } else this.curNumber += n2, this.curNumberHasExpDigits = this.curNumberHasExp;
            }
            return r2;
        }, r1.prototype.transform = function(t2) {
            return Object.create(this, {
                parse: {
                    value: function(r2, e1) {
                        (void 0) === e1 && (e1 = []);
                        for(var a1 = 0, i3 = Object.getPrototypeOf(this).parse.call(this, r2); a1 < i3.length; a1++){
                            var n3 = i3[a1], o3 = t2(n3);
                            Array.isArray(o3) ? e1.push.apply(e1, o3) : e1.push(o3);
                        }
                        return e1;
                    }
                }
            });
        }, r1;
    }(O), N = function(r1) {
        function a1(t1) {
            var e1 = r1.call(this) || this;
            return e1.commands = "string" == typeof t1 ? a1.parse(t1) : t1, e1;
        }
        return e(a1, r1), a1.prototype.encode = function() {
            return a1.encode(this.commands);
        }, a1.prototype.getBounds = function() {
            var r2 = t.SVGPathDataTransformer.CALCULATE_BOUNDS();
            return this.transform(r2), r2;
        }, a1.prototype.transform = function(t1) {
            for(var r2 = [], e1 = 0, a2 = this.commands; e1 < a2.length; e1++){
                var i3 = t1(a2[e1]);
                Array.isArray(i3) ? r2.push.apply(r2, i3) : r2.push(i3);
            }
            return this.commands = r2, this;
        }, a1.encode = function(t1) {
            return i2(t1);
        }, a1.parse = function(t1) {
            var r2 = new _, e1 = [];
            return r2.parse(t1, e1), r2.finish(e1), e1;
        }, a1.CLOSE_PATH = 1, a1.MOVE_TO = 2, a1.HORIZ_LINE_TO = 4, a1.VERT_LINE_TO = 8, a1.LINE_TO = 16, a1.CURVE_TO = 32, a1.SMOOTH_CURVE_TO = 64, a1.QUAD_TO = 128, a1.SMOOTH_QUAD_TO = 256, a1.ARC = 512, a1.LINE_COMMANDS = a1.LINE_TO | a1.HORIZ_LINE_TO | a1.VERT_LINE_TO, a1.DRAWING_COMMANDS = a1.HORIZ_LINE_TO | a1.VERT_LINE_TO | a1.LINE_TO | a1.CURVE_TO | a1.SMOOTH_CURVE_TO | a1.QUAD_TO | a1.SMOOTH_QUAD_TO | a1.ARC, a1;
    }(O), d = ((T2 = {
    })[N.MOVE_TO] = 2, T2[N.LINE_TO] = 2, T2[N.HORIZ_LINE_TO] = 1, T2[N.VERT_LINE_TO] = 1, T2[N.CLOSE_PATH] = 0, T2[N.QUAD_TO] = 4, T2[N.SMOOTH_QUAD_TO] = 2, T2[N.CURVE_TO] = 6, T2[N.SMOOTH_CURVE_TO] = 4, T2[N.ARC] = 7, T2);
    t.COMMAND_ARG_COUNTS = d, t.SVGPathData = N, t.SVGPathDataParser = _, t.encodeSVGPath = i2, Object.defineProperty(t, "__esModule", {
        value: !0
    });
}); //# sourceMappingURL=SVGPathData.cjs.map

},{}],"2YnJv":[function(require,module,exports) {
'use strict';
var redefine = require('../internals/redefine');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');
var flags = require('../internals/regexp-flags');
var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function() {
    return nativeToString.call({
        source: 'a',
        flags: 'b'
    }) != '/a/b';
});
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;
// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
}, {
    unsafe: true
});

},{"../internals/redefine":"QBTn4","../internals/an-object":"zIcM0","../internals/fails":"5YzzT","../internals/regexp-flags":"3CcHH"}],"4Ngo5":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return {
            value: undefined,
            done: true
        };
    }
    if (kind == 'keys') return {
        value: index,
        done: false
    };
    if (kind == 'values') return {
        value: target[index],
        done: false
    };
    return {
        value: [
            index,
            target[index]
        ],
        done: false
    };
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"../internals/to-indexed-object":"BdKP0","../internals/add-to-unscopables":"1U0HE","../internals/iterators":"7hiLE","../internals/internal-state":"41JRX","../internals/define-iterator":"1JGE9"}],"3GR48":[function(require,module,exports) {
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var ArrayIteratorMethods = require('../modules/es.array.iterator');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;
for(var COLLECTION_NAME in DOMIterables){
    var Collection = global[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
        }
        if (!CollectionPrototype[TO_STRING_TAG]) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
        if (DOMIterables[COLLECTION_NAME]) for(var METHOD_NAME in ArrayIteratorMethods){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
        }
    }
}

},{"../internals/global":"2QuID","../internals/dom-iterables":"2wjSj","../modules/es.array.iterator":"4Ngo5","../internals/create-non-enumerable-property":"7GpEi","../internals/well-known-symbol":"1p7x0"}],"3BzdB":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function(init) {
    return function Map1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"3D81C","../internals/collection-strong":"4kiye"}],"3D81C":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var InternalMetadataModule = require('../internals/internal-metadata');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isObject = require('../internals/is-object');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var setToStringTag = require('../internals/set-to-string-tag');
var inheritIfRequired = require('../internals/inherit-if-required');
module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {
    };
    var fixMethod = function(KEY) {
        var nativeMethod = NativePrototype[KEY];
        redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
        } : KEY == 'delete' ? function(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
        });
    };
    var REPLACE = isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
        new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.REQUIRED = true;
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {
        } : -0, 1) != instance;
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
            new NativeConstructor(iterable);
        });
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new NativeConstructor();
            var index = 5;
            while(index--)$instance[ADDER](index, index);
            return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (iterable != undefined) iterate(iterable, that[ADDER], {
                    that: that,
                    AS_ENTRIES: IS_MAP
                });
                return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    $({
        global: true,
        forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
};

},{"../internals/export":"7f5VM","../internals/global":"2QuID","../internals/is-forced":"3uGlO","../internals/redefine":"QBTn4","../internals/internal-metadata":"4W0bi","../internals/iterate":"mOi9h","../internals/an-instance":"iE3Kv","../internals/is-object":"6LaDF","../internals/fails":"5YzzT","../internals/check-correctness-of-iteration":"2GTab","../internals/set-to-string-tag":"62qxJ","../internals/inherit-if-required":"6ZeDw"}],"4W0bi":[function(require,module,exports) {
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var has = require('../internals/has');
var defineProperty = require('../internals/object-define-property').f;
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');
var METADATA = uid('meta');
var id = 0;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function() {
    return true;
};
var setMetadata = function(it) {
    defineProperty(it, METADATA, {
        value: {
            objectID: 'O' + ++id,
            weakData: {
            }
        }
    });
};
var fastKey = function(it, create) {
    // return a primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
    // return object ID
    }
    return it[METADATA].objectID;
};
var getWeakData = function(it, create) {
    if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
    // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
    return it;
};
var meta = module.exports = {
    REQUIRED: false,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

},{"../internals/hidden-keys":"5jCyL","../internals/is-object":"6LaDF","../internals/has":"5p6Hg","../internals/object-define-property":"2Spf8","../internals/uid":"5Yt6V","../internals/freezing":"5B7Fi"}],"5B7Fi":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({
    }));
});

},{"../internals/fails":"5YzzT"}],"4kiye":[function(require,module,exports) {
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var create = require('../internals/object-create');
var redefineAll = require('../internals/redefine-all');
var bind = require('../internals/function-bind-context');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var defineIterator = require('../internals/define-iterator');
var setSpecies = require('../internals/set-species');
var DESCRIPTORS = require('../internals/descriptors');
var fastKey = require('../internals/internal-metadata').fastKey;
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0
            });
            if (!DESCRIPTORS) that.size = 0;
            if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            // change existing entry
            if (entry) entry.value = value;
            else {
                state.last = entry = {
                    index: index = fastKey(key, true),
                    key: key,
                    value: value,
                    previous: previous = state.last,
                    next: undefined,
                    removed: false
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++;
                // add to index
                if (index !== 'F') state.index[index] = entry;
            }
            return that;
        };
        var getEntry = function(that, key) {
            var state = getInternalState(that);
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index];
            // frozen object case
            for(entry = state.first; entry; entry = entry.next){
                if (entry.key == key) return entry;
            }
        };
        redefineAll(C.prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while(entry){
                    entry.removed = true;
                    if (entry.previous) entry.previous = entry.previous.next = undefined;
                    delete data[entry.index];
                    entry = entry.next;
                }
                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            'delete': function(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.next;
                    var prev = entry.previous;
                    delete state.index[entry.index];
                    entry.removed = true;
                    if (prev) prev.next = next;
                    if (next) next.previous = prev;
                    if (state.first == entry) state.first = next;
                    if (state.last == entry) state.last = prev;
                    if (DESCRIPTORS) state.size--;
                    else that.size--;
                }
                return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach(callbackfn/* , that = undefined */ ) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;
                while(entry = entry ? entry.next : state.first){
                    boundFunction(entry.value, entry.key, this);
                    // revert to the last existing entry
                    while(entry && entry.removed)entry = entry.previous;
                }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key) {
                return !!getEntry(this, key);
            }
        });
        redefineAll(C.prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
            }
        } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
            }
        });
        if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
            get: function() {
                return getInternalState(this).size;
            }
        });
        return C;
    },
    setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.entries
        // https://tc39.es/ecma262/#sec-map.prototype.keys
        // https://tc39.es/ecma262/#sec-map.prototype.values
        // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
        // https://tc39.es/ecma262/#sec-set.prototype.entries
        // https://tc39.es/ecma262/#sec-set.prototype.keys
        // https://tc39.es/ecma262/#sec-set.prototype.values
        // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
        defineIterator(C, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind: kind,
                last: undefined
            });
        }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            // revert to the last existing entry
            while(entry && entry.removed)entry = entry.previous;
            // get next entry
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                // or finish the iteration
                state.target = undefined;
                return {
                    value: undefined,
                    done: true
                };
            }
            // return step by kind
            if (kind == 'keys') return {
                value: entry.key,
                done: false
            };
            if (kind == 'values') return {
                value: entry.value,
                done: false
            };
            return {
                value: [
                    entry.key,
                    entry.value
                ],
                done: false
            };
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
        // `{ Map, Set }.prototype[@@species]` accessors
        // https://tc39.es/ecma262/#sec-get-map-@@species
        // https://tc39.es/ecma262/#sec-get-set-@@species
        setSpecies(CONSTRUCTOR_NAME);
    }
};

},{"../internals/object-define-property":"2Spf8","../internals/object-create":"6Aq1Z","../internals/redefine-all":"45sdL","../internals/function-bind-context":"7CQyb","../internals/an-instance":"iE3Kv","../internals/iterate":"mOi9h","../internals/define-iterator":"1JGE9","../internals/set-species":"15qEM","../internals/descriptors":"3t0KX","../internals/internal-metadata":"4W0bi","../internals/internal-state":"41JRX"}],"1bxm5":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var aFunction = require('../internals/a-function');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');
var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;
// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function() {
    nativeApply(function() {
    });
});
// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
}, {
    apply: function apply(target, thisArgument, argumentsList) {
        aFunction(target);
        anObject(argumentsList);
        return nativeApply ? nativeApply(target, thisArgument, argumentsList) : functionApply.call(target, thisArgument, argumentsList);
    }
});

},{"../internals/export":"7f5VM","../internals/get-built-in":"6rniu","../internals/a-function":"79hCL","../internals/an-object":"zIcM0","../internals/fails":"5YzzT"}],"6ajRS":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var objectGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$({
    target: 'Reflect',
    stat: true,
    sham: !CORRECT_PROTOTYPE_GETTER
}, {
    getPrototypeOf: function getPrototypeOf(target) {
        return objectGetPrototypeOf(anObject(target));
    }
});

},{"../internals/export":"7f5VM","../internals/an-object":"zIcM0","../internals/object-get-prototype-of":"2c9KB","../internals/correct-prototype-getter":"6MiZW"}],"1a5hN":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.StackBlur = {
    }));
})(this, function(exports) {
    'use strict';
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj1) {
            return typeof obj1;
        };
        else _typeof = function(obj1) {
            return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
        };
        return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    /* eslint-disable no-bitwise -- used for calculations */ /* eslint-disable unicorn/prefer-query-selector -- aiming at
    backward-compatibility */ /**
  * StackBlur - a fast almost Gaussian Blur For Canvas
  *
  * In case you find this class useful - especially in commercial projects -
  * I am not totally unhappy for a small donation to my PayPal account
  * mario@quasimondo.de
  *
  * Or support me on flattr:
  * {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
  *
  * @module StackBlur
  * @author Mario Klingemann
  * Contact: mario@quasimondo.com
  * Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
  * Twitter: @quasimondo
  *
  * @copyright (c) 2010 Mario Klingemann
  *
  * Permission is hereby granted, free of charge, to any person
  * obtaining a copy of this software and associated documentation
  * files (the "Software"), to deal in the Software without
  * restriction, including without limitation the rights to use,
  * copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the
  * Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  * OTHER DEALINGS IN THE SOFTWARE.
  */ var mulTable = [
        512,
        512,
        456,
        512,
        328,
        456,
        335,
        512,
        405,
        328,
        271,
        456,
        388,
        335,
        292,
        512,
        454,
        405,
        364,
        328,
        298,
        271,
        496,
        456,
        420,
        388,
        360,
        335,
        312,
        292,
        273,
        512,
        482,
        454,
        428,
        405,
        383,
        364,
        345,
        328,
        312,
        298,
        284,
        271,
        259,
        496,
        475,
        456,
        437,
        420,
        404,
        388,
        374,
        360,
        347,
        335,
        323,
        312,
        302,
        292,
        282,
        273,
        265,
        512,
        497,
        482,
        468,
        454,
        441,
        428,
        417,
        405,
        394,
        383,
        373,
        364,
        354,
        345,
        337,
        328,
        320,
        312,
        305,
        298,
        291,
        284,
        278,
        271,
        265,
        259,
        507,
        496,
        485,
        475,
        465,
        456,
        446,
        437,
        428,
        420,
        412,
        404,
        396,
        388,
        381,
        374,
        367,
        360,
        354,
        347,
        341,
        335,
        329,
        323,
        318,
        312,
        307,
        302,
        297,
        292,
        287,
        282,
        278,
        273,
        269,
        265,
        261,
        512,
        505,
        497,
        489,
        482,
        475,
        468,
        461,
        454,
        447,
        441,
        435,
        428,
        422,
        417,
        411,
        405,
        399,
        394,
        389,
        383,
        378,
        373,
        368,
        364,
        359,
        354,
        350,
        345,
        341,
        337,
        332,
        328,
        324,
        320,
        316,
        312,
        309,
        305,
        301,
        298,
        294,
        291,
        287,
        284,
        281,
        278,
        274,
        271,
        268,
        265,
        262,
        259,
        257,
        507,
        501,
        496,
        491,
        485,
        480,
        475,
        470,
        465,
        460,
        456,
        451,
        446,
        442,
        437,
        433,
        428,
        424,
        420,
        416,
        412,
        408,
        404,
        400,
        396,
        392,
        388,
        385,
        381,
        377,
        374,
        370,
        367,
        363,
        360,
        357,
        354,
        350,
        347,
        344,
        341,
        338,
        335,
        332,
        329,
        326,
        323,
        320,
        318,
        315,
        312,
        310,
        307,
        304,
        302,
        299,
        297,
        294,
        292,
        289,
        287,
        285,
        282,
        280,
        278,
        275,
        273,
        271,
        269,
        267,
        265,
        263,
        261,
        259
    ];
    var shgTable = [
        9,
        11,
        12,
        13,
        13,
        14,
        14,
        15,
        15,
        15,
        15,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24
    ];
    /**
   * @param {string|HTMLImageElement} img
   * @param {string|HTMLCanvasElement} canvas
   * @param {Float} radius
   * @param {boolean} blurAlphaChannel
   * @param {boolean} useOffset
   * @param {boolean} skipStyles
   * @returns {undefined}
   */ function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
        if (typeof img === 'string') img = document.getElementById(img);
        if (!img || !('naturalWidth' in img)) return;
        var dimensionType = useOffset ? 'offset' : 'natural';
        var w = img[dimensionType + 'Width'];
        var h = img[dimensionType + 'Height'];
        if (typeof canvas === 'string') canvas = document.getElementById(canvas);
        if (!canvas || !('getContext' in canvas)) return;
        if (!skipStyles) {
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
        }
        canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, w, h);
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
        if (isNaN(radius) || radius < 1) return;
        if (blurAlphaChannel) processCanvasRGBA(canvas, 0, 0, w, h, radius);
        else processCanvasRGB(canvas, 0, 0, w, h, radius);
    }
    /**
   * @param {string|HTMLCanvasElement} canvas
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @throws {Error|TypeError}
   * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
   */ function getImageDataFromCanvas(canvas, topX, topY, width, height) {
        if (typeof canvas === 'string') canvas = document.getElementById(canvas);
        if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var context = canvas.getContext('2d');
        try {
            return context.getImageData(topX, topY, width, height);
        } catch (e) {
            throw new Error('unable to access image data: ' + e);
        }
    }
    /**
   * @param {HTMLCanvasElement} canvas
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {undefined}
   */ function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
        imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, topX, topY);
    }
    /**
   * @param {ImageData} imageData
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {ImageData}
   */ function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
        var pixels = imageData.data;
        var div = 2 * radius + 1; // const w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;
        var stackEnd;
        for(var i = 1; i < div; i++){
            stack = stack.next = new BlurStack();
            if (i === radiusPlus1) stackEnd = stack;
        }
        stack.next = stackStart;
        var stackIn = null, stackOut = null, yw = 0, yi = 0;
        var mulSum = mulTable[radius];
        var shgSum = shgTable[radius];
        for(var y = 0; y < height; y++){
            stack = stackStart;
            var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
            for(var _i = 0; _i < radiusPlus1; _i++){
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack.a = pa;
                stack = stack.next;
            }
            var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
            for(var _i2 = 1; _i2 < radiusPlus1; _i2++){
                var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
                var r = pixels[p], g = pixels[p + 1], b = pixels[p + 2], a = pixels[p + 3];
                var rbs = radiusPlus1 - _i2;
                rSum += (stack.r = r) * rbs;
                gSum += (stack.g = g) * rbs;
                bSum += (stack.b = b) * rbs;
                aSum += (stack.a = a) * rbs;
                rInSum += r;
                gInSum += g;
                bInSum += b;
                aInSum += a;
                stack = stack.next;
            }
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var x = 0; x < width; x++){
                var paInitial = aSum * mulSum >> shgSum;
                pixels[yi + 3] = paInitial;
                if (paInitial !== 0) {
                    var _a2 = 255 / paInitial;
                    pixels[yi] = (rSum * mulSum >> shgSum) * _a2;
                    pixels[yi + 1] = (gSum * mulSum >> shgSum) * _a2;
                    pixels[yi + 2] = (bSum * mulSum >> shgSum) * _a2;
                } else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
                rSum -= rOutSum;
                gSum -= gOutSum;
                bSum -= bOutSum;
                aSum -= aOutSum;
                rOutSum -= stackIn.r;
                gOutSum -= stackIn.g;
                bOutSum -= stackIn.b;
                aOutSum -= stackIn.a;
                var _p = x + radius + 1;
                _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
                rInSum += stackIn.r = pixels[_p];
                gInSum += stackIn.g = pixels[_p + 1];
                bInSum += stackIn.b = pixels[_p + 2];
                aInSum += stackIn.a = pixels[_p + 3];
                rSum += rInSum;
                gSum += gInSum;
                bSum += bInSum;
                aSum += aInSum;
                stackIn = stackIn.next;
                var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
                rOutSum += _r;
                gOutSum += _g;
                bOutSum += _b;
                aOutSum += _a;
                rInSum -= _r;
                gInSum -= _g;
                bInSum -= _b;
                aInSum -= _a;
                stackOut = stackOut.next;
                yi += 4;
            }
            yw += width;
        }
        for(var _x = 0; _x < width; _x++){
            yi = _x << 2;
            var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
            stack = stackStart;
            for(var _i3 = 0; _i3 < radiusPlus1; _i3++){
                stack.r = _pr;
                stack.g = _pg;
                stack.b = _pb;
                stack.a = _pa;
                stack = stack.next;
            }
            var yp = width;
            var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
            for(var _i4 = 1; _i4 <= radius; _i4++){
                yi = yp + _x << 2;
                var _rbs = radiusPlus1 - _i4;
                _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
                _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
                _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
                _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
                _rInSum += _pr;
                _gInSum += _pg;
                _bInSum += _pb;
                _aInSum += _pa;
                stack = stack.next;
                if (_i4 < heightMinus1) yp += width;
            }
            yi = _x;
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var _y = 0; _y < height; _y++){
                var _p2 = yi << 2;
                pixels[_p2 + 3] = _pa = _aSum * mulSum >> shgSum;
                if (_pa > 0) {
                    _pa = 255 / _pa;
                    pixels[_p2] = (_rSum * mulSum >> shgSum) * _pa;
                    pixels[_p2 + 1] = (_gSum * mulSum >> shgSum) * _pa;
                    pixels[_p2 + 2] = (_bSum * mulSum >> shgSum) * _pa;
                } else pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
                _rSum -= _rOutSum;
                _gSum -= _gOutSum;
                _bSum -= _bOutSum;
                _aSum -= _aOutSum;
                _rOutSum -= stackIn.r;
                _gOutSum -= stackIn.g;
                _bOutSum -= stackIn.b;
                _aOutSum -= stackIn.a;
                _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
                _rSum += _rInSum += stackIn.r = pixels[_p2];
                _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
                _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
                _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
                stackIn = stackIn.next;
                _rOutSum += _pr = stackOut.r;
                _gOutSum += _pg = stackOut.g;
                _bOutSum += _pb = stackOut.b;
                _aOutSum += _pa = stackOut.a;
                _rInSum -= _pr;
                _gInSum -= _pg;
                _bInSum -= _pb;
                _aInSum -= _pa;
                stackOut = stackOut.next;
                yi += width;
            }
        }
        return imageData;
    }
    /**
   * @param {HTMLCanvasElement} canvas
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {undefined}
   */ function processCanvasRGB(canvas, topX, topY, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
        imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, topX, topY);
    }
    /**
   * @param {ImageData} imageData
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {ImageData}
   */ function processImageDataRGB(imageData, topX, topY, width, height, radius) {
        var pixels = imageData.data;
        var div = 2 * radius + 1; // const w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;
        var stackEnd;
        for(var i = 1; i < div; i++){
            stack = stack.next = new BlurStack();
            if (i === radiusPlus1) stackEnd = stack;
        }
        stack.next = stackStart;
        var stackIn = null;
        var stackOut = null;
        var mulSum = mulTable[radius];
        var shgSum = shgTable[radius];
        var p, rbs;
        var yw = 0, yi = 0;
        for(var y = 0; y < height; y++){
            var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb;
            stack = stackStart;
            for(var _i5 = 0; _i5 < radiusPlus1; _i5++){
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack = stack.next;
            }
            var rInSum = 0, gInSum = 0, bInSum = 0;
            for(var _i6 = 1; _i6 < radiusPlus1; _i6++){
                p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
                rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
                gSum += (stack.g = pg = pixels[p + 1]) * rbs;
                bSum += (stack.b = pb = pixels[p + 2]) * rbs;
                rInSum += pr;
                gInSum += pg;
                bInSum += pb;
                stack = stack.next;
            }
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var x = 0; x < width; x++){
                pixels[yi] = rSum * mulSum >> shgSum;
                pixels[yi + 1] = gSum * mulSum >> shgSum;
                pixels[yi + 2] = bSum * mulSum >> shgSum;
                rSum -= rOutSum;
                gSum -= gOutSum;
                bSum -= bOutSum;
                rOutSum -= stackIn.r;
                gOutSum -= stackIn.g;
                bOutSum -= stackIn.b;
                p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
                rInSum += stackIn.r = pixels[p];
                gInSum += stackIn.g = pixels[p + 1];
                bInSum += stackIn.b = pixels[p + 2];
                rSum += rInSum;
                gSum += gInSum;
                bSum += bInSum;
                stackIn = stackIn.next;
                rOutSum += pr = stackOut.r;
                gOutSum += pg = stackOut.g;
                bOutSum += pb = stackOut.b;
                rInSum -= pr;
                gInSum -= pg;
                bInSum -= pb;
                stackOut = stackOut.next;
                yi += 4;
            }
            yw += width;
        }
        for(var _x2 = 0; _x2 < width; _x2++){
            yi = _x2 << 2;
            var _pr2 = pixels[yi], _pg2 = pixels[yi + 1], _pb2 = pixels[yi + 2], _rOutSum2 = radiusPlus1 * _pr2, _gOutSum2 = radiusPlus1 * _pg2, _bOutSum2 = radiusPlus1 * _pb2, _rSum2 = sumFactor * _pr2, _gSum2 = sumFactor * _pg2, _bSum2 = sumFactor * _pb2;
            stack = stackStart;
            for(var _i7 = 0; _i7 < radiusPlus1; _i7++){
                stack.r = _pr2;
                stack.g = _pg2;
                stack.b = _pb2;
                stack = stack.next;
            }
            var _rInSum2 = 0, _gInSum2 = 0, _bInSum2 = 0;
            for(var _i8 = 1, yp = width; _i8 <= radius; _i8++){
                yi = yp + _x2 << 2;
                _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
                _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
                _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
                _rInSum2 += _pr2;
                _gInSum2 += _pg2;
                _bInSum2 += _pb2;
                stack = stack.next;
                if (_i8 < heightMinus1) yp += width;
            }
            yi = _x2;
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var _y2 = 0; _y2 < height; _y2++){
                p = yi << 2;
                pixels[p] = _rSum2 * mulSum >> shgSum;
                pixels[p + 1] = _gSum2 * mulSum >> shgSum;
                pixels[p + 2] = _bSum2 * mulSum >> shgSum;
                _rSum2 -= _rOutSum2;
                _gSum2 -= _gOutSum2;
                _bSum2 -= _bOutSum2;
                _rOutSum2 -= stackIn.r;
                _gOutSum2 -= stackIn.g;
                _bOutSum2 -= stackIn.b;
                p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
                _rSum2 += _rInSum2 += stackIn.r = pixels[p];
                _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
                _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
                stackIn = stackIn.next;
                _rOutSum2 += _pr2 = stackOut.r;
                _gOutSum2 += _pg2 = stackOut.g;
                _bOutSum2 += _pb2 = stackOut.b;
                _rInSum2 -= _pr2;
                _gInSum2 -= _pg2;
                _bInSum2 -= _pb2;
                stackOut = stackOut.next;
                yi += width;
            }
        }
        return imageData;
    }
    /**
   *
   */ var BlurStack = /**
   * Set properties.
   */ function BlurStack1() {
        _classCallCheck(this, BlurStack1);
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
    };
    exports.BlurStack = BlurStack;
    exports.canvasRGB = processCanvasRGB;
    exports.canvasRGBA = processCanvasRGBA;
    exports.image = processImage;
    exports.imageDataRGB = processImageDataRGB;
    exports.imageDataRGBA = processImageDataRGBA;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}]},["uLt6d"], null, "parcelRequire0de8")

//# sourceMappingURL=canvg.536d583b.js.map
