/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/sells';

/**
* Module exports.
*/

module.exports = Sells;

/**
* Account constructor.
*/

function Sells (coinbase) {
  this._coinbase = coinbase;
}
