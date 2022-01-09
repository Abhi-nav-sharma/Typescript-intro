interface Obj{
    title:string,
    status:boolean,
    id:number
}

function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }

interface Address{
    houseNumber: number,
    street:string,
    city:string,
    state:string,
    postalCode: number,
    country:string
}

interface PersonDetails{
    prefix?:string,
    phones: number[],
    addresses:Address[],
    email?:string,
    firstname:string,
    lastname:string,
    middlename?:string
}

let Persons:[]

function PhoneBook(personDetails:PersonDetails):void{
    Persons.push(personDetails)
}