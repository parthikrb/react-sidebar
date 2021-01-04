(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('@emotion/styled'), require('@emotion/react')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', '@emotion/styled', '@emotion/react'], factory) :
  (global = global || self, global.reactSampleComponentsLibrary = factory(global.React, global['prop-types'], global.styled, global.react));
}(this, (function (React, PropTypes, styled, react) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;
  styled = styled && Object.prototype.hasOwnProperty.call(styled, 'default') ? styled['default'] : styled;

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
  }

  // About 1.5x faster than the two-arg version of Array#splice()
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
      list[i] = list[k];
    }

    list.pop();
  }

  // This implementation is based heavily on node's url.parse
  function resolvePathname(to, from) {
    if (from === undefined) from = '';

    var toParts = (to && to.split('/')) || [];
    var fromParts = (from && from.split('/')) || [];

    var isToAbs = to && isAbsolute(to);
    var isFromAbs = from && isAbsolute(from);
    var mustEndAbs = isToAbs || isFromAbs;

    if (to && isAbsolute(to)) {
      // to is absolute
      fromParts = toParts;
    } else if (toParts.length) {
      // to is relative, drop the filename
      fromParts.pop();
      fromParts = fromParts.concat(toParts);
    }

    if (!fromParts.length) return '/';

    var hasTrailingSlash;
    if (fromParts.length) {
      var last = fromParts[fromParts.length - 1];
      hasTrailingSlash = last === '.' || last === '..' || last === '';
    } else {
      hasTrailingSlash = false;
    }

    var up = 0;
    for (var i = fromParts.length; i >= 0; i--) {
      var part = fromParts[i];

      if (part === '.') {
        spliceOne(fromParts, i);
      } else if (part === '..') {
        spliceOne(fromParts, i);
        up++;
      } else if (up) {
        spliceOne(fromParts, i);
        up--;
      }
    }

    if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

    if (
      mustEndAbs &&
      fromParts[0] !== '' &&
      (!fromParts[0] || !isAbsolute(fromParts[0]))
    )
      fromParts.unshift('');

    var result = fromParts.join('/');

    if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

    return result;
  }

  function valueOf(obj) {
    return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
  }

  function valueEqual(a, b) {
    // Test for strict equality first.
    if (a === b) return true;

    // Otherwise, if either of them == null they are not equal.
    if (a == null || b == null) return false;

    if (Array.isArray(a)) {
      return (
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(function(item, index) {
          return valueEqual(item, b[index]);
        })
      );
    }

    if (typeof a === 'object' || typeof b === 'object') {
      var aValue = valueOf(a);
      var bValue = valueOf(b);

      if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

      return Object.keys(Object.assign({}, a, b)).every(function(key) {
        return valueEqual(a[key], b[key]);
      });
    }

    return false;
  }

  var isProduction = process.env.NODE_ENV === 'production';
  function warning(condition, message) {
    if (!isProduction) {
      if (condition) {
        return;
      }

      var text = "Warning: " + message;

      if (typeof console !== 'undefined') {
        console.warn(text);
      }

      try {
        throw Error(text);
      } catch (x) {}
    }
  }

  var isProduction$1 = process.env.NODE_ENV === 'production';
  var prefix = 'Invariant failed';
  function invariant(condition, message) {
      if (condition) {
          return;
      }
      if (isProduction$1) {
          throw new Error(prefix);
      }
      throw new Error(prefix + ": " + (message || ''));
  }

  function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
  }
  function stripLeadingSlash(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
  }
  function hasBasename(path, prefix) {
    return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
  }
  function stripBasename(path, prefix) {
    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
  }
  function stripTrailingSlash(path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  }
  function parsePath(path) {
    var pathname = path || '/';
    var search = '';
    var hash = '';
    var hashIndex = pathname.indexOf('#');

    if (hashIndex !== -1) {
      hash = pathname.substr(hashIndex);
      pathname = pathname.substr(0, hashIndex);
    }

    var searchIndex = pathname.indexOf('?');

    if (searchIndex !== -1) {
      search = pathname.substr(searchIndex);
      pathname = pathname.substr(0, searchIndex);
    }

    return {
      pathname: pathname,
      search: search === '?' ? '' : search,
      hash: hash === '#' ? '' : hash
    };
  }
  function createPath(location) {
    var pathname = location.pathname,
        search = location.search,
        hash = location.hash;
    var path = pathname || '/';
    if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
    if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
    return path;
  }

  function createLocation(path, state, key, currentLocation) {
    var location;

    if (typeof path === 'string') {
      // Two-arg form: push(path, state)
      location = parsePath(path);
      location.state = state;
    } else {
      // One-arg form: push(location)
      location = _extends$1({}, path);
      if (location.pathname === undefined) location.pathname = '';

      if (location.search) {
        if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
      } else {
        location.search = '';
      }

      if (location.hash) {
        if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
      } else {
        location.hash = '';
      }

      if (state !== undefined && location.state === undefined) location.state = state;
    }

    try {
      location.pathname = decodeURI(location.pathname);
    } catch (e) {
      if (e instanceof URIError) {
        throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
      } else {
        throw e;
      }
    }

    if (key) location.key = key;

    if (currentLocation) {
      // Resolve incomplete/relative pathname relative to current location.
      if (!location.pathname) {
        location.pathname = currentLocation.pathname;
      } else if (location.pathname.charAt(0) !== '/') {
        location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
      }
    } else {
      // When there is no prior location and pathname is empty, set it to /
      if (!location.pathname) {
        location.pathname = '/';
      }
    }

    return location;
  }
  function locationsAreEqual(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
  }

  function createTransitionManager() {
    var prompt = null;

    function setPrompt(nextPrompt) {
      process.env.NODE_ENV !== "production" ? warning(prompt == null, 'A history supports only one prompt at a time') : void 0;
      prompt = nextPrompt;
      return function () {
        if (prompt === nextPrompt) prompt = null;
      };
    }

    function confirmTransitionTo(location, action, getUserConfirmation, callback) {
      // TODO: If another transition starts while we're still confirming
      // the previous one, we may end up in a weird state. Figure out the
      // best way to handle this.
      if (prompt != null) {
        var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

        if (typeof result === 'string') {
          if (typeof getUserConfirmation === 'function') {
            getUserConfirmation(result, callback);
          } else {
            process.env.NODE_ENV !== "production" ? warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
            callback(true);
          }
        } else {
          // Return false from a transition hook to cancel the transition.
          callback(result !== false);
        }
      } else {
        callback(true);
      }
    }

    var listeners = [];

    function appendListener(fn) {
      var isActive = true;

      function listener() {
        if (isActive) fn.apply(void 0, arguments);
      }

      listeners.push(listener);
      return function () {
        isActive = false;
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    }

    function notifyListeners() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listeners.forEach(function (listener) {
        return listener.apply(void 0, args);
      });
    }

    return {
      setPrompt: setPrompt,
      confirmTransitionTo: confirmTransitionTo,
      appendListener: appendListener,
      notifyListeners: notifyListeners
    };
  }

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  function getConfirmation(message, callback) {
    callback(window.confirm(message)); // eslint-disable-line no-alert
  }
  /**
   * Returns true if the HTML5 history API is supported. Taken from Modernizr.
   *
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
   */

  function supportsHistory() {
    var ua = window.navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
    return window.history && 'pushState' in window.history;
  }
  /**
   * Returns true if browser fires popstate on hash change.
   * IE10 and IE11 do not.
   */

  function supportsPopStateOnHashChange() {
    return window.navigator.userAgent.indexOf('Trident') === -1;
  }
  /**
   * Returns false if using go(n) with hash history causes a full page reload.
   */

  function supportsGoWithoutReloadUsingHash() {
    return window.navigator.userAgent.indexOf('Firefox') === -1;
  }
  /**
   * Returns true if a given popstate event is an extraneous WebKit event.
   * Accounts for the fact that Chrome on iOS fires real popstate events
   * containing undefined state when pressing the back button.
   */

  function isExtraneousPopstateEvent(event) {
    return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
  }

  var PopStateEvent = 'popstate';
  var HashChangeEvent = 'hashchange';

  function getHistoryState() {
    try {
      return window.history.state || {};
    } catch (e) {
      // IE 11 sometimes throws when accessing window.history.state
      // See https://github.com/ReactTraining/history/pull/289
      return {};
    }
  }
  /**
   * Creates a history object that uses the HTML5 history API including
   * pushState, replaceState, and the popstate event.
   */


  function createBrowserHistory(props) {
    if (props === void 0) {
      props = {};
    }

    !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Browser history needs a DOM') : invariant(false) : void 0;
    var globalHistory = window.history;
    var canUseHistory = supportsHistory();
    var needsHashChangeListener = !supportsPopStateOnHashChange();
    var _props = props,
        _props$forceRefresh = _props.forceRefresh,
        forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
        _props$getUserConfirm = _props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
        _props$keyLength = _props.keyLength,
        keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

    function getDOMLocation(historyState) {
      var _ref = historyState || {},
          key = _ref.key,
          state = _ref.state;

      var _window$location = window.location,
          pathname = _window$location.pathname,
          search = _window$location.search,
          hash = _window$location.hash;
      var path = pathname + search + hash;
      process.env.NODE_ENV !== "production" ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
      if (basename) path = stripBasename(path, basename);
      return createLocation(path, state, key);
    }

    function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    }

    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends$1(history, nextState);

      history.length = globalHistory.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    function handlePopState(event) {
      // Ignore extraneous popstate events in WebKit.
      if (isExtraneousPopstateEvent(event)) return;
      handlePop(getDOMLocation(event.state));
    }

    function handleHashChange() {
      handlePop(getDOMLocation(getHistoryState()));
    }

    var forceNextPop = false;

    function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({
              action: action,
              location: location
            });
          } else {
            revertPop(location);
          }
        });
      }
    }

    function revertPop(fromLocation) {
      var toLocation = history.location; // TODO: We could probably make this more reliable by
      // keeping a list of keys we've seen in sessionStorage.
      // Instead, we just default to 0 for keys we don't know.

      var toIndex = allKeys.indexOf(toLocation.key);
      if (toIndex === -1) toIndex = 0;
      var fromIndex = allKeys.indexOf(fromLocation.key);
      if (fromIndex === -1) fromIndex = 0;
      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    }

    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key]; // Public interface

    function createHref(location) {
      return basename + createPath(location);
    }

    function push(path, state) {
      process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.pushState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.href = href;
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            var nextKeys = allKeys.slice(0, prevIndex + 1);
            nextKeys.push(location.key);
            allKeys = nextKeys;
            setState({
              action: action,
              location: location
            });
          }
        } else {
          process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
          window.location.href = href;
        }
      });
    }

    function replace(path, state) {
      process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.replaceState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.replace(href);
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            if (prevIndex !== -1) allKeys[prevIndex] = location.key;
            setState({
              action: action,
              location: location
            });
          }
        } else {
          process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
          window.location.replace(href);
        }
      });
    }

    function go(n) {
      globalHistory.go(n);
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    var listenerCount = 0;

    function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1 && delta === 1) {
        window.addEventListener(PopStateEvent, handlePopState);
        if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        window.removeEventListener(PopStateEvent, handlePopState);
        if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
      }
    }

    var isBlocked = false;

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    }

    function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };
    return history;
  }

  var HashChangeEvent$1 = 'hashchange';
  var HashPathCoders = {
    hashbang: {
      encodePath: function encodePath(path) {
        return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
      },
      decodePath: function decodePath(path) {
        return path.charAt(0) === '!' ? path.substr(1) : path;
      }
    },
    noslash: {
      encodePath: stripLeadingSlash,
      decodePath: addLeadingSlash
    },
    slash: {
      encodePath: addLeadingSlash,
      decodePath: addLeadingSlash
    }
  };

  function stripHash(url) {
    var hashIndex = url.indexOf('#');
    return hashIndex === -1 ? url : url.slice(0, hashIndex);
  }

  function getHashPath() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  }

  function pushHashPath(path) {
    window.location.hash = path;
  }

  function replaceHashPath(path) {
    window.location.replace(stripHash(window.location.href) + '#' + path);
  }

  function createHashHistory(props) {
    if (props === void 0) {
      props = {};
    }

    !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Hash history needs a DOM') : invariant(false) : void 0;
    var globalHistory = window.history;
    var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
    var _props = props,
        _props$getUserConfirm = _props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
        _props$hashType = _props.hashType,
        hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    var _HashPathCoders$hashT = HashPathCoders[hashType],
        encodePath = _HashPathCoders$hashT.encodePath,
        decodePath = _HashPathCoders$hashT.decodePath;

    function getDOMLocation() {
      var path = decodePath(getHashPath());
      process.env.NODE_ENV !== "production" ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
      if (basename) path = stripBasename(path, basename);
      return createLocation(path);
    }

    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends$1(history, nextState);

      history.length = globalHistory.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    var forceNextPop = false;
    var ignorePath = null;

    function locationsAreEqual$$1(a, b) {
      return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
    }

    function handleHashChange() {
      var path = getHashPath();
      var encodedPath = encodePath(path);

      if (path !== encodedPath) {
        // Ensure we always have a properly-encoded hash.
        replaceHashPath(encodedPath);
      } else {
        var location = getDOMLocation();
        var prevLocation = history.location;
        if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

        if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

        ignorePath = null;
        handlePop(location);
      }
    }

    function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({
              action: action,
              location: location
            });
          } else {
            revertPop(location);
          }
        });
      }
    }

    function revertPop(fromLocation) {
      var toLocation = history.location; // TODO: We could probably make this more reliable by
      // keeping a list of paths we've seen in sessionStorage.
      // Instead, we just default to 0 for paths we don't know.

      var toIndex = allPaths.lastIndexOf(createPath(toLocation));
      if (toIndex === -1) toIndex = 0;
      var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
      if (fromIndex === -1) fromIndex = 0;
      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    } // Ensure the hash is encoded properly before doing anything else.


    var path = getHashPath();
    var encodedPath = encodePath(path);
    if (path !== encodedPath) replaceHashPath(encodedPath);
    var initialLocation = getDOMLocation();
    var allPaths = [createPath(initialLocation)]; // Public interface

    function createHref(location) {
      var baseTag = document.querySelector('base');
      var href = '';

      if (baseTag && baseTag.getAttribute('href')) {
        href = stripHash(window.location.href);
      }

      return href + '#' + encodePath(basename + createPath(location));
    }

    function push(path, state) {
      process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
      var action = 'PUSH';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a PUSH, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          pushHashPath(encodedPath);
          var prevIndex = allPaths.lastIndexOf(createPath(history.location));
          var nextPaths = allPaths.slice(0, prevIndex + 1);
          nextPaths.push(path);
          allPaths = nextPaths;
          setState({
            action: action,
            location: location
          });
        } else {
          process.env.NODE_ENV !== "production" ? warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
          setState();
        }
      });
    }

    function replace(path, state) {
      process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
      var action = 'REPLACE';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a REPLACE, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          replaceHashPath(encodedPath);
        }

        var prevIndex = allPaths.indexOf(createPath(history.location));
        if (prevIndex !== -1) allPaths[prevIndex] = path;
        setState({
          action: action,
          location: location
        });
      });
    }

    function go(n) {
      process.env.NODE_ENV !== "production" ? warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
      globalHistory.go(n);
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    var listenerCount = 0;

    function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1 && delta === 1) {
        window.addEventListener(HashChangeEvent$1, handleHashChange);
      } else if (listenerCount === 0) {
        window.removeEventListener(HashChangeEvent$1, handleHashChange);
      }
    }

    var isBlocked = false;

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    }

    function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };
    return history;
  }

  function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  }
  /**
   * Creates a history object that stores locations in memory.
   */


  function createMemoryHistory(props) {
    if (props === void 0) {
      props = {};
    }

    var _props = props,
        getUserConfirmation = _props.getUserConfirmation,
        _props$initialEntries = _props.initialEntries,
        initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
        _props$initialIndex = _props.initialIndex,
        initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
        _props$keyLength = _props.keyLength,
        keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends$1(history, nextState);

      history.length = history.entries.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    }

    var index = clamp(initialIndex, 0, initialEntries.length - 1);
    var entries = initialEntries.map(function (entry) {
      return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
    }); // Public interface

    var createHref = createPath;

    function push(path, state) {
      process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;
        var nextEntries = history.entries.slice(0);

        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }

        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    }

    function replace(path, state) {
      process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        history.entries[history.index] = location;
        setState({
          action: action,
          location: location
        });
      });
    }

    function go(n) {
      var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
      var action = 'POP';
      var location = history.entries[nextIndex];
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location,
            index: nextIndex
          });
        } else {
          // Mimic the behavior of DOM histories by
          // causing a render after a cancelled POP.
          setState();
        }
      });
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    function canGo(n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    }

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      return transitionManager.setPrompt(prompt);
    }

    function listen(listener) {
      return transitionManager.appendListener(listener);
    }

    var history = {
      length: entries.length,
      action: 'POP',
      location: entries[index],
      index: index,
      entries: entries,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      canGo: canGo,
      block: block,
      listen: listen
    };
    return history;
  }

  var MAX_SIGNED_31_BIT_INT = 1073741823;
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

  function getUniqueId() {
    var key = '__global_unique_id__';
    return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
  }

  function objectIs(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function createEventEmitter(value) {
    var handlers = [];
    return {
      on: function on(handler) {
        handlers.push(handler);
      },
      off: function off(handler) {
        handlers = handlers.filter(function (h) {
          return h !== handler;
        });
      },
      get: function get() {
        return value;
      },
      set: function set(newValue, changedBits) {
        value = newValue;
        handlers.forEach(function (handler) {
          return handler(value, changedBits);
        });
      }
    };
  }

  function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
  }

  function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;

    var contextProp = '__create-react-context-' + getUniqueId() + '__';

    var Provider = /*#__PURE__*/function (_Component) {
      _inheritsLoose(Provider, _Component);

      function Provider() {
        var _this;

        _this = _Component.apply(this, arguments) || this;
        _this.emitter = createEventEmitter(_this.props.value);
        return _this;
      }

      var _proto = Provider.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref;

        return _ref = {}, _ref[contextProp] = this.emitter, _ref;
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          var oldValue = this.props.value;
          var newValue = nextProps.value;
          var changedBits;

          if (objectIs(oldValue, newValue)) {
            changedBits = 0;
          } else {
            changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

            if (process.env.NODE_ENV !== 'production') {
              warning((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
            }

            changedBits |= 0;

            if (changedBits !== 0) {
              this.emitter.set(nextProps.value, changedBits);
            }
          }
        }
      };

      _proto.render = function render() {
        return this.props.children;
      };

      return Provider;
    }(React.Component);

    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = PropTypes.object.isRequired, _Provider$childContex);

    var Consumer = /*#__PURE__*/function (_Component2) {
      _inheritsLoose(Consumer, _Component2);

      function Consumer() {
        var _this2;

        _this2 = _Component2.apply(this, arguments) || this;
        _this2.state = {
          value: _this2.getValue()
        };

        _this2.onUpdate = function (newValue, changedBits) {
          var observedBits = _this2.observedBits | 0;

          if ((observedBits & changedBits) !== 0) {
            _this2.setState({
              value: _this2.getValue()
            });
          }
        };

        return _this2;
      }

      var _proto2 = Consumer.prototype;

      _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var observedBits = nextProps.observedBits;
        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
      };

      _proto2.componentDidMount = function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }

        var observedBits = this.props.observedBits;
        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
      };

      _proto2.componentWillUnmount = function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      };

      _proto2.getValue = function getValue() {
        if (this.context[contextProp]) {
          return this.context[contextProp].get();
        } else {
          return defaultValue;
        }
      };

      _proto2.render = function render() {
        return onlyChild(this.props.children)(this.state.value);
      };

      return Consumer;
    }(React.Component);

    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = PropTypes.object, _Consumer$contextType);
    return {
      Provider: Provider,
      Consumer: Consumer
    };
  }

  var index = React__default.createContext || createReactContext;

  var isarray = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

  /**
   * Expose `pathToRegexp`.
   */
  var pathToRegexp_1 = pathToRegexp;
  var parse_1 = parse;
  var compile_1 = compile;
  var tokensToFunction_1 = tokensToFunction;
  var tokensToRegExp_1 = tokensToRegExp;

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g');

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {string}  str
   * @param  {Object=} options
   * @return {!Array}
   */
  function parse (str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = options && options.delimiter || '/';
    var res;

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        continue
      }

      var next = str[index];
      var prefix = res[2];
      var name = res[3];
      var capture = res[4];
      var group = res[5];
      var modifier = res[6];
      var asterisk = res[7];

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
      }

      var partial = prefix != null && next != null && next !== prefix;
      var repeat = modifier === '+' || modifier === '*';
      var optional = modifier === '?' || modifier === '*';
      var delimiter = res[2] || defaultDelimiter;
      var pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        asterisk: !!asterisk,
        pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
      });
    }

    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index);
    }

    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path);
    }

    return tokens
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {string}             str
   * @param  {Object=}            options
   * @return {!function(Object=, Object=)}
   */
  function compile (str, options) {
    return tokensToFunction(parse(str, options), options)
  }

  /**
   * Prettier encoding of URI path segments.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeURIComponentPretty (str) {
    return encodeURI(str).replace(/[\/?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }

  /**
   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeAsterisk (str) {
    return encodeURI(str).replace(/[?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens, options) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
      }
    }

    return function (obj, opts) {
      var path = '';
      var data = obj || {};
      var options = opts || {};
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;

          continue
        }

        var value = data[token.name];
        var segment;

        if (value == null) {
          if (token.optional) {
            // Prepend partial segment prefixes.
            if (token.partial) {
              path += token.prefix;
            }

            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
          }

          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j]);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue
        }

        segment = token.asterisk ? encodeAsterisk(value) : encode(value);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }

        path += token.prefix + segment;
      }

      return path
    }
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {string} str
   * @return {string}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {string} group
   * @return {string}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }

  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {!RegExp} re
   * @param  {Array}   keys
   * @return {!RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys;
    return re
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {string}
   */
  function flags (options) {
    return options && options.sensitive ? '' : 'i'
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {!RegExp} path
   * @param  {!Array}  keys
   * @return {!RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          asterisk: false,
          pattern: null
        });
      }
    }

    return attachKeys(path, keys)
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {!Array}  path
   * @param  {Array}   keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

    return attachKeys(regexp, keys)
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {string}  path
   * @param  {!Array}  keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function stringToRegexp (path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options)
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {!Array}          tokens
   * @param  {(Array|Object)=} keys
   * @param  {Object=}         options
   * @return {!RegExp}
   */
  function tokensToRegExp (tokens, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    var strict = options.strict;
    var end = options.end !== false;
    var route = '';

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
      } else {
        var prefix = escapeString(token.prefix);
        var capture = '(?:' + token.pattern + ')';

        keys.push(token);

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*';
        }

        if (token.optional) {
          if (!token.partial) {
            capture = '(?:' + prefix + '(' + capture + '))?';
          } else {
            capture = prefix + '(' + capture + ')?';
          }
        } else {
          capture = prefix + '(' + capture + ')';
        }

        route += capture;
      }
    }

    var delimiter = escapeString(options.delimiter || '/');
    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
    }

    if (end) {
      route += '$';
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
    }

    return attachKeys(new RegExp('^' + route, flags(options)), keys)
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(string|RegExp|Array)} path
   * @param  {(Array|Object)=}       keys
   * @param  {Object=}               options
   * @return {!RegExp}
   */
  function pathToRegexp (path, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    if (path instanceof RegExp) {
      return regexpToRegexp(path, /** @type {!Array} */ (keys))
    }

    if (isarray(path)) {
      return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
    }

    return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
  }
  pathToRegexp_1.parse = parse_1;
  pathToRegexp_1.compile = compile_1;
  pathToRegexp_1.tokensToFunction = tokensToFunction_1;
  pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
  var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
  var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs_development = createCommonjsModule(function (module, exports) {



  if (process.env.NODE_ENV !== "production") {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
  exports.isValidElementType = isValidElementType;
  exports.typeOf = typeOf;
    })();
  }
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
  });
  var reactIs_1 = reactIs.isValidElementType;

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  // TODO: Replace with React.createContext once we can assume React 16+

  var createNamedContext = function createNamedContext(name) {
    var context = index();
    context.displayName = name;
    return context;
  };

  var historyContext =
  /*#__PURE__*/
  createNamedContext("Router-History");

  // TODO: Replace with React.createContext once we can assume React 16+

  var createNamedContext$1 = function createNamedContext(name) {
    var context = index();
    context.displayName = name;
    return context;
  };

  var context =
  /*#__PURE__*/
  createNamedContext$1("Router");

  /**
   * The public API for putting history on context.
   */

  var Router =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Router, _React$Component);

    Router.computeRootMatch = function computeRootMatch(pathname) {
      return {
        path: "/",
        url: "/",
        params: {},
        isExact: pathname === "/"
      };
    };

    function Router(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        location: props.history.location
      }; // This is a bit of a hack. We have to start listening for location
      // changes here in the constructor in case there are any <Redirect>s
      // on the initial render. If there are, they will replace/push when
      // they mount and since cDM fires in children before parents, we may
      // get a new location before the <Router> is mounted.

      _this._isMounted = false;
      _this._pendingLocation = null;

      if (!props.staticContext) {
        _this.unlisten = props.history.listen(function (location) {
          if (_this._isMounted) {
            _this.setState({
              location: location
            });
          } else {
            _this._pendingLocation = location;
          }
        });
      }

      return _this;
    }

    var _proto = Router.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this._isMounted = true;

      if (this._pendingLocation) {
        this.setState({
          location: this._pendingLocation
        });
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.unlisten) this.unlisten();
    };

    _proto.render = function render() {
      return React__default.createElement(context.Provider, {
        value: {
          history: this.props.history,
          location: this.state.location,
          match: Router.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext
        }
      }, React__default.createElement(historyContext.Provider, {
        children: this.props.children || null,
        value: this.props.history
      }));
    };

    return Router;
  }(React__default.Component);

  if (process.env.NODE_ENV !== "production") {
    Router.propTypes = {
      children: PropTypes.node,
      history: PropTypes.object.isRequired,
      staticContext: PropTypes.object
    };

    Router.prototype.componentDidUpdate = function (prevProps) {
      process.env.NODE_ENV !== "production" ? warning(prevProps.history === this.props.history, "You cannot change <Router history>") : void 0;
    };
  }

  /**
   * The public API for a <Router> that stores location in memory.
   */

  var MemoryRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(MemoryRouter, _React$Component);

    function MemoryRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createMemoryHistory(_this.props);
      return _this;
    }

    var _proto = MemoryRouter.prototype;

    _proto.render = function render() {
      return React__default.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return MemoryRouter;
  }(React__default.Component);

  if (process.env.NODE_ENV !== "production") {
    MemoryRouter.propTypes = {
      initialEntries: PropTypes.array,
      initialIndex: PropTypes.number,
      getUserConfirmation: PropTypes.func,
      keyLength: PropTypes.number,
      children: PropTypes.node
    };

    MemoryRouter.prototype.componentDidMount = function () {
      process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : void 0;
    };
  }

  var Lifecycle =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Lifecycle, _React$Component);

    function Lifecycle() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Lifecycle.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (this.props.onMount) this.props.onMount.call(this, this);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.props.onUnmount) this.props.onUnmount.call(this, this);
    };

    _proto.render = function render() {
      return null;
    };

    return Lifecycle;
  }(React__default.Component);

  /**
   * The public API for prompting the user before navigating away from a screen.
   */

  function Prompt(_ref) {
    var message = _ref.message,
        _ref$when = _ref.when,
        when = _ref$when === void 0 ? true : _ref$when;
    return React__default.createElement(context.Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Prompt> outside a <Router>") : invariant(false) : void 0;
      if (!when || context.staticContext) return null;
      var method = context.history.block;
      return React__default.createElement(Lifecycle, {
        onMount: function onMount(self) {
          self.release = method(message);
        },
        onUpdate: function onUpdate(self, prevProps) {
          if (prevProps.message !== message) {
            self.release();
            self.release = method(message);
          }
        },
        onUnmount: function onUnmount(self) {
          self.release();
        },
        message: message
      });
    });
  }

  if (process.env.NODE_ENV !== "production") {
    var messageType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);
    Prompt.propTypes = {
      when: PropTypes.bool,
      message: messageType.isRequired
    };
  }

  var cache = {};
  var cacheLimit = 10000;
  var cacheCount = 0;

  function compilePath(path) {
    if (cache[path]) return cache[path];
    var generator = pathToRegexp_1.compile(path);

    if (cacheCount < cacheLimit) {
      cache[path] = generator;
      cacheCount++;
    }

    return generator;
  }
  /**
   * Public API for generating a URL pathname from a path and parameters.
   */


  function generatePath(path, params) {
    if (path === void 0) {
      path = "/";
    }

    if (params === void 0) {
      params = {};
    }

    return path === "/" ? path : compilePath(path)(params, {
      pretty: true
    });
  }

  /**
   * The public API for navigating programmatically with a component.
   */

  function Redirect(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to,
        _ref$push = _ref.push,
        push = _ref$push === void 0 ? false : _ref$push;
    return React__default.createElement(context.Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Redirect> outside a <Router>") : invariant(false) : void 0;
      var history = context.history,
          staticContext = context.staticContext;
      var method = push ? history.push : history.replace;
      var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends$1({}, to, {
        pathname: generatePath(to.pathname, computedMatch.params)
      }) : to); // When rendering in a static context,
      // set the new location immediately.

      if (staticContext) {
        method(location);
        return null;
      }

      return React__default.createElement(Lifecycle, {
        onMount: function onMount() {
          method(location);
        },
        onUpdate: function onUpdate(self, prevProps) {
          var prevLocation = createLocation(prevProps.to);

          if (!locationsAreEqual(prevLocation, _extends$1({}, location, {
            key: prevLocation.key
          }))) {
            method(location);
          }
        },
        to: to
      });
    });
  }

  if (process.env.NODE_ENV !== "production") {
    Redirect.propTypes = {
      push: PropTypes.bool,
      from: PropTypes.string,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
    };
  }

  var cache$1 = {};
  var cacheLimit$1 = 10000;
  var cacheCount$1 = 0;

  function compilePath$1(path, options) {
    var cacheKey = "" + options.end + options.strict + options.sensitive;
    var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
    if (pathCache[path]) return pathCache[path];
    var keys = [];
    var regexp = pathToRegexp_1(path, keys, options);
    var result = {
      regexp: regexp,
      keys: keys
    };

    if (cacheCount$1 < cacheLimit$1) {
      pathCache[path] = result;
      cacheCount$1++;
    }

    return result;
  }
  /**
   * Public API for matching a URL pathname to a path.
   */


  function matchPath(pathname, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof options === "string" || Array.isArray(options)) {
      options = {
        path: options
      };
    }

    var _options = options,
        path = _options.path,
        _options$exact = _options.exact,
        exact = _options$exact === void 0 ? false : _options$exact,
        _options$strict = _options.strict,
        strict = _options$strict === void 0 ? false : _options$strict,
        _options$sensitive = _options.sensitive,
        sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
    var paths = [].concat(path);
    return paths.reduce(function (matched, path) {
      if (!path && path !== "") return null;
      if (matched) return matched;

      var _compilePath = compilePath$1(path, {
        end: exact,
        strict: strict,
        sensitive: sensitive
      }),
          regexp = _compilePath.regexp,
          keys = _compilePath.keys;

      var match = regexp.exec(pathname);
      if (!match) return null;
      var url = match[0],
          values = match.slice(1);
      var isExact = pathname === url;
      if (exact && !isExact) return null;
      return {
        path: path,
        // the path used to match
        url: path === "/" && url === "" ? "/" : url,
        // the matched portion of the URL
        isExact: isExact,
        // whether or not we matched exactly
        params: keys.reduce(function (memo, key, index) {
          memo[key.name] = values[index];
          return memo;
        }, {})
      };
    }, null);
  }

  function isEmptyChildren(children) {
    return React__default.Children.count(children) === 0;
  }

  function evalChildrenDev(children, props, path) {
    var value = children(props);
    process.env.NODE_ENV !== "production" ? warning(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : void 0;
    return value || null;
  }
  /**
   * The public API for matching a single path and rendering.
   */


  var Route =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Route, _React$Component);

    function Route() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Route.prototype;

    _proto.render = function render() {
      var _this = this;

      return React__default.createElement(context.Consumer, null, function (context$1) {
        !context$1 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Route> outside a <Router>") : invariant(false) : void 0;
        var location = _this.props.location || context$1.location;
        var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
        : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

        var props = _extends$1({}, context$1, {
          location: location,
          match: match
        });

        var _this$props = _this.props,
            children = _this$props.children,
            component = _this$props.component,
            render = _this$props.render; // Preact uses an empty array as children by
        // default, so use null if that's the case.

        if (Array.isArray(children) && children.length === 0) {
          children = null;
        }

        return React__default.createElement(context.Provider, {
          value: props
        }, props.match ? children ? typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : children : component ? React__default.createElement(component, props) : render ? render(props) : null : typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : null);
      });
    };

    return Route;
  }(React__default.Component);

  if (process.env.NODE_ENV !== "production") {
    Route.propTypes = {
      children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
      component: function component(props, propName) {
        if (props[propName] && !reactIs_1(props[propName])) {
          return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
        }
      },
      exact: PropTypes.bool,
      location: PropTypes.object,
      path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
      render: PropTypes.func,
      sensitive: PropTypes.bool,
      strict: PropTypes.bool
    };

    Route.prototype.componentDidMount = function () {
      process.env.NODE_ENV !== "production" ? warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : void 0;
    };

    Route.prototype.componentDidUpdate = function (prevProps) {
      process.env.NODE_ENV !== "production" ? warning(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
    };
  }

  function addLeadingSlash$1(path) {
    return path.charAt(0) === "/" ? path : "/" + path;
  }

  function addBasename(basename, location) {
    if (!basename) return location;
    return _extends$1({}, location, {
      pathname: addLeadingSlash$1(basename) + location.pathname
    });
  }

  function stripBasename$1(basename, location) {
    if (!basename) return location;
    var base = addLeadingSlash$1(basename);
    if (location.pathname.indexOf(base) !== 0) return location;
    return _extends$1({}, location, {
      pathname: location.pathname.substr(base.length)
    });
  }

  function createURL(location) {
    return typeof location === "string" ? location : createPath(location);
  }

  function staticHandler(methodName) {
    return function () {
       process.env.NODE_ENV !== "production" ? invariant(false, "You cannot %s with <StaticRouter>") : invariant(false) ;
    };
  }

  function noop() {}
  /**
   * The public top-level API for a "static" <Router>, so-called because it
   * can't actually change the current location. Instead, it just records
   * location changes in a context object. Useful mainly in testing and
   * server-rendering scenarios.
   */


  var StaticRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(StaticRouter, _React$Component);

    function StaticRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _this.handlePush = function (location) {
        return _this.navigateTo(location, "PUSH");
      };

      _this.handleReplace = function (location) {
        return _this.navigateTo(location, "REPLACE");
      };

      _this.handleListen = function () {
        return noop;
      };

      _this.handleBlock = function () {
        return noop;
      };

      return _this;
    }

    var _proto = StaticRouter.prototype;

    _proto.navigateTo = function navigateTo(location, action) {
      var _this$props = this.props,
          _this$props$basename = _this$props.basename,
          basename = _this$props$basename === void 0 ? "" : _this$props$basename,
          _this$props$context = _this$props.context,
          context = _this$props$context === void 0 ? {} : _this$props$context;
      context.action = action;
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          _this$props2$basename = _this$props2.basename,
          basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
          _this$props2$context = _this$props2.context,
          context = _this$props2$context === void 0 ? {} : _this$props2$context,
          _this$props2$location = _this$props2.location,
          location = _this$props2$location === void 0 ? "/" : _this$props2$location,
          rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

      var history = {
        createHref: function createHref(path) {
          return addLeadingSlash$1(basename + createURL(path));
        },
        action: "POP",
        location: stripBasename$1(basename, createLocation(location)),
        push: this.handlePush,
        replace: this.handleReplace,
        go: staticHandler(),
        goBack: staticHandler(),
        goForward: staticHandler(),
        listen: this.handleListen,
        block: this.handleBlock
      };
      return React__default.createElement(Router, _extends$1({}, rest, {
        history: history,
        staticContext: context
      }));
    };

    return StaticRouter;
  }(React__default.Component);

  if (process.env.NODE_ENV !== "production") {
    StaticRouter.propTypes = {
      basename: PropTypes.string,
      context: PropTypes.object,
      location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    };

    StaticRouter.prototype.componentDidMount = function () {
      process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : void 0;
    };
  }

  /**
   * The public API for rendering the first <Route> that matches.
   */

  var Switch =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Switch, _React$Component);

    function Switch() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Switch.prototype;

    _proto.render = function render() {
      var _this = this;

      return React__default.createElement(context.Consumer, null, function (context) {
        !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Switch> outside a <Router>") : invariant(false) : void 0;
        var location = _this.props.location || context.location;
        var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
        // here because toArray adds keys to all child elements and we do not want
        // to trigger an unmount/remount for two <Route>s that render the same
        // component at different URLs.

        React__default.Children.forEach(_this.props.children, function (child) {
          if (match == null && React__default.isValidElement(child)) {
            element = child;
            var path = child.props.path || child.props.from;
            match = path ? matchPath(location.pathname, _extends$1({}, child.props, {
              path: path
            })) : context.match;
          }
        });
        return match ? React__default.cloneElement(element, {
          location: location,
          computedMatch: match
        }) : null;
      });
    };

    return Switch;
  }(React__default.Component);

  if (process.env.NODE_ENV !== "production") {
    Switch.propTypes = {
      children: PropTypes.node,
      location: PropTypes.object
    };

    Switch.prototype.componentDidUpdate = function (prevProps) {
      process.env.NODE_ENV !== "production" ? warning(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
    };
  }

  var useContext = React__default.useContext;
  function useHistory() {
    if (process.env.NODE_ENV !== "production") {
      !(typeof useContext === "function") ? process.env.NODE_ENV !== "production" ? invariant(false, "You must use React >= 16.8 in order to use useHistory()") : invariant(false) : void 0;
    }

    return useContext(historyContext);
  }

  if (process.env.NODE_ENV !== "production") {
    if (typeof window !== "undefined") {
      var global$1 = window;
      var key = "__react_router_build__";
      var buildNames = {
        cjs: "CommonJS",
        esm: "ES modules",
        umd: "UMD"
      };

      if (global$1[key] && global$1[key] !== "esm") {
        var initialBuildName = buildNames[global$1[key]];
        var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
        // loading 2 different builds.

        throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
      }

      global$1[key] = "esm";
    }
  }

  /**
   * The public API for a <Router> that uses HTML5 history.
   */

  var BrowserRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(BrowserRouter, _React$Component);

    function BrowserRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createBrowserHistory(_this.props);
      return _this;
    }

    var _proto = BrowserRouter.prototype;

    _proto.render = function render() {
      return React__default.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return BrowserRouter;
  }(React__default.Component);

  if (process.env.NODE_ENV !== "production") {
    BrowserRouter.propTypes = {
      basename: PropTypes.string,
      children: PropTypes.node,
      forceRefresh: PropTypes.bool,
      getUserConfirmation: PropTypes.func,
      keyLength: PropTypes.number
    };

    BrowserRouter.prototype.componentDidMount = function () {
      process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : void 0;
    };
  }

  /**
   * The public API for a <Router> that uses window.location.hash.
   */

  var HashRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(HashRouter, _React$Component);

    function HashRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createHashHistory(_this.props);
      return _this;
    }

    var _proto = HashRouter.prototype;

    _proto.render = function render() {
      return React__default.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return HashRouter;
  }(React__default.Component);

  if (process.env.NODE_ENV !== "production") {
    HashRouter.propTypes = {
      basename: PropTypes.string,
      children: PropTypes.node,
      getUserConfirmation: PropTypes.func,
      hashType: PropTypes.oneOf(["hashbang", "noslash", "slash"])
    };

    HashRouter.prototype.componentDidMount = function () {
      process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : void 0;
    };
  }

  var resolveToLocation = function resolveToLocation(to, currentLocation) {
    return typeof to === "function" ? to(currentLocation) : to;
  };
  var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
    return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
  };

  var forwardRefShim = function forwardRefShim(C) {
    return C;
  };

  var forwardRef = React__default.forwardRef;

  if (typeof forwardRef === "undefined") {
    forwardRef = forwardRefShim;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
    var innerRef = _ref.innerRef,
        navigate = _ref.navigate,
        _onClick = _ref.onClick,
        rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

    var target = rest.target;

    var props = _extends$1({}, rest, {
      onClick: function onClick(event) {
        try {
          if (_onClick) _onClick(event);
        } catch (ex) {
          event.preventDefault();
          throw ex;
        }

        if (!event.defaultPrevented && // onClick prevented default
        event.button === 0 && ( // ignore everything but left clicks
        !target || target === "_self") && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
        ) {
            event.preventDefault();
            navigate();
          }
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.ref = innerRef;
    }
    /* eslint-disable-next-line jsx-a11y/anchor-has-content */


    return React__default.createElement("a", props);
  });

  if (process.env.NODE_ENV !== "production") {
    LinkAnchor.displayName = "LinkAnchor";
  }
  /**
   * The public API for rendering a history-aware <a>.
   */


  var Link = forwardRef(function (_ref2, forwardedRef) {
    var _ref2$component = _ref2.component,
        component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
        replace = _ref2.replace,
        to = _ref2.to,
        innerRef = _ref2.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

    return React__default.createElement(context.Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Link> outside a <Router>") : invariant(false) : void 0;
      var history = context.history;
      var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
      var href = location ? history.createHref(location) : "";

      var props = _extends$1({}, rest, {
        href: href,
        navigate: function navigate() {
          var location = resolveToLocation(to, context.location);
          var method = replace ? history.replace : history.push;
          method(location);
        }
      }); // React 15 compat


      if (forwardRefShim !== forwardRef) {
        props.ref = forwardedRef || innerRef;
      } else {
        props.innerRef = innerRef;
      }

      return React__default.createElement(component, props);
    });
  });

  if (process.env.NODE_ENV !== "production") {
    var toType = PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]);
    var refType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.shape({
      current: PropTypes.any
    })]);
    Link.displayName = "Link";
    Link.propTypes = {
      innerRef: refType,
      onClick: PropTypes.func,
      replace: PropTypes.bool,
      target: PropTypes.string,
      to: toType.isRequired
    };
  }

  var forwardRefShim$1 = function forwardRefShim(C) {
    return C;
  };

  var forwardRef$1 = React__default.forwardRef;

  if (typeof forwardRef$1 === "undefined") {
    forwardRef$1 = forwardRefShim$1;
  }

  function joinClassnames() {
    for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
      classnames[_key] = arguments[_key];
    }

    return classnames.filter(function (i) {
      return i;
    }).join(" ");
  }
  /**
   * A <Link> wrapper that knows if it's "active" or not.
   */


  var NavLink = forwardRef$1(function (_ref, forwardedRef) {
    var _ref$ariaCurrent = _ref["aria-current"],
        ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
        _ref$activeClassName = _ref.activeClassName,
        activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
        activeStyle = _ref.activeStyle,
        classNameProp = _ref.className,
        exact = _ref.exact,
        isActiveProp = _ref.isActive,
        locationProp = _ref.location,
        sensitive = _ref.sensitive,
        strict = _ref.strict,
        styleProp = _ref.style,
        to = _ref.to,
        innerRef = _ref.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

    return React__default.createElement(context.Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <NavLink> outside a <Router>") : invariant(false) : void 0;
      var currentLocation = locationProp || context.location;
      var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
      var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

      var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      var match = escapedPath ? matchPath(currentLocation.pathname, {
        path: escapedPath,
        exact: exact,
        sensitive: sensitive,
        strict: strict
      }) : null;
      var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
      var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
      var style = isActive ? _extends$1({}, styleProp, {}, activeStyle) : styleProp;

      var props = _extends$1({
        "aria-current": isActive && ariaCurrent || null,
        className: className,
        style: style,
        to: toLocation
      }, rest); // React 15 compat


      if (forwardRefShim$1 !== forwardRef$1) {
        props.ref = forwardedRef || innerRef;
      } else {
        props.innerRef = innerRef;
      }

      return React__default.createElement(Link, props);
    });
  });

  if (process.env.NODE_ENV !== "production") {
    NavLink.displayName = "NavLink";
    var ariaCurrentType = PropTypes.oneOf(["page", "step", "location", "date", "time", "true"]);
    NavLink.propTypes = _extends$1({}, Link.propTypes, {
      "aria-current": ariaCurrentType,
      activeClassName: PropTypes.string,
      activeStyle: PropTypes.object,
      className: PropTypes.string,
      exact: PropTypes.bool,
      isActive: PropTypes.func,
      location: PropTypes.object,
      sensitive: PropTypes.bool,
      strict: PropTypes.bool,
      style: PropTypes.object
    });
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  }

  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }

  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var defaultTimestep = 1 / 60 * 1000;
  var onNextFrame = typeof window !== "undefined" ? function (callback) {
      return window.requestAnimationFrame(callback);
  } : function (callback) {
      return setTimeout(function () {
          return callback(performance.now());
      }, defaultTimestep);
  };

  function createRenderStep(runNextFrame) {
      var toRun = [];
      var toRunNextFrame = [];
      var numToRun = 0;
      var isProcessing = false;
      var toKeepAlive = new WeakSet();
      var step = {
          schedule: function (callback, keepAlive, immediate) {
              if (keepAlive === void 0) {
                  keepAlive = false;
              }
              if (immediate === void 0) {
                  immediate = false;
              }
              var addToCurrentFrame = immediate && isProcessing;
              var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
              if (keepAlive) toKeepAlive.add(callback);
              if (buffer.indexOf(callback) === -1) {
                  buffer.push(callback);
                  if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
              }
              return callback;
          },
          cancel: function (callback) {
              var index = toRunNextFrame.indexOf(callback);
              if (index !== -1) toRunNextFrame.splice(index, 1);
              toKeepAlive.delete(callback);
          },
          process: function (frameData) {
              var _a;
              isProcessing = true;
              _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];
              toRunNextFrame.length = 0;
              numToRun = toRun.length;
              if (numToRun) {
                  for (var i = 0; i < numToRun; i++) {
                      var callback = toRun[i];
                      callback(frameData);
                      if (toKeepAlive.has(callback)) {
                          step.schedule(callback);
                          runNextFrame();
                      }
                  }
              }
              isProcessing = false;
          }
      };
      return step;
  }

  var maxElapsed = 40;
  var useDefaultElapsed = true;
  var runNextFrame = false;
  var isProcessing = false;
  var frame = {
      delta: 0,
      timestamp: 0
  };
  var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
  var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
      acc[key] = createRenderStep(function () {
          return runNextFrame = true;
      });
      return acc;
  }, {});
  var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
      var step = steps[key];
      acc[key] = function (process, keepAlive, immediate) {
          if (keepAlive === void 0) {
              keepAlive = false;
          }
          if (immediate === void 0) {
              immediate = false;
          }
          if (!runNextFrame) startLoop();
          return step.schedule(process, keepAlive, immediate);
      };
      return acc;
  }, {});
  var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
      acc[key] = steps[key].cancel;
      return acc;
  }, {});
  var processStep = function (stepId) {
      return steps[stepId].process(frame);
  };
  var processFrame = function (timestamp) {
      runNextFrame = false;
      frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
      frame.timestamp = timestamp;
      isProcessing = true;
      stepsOrder.forEach(processStep);
      isProcessing = false;
      if (runNextFrame) {
          useDefaultElapsed = false;
          onNextFrame(processFrame);
      }
  };
  var startLoop = function () {
      runNextFrame = true;
      useDefaultElapsed = true;
      if (!isProcessing) onNextFrame(processFrame);
  };
  var getFrameData = function () {
      return frame;
  };

  var warning$1 = function () { };
  var invariant$1 = function () { };
  if (process.env.NODE_ENV !== 'production') {
      warning$1 = function (check, message) {
          if (!check && typeof console !== 'undefined') {
              console.warn(message);
          }
      };
      invariant$1 = function (check, message) {
          if (!check) {
              throw new Error(message);
          }
      };
  }

  var clamp$1 = function (min, max) { return function (v) {
      return Math.max(Math.min(v, max), min);
  }; };
  var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
  var floatRegex = /(-)?(\d[\d\.]*)/g;
  var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
  var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

  var number = {
      test: function (v) { return typeof v === 'number'; },
      parse: parseFloat,
      transform: function (v) { return v; }
  };
  var alpha = __assign(__assign({}, number), { transform: clamp$1(0, 1) });
  var scale = __assign(__assign({}, number), { default: 1 });

  var createUnitType = function (unit) { return ({
      test: function (v) {
          return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
      },
      parse: parseFloat,
      transform: function (v) { return "" + v + unit; }
  }); };
  var degrees = createUnitType('deg');
  var percent = createUnitType('%');
  var px = createUnitType('px');
  var vh = createUnitType('vh');
  var vw = createUnitType('vw');
  var progressPercentage = __assign(__assign({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

  var getValueFromFunctionString = function (value) {
      return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
  };
  var clampRgbUnit = clamp$1(0, 255);
  var isRgba = function (v) { return v.red !== undefined; };
  var isHsla = function (v) { return v.hue !== undefined; };
  function getValuesAsArray(value) {
      return getValueFromFunctionString(value)
          .replace(/(,|\/)/g, ' ')
          .split(/ \s*/);
  }
  var splitColorValues = function (terms) {
      return function (v) {
          if (typeof v !== 'string')
              return v;
          var values = {};
          var valuesArray = getValuesAsArray(v);
          for (var i = 0; i < 4; i++) {
              values[terms[i]] =
                  valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
          }
          return values;
      };
  };
  var rgbaTemplate = function (_a) {
      var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
      return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
  };
  var hslaTemplate = function (_a) {
      var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
      return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
  };
  var rgbUnit = __assign(__assign({}, number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
  function isColorString(color, colorType) {
      return color.startsWith(colorType) && singleColorRegex.test(color);
  }
  var rgba = {
      test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
      parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
      transform: function (_a) {
          var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
          return rgbaTemplate({
              red: rgbUnit.transform(red),
              green: rgbUnit.transform(green),
              blue: rgbUnit.transform(blue),
              alpha: sanitize(alpha.transform(alpha$1))
          });
      }
  };
  var hsla = {
      test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
      parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
      transform: function (_a) {
          var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
          return hslaTemplate({
              hue: Math.round(hue),
              saturation: percent.transform(sanitize(saturation)),
              lightness: percent.transform(sanitize(lightness)),
              alpha: sanitize(alpha.transform(alpha$1))
          });
      }
  };
  var hex = __assign(__assign({}, rgba), { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
          var r = '';
          var g = '';
          var b = '';
          if (v.length > 4) {
              r = v.substr(1, 2);
              g = v.substr(3, 2);
              b = v.substr(5, 2);
          }
          else {
              r = v.substr(1, 1);
              g = v.substr(2, 1);
              b = v.substr(3, 1);
              r += r;
              g += g;
              b += b;
          }
          return {
              red: parseInt(r, 16),
              green: parseInt(g, 16),
              blue: parseInt(b, 16),
              alpha: 1
          };
      } });
  var color = {
      test: function (v) {
          return (typeof v === 'string' && singleColorRegex.test(v)) ||
              isRgba(v) ||
              isHsla(v);
      },
      parse: function (v) {
          if (rgba.test(v)) {
              return rgba.parse(v);
          }
          else if (hsla.test(v)) {
              return hsla.parse(v);
          }
          else if (hex.test(v)) {
              return hex.parse(v);
          }
          return v;
      },
      transform: function (v) {
          if (isRgba(v)) {
              return rgba.transform(v);
          }
          else if (isHsla(v)) {
              return hsla.transform(v);
          }
          return v;
      }
  };

  var COLOR_TOKEN = '${c}';
  var NUMBER_TOKEN = '${n}';
  var convertNumbersToZero = function (v) {
      return typeof v === 'number' ? 0 : v;
  };
  var complex = {
      test: function (v) {
          if (typeof v !== 'string' || !isNaN(v))
              return false;
          var numValues = 0;
          var foundNumbers = v.match(floatRegex);
          var foundColors = v.match(colorRegex);
          if (foundNumbers)
              numValues += foundNumbers.length;
          if (foundColors)
              numValues += foundColors.length;
          return numValues > 0;
      },
      parse: function (v) {
          var input = v;
          var parsed = [];
          var foundColors = input.match(colorRegex);
          if (foundColors) {
              input = input.replace(colorRegex, COLOR_TOKEN);
              parsed.push.apply(parsed, foundColors.map(color.parse));
          }
          var foundNumbers = input.match(floatRegex);
          if (foundNumbers) {
              parsed.push.apply(parsed, foundNumbers.map(number.parse));
          }
          return parsed;
      },
      createTransformer: function (prop) {
          var template = prop;
          var token = 0;
          var foundColors = prop.match(colorRegex);
          var numColors = foundColors ? foundColors.length : 0;
          if (foundColors) {
              for (var i = 0; i < numColors; i++) {
                  template = template.replace(foundColors[i], COLOR_TOKEN);
                  token++;
              }
          }
          var foundNumbers = template.match(floatRegex);
          var numNumbers = foundNumbers ? foundNumbers.length : 0;
          if (foundNumbers) {
              for (var i = 0; i < numNumbers; i++) {
                  template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                  token++;
              }
          }
          return function (v) {
              var output = template;
              for (var i = 0; i < token; i++) {
                  output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
              }
              return output;
          };
      },
      getAnimatableNone: function (target) {
          var parsedTarget = complex.parse(target);
          var targetTransformer = complex.createTransformer(target);
          return targetTransformer(parsedTarget.map(convertNumbersToZero));
      }
  };

  var clamp$2 = function (min, max, v) {
      return Math.min(Math.max(v, min), max);
  };

  var safeMin = 0.001;
  var minDuration = 0.01;
  var maxDuration = 10.0;
  var minDamping = 0.05;
  var maxDamping = 1;
  function findSpring(_a) {
      var _b = _a.duration,
          duration = _b === void 0 ? 800 : _b,
          _c = _a.bounce,
          bounce = _c === void 0 ? 0.25 : _c,
          _d = _a.velocity,
          velocity = _d === void 0 ? 0 : _d,
          _e = _a.mass,
          mass = _e === void 0 ? 1 : _e;
      var envelope;
      var derivative;
      warning$1(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
      var dampingRatio = 1 - bounce;
      dampingRatio = clamp$2(minDamping, maxDamping, dampingRatio);
      duration = clamp$2(minDuration, maxDuration, duration / 1000);
      if (dampingRatio < 1) {
          envelope = function (undampedFreq) {
              var exponentialDecay = undampedFreq * dampingRatio;
              var delta = exponentialDecay * duration;
              var a = exponentialDecay - velocity;
              var b = calcAngularFreq(undampedFreq, dampingRatio);
              var c = Math.exp(-delta);
              return safeMin - a / b * c;
          };
          derivative = function (undampedFreq) {
              var exponentialDecay = undampedFreq * dampingRatio;
              var delta = exponentialDecay * duration;
              var d = delta * velocity + velocity;
              var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
              var f = Math.exp(-delta);
              var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
              var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
              return factor * ((d - e) * f) / g;
          };
      } else {
          envelope = function (undampedFreq) {
              var a = Math.exp(-undampedFreq * duration);
              var b = (undampedFreq - velocity) * duration + 1;
              return -safeMin + a * b;
          };
          derivative = function (undampedFreq) {
              var a = Math.exp(-undampedFreq * duration);
              var b = (velocity - undampedFreq) * (duration * duration);
              return a * b;
          };
      }
      var initialGuess = 5 / duration;
      var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
      if (isNaN(undampedFreq)) {
          return {
              stiffness: 100,
              damping: 10
          };
      } else {
          var stiffness = Math.pow(undampedFreq, 2) * mass;
          return {
              stiffness: stiffness,
              damping: dampingRatio * 2 * Math.sqrt(mass * stiffness)
          };
      }
  }
  var rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
      var result = initialGuess;
      for (var i = 1; i < rootIterations; i++) {
          result = result - envelope(result) / derivative(result);
      }
      return result;
  }
  function calcAngularFreq(undampedFreq, dampingRatio) {
      return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }

  var durationKeys = ["duration", "bounce"];
  var physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options, keys) {
      return keys.some(function (key) {
          return options[key] !== undefined;
      });
  }
  function getSpringOptions(options) {
      var springOptions = __assign({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
      if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
          var derived = findSpring(options);
          springOptions = __assign(__assign(__assign({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
          springOptions.isResolvedFromDuration = true;
      }
      return springOptions;
  }
  function spring(_a) {
      var _b = _a.from,
          from = _b === void 0 ? 0.0 : _b,
          _c = _a.to,
          to = _c === void 0 ? 1.0 : _c,
          _d = _a.restSpeed,
          restSpeed = _d === void 0 ? 2 : _d,
          restDelta = _a.restDelta,
          options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
      var state = { done: false, value: from };
      var _e = getSpringOptions(options),
          stiffness = _e.stiffness,
          damping = _e.damping,
          mass = _e.mass,
          velocity = _e.velocity,
          isResolvedFromDuration = _e.isResolvedFromDuration;
      var resolveSpring = zero;
      var resolveVelocity = zero;
      function createSpring() {
          var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
          var initialDelta = to - from;
          var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
          var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
          restDelta !== null && restDelta !== void 0 ? restDelta : restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;
          if (dampingRatio < 1) {
              var angularFreq_1 = calcAngularFreq(undampedAngularFreq, dampingRatio);
              resolveSpring = function (t) {
                  var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                  return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 * Math.sin(angularFreq_1 * t) + initialDelta * Math.cos(angularFreq_1 * t));
              };
              resolveVelocity = function (t) {
                  var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                  return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 + initialDelta * Math.cos(angularFreq_1 * t)) - envelope * (Math.cos(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq_1 * initialDelta * Math.sin(angularFreq_1 * t));
              };
          } else if (dampingRatio === 1) {
              resolveSpring = function (t) {
                  return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
              };
          } else {
              var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
              resolveSpring = function (t) {
                  var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                  var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
                  return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq_1 * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq_1;
              };
          }
      }
      createSpring();
      return {
          next: function (t) {
              var current = resolveSpring(t);
              if (!isResolvedFromDuration) {
                  var currentVelocity = resolveVelocity(t) * 1000;
                  var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                  var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                  state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
              } else {
                  state.done = t >= options.duration;
              }
              state.value = state.done ? to : current;
              return state;
          },
          flipTarget: function () {
              var _a;
              velocity = -velocity;
              _a = [to, from], from = _a[0], to = _a[1];
              createSpring();
          }
      };
  }
  spring.needsInterpolation = function (a, b) {
      return typeof a === "string" || typeof b === "string";
  };
  var zero = function (_t) {
      return 0;
  };

  var progress = function (from, to, value) {
      var toFromDifference = to - from;
      return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };

  var mix = function (from, to, progress) {
      return -progress * from + progress * to + from;
  };

  var mixLinearColor = function (from, to, v) {
      var fromExpo = from * from;
      var toExpo = to * to;
      return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = function (v) {
      return colorTypes.find(function (type) {
          return type.test(v);
      });
  };
  var notAnimatable = function (color) {
      return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
  };
  var mixColor = function (from, to) {
      var fromColorType = getColorType(from);
      var toColorType = getColorType(to);
      invariant$1(!!fromColorType, notAnimatable(from));
      invariant$1(!!toColorType, notAnimatable(to));
      invariant$1(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
      var fromColor = fromColorType.parse(from);
      var toColor = toColorType.parse(to);
      var blended = __assign({}, fromColor);
      var mixFunc = fromColorType === hsla ? mix : mixLinearColor;
      return function (v) {
          for (var key in blended) {
              if (key !== 'alpha') {
                  blended[key] = mixFunc(fromColor[key], toColor[key], v);
              }
          }
          blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
          return fromColorType.transform(blended);
      };
  };
  var isNum = function (v) {
      return typeof v === 'number';
  };

  var combineFunctions = function (a, b) {
      return function (v) {
          return b(a(v));
      };
  };
  var pipe = function () {
      var transformers = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          transformers[_i] = arguments[_i];
      }
      return transformers.reduce(combineFunctions);
  };

  function getMixer(origin, target) {
      if (isNum(origin)) {
          return function (v) {
              return mix(origin, target, v);
          };
      } else if (color.test(origin)) {
          return mixColor(origin, target);
      } else {
          return mixComplex(origin, target);
      }
  }
  var mixArray = function (from, to) {
      var output = __spreadArrays(from);
      var numValues = output.length;
      var blendValue = from.map(function (fromThis, i) {
          return getMixer(fromThis, to[i]);
      });
      return function (v) {
          for (var i = 0; i < numValues; i++) {
              output[i] = blendValue[i](v);
          }
          return output;
      };
  };
  var mixObject = function (origin, target) {
      var output = __assign(__assign({}, origin), target);
      var blendValue = {};
      for (var key in output) {
          if (origin[key] !== undefined && target[key] !== undefined) {
              blendValue[key] = getMixer(origin[key], target[key]);
          }
      }
      return function (v) {
          for (var key in blendValue) {
              output[key] = blendValue[key](v);
          }
          return output;
      };
  };
  function analyse(value) {
      var parsed = complex.parse(value);
      var numValues = parsed.length;
      var numNumbers = 0;
      var numRGB = 0;
      var numHSL = 0;
      for (var i = 0; i < numValues; i++) {
          if (numNumbers || typeof parsed[i] === 'number') {
              numNumbers++;
          } else {
              if (parsed[i].hue !== undefined) {
                  numHSL++;
              } else {
                  numRGB++;
              }
          }
      }
      return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
  }
  var mixComplex = function (origin, target) {
      var template = complex.createTransformer(target);
      var originStats = analyse(origin);
      var targetStats = analyse(target);
      invariant$1(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
      return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  };

  var mixNumber = function (from, to) {
      return function (p) {
          return mix(from, to, p);
      };
  };
  function detectMixerFactory(v) {
      if (typeof v === 'number') {
          return mixNumber;
      } else if (typeof v === 'string') {
          if (color.test(v)) {
              return mixColor;
          } else {
              return mixComplex;
          }
      } else if (Array.isArray(v)) {
          return mixArray;
      } else if (typeof v === 'object') {
          return mixObject;
      }
  }
  function createMixers(output, ease, customMixer) {
      var mixers = [];
      var mixerFactory = customMixer || detectMixerFactory(output[0]);
      var numMixers = output.length - 1;
      for (var i = 0; i < numMixers; i++) {
          var mixer = mixerFactory(output[i], output[i + 1]);
          if (ease) {
              var easingFunction = Array.isArray(ease) ? ease[i] : ease;
              mixer = pipe(easingFunction, mixer);
          }
          mixers.push(mixer);
      }
      return mixers;
  }
  function fastInterpolate(_a, _b) {
      var from = _a[0],
          to = _a[1];
      var mixer = _b[0];
      return function (v) {
          return mixer(progress(from, to, v));
      };
  }
  function slowInterpolate(input, mixers) {
      var inputLength = input.length;
      var lastInputIndex = inputLength - 1;
      return function (v) {
          var mixerIndex = 0;
          var foundMixerIndex = false;
          if (v <= input[0]) {
              foundMixerIndex = true;
          } else if (v >= input[lastInputIndex]) {
              mixerIndex = lastInputIndex - 1;
              foundMixerIndex = true;
          }
          if (!foundMixerIndex) {
              var i = 1;
              for (; i < inputLength; i++) {
                  if (input[i] > v || i === lastInputIndex) {
                      break;
                  }
              }
              mixerIndex = i - 1;
          }
          var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
          return mixers[mixerIndex](progressInRange);
      };
  }
  function interpolate(input, output, _a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.clamp,
          isClamp = _c === void 0 ? true : _c,
          ease = _b.ease,
          mixer = _b.mixer;
      var inputLength = input.length;
      invariant$1(inputLength === output.length, 'Both input and output ranges must be the same length');
      invariant$1(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
      if (input[0] > input[inputLength - 1]) {
          input = [].concat(input);
          output = [].concat(output);
          input.reverse();
          output.reverse();
      }
      var mixers = createMixers(output, ease, mixer);
      var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
      return isClamp ? function (v) {
          return interpolator(clamp$2(input[0], input[inputLength - 1], v));
      } : interpolator;
  }

  var reverseEasing = function (easing) {
      return function (p) {
          return 1 - easing(1 - p);
      };
  };
  var mirrorEasing = function (easing) {
      return function (p) {
          return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
      };
  };
  var createExpoIn = function (power) {
      return function (p) {
          return Math.pow(p, power);
      };
  };
  var createBackIn = function (power) {
      return function (p) {
          return p * p * ((power + 1) * p - power);
      };
  };
  var createAnticipate = function (power) {
      var backEasing = createBackIn(power);
      return function (p) {
          return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
      };
  };

  var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
  var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
  var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
  var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
  var linear = function (p) {
      return p;
  };
  var easeIn = /*#__PURE__*/createExpoIn(2);
  var easeOut = /*#__PURE__*/reverseEasing(easeIn);
  var easeInOut = /*#__PURE__*/mirrorEasing(easeIn);
  var circIn = function (p) {
      return 1 - Math.sin(Math.acos(p));
  };
  var circOut = /*#__PURE__*/reverseEasing(circIn);
  var circInOut = /*#__PURE__*/mirrorEasing(circOut);
  var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
  var backOut = /*#__PURE__*/reverseEasing(backIn);
  var backInOut = /*#__PURE__*/mirrorEasing(backIn);
  var anticipate = /*#__PURE__*/createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
  var ca = 4356.0 / 361.0;
  var cb = 35442.0 / 1805.0;
  var cc = 16061.0 / 1805.0;
  var bounceOut = function (p) {
      if (p === 1 || p === 0) return p;
      var p2 = p * p;
      return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
  };
  var bounceIn = /*#__PURE__*/reverseEasing(bounceOut);
  var bounceInOut = function (p) {
      return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
  };

  function defaultEasing(values, easing) {
      return values.map(function () {
          return easing || easeInOut;
      }).splice(0, values.length - 1);
  }
  function defaultOffset(values) {
      var numValues = values.length;
      return values.map(function (_value, i) {
          return i !== 0 ? i / (numValues - 1) : 0;
      });
  }
  function convertOffsetToTimes(offset, duration) {
      return offset.map(function (o) {
          return o * duration;
      });
  }
  function keyframes(_a) {
      var _b = _a.from,
          from = _b === void 0 ? 0 : _b,
          _c = _a.to,
          to = _c === void 0 ? 1 : _c,
          ease = _a.ease,
          offset = _a.offset,
          _d = _a.duration,
          duration = _d === void 0 ? 300 : _d;
      var state = { done: false, value: from };
      var values = Array.isArray(to) ? to : [from, to];
      var times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
      function createInterpolator() {
          return interpolate(times, values, {
              ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
          });
      }
      var interpolator = createInterpolator();
      return {
          next: function (t) {
              state.value = interpolator(t);
              state.done = t >= duration;
              return state;
          },
          flipTarget: function () {
              values.reverse();
              interpolator = createInterpolator();
          }
      };
  }

  function decay(_a) {
      var _b = _a.velocity,
          velocity = _b === void 0 ? 0 : _b,
          _c = _a.from,
          from = _c === void 0 ? 0 : _c,
          _d = _a.power,
          power = _d === void 0 ? 0.8 : _d,
          _e = _a.timeConstant,
          timeConstant = _e === void 0 ? 350 : _e,
          _f = _a.restDelta,
          restDelta = _f === void 0 ? 0.5 : _f,
          modifyTarget = _a.modifyTarget;
      var state = { done: false, value: from };
      var amplitude = power * velocity;
      var ideal = from + amplitude;
      var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
      if (target !== ideal) amplitude = target - from;
      return {
          next: function (t) {
              var delta = -amplitude * Math.exp(-t / timeConstant);
              state.done = !(delta > restDelta || delta < -restDelta);
              state.value = state.done ? target : target + delta;
              return state;
          },
          flipTarget: function () {}
      };
  }

  var types = { keyframes: keyframes, spring: spring, decay: decay };
  function detectAnimationFromOptions(config) {
      if (Array.isArray(config.to)) {
          return keyframes;
      } else if (types[config.type]) {
          return types[config.type];
      }
      var keys = new Set(Object.keys(config));
      if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
          return keyframes;
      } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
          return spring;
      }
      return keyframes;
  }

  function loopElapsed(elapsed, duration, delay) {
      if (delay === void 0) {
          delay = 0;
      }
      return elapsed - duration - delay;
  }
  function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
      if (delay === void 0) {
          delay = 0;
      }
      if (isForwardPlayback === void 0) {
          isForwardPlayback = true;
      }
      return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
  }
  function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
      return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
  }

  var framesync = function (update) {
      var passTimestamp = function (_a) {
          var delta = _a.delta;
          return update(delta);
      };
      return {
          start: function () {
              return sync.update(passTimestamp, true, true);
          },
          stop: function () {
              return cancelSync.update(passTimestamp);
          }
      };
  };
  function animate(_a) {
      var _b, _c;
      var from = _a.from,
          _d = _a.autoplay,
          autoplay = _d === void 0 ? true : _d,
          _e = _a.driver,
          driver = _e === void 0 ? framesync : _e,
          _f = _a.elapsed,
          elapsed = _f === void 0 ? 0 : _f,
          _g = _a.repeat,
          repeatMax = _g === void 0 ? 0 : _g,
          _h = _a.repeatType,
          repeatType = _h === void 0 ? "loop" : _h,
          _j = _a.repeatDelay,
          repeatDelay = _j === void 0 ? 0 : _j,
          onPlay = _a.onPlay,
          onStop = _a.onStop,
          onComplete = _a.onComplete,
          onRepeat = _a.onRepeat,
          onUpdate = _a.onUpdate,
          options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
      var to = options.to;
      var driverControls;
      var repeatCount = 0;
      var computedDuration = options.duration;
      var latest;
      var isComplete = false;
      var isForwardPlayback = true;
      var interpolateFromNumber;
      var animator = detectAnimationFromOptions(options);
      if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
          interpolateFromNumber = interpolate([0, 100], [from, to], {
              clamp: false
          });
          from = 0;
          to = 100;
      }
      var animation = animator(__assign(__assign({}, options), { from: from, to: to }));
      function repeat() {
          repeatCount++;
          if (repeatType === "reverse") {
              isForwardPlayback = repeatCount % 2 === 0;
              elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
          } else {
              elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
              if (repeatType === "mirror") animation.flipTarget();
          }
          isComplete = false;
          onRepeat && onRepeat();
      }
      function complete() {
          driverControls.stop();
          onComplete && onComplete();
      }
      function update(delta) {
          if (!isForwardPlayback) delta = -delta;
          elapsed += delta;
          if (!isComplete) {
              var state = animation.next(Math.max(0, elapsed));
              latest = state.value;
              if (interpolateFromNumber) latest = interpolateFromNumber(latest);
              isComplete = isForwardPlayback ? state.done : elapsed <= 0;
          }
          onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
          if (isComplete) {
              if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
              if (repeatCount < repeatMax) {
                  hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
              } else {
                  complete();
              }
          }
      }
      function play() {
          onPlay === null || onPlay === void 0 ? void 0 : onPlay();
          driverControls = driver(update);
          driverControls.start();
      }
      autoplay && play();
      return {
          stop: function () {
              onStop === null || onStop === void 0 ? void 0 : onStop();
              driverControls.stop();
          }
      };
  }

  function velocityPerSecond(velocity, frameDuration) {
      return frameDuration ? velocity * (1000 / frameDuration) : 0;
  }

  function inertia(_a) {
      var _b = _a.from,
          from = _b === void 0 ? 0 : _b,
          _c = _a.velocity,
          velocity = _c === void 0 ? 0 : _c,
          min = _a.min,
          max = _a.max,
          _d = _a.power,
          power = _d === void 0 ? 0.8 : _d,
          _e = _a.timeConstant,
          timeConstant = _e === void 0 ? 750 : _e,
          _f = _a.bounceStiffness,
          bounceStiffness = _f === void 0 ? 500 : _f,
          _g = _a.bounceDamping,
          bounceDamping = _g === void 0 ? 10 : _g,
          _h = _a.restDelta,
          restDelta = _h === void 0 ? 1 : _h,
          modifyTarget = _a.modifyTarget,
          driver = _a.driver,
          onUpdate = _a.onUpdate,
          onComplete = _a.onComplete;
      var currentAnimation;
      function isOutOfBounds(v) {
          return min !== undefined && v < min || max !== undefined && v > max;
      }
      function boundaryNearest(v) {
          if (min === undefined) return max;
          if (max === undefined) return min;
          return Math.abs(min - v) < Math.abs(max - v) ? min : max;
      }
      function startAnimation(options) {
          currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
          currentAnimation = animate(__assign(__assign({}, options), { driver: driver, onUpdate: function (v) {
                  var _a;
                  onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                  (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
              }, onComplete: onComplete }));
      }
      function startSpring(options) {
          startAnimation(__assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta }, options));
      }
      if (isOutOfBounds(from)) {
          startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
      } else {
          var target = power * velocity + from;
          if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
          var boundary_1 = boundaryNearest(target);
          var heading_1 = boundary_1 === min ? -1 : 1;
          var prev_1;
          var current_1;
          var checkBoundary = function (v) {
              prev_1 = current_1;
              current_1 = v;
              velocity = velocityPerSecond(v - prev_1, getFrameData().delta);
              if (heading_1 === 1 && v > boundary_1 || heading_1 === -1 && v < boundary_1) {
                  startSpring({ from: v, to: boundary_1, velocity: velocity });
              }
          };
          startAnimation({
              type: "decay",
              from: from,
              velocity: velocity,
              timeConstant: timeConstant,
              power: power,
              restDelta: restDelta,
              modifyTarget: modifyTarget,
              onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
          });
      }
      return {
          stop: function () {
              return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
          }
      };
  }

  var isPoint = function (point) {
      return point.hasOwnProperty('x') && point.hasOwnProperty('y');
  };

  var isPoint3D = function (point) {
      return isPoint(point) && point.hasOwnProperty('z');
  };

  var distance1D = function (a, b) {
      return Math.abs(a - b);
  };
  function distance(a, b) {
      if (isNum(a) && isNum(b)) {
          return distance1D(a, b);
      } else if (isPoint(a) && isPoint(b)) {
          var xDelta = distance1D(a.x, b.x);
          var yDelta = distance1D(a.y, b.y);
          var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
          return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
      }
  }

  var a = function (a1, a2) {
      return 1.0 - 3.0 * a2 + 3.0 * a1;
  };
  var b$1 = function (a1, a2) {
      return 3.0 * a2 - 6.0 * a1;
  };
  var c$1 = function (a1) {
      return 3.0 * a1;
  };
  var calcBezier = function (t, a1, a2) {
      return ((a(a1, a2) * t + b$1(a1, a2)) * t + c$1(a1)) * t;
  };
  var getSlope = function (t, a1, a2) {
      return 3.0 * a(a1, a2) * t * t + 2.0 * b$1(a1, a2) * t + c$1(a1);
  };
  var subdivisionPrecision = 0.0000001;
  var subdivisionMaxIterations = 10;
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX;
      var currentT;
      var i = 0;
      do {
          currentT = aA + (aB - aA) / 2.0;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0.0) {
              aB = currentT;
          } else {
              aA = currentT;
          }
      } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
      return currentT;
  }
  var newtonIterations = 8;
  var newtonMinSlope = 0.001;
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < newtonIterations; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0.0) {
              return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
  }
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
  function cubicBezier(mX1, mY1, mX2, mY2) {
      if (mX1 === mY1 && mX2 === mY2) return linear;
      var sampleValues = new Float32Array(kSplineTableSize);
      for (var i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
      function getTForX(aX) {
          var intervalStart = 0.0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= newtonMinSlope) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0.0) {
              return guessForT;
          } else {
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
      }
      return function (t) {
          return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
      };
  }

  var isRefObject = function (ref) {
      return typeof ref === "object" && ref.hasOwnProperty("current");
  };

  /**
   * A generic subscription manager.
   */
  var SubscriptionManager = /** @class */ (function () {
      function SubscriptionManager() {
          this.subscriptions = new Set();
      }
      SubscriptionManager.prototype.add = function (handler) {
          var _this = this;
          this.subscriptions.add(handler);
          return function () { return void _this.subscriptions.delete(handler); };
      };
      SubscriptionManager.prototype.notify = function (
      /**
       * Using ...args would be preferable but it's array creation and this
       * might be fired every frame.
       */
      a, b, c) {
          var e_1, _a;
          if (!this.subscriptions.size)
              return;
          try {
              for (var _b = __values(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var handler = _c.value;
                  handler(a, b, c);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
      };
      SubscriptionManager.prototype.clear = function () {
          this.subscriptions.clear();
      };
      return SubscriptionManager;
  }());

  var isFloat = function (value) {
      return !isNaN(parseFloat(value));
  };
  /**
   * `MotionValue` is used to track the state and velocity of motion values.
   *
   * @public
   */
  var MotionValue = /** @class */ (function () {
      /**
       * @param init - The initiating value
       * @param config - Optional configuration options
       *
       * -  `transformer`: A function to transform incoming values with.
       *
       * @internal
       */
      function MotionValue(init) {
          var _this = this;
          /**
           * Duration, in milliseconds, since last updating frame.
           *
           * @internal
           */
          this.timeDelta = 0;
          /**
           * Timestamp of the last time this `MotionValue` was updated.
           *
           * @internal
           */
          this.lastUpdated = 0;
          /**
           * Functions to notify when the `MotionValue` updates.
           *
           * @internal
           */
          this.updateSubscribers = new SubscriptionManager();
          /**
           * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
           *
           * @internal
           */
          this.renderSubscribers = new SubscriptionManager();
          /**
           * Tracks whether this value can output a velocity. Currently this is only true
           * if the value is numerical, but we might be able to widen the scope here and support
           * other value types.
           *
           * @internal
           */
          this.canTrackVelocity = false;
          this.updateAndNotify = function (v, render) {
              if (render === void 0) { render = true; }
              _this.prev = _this.current;
              _this.current = v;
              if (_this.prev !== _this.current) {
                  _this.updateSubscribers.notify(_this.current);
              }
              if (render) {
                  _this.renderSubscribers.notify(_this.current);
              }
              // Update timestamp
              var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
              if (_this.lastUpdated !== timestamp) {
                  _this.timeDelta = delta;
                  _this.lastUpdated = timestamp;
                  sync.postRender(_this.scheduleVelocityCheck);
              }
          };
          /**
           * Schedule a velocity check for the next frame.
           *
           * This is an instanced and bound function to prevent generating a new
           * function once per frame.
           *
           * @internal
           */
          this.scheduleVelocityCheck = function () { return sync.postRender(_this.velocityCheck); };
          /**
           * Updates `prev` with `current` if the value hasn't been updated this frame.
           * This ensures velocity calculations return `0`.
           *
           * This is an instanced and bound function to prevent generating a new
           * function once per frame.
           *
           * @internal
           */
          this.velocityCheck = function (_a) {
              var timestamp = _a.timestamp;
              if (timestamp !== _this.lastUpdated) {
                  _this.prev = _this.current;
              }
          };
          this.current = init;
          this.canTrackVelocity = isFloat(this.current);
      }
      /**
       * Adds a function that will be notified when the `MotionValue` is updated.
       *
       * It returns a function that, when called, will cancel the subscription.
       *
       * When calling `onChange` inside a React component, it should be wrapped with the
       * `useEffect` hook. As it returns an unsubscribe function, this should be returned
       * from the `useEffect` function to ensure you don't add duplicate subscribers..
       *
       * @library
       *
       * ```jsx
       * function MyComponent() {
       *   const x = useMotionValue(0)
       *   const y = useMotionValue(0)
       *   const opacity = useMotionValue(1)
       *
       *   useEffect(() => {
       *     function updateOpacity() {
       *       const maxXY = Math.max(x.get(), y.get())
       *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
       *       opacity.set(newOpacity)
       *     }
       *
       *     const unsubscribeX = x.onChange(updateOpacity)
       *     const unsubscribeY = y.onChange(updateOpacity)
       *
       *     return () => {
       *       unsubscribeX()
       *       unsubscribeY()
       *     }
       *   }, [])
       *
       *   return <Frame x={x} />
       * }
       * ```
       *
       * @motion
       *
       * ```jsx
       * export const MyComponent = () => {
       *   const x = useMotionValue(0)
       *   const y = useMotionValue(0)
       *   const opacity = useMotionValue(1)
       *
       *   useEffect(() => {
       *     function updateOpacity() {
       *       const maxXY = Math.max(x.get(), y.get())
       *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
       *       opacity.set(newOpacity)
       *     }
       *
       *     const unsubscribeX = x.onChange(updateOpacity)
       *     const unsubscribeY = y.onChange(updateOpacity)
       *
       *     return () => {
       *       unsubscribeX()
       *       unsubscribeY()
       *     }
       *   }, [])
       *
       *   return <motion.div style={{ x }} />
       * }
       * ```
       *
       * @internalremarks
       *
       * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
       *
       * ```jsx
       * useOnChange(x, () => {})
       * ```
       *
       * @param subscriber - A function that receives the latest value.
       * @returns A function that, when called, will cancel this subscription.
       *
       * @public
       */
      MotionValue.prototype.onChange = function (subscription) {
          return this.updateSubscribers.add(subscription);
      };
      MotionValue.prototype.clearListeners = function () {
          this.updateSubscribers.clear();
      };
      /**
       * Adds a function that will be notified when the `MotionValue` requests a render.
       *
       * @param subscriber - A function that's provided the latest value.
       * @returns A function that, when called, will cancel this subscription.
       *
       * @internal
       */
      MotionValue.prototype.onRenderRequest = function (subscription) {
          // Render immediately
          subscription(this.get());
          return this.renderSubscribers.add(subscription);
      };
      /**
       * Attaches a passive effect to the `MotionValue`.
       *
       * @internal
       */
      MotionValue.prototype.attach = function (passiveEffect) {
          this.passiveEffect = passiveEffect;
      };
      /**
       * Sets the state of the `MotionValue`.
       *
       * @remarks
       *
       * ```jsx
       * const x = useMotionValue(0)
       * x.set(10)
       * ```
       *
       * @param latest - Latest value to set.
       * @param render - Whether to notify render subscribers. Defaults to `true`
       *
       * @public
       */
      MotionValue.prototype.set = function (v, render) {
          if (render === void 0) { render = true; }
          if (!render || !this.passiveEffect) {
              this.updateAndNotify(v, render);
          }
          else {
              this.passiveEffect(v, this.updateAndNotify);
          }
      };
      /**
       * Returns the latest state of `MotionValue`
       *
       * @returns - The latest state of `MotionValue`
       *
       * @public
       */
      MotionValue.prototype.get = function () {
          return this.current;
      };
      /**
       * @public
       */
      MotionValue.prototype.getPrevious = function () {
          return this.prev;
      };
      /**
       * Returns the latest velocity of `MotionValue`
       *
       * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
       *
       * @public
       */
      MotionValue.prototype.getVelocity = function () {
          // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
          return this.canTrackVelocity
              ? // These casts could be avoided if parseFloat would be typed better
                  velocityPerSecond(parseFloat(this.current) -
                      parseFloat(this.prev), this.timeDelta)
              : 0;
      };
      /**
       * Registers a new animation to control this `MotionValue`. Only one
       * animation can drive a `MotionValue` at one time.
       *
       * ```jsx
       * value.start()
       * ```
       *
       * @param animation - A function that starts the provided animation
       *
       * @internal
       */
      MotionValue.prototype.start = function (animation) {
          var _this = this;
          this.stop();
          return new Promise(function (resolve) {
              _this.stopAnimation = animation(resolve);
          }).then(function () { return _this.clearAnimation(); });
      };
      /**
       * Stop the currently active animation.
       *
       * @public
       */
      MotionValue.prototype.stop = function () {
          if (this.stopAnimation)
              this.stopAnimation();
          this.clearAnimation();
      };
      /**
       * Returns `true` if this value is currently animating.
       *
       * @public
       */
      MotionValue.prototype.isAnimating = function () {
          return !!this.stopAnimation;
      };
      MotionValue.prototype.clearAnimation = function () {
          this.stopAnimation = null;
      };
      /**
       * Destroy and clean up subscribers to this `MotionValue`.
       *
       * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
       * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
       * created a `MotionValue` via the `motionValue` function.
       *
       * @public
       */
      MotionValue.prototype.destroy = function () {
          this.updateSubscribers.clear();
          this.renderSubscribers.clear();
          this.stop();
      };
      return MotionValue;
  }());
  /**
   * @internal
   */
  function motionValue(init) {
      return new MotionValue(init);
  }

  /**
   * VisualElement is an abstract class that provides a generic animation-optimised interface to the
   * underlying renderer.
   *
   * Currently many features interact directly with HTMLVisualElement/SVGVisualElement
   * but the idea is we can create, for instance, a ThreeVisualElement that extends
   * VisualElement and we can quickly offer all the same features.
   */
  var VisualElement = /** @class */ (function () {
      function VisualElement(parent, ref) {
          var _this = this;
          // An iterable list of current children
          this.children = new Set();
          /**
           * A set of values that we animate back to when a value is cleared of all overrides.
           */
          this.baseTarget = {};
          // The latest resolved MotionValues
          this.latest = {};
          // A map of MotionValues used to animate this element
          this.values = new Map();
          // Unsubscription callbacks for MotionValue subscriptions
          this.valueSubscriptions = new Map();
          // A configuration for this VisualElement, each derived class can extend this.
          this.config = {};
          this.isMounted = false;
          // A pre-bound call to the user-provided `onUpdate` callback. This won't
          // be called more than once per frame.
          this.update = function () { return _this.config.onUpdate(_this.latest); };
          // Pre-bound version of render
          this.triggerRender = function () { return _this.render(); };
          // This function gets passed to the rendered component's `ref` prop
          // and is used to mount/unmount the VisualElement
          this.ref = function (element) {
              element ? _this.mount(element) : _this.unmount();
              if (!_this.externalRef)
                  return;
              if (typeof _this.externalRef === "function") {
                  _this.externalRef(element);
              }
              else if (isRefObject(_this.externalRef)) {
                  _this.externalRef.current = element;
              }
          };
          // Create a relationship with the provided parent.
          this.parent = parent;
          this.rootParent = parent ? parent.rootParent : this;
          this.treePath = parent ? __spread(parent.treePath, [parent]) : [];
          // Calculate the depth of this node in the VisualElement graph
          this.depth = parent ? parent.depth + 1 : 0;
          // A reference to any externally-defined React ref. This might live better
          // outside the VisualElement and be handled in a hook.
          this.externalRef = ref;
      }
      VisualElement.prototype.getVariantPayload = function () {
          return this.config.custom;
      };
      VisualElement.prototype.getVariant = function (label) {
          var _a;
          return (_a = this.config.variants) === null || _a === void 0 ? void 0 : _a[label];
      };
      VisualElement.prototype.addVariantChild = function (visualElement) {
          var _this = this;
          if (!this.variantChildren)
              this.variantChildren = new Set();
          this.variantChildren.add(visualElement);
          return function () { return _this.variantChildren.delete(visualElement); };
      };
      VisualElement.prototype.addVariantChildOrder = function (visualElement) {
          if (!this.variantChildrenOrder)
              this.variantChildrenOrder = new Set();
          this.variantChildrenOrder.add(visualElement);
      };
      VisualElement.prototype.onAnimationStart = function () {
          var _a, _b;
          (_b = (_a = this.config).onAnimationStart) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      VisualElement.prototype.onAnimationComplete = function () {
          var _a, _b;
          this.isMounted && ((_b = (_a = this.config).onAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a));
      };
      VisualElement.prototype.getDefaultTransition = function () {
          return this.config.transition;
      };
      VisualElement.prototype.subscribe = function (child) {
          var _this = this;
          this.children.add(child);
          return function () { return _this.children.delete(child); };
      };
      // Check whether this element has a MotionValue of the provided key
      VisualElement.prototype.hasValue = function (key) {
          return this.values.has(key);
      };
      // Add a MotionValue
      VisualElement.prototype.addValue = function (key, value) {
          if (this.hasValue(key))
              this.removeValue(key);
          this.values.set(key, value);
          this.setSingleStaticValue(key, value.get());
          this.subscribeToValue(key, value);
      };
      // Remove a MotionValue
      VisualElement.prototype.removeValue = function (key) {
          var _a;
          (_a = this.valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
          this.valueSubscriptions.delete(key);
          this.values.delete(key);
          delete this.latest[key];
      };
      VisualElement.prototype.getValue = function (key, defaultValue) {
          var value = this.values.get(key);
          if (value === undefined && defaultValue !== undefined) {
              value = new MotionValue(defaultValue);
              this.addValue(key, value);
          }
          return value;
      };
      // Iterate over all MotionValues
      VisualElement.prototype.forEachValue = function (callback) {
          this.values.forEach(callback);
      };
      // Get the underlying rendered instance of this VisualElement. For instance in
      // HTMLVisualElement this will be a HTMLElement.
      VisualElement.prototype.getInstance = function () {
          return this.element;
      };
      VisualElement.prototype.updateConfig = function (config) {
          if (config === void 0) { config = {}; }
          this.config = __assign({}, config);
      };
      VisualElement.prototype.getBaseValue = function (key, _props) {
          return this.baseTarget[key];
      };
      // Set a single `latest` value
      VisualElement.prototype.setSingleStaticValue = function (key, value) {
          this.latest[key] = value;
      };
      // Statically set values to `latest` without needing a MotionValue
      VisualElement.prototype.setStaticValues = function (values, value) {
          if (typeof values === "string") {
              this.setSingleStaticValue(values, value);
          }
          else {
              for (var key in values) {
                  this.setSingleStaticValue(key, values[key]);
              }
          }
      };
      VisualElement.prototype.scheduleRender = function () {
          sync.render(this.triggerRender, false, true);
      };
      VisualElement.prototype.scheduleUpdateLayoutDelta = function () {
          sync.preRender(this.rootParent.updateLayoutDelta, false, true);
      };
      VisualElement.prototype.subscribeToValue = function (key, value) {
          var _this = this;
          var onChange = function (latest) {
              _this.setSingleStaticValue(key, latest);
              // Schedule onUpdate if we have an onUpdate listener and the component has mounted
              _this.element &&
                  _this.config.onUpdate &&
                  sync.update(_this.update, false, true);
          };
          var onRender = function () {
              _this.element && _this.scheduleRender();
          };
          var unsubscribeOnChange = value.onChange(onChange);
          var unsubscribeOnRender = value.onRenderRequest(onRender);
          this.valueSubscriptions.set(key, function () {
              unsubscribeOnChange();
              unsubscribeOnRender();
          });
      };
      // Mount the VisualElement with the actual DOM element
      VisualElement.prototype.mount = function (element) {
          invariant$1(!!element, "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef");
          if (this.parent) {
              this.removeFromParent = this.parent.subscribe(this);
          }
          /**
           * Save the element to this.element as a semantic API, this.current to the VisualElement
           * is compatible with existing RefObject APIs.
           */
          this.element = this.current = element;
      };
      // Unmount the VisualElement and cancel any scheduled updates
      VisualElement.prototype.unmount = function () {
          var _this = this;
          this.forEachValue(function (_, key) { return _this.removeValue(key); });
          cancelSync.update(this.update);
          cancelSync.render(this.render);
          this.removeFromParent && this.removeFromParent();
      };
      return VisualElement;
  }());

  function noop$1(any) {
      return any;
  }

  /**
   * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
   * it's easier to consider each axis individually. This function returns a bounding box
   * as a map of single-axis min/max values.
   */
  function convertBoundingBoxToAxisBox(_a) {
      var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
      return {
          x: { min: left, max: right },
          y: { min: top, max: bottom },
      };
  }
  function convertAxisBoxToBoundingBox(_a) {
      var x = _a.x, y = _a.y;
      return {
          top: y.min,
          bottom: y.max,
          left: x.min,
          right: x.max,
      };
  }
  /**
   * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
   * provided by Framer to allow measured points to be corrected for device scaling. This is used
   * when measuring DOM elements and DOM event points.
   */
  function transformBoundingBox(_a, transformPoint) {
      var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
      if (transformPoint === void 0) { transformPoint = noop$1; }
      var topLeft = transformPoint({ x: left, y: top });
      var bottomRight = transformPoint({ x: right, y: bottom });
      return {
          top: topLeft.y,
          left: topLeft.x,
          bottom: bottomRight.y,
          right: bottomRight.x,
      };
  }
  /**
   * Create an empty axis box of zero size
   */
  function axisBox() {
      return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
  }
  function copyAxisBox(box) {
      return {
          x: __assign({}, box.x),
          y: __assign({}, box.y),
      };
  }
  /**
   * Create an empty box delta
   */
  var zeroDelta = {
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0,
  };
  function delta() {
      return {
          x: __assign({}, zeroDelta),
          y: __assign({}, zeroDelta),
      };
  }

  /**
   * ValueType for "auto"
   */
  var auto = {
      test: function (v) { return v === "auto"; },
      parse: function (v) { return v; },
  };
  /**
   * ValueType for ints
   */
  var int = __assign(__assign({}, number), { transform: Math.round });
  /**
   * A map of default value types for common values
   */
  var defaultValueTypes = {
      // Color props
      color: color,
      backgroundColor: color,
      outlineColor: color,
      fill: color,
      stroke: color,
      // Border props
      borderColor: color,
      borderTopColor: color,
      borderRightColor: color,
      borderBottomColor: color,
      borderLeftColor: color,
      borderWidth: px,
      borderTopWidth: px,
      borderRightWidth: px,
      borderBottomWidth: px,
      borderLeftWidth: px,
      borderRadius: px,
      radius: px,
      borderTopLeftRadius: px,
      borderTopRightRadius: px,
      borderBottomRightRadius: px,
      borderBottomLeftRadius: px,
      // Positioning props
      width: px,
      maxWidth: px,
      height: px,
      maxHeight: px,
      size: px,
      top: px,
      right: px,
      bottom: px,
      left: px,
      // Spacing props
      padding: px,
      paddingTop: px,
      paddingRight: px,
      paddingBottom: px,
      paddingLeft: px,
      margin: px,
      marginTop: px,
      marginRight: px,
      marginBottom: px,
      marginLeft: px,
      // Transform props
      rotate: degrees,
      rotateX: degrees,
      rotateY: degrees,
      rotateZ: degrees,
      scale: scale,
      scaleX: scale,
      scaleY: scale,
      scaleZ: scale,
      skew: degrees,
      skewX: degrees,
      skewY: degrees,
      distance: px,
      translateX: px,
      translateY: px,
      translateZ: px,
      x: px,
      y: px,
      z: px,
      perspective: px,
      transformPerspective: px,
      opacity: alpha,
      originX: progressPercentage,
      originY: progressPercentage,
      originZ: px,
      // Misc
      zIndex: int,
      // SVG
      fillOpacity: alpha,
      strokeOpacity: alpha,
      numOctaves: int,
  };
  /**
   * A list of value types commonly used for dimensions
   */
  var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  /**
   * Tests a provided value against a ValueType
   */
  var testValueType = function (v) { return function (type) { return type.test(v); }; };
  /**
   * Tests a dimensional value against the list of dimension ValueTypes
   */
  var findDimensionValueType = function (v) {
      return dimensionValueTypes.find(testValueType(v));
  };
  /**
   * A list of all ValueTypes
   */
  var valueTypes = __spread(dimensionValueTypes, [color, complex]);
  /**
   * Tests a value against the list of ValueTypes
   */
  var findValueType = function (v) { return valueTypes.find(testValueType(v)); };
  /**
   * Gets the default ValueType for the provided value key
   */
  var getDefaultValueType = function (key) { return defaultValueTypes[key]; };
  /**
   * Provided a value and a ValueType, returns the value as that value type.
   */
  var getValueAsType = function (value, type) {
      return type && typeof value === "number"
          ? type.transform(value)
          : value;
  };

  /**
   * A list of all transformable axes. We'll use this list to generated a version
   * of each axes for each transform.
   */
  var transformAxes = ["", "X", "Y", "Z"];
  /**
   * An ordered array of each transformable value. By default, transform values
   * will be sorted to this order.
   */
  var order = ["perspective", "translate", "scale", "rotate", "skew"];
  /**
   * Generate a list of every possible transform key.
   */
  var transformProps = ["transformPerspective", "x", "y", "z"];
  order.forEach(function (operationKey) {
      transformAxes.forEach(function (axesKey) {
          var key = operationKey + axesKey;
          transformProps.push(key);
      });
  });
  /**
   * A function to use with Array.sort to sort transform keys by their default order.
   */
  function sortTransformProps(a, b) {
      return transformProps.indexOf(a) - transformProps.indexOf(b);
  }
  /**
   * A quick lookup for transform props.
   */
  var transformPropSet = new Set(transformProps);
  function isTransformProp(key) {
      return transformPropSet.has(key);
  }
  /**
   * A quick lookup for transform origin props
   */
  var transformOriginProps = new Set(["originX", "originY", "originZ"]);
  function isTransformOriginProp(key) {
      return transformOriginProps.has(key);
  }

  var translateAlias = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
  };
  /**
   * Build a CSS transform style from individual x/y/scale etc properties.
   *
   * This outputs with a default order of transforms/scales/rotations, this can be customised by
   * providing a transformTemplate function.
   */
  function buildTransform(transform, transformKeys, transformTemplate, transformIsDefault, enableHardwareAcceleration, allowTransformNone) {
      if (enableHardwareAcceleration === void 0) { enableHardwareAcceleration = true; }
      if (allowTransformNone === void 0) { allowTransformNone = true; }
      // The transform string we're going to build into.
      var transformString = "";
      // Transform keys into their default order - this will determine the output order.
      transformKeys.sort(sortTransformProps);
      // Track whether the defined transform has a defined z so we don't add a
      // second to enable hardware acceleration
      var transformHasZ = false;
      // Loop over each transform and build them into transformString
      var numTransformKeys = transformKeys.length;
      for (var i = 0; i < numTransformKeys; i++) {
          var key = transformKeys[i];
          transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
          if (key === "z")
              transformHasZ = true;
      }
      if (!transformHasZ && enableHardwareAcceleration) {
          transformString += "translateZ(0)";
      }
      else {
          transformString = transformString.trim();
      }
      // If we have a custom `transform` template, pass our transform values and
      // generated transformString to that before returning
      if (transformTemplate) {
          transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
      }
      else if (allowTransformNone && transformIsDefault) {
          transformString = "none";
      }
      return transformString;
  }
  /**
   * Build a transformOrigin style. Uses the same defaults as the browser for
   * undefined origins.
   */
  function buildTransformOrigin(_a) {
      var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
      return originX + " " + originY + " " + originZ;
  }
  /**
   * Build a transform style that takes a calculated delta between the element's current
   * space on screen and projects it into the desired space.
   */
  function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
      var x = _a.x, y = _a.y;
      /**
       * The translations we use to calculate are always relative to the viewport coordinate space.
       * But when we apply scales, we also scale the coordinate space of an element and its children.
       * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
       * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
       */
      var xTranslate = x.translate / treeScale.x;
      var yTranslate = y.translate / treeScale.y;
      var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
      if (latestTransform) {
          var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
          if (rotate)
              transform += "rotate(" + rotate + ") ";
          if (rotateX)
              transform += "rotateX(" + rotateX + ") ";
          if (rotateY)
              transform += "rotateY(" + rotateY + ") ";
      }
      transform += "scale(" + x.scale + ", " + y.scale + ")";
      return !latestTransform && transform === identityProjection ? "" : transform;
  }
  var identityProjection = buildLayoutProjectionTransform(delta(), {
      x: 1,
      y: 1,
  });
  /**
   * Take the calculated delta origin and apply it as a transform string.
   */
  function buildLayoutProjectionTransformOrigin(_a) {
      var x = _a.x, y = _a.y;
      return x.origin * 100 + "% " + y.origin * 100 + "% 0";
  }

  /**
   * Returns true if the provided key is a CSS variable
   */
  function isCSSVariable(key) {
      return key.startsWith("--");
  }

  function isCSSVariable$1(value) {
      return typeof value === "string" && value.startsWith("var(--");
  }
  /**
   * Parse Framer's special CSS variable format into a CSS token and a fallback.
   *
   * ```
   * `var(--foo, #fff)` => [`--foo`, '#fff']
   * ```
   *
   * @param current
   */
  var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function parseCSSVariable(current) {
      var match = cssVariableRegex.exec(current);
      if (!match)
          return [,];
      var _a = __read(match, 3), token = _a[1], fallback = _a[2];
      return [token, fallback];
  }
  var maxDepth = 4;
  function getVariableValue(current, element, depth) {
      if (depth === void 0) { depth = 1; }
      invariant$1(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
      var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
      // No CSS variable detected
      if (!token)
          return;
      // Attempt to read this CSS variable off the element
      var resolved = window.getComputedStyle(element).getPropertyValue(token);
      if (resolved) {
          return resolved.trim();
      }
      else if (isCSSVariable$1(fallback)) {
          // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
          return getVariableValue(fallback, element, depth + 1);
      }
      else {
          return fallback;
      }
  }
  /**
   * Resolve CSS variables from
   *
   * @internal
   */
  function resolveCSSVariables(visualElement, _a, transitionEnd) {
      var _b;
      var target = __rest(_a, []);
      var element = visualElement.getInstance();
      if (!(element instanceof HTMLElement))
          return { target: target, transitionEnd: transitionEnd };
      // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
      // only if they change but I think this reads clearer and this isn't a performance-critical path.
      if (transitionEnd) {
          transitionEnd = __assign({}, transitionEnd);
      }
      // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
      visualElement.forEachValue(function (value) {
          var current = value.get();
          if (!isCSSVariable$1(current))
              return;
          var resolved = getVariableValue(current, element);
          if (resolved)
              value.set(resolved);
      });
      // Cycle through every target property and resolve CSS variables. Currently
      // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
      for (var key in target) {
          var current = target[key];
          if (!isCSSVariable$1(current))
              continue;
          var resolved = getVariableValue(current, element);
          if (!resolved)
              continue;
          // Clone target if it hasn't already been
          target[key] = resolved;
          // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
          // CSS variable. This will ensure that after the animation the component will reflect
          // changes in the value of the CSS variable.
          if (transitionEnd)
              (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
      }
      return { target: target, transitionEnd: transitionEnd };
  }

  function pixelsToPercent(pixels, axis) {
      return (pixels / (axis.max - axis.min)) * 100;
  }
  /**
   * We always correct borderRadius as a percentage rather than pixels to reduce paints.
   * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
   * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
   * borderRadius in both states. If we animate between the two in pixels that will trigger
   * a paint each time. If we animate between the two in percentage we'll avoid a paint.
   */
  function correctBorderRadius(latest, viewportBox) {
      /**
       * If latest is a string, if it's a percentage we can return immediately as it's
       * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
       */
      if (typeof latest === "string") {
          if (px.test(latest)) {
              latest = parseFloat(latest);
          }
          else {
              return latest;
          }
      }
      /**
       * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
       * pixel value as a percentage of each axis
       */
      var x = pixelsToPercent(latest, viewportBox.x);
      var y = pixelsToPercent(latest, viewportBox.y);
      return x + "% " + y + "%";
  }
  var varToken = "_$css";
  function correctBoxShadow(latest, _viewportBox, delta, treeScale) {
      var original = latest;
      /**
       * We need to first strip and store CSS variables from the string.
       */
      var containsCSSVariables = latest.includes("var(");
      var cssVariables = [];
      if (containsCSSVariables) {
          latest = latest.replace(cssVariableRegex, function (match) {
              cssVariables.push(match);
              return varToken;
          });
      }
      var shadow = complex.parse(latest);
      // TODO: Doesn't support multiple shadows
      if (shadow.length > 5)
          return original;
      var template = complex.createTransformer(latest);
      var offset = typeof shadow[0] !== "number" ? 1 : 0;
      // Calculate the overall context scale
      var xScale = delta.x.scale * treeScale.x;
      var yScale = delta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      /**
       * Ideally we'd correct x and y scales individually, but because blur and
       * spread apply to both we have to take a scale average and apply that instead.
       * We could potentially improve the outcome of this by incorporating the ratio between
       * the two scales.
       */
      var averageScale = mix(xScale, yScale, 0.5);
      // Blur
      if (typeof shadow[2 + offset] === "number")
          shadow[2 + offset] /= averageScale;
      // Spread
      if (typeof shadow[3 + offset] === "number")
          shadow[3 + offset] /= averageScale;
      var output = template(shadow);
      if (containsCSSVariables) {
          var i_1 = 0;
          output = output.replace(varToken, function () {
              var cssVariable = cssVariables[i_1];
              i_1++;
              return cssVariable;
          });
      }
      return output;
  }
  var borderCorrectionDefinition = {
      process: correctBorderRadius,
  };
  var valueScaleCorrection = {
      borderRadius: __assign(__assign({}, borderCorrectionDefinition), { applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
          ] }),
      borderTopLeftRadius: borderCorrectionDefinition,
      borderTopRightRadius: borderCorrectionDefinition,
      borderBottomLeftRadius: borderCorrectionDefinition,
      borderBottomRightRadius: borderCorrectionDefinition,
      boxShadow: {
          process: correctBoxShadow,
      },
  };

  /**
   * Build style and CSS variables
   *
   * This function converts a Motion style prop:
   *
   * { x: 100, width: 100, originX: 0.5 }
   *
   * Into an object with default value types applied and default
   * transform order set:
   *
   * {
   *   transform: 'translateX(100px) translateZ(0)`,
   *   width: '100px',
   *   transformOrigin: '50% 50%'
   * }
   *
   * Styles are saved to `style` and CSS vars to `vars`.
   *
   * This function works with mutative data structures.
   */
  function buildHTMLStyles(latest, style, vars, transform, transformOrigin, transformKeys, _a, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
      var enableHardwareAcceleration = _a.enableHardwareAcceleration, transformTemplate = _a.transformTemplate, allowTransformNone = _a.allowTransformNone;
      // Empty the transformKeys array. As we're throwing out refs to its items
      // this might not be as cheap as suspected. Maybe using the array as a buffer
      // with a manual incrementation would be better.
      transformKeys.length = 0;
      // Track whether we encounter any transform or transformOrigin values.
      var hasTransform = false;
      var hasTransformOrigin = false;
      // Does the calculated transform essentially equal "none"?
      var transformIsNone = true;
      /**
       * Loop over all our latest animated values and decide whether to handle them
       * as a style or CSS variable. Transforms and transform origins are kept seperately
       * for further processing
       */
      for (var key in latest) {
          var value = latest[key];
          // Convert the value to its default value type, ie 0 -> "0px"
          var valueType = getDefaultValueType(key);
          var valueAsType = getValueAsType(value, valueType);
          if (isTransformProp(key)) {
              // If this is a transform, flag and enable further transform processing
              hasTransform = true;
              transform[key] = valueAsType;
              transformKeys.push(key);
              if (!transformIsNone)
                  continue;
              // If all the transform keys we've so far encountered are their default value
              // then check to see if this one isn't
              var defaultValue = valueType.default !== undefined ? valueType.default : 0;
              if (value !== defaultValue)
                  transformIsNone = false;
          }
          else if (isTransformOriginProp(key)) {
              // If this is a transform origin, flag and enable further transform-origin processing
              transformOrigin[key] = valueAsType;
              hasTransformOrigin = true;
          }
          else if (key !== "transform" || typeof value !== "function") {
              // Handle all remaining values. Decide which map to save to depending
              // on whether this is a CSS variable
              var bucket = isCSSVariable(key) ? vars : style;
              // If we need to perform scale correction, and we have a handler for this
              // value type (ie borderRadius), perform it
              if (isLayoutProjectionEnabled && valueScaleCorrection[key]) {
                  var corrected = valueScaleCorrection[key].process(value, targetBox, delta, treeScale);
                  /**
                   * Scale-correctable values can define a number of other values to break
                   * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                   */
                  var applyTo = valueScaleCorrection[key].applyTo;
                  if (applyTo) {
                      var num = applyTo.length;
                      for (var i = 0; i < num; i++) {
                          bucket[applyTo[i]] = corrected;
                      }
                  }
                  else {
                      bucket[key] = corrected;
                  }
              }
              else {
                  bucket[key] = valueAsType;
              }
          }
      }
      /**
       * Build transform and transformOrigin. If we're performing layout projection these need
       * to be based off the deltaFinal data. Any user-set origins will have been pre-baked
       * into the deltaFinal.
       */
      if (isLayoutProjectionEnabled) {
          style.transform = buildLayoutProjectionTransform(deltaFinal, treeScale, hasTransform ? transform : undefined);
          if (transformTemplate) {
              style.transform = transformTemplate(transform, style.transform);
          }
          style.transformOrigin = buildLayoutProjectionTransformOrigin(deltaFinal);
      }
      else {
          if (hasTransform) {
              style.transform = buildTransform(transform, transformKeys, transformTemplate, transformIsNone, enableHardwareAcceleration, allowTransformNone);
          }
          if (hasTransformOrigin) {
              style.transformOrigin = buildTransformOrigin(transformOrigin);
          }
      }
  }

  /**
   * Reset an axis to the provided origin box.
   *
   * This is a mutative operation.
   */
  function resetAxis(axis, originAxis) {
      axis.min = originAxis.min;
      axis.max = originAxis.max;
  }
  /**
   * Reset a box to the provided origin box.
   *
   * This is a mutative operation.
   */
  function resetBox(box, originBox) {
      resetAxis(box.x, originBox.x);
      resetAxis(box.y, originBox.y);
  }
  /**
   * Scales a point based on a factor and an originPoint
   */
  function scalePoint(point, scale, originPoint) {
      var distanceFromOrigin = point - originPoint;
      var scaled = scale * distanceFromOrigin;
      return originPoint + scaled;
  }
  /**
   * Applies a translate/scale delta to a point
   */
  function applyPointDelta(point, translate, scale, originPoint, boxScale) {
      if (boxScale !== undefined) {
          point = scalePoint(point, boxScale, originPoint);
      }
      return scalePoint(point, scale, originPoint) + translate;
  }
  /**
   * Applies a translate/scale delta to an axis
   */
  function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
      if (translate === void 0) { translate = 0; }
      if (scale === void 0) { scale = 1; }
      axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
      axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
  }
  /**
   * Applies a translate/scale delta to a box
   */
  function applyBoxDelta(box, _a) {
      var x = _a.x, y = _a.y;
      applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
      applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  /**
   * Apply a transform to an axis from the latest resolved motion values.
   * This function basically acts as a bridge between a flat motion value map
   * and applyAxisDelta
   */
  function applyAxisTransforms(final, axis, transforms, _a) {
      var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
      // Copy the current axis to the final axis before mutation
      final.min = axis.min;
      final.max = axis.max;
      var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
      var originPoint = mix(axis.min, axis.max, axisOrigin);
      // Apply the axis delta to the final axis
      applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
  }
  /**
   * The names of the motion values we want to apply as translation, scale and origin.
   */
  var xKeys = ["x", "scaleX", "originX"];
  var yKeys = ["y", "scaleY", "originY"];
  /**
   * Apply a transform to a box from the latest resolved motion values.
   */
  function applyBoxTransforms(finalBox, box, transforms) {
      applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
      applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
  }
  /**
   * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
   */
  function removePointDelta(point, translate, scale, originPoint, boxScale) {
      point -= translate;
      point = scalePoint(point, 1 / scale, originPoint);
      if (boxScale !== undefined) {
          point = scalePoint(point, 1 / boxScale, originPoint);
      }
      return point;
  }
  /**
   * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
   */
  function removeAxisDelta(axis, translate, scale, origin, boxScale) {
      if (translate === void 0) { translate = 0; }
      if (scale === void 0) { scale = 1; }
      if (origin === void 0) { origin = 0.5; }
      var originPoint = mix(axis.min, axis.max, origin) - translate;
      axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
      axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
  }
  /**
   * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
   * and acts as a bridge between motion values and removeAxisDelta
   */
  function removeAxisTransforms(axis, transforms, _a) {
      var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
      removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
  }
  /**
   * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
   * and acts as a bridge between motion values and removeAxisDelta
   */
  function removeBoxTransforms(box, transforms) {
      removeAxisTransforms(box.x, transforms, xKeys);
      removeAxisTransforms(box.y, transforms, yKeys);
  }
  /**
   * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
   * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
   *
   * This is the final nested loop within HTMLVisualElement.updateLayoutDelta
   */
  function applyTreeDeltas(box, treeScale, treePath) {
      var treeLength = treePath.length;
      if (!treeLength)
          return;
      // Reset the treeScale
      treeScale.x = treeScale.y = 1;
      for (var i = 0; i < treeLength; i++) {
          var delta = treePath[i].delta;
          // Incoporate each ancestor's scale into a culmulative treeScale for this component
          treeScale.x *= delta.x.scale;
          treeScale.y *= delta.y.scale;
          // Apply each ancestor's calculated delta into this component's recorded layout box
          applyBoxDelta(box, delta);
      }
  }

  var clampProgress = function (v) { return clamp$2(0, 1, v); };
  /**
   * Returns true if the provided value is within maxDistance of the provided target
   */
  function isNear(value, target, maxDistance) {
      if (target === void 0) { target = 0; }
      if (maxDistance === void 0) { maxDistance = 0.01; }
      return distance(value, target) < maxDistance;
  }
  function calcLength(axis) {
      return axis.max - axis.min;
  }
  /**
   * Calculate a transform origin relative to the source axis, between 0-1, that results
   * in an asthetically pleasing scale/transform needed to project from source to target.
   */
  function calcOrigin(source, target) {
      var origin = 0.5;
      var sourceLength = calcLength(source);
      var targetLength = calcLength(target);
      if (targetLength > sourceLength) {
          origin = progress(target.min, target.max - sourceLength, source.min);
      }
      else if (sourceLength > targetLength) {
          origin = progress(source.min, source.max - targetLength, target.min);
      }
      return clampProgress(origin);
  }
  /**
   * Update the AxisDelta with a transform that projects source into target.
   *
   * The transform `origin` is optional. If not provided, it'll be automatically
   * calculated based on the relative positions of the two bounding boxes.
   */
  function updateAxisDelta(delta, source, target, origin) {
      delta.origin = origin === undefined ? calcOrigin(source, target) : origin;
      delta.originPoint = mix(source.min, source.max, delta.origin);
      delta.scale = calcLength(target) / calcLength(source);
      if (isNear(delta.scale, 1, 0.0001))
          delta.scale = 1;
      delta.translate =
          mix(target.min, target.max, delta.origin) - delta.originPoint;
      if (isNear(delta.translate))
          delta.translate = 0;
  }
  /**
   * Update the BoxDelta with a transform that projects the source into the target.
   *
   * The transform `origin` is optional. If not provided, it'll be automatically
   * calculated based on the relative positions of the two bounding boxes.
   */
  function updateBoxDelta(delta, source, target, origin) {
      updateAxisDelta(delta.x, source.x, target.x, origin);
      updateAxisDelta(delta.y, source.y, target.y, origin);
  }

  // Call a handler once for each axis
  function eachAxis(handler) {
      return [handler("x"), handler("y")];
  }

  /**
   * Measure and return the element bounding box.
   *
   * We convert the box into an AxisBox2D to make it easier to work with each axis
   * individually and programmatically.
   *
   * This function optionally accepts a transformPagePoint function which allows us to compensate
   * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
   */
  function getBoundingBox(element, transformPagePoint) {
      var box = element.getBoundingClientRect();
      return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
  }

  var isKeyframesTarget = function (v) {
      return Array.isArray(v);
  };

  var positionalKeys = new Set([
      "width",
      "height",
      "top",
      "left",
      "right",
      "bottom",
      "x",
      "y",
  ]);
  var isPositionalKey = function (key) { return positionalKeys.has(key); };
  var hasPositionalKey = function (target) {
      return Object.keys(target).some(isPositionalKey);
  };
  var setAndResetVelocity = function (value, to) {
      // Looks odd but setting it twice doesn't render, it'll just
      // set both prev and current to the latest value
      value.set(to, false);
      value.set(to);
  };
  var isNumOrPxType = function (v) {
      return v === number || v === px;
  };
  var BoundingBoxDimension;
  (function (BoundingBoxDimension) {
      BoundingBoxDimension["width"] = "width";
      BoundingBoxDimension["height"] = "height";
      BoundingBoxDimension["left"] = "left";
      BoundingBoxDimension["right"] = "right";
      BoundingBoxDimension["top"] = "top";
      BoundingBoxDimension["bottom"] = "bottom";
  })(BoundingBoxDimension || (BoundingBoxDimension = {}));
  var getPosFromMatrix = function (matrix, pos) {
      return parseFloat(matrix.split(", ")[pos]);
  };
  var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
      var transform = _a.transform;
      if (transform === "none" || !transform)
          return 0;
      var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
      if (matrix3d) {
          return getPosFromMatrix(matrix3d[1], pos3);
      }
      else {
          var matrix = transform.match(/^matrix\((.+)\)$/);
          if (matrix) {
              return getPosFromMatrix(matrix[1], pos2);
          }
          else {
              return 0;
          }
      }
  }; };
  var transformKeys = new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformProps.filter(function (key) { return !transformKeys.has(key); });
  function removeNonTranslationalTransform(visualElement) {
      var removedTransforms = [];
      nonTranslationalTransformKeys.forEach(function (key) {
          var value = visualElement.getValue(key);
          if (value !== undefined) {
              removedTransforms.push([key, value.get()]);
              value.set(key.startsWith("scale") ? 1 : 0);
          }
      });
      // Apply changes to element before measurement
      if (removedTransforms.length)
          visualElement.render();
      return removedTransforms;
  }
  var positionalValues = {
      // Dimensions
      width: function (_a) {
          var x = _a.x;
          return x.max - x.min;
      },
      height: function (_a) {
          var y = _a.y;
          return y.max - y.min;
      },
      top: function (_bbox, _a) {
          var top = _a.top;
          return parseFloat(top);
      },
      left: function (_bbox, _a) {
          var left = _a.left;
          return parseFloat(left);
      },
      bottom: function (_a, _b) {
          var y = _a.y;
          var top = _b.top;
          return parseFloat(top) + (y.max - y.min);
      },
      right: function (_a, _b) {
          var x = _a.x;
          var left = _b.left;
          return parseFloat(left) + (x.max - x.min);
      },
      // Transform
      x: getTranslateFromMatrix(4, 13),
      y: getTranslateFromMatrix(5, 14),
  };
  var convertChangedValueTypes = function (target, visualElement, changedKeys) {
      var originBbox = visualElement.getBoundingBox();
      var elementComputedStyle = visualElement.getComputedStyle();
      var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
      var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
      // If the element is currently set to display: "none", make it visible before
      // measuring the target bounding box
      if (display === "none") {
          visualElement.setStaticValues("display", target.display || "block");
      }
      // Apply the latest values (as set in checkAndConvertChangedValueTypes)
      visualElement.render();
      var targetBbox = visualElement.getBoundingBox();
      changedKeys.forEach(function (key) {
          // Restore styles to their **calculated computed style**, not their actual
          // originally set style. This allows us to animate between equivalent pixel units.
          var value = visualElement.getValue(key);
          setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
          target[key] = positionalValues[key](targetBbox, elementComputedStyle);
      });
      return target;
  };
  var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
      if (origin === void 0) { origin = {}; }
      if (transitionEnd === void 0) { transitionEnd = {}; }
      target = __assign({}, target);
      transitionEnd = __assign({}, transitionEnd);
      var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
      // We want to remove any transform values that could affect the element's bounding box before
      // it's measured. We'll reapply these later.
      var removedTransformValues = [];
      var hasAttemptedToRemoveTransformValues = false;
      var changedValueTypeKeys = [];
      targetPositionalKeys.forEach(function (key) {
          var value = visualElement.getValue(key);
          if (!visualElement.hasValue(key))
              return;
          var from = origin[key];
          var to = target[key];
          var fromType = findDimensionValueType(from);
          var toType;
          // TODO: The current implementation of this basically throws an error
          // if you try and do value conversion via keyframes. There's probably
          // a way of doing this but the performance implications would need greater scrutiny,
          // as it'd be doing multiple resize-remeasure operations.
          if (isKeyframesTarget(to)) {
              var numKeyframes = to.length;
              for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                  if (!toType) {
                      toType = findDimensionValueType(to[i]);
                      invariant$1(toType === fromType ||
                          (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                  }
                  else {
                      invariant$1(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                  }
              }
          }
          else {
              toType = findDimensionValueType(to);
          }
          if (fromType !== toType) {
              // If they're both just number or px, convert them both to numbers rather than
              // relying on resize/remeasure to convert (which is wasteful in this situation)
              if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                  var current = value.get();
                  if (typeof current === "string") {
                      value.set(parseFloat(current));
                  }
                  if (typeof to === "string") {
                      target[key] = parseFloat(to);
                  }
                  else if (Array.isArray(to) && toType === px) {
                      target[key] = to.map(parseFloat);
                  }
              }
              else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                  (from === 0 || to === 0)) {
                  // If one or the other value is 0, it's safe to coerce it to the
                  // type of the other without measurement
                  if (from === 0) {
                      value.set(toType.transform(from));
                  }
                  else {
                      target[key] = fromType.transform(to);
                  }
              }
              else {
                  // If we're going to do value conversion via DOM measurements, we first
                  // need to remove non-positional transform values that could affect the bbox measurements.
                  if (!hasAttemptedToRemoveTransformValues) {
                      removedTransformValues = removeNonTranslationalTransform(visualElement);
                      hasAttemptedToRemoveTransformValues = true;
                  }
                  changedValueTypeKeys.push(key);
                  transitionEnd[key] =
                      transitionEnd[key] !== undefined
                          ? transitionEnd[key]
                          : target[key];
                  setAndResetVelocity(value, to);
              }
          }
      });
      if (changedValueTypeKeys.length) {
          var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
          // If we removed transform values, reapply them before the next render
          if (removedTransformValues.length) {
              removedTransformValues.forEach(function (_a) {
                  var _b = __read(_a, 2), key = _b[0], value = _b[1];
                  visualElement.getValue(key).set(value);
              });
          }
          // Reapply original values
          visualElement.render();
          return { target: convertedTarget, transitionEnd: transitionEnd };
      }
      else {
          return { target: target, transitionEnd: transitionEnd };
      }
  };
  /**
   * Convert value types for x/y/width/height/top/left/bottom/right
   *
   * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
   *
   * @internal
   */
  function unitConversion(visualElement, target, origin, transitionEnd) {
      return hasPositionalKey(target)
          ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
          : { target: target, transitionEnd: transitionEnd };
  }

  /**
   * Parse a DOM variant to make it animatable. This involves resolving CSS variables
   * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
   */
  var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
      var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
      target = resolved.target;
      transitionEnd = resolved.transitionEnd;
      return unitConversion(visualElement, target, origin, transitionEnd);
  };

  /**
   * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
   */
  var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };
  var resolveFinalValueInKeyframes = function (v) {
      // TODO maybe throw if v.length - 1 is placeholder token?
      return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  };

  /**
   * Decides if the supplied variable is an array of variant labels
   */
  function isVariantLabels(v) {
      return Array.isArray(v);
  }
  /**
   * Decides if the supplied variable is variant label
   */
  function isVariantLabel(v) {
      return typeof v === "string" || isVariantLabels(v);
  }
  /**
   * Creates an object containing the latest state of every MotionValue on a VisualElement
   */
  function getCurrent(visualElement) {
      var current = {};
      visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
      return current;
  }
  /**
   * Creates an object containing the latest velocity of every MotionValue on a VisualElement
   */
  function getVelocity(visualElement) {
      var velocity = {};
      visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
      return velocity;
  }
  /**
   * Resovles a variant if it's a variant resolver
   */
  function resolveVariant(visualElement, definition, custom) {
      if (typeof definition === "string") {
          definition = visualElement.getVariant(definition);
      }
      return typeof definition === "function"
          ? definition(custom !== null && custom !== void 0 ? custom : visualElement.getVariantPayload(), getCurrent(visualElement), getVelocity(visualElement))
          : definition;
  }

  /**
   * Set VisualElement's MotionValue, creating a new MotionValue for it if
   * it doesn't exist.
   */
  function setMotionValue(visualElement, key, value) {
      if (visualElement.hasValue(key)) {
          visualElement.getValue(key).set(value);
      }
      else {
          visualElement.addValue(key, motionValue(value));
      }
  }
  function setTarget(visualElement, definition) {
      var resolved = resolveVariant(visualElement, definition);
      var _a = resolved
          ? visualElement.makeTargetAnimatable(resolved, false)
          : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b, _c = _a.transition, target = __rest(_a, ["transitionEnd", "transition"]);
      target = __assign(__assign({}, target), transitionEnd);
      for (var key in target) {
          var value = resolveFinalValueInKeyframes(target[key]);
          setMotionValue(visualElement, key, value);
      }
  }
  function setVariants(visualElement, variantLabels) {
      var reversedLabels = __spread(variantLabels).reverse();
      reversedLabels.forEach(function (key) {
          var _a;
          setTarget(visualElement, visualElement.getVariant(key));
          (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
              setVariants(child, variantLabels);
          });
      });
  }
  function setValues(visualElement, definition) {
      if (Array.isArray(definition)) {
          return setVariants(visualElement, definition);
      }
      else if (typeof definition === "string") {
          return setVariants(visualElement, [definition]);
      }
      else {
          setTarget(visualElement, definition);
      }
  }
  function checkTargetForNewValues(visualElement, target, origin) {
      var _a, _b;
      var _c;
      var newValueKeys = Object.keys(target).filter(function (key) { return !visualElement.hasValue(key); });
      var numNewValues = newValueKeys.length;
      if (!numNewValues)
          return;
      for (var i = 0; i < numNewValues; i++) {
          var key = newValueKeys[i];
          var targetValue = target[key];
          var value = null;
          // If this is a keyframes value, we can attempt to use the first value in the
          // array as that's going to be the first value of the animation anyway
          if (Array.isArray(targetValue)) {
              value = targetValue[0];
          }
          // If it isn't a keyframes or the first keyframes value was set as `null`, read the
          // value from the DOM. It might be worth investigating whether to check props (for SVG)
          // or props.style (for HTML) if the value exists there before attempting to read.
          if (value === null) {
              var readValue = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readNativeValue(key);
              value = readValue !== undefined ? readValue : target[key];
              invariant$1(value !== null, "No initial value for \"" + key + "\" can be inferred. Ensure an initial value for \"" + key + "\" is defined on the component.");
          }
          if (typeof value === "string" && isNumericalString(value)) {
              // If this is a number read as a string, ie "0" or "200", convert it to a number
              value = parseFloat(value);
          }
          else if (!findValueType(value) && complex.test(targetValue)) {
              // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
              value = complex.getAnimatableNone(targetValue);
          }
          visualElement.addValue(key, motionValue(value));
          (_b = (_c = origin)[key]) !== null && _b !== void 0 ? _b : (_c[key] = value);
          visualElement.baseTarget[key] = value;
      }
  }
  function getOriginFromTransition(key, transition) {
      if (!transition)
          return;
      var valueTransition = transition[key] || transition["default"] || transition;
      return valueTransition.from;
  }
  function getOrigin(target, transition, visualElement) {
      var _a, _b;
      var origin = {};
      for (var key in target) {
          origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
      }
      return origin;
  }

  var isMotionValue = function (value) {
      return value instanceof MotionValue;
  };

  /**
   * A VisualElement for HTMLElements
   */
  var HTMLVisualElement = /** @class */ (function (_super) {
      __extends(HTMLVisualElement, _super);
      function HTMLVisualElement() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           *
           */
          _this.defaultConfig = {
              enableHardwareAcceleration: true,
              allowTransformNone: true,
          };
          /**
           * A mutable record of styles we want to apply directly to the rendered Element
           * every frame. We use a mutable data structure to reduce GC during animations.
           */
          _this.style = {};
          /**
           * A record of styles we only want to apply via React. This gets set in useMotionValues
           * and applied in the render function. I'd prefer this to live somewhere else to decouple
           * VisualElement from React but works for now.
           */
          _this.reactStyle = {};
          /**
           * A mutable record of CSS variables we want to apply directly to the rendered Element
           * every frame. We use a mutable data structure to reduce GC during animations.
           */
          _this.vars = {};
          /**
           * A mutable record of transforms we want to apply directly to the rendered Element
           * every frame. We use a mutable data structure to reduce GC during animations.
           */
          _this.transform = {};
          /**
           * A mutable record of transform origins we want to apply directly to the rendered Element
           * every frame. We use a mutable data structure to reduce GC during animations.
           */
          _this.transformOrigin = {};
          /**
           * A mutable record of transform keys we want to apply to the rendered Element. We order
           * this to order transforms in the desired order. We use a mutable data structure to reduce GC during animations.
           */
          _this.transformKeys = [];
          _this.config = _this.defaultConfig;
          /**
           * ========================================
           * Layout
           * ========================================
           */
          _this.isLayoutProjectionEnabled = false;
          /**
           * A set of layout update event handlers. These are only called once all layouts have been read,
           * making it safe to perform DOM write operations.
           */
          _this.layoutUpdateListeners = new SubscriptionManager();
          _this.layoutMeasureListeners = new SubscriptionManager();
          _this.viewportBoxUpdateListeners = new SubscriptionManager();
          /**
           * Keep track of whether the viewport box has been updated since the last render.
           * If it has, we want to fire the onViewportBoxUpdate listener.
           */
          _this.hasViewportBoxUpdated = false;
          /**
           * The visual target we want to project our component into on a given frame
           * before applying transforms defined in `animate` or `style`.
           *
           * This is considered mutable to avoid object creation on each frame.
           */
          _this.targetBoxFinal = axisBox();
          /**
           * The overall scale of the local coordinate system as transformed by all parents
           * of this component. We use this for scale correction on our calculated layouts
           * and scale-affected values like `boxShadow`.
           *
           * This is considered mutable to avoid object creation on each frame.
           */
          _this.treeScale = { x: 1, y: 1 };
          /**
           * The delta between the boxCorrected and the desired
           * targetBox (before user-set transforms are applied). The calculated output will be
           * handed to the renderer and used as part of the style correction calculations, for
           * instance calculating how to display the desired border-radius correctly.
           *
           * This is considered mutable to avoid object creation on each frame.
           */
          _this.delta = delta();
          /**
           * The delta between the boxCorrected and the desired targetBoxFinal. The calculated
           * output will be handed to the renderer and used to project the boxCorrected into
           * the targetBoxFinal.
           *
           * This is considered mutable to avoid object creation on each frame.
           */
          _this.deltaFinal = delta();
          /**
           * The computed transform string to apply deltaFinal to the element. Currently this is only
           * being used to diff and decide whether to render on the current frame, but a minor optimisation
           * could be to provide this to the buildHTMLStyle function.
           */
          _this.deltaTransform = identityProjection;
          /**
           *
           */
          _this.stopLayoutAxisAnimation = {
              x: function () { },
              y: function () { },
          };
          _this.isTargetBoxLocked = false;
          _this.updateLayoutDelta = function () {
              _this.isLayoutProjectionEnabled && _this.box && _this.updateLayoutDeltas();
              /**
               * Ensure all children layouts are also updated.
               *
               * This uses a pre-bound function executor rather than a lamda to avoid creating a new function
               * multiple times per frame (source of mid-animation GC)
               */
              _this.children.forEach(fireUpdateLayoutDelta);
          };
          return _this;
      }
      /**
       * When a value is removed, we want to make sure it's removed from all rendered data structures.
       */
      HTMLVisualElement.prototype.removeValue = function (key) {
          _super.prototype.removeValue.call(this, key);
          delete this.vars[key];
          delete this.style[key];
      };
      /**
       * Empty the mutable data structures by re-creating them. We can do this every React render
       * as the comparative workload to the rest of the render is very low and this is also when
       * we want to reflect values that might have been removed by the render.
       */
      HTMLVisualElement.prototype.clean = function () {
          this.style = {};
          this.vars = {};
          this.transform = {};
      };
      HTMLVisualElement.prototype.updateConfig = function (config) {
          if (config === void 0) { config = {}; }
          this.config = __assign(__assign({}, this.defaultConfig), config);
      };
      /**
       * Read a value directly from the HTMLElement style.
       */
      HTMLVisualElement.prototype.read = function (key) {
          var computedStyle = this.getComputedStyle();
          return ((isCSSVariable(key)
              ? computedStyle.getPropertyValue(key)
              : computedStyle[key]) || 0);
      };
      HTMLVisualElement.prototype.addValue = function (key, value) {
          _super.prototype.addValue.call(this, key, value);
          // If we have rotate values we want to foce the layoutOrigin used in layout projection
          // to the center of the element.
          if (key.startsWith("rotate"))
              this.layoutOrigin = 0.5;
      };
      /**
       * Read a value directly from the HTMLElement in case it's not defined by a Motion
       * prop. If it's a transform, we just return a pre-defined default value as reading these
       * out of a matrix is either error-prone or can incur a big payload for little benefit.
       */
      HTMLVisualElement.prototype.readNativeValue = function (key) {
          if (isTransformProp(key)) {
              var defaultValueType = getDefaultValueType(key);
              return defaultValueType ? defaultValueType.default || 0 : 0;
          }
          else {
              return this.read(key);
          }
      };
      HTMLVisualElement.prototype.getBaseValue = function (key, props) {
          var _a;
          var style = (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
          return style !== undefined && !isMotionValue(style)
              ? style
              : _super.prototype.getBaseValue.call(this, key, props);
      };
      /**
       * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
       * can be animated by Motion.
       */
      HTMLVisualElement.prototype.makeTargetAnimatable = function (_a, parseDOMValues) {
          if (parseDOMValues === void 0) { parseDOMValues = true; }
          var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
          var transformValues = this.config.transformValues;
          var origin = getOrigin(target, transition || {}, this);
          /**
           * If Framer has provided a function to convert `Color` etc value types, convert them
           */
          if (transformValues) {
              if (transitionEnd)
                  transitionEnd = transformValues(transitionEnd);
              if (target)
                  target = transformValues(target);
              if (origin)
                  origin = transformValues(origin);
          }
          if (parseDOMValues) {
              checkTargetForNewValues(this, target, origin);
              var parsed = parseDomVariant(this, target, origin, transitionEnd);
              transitionEnd = parsed.transitionEnd;
              target = parsed.target;
          }
          return __assign({ transition: transition,
              transitionEnd: transitionEnd }, target);
      };
      HTMLVisualElement.prototype.enableLayoutProjection = function () {
          this.isLayoutProjectionEnabled = true;
      };
      HTMLVisualElement.prototype.hide = function () {
          if (this.isVisible === false)
              return;
          this.isVisible = false;
          this.scheduleRender();
      };
      HTMLVisualElement.prototype.show = function () {
          if (this.isVisible === true)
              return;
          this.isVisible = true;
          this.scheduleRender();
      };
      /**
       * Register an event listener to fire when the layout is updated. We might want to expose support
       * for this via a `motion` prop.
       */
      HTMLVisualElement.prototype.onLayoutUpdate = function (callback) {
          return this.layoutUpdateListeners.add(callback);
      };
      HTMLVisualElement.prototype.onLayoutMeasure = function (callback) {
          return this.layoutMeasureListeners.add(callback);
      };
      HTMLVisualElement.prototype.onViewportBoxUpdate = function (callback) {
          return this.viewportBoxUpdateListeners.add(callback);
      };
      /**
       * To be called when all layouts are successfully updated. In turn we can notify layoutUpdate
       * subscribers.
       */
      HTMLVisualElement.prototype.layoutReady = function (config) {
          this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, config);
      };
      /**
       * Measure and return the Element's bounding box. We convert it to a AxisBox2D
       * structure to make it easier to work on each individual axis generically.
       */
      HTMLVisualElement.prototype.getBoundingBox = function () {
          var transformPagePoint = this.config.transformPagePoint;
          return getBoundingBox(this.element, transformPagePoint);
      };
      HTMLVisualElement.prototype.getBoundingBoxWithoutTransforms = function () {
          var bbox = this.getBoundingBox();
          removeBoxTransforms(bbox, this.latest);
          return bbox;
      };
      /**
       * Return the computed style after a render.
       */
      HTMLVisualElement.prototype.getComputedStyle = function () {
          return window.getComputedStyle(this.element);
      };
      /**
       * Record the bounding box as it exists before a re-render.
       */
      HTMLVisualElement.prototype.snapshotBoundingBox = function () {
          this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
          /**
           * Update targetBox to match the prevViewportBox. This is just to ensure
           * that targetBox is affected by scroll in the same way as the measured box
           */
          this.rebaseTargetBox(false, this.prevViewportBox);
      };
      HTMLVisualElement.prototype.rebaseTargetBox = function (force, box) {
          var _this = this;
          if (force === void 0) { force = false; }
          if (box === void 0) { box = this.box; }
          var _a = this.getAxisProgress(), x = _a.x, y = _a.y;
          var shouldRebase = this.box &&
              !this.isTargetBoxLocked &&
              !x.isAnimating() &&
              !y.isAnimating();
          if (force || shouldRebase) {
              eachAxis(function (axis) {
                  var _a = box[axis], min = _a.min, max = _a.max;
                  _this.setAxisTarget(axis, min, max);
              });
          }
      };
      HTMLVisualElement.prototype.measureLayout = function () {
          var _this = this;
          this.box = this.getBoundingBox();
          this.boxCorrected = copyAxisBox(this.box);
          if (!this.targetBox)
              this.targetBox = copyAxisBox(this.box);
          this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box);
          sync.update(function () { return _this.rebaseTargetBox(); });
      };
      HTMLVisualElement.prototype.lockTargetBox = function () {
          this.isTargetBoxLocked = true;
      };
      HTMLVisualElement.prototype.unlockTargetBox = function () {
          this.stopLayoutAnimation();
          this.isTargetBoxLocked = false;
      };
      /**
       * Reset the transform on the current Element. This is called as part
       * of a batched process across the entire layout tree. To remove this write
       * cycle it'd be interesting to see if it's possible to "undo" all the current
       * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
       * works
       */
      HTMLVisualElement.prototype.resetTransform = function () {
          var transformTemplate = this.config.transformTemplate;
          this.element.style.transform = transformTemplate
              ? transformTemplate({}, "")
              : "none";
          // Ensure that whatever happens next, we restore our transform
          this.scheduleRender();
      };
      /**
       * Set new min/max boundaries to project an axis into
       */
      HTMLVisualElement.prototype.setAxisTarget = function (axis, min, max) {
          var targetAxis = this.targetBox[axis];
          targetAxis.min = min;
          targetAxis.max = max;
          // Flag that we want to fire the onViewportBoxUpdate event handler
          this.hasViewportBoxUpdated = true;
          this.rootParent.scheduleUpdateLayoutDelta();
      };
      HTMLVisualElement.prototype.getAxisProgress = function () {
          if (!this.axisProgress) {
              this.axisProgress = {
                  x: motionValue(0),
                  y: motionValue(0),
              };
          }
          return this.axisProgress;
      };
      /**
       *
       */
      HTMLVisualElement.prototype.startLayoutAxisAnimation = function (axis, transition) {
          var _this = this;
          var _a;
          var progress = this.getAxisProgress()[axis];
          var _b = this.targetBox[axis], min = _b.min, max = _b.max;
          var length = max - min;
          progress.clearListeners();
          progress.set(min);
          progress.set(min); // Set twice to hard-reset velocity
          progress.onChange(function (v) { return _this.setAxisTarget(axis, v, v + length); });
          return (_a = this.animateMotionValue) === null || _a === void 0 ? void 0 : _a.call(this, axis, progress, 0, transition);
      };
      HTMLVisualElement.prototype.stopLayoutAnimation = function () {
          var _this = this;
          eachAxis(function (axis) { return _this.getAxisProgress()[axis].stop(); });
      };
      HTMLVisualElement.prototype.withoutTransform = function (callback) {
          if (this.isLayoutProjectionEnabled) {
              this.resetTransform();
          }
          if (this.parent) {
              this.parent.withoutTransform(callback);
          }
          else {
              callback();
          }
          if (this.isLayoutProjectionEnabled) {
              this.element.style.transform = this.style.transform;
          }
      };
      /**
       * Update the layout deltas to reflect the relative positions of the layout
       * and the desired target box
       */
      HTMLVisualElement.prototype.updateLayoutDeltas = function () {
          /**
           * Reset the corrected box with the latest values from box, as we're then going
           * to perform mutative operations on it.
           */
          resetBox(this.boxCorrected, this.box);
          var prevTreeScaleX = this.treeScale.x;
          var prevTreeScaleY = this.treeScale.y;
          /**
           * Apply all the parent deltas to this box to produce the corrected box. This
           * is the layout box, as it will appear on screen as a result of the transforms of its parents.
           */
          applyTreeDeltas(this.boxCorrected, this.treeScale, this.treePath);
          /**
           * Update the delta between the corrected box and the target box before user-set transforms were applied.
           * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
           * for our layout reprojection, but still allow them to be scaled correctly by the user.
           * It might be that to simplify this we may want to accept that user-set scale is also corrected
           * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
           * to allow people to choose whether these styles are corrected based on just the
           * layout reprojection or the final bounding box.
           */
          updateBoxDelta(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin);
          /**
           * If we have a listener for the viewport box, fire it.
           */
          this.hasViewportBoxUpdated &&
              this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta);
          this.hasViewportBoxUpdated = false;
          /**
           * Ensure this element renders on the next frame if the projection transform has changed.
           */
          var deltaTransform = buildLayoutProjectionTransform(this.delta, this.treeScale);
          if (deltaTransform !== this.deltaTransform ||
              // Also compare calculated treeScale, for values that rely on only this for scale correction.
              prevTreeScaleX !== this.treeScale.x ||
              prevTreeScaleY !== this.treeScale.y) {
              this.scheduleRender();
          }
          this.deltaTransform = deltaTransform;
      };
      HTMLVisualElement.prototype.updateTransformDeltas = function () {
          if (!this.isLayoutProjectionEnabled || !this.box)
              return;
          /**
           * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
           * This is the final box that we will then project into by calculating a transform delta and
           * applying it to the corrected box.
           */
          applyBoxTransforms(this.targetBoxFinal, this.targetBox, this.latest);
          /**
           * Update the delta between the corrected box and the final target box, after
           * user-set transforms are applied to it. This will be used by the renderer to
           * create a transform style that will reproject the element from its actual layout
           * into the desired bounding box.
           */
          updateBoxDelta(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin);
      };
      /**
       * ========================================
       * Build & render
       * ========================================
       */
      /**
       * Build a style prop using the latest resolved MotionValues
       */
      HTMLVisualElement.prototype.build = function () {
          this.updateTransformDeltas();
          if (this.isVisible !== undefined) {
              this.style.visibility = this.isVisible ? "visible" : "hidden";
          }
          buildHTMLStyles(this.latest, this.style, this.vars, this.transform, this.transformOrigin, this.transformKeys, this.config, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
      };
      /**
       * Render the Element by rebuilding and applying the latest styles and vars.
       */
      HTMLVisualElement.prototype.render = function () {
          // Rebuild the latest animated values into style and vars caches.
          this.build();
          // Directly assign style into the Element's style prop. In tests Object.assign is the
          // fastest way to assign styles.
          Object.assign(this.element.style, this.style);
          // Loop over any CSS variables and assign those.
          for (var key in this.vars) {
              this.element.style.setProperty(key, this.vars[key]);
          }
      };
      return HTMLVisualElement;
  }(VisualElement));
  /**
   * Pre-bound version of updateLayoutDelta so we're not creating a new function multiple
   * times per frame.
   */
  var fireUpdateLayoutDelta = function (child) {
      return child.updateLayoutDelta();
  };

  /**
   * Creates a constant value over the lifecycle of a component.
   *
   * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
   * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
   * you can ensure that initialisers don't execute twice or more.
   */
  function useConstant(init) {
      var ref = React.useRef(null);
      if (ref.current === null) {
          ref.current = init();
      }
      return ref.current;
  }

  function calcOrigin$1(origin, offset, size) {
      return typeof origin === "string"
          ? origin
          : px.transform(offset + size * origin);
  }
  /**
   * The SVG transform origin defaults are different to CSS and is less intuitive,
   * so we use the measured dimensions of the SVG to reconcile these.
   */
  function calcSVGTransformOrigin(dimensions, originX, originY) {
      var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
      var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
      return pxOriginX + " " + pxOriginY;
  }

  // Convert a progress 0-1 to a pixels value based on the provided length
  var progressToPixels = function (progress, length) {
      return px.transform(progress * length);
  };
  var dashKeys = {
      offset: "stroke-dashoffset",
      array: "stroke-dasharray",
  };
  var camelKeys = {
      offset: "strokeDashoffset",
      array: "strokeDasharray",
  };
  /**
   * Build SVG path properties. Uses the path's measured length to convert
   * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
   * and stroke-dasharray attributes.
   *
   * This function is mutative to reduce per-frame GC.
   */
  function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
      if (spacing === void 0) { spacing = 1; }
      if (offset === void 0) { offset = 0; }
      if (useDashCase === void 0) { useDashCase = true; }
      // We use dash case when setting attributes directly to the DOM node and camel case
      // when defining props on a React component.
      var keys = useDashCase ? dashKeys : camelKeys;
      // Build the dash offset
      attrs[keys.offset] = progressToPixels(-offset, totalLength);
      // Build the dash array
      var pathLength = progressToPixels(length, totalLength);
      var pathSpacing = progressToPixels(spacing, totalLength);
      attrs[keys.array] = pathLength + " " + pathSpacing;
  }

  var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
  /**
   * Build SVG visual attrbutes, like cx and style.transform
   */
  function buildSVGAttrs(_a, style, vars, attrs, transform, transformOrigin, transformKeys, config, dimensions, totalPathLength, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
      var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
      // This is object creation, which we try to avoid per-frame.
      latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
      /**
       * With SVG we treat all animated values as attributes rather than CSS, so we build into attrs
       */
      buildHTMLStyles(latest, attrs, vars, transform, transformOrigin, transformKeys, config, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox);
      /**
       * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
       * and copy it into style.
       */
      if (attrs.transform) {
          style.transform = attrs.transform;
          delete attrs.transform;
      }
      // Parse transformOrigin
      if (originX !== undefined || originY !== undefined || style.transform) {
          style.transformOrigin = calcSVGTransformOrigin(dimensions || unmeasured, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
      }
      // Treat x/y not as shortcuts but as actual attributes
      if (attrX !== undefined)
          attrs.x = attrX;
      if (attrY !== undefined)
          attrs.y = attrY;
      // Build SVG path if one has been measured
      if (totalPathLength !== undefined && pathLength !== undefined) {
          buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
      }
      return attrs;
  }

  /**
   * A set of attribute names that are always read/written as camel case.
   */
  var camelCaseAttributes = new Set([
      "baseFrequency",
      "diffuseConstant",
      "kernelMatrix",
      "kernelUnitLength",
      "keySplines",
      "keyTimes",
      "limitingConeAngle",
      "markerHeight",
      "markerWidth",
      "numOctaves",
      "targetX",
      "targetY",
      "surfaceScale",
      "specularConstant",
      "specularExponent",
      "stdDeviation",
      "tableValues",
      "viewBox",
  ]);

  var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
  var REPLACE_TEMPLATE = "$1-$2";
  /**
   * Convert camelCase to dash-case properties.
   */
  var camelToDash = function (str) {
      return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
  };

  /**
   * A VisualElement for SVGElements. Inherits from and extends HTMLVisualElement as the two
   * share data structures.
   */
  var SVGVisualElement = /** @class */ (function (_super) {
      __extends(SVGVisualElement, _super);
      function SVGVisualElement() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * A mutable record of attributes we want to apply directly to the rendered Element
           * every frame. We use a mutable data structure to reduce GC during animations.
           */
          _this.attrs = {};
          /**
           * We disable hardware acceleration for SVG transforms as they're not currently able to be accelerated.
           */
          _this.defaultConfig = {
              enableHardwareAcceleration: false,
          };
          /**
           * Without duplicating this call from HTMLVisualElement we end up with HTMLVisualElement.defaultConfig
           * being assigned to config
           */
          _this.config = _this.defaultConfig;
          return _this;
      }
      /**
       * Measure the SVG element on mount. This can affect page rendering so there might be a
       * better time to perform this - for instance dynamically only if there's a transform-origin dependent
       * transform being set (like rotate)
       */
      SVGVisualElement.prototype.mount = function (element) {
          _super.prototype.mount.call(this, element);
          this.measure();
      };
      /**
       * Update the SVG dimensions and path length
       */
      SVGVisualElement.prototype.measure = function () {
          var _this = this;
          try {
              this.dimensions =
                  typeof this.element.getBBox ===
                      "function"
                      ? this.element.getBBox()
                      : this.element.getBoundingClientRect();
          }
          catch (e) {
              // Most likely trying to measure an unrendered element under Firefox
              this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
          if (isPath(this.element)) {
              this.totalPathLength = this.element.getTotalLength();
          }
          /**
           * Ensure we render the element as soon as possible to reflect the measured dimensions.
           * Preferably this would happen synchronously but we put it in rAF to prevent layout thrashing.
           */
          sync.render(function () { return _this.render(); });
      };
      SVGVisualElement.prototype.getBaseValue = function (key, props) {
          var prop = props[key];
          return prop !== undefined && !isMotionValue(prop)
              ? prop
              : _super.prototype.getBaseValue.call(this, key, props);
      };
      /**
       * Empty the mutable data structures in case attrs have been removed between renders.
       */
      SVGVisualElement.prototype.clean = function () {
          _super.prototype.clean.call(this);
          this.attrs = {};
      };
      /**
       * Read an attribute directly from the SVGElement
       */
      SVGVisualElement.prototype.read = function (key) {
          key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
          return this.element.getAttribute(key);
      };
      SVGVisualElement.prototype.build = function () {
          this.updateTransformDeltas();
          buildSVGAttrs(this.latest, this.style, this.vars, this.attrs, this.transform, this.transformOrigin, this.transformKeys, this.config, this.dimensions, this.totalPathLength, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
      };
      SVGVisualElement.prototype.render = function () {
          // Update HTML styles and CSS variables
          _super.prototype.render.call(this);
          // Loop through attributes and apply them to the SVGElement
          for (var key in this.attrs) {
              this.element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, this.attrs[key]);
          }
      };
      return SVGVisualElement;
  }(HTMLVisualElement));
  function isPath(element) {
      return element.tagName === "path";
  }

  /**
   * @internal
   */
  /**
   * @internal
   */
  var svgElements = [
      "animate",
      "circle",
      "clipPath",
      "defs",
      "desc",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "switch",
      "symbol",
      "text",
      "textPath",
      "tspan",
      "use",
      "view",
  ];

  var svgTagNames = new Set(svgElements);
  /**
   * Determine whether this is a HTML or SVG component based on if the provided
   * Component is a string and a recognised SVG tag. A potentially better way to
   * do this would be to offer a `motion.customSVG` function and determine this
   * when we generate the `motion.circle` etc components.
   */
  function isSVGComponent(Component) {
      return typeof Component === "string" && svgTagNames.has(Component);
  }

  /**
   * @public
   */
  var PresenceContext = React.createContext(null);

  var MotionContext = React.createContext({
      variantContext: {},
  });
  function useVariantContext() {
      return React.useContext(MotionContext).variantContext;
  }
  function useVisualElementContext() {
      return React.useContext(MotionContext).visualElement;
  }

  /**
   * @internal
   */
  var LayoutGroupContext = React.createContext(null);

  /**
   * DOM-flavoured variation of the useVisualElement hook. Used to create either a HTMLVisualElement
   * or SVGVisualElement for the component.
   *
   */
  var useDomVisualElement = function (Component, props, isStatic, ref) {
      var parent = useVisualElementContext();
      var visualElement = useConstant(function () {
          var DOMVisualElement = isSVGComponent(Component)
              ? SVGVisualElement
              : HTMLVisualElement;
          return new DOMVisualElement(parent, ref);
      });
      /**
       * If this is a static component, for instance on the Framer canvas, we essentially want to
       * treat it as a new component every render.
       * TODO: This shouldn't live in a DOM-specific hook but there'll be a better sense of where this
       * and much of this hook should live when creating a new type of VisualElement (e.g Three.js).
       */
      if (isStatic) {
          visualElement.values.clear();
          visualElement.latest = {};
      }
      visualElement.updateConfig(__assign(__assign(__assign({}, visualElement.config), { enableHardwareAcceleration: !isStatic }), props));
      var layoutGroupId = React.useContext(LayoutGroupContext);
      visualElement.layoutId =
          layoutGroupId && props.layoutId
              ? layoutGroupId + "-" + props.layoutId
              : props.layoutId;
      var presenceContext = React.useContext(PresenceContext);
      /**
       * Update VisualElement with presence data.
       */
      var isPresent = presenceContext === null ? true : presenceContext.isPresent;
      visualElement.isPresent =
          props.isPresent !== undefined ? props.isPresent : isPresent;
      /**
       *
       */
      var presenceId = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id;
      visualElement.isPresenceRoot = !parent || parent.presenceId !== presenceId;
      /**
       * TODO: Investigate if we need this
       */
      React.useEffect(function () {
          if (props.onViewportBoxUpdate) {
              return visualElement.onViewportBoxUpdate(props.onViewportBoxUpdate);
          }
      }, [props.onViewportBoxUpdate]);
      return visualElement;
  };

  /**
   * @public
   */
  var MotionConfigContext = React.createContext({
      transformPagePoint: function (p) { return p; },
      features: [],
      isStatic: false,
  });

  function useUnmountEffect(callback) {
      return React.useEffect(function () { return function () { return callback(); }; }, []);
  }

  function addDomEvent(target, eventName, handler, options) {
      target.addEventListener(eventName, handler, options);
      return function () { return target.removeEventListener(eventName, handler, options); };
  }
  /**
   * Attaches an event listener directly to the provided DOM element.
   *
   * Bypassing React's event system can be desirable, for instance when attaching non-passive
   * event handlers.
   *
   * ```jsx
   * const ref = useRef(null)
   *
   * useDomEvent(ref, 'wheel', onWheel, { passive: false })
   *
   * return <div ref={ref} />
   * ```
   *
   * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
   * @param eventName - Name of the event you want listen for.
   * @param handler - Function to fire when receiving the event.
   * @param options - Options to pass to `Event.addEventListener`.
   *
   * @public
   */
  function useDomEvent(ref, eventName, handler, options) {
      React.useEffect(function () {
          var element = ref.current;
          if (handler && element) {
              return addDomEvent(element, eventName, handler, options);
          }
      }, [ref, eventName, handler, options]);
  }

  function isMouseEvent(event) {
      // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
      if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
          return !!(event.pointerType === "mouse");
      }
      return event instanceof MouseEvent;
  }
  function isTouchEvent(event) {
      var hasTouches = !!event.touches;
      return hasTouches;
  }

  /**
   * Filters out events not attached to the primary pointer (currently left mouse button)
   * @param eventHandler
   */
  function filterPrimaryPointer(eventHandler) {
      return function (event) {
          var isMouseEvent = event instanceof MouseEvent;
          var isPrimaryPointer = !isMouseEvent ||
              (isMouseEvent && event.button === 0);
          if (isPrimaryPointer) {
              eventHandler(event);
          }
      };
  }
  var defaultPagePoint = { pageX: 0, pageY: 0 };
  function pointFromTouch(e, pointType) {
      if (pointType === void 0) { pointType = "page"; }
      var primaryTouch = e.touches[0] || e.changedTouches[0];
      var point = primaryTouch || defaultPagePoint;
      return {
          x: point[pointType + "X"],
          y: point[pointType + "Y"],
      };
  }
  function pointFromMouse(point, pointType) {
      if (pointType === void 0) { pointType = "page"; }
      return {
          x: point[pointType + "X"],
          y: point[pointType + "Y"],
      };
  }
  function extractEventInfo(event, pointType) {
      if (pointType === void 0) { pointType = "page"; }
      return {
          point: isTouchEvent(event)
              ? pointFromTouch(event, pointType)
              : pointFromMouse(event, pointType),
      };
  }
  function getViewportPointFromEvent(event) {
      return extractEventInfo(event, "client");
  }
  var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
      if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
      var listener = function (event) {
          return handler(event, extractEventInfo(event));
      };
      return shouldFilterPrimaryPointer
          ? filterPrimaryPointer(listener)
          : listener;
  };

  var isBrowser = typeof window !== "undefined";
  // We check for event support via functions in case they've been mocked by a testing suite.
  var supportsPointerEvents = function () {
      return isBrowser && window.onpointerdown === null;
  };
  var supportsTouchEvents = function () {
      return isBrowser && window.ontouchstart === null;
  };
  var supportsMouseEvents = function () {
      return isBrowser && window.onmousedown === null;
  };

  var mouseEventNames = {
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointercancel: "mousecancel",
      pointerover: "mouseover",
      pointerout: "mouseout",
      pointerenter: "mouseenter",
      pointerleave: "mouseleave",
  };
  var touchEventNames = {
      pointerdown: "touchstart",
      pointermove: "touchmove",
      pointerup: "touchend",
      pointercancel: "touchcancel",
  };
  function getPointerEventName(name) {
      if (supportsPointerEvents()) {
          return name;
      }
      else if (supportsTouchEvents()) {
          return touchEventNames[name];
      }
      else if (supportsMouseEvents()) {
          return mouseEventNames[name];
      }
      return name;
  }
  function addPointerEvent(target, eventName, handler, options) {
      return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
  }
  function usePointerEvent(ref, eventName, handler, options) {
      return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
  }

  /**
   * Converts seconds to milliseconds
   *
   * @param seconds - Time in seconds.
   * @return milliseconds - Converted time in milliseconds.
   */
  var secondsToMilliseconds = function (seconds) { return seconds * 1000; };

  /**
   * @internal
   */
  var PanSession = /** @class */ (function () {
      function PanSession(event, handlers, _a) {
          var _this = this;
          var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
          /**
           * @internal
           */
          this.startEvent = null;
          /**
           * @internal
           */
          this.lastMoveEvent = null;
          /**
           * @internal
           */
          this.lastMoveEventInfo = null;
          /**
           * @internal
           */
          this.handlers = {};
          this.updatePoint = function () {
              if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                  return;
              var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
              var isPanStarted = _this.startEvent !== null;
              // Only start panning if the offset is larger than 3 pixels. If we make it
              // any larger than this we'll want to reset the pointer history
              // on the first update to avoid visual snapping to the cursoe.
              var isDistancePastThreshold = distance(info.offset, { x: 0, y: 0 }) >= 3;
              if (!isPanStarted && !isDistancePastThreshold)
                  return;
              var point = info.point;
              var timestamp = getFrameData().timestamp;
              _this.history.push(__assign(__assign({}, point), { timestamp: timestamp }));
              var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
              if (!isPanStarted) {
                  onStart && onStart(_this.lastMoveEvent, info);
                  _this.startEvent = _this.lastMoveEvent;
              }
              onMove && onMove(_this.lastMoveEvent, info);
          };
          this.handlePointerMove = function (event, info) {
              _this.lastMoveEvent = event;
              _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
              // Because Safari doesn't trigger mouseup events when it's above a `<select>`
              if (isMouseEvent(event) && event.buttons === 0) {
                  _this.handlePointerUp(event, info);
                  return;
              }
              // Throttle mouse move event to once per frame
              sync.update(_this.updatePoint, true);
          };
          this.handlePointerUp = function (event, info) {
              _this.end();
              var onEnd = _this.handlers.onEnd;
              if (!onEnd)
                  return;
              var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
              onEnd && onEnd(event, panInfo);
          };
          // If we have more than one touch, don't start detecting this gesture
          if (isTouchEvent(event) && event.touches.length > 1)
              return;
          this.handlers = handlers;
          this.transformPagePoint = transformPagePoint;
          var info = extractEventInfo(event);
          var initialInfo = transformPoint(info, this.transformPagePoint);
          var point = initialInfo.point;
          var timestamp = getFrameData().timestamp;
          this.history = [__assign(__assign({}, point), { timestamp: timestamp })];
          var onSessionStart = handlers.onSessionStart;
          onSessionStart &&
              onSessionStart(event, getPanInfo(initialInfo, this.history));
          this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
      }
      PanSession.prototype.updateHandlers = function (handlers) {
          this.handlers = handlers;
      };
      PanSession.prototype.end = function () {
          this.removeListeners && this.removeListeners();
          cancelSync.update(this.updatePoint);
      };
      return PanSession;
  }());
  function transformPoint(info, transformPagePoint) {
      return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
  }
  function getPanInfo(_a, history) {
      var point = _a.point;
      return {
          point: point,
          delta: subtractPoint(point, lastDevicePoint(history)),
          offset: subtractPoint(point, startDevicePoint(history)),
          velocity: getVelocity$1(history, 0.1),
      };
  }
  function startDevicePoint(history) {
      return history[0];
  }
  function lastDevicePoint(history) {
      return history[history.length - 1];
  }
  function getVelocity$1(history, timeDelta) {
      if (history.length < 2) {
          return { x: 0, y: 0 };
      }
      var i = history.length - 1;
      var timestampedPoint = null;
      var lastPoint = lastDevicePoint(history);
      while (i >= 0) {
          timestampedPoint = history[i];
          if (lastPoint.timestamp - timestampedPoint.timestamp >
              secondsToMilliseconds(timeDelta)) {
              break;
          }
          i--;
      }
      if (!timestampedPoint) {
          return { x: 0, y: 0 };
      }
      var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
      if (time === 0) {
          return { x: 0, y: 0 };
      }
      var currentVelocity = {
          x: (lastPoint.x - timestampedPoint.x) / time,
          y: (lastPoint.y - timestampedPoint.y) / time,
      };
      if (currentVelocity.x === Infinity) {
          currentVelocity.x = 0;
      }
      if (currentVelocity.y === Infinity) {
          currentVelocity.y = 0;
      }
      return currentVelocity;
  }

  /**
   *
   * @param handlers -
   * @param ref -
   *
   * @internalremarks
   * Currently this sets new pan gesture functions every render. The memo route has been explored
   * in the past but ultimately we're still creating new functions every render. An optimisation
   * to explore is creating the pan gestures and loading them into a `ref`.
   *
   * @internal
   */
  function usePanGesture(_a, ref) {
      var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart;
      var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
      var panSession = React.useRef(null);
      var transformPagePoint = React.useContext(MotionConfigContext).transformPagePoint;
      var handlers = {
          onSessionStart: onPanSessionStart,
          onStart: onPanStart,
          onMove: onPan,
          onEnd: function (event, info) {
              panSession.current = null;
              onPanEnd && onPanEnd(event, info);
          },
      };
      React.useEffect(function () {
          if (panSession.current !== null) {
              panSession.current.updateHandlers(handlers);
          }
      });
      function onPointerDown(event) {
          panSession.current = new PanSession(event, handlers, {
              transformPagePoint: transformPagePoint,
          });
      }
      usePointerEvent(ref, "pointerdown", hasPanEvents && onPointerDown);
      useUnmountEffect(function () { return panSession.current && panSession.current.end(); });
  }

  /**
   * Recursively traverse up the tree to check whether the provided child node
   * is the parent or a descendant of it.
   *
   * @param parent - Element to find
   * @param child - Element to test against parent
   */
  var isNodeOrChild = function (parent, child) {
      if (!child) {
          return false;
      }
      else if (parent === child) {
          return true;
      }
      else {
          return isNodeOrChild(parent, child.parentElement);
      }
  };

  function createLock(name) {
      var lock = null;
      return function () {
          var openLock = function () {
              lock = null;
          };
          if (lock === null) {
              lock = name;
              return openLock;
          }
          return false;
      };
  }
  var globalHorizontalLock = createLock("dragHorizontal");
  var globalVerticalLock = createLock("dragVertical");
  function getGlobalLock(drag) {
      var lock = false;
      if (drag === "y") {
          lock = globalVerticalLock();
      }
      else if (drag === "x") {
          lock = globalHorizontalLock();
      }
      else {
          var openHorizontal_1 = globalHorizontalLock();
          var openVertical_1 = globalVerticalLock();
          if (openHorizontal_1 && openVertical_1) {
              lock = function () {
                  openHorizontal_1();
                  openVertical_1();
              };
          }
          else {
              // Release the locks because we don't use them
              if (openHorizontal_1)
                  openHorizontal_1();
              if (openVertical_1)
                  openVertical_1();
          }
      }
      return lock;
  }

  var easingLookup = {
      linear: linear,
      easeIn: easeIn,
      easeInOut: easeInOut,
      easeOut: easeOut,
      circIn: circIn,
      circInOut: circInOut,
      circOut: circOut,
      backIn: backIn,
      backInOut: backInOut,
      backOut: backOut,
      anticipate: anticipate,
      bounceIn: bounceIn,
      bounceInOut: bounceInOut,
      bounceOut: bounceOut,
  };
  var easingDefinitionToFunction = function (definition) {
      if (Array.isArray(definition)) {
          // If cubic bezier definition, create bezier curve
          invariant$1(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
          var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
          return cubicBezier(x1, y1, x2, y2);
      }
      else if (typeof definition === "string") {
          // Else lookup from table
          invariant$1(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
          return easingLookup[definition];
      }
      return definition;
  };
  var isEasingArray = function (ease) {
      return Array.isArray(ease) && typeof ease[0] !== "number";
  };

  /**
   * Check if a value is animatable. Examples:
   *
   * ✅: 100, "100px", "#fff"
   * ❌: "block", "url(2.jpg)"
   * @param value
   *
   * @internal
   */
  var isAnimatable = function (key, value) {
      // If the list of keys tat might be non-animatable grows, replace with Set
      if (key === "zIndex")
          return false;
      // If it's a number or a keyframes array, we can animate it. We might at some point
      // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
      // but for now lets leave it like this for performance reasons
      if (typeof value === "number" || Array.isArray(value))
          return true;
      if (typeof value === "string" && // It's animatable if we have a string
          complex.test(value) && // And it contains numbers and/or colors
          !value.startsWith("url(") // Unless it starts with "url("
      ) {
          return true;
      }
      return false;
  };

  var underDampedSpring = function () { return ({
      type: "spring",
      stiffness: 500,
      damping: 25,
      restDelta: 0.5,
      restSpeed: 10,
  }); };
  var overDampedSpring = function (to) { return ({
      type: "spring",
      stiffness: 550,
      damping: to === 0 ? 100 : 30,
      restDelta: 0.01,
      restSpeed: 10,
  }); };
  var linearTween = function () { return ({
      type: "keyframes",
      ease: "linear",
      duration: 0.3,
  }); };
  var keyframes$1 = function (values) { return ({
      type: "keyframes",
      duration: 0.8,
      values: values,
  }); };
  var defaultTransitions = {
      x: underDampedSpring,
      y: underDampedSpring,
      z: underDampedSpring,
      rotate: underDampedSpring,
      rotateX: underDampedSpring,
      rotateY: underDampedSpring,
      rotateZ: underDampedSpring,
      scaleX: overDampedSpring,
      scaleY: overDampedSpring,
      scale: overDampedSpring,
      opacity: linearTween,
      backgroundColor: linearTween,
      color: linearTween,
      default: overDampedSpring,
  };
  var getDefaultTransition = function (valueKey, to) {
      var transitionFactory;
      if (isKeyframesTarget(to)) {
          transitionFactory = keyframes$1;
      }
      else {
          transitionFactory =
              defaultTransitions[valueKey] || defaultTransitions.default;
      }
      return __assign({ to: to }, transitionFactory(to));
  };

  /**
   * Decide whether a transition is defined on a given Transition.
   * This filters out orchestration options and returns true
   * if any options are left.
   */
  function isTransitionDefined(_a) {
      var when = _a.when, delay = _a.delay, delayChildren = _a.delayChildren, staggerChildren = _a.staggerChildren, staggerDirection = _a.staggerDirection, repeat = _a.repeat, repeatType = _a.repeatType, repeatDelay = _a.repeatDelay, from = _a.from, transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
      return !!Object.keys(transition).length;
  }
  var legacyRepeatWarning = false;
  /**
   * Convert Framer Motion's Transition type into Popmotion-compatible options.
   */
  function convertTransitionToAnimationOptions(_a) {
      var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
      var options = __assign({}, transition);
      if (times)
          options["offset"] = times;
      /**
       * Convert any existing durations from seconds to milliseconds
       */
      if (transition.duration)
          options["duration"] = secondsToMilliseconds(transition.duration);
      if (transition.repeatDelay)
          options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
      /**
       * Map easing names to Popmotion's easing functions
       */
      if (ease) {
          options["ease"] = isEasingArray(ease)
              ? ease.map(easingDefinitionToFunction)
              : easingDefinitionToFunction(ease);
      }
      /**
       * Support legacy transition API
       */
      if (transition.type === "tween")
          options.type = "keyframes";
      /**
       * TODO: These options are officially removed from the API.
       */
      if (yoyo || loop || flip) {
          warning$1(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
          legacyRepeatWarning = true;
          if (yoyo) {
              options.repeatType = "reverse";
          }
          else if (loop) {
              options.repeatType = "loop";
          }
          else if (flip) {
              options.repeatType = "mirror";
          }
          options.repeat = loop || yoyo || flip || transition.repeat;
      }
      /**
       * TODO: Popmotion 9 has the ability to automatically detect whether to use
       * a keyframes or spring animation, but does so by detecting velocity and other spring options.
       * It'd be good to introduce a similar thing here.
       */
      if (transition.type !== "spring")
          options.type = "keyframes";
      return options;
  }
  /**
   * Get the delay for a value by checking Transition with decreasing specificity.
   */
  function getDelayFromTransition(transition, key) {
      var _a, _b, _c, _d, _e;
      return ((_e = (_d = (_b = (_a = transition[key]) === null || _a === void 0 ? void 0 : _a.delay) !== null && _b !== void 0 ? _b : (_c = transition["default"]) === null || _c === void 0 ? void 0 : _c.delay) !== null && _d !== void 0 ? _d : transition.delay) !== null && _e !== void 0 ? _e : 0);
  }
  function hydrateKeyframes(options) {
      if (Array.isArray(options.to) && options.to[0] === null) {
          options.to = __spread(options.to);
          options.to[0] = options.from;
      }
      return options;
  }
  function getPopmotionAnimationOptions(transition, options, key) {
      var _a;
      if (Array.isArray(options.to)) {
          (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
      }
      hydrateKeyframes(options);
      /**
       * Get a default transition if none is determined to be defined.
       */
      if (!isTransitionDefined(transition)) {
          transition = __assign(__assign({}, transition), getDefaultTransition(key, options.to));
      }
      return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition));
  }
  /**
   *
   */
  function getAnimation(key, value, target, transition, onComplete) {
      var _a;
      var valueTransition = getValueTransition(transition, key);
      var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
      var isTargetAnimatable = isAnimatable(key, target);
      /**
       * If we're trying to animate from "none", try and get an animatable version
       * of the target. This could be improved to work both ways.
       */
      if (origin === "none" && isTargetAnimatable && typeof target === "string") {
          origin = complex.getAnimatableNone(target);
      }
      var isOriginAnimatable = isAnimatable(key, origin);
      warning$1(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
      function start() {
          var options = {
              from: origin,
              to: target,
              velocity: value.getVelocity(),
              onComplete: onComplete,
              onUpdate: function (v) { return value.set(v); },
          };
          return valueTransition.type === "inertia" ||
              valueTransition.type === "decay"
              ? inertia(__assign(__assign({}, options), valueTransition))
              : animate(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function (v) {
                      var _a;
                      options.onUpdate(v);
                      (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                  }, onComplete: function () {
                      var _a;
                      options.onComplete();
                      (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                  } }));
      }
      function set() {
          var _a;
          value.set(target);
          onComplete();
          (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
          return { stop: function () { } };
      }
      return !isOriginAnimatable ||
          !isTargetAnimatable ||
          valueTransition.type === false
          ? set
          : start;
  }
  function getValueTransition(transition, key) {
      return transition[key] || transition["default"] || transition;
  }
  /**
   * Start animation on a MotionValue. This function is an interface between
   * Framer Motion and Popmotion
   *
   * @internal
   */
  function startAnimation(key, value, target, transition) {
      if (transition === void 0) { transition = {}; }
      return value.start(function (onComplete) {
          var delayTimer;
          var controls;
          var animation = getAnimation(key, value, target, transition, onComplete);
          var delay = getDelayFromTransition(transition, key);
          var start = function () { return (controls = animation()); };
          if (delay) {
              delayTimer = setTimeout(start, secondsToMilliseconds(delay));
          }
          else {
              start();
          }
          return function () {
              clearTimeout(delayTimer);
              controls === null || controls === void 0 ? void 0 : controls.stop();
          };
      });
  }

  /**
   * @internal
   */
  function animateVisualElement(visualElement, definition, options) {
      visualElement.onAnimationStart();
      var animation;
      if (Array.isArray(definition)) {
          var animations = definition.map(function (variant) {
              return animateVariant(visualElement, variant, options);
          });
          animation = Promise.all(animations);
      }
      else if (typeof definition === "string") {
          animation = animateVariant(visualElement, definition, options);
      }
      else {
          // TODO: Remove any and handle TargetResolver
          animation = animateTarget(visualElement, definition, options);
      }
      return animation.then(function () { return visualElement.onAnimationComplete(); });
  }
  function animateVariant(visualElement, variant, options) {
      var _a;
      if (options === void 0) { options = {}; }
      var resolved = resolveVariant(visualElement, variant, options.custom);
      var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
      if (options.transitionOverride) {
          transition = options.transitionOverride;
      }
      /**
       * If we have a variant, create a callback that runs it as an animation.
       * Otherwise, we resolve a Promise immediately for a composable no-op.
       */
      var getAnimation = resolved
          ? function () { return animateTarget(visualElement, resolved, options); }
          : function () { return Promise.resolve(); };
      /**
       * If we have children, create a callback that runs all their animations.
       * Otherwise, we resolve a Promise immediately for a composable no-op.
       */
      var getChildAnimations = ((_a = visualElement.variantChildrenOrder) === null || _a === void 0 ? void 0 : _a.size) ? function (forwardDelay) {
          if (forwardDelay === void 0) { forwardDelay = 0; }
          var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
          return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
      }
          : function () { return Promise.resolve(); };
      /**
       * If the transition explicitly defines a "when" option, we need to resolve either
       * this animation or all children animations before playing the other.
       */
      var when = transition.when;
      if (when) {
          var _c = __read(when === "beforeChildren"
              ? [getAnimation, getChildAnimations]
              : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
          return first().then(last);
      }
      else {
          return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
      }
  }
  /**
   * @internal
   */
  function animateTarget(visualElement, definition, _a) {
      var _b;
      var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
      var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
      if (transitionOverride)
          transition = transitionOverride;
      var animations = [];
      var protectedValues = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getProtectedKeys(type));
      for (var key in target) {
          var value = visualElement.getValue(key);
          var valueTarget = target[key];
          if (!value ||
              valueTarget === undefined ||
              (protectedValues === null || protectedValues === void 0 ? void 0 : protectedValues[key]) !== undefined) {
              continue;
          }
          var animation = startAnimation(key, value, valueTarget, __assign({ delay: delay }, transition));
          animations.push(animation);
      }
      return Promise.all(animations).then(function () {
          transitionEnd && setTarget(visualElement, transitionEnd);
      });
  }
  function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
      if (delayChildren === void 0) { delayChildren = 0; }
      if (staggerChildren === void 0) { staggerChildren = 0; }
      if (staggerDirection === void 0) { staggerDirection = 1; }
      var animations = [];
      var maxStaggerDuration = (visualElement.variantChildrenOrder.size - 1) * staggerChildren;
      var generateStaggerDuration = staggerDirection === 1
          ? function (i) {
              if (i === void 0) { i = 0; }
              return i * staggerChildren;
          }
          : function (i) {
              if (i === void 0) { i = 0; }
              return maxStaggerDuration - i * staggerChildren;
          };
      Array.from(visualElement.variantChildrenOrder).forEach(function (child, i) {
          var animation = animateVariant(child, variant, __assign(__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) }));
          animations.push(animation);
      });
      return Promise.all(animations);
  }
  function stopAnimation(visualElement) {
      visualElement.forEachValue(function (value) { return value.stop(); });
  }

  /**
   * Control animations on one or more components.
   *
   * @public
   */
  var AnimationControls = /** @class */ (function () {
      function AnimationControls() {
          /**
           * Track whether the host component has mounted.
           *
           * @internal
           */
          this.hasMounted = false;
          /**
           * Pending animations that are started before a component is mounted.
           *
           * @internal
           */
          this.pendingAnimations = [];
          /**
           * A collection of linked component animation controls.
           *
           * @internal
           */
          this.subscribers = new Set();
      }
      /**
       * Subscribes a component's animation controls to this.
       *
       * @param controls - The controls to subscribe
       * @returns An unsubscribe function.
       *
       * @internal
       */
      AnimationControls.prototype.subscribe = function (visualElement) {
          var _this = this;
          this.subscribers.add(visualElement);
          return function () { return _this.subscribers.delete(visualElement); };
      };
      /**
       * Starts an animation on all linked components.
       *
       * @remarks
       *
       * ```jsx
       * controls.start("variantLabel")
       * controls.start({
       *   x: 0,
       *   transition: { duration: 1 }
       * })
       * ```
       *
       * @param definition - Properties or variant label to animate to
       * @param transition - Optional `transtion` to apply to a variant
       * @returns - A `Promise` that resolves when all animations have completed.
       *
       * @public
       */
      AnimationControls.prototype.start = function (definition, transitionOverride) {
          var _this = this;
          if (this.hasMounted) {
              var animations_1 = [];
              this.subscribers.forEach(function (visualElement) {
                  animations_1.push(animateVisualElement(visualElement, definition, {
                      transitionOverride: transitionOverride,
                  }));
              });
              return Promise.all(animations_1);
          }
          else {
              return new Promise(function (resolve) {
                  _this.pendingAnimations.push({
                      animation: [definition, transitionOverride],
                      resolve: resolve,
                  });
              });
          }
      };
      /**
       * Instantly set to a set of properties or a variant.
       *
       * ```jsx
       * // With properties
       * controls.set({ opacity: 0 })
       *
       * // With variants
       * controls.set("hidden")
       * ```
       *
       * @internalremarks
       * We could perform a similar trick to `.start` where this can be called before mount
       * and we maintain a list of of pending actions that get applied on mount. But the
       * expectation of `set` is that it happens synchronously and this would be difficult
       * to do before any children have even attached themselves. It's also poor practise
       * and we should discourage render-synchronous `.start` calls rather than lean into this.
       *
       * @public
       */
      AnimationControls.prototype.set = function (definition) {
          invariant$1(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
          return this.subscribers.forEach(function (visualElement) {
              setValues(visualElement, definition);
          });
      };
      /**
       * Stops animations on all linked components.
       *
       * ```jsx
       * controls.stop()
       * ```
       *
       * @public
       */
      AnimationControls.prototype.stop = function () {
          this.subscribers.forEach(function (visualElement) {
              stopAnimation(visualElement);
          });
      };
      /**
       * Initialises the animation controls.
       *
       * @internal
       */
      AnimationControls.prototype.mount = function () {
          var _this = this;
          this.hasMounted = true;
          this.pendingAnimations.forEach(function (_a) {
              var animation = _a.animation, resolve = _a.resolve;
              _this.start.apply(_this, __spread(animation)).then(resolve);
          });
      };
      /**
       * Stops all child animations when the host component unmounts.
       *
       * @internal
       */
      AnimationControls.prototype.unmount = function () {
          this.hasMounted = false;
          this.stop();
      };
      return AnimationControls;
  }());

  function shallowCompare(next, prev) {
      if (!Array.isArray(prev))
          return false;
      var prevLength = prev.length;
      if (prevLength !== next.length)
          return false;
      for (var i = 0; i < prevLength; i++) {
          if (prev[i] !== next[i])
              return false;
      }
      return true;
  }

  var AnimationType;
  (function (AnimationType) {
      AnimationType["Animate"] = "animate";
      AnimationType["Hover"] = "whileHover";
      AnimationType["Tap"] = "whileTap";
      AnimationType["Drag"] = "whileDrag";
      AnimationType["Focus"] = "whileFocus";
      AnimationType["Exit"] = "exit";
  })(AnimationType || (AnimationType = {}));
  var variantPriorityOrder = [
      AnimationType.Animate,
      AnimationType.Hover,
      AnimationType.Tap,
      AnimationType.Drag,
      AnimationType.Focus,
      AnimationType.Exit,
  ];
  var reversePriorityOrder = __spread(variantPriorityOrder).reverse();
  var numAnimationTypes = variantPriorityOrder.length;
  function animateList(visualElement) {
      return function (animations) {
          return Promise.all(animations.map(function (_a) {
              var animation = _a.animation, options = _a.options;
              return animateVisualElement(visualElement, animation, options);
          }));
      };
  }
  function createAnimationState(visualElement) {
      var animate = animateList(visualElement);
      var state = createState();
      var isInitialRender = true;
      /**
       * This function will be used to reduce the animation definitions for
       * each active animation type into an object of resolved values for it.
       */
      var buildResolvedTypeValues = function (acc, definition) {
          var resolved = resolveVariant(visualElement, definition);
          if (resolved) {
              var transition = resolved.transition, transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
              acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
          }
          return acc;
      };
      function getProtectedKeys(type) {
          return state[type].protectedKeys;
      }
      /**
       * This just allows us to inject mocked animation functions
       * @internal
       */
      function setAnimateFunction(makeAnimator) {
          animate = makeAnimator(visualElement);
      }
      var currentProps;
      var currentContext;
      /**
       * When we receive new props, we need to:
       * 1. Create a list of protected keys for each type. This is a directory of
       *    value keys that are currently being "handled" by types of a higher priority
       *    so that whenever an animation is played of a given type, these values are
       *    protected from being animated.
       * 2. Determine if an animation type needs animating.
       * 3. Determine if any values have been removed from a type and figure out
       *    what to animate those to.
       */
      function setProps(props, context, options, changedActiveType) {
          if (context === void 0) { context = {}; }
          /**
           * Keep track of the most recent props and contexts. setActive can pass these
           * straight through rather than requiring external callers to have access to these.
           */
          currentProps = props;
          currentContext = context;
          /**
           * A list of animations that we'll build into as we iterate through the animation
           * types. This will get executed at the end of the function.
           */
          var animations = [];
          /**
           * Keep track of which values have been removed. Then, as we hit lower priority
           * animation types, we can check if they contain removed values and animate to that.
           */
          var removedKeys = new Set();
          /**
           * A dictionary of all encountered keys. This is an object to let us build into and
           * copy it without iteration. Each time we hit an animation type we set its protected
           * keys - the keys its not allowed to animate - to the latest version of this object.
           */
          var encounteredKeys = {};
          // TODO Reconcile with other update config
          if (props.variants) {
              visualElement.updateConfig(__assign(__assign({}, visualElement.config), { variants: props.variants }));
          }
          /**
           * If a variant has been removed at a given index, and this component is controlling
           * variant animations, we want to ensure lower-priority variants are forced to animate.
           */
          var removedVariantIndex = Infinity;
          var _loop_1 = function (i) {
              var type = reversePriorityOrder[i];
              var typeState = state[type];
              var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
              var propIsVariant = isVariantLabel(prop);
              /**
               * If this type has *just* changed isActive status, set activeDelta
               * to that status. Otherwise set to null.
               */
              var activeDelta = type === changedActiveType ? typeState.isActive : null;
              if (activeDelta === false)
                  removedVariantIndex = i;
              /**
               * If this prop is an inherited variant, rather than been set directly on the
               * component itself, we want to make sure we allow the parent to trigger animations.
               */
              var isInherited = prop === context[type] && propIsVariant;
              /**
               *
               */
              if (isInherited &&
                  isInitialRender &&
                  visualElement.manuallyAnimateOnMount) {
                  isInherited = false;
              }
              /**
               * Resume from previous snapshot if it's the first render
               */
              if (isInitialRender &&
                  type === AnimationType.Animate &&
                  visualElement.prevSnapshot) {
                  isInitialRender = false;
                  typeState.prevResolvedValues = visualElement.prevSnapshot;
              }
              /**
               * Set all encountered keys so far as the protected keys for this type. This will
               * be any key that has been animated or otherwise handled by active, higher-priortiy types.
               */
              typeState.protectedKeys = __assign({}, encounteredKeys);
              // Check if we can skip analysing this prop early
              if (
              // If it isn't active and hasn't *just* been set as inactive
              (!typeState.isActive && activeDelta === null) ||
                  // If we didn't and don't have any defined prop for this animation type
                  (!prop && !typeState.prevProp) ||
                  // Or if the prop doesn't define an animation
                  prop instanceof AnimationControls ||
                  typeof prop === "boolean") {
                  return "continue";
              }
              /**
               * As we go look through the values defined on this type, if we detect
               * a changed value or a value that was removed in a higher priority, we set
               * this to true and add this prop to the animation list.
               */
              var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) ||
                  // If we're making this variant active, we want to always make it active
                  (type === changedActiveType &&
                      typeState.isActive &&
                      !isInherited &&
                      propIsVariant) ||
                  // If we removed a higher-priority variant (i is in reverse order)
                  (i > removedVariantIndex && propIsVariant);
              /**
               * As animations can be set as variant lists, variants or target objects, we
               * coerce everything to an array if it isn't one already
               */
              var definitionList = Array.isArray(prop) ? prop : [prop];
              /**
               * Build an object of all the resolved values. We'll use this in the subsequent
               * setProps calls to determine whether a value has changed.
               */
              var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
              if (activeDelta === false)
                  resolvedValues = {};
              /**
               * Now we need to loop through all the keys in the prev prop and this prop,
               * and decide:
               * 1. If the value has changed, and needs animating
               * 2. If it has been removed, and needs adding to the removedKeys set
               * 3. If it has been removed in a higher priority type and needs animating
               * 4. If it hasn't been removed in a higher priority but hasn't changed, and
               *    needs adding to the type's protectedKeys list.
               */
              var _a = typeState.prevResolvedValues, prevResolvedValues = _a === void 0 ? {} : _a;
              var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);
              for (var key in allKeys) {
                  var next = resolvedValues[key];
                  var prev = prevResolvedValues[key];
                  // If we've already handled this we can just skip ahead
                  if (encounteredKeys.hasOwnProperty(key))
                      continue;
                  if (next !== prev) {
                      if (next !== undefined) {
                          // If next is defined and doesn't equal prev, it needs animating
                          shouldAnimateType = true;
                          removedKeys.delete(key);
                      }
                      else {
                          // If it's undefined, it's been removed.
                          removedKeys.add(key);
                      }
                  }
                  else if (next !== undefined && removedKeys.has(key)) {
                      /**
                       * If next hasn't changed and it isn't undefined, we want to check if it's
                       * been removed by a higher priority
                       */
                      shouldAnimateType = true;
                      removedKeys.delete(key);
                  }
                  else {
                      typeState.protectedKeys[key] = true;
                  }
              }
              /**
               * Update the typeState so next time setProps is called we can compare the
               * latest prop and resolvedValues to these.
               */
              typeState.prevProp = prop;
              typeState.prevResolvedValues = resolvedValues;
              /**
               *
               */
              if (typeState.isActive) {
                  encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
              }
              /**
               * If this is an inherited prop we want to hard-block animations
               * TODO: Test as this should probably still handle animations triggered
               * by removed values?
               */
              if (shouldAnimateType && !isInherited) {
                  animations.push.apply(animations, __spread(definitionList.map(function (animation) { return ({
                      animation: animation,
                      options: __assign({ type: type }, options),
                  }); })));
              }
          };
          /**
           * Iterate through all animation types in reverse priority order. For each, we want to
           * detect which values it's handling and whether or not they've changed (and therefore
           * need to be animated). If any values have been removed, we want to detect those in
           * lower priority props and flag for animation.
           */
          for (var i = 0; i < numAnimationTypes; i++) {
              _loop_1(i);
          }
          /**
           * If there are some removed value that haven't been dealt with,
           * we need to create a new animation that falls back either to the value
           * defined in the style prop, or the last read value.
           */
          if (removedKeys.size) {
              var fallbackAnimation_1 = {};
              removedKeys.forEach(function (key) {
                  var fallbackTarget = visualElement.getBaseValue(key, props);
                  if (fallbackTarget !== undefined) {
                      fallbackAnimation_1[key] = fallbackTarget;
                  }
              });
              animations.push({ animation: fallbackAnimation_1 });
          }
          var shouldAnimate = Boolean(animations.length);
          if (isInitialRender &&
              props.initial === false &&
              !visualElement.manuallyAnimateOnMount) {
              shouldAnimate = false;
          }
          isInitialRender = false;
          return shouldAnimate ? animate(animations) : Promise.resolve();
      }
      /**
       * Change whether a certain animation type is active.
       */
      function setActive(type, isActive, options) {
          var _a;
          // If the active state hasn't changed, we can safely do nothing here
          if (state[type].isActive === isActive)
              return Promise.resolve();
          // Propagate active change to children
          (_a = visualElement.variantChildrenOrder) === null || _a === void 0 ? void 0 : _a.forEach(function (child) { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
          state[type].isActive = isActive;
          return setProps(currentProps, currentContext, options, type);
      }
      return { getProtectedKeys: getProtectedKeys, setProps: setProps, setActive: setActive, setAnimateFunction: setAnimateFunction };
  }
  function variantsHaveChanged(prev, next) {
      if (typeof next === "string") {
          return next !== prev;
      }
      else if (isVariantLabels(next)) {
          return !shallowCompare(next, prev);
      }
      return false;
  }
  function createTypeState(isActive) {
      if (isActive === void 0) { isActive = false; }
      return {
          isActive: isActive,
          protectedKeys: {},
          prevResolvedValues: {},
      };
  }
  function createState() {
      var _a;
      return _a = {},
          _a[AnimationType.Animate] = createTypeState(true),
          _a[AnimationType.Hover] = createTypeState(),
          _a[AnimationType.Tap] = createTypeState(),
          _a[AnimationType.Drag] = createTypeState(),
          _a[AnimationType.Focus] = createTypeState(),
          _a[AnimationType.Exit] = createTypeState(),
          _a;
  }

  /**
   * @param handlers -
   * @internal
   */
  function useTapGesture(_a, visualElement) {
      var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap;
      var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
      var isPressing = React.useRef(false);
      var cancelPointerEventListener = React.useRef(null);
      function removePointerUp() {
          var _a;
          (_a = cancelPointerEventListener.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEventListener);
          cancelPointerEventListener.current = null;
      }
      // We load this event handler into a ref so we can later refer to
      // onPointerUp.current which will always have reference to the latest props
      var onPointerUp = React.useRef(null);
      onPointerUp.current = function (event, info) {
          var _a;
          var element = visualElement.getInstance();
          removePointerUp();
          if (!isPressing.current || !element)
              return;
          isPressing.current = false;
          (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Tap, false);
          // Check the gesture lock - if we get it, it means no drag gesture is active
          // and we can safely fire the tap gesture.
          var openGestureLock = getGlobalLock(true);
          if (!openGestureLock)
              return;
          openGestureLock();
          if (!isNodeOrChild(element, event.target)) {
              onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
          }
          else {
              onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
          }
      };
      function onPointerDown(event, info) {
          var _a;
          removePointerUp();
          cancelPointerEventListener.current = pipe(addPointerEvent(window, "pointerup", function (event, info) { var _a; return (_a = onPointerUp.current) === null || _a === void 0 ? void 0 : _a.call(onPointerUp, event, info); }), addPointerEvent(window, "pointercancel", function (event, info) { var _a; return (_a = onPointerUp.current) === null || _a === void 0 ? void 0 : _a.call(onPointerUp, event, info); }));
          var element = visualElement.getInstance();
          if (!element || isPressing.current)
              return;
          isPressing.current = true;
          onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
          (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Tap, true);
      }
      usePointerEvent(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined);
      useUnmountEffect(removePointerUp);
  }

  var filterTouch = function (listener) { return function (event, info) {
      if (isMouseEvent(event))
          listener(event, info);
  }; };
  /**
   *
   * @param props
   * @param ref
   * @internal
   */
  function useHoverGesture(_a, visualElement) {
      var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover;
      var onPointerEnter = filterTouch(function (event, info) {
          var _a;
          onHoverStart === null || onHoverStart === void 0 ? void 0 : onHoverStart(event, info);
          (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, true);
      });
      var onPointerLeave = filterTouch(function (event, info) {
          var _a;
          onHoverEnd === null || onHoverEnd === void 0 ? void 0 : onHoverEnd(event, info);
          (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, false);
      });
      usePointerEvent(visualElement, "pointerenter", onHoverStart || whileHover ? onPointerEnter : undefined);
      usePointerEvent(visualElement, "pointerleave", onHoverEnd || whileHover ? onPointerLeave : undefined);
  }

  /**
   *
   * @param props
   * @param ref
   * @internal
   */
  function useFocusGesture(_a, visualElement) {
      var whileFocus = _a.whileFocus;
      var onFocus = function () {
          var _a;
          (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Focus, true);
      };
      var onBlur = function () {
          var _a;
          (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Focus, false);
      };
      useDomEvent(visualElement, "focus", whileFocus ? onFocus : undefined);
      useDomEvent(visualElement, "blur", whileFocus ? onBlur : undefined);
  }

  /**
   * Add pan and tap gesture recognition to an element.
   *
   * @param props - Gesture event handlers
   * @param ref - React `ref` containing a DOM `Element`
   * @public
   */
  function useGestures(props, visualElement) {
      usePanGesture(props, visualElement);
      useTapGesture(props, visualElement);
      useHoverGesture(props, visualElement);
      useFocusGesture(props, visualElement);
  }

  var makeRenderlessComponent = function (hook) { return function (props) {
      hook(props);
      return null;
  }; };

  var gestureProps = [
      "onPan",
      "onPanStart",
      "onPanEnd",
      "onPanSessionStart",
      "onTap",
      "onTapStart",
      "onTapCancel",
      "onHoverStart",
      "onHoverEnd",
      "whileFocus",
      "whileTap",
      "whileHover",
  ];
  var GestureComponent = makeRenderlessComponent(function (_a) {
      var visualElement = _a.visualElement, props = __rest(_a, ["visualElement"]);
      useGestures(props, visualElement);
  });
  /**
   * @public
   */
  var Gestures = {
      key: "gestures",
      shouldRender: function (props) {
          return gestureProps.some(function (key) { return props.hasOwnProperty(key); });
      },
      getComponent: function () { return GestureComponent; },
  };

  /**
   * A list of all valid MotionProps.
   *
   * @internalremarks
   * This doesn't throw if a `MotionProp` name is missing - it should.
   */
  var validMotionProps = new Set(__spread([
      "initial",
      "animate",
      "exit",
      "style",
      "variants",
      "transition",
      "transformTemplate",
      "transformValues",
      "custom",
      "inherit",
      "layout",
      "layoutId",
      "onLayoutAnimationComplete",
      "onViewportBoxUpdate",
      "onAnimationStart",
      "onAnimationComplete",
      "onUpdate",
      "onDragStart",
      "onDrag",
      "onDragEnd",
      "onMeasureDragConstraints",
      "onDirectionLock",
      "onDragTransitionEnd",
      "drag",
      "dragControls",
      "dragListener",
      "dragConstraints",
      "dragDirectionLock",
      "_dragX",
      "_dragY",
      "dragElastic",
      "dragMomentum",
      "dragPropagation",
      "dragTransition",
      "whileDrag"
  ], gestureProps));
  /**
   * Check whether a prop name is a valid `MotionProp` key.
   *
   * @param key - Name of the property to check
   * @returns `true` is key is a valid `MotionProp`.
   *
   * @public
   */
  function isValidMotionProp(key) {
      return validMotionProps.has(key);
  }

  var isPropValid = function (key) { return !isValidMotionProp(key); };
  /**
   * Emotion and Styled Components both allow users to pass through arbitrary props to their components
   * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
   * of these should be passed to the underlying DOM node.
   *
   * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
   * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
   * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
   * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
   *
   * By making it an optionalDependency we can offer this functionality only in the situations where it's
   * actually required.
   */
  try {
      var emotionIsPropValid_1 = require("@emotion/is-prop-valid").default;
      isPropValid = function (key) {
          // Handle events explicitly as Emotion validates them all as true
          if (key.startsWith("on")) {
              return !isValidMotionProp(key);
          }
          else {
              return emotionIsPropValid_1(key);
          }
      };
  }
  catch (_a) {
      // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
  }
  function filterProps(props) {
      var domProps = {};
      for (var key in props) {
          if (isPropValid(key))
              domProps[key] = props[key];
      }
      return domProps;
  }

  function buildHTMLProps(visualElement, _a) {
      var drag = _a.drag;
      // The `any` isn't ideal but it is the type of createElement props argument
      var htmlProps = {};
      var style = __assign(__assign(__assign({}, visualElement.reactStyle), visualElement.style), visualElement.vars);
      if (!!drag) {
          // Disable the ghost element when a user drags
          htmlProps.draggable = false;
          // Disable text selection
          style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout =
              "none";
          // Disable scrolling on the draggable direction
          style.touchAction =
              drag === true ? "none" : "pan-" + (drag === "x" ? "y" : "x");
      }
      htmlProps.style = style;
      return htmlProps;
  }

  /**
   * Build React props for SVG elements
   */
  function buildSVGProps(visualElement) {
      return __assign(__assign({}, visualElement.attrs), { style: __assign({}, visualElement.reactStyle) });
  }

  function useRender(Component, props, visualElement) {
      // Only filter props from components we control, ie `motion.div`. If this
      // is a custom component pass along everything provided to it.
      var forwardedProps = typeof Component === "string" ? filterProps(props) : props;
      /**
       * Every render, empty and rebuild the animated values to be applied to our Element.
       * During animation these data structures are used in a mutable fashion to reduce
       * garbage collection, but between renders we can flush them to remove values
       * that might have been taken out of the provided props.
       */
      visualElement.clean();
      visualElement.build();
      // Generate props to visually render this component
      var visualProps = isSVGComponent(Component)
          ? buildSVGProps(visualElement)
          : buildHTMLProps(visualElement, props);
      return React.createElement(Component, __assign(__assign(__assign({}, forwardedProps), { ref: visualElement.ref }), visualProps));
  }

  function isForcedMotionValue(key, _a) {
      var layout = _a.layout, layoutId = _a.layoutId;
      return (isTransformProp(key) ||
          isTransformOriginProp(key) ||
          ((layout || layoutId !== undefined) && !!valueScaleCorrection[key]));
  }
  /**
   * Scrape props for MotionValues and add/remove them to this component's
   * VisualElement
   */
  function useMotionValues(visualElement, props) {
      var prev = useConstant(empty);
      /**
       * Remove MotionValues that are no longer present
       */
      for (var key in prev) {
          var isForced = isForcedMotionValue(key, props);
          var existsAsProp = props[key] !== undefined;
          var existsAsStyle = props.style && props.style[key] !== undefined;
          var propIsMotionValue = existsAsProp && isMotionValue(props[key]);
          var styleIsMotionValue = existsAsStyle && isMotionValue(props.style[key]);
          var transformRemoved = isForced && !existsAsProp && !existsAsStyle;
          var motionValueRemoved = !isForced && !propIsMotionValue && !styleIsMotionValue;
          if (transformRemoved || motionValueRemoved) {
              visualElement.removeValue(key);
              delete prev[key];
          }
      }
      /**
       * Add incoming MotionValues
       */
      addMotionValues(visualElement, prev, props, false, props);
      if (props.style)
          addMotionValues(visualElement, prev, props.style, true, props);
      /**
       * Transform custom values if provided a handler, ie size -> width/height
       * Ideally we'd ditch this by removing support for size and other custom values from Framer.
       */
      if (props.transformValues) {
          visualElement.reactStyle = props.transformValues(visualElement.reactStyle);
      }
  }
  /**
   * Add incoming MotionValues
   *
   * TODO: Type the VisualElements properly
   */
  function addMotionValues(visualElement, prev, source, isStyle, props) {
      if (isStyle === void 0) { isStyle = false; }
      if (isStyle)
          visualElement.reactStyle = {};
      for (var key in source) {
          var value = source[key];
          var foundMotionValue = false;
          if (isMotionValue(value)) {
              // If this is a MotionValue, add it if it isn't a reserved key
              if (!reservedNames.has(key)) {
                  visualElement.addValue(key, value);
                  foundMotionValue = true;
              }
          }
          else if (isForcedMotionValue(key, props)) {
              // If this is a transform prop, always create a MotionValue
              // to ensure we can reconcile them all together.
              if (!visualElement.hasValue(key)) {
                  visualElement.addValue(key, motionValue(value));
              }
              else if (value !== prev[key]) {
                  if (isMotionValue(prev[key])) {
                      /**
                       * If the previous value was a MotionValue, and this value isn't,
                       * we want to create a new MotionValue rather than update one that's been removed.
                       */
                      visualElement.addValue(key, motionValue(value));
                  }
                  else {
                      /**
                       * Otherwise, we just want to ensure the MotionValue is of the latest value.
                       */
                      var motion = visualElement.getValue(key);
                      motion.set(value);
                  }
              }
              foundMotionValue = true;
          }
          else if (isStyle) {
              visualElement.reactStyle[key] = value;
          }
          if (foundMotionValue)
              prev[key] = value;
      }
  }
  /**
   * These are props we accept as MotionValues but don't want to add
   * to the VisualElement
   */
  var reservedNames = new Set([]);
  var empty = function () { return ({}); };

  /**
   * Load features via renderless components based on the provided MotionProps
   */
  function useFeatures(defaultFeatures, isStatic, visualElement, props) {
      var plugins = React.useContext(MotionConfigContext);
      // If this is a static component, or we're rendering on the server, we don't load
      // any feature components
      if (isStatic || typeof window === "undefined")
          return null;
      var allFeatures = __spread(defaultFeatures, plugins.features);
      var numFeatures = allFeatures.length;
      var features = [];
      // Decide which features we should render and add them to the returned array
      for (var i = 0; i < numFeatures; i++) {
          var _a = allFeatures[i], shouldRender = _a.shouldRender, key = _a.key, getComponent = _a.getComponent;
          if (shouldRender(props)) {
              var Component = getComponent(props);
              Component &&
                  features.push(React.createElement(Component, __assign({ key: key }, props, { visualElement: visualElement })));
          }
      }
      return features;
  }

  var Presence;
  (function (Presence) {
      Presence[Presence["Entering"] = 0] = "Entering";
      Presence[Presence["Present"] = 1] = "Present";
      Presence[Presence["Exiting"] = 2] = "Exiting";
  })(Presence || (Presence = {}));
  var VisibilityAction;
  (function (VisibilityAction) {
      VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
      VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
  })(VisibilityAction || (VisibilityAction = {}));

  /**
   * Default handlers for batching VisualElements
   */
  var defaultHandler = {
      measureLayout: function (child) { return child.measureLayout(); },
      layoutReady: function (child) { return child.layoutReady(); },
  };
  /**
   * Sort VisualElements by tree depth, so we process the highest elements first.
   */
  var sortByDepth = function (a, b) {
      return a.depth - b.depth;
  };
  /**
   * Create a batcher to process VisualElements
   */
  function createBatcher() {
      var queue = new Set();
      var add = function (child) { return queue.add(child); };
      var flush = function (_a) {
          var _b = _a === void 0 ? defaultHandler : _a, measureLayout = _b.measureLayout, layoutReady = _b.layoutReady, parent = _b.parent;
          var order = Array.from(queue).sort(sortByDepth);
          var resetAndMeasure = function () {
              /**
               * Write: Reset any transforms on children elements so we can read their actual layout
               */
              order.forEach(function (child) { return child.resetTransform(); });
              /**
               * Read: Measure the actual layout
               */
              order.forEach(measureLayout);
          };
          parent ? parent.withoutTransform(resetAndMeasure) : resetAndMeasure();
          /**
           * Write: Notify the VisualElements they're ready for further write operations.
           */
          order.forEach(layoutReady);
          /**
           * After all children have started animating, ensure any Entering components are set to Present.
           * If we add deferred animations (set up all animations and then start them in two loops) this
           * could be moved to the start loop. But it needs to happen after all the animations configs
           * are generated in AnimateSharedLayout as this relies on presence data
           */
          order.forEach(function (child) {
              if (child.isPresent)
                  child.presence = Presence.Present;
          });
          queue.clear();
      };
      return { add: add, flush: flush };
  }
  function isSharedLayout(context) {
      return !!context.forceUpdate;
  }
  var SharedLayoutContext = React.createContext(createBatcher());
  /**
   * @internal
   */
  var FramerTreeLayoutContext = React.createContext(createBatcher());

  var isBrowser$1 = typeof window !== "undefined";
  var useIsomorphicLayoutEffect = isBrowser$1 ? React.useLayoutEffect : React.useEffect;

  function useSnapshotOnUnmount(visualElement) {
      var syncLayout = React.useContext(SharedLayoutContext);
      var framerSyncLayout = React.useContext(FramerTreeLayoutContext);
      useIsomorphicLayoutEffect(function () { return function () {
          if (isSharedLayout(syncLayout)) {
              syncLayout.remove(visualElement);
          }
          if (isSharedLayout(framerSyncLayout)) {
              framerSyncLayout.remove(visualElement);
          }
      }; }, []);
  }

  /**
   * When a component is the child of `AnimatePresence`, it can use `usePresence`
   * to access information about whether it's still present in the React tree.
   *
   * ```jsx
   * import { usePresence } from "framer-motion"
   *
   * export const Component = () => {
   *   const [isPresent, safeToRemove] = usePresence()
   *
   *   useEffect(() => {
   *     !isPresent && setTimeout(safeToRemove, 1000)
   *   }, [isPresent])
   *
   *   return <div />
   * }
   * ```
   *
   * If `isPresent` is `false`, it means that a component has been removed the tree, but
   * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
   *
   * @public
   */
  function usePresence() {
      var context = React.useContext(PresenceContext);
      if (context === null)
          return [true, null];
      var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
      // It's safe to call the following hooks conditionally (after an early return) because the context will always
      // either be null or non-null for the lifespan of the component.
      // Replace with useOpaqueId when released in React
      var id = useUniqueId();
      React.useEffect(function () { return register(id); }, []);
      var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
      return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
  }
  function isPresent(context) {
      return context === null ? true : context.isPresent;
  }
  var counter = 0;
  var incrementId = function () { return counter++; };
  var useUniqueId = function () { return useConstant(incrementId); };

  /**
   * Use callback either only on the initial render or on all renders. In concurrent mode
   * the "initial" render might run multiple times
   *
   * @param callback - Callback to run
   * @param isInitialOnly - Set to `true` to only run on initial render, or `false` for all renders. Defaults to `false`.
   *
   * @public
   */
  function useInitialOrEveryRender(callback, isInitialOnly) {
      if (isInitialOnly === void 0) { isInitialOnly = false; }
      var isInitialRender = React.useRef(true);
      if (!isInitialOnly || (isInitialOnly && isInitialRender.current)) {
          callback();
      }
      isInitialRender.current = false;
  }

  function checkShouldInheritVariant(_a) {
      var animate = _a.animate, variants = _a.variants, inherit = _a.inherit;
      return inherit !== null && inherit !== void 0 ? inherit : (!!variants && !animate);
  }

  /**
   * This hook is resonsible for creating the variant-propagation tree
   * relationship between VisualElements.
   */
  function useVariants(visualElement, props, isStatic) {
      var _a, _b, _c;
      var variantContext = useVariantContext();
      var presenceContext = React.useContext(PresenceContext);
      /**
       * We only add this VisualElement to the variant tree *if* we're:
       * 1. Being provided a variants prop
       * 2. Or being used to control variants (ie animate, whileHover etc)
       * 3. Or being passed AnimationControls, which we have to assume may control variants.
       * Otherwise this component should be "invisible" to variant propagation.
       */
      var shouldInheritVariants = checkShouldInheritVariant(props);
      var contextDependencies = [];
      var context = {};
      var isControllingVariants = false;
      if (checkIfControllingVariants(props)) {
          isControllingVariants = true;
          variantContext = {};
      }
      var isVariantNode = isControllingVariants || props.variants;
      /**
       * Loop through each animation prop. Create context dependencies.
       */
      for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props[name_1];
          var contextProp = variantContext[name_1];
          if (isVariantLabel$1(prop) || prop === false) {
              context[name_1] = prop;
              contextDependencies.push(prop);
          }
          else {
              if (isVariantLabel$1(contextProp) || contextProp === false) {
                  context[name_1] = contextProp;
              }
              contextDependencies.push(null);
          }
          contextDependencies.push(isVariantLabel$1(contextProp) ? contextProp : null);
      }
      var animate = (_a = props.animate) !== null && _a !== void 0 ? _a : context.animate;
      var initial = props.initial;
      if (initial === undefined &&
          (isVariantLabel$1(animate) || context.initial !== false)) {
          initial = context.initial;
      }
      if ((presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false) {
          initial = context.initial = false;
      }
      context.parent = isVariantNode ? visualElement : variantContext.parent;
      useInitialOrEveryRender(function () {
          var initialToSet = initial === false ? animate : initial;
          if (initialToSet &&
              typeof initialToSet !== "boolean" &&
              !isAnimationControls(initialToSet)) {
              setValues(visualElement, initialToSet);
          }
      }, !isStatic);
      /**
       * We want to update the "base" (or fallback) value on the initial render.
       */
      useInitialOrEveryRender(function () {
          visualElement.forEachValue(function (value, key) {
              visualElement.baseTarget[key] = value.get();
          });
      }, true);
      var nextContext = React.useMemo(function () { return context; }, contextDependencies);
      /**
       * Subscribe to the parent visualElement if this is a participant in the variant tree
       */
      var remove;
      if (isVariantNode && shouldInheritVariants && !isControllingVariants) {
          remove = (_b = variantContext.parent) === null || _b === void 0 ? void 0 : _b.addVariantChild(visualElement);
          visualElement.inheritsVariants = true;
      }
      /**
       *
       */
      if (!isControllingVariants &&
          shouldInheritVariants && ((_c = visualElement.parent) === null || _c === void 0 ? void 0 : _c.isMounted) &&
          initial !== false &&
          animate) {
          visualElement.manuallyAnimateOnMount = true;
      }
      React.useEffect(function () {
          visualElement.isMounted = true;
          return function () {
              visualElement.isMounted = false;
              remove === null || remove === void 0 ? void 0 : remove();
          };
      }, []);
      /**
       * What we want here is to clear the order of variant children in useLayoutEffect
       * then children can re-add themselves in useEffect. This should add them in the intended order
       * for staggerChildren to work correctly.
       */
      useIsomorphicLayoutEffect(function () {
          var _a;
          isPresent(presenceContext) && ((_a = visualElement.variantChildrenOrder) === null || _a === void 0 ? void 0 : _a.clear());
      });
      React.useEffect(function () {
          var _a;
          isVariantNode && ((_a = variantContext.parent) === null || _a === void 0 ? void 0 : _a.addVariantChildOrder(visualElement));
      });
      return nextContext;
  }
  var variantProps = __spread(["initial"], variantPriorityOrder);
  var numVariantProps = variantProps.length;
  function isVariantLabel$1(v) {
      return typeof v === "string" || Array.isArray(v);
  }
  function isAnimationControls(v) {
      return typeof v === "object" && typeof v.start === "function";
  }
  function checkIfControllingVariants(props) {
      var _a;
      return (typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" ||
          isVariantLabel$1(props.animate) ||
          isVariantLabel$1(props.whileHover) ||
          isVariantLabel$1(props.whileDrag) ||
          isVariantLabel$1(props.whileTap) ||
          isVariantLabel$1(props.whileFocus) ||
          isVariantLabel$1(props.exit));
  }

  /**
   * Create a `motion` component.
   *
   * This function accepts a Component argument, which can be either a string (ie "div"
   * for `motion.div`), or an actual React component.
   *
   * Alongside this is a config option which provides a way of rendering the provided
   * component "offline", or outside the React render cycle.
   *
   * @internal
   */
  function createMotionComponent(Component, _a) {
      var defaultFeatures = _a.defaultFeatures, useVisualElement = _a.useVisualElement, useRender = _a.useRender;
      function MotionComponent(props, externalRef) {
          /**
           * If a component is static, we only visually update it as a
           * result of a React re-render, rather than any interactions or animations.
           * If this component or any ancestor is static, we disable hardware acceleration
           * and don't load any additional functionality.
           */
          var isStatic = React.useContext(MotionConfigContext).isStatic;
          /**
           * Create a VisualElement for this component. A VisualElement provides a common
           * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
           * providing a way of rendering to these APIs outside of the React render loop
           * for more performant animations and interactions
           */
          var visualElement = useVisualElement(Component, props, isStatic, externalRef);
          /**
           * Scrape MotionValues from props and add/remove them to/from the VisualElement.
           */
          useMotionValues(visualElement, props);
          /**
           * Add the visualElement as a node in the variant tree.
           */
          var variantContext = useVariants(visualElement, props, isStatic);
          /**
           * Load features as renderless components unless the component isStatic
           */
          var features = useFeatures(defaultFeatures, isStatic, visualElement, props);
          /**
           * Only create a new context value when the sub-contexts change.
           */
          var context = React.useMemo(function () { return ({ visualElement: visualElement, variantContext: variantContext }); }, [
              visualElement,
              variantContext,
          ]);
          var component = useRender(Component, props, visualElement);
          /**
           * If this component is a child of AnimateSharedLayout, we need to snapshot the component
           * before it's unmounted. This lives here rather than in features/layout/Measure because
           * as a child component its unmount effect runs after this component has been unmounted.
           */
          useSnapshotOnUnmount(visualElement);
          // The mount order and hierarchy is specific to ensure our element ref is hydrated by the time
          // all plugins and features has to execute.
          return (React.createElement(React.Fragment, null,
              React.createElement(MotionContext.Provider, { value: context }, component),
              features));
      }
      return React.forwardRef(MotionComponent);
  }

  /**
   * Apply constraints to a point. These constraints are both physical along an
   * axis, and an elastic factor that determines how much to constrain the point
   * by if it does lie outside the defined parameters.
   */
  function applyConstraints(point, _a, elastic) {
      var min = _a.min, max = _a.max;
      if (min !== undefined && point < min) {
          // If we have a min point defined, and this is outside of that, constrain
          point = elastic ? mix(min, point, elastic) : Math.max(point, min);
      }
      else if (max !== undefined && point > max) {
          // If we have a max point defined, and this is outside of that, constrain
          point = elastic ? mix(max, point, elastic) : Math.min(point, max);
      }
      return point;
  }
  /**
   * Calculates a min projection point based on a pointer, pointer progress
   * within the drag target, and constraints.
   *
   * For instance if an element was 100px width, we were dragging from 0.25
   * along this axis, the pointer is at 200px, and there were no constraints,
   * we would calculate a min projection point of 175px.
   */
  function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
      // Calculate a min point for this axis and apply it to the current pointer
      var min = point - length * progress;
      return constraints ? applyConstraints(min, constraints, elastic) : min;
  }
  /**
   * Calculate constraints in terms of the viewport when defined relatively to the
   * measured axis. This is measured from the nearest edge, so a max constraint of 200
   * on an axis with a max value of 300 would return a constraint of 500 - axis length
   */
  function calcRelativeAxisConstraints(axis, min, max) {
      return {
          min: min !== undefined ? axis.min + min : undefined,
          max: max !== undefined
              ? axis.max + max - (axis.max - axis.min)
              : undefined,
      };
  }
  /**
   * Calculate constraints in terms of the viewport when
   * defined relatively to the measured bounding box.
   */
  function calcRelativeConstraints(layoutBox, _a) {
      var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
      return {
          x: calcRelativeAxisConstraints(layoutBox.x, left, right),
          y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
      };
  }
  /**
   * Calculate viewport constraints when defined as another viewport-relative axis
   */
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
      var _a;
      var min = constraintsAxis.min - layoutAxis.min;
      var max = constraintsAxis.max - layoutAxis.max;
      // If the constraints axis is actually smaller than the layout axis then we can
      // flip the constraints
      if (constraintsAxis.max - constraintsAxis.min <
          layoutAxis.max - layoutAxis.min) {
          _a = __read([max, min], 2), min = _a[0], max = _a[1];
      }
      return {
          min: layoutAxis.min + min,
          max: layoutAxis.min + max,
      };
  }
  /**
   * Calculate viewport constraints when defined as another viewport-relative box
   */
  function calcViewportConstraints(layoutBox, constraintsBox) {
      return {
          x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
          y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
      };
  }
  /**
   * Calculate the an axis position based on two axes and a progress value.
   */
  function calcPositionFromProgress(axis, constraints, progress) {
      var axisLength = axis.max - axis.min;
      var min = mix(constraints.min, constraints.max - axisLength, progress);
      return { min: min, max: min + axisLength };
  }
  /**
   * Rebase the calculated viewport constraints relative to the layout.min point.
   */
  function rebaseAxisConstraints(layout, constraints) {
      var relativeConstraints = {};
      if (constraints.min !== undefined) {
          relativeConstraints.min = constraints.min - layout.min;
      }
      if (constraints.max !== undefined) {
          relativeConstraints.max = constraints.max - layout.min;
      }
      return relativeConstraints;
  }

  var elementDragControls = new WeakMap();
  /**
   *
   */
  var lastPointerEvent;
  var VisualElementDragControls = /** @class */ (function () {
      function VisualElementDragControls(_a) {
          var visualElement = _a.visualElement;
          /**
           * Track whether we're currently dragging.
           *
           * @internal
           */
          this.isDragging = false;
          /**
           * The current direction of drag, or `null` if both.
           *
           * @internal
           */
          this.currentDirection = null;
          /**
           * The permitted boundaries of travel, in pixels.
           *
           * @internal
           */
          this.constraints = false;
          /**
           * A reference to the host component's latest props.
           *
           * @internal
           */
          this.props = {};
          /**
           * @internal
           */
          this.hasMutatedConstraints = false;
          /**
           * Track the initial position of the cursor relative to the dragging element
           * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
           * an ideal bounding box for the VisualElement renderer to project into every frame.
           *
           * @internal
           */
          this.cursorProgress = {
              x: 0.5,
              y: 0.5,
          };
          // When updating _dragX, or _dragY instead of the VisualElement,
          // persist their values between drag gestures.
          this.originPoint = {};
          // This is a reference to the global drag gesture lock, ensuring only one component
          // can "capture" the drag of one or both axes.
          // TODO: Look into moving this into pansession?
          this.openGlobalLock = null;
          /**
           * @internal
           */
          this.panSession = null;
          this.visualElement = visualElement;
          this.visualElement.enableLayoutProjection();
          elementDragControls.set(visualElement, this);
      }
      /**
       * Instantiate a PanSession for the drag gesture
       *
       * @public
       */
      VisualElementDragControls.prototype.start = function (originEvent, _a) {
          var _this = this;
          var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
          /**
           * If this drag session has been manually triggered by the user, it might be from an event
           * outside the draggable element. If snapToCursor is set to true, we need to measure the position
           * of the element and snap it to the cursor.
           */
          snapToCursor && this.snapToCursor(originEvent);
          var onSessionStart = function () {
              // Stop any animations on both axis values immediately. This allows the user to throw and catch
              // the component.
              _this.stopMotion();
          };
          var onStart = function (event, info) {
              var _a, _b, _c;
              // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
              var _d = _this.props, drag = _d.drag, dragPropagation = _d.dragPropagation;
              if (drag && !dragPropagation) {
                  if (_this.openGlobalLock)
                      _this.openGlobalLock();
                  _this.openGlobalLock = getGlobalLock(drag);
                  // If we don 't have the lock, don't start dragging
                  if (!_this.openGlobalLock)
                      return;
              }
              /**
               * Record the progress of the mouse within the draggable element on each axis.
               * onPan, we're going to use this to calculate a new bounding box for the element to
               * project into. This will ensure that even if the DOM element moves via a relayout, it'll
               * stick to the correct place under the pointer.
               */
              _this.prepareBoundingBox();
              _this.visualElement.lockTargetBox();
              /**
               * Resolve the drag constraints. These are either set as top/right/bottom/left constraints
               * relative to the element's layout, or a ref to another element. Both need converting to
               * viewport coordinates.
               */
              _this.resolveDragConstraints();
              /**
               * When dragging starts, we want to find where the cursor is relative to the bounding box
               * of the element. Every frame, we calculate a new bounding box using this relative position
               * and let the visualElement renderer figure out how to reproject the element into this bounding
               * box.
               *
               * By doing it this way, rather than applying an x/y transform directly to the element,
               * we can ensure the component always visually sticks to the cursor as we'd expect, even
               * if the DOM element itself changes layout as a result of React updates the user might
               * make based on the drag position.
               */
              var point = getViewportPointFromEvent(event).point;
              eachAxis(function (axis) {
                  var _a = _this.visualElement.targetBox[axis], min = _a.min, max = _a.max;
                  _this.cursorProgress[axis] = cursorProgress
                      ? cursorProgress[axis]
                      : progress(min, max, point[axis]);
                  /**
                   * If we have external drag MotionValues, record their origin point. On pointermove
                   * we'll apply the pan gesture offset directly to this value.
                   */
                  var axisValue = _this.getAxisMotionValue(axis);
                  if (axisValue) {
                      _this.originPoint[axis] = axisValue.get();
                  }
              });
              // Set current drag status
              _this.isDragging = true;
              _this.currentDirection = null;
              // Fire onDragStart event
              (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
              (_c = _this.visualElement.animationState) === null || _c === void 0 ? void 0 : _c.setActive(AnimationType.Drag, true);
          };
          var onMove = function (event, info) {
              var _a, _b, _c, _d;
              var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
              // If we didn't successfully receive the gesture lock, early return.
              if (!dragPropagation && !_this.openGlobalLock)
                  return;
              var offset = info.offset;
              // Attempt to detect drag direction if directionLock is true
              if (dragDirectionLock && _this.currentDirection === null) {
                  _this.currentDirection = getCurrentDirection(offset);
                  // If we've successfully set a direction, notify listener
                  if (_this.currentDirection !== null) {
                      (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
                  }
                  return;
              }
              // Update each point with the latest position
              _this.updateAxis("x", event, offset);
              _this.updateAxis("y", event, offset);
              // Fire onDrag event
              (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
              // Update the last pointer event
              lastPointerEvent = event;
          };
          var onEnd = function (event, info) { return _this.stop(event, info); };
          var transformPagePoint = this.props.transformPagePoint;
          this.panSession = new PanSession(originEvent, {
              onSessionStart: onSessionStart,
              onStart: onStart,
              onMove: onMove,
              onEnd: onEnd,
          }, { transformPagePoint: transformPagePoint });
      };
      /**
       * Ensure the component's layout and target bounding boxes are up-to-date.
       */
      VisualElementDragControls.prototype.prepareBoundingBox = function () {
          var visualElement = this.visualElement;
          visualElement.withoutTransform(function () {
              visualElement.measureLayout();
          });
          visualElement.rebaseTargetBox(true, visualElement.getBoundingBoxWithoutTransforms());
      };
      VisualElementDragControls.prototype.resolveDragConstraints = function () {
          var _this = this;
          var dragConstraints = this.props.dragConstraints;
          if (dragConstraints) {
              this.constraints = isRefObject(dragConstraints)
                  ? this.resolveRefConstraints(this.visualElement.box, dragConstraints)
                  : calcRelativeConstraints(this.visualElement.box, dragConstraints);
          }
          else {
              this.constraints = false;
          }
          /**
           * If we're outputting to external MotionValues, we want to rebase the measured constraints
           * from viewport-relative to component-relative.
           */
          if (this.constraints && !this.hasMutatedConstraints) {
              eachAxis(function (axis) {
                  if (_this.getAxisMotionValue(axis)) {
                      _this.constraints[axis] = rebaseAxisConstraints(_this.visualElement.box[axis], _this.constraints[axis]);
                  }
              });
          }
      };
      VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
          var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
          var constraintsElement = constraints.current;
          invariant$1(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
          var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
          /**
           * If there's an onMeasureDragConstraints listener we call it and
           * if different constraints are returned, set constraints to that
           */
          if (onMeasureDragConstraints) {
              var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
              this.hasMutatedConstraints = !!userConstraints;
              if (userConstraints) {
                  measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
              }
          }
          return measuredConstraints;
      };
      VisualElementDragControls.prototype.cancelDrag = function () {
          var _a;
          this.isDragging = false;
          this.panSession && this.panSession.end();
          this.panSession = null;
          if (!this.props.dragPropagation && this.openGlobalLock) {
              this.openGlobalLock();
              this.openGlobalLock = null;
          }
          (_a = this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Drag, false);
      };
      VisualElementDragControls.prototype.stop = function (event, info) {
          var _a;
          this.visualElement.unlockTargetBox();
          (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
          this.panSession = null;
          var isDragging = this.isDragging;
          this.cancelDrag();
          if (!isDragging)
              return;
          var _b = this.props, dragMomentum = _b.dragMomentum, dragElastic = _b.dragElastic, onDragEnd = _b.onDragEnd;
          if (dragMomentum || dragElastic) {
              var velocity = info.velocity;
              this.animateDragEnd(velocity);
          }
          onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
      };
      VisualElementDragControls.prototype.snapToCursor = function (event) {
          var _this = this;
          this.prepareBoundingBox();
          eachAxis(function (axis) {
              var axisValue = _this.getAxisMotionValue(axis);
              if (axisValue) {
                  var point = getViewportPointFromEvent(event).point;
                  var box = _this.visualElement.box;
                  var length_1 = box[axis].max - box[axis].min;
                  var center = box[axis].min + length_1 / 2;
                  var offset = point[axis] - center;
                  _this.originPoint[axis] = point[axis];
                  axisValue.set(offset);
              }
              else {
                  _this.cursorProgress[axis] = 0.5;
                  _this.updateVisualElementAxis(axis, event);
              }
          });
      };
      /**
       * Update the specified axis with the latest pointer information.
       */
      VisualElementDragControls.prototype.updateAxis = function (axis, event, offset) {
          var drag = this.props.drag;
          // If we're not dragging this axis, do an early return.
          if (!shouldDrag(axis, drag, this.currentDirection))
              return;
          return this.getAxisMotionValue(axis)
              ? this.updateAxisMotionValue(axis, offset)
              : this.updateVisualElementAxis(axis, event);
      };
      VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
          var axisValue = this.getAxisMotionValue(axis);
          if (!offset || !axisValue)
              return;
          var dragElastic = this.props.dragElastic;
          var nextValue = this.originPoint[axis] + offset[axis];
          var update = this.constraints
              ? applyConstraints(nextValue, this.constraints[axis], dragElastic)
              : nextValue;
          axisValue.set(update);
      };
      VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, event) {
          var _a;
          var dragElastic = this.props.dragElastic;
          // Get the actual layout bounding box of the element
          var axisLayout = this.visualElement.box[axis];
          // Calculate its current length. In the future we might want to lerp this to animate
          // between lengths if the layout changes as we change the DOM
          var axisLength = axisLayout.max - axisLayout.min;
          // Get the initial progress that the pointer sat on this axis on gesture start.
          var axisProgress = this.cursorProgress[axis];
          var point = getViewportPointFromEvent(event).point;
          // Calculate a new min point based on the latest pointer position, constraints and elastic
          var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], dragElastic);
          // Update the axis viewport target with this new min and the length
          this.visualElement.setAxisTarget(axis, min, min + axisLength);
      };
      VisualElementDragControls.prototype.updateProps = function (_a) {
          var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? 0.35 : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = __rest(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
          this.props = __assign({ drag: drag,
              dragDirectionLock: dragDirectionLock,
              dragPropagation: dragPropagation,
              dragConstraints: dragConstraints,
              dragElastic: dragElastic,
              dragMomentum: dragMomentum }, remainingProps);
      };
      /**
       * Drag works differently depending on which props are provided.
       *
       * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
       * - If the component will perform layout animations, we output the gesture to the component's
       *      visual bounding box
       * - Otherwise, we apply the delta to the x/y motion values.
       */
      VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
          var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
          var dragKey = "_drag" + axis.toUpperCase();
          if (this.props[dragKey]) {
              return this.props[dragKey];
          }
          else if (!layout && layoutId === undefined) {
              return this.visualElement.getValue(axis, 0);
          }
      };
      VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
          var _this = this;
          var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
          var momentumAnimations = eachAxis(function (axis) {
              if (!shouldDrag(axis, drag, _this.currentDirection)) {
                  return;
              }
              var transition = _this.constraints ? _this.constraints[axis] : {};
              /**
               * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
               * of spring animations so we should look into adding a disable spring option to `inertia`.
               * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
               * using the value of `dragElastic`.
               */
              var bounceStiffness = dragElastic ? 200 : 1000000;
              var bounceDamping = dragElastic ? 40 : 10000000;
              var inertia = __assign(__assign({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                  bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
              // If we're not animating on an externally-provided `MotionValue` we can use the
              // component's animation controls which will handle interactions with whileHover (etc),
              // otherwise we just have to animate the `MotionValue` itself.
              return _this.getAxisMotionValue(axis)
                  ? _this.startAxisValueAnimation(axis, inertia)
                  : _this.visualElement.startLayoutAxisAnimation(axis, inertia);
          });
          // Run all animations and then resolve the new drag constraints.
          return Promise.all(momentumAnimations).then(function () {
              var _a, _b;
              (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
          });
      };
      VisualElementDragControls.prototype.stopMotion = function () {
          var _this = this;
          eachAxis(function (axis) {
              var axisValue = _this.getAxisMotionValue(axis);
              axisValue
                  ? axisValue.stop()
                  : _this.visualElement.stopLayoutAnimation();
          });
      };
      VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
          var axisValue = this.getAxisMotionValue(axis);
          if (!axisValue)
              return;
          var currentValue = axisValue.get();
          axisValue.set(currentValue);
          axisValue.set(currentValue); // Set twice to hard-reset velocity
          return startAnimation(axis, axisValue, 0, transition);
      };
      VisualElementDragControls.prototype.scalePoint = function () {
          var _this = this;
          var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
          if (!isRefObject(dragConstraints) || !this.constraintsBox)
              return;
          // Stop any current animations as there can be some visual glitching if we resize mid animation
          this.stopMotion();
          // Record the relative progress of the targetBox relative to the constraintsBox
          var boxProgress = { x: 0, y: 0 };
          eachAxis(function (axis) {
              boxProgress[axis] = calcOrigin(_this.visualElement.targetBox[axis], _this.constraintsBox[axis]);
          });
          /**
           * For each axis, calculate the current progress of the layout axis within the constraints.
           * Then, using the latest layout and constraints measurements, reposition the new layout axis
           * proportionally within the constraints.
           */
          this.prepareBoundingBox();
          this.resolveDragConstraints();
          eachAxis(function (axis) {
              if (!shouldDrag(axis, drag, null))
                  return;
              // Calculate the position of the targetBox relative to the constraintsBox using the
              // previously calculated progress
              var _a = calcPositionFromProgress(_this.visualElement.targetBox[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
              _this.visualElement.setAxisTarget(axis, min, max);
          });
      };
      VisualElementDragControls.prototype.mount = function (visualElement) {
          var _this = this;
          var element = visualElement.getInstance();
          /**
           * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
           */
          var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
              var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
              drag && dragListener && _this.start(event);
          });
          /**
           * Attach a window resize listener to scale the draggable target within its defined
           * constraints as the window resizes.
           */
          var stopResizeListener = addDomEvent(window, "resize", function () {
              _this.scalePoint();
          });
          /**
           * Ensure drag constraints are resolved correctly relative to the dragging element
           * whenever its layout changes.
           */
          var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
              if (_this.isDragging)
                  _this.resolveDragConstraints();
          });
          /**
           * If the previous component with this same layoutId was dragging at the time
           * it was unmounted, we want to continue the same gesture on this component.
           */
          var prevSnapshot = visualElement.prevSnapshot;
          (prevSnapshot === null || prevSnapshot === void 0 ? void 0 : prevSnapshot.isDragging) &&
              this.start(lastPointerEvent, {
                  cursorProgress: prevSnapshot.cursorProgress,
              });
          /**
           * Return a function that will teardown the drag gesture
           */
          return function () {
              stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
              stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
              stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
              _this.cancelDrag();
          };
      };
      return VisualElementDragControls;
  }());
  function shouldDrag(direction, drag, currentDirection) {
      return ((drag === true || drag === direction) &&
          (currentDirection === null || currentDirection === direction));
  }
  /**
   * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
   * than the provided threshold, return `null`.
   *
   * @param offset - The x/y offset from origin.
   * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
   */
  function getCurrentDirection(offset, lockThreshold) {
      if (lockThreshold === void 0) { lockThreshold = 10; }
      var direction = null;
      if (Math.abs(offset.y) > lockThreshold) {
          direction = "y";
      }
      else if (Math.abs(offset.x) > lockThreshold) {
          direction = "x";
      }
      return direction;
  }

  /**
   * A hook that allows an element to be dragged.
   *
   * @internal
   */
  function useDrag(props, visualElement) {
      var groupDragControls = props.dragControls;
      var transformPagePoint = React.useContext(MotionConfigContext).transformPagePoint;
      var dragControls = useConstant(function () {
          return new VisualElementDragControls({
              visualElement: visualElement,
          });
      });
      dragControls.updateProps(__assign(__assign({}, props), { transformPagePoint: transformPagePoint }));
      // If we've been provided a DragControls for manual control over the drag gesture,
      // subscribe this component to it on mount.
      React.useEffect(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
      // Mount the drag controls with the visualElement
      React.useEffect(function () { return dragControls.mount(visualElement); }, []);
  }

  var Component = makeRenderlessComponent(function (_a) {
      var visualElement = _a.visualElement, props = __rest(_a, ["visualElement"]);
      return useDrag(props, visualElement);
  });
  /**
   * @public
   */
  var Drag = {
      key: "drag",
      shouldRender: function (props) { return !!props.drag || !!props.dragControls; },
      getComponent: function () { return Component; },
  };

  /**
   * TODO: This component is quite small and no longer directly imports animation code.
   * It could be a candidate for folding back into the main `motion` component.
   */
  var ExitComponent = makeRenderlessComponent(function (props) {
      var custom = props.custom, visualElement = props.visualElement;
      var _a = __read(usePresence(), 2), isPresent = _a[0], onExitComplete = _a[1];
      var presenceContext = React.useContext(PresenceContext);
      React.useEffect(function () {
          var _a, _b;
          var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
          !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(onExitComplete));
      }, [isPresent]);
  });
  /**
   * @public
   */
  var Exit = {
      key: "exit",
      shouldRender: function (props) { return !!props.exit && !checkShouldInheritVariant(props); },
      getComponent: function () { return ExitComponent; },
  };

  /**
   * `useAnimationGroupSubscription` allows a component to subscribe to an
   * externally-created `AnimationControls`, created by the `useAnimation` hook.
   *
   * @param animation
   * @param controls
   *
   * @internal
   */
  function useAnimationGroupSubscription(visualElement, animation) {
      var unsubscribe = React.useMemo(function () { return animation.subscribe(visualElement); }, [
          animation,
      ]);
      useUnmountEffect(function () { return unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe(); });
  }

  var AnimationState = makeRenderlessComponent(function (props) {
      var visualElement = props.visualElement, animate = props.animate;
      /**
       * We dynamically generate the AnimationState manager as it contains a reference
       * to the underlying animation library. We only want to load that if we load this,
       * so people can optionally code split it out using the `m` component.
       */
      if (!visualElement.animationState) {
          visualElement.animationState = createAnimationState(visualElement);
      }
      var variantContext = useVariantContext();
      /**
       * Every render, we want to update the AnimationState with the latest props
       * and context. We could add these to the dependency list but as many of these
       * props can be objects or arrays it's not clear that we'd gain much performance.
       */
      React.useEffect(function () {
          visualElement.animationState.setProps(props, visualElement.inheritsVariants ? variantContext : undefined);
      });
      /**
       * Subscribe any provided AnimationControls to the component's VisualElement
       */
      if (animate instanceof AnimationControls) {
          useAnimationGroupSubscription(visualElement, animate);
      }
  });
  /**
   * @public
   */
  var Animation = {
      key: "animation",
      shouldRender: function () { return true; },
      getComponent: function (_a) {
          var animate = _a.animate, whileHover = _a.whileHover, whileFocus = _a.whileFocus, whileTap = _a.whileTap, whileDrag = _a.whileDrag, exit = _a.exit, variants = _a.variants;
          return animate ||
              whileHover ||
              whileFocus ||
              whileTap ||
              whileDrag ||
              exit ||
              variants
              ? AnimationState
              : undefined;
      },
  };

  function tweenAxis(target, prev, next, p) {
      target.min = mix(prev.min, next.min, p);
      target.max = mix(prev.max, next.max, p);
  }

  var progressTarget = 1000;
  var Animate = /** @class */ (function (_super) {
      __extends(Animate, _super);
      function Animate() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.frameTarget = {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
          };
          _this.stopAxisAnimation = {
              x: undefined,
              y: undefined,
          };
          _this.animate = function (target, origin, _a) {
              if (_a === void 0) { _a = {}; }
              var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, shouldStackAnimate = _a.shouldStackAnimate, config = __rest(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate"]);
              var _b = _this.props, visualElement = _b.visualElement, layout = _b.layout;
              /**
               * Early return if we've been instructed not to animate this render.
               */
              if (shouldStackAnimate === false)
                  return _this.safeToRemove();
              /**
               * Allow the measured origin (prev bounding box) and target (actual layout) to be
               * overridden by the provided config.
               */
              origin = originBox || origin;
              target = targetBox || target;
              var boxHasMoved = hasMoved(origin, target);
              var animations = eachAxis(function (axis) {
                  /**
                   * If layout is set to "position", we can resize the origin box based on the target
                   * box and only animate its position.
                   */
                  if (layout === "position") {
                      var targetLength = target[axis].max - target[axis].min;
                      origin[axis].max = origin[axis].min + targetLength;
                  }
                  if (visualElement.isTargetBoxLocked) {
                      return;
                  }
                  else if (visibilityAction !== undefined) {
                      // If we're meant to show/hide the visualElement, do so
                      visibilityAction === VisibilityAction.Hide
                          ? visualElement.hide()
                          : visualElement.show();
                  }
                  else if (boxHasMoved) {
                      // If the box has moved, animate between it's current visual state and its
                      // final state
                      return _this.animateAxis(axis, target[axis], origin[axis], config);
                  }
                  else {
                      // If the box has remained in the same place, immediately set the axis target
                      // to the final desired state
                      return visualElement.setAxisTarget(axis, target[axis].min, target[axis].max);
                  }
              });
              // Force a render to ensure there's no flash of uncorrected bounding box.
              visualElement.render();
              /**
               * If this visualElement isn't present (ie it's been removed from the tree by the user but
               * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
               * have successfully finished.
               */
              return Promise.all(animations).then(function () {
                  var _a, _b;
                  (_b = (_a = _this.props).onLayoutAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
                  if (visualElement.isPresent) {
                      visualElement.presence = Presence.Present;
                  }
                  else {
                      _this.safeToRemove();
                  }
              });
          };
          return _this;
      }
      Animate.prototype.componentDidMount = function () {
          var _this = this;
          var visualElement = this.props.visualElement;
          visualElement.animateMotionValue = startAnimation;
          visualElement.enableLayoutProjection();
          this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
          visualElement.updateConfig(__assign(__assign({}, visualElement.config), { safeToRemove: function () { return _this.safeToRemove(); } }));
      };
      Animate.prototype.componentWillUnmount = function () {
          var _this = this;
          this.unsubLayoutReady();
          eachAxis(function (axis) { var _a, _b; return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a); });
      };
      /**
       * TODO: This manually performs animations on the visualElement's layout progress
       * values. It'd be preferable to amend the HTMLVisualElement.startLayoutAxisAnimation
       * API to accept more custom animations like this.
       */
      Animate.prototype.animateAxis = function (axis, target, origin, _a) {
          var _b, _c;
          var _d = _a === void 0 ? {} : _a, transition = _d.transition, crossfadeOpacity = _d.crossfadeOpacity;
          (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
          var visualElement = this.props.visualElement;
          var frameTarget = this.frameTarget[axis];
          var layoutProgress = visualElement.getAxisProgress()[axis];
          /**
           * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
           * be re-incoporated into a subsequent spring animation.
           */
          layoutProgress.clearListeners();
          layoutProgress.set(0);
          layoutProgress.set(0);
          /**
           * If this is a crossfade animation, create a function that updates both the opacity of this component
           * and the one being crossfaded out.
           */
          var crossfade;
          if (crossfadeOpacity) {
              crossfade = this.createCrossfadeAnimation(crossfadeOpacity);
              visualElement.show();
          }
          /**
           * Create an animation function to run once per frame. This will tween the visual bounding box from
           * origin to target using the latest progress value.
           */
          var frame = function () {
              // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
              var p = layoutProgress.get() / progressTarget;
              // Tween the axis and update the visualElement with the latest values
              tweenAxis(frameTarget, origin, target, p);
              visualElement.setAxisTarget(axis, frameTarget.min, frameTarget.max);
              // If this is a crossfade animation, update both elements.
              crossfade === null || crossfade === void 0 ? void 0 : crossfade(p);
          };
          // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
          frame();
          // Ensure that the layout delta is updated for this frame.
          visualElement.updateLayoutDelta();
          // Create a function to stop animation on this specific axis
          var unsubscribeProgress = layoutProgress.onChange(frame);
          // Start the animation on this axis
          var animation = startAnimation(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, transition || this.props.transition || defaultTransition).then(unsubscribeProgress);
          this.stopAxisAnimation[axis] = function () {
              layoutProgress.stop();
              unsubscribeProgress();
          };
          return animation;
      };
      Animate.prototype.createCrossfadeAnimation = function (crossfadeOpacity) {
          var visualElement = this.props.visualElement;
          var opacity = visualElement.getValue("opacity", 0);
          return function (p) {
              opacity.set(easeCrossfadeIn(mix(0, 1, p)));
              crossfadeOpacity.set(easeCrossfadeOut(mix(1, 0, p)));
          };
      };
      Animate.prototype.safeToRemove = function () {
          var _a, _b;
          (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      Animate.prototype.render = function () {
          return null;
      };
      return Animate;
  }(React.Component));
  function AnimateLayoutContextProvider(props) {
      var _a = __read(usePresence(), 2), safeToRemove = _a[1];
      return React.createElement(Animate, __assign({}, props, { safeToRemove: safeToRemove }));
  }
  function hasMoved(a, b) {
      return hasAxisMoved(a.x, b.x) || hasAxisMoved(a.y, b.y);
  }
  function hasAxisMoved(a, b) {
      return a.min !== b.min || a.max !== b.max;
  }
  var defaultTransition = {
      duration: 0.45,
      ease: [0.4, 0, 0.1, 1],
  };
  function compress(min, max, easing) {
      return function (p) {
          // Could replace ifs with clamp
          if (p < min)
              return 0;
          if (p > max)
              return 1;
          return easing(progress(min, max, p));
      };
  }
  var easeCrossfadeIn = compress(0, 0.5, circOut);
  var easeCrossfadeOut = compress(0.5, 0.95, linear);
  /**
   * @public
   */
  var AnimateLayout = {
      key: "animate-layout",
      shouldRender: function (props) { return !!props.layout || !!props.layoutId; },
      getComponent: function () { return AnimateLayoutContextProvider; },
  };

  /**
   * This component is responsible for scheduling the measuring of the motion component
   */
  var Measure = /** @class */ (function (_super) {
      __extends(Measure, _super);
      function Measure() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * If this is a child of a SyncContext, register the VisualElement with it on mount.
       */
      Measure.prototype.componentDidMount = function () {
          var _a = this.props, syncLayout = _a.syncLayout, framerSyncLayout = _a.framerSyncLayout, visualElement = _a.visualElement;
          isSharedLayout(syncLayout) && syncLayout.register(visualElement);
          isSharedLayout(framerSyncLayout) &&
              framerSyncLayout.register(visualElement);
      };
      /**
       * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
       * handle the snapshotting.
       *
       * If it is stand-alone component, add it to the batcher.
       */
      Measure.prototype.getSnapshotBeforeUpdate = function () {
          var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
          if (isSharedLayout(syncLayout)) {
              syncLayout.syncUpdate();
          }
          else {
              visualElement.snapshotBoundingBox();
              syncLayout.add(visualElement);
          }
          return null;
      };
      Measure.prototype.componentDidUpdate = function () {
          var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
          if (!isSharedLayout(syncLayout))
              syncLayout.flush();
          /**
           * If this axis isn't animating as a result of this render we want to reset the targetBox
           * to the measured box
           */
          visualElement.rebaseTargetBox();
      };
      Measure.prototype.render = function () {
          return null;
      };
      return Measure;
  }(React__default.Component));
  function MeasureContextProvider(props) {
      var syncLayout = React.useContext(SharedLayoutContext);
      var framerSyncLayout = React.useContext(FramerTreeLayoutContext);
      return (React__default.createElement(Measure, __assign({}, props, { syncLayout: syncLayout, framerSyncLayout: framerSyncLayout })));
  }
  var MeasureLayout = {
      key: "measure-layout",
      shouldRender: function (props) {
          return !!props.drag || !!props.layout || !!props.layoutId;
      },
      getComponent: function () { return MeasureContextProvider; },
  };

  var allMotionFeatures = [
      MeasureLayout,
      Animation,
      Drag,
      Gestures,
      Exit,
      AnimateLayout,
  ];
  var domBaseConfig = {
      useVisualElement: useDomVisualElement,
      useRender: useRender,
  };
  /**
   * Convert any React component into a `motion` component. The provided component
   * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
   *
   * ```jsx
   * const Component = React.forwardRef((props, ref) => {
   *   return <div ref={ref} />
   * })
   *
   * const MotionComponent = motion.custom(Component)
   * ```
   *
   * @public
   */
  function createMotionProxy(defaultFeatures) {
      var config = __assign(__assign({}, domBaseConfig), { defaultFeatures: defaultFeatures });
      function custom(Component) {
          return createMotionComponent(Component, config);
      }
      var componentCache = new Map();
      function get(target, key) {
          if (key === "custom")
              return target.custom;
          if (!componentCache.has(key)) {
              componentCache.set(key, createMotionComponent(key, config));
          }
          return componentCache.get(key);
      }
      return new Proxy({ custom: custom }, { get: get });
  }
  /**
   * HTML & SVG components, optimised for use with gestures and animation. These can be used as
   * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
   *
   * @public
   */
  var motion = /*@__PURE__*/ createMotionProxy(allMotionFeatures);

  function useForceUpdate() {
      var unloadingRef = React.useRef(false);
      var _a = __read(React.useState(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
      useUnmountEffect(function () { return (unloadingRef.current = true); });
      return React.useCallback(function () {
          !unloadingRef.current && setForcedRenderCount(forcedRenderCount + 1);
      }, [forcedRenderCount]);
  }

  var presenceId = 0;
  function getPresenceId() {
      var id = presenceId;
      presenceId++;
      return id;
  }
  var PresenceChild = function (_a) {
      var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
      var presenceChildren = useConstant(newChildrenMap);
      var id = useConstant(getPresenceId);
      var context = React.useMemo(function () {
          return {
              id: id,
              initial: initial,
              isPresent: isPresent,
              custom: custom,
              onExitComplete: function (childId) {
                  presenceChildren.set(childId, true);
                  var allComplete = true;
                  presenceChildren.forEach(function (isComplete) {
                      if (!isComplete)
                          allComplete = false;
                  });
                  allComplete && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
              },
              register: function (childId) {
                  presenceChildren.set(childId, false);
                  return function () { return presenceChildren.delete(childId); };
              },
          };
      }, 
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      presenceAffectsLayout ? undefined : [isPresent]);
      React.useMemo(function () {
          presenceChildren.forEach(function (_, key) { return presenceChildren.set(key, false); });
      }, [isPresent]);
      return (React.createElement(PresenceContext.Provider, { value: context }, children));
  };
  function newChildrenMap() {
      return new Map();
  }

  function getChildKey(child) {
      return child.key || "";
  }
  function updateChildLookup(children, allChildren) {
      var seenChildren = process.env.NODE_ENV !== "production" ? new Set() : null;
      children.forEach(function (child) {
          var key = getChildKey(child);
          if (process.env.NODE_ENV !== "production" && seenChildren) {
              if (seenChildren.has(key)) {
                  console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
              }
              seenChildren.add(key);
          }
          allChildren.set(key, child);
      });
  }
  function onlyElements(children) {
      var filtered = [];
      // We use forEach here instead of map as map mutates the component key by preprending `.$`
      React.Children.forEach(children, function (child) {
          if (React.isValidElement(child))
              filtered.push(child);
      });
      return filtered;
  }
  /**
   * `AnimatePresence` enables the animation of components that have been removed from the tree.
   *
   * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
   *
   * @library
   *
   * Any `Frame` components that have an `exit` property defined will animate out when removed from
   * the tree.
   *
   * ```jsx
   * import { Frame, AnimatePresence } from 'framer'
   *
   * // As items are added and removed from `items`
   * export function Items({ items }) {
   *   return (
   *     <AnimatePresence>
   *       {items.map(item => (
   *         <Frame
   *           key={item.id}
   *           initial={{ opacity: 0 }}
   *           animate={{ opacity: 1 }}
   *           exit={{ opacity: 0 }}
   *         />
   *       ))}
   *     </AnimatePresence>
   *   )
   * }
   * ```
   *
   * You can sequence exit animations throughout a tree using variants.
   *
   * @motion
   *
   * Any `motion` components that have an `exit` property defined will animate out when removed from
   * the tree.
   *
   * ```jsx
   * import { motion, AnimatePresence } from 'framer-motion'
   *
   * export const Items = ({ items }) => (
   *   <AnimatePresence>
   *     {items.map(item => (
   *       <motion.div
   *         key={item.id}
   *         initial={{ opacity: 0 }}
   *         animate={{ opacity: 1 }}
   *         exit={{ opacity: 0 }}
   *       />
   *     ))}
   *   </AnimatePresence>
   * )
   * ```
   *
   * You can sequence exit animations throughout a tree using variants.
   *
   * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
   * once all `motion` components have finished animating out. Likewise, any components using
   * `usePresence` all need to call `safeToRemove`.
   *
   * @public
   */
  var AnimatePresence = function (_a) {
      var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
      // We want to force a re-render once all exiting animations have finished. We
      // either use a local forceRender function, or one from a parent context if it exists.
      var forceRender = useForceUpdate();
      var layoutContext = React.useContext(SharedLayoutContext);
      if (isSharedLayout(layoutContext)) {
          forceRender = layoutContext.forceUpdate;
      }
      var isInitialRender = React.useRef(true);
      // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
      var filteredChildren = onlyElements(children);
      // Keep a living record of the children we're actually rendering so we
      // can diff to figure out which are entering and exiting
      var presentChildren = React.useRef(filteredChildren);
      // A lookup table to quickly reference components by key
      var allChildren = React.useRef(new Map())
          .current;
      // A living record of all currently exiting components.
      var exiting = React.useRef(new Set()).current;
      updateChildLookup(filteredChildren, allChildren);
      // If this is the initial component render, just deal with logic surrounding whether
      // we play onMount animations or not.
      if (isInitialRender.current) {
          isInitialRender.current = false;
          return (React.createElement(React.Fragment, null, filteredChildren.map(function (child) { return (React.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout }, child)); })));
      }
      // If this is a subsequent render, deal with entering and exiting children
      var childrenToRender = __spread(filteredChildren);
      // Diff the keys of the currently-present and target children to update our
      // exiting list.
      var presentKeys = presentChildren.current.map(getChildKey);
      var targetKeys = filteredChildren.map(getChildKey);
      // Diff the present children with our target children and mark those that are exiting
      var numPresent = presentKeys.length;
      for (var i = 0; i < numPresent; i++) {
          var key = presentKeys[i];
          if (targetKeys.indexOf(key) === -1) {
              exiting.add(key);
          }
          else {
              // In case this key has re-entered, remove from the exiting list
              exiting.delete(key);
          }
      }
      // If we currently have exiting children, and we're deferring rendering incoming children
      // until after all current children have exiting, empty the childrenToRender array
      if (exitBeforeEnter && exiting.size) {
          childrenToRender = [];
      }
      // Loop through all currently exiting components and clone them to overwrite `animate`
      // with any `exit` prop they might have defined.
      exiting.forEach(function (key) {
          // If this component is actually entering again, early return
          if (targetKeys.indexOf(key) !== -1)
              return;
          var child = allChildren.get(key);
          if (!child)
              return;
          var insertionIndex = presentKeys.indexOf(key);
          var onExit = function () {
              allChildren.delete(key);
              exiting.delete(key);
              // Remove this child from the present children
              var removeIndex = presentChildren.current.findIndex(function (presentChild) { return presentChild.key === key; });
              presentChildren.current.splice(removeIndex, 1);
              // Defer re-rendering until all exiting children have indeed left
              if (!exiting.size) {
                  presentChildren.current = filteredChildren;
                  forceRender();
                  onExitComplete && onExitComplete();
              }
          };
          childrenToRender.splice(insertionIndex, 0, React.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout }, child));
      });
      // Add `MotionContext` even to children that don't need it to ensure we're rendering
      // the same tree between renders
      childrenToRender = childrenToRender.map(function (child) {
          var key = child.key;
          return exiting.has(key) ? (child) : (React.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout }, child));
      });
      presentChildren.current = childrenToRender;
      if (process.env.NODE_ENV !== "production" &&
          exitBeforeEnter &&
          childrenToRender.length > 1) {
          console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
      }
      return (React.createElement(React.Fragment, null, exiting.size
          ? childrenToRender
          : childrenToRender.map(function (child) { return React.cloneElement(child); })));
  };

  function createSwitchAnimation(child, stack) {
      if (stack && child !== stack.lead) {
          return { visibilityAction: VisibilityAction.Hide };
      }
      else if (stack &&
          child.presence !== Presence.Entering &&
          child === stack.lead &&
          stack.lead !== stack.prevLead) {
          return { visibilityAction: VisibilityAction.Show };
      }
      var originBox;
      var targetBox;
      if (child.presence === Presence.Entering) {
          originBox = stack === null || stack === void 0 ? void 0 : stack.getFollowOrigin();
      }
      else if (child.presence === Presence.Exiting) {
          targetBox = stack === null || stack === void 0 ? void 0 : stack.getFollowTarget();
      }
      return { originBox: originBox, targetBox: targetBox };
  }
  function createCrossfadeAnimation(child, stack) {
      var _a, _b, _c;
      var config = {};
      var stackLead = stack && stack.lead;
      var stackLeadPresence = stackLead === null || stackLead === void 0 ? void 0 : stackLead.presence;
      if (stack && child === stackLead) {
          if (child.presence === Presence.Entering) {
              config.originBox = stack.getFollowOrigin();
          }
          else if (child.presence === Presence.Exiting) {
              config.targetBox = stack.getFollowTarget();
          }
      }
      else if (stack && child === stack.follow) {
          config.transition = stack.getLeadTransition();
          if (stackLeadPresence === Presence.Entering) {
              config.targetBox = stack.getLeadTarget();
          }
          else if (stackLeadPresence === Presence.Exiting) {
              config.originBox = stack.getLeadOrigin();
          }
      }
      // If neither the lead or follow component is the root child of AnimatePresence,
      // don't handle crossfade animations
      if (!((_a = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _a === void 0 ? void 0 : _a.isPresenceRoot) && !(stackLead === null || stackLead === void 0 ? void 0 : stackLead.isPresenceRoot)) {
          return config;
      }
      if (!stack || child === stackLead) {
          if (child.presence === Presence.Entering) {
              config.crossfadeOpacity = (_b = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _b === void 0 ? void 0 : _b.getValue("opacity", 0);
          }
      }
      else if (stack && child === stack.follow) {
          if (!stackLead || stackLeadPresence === Presence.Entering) ;
          else if (stackLeadPresence === Presence.Exiting) {
              config.crossfadeOpacity = (_c = stack === null || stack === void 0 ? void 0 : stack.lead) === null || _c === void 0 ? void 0 : _c.getValue("opacity", 1);
          }
      }
      else {
          config.visibilityAction = VisibilityAction.Hide;
      }
      return config;
  }

  /**
   * For each layout animation, we want to identify two components
   * within a stack that will serve as the "lead" and "follow" components.
   *
   * In the switch animation, the lead component performs the entire animation.
   * It uses the follow bounding box to animate out from and back to. The follow
   * component is hidden.
   *
   * In the crossfade animation, both the lead and follow components perform
   * the entire animation, animating from the follow origin bounding box to the lead
   * target bounding box.
   *
   * Generalising a stack as First In Last Out, *searching from the end* we can
   * generally consider the lead component to be:
   *  - If the last child is present, the last child
   *  - If the last child is exiting, the last *encountered* exiting component
   */
  function findLeadAndFollow(stack, _a) {
      var _b = __read(_a, 2), prevLead = _b[0], prevFollow = _b[1];
      var lead = undefined;
      var leadIndex = 0;
      var follow = undefined;
      // Find the lead child first
      var numInStack = stack.length;
      var lastIsPresent = false;
      for (var i = numInStack - 1; i >= 0; i--) {
          var child = stack[i];
          var isLastInStack = i === numInStack - 1;
          if (isLastInStack)
              lastIsPresent = child.isPresent;
          if (lastIsPresent) {
              lead = child;
          }
          else {
              // If the child before this will be present, make this the
              // lead.
              var prev = stack[i - 1];
              if (prev && prev.isPresent)
                  lead = child;
          }
          if (lead) {
              leadIndex = i;
              break;
          }
      }
      if (!lead)
          lead = stack[0];
      // Find the follow child
      follow = stack[leadIndex - 1];
      // If the lead component is exiting, find the closest follow
      // present component
      if (lead) {
          for (var i = leadIndex - 1; i >= 0; i--) {
              var child = stack[i];
              if (child.isPresent) {
                  follow = child;
                  break;
              }
          }
      }
      // If the lead has changed and the previous lead still exists in the
      // stack, set it to the previous lead. This allows us to differentiate between
      // a, b, c(exit) -> a, b(exit), c(exit)
      // and
      // a, b(exit), c -> a, b(exit), c(exit)
      if (lead !== prevLead &&
          !lastIsPresent &&
          follow === prevFollow &&
          stack.find(function (stackChild) { return stackChild === prevLead; })) {
          lead = prevLead;
      }
      return [lead, follow];
  }
  var LayoutStack = /** @class */ (function () {
      function LayoutStack() {
          this.order = [];
          // Track whether we've ever had a child
          this.hasChildren = false;
      }
      LayoutStack.prototype.add = function (child) {
          var _a;
          this.order.push(child);
          // Load previous values from snapshot into this child
          // TODO Neaten up
          // TODO Double check when reimplementing move
          // TODO Add isDragging status and
          if (this.snapshot) {
              child.prevSnapshot = this.snapshot;
              // TODO Remove in favour of above
              child.prevViewportBox = this.snapshot.boundingBox;
              var latest = this.snapshot.latestMotionValues;
              for (var key in latest) {
                  if (!child.hasValue(key)) {
                      child.addValue(key, motionValue(latest[key]));
                  }
                  else {
                      (_a = child.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(latest[key]);
                  }
              }
          }
          this.hasChildren = true;
      };
      LayoutStack.prototype.remove = function (child) {
          var index = this.order.findIndex(function (stackChild) { return child === stackChild; });
          if (index !== -1)
              this.order.splice(index, 1);
      };
      LayoutStack.prototype.updateLeadAndFollow = function () {
          this.prevLead = this.lead;
          this.prevFollow = this.follow;
          var _a = __read(findLeadAndFollow(this.order, [
              this.lead,
              this.follow,
          ]), 2), lead = _a[0], follow = _a[1];
          this.lead = lead;
          this.follow = follow;
      };
      LayoutStack.prototype.updateSnapshot = function () {
          if (!this.lead)
              return;
          var snapshot = {
              boundingBox: this.lead.prevViewportBox,
              latestMotionValues: {},
          };
          this.lead.forEachValue(function (value, key) {
              var latest = value.get();
              if (!isTransformProp(latest)) {
                  snapshot.latestMotionValues[key] = latest;
              }
          });
          var dragControls = elementDragControls.get(this.lead);
          if (dragControls && dragControls.isDragging) {
              snapshot.isDragging = true;
              snapshot.cursorProgress = dragControls.cursorProgress;
          }
          this.snapshot = snapshot;
      };
      LayoutStack.prototype.isLeadPresent = function () {
          var _a;
          return this.lead && ((_a = this.lead) === null || _a === void 0 ? void 0 : _a.presence) !== Presence.Exiting;
      };
      LayoutStack.prototype.getFollowOrigin = function () {
          var _a;
          return this.follow
              ? this.follow.prevViewportBox
              : (_a = this.snapshot) === null || _a === void 0 ? void 0 : _a.boundingBox;
      };
      LayoutStack.prototype.getFollowTarget = function () {
          var _a;
          return (_a = this.follow) === null || _a === void 0 ? void 0 : _a.box;
      };
      LayoutStack.prototype.getLeadOrigin = function () {
          var _a;
          return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.prevViewportBox;
      };
      LayoutStack.prototype.getLeadTarget = function () {
          var _a;
          return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.box;
      };
      LayoutStack.prototype.getLeadTransition = function () {
          var _a;
          return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.config.transition;
      };
      return LayoutStack;
  }());

  function resetRotate(child) {
      // If there's no detected rotation values, we can early return without a forced render.
      var hasRotate = false;
      // Keep a record of all the values we've reset
      var resetValues = {};
      // Check the rotate value of all axes and reset to 0
      for (var i = 0; i < transformAxes.length; i++) {
          var axis = transformAxes[i];
          var key = "rotate" + axis;
          // If this rotation doesn't exist as a motion value, then we don't
          // need to reset it
          if (!child.hasValue(key) || child.latest[key] === 0)
              continue;
          hasRotate = true;
          // Record the rotation and then temporarily set it to 0
          resetValues[key] = child.latest[key];
          child.latest[key] = 0;
      }
      // If there's no rotation values, we don't need to do any more.
      if (!hasRotate)
          return;
      // Force a render of this element to apply the transform with all rotations
      // set to 0.
      child.render();
      // Put back all the values we reset
      for (var key in resetValues) {
          child.latest[key] = resetValues[key];
      }
      // Schedule a render for the next frame. This ensures we won't visually
      // see the element with the reset rotate value applied.
      child.scheduleRender();
  }

  /**
   * @public
   */
  var AnimateSharedLayout = /** @class */ (function (_super) {
      __extends(AnimateSharedLayout, _super);
      function AnimateSharedLayout() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * A list of all the children in the shared layout
           */
          _this.children = new Set();
          /**
           * As animate components with a defined `layoutId` are added/removed to the tree,
           * we store them in order. When one is added, it will animate out from the
           * previous one, and when it's removed, it'll animate to the previous one.
           */
          _this.stacks = new Map();
          /**
           * Track whether the component has mounted. If it hasn't, the presence of added children
           * are set to Present, whereas if it has they're considered Entering
           */
          _this.hasMounted = false;
          /**
           * Track whether we already have an update scheduled. If we don't, we'll run snapshots
           * and schedule one.
           */
          _this.updateScheduled = false;
          /**
           * Tracks whether we already have a render scheduled. If we don't, we'll force one with this.forceRender
           */
          _this.renderScheduled = false;
          /**
           * The methods provided to all children in the shared layout tree.
           */
          _this.syncContext = __assign(__assign({}, createBatcher()), { syncUpdate: function (force) { return _this.scheduleUpdate(force); }, forceUpdate: function () {
                  // By copying syncContext to itself, when this component re-renders it'll also re-render
                  // all children subscribed to the SharedLayout context.
                  _this.syncContext = __assign({}, _this.syncContext);
                  _this.scheduleUpdate(true);
              }, register: function (child) { return _this.addChild(child); }, remove: function (child) { return _this.removeChild(child); } });
          return _this;
      }
      AnimateSharedLayout.prototype.componentDidMount = function () {
          this.hasMounted = true;
          this.updateStacks();
      };
      AnimateSharedLayout.prototype.componentDidUpdate = function () {
          this.startLayoutAnimation();
      };
      AnimateSharedLayout.prototype.shouldComponentUpdate = function () {
          this.renderScheduled = true;
          return true;
      };
      AnimateSharedLayout.prototype.startLayoutAnimation = function () {
          var _this = this;
          /**
           * Reset update and render scheduled status
           */
          this.renderScheduled = this.updateScheduled = false;
          var type = this.props.type;
          /**
           * Update presence metadata based on the latest AnimatePresence status.
           * This is a kind of goofy way of dealing with this, perhaps there's a better model to find.
           */
          this.children.forEach(function (child) {
              if (!child.isPresent) {
                  child.presence = Presence.Exiting;
              }
              else if (child.presence !== Presence.Entering) {
                  child.presence =
                      child.presence === Presence.Exiting
                          ? Presence.Entering
                          : Presence.Present;
              }
          });
          /**
           * In every layoutId stack, nominate a component to lead the animation and another
           * to follow
           */
          this.updateStacks();
          /**
           * Decide which animation to use between shared layoutId components
           */
          var createAnimation = type === "crossfade"
              ? createCrossfadeAnimation
              : createSwitchAnimation;
          /**
           * Create a handler which we can use to flush the children animations
           */
          var handler = {
              measureLayout: function (child) { return child.measureLayout(); },
              layoutReady: function (child) {
                  var layoutId = child.layoutId;
                  child.layoutReady(createAnimation(child, _this.getStack(layoutId)));
              },
              parent: this.context.visualElement,
          };
          /**
           * Shared layout animations can be used without the AnimateSharedLayout wrapping component.
           * This requires some co-ordination across components to stop layout thrashing
           * and ensure measurements are taken at the correct time.
           *
           * Here we use that same mechanism of schedule/flush.
           */
          this.children.forEach(function (child) { return _this.syncContext.add(child); });
          this.syncContext.flush(handler);
          /**
           * Clear snapshots so subsequent rerenders don't retain memory of outgoing components
           */
          this.stacks.forEach(function (stack) { return (stack.snapshot = undefined); });
      };
      AnimateSharedLayout.prototype.updateStacks = function () {
          this.stacks.forEach(function (stack) { return stack.updateLeadAndFollow(); });
      };
      AnimateSharedLayout.prototype.scheduleUpdate = function (force) {
          if (force === void 0) { force = false; }
          if (!(force || !this.updateScheduled))
              return;
          /**
           * Flag we've scheduled an update
           */
          this.updateScheduled = true;
          /**
           * Write: Reset rotation transforms so bounding boxes can be accurately measured.
           */
          this.children.forEach(function (child) { return resetRotate(child); });
          /**
           * Read: Snapshot children
           */
          this.children.forEach(function (child) { return child.snapshotBoundingBox(); });
          /**
           * Every child keeps a local snapshot, but we also want to record
           * snapshots of the visible children as, if they're are being removed
           * in this render, we can still access them.
           */
          this.stacks.forEach(function (stack) { return stack.updateSnapshot(); });
          /**
           * Force a rerender by setting state if we aren't already going to render.
           */
          if (force || !this.renderScheduled) {
              this.renderScheduled = true;
              this.forceUpdate();
          }
      };
      AnimateSharedLayout.prototype.addChild = function (child) {
          this.children.add(child);
          this.addToStack(child);
          child.presence = this.hasMounted ? Presence.Entering : Presence.Present;
      };
      AnimateSharedLayout.prototype.removeChild = function (child) {
          this.scheduleUpdate();
          this.children.delete(child);
          this.removeFromStack(child);
      };
      AnimateSharedLayout.prototype.addToStack = function (child) {
          var stack = this.getStack(child.layoutId);
          stack === null || stack === void 0 ? void 0 : stack.add(child);
      };
      AnimateSharedLayout.prototype.removeFromStack = function (child) {
          var stack = this.getStack(child.layoutId);
          stack === null || stack === void 0 ? void 0 : stack.remove(child);
      };
      /**
       * Return a stack of animate children based on the provided layoutId.
       * Will create a stack if none currently exists with that layoutId.
       */
      AnimateSharedLayout.prototype.getStack = function (id) {
          if (id === undefined)
              return;
          // Create stack if it doesn't already exist
          !this.stacks.has(id) && this.stacks.set(id, new LayoutStack());
          return this.stacks.get(id);
      };
      AnimateSharedLayout.prototype.render = function () {
          return (React.createElement(SharedLayoutContext.Provider, { value: this.syncContext }, this.props.children));
      };
      AnimateSharedLayout.contextType = MotionContext;
      return AnimateSharedLayout;
  }(React.Component));

  /**
   * This is just a very basic VisualElement, more of a hack to keep supporting useAnimatedState with
   * the latest APIs.
   */
  var StateVisualElement = /** @class */ (function (_super) {
      __extends(StateVisualElement, _super);
      function StateVisualElement() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.initialState = {};
          return _this;
      }
      StateVisualElement.prototype.updateLayoutDelta = function () { };
      StateVisualElement.prototype.build = function () { };
      StateVisualElement.prototype.clean = function () { };
      StateVisualElement.prototype.makeTargetAnimatable = function (_a) {
          var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
          var origin = getOrigin(target, transition || {}, this);
          checkTargetForNewValues(this, target, origin);
          return __assign({ transition: transition, transitionEnd: transitionEnd }, target);
      };
      StateVisualElement.prototype.getBoundingBox = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
      };
      StateVisualElement.prototype.readNativeValue = function (key) {
          return this.initialState[key] || 0;
      };
      StateVisualElement.prototype.render = function () {
          this.build();
      };
      return StateVisualElement;
  }(VisualElement));

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n  border: solid ", ";\n  border-width: 0 1px 1px 0;\n  transform: ", ";\n  position: absolute;\n  right: 25px;\n  top: 19px;\n  padding: 3px;\n  transition: 0.4s;\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n  line-height: 2.5em;\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n  width: 1.3em;\n  height: 1.3em;\n  margin: ", ";\n  padding-left: ", ";\n  margin-right: ", ";\n  line-height: 2.5em;\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n      border-bottom: 1px solid gray;\n      box-shadow: 0 2px 5px gray;\n    "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 2.7em;\n  display: flex;\n  position: relative;\n  white-space: nowrap;\n  color: ", ";\n  cursor: pointer;\n  ", "\n\n  &:hover {\n    color: ", ";\n    transition: 0.1s ease-in all;\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var Menu = styled(motion.div)(_templateObject(), function (props) {
    return props.isMenuSelected ? props.theme.menuItem.active : props.theme.menuItem.color;
  }, function (props) {
    return !props.isMenuExpanded && react.css(_templateObject2());
  }, function (props) {
    return props.isMenuSelected ? props.theme.menuItem.activeHoverColor : props.theme.menuItem.hoverColor;
  });
  var MenuIcon = styled(motion.div)(_templateObject3(), function (props) {
    return !props.isDrawerOpen && '0 auto';
  }, function (props) {
    return props.isDrawerOpen && '20px';
  }, function (props) {
    return props.isDrawerOpen ? '30px' : 'auto';
  });
  var MenuName = styled(motion.div)(_templateObject4());
  var DropDownIcon = styled.span(_templateObject5(), function (props) {
    return props.theme.expandArrow.color;
  }, function (props) {
    return props.open ? 'rotate(45deg)' : 'rotate(135deg)';
  });

  var brandVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };
  var menuVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };
  var menuNameVariants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.6
      }
    },
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        delay: 0.2,
        duration: 0.6
      }
    }
  };
  var menuIconVariants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0,
        duration: 0.6
      }
    },
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        delay: 0,
        duration: 0.6
      }
    }
  };
  var sidebarVariants = {
    expanded: {
      width: '20%',
      transition: {
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    collapsed: {
      width: '5%',
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };

  var menuAnimationProps = {
    variants: menuVariants,
    initial: 'hidden',
    animate: 'show',
    exit: 'hidden'
  };

  var menuNameAnimationProps = _objectSpread2(_objectSpread2({}, menuAnimationProps), {}, {
    variants: menuNameVariants
  });

  var menuIconAnimationProps = _objectSpread2(_objectSpread2({}, menuAnimationProps), {}, {
    variants: menuIconVariants
  });

  var MenuItem = function MenuItem(props) {
    var name = props.name,
        to = props.to,
        icon = props.icon,
        hasChildren = props.hasChildren,
        isDrawerOpen = props.isDrawerOpen,
        isMenuExpanded = props.isMenuExpanded,
        isMenuSelected = props.isMenuSelected,
        onClick = props.onClick,
        theme = props.theme;
    var history = useHistory();
    /**
     * Below will be executed when the to value changes
     */

    React.useEffect(function () {
      history.push(to);
    }, [to]);
    return /*#__PURE__*/React__default.createElement(AnimatePresence, null, /*#__PURE__*/React__default.createElement(Menu, _extends({
      layout: true,
      theme: theme
    }, menuAnimationProps, {
      isMenuExpanded: isMenuExpanded,
      isMenuSelected: isMenuSelected,
      onClick: onClick
    }), /*#__PURE__*/React__default.createElement(MenuIcon, _extends({
      layout: true
    }, menuIconAnimationProps, {
      isDrawerOpen: isDrawerOpen
    }), icon), isDrawerOpen && /*#__PURE__*/React__default.createElement(MenuName, _extends({
      layout: true
    }, menuNameAnimationProps), name), hasChildren && isDrawerOpen && /*#__PURE__*/React__default.createElement(DropDownIcon, {
      theme: theme,
      open: isMenuExpanded || false
    })));
  };

  MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.element,
    hasChildren: PropTypes.bool.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    isMenuExpanded: PropTypes.bool,
    isMenuSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    theme: PropTypes.object
  };
  var MenuItem$1 = /*#__PURE__*/React.memo(MenuItem);

  var useWindowWidth = function useWindowWidth() {
    var _useState = React.useState(window.innerWidth),
        _useState2 = _slicedToArray(_useState, 2),
        width = _useState2[0],
        setWidth = _useState2[1];

    React.useEffect(function () {
      var resizeListener = function resizeListener() {
        return setWidth(window.innerWidth);
      };

      window.addEventListener('resize', resizeListener);
      return function () {
        window.removeEventListener('resize', resizeListener);
      };
    }, []);
    return width;
  };

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral(["\n  src: ", ";\n  alt: 'Brand Logo';\n  height: 48px;\n  width: 48px;\n  padding: 5px 5px;\n"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: xx-large;\n  font-weight: bolder;\n  letter-spacing: 0.1em;\n  color: ", ";\n  display: ", ";\n  cursor: pointer;\n\n  &:hover {\n    color: ", ";\n  }\n"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0 2px 5px gray;\n  line-height: 3em;\n  background-color: ", ";\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var BrandContainer = styled.div(_templateObject$1(), function (props) {
    return props.theme.header.backgroundColor;
  });
  var Brand = styled(motion.div)(_templateObject2$1(), function (props) {
    return props.theme.header.color;
  }, function (props) {
    return props.shouldDisplay ? 'block' : 'none';
  }, function (props) {
    return props.theme.header.hoverColor;
  });
  var BrandLogo = styled.img(_templateObject3$1(), function (props) {
    return props.src;
  });

  var brandAnimationProps = {
    variants: brandVariants,
    initial: 'hidden',
    animate: 'show',
    exit: 'hidden'
  };

  var Header = function Header(_ref) {
    var shouldExpand = _ref.shouldExpand,
        brandName = _ref.brandName,
        theme = _ref.theme;
    return /*#__PURE__*/React__default.createElement(BrandContainer, {
      theme: theme
    }, /*#__PURE__*/React__default.createElement(AnimatePresence, null, shouldExpand ? !!brandName.logoPath ? /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(BrandLogo, {
      src: brandName.logoPath
    }), /*#__PURE__*/React__default.createElement(Brand, _extends({
      theme: theme,
      shouldDisplay: shouldExpand,
      layout: true
    }, brandAnimationProps), brandName.name)) : /*#__PURE__*/React__default.createElement(Brand, _extends({
      theme: theme,
      shouldDisplay: shouldExpand,
      layout: true
    }, brandAnimationProps), brandName.name) : !!brandName.logoPath ? /*#__PURE__*/React__default.createElement(BrandLogo, {
      src: brandName.logoPath
    }) : /*#__PURE__*/React__default.createElement(Brand, _extends({
      theme: theme,
      shouldDisplay: !shouldExpand,
      layout: true
    }, brandAnimationProps), brandName.name.charAt(0).toUpperCase())));
  };

  Header.propTypes = {
    brandName: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logoPath: PropTypes.string
    }),
    shouldExpand: PropTypes.bool.isRequired,
    theme: PropTypes.object
  };
  var Header$1 = /*#__PURE__*/React__default.memo(Header);

  function SvgArrow(props) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 343.089 343.089"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M341.521 167.415a6.79 6.79 0 00-.885-.885L243.46 67.265a7.837 7.837 0 00-13.584 5.225v52.245h-125.91c-4.702 0-9.927 1.045-9.927 5.224v83.592A12.016 12.016 0 00103.966 224h125.91v47.02a8.358 8.358 0 004.702 7.314h3.135a8.362 8.362 0 005.747-2.612l97.176-98.743a6.79 6.79 0 00.885-9.564zM70.531 122.122a7.837 7.837 0 00-7.837 7.837v83.592a7.837 7.837 0 0015.674 0v-83.592a7.837 7.837 0 00-7.837-7.837zM39.184 122.122a7.837 7.837 0 00-7.837 7.837v83.592a7.837 7.837 0 0015.674 0v-83.592a7.837 7.837 0 00-7.837-7.837zM7.837 122.122A7.837 7.837 0 000 129.959v83.592a7.837 7.837 0 0015.674 0v-83.592a7.837 7.837 0 00-7.837-7.837z"
    }));
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n          transform: rotate(0deg);\n        "]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\n          transform: rotate(-180deg);\n        "]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$1() {
    var data = _taggedTemplateLiteral(["\n  width: 1.3em;\n  height: 1.3em;\n  fill: ", ";\n  stroke: ", ";\n\n  ", "\n  transition: 0.4s transform;\n\n  &:hover {\n    fill: ", ";\n  }\n"]);

    _templateObject5$1 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$1() {
    var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 20%;\n  margin: 0 auto;\n  right: 0;\n  left: 0;\n  bottom: 10px;\n  cursor: pointer;\n"]);

    _templateObject4$1 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$2() {
    var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

    _templateObject3$2 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  max-width: 280px;\n  min-width: 60px;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  position: relative;\n  background-color: ", ";\n  color: ", ";\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var SidebarDrawer = styled(motion.div)(_templateObject$2(), function (props) {
    return props.theme.sidebar.backgroundColor;
  }, function (props) {
    return props.theme.sidebar.color;
  });
  var MenuContainer = styled(motion.div)(_templateObject2$2());
  var SubMenuContainer = styled(motion.div)(_templateObject3$2());
  var Toggle = styled.div(_templateObject4$1());
  var ArrowIcon = styled(SvgArrow)(_templateObject5$1(), function (props) {
    return props.theme.toggle.color;
  }, function (props) {
    return props.theme.toggle.color;
  }, function (props) {
    return props.open ? react.css(_templateObject6()) : react.css(_templateObject7());
  }, function (props) {
    return props.theme.toggle.hoverColor;
  });

  var Sidebar = function Sidebar(props) {
    var brandName = props.brandName,
        isExpanded = props.isExpanded,
        menuList = props.menuList,
        theme = props.theme;
    /**
     * Holds the current width of the browser
     * width is used to decide whether to expand or collapse the sidebar
     */

    var width = useWindowWidth();

    var _useState = React.useState(isExpanded),
        _useState2 = _slicedToArray(_useState, 2),
        isDrawerOpen = _useState2[0],
        setIsDrawerOpen = _useState2[1];

    var _useState3 = React.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        hoverOpen = _useState4[0],
        setHoverOpen = _useState4[1];

    var _useState5 = React.useState(isExpanded),
        _useState6 = _slicedToArray(_useState5, 2),
        shouldExpand = _useState6[0],
        setShouldExpand = _useState6[1];

    var _useState7 = React.useState(menuList),
        _useState8 = _slicedToArray(_useState7, 2),
        menuItems = _useState8[0],
        setMenuItems = _useState8[1];

    var _useState9 = React.useState('/'),
        _useState10 = _slicedToArray(_useState9, 2),
        navigateTo = _useState10[0],
        setNavigateTo = _useState10[1];
    /**
     * if the width of the browser is less than 1280
     * sidebar will get collapsed automatically
     */


    React.useEffect(function () {
      width < 1280 ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
    }, [width]);
    /**
     * if the sidebar is collapsed,
     * it will get expanded and collapsed on mouse enter and leave respectively
     */

    React.useEffect(function () {
      var mouseTarget = document.getElementById('sidebar');
      mouseTarget.addEventListener('mouseenter', function () {
        setHoverOpen(true);
      });
      mouseTarget.addEventListener('mouseleave', function () {
        setHoverOpen(false);
      });
    }, []);
    /**
     * based on the mouse hover and toggle action,
     * we decide whether or not to expand the sidebar
     */

    React.useEffect(function () {
      setShouldExpand(hoverOpen || isDrawerOpen);
    }, [hoverOpen, isDrawerOpen]);
    /**
     * on toggle, it set the sidebar open value
     */

    var handleToggle = function handleToggle() {
      setIsDrawerOpen(!isDrawerOpen);
    };
    /**
     *
     * @param {number} index - position of the  menu item selected by user
     * we will set the isOpen value to true for the given index
     * isOpen value for all other items will be set to false
     */


    var handleExpandMenu = function handleExpandMenu(index) {
      var _menuItems = _toConsumableArray(menuItems); // Set the selected menu to open


      _menuItems[index].isOpen = !_menuItems[index].isOpen; // Set other menu items to close

      _menuItems.filter(function (menuItem, idx) {
        return idx !== index;
      }).forEach(function (menuItem) {
        menuItem.isOpen = false;
      });

      setMenuItems(_menuItems);
    };
    /**
     *
     * @param {string} index - position of the menu item selected by user
     * @param {string} to - navigation path for the selected menu item
     * reset the isSelected value to false for all items in the menu
     * set isSelected to true for the index
     */


    var handleMenuSelection = function handleMenuSelection(index, to) {
      var _menuItems = _toConsumableArray(menuItems); // Reset Menu selected on every click


      _menuItems.forEach(function (menuItem) {
        menuItem.isSelected = false;
        menuItem.subMenu.forEach(function (subMenu) {
          subMenu.isSelected = false;
        });
      });

      if (index.toString().includes('_')) {
        var _index$split = index.split('_'),
            _index$split2 = _slicedToArray(_index$split, 2),
            menuIndex = _index$split2[0],
            subMenuIndex = _index$split2[1];

        _menuItems[menuIndex].isSelected = !_menuItems[menuIndex].isSelected;
        _menuItems[menuIndex].subMenu[subMenuIndex].isSelected = !_menuItems[menuIndex].subMenu[subMenuIndex].isSelected;
      } else {
        _menuItems[index].isSelected = !_menuItems[index].isSelected;

        _menuItems.forEach(function (menuItem) {
          return menuItem.isOpen = false;
        });
      }

      setMenuItems(_menuItems);
      setNavigateTo(to);
    };
    /**
     *
     * @param {string} index - position of the menu item selected by user
     * @param {string} to - navigation path for the selected menu item
     * if the index has _, it indicates that user has selected sub menu
     * we split the index with _, by which we get main menu index and sub menu index
     * if the main menu doesn't have any children, we will call handleMenuSelection()
     * if the main menu does have children, we will call handleExpandMenu()
     */


    var handleMenuClick = function handleMenuClick(index, to) {
      !index.toString().includes('_') && menuItems[index].hasChildren ? handleExpandMenu(index) : handleMenuSelection(index, to);
    };

    return /*#__PURE__*/React__default.createElement(BrowserRouter, null, /*#__PURE__*/React__default.createElement(AnimateSharedLayout, null, /*#__PURE__*/React__default.createElement(SidebarDrawer, {
      theme: theme,
      layout: true,
      id: "sidebar",
      variants: sidebarVariants,
      animate: shouldExpand ? 'expanded' : 'collapsed',
      initial: false
    }, /*#__PURE__*/React__default.createElement(Header$1, {
      theme: theme,
      shouldExpand: shouldExpand,
      brandName: brandName
    }), /*#__PURE__*/React__default.createElement(MenuContainer, null, menuItems.map(function (mainMenu, mainMenuIndex) {
      return /*#__PURE__*/React__default.createElement(React.Fragment, {
        key: mainMenuIndex
      }, /*#__PURE__*/React__default.createElement(MenuItem$1, {
        theme: theme,
        name: mainMenu.name,
        icon: mainMenu.icon,
        to: navigateTo,
        hasChildren: mainMenu.hasChildren,
        isMenuSelected: mainMenu.isSelected,
        isMenuExpanded: mainMenu.isOpen,
        isDrawerOpen: shouldExpand,
        onClick: function onClick() {
          return handleMenuClick(mainMenuIndex, mainMenu.to);
        }
      }), mainMenu.hasChildren && mainMenu.isOpen && shouldExpand && /*#__PURE__*/React__default.createElement(SubMenuContainer, null, mainMenu.subMenu.map(function (subMenuItem, subMenuIndex) {
        return /*#__PURE__*/React__default.createElement(React.Fragment, {
          key: subMenuIndex
        }, /*#__PURE__*/React__default.createElement(MenuItem$1, {
          theme: theme,
          name: subMenuItem.name,
          to: navigateTo,
          icon: subMenuItem.icon,
          hasChildren: false,
          isMenuSelected: subMenuItem.isSelected,
          isMenuExpanded: false,
          isDrawerOpen: shouldExpand,
          onClick: function onClick() {
            return handleMenuClick("".concat(mainMenuIndex, "_").concat(subMenuIndex), "".concat(mainMenu.to).concat(subMenuItem.to));
          }
        }));
      })));
    })), /*#__PURE__*/React__default.createElement(Toggle, {
      onClick: handleToggle
    }, /*#__PURE__*/React__default.createElement(ArrowIcon, {
      open: isDrawerOpen,
      theme: theme
    })))));
  };

  Sidebar.defaultProps = {
    brandName: {
      name: 'Sidebar'
    },
    menuList: [],
    isExpanded: true,
    theme: {
      header: {
        color: '#bdc3c7',
        hoverColor: '#ecf0f1',
        backgroundColor: '#222f3e'
      },
      menuItem: {
        color: '#bdc3c7',
        hoverColor: '#ecf0f1',
        active: '#1abc9c',
        activeHoverColor: '#1dd1a1'
      },
      expandArrow: {
        color: '#ecf0f1'
      },
      toggle: {
        color: '#bdc3c7',
        hoverColor: '#ecf0f1'
      },
      sidebar: {
        backgroundColor: '#222f3e',
        color: '#bdc3c7'
      }
    }
  };
  Sidebar.protoTypes = {
    /** brandName expects a name and path to logo */
    brandName: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logoPath: PropTypes.string
    }),
    menuList: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      hasChildren: PropTypes.bool.isRequired,
      subMenu: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired
      }))
    })),
    isExpanded: PropTypes.bool.isRequired,
    theme: PropTypes.object
  };

  return Sidebar;

})));
//# sourceMappingURL=index.umd.js.map
