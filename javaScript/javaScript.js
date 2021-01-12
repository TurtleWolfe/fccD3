let runs = [
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


var parseTime = d3.timeParse("%B%e, %Y at %-I:%M%p");
var formatTime = d3.timeFormat("%B%e, %Y at %-I:%M%p");

var xScale = d3.scaleTime();
xScale.range([0, WIDTH]);
var xDomain = d3.extent(runs, function (datum, index) {
  return parseTime(datum.date);
});
xScale.domain(xDomain);

var yScale = d3.scaleLinear(); //create the scale
yScale.range([HEIGHT, 0]); //set the visual range (for example 600 to 0)
var yDomain = d3.extent(runs, function (datum, index) {
  //compare distance properties of each item in the data array
  return datum.distance;
});
yScale.domain(yDomain);

var render = function () {
  //adjust the code at the top of your render function
  //clear out all circles when rendering
  d3.select('#points').html('');
  //add circles to #points group, not svg
  d3.select('#points').selectAll('circle')
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
  //use parseTime to convert the date string property on the datum object to a Date object.
  //xScale then converts this to a visual value
  d3.selectAll('circle')
    .attr('cx', function (datum, index) {
      //use parseTime to convert 
      //the date string property on the datum object 
      //to a Date object, 
      //which xScale then converts to a visual value
      return xScale(parseTime(datum.date));
    });

  //put this at the bottom of the render function, 
  //so that click handlers are attached when the circle is created
  d3.selectAll('circle').on('click', function (datum, index) {
    //stop click event from propagating to 
    //the SVG element and creating a run
    d3.event.stopPropagation();
    //create a new array that has removed the run 
    //with the correct id. Set it to the runs var
    runs = runs.filter(function (run, index) {
      return run.id != datum.id;
    });
    render(); //re-render dots
    createTable(); //re-render table
  });

};
render();

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
  //clear out all rows from the table
  d3.select('tbody').html('');
  for (var i = 0; i < runs.length; i++) {
    var row = d3.select('tbody').append('tr');
    row.append('td').html(runs[i].id);
    row.append('td').html(runs[i].date);
    row.append('td').html(runs[i].distance);
  }
};

createTable();

// Chapter 4
// our <svg> click handler:
d3.select('svg').on('click', function () {
  //gets the x position of the mouse relative to the svg element
  var x = d3.event.offsetX;
  //gets the y position of the mouse relative to the svg element
  var y = d3.event.offsetY;

  //get a date value from the visual point that we clicked on
  var date = xScale.invert(x);
  //get a numeric distance value from
  //the visual point that we clicked on
  var distance = yScale.invert(y);

  //create a new "run" object
  var newRun = {
    //generate a new id by adding 1 to the last run's id
    // id: runs[runs.length - 1].id + 1,
    //add this line
    id: (runs.length > 0) ? runs[runs.length - 1].id + 1 : 1,
    //format the date object created above to a string
    date: formatTime(date),
    distance: distance //add the distance
  };
  runs.push(newRun); //push the new run onto the runs array
  createTable(); //render the table
  render(); //add this line
});


var yScale = d3.scaleLinear();