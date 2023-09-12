/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

/* I am a comment
and i can fill out more than line
*/

// i am a one liner comment 

/* variables and how to create them */
let myCow="milka"
var anotherCow="caramel"
let myBook="it was a dark and stormy night, and joe's gun... \n";
const grandMa="berta";

console.log(
    myBook
    + " "
    + grandMa 
    + " "
    + myCow
    );

    /*numbers*/
    let lucky=7;
    let disaster=13;
    const coChange=333;

    console.log(lucky/disaster);

    /*booleans: true or false*/
    const santaExists=true;


    /* comparisons*/
    console.log(lucky >= disaster)

    /** write to some HTML ID */
    hi.innerHTML=myBook;


    /*8several lines in a variable*/
    let pizza = `
    <h2> gorgonzola gargantua </h2>
    <img src="images/pizza23.png" alt="peperoni"
    <p> this wonderfull ... </p>
    </article>
    `;

    //inject this into #hi
    hi.innerHTML +=pizza;

    /**function;a series of instructions*/
    
    let boom= function(){
        alert("we use cookies, and we track all you do! consent?");
        console.log("cookie info fired of!")
        return true;
        }