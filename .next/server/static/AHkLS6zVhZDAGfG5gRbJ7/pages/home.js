module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CH2o");


/***/ }),

/***/ "CH2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/trr/Banner.js

var __jsx = external_react_default.a.createElement;

const Banner = () => __jsx("div", {
  className: "bg-black p-3 text-center text-white text-sm"
}, __jsx("span", null, "20% Off! Code: REAL \u2014 ", __jsx("a", {
  className: "underline"
}, "Terms Apply*")));

/* harmony default export */ var trr_Banner = (Banner);
// CONCATENATED MODULE: ./components/trr/Footer.js

var Footer_jsx = external_react_default.a.createElement;
function Footer() {
  return Footer_jsx("div", null, Footer_jsx("div", {
    className: "bg-black mt-12"
  }, Footer_jsx("div", {
    className: "max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-12"
  }, Footer_jsx("div", {
    className: "xl:grid xl:grid-cols-3 xl:gap-8"
  }, Footer_jsx("div", {
    className: "grid grid-cols-2 gap-8 xl:col-span-2"
  }, Footer_jsx("div", {
    className: "md:grid md:grid-cols-2 md:gap-8"
  }, Footer_jsx("div", null, Footer_jsx("h4", {
    className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
  }, "Solutions"), Footer_jsx("ul", {
    className: "mt-4"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Marketing")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Analytics")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Commerce")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Insights")))), Footer_jsx("div", {
    className: "mt-12 md:mt-0"
  }, Footer_jsx("h4", {
    className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
  }, "Support"), Footer_jsx("ul", {
    className: "mt-4"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Pricing")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Guides"))))), Footer_jsx("div", {
    className: "md:grid md:grid-cols-2 md:gap-8"
  }, Footer_jsx("div", null, Footer_jsx("h4", {
    className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
  }, "Company"), Footer_jsx("ul", {
    className: "mt-4"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "About")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Blog")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Jobs")))), Footer_jsx("div", {
    className: "mt-12 md:mt-0"
  }, Footer_jsx("h4", {
    className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
  }, "Legal"), Footer_jsx("ul", {
    className: "mt-4"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Claim")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Privacy")), Footer_jsx("li", {
    className: "mt-4"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-base leading-6 text-gray-300 hover:text-white"
  }, "Terms")))))), Footer_jsx("div", {
    className: "mt-8 xl:mt-0"
  }, Footer_jsx("h4", {
    className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"
  }, "Subscribe to our newsletter"), Footer_jsx("p", {
    className: "mt-4 text-gray-300 text-base leading-6"
  }, "The latest news, articles, and resources, sent to your inbox weekly."), Footer_jsx("form", {
    className: "mt-4 sm:flex sm:max-w-md"
  }, Footer_jsx("input", {
    "aria-label": "Email address",
    type: "email",
    required: true,
    className: "appearance-none w-full px-5 py-3 border border-transparent text-base leading-6  text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out",
    placeholder: "Enter your email"
  }), Footer_jsx("div", {
    className: "mt-3  shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"
  }, Footer_jsx("button", {
    className: "w-full flex items-center justify-center px-5 py-3 border border-gray-100 text-base leading-6 font-medium  text-white bg-transpartent hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out"
  }, "Subscribe"))))))), Footer_jsx("div", {
    className: "p-6 bg-white p-8 h-64 text-center flex flex-col justify-center items-center"
  }, Footer_jsx("div", {
    className: "m-4 p-4 md:flex md:items-center md:justify-between"
  }, Footer_jsx("div", {
    className: "flex md:order-2"
  }, Footer_jsx("a", {
    href: "#",
    className: "text-black hover:text-gray-300"
  }, Footer_jsx("span", {
    className: "sr-only"
  }, "Facebook"), Footer_jsx("svg", {
    className: "h-6 w-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, Footer_jsx("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    clipRule: "evenodd"
  }))), Footer_jsx("a", {
    href: "#",
    className: "ml-6 text-black hover:text-gray-300"
  }, Footer_jsx("span", {
    className: "sr-only"
  }, "Instagram"), Footer_jsx("svg", {
    className: "h-6 w-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, Footer_jsx("path", {
    fillRule: "evenodd",
    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    clipRule: "evenodd"
  }))), Footer_jsx("a", {
    href: "#",
    className: "ml-6 text-black hover:text-gray-300"
  }, Footer_jsx("span", {
    className: "sr-only"
  }, "Twitter"), Footer_jsx("svg", {
    className: "h-6 w-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, Footer_jsx("path", {
    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  }))), Footer_jsx("a", {
    href: "#",
    className: "ml-6 text-black hover:text-gray-300"
  }, Footer_jsx("span", {
    className: "sr-only"
  }, "GitHub"), Footer_jsx("svg", {
    className: "h-6 w-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, Footer_jsx("path", {
    fillRule: "evenodd",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    clipRule: "evenodd"
  }))), Footer_jsx("a", {
    href: "#",
    className: "ml-6 text-black hover:text-gray-300"
  }, Footer_jsx("span", {
    className: "sr-only"
  }, "Dribbble"), Footer_jsx("svg", {
    className: "h-6 w-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, Footer_jsx("path", {
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
    clipRule: "evenodd"
  }))))), Footer_jsx("h3", {
    className: "text-center flex justify-center items-center text-xl font-bold"
  }, "A SUSTAINABLE LUXURY COMPANY"), Footer_jsx("p", {
    className: "py-3 "
  }, "Honoring heritage brands and extending the lifecycle of luxury items."), Footer_jsx("small", {
    className: "py-3"
  }, "The RealReal, Inc.")), Footer_jsx("div", {
    className: "border-t border-gray-300 py-12 "
  }, Footer_jsx("p", {
    className: "container mx-auto text-sm px-12"
  }, "All items are pre-owned and consigned to The RealReal. Trademarks are owned by their respective brand owners. No brand owner endorses or sponsors this ad or has any association and/or affiliation with The RealReal.")));
}
// CONCATENATED MODULE: ./components/trr/Header.js

var Header_jsx = external_react_default.a.createElement;

const Header = ({
  menuLinks
}) => Header_jsx(external_react_default.a.Fragment, null, Header_jsx("header", {
  className: "container mx-auto relative px-10"
}, Header_jsx("div", {
  className: "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 py-3"
}, Header_jsx("div", {
  className: ""
}, Header_jsx("span", null, "Hi Bel\xE9n, check your email for a $25 offer code."), Header_jsx("a", {
  className: "flex underline"
}, "Updates for Our Customers and Community")), Header_jsx("div", {
  className: "text-center flex justify-center items-center text-2xl"
}, "TheRealReal"), Header_jsx("div", {
  className: "text-right"
}, "MY TRR")), Header_jsx("nav", {
  className: "container mx-auto relative py-3"
}, Header_jsx("ul", {
  className: "hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12 overflow-hidden"
}, menuLinks.map(l => Header_jsx("li", {
  key: l,
  className: "inline-block text-sm whitespace-pre cursor-pointer"
}, l)), Header_jsx("li", {
  className: "uppercase text-pink-900 text-sm whitespace-pre"
}, "Sell With Us"), Header_jsx("li", null, Header_jsx("input", {
  className: "bg-gray-200 border-0 p-2 text-sm p-3"
}))))), Header_jsx("div", {
  className: "bg-gray-200 text-center p-3 mt-4"
}, Header_jsx("span", {
  className: "text-black uppercase text-sm"
}, "AUTHENTICATED LUXURY CONSIGNMENT")));

/* harmony default export */ var trr_Header = (Header);
// EXTERNAL MODULE: external "cloudinary-react"
var external_cloudinary_react_ = __webpack_require__("iJ+X");

// EXTERNAL MODULE: external "@charlietango/use-native-lazy-loading"
var use_native_lazy_loading_ = __webpack_require__("EeY3");
var use_native_lazy_loading_default = /*#__PURE__*/__webpack_require__.n(use_native_lazy_loading_);

// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__("p1tF");

// CONCATENATED MODULE: ./components/Image.js
var Image_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // This is a wrapper for cloudynary Image handler
// Could be replace by any asset provider

const CD_API = process.env.CD_API || "https://res.cloudinary.com/vercel/image/upload/v1592403664/";
/* harmony default export */ var Image = ((_ref) => {
  let {
    width,
    height,
    publicId
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["width", "height", "publicId"]);

  let initialProps = _objectSpread({
    width,
    height,
    publicId
  }, rest);

  const supportsLazyLoading = use_native_lazy_loading_default()();
  const [ref, inView] = Object(external_react_intersection_observer_["useInView"])({
    triggerOnce: true,
    rootMargin: "200px 0px"
  });
  return Image_jsx("div", {
    ref: !supportsLazyLoading ? ref : undefined,
    className: "relative block overflow-hidden ease-in",
    style: {
      position: "relative",
      paddingBottom: `${height > 0 && width > 0 ? height / width * 100 : 100}%`,
      background: "#edf2f7"
    }
  }, inView || supportsLazyLoading ? // <Image loading="lazy" {...initialProps} />
  Image_jsx("img", _extends({}, rest, {
    src: `https://res.cloudinary.com/vercel/image/upload/${height ? `h_${height},` : ""}${width ? `w_${width},` : ""}/v1592403664/${publicId}`,
    width: width,
    height: height,
    loading: "lazy",
    style: {
      position: "absolute",
      width: "100%",
      height: "100%"
    }
  })) : null);
});
// CONCATENATED MODULE: ./components/trr/Main.js

var Main_jsx = external_react_default.a.createElement;


const Main = () => Main_jsx("main", {
  className: "container mx-auto relative py-6 px-10"
}, Main_jsx("div", {
  className: "bg-gray-400"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "top-banner.jpg",
  className: "w-full",
  width: "1200",
  height: "150"
})), Main_jsx("div", {
  className: "grid grid-cols-3 gap-10 mt-6"
}, Main_jsx("div", {
  className: "relative col-span-2 bg-gray-400 overflow-hidden"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "product-bags_n9filt.jpg",
  className: "w-full",
  width: "786",
  height: "507",
  quality: true
}), Main_jsx("div", {
  className: "absolute bg-white p-6 text-center bottom-0 w-full"
}, Main_jsx("span", {
  className: "text-2xl"
}, "Iconic Handbags"), Main_jsx("a", {
  className: "font-bold block"
}, "SHOP LV, H\xC8RMES, and MORE"))), Main_jsx("div", {
  className: " flex flex-col"
}, Main_jsx("div", {
  className: "relative flex-1 mb-10"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "product-shoes_wiujqw.jpg",
  width: "373",
  height: "274"
}), Main_jsx("div", {
  className: "absolute bg-gray-200 p-3 text-center bottom-0 w-full"
}, Main_jsx("span", {
  className: "text-2xl"
}, "Shoes with Sole"), Main_jsx("a", {
  className: "font-bold block underline uppercase text-sm"
}, "Shop now"))), Main_jsx("div", {
  className: "relative flex-1"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "product-women_mcaj3r.jpg",
  width: "373",
  height: "274"
}), Main_jsx("div", {
  className: "absolute bg-transparent text-center bottom-0 mb-10 w-full"
}, Main_jsx("a", {
  className: "font-bold block underline uppercase text-sm text-white"
}, "Shop now"))))), Main_jsx("div", {
  className: "px-3 py-6 border-t border-gray-300 mt-12"
}, Main_jsx("h2", {
  className: "text-center text-2xl"
}, "Top Designers"), Main_jsx("div", {
  className: "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-6 p-3"
}, Main_jsx("div", {
  className: "flex flex-col justify-center items-center"
}, Main_jsx("div", {
  className: "text-center bg-gray-400 inline-block h-40 w-40 rounded-full"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "designer-gucci.jpg",
  width: "142",
  height: "142"
})), Main_jsx("span", {
  className: "block mt-2 underline font-bold uppercase text-sm"
}, "GUCCI")), Main_jsx("div", {
  className: "flex flex-col justify-center items-center"
}, Main_jsx("div", {
  className: "text-center bg-gray-400 inline-block h-40 w-40 rounded-full"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "designer-burberry_xx9byy.jpg",
  width: "142",
  height: "142"
})), Main_jsx("span", {
  className: "block mt-2 underline font-bold uppercase text-sm"
}, "Burberry")), Main_jsx("div", {
  className: "flex flex-col justify-center items-center"
}, Main_jsx("div", {
  className: "text-center bg-gray-400 inline-block h-40 w-40 rounded-full"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "designer-prada_jaxbna.jpg",
  width: "142",
  height: "142"
})), Main_jsx("span", {
  className: "block mt-2 underline font-bold uppercase text-sm"
}, "Prada")), Main_jsx("div", {
  className: "flex flex-col justify-center items-center"
}, Main_jsx("div", {
  className: "text-center bg-gray-400 inline-block h-40 w-40 rounded-full"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "designer-louboutin_gqnhf2.jpg",
  width: "142",
  height: "142"
})), Main_jsx("span", {
  className: "block mt-2 underline font-bold uppercase text-sm"
}, "Louboutin")), Main_jsx("div", {
  className: "flex flex-col justify-center items-center"
}, Main_jsx("div", {
  className: "text-center bg-gray-400 inline-block h-40 w-40 rounded-full"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "designer-louis-vuitton_mmzvod.jpg",
  width: "142",
  height: "142"
})), Main_jsx("span", {
  className: "block mt-2 underline font-bold uppercase text-sm"
}, "Louis Vuitton")), Main_jsx("div", {
  className: "flex flex-col justify-center items-center"
}, Main_jsx("div", {
  className: "text-center bg-gray-400 inline-block h-40 w-40 rounded-full"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "designer-gucci.jpg",
  width: "142",
  height: "142"
})), Main_jsx("span", {
  className: "block mt-2 underline font-bold uppercase text-sm"
}, "HERM\xC8S")))), Main_jsx("div", {
  className: "px-3 py-6 border-t border-gray-300 mt-12"
}, Main_jsx("h2", {
  className: "text-center text-2xl"
}, "Top Categories"), Main_jsx("div", {
  className: "mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3 p-3"
}, Main_jsx("div", {
  className: " bg-gray-400"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "category-women_kvxh2t.jpg",
  width: "363",
  height: "450"
})), Main_jsx("div", {
  className: " bg-gray-400"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "category-jewelry_txef2k.jpg",
  width: "363",
  height: "450"
})), Main_jsx("div", {
  className: " bg-gray-400"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "category-men_d74ghz.jpg",
  width: "363",
  height: "450"
})))), Main_jsx("div", {
  className: "px-3 py-6 border-t border-gray-300 mt-12"
}, Main_jsx(Image, {
  alt: "image",
  publicId: "category-sale_p78qvm.jpg",
  width: "1200",
  height: "90"
})), Main_jsx("div", {
  className: "px-3 py-6 border-t border-gray-300 mt-12 text-gray-600"
}, "*Promotional code will expire seven days from issue date. Code is valid on any item. Code may be split between multiple orders. Code does not apply to gift cards or shipping. Returned items originally purchased with the use of a code will result in the activation of the code, which will be valid for the following three days."));

/* harmony default export */ var trr_Main = (Main);
// CONCATENATED MODULE: ./pages/home.js

var home_jsx = external_react_default.a.createElement;




async function getStaticProps() {
  const menuLinks = ["NEW ARRIVALS", "DESIGNERS", "WOMEN", "MEN", "JEWELRY", "WATCHES", "HOME", "KIDS", "SALE"];
  return {
    props: {
      menuLinks
    }
  };
}
function Home({
  menuLinks
}) {
  return home_jsx(external_react_default.a.Fragment, null, home_jsx(trr_Banner, null), home_jsx(trr_Header, {
    menuLinks: menuLinks
  }), home_jsx(trr_Main, null), home_jsx(Footer, null));
}

/***/ }),

/***/ "EeY3":
/***/ (function(module, exports) {

module.exports = require("@charlietango/use-native-lazy-loading");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iJ+X":
/***/ (function(module, exports) {

module.exports = require("cloudinary-react");

/***/ }),

/***/ "p1tF":
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ })

/******/ });