
// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("table>tbody");
var filterButton = d3.select("#filter-btn");

function handleChange(event) {
    values = {};
    values['datetime'] = d3.select("#datetime").property("value");
    values['city'] = d3.select("#city").property("value");
    values['state'] = d3.select("#state").property("value");
    values['country'] = d3.select("#country").property("value");
    var filteredValues = Object.entries(values).filter(i =>i[1] != 0);
    table.text("");
    if (filteredValues != 0) {
        var filteredData = data;
        filteredValues.forEach(value =>{
            filteredData = filteredData.filter(i =>i[value[0]] === value[1] );
        } );
        filteredData.forEach(i => {
            var tr = table.append("tr");
            Object.values(i).forEach(j => {
                tr.append("td").text(j);
            });
        });
    } else {
        data.forEach(i => {
            var tr = table.append("tr");
            Object.values(i).forEach(j => {
                tr.append("td").text(j);
            })
        });
    };
};

handleChange()


filterButton.on("click", handleChange);
