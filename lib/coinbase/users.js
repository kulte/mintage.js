/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/users';

/**
* Module exports.
*/

module.exports = Users;

/**
* Account constructor.
*/

function Users (coinbase) {
  this._coinbase = coinbase;
}
