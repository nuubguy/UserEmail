var expect  = require('chai').expect;
var request = require('request');
var app = require('../app')

describe('POST /users', function(){
    it('expect OK', function(done){
      request(app)
        .post('http://localhost:3000/users/save')
        .send({"name":"budiman","email":"email@gmail.com"})
        .set('Accept', 'application/json')
        .expect(200)
        
    })

    it('is invalid', function(done){
        request(app)
          .post('http://localhost:3000/users/save')
          .send({"name":"budiman","email":"email@gmail.com"})
          .set('Accept', 'application/json')
          .expect(409)
          .end(function(err, res){
            if (err) return done(err);
            done()
          });
      })

  });
