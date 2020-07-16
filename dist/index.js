/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/main_background.png */ \"./src/images/main_background.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/name.png */ \"./src/images/name.png\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/guest_avatar.jpg */ \"./src/images/guest_avatar.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/somebody_say_yeah_cover.jpg */ \"./src/images/somebody_say_yeah_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../images/destroy_the_club_cover.jpg */ \"./src/images/destroy_the_club_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../images/fat_beat_cover.jpg */ \"./src/images/fat_beat_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../images/oldschool_rave_cover.jpg */ \"./src/images/oldschool_rave_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../images/boom_cover.jpg */ \"./src/images/boom_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../images/get_em_high_cover.jpg */ \"./src/images/get_em_high_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../images/play_icon.png */ \"./src/images/play_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../images/soundcloud_icon.png */ \"./src/images/soundcloud_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../images/facebook_icon.png */ \"./src/images/facebook_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../images/instagram_icon.png */ \"./src/images/instagram_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../images/youtube_icon.png */ \"./src/images/youtube_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ../images/twitter_icon.png */ \"./src/images/twitter_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ../images/spotify_icon.png */ \"./src/images/spotify_icon.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\n// Module\nexports.push([module.i, \"html {\\n  background: linear-gradient(171.8deg, #0e0e22 13.5%, #010104 78.6%);\\n  background-size: cover;\\n  overflow-x: hidden;\\n  margin: 0;\\n  padding: 0;\\n  background-attachment: fixed;\\n}\\n\\nbody {\\n  margin: 0 auto;\\n  background-size: 100%;\\n  background-repeat: no-repeat;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-attachment: fixed;\\n}\\n\\n* {\\n  -webkit-tap-highlight-color: transparent;\\n  -moz-user-select: none;\\n  -khtml-user-select: none;\\n  -webkit-user-select: none;\\n  user-select: none;\\n}\\n\\n.overall__container {\\n  display: flex;\\n  justify-content: center;\\n  margin: 0 auto;\\n  max-width: 1400px;\\n}\\n\\n.for_header_background_color {\\n  display: flex;\\n  justify-content: center;\\n  position: fixed;\\n  width: 100%;\\n  height: 103px;\\n  background: linear-gradient(#0e0e22 100%, rgba(0, 0, 0, 0) 100%);\\n}\\n\\n.header__container {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  height: 100px;\\n  border-bottom: 1px rgba(61, 101, 160, 0.7) solid;\\n  position: fixed;\\n  max-width: 1400px;\\n  background-color: #0E0E22;\\n  -moz-box-shadow: 0 50px 100px #0E0E22;\\n  -webkit-box-shadow: 0 50px 100px #0E0E22;\\n  box-shadow: 0 50px 100px #0E0E22;\\n  border-radius: 100px;\\n}\\n\\n.logo {\\n  display: flex;\\n  width: 305px;\\n  height: 100px;\\n  margin-left: 8px;\\n}\\n\\n.logo_icon {\\n  width: 80px;\\n  height: 80px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 80px;\\n  margin-top: 10px;\\n}\\n\\n.logo:hover {\\n  cursor: pointer;\\n}\\n\\n.logo_name {\\n  width: 220px;\\n  height: 55px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 220px;\\n  margin-top: 22px;\\n}\\n\\n.name:hover {\\n  cursor: pointer;\\n}\\n\\n.login_box {\\n  display: flex;\\n  width: 418px;\\n  height: 100px;\\n  margin-right: 27px;\\n}\\n\\n.guest_name {\\n  margin-top: 27px;\\n  margin-left: 30px;\\n  color: #a6adb7;\\n  font-family: Calibri;\\n  font-size: 110%;\\n  font-weight: bold;\\n}\\n\\n.guest {\\n  color: white;\\n  font-family: Calibri;\\n  font-size: 150%;\\n  font-weight: bold;\\n}\\n\\n.avatar {\\n  width: 64px;\\n  height: 64px;\\n  margin: 17px 0 0 30px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: cover;\\n  border-radius: 50%;\\n}\\n\\n.login_sign_up_button {\\n  width: 45%;\\n  height: 34px;\\n  text-align: center;\\n  padding-top: 10px;\\n  margin-left: 30px;\\n  margin-top: 27px;\\n  color: #e8f5ff;\\n  font-family: Calibri;\\n  font-size: 110%;\\n  font-weight: bold;\\n  border-radius: 46px;\\n  border: 2px #1347b7 solid;\\n  background-color: #1347b7;\\n  -webkit-transition: all 0.25s ease;\\n  -o-transition: all 0.25s ease;\\n  transition: all 0.25s ease;\\n}\\n\\n.login_sign_up_button:hover {\\n  cursor: pointer;\\n  background-color: rgba(19, 71, 183, 0);\\n}\\n\\n.for_nav_background_color {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  height: 180px;\\n  margin: 101px 0 0 0;\\n  position: fixed;\\n  background: linear-gradient(#0e0e22 35%, rgba(0, 0, 0, 0) 100%);\\n}\\n\\n.navigation__container {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  width: 60%;\\n  height: 70px;\\n  margin: 0 auto;\\n  position: fixed;\\n}\\n\\n.nav_menu_item {\\n  display: flex;\\n  flex-grow: 1;\\n  min-width: 107px;\\n  max-width: 107px;\\n  height: 45px;\\n  font-size: 110%;\\n  font-weight: bold;\\n  font-family: Calibri;\\n  color: #464f6a;\\n  justify-content: center;\\n  padding-top: 22px;\\n  -webkit-tap-highlight-color: transparent;\\n  -moz-user-select: none;\\n  -khtml-user-select: none;\\n  -webkit-user-select: none;\\n  user-select: none;\\n}\\n\\n.nav_hover {\\n  -webkit-transition: all 0.1s ease;\\n  -o-transition: all 0.1s ease;\\n  transition: all 0.1s ease;\\n}\\n\\n.nav_hover:hover {\\n  cursor: pointer;\\n  color: #848a94;\\n}\\n\\n.toggle_underline {\\n  color: white;\\n  border-bottom: 3px #1242a8 solid;\\n}\\n\\n.toggle_underline:hover {\\n  cursor: pointer;\\n}\\n\\n.main__container {\\n  position: initial;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  padding-top: 250px;\\n}\\n\\n.dynamic_content {\\n  width: 100%;\\n  min-height: 900px;\\n  position: initial;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n\\n.welcome {\\n  width: 100%;\\n  height: 80px;\\n  color: white;\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 370%;\\n  text-align: center;\\n  margin-bottom: 100px;\\n}\\n\\n.youtube_player {\\n  margin-top: -100px;\\n}\\n\\n.music_box {\\n  width: 318px;\\n  height: 350px;\\n  margin: 30px 15px;\\n  border: 1px #1c3474 solid;\\n  -moz-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  -webkit-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  background-color: rgba(0, 0, 0, 0.85);\\n}\\n\\n.for_alignment {\\n  width: 318px;\\n  height: 5px;\\n  margin: 30px 15px;\\n}\\n\\n.music_cover {\\n  width: 258px;\\n  height: 258px;\\n  background-size: cover;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: -30px;\\n}\\n\\n.music_box:nth-child(2) .music_cover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.music_box:nth-child(3) .music_cover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n}\\n\\n.music_box:nth-child(4) .music_cover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n\\n.music_box:nth-child(5) .music_cover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n}\\n\\n.music_box:nth-child(6) .music_cover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n}\\n\\n.music_box:nth-child(7) .music_cover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n}\\n\\n.track_name {\\n  color: rgba(252, 251, 255, 0.85);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 130%;\\n  text-align: center;\\n  margin-top: 15px;\\n}\\n\\n.play {\\n  margin: 10px auto;\\n  width: 50px;\\n  height: 50px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  background-size: cover;\\n  opacity: 0.75;\\n}\\n\\n.biography_page {\\n  width: 1395px;\\n  margin: 0 auto;\\n}\\n\\n.biography_text {\\n  margin-top: 50px;\\n  color: rgba(252, 251, 255, 0.85);\\n  font-family: Calibri;\\n  font-size: 110%;\\n  text-align: justify;\\n}\\n\\n.biography_name {\\n  color: rgba(54, 2, 255, 0.72);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 200%;\\n  text-align: start;\\n  margin-top: 50px;\\n}\\n\\n.biography_word {\\n  color: rgba(252, 251, 255, 0.85);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 250%;\\n  text-align: start;\\n}\\n\\n.videos {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  max-width: 1000px;\\n}\\n\\n.videos_player {\\n  margin: 20px;\\n}\\n\\n.contact_page {\\n  width: 1315px;\\n  margin-left: 80px;\\n}\\n\\n.contact_text {\\n  margin-top: 50px;\\n  color: rgba(252, 251, 255, 0.85);\\n  font-family: Calibri;\\n  font-size: 110%;\\n  text-align: start;\\n}\\n\\n.contact_name {\\n  color: rgba(54, 2, 255, 0.72);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 200%;\\n  text-align: start;\\n  margin-top: 50px;\\n}\\n\\n.contact_word {\\n  color: rgba(252, 251, 255, 0.85);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 250%;\\n  text-align: start;\\n}\\n\\n.footer {\\n  width: 100%;\\n  height: 70px;\\n}\\n\\n.socials {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.copyright {\\n  display: flex;\\n  justify-content: center;\\n  color: #979797;\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 130%;\\n}\\n\\n.social_item {\\n  width: 50px;\\n  height: 50px;\\n  background-size: cover;\\n}\\n\\n.social_item:hover {\\n  cursor: pointer;\\n}\\n\\n.soundcloud_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n}\\n\\n.facebook_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n}\\n\\n.instagram_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\n}\\n\\n.youtube_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n}\\n\\n.twitter_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n}\\n\\n.spotify_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/boom_cover.jpg":
/*!***********************************!*\
  !*** ./src/images/boom_cover.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/boom_cover.jpg\");\n\n//# sourceURL=webpack:///./src/images/boom_cover.jpg?");

/***/ }),

/***/ "./src/images/destroy_the_club_cover.jpg":
/*!***********************************************!*\
  !*** ./src/images/destroy_the_club_cover.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/destroy_the_club_cover.jpg\");\n\n//# sourceURL=webpack:///./src/images/destroy_the_club_cover.jpg?");

/***/ }),

/***/ "./src/images/facebook_icon.png":
/*!**************************************!*\
  !*** ./src/images/facebook_icon.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/facebook_icon.png\");\n\n//# sourceURL=webpack:///./src/images/facebook_icon.png?");

/***/ }),

/***/ "./src/images/fat_beat_cover.jpg":
/*!***************************************!*\
  !*** ./src/images/fat_beat_cover.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/fat_beat_cover.jpg\");\n\n//# sourceURL=webpack:///./src/images/fat_beat_cover.jpg?");

/***/ }),

/***/ "./src/images/get_em_high_cover.jpg":
/*!******************************************!*\
  !*** ./src/images/get_em_high_cover.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/get_em_high_cover.jpg\");\n\n//# sourceURL=webpack:///./src/images/get_em_high_cover.jpg?");

/***/ }),

/***/ "./src/images/guest_avatar.jpg":
/*!*************************************!*\
  !*** ./src/images/guest_avatar.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/guest_avatar.jpg\");\n\n//# sourceURL=webpack:///./src/images/guest_avatar.jpg?");

/***/ }),

/***/ "./src/images/instagram_icon.png":
/*!***************************************!*\
  !*** ./src/images/instagram_icon.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/instagram_icon.png\");\n\n//# sourceURL=webpack:///./src/images/instagram_icon.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo.png\");\n\n//# sourceURL=webpack:///./src/images/logo.png?");

/***/ }),

/***/ "./src/images/main_background.png":
/*!****************************************!*\
  !*** ./src/images/main_background.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/main_background.png\");\n\n//# sourceURL=webpack:///./src/images/main_background.png?");

/***/ }),

/***/ "./src/images/name.png":
/*!*****************************!*\
  !*** ./src/images/name.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/name.png\");\n\n//# sourceURL=webpack:///./src/images/name.png?");

/***/ }),

/***/ "./src/images/oldschool_rave_cover.jpg":
/*!*********************************************!*\
  !*** ./src/images/oldschool_rave_cover.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/oldschool_rave_cover.jpg\");\n\n//# sourceURL=webpack:///./src/images/oldschool_rave_cover.jpg?");

/***/ }),

/***/ "./src/images/play_icon.png":
/*!**********************************!*\
  !*** ./src/images/play_icon.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/play_icon.png\");\n\n//# sourceURL=webpack:///./src/images/play_icon.png?");

/***/ }),

/***/ "./src/images/somebody_say_yeah_cover.jpg":
/*!************************************************!*\
  !*** ./src/images/somebody_say_yeah_cover.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/somebody_say_yeah_cover.jpg\");\n\n//# sourceURL=webpack:///./src/images/somebody_say_yeah_cover.jpg?");

/***/ }),

/***/ "./src/images/soundcloud_icon.png":
/*!****************************************!*\
  !*** ./src/images/soundcloud_icon.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/soundcloud_icon.png\");\n\n//# sourceURL=webpack:///./src/images/soundcloud_icon.png?");

/***/ }),

/***/ "./src/images/spotify_icon.png":
/*!*************************************!*\
  !*** ./src/images/spotify_icon.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/spotify_icon.png\");\n\n//# sourceURL=webpack:///./src/images/spotify_icon.png?");

/***/ }),

/***/ "./src/images/twitter_icon.png":
/*!*************************************!*\
  !*** ./src/images/twitter_icon.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/twitter_icon.png\");\n\n//# sourceURL=webpack:///./src/images/twitter_icon.png?");

/***/ }),

/***/ "./src/images/youtube_icon.png":
/*!*************************************!*\
  !*** ./src/images/youtube_icon.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/youtube_icon.png\");\n\n//# sourceURL=webpack:///./src/images/youtube_icon.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dynamicElements */ \"./src/js/dynamicElements.js\");\n\n\n\n\n\n\n\n\nlet menuItems = document.querySelectorAll('.nav_menu_item');\nlet navigationContainer = document.getElementById('navigation__container');\nlet dynamicContent = document.querySelector('.dynamic_content');\n\nlet deleteNavUnderline = () => {\n    menuItems.forEach(function(item){\n        item.classList.remove('toggle_underline');\n        item.classList.add('nav_hover');\n    });\n};\n\nlet clearAll = () => {\n    dynamicContent.innerHTML = ``;\n};\n\ndynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"homepage\"];\ndynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"footer\"]\n\nnavigationContainer.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    window.scroll(0,0);\n    if (e.target.classList.contains('nav_menu_item')) {\n        clearAll();\n        deleteNavUnderline();\n        e.target.classList.add('toggle_underline');\n        e.target.classList.remove('nav_hover');\n    }\n\n    if(e.target.classList.contains('homepage')) {\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"homepage\"];\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"footer\"]\n    }\n\n    if(e.target.classList.contains('music')) {\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"music\"];\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"footer\"]\n    }\n\n    if(e.target.classList.contains('biography')) {\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"biography\"];\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"footer\"]\n    }\n\n    if(e.target.classList.contains('video')) {\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"video\"];\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"footer\"]\n    }\n\n    if(e.target.classList.contains('contact')) {\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"contact\"];\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_1__[\"footer\"]\n    }\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dynamicElements.js":
/*!***********************************!*\
  !*** ./src/js/dynamicElements.js ***!
  \***********************************/
/*! exports provided: homepage, music, biography, video, contact, footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homepage\", function() { return homepage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"music\", function() { return music; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"biography\", function() { return biography; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"video\", function() { return video; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\nlet homepage = `\n    <div class=\"welcome\">Welcome to Nevillar Official Website</div>\n    <iframe class=\"youtube_player\" width=\"854\" height=\"480\" \n    src=\"https://www.youtube.com/embed/d6RPjRH7CsU\" frameborder=\"0\" \n    allow=\"accelerometer;  autoplay; encrypted-media; gyroscope; \n    picture-in-picture\" allowfullscreen></iframe>\n`;\n\nlet music = `\n    <div class=\"welcome\">Welcome to Nevillar Official Website</div>\n    <div class=\"music_box\">\n        <div class=\"music_cover\"></div>\n        <div class=\"track_name\">Nevillar - Somebody Say Yeah</div>\n        <div class=\"play\"></div>\n    </div>\n    <div class=\"music_box\">\n        <div class=\"music_cover\"></div>\n        <div class=\"track_name\">Nevillar - Destroy The Club</div>\n        <div class=\"play\"></div>\n    </div>\n    <div class=\"music_box\">\n        <div class=\"music_cover\"></div>\n        <div class=\"track_name\">Nevillar - Fat Beat</div>\n        <div class=\"play\"></div>\n    </div>\n    <div class=\"music_box\">\n        <div class=\"music_cover\"></div>\n        <div class=\"track_name\">Nevillar - Oldschool Rave</div>\n        <div class=\"play\"></div>\n    </div>\n    <div class=\"music_box\">\n        <div class=\"music_cover\"></div>\n        <div class=\"track_name\">Nevillar - Boom</div>\n        <div class=\"play\"></div>\n    </div>\n    <div class=\"music_box\">\n        <div class=\"music_cover\"></div>\n        <div class=\"track_name\">Nevillar - Get Em High</div>\n        <div class=\"play\"></div>\n    </div>\n    <div class=\"for_alignment\"></div>\n    <div class=\"for_alignment\"></div>\n`;\n\nlet biography = `\n    <div class=\"biography_page\">\n        <div class=\"biography_name\">Nevillar</div>\n        <div class=\"biography_word\">BIOGRAPHY</div>\n        <div class=\"biography_text\">\n                            DJ and producer Nevillar bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla. <br> Bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla. <br> Bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla.\n        </div>\n    </div>\n`;\n\nlet video = ` \n <div class=\"videos\">\n    <iframe class=\"videos_player\" width=\"854\" height=\"480\" \n    src=\"https://www.youtube.com/embed/d6RPjRH7CsU\" frameborder=\"0\" \n    allow=\"accelerometer;  autoplay; encrypted-media; gyroscope; \n    picture-in-picture\" allowfullscreen></iframe>\n    \n    <iframe class=\"videos_player\" width=\"340\" height=\"191\" src=\"https://www.youtube.com/embed/_IQkCubKDXs\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    \n<iframe class=\"videos_player\" width=\"340\" height=\"191\" src=\"https://www.youtube.com/embed/8E-AoLs40og\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    \n    <iframe class=\"videos_player\" width=\"340\" height=\"191\" src=\"https://www.youtube.com/embed/R02BfaImkXs\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    \n    <iframe class=\"videos_player\" width=\"340\" height=\"191\" src=\"https://www.youtube.com/embed/cAuOlS3QxHg\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    \n        <iframe class=\"videos_player\" width=\"340\" height=\"191\" src=\"https://www.youtube.com/embed/bOAf9CmaUFo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n`;\n\nlet contact = `\n        <div class=\"contact_page\">\n        <div class=\"contact_name\">Nevillar</div>\n        <div class=\"contact_word\">CONTACT</div>\n        <div class=\"contact_text\">\n            Management: <br>\n            <a href=\"mailto:nevill4r@gmail.com\">nevill4r@gmail.com</a> <br><br><br>\n            Press & PR: <br>\n            <a href=\"mailto:nevill4r@gmail.com\">nevill4r@gmail.com</a><br><br><br>\n            Phone: <br>\n            <a href=\"tel:+375293591179\">+375-29-359-11-79</a>\n        </div>\n    </div>\n`;\n\nlet footer = `\n <footer class=\"footer\">\n    <div class=\"socials\">\n        <a class=\"social_item soundcloud_link\" href=\"https://soundcloud.com/nevillar\"></a>\n        <a class=\"social_item facebook_link\" href=\"https://www.facebook.com/Nevillar\"></a>\n        <a class=\"social_item instagram_link\" href=\"https://www.instagram.com/nevillar\"></a>\n        <a class=\"social_item youtube_link\" href=\"https://www.youtube.com/channel/UCn-iQbO2o3NA1jQObiOvY1w?view_as=subscriber\"></a>\n        <a class=\"social_item twitter_link\" href=\"https://twitter.com/nevill4r\"></a>\n        <a class=\"social_item spotify_link\" href=\"https://open.spotify.com/artist/1OjL7vV1j8HPenNxeQcTnz\"></a>\n    </div>\n    <div class=\"copyright\">© 2020 Nevillar</div>\n</footer>\n`;\n\n//# sourceURL=webpack:///./src/js/dynamicElements.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });