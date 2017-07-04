describe ("an airport", function(){

  var airport;
  var plane; 
  beforeEach(function() {
    airport = new Airport();
    plane = 'boeing747'
  })
  
  it("can land a plane and confirm that it landed", function() {
    spyOn(airport, 'badweather').and.returnValue(false);
    airport.land(plane)
    expect(airport.planes).toContain(plane);  
    expect(airport.land(plane)).toEqual("Plane landed.")
  })
  it("can instruct a plane to take off and confirm it did", function(){
    spyOn(airport, 'badweather').and.returnValue(false);
    airport.takeoff(plane)
    expect(airport.planes).not.toContain(plane);
    expect(airport.takeoff(plane)).toEqual("Plane took off.")
  })
  it("can tell whether the weather is good", function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(airport.badweather()).toBe(false) 
  })
  it("prevents landing in case of bad weather", function() {
    spyOn(airport, 'badweather').and.returnValue(true);
    expect(function () {
      airport.land();
    }).toThrowError("Bad weather!");
  })
  it("prevents takeoff in case of bad weather", function() {
    spyOn(airport, 'badweather').and.returnValue(true);
    expect(function () {
      airport.takeoff();
    }).toThrowError("Bad weather!");
  });
})
