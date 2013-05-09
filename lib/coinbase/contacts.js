/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , ENDPOINT_COMPONENT = '/contacts';

/**
* Module exports.
*/

module.exports = Contacts;

/**
* Account constructor.
*/

function Contacts (coinbase) {
  this._coinbase = coinbase;
}
