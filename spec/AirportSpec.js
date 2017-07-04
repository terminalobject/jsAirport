describe ("an airport", function(){
  var airport;
  var plane; 
  beforeEach(function() {
    airport = new Airport();
    plane = 'boeing747'
  })
  
  it("can land a plane and confirm that it landed", function() {
    airport.land(plane)
    expect(airport.planes).toContain(plane);  
    expect(airport.land(plane)).toEqual("Plane landed.")
  })
  it("can instruct a plane to take off and confirm it did", function(){
    airport.takeoff(plane)
    expect(airport.planes).not.toContain(plane);
    expect(airport.takeoff(plane)).toEqual("Plane took off.")
  })
})
