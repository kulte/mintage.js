/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/buys';

/**
* Module exports.
*/

module.exports = Buys;

/**
* Account constructor.
*/

function Buys (coinbase) {
  this._coinbase = coinbase;
}
