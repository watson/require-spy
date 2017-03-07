'use strict'

var spy = require('../start')
var test = require('tape')

test(function (t) {
  t.ok(spy.check('tape'))
  t.notOk(spy.check('http'))
  t.end()
})
