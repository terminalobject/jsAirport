function Airport() {
  this.planes = [];
}
Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  return "Plane landed." 
}
Airport.prototype.takeoff = function(plane) {
  this.planes.splice(this.planes.indexOf(plane));
  return "Plane took off."
}
