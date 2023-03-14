google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = google.visualization.arrayToDataTable(
        [["Day", "Rainfall"],[1, 4],[2, 4.3],[3, 5.7],[4, 5.4],[5, 5.9],[6, 5.0],[7, 3.6],[8, 1.9],[9, 7.3]]
    )

    var option = {
        title : "Days Vs Rainfall",
        vAxis : { title : "Days"},
        hAxis : { title : "Rainfall"}, 
        legend : "none"
    }

    var chart = new google.visualization.LineChart(document.getElementById("myChart"));
    chart.draw(data, option);
}