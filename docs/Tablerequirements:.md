Use case requirements:

- 2 dimensional table to display several metrics
- responsive (looks good on mobile and desktop)
- accessible
- display metric trend togheter with the measurement. (Optional)

Design choices and considerations

- Display the dimensions as columns
  Table layout will be narrow, have a fixed number of columns and easiler to fit in both small/portrait views (Mobile, desktop resized windows...) and also in Desktop/landscape orientation.
  It is also simple to scale the table component to deal with some extra (1-5) dimmensions.
  If we set the dimensions as rows, the number of coluns will increase with the number of metrics, and force the use of alternative layouts for mobile that will be harder to use and maintain.

- Remove elements in small screens
  We can save horizontal space removing elements that are not essencial.
  for bigger screens we display both the tred values and an icon.
  As screens get narrow, we first hide the icon, and as width decreases we also hide the trend value.

- Color code the trend in the table cells
  color code (green for increase, red for decrease by default, but it should be configurable) the trend in the table cell to enable a visual identification of trends.
  Red and green colours can be confusing for color blinded people. Adding a pattern (maybe stripes or dots) to the colour is a good alternative to keep page more accessible.

- No Sorting
  Colunm sorting does not make sense if we display metris as rows.
