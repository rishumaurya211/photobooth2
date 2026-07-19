import { S as reactExports, J as jsxRuntimeExports, W as requireReact, w as getDefaultExportFromCjs } from "./server-CyB-gE1i.js";
import { G as Grain, N as Navbar } from "./Grain-DflO8vXv.js";
import { u as useNavigate } from "./router-BAjGcQZA.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, b as usePresence, a as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./proxy-BrKusGOa.js";
import { s as savePhotos } from "./photo-store-csdjgAAq.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const computedStyle = getComputedStyle(element);
      const size = this.props.sizeRef.current;
      size.height = parseFloat(computedStyle.height);
      size.width = parseFloat(computedStyle.width);
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
      size.direction = computedStyle.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = children.props?.ref ?? children?.ref;
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom, direction } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const isRTL = direction === "rtl";
    const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      ref.current?.removeAttribute("data-motion-pop-id");
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender?.();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && safeToRemove?.();
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
var reactWebcam$1 = { exports: {} };
var reactWebcam = reactWebcam$1.exports;
var hasRequiredReactWebcam;
function requireReactWebcam() {
  if (hasRequiredReactWebcam) return reactWebcam$1.exports;
  hasRequiredReactWebcam = 1;
  (function(module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory(requireReact());
    })(reactWebcam, function(__WEBPACK_EXTERNAL_MODULE_react__) {
      return (
        /******/
        (function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
        })({
          /***/
          "./src/react-webcam.tsx": (
            /*!******************************!*\
              !*** ./src/react-webcam.tsx ***!
              \******************************/
            /*! exports provided: default */
            /***/
            (function(module2, __webpack_exports__, __webpack_require__) {
              __webpack_require__.r(__webpack_exports__);
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! react */
                "react"
              );
              var __extends = /* @__PURE__ */ (function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              })();
              var __assign = function() {
                __assign = Object.assign || function(t) {
                  for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
                  }
                  return t;
                };
                return __assign.apply(this, arguments);
              };
              var __rest = function(s, e) {
                var t = {};
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                  t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                  for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                      t[p[i]] = s[p[i]];
                  }
                return t;
              };
              (function polyfillGetUserMedia() {
                if (typeof window === "undefined") {
                  return;
                }
                if (navigator.mediaDevices === void 0) {
                  navigator.mediaDevices = {};
                }
                if (navigator.mediaDevices.getUserMedia === void 0) {
                  navigator.mediaDevices.getUserMedia = function(constraints) {
                    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                    if (!getUserMedia) {
                      return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
                    }
                    return new Promise(function(resolve, reject) {
                      getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                  };
                }
              })();
              function hasGetUserMedia() {
                return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
              }
              var Webcam2 = (
                /** @class */
                (function(_super) {
                  __extends(Webcam3, _super);
                  function Webcam3(props) {
                    var _this = _super.call(this, props) || this;
                    _this.canvas = null;
                    _this.ctx = null;
                    _this.requestUserMediaId = 0;
                    _this.unmounted = false;
                    _this.state = {
                      hasUserMedia: false
                    };
                    return _this;
                  }
                  Webcam3.prototype.componentDidMount = function() {
                    var _a = this, state = _a.state, props = _a.props;
                    this.unmounted = false;
                    if (!hasGetUserMedia()) {
                      props.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    if (!state.hasUserMedia) {
                      this.requestUserMedia();
                    }
                    if (props.children && typeof props.children != "function") {
                      console.warn("children must be a function");
                    }
                  };
                  Webcam3.prototype.componentDidUpdate = function(nextProps) {
                    var props = this.props;
                    if (!hasGetUserMedia()) {
                      props.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !== JSON.stringify(props.audioConstraints);
                    var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !== JSON.stringify(props.videoConstraints);
                    var minScreenshotWidthChanged = nextProps.minScreenshotWidth !== props.minScreenshotWidth;
                    var minScreenshotHeightChanged = nextProps.minScreenshotHeight !== props.minScreenshotHeight;
                    if (videoConstraintsChanged || minScreenshotWidthChanged || minScreenshotHeightChanged) {
                      this.canvas = null;
                      this.ctx = null;
                    }
                    if (audioConstraintsChanged || videoConstraintsChanged) {
                      this.stopAndCleanup();
                      this.requestUserMedia();
                    }
                  };
                  Webcam3.prototype.componentWillUnmount = function() {
                    this.unmounted = true;
                    this.stopAndCleanup();
                  };
                  Webcam3.stopMediaStream = function(stream) {
                    if (stream) {
                      if (stream.getVideoTracks && stream.getAudioTracks) {
                        stream.getVideoTracks().map(function(track) {
                          stream.removeTrack(track);
                          track.stop();
                        });
                        stream.getAudioTracks().map(function(track) {
                          stream.removeTrack(track);
                          track.stop();
                        });
                      } else {
                        stream.stop();
                      }
                    }
                  };
                  Webcam3.prototype.stopAndCleanup = function() {
                    var state = this.state;
                    if (state.hasUserMedia) {
                      Webcam3.stopMediaStream(this.stream);
                      if (state.src) {
                        window.URL.revokeObjectURL(state.src);
                      }
                    }
                  };
                  Webcam3.prototype.getScreenshot = function(screenshotDimensions) {
                    var _a = this, state = _a.state, props = _a.props;
                    if (!state.hasUserMedia)
                      return null;
                    var canvas = this.getCanvas(screenshotDimensions);
                    return canvas && canvas.toDataURL(props.screenshotFormat, props.screenshotQuality);
                  };
                  Webcam3.prototype.getCanvas = function(screenshotDimensions) {
                    var _a = this, state = _a.state, props = _a.props;
                    if (!this.video) {
                      return null;
                    }
                    if (!state.hasUserMedia || !this.video.videoHeight)
                      return null;
                    if (!this.ctx) {
                      var canvasWidth = this.video.videoWidth;
                      var canvasHeight = this.video.videoHeight;
                      if (!this.props.forceScreenshotSourceSize) {
                        var aspectRatio = canvasWidth / canvasHeight;
                        canvasWidth = props.minScreenshotWidth || this.video.clientWidth;
                        canvasHeight = canvasWidth / aspectRatio;
                        if (props.minScreenshotHeight && canvasHeight < props.minScreenshotHeight) {
                          canvasHeight = props.minScreenshotHeight;
                          canvasWidth = canvasHeight * aspectRatio;
                        }
                      }
                      this.canvas = document.createElement("canvas");
                      this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
                      this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
                      this.ctx = this.canvas.getContext("2d");
                    }
                    var _b = this, ctx = _b.ctx, canvas = _b.canvas;
                    if (ctx && canvas) {
                      canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width;
                      canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height;
                      if (props.mirrored) {
                        ctx.translate(canvas.width, 0);
                        ctx.scale(-1, 1);
                      }
                      ctx.imageSmoothingEnabled = props.imageSmoothing;
                      ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
                      if (props.mirrored) {
                        ctx.scale(-1, 1);
                        ctx.translate(-canvas.width, 0);
                      }
                    }
                    return canvas;
                  };
                  Webcam3.prototype.requestUserMedia = function() {
                    var _this = this;
                    var props = this.props;
                    var sourceSelected = function(audioConstraints, videoConstraints) {
                      var constraints = {
                        video: typeof videoConstraints !== "undefined" ? videoConstraints : true
                      };
                      if (props.audio) {
                        constraints.audio = typeof audioConstraints !== "undefined" ? audioConstraints : true;
                      }
                      _this.requestUserMediaId++;
                      var myRequestUserMediaId = _this.requestUserMediaId;
                      navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
                        if (_this.unmounted || myRequestUserMediaId !== _this.requestUserMediaId) {
                          Webcam3.stopMediaStream(stream);
                        } else {
                          _this.handleUserMedia(null, stream);
                        }
                      }).catch(function(e) {
                        _this.handleUserMedia(e);
                      });
                    };
                    if ("mediaDevices" in navigator) {
                      sourceSelected(props.audioConstraints, props.videoConstraints);
                    } else {
                      var optionalSource_1 = function(id) {
                        return { optional: [{ sourceId: id }] };
                      };
                      var constraintToSourceId_1 = function(constraint) {
                        var deviceId = constraint.deviceId;
                        if (typeof deviceId === "string") {
                          return deviceId;
                        }
                        if (Array.isArray(deviceId) && deviceId.length > 0) {
                          return deviceId[0];
                        }
                        if (typeof deviceId === "object" && deviceId.ideal) {
                          return deviceId.ideal;
                        }
                        return null;
                      };
                      MediaStreamTrack.getSources(function(sources) {
                        var audioSource = null;
                        var videoSource = null;
                        sources.forEach(function(source) {
                          if (source.kind === "audio") {
                            audioSource = source.id;
                          } else if (source.kind === "video") {
                            videoSource = source.id;
                          }
                        });
                        var audioSourceId = constraintToSourceId_1(props.audioConstraints);
                        if (audioSourceId) {
                          audioSource = audioSourceId;
                        }
                        var videoSourceId = constraintToSourceId_1(props.videoConstraints);
                        if (videoSourceId) {
                          videoSource = videoSourceId;
                        }
                        sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));
                      });
                    }
                  };
                  Webcam3.prototype.handleUserMedia = function(err, stream) {
                    var props = this.props;
                    if (err || !stream) {
                      this.setState({ hasUserMedia: false });
                      props.onUserMediaError(err);
                      return;
                    }
                    this.stream = stream;
                    try {
                      if (this.video) {
                        this.video.srcObject = stream;
                      }
                      this.setState({ hasUserMedia: true });
                    } catch (error) {
                      this.setState({
                        hasUserMedia: true,
                        src: window.URL.createObjectURL(stream)
                      });
                    }
                    props.onUserMedia(stream);
                  };
                  Webcam3.prototype.render = function() {
                    var _this = this;
                    var _a = this, state = _a.state, props = _a.props;
                    var audio = props.audio;
                    props.forceScreenshotSourceSize;
                    var disablePictureInPicture = props.disablePictureInPicture;
                    props.onUserMedia;
                    props.onUserMediaError;
                    props.screenshotFormat;
                    props.screenshotQuality;
                    props.minScreenshotWidth;
                    props.minScreenshotHeight;
                    props.audioConstraints;
                    props.videoConstraints;
                    props.imageSmoothing;
                    var mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, rest = __rest(props, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]);
                    var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || "") + " scaleX(-1)" }) : style;
                    var childrenProps = {
                      getScreenshot: this.getScreenshot.bind(this)
                    };
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                      react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", __assign({ autoPlay: true, disablePictureInPicture, src: state.src, muted: !audio, playsInline: true, ref: function(ref) {
                        _this.video = ref;
                      }, style: videoStyle }, rest)),
                      children && children(childrenProps)
                    );
                  };
                  Webcam3.defaultProps = {
                    audio: false,
                    disablePictureInPicture: false,
                    forceScreenshotSourceSize: false,
                    imageSmoothing: true,
                    mirrored: false,
                    onUserMedia: function() {
                      return void 0;
                    },
                    onUserMediaError: function() {
                      return void 0;
                    },
                    screenshotFormat: "image/webp",
                    screenshotQuality: 0.92
                  };
                  return Webcam3;
                })(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
              );
              __webpack_exports__["default"] = Webcam2;
            })
          ),
          /***/
          "react": (
            /*!**************************************************************************************!*\
              !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
              \**************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              module2.exports = __WEBPACK_EXTERNAL_MODULE_react__;
            })
          )
          /******/
        })["default"]
      );
    });
  })(reactWebcam$1);
  return reactWebcam$1.exports;
}
var reactWebcamExports = requireReactWebcam();
const Webcam = /* @__PURE__ */ getDefaultExportFromCjs(reactWebcamExports);
function CountdownOverlay({ value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: value !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 1.2 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[14rem] leading-none text-warm-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]", children: value })
    },
    String(value)
  ) });
}
function FlashEffect({ active }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.18 },
      className: "pointer-events-none absolute inset-0 z-40 bg-white"
    }
  ) });
}
const FILTERS = [
  { id: "none", label: "Original", css: "none" },
  { id: "bw", label: "Noir", css: "grayscale(1) contrast(1.15)" },
  { id: "sepia", label: "Sepia", css: "sepia(0.65) contrast(1.05) brightness(1.02)" },
  { id: "vintage", label: "Vintage", css: "sepia(0.3) saturate(1.35) contrast(1.1) brightness(0.92)" },
  { id: "vivid", label: "Vivid", css: "saturate(1.6) contrast(1.15) brightness(1.03)" },
  { id: "soft", label: "Soft", css: "brightness(1.1) contrast(0.9) saturate(0.92)" },
  { id: "cool", label: "Cool", css: "saturate(1.1) contrast(1.05) hue-rotate(-8deg) brightness(1.02)" },
  { id: "warm", label: "Warm", css: "sepia(0.18) saturate(1.3) hue-rotate(-6deg) brightness(1.05)" }
];
function CameraBooth() {
  const webcamRef = reactExports.useRef(null);
  const navigate = useNavigate();
  const [phase, setPhase] = reactExports.useState("idle");
  const [count, setCount] = reactExports.useState(null);
  const [flash, setFlash] = reactExports.useState(false);
  const [photos, setPhotos] = reactExports.useState([]);
  const [shotIndex, setShotIndex] = reactExports.useState(0);
  const [activeFilter, setActiveFilter] = reactExports.useState("none");
  const activeCss = FILTERS.find((f) => f.id === activeFilter)?.css ?? "none";
  const capture = reactExports.useCallback(() => {
    const video = webcamRef.current?.video;
    if (!video || video.readyState < 2) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.filter = activeCss;
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    setPhotos((p) => [...p, dataUrl]);
  }, [activeCss]);
  reactExports.useEffect(() => {
    if (phase !== "running") return;
    if (shotIndex >= 4) {
      setPhase("done");
      return;
    }
    let cancelled = false;
    const run = async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const n of [3, 2, 1]) {
        if (cancelled) return;
        setCount(n);
        await sleep(900);
      }
      if (cancelled) return;
      setCount("FLASH");
      setFlash(true);
      capture();
      await sleep(160);
      setFlash(false);
      await sleep(280);
      setCount(null);
      await sleep(450);
      setShotIndex((i) => i + 1);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [phase, shotIndex, capture]);
  reactExports.useEffect(() => {
    if (phase === "done" && photos.length === 4) {
      savePhotos(photos);
      const t = setTimeout(() => navigate({ to: "/result" }), 900);
      return () => clearTimeout(t);
    }
  }, [phase, photos, navigate]);
  const start = () => {
    setPhotos([]);
    setShotIndex(0);
    setPhase("running");
  };
  const retake = () => {
    setPhotos([]);
    setShotIndex(0);
    setPhase("idle");
    setCount(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-12 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.35em] text-brown", children: "Booth · Room 02" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl text-charcoal md:text-7xl mt-3", children: "Look this way." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-charcoal/70", children: "Four frames. Hold still for the flash." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        style: { rotate: "-0.6deg" },
        className: "relative w-full max-w-2xl",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[36px] bg-charcoal p-5 paper-shadow-lg sm:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between px-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-warm-white tracking-[0.3em] text-sm", children: "MAISON · BOOTH" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted-red animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-warm-white/60", children: [
                "REC ",
                shotIndex,
                "/4"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-[20px] border-[6px] border-[#111] bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] w-full vignette", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Webcam,
              {
                ref: webcamRef,
                audio: false,
                screenshotFormat: "image/jpeg",
                screenshotQuality: 0.92,
                videoConstraints: { facingMode: "user" },
                mirrored: true,
                className: "h-full w-full object-cover",
                style: { filter: activeCss, transition: "filter 0.25s ease" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain-overlay z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CountdownOverlay, { value: count }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FlashEffect, { active: flash }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l-2 border-t-2 border-warm-white/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 border-r-2 border-t-2 border-warm-white/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 bottom-3 z-20 h-5 w-5 border-l-2 border-b-2 border-warm-white/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-3 bottom-3 z-20 h-5 w-5 border-r-2 border-b-2 border-warm-white/60" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between px-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-gradient-to-br from-[#3a2f24] to-[#0a0807]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-gradient-to-br from-[#3a2f24] to-[#0a0807]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-warm-white/70 text-lg", children: "smile." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-warm-white/60", children: "f / 2.8" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-center text-[10px] uppercase tracking-[0.3em] text-brown", children: "Choose a filter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-3", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveFilter(f.id),
          disabled: phase === "running",
          className: `flex flex-col items-center gap-1.5 transition-opacity disabled:cursor-not-allowed disabled:opacity-40`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `h-11 w-11 rounded-full border-2 bg-gradient-to-br from-[#d9b98f] via-[#b98b62] to-[#5a4534] sm:h-12 sm:w-12 ${activeFilter === f.id ? "border-charcoal ring-2 ring-charcoal/30 ring-offset-2 ring-offset-cream" : "border-charcoal/20"}`,
                style: { filter: f.css }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[10px] uppercase tracking-[0.15em] ${activeFilter === f.id ? "text-charcoal" : "text-charcoal/50"}`,
                children: f.label
              }
            )
          ]
        },
        f.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-3", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative h-16 w-20 overflow-hidden rounded-sm bg-warm-white paper-shadow sm:h-20 sm:w-24",
        style: { transform: `rotate(${(i - 1.5) * 1.5}deg)` },
        children: photos[i] ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photos[i], alt: "", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center font-display text-2xl text-charcoal/30", children: i + 1 })
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: retake, className: "btn-outline-retro", disabled: phase === "running", children: "Retake" }),
      phase === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: start, className: "btn-retro", children: "Start Capture" }),
      phase === "running" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-retro opacity-70", disabled: true, children: "Hold still…" }),
      phase === "done" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({ to: "/result" }), className: "btn-retro", children: "Continue →" })
    ] })
  ] });
}
function BoothPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-cream text-charcoal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grain, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CameraBooth, {})
  ] });
}
export {
  BoothPage as component
};
