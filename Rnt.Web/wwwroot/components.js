/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Content/server.js
	
	// All JavaScript in here will be loaded server-side
	// Expose components globally so ReactJS.NET can use them
	var Components = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	//module.exports = {
	//    // All the components you'd like to render server-side
	//    Hello: require('./Hello')
	//};
	"use strict";
	
	var Hello_1 = __webpack_require__(3);
	exports.Hello = Hello_1.Hello;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/// <reference path="../../typings/index.d.ts" />
	"use strict";
	
	const React = __webpack_require__(4);
	class Hello extends React.Component {
	    constructor(props) {
	        super(props);
	        this.getFromApi = () => {
	            var xhr = new XMLHttpRequest();
	            xhr.open('get', '/apicall', true);
	            xhr.onload = () => {
	                var data = JSON.parse(xhr.responseText);
	                this.setState({ data: data });
	            };
	            xhr.send();
	        };
	        this.state = { data: this.props.initialData };
	    }
	    render() {
	        var objectsLeaked;
	        // Make memory leak serverside
	        if (typeof window === 'undefined') {
	            if (!global.leak) {
	                global.leak = new Array();
	            }
	            var fill = new Array();
	            for (var j = 0; j < 100000; j++) fill.push(j);
	            global.leak.push(fill);
	            objectsLeaked = global.leak.length;
	        } else {
	            objectsLeaked = 0;
	        }
	        return React.createElement("div", null, React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!"), React.createElement("br", null), React.createElement("p", null, JSON.stringify(this.state.data)), React.createElement("button", { onClick: this.getFromApi }, "Get Data From API"), React.createElement("p", null, "(leaked ", objectsLeaked, " objects)"));
	    }
	}
	exports.Hello = Hello;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);
//# sourceMappingURL=components.js.map