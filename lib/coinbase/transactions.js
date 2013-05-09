/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/transactions';

/**
* Module exports.
*/

module.exports = Transactions;

/**
* Account constructor.
*/

function Transactions (coinbase) {
  this._coinbase = coinbase;
}
