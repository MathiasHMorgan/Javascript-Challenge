// from data.js
var tableData = data;

// table reference
var $tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Set values in input type date and time 
var inputFieldDate = d3.select("#datetime");

var columns = ["datetime", "city", "state", "country", "shape", "duration", "comments"]

// Input the data into the HTML
var createData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

createData(tableData);

// Apply Filter 

button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    $tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !==0){
        createData(filterDate);
    }

    else {
        $tbody.append("tr").append("td").text("No UFO Sightings found");
    }
})