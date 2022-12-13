d3.csv("data2000.csv", d3.autoType).then((data) => {
  console.log(data);

  let chart = Plot.plot({
    marks: [Plot.dot(data, { x: "fertility", y: "life_expect", r: "pop" })],
    nice: true,
    line: true,
    grid: true,
    zero: true,
  });
  d3.select("#chart").append(() => chart);
});
