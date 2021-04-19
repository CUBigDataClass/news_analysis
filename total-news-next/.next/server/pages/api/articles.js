module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/articles/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articles\", function() { return articles; });\nconst articles = [{\n  id: '1',\n  title: 'GitHub introduces dark mode and auto-merge pull request',\n  excerpt: 'GitHub today announced a bunch of new features at its virtual GitHub...',\n  body: 'GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?'\n}, {\n  id: '2',\n  title: 'What’s multi-cloud? And why should developers care?',\n  excerpt: 'Most developers don’t care about multi-cloud. But they should...',\n  body: 'Most developers don’t care about multi-cloud. But they should. Whether developers know it or not, their companies likely already have a multi-cloud environment.    Multi-cloud is a strategy where a business selects different services from different cloud providers'\n}, {\n  id: '3',\n  title: 'Here is how to make your website more accessible',\n  excerpt: 'An accessible website is one that’s optimized for all people, including those with disabilities...',\n  body: 'There are many things to consider when setting up a website, and accessibility is one factor that can sometimes be overlooked. An accessible website is one that’s optimized for all people, including those with impaired vision or hearing, motor difficulties, or learning disabilities'\n}, {\n  id: '4',\n  title: 'Why open ecosystems are the future of app development',\n  excerpt: 'When app stores entered the mainstream tech culture, they exposed developers to an audience of millions...',\n  body: 'We can’t get enough of our mobile apps. There were 204 billion apps downloads last year, and that number is rising in 2020.  When app stores entered the mainstream tech culture, they exposed developers to an audience of millions who were keen to adopt the innovative capabilities'\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzPzg4NWEiXSwibmFtZXMiOlsiYXJ0aWNsZXMiLCJpZCIsInRpdGxlIiwiZXhjZXJwdCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxRQUFRLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLHlEQUZUO0FBR0VDLFNBQU8sRUFDTCx5RUFKSjtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQURvQixFQVNwQjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUscURBRlQ7QUFHRUMsU0FBTyxFQUFFLGtFQUhYO0FBSUVDLE1BQUksRUFDRjtBQUxKLENBVG9CLEVBZ0JwQjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUsa0RBRlQ7QUFHRUMsU0FBTyxFQUNMLG9HQUpKO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBaEJvQixFQXdCcEI7QUFDRUgsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLHVEQUZUO0FBR0VDLFNBQU8sRUFDTCw0R0FKSjtBQUtFQyxNQUFJLEVBQ0Y7QUFOSixDQXhCb0IsQ0FBakIiLCJmaWxlIjoiLi9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFydGljbGVzID0gW1xuICAgIHtcbiAgICAgIGlkOiAnMScsXG4gICAgICB0aXRsZTogJ0dpdEh1YiBpbnRyb2R1Y2VzIGRhcmsgbW9kZSBhbmQgYXV0by1tZXJnZSBwdWxsIHJlcXVlc3QnLFxuICAgICAgZXhjZXJwdDpcbiAgICAgICAgJ0dpdEh1YiB0b2RheSBhbm5vdW5jZWQgYSBidW5jaCBvZiBuZXcgZmVhdHVyZXMgYXQgaXRzIHZpcnR1YWwgR2l0SHViLi4uJyxcbiAgICAgIGJvZHk6XG4gICAgICAgICdHaXRIdWIgdG9kYXkgYW5ub3VuY2VkIGEgYnVuY2ggb2YgbmV3IGZlYXR1cmVzIGF0IGl0cyB2aXJ0dWFsIEdpdEh1YiBVbml2ZXJzZSBjb25mZXJlbmNlIGluY2x1ZGluZyBkYXJrIG1vZGUsIGF1dG8tbWVyZ2UgcHVsbCByZXF1ZXN0cywgYW5kIEVudGVycHJpc2UgU2VydmVyIDMuMC4gSW4gdGhlIHBhc3QgY291cGxlIG9mIHllYXJzLCBhbG1vc3QgYWxsIG1ham9yIGFwcHMgaGF2ZSByb2xsZWQgb3V0IGEgZGFyayB0aGVtZSBmb3IgaXRzIHVzZXJzLCBzbyB3aHkgbm90IEdpdEh1Yj8nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICcyJyxcbiAgICAgIHRpdGxlOiAnV2hhdOKAmXMgbXVsdGktY2xvdWQ/IEFuZCB3aHkgc2hvdWxkIGRldmVsb3BlcnMgY2FyZT8nLFxuICAgICAgZXhjZXJwdDogJ01vc3QgZGV2ZWxvcGVycyBkb27igJl0IGNhcmUgYWJvdXQgbXVsdGktY2xvdWQuIEJ1dCB0aGV5IHNob3VsZC4uLicsXG4gICAgICBib2R5OlxuICAgICAgICAnTW9zdCBkZXZlbG9wZXJzIGRvbuKAmXQgY2FyZSBhYm91dCBtdWx0aS1jbG91ZC4gQnV0IHRoZXkgc2hvdWxkLiBXaGV0aGVyIGRldmVsb3BlcnMga25vdyBpdCBvciBub3QsIHRoZWlyIGNvbXBhbmllcyBsaWtlbHkgYWxyZWFkeSBoYXZlIGEgbXVsdGktY2xvdWQgZW52aXJvbm1lbnQuICAgIE11bHRpLWNsb3VkIGlzIGEgc3RyYXRlZ3kgd2hlcmUgYSBidXNpbmVzcyBzZWxlY3RzIGRpZmZlcmVudCBzZXJ2aWNlcyBmcm9tIGRpZmZlcmVudCBjbG91ZCBwcm92aWRlcnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICczJyxcbiAgICAgIHRpdGxlOiAnSGVyZSBpcyBob3cgdG8gbWFrZSB5b3VyIHdlYnNpdGUgbW9yZSBhY2Nlc3NpYmxlJyxcbiAgICAgIGV4Y2VycHQ6XG4gICAgICAgICdBbiBhY2Nlc3NpYmxlIHdlYnNpdGUgaXMgb25lIHRoYXTigJlzIG9wdGltaXplZCBmb3IgYWxsIHBlb3BsZSwgaW5jbHVkaW5nIHRob3NlIHdpdGggZGlzYWJpbGl0aWVzLi4uJyxcbiAgICAgIGJvZHk6XG4gICAgICAgICdUaGVyZSBhcmUgbWFueSB0aGluZ3MgdG8gY29uc2lkZXIgd2hlbiBzZXR0aW5nIHVwIGEgd2Vic2l0ZSwgYW5kIGFjY2Vzc2liaWxpdHkgaXMgb25lIGZhY3RvciB0aGF0IGNhbiBzb21ldGltZXMgYmUgb3Zlcmxvb2tlZC4gQW4gYWNjZXNzaWJsZSB3ZWJzaXRlIGlzIG9uZSB0aGF04oCZcyBvcHRpbWl6ZWQgZm9yIGFsbCBwZW9wbGUsIGluY2x1ZGluZyB0aG9zZSB3aXRoIGltcGFpcmVkIHZpc2lvbiBvciBoZWFyaW5nLCBtb3RvciBkaWZmaWN1bHRpZXMsIG9yIGxlYXJuaW5nIGRpc2FiaWxpdGllcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzQnLFxuICAgICAgdGl0bGU6ICdXaHkgb3BlbiBlY29zeXN0ZW1zIGFyZSB0aGUgZnV0dXJlIG9mIGFwcCBkZXZlbG9wbWVudCcsXG4gICAgICBleGNlcnB0OlxuICAgICAgICAnV2hlbiBhcHAgc3RvcmVzIGVudGVyZWQgdGhlIG1haW5zdHJlYW0gdGVjaCBjdWx0dXJlLCB0aGV5IGV4cG9zZWQgZGV2ZWxvcGVycyB0byBhbiBhdWRpZW5jZSBvZiBtaWxsaW9ucy4uLicsXG4gICAgICBib2R5OlxuICAgICAgICAnV2UgY2Fu4oCZdCBnZXQgZW5vdWdoIG9mIG91ciBtb2JpbGUgYXBwcy4gVGhlcmUgd2VyZSAyMDQgYmlsbGlvbiBhcHBzIGRvd25sb2FkcyBsYXN0IHllYXIsIGFuZCB0aGF0IG51bWJlciBpcyByaXNpbmcgaW4gMjAyMC4gIFdoZW4gYXBwIHN0b3JlcyBlbnRlcmVkIHRoZSBtYWluc3RyZWFtIHRlY2ggY3VsdHVyZSwgdGhleSBleHBvc2VkIGRldmVsb3BlcnMgdG8gYW4gYXVkaWVuY2Ugb2YgbWlsbGlvbnMgd2hvIHdlcmUga2VlbiB0byBhZG9wdCB0aGUgaW5ub3ZhdGl2ZSBjYXBhYmlsaXRpZXMnLFxuICAgIH0sXG4gIF0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data.js\n");

/***/ }),

/***/ "./pages/api/articles/index.js":
/*!*************************************!*\
  !*** ./pages/api/articles/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ \"./data.js\");\n\nfunction handler(req, res) {\n  res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__[\"articles\"]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXJ0aWNsZXMvaW5kZXguanM/ZGNkMCJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImFydGljbGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN0Q0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLDhDQUFyQjtBQUNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FydGljbGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcnRpY2xlc30gZnJvbSAnLi4vLi4vLi4vZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFydGljbGVzKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/articles/index.js\n");

/***/ })

/******/ });