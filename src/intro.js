var Name;
var age;
var isFetching;
var arr;
var charArr;
var tup;
var admin;
(function (admin) {
    admin[admin["User"] = 0] = "User";
    admin[admin["SuperUser"] = 1] = "SuperUser";
    admin[admin["Admin"] = 2] = "Admin";
    admin[admin["SuperAdmin"] = 3] = "SuperAdmin";
})(admin || (admin = {}));
function product(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function printName(name) {
    console.log(name);
}
