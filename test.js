let str = "AaBbcdefG123!123%^&*";
let strge = /[a-z]/g;
let strgeG = /[A-Z]/g;
let strnot = /[^a-zA-Z]/g
let strnum = /[0-9]/g
let strs = /[^aA-z0-9]/g
console.log(str.match(strge));
console.log(str.match(strgeG));
console.log(str.match(strnot));
console.log(str.match(strnum));
console.log(str.match(strs));
let valideEmail = /([a-z])\w+\.?([a-z])\w+\.?([a-z])\w+?([0-9]?)\@(gmail|hotmail|yahoo|ofppt)\.(com|org|net|ma)/g;
let valideNumber = /(06|07|05)\d{8}/g;
let valideName = /[^\d\W]+/gi;
