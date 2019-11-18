"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeferred = void 0;

/**
 * Deferred object returns promise and public resolve and reject methods
 * Deferred object's promise can be resolved or rejected via public methods
 * @returns {{resolve, reject, promise}}
 */
var createDeferred = function createDeferred() {
  return function () {
    var publicResolve;
    var publicReject;
    var promise = new Promise(function (resolve, reject) {
      publicResolve = resolve;
      publicReject = reject;
    });
    return {
      promise: promise,
      reject: publicReject,
      resolve: publicResolve
    };
  }();
};

exports.createDeferred = createDeferred;
