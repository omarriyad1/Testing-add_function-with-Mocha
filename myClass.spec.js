var MyClass = require("../src/myClass.js");
var sinon = require("sinon")
var myObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;


describe("Check Total sum",()=>{
    it("Test the add method",function () {
        expect(myObj.add()).to.be.equal(0);
    });
    it("Test the add method",function () {
        expect(myObj.add(1,2)).to.be.equal(3);
    });
    it("Test the add method",function () {
        expect(myObj.add(1,2,3)).to.be.equal(6);
    });
    it("Test the add method",function () {
        expect(myObj.add(1,2,3,4)).to.be.equal(10);
    });
    it("Test the add method",function () {
        expect(myObj.add(1,2,3,4,5)).to.be.equal(15);
    });
    /*it("spy the add method",function () {
        var spy =sinon.spy(myObj,"add");
        var arg1 = 10,arg2 = 20;
        myObj.callAnotherFn(arg1,arg2);
        sinon.assert.calledOnce(spy);
       // expect(spy.calledOnce).to.be.true;
    });*/

});

/*

var MyClass = require("../src/myClass.js");
var myObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;


describe("Test suit",function () {
    it("Test the add method",function () {
        expect(myObj.add(1,2)).to.be.equal(3);
    })


});*/