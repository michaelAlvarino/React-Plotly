/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  Graph: __webpack_require__(1)
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var Plot = React.createClass({
	  displayName: "Plot",

	  propTypes: {
	    containerId: React.PropTypes.string.isRequired,
	    data: React.PropTypes.array.isRequired,
	    layout: React.PropTypes.object
	  },
	  componentDidMount: function componentDidMount() {
	    this.plot(this.props);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.plot(nextProps);
	  },
	  plot: function plot(props) {
	    var containerId = props.containerId,
	        data = props.data,
	        layout = props.layout;
	    Plotly.plot(containerId, data, layout);
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { id: this.props.containerId },
	      "test"
	    );
	  }
	});

	module.exports = Plot;

/***/ }
/******/ ]);