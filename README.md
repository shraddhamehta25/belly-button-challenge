# belly-button-challenge
Data Loading with D3

Use D3.js to fetch the data from the provided JSON file (samples.json).
Ensure that you can console log and understand the structure of the data.
Create a Horizontal Bar Chart

Extract the necessary data for the bar chart:

otu_ids for labels.
sample_values for values.
otu_labels for hover text.
Sort and select the top 10 OTUs based on sample_values.
Use Plotly.js to create a horizontal bar chart with:
otu_ids on the y-axis.
sample_values on the x-axis.
otu_labels as hover text.
Create a Bubble Chart

Extract data for the bubble chart:

otu_ids for x values.
sample_values for y values and marker size.
otu_ids for marker colors.
otu_labels for text values.
Use Plotly.js to create a bubble chart with:
otu_ids on the x-axis.
sample_values on the y-axis.
sample_values for marker size.
otu_ids for marker colors.
otu_labels as text values.
Display Metadata

Create a function to display metadata for the selected sample:

Loop through each key-value pair in the metadata JSON object.
Append HTML tags with the key-value pairs to #sample-metadata panel.
Update Plots on Selection

Create a function to update all plots when a new sample is selected from the dropdown menu.

Update the data and replot the bar chart, bubble chart, and metadata panel accordingly.
Dashboard Layout

Design the layout of your dashboard using HTML and CSS.

Include dropdown menu for sample selection and a div for each plot.
Ensure responsiveness and user-friendly design.
Deployment

Deploy your dashboard to a free static page hosting service like GitHub Pages.

Submit the links to your deployment and GitHub repository.

Tips and Resources

Debugging: Use console.log statements to check your data at each step and ensure it matches your expectations.

Plotly Documentation: Refer to the Plotly.js documentation for detailed guidance on creating different types of charts and updating them dynamically.

HTML and CSS: Use these languages to structure and style your dashboard layout. Bootstrap can also be helpful for responsive design.
