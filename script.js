let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})




// object

// let person={
//     name:'ashok ',
//     last_nmae:'vishwakrma',
//      a:'uiaefcn',
     
// }
// person.name='nuidn';
// let colour=["red",'blue','green'];
// colour[0]='ywllo'
// colour[3]=5
// console.log(colour )
// colour[3]='yellow'; 
// console.log(person['name'],colour)

//function  with multipal paramenters 

// function person(name, lastname){
//     console.log("hello"+" " +name + lastname)
// }

// person("ashok" , "viscoaed");
// person("m ")

///function use for calculator

// function squars(number){
//     // let sq=number*number
//     return number*number
//     // console.log(sq)
// }

// // squars(5)
// let num=squars(3)
// console.log(num)

// let x=100

// let condition= x>99 ? "good":"bad"

// console.log(condition)


//if else condition

// let x=4;

// if (x >= 6 && x<12)
//     console.log("good morning")

// else if (x >=12 && x<3)
//     console.log("good afternon")


// else if (x >=3 && x<10){        
//     console.log("good afternon")
// }

// else {
//     console.log("good night")
// }

//for loop

// for (let i=0;i<10;i++){
//     if (i%2!==0){
//         console.log(i)
//     }
    
// }
// let i =1
// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

//   do{
//     if (i%2!==0) console.log(i)
//     i++
//   }while(i<=5)

//for in 

// let person=['red','blue','green']   

// let person={
//         name:'ashok ',
//         last_nmae:'vishwakrma',
//          a:'uiaefcn',
         
//     }
// // for(let detail in person)
// // console.log(detail, person[detail])
// console.log(person.name)

//function question
// function max(x,y){
//     if(x>y) console.log(x ,'is the biggest number');

//     else console.log(y , 'this is the bigest number');
// }

// max(6,3)

//excer

// function fizzbuzz(input){
//     if(typeof input  !== 'number') return 'this is not number'
//     else if (input %3===0) return 'fizz'
//     else if (input %5===0) return 'buzz'
//     else if (input %3===0 && input %5===0) return 'fizzbuzz'
//     return inputinput 

// }

// let output=fizzbuzz(3,5)
// console.log(output)

//function multtiple of 3&5
// function sum(numer){
//     add=0
//     for(let i=0;i<=numer;i++)
//     if(i%3===0 || i%5==0)
//     add+=i
//     return add     
// }

// let anf=sum(20)
// console.log(anf)

// confirm.log(sum(20))