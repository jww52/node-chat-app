var moment = require('moment');

// // UNIX EPIC Jan 1st 1970 00:00:00 am
//
// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

//10:35 am

new Date().getTime()

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
