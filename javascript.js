var word="pain"

function getWordData(word) {
    var apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    try {
      var response = UrlFetchApp.fetch(apiUrl);
      var data = JSON.parse(response.getContentText());
  
      var definition = "No definition found"; // Default message
      var example = "No example found"; // Default message
  
      if (data && data.length > 0 && data[0].meanings && data[0].meanings.length > 0) {
        var meanings = data[0].meanings;
        if (meanings[0].definitions && meanings[0].definitions.length > 0) {
          definition = meanings[0].definitions[0].definition;
          if (meanings[0].definitions[0].example) {
            example = meanings[0].definitions[0].example;
          }
        }
      }
  
      return [[definition, example]]; // Return a 2D array to place results in the same row
    } catch (error) {
      Logger.log('Error fetching data for word: ' + word + ' - ' + error);
      return [["Error fetching definition", "Error fetching example"]]; // Return errors in the same row
    }
  }
  
  // 🛠️ **Automatically fetch definition & example when a word is entered in Column A**
  function onEdit(e) {
    var sheet = e.source.getActiveSheet();
    var range = e.range;
  
    // Check if the edit is in Column A (Ignore the header row)
    if (range.getColumn() == 1 && range.getRow() > 1) { 
      var word = range.getValue().trim(); // Get the word from Column A
  
      if (word) {
        var result = getWordData(word); // Fetch definition & example
  
        // Write results in Column B (Definition) & Column C (Example) in the same row
        sheet.getRange(range.getRow(), 2, 1, 2).setValues(result);
      }
    }
  }
  onEdit()
  
  