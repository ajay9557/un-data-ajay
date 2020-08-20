function graphIndiaPopulation() {
  fetch("../output/indianPopulation.json")
    .then((r) => r.json())
    .then((r) => visualizeIndiaPopulation(r));
}
function graphPopulationOfAseanCountries() {
  fetch("../output/aseanPopulation.json")
    .then((r) => r.json())
    .then((r) => visualizePopulationOfAseanCountries(r));
}
function graphSarracCountriesPopulation() {
  fetch("../output/sarracCountriesPopulation.json")
    .then((r) => r.json())
    .then((r) => visualizearracCountriesPopulation(r));
}
function graphAseanPopulationVsYears() {
  fetch("../output/aseanPopulationVsYears.json")
    .then((r) => r.json())
    .then((r) => visualizeAseanPopulationVsYears(r));
}
graphIndiaPopulation();
graphPopulationOfAseanCountries();
graphSarracCountriesPopulation();
graphAseanPopulationVsYears();

function visualizeIndiaPopulation(data) {
  data = Object.entries(data);
  console.log(data);
  Highcharts.chart("indiaPopulation", {
    chart: {
      type: "column",
    },
    title: {
      text: "INDIA Population 2005-2015",
    },
    subtitle: {
      text:
        'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population ",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Population in 2017: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "Population",
        data: data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#003399",
          align: "right",
          format: "{point.y:.1f}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}

function visualizePopulationOfAseanCountries(data) {
  data = Object.entries(data);
  console.log(data);

  Highcharts.chart("aseanPopulation", {
    chart: {
      type: "column",
    },
    title: {
      text: "ASEAN Countries Population 2014",
    },
    subtitle: {
      text:
        'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Population in ASEAN countries 2014: <b>{point.y:.1f} </b>",
    },
    series: [
      {
        name: "Population",
        data: data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y:.1f}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}
function visualizearracCountriesPopulation(data) {
  data = Object.entries(data);
  Highcharts.chart("sarracPopulation", {
    chart: {
      type: "column",
    },
    title: {
      text: "SARRAC Countries Population 2005-2015",
    },
    subtitle: {
      text:
        'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat:
        "Population in SAARAC countries 2005-2015: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "Population",
        data: data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y:.1f}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}
function visualizeAseanPopulationVsYears(data) {
  var year = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
  ];
  var result = Object.entries(data).map((value) => {
    return { name: value[0], data: value[1] };
  });
  Highcharts.chart("aseanPopulationVsYears", {
    chart: {
      type: "column",
    },
    title: {
      text: "ASEAN Countries PopulationVsYears 2004-2014",
    },
    subtitle: {
      text: "Source: population.com",
    },
    xAxis: {
      categories: year,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: result,
  });
}
