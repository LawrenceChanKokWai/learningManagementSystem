module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/kokwaichan/Desktop/lms/client/pages/register.js\";\n\n\n\nconst Register = () => {\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Lawrence\");\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"lawrence@gmail.com\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"llllll\");\n\n  const handleSubmit = e => {\n    e.preventDefault(); //console.table({ name, email, password });\n\n    const {\n      data\n    } = axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`http://localhost:8000/api/register`, {\n      name,\n      email,\n      password\n    });\n    console.log(\"REGISTER RESPONSE\", data);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"jumbotron text-center bg-primary square\",\n      children: \"Register\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container col-md-4 offset-md-4 pb-5\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: \"Do not have an account?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Come register with us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          className: \"form-control mb-4 p-4\",\n          value: name,\n          onChange: e => setName(e.target.value),\n          placeholder: \"* Enter name\",\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          className: \"form-control mb-4 p-4\",\n          value: email,\n          onChange: e => setEmail(e.target.value),\n          placeholder: \"* Enter email\",\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          className: \"form-control mb-4 p-4\",\n          value: password,\n          onChange: e => setPassword(e.target.value),\n          placeholder: \"* Enter password\",\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"(*) as required fields\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 7\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"You will receive a email notification as above provided. Confirm the account and \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"LET'S GET STARTED!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 19\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: \"btn btn-block btn-primary\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 6\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcz8wZWNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLFVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsb0JBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLHNEQUFRLENBQUMsUUFBRCxDQUF4Qzs7QUFFQSxRQUFNSyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGLEdBRDJCLENBRTNCOztBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFXQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVksb0NBQVosRUFBaUQ7QUFDakVaLFVBRGlFO0FBRWpFRyxXQUZpRTtBQUdqRUU7QUFIaUUsS0FBakQsQ0FBakI7QUFLQVEsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNKLElBQWpDO0FBQ0EsR0FURDs7QUFXQSxzQkFDQztBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLHlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBR0M7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw2QkFDQztBQUFNLGdCQUFRLEVBQUVILFlBQWhCO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFLQztBQUNDLGNBQUksRUFBQyxNQUROO0FBRUMsbUJBQVMsRUFBQyx1QkFGWDtBQUdDLGVBQUssRUFBRVAsSUFIUjtBQUlDLGtCQUFRLEVBQUdRLENBQUQsSUFBT1AsT0FBTyxDQUFDTyxDQUFDLENBQUNPLE1BQUYsQ0FBU0MsS0FBVixDQUp6QjtBQUtDLHFCQUFXLEVBQUMsY0FMYjtBQU1DLGtCQUFRO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRCxlQWNDO0FBQ0MsY0FBSSxFQUFDLE9BRE47QUFFQyxtQkFBUyxFQUFDLHVCQUZYO0FBR0MsZUFBSyxFQUFFYixLQUhSO0FBSUMsa0JBQVEsRUFBR0ssQ0FBRCxJQUFPSixRQUFRLENBQUNJLENBQUMsQ0FBQ08sTUFBRixDQUFTQyxLQUFWLENBSjFCO0FBS0MscUJBQVcsRUFBQyxlQUxiO0FBTUMsa0JBQVE7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRELGVBdUJDO0FBQ0MsY0FBSSxFQUFDLFVBRE47QUFFQyxtQkFBUyxFQUFDLHVCQUZYO0FBR0MsZUFBSyxFQUFFWCxRQUhSO0FBSUMsa0JBQVEsRUFBR0csQ0FBRCxJQUFPRixXQUFXLENBQUNFLENBQUMsQ0FBQ08sTUFBRixDQUFTQyxLQUFWLENBSjdCO0FBS0MscUJBQVcsRUFBQyxrQkFMYjtBQU1DLGtCQUFRO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2QkQsZUErQkM7QUFBQSxpQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBL0JELGVBa0NDO0FBQUEsdUhBRWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxDRCxlQXVDQztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsMkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUEsa0JBREQ7QUFtREEsQ0FuRUQ7O0FBcUVlakIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIkxhd3JlbmNlXCIpO1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwibGF3cmVuY2VAZ21haWwuY29tXCIpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwibGxsbGxsXCIpO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KTtcblx0XHRjb25zdCB7IGRhdGEgfSA9IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcmVnaXN0ZXJgLCB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0ZW1haWwsXG5cdFx0XHRwYXNzd29yZCxcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyhcIlJFR0lTVEVSIFJFU1BPTlNFXCIsIGRhdGEpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgYmctcHJpbWFyeSBzcXVhcmVcIj5SZWdpc3RlcjwvaDE+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PGg0PkRvIG5vdCBoYXZlIGFuIGFjY291bnQ/PC9oND5cblx0XHRcdFx0XHQ8cD5Db21lIHJlZ2lzdGVyIHdpdGggdXM8L3A+XG5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIiogRW50ZXIgbmFtZVwiXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIiogRW50ZXIgZW1haWxcIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCIqIEVudGVyIHBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdDxzdHJvbmc+KCopIGFzIHJlcXVpcmVkIGZpZWxkczwvc3Ryb25nPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFlvdSB3aWxsIHJlY2VpdmUgYSBlbWFpbCBub3RpZmljYXRpb24gYXMgYWJvdmUgcHJvdmlkZWQuIENvbmZpcm0gdGhlXG5cdFx0XHRcdFx0XHRhY2NvdW50IGFuZCA8c3Ryb25nPkxFVCdTIEdFVCBTVEFSVEVEITwvc3Ryb25nPlxuXHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFN1Ym1pdFxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });