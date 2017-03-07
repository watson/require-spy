'use strict'

var test = require('tape')
var spy = require('../')

test(function (t) {
  t.ok(spy.check('tape'))
  t.notOk(spy.check('http'))
  t.end()
})
