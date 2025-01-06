// document.getElementById("count").innerText = 5

// let count = 0;
// console.log(count);

let count_el = document.getElementById("count-el");
console.log(count_el);

let count = 0;

function increment() {
    count += 1
    count_el.innerText = count;
    console.log(count);
}
