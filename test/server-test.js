var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');


var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Event Manager', function(){
  it('should show signup/login page on GET', function(done){
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});
