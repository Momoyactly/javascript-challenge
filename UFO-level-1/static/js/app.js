
// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("table>tbody");
var filterButton = d3.select("#filter-btn");

function handleChange(event) {
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    console.log(date,city,state,country);
    table.text("");
    if (date != 0) {
        data.filter(data => data.datetime === date).forEach(i => {
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
