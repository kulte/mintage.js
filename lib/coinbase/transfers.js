/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/transfers';

/**
* Module exports.
*/

module.exports = Transfers;

/**
* Account constructor.
*/

function Transfers (coinbase) {
  this._coinbase = coinbase;
}
