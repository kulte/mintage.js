/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/orders';

/**
* Module exports.
*/

module.exports = Orders;

/**
* Account constructor.
*/

function Orders (coinbase) {
  this._coinbase = coinbase;
}
