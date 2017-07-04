describe ("an airport", function(){
  var airport;
  var plane; 
  beforeEach(function() {
    airport = new Airport();
    plane = 'boeing747'
  })
  
  it("can land a plane", function() {
    airport.land(plane)
    expect(airport.planes).toContain(plane);  
  })  

})
