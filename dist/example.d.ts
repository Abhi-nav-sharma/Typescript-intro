declare let str: string;
declare let isAvailable: boolean;
declare let list: number[];
declare let char: string[];
declare let matrix: number[][];
declare let bool: Array<boolean>;
declare class LL {
    val: number;
    next: LL | null;
    constructor(val: number);
    add(val: number): void;
}
declare const ll: LL;
declare let tuple: [string, number];
declare enum ActionTypes {
    GET_TODO_REQUEST = 1,
    GET_TODO_SUCCESS = 2,
    GET_TODO_FAILURE = 3
}
declare function reducer(action: ActionTypes): void;
declare let n: null;
declare let u: undefined;
declare function printData(): void;
declare function add(a: number, b: number): number;
declare function printName(firstname: string, lastname?: string): string;
interface TodoItem {
    id: number;
    title: string;
    status: boolean;
    onClick: (id: number) => void;
}
declare function callback(value: number): void;
declare const todoItem: TodoItem;
declare let users: 'admin' | "user" | "superadmin";
declare let variants: 'h1' | 'h2' | 'h3';
declare let grids: 1 | 2 | 3;
declare type Users = "users" | "admin" | "superadmin";
declare let user: Users;
declare type ActionTypes2 = 'GET_TODO_REQUEST' | 'GET_TODO_SUCCESS' | 'GET_TODO_FAILURE';
declare type State = {
    todos?: TodoItem[] | null;
    isLoading?: boolean | null;
    isError?: boolean | null;
};
declare type Actions = {
    type: ActionTypes2;
    payload: State;
};
declare const myReducer: (state: State, action: Actions) => void;
interface Response200 {
    status: 200 | 201 | 404 | 500;
    error?: 'network error' | 'no data';
}
interface TodoResponse {
    data: TodoItem[];
}
declare type TodoResponseAxios = Response200 & TodoResponse;
declare const response: TodoResponseAxios;
