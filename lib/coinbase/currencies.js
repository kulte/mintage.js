/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/currencies';

/**
* Module exports.
*/

module.exports = Currencies;

/**
* Account constructor.
*/

function Currencies (coinbase) {
  this._coinbase = coinbase;
}
