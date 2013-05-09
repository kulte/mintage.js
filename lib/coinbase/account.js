/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , BASE_URL = 'https://coinbase.com/api/v1/account'

/**
* Module exports.
*/

module.exports = Account;

/**
* Account constructor.
*/

function Account (coinbase) {
  this._coinbase = coinbase;
}

/**
* Balance function.
*
* @params {Function} callback
* @api public
*/

Account.prototype.balance = function (callback) {
  request.get(BASE_URL + '/balance')
    .query({ api_key: this._coinbase.api_key })
    .end(function (res) {
      if (res.body) {
        return callback(null, res.body)
      } else {
        callback(new Error('Error thrown by coinbase.js: Bad Coinbase response. Check to make sure you are passing valid parameters.'));
      }
    });
}

/**
* Receive address function.
*
* @params {Function} callback
* @api public
*/

Account.prototype.receiveAddress = function (callback) {
  request.get(BASE_URL + '/receive_address')
    .query({ api_key: this._coinbase.api_key })
    .end(function (res) {
      if (res.body && _.has(res.body, 'success')) {
        return callback(null, res.body)
      } else {
        if (_.has(res.body, 'error')) {
          callback(new Error('Coinbase error: ' + res.body.error));
        } else {
          callback(new Error('Error thrown by coinbase.js: Bad Coinbase response. Check to make sure you are passing valid parameters.'));
        }
      }
    });
}

/**
* Generate receive address function.
*
* @param {String} callback_url (optional)
* @param {Function} callback
* @api public
*/

Account.prototype.generateReceiveAddress = function (callback_url, callback) {
  if (typeof callback === 'undefined') {
    callback = callback_url;
    callback_url = null;
  }

  var query = { api_key: this._coinbase.api_key }

  if (typeof callback_url !== 'undefined' && callback_url !== null) {
    _.extend(query, { address: { callback_url: callback_url } })
  }

  request.post(BASE_URL + '/generate_receive_address')
    .query(query)
    .end(function (res) {
      if (res.body) {
        return callback(null, res.body)
      } else {
        callback(new Error('Error thrown by coinbase.js: Bad Coinbase response. Check to make sure you are passing valid parameters.'));
      }
    });
}
