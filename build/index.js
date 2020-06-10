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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);



/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */





/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-section', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Section', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Custom section block for Ecoparts theme', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'welcome-add-page',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockClass: {
      type: 'string'
    },
    blockID: {
      type: 'string'
    },
    sectionClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        blockClass = _props$attributes.blockClass,
        blockID = _props$attributes.blockID,
        sectionClass = _props$attributes.sectionClass,
        setAttributes = props.setAttributes;
    setAttributes({
      blockClass: 'section'
    });

    var onIdChange = function onIdChange(newValue) {
      props.setAttributes({
        blockID: newValue
      });
    };

    var onClassChange = function onClassChange(newValue) {
      props.setAttributes({
        sectionClass: newValue
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: blockID,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass, sectionClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Section ID and class')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      className: "ec-attr-edit-textarea",
      value: blockID,
      onChange: onIdChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      className: "ec-attr-edit-textarea",
      value: sectionClass,
      onChange: onClassChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender, null);
      }
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        blockClass = _props$attributes2.blockClass,
        blockID = _props$attributes2.blockID,
        sectionClass = _props$attributes2.sectionClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      id: blockID,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass, sectionClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-separator', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Separator', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Custom elements separator for Ecoparts theme', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'minus',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        blockClass = props.attributes.blockClass,
        setAttributes = props.setAttributes;
    setAttributes({
      blockClass: 'separator'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    });
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        blockClass = props.attributes.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    });
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-teaser-grey', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Teaser Grey', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Light Grey Teaser', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'format-aside',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockContent: {
      source: 'text',
      selector: '.content'
    },
    blockTitle: {
      source: 'text',
      selector: '.header'
    },
    buttonText: {
      source: 'text',
      selector: '.link'
    },
    blockClass: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    text: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes3 = props.attributes,
        blockContent = _props$attributes3.blockContent,
        blockTitle = _props$attributes3.blockTitle,
        buttonText = _props$attributes3.buttonText,
        blockClass = _props$attributes3.blockClass,
        url = _props$attributes3.url,
        text = _props$attributes3.text,
        siteurl = _props$attributes3.siteurl,
        setAttributes = props.setAttributes;

    var onChangeBlockContent = function onChangeBlockContent(value) {
      setAttributes({
        blockContent: value
      });
    };

    var onChangeBlockTitle = function onChangeBlockTitle(value) {
      setAttributes({
        blockTitle: value
      });
    };

    var onChangeButtonText = function onChangeButtonText(value) {
      setAttributes({
        buttonText: value
      });
    };

    setAttributes({
      blockClass: 'epTeaserGrey'
    });
    var su = window.location.origin + '/wp-content/plugins/ecoparts-blocks/images/silver-button.png';
    setAttributes({
      siteurl: su
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(blockClass, className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Place link')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      url: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          text: post && post.title || 'Click here'
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h3",
      placeholder: "Enter block title here",
      value: blockTitle,
      onChange: onChangeBlockTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "content",
      tagName: "div",
      placeholder: "Enter block content here",
      value: blockContent,
      onChange: onChangeBlockContent
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "linkText",
      tagName: "p",
      placeholder: "Enter text to be displayed on button",
      value: buttonText,
      onChange: onChangeButtonText
    })));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes4 = props.attributes,
        blockContent = _props$attributes4.blockContent,
        blockTitle = _props$attributes4.blockTitle,
        buttonText = _props$attributes4.buttonText,
        blockClass = _props$attributes4.blockClass,
        url = _props$attributes4.url,
        text = _props$attributes4.text,
        siteurl = _props$attributes4.siteurl;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
      className: "header"
    }, blockTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "content",
      tagName: "div",
      value: blockContent
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "link",
      href: url
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: "linkText"
    }, buttonText)));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-container-outer', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Container Outer', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Custom outer container block for Ecoparts theme', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'welcome-add-page',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        blockClass = props.attributes.blockClass,
        setAttributes = props.setAttributes;
    setAttributes({
      blockClass: 'containerOuter'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender, null);
      }
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        blockClass = props.attributes.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-container-inner', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Container Inner', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Custom inner container block for Ecoparts theme', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'welcome-add-page',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockClass: {
      type: 'string'
    },
    innerWidth: {
      type: 'string'
    },
    innerClass: {
      type: 'string'
    },
    isSlider: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes5 = props.attributes,
        blockClass = _props$attributes5.blockClass,
        innerWidth = _props$attributes5.innerWidth,
        innerClass = _props$attributes5.innerClass,
        isSlider = _props$attributes5.isSlider,
        setAttributes = props.setAttributes;

    var onInnerWidthChange = function onInnerWidthChange(newValue) {
      props.setAttributes({
        innerWidth: newValue
      });
    };

    var onInnerClassChange = function onInnerClassChange(newValue) {
      props.setAttributes({
        innerClass: newValue
      });
    };

    var onSliderChange = function onSliderChange(newValue) {
      props.setAttributes({
        isSlider: newValue
      });
    };

    if (!isSlider || isSlider === '') {
      setAttributes({
        isSlider: 'no'
      });
    }

    setAttributes({
      blockClass: 'containerInner'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Inner width in % of parent width')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      className: "ec-attr-edit-textarea",
      value: innerWidth,
      onChange: onInnerWidthChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Inner class')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      className: "ec-attr-edit-textarea",
      value: innerClass,
      onChange: onInnerClassChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Is slider on mobile', 'ecoparts-blocks'),
      value: isSlider,
      options: [{
        label: 'Is not slider',
        value: 'no'
      }, {
        label: 'Is slider on mobile',
        value: 'yes'
      }],
      onChange: onSliderChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender, null);
      }
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes6 = props.attributes,
        blockClass = _props$attributes6.blockClass,
        innerWidth = _props$attributes6.innerWidth,
        innerClass = _props$attributes6.innerClass,
        isSlider = _props$attributes6.isSlider;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass, innerClass),
      style: {
        width: innerWidth
      },
      slideattribute: isSlider
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-parallax', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Ep Parallax container', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Parallax container for theme', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'format-image',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.bcgImage'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        backgroundImage = props.backgroundImage,
        _props$attributes7 = props.attributes,
        mediaID = _props$attributes7.mediaID,
        mediaURL = _props$attributes7.mediaURL,
        blockClass = _props$attributes7.blockClass,
        setAttributes = props.setAttributes;

    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      });
    };

    setAttributes({
      blockClass: 'epParallax'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: mediaID ? 'image-button' : 'button button-large',
          onClick: open
        }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Upload Image', 'ecoparts-blocks') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
          src: mediaURL,
          className: "bcgImage"
        }));
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender, null);
      }
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes8 = props.attributes,
        mediaID = _props$attributes8.mediaID,
        mediaURL = _props$attributes8.mediaURL,
        blockClass = _props$attributes8.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: mediaURL,
      class: "bcgImage"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-quote', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Quote', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Quote', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'format-quote',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    quoteText: {
      source: 'text',
      selector: '.quote'
    },
    quoteAuthor: {
      source: 'text',
      selector: '.author'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes9 = props.attributes,
        quoteText = _props$attributes9.quoteText,
        quoteAuthor = _props$attributes9.quoteAuthor,
        blockClass = _props$attributes9.blockClass,
        setAttributes = props.setAttributes;

    var onChangeQuoteText = function onChangeQuoteText(value) {
      setAttributes({
        quoteText: value
      });
    };

    var onChangeQuoteAuthor = function onChangeQuoteAuthor(value) {
      setAttributes({
        quoteAuthor: value
      });
    };

    setAttributes({
      blockClass: 'epQuote'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "quote",
      tagName: "p",
      placeholder: "Enter quote here",
      value: quoteText,
      onChange: onChangeQuoteText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "author",
      tagName: "p",
      placeholder: "Enter quote author here",
      value: quoteAuthor,
      onChange: onChangeQuoteAuthor
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes10 = props.attributes,
        quoteText = _props$attributes10.quoteText,
        quoteAuthor = _props$attributes10.quoteAuthor,
        blockClass = _props$attributes10.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "quote",
      tagName: "p",
      value: quoteText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "author",
      tagName: "p",
      value: quoteAuthor
    }));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-innermenu', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Inner Menu', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Inner Menu', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'media-text',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockText: {
      source: 'html',
      selector: '.text'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes11 = props.attributes,
        blockHeader = _props$attributes11.blockHeader,
        blockText = _props$attributes11.blockText,
        blockClass = _props$attributes11.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        blockHeader: value
      });
    };

    var onChangeblockText = function onChangeblockText(value) {
      setAttributes({
        blockText: value
      });
    };

    setAttributes({
      blockClass: 'epInnerMenu'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      multiline: "p",
      value: blockText,
      onChange: onChangeblockText
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes12 = props.attributes,
        blockHeader = _props$attributes12.blockHeader,
        blockText = _props$attributes12.blockText,
        blockClass = _props$attributes12.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: blockText
    }));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-textblock', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Text Block', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Text Block', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'media-text',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockHeader: {
      source: 'html',
      selector: '.header'
    },
    blockSubheader: {
      source: 'html',
      selector: '.subheader'
    },
    blockText: {
      source: 'html',
      selector: '.text'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes13 = props.attributes,
        blockHeader = _props$attributes13.blockHeader,
        blockSubheader = _props$attributes13.blockSubheader,
        blockText = _props$attributes13.blockText,
        blockClass = _props$attributes13.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        blockHeader: value
      });
    };

    var onChangeBlockSubheader = function onChangeBlockSubheader(value) {
      setAttributes({
        blockSubheader: value
      });
    };

    var onChangeblockText = function onChangeblockText(value) {
      setAttributes({
        blockText: value
      });
    };

    setAttributes({
      blockClass: 'epTextBlock'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h2",
      placeholder: "Enter header here",
      value: blockHeader,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "subheader",
      tagName: "h3",
      placeholder: "Enter subheader here",
      value: blockSubheader,
      onChange: onChangeBlockSubheader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      multiline: "p",
      value: blockText,
      onChange: onChangeblockText
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes14 = props.attributes,
        blockHeader = _props$attributes14.blockHeader,
        blockSubheader = _props$attributes14.blockSubheader,
        blockText = _props$attributes14.blockText,
        blockClass = _props$attributes14.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h2",
      value: blockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "subheader",
      tagName: "h3",
      value: blockSubheader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: blockText
    }));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-textblock2', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Text Block 2', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Text Block 2', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'media-text',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockHeader: {
      source: 'html',
      selector: '.header'
    },
    blockSubheader: {
      source: 'html',
      selector: '.subheader'
    },
    blockText: {
      source: 'html',
      selector: '.text'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes15 = props.attributes,
        blockHeader = _props$attributes15.blockHeader,
        blockSubheader = _props$attributes15.blockSubheader,
        blockText = _props$attributes15.blockText,
        blockClass = _props$attributes15.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        blockHeader: value
      });
    };

    var onChangeBlockSubheader = function onChangeBlockSubheader(value) {
      setAttributes({
        blockSubheader: value
      });
    };

    var onChangeblockText = function onChangeblockText(value) {
      setAttributes({
        blockText: value
      });
    };

    setAttributes({
      blockClass: 'epTextBlock2'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h2",
      placeholder: "Enter header here",
      value: blockHeader,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "subheader",
      tagName: "h3",
      placeholder: "Enter subheader here",
      value: blockSubheader,
      onChange: onChangeBlockSubheader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      multiline: "p",
      value: blockText,
      onChange: onChangeblockText
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes16 = props.attributes,
        blockHeader = _props$attributes16.blockHeader,
        blockSubheader = _props$attributes16.blockSubheader,
        blockText = _props$attributes16.blockText,
        blockClass = _props$attributes16.blockClass;

    if (!blockHeader) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
        className: "subheader",
        tagName: "h3",
        value: blockSubheader
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
        className: "text",
        tagName: "div",
        value: blockText
      }));
    }

    if (!blockSubheader) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
        className: "header",
        tagName: "h2",
        value: blockHeader
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
        className: "text",
        tagName: "div",
        value: blockText
      }));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h2",
      value: blockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "subheader",
      tagName: "h3",
      value: blockSubheader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: blockText
    }));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-event', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Event Block', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Event Block', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'media-text',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    eventHeader: {
      source: 'html',
      selector: '.header'
    },
    eventSubheader: {
      source: 'html',
      selector: '.subheader'
    },
    eventDate: {
      source: 'html',
      selector: '.date'
    },
    eventTime: {
      source: 'html',
      selector: '.time'
    },
    textHeader: {
      source: 'html',
      selector: '.textHeader'
    },
    eventText: {
      source: 'html',
      selector: '.text'
    },
    blockCta: {
      source: 'text',
      selector: '.cta'
    },
    url: {
      type: 'string'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes17 = props.attributes,
        eventHeader = _props$attributes17.eventHeader,
        eventSubheader = _props$attributes17.eventSubheader,
        eventDate = _props$attributes17.eventDate,
        eventTime = _props$attributes17.eventTime,
        textHeader = _props$attributes17.textHeader,
        eventText = _props$attributes17.eventText,
        blockCta = _props$attributes17.blockCta,
        url = _props$attributes17.url,
        blockClass = _props$attributes17.blockClass,
        setAttributes = props.setAttributes;

    var onChangeEventHeader = function onChangeEventHeader(value) {
      setAttributes({
        eventHeader: value
      });
    };

    var onChangeEventSubheader = function onChangeEventSubheader(value) {
      setAttributes({
        eventSubheader: value
      });
    };

    var onChangeEventDate = function onChangeEventDate(value) {
      setAttributes({
        eventDate: value
      });
    };

    var onChangeEventTime = function onChangeEventTime(value) {
      setAttributes({
        eventTime: value
      });
    };

    var onChangeTextHeader = function onChangeTextHeader(value) {
      setAttributes({
        textHeader: value
      });
    };

    var onChangeEventText = function onChangeEventText(value) {
      setAttributes({
        eventText: value
      });
    };

    var onChangeBlockCta = function onChangeBlockCta(value) {
      setAttributes({
        blockCta: value
      });
    };

    setAttributes({
      blockClass: 'epEventBlock'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Event url')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      url: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          text: post && post.title || ''
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h3",
      placeholder: "Enter header here",
      value: eventHeader,
      onChange: onChangeEventHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "subheader",
      tagName: "h4",
      placeholder: "Enter subheader here",
      value: eventSubheader,
      onChange: onChangeEventSubheader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "date",
      tagName: "h4",
      placeholder: "Enter date here",
      value: eventDate,
      onChange: onChangeEventDate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "time",
      tagName: "h4",
      placeholder: "Enter time here",
      value: eventTime,
      onChange: onChangeEventTime
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "textHeader",
      tagName: "h3",
      placeholder: "Enter text header here",
      value: textHeader,
      onChange: onChangeTextHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      value: eventText,
      onChange: onChangeEventText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "cta",
      tagName: "span",
      placeholder: "Enter cta here",
      value: blockCta,
      onChange: onChangeBlockCta
    })));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes18 = props.attributes,
        eventHeader = _props$attributes18.eventHeader,
        eventSubheader = _props$attributes18.eventSubheader,
        eventDate = _props$attributes18.eventDate,
        eventTime = _props$attributes18.eventTime,
        textHeader = _props$attributes18.textHeader,
        eventText = _props$attributes18.eventText,
        blockCta = _props$attributes18.blockCta,
        url = _props$attributes18.url,
        blockClass = _props$attributes18.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h3",
      value: eventHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "subheader",
      tagName: "h4",
      value: eventSubheader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "date",
      tagName: "h4",
      value: eventDate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "time",
      tagName: "h4",
      value: eventTime
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "textHeader",
      tagName: "h3",
      value: textHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: eventText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "url",
      href: url
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "cta",
      tagName: "span",
      value: blockCta
    })));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-vorurteil-block', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Vorurteil Block', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Vorurteil Block', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'media-text',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockHeader: {
      source: 'text',
      selector: '.header'
    },
    blockText: {
      source: 'html',
      selector: '.text'
    },
    blockQuote: {
      source: 'html',
      selector: '.quote'
    },
    blockCta: {
      source: 'text',
      selector: '.cta'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes19 = props.attributes,
        blockHeader = _props$attributes19.blockHeader,
        blockText = _props$attributes19.blockText,
        blockQuote = _props$attributes19.blockQuote,
        blockCta = _props$attributes19.blockCta,
        blockClass = _props$attributes19.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        blockHeader: value
      });
    };

    var onChangeblockText = function onChangeblockText(value) {
      setAttributes({
        blockText: value
      });
    };

    var onChangeblockQuote = function onChangeblockQuote(value) {
      setAttributes({
        blockQuote: value
      });
    };

    var onChangeblockCta = function onChangeblockCta(value) {
      setAttributes({
        blockCta: value
      });
    };

    setAttributes({
      blockClass: 'epVorurteilBlock'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "p",
      placeholder: "Enter header here",
      value: blockHeader,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      multiline: "p",
      value: blockText,
      onChange: onChangeblockText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "quote",
      tagName: "div",
      placeholder: "Enter quote here",
      multiline: "p",
      value: blockQuote,
      onChange: onChangeblockQuote
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "cta",
      tagName: "p",
      placeholder: "Enter cta here",
      value: blockCta,
      onChange: onChangeblockCta
    })));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes20 = props.attributes,
        blockHeader = _props$attributes20.blockHeader,
        blockText = _props$attributes20.blockText,
        blockQuote = _props$attributes20.blockQuote,
        blockCta = _props$attributes20.blockCta,
        blockClass = _props$attributes20.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "p",
      value: blockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: blockText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "quote",
      tagName: "div",
      value: blockQuote
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "cta",
      tagName: "p",
      value: blockCta
    })));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-teaser-horizontal', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Teaser Horizontal', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Teaser Horizontal', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'id',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockHeader: {
      source: 'text',
      selector: '.header'
    },
    blockText: {
      source: 'html',
      selector: '.text'
    },
    buttonText: {
      source: 'text',
      selector: '.buttonText'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: '.image',
      attribute: 'src'
    },
    url: {
      type: 'string'
    },
    direction: {
      type: 'string'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes21 = props.attributes,
        blockHeader = _props$attributes21.blockHeader,
        blockText = _props$attributes21.blockText,
        mediaID = _props$attributes21.mediaID,
        mediaURL = _props$attributes21.mediaURL,
        buttonText = _props$attributes21.buttonText,
        url = _props$attributes21.url,
        direction = _props$attributes21.direction,
        blockClass = _props$attributes21.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        blockHeader: value
      });
    };

    var onChangeBlockText = function onChangeBlockText(value) {
      setAttributes({
        blockText: value
      });
    };

    var onChangeButtonText = function onChangeButtonText(value) {
      setAttributes({
        buttonText: value
      });
    };

    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      });
    };

    var onDirectionChange = function onDirectionChange(value) {
      setAttributes({
        direction: value
      });
    };

    if (!direction) {
      setAttributes({
        direction: 'ltr'
      });
    }

    ;
    setAttributes({
      blockClass: 'epTeaserH'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass, direction)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Content direction')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Set content direction', 'ecoparts-blocks'),
      value: direction,
      options: [{
        label: 'text left, image right',
        value: 'ltr'
      }, {
        label: 'text right, image left',
        value: 'rtl'
      }],
      onChange: onDirectionChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      url: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          text: post && post.title || ''
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h3",
      placeholder: "Enter header here",
      value: blockHeader,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      multiline: "p",
      value: blockText,
      onChange: onChangeBlockText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "buttonText",
      tagName: "p",
      placeholder: "Enter button text here",
      value: buttonText,
      onChange: onChangeButtonText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: mediaID ? 'image-button' : 'button button-small',
          onClick: open
        }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Upload Image', 'ecoparts-blocks') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
          src: mediaURL,
          alt: blockHeader,
          className: "image"
        }));
      }
    }))));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes22 = props.attributes,
        blockHeader = _props$attributes22.blockHeader,
        blockText = _props$attributes22.blockText,
        mediaID = _props$attributes22.mediaID,
        mediaURL = _props$attributes22.mediaURL,
        url = _props$attributes22.url,
        buttonText = _props$attributes22.buttonText,
        direction = _props$attributes22.direction,
        blockClass = _props$attributes22.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass, direction)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "textContainer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h3",
      value: blockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: blockText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "imageContainerOuter"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imageContainerInner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: "image",
      src: mediaURL,
      alt: blockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: url,
      className: "blockLink"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "buttonText"
    }, buttonText)))));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-announcement', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Announcement', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Announcement', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'index-card',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockHeader: {
      source: 'html',
      selector: '.header'
    },
    blockText: {
      source: 'html',
      selector: '.text'
    },
    buttonText: {
      source: 'text',
      selector: '.buttonText'
    },
    url: {
      type: 'string'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes23 = props.attributes,
        blockHeader = _props$attributes23.blockHeader,
        blockText = _props$attributes23.blockText,
        buttonText = _props$attributes23.buttonText,
        url = _props$attributes23.url,
        blockClass = _props$attributes23.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        blockHeader: value
      });
    };

    var onChangeBlockText = function onChangeBlockText(value) {
      setAttributes({
        blockText: value
      });
    };

    var onChangeButtonText = function onChangeButtonText(value) {
      setAttributes({
        buttonText: value
      });
    };

    setAttributes({
      blockClass: 'epAnnons'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Content url')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      url: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          text: post && post.title || ''
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h3",
      placeholder: "Enter header here",
      value: blockHeader,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      multiline: "p",
      value: blockText,
      onChange: onChangeBlockText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "buttonText",
      tagName: "p",
      placeholder: "Enter button text here",
      value: buttonText,
      onChange: onChangeButtonText
    })));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes24 = props.attributes,
        blockHeader = _props$attributes24.blockHeader,
        blockText = _props$attributes24.blockText,
        url = _props$attributes24.url,
        buttonText = _props$attributes24.buttonText,
        blockClass = _props$attributes24.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h3",
      value: blockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: blockText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: url,
      className: "blockLink"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "buttonText"
    }, buttonText)));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-teaser-vertical', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Teaser Vertical', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Teaser Vertical', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'id',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    blockHeader: {
      source: 'text',
      selector: '.header'
    },
    blockText: {
      source: 'html',
      selector: '.text'
    },
    buttonText: {
      source: 'text',
      selector: '.buttonText'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: '.image',
      attribute: 'src'
    },
    url: {
      type: 'string'
    },
    date: {
      type: 'string'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes25 = props.attributes,
        blockHeader = _props$attributes25.blockHeader,
        blockText = _props$attributes25.blockText,
        mediaID = _props$attributes25.mediaID,
        mediaURL = _props$attributes25.mediaURL,
        buttonText = _props$attributes25.buttonText,
        url = _props$attributes25.url,
        date = _props$attributes25.date,
        blockClass = _props$attributes25.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        blockHeader: value
      });
    };

    var onChangeBlockText = function onChangeBlockText(value) {
      setAttributes({
        blockText: value
      });
    };

    var onChangeButtonText = function onChangeButtonText(value) {
      setAttributes({
        buttonText: value
      });
    };

    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      });
    };

    var onDateChange = function onDateChange(value) {
      setAttributes({
        date: value
      });
    };

    setAttributes({
      blockClass: 'epTeaserV'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Content url')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      url: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          text: post && post.title || ''
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: mediaID ? 'image-button' : 'button button-small',
          onClick: open
        }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Upload Image', 'ecoparts-blocks') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
          src: mediaURL,
          alt: blockHeader,
          className: "image"
        }));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      className: "date",
      placeholder: "Enter date here",
      value: date,
      onChange: onDateChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h3",
      placeholder: "Enter header here",
      value: blockHeader,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "text",
      tagName: "div",
      placeholder: "Enter text here",
      multiline: "p",
      value: blockText,
      onChange: onChangeBlockText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "buttonText",
      tagName: "p",
      placeholder: "Enter button text here",
      value: buttonText,
      onChange: onChangeButtonText
    }))));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes26 = props.attributes,
        blockHeader = _props$attributes26.blockHeader,
        blockText = _props$attributes26.blockText,
        mediaID = _props$attributes26.mediaID,
        mediaURL = _props$attributes26.mediaURL,
        url = _props$attributes26.url,
        buttonText = _props$attributes26.buttonText,
        date = _props$attributes26.date,
        blockClass = _props$attributes26.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "imageContainerOuter"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imageContainerInner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: "image",
      src: mediaURL,
      alt: blockHeader
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "textContainer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      class: "date"
    }, date), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h3",
      value: blockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "text",
      tagName: "div",
      value: blockText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: url,
      className: "blockLink"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "buttonText"
    }, buttonText))));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-event-ad', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Event Ad', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Event Ad', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'pressthis',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: '.image',
      attribute: 'src'
    },
    url: {
      type: 'string'
    },
    blockClass: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes27 = props.attributes,
        mediaID = _props$attributes27.mediaID,
        mediaURL = _props$attributes27.mediaURL,
        url = _props$attributes27.url,
        blockClass = _props$attributes27.blockClass,
        setAttributes = props.setAttributes;

    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      });
    };

    setAttributes({
      blockClass: 'epEventAd'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Content url')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      url: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          text: post && post.title || ''
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref4) {
        var open = _ref4.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: mediaID ? 'image-button' : 'button button-small',
          onClick: open
        }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Upload Image', 'ecoparts-blocks') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
          src: mediaURL,
          className: "image"
        }));
      }
    })));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes28 = props.attributes,
        mediaID = _props$attributes28.mediaID,
        mediaURL = _props$attributes28.mediaURL,
        url = _props$attributes28.url,
        blockClass = _props$attributes28.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      class: "url",
      href: url
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: "image",
      src: mediaURL,
      alt: "event"
    })));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-inner-header-1', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Inner Header 1', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Inner Header 1', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'sticky',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    header: {
      source: 'html',
      selector: '.header'
    },
    subheader: {
      source: 'html',
      selector: '.subheader'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes29 = props.attributes,
        header = _props$attributes29.header,
        subheader = _props$attributes29.subheader,
        blockClass = _props$attributes29.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        header: value
      });
    };

    var onChangeBlockSubheader = function onChangeBlockSubheader(value) {
      setAttributes({
        subheader: value
      });
    };

    setAttributes({
      blockClass: 'epheader1'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h1",
      placeholder: "Enter header here",
      value: header,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "subheader",
      tagName: "h3",
      placeholder: "Enter subheader here",
      value: subheader,
      onChange: onChangeBlockSubheader
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes30 = props.attributes,
        header = _props$attributes30.header,
        subheader = _props$attributes30.subheader,
        blockClass = _props$attributes30.blockClass;

    if (!subheader) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
        className: "header",
        tagName: "h1",
        value: header
      }));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h1",
      value: header
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "subheader",
      tagName: "h3",
      value: subheader
    }));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-inner-header-2', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Inner Header 2', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Inner Header 2', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'sticky',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    header: {
      source: 'html',
      selector: '.header'
    },
    subheader: {
      source: 'html',
      selector: '.subheader'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes31 = props.attributes,
        header = _props$attributes31.header,
        subheader = _props$attributes31.subheader,
        blockClass = _props$attributes31.blockClass,
        setAttributes = props.setAttributes;

    var onChangeBlockHeader = function onChangeBlockHeader(value) {
      setAttributes({
        header: value
      });
    };

    var onChangeBlockSubheader = function onChangeBlockSubheader(value) {
      setAttributes({
        subheader: value
      });
    };

    setAttributes({
      blockClass: 'epheader2'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "header",
      tagName: "h1",
      placeholder: "Enter header here",
      value: header,
      onChange: onChangeBlockHeader
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "subheader",
      tagName: "h3",
      placeholder: "Enter subheader here",
      value: subheader,
      onChange: onChangeBlockSubheader
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes32 = props.attributes,
        header = _props$attributes32.header,
        subheader = _props$attributes32.subheader,
        blockClass = _props$attributes32.blockClass;

    if (!subheader) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
        className: "header",
        tagName: "h1",
        value: header
      }));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "header",
      tagName: "h1",
      value: header
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "subheader",
      tagName: "h3",
      value: subheader
    }));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ecoparts-blocks/ep-single-button', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('EP Single Buttonl', 'ecoparts-blocks'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Single Button', 'ecoparts-blocks'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'ecoparts-blocks',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'yes',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  attributes: {
    buttonText: {
      source: 'text',
      selector: '.button'
    },
    url: {
      type: 'string'
    },
    blockClass: {
      type: 'string'
    },
    onClick: {
      type: 'string',
      source: 'meta',
      selector: '.button',
      meta: 'onclick'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes33 = props.attributes,
        buttonText = _props$attributes33.buttonText,
        url = _props$attributes33.url,
        onClick = _props$attributes33.onClick,
        blockClass = _props$attributes33.blockClass,
        setAttributes = props.setAttributes;

    var onChangeButtonText = function onChangeButtonText(value) {
      setAttributes({
        buttonText: value
      });
    };

    var onChangeButtonOnclick = function onChangeButtonOnclick(value) {
      setAttributes({
        onClick: value
      });
    };

    setAttributes({
      blockClass: 'epSingleBtn'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Content url')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      url: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          text: post && post.title || ''
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      placeholder: "Enter button text",
      value: buttonText,
      onChange: onChangeButtonText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      placeholder: "Enter button onclick",
      value: onClick,
      onChange: onChangeButtonOnclick
    })));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes34 = props.attributes,
        buttonText = _props$attributes34.buttonText,
        url = _props$attributes34.url,
        onClick = _props$attributes34.onClick,
        blockClass = _props$attributes34.blockClass;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      href: true,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, blockClass, 'button'),
      onclick: onClick
    }, "href", url), buttonText);
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map