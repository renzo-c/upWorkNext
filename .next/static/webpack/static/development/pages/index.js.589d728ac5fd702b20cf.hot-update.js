webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _utils_context_store_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context/store/global */ "./utils/context/store/global/index.js");

var _jsxFileName = "/home/bigeyestoad/Documents/gitRepos/challenges/upworkNextJS/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: ''
  }),
      values = _useState[0],
      setValues = _useState[1]; // TODO: Create local state for first name which will change only on this page. It should also be able to update with global state.


  var _useGlobal = Object(_utils_context_store_global__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      globalState = _useGlobal2[0],
      globalActions = _useGlobal2[1];

  var _globalState$user = globalState.user,
      name_first = _globalState$user.name_first,
      name_last = _globalState$user.name_last;
  /** TODO: Change first or last name which should show across website.
   * i.e. Create text field that will change global state ALSO with local state on this page.
   *
   * This is a small example on how globalActions should be used.*/
  // const handleNameChange = (event) => {
  //   const value = event.target.value
  //   globalActions.user.updateUser({[event.target.name]:value});
  // }
  // TODO: Create useEffect to change the last name ONCE upon showing this page.

  var handleChange = function handleChange(label) {
    return function (e) {
      console.log(label, e.target.value);
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Hello World!"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Name: ", name_first, ", ", name_last), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "First Name"), " ", __jsx("input", {
    onChange: handleChange('firstName'),
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.589d728ac5fd702b20cf.hot-update.js.map