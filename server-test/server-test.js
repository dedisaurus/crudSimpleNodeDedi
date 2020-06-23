var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();  
chai.use(chaiHttp);
var Todo = require('../models/Todo.js');
var request = require('supertest');

describe("Todos", () => {
  describe("GET /", () => {
      it("should get all Todos record", (done) => {
           chai.request(server)
               .get('/')
               .end((err, res) => {
                   res.should.have.status(200);
                   res.body.should.be.a('object');
                   done();
                });
       });       
       
      it("should not get a single todo record", (done) => {
           const id = 234;
           chai.request(server)
               .get(`/${id}`)
               .end((err, res) => {
                   res.should.have.status(404);
                   done();
                });
       });
  });
  describe('POST /todo', function() {
    it('responds with json', function(done) {
      request(server)
        .post('/todo')
        .send({nama: 'john',Lokasi: 'Sekolah',Deskripsi:'Menyapu halaman'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});



