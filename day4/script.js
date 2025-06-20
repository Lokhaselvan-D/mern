// JavaScript Code Snippet
console.log("Hello, World!");
console.error("This is an error message.");
console.warn("This is a warning message.");
console.table([{name: "Alice", age: 30}, {name: "Bob", age: 25}]);
eval("let a=5;console.log(\"Hello world\");console.log(a);");
x=3.14
console.log(x);
let obj={name: "Alice"};
let str=JSON.stringify(obj);
console.log(str);
let backup = JSON.parse(str);
console.log(backup);


localStorage.setItem("name", "Alice");
localStorage.setItem("age", "30");
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
localStorage.removeItem("name");

sessionStorage.setItem("sessionName", "Bob");
console.log(sessionStorage.getItem("sessionName"));


// Using a Promise
let promise = new Promise((resolve, reject) => {
    let=true;
    setTimeout(() => {resolve("hello")}, 10000);
});
promise.then(res => console.log(res)).catch(err => console.error(err));


//closure
function outer(){
    let name = "JS";
    return function inner() {
        console.log(name);
    };
}


let dom = document.getElementById("DOM");
dom.style.color = "red";
dom.style.backgroundColor = "yellow";
dom.innerText = "MY PROFILE";

let contents = ["Hello Everyone", "I am LOKHASELVAN D", "I am currrently pursuing my B.E in Electronics and Instrumentation Engineering at KEC","Thank you!!!  "];
let index = 0;

function showNextContent() {
    if (index < contents.length) {
        let newElement = document.createElement("h4");
        newElement.innerText = contents[index];
        dom.appendChild(newElement);

        setTimeout(() => {
            dom.removeChild(newElement);
            index++;
            showNextContent();  // show next content after 10 seconds
        }, 5000);
    }
}

showNextContent();  // start the sequence
