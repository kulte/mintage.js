var assert = require('assert')
  , _ = require('underscore')
  , Coinbase = require('../lib/coinbase');

describe('Coinbase', function () {
  var coinbase = new Coinbase('3ddda586a76b03084fc995a47ae7fb16ff3da9825dfbd9b07f3db84b3ed3ebfe');

  describe('api_key', function () {
    it('should assign api_key when passed to the constructor', function () {
      assert.equal('3ddda586a76b03084fc995a47ae7fb16ff3da9825dfbd9b07f3db84b3ed3ebfe', coinbase.api_key)
    })
  })

  describe('account', function () {
    it('should assign account in the constructor', function () {
      assert.ok(coinbase.account)
    })

    describe('#balance()', function () {
      it('should be defined', function () {
        assert.ok(coinbase.account.balance);
      })

      it('should return results when called', function (done) {
        coinbase.account.balance(function (error, res) {
          if (error) {
            assert(false); done();
          } else {
            assert.ok(res); done();
          }
        });
      })
    })

    describe('#receiveAddress()', function () {
      it('should be defined', function () {
        assert.ok(coinbase.account.receiveAddress);
      })

      it('should return results when called', function (done) {
        coinbase.account.receiveAddress(function (error, res) {
          if (error) {
            assert(false); done();
          } else {
            assert.ok(res); done();
          }
        });
      })

      it('should return invalid api key with bad credentials when called', function (done) {
        var coinbase = new Coinbase('not_an_api_key');
        coinbase.account.receiveAddress(function (error, res) {
          if (error) {
            assert.equal('Coinbase error: Invalid api_key', error.message); done();
          } else {
            assert(false); done();
          }
        });
      })
    })

    describe('#generateReceiveAddress()', function () {
      it('should be defined', function () {
        assert.ok(coinbase.account.generateReceiveAddress);
      })

      it('should return results when called', function (done) {
        coinbase.account.generateReceiveAddress(function (error, res) {
          if (error) {
            assert(false); done();
          } else {
            assert.ok(res); done();
          }
        });
      })

      it('should return results when passed a callback_url', function (done) {
        coinbase.account.generateReceiveAddress('http://example.com/callback', function (error, res) {
          if (error) {
            assert(false); done();
          } else {
            assert(_.has(res, 'success'));
            assert.equal(res.success, true)
            assert(_.has(res, 'address'));
            assert(_.has(res, 'callback_url'));
            assert.equal(res.callback_url, 'http://example.com/callback')
            done();
          }
        });
      })
    })
  })

  describe('buttons', function () {
    it('should assign buttons in the constructor', function () {
      assert.ok(coinbase.buttons)
    })

    it('should return with only required options', function (done) {
      var options = {
          name: 'My Lovely Bitcoin Button'
        , price: '1.23'
        , currency: 'BTC'
      }

      coinbase.buttons.create(options, function (error, res) {
        if (error) { assert(false); done(); }
        else {
          assert(true); done();
        }
      })
    })

    it('should return with type in options', function (done) {
      var options = {
          name: 'My Lovely Bitcoin Button'
        , price: '1.23'
        , currency: 'BTC'
        , type: 'donation'
      }

      coinbase.buttons.create(options, function (error, res) {
        if (error) { assert(false); done(); }
        else {
          assert.equal('donation', res.button.type); done();
        }
      })
    })

    it('should return with style in options', function (done) {
      var options = {
          name: 'My Lovely Bitcoin Button'
        , price: '1.23'
        , currency: 'BTC'
        , style: 'custom_large'
      }

      coinbase.buttons.create(options, function (error, res) {
        if (error) { assert(false); done(); }
        else {
          assert.equal('custom_large', res.button.style); done();
        }
      })
    })
  })

  describe('buys', function () {
    it('should assign buys in the constructor', function () {
      assert.ok(coinbase.buys)
    })
  })

  describe('contacts', function () {
    it('should assign contacts in the constructor', function () {
      assert.ok(coinbase.contacts)
    })
  })

  describe('currencies', function () {
    it('should assign currencies in the constructor', function () {
      assert.ok(coinbase.currencies)
    })
  })

  describe('orders', function () {
    it('should assign orders in the constructor', function () {
      assert.ok(coinbase.orders)
    })
  })

  describe('prices', function () {
    it('should assign prices in the constructor', function () {
      assert.ok(coinbase.prices)
    })
  })

  describe('sells', function () {
    it('should assign sells in the constructor', function () {
      assert.ok(coinbase.sells)
    })
  })

  describe('transactions', function () {
    it('should assign transactions in the constructor', function () {
      assert.ok(coinbase.transactions)
    })
  })

  describe('transfers', function () {
    it('should assign transfers in the constructor', function () {
      assert.ok(coinbase.transfers)
    })
  })

  describe('users', function () {
    it('should assign users in the constructor', function () {
      assert.ok(coinbase.users)
    })
  })
})
