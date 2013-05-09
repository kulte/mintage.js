/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , BASE_URL = 'https://coinbase.com/api/v1/buttons'

/**
* Module exports.
*/

module.exports = Buttons;

/**
* Buttons constructor.
*/

function Buttons (coinbase) {
  this._coinbase = coinbase;
}

/**
* Create function.
*
* @params {Object} options
* @params {Function} callback
*/

Buttons.prototype.create = function (options, callback) {
  var data = {
    button: {
        name: options.name
      , price_string: options.price
      , price_currency_iso: options.currency
    }
  };

  if (_.has(options, 'type')) { _.extend(data.button, { type: options.type }); }
  if (_.has(options, 'style')) { _.extend(data.button, { style: options.style }); }
  if (_.has(options, 'text')) { _.extend(data.button, { text: options.text }); }
  if (_.has(options, 'description')) { _.extend(data.button, { description: options.description }); }
  if (_.has(options, 'variable_price')) { _.extend(data.button, { variable_price: options.variable_price }); }
  if (_.has(options, 'choose_price')) { _.extend(data.button, { choose_price: options.choose_price }); }
  if (_.has(options, 'price_1')) { _.extend(data.button, { price_1: options.price_1 }); }
  if (_.has(options, 'price_2')) { _.extend(data.button, { price_2: options.price_2 }); }
  if (_.has(options, 'price_3')) { _.extend(data.button, { price_3: options.price_3 }); }
  if (_.has(options, 'price_4')) { _.extend(data.button, { price_4: options.price_4 }); }
  if (_.has(options, 'price_5')) { _.extend(data.button, { price_5: options.price_5 }); }

  request.post(BASE_URL)
    .query({ api_key: this._coinbase.api_key })
    .send(data)
    .end(function (res) {
      if (res.body) {
        return callback(null, res.body)
      } else {
        callback(new Error('Error thrown by coinbase.js: Bad Coinbase response. Check to make sure you are passing valid parameters.'));
      }
    });
}