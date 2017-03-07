'use strict'

var Module = require('module')

var orig = Module._load
var loaded = []

exports.start = function () {
  Module._load = function (name) {
    loaded.push(name)
    return orig.apply(this, arguments)
  }
}

exports.check = function (name) {
  return loaded.indexOf(name) !== -1
}
