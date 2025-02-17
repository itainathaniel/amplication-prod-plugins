/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 288:
/***/ ((module) => {

module.exports = require("@amplication/code-gen-types");

/***/ }),

/***/ 928:
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const code_gen_types_1 = __webpack_require__(288);
const path_1 = __webpack_require__(928);
class ExamplePlugin {
    /**
     * This is mandatory function that returns an object with the event name. Each event can have before or/and after
     */
    register() {
        return {
            [code_gen_types_1.EventNames.CreateServer]: {
                before: this.beforeCreateServer,
                after: this.afterCreateServer,
            },
            [code_gen_types_1.EventNames.CreateAdminUI]: {
                before: this.beforeCreateAdminUI,
            },
        };
    }
    // You can combine many events in one plugin in order to change the related files.
    beforeCreateServer(context, eventParams) {
        // Here you can manipulate the context or save any context variable for your after function.
        // You can also manipulate the eventParams so it will change the result of Amplication function.
        // context.utils.skipDefaultBehavior = true; this will prevent the default behavior and skip our handler.
        return eventParams; // eventParams must return from before function. It will be used for the builder function.
    }
    async afterCreateServer(context, eventParams, modules) {
        // Here you can get the context, eventParams and the modules that Amplication created.
        // Then you can manipulate the modules, add new ones, or create your own.
        const staticPath = (0, path_1.resolve)(__dirname, "./static");
        const staticFiles = await context.utils.importStaticModules(staticPath, context.serverDirectories.srcDirectory);
        await modules.merge(staticFiles);
        return modules; // You must return the generated modules you want to generate at this part of the build.
    }
    beforeCreateAdminUI(context, eventParams) {
        // Same as beforeCreateExample but for a different event.
        return eventParams;
    }
}
exports["default"] = ExamplePlugin;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=main.js.map