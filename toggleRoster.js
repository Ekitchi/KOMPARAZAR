function toggleMainRoster() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var criteria = 'Main';  // Text to filter out
  var columnIndex = 3;  // Column C

  var range = sheet.getRange(1, columnIndex, sheet.getLastRow(), 1);
  var filter = range.getFilter();

  // If a filter exists, remove it. Otherwise, create a new filter.
  if (filter) {
    filter.remove();
  } else {
    var criteriaToHide = SpreadsheetApp.newFilterCriteria().whenTextDoesNotContain(criteria);
    filter = range.createFilter();
    filter.setColumnFilterCriteria(columnIndex, criteriaToHide);
  }
}

function toggleAltRoster() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var criteria = 'Main';  // Text to filter out
  var columnIndex = 3;  // Column C

  var range = sheet.getRange(1, columnIndex, sheet.getLastRow(), 1);
  var filter = range.getFilter();

  // If a filter exists, remove it. Otherwise, create a new filter.
  if (filter) {
    filter.remove();
  } else {
    // Create filter criteria to show anything that does not contain 'Main'
    var criteriaToShowNotMain = SpreadsheetApp.newFilterCriteria().whenTextDoesNotContain(criteria);
    filter = range.createFilter();
    filter.setColumnFilterCriteria(columnIndex, criteriaToShowNotMain);
  }
}
