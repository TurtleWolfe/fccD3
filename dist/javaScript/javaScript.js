console.log('this works');
console.log(d3);

var WIDTH = 800;
var HEIGHT = 600;

d3.select('svg')
  .style("fill", "red")
  .style('width', WIDTH)
  .style('height', HEIGHT);

d3.select("main")
  .append("h1")
  .text("Very important item");