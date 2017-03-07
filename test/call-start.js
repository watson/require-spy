'use strict'

var spy = require('../')
var test = require('tape')

test(function (t) {
  spy.start()
  require('http')
  t.ok(spy.check('http'))
  t.notOk(spy.check('tape'))
  t.end()
})
