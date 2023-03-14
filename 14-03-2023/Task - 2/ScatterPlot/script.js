google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);



function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Price', 'Size'],
        [50, 1], [60, 1.25], [70, 1.5], [80, 1.75], [90, 2], [100, 2.25],
        [110, 2.5], [120, 2.75], [130, 3], [140, 3.50], [145, 4]
    ]);
    var options = {
        title: 'Fruits Prices vs Size',
        hAxis: { title: 'Price in ₹' },
        vAxis: { title: 'Kg' },
        legend: ''
    };
    var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
    chart.draw(data, options);
}