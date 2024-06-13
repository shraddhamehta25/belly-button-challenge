// Build the metadata panel
function buildMetadata(sample) {
  // Use D3 to fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    
    // Extract metadata for the selected sample
    let metadata = data.metadata;
    let resultArray = metadata.filter(obj => obj.id == sample);
    let result = resultArray[0];

    // Select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Clear any existing metadata
    panel.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Extract samples data
    let samples = data.samples;
    let resultArray = samples.filter(obj => obj.id == sample);
    let result = resultArray[0];

    // Extract necessary data for charts
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // Build a Bubble Chart
    let bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      margin: { t: 30 }
    };
    let bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // Build a Bar Chart
    // Sort the data by sample_values in descending order
    let barData = [{
      y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];

    // Define the layout for the Bar Chart
    let barLayout = {
      title: "Top 10 OTUs Found",
      margin: { t: 30, l: 150 }
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to run on page load
function init() {
  // Load the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Extract the names field from the data
    let names = data.names;

    // Select the dropdown menu using d3
    let dropdownMenu = d3.select("#selDataset");

    // Populate the dropdown with options
    names.forEach((sample) => {
      dropdownMenu.append("option").text(sample).property("value", sample);
    });

    // Get the first sample ID from the list
    let firstSample = names[0];

    // Build the initial charts and metadata panel
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

// Function for event listener when a new sample is selected
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Function to run on page load
function init() {
  // Load the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Extract the names field from the data
    let names = data.names;

    // Select the dropdown menu using d3
    let dropdownMenu = d3.select("#selDataset");

    // Populate the dropdown with options
    names.forEach((sample) => {
      dropdownMenu.append("option").text(sample).property("value", sample);
    });

    // Get the first sample ID from the list
    let firstSample = names[0];

    // Build the initial charts and metadata panel
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();
