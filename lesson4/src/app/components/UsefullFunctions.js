export default class UsefullFunctions {
  
  getCurrentDate() {
    let fullDate = new Date();
    let monthName = months[fullDate.getMonth()];
    return monthName + " " + fullDate.getDate() + "," + " " + fullDate.getFullYear();
  }
  
}