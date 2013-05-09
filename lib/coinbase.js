/**
* Module dependencies.
*/

var request = require('superagent')
  , _ = require('underscore')
  , Account = require('./coinbase/account')
  , Buttons = require('./coinbase/buttons')
  , Buys = require('./coinbase/buys')
  , Contacts = require('./coinbase/contacts')
  , Currencies = require('./coinbase/currencies')
  , Orders = require('./coinbase/orders')
  , Prices = require('./coinbase/prices')
  , Sells = require('./coinbase/sells')
  , Transactions = require('./coinbase/transactions')
  , Transfers = require('./coinbase/transfers')
  , Users = require('./coinbase/users');

/**
* Module exports.
*/

module.exports = Coinbase;

/**
* Coinbase client.
*/

function Coinbase (api_key) {
  this.api_key = api_key;
  this.account = new Account(this);
  this.buttons = new Buttons(this);
  this.buys = new Buys(this);
  this.contacts = new Contacts(this);
  this.currencies = new Currencies(this);
  this.orders = new Orders(this);
  this.prices = new Prices(this);
  this.sells = new Sells(this);
  this.transactions = new Transactions(this);
  this.transfers = new Transfers(this);
  this.users = new Users(this);
}


