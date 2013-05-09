/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/prices';

/**
* Module exports.
*/

module.exports = Prices;

/**
* Account constructor.
*/

function Prices (coinbase) {
  this._coinbase = coinbase;
}
