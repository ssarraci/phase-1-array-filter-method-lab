// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver === name || driver === name.toLowerCase())
}

const fuzzyMatch = (drivers, query) => {
  let filteredNames = drivers.filter(driver => driver.toLowerCase().indexOf(query.toLowerCase()) === 0)
  return filteredNames
}


const matchName = (drivers, name) => {
     return drivers.filter(driver => driver.name === name)
}

//function matchName (drivers, name) {
  //  for (const driver of drivers) {
    //    if (driver.name === name) {
      //      return(driver)
      //  }
    //}
//}
