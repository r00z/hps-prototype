'use strict';

describe('Service: Chartservice', function () {

  // load the service's module
  beforeEach(module('hpsApp'));

  // instantiate service
  var Chartservice;
  beforeEach(inject(function (_Chartservice_) {
    Chartservice = _Chartservice_;
  }));

  it('should do something', function () {
    expect(!!Chartservice).toBe(true);
  });

});
