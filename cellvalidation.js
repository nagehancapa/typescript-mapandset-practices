var cell = "1234567890";
var regex = /[0-9]{10}/;
if (cell.match(regex)) {
    console.log("Cell number is valid");
}
else {
    console.log("invalid cell number " + cell);
}
