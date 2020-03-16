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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/message.json":
/*!*****************************!*\
  !*** ./public/message.json ***!
  \*****************************/
/*! exports provided: message, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"message\":{\"zig_zag\":{\"info\":\"Cold-calling: You respond to someone contacting you out of the blue to move their pension\",\"icon\":\"a phone\",\"reduction\":400,\"path\":\"assets/scenes/jmanassets/cold-call.png\"},\"splitter\":{\"info\":\"Offered withdrawal: Transfer your pension to a scheme because they offer you early access to your pension\",\"icon\":\"a non-standard coloured coin\",\"reduction\":800,\"path\":\"assets/scenes/jmanassets/early-withdrawl.png\"},\"accelerator\":{\"info\":\"‘Free’ financial advice: You engaged with a company because they offered you free financial advice\",\"icon\":\"pound signs with a cross through it\",\"reduction\":300,\"path\":\"assets/scenes/jmanassets/free-advice.png\"},\"black_out\":{\"info\":\"Black out: You engaged with a company because they offered a unique or limited investment opportunity\",\"icon\":\"something unusual\",\"reduction\":500,\"path\":\"assets/scenes/jmanassets/scam.png\"},\"speedy\":{\"info\":\"Time pressure: You agree to something because you are told the offer has a time limit on it\",\"icon\":\" clock\",\"reduction\":600,\"path\":\"assets/scenes/jmanassets/time-pressure.png\"},\"diagonal\":{\"info\":\"Fake Scam Vigilante: Fake scammer vigilantes working on people’s fear of scams to get them to move their pension\",\"icon\":\"mini scam man\",\"reduction\":700,\"path\":\"assets/scenes/jmanassets/fake-vigilant.png\"},\"normal_scam\":{\"info\":\"Normal Scam: High returns with low risk\",\"icon\":\"FCA logo\",\"reduction\":100,\"path\":\"assets/scenes/jmanassets/Cold_call.png\"},\"refuse\":{\"info\":\"Refuse: Check FCA registered - get FCA number\",\"icon\":\"FCA logo\",\"path\":\"assets/scenes/jmanassets/refuse.png\",\"addition\":100},\"pension_wise\":{\"info\":\"Pension Wise: Check FCA registered - get FCA number\",\"icon\":\"FCA logo\",\"path\":\"assets/scenes/jmanassets/Pensionwise.png\",\"addition\":200},\"thinking_about\":{\"info\":\"Thining About: Ask to sleep on your decision/ think about it\",\"icon\":\"FCA logo\",\"path\":\"assets/scenes/jmanassets/think-about-it.png\",\"addition\":300},\"invisiblity_boon\":{\"info\":\"FCA: Check FCA registered - get FCA number\",\"icon\":\"FCA logo\",\"path\":\"assets/scenes/jmanassets/fca.png\",\"addition\":400},\"dont_transfer\":{\"info\":\"Don't transfer: Check with current provider before transferring\",\"icon\":\"FCA logo\",\"path\":\"assets/scenes/jmanassets/dont-transfer.png\",\"addition\":500}}}");

/***/ }),

/***/ "./public/stage.json":
/*!***************************!*\
  !*** ./public/stage.json ***!
  \***************************/
/*! exports provided: stage_0, stage_1, stage_2, stage_3, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"stage_0\":{\"message\":\"Don’t let a scammer steal your pension pot! \",\"instruction\":\"Swipe left and right to move Scam Man, and swipe upwards to activate his torch and shine a light on an incoming scam! Collect as many coins and bonuses as you can, so you can retire happily at the age of 65! \",\"scams\":[\"normal_scam\"],\"boons\":[\"normal_boon\"]},\"stage_1\":{\"scams\":[\"zig_zag\",\"accelerator\"],\"boons\":[\"refuse\",\"pension_wise\"]},\"stage_2\":{\"scams\":[\"speedy\",\"diagonal\"],\"boons\":[\"thinking_about\",\"invisiblity_boon\"]},\"stage_3\":{\"scams\":[\"diagonal\",\"splitter\"],\"boons\":[\"dont_transfer\",\"invisiblity_boon\"]}}");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _base_Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/Log.js */ "./src/base/Log.js");
/* harmony import */ var _game_levels_RunnerLevel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/levels/RunnerLevel.js */ "./src/game/levels/RunnerLevel.js");
/* harmony import */ var _game_levels_HomeMenuLevel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/levels/HomeMenuLevel.js */ "./src/game/levels/HomeMenuLevel.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Base
 // Game Levels



/**
 * Class Description
 * 
 * To handle High Level entities that are applicable for the entire game
 */

var Game =
/*#__PURE__*/
function () {
  function Game() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Game);

    /**
     * Sets game options
     */
    this.options = options;
    /**
     * Keyboard pressed keys
     */

    this.keys = {};
    /**
     * Is game paused?
     */

    this.paused = false;
    /**
     * Can be used to log objects and debug the game
     */

    this.log = new _base_Log_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    /**
     * Starts the BABYLON engine on the Canvas element
     */

    this.canvas = document.getElementById("renderCanvas");
    this.engine = new BABYLON.Engine(this.canvas, true);
    this.currentLevel = null;
    this.currentLevelName = 'HomeMenuLevel';
    this.levels = {
      'HomeMenuLevel': new _game_levels_HomeMenuLevel_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
      'RunnerLevel': new _game_levels_RunnerLevel_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.listenKeys();
      this.lintenTouchEvents();
      this.listenOtherEvents();
      this.startLevel();
    }
  }, {
    key: "pause",
    value: function pause(autoAction) {
      if (!this.paused && autoAction && this.currentLevel.player) {
        this.currentLevel.player.coinsTextControl.isVisible = false;
        this.currentLevel.player.pauseButtonControl.isVisible = false;
        this.currentLevel.player.soundUnMuteButtonControl.isVisible = false;
        this.currentLevel.player.soundMuteButtonControl.isVisible = false;
        this.currentLevel.player.message.pauseScreen(this.currentLevel.player.coins, this.currentLevel.player.scamCount, this.currentLevel.player.boonCount, this.currentLevel.scams ? this.currentLevel.scams.scamSet : null);
      }

      this.paused = true;
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.paused;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.paused = false;
    }
    /**
    * Function to set flags based on User Control Actions via Keyboard
    */

  }, {
    key: "listenKeys",
    value: function listenKeys() {
      document.addEventListener('keydown', keyDown.bind(this));
      document.addEventListener('keyup', keyUp.bind(this));
      this.keys.up = false;
      this.keys.down = false;
      this.keys.left = false;
      this.keys.right = false;
      this.keys.shoot = false;

      function keyDown(e) {
        if (e.keyCode == 87 || e.keyCode == 38) {
          //Arrow Up
          this.keys.shoot = 1;
        } else if (e.keyCode == 65 || e.keyCode == 37) {
          //Arrow Left
          this.keys.left = 1;
        } else if (e.keyCode == 68 || e.keyCode == 39) {
          //Arrow Right
          this.keys.right = 1;
        } else if (e.keyCode == 80 || e.keyCode == 32) {
          //Arrow Right
          this.keys.shoot = 1;
        }
      }

      function keyUp(e) {
        if (e.keyCode == 87 || e.keyCode == 38) {
          //Arrow Up
          this.keys.shoot = 0;
        } else if (e.keyCode == 65 || e.keyCode == 37) {
          //Arrow Left
          this.keys.left = 0;
        } else if (e.keyCode == 68 || e.keyCode == 39) {
          //Arrow Right
          this.keys.right = 0;
        } else if (e.keyCode == 80 || e.keyCode == 32) {
          //Arrow Right
          this.keys.shoot = 0;
        }
      }
    }
    /**
     * Function to set flags based on User Control Action via Touch
     */

  }, {
    key: "lintenTouchEvents",
    value: function lintenTouchEvents() {
      var _this = this;

      var hammertime = new Hammer(document.body);
      hammertime.get('swipe').set({
        direction: Hammer.DIRECTION_ALL
      }); // hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
      // hammertime.on('panleft', (ev) => {
      //     this.keys.left = 1;
      //     setTimeout(() => {
      //         this.keys.left = 0;
      //     }, 10);
      // });
      // hammertime.on('panright', (ev) => {
      //     this.keys.right = 1;
      //     setTimeout(() => {
      //         this.keys.right = 0;
      //     }, 10);
      // });
      // hammertime.on('panup', (ev) => {
      //     this.keys.shoot = 1;
      //     setTimeout(() => {
      //         this.keys.shoot = 0;
      //     }, 10);
      // });

      hammertime.on('swipeup', function (ev) {
        _this.keys.shoot = 1; // Resets the key after some milleseconds

        setTimeout(function () {
          _this.keys.shoot = 0;
        }, 150);
      });
      hammertime.on('swipedown', function (ev) {
        _this.keys.down = 1;
        setTimeout(function () {
          _this.keys.down = 0;
        }, 100);
      });
      hammertime.on('swipeleft', function (ev) {
        _this.keys.left = 2;
        setTimeout(function () {
          _this.keys.left = 0;
        }, 150);
      });
      hammertime.on('swiperight', function (ev) {
        _this.keys.right = 2;
        setTimeout(function () {
          _this.keys.right = 0;
        }, 150);
      });
    }
    /**
     * Function to pause/play when user changes focus away from window
     */

  }, {
    key: "listenOtherEvents",
    value: function listenOtherEvents() {
      var _this2 = this;

      window.addEventListener('blur', function () {
        _this2.pause(true);
      });
      window.addEventListener('focus', function () {// this.resume();
      });
    }
    /**
     * 
     * @param {string} levelName - Switch to HomeScreen/GameScreen
     */

  }, {
    key: "goToLevel",
    value: function goToLevel(levelName) {
      if (!this.levels[levelName]) {
        console.error('A level with name ' + levelName + ' does not exists');
        return;
      }

      if (this.currentLevel) {
        this.currentLevel.exit();
      }

      this.currentLevelName = levelName;
      this.startLevel();
    }
  }, {
    key: "startLevel",
    value: function startLevel() {
      this.currentLevel = this.levels[this.currentLevelName];
      this.currentLevel.start();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.startRenderLoop();
      window.addEventListener("resize", function () {
        _this3.engine.resize();
      });
    }
  }, {
    key: "startRenderLoop",
    value: function startRenderLoop() {
      var _this4 = this;

      this.engine.runRenderLoop(function () {
        _this4.currentLevel.scene.render();
      });
    }
  }, {
    key: "stopRenderLoop",
    value: function stopRenderLoop() {
      this.engine.stopRenderLoop();
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      }

      return false;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
// The Game main class

window.GAME = null; // Initialize GAME once Page is Loaded

var app = {
  init: function init() {
    GAME = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](window.initialGameOptions);
    GAME.start();
  }
};
window.addEventListener('load', function () {
  app.init();
});

/***/ }),

/***/ "./src/base/AssetsDatabase.js":
/*!************************************!*\
  !*** ./src/base/AssetsDatabase.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssetsDatabase; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssetsDatabase =
/*#__PURE__*/
function () {
  function AssetsDatabase(scene, finishCallback) {
    _classCallCheck(this, AssetsDatabase);

    this.scene = scene;
    this.meshes = [];
    this.sounds = [];
    this.manager = new BABYLON.AssetsManager(this.scene);

    this.manager.onFinish = function (tasks) {
      if (finishCallback) finishCallback(tasks);
    };
  }
  /**
   * Adds a sound to be loaded
   * @param {*} name 
   * @param {*} file 
   * @param {*} options 
   */


  _createClass(AssetsDatabase, [{
    key: "addSound",
    value: function addSound(name, file, options) {
      var _this = this;

      var fileTask = this.manager.addBinaryFileTask(name + '__SoundTask', file);

      fileTask.onSuccess = function (task) {
        _this.sounds[name] = new BABYLON.Sound(name, task.data, _this.scene, null, options); // Execute a success callback

        if (options.onSuccess) {
          options.onSuccess(_this.sounds[name]);
        }
      };

      return this.sounds[name];
    }
    /**
     * Adds a music (sound with some predefined parametes that can be overwriten)
     * By default, musics are automatically played in loop
     * @param {*} name 
     * @param {*} file 
     * @param {*} options 
     */

  }, {
    key: "addMusic",
    value: function addMusic(name, file) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options.loop = typeof options.loop !== 'undefined' ? options.loop : true;
      options.volume = typeof options.volume !== 'undefined' ? options.volume : 0.3;
      options.autoplay = typeof options.autoplay !== 'undefined' ? options.autoplay : false;
      return this.addSound(name, file, options);
    }
  }, {
    key: "addMesh",
    value: function addMesh() {// To be implemented
    }
  }, {
    key: "getMesh",
    value: function getMesh(name) {
      return this.meshes[name];
    }
  }, {
    key: "getSound",
    value: function getSound(name) {
      return this.sounds[name];
    }
  }, {
    key: "load",
    value: function load() {
      this.manager.load();
    }
  }]);

  return AssetsDatabase;
}();



/***/ }),

/***/ "./src/base/Level.js":
/*!***************************!*\
  !*** ./src/base/Level.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var _AssetsDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetsDatabase */ "./src/base/AssetsDatabase.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Level =
/*#__PURE__*/
function () {
  function Level() {
    _classCallCheck(this, Level);

    /**
     * We can use this object to store materials that can be reused along the game
     */
    this.materials = {};
    this.scene = null;
    this.assets = null;
    this.foreground = null;
  }

  _createClass(Level, [{
    key: "start",
    value: function start() {
      GAME.resume();
      GAME.stopRenderLoop();

      if (this.setProperties) {
        this.setProperties();
      } else {
        GAME.log.debugWarning('The setProperties method is recommended to initialize the Level properties');
      }

      this.createScene();
    }
  }, {
    key: "createScene",
    value: function createScene() {
      var _this = this;

      GAME.engine.displayLoadingUI(); // Create the scene space

      this.scene = new BABYLON.Scene(GAME.engine);

      if (GAME.currentLevelName === 'RunnerLevel') {
        // To change bg image based on device
        var imgPath = "/assets/scenes/game_bg.png";

        if (GAME.isMobile()) {
          imgPath = "/assets/scenes/game_bg.png";
        }

        var background = new BABYLON.Layer("back", imgPath, this.scene);
        background.isBackground = true;
      } else {
        var _imgPath = "/assets/scenes/white_bg.png";
        var background = new BABYLON.Layer("back", _imgPath, this.scene);
        background.isBackground = true;
      }

      this.foreground = new BABYLON.Layer("front", "/assets/scenes/distort1.png", this.scene, false);
      this.foreground.layerMask = 0; // Add assets management and execute beforeRender after finish

      this.assets = new _AssetsDatabase__WEBPACK_IMPORTED_MODULE_0__["default"](this.scene, function () {
        GAME.log.debug('Level Assets loaded');

        if (_this.buildScene) {
          _this.buildScene();
        } else {
          GAME.log.debugWarning('You can add the buildScene method to your level to define your scene');
        } // If has the beforeRender method


        if (_this.beforeRender) {
          _this.scene.registerBeforeRender(_this.beforeRender.bind(_this));
        } else {
          GAME.log.debugWarning('You can define animations and other game logics that happends inside the main loop on the beforeRender method');
        }

        GAME.startRenderLoop();
      });

      if (this.setupAssets) {
        this.setupAssets();
      } // Load the assets


      this.assets.load();
      return this.scene;
    }
  }, {
    key: "exit",
    value: function exit() {
      this.scene.dispose();
      this.scene = null;
    }
  }, {
    key: "addMaterial",
    value: function addMaterial(material) {
      this.materials[material.name] = material;
    }
  }, {
    key: "getMaterial",
    value: function getMaterial(materialName) {
      return this.materials[materialName];
    }
  }, {
    key: "removeMaterial",
    value: function removeMaterial(materialName) {
      var material = null;

      if (material = this.materials[materialName]) {
        material.dispose();
        delete this.materials[materialName];
      }
    }
  }]);

  return Level;
}();



/***/ }),

/***/ "./src/base/Log.js":
/*!*************************!*\
  !*** ./src/base/Log.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Log =
/*#__PURE__*/
function () {
  function Log() {
    var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, Log);

    this.currentID = 0;
    this.logs = [];
    this.enabled = enabled;
  }

  _createClass(Log, [{
    key: "push",
    value: function push() {
      var log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.enabled) return;
      log.ID = ++this.currentID;
      this.logs.push(log);
    }
    /**
     * Simple log method to show what something is doing at moment
     * @param {*} what 
     */

  }, {
    key: "doing",
    value: function doing() {
      var what = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.push({
        'doing': what
      });
    }
  }, {
    key: "getLast",
    value: function getLast() {
      var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.logs.slice(-quantity);
    }
  }, {
    key: "logLast",
    value: function logLast() {
      var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      console.log(this.getLast(quantity));
    }
  }, {
    key: "get",
    value: function get() {
      return this.logs;
    }
  }, {
    key: "log",
    value: function log() {
      console.log(this.logs);
    }
  }, {
    key: "debug",
    value: function debug(data) {
      if (GAME.options.debugMode) {
        console.log('DEBUG LOG: ' + data);
      }
    }
  }, {
    key: "debugWarning",
    value: function debugWarning(data) {
      if (GAME.options.debugMode) {
        console.warn('DEBUG LOG: ' + data);
      }
    }
  }, {
    key: "debugError",
    value: function debugError(data) {
      if (GAME.options.debugMode) {
        console.error('DEBUG LOG: ' + data);
      }
    }
  }]);

  return Log;
}();



/***/ }),

/***/ "./src/base/UI.js":
/*!************************!*\
  !*** ./src/base/UI.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI; });
/* harmony import */ var _public_message_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../public/message.json */ "./public/message.json");
var _public_message_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../public/message.json */ "./public/message.json", 1);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game.js */ "./src/Game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var UI =
/*#__PURE__*/
function () {
  function UI(uiName) {
    _classCallCheck(this, UI);

    this.currentControlID = 0;
    this.controls = [];
    this.menuTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(uiName);
  }

  _createClass(UI, [{
    key: "addButton",
    value: function addButton(name, text) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var button = new BABYLON.GUI.Button.CreateSimpleButton(name, text);
      button.width = options.width || 0.5;
      button.height = options.height || '60px';
      button.color = options.color || 'black';
      button.outlineWidth = options.outlineWidth || 0;
      button.fontSize = options.fontSize || '20em';
      button.outlineColor = options.outlineColor || button.color;
      button.background = options.background || 'white';
      button.horizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      button.verticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      button.left = options.left || '0px';
      button.right = options.right || '0px';
      button.top = options.top || '0px';
      button.textHorizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      button.textVerticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

      if (options.onclick) {
        button.onPointerUpObservable.add(options.onclick);
      }

      this.menuTexture.addControl(button);
      this.add(button);
      return button;
    }
  }, {
    key: "addImgButton",
    value: function addImgButton(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var imgbutton = new BABYLON.GUI.Button.CreateImageOnlyButton(name, options.imgpath);
      imgbutton.thickness = 0;
      imgbutton.width = options.width || 0.5;
      imgbutton.height = options.height || '60px';
      imgbutton.color = options.color || 'black';
      imgbutton.outlineWidth = options.outlineWidth || 0;
      imgbutton.outlineColor = options.outlineColor || imgbutton.color;
      imgbutton.background = options.background || 'transparent';
      imgbutton.horizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      imgbutton.verticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      imgbutton.left = options.left || '0px';
      imgbutton.right = options.right || '0px';
      imgbutton.top = options.top || '20px';
      imgbutton.textHorizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      imgbutton.textVerticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

      if (options.onclick) {
        imgbutton.onPointerUpObservable.add(options.onclick);
      }

      this.menuTexture.addControl(imgbutton);
      this.add(imgbutton);
      return imgbutton;
    }
  }, {
    key: "pauseScreen",
    value: function pauseScreen(coins, danger, safety, scamset) {
      GAME.pause();
      var background = new BABYLON.GUI.Rectangle();
      background.width = 1;
      background.height = 1;
      background.thickness = 0;
      background.background = "#0EAFDE";
      background.alpha = 1;
      this.menuTexture.addControl(background);
      var screen = new BABYLON.GUI.Rectangle();
      screen.width = 0.9;
      screen.height = 1;
      screen.thickness = 0;
      screen.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      background.addControl(screen);
      var pointText = new BABYLON.GUI.TextBlock('Pension Pot', 'Pension pot £:' + coins);
      pointText.top = '7em';
      pointText.color = GAME.options.pointsTextColor;
      pointText.outlineColor = GAME.options.pointsOutlineTextColor;
      pointText.outlineWidth = 0;
      pointText.fontSize = '15px';
      pointText.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      pointText.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      screen.addControl(pointText);
      var scamText = new BABYLON.GUI.TextBlock('Scam Count', 'Scam Count :' + danger);
      scamText.top = '7em';
      scamText.color = GAME.options.pointsTextColor;
      scamText.outlineColor = GAME.options.pointsOutlineTextColor;
      scamText.outlineWidth = 0;
      scamText.fontSize = '12px';
      scamText.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
      scamText.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      screen.addControl(scamText);
      var boonText = new BABYLON.GUI.TextBlock('Boon Count', 'Boon Count :' + safety);
      boonText.top = '21em'; // boonText.left =  (GAME.isMobile() ? '-10em' : '-100em');

      boonText.color = GAME.options.pointsTextColor;
      boonText.outlineColor = GAME.options.pointsOutlineTextColor;
      boonText.outlineWidth = 0;
      boonText.fontSize = '12px';
      boonText.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
      boonText.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      screen.addControl(boonText);

      if (scamset && scamset.size) {
        var arr = Array.from(scamset);
        var temp = 0;

        for (var index = 0; index < scamset.size; index++) {
          var scamName = arr[index];
          var message = _public_message_json__WEBPACK_IMPORTED_MODULE_0__.message;
          var image = new BABYLON.GUI.Image("icon", message[scamName].path);
          image.width = 0.15;
          image.height = 0.08;
          image.top = 36 + temp;
          image.left = 0.1;
          image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
          image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
          screen.addControl(image);
          var display = new BABYLON.GUI.Rectangle();
          display.width = 0.75;
          display.height = 0.075;
          display.thickness = 0;
          display.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
          display.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
          display.top = 42 + temp;
          screen.addControl(display);
          var scamDescription = new BABYLON.GUI.TextBlock('Scam Description', message[scamName].info);
          scamDescription.color = GAME.options.pointsTextColor;
          scamDescription.outlineColor = GAME.options.pointsOutlineTextColor;
          scamDescription.outlineWidth = 0;
          scamDescription.top = '1px';
          scamDescription.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
          scamDescription.fontSize = '12px';
          scamDescription.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
          scamDescription.textWrapping = true;
          scamDescription.lineSpacing = '0px';
          display.addControl(scamDescription);

          if (GAME.isMobile()) {
            temp += 55;
          } else {
            temp += 100;
          }
        }
      } else {
        var info = new BABYLON.GUI.TextBlock("CASUAL", "You haven't hit any scams");
        info.color = 'red';
        info.fontSize = "30em"; // info.paddingBottom = '150px';

        screen.addControl(info);
      }

      var buttonResume = new BABYLON.GUI.Button.CreateSimpleButton('RESUME', 'RESUME');
      buttonResume.width = 0.2;
      buttonResume.height = 0.05;
      buttonResume.color = 'black';
      buttonResume.fontSize = "10em";
      buttonResume.background = 'white';
      buttonResume.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      buttonResume.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
      buttonResume.top = '-5em';
      buttonResume.onPointerUpObservable.add(function () {
        GAME.resume();
        background.dispose();
        screen.dispose();
      });
      screen.addControl(buttonResume);
    }
  }, {
    key: "addText",
    value: function addText(text) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var textControl = new BABYLON.GUI.TextBlock();
      textControl.width = options.width || 0;
      textControl.text = text;
      textControl.color = options.color || 'black';
      textControl.fontSize = options.fontSize || 20;
      textControl.outlineWidth = options.outlineWidth || 0;
      textControl.outlineColor = options.outlineColor || "black";
      textControl.lineSpacing = options.lineSpacing || '5px';
      textControl.left = options.left || '0px';
      textControl.paddingRight = options.paddingRight || '0px';
      textControl.top = options.top || '0px';
      textControl.textHorizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      textControl.textVerticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      textControl.textWrapping = options.wrapping || true;
      this.menuTexture.addControl(textControl);
      this.add(textControl);
      return textControl;
    }
  }, {
    key: "addImage",
    value: function addImage(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var img = new BABYLON.GUI.Image(name, options.imgpath);
      img.thickness = 0;
      img.strech = options.strech || BABYLON.GUI.Image.stretch_uniform;
      img.width = options.width || 0.5;
      img.height = options.height || '60px';
      img.color = options.color || 'black';
      img.outlineWidth = options.outlineWidth || 0;
      img.outlineColor = options.outlineColor || img.color;
      img.background = options.background || 'transparent';
      img.horizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      img.verticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      img.left = options.left || '0px';
      img.right = options.right || '0px';
      img.top = options.top || '0px';
      img.textHorizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      img.textVerticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      this.menuTexture.addControl(img);
      this.add(img);
      return img;
    }
  }, {
    key: "displayMessage",
    value: function displayMessage(scamhitted, signal) {
      GAME.pause();
      var rect1 = new BABYLON.GUI.Rectangle();
      var label0 = new BABYLON.GUI.TextBlock("Educational Message", scamhitted);
      var hit = new BABYLON.GUI.TextBlock("Signal", signal);
      hit.color = signal == 'HIT IT' ? 'red' : 'green';

      if (GAME.isMobile()) {
        rect1.width = 1;
        rect1.height = '55px';
        label0.fontSize = "14em";
        label0.lineSpacing = '1px';
        hit.fontSize = "30em";
        hit.paddingBottom = '150px';
        label0.top = "1px";
      } else {
        hit.fontSize = "45em";
        hit.paddingBottom = '250px';
        rect1.width = 1;
        rect1.height = '130px';
        label0.fontSize = "35em";
        label0.lineSpacing = '2px';
        label0.top = "18px";
      }

      rect1.cornerRadius = 0;
      rect1.thickness = 0;
      rect1.background = "grey";
      rect1.alpha = 0.7; // rect1.horizontalAlignment = BABYLON.GUI.Control.horizontal_alignment_left;

      this.menuTexture.addControl(rect1);
      this.menuTexture.addControl(hit);
      label0.fontFamily = "monospace";
      label0.color = "white";
      label0.textVerticalAlignment = 0;
      label0.textWrapping = true; // label0.resizeToFit = true;
      // label0.horizontalAlignment = BABYLON.GUI.Control.horizontal_alignment_left;

      rect1.addControl(label0);
      setTimeout(function () {
        // label0.dispose();
        hit.dispose();
        rect1.dispose();
        GAME.resume();
      }, GAME.options.messageReadTime);
    }
  }, {
    key: "add",
    value: function add(control) {
      control.uiControlID = this.currentControlID++;
      this.controls.push(control);
    }
  }, {
    key: "remove",
    value: function remove(control) {
      control.isVisible = false;
      this.controls.splice(control.uiControlID, 1);
    }
  }, {
    key: "show",
    value: function show() {
      this.controls.forEach(function (control) {
        return control.isVisible = true;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.controls.forEach(function (control) {
        return control.isVisible = false;
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.controls.forEach(function (control) {
        return control.dispose();
      });
      this.menuTexture.dispose();
    }
  }]);

  return UI;
}();



/***/ }),

/***/ "./src/game/Player.js":
/*!****************************!*\
  !*** ./src/game/Player.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/UI */ "./src/base/UI.js");
/* harmony import */ var _public_message_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../public/message.json */ "./public/message.json");
var _public_message_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../public/message.json */ "./public/message.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Player =
/*#__PURE__*/
function () {
  /**
  * Class description
  *
  * To handle Player Object Related Actions. 
  * Core Game Logics are handled here.
  */
  function Player(level) {
    _classCallCheck(this, Player);

    this.message = new _base_UI__WEBPACK_IMPORTED_MODULE_0__["default"]('pauseScreen');
    this.level = level;
    this.scene = level.scene;
    this.changePosition = false;
    this.nextBullet = true;
    this.bullerCounter = 1;
    this.coins = 0;
    this.maxCoins = 0;
    this.scamCount = 0;
    this.boonCount = 0;
    this.lives = GAME.options.player.lives;
    this.godMode = GAME.options.player.godMode;
    this.allowCoinChange = true;
    this.activeScam = null;
    this.coinsTextControl = null;
    this.pauseButtonControl = null;
    this.lastScamId = null;
    this.gameEnded = false;
    this.createCommonMaterials();
    this.setupPlayer();
  }
  /**
   * Function to create player material.
   * Initial Dev - Simple Purple Color Texture
   */


  _createClass(Player, [{
    key: "createCommonMaterials",
    value: function createCommonMaterials() {
      var playerMaterial = new BABYLON.StandardMaterial("playerMaterial", this.scene);
      playerMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/Standing 1 1.png", this.scene);
      playerMaterial.diffuseTexture.hasAlpha = true;
      playerMaterial.backFaceCulling = true;
      var bulletMaterial = new BABYLON.StandardMaterial("bulletMaterial", this.scene);
      bulletMaterial.diffuseColor = new BABYLON.Color3.FromHexString("#887FC0");
      bulletMaterial.emissiveColor = new BABYLON.Color3.FromHexString("#887FC0");
      bulletMaterial.specularColor = new BABYLON.Color3.FromHexString("#887FC0");
      bulletMaterial.alpha = 0.5; // Freeze materials to improve performance (this material will not be modified)

      bulletMaterial.freeze();
      this.level.addMaterial(playerMaterial);
      this.level.addMaterial(bulletMaterial);
    }
    /**
    * Function to create player object.
    * Initial Dev - Rectangular Box with simple Purple Color Texture
    */

  }, {
    key: "setupPlayer",
    value: function setupPlayer() {
      this.mesh = BABYLON.MeshBuilder.CreateBox("player", {
        width: 1.2,
        height: 1.2,
        depth: 0.01
      }, this.scene);
      this.mesh.position = new BABYLON.Vector3(0, -2.1, 0);
      this.mesh.material = this.level.getMaterial('playerMaterial');
      this.changePosition = true;
      this.gotCoinSound = this.level.assets.getSound('gotCoinSound');
      this.gameLostSound = this.level.assets.getSound('gameLostSound');
      this.beginGameSound = this.level.assets.getSound('beginGameSound');
      this.infoSound = this.level.assets.getSound('infoSound');
      this.scammedSound = this.level.assets.getSound('damageSound');
      this.zappingSound = this.level.assets.getSound('zappingSound');
      this.winningSound = this.level.assets.getSound('winningSound');
      this.selectSound = this.level.assets.getSound('selectSound');
      this.movementSound = this.level.assets.getSound('movementSound');
      this.groundMesh = BABYLON.MeshBuilder.CreateBox("groundplane", {
        width: screen.width,
        height: 0.1,
        depth: 0.01
      }, this.scene);
      this.groundMesh.position = new BABYLON.Vector3(0, -2.7, 0);
      this.spriteManagerPlayer = [];
      this.spriteManagerPlayer['left'] = new BABYLON.SpriteManager("playerManager", "assets/scenes/scamman_walk_left.png", 1, 62, this.scene);
      this.spriteManagerPlayer['right'] = new BABYLON.SpriteManager("playerManager", "assets/scenes/scamman_walk_right.png", 1, 62, this.scene);
      this.spriteManagerPlayer['up'] = new BABYLON.SpriteManager("playerManager", "assets/scenes/scamman_attack.png", 1, {
        width: 41,
        height: 63
      }, this.scene);
      this.spriteManagerPlayer['land'] = new BABYLON.SpriteManager("playerManager", "assets/scenes/scamman_land.png", 1, {
        width: 118,
        height: 198
      }, this.scene);
      this.spriteManagerPlayer['lose'] = new BABYLON.SpriteManager("playerManager", "assets/scenes/scam man_lose.png", 1, {
        width: 38,
        height: 48
      }, this.scene);
      this.createHUD();
    }
    /**
    * Function to create UI Texts (Coin Counter, Lives Counter).
    */

  }, {
    key: "createHUD",
    value: function createHUD() {
      var _this = this;

      this.hud = new _base_UI__WEBPACK_IMPORTED_MODULE_0__["default"]('playerHudUI');
      this.coinsTextControl = null;
      this.pauseButtonControl = null;
      this.coinsTextControl = this.hud.addText('Pension Pot: £0', {
        'top': '-10px',
        'left': '-10px',
        'fontSize': '15px',
        'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM
      });
      this.pauseButtonControl = this.hud.addButton('Pause', 'PAUSE', {
        'width': GAME.isMobile() ? 0.15 : 0.1,
        'height': 0.05,
        'top': '-10px',
        'left': '-10px',
        'isVisible': true,
        'fontSize': '10em',
        'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT,
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,
        'onclick': function onclick() {
          _this.selectSound.play();

          _this.coinsTextControl.isVisible = false;
          _this.pauseButtonControl.isVisible = false;
          _this.soundMuteButtonControl.isVisible = false;
          _this.soundUnMuteButtonControl.isVisible = false;

          _this.message.pauseScreen(_this.coins, _this.scamCount, _this.boonCount, _this.level.scams ? _this.level.scams.scamSet : null);
        }
      });
      this.soundMuteButtonControl = this.hud.addButton('mute', 'MUTE', {
        'width': GAME.isMobile() ? 0.15 : 0.1,
        'height': 0.05,
        'top': '-10px',
        'left': '10px',
        'isVisible': true,
        'fontSize': '10em',
        'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,
        'onclick': function onclick() {
          window.localStorage['mute_sound'] = 1;
        }
      });
      this.soundUnMuteButtonControl = this.hud.addButton('mute', 'UNMUTE', {
        'width': GAME.isMobile() ? 0.15 : 0.1,
        'height': 0.05,
        'top': '-10px',
        'left': '10px',
        'isVisible': true,
        'fontSize': '10em',
        'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,
        'onclick': function onclick() {
          window.localStorage['mute_sound'] = 0;
          BABYLON.Engine.audioEngine.unlock();
        }
      });
    }
    /**
    * Function to handle coin counter.
    * Called when coin is passively landed over ground
    */

  }, {
    key: "keepCoin",
    value: function keepCoin() {
      var _this2 = this;

      if (this.lives != 0 && this.allowCoinChange) {
        this.coins += 100;
        this.gotCoinSound.play();
        this.coinsTextControl.text = 'Pension Pot: £' + this.coins;
        this.coinsTextControl.fontSize = '15px';
        setTimeout(function () {
          _this2.coinsTextControl.fontSize = '15px';
        }, 500);
        this.maxCoins = this.coins > this.maxCoins ? this.coins : this.maxCoins;
      }
    }
    /**
    * Function to handle Live counter.
    * Called when scam is missed and landed over player
    */

  }, {
    key: "checkLife",
    value: function checkLife() {
      var _this3 = this;

      if (this.shielded) return;
      if (this.godMode) return;

      if (this.coins <= 1) {
        this.coins = 0;
        this.coinsTextControl.text = 'Pension Pot: £' + this.coins;
        this.coinsTextControl.fontSize = '15px';
        this.allowCoinChange = false;

        if (this.onDie) {
          this.onDie();
        }
      } else {
        var message = _public_message_json__WEBPACK_IMPORTED_MODULE_1__.message;
        this.scammedSound.play(); // Reduce coins when scammed.

        this.scamming = true;
        var newCoins = Math.floor(this.coins - message[this.activeScam].reduction);
        var factor = Math.floor((this.coins - newCoins) / 10);
        var trigger = setInterval(function () {
          _this3.coins -= factor;

          if (_this3.coins > newCoins) {
            _this3.coinsTextControl.text = 'Pension Pot: £' + _this3.coins;
            _this3.coinsTextControl.fontSize = '15px';
            _this3.coinsTextControl.color = 'red';
          } else {
            _this3.allowCoinChange = true;
            _this3.coinsTextControl.text = 'Pension Pot: £' + _this3.coins;
            _this3.coinsTextControl.fontSize = '15px';
            _this3.coinsTextControl.color = 'black';
            _this3.scamming = false;
            clearInterval(trigger);
          }

          if (_this3.coins <= 1) {
            _this3.coins = 0;
            _this3.allowCoinChange = false;
            _this3.scamming = false;
            _this3.coinsTextControl.text = 'Pension Pot: £' + _this3.coins;
            _this3.coinsTextControl.fontSize = '15px';
            _this3.coinsTextControl.color = 'red';

            if (_this3.onDie) {
              _this3.onDie();
            }

            clearInterval(trigger);
          }
        }, 50);
      }
    }
    /**
    * Function to handle player actions.
    * Called when coin is passively landed over ground
    */

  }, {
    key: "move",
    value: function move() {
      this.checkDirectionMovement();
      this.checkShoot();

      if (window.localStorage['mute_sound'] == 1) {
        this.soundUnMuteButtonControl.isVisible = true;
        this.soundMuteButtonControl.isVisible = false;
        BABYLON.Engine.audioEngine.setGlobalVolume(0);
      } else {
        this.soundUnMuteButtonControl.isVisible = false;
        this.soundMuteButtonControl.isVisible = true;
        BABYLON.Engine.audioEngine.unlock();
        BABYLON.Engine.audioEngine.setGlobalVolume(80);
      }
    }
    /**
    * Function to handle player left, right and center actions.
    */

  }, {
    key: "checkDirectionMovement",
    value: function checkDirectionMovement() {
      var _this4 = this;

      if (GAME.keys.left && !this.gameEnded && !this.playerLanding) {
        if (this.changePosition && this.mesh.position.x > (GAME.isMobile() ? -1 : -1.5)) {
          this.movementSound.play();
          this.changePosition = false;

          if (this.shootAction) {
            this.shootAction.dispose();
            clearInterval(this.shootTrigger);
          }

          var player = new BABYLON.Sprite("player", this.spriteManagerPlayer['left']);
          player.playAnimation(0, 7, true, 100);
          player.position = this.mesh.position;
          player.size = 1.15;
          player.isPickable = true;
          var movement = setInterval(function () {
            player.position = _this4.mesh.position;
          }, 24);
          this.mesh.animations = [];
          this.mesh.animations.push(this.createPlayerSideMotion('left', this.mesh.position.x));
          this.scene.beginAnimation(this.mesh, 0, 100, false);
          setTimeout(function () {
            _this4.changePosition = true;
            clearInterval(movement);
            player.dispose();
          }, 200);
        }
      }

      if (GAME.keys.right && !this.gameEnded && !this.playerLanding) {
        if (this.changePosition && this.mesh.position.x < (GAME.isMobile() ? 1 : 1.5)) {
          this.movementSound.play();
          this.changePosition = false;

          if (this.shootAction) {
            this.shootAction.dispose();
            clearInterval(this.shootTrigger);
          }

          var player = new BABYLON.Sprite("player", this.spriteManagerPlayer['right']); // this.mesh.material.alpha = 0;

          player.playAnimation(0, 7, true, 100);
          player.position = this.mesh.position;
          player.size = 1.15;
          player.isPickable = true;
          var movement = setInterval(function () {
            player.position = _this4.mesh.position;
          }, 24);
          this.mesh.animations = [];
          this.mesh.animations.push(this.createPlayerSideMotion('right', this.mesh.position.x));
          this.scene.beginAnimation(this.mesh, 0, 100, false);
          setTimeout(function () {
            _this4.changePosition = true;
            clearInterval(movement);
            player.dispose();
          }, 200);
        }
      }
    }
    /**
    * Function to set up animation based on direction type.
    * @param {string} type - Direction Type [Left/Right]
    * @param {float} startValue - Current Position X of Player
    */

  }, {
    key: "createPlayerSideMotion",
    value: function createPlayerSideMotion(type, startValue) {
      var playerMotion = new BABYLON.Animation("playerSideMotion", "position.x", 1000, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      var frameCounter = 0,
          value = 0;

      for (var index = 0; index < 5; index++) {
        if (type == 'left') {
          value += GAME.isMobile() ? -0.2 : -0.3;
        } else {
          value += GAME.isMobile() ? 0.2 : 0.3;
        }

        keys.push({
          frame: frameCounter,
          value: startValue + value
        });
        frameCounter += 15;
      }

      playerMotion.setKeys(keys);
      return playerMotion;
    }
    /**
    * Function to handle player shoot actions.
    */

  }, {
    key: "checkShoot",
    value: function checkShoot() {
      var _this5 = this;

      if (GAME.keys.shoot && !this.beamEnabled && this.changePosition && !this.gameEnded && !this.playerLanding) {
        var bullet = BABYLON.Mesh.CreateCylinder("bullet_" + this.bullerCounter++, 3, 1, 0.05, 0, 0, this.scene); // scams.position = this.mesh.getAbsolutePosition().clone();

        var meshPosition = this.mesh.getAbsolutePosition().clone();
        bullet.position.x = meshPosition.x;
        bullet.position.y = -0.3;
        bullet.material = this.level.getMaterial('bulletMaterial');
        this.beamEnabled = true;

        if (this.shootAction) {
          this.shootAction.dispose();
          clearInterval(this.shootTrigger);
        }

        this.shootAction = new BABYLON.Sprite("player", this.spriteManagerPlayer['up']);
        this.shootAction.playAnimation(0, 3, false, 25);
        this.shootAction.position.x = this.mesh.position.x + 0.2;
        this.shootAction.position.y = this.mesh.position.y - 0.1;
        this.shootAction.position.z = this.mesh.position.z;
        this.shootAction.size = 1;
        this.shootAction.isPickable = true;
        this.shootTrigger = setInterval(function () {
          _this5.shootAction.position.x = _this5.mesh.position.x + 0.2;
          _this5.shootAction.position.y = _this5.mesh.position.y - 0.1;
          _this5.shootAction.position.z = _this5.mesh.position.z;
        }, 24); // Clear bullet after half second

        setTimeout(function () {
          bullet.dispose();
          _this5.beamEnabled = false;

          _this5.shootAction.dispose();

          clearInterval(_this5.shootTrigger);
        }, 700);
        var trigger = setInterval(function () {
          if (!_this5.changePosition) {
            bullet.dispose();
            _this5.beamEnabled = false;
            clearInterval(trigger);
          }
        }, 100);
      }
    } // Function to access Player entity outside this class.

  }, {
    key: "getMesh",
    value: function getMesh() {
      return this.mesh;
    } // Function to access Points entity outside this class.

  }, {
    key: "getPoints",
    value: function getPoints() {
      this.checkAndSaveRecord(this.coins);
      return this.coins;
    }
    /**
     * Function to handle scam counter.
     */

  }, {
    key: "keepScam",
    value: function keepScam(scamId) {
      this.zappingSound.play();

      if (this.lastScamId !== scamId) {
        this.lastScamId = scamId;
        this.scamCount++;
      }
    }
    /**
     * Function to handle boon counter.
     * @todo Any other logics in future to be added
     * 1. Currenly coins are doubled.
     */

  }, {
    key: "keepBoon",
    value: function keepBoon(boon) {
      var _this6 = this;

      this.boonCount++;
      this.gotCoinSound.play();

      if (boon == 'invisiblity_boon') {
        this.level.playerLight.intensity = 1;
        this.shielded = true;
        setTimeout(function () {
          var count = 0;
          _this6.level.playerLight.intensity = 1;
          var trigger = setInterval(function () {
            _this6.level.playerLight.intensity = count % 2 ? 1 : 1.3;
            count += 1;

            if (count > 10) {
              _this6.shielded = false;
              clearInterval(trigger);
            }
          }, 200);
        }, 10000);
      }

      var message = _public_message_json__WEBPACK_IMPORTED_MODULE_1__.message;
      var newCoins = Math.floor(this.coins + message[boon].addition);
      var factor = Math.floor((newCoins - this.coins) / 10);
      var trigger = setInterval(function () {
        _this6.coins += factor;
        _this6.maxCoins = _this6.coins > _this6.maxCoins ? _this6.coins : _this6.maxCoins;

        if (_this6.coins < newCoins && _this6.allowCoinChange) {
          _this6.coinsTextControl.text = 'Pension Pot: £' + _this6.coins;
          _this6.coinsTextControl.fontSize = '15px';
          _this6.coinsTextControl.color = 'green';
        } else {
          _this6.coins = _this6.lives > 0 ? newCoins : 0;
          _this6.coinsTextControl.text = 'Pension Pot: £' + _this6.coins;
          _this6.coinsTextControl.fontSize = '15px';
          _this6.coinsTextControl.color = 'black';
          clearInterval(trigger);
        }
      }, 50);
    }
    /**
     * Function to update highest score of player in this machine.
     * @param {int} points - Value that is saved to localstorage based on Is Record or Not
     */

  }, {
    key: "checkAndSaveRecord",
    value: function checkAndSaveRecord(points) {
      var lastRecord = 0;
      this.pointsRecord = false;

      if (window.localStorage['last_record']) {
        lastRecord = parseInt(window.localStorage['last_record'], 10);
      }

      if (lastRecord < points) {
        this.pointsRecord = true;
        window.localStorage['last_record'] = points;
      }
    }
    /**
     * Function to return if any high score record made by previous attempts.
     */

  }, {
    key: "hasMadePointsRecord",
    value: function hasMadePointsRecord() {
      return this.pointsRecord;
    } // Function to return last highest record.

  }, {
    key: "getLastRecord",
    value: function getLastRecord() {
      return window.localStorage['last_record'] || 0;
    }
    /**
     * Function to reset player postions and counters to initial levels to replay game.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.coins = 0;
      this.maxCoins = 0;
      this.mesh.position.x = 0;
      this.scamCount = 0;
      this.boonCount = 0;
      this.lives = GAME.options.player.lives;
      this.coinsTextControl.text = 'Pension Pot: £' + this.coins;
      this.allowCoinChange = true;
      this.pauseButtonControl.isVisible = true;
    }
  }, {
    key: "landPlayer",
    value: function landPlayer() {
      var _this7 = this;

      this.playerLanding = true;
      this.beginGameSound.play();
      this.landAction = new BABYLON.Sprite("land", this.spriteManagerPlayer['land']);
      this.landAction.position = new BABYLON.Vector3(0.1, -1.2, 0);
      this.landAction.playAnimation(0, 11, false, 80, function () {
        _this7.playerLanding = false;
        _this7.level.freezeGeneration = false;

        _this7.landAction.dispose();
      });
      this.landAction.size = 3;
      this.landAction.isPickable = true;
      this.mesh.position.x = 0;
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/game/levels/HomeMenuLevel.js":
/*!******************************************!*\
  !*** ./src/game/levels/HomeMenuLevel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeMenuLevel; });
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/UI */ "./src/base/UI.js");
/* harmony import */ var _base_Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/Level */ "./src/base/Level.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
* Class description
*
* To handle Game Launch Screen related Actions.
*/

var HomeMenuLevel =
/*#__PURE__*/
function (_Level) {
  _inherits(HomeMenuLevel, _Level);

  function HomeMenuLevel() {
    _classCallCheck(this, HomeMenuLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeMenuLevel).apply(this, arguments));
  }

  _createClass(HomeMenuLevel, [{
    key: "setupAssets",

    /**
    * Function to setup musics and sound assets
    */
    value: function setupAssets() {
      this.assets.addMusic('music', '/assets/musics/SCAM_MAN_background2.mp3');
      this.assets.addSound('selectSound', '/assets/sounds/Select_sound.wav');
    }
    /**
    * Function to set scene with camera and start/play button.
    */

  }, {
    key: "buildScene",
    value: function buildScene() {
      var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene); // Make this scene transparent to see the document background

      this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
      var menu = new _base_UI__WEBPACK_IMPORTED_MODULE_0__["default"]('homeMenuUI');
      var click = this.assets.getSound('selectSound');
      menu.addImage('Logo', {
        'imgpath': "assets/scenes/scam-man-fulltitle-mainpage.png",
        'strech': BABYLON.GUI.Image.stretch_uniform,
        'width': 0.7,
        'height': 0.6,
        'top': '0px'
      });
      menu.addImgButton('playButton', {
        'imgpath': "assets/scenes/scam-man-play-btn.png",
        'width': 0.25,
        'top': '210px',
        'onclick': function onclick() {
          click.play();
          GAME.goToLevel('RunnerLevel');
        }
      });
    }
  }]);

  return HomeMenuLevel;
}(_base_Level__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/game/levels/RunnerLevel.js":
/*!****************************************!*\
  !*** ./src/game/levels/RunnerLevel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RunnerLevel; });
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/UI */ "./src/base/UI.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Player */ "./src/game/Player.js");
/* harmony import */ var _base_Level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/Level */ "./src/base/Level.js");
/* harmony import */ var _generators_TilesGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generators/TilesGenerator */ "./src/game/levels/generators/TilesGenerator.js");
/* harmony import */ var _generators_ScamsGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators/ScamsGenerator */ "./src/game/levels/generators/ScamsGenerator.js");
/* harmony import */ var _generators_BoonsGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generators/BoonsGenerator */ "./src/game/levels/generators/BoonsGenerator.js");
/* harmony import */ var _counters_AgeCounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counters/AgeCounter */ "./src/game/levels/counters/AgeCounter.js");
/* harmony import */ var _counters_StageCounter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counters/StageCounter */ "./src/game/levels/counters/StageCounter.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var RunnerLevel =
/*#__PURE__*/
function (_Level) {
  _inherits(RunnerLevel, _Level);

  function RunnerLevel() {
    _classCallCheck(this, RunnerLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(RunnerLevel).apply(this, arguments));
  }

  _createClass(RunnerLevel, [{
    key: "setProperties",

    /**
    * Class description
    *
    * To handle Core Game Level Related Actions. 
    * Core Game Logics for the entire scene are handled here.
    */
    value: function setProperties() {
      this.player = null; // Used for ground tiles generation

      this.tiles = null; // Menu

      this.menu = null;
      this.pointsTextControl = null;
      this.currentRecordTextControl = null;
      this.hasMadeRecordTextControl = null;
      this.status = null;
      this.currentStageAge = 0;
      this.nextStage = 1;
      this.speed = GAME.options.player.defaultSpeed; // this.gamestats = null;
    }
    /**
     * Function to setup musics and sound assets
     */

  }, {
    key: "setupAssets",
    value: function setupAssets() {
      // Dummy Sounds for Time Being. Needs changing (Or requires providing credits)
      this.assets.addMusic('music', '/assets/musics/SCAM_MAN_background2.wav', {
        autoplay: true
      });
      this.assets.addSound('gameLostSound', '/assets/sounds/game-lost.wav');
      this.assets.addSound('gotCoinSound', '/assets/sounds/coin_going_into_pot.wav');
      this.assets.addSound('beginGameSound', '/assets/sounds/begin_game.wav');
      this.assets.addSound('infoSound', '/assets/sounds/info.wav');
      this.assets.addSound('damageSound', '/assets/sounds/scammed.wav');
      this.assets.addSound('movementSound', '/assets/sounds/movement.wav');
      this.assets.addSound('zappingSound', '/assets/sounds/Zapping_Scam.wav', {
        volume: 0.2
      });
      this.assets.addSound('winningSound', '/assets/sounds/Winning_Sound.wav');
      this.assets.addSound('splashScreenSound', '/assets/sounds/Winning_Sound.wav');
      this.assets.addSound('selectSound', '/assets/sounds/Select_sound.wav');
    }
    /**
     * Function to set scene with camera, player.
     * Also Coins will be initialized followed by Scam Objects and Boon Objects
     */

  }, {
    key: "buildScene",
    value: function buildScene() {
      var _this = this;

      this.scene.clearColor = new BABYLON.Color3.FromHexString(GAME.options.backgroundColor);
      this.createMenus(); // this.createGameStats();
      // Sets the active camera

      var camera = this.createCamera();
      this.scene.activeCamera = camera; // Uncomment it to allow free camera rotation
      // camera.attachControl(GAME.canvas, true);
      // Add lights to the scene
      // var light2 = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(-100, 100, 100), this.scene);
      //  light2.diffuse = new BABYLON.Color3(1, 0, 1);
      // var light1 = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(1, -1, 1), this.scene);
      //Light direction is directly down from a position one unit up, fast decay

      this.light = new BABYLON.SpotLight("spotLight3", new BABYLON.Vector3(0, -1, -500), new BABYLON.Vector3(0, 0, 1), Math.PI / 2, 50, this.scene);
      this.light.diffuse = new BABYLON.Color3(1, 1, 1);
      this.light.specular = new BABYLON.Color3(1, 1, 1);
      this.light.intensity = 0.5; //light1.intensity = 1;
      // light2.intensity = 0.9;

      this.createPlayer();
      this.tiles = new _generators_TilesGenerator__WEBPACK_IMPORTED_MODULE_3__["default"](this);
      this.tiles.generate();
      this.ageTimer = new _counters_AgeCounter__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      this.stageCounter = new _counters_StageCounter__WEBPACK_IMPORTED_MODULE_7__["default"](this); // Scams will be started after n seconds.

      setTimeout(function () {
        _this.scams = new _generators_ScamsGenerator__WEBPACK_IMPORTED_MODULE_4__["default"](_this);

        _this.scams.generate();
      }, GAME.options.player.scamStartAfter); // Boons will be started after 3*n+0.5 seconds.

      setTimeout(function () {
        _this.boons = new _generators_BoonsGenerator__WEBPACK_IMPORTED_MODULE_5__["default"](_this);

        _this.boons.generate();
      }, GAME.options.player.scamStartAfter * 3 + 500); // For now game speed is incremented for each 15 seconds

      this.speedTrigger = setInterval(function () {
        _this.setGameSpeed();
      }, 15000);
      this.scene.useMaterialMeshMap = true;
      this.scene.debugLayer.hide(); // this.scene.debugLayer.show();

      BABYLON.Engine.audioEngine.useCustomUnlockedButton = true;
    }
    /**
     * Function to build UI objects to show Points/Record/Replay Button/Home Button.
     * Menu will be hidden on start of game.
     */

  }, {
    key: "createMenus",
    value: function createMenus() {
      var _this2 = this;

      this.menu = new _base_UI__WEBPACK_IMPORTED_MODULE_0__["default"]('runnerMenuUI'); // this.lostScreen = new BABYLON.GUI.Image("lostScreen", "assets/scenes/Game_over_screen.png");
      // this.lostScreen.width = 1;
      // this.lostScreen.height = 1;
      // this.menu.menuTexture.addControl(this.lostScreen);
      // this.lostScreen.isVisible = false;

      this.lostScreen = this.menu.addImage('lostScreen', {
        'imgpath': "assets/scenes/Game_over_screen.png",
        'width': 0.7,
        'height': 0.7
      });
      this.gameStatus = this.menu.addText('Congratulations!', {
        'top': '60px',
        'color': GAME.options.pointsTextColor,
        'outlineColor': GAME.options.pointsOutlineTextColor,
        'outlineWidth': '2px',
        'fontSize': '40px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      });
      this.gameSubTextControl = this.menu.addText('You cannot give up. Try reaching Age 65...', {
        'top': '105px',
        'color': GAME.options.pointsTextColor,
        'outlineColor': GAME.options.pointsOutlineTextColor,
        'outlineWidth': '2px',
        'fontSize': '15px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      });
      this.pointsTextControl = this.menu.addText('Pension Pot: £ 0', {
        'top': '180px',
        'color': GAME.options.pointsTextColor,
        'outlineColor': GAME.options.pointsOutlineTextColor,
        'outlineWidth': '2px',
        'fontSize': '35px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      }); // this.ageTextControl = this.menu.addText('Age: 0', {
      //     'top': '180px',
      //     'color': GAME.options.pointsTextColor,
      //     'outlineColor': GAME.options.pointsOutlineTextColor,
      //     'outlineWidth': '2px',
      //     'fontSize': '35px',
      //     'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      // });

      this.currentRecordTextControl = this.menu.addText('Current Record: 0', {
        'top': '220px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      });
      this.hasMadeRecordTextControl = this.menu.addText('You got a new Points Record!', {
        'top': '260px',
        'color': GAME.options.recordTextColor,
        'fontSize': '20px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      });
      this.menu.addButton('replayButton', 'Replay Game', {
        'top': '300px',
        'height': '50px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP,
        'textVerticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER,
        'onclick': function onclick() {
          _this2.player.selectSound.play();

          GAME.goToLevel('RunnerLevel');
        }
      });
      this.menu.addButton('backButton', 'Return to Home', {
        'top': '360px',
        'height': '50px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP,
        'textVerticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER,
        'onclick': function onclick() {
          _this2.player.selectSound.play();

          GAME.goToLevel('HomeMenuLevel');
        }
      });
      this.menu.hide(); // this.createTutorialText();
    }
    /**
     * Function to show Game Instructions
     * Message varies based on device
     */

  }, {
    key: "createTutorialText",
    value: function createTutorialText() {
      var _this3 = this;

      var text = GAME.isMobile() ? 'Swipe screen Left/Right to control Scam Man. Swipe Up to Shoot.' : 'Use Arrow Keys to Move & Space to Shoot.'; // Small tutorial text

      var tutorialText = this.menu.addText(text, {
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
      });
      setTimeout(function () {
        _this3.menu.remove(tutorialText);
      }, 5000);
    }
    /**
     * Function to setup camera for Game Engine.
     */

  }, {
    key: "createCamera",
    value: function createCamera() {
      var camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 0, -8), this.scene); // let camera = new BABYLON.ArcRotateCamera("arcCamera", 0, 0, -8, BABYLON.Vector3.Zero(), this.scene);

      camera.setTarget(BABYLON.Vector3.Zero());
      return camera;
    }
    /**
     * Function to setup player with default lighting.
     */

  }, {
    key: "createPlayer",
    value: function createPlayer() {
      var _this4 = this;

      // Creates the player and sets it as camera target
      this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"](this);
      this.playerLight = new BABYLON.DirectionalLight("playerLight", new BABYLON.Vector3(0, -1, 1), this.scene);
      this.playerLight.intensity = 20;
      this.playerLight.includedOnlyMeshes.push(this.player.mesh);
      this.playerLight.parent = this.player.mesh;
      this.light.excludedMeshes.push(this.player.mesh); // Actions when player dies

      this.player.onDie = function () {
        _this4.player.gameEnded = true;
        clearInterval(_this4.speedTrigger);
        _this4.player.mesh.material.alpha = 0;
        var player = new BABYLON.Sprite("player", _this4.player.spriteManagerPlayer['lose']);
        player.position = _this4.player.mesh.position;
        player.position = new BABYLON.Vector3(_this4.player.mesh.position.x, _this4.player.mesh.position.y - 0.2, 0);
        player.size = 0.8;
        player.isPickable = true;

        _this4.player.gameLostSound.play();

        player.playAnimation(0, 2, false, 400, function () {
          GAME.pause();

          _this4.showMenu();

          _this4.ageTimer.clear();

          _this4.player.pauseButtonControl.isVisible = false;
          _this4.player.soundMuteButtonControl.isVisible = false;
          _this4.player.soundUnMuteButtonControl.isVisible = false;
        });
      }; // Actions when player wins


      this.player.win = function () {
        _this4.player.gameEnded = true;
        clearInterval(_this4.speedTrigger);

        _this4.player.winningSound.play();

        GAME.pause();
        _this4.status = 'WIN';

        _this4.showMenu();

        _this4.ageTimer.clear();

        _this4.player.pauseButtonControl.isVisible = false;
        _this4.player.soundMuteButtonControl.isVisible = false;
        _this4.player.soundUnMuteButtonControl.isVisible = false;
      };
    }
    /**
     * Function to show Menu with last points/high record
     */

  }, {
    key: "showMenu",
    value: function showMenu() {
      this.pointsTextControl.text = 'Pension Pot: £' + this.player.getPoints(); // this.ageTextControl.text = 'Age: ' + this.age;

      this.currentRecordTextControl.text = 'Current Record: ' + this.player.getLastRecord();

      if (this.status == 'WIN') {
        this.gameStatus.text = 'Congratulations!';
        this.gameSubTextControl.text = 'You successfully avoided the scams and completed level 3!';
      } else {
        this.lostScreen.isVisible = true;
        this.gameStatus.text = 'You Lost!';
        this.gameSubTextControl.text = 'Play again and see if you can avoid the scams to reach level 3!';
      }

      this.menu.show();

      if (this.player.hasMadePointsRecord()) {
        this.hasMadeRecordTextControl.isVisible = true;
      } else {
        this.hasMadeRecordTextControl.isVisible = false;
      }
    }
    /**
     * Function to call logics that will be rendered seamlessly.
     */

  }, {
    key: "beforeRender",
    value: function beforeRender() {
      if (!GAME.isPaused()) {
        // this.player.visible();
        this.player.pauseButtonControl.isVisible = true;
        this.player.coinsTextControl.isVisible = true;
        this.player.move();
        this.age = parseInt(this.ageTimer.ageControl.text);

        if ((this.age - 18) % 16 == 0 && this.currentStageAge !== this.age && !this.player.gameEnded) {
          this.freezeGeneration = true;
          this.holdStage = true;
          this.completeStage();
        }

        if (!this.player.beamEnabled && this.player.changePosition && !this.player.playerLanding && !this.player.gameEnded) {
          this.player.mesh.material.alpha = 1;
        } else {
          this.player.mesh.material.alpha = 0;
        }
      }

      if (this.player.maxCoins && this.player.coins <= 1 && !this.player.gameEnded) {
        this.player.allowCoinChange = false;

        if (this.player.onDie) {
          this.ageTimer.clear();
          this.player.onDie();
        }
      }
    }
    /**
     * Function to handle replay option.
     */

  }, {
    key: "replay",
    value: function replay() {
      this.player.reset();
      this.speed = GAME.options.player.defaultSpeed;
      this.menu.hide();
      this.status = null;
      this.ageTimer.advancedTexture.isVisible = false;
      this.ageTimer.clear();
      this.ageTimer = new _counters_AgeCounter__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      this.nextStage = 1;
      this.currentStageAge = 0;
      this.player.gameEnded = false;
      GAME.resume();
    }
    /**
     * Function to return game speed outside this Class 
     */

  }, {
    key: "getGameSpeed",
    value: function getGameSpeed() {
      return this.speed;
    }
    /**
     * Function to increment speed
     */

  }, {
    key: "setGameSpeed",
    value: function setGameSpeed() {
      if (!GAME.isPaused()) {
        this.speed += GAME.options.player.increaseSpeedRatio;
      }
    }
  }, {
    key: "completeStage",
    value: function completeStage() {
      var _this5 = this;

      if (this.nextStage === 1) {
        GAME.engine.hideLoadingUI();
      }

      var trigger = setInterval(function () {
        if (_this5.holdStage && (_this5.freezeGeneration && _this5.scams && !_this5.scams.activeScams.length && _this5.boons && !_this5.boons.activeBoons.length && _this5.tiles && !_this5.tiles.activeCoins.length || _this5.nextStage === 1)) {
          _this5.player.infoSound.play();

          _this5.stageCounter.showStage(_this5.nextStage);

          _this5.currentStageAge = _this5.age;
          _this5.nextStage++;
          _this5.holdStage = false;
          clearInterval(trigger);
        }
      }, 1000);
    }
  }]);

  return RunnerLevel;
}(_base_Level__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/game/levels/counters/AgeCounter.js":
/*!************************************************!*\
  !*** ./src/game/levels/counters/AgeCounter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgeCounter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AgeCounter =
/*#__PURE__*/
function () {
  /**
  * Class description
  *
  * To handle Age Timer. 
  */
  function AgeCounter(level) {
    _classCallCheck(this, AgeCounter);

    this.level = level;
    this.scene = level.scene;
    this.player = level.player;
    this.progressValue = null;
    this.ageControl = null;
    this.progressValueInvisible = null;
    this.advancedTexture = null;
    this.setupTimer();
  }

  _createClass(AgeCounter, [{
    key: "setupTimer",
    value: function setupTimer() {
      var _this = this;

      // GUI
      this.advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", false); // Outer Rectangle for Values

      var outterRect = new BABYLON.GUI.Rectangle();
      outterRect.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      outterRect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      outterRect.top = '10px';
      outterRect.left = '10px';
      outterRect.width = 0.8;
      outterRect.height = "45px";
      outterRect.thickness = 0;
      this.advancedTexture.addControl(outterRect); // Rectangle box for Progress Bar

      var rect1 = new BABYLON.GUI.Rectangle();
      rect1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      rect1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      rect1.top = '10px';
      rect1.left = '10px';
      rect1.width = 0.8;
      rect1.height = "25px";
      rect1.cornerRadius = 40;
      rect1.color = "#F0E469";
      rect1.thickness = 3;
      rect1.background = "white";
      var img = new BABYLON.GUI.Image("image", "/assets/scenes/stripe.jpg");
      img.alpha = 0.2;
      rect1.addControl(img);
      var progressBar = new BABYLON.GUI.Rectangle();
      progressBar.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      progressBar.width = 0.98;
      progressBar.left = '2px';
      progressBar.height = "15px";
      progressBar.cornerRadius = 100;
      progressBar.color = "#EB12DB";
      progressBar.thickness = 0;
      progressBar.background = "#EB12DB";
      progressBar.alpha = 0.6;
      rect1.addControl(progressBar); // Yellow Progress Bar that moves as age timer

      this.progressValue = new BABYLON.GUI.Rectangle();
      this.progressValue.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      this.progressValue.width = 0;
      this.progressValue.left = '2px';
      this.progressValue.height = 1;
      this.progressValue.cornerRadius = 20;
      this.progressValue.color = "#F0E469";
      this.progressValue.thickness = 0;
      this.progressValue.background = "#F0E469";
      rect1.addControl(this.progressValue);
      this.advancedTexture.addControl(rect1); // Outer Box that increases with age

      this.progressValueInvisible = new BABYLON.GUI.Rectangle();
      this.progressValueInvisible.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      this.progressValueInvisible.width = 0;
      this.progressValueInvisible.thickness = 0;
      outterRect.addControl(this.progressValueInvisible); // Age Value Text that increases

      this.ageControl = new BABYLON.GUI.TextBlock();
      this.ageControl.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      this.ageControl.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      this.ageControl.text = '18';
      this.ageControl.color = '#EB12DB';
      this.ageControl.fontSize = 10;
      this.ageControl.isVisible = false;
      this.progressValue.addControl(this.ageControl);

      for (var index = 1; index <= 3; index++) {
        var splitter = new BABYLON.GUI.Rectangle();
        splitter.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        splitter.width = 0.3333 * index;
        splitter.height = 1;
        splitter.thickness = 3;
        splitter.background = 'transparent';
        progressBar.addControl(splitter);
      } // let startText = new BABYLON.GUI.TextBlock();
      // startText.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      // startText.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
      // startText.text = '18';
      // startText.color = 'BLACK';
      // startText.fontSize = 12;
      // outterRect.addControl(startText);
      // let endText = new BABYLON.GUI.TextBlock();
      // endText.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
      // endText.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
      // endText.text = '65';
      // endText.color = 'BLACK';
      // endText.fontSize = 12;
      // outterRect.addControl(endText);
      // let label = new BABYLON.GUI.TextBlock();
      // label.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      // label.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
      // label.text = 'Age';
      // label.color = 'BLACK';
      // label.fontSize = 12;
      // outterRect.addControl(label);


      var moveProgressWidth = 0;
      var ageValue = 0;
      var gameLength = GAME.options.gameLength; // 1 min

      this.trigger = setInterval(function () {
        if (ageValue <= 47) {
          if (!GAME.isPaused()) {
            moveProgressWidth += 98 / gameLength / 100 / 10;
            ageValue += 47 / gameLength / 10;
            _this.progressValue.width = moveProgressWidth;
            _this.progressValueInvisible.width = moveProgressWidth + 0.01;
            var value = Math.round(18 + ageValue);
            _this.ageControl.text = "" + value;

            if (value > 63 || value < 23) {
              _this.ageControl.alpha = 0;
            } else {
              _this.ageControl.alpha = 1;
            }
          }
        } else {
          _this.player.win();

          clearInterval(_this.trigger);
        }
      }, 100);
    }
  }, {
    key: "clear",
    value: function clear() {
      clearInterval(this.trigger);
      this.advancedTexture.dispose();
    }
  }]);

  return AgeCounter;
}();



/***/ }),

/***/ "./src/game/levels/counters/StageCounter.js":
/*!**************************************************!*\
  !*** ./src/game/levels/counters/StageCounter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StageCounter; });
/* harmony import */ var _public_stage_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/stage.json */ "./public/stage.json");
var _public_stage_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/stage.json */ "./public/stage.json", 1);
/* harmony import */ var _public_message_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public/message.json */ "./public/message.json");
var _public_message_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/message.json */ "./public/message.json", 1);
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/UI */ "./src/base/UI.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var StageCounter =
/*#__PURE__*/
function () {
  /**
  * Class description
  *
  * To handle Age Timer. 
  */
  function StageCounter(level) {
    _classCallCheck(this, StageCounter);

    this.level = level;
    this.scene = level.scene;
    this.player = level.player;
  }

  _createClass(StageCounter, [{
    key: "addText",
    value: function addText(text) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var textControl = new BABYLON.GUI.TextBlock();
      textControl.text = text;
      textControl.color = options.color || 'black';
      textControl.fontSize = options.fontSize || 20;
      textControl.outlineWidth = options.outlineWidth || 0;
      textControl.outlineColor = options.outlineColor || "black";
      textControl.lineSpacing = options.lineSpacing || '0px';
      textControl.left = options.left || '0px';
      textControl.paddingRight = options.paddingRight || '10px';
      textControl.top = options.top || '0px';
      textControl.textHorizontalAlignment = typeof options.horizontalAlignment !== 'undefined' ? options.horizontalAlignment : BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      textControl.textVerticalAlignment = typeof options.verticalAlignment !== 'undefined' ? options.verticalAlignment : BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      textControl.textWrapping = options.wrapping || true;
      return textControl;
    }
    /**
     * Function to notify user of each stage
     * Show scams and boons for corresponding stage
     * Scam and boon message appear from message.json
     * Stage configuration is from stage.json
     */

  }, {
    key: "showStage",
    value: function showStage(stage) {
      var _this = this;

      GAME.pause();
      var show = true,
          timer = GAME.options.messageReadTime,
          screen = 1;
      this.scamsMessage = [];
      this.scamsImage = [];
      var stageUI = new _base_UI__WEBPACK_IMPORTED_MODULE_2__["default"]('stageLoadingUI');
      var background = new BABYLON.GUI.Rectangle();
      background.width = 1;
      background.height = 1;
      background.thickness = 0;
      background.background = "#FFDA75";
      background.alpha = 1;
      stageUI.menuTexture.addControl(background);
      this.stageUI = new BABYLON.GUI.Rectangle();
      this.stageUI.width = 0.9;
      this.stageUI.height = 1;
      this.stageUI.thickness = 0;
      this.stageUI.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      stageUI.menuTexture.addControl(this.stageUI);
      var stageData = _public_stage_json__WEBPACK_IMPORTED_MODULE_0__["stage_" + stage];

      if (stageData) {
        this.stageStatus = this.addText('Level ' + stage + '…. Loading in ' + timer, {
          'top': '-180px',
          'color': GAME.options.pointsTextColor,
          'outlineColor': GAME.options.pointsOutlineTextColor,
          'outlineWidth': '2px',
          'fontSize': '25px',
          'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
        });
        stageUI.menuTexture.addControl(this.stageStatus);

        if (stageData['message']) {
          this.gameSubTextControl = this.addText(stageData['message'], {
            'top': '-140px',
            'fontSize': '15px',
            'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
          });
          this.stageUI.addControl(this.gameSubTextControl);
        }

        if (stageData['instruction']) {
          this.gameInstructionControl = this.addText(stageData['instruction'], {
            'top': '-60px',
            'fontSize': '15px',
            'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
          });
          this.stageUI.addControl(this.gameInstructionControl);
        } // Skip button


        stageUI.addImgButton('continueBtn', {
          'imgpath': "assets/scenes/scam-man-continue-btn.png",
          'top': '-50px',
          'width': GAME.isMobile() ? 0.4 : 0.25,
          'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,
          'onclick': function onclick() {
            // this.player.coinsTextControl.isVisible = true;
            // stageUI.clear();
            // GAME.resume();
            // show = false;
            _this.player.selectSound.play();

            if (screen === 1 && stage > 0) {
              timer = GAME.options.messageReadTime;

              _this.setBoons(stageData);

              _this.scamDescription.dispose();

              _this.scamsMessage.forEach(function (scam) {
                scam.dispose();
              });

              _this.scamsImage.forEach(function (image) {
                image.dispose();
              });

              background.background = "#F38669";
              screen = 2;

              _this.player.infoSound.play();
            } else if (show) {
              stageUI.remove(_this.stageStatus);
              _this.player.coinsTextControl.isVisible = true;
              stageUI.clear();

              if (!_this.player.gameEnded) {
                GAME.resume();

                _this.player.landPlayer();
              }

              show = false;
              clearInterval(trigger);
            }
          }
        });

        if (stageData['scams']) {
          var top = -140;
          this.scamDescription = this.addText("Shine your torch and avoid the following scams! ", {
            'top': top,
            'color': GAME.options.pointsTextColor,
            'outlineColor': GAME.options.pointsOutlineTextColor,
            'outlineWidth': '2px',
            'fontSize': '15px',
            'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
          });
          this.stageUI.addControl(this.scamDescription);
          stageData['scams'].forEach(function (scam) {
            top = top + 100;
            var image = new BABYLON.GUI.Image("icon", _public_message_json__WEBPACK_IMPORTED_MODULE_1__.message[scam].path);
            image.width = 0.15;
            image.height = 0.1;
            image.top = top;
            image.left = 0.1;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

            _this.stageUI.addControl(image);

            var display = new BABYLON.GUI.Rectangle();
            display.width = 0.75;
            display.height = 0.1;
            display.thickness = 0;
            display.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            display.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            display.top = top;

            _this.stageUI.addControl(display);

            var scamsMessage = _this.addText(_public_message_json__WEBPACK_IMPORTED_MODULE_1__.message[scam]['info'], {
              'top': '1px',
              'fontSize': '15px',
              'left': '10px',
              'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,
              'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
            });

            _this.scamsMessage.push(scamsMessage);

            _this.scamsImage.push(image);

            display.addControl(scamsMessage);
          });
        }

        this.player.coinsTextControl.isVisible = false;
        stageUI.show();
        var trigger = setInterval(function () {
          if (show) {
            timer = timer - 1;
            _this.stageStatus.text = 'Level ' + stage + '…. Loading in ' + (!timer && screen === 1 ? 6 : timer);
          }

          if (screen === 1 && !timer && stage > 0) {
            timer = GAME.options.messageReadTime;

            _this.setBoons(stageData);

            _this.scamDescription.dispose();

            _this.scamsMessage.forEach(function (scam) {
              scam.dispose();
            });

            _this.scamsImage.forEach(function (image) {
              image.dispose();
            });

            background.background = "#F38669";
            screen = 2;

            _this.player.infoSound.play();
          } else if (show && timer <= 0) {
            stageUI.remove(_this.stageStatus);
            _this.player.coinsTextControl.isVisible = true;
            stageUI.clear();

            if (!_this.player.gameEnded) {
              GAME.resume();

              _this.player.landPlayer();
            }

            show = false;
            clearInterval(trigger);
          }
        }, 1000);
      }
    }
  }, {
    key: "setBoons",
    value: function setBoons(stageData) {
      var _this2 = this;

      var top = -140;
      this.stageUI.addControl(this.addText("Collect bonus points", {
        'top': top,
        'color': GAME.options.pointsTextColor,
        'outlineColor': GAME.options.pointsOutlineTextColor,
        'outlineWidth': '2px',
        'fontSize': '15px',
        'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
      }));
      stageData['boons'].forEach(function (scam) {
        top = top + 100;
        var image = new BABYLON.GUI.Image("icon", _public_message_json__WEBPACK_IMPORTED_MODULE_1__.message[scam].path);
        image.width = 0.15;
        image.height = 0.1;
        image.top = top;
        image.left = 0.1;
        image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

        _this2.stageUI.addControl(image);

        var display = new BABYLON.GUI.Rectangle();
        display.width = 0.75;
        display.height = 0.1;
        display.thickness = 0;
        display.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        display.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        display.top = top;

        _this2.stageUI.addControl(display);

        var scamsMessage = _this2.addText(_public_message_json__WEBPACK_IMPORTED_MODULE_1__.message[scam]['info'], {
          'top': '1px',
          'fontSize': '15px',
          'left': '10px',
          'horizontalAlignment': BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,
          'verticalAlignment': BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER
        });

        display.addControl(scamsMessage);
      });
    }
  }]);

  return StageCounter;
}();



/***/ }),

/***/ "./src/game/levels/generators/BoonsGenerator.js":
/*!******************************************************!*\
  !*** ./src/game/levels/generators/BoonsGenerator.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoonsGenerator; });
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../base/UI */ "./src/base/UI.js");
/* harmony import */ var _public_message_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public/message.json */ "./public/message.json");
var _public_message_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/message.json */ "./public/message.json", 1);
/* harmony import */ var _public_stage_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/stage.json */ "./public/stage.json");
var _public_stage_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/stage.json */ "./public/stage.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var BoonsGenerator =
/*#__PURE__*/
function () {
  /**
   * Class Description
   * 
   * To handle Coin Object related actions
   * @param {*} level - Values from core game screen
   */
  function BoonsGenerator(level) {
    _classCallCheck(this, BoonsGenerator);

    this.level = level;
    this.scene = level.scene;
    this.player = level.player;
    this.createCommonMaterials();
    this.typeOfBoon = 0;
    this.texture = null;
    this.boonSet = new Set(); // Special Boons

    this.boonTypes = [// 'normal_boon',
    'invisiblity_boon', 'life_boon'];
    this.activeBoons = [];
  }
  /**
   * Function to create Boon material.
   * Initial Dev - Simple Green Color Texture
   */


  _createClass(BoonsGenerator, [{
    key: "createCommonMaterials",
    value: function createCommonMaterials() {
      this.boonMaterial = new BABYLON.StandardMaterial("boonMaterial", this.scene);
      this.boonMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/FCA.png", this.scene);
      this.boonMaterial.diffuseTexture.hasAlpha = true;
      this.boonMaterial.backFaceCulling = true;
      this.level.addMaterial(this.boonMaterial);
    }
    /**
     * Function to generate coins every n seconds
     * 10 seconds for now. May increase based on UX
     */

  }, {
    key: "generate",
    value: function generate() {
      var _this = this;

      // New boons keep generating every 10 second
      setInterval(function () {
        _this.boonTypes = _public_stage_json__WEBPACK_IMPORTED_MODULE_2__["stage_" + (_this.level.nextStage - 1)]["boons"];

        if (!GAME.isPaused() && _this.player.lives && _this.level.age < 65 && !_this.level.freezeGeneration) {
          var randomTileTypeNumber = Math.floor(Math.random() * _this.boonTypes.length);
          var boonType = _this.boonTypes[randomTileTypeNumber];

          _this.activeBoons.push(randomTileTypeNumber);

          _this.typeOfBoon++;
          var message = _public_message_json__WEBPACK_IMPORTED_MODULE_1__.message;
          var location = message[boonType].path;
          _this.texture = new BABYLON.Texture(location, _this.scene);
          _this.boonMaterial.diffuseTexture = _this.texture;
          _this.boonMaterial.diffuseTexture.hasAlpha = true;

          _this.createBoons(boonType, randomTileTypeNumber);

          if (!_this.boonSet.has(boonType)) {
            _this.boonSet.add(boonType);
          }
        }
      }, 11000);
    }
    /**
     * 
     * @param {string} type - Type of Boon Object
     * Currently only one type of Boon Entity
     */

  }, {
    key: "createBoons",
    value: function createBoons(type, randomTileTypeNumber) {
      var _this2 = this;

      // To position boon objects on different lanes randomly Default to Middle Lane
      var randomPositionChooser = Math.floor(Math.random() * 100); // 0 to 100 random number

      var positionX = 0;

      if (randomPositionChooser >= 0 && randomPositionChooser < 30) {
        positionX = GAME.isMobile() ? -1 : -1.5; // Positining on the left
      }

      if (randomPositionChooser >= 30) {
        positionX = 0;
      }

      if (randomPositionChooser >= 60) {
        positionX = GAME.isMobile() ? 1 : 1.5; // Positioning on the right
      }

      var boonDiameter = GAME.isMobile() ? 0.35 : 0.4;
      var boons = BABYLON.MeshBuilder.CreateBox("boon_" + randomPositionChooser, {
        width: boonDiameter,
        height: boonDiameter,
        depth: 0.01
      }, this.scene);
      boons.material = this.level.getMaterial('boonMaterial');
      boons.position.x = positionX;
      boons.position.y = 3;
      boons.position.z = 0;
      boons.animations.push(this.createBoonAnimation());
      var boonAnimation = this.scene.beginAnimation(boons, 0, 2000, false);
      var trigger = setInterval(function () {
        var playerMesh = _this2.player.getMesh();

        if (boons) {
          var boonMesh = [];

          _this2.scene.meshes.forEach(function (element) {
            if (element['name'].includes("bullet") && !boonMesh.includes(element['name'])) {
              boonMesh.push(element['name']);

              if (element.intersectsMesh(boons, false)) {
                boons.dispose();
                setTimeout(function () {
                  element.dispose();

                  _this2.removeActiveBoon(randomTileTypeNumber);

                  clearInterval(trigger);
                }, 200);
              }
            }
          });

          if (playerMesh.intersectsMesh(boons, false)) {
            boons.dispose();

            _this2.player.keepBoon(type);

            _this2.removeActiveBoon(randomTileTypeNumber);

            clearInterval(trigger);
          } else if (_this2.player.groundMesh.intersectsMesh(boons, false)) {
            boons.dispose();

            _this2.removeActiveBoon(randomTileTypeNumber);

            clearInterval(trigger);
          }

          if (!_this2.player.lives || _this2.level.age >= 65) {
            boons.dispose();

            _this2.removeActiveBoon(randomTileTypeNumber);

            clearInterval(trigger);
          }

          if (GAME.isPaused()) {
            boons.paused = true;
            boonAnimation.pause();
          }

          if (!GAME.isPaused() && boons.paused) {
            boonAnimation.restart();
          }
        } else {
          _this2.removeActiveBoon(randomTileTypeNumber);

          clearInterval(trigger);
        }
      }, 5);
      setTimeout(function () {
        boonAnimation.pause();
        boons.dispose();
      }, 15000);
    }
    /**
     * Function to setup boon movements
     * Currenly boons have only vertical motion
     */

  }, {
    key: "createBoonAnimation",
    value: function createBoonAnimation() {
      var boonAnimation = new BABYLON.Animation("boonfall", "position.y", this.level.getGameSpeed() - 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      keys.push({
        frame: 0,
        value: 3
      });
      keys.push({
        frame: 15,
        value: 1.5
      });
      keys.push({
        frame: 30,
        value: 0
      });
      keys.push({
        frame: 45,
        value: -1.5
      });
      keys.push({
        frame: 60,
        value: -3
      });
      keys.push({
        frame: 85,
        value: -4.5
      });
      boonAnimation.setKeys(keys);
      return boonAnimation;
    }
  }, {
    key: "removeActiveBoon",
    value: function removeActiveBoon(randomTileTypeNumber) {
      var index = this.activeBoons.indexOf(randomTileTypeNumber);
      if (index !== -1) this.activeBoons.splice(index, 1);
    }
  }]);

  return BoonsGenerator;
}();



/***/ }),

/***/ "./src/game/levels/generators/ScamsGenerator.js":
/*!******************************************************!*\
  !*** ./src/game/levels/generators/ScamsGenerator.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScamsGenerator; });
/* harmony import */ var _base_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../base/UI */ "./src/base/UI.js");
/* harmony import */ var _public_message_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public/message.json */ "./public/message.json");
var _public_message_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/message.json */ "./public/message.json", 1);
/* harmony import */ var _public_stage_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/stage.json */ "./public/stage.json");
var _public_stage_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/stage.json */ "./public/stage.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ScamsGenerator =
/*#__PURE__*/
function () {
  /**
  * Class description
  *
  * To handle Scam Object Related Actions. 
  */
  function ScamsGenerator(level) {
    _classCallCheck(this, ScamsGenerator);

    this.decision = true;
    this.level = level;
    this.scene = level.scene;
    this.player = level.player;
    this.foreground = level.foreground;
    this.createCommonMaterials();
    this.scamSet = new Set();
    this.scamTypes = [];
    this.activeScams = [];
  }
  /**
   * Function to create a material for scam with diffusion of red color 
   */


  _createClass(ScamsGenerator, [{
    key: "createCommonMaterials",
    value: function createCommonMaterials() {
      var scamMaterial = new BABYLON.StandardMaterial("scamMaterial", this.scene);
      scamMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/Cold_call.png", this.scene);
      scamMaterial.diffuseTexture.hasAlpha = true;
      scamMaterial.backFaceCulling = true;
      this.level.addMaterial(scamMaterial);
    }
    /**
     * Function to randomly generate scam object with it's behaviour 
     */

  }, {
    key: "generate",
    value: function generate() {
      var _this = this;

      // New scams keep generating every 4 second
      setInterval(function () {
        _this.scamTypes = _public_stage_json__WEBPACK_IMPORTED_MODULE_2__["stage_" + (_this.level.nextStage - 1)]["scams"];

        if (!GAME.isPaused() && _this.player.lives && _this.level.age < 65 && !_this.level.freezeGeneration) {
          var randomTileTypeNumber = Math.floor(Math.random() * _this.scamTypes.length);
          var scamType = _this.scamTypes[randomTileTypeNumber];
          _this.player.activeScam = scamType;

          _this.activeScams.push(randomTileTypeNumber);

          if (scamType == 'splitter') {
            _this.createSplitterScams(randomTileTypeNumber);
          } else {
            _this.createScams(scamType, randomTileTypeNumber);
          }

          if (!_this.scamSet.has(scamType)) {
            _this.scamSet.add(scamType);
          }
        }
      }, 4000);
    }
    /**
     * Function to create the scam object.
     * @param {string} type - Flag to decide the behaviour of the scam.
     */

  }, {
    key: "createScams",
    value: function createScams(type, randomTileTypeNumber) {
      var _this2 = this;

      // To position scam objects on different lanes randomly Default to Middle Lane
      var randomPositionChooser = Math.floor(Math.random() * 100); // 0 to 100 random number

      var positionX = 0;

      if (randomPositionChooser >= 0 && randomPositionChooser < 30) {
        positionX = GAME.isMobile() ? -1 : -1.5; // Positining on the left
      }

      if (randomPositionChooser >= 30) {
        positionX = 0;
      }

      if (randomPositionChooser >= 60) {
        positionX = GAME.isMobile() ? 1 : 1.5; // Positioning on the right
      }

      var scamDiameter = GAME.isMobile() ? 0.35 : 0.4; // let scams = BABYLON.Mesh.CreateCylinder("scam_"+randomPositionChooser, 0.1, scamDiameter, scamDiameter, 16, 0, this.scene);

      var scams = BABYLON.MeshBuilder.CreateBox("scam_" + randomPositionChooser, {
        width: scamDiameter,
        height: scamDiameter,
        depth: 0.01
      }, this.scene);
      var message = _public_message_json__WEBPACK_IMPORTED_MODULE_1__.message;
      var location = message[type].path;
      scams.material = this.level.getMaterial('scamMaterial').clone('scam_material' + randomPositionChooser);
      scams.material.diffuseTexture = new BABYLON.Texture(location, this.scene);
      scams.material.diffuseTexture.hasAlpha = true;
      scams.position.x = positionX;
      scams.position.y = 3;
      scams.position.z = 0;

      if (type == 'zig_zag') {
        scams.animations.push(this.createZigZagScamAnimation(scams));
      } else if (type == 'normal_scam') {
        scams.animations.push(this.createScamAnimation());
      } else if (type == 'speedy') {
        scams.animations.push(this.createSpeedyScamAnimation());
      } else if (type == 'accelerator') {
        scams.animations.push(this.createAcceleratorScamAnimation());
      } else if (type == 'black_out') {
        scams.animations.push(this.createBlackoutAnimation());
      } else if (type == 'diagonal') {
        scams.animations.push(this.createDiagonalScamAnimation(scams));
      }

      var scamAnimation = this.scene.beginAnimation(scams, 0, 2000, false);
      var trigger = setInterval(function () {
        var playerMesh = _this2.player.getMesh();

        if (scams) {
          var scamMesh = [];

          _this2.scene.meshes.forEach(function (element) {
            if (element['name'].includes("bullet") && !scamMesh.includes(element['name'])) {
              scamMesh.push(element['name']);

              if (element.intersectsMesh(scams, false)) {
                // this.slicer(element)
                // element.material.emissiveColor = new BABYLON.Color3.FromHexString('#ff0000')
                scams.dispose();
                _this2.foreground.layerMask = 0;
                clearInterval(_this2.blackOutTrigger);
                setTimeout(function () {
                  element.dispose();

                  _this2.removeActiveScam(randomTileTypeNumber);

                  clearInterval(trigger);
                }, 200);

                _this2.player.keepScam(randomPositionChooser);
              }
            }
          });

          if (_this2.player.groundMesh.intersectsMesh(scams, false)) {
            _this2.foreground.layerMask = 0;

            _this2.player.checkLife();

            scams.dispose();

            _this2.removeActiveScam(randomTileTypeNumber);

            clearInterval(trigger);
          } else if (_this2.player.mesh.intersectsMesh(scams, false)) {
            _this2.foreground.layerMask = 0;

            _this2.player.checkLife();

            scams.dispose();

            _this2.removeActiveScam(randomTileTypeNumber);

            clearInterval(trigger);
          }

          if (!_this2.player.lives || _this2.level.age >= 65) {
            scams.dispose();

            _this2.removeActiveScam(randomTileTypeNumber);

            clearInterval(trigger);
          }

          if (GAME.isPaused()) {
            scams.paused = true;
            scamAnimation.pause();
          }

          if (!GAME.isPaused() && scams.paused) {
            scamAnimation.restart();
          }
        } else {
          _this2.removeActiveScam(randomTileTypeNumber);

          clearInterval(trigger);
        }
      }, 5);
      setTimeout(function () {
        scamAnimation.pause();
        scams.dispose();
      }, 10000);
    }
    /**
     * Function for scam objects to fall in normal speed 
     */

  }, {
    key: "createScamAnimation",
    value: function createScamAnimation() {
      var scamAnimation = new BABYLON.Animation("scamfall", "position.y", this.level.getGameSpeed() - 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      var position = 3;

      for (var index = 0; index < 6; index++) {
        keys.push({
          frame: index * 15,
          value: position
        });
        position = position - 1.5;
      }

      scamAnimation.setKeys(keys);
      return scamAnimation;
    }
    /**
     * Function for scam objects to fall in zigzag
     * @param {object} scams - To perform the behaviour of the scam.
     */

  }, {
    key: "createZigZagScamAnimation",
    value: function createZigZagScamAnimation(scams) {
      var scamAnimation = new BABYLON.Animation("scamfall", "position", this.level.getGameSpeed() - 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      var position = scams.position;
      var shift = false;
      var incrementBy = 1;

      for (var index = 0; index < 8; index++) {
        keys.push({
          frame: index * 15,
          value: position
        }); // Shift Right

        if (position.x == (GAME.isMobile() ? 1 : 1.5)) {
          shift = true;
          incrementBy = -1;
        } else if (position.x == -(GAME.isMobile() ? 1 : 1.5)) {
          shift = true;
          incrementBy = 1;
        } else {
          shift = false;
        }

        if (shift) {
          position = position.add(new BABYLON.Vector3((GAME.isMobile() ? 1 : 1.5) * incrementBy, -1, 0));
        } else {
          position = position.add(new BABYLON.Vector3((GAME.isMobile() ? 1 : 1.5) * incrementBy, -1, 0));
        }
      }

      scamAnimation.setKeys(keys);
      var easingFunction = new BABYLON.CircleEase(); // For each easing function, you can choose beetween EASEIN (default), EASEOUT, EASEINOUT

      easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEIN); // Adding easing function to my animation

      scamAnimation.setEasingFunction(easingFunction);
      return scamAnimation;
    }
    /**
     * Function for scam objects to fall in speedy manner 
     */

  }, {
    key: "createSpeedyScamAnimation",
    value: function createSpeedyScamAnimation() {
      var scamAnimation = new BABYLON.Animation("scamfall", "position.y", this.level.getGameSpeed() - 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      keys.push({
        frame: 0,
        value: 3
      });
      keys.push({
        frame: 30,
        value: -3
      });
      scamAnimation.setKeys(keys);
      return scamAnimation;
    }
    /**
     * Function for scam objects to fall in accelerator manner 
     */

  }, {
    key: "createAcceleratorScamAnimation",
    value: function createAcceleratorScamAnimation() {
      var scamAnimation = new BABYLON.Animation("scamfall", "position.y", this.level.getGameSpeed() - 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      keys.push({
        frame: 0,
        value: 3
      });
      keys.push({
        frame: 15,
        value: 1.5
      });
      keys.push({
        frame: 30,
        value: -3
      });
      scamAnimation.setKeys(keys);
      return scamAnimation;
    }
    /**
     * Function to perform screen blackout 
     */

  }, {
    key: "createBlackoutAnimation",
    value: function createBlackoutAnimation() {
      var _this3 = this;

      var imgPath = 'distort1.png';
      this.foreground.dispose();
      this.blackOutTrigger = setInterval(function () {
        _this3.foreground.layerMask = 0;

        if (!GAME.isPaused() && _this3.player.lives && _this3.level.age < 65) {
          _this3.foreground = new BABYLON.Layer("front", "/assets/scenes/" + imgPath, _this3.scene);
          _this3.foreground.isBackground = false;
          _this3.foreground.layerMask = 1;

          if (imgPath == 'distort1.png') {
            imgPath = 'distort2.png';
          } else {
            imgPath = 'distort1.png';
          }
        }
      }, 500);
      return this.createScamAnimation();
    }
    /**
     * Function for scam objects to fall in Diagonal
     * @param {object} scams - To perform the behaviour of the scam.
     */

  }, {
    key: "createDiagonalScamAnimation",
    value: function createDiagonalScamAnimation(scams) {
      var scamAnimation = new BABYLON.Animation("scamfall", "position", this.level.getGameSpeed() - 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      var position = scams.position;

      for (var index = 0; index < 5; index++) {
        keys.push({
          frame: index * 15,
          value: position
        });

        if (index == 1 && position.x != 0) {
          // keys[index].frame
          if (position.x == (GAME.isMobile() ? 1 : 1.5)) {
            // Move Left        
            position = position.add(new BABYLON.Vector3((GAME.isMobile() ? 1 : 1.5) * -2, -1.5, 0));
          } else {
            // Move Right
            position = position.add(new BABYLON.Vector3((GAME.isMobile() ? 1 : 1.5) * 2, -1.5, 0));
          }
        } //Move Down
        else if (index != 4 || position.x == 0) {
            position = position.add(new BABYLON.Vector3(0, -1.5, 0));
          }
      }

      scamAnimation.setKeys(keys);
      var easingFunction = new BABYLON.CircleEase(); // For each easing function, you can choose beetween EASEIN (default), EASEOUT, EASEINOUT

      easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEIN); // Adding easing function to my animation

      scamAnimation.setEasingFunction(easingFunction);
      return scamAnimation;
    }
  }, {
    key: "createSplitterScams",
    value: function createSplitterScams(randomTileTypeNumber) {
      var _this4 = this;

      var scams = [];
      var trigger = [];

      var _loop = function _loop(index) {
        var randomPositionChooser = Math.floor(Math.random() * 100); // 0 to 100 random number

        var scamDiameter = GAME.isMobile() ? 0.35 : 0.4;
        scams[index] = BABYLON.MeshBuilder.CreateBox("scam_" + randomPositionChooser, {
          width: scamDiameter,
          height: scamDiameter,
          depth: 0.01
        }, _this4.scene);
        var message = _public_message_json__WEBPACK_IMPORTED_MODULE_1__.message;
        var location = message["splitter"].path;
        scams[index].material = _this4.level.getMaterial('scamMaterial').clone('scam_material' + randomPositionChooser);
        scams[index].material.diffuseTexture = new BABYLON.Texture(location, _this4.scene);
        scams[index].material.diffuseTexture.hasAlpha = true;
        scams[index].position.x = 0;
        scams[index].position.y = 3;
        scams[index].position.z = 0;
        scams[index].animations.push(_this4.createSplitterAnimation(scams[index], index == 1 ? 'right' : 'left', index));

        var scamAnimation = _this4.scene.beginAnimation(scams[index], 0, 2000, false);

        trigger[index] = setInterval(function () {
          var playerMesh = _this4.player.getMesh();

          if (scams[index]) {
            var scamMesh = [];

            _this4.scene.meshes.forEach(function (element) {
              if (element['name'].includes("bullet") && !scamMesh.includes(element['name'])) {
                scamMesh.push(element['name']);

                if (element.intersectsMesh(scams[index], false)) {
                  // this.slicer(element)
                  // element.material.emissiveColor = new BABYLON.Color3.FromHexString('#ff0000')
                  scams[index].dispose();
                  _this4.foreground.layerMask = 0;
                  clearInterval(_this4.blackOutTrigger);
                  setTimeout(function () {
                    element.dispose();

                    _this4.removeActiveScam(randomTileTypeNumber);

                    clearInterval(trigger[index]);
                  }, 200);

                  _this4.player.keepScam(randomPositionChooser);
                }
              }
            });

            if (_this4.player.groundMesh.intersectsMesh(scams[index], false)) {
              _this4.foreground.layerMask = 0;

              _this4.player.checkLife();

              scams[index].dispose();

              _this4.removeActiveScam(randomTileTypeNumber);

              clearInterval(trigger[index]);
            } else if (_this4.player.mesh.intersectsMesh(scams[index], false)) {
              _this4.foreground.layerMask = 0;

              _this4.player.checkLife();

              scams[index].dispose();

              _this4.removeActiveScam(randomTileTypeNumber);

              clearInterval(trigger[index]);
            }

            if (!_this4.player.lives || _this4.level.age >= 65) {
              scams[index].dispose();

              _this4.removeActiveScam(randomTileTypeNumber);

              clearInterval(trigger[index]);
            }

            if (GAME.isPaused()) {
              scams[index].paused = true;
              scamAnimation.pause();
            }

            if (!GAME.isPaused() && scams[index].paused) {
              scamAnimation.restart();
            }
          } else {
            _this4.removeActiveScam(randomTileTypeNumber);

            clearInterval(trigger[index]);
          }
        }, 5);
        setTimeout(function () {
          scamAnimation.pause();
          scams[index].dispose();
        }, 8000);
      };

      for (var index = 0; index < 2; index++) {
        _loop(index);
      }
    }
  }, {
    key: "createSplitterAnimation",
    value: function createSplitterAnimation(scams, direction) {
      var scamAnimation = new BABYLON.Animation("scamfall", "position", this.level.getGameSpeed() - 20, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      var position = scams.position;

      for (var index = 0; index < 7; index++) {
        keys.push({
          frame: index * 15,
          value: position
        });

        if (index == 1 && direction == 'right') {
          position = position.add(new BABYLON.Vector3(GAME.isMobile() ? 1 : 1.5, -1.5, 0));
          this.decision = !this.decision;
        } else if (index == 1) {
          position = position.add(new BABYLON.Vector3(GAME.isMobile() ? -1 : -1.5, -1.5, 0));
        } else if (index == 0) {
          position = position.add(new BABYLON.Vector3(0, -0.8, 0));
        } else {
          if (this.decision) {
            position = position.add(new BABYLON.Vector3(0, -1, 0));
          } else {
            position = position.add(new BABYLON.Vector3(0, -1.5, 0));
          }
        }
      }

      scamAnimation.setKeys(keys);
      var easingFunction = new BABYLON.CircleEase(); // For each easing function, you can choose beetween EASEIN (default), EASEOUT, EASEINOUT

      easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEIN); // Adding easing function to my animation

      scamAnimation.setEasingFunction(easingFunction);
      return scamAnimation;
    }
  }, {
    key: "removeActiveScam",
    value: function removeActiveScam(randomTileTypeNumber) {
      var index = this.activeScams.indexOf(randomTileTypeNumber);
      if (index !== -1) this.activeScams.splice(index, 1);
    }
  }]);

  return ScamsGenerator;
}();



/***/ }),

/***/ "./src/game/levels/generators/TilesGenerator.js":
/*!******************************************************!*\
  !*** ./src/game/levels/generators/TilesGenerator.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TilesGenerator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TilesGenerator =
/*#__PURE__*/
function () {
  /**
   * Class Description
   * 
   * To handle Coin Object related actions
   * @param {*} level - Values from core game screen
   */
  function TilesGenerator(level) {
    _classCallCheck(this, TilesGenerator);

    this.level = level;
    this.scene = level.scene;
    this.player = level.player;
    this.activeCoins = [];
    this.createCommonMaterials();
  }
  /**
   * Function to create coin material.
   * Initial Dev - Simple Yellow Color Texture
   */


  _createClass(TilesGenerator, [{
    key: "createCommonMaterials",
    value: function createCommonMaterials() {
      // let coinMaterial = new BABYLON.StandardMaterial('coinMaterial', this.scene);
      // coinMaterial.diffuseColor = new BABYLON.Color3.Yellow();
      // coinMaterial.emissiveColor = new BABYLON.Color3.Yellow();
      // coinMaterial.specularColor = new BABYLON.Color3.Yellow();
      var coinMaterial = new BABYLON.StandardMaterial("coinMaterial", this.scene);
      coinMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/jmanassets/coin.png", this.scene);
      coinMaterial.diffuseTexture.hasAlpha = true;
      coinMaterial.backFaceCulling = true; // Freeze materials to improve performance (this material will not be modified)
      // coinMaterial.freeze();

      this.level.addMaterial(coinMaterial);
    }
    /**
     * Function to generate coins every n seconds
     * 2 seconds for now. May increase based on UX
     */

  }, {
    key: "generate",
    value: function generate() {
      var _this = this;

      // New coins keep generating every 2 second
      setInterval(function () {
        if (!GAME.isPaused() && _this.player.lives && _this.level.age < 65 && !_this.level.freezeGeneration) {
          _this.createCoins();
        }
      }, 2000);
    }
    /**
     * Function to create coins on random position (3 lanes)
     */

  }, {
    key: "createCoins",
    value: function createCoins() {
      var _this2 = this;

      // To position scam objects on different lanes randomly Default to Middle Lane
      var randomPositionChooser = Math.floor(Math.random() * 100); // 0 to 100 random number

      var positionX = 0;

      if (randomPositionChooser >= 0 && randomPositionChooser < 30) {
        positionX = GAME.isMobile() ? -1 : -1.5; // Positining on the left
      }

      if (randomPositionChooser >= 30) {
        positionX = 0;
      }

      if (randomPositionChooser >= 60) {
        positionX = GAME.isMobile() ? 1 : 1.5; // Positioning on the right
      }

      this.activeCoins.push(randomPositionChooser);
      var coinDiameter = GAME.isMobile() ? 0.25 : 0.4;
      var coins = BABYLON.Mesh.CreateCylinder("coin", 0.01, coinDiameter, coinDiameter, 16, 0, this.scene);
      coins.material = this.level.getMaterial('coinMaterial');
      coins.position.x = positionX;
      coins.position.y = 3;
      coins.position.z = 0;
      coins.rotation.x = -1.5;
      coins.animations.push(this.createCoinAnimation());
      var coinAnimation = this.scene.beginAnimation(coins, 0, 2000, false);
      var playerMesh = this.player.getMesh();
      var groundPlane = this.player.groundMesh;
      /**
       * @todo Currently we have set up passive coin collection. 
       * Incase of collectable action change here
       */

      var trigger = setInterval(function () {
        if (groundPlane.intersectsMesh(coins, false)) {
          coins.dispose();

          _this2.removeActiveCoin(randomPositionChooser);

          clearInterval(trigger);
        }

        if (playerMesh.intersectsMesh(coins, false)) {
          _this2.player.keepCoin();

          coins.dispose();

          _this2.removeActiveCoin(randomPositionChooser);

          clearInterval(trigger);
        }

        if (!_this2.player.lives || _this2.level.age >= 65) {
          coins.dispose();

          _this2.removeActiveCoin(randomPositionChooser);

          clearInterval(trigger);
        }

        if (GAME.isPaused()) {
          coins.paused = true;
          coinAnimation.pause();
        }

        if (!GAME.isPaused() && coins.paused) {
          coinAnimation.restart();
        }
      }, 10);
      setTimeout(function () {
        coinAnimation.pause();
        coins.dispose();
      }, 20000);

      if (GAME.isPaused()) {
        coinAnimation.pause();
      }
    }
    /**
     * Function to setup coin movements
     * Currenly coins have only vertical motion
     */

  }, {
    key: "createCoinAnimation",
    value: function createCoinAnimation() {
      var coinAnimation = new BABYLON.Animation("coinfall", "position.y", this.level.getGameSpeed(), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      var keys = [];
      keys.push({
        frame: 0,
        value: 3
      });
      keys.push({
        frame: 15,
        value: 1.5
      });
      keys.push({
        frame: 30,
        value: 0
      });
      keys.push({
        frame: 45,
        value: -1.5
      });
      keys.push({
        frame: 60,
        value: -3
      });
      keys.push({
        frame: 85,
        value: -4.5
      });
      coinAnimation.setKeys(keys);
      return coinAnimation;
    }
  }, {
    key: "removeActiveCoin",
    value: function removeActiveCoin(randomTileTypeNumber) {
      var index = this.activeCoins.indexOf(randomTileTypeNumber);
      if (index !== -1) this.activeCoins.splice(index, 1);
    }
  }]);

  return TilesGenerator;
}();



/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jman/projects/Scamman&Robbins_staging/backup_pull/scam-man-and-robbin/front-end-babylonjs/src/app.js */"./src/app.js");


/***/ })

/******/ });