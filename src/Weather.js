function Weather() {
  this.weather;
  this.OUTCOMES = ["sunny","cloudy","windy","stormy"];
}
Weather.prototype.cast = function() {
  this.weather = this.OUTCOMES[Math.floor(Math.random()*4)]  
  return this.weather
}
