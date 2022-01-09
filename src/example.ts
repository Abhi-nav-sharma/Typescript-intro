let str: string;
str='hello';

let isAvailable: boolean = false;

if(isAvailable){
    isAvailable=false
    console.log('available')
}
else{
    console.log('not available')
}

//Arrays
let list :number[]=[]
list.push(1)
list.push(2)
list.push(3)
console.log(list)

let char : string[]=[]
char.push('12')
char.push('23')
char.push('34')
console.log(char)

let matrix : number[][]= [[],[]]

matrix[0][0]=1
matrix[0][1]=2
matrix[0][2]=3
matrix[1][0]=4
matrix[1][1]=5
matrix[1][2]=6
console.log(matrix)

//constructor reference
//angle brackets
let bool: Array<boolean> = [false,true]

// class Example<T>{
//     val:T
// }

// const ex= new Example<string>()
// ex.val

class LL{
    val: number
    next: LL|null

    constructor(val:number){
        this.val=val
        this.next= null
    }

    add(val: number){
        this.next= new LL(val)
    }
}
const ll= new LL(3)
console.log(ll)
ll.add(5)
console.log(ll)

//Tuples

let tuple: [string,number]
tuple= ['tuple',1]

// * enums

enum ActionTypes{
    GET_TODO_REQUEST=1,
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE
}

function reducer(action:ActionTypes){
    switch(action){
        case ActionTypes.GET_TODO_REQUEST:{
            console.log('requesting data')
            break
        }
        case ActionTypes.GET_TODO_SUCCESS:{
            console.log('data recieved')
            break
        }
        case ActionTypes.GET_TODO_FAILURE:{
            console.log('data failed')
            break
        }
    }
}
reducer(1)

let n: null= null

let u: undefined= undefined

//void
//no return
function printData():void{
    console.log('printing')
}
printData()

function add(a:number,b:number):number{
    return a+b
}

console.log(add(2,5))
//any
//^avoid- losing typescripts powers

function printName(firstname: string,lastname?:string):string{
    if(lastname){
        return firstname+' '+lastname
    }
    return firstname
    
}

console.log(printName('abhi'))

//interface
interface TodoItem{
    id:number,
    title: string,
    status:boolean,
    onClick:(id:number)=>void
}

function callback(value:number):void{
    console.log(value)
}

const todoItem:TodoItem={
    id:1,
    title:'Learn Typescript',
    status:false,
    // onClick: (val:number)=>console.log(val)
    onClick:callback
}

todoItem.onClick(5000)

// union,or

let users:'admin'|"user"|"superadmin"

let variants:'h1'|'h2'|'h3'

let grids:1|2|3

type Users= "users" | "admin" |"superadmin"

let user:Users;

type ActionTypes2='GET_TODO_REQUEST' | 'GET_TODO_SUCCESS' | 'GET_TODO_FAILURE'

type State= {
    todos?: TodoItem[] | null;
    isLoading?: boolean|null;
    isError?: boolean|null;
}

type Actions={
    type: ActionTypes2;
    payload: State
}

const myReducer= (state:State,action: Actions)=>{
    switch(action.type){
        case "GET_TODO_REQUEST":{
            break
        }
        case "GET_TODO_SUCCESS":{
            break
        }
        case "GET_TODO_FAILURE":{
            break
        }
    }
}

//myReducer({ },{type:'GET_TODO_FAILURE",payload:{isLoading:true}})

//and

interface Response200{
    status:200 |201|404|500,
    error?: 'network error'|'no data'
}

interface TodoResponse{
    data:TodoItem[]
}

type TodoResponseAxios= Response200 & TodoResponse

const response: TodoResponseAxios={
    status:200,
    data:[
        {
            id:1,
            title:'Learn Typescript',
            status:false,
            onClick:callback
        }
    ]
}