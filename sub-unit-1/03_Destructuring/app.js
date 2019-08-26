// const pizza = ["pep", "mushroom", "mango", "pineapple"];

const pizza = [
    {
        name: "pep",
        number: 3,
        price: 10
    },
    {
        name: "mushroom",
        number: 3,
        price: 10
    },
    {
        name: "mango",
        number: 3,
        price: 10
    },
    {
        name: "pineapple",
        number: 3,
        price: 10
    }
];

// console.log(pizza[0].name);


// const [pep, mushroom] = pizza;
// // console.log(JSON.stringify(pizza));
// console.log(pizza[0]);

/**
 * Object Destructuring
 */
 var PizzaObj = {
   pepp: "monday",
   array: [
       1, 
       2, 
       3
   ],
   getName(name){
       console.log(`Cool name ${name}`)
   }

 };

 let LOG = console.log;

 console.log(PizzaObj.pepp);
//  console.log(PizzaObj.getName("Jeff"));

const {pepp, array, getName} = PizzaObj;
getName("jeff");

var dogType = "pug";
var dog = {
    [dogType  + "Bark"] (){
        LOG("I'm a pug!");
    }
}
const {pugBark} = dog;
pugBark();