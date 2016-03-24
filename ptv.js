var lines = {
 Alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
 Glenwaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
 Sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

// Test 1. Is origin and destination on the same line?
// Test 2. Are trains going forward or backward?
// Test 3. Ensure input values are valid.

function stationExists(station){
  a = findLine(station) ? true : false;
  return a;
}

function findLine(station){
  var line;
  for (var key in lines) {
    if (lines[key].indexOf(station) >= 0) {
      line = key;
    }
  }
  return line;
}

// original splicing method:
// function displayRoute(origin, destination, line) {
//   var route;
//   var originIndex = lines[line].indexOf(origin);
//   var destinationIndex = lines[line].indexOf(destination);
//   if (originIndex < destinationIndex) {
//     route = lines[line].splice(originIndex, destinationIndex - originIndex + 1);
//   } else {
//     route = lines[line].splice(destinationIndex, originIndex - destinationIndex + 1).reverse();
//   }
//   console.log (route.join(' ----> '));
// }

function displayRoute(origin, destination, line) {
  var route;
  var originIndex = lines[line].indexOf(origin);
  var destinationIndex = lines[line].indexOf(destination);
  if (originIndex < destinationIndex) {
    route = lines[line].slice(originIndex, destinationIndex + 1);
  } else {
    route = lines[line].slice(destinationIndex, originIndex + 1).reverse();
  }
  console.log (route.join(' ----> '));
}

function showJourney(origin, destination) {

  // Make there is a valid input before returning anything.
  if (!stationExists(origin) && !stationExists(destination)){
    console.log('Please enter a valid origin and destination station.');
    return;
  } else if (!stationExists(origin)){
    console.log('Please enter a valid origin station.');
    return;
  } else if (!stationExists(destination)){
    console.log('Please enter a valid destination station.');
    return;
  }

  var originLine = findLine(origin);
  var destinationLine = findLine(destination);
  console.log(originLine);
  console.log(destinationLine);

  if (originLine == destinationLine) {
    displayRoute(origin, destination, originLine);
  }
  else if (originLine != destinationLine) {
    // 1. Find 1st route:
    if (origin != 'Richmond') {
      console.log('Board the ' + originLine + ' line: ');
      displayRoute(origin, 'Richmond', originLine);
    }
    // 2. Find connecting route:
    if (destination != 'Richmond') {
      console.log('Change to ' + destinationLine + ' line: ');
      displayRoute('Richmond', destination, destinationLine);
    }
  }
}

//showJourney('Richmond','Flagstaff');
