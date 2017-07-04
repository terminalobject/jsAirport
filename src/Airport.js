function Airport() {
  this.planes = [];
  this.weather = new Weather();
}
Airport.prototype.land = function(plane) {
  if (this.badweather()) {
    throw new Error("Bad weather!")
  }
  this.planes.push(plane);
  return "Plane landed." 
}
Airport.prototype.takeoff = function(plane) {
  if (this.badweather()) {
    throw new Error("Bad weather!")
  }
  this.planes.splice(this.planes.indexOf(plane));
  return "Plane took off."
}
Airport.prototype.badweather = function() {
  return (this.weather.cast() === "stormy")
}
