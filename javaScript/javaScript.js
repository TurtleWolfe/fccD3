const runs = [
  {
    id: 1,
    date: 'October 1, 2017 at 4:00PM',
    distance: 5.2
  },
  {
    id: 2,
    date: 'October 2, 2017 at 5:00PM',
    distance: 7.0725
  },
  {
    id: 3,
    date: 'October 3, 2017 at 6:00PM',
    distance: 8.7
  },
  {
    id: 4,
    date: 'October 4, 2017 at 4:00PM',
    distance: 5.2
  },
  {
    id: 5,
    date: 'October 5, 2017 at 5:00PM',
    distance: 7.0725
  },
  {
    id: 6,
    date: 'October 6, 2017 at 6:00PM',
    distance: 8.7
  }
];

let WIDTH = 400;
let HEIGHT = 300;

d3.select('svg')
  .style("fill", "yellow")
  // .text("svg")
  .style('WIDTH', WIDTH)
  .style('HEIGHT', HEIGHT);

var yScale = d3.scaleLinear(); //create the scale
yScale.range([HEIGHT, 0]); //set the visual range (for example 600 to 0)
var yDomain = d3.extent(runs, function (datum, index) {
  //compare distance properties of each item in the data array
  return datum.distance;
});
yScale.domain(yDomain);
console.log(yScale.domain());

//HEIGHT corresponds to min data value
//0 corresponds to max data value
yScale.range([HEIGHT, 0]);

//you can get the domain whenever you want like this
console.log(yScale.domain());
//you can get the range whenever you want like this:
console.log(yScale.range());

console.log(yScale(5)); //get a visual point from a data value
//get a data values from a visual point
console.log(yScale.invert(450));

//since no circles exist, we need to select('svg')
//so that d3 knows where to append the new circles
d3.select('svg').selectAll('circle')
  .data(runs) //attach the data as before
  //find the data objects that have not yet 
  //been attached to visual elements
  .enter()
  //for each data object that hasn't been attached,
  //append a <circle> to the <svg>
  .append('circle');

d3.selectAll('circle')
  .attr('cy', function (datum, index) {
    return yScale(datum.distance);
  });

var parseTime = d3.timeParse("%B%e, %Y at %-I:%M%p");
var formatTime = d3.timeFormat("%B%e, %Y at %-I:%M%p");
var xScale = d3.scaleTime();
xScale.range([0, WIDTH]);
var xDomain = d3.extent(runs, function (datum, index) {
  return parseTime(datum.date);
});
xScale.domain(xDomain);

console.log(formatTime(new Date()));

//use parseTime to convert the date string property on the datum object to a Date object.
//xScale then converts this to a visual value
d3.selectAll('circle')
  .attr('cx', function (datum, index) {
    return xScale(parseTime(datum.date));
  });

//pass the appropriate scale in as a parameter
var bottomAxis = d3.axisBottom(xScale);
d3.select('svg')
  .append('g') //put everything inside a group
  .call(bottomAxis) //generate the axis within the group
  //move it to the bottom
  .attr('transform', 'translate(0,' + HEIGHT + ')');

var leftAxis = d3.axisLeft(yScale);
d3.select('svg')
  .append('g')
  //no need to transform, since it's placed correctly initially
  .call(leftAxis);


var createTable = function () {
  for (var i = 0; i < runs.length; i++) {
    var row = d3.select('tbody').append('tr');
    row.append('td').html(runs[i].id);
    row.append('td').html(runs[i].date);
    row.append('td').html(runs[i].distance);
  }
};

createTable();