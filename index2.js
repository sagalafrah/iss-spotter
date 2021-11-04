const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss_promised');
const {nextISSTimesForMyLocation} = require('./iss_promised');
const {printPassTimes} = require('./index')
 
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
  



  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
