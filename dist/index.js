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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loginRegistrationForm.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loginRegistrationForm.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".login-form {\\n  position: fixed;\\n  width: 70%;\\n  max-width: 330px;\\n  padding: 30px;\\n  z-index: 2;\\n  margin: auto;\\n  left: 0;\\n  right: 0;\\n  top: 25%;\\n  border: 1px #1c3474 solid;\\n  -moz-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  -webkit-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n}\\n\\n.registration-form {\\n  position: fixed;\\n  width: 70%;\\n  max-width: 330px;\\n  padding: 30px;\\n  z-index: 2;\\n  margin: auto;\\n  left: 0;\\n  right: 0;\\n  top: 25%;\\n  border: 1px #1c3474 solid;\\n  -moz-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  -webkit-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n}\\n\\n.headline {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0 auto;\\n}\\n\\n.country-sel {\\n  height: 29px;\\n  width: 100%;\\n  margin-bottom: 8px;\\n  border-radius: 29px;\\n}\\n\\n.field-select {\\n  height: 29px;\\n  line-height: 19px;\\n  margin: 0;\\n  padding: 0 5px;\\n  width: 98%;\\n  border: 1px solid #ABADB3;\\n  font-size: larger;\\n  border-radius: 29px;\\n  background: linear-gradient(white -8%, #929292);\\n  outline: none;\\n}\\n\\n.text-field {\\n  height: 29px;\\n  margin: 0;\\n  padding: 0 10px;\\n  width: 93%;\\n  border: 1px solid #ABADB3;\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: larger;\\n  background: linear-gradient(#dfdfdf -8%, #c3c3c3);\\n  border-radius: 29px;\\n  outline: none;\\n}\\n\\ninput:focus::-webkit-input-placeholder {\\n  color: transparent;\\n}\\n\\ninput:focus:-moz-placeholder {\\n  color: transparent;\\n}\\n\\ninput:focus::-moz-placeholder {\\n  color: transparent;\\n}\\n\\ninput:focus:-ms-input-placeholder {\\n  color: transparent;\\n}\\n\\n.label-text {\\n  font-size: x-large;\\n  cursor: pointer;\\n}\\n\\n.check-mark {\\n  width: 29px;\\n  cursor: pointer;\\n  transform: scale(1.5);\\n  background: linear-gradient(#dfdfdf -8%, #c3c3c3);\\n}\\n\\n.registration-login {\\n  width: 100%;\\n  height: 30px;\\n}\\n\\n.buttons-submit {\\n  display: inline-block;\\n  width: 47%;\\n  height: 30px;\\n  text-align: center;\\n  vertical-align: middle;\\n  margin: 0 auto;\\n}\\n\\n.buttons-login {\\n  display: inline-block;\\n  height: 30px;\\n  text-align: center;\\n  vertical-align: middle;\\n  float: right;\\n  margin-right: 2px;\\n}\\n\\n.log-sub-link:disabled,\\n.log-sub-link[disabled] {\\n  border: 1px solid #999999;\\n  background: #cccccc;\\n  color: #666666;\\n}\\n\\n.log-sub-link {\\n  display: block;\\n  width: 130px;\\n  height: 30px;\\n  background-size: 175px 30px;\\n  border: none;\\n  outline: none;\\n  font-family: Calibri;\\n  font-weight: bold;\\n  color: #acacac;\\n  background: linear-gradient(#908f00 -8%, #7a3300);\\n  font-size: 20px;\\n  border-radius: 29px;\\n  -webkit-transition: all 0.25s ease;\\n  -o-transition: all 0.25s ease;\\n  transition: all 0.25s ease;\\n}\\n\\n.log-sub-link:hover {\\n  cursor: pointer;\\n  color: #ebebeb;\\n}\\n\\n.reg-log-link {\\n  background: linear-gradient(#5a1eff -8%, #0700ba);\\n  background-size: 175px 30px;\\n  display: table-cell;\\n  vertical-align: middle;\\n  text-decoration: none;\\n  width: 130px;\\n  height: 30px;\\n  font-family: Calibri;\\n  font-weight: bold;\\n  color: #acacac;\\n  font-size: 20px;\\n  border-radius: 29px;\\n  -webkit-transition: all 0.25s ease;\\n  -o-transition: all 0.25s ease;\\n  transition: all 0.25s ease;\\n}\\n\\n.reg-log-link:hover {\\n  cursor: pointer;\\n  color: #ebebeb;\\n}\\n\\n.notice {\\n  display: none;\\n  color: red;\\n  font-size: small;\\n  font-style: italic;\\n  height: 29px;\\n  padding-bottom: 25px;\\n}\\n\\n.notice-display {\\n  display: inline-block;\\n}\\n\\n.label-text {\\n  color: #8b8b8b;\\n  padding-left: 3px;\\n  font-family: Calibri;\\n  font-weight: bold;\\n}\\n\\n.choose-sex {\\n  transform: scale(1.3);\\n}\\n\\n.choose-sex:hover {\\n  cursor: pointer;\\n}\\n\\n.checking-mistake {\\n  -webkit-animation: color-change 3s infinite;\\n  -moz-animation: color-change 3s infinite;\\n  -o-animation: color-change 3s infinite;\\n  -ms-animation: color-change 3s infinite;\\n  animation: color-change 3s infinite;\\n}\\n\\n@-webkit-keyframes color-change {\\n  0% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n  50% {\\n    border: 2px solid #ffffff;\\n    border-radius: 29px;\\n  }\\n  100% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n}\\n@-moz-keyframes color-change {\\n  0% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n  50% {\\n    border: 2px solid #ffffff;\\n    border-radius: 29px;\\n  }\\n  100% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n}\\n@-ms-keyframes color-change {\\n  0% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n  50% {\\n    border: 2px solid #ffffff;\\n    border-radius: 29px;\\n  }\\n  100% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n}\\n@-o-keyframes color-change {\\n  0% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n  50% {\\n    border: 2px solid #ffffff;\\n    border-radius: 29px;\\n  }\\n  100% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n}\\n@keyframes color-change {\\n  0% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n  50% {\\n    border: 2px solid #ffffff;\\n    border-radius: 29px;\\n  }\\n  100% {\\n    border: 2px solid red;\\n    border-radius: 29px;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/loginRegistrationForm.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/main_background.png */ \"./src/images/main_background.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/name.png */ \"./src/images/name.png\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/guest_avatar.jpg */ \"./src/images/guest_avatar.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/somebody_say_yeah_cover.jpg */ \"./src/images/somebody_say_yeah_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../images/destroy_the_club_cover.jpg */ \"./src/images/destroy_the_club_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../images/fat_beat_cover.jpg */ \"./src/images/fat_beat_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../images/oldschool_rave_cover.jpg */ \"./src/images/oldschool_rave_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../images/boom_cover.jpg */ \"./src/images/boom_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../images/get_em_high_cover.jpg */ \"./src/images/get_em_high_cover.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../images/play_icon.png */ \"./src/images/play_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../images/soundcloud_icon.png */ \"./src/images/soundcloud_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../images/facebook_icon.png */ \"./src/images/facebook_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../images/instagram_icon.png */ \"./src/images/instagram_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../images/youtube_icon.png */ \"./src/images/youtube_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ../images/twitter_icon.png */ \"./src/images/twitter_icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ../images/spotify_icon.png */ \"./src/images/spotify_icon.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\n// Module\nexports.push([module.i, \"html {\\n  position: relative;\\n}\\n\\nhtml::before {\\n  background: linear-gradient(171.8deg, #0e0e22 13.5%, #010104 78.6%);\\n  background-size: cover;\\n  overflow-x: hidden;\\n  margin: 0;\\n  padding: 0;\\n  content: \\\" \\\";\\n  height: 100%;\\n  left: 0;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  will-change: transform;\\n  z-index: -1;\\n}\\n\\nbody {\\n  position: relative;\\n}\\n\\nbody::before {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 100%;\\n  background-repeat: no-repeat;\\n  content: \\\" \\\";\\n  height: 100%;\\n  margin: 0 auto;\\n  left: 0;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  will-change: transform;\\n  z-index: -1;\\n}\\n\\n* {\\n  -webkit-tap-highlight-color: transparent;\\n  -moz-user-select: none;\\n  -khtml-user-select: none;\\n  -webkit-user-select: none;\\n  user-select: none;\\n}\\n\\n.shadow_body {\\n  position: fixed;\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n  background: #000000;\\n  opacity: 0.95;\\n  z-index: 1;\\n}\\n\\n.switch_off {\\n  display: none;\\n}\\n\\n.overall__container {\\n  display: flex;\\n  justify-content: center;\\n  margin: 0 auto;\\n  max-width: 1400px;\\n}\\n\\n.for_header_background_color {\\n  display: flex;\\n  justify-content: center;\\n  position: fixed;\\n  width: 100%;\\n  height: 103px;\\n  background: linear-gradient(#0e0e22 100%, rgba(0, 0, 0, 0) 100%);\\n}\\n\\n.header__container {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  height: 100px;\\n  border-bottom: 1px rgba(61, 101, 160, 0.7) solid;\\n  position: fixed;\\n  max-width: 1400px;\\n  background-color: #0E0E22;\\n  -moz-box-shadow: 0 50px 100px #0E0E22;\\n  -webkit-box-shadow: 0 50px 100px #0E0E22;\\n  box-shadow: 0 50px 100px #0E0E22;\\n  border-radius: 100px;\\n}\\n\\n.logo {\\n  display: flex;\\n  width: 305px;\\n  height: 100px;\\n  margin-left: 8px;\\n}\\n\\n.logo_icon {\\n  width: 80px;\\n  height: 80px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 80px;\\n  margin-top: 10px;\\n}\\n\\n.logo:hover {\\n  cursor: pointer;\\n}\\n\\n.logo_name {\\n  width: 220px;\\n  height: 55px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 220px;\\n  margin-top: 22px;\\n}\\n\\n.name:hover {\\n  cursor: pointer;\\n}\\n\\n.login_box {\\n  display: flex;\\n  width: 418px;\\n  height: 100px;\\n  margin-right: 27px;\\n}\\n\\n.guest_name {\\n  margin-top: 27px;\\n  margin-left: 30px;\\n  color: #a6adb7;\\n  font-family: Calibri;\\n  font-size: 110%;\\n  font-weight: bold;\\n}\\n\\n.guest {\\n  color: white;\\n  font-family: Calibri;\\n  font-size: 150%;\\n  font-weight: bold;\\n}\\n\\n.avatar {\\n  width: 64px;\\n  height: 64px;\\n  margin: 17px 0 0 30px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: cover;\\n  border-radius: 50%;\\n}\\n\\n.login_sign_up_button {\\n  width: 45%;\\n  height: 34px;\\n  text-align: center;\\n  padding-top: 10px;\\n  margin-left: 30px;\\n  margin-top: 27px;\\n  color: #e8f5ff;\\n  font-family: Calibri;\\n  font-size: 110%;\\n  font-weight: bold;\\n  border-radius: 46px;\\n  border: 2px #1347b7 solid;\\n  background-color: #1347b7;\\n  -webkit-transition: all 0.25s ease;\\n  -o-transition: all 0.25s ease;\\n  transition: all 0.25s ease;\\n}\\n\\n.login_sign_up_button:hover {\\n  cursor: pointer;\\n  background-color: rgba(19, 71, 183, 0);\\n}\\n\\n.for_nav_background_color {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  height: 180px;\\n  margin: 101px 0 0 0;\\n  position: fixed;\\n  background: linear-gradient(#0e0e22 35%, rgba(0, 0, 0, 0) 100%);\\n}\\n\\n.navigation__container {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  width: 60%;\\n  height: 70px;\\n  margin: 0 auto;\\n  position: fixed;\\n}\\n\\n.nav_menu_item {\\n  display: flex;\\n  flex-grow: 1;\\n  min-width: 107px;\\n  max-width: 107px;\\n  height: 45px;\\n  font-size: 110%;\\n  font-weight: bold;\\n  font-family: Calibri;\\n  color: #464f6a;\\n  justify-content: center;\\n  padding-top: 22px;\\n  -webkit-tap-highlight-color: transparent;\\n  -moz-user-select: none;\\n  -khtml-user-select: none;\\n  -webkit-user-select: none;\\n  user-select: none;\\n}\\n\\n.nav_hover {\\n  -webkit-transition: all 0.1s ease;\\n  -o-transition: all 0.1s ease;\\n  transition: all 0.1s ease;\\n}\\n\\n.nav_hover:hover {\\n  cursor: pointer;\\n  color: #848a94;\\n}\\n\\n.toggle_underline {\\n  color: white;\\n  border-bottom: 3px #1242a8 solid;\\n}\\n\\n.toggle_underline:hover {\\n  cursor: pointer;\\n}\\n\\n.main__container {\\n  width: 100%;\\n  position: initial;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  padding-top: 250px;\\n}\\n\\n.dynamic_content {\\n  width: 80%;\\n  min-height: 900px;\\n  position: initial;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  margin-top: 32px;\\n}\\n\\n.welcome {\\n  width: 100%;\\n  height: 80px;\\n  color: white;\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 370%;\\n  text-align: center;\\n  margin-bottom: 120px;\\n  margin-top: -30px;\\n}\\n\\n.youtube_player {\\n  margin-top: -100px;\\n}\\n\\n.music_box {\\n  width: 318px;\\n  height: 390px;\\n  margin: 30px 15px;\\n  border: 1px #1c3474 solid;\\n  -moz-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  -webkit-box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  box-shadow: 0 0 10px #1c3474, inset 0 0 30px #1c3474;\\n  background-color: rgba(0, 0, 0, 0.85);\\n  -webkit-transition: all 0.2s ease;\\n  -o-transition: all 0.2s ease;\\n  transition: all 0.2s ease;\\n}\\n\\n.music_box:hover {\\n  cursor: pointer;\\n  border: 1px #1e3ce1 solid;\\n  -moz-box-shadow: 0 0 10px #1e3ce1, inset 0 0 30px #1e3ce1;\\n  -webkit-box-shadow: 0 0 10px #1e3ce1, inset 0 0 30px #1e3ce1;\\n  box-shadow: 0 0 10px #1e3ce1, inset 0 0 30px #1e3ce1;\\n  background-color: rgba(0, 0, 0, 0.75);\\n}\\n\\n.for_alignment {\\n  width: 318px;\\n  height: 5px;\\n  margin: 30px 15px;\\n}\\n\\n.music_cover {\\n  width: 258px;\\n  height: 258px;\\n  background-size: cover;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: -30px;\\n  -moz-box-shadow: inset 0 0 300px rgba(0, 0, 0, 0.66);\\n  -webkit-box-shadow: inset 0 0 300px rgba(0, 0, 0, 0.66);\\n  box-shadow: inset 0 0 300px rgba(0, 0, 0, 0.66);\\n  -webkit-transition: all 0.2s ease;\\n  -o-transition: all 0.2s ease;\\n  transition: all 0.2s ease;\\n}\\n\\n.music_cover:hover {\\n  -moz-box-shadow: inset 0 0 300px rgba(0, 0, 0, 0);\\n  -webkit-box-shadow: inset 0 0 300px rgba(0, 0, 0, 0);\\n  box-shadow: inset 0 0 300px rgba(0, 0, 0, 0);\\n}\\n\\n.music_cover_hover {\\n  -moz-box-shadow: inset 0 0 300px rgba(0, 0, 0, 0);\\n  -webkit-box-shadow: inset 0 0 300px rgba(0, 0, 0, 0);\\n  box-shadow: inset 0 0 300px rgba(0, 0, 0, 0);\\n}\\n\\n.somebody_say_yeah {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.destroy_the_club {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n}\\n\\n.fat_beat {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n\\n.oldschool_rave {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n}\\n\\n.boom {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n}\\n\\n.get_em_high {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n}\\n\\n.track_name {\\n  color: rgba(252, 251, 255, 0.85);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 130%;\\n  text-align: center;\\n  margin-top: 15px;\\n  margin-bottom: 15px;\\n  -webkit-transition: all 0.2s ease;\\n  -o-transition: all 0.2s ease;\\n  transition: all 0.2s ease;\\n}\\n\\n.track_name_hover {\\n  color: white;\\n}\\n\\n.play {\\n  margin: 30px auto;\\n  width: 50px;\\n  height: 50px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  background-size: cover;\\n  opacity: 0.75;\\n  transform: scale(1.2);\\n  -webkit-transition: all 0.3s ease;\\n  -o-transition: all 0.3s ease;\\n  transition: all 0.3s ease;\\n}\\n\\n.play:hover {\\n  transform: scale(1.4) rotate(360deg);\\n  opacity: 1;\\n}\\n\\n.spotify_iframe {\\n  margin: 0 auto;\\n  width: 258px;\\n  height: 80px;\\n}\\n\\n.spotify_iframe:hover {\\n  cursor: pointer;\\n}\\n\\n.biography_page {\\n  flex-wrap: wrap;\\n  width: 100%;\\n  margin: 0 auto;\\n}\\n\\n.biography_text {\\n  margin-top: 50px;\\n  color: rgba(252, 251, 255, 0.85);\\n  font-family: Calibri;\\n  font-size: 110%;\\n  text-align: justify;\\n}\\n\\n.biography_name {\\n  color: rgba(54, 2, 255, 0.72);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 200%;\\n  text-align: start;\\n  margin-top: 50px;\\n}\\n\\n.biography_word {\\n  color: rgba(252, 251, 255, 0.85);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 250%;\\n  text-align: start;\\n}\\n\\n.videos {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  justify-content: center;\\n  max-width: 1000px;\\n}\\n\\n.main_video {\\n  margin: 20px;\\n}\\n\\n.videos_player {\\n  margin: 20px;\\n  width: 407px;\\n  height: 229px;\\n}\\n\\n.contact_page {\\n  width: 100%;\\n  margin-right: 80px;\\n}\\n\\n.contact_text {\\n  margin-top: 50px;\\n  color: rgba(252, 251, 255, 0.85);\\n  font-family: Calibri;\\n  font-size: 110%;\\n  text-align: start;\\n}\\n\\n.contact_name {\\n  color: rgba(54, 2, 255, 0.72);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 200%;\\n  text-align: start;\\n  margin-top: 50px;\\n}\\n\\n.contact_word {\\n  color: rgba(252, 251, 255, 0.85);\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 250%;\\n  text-align: start;\\n}\\n\\n.footer {\\n  width: 100%;\\n  height: 70px;\\n  margin: 40px;\\n}\\n\\n.socials {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.copyright {\\n  display: flex;\\n  justify-content: center;\\n  color: #979797;\\n  font-weight: bold;\\n  font-family: Calibri;\\n  font-size: 130%;\\n}\\n\\n.social_item {\\n  width: 40px;\\n  height: 40px;\\n  background-size: cover;\\n}\\n\\n.social_item:hover {\\n  cursor: pointer;\\n}\\n\\n.soundcloud_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n}\\n\\n.facebook_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n}\\n\\n.instagram_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\n}\\n\\n.youtube_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n}\\n\\n.twitter_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n}\\n\\n.spotify_link {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_loginRegistrationForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/loginRegistrationForm.scss */ \"./src/styles/loginRegistrationForm.scss\");\n/* harmony import */ var _styles_loginRegistrationForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_loginRegistrationForm_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dynamicElements */ \"./src/js/dynamicElements.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuItems = document.querySelectorAll('.nav_menu_item');\r\nconst navigationContainer = document.getElementById('navigation__container');\r\nconst dynamicContent = document.querySelector('.dynamic_content');\r\nconst logo = document.querySelector('.logo');\r\nconst loginSignUpButton = document.querySelector('.login_sign_up_button');\r\nconst shadowBody = document.querySelector('.shadow_body');\r\n\r\nlet deleteNavUnderline = () => {\r\n    menuItems.forEach(function(item){\r\n        item.classList.remove('toggle_underline');\r\n        item.classList.add('nav_hover');\r\n    });\r\n};\r\n\r\nlet clearAll = () => {\r\n    dynamicContent.innerHTML = ``;\r\n};\r\n\r\ndynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"homepage\"];\r\ndynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"footer\"];\r\n\r\nlogo.addEventListener(\"click\", () => {\r\n    location.reload();\r\n});\r\n\r\nnavigationContainer.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    window.scroll(0, 0);\r\n\r\n    if (e.target.classList.contains('nav_menu_item')) {\r\n        clearAll();\r\n        deleteNavUnderline();\r\n        e.target.classList.add('toggle_underline');\r\n        e.target.classList.remove('nav_hover');\r\n    }\r\n\r\n    if(e.target.classList.contains('homepage')) {\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"homepage\"];\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"footer\"]\r\n    }\r\n\r\n    if(e.target.classList.contains('music')) {\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"music\"];\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"footer\"];\r\n\r\n        document.body.addEventListener(\"mouseover\", (e) => {\r\n\r\n            let allMusicCovers = document.querySelectorAll('.music_cover');\r\n            let allTrackNames = document.querySelectorAll('.track_name');\r\n\r\n            if (e.target.classList.contains('music_box')) {\r\n                e.target.firstElementChild.classList.add('music_cover_hover');\r\n                e.target.childNodes[1].nextElementSibling.classList.add('track_name_hover');\r\n            } else if (e.target.classList.contains('track_name')) {\r\n                   e.target.parentNode.childNodes[1].nextElementSibling.classList.add('track_name_hover');\r\n            } else if (e.target.classList.contains('play')) {\r\n                e.target.parentNode.childNodes[1].nextElementSibling.classList.add('track_name_hover');\r\n            } else if (e.target.classList.contains('music_cover')) {\r\n                e.target.parentNode.childNodes[1].nextElementSibling.classList.add('track_name_hover');\r\n            } else {\r\n                allMusicCovers.forEach(elem => elem.classList.remove('music_cover_hover'));\r\n                allTrackNames.forEach(elem => elem.classList.remove('track_name_hover'));\r\n            }\r\n        });\r\n\r\n        let somebodySayYeahPlayButton = document.querySelector('.play_somebody_say_yeah');\r\n        let somebodySayYeahSpotifyIframe = document.querySelector('.somebody_say_yeah_spotify_iframe');\r\n        somebodySayYeahPlayButton.addEventListener(\"click\", () => {\r\n            somebodySayYeahPlayButton.classList.add('switch_off');\r\n            somebodySayYeahSpotifyIframe.classList.remove('switch_off');\r\n            somebodySayYeahSpotifyIframe.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"somebodySayYeahSpotifyPlayer\"];\r\n        });\r\n\r\n        let destroyTheClubPlayButton = document.querySelector('.play_destroy_the_club');\r\n        let destroyTheClubSpotifyIframe = document.querySelector('.destroy_the_club_spotify_iframe');\r\n        destroyTheClubPlayButton.addEventListener(\"click\", () => {\r\n            destroyTheClubPlayButton.classList.add('switch_off');\r\n            destroyTheClubSpotifyIframe.classList.remove('switch_off');\r\n            destroyTheClubSpotifyIframe.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"destroyTheClubSpotifyPlayer\"];\r\n        });\r\n\r\n        let fatBeatPlayButton = document.querySelector('.play_fat_beat');\r\n        let fatBeatSpotifyIframe = document.querySelector('.fat_beat_spotify_iframe');\r\n        fatBeatPlayButton.addEventListener(\"click\", () => {\r\n            fatBeatPlayButton.classList.add('switch_off');\r\n            fatBeatSpotifyIframe.classList.remove('switch_off');\r\n            fatBeatSpotifyIframe.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"fatBeatSpotifyPlayer\"];\r\n        });\r\n\r\n        let oldschoolRavePlayButton = document.querySelector('.play_oldschool_rave');\r\n        let oldschoolRaveSpotifyIframe = document.querySelector('.oldschool_rave_spotify_iframe');\r\n        oldschoolRavePlayButton.addEventListener(\"click\", () => {\r\n            oldschoolRavePlayButton.classList.add('switch_off');\r\n            oldschoolRaveSpotifyIframe.classList.remove('switch_off');\r\n            oldschoolRaveSpotifyIframe.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"oldschoolRaveSpotifyPlayer\"];\r\n        });\r\n\r\n        let boomPlayButton = document.querySelector('.play_boom');\r\n        let boomSpotifyIframe = document.querySelector('.boom_spotify_iframe');\r\n        boomPlayButton.addEventListener(\"click\", () => {\r\n            boomPlayButton.classList.add('switch_off');\r\n            boomSpotifyIframe.classList.remove('switch_off');\r\n            boomSpotifyIframe.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"boomSpotifyPlayer\"];\r\n        });\r\n\r\n        let getEmHighPlayButton = document.querySelector('.play_get_em_high');\r\n        let getEmHighSpotifyIframe = document.querySelector('.get_em_high_spotify_iframe');\r\n        getEmHighPlayButton.addEventListener(\"click\", () => {\r\n            getEmHighPlayButton.classList.add('switch_off');\r\n            getEmHighSpotifyIframe.classList.remove('switch_off');\r\n            getEmHighSpotifyIframe.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"getEmHighSpotifyPlayer\"];\r\n        });\r\n    }\r\n\r\n    if(e.target.classList.contains('biography')) {\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"biography\"];\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"footer\"]\r\n    }\r\n\r\n    if(e.target.classList.contains('video')) {\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"video\"];\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"footer\"]\r\n    }\r\n\r\n    if(e.target.classList.contains('contact')) {\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"contact\"];\r\n        dynamicContent.innerHTML += _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"footer\"]\r\n    }\r\n});\r\n\r\nloginSignUpButton.addEventListener(\"click\", () => {\r\n    shadowBody.insertAdjacentHTML('beforebegin', _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"loginForm\"]);\r\n    shadowBody.insertAdjacentHTML('beforebegin', _js_dynamicElements__WEBPACK_IMPORTED_MODULE_2__[\"registrationForm\"]);\r\n    shadowBody.classList.remove('switch_off');\r\n\r\n    let scrollWidth = window.innerWidth - document.documentElement.clientWidth;\r\n    let navigationContainer = document.getElementById('navigation__container');\r\n    let headerContainer = document.querySelector('.header__container');\r\n\r\n    navigationContainer.style.cssText = \"width: \" + navigationContainer.offsetWidth + \"px;\";\r\n    headerContainer.style.cssText = \"width: \" + headerContainer.offsetWidth + \"px;\";\r\n    document.documentElement.style.cssText = \"overflow-y: hidden; margin-right: \" + scrollWidth + \"px;\";\r\n\r\n    let goToRegisterFormButton = document.getElementById('login-form-register-button');\r\n    let backToLoginButton = document.getElementById('register-form-back-to-login-button');\r\n    let loginFormElem = document.querySelector('.login-form');\r\n    let registrationFormElem = document.querySelector('.registration-form');\r\n\r\n    goToRegisterFormButton.addEventListener(\"click\", () => {\r\n        loginFormElem.classList.add('switch_off');\r\n        registrationFormElem.classList.remove('switch_off');\r\n    });\r\n\r\n    backToLoginButton.addEventListener(\"click\", () => {\r\n        loginFormElem.classList.remove('switch_off');\r\n        registrationFormElem.classList.add('switch_off');\r\n    });\r\n});\r\n\r\nshadowBody.addEventListener(\"click\", () => {\r\n    let loginFormHtml = document.querySelector('.login-form');\r\n    let registrationFormElem = document.querySelector('.registration-form');\r\n    let navigationContainer = document.getElementById('navigation__container');\r\n    let headerContainer = document.querySelector('.header__container');\r\n\r\n    navigationContainer.style.cssText = \"width: 60%;\";\r\n    headerContainer.style.cssText = \"width: 100%;\";\r\n    shadowBody.classList.add('switch_off');\r\n    loginFormHtml.remove();\r\n    registrationFormElem.remove();\r\n    document.documentElement.style.cssText = \"overflow-y: auto; margin-right: 0px;\";\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dynamicElements.js":
/*!***********************************!*\
  !*** ./src/js/dynamicElements.js ***!
  \***********************************/
/*! exports provided: homepage, music, biography, video, contact, footer, loginForm, registrationForm, somebodySayYeahSpotifyPlayer, destroyTheClubSpotifyPlayer, fatBeatSpotifyPlayer, oldschoolRaveSpotifyPlayer, boomSpotifyPlayer, getEmHighSpotifyPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homepage\", function() { return homepage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"music\", function() { return music; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"biography\", function() { return biography; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"video\", function() { return video; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginForm\", function() { return loginForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registrationForm\", function() { return registrationForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"somebodySayYeahSpotifyPlayer\", function() { return somebodySayYeahSpotifyPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroyTheClubSpotifyPlayer\", function() { return destroyTheClubSpotifyPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fatBeatSpotifyPlayer\", function() { return fatBeatSpotifyPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"oldschoolRaveSpotifyPlayer\", function() { return oldschoolRaveSpotifyPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boomSpotifyPlayer\", function() { return boomSpotifyPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEmHighSpotifyPlayer\", function() { return getEmHighSpotifyPlayer; });\nlet homepage = `\r\n    <div class=\"welcome\">Welcome to Nevillar Official Website</div>\r\n    <iframe class=\"youtube_player\" width=\"854\" height=\"480\" \r\n    src=\"https://www.youtube.com/embed/d6RPjRH7CsU\" frameborder=\"0\" \r\n    allow=\"accelerometer;  autoplay; encrypted-media; gyroscope; \r\n    picture-in-picture\" allowfullscreen></iframe>\r\n`;\r\n\r\nlet music = `\r\n    <div class=\"music_box\">\r\n        <div class=\"music_cover somebody_say_yeah\"></div>\r\n        <div class=\"track_name\">Nevillar - Somebody Say Yeah</div>\r\n        <div class=\"play play_somebody_say_yeah\"></div>\r\n        <div class=\"somebody_say_yeah_spotify_iframe spotify_iframe switch_off\"></div>\r\n    </div>\r\n    <div class=\"music_box\">\r\n        <div class=\"music_cover destroy_the_club\"></div>\r\n        <div class=\"track_name\">Nevillar - Destroy The Club</div>\r\n        <div class=\"play play_destroy_the_club\"></div>\r\n        <div class=\"destroy_the_club_spotify_iframe spotify_iframe switch_off\"></div>\r\n    </div>\r\n    <div class=\"music_box\">\r\n        <div class=\"music_cover fat_beat\"></div>\r\n        <div class=\"track_name\">Nevillar - Fat Beat</div>\r\n        <div class=\"play play_fat_beat\"></div>\r\n        <div class=\"fat_beat_spotify_iframe spotify_iframe switch_off\"></div>\r\n    </div>\r\n    <div class=\"music_box\">\r\n        <div class=\"music_cover oldschool_rave\"></div>\r\n        <div class=\"track_name\">Nevillar - Oldschool Rave</div>\r\n        <div class=\"play play_oldschool_rave\"></div>\r\n        <div class=\"oldschool_rave_spotify_iframe spotify_iframe switch_off\"></div>\r\n    </div>\r\n    <div class=\"music_box\">\r\n        <div class=\"music_cover boom\"></div>\r\n        <div class=\"track_name\">Nevillar - Boom</div>\r\n        <div class=\"play play_boom\"></div>\r\n        <div class=\"boom_spotify_iframe spotify_iframe switch_off\"></div>\r\n    </div>\r\n    <div class=\"music_box\">\r\n        <div class=\"music_cover get_em_high\"></div>\r\n        <div class=\"track_name\">Nevillar - Get Em High</div>\r\n        <div class=\"play play_get_em_high\"></div>\r\n        <div class=\"get_em_high_spotify_iframe spotify_iframe switch_off\"></div>\r\n    </div>\r\n    <div class=\"for_alignment\"></div>\r\n    <div class=\"for_alignment\"></div>\r\n    <!--<iframe width=\"1024\" height=\"345\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1094728243&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div class=\"soundcloud_player\" style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/nevillar\" title=\"Nevillar\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\"></a><a href=\"https://soundcloud.com/nevillar/sets/nevillar-all-releases\" title=\"NEVILLAR ALL RELEASES\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\"></a></div>-->\r\n`;\r\n\r\nlet biography = `\r\n    <div class=\"biography_page\">\r\n        <div class=\"biography_name\">Nevillar</div>\r\n        <div class=\"biography_word\">BIOGRAPHY</div>\r\n        <div class=\"biography_text\">\r\n                            DJ and producer Nevillar bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla. <br> Bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla. <br> Bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla.\r\n        </div>\r\n    </div>\r\n`;\r\n\r\nlet video = ` \r\n <div class=\"videos\">\r\n    <iframe class=\"main_video\" width=\"854\" height=\"480\" \r\n    src=\"https://www.youtube.com/embed/d6RPjRH7CsU\" frameborder=\"0\" \r\n    allow=\"accelerometer;  autoplay; encrypted-media; gyroscope; \r\n    picture-in-picture\" allowfullscreen></iframe>\r\n    \r\n    <iframe class=\"videos_player\" width=\"407\" height=\"229\" src=\"https://www.youtube.com/embed/_IQkCubKDXs\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    \r\n<iframe class=\"videos_player\" width=\"407\" height=\"229\" src=\"https://www.youtube.com/embed/8E-AoLs40og\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    \r\n    <iframe class=\"videos_player\" width=\"407\" height=\"229\" src=\"https://www.youtube.com/embed/R02BfaImkXs\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    \r\n    <iframe class=\"videos_player\" width=\"407\" height=\"229\" src=\"https://www.youtube.com/embed/cAuOlS3QxHg\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    \r\n        <iframe class=\"videos_player\" width=\"407\" height=\"229\" src=\"https://www.youtube.com/embed/bOAf9CmaUFo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        <div class=\"videos_player\"></div>\r\n</div>\r\n`;\r\n\r\nlet contact = `\r\n        <div class=\"contact_page\">\r\n        <div class=\"contact_name\">Nevillar</div>\r\n        <div class=\"contact_word\">CONTACT</div>\r\n        <div class=\"contact_text\">\r\n            Management: <br>\r\n            <a href=\"mailto:nevill4r@gmail.com\">nevill4r@gmail.com</a> <br><br><br>\r\n            Press & PR: <br>\r\n            <a href=\"mailto:nevill4r@gmail.com\">nevill4r@gmail.com</a><br><br><br>\r\n            Phone: <br>\r\n            <a href=\"tel:+375293591179\">+375-29-359-11-79</a>\r\n        </div>\r\n    </div>\r\n`;\r\n\r\nlet footer = `\r\n <footer class=\"footer\">\r\n    <div class=\"socials\">\r\n        <a class=\"social_item soundcloud_link\" target=\"_blank\" href=\"https://soundcloud.com/nevillar\"></a>\r\n        <a class=\"social_item facebook_link\" target=\"_blank\" href=\"https://www.facebook.com/Nevillar\"></a>\r\n        <a class=\"social_item instagram_link\" target=\"_blank\" href=\"https://www.instagram.com/nevillar\"></a>\r\n        <a class=\"social_item youtube_link\" target=\"_blank\" href=\"https://www.youtube.com/channel/UCn-iQbO2o3NA1jQObiOvY1w?view_as=subscriber\"></a>\r\n        <a class=\"social_item twitter_link\" target=\"_blank\" href=\"https://twitter.com/nevill4r\"></a>\r\n        <a class=\"social_item spotify_link\" target=\"_blank\" href=\"https://open.spotify.com/artist/1OjL7vV1j8HPenNxeQcTnz\"></a>\r\n    </div>\r\n    <div class=\"copyright\">© 2020 Nevillar</div>\r\n</footer>\r\n`;\r\n\r\nlet loginForm = `\r\n        <form class=\"login-form\" name=\"f1\" method=\"get\" action=\"\">\r\n\r\n            <div class=\"form-row\">\r\n                <input class=\"text-field\" id=\"form-login\" name=\"login\" type=\"text\" size=\"25\" maxlength=\"30\" value=\"\" placeholder=\"Username\" />\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"form-row\">\r\n                <input class=\"text-field\" id=\"form-pswrd\" name=\"pd\" type=\"password\" size=\"25\" maxlength=\"30\" value=\"\" placeholder=\"Password\" />\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"form-row\">\r\n                <label class=\"label-text\" for=\"form-checkbox\">Remember :</label>\r\n                <input class=\"check-mark\" id=\"form-checkbox\" name=\"remember\" type=\"checkbox\" value=\"yes\" />\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"registration-login\">\r\n    \r\n                <div class=\"buttons-submit\">\r\n                    <input class=\"log-sub-link\" id=\"login-form-login-button\" type=\"submit\" value=\"LOGIN\">\r\n                </div>\r\n    \r\n                <div class=\"buttons-login registration_button\">\r\n                    <a class=\"reg-log-link\" id=\"login-form-register-button\" target=\"_self\">REGISTER</a>\r\n                </div>\r\n    \r\n            </div>\r\n        </form>\r\n`;\r\n\r\nlet registrationForm = `\r\n<form class=\"registration-form switch_off\" name=\"f1\" method=\"post\" action=\"\" id=\"registrationForm\">\r\n    <input class=\"for-js-check text-field\" id=\"form-login\" name=\"login\" type=\"text\" maxlength=\"30\" value=\"\" placeholder=\"Username\" />\r\n    <br>        <br>\r\n    <div class=\"notice\" id=\"appear-login-notice\">The login should contain no more than 5 lowercase or uppercase letters, numbers, signs \"-\" and \"_\".</div>\r\n<br>\r\n\r\n<input class=\"for-js-check text-field\" id=\"form-pswrd\" name=\"pd\" type=\"password\" size=\"25\" maxlength=\"30\" value=\"\" placeholder=\"Password\" />\r\n    <br>        <br>\r\n    <div class=\"notice\" id=\"appear-password-notice\">The password should contain more than 5 lowercase, uppercase letters and numbers.</div>\r\n<br>\r\n\r\n<input class=\"for-js-check text-field\" id=\"form-confirm-pswrd\" name=\"cpd\" type=\"password\" size=\"25\" maxlength=\"30\" value=\"\" placeholder=\"Confirm password\" />\r\n    <br>        <br>\r\n    <div class=\"notice\" id=\"appear-confirmPassword-notice\">The passwords do not match.</div>\r\n<br>\r\n\r\n<input class=\"for-js-check text-field\" id=\"form-email\" name=\"email\" type=\"email\" size=\"25\" maxlength=\"30\" value=\"\" placeholder=\"Email address\" />\r\n    <br>        \r\n    <div class=\"notice\" id=\"appear-email-notice\">Incorrect email address.</div>\r\n<br>\r\n    <div class=\"notice\" id=\"appear-phone-notice\">Incorrect phone number. Example: +375291111111.</div>\r\n<br>\r\n<label class=\"label-text\" for=\"form-male\">Male :</label>\r\n<input class=\"for-js-check choose-sex\" id=\"form-male\" name=\"state\" type=\"radio\" value=\"male\" />\r\n    <label class=\"label-text\" for=\"form-female\">Female :</label>\r\n<input class=\"for-js-check choose-sex\" id=\"form-female\" name=\"state\" type=\"radio\" value=\"female\" />\r\n    <br><br>\r\n    <div class=\"registration-login\">\r\n    <br>\r\n    <div class=\"buttons-submit\">\r\n    <input class=\"log-sub-link\" id=\"register-form-submit-button\" type=\"button\" value=\"SUBMIT\" disabled>\r\n</div>\r\n<div class=\"buttons-login\">\r\n    <a class=\"reg-log-link\" id=\"register-form-back-to-login-button\" >LOGIN</a>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    </form>\r\n`;\r\n\r\nlet somebodySayYeahSpotifyPlayer = `\r\n    <iframe width=\"258\" height=\"80\" src=\"https://open.spotify.com/embed/track/6r6UCXis4SXG65vkjbkvOw\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n`;\r\n\r\nlet destroyTheClubSpotifyPlayer = `\r\n    <iframe width=\"258\" height=\"80\" src=\"https://open.spotify.com/embed/track/2FPMslCUnX3y1m6D68VVQd\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n`;\r\n\r\nlet fatBeatSpotifyPlayer = `\r\n    <iframe width=\"258\" height=\"80\" src=\"https://open.spotify.com/embed/track/54YqR7dDwm0IMb0rzLftqG\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n`;\r\n\r\nlet oldschoolRaveSpotifyPlayer = `\r\n    <iframe width=\"258\" height=\"80\" src=\"https://open.spotify.com/embed/track/5HxmhAZveQdz33SMrsMmMe\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n`;\r\n\r\nlet boomSpotifyPlayer = `\r\n    <iframe width=\"258\" height=\"80\" src=\"https://open.spotify.com/embed/track/1zaSpVK6JwTTDPqf1iYAVt\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n`;\r\n\r\nlet getEmHighSpotifyPlayer = `\r\n    <iframe width=\"258\" height=\"80\" src=\"https://open.spotify.com/embed/track/7xmpDC79qagOhYYumOplLz\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n`;\n\n//# sourceURL=webpack:///./src/js/dynamicElements.js?");

/***/ }),

/***/ "./src/styles/loginRegistrationForm.scss":
/*!***********************************************!*\
  !*** ./src/styles/loginRegistrationForm.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./loginRegistrationForm.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loginRegistrationForm.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/loginRegistrationForm.scss?");

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