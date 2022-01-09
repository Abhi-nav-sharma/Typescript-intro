var str;
str = 'hello';
var isAvailable = false;
if (isAvailable) {
    isAvailable = false;
    console.log('available');
}
else {
    console.log('not available');
}
//Arrays
var list = [];
list.push(1);
list.push(2);
list.push(3);
console.log(list);
var char = [];
char.push('12');
char.push('23');
char.push('34');
console.log(char);
var matrix = [[], []];
matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
console.log(matrix);
//constructor reference
//angle brackets
var bool = [false, true];
// class Example<T>{
//     val:T
// }
// const ex= new Example<string>()
// ex.val
var LL = /** @class */ (function () {
    function LL(val) {
        this.val = val;
        this.next = null;
    }
    LL.prototype.add = function (val) {
        this.next = new LL(val);
    };
    return LL;
}());
var ll = new LL(3);
console.log(ll);
ll.add(5);
console.log(ll);
//Tuples
var tuple;
tuple = ['tuple', 1];
// * enums
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["GET_TODO_REQUEST"] = 1] = "GET_TODO_REQUEST";
    ActionTypes[ActionTypes["GET_TODO_SUCCESS"] = 2] = "GET_TODO_SUCCESS";
    ActionTypes[ActionTypes["GET_TODO_FAILURE"] = 3] = "GET_TODO_FAILURE";
})(ActionTypes || (ActionTypes = {}));
function reducer(action) {
    switch (action) {
        case ActionTypes.GET_TODO_REQUEST: {
            console.log('requesting data');
            break;
        }
        case ActionTypes.GET_TODO_SUCCESS: {
            console.log('data recieved');
            break;
        }
        case ActionTypes.GET_TODO_FAILURE: {
            console.log('data failed');
            break;
        }
    }
}
reducer(1);
var n = null;
var u = undefined;
//void
//no return
function printData() {
    console.log('printing');
}
printData();
function add(a, b) {
    return a + b;
}
console.log(add(2, 5));
//any
//^avoid- losing typescripts powers
function printName(firstname, lastname) {
    if (lastname) {
        return firstname + ' ' + lastname;
    }
    return firstname;
}
console.log(printName('abhi'));
function callback(value) {
    console.log(value);
}
var todoItem = {
    id: 1,
    title: 'Learn Typescript',
    status: false,
    // onClick: (val:number)=>console.log(val)
    onClick: callback
};
todoItem.onClick(5000);
// union,or
var users;
var variants;
var grids;
var user;
var myReducer = function (state, action) {
    switch (action.type) {
        case "GET_TODO_REQUEST": {
            break;
        }
        case "GET_TODO_SUCCESS": {
            break;
        }
        case "GET_TODO_FAILURE": {
            break;
        }
    }
};
var response = {
    status: 200,
    data: [
        {
            id: 1,
            title: 'Learn Typescript',
            status: false,
            onClick: callback
        }
    ]
};
