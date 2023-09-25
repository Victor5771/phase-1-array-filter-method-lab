// Code your solution here
// findMatching - Function to filter drivers by exact name match
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // fuzzyMatch - Function to filter drivers by names starting with provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // matchName - Function to filter drivers by matching name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  