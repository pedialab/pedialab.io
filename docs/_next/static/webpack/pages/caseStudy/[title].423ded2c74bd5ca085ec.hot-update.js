/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/caseStudy/[title]",{

/***/ "./pages/caseStudy/[title].tsx":
/*!*************************************!*\
  !*** ./pages/caseStudy/[title].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./.yarn/cache/react-npm-17.0.2-99ba37d931-7d0dfebafe.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _caseStudies_lib_iso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../caseStudies/lib-iso */ \"./caseStudies/lib-iso.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./.yarn/$$virtual/@material-ui-core-virtual-b6574a94ec/0/cache/@material-ui-core-npm-4.11.4-d024c4b650-98c5e25c33.zip/node_modules/@material-ui/core/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/phc/Programs/pedialab.io/pages/caseStudy/[title].tsx\",\n    _this = undefined;\n\n\n\n\nvar CaseStudyPage = function CaseStudyPage(_ref) {\n  var post = _ref.post;\n  var caseStudy = (0,_caseStudies_lib_iso__WEBPACK_IMPORTED_MODULE_1__.matter)(post.fileName);\n  console.log(caseStudy.data);\n  var content = (0,_caseStudies_lib_iso__WEBPACK_IMPORTED_MODULE_1__.markdownToReactComponent)(caseStudy.content);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      variant: \"h2\",\n      gutterBottom: true,\n      children: \"content\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      variant: \"h2\",\n      gutterBottom: true,\n      children: \"data\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: JSON.stringify(caseStudy.data)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n      component: Paper,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n        className: classes.table,\n        \"aria-label\": \"simple table\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n              children: \"Dessert (100g serving)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n              align: \"right\",\n              children: \"Calories\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n              align: \"right\",\n              children: \"Fat\\xA0(g)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n              align: \"right\",\n              children: \"Carbs\\xA0(g)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n              align: \"right\",\n              children: \"Protein\\xA0(g)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableBody, {\n          children: rows.map(function (row) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                component: \"th\",\n                scope: \"row\",\n                children: row.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                align: \"right\",\n                children: row.calories\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                align: \"right\",\n                children: row.fat\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                align: \"right\",\n                children: row.carbs\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                align: \"right\",\n                children: row.protein\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this)]\n            }, row.name, true, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = CaseStudyPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CaseStudyPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CaseStudyPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzZVN0dWR5L1t0aXRsZV0udHN4PzBiNDMiXSwibmFtZXMiOlsiQ2FzZVN0dWR5UGFnZSIsInBvc3QiLCJjYXNlU3R1ZHkiLCJtYXR0ZXIiLCJmaWxlTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29udGVudCIsIm1hcmtkb3duVG9SZWFjdENvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJQYXBlciIsImNsYXNzZXMiLCJ0YWJsZSIsInJvd3MiLCJtYXAiLCJyb3ciLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBeUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQ3pDLE1BQU1DLFNBQVMsR0FBR0MsNERBQU0sQ0FBQ0YsSUFBSSxDQUFDRyxRQUFOLENBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFTLENBQUNLLElBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyw4RUFBd0IsQ0FBQ1AsU0FBUyxDQUFDTSxPQUFYLENBQXhDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixrQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsd0RBQUQ7QUFBQSxnQkFBWUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSw4REFBQyx5REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixrQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBUUUsOERBQUMsd0RBQUQ7QUFBQSxnQkFBWUUsSUFBSSxDQUFDQyxTQUFMLENBQWVULFNBQVMsQ0FBQ0ssSUFBekI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFTRSw4REFBQyw2REFBRDtBQUFnQixlQUFTLEVBQUVLLEtBQTNCO0FBQUEsNkJBQ0UsOERBQUMsS0FBRDtBQUFPLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsS0FBMUI7QUFBaUMsc0JBQVcsY0FBNUM7QUFBQSxnQ0FDRSw4REFBQyxTQUFEO0FBQUEsaUNBQ0UsOERBQUMsUUFBRDtBQUFBLG9DQUNFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxTQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLFNBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUUsOERBQUMsU0FBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRSw4REFBQyxTQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBVUUsOERBQUMsU0FBRDtBQUFBLG9CQUNHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxHQUFEO0FBQUEsZ0NBQ1IsOERBQUMsUUFBRDtBQUFBLHNDQUNFLDhEQUFDLFNBQUQ7QUFBVyx5QkFBUyxFQUFDLElBQXJCO0FBQTBCLHFCQUFLLEVBQUMsS0FBaEM7QUFBQSwwQkFDR0EsR0FBRyxDQUFDQztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRSw4REFBQyxTQUFEO0FBQVcscUJBQUssRUFBQyxPQUFqQjtBQUFBLDBCQUEwQkQsR0FBRyxDQUFDRTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBS0UsOERBQUMsU0FBRDtBQUFXLHFCQUFLLEVBQUMsT0FBakI7QUFBQSwwQkFBMEJGLEdBQUcsQ0FBQ0c7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixlQU1FLDhEQUFDLFNBQUQ7QUFBVyxxQkFBSyxFQUFDLE9BQWpCO0FBQUEsMEJBQTBCSCxHQUFHLENBQUNJO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFPRSw4REFBQyxTQUFEO0FBQVcscUJBQUssRUFBQyxPQUFqQjtBQUFBLDBCQUEwQkosR0FBRyxDQUFDSztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUEsZUFBZUwsR0FBRyxDQUFDQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUEsa0JBREY7QUFzQ0QsQ0EzQ0Q7O0tBQU1sQixhOztBQTZDTiwrREFBZUEsYUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Nhc2VTdHVkeS9bdGl0bGVdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldFRpdGxlcywgZ2V0Q2FzZVN0dWR5TWQgfSBmcm9tIFwiLi4vLi4vY2FzZVN0dWRpZXMvbGliLXNlcnZlclwiO1xuaW1wb3J0IHsgbWFya2Rvd25Ub1JlYWN0Q29tcG9uZW50LCBtYXR0ZXIgfSBmcm9tIFwiLi4vLi4vY2FzZVN0dWRpZXMvbGliLWlzb1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBUYWJsZUNvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgcGFyYW1zOiB7IHRpdGxlOiBzdHJpbmcgfTtcbn07XG5cbmNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXJ0aWNsZVRpdGxlcyA9IGdldFRpdGxlcygpO1xuICBjb25zb2xlLmxvZyhhcnRpY2xlVGl0bGVzKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhcnRpY2xlVGl0bGVzLm1hcCgoYXJ0aWNsZVRpdGxlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHRpdGxlOiBhcnRpY2xlVGl0bGUsXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0OiB7XG4gICAgZmlsZU5hbWU6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH06IFBhcmFtcykgPT4ge1xuICBjb25zdCB0aXRsZSA9IHBhcmFtcy50aXRsZTtcbiAgY29uc3QgbWFya2Rvd24gPSBhd2FpdCBnZXRDYXNlU3R1ZHlNZCh0aXRsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDoge1xuICAgICAgICBmaWxlTmFtZTogbWFya2Rvd24sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgeyBnZXRTdGF0aWNQYXRocywgZ2V0U3RhdGljUHJvcHMgfTtcblxuY29uc3QgQ2FzZVN0dWR5UGFnZSA9ICh7IHBvc3QgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgY2FzZVN0dWR5ID0gbWF0dGVyKHBvc3QuZmlsZU5hbWUpO1xuICBjb25zb2xlLmxvZyhjYXNlU3R1ZHkuZGF0YSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBtYXJrZG93blRvUmVhY3RDb21wb25lbnQoY2FzZVN0dWR5LmNvbnRlbnQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgY29udGVudFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPENvbnRhaW5lcj57Y29udGVudH08L0NvbnRhaW5lcj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgZGF0YVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPENvbnRhaW5lcj57SlNPTi5zdHJpbmdpZnkoY2FzZVN0dWR5LmRhdGEpfTwvQ29udGFpbmVyPlxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNzZXJ0ICgxMDBnIHNlcnZpbmcpPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYXJicyZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdHVkeVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/caseStudy/[title].tsx\n");

/***/ })

});