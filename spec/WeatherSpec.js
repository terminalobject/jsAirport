describe ("weather", function(){
  var weather;

  beforeEach(function() {
    weather = new Weather();
  })
  it("returns weather condition", function(){
    spyOn(Math, 'random').and.returnValue(0.75);
    expect(weather.cast()).toEqual("stormy")
  })
})
