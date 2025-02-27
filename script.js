let btn_previous = document.getElementById('btn-1');
let btn_next = document.getElementById('btn-2');
let para = document.getElementById('para-ele');

let circles = document.querySelectorAll('.circle');
let div_elements = document.querySelectorAll('.color-ele');

let steps = [
    { text: "Add Contact Details for further communications.", btn_prev: "gray", btn_next: "black" },
    { text: "Add shipping address for successful delivery", btn_prev: "black", btn_next: "black" },
    { text: "Complete Payment to complete the order", btn_prev: "black", btn_next: "black" },
    { text: "Ready to deliver!", btn_prev: "black", btn_next: "black", btn_next_text: "Finish" },
    { text: "Order successfully delivered!", btn_prev: "black", btn_next: "gray" }
];

let position = 0;

btn_next.addEventListener('click', () => updateStep(1));
btn_previous.addEventListener('click', () => updateStep(-1));

function updateStep(direction) {
    let newPosition = position + direction;
    
    if (newPosition < 0 || newPosition >= steps.length) return;
    
    position = newPosition;
    let step = steps[position];

    para.innerText = step.text;
    btn_previous.style.color = step.btn_prev;
    btn_next.style.color = step.btn_next;
    btn_next.innerText = step.btn_next_text === undefined ? "Next" : step.btn_next_text;

    circles.forEach((circle, index) => {
        if (index < position) {
            circle.innerHTML = "&#10003;";
            circle.style.color = "white";
            circle.style.backgroundColor = "green";
        } else {
            circle.innerText = index + 1;
            circle.style.color = "black";
            circle.style.backgroundColor = index === position ? "purple" : "lightgray";
        }
    });

    div_elements.forEach((div, index) => {
        div.style.backgroundColor = index < position ? "green" : "black";
        div.classList.add('transform-slow')
    });
}