let btn_previous = document.getElementById('btn-1');
let btn_next = document.getElementById('btn-2');

let para = document.getElementById('para-ele');

let circle_1 = document.getElementById('circle-1');
let circle_2 = document.getElementById('circle-2');
let circle_3 = document.getElementById('circle-3');
let circle_4 = document.getElementById('circle-4');

let div_ele_1 = document.querySelector('.color-ele-1');
let div_ele_2 = document.querySelector('.color-ele-2');
let div_ele_3 = document.querySelector('.color-ele-3');

btn_next.addEventListener('click', next_click)

let position = 1;

function next_click(){
    if(position == 1){
        position = second_block(position,1);
    }else if( position == 2 ){
        position = third_block(position,1);
    }else if( position == 3 ){
        position = fourt_block(position,1);
    }else if( position == 4){
        position = five_block(position,1);
    }
}

btn_previous.addEventListener('click', previous_click)

function previous_click(){
    if(position == 2){
        position = second_block(position,-1);
    }else if( position == 3 ){
        position = third_block(position,-1);
    }else if( position == 4 ){
        position = fourt_block(position,-1);
    }else if( position == 5){
        position = five_block(position,-1);
    }
}

function second_block(index,check){
    index = index + check;
    if(check == 1){
        para.innerText = "Add shipping address for successful delivery"
        btn_previous.style.color = 'black'
        circle_1.innerHTML = "&#10003;"
        circle_1.style.color = 'white';
        circle_1.style.backgroundColor = 'green';
        circle_2.style.backgroundColor = 'purple';
        div_ele_1.style.backgroundColor = 'green';
    }else{
        para.innerText = "Add Contact Details for further communications."
        btn_previous.style.color = 'gray'
        circle_1.innerText = "1"
        circle_1.style.color = 'black';
        circle_1.style.backgroundColor = 'purple';
        circle_2.innerText = "2";
        circle_2.style.backgroundColor = 'lightgray';
        div_ele_1.style.backgroundColor = 'black';
    }
    return index;
}

function third_block(index,check){
    console.log(index+check);
    index = index + check;
    if(check == 1){
        para.innerText = "Complete Payment to complete the order"
        btn_previous.style.color = 'black'
        circle_2.innerHTML = "&#10003;"
        circle_2.style.color = 'white';
        circle_2.style.backgroundColor = 'green';
        circle_3.style.backgroundColor = 'purple';
        div_ele_2.style.backgroundColor = 'green';
    }else{
        para.innerText = "Add shipping address for successful delivery"
        circle_2.innerText = "2"
        circle_2.style.color = 'black';
        circle_2.style.backgroundColor = 'purple';
        circle_3.innerText = "3";
        circle_3.style.backgroundColor = 'lightgray';
        div_ele_2.style.backgroundColor = 'black';
    }
    return index;
}

function fourt_block(index,check){
    console.log(index+check);
    index = index + check;
    if(check == 1){
        para.innerText = "Ready to deliverd!";
        btn_previous.style.color = 'black';
        circle_3.innerHTML = "&#10003;"
        circle_3.style.color = 'white';
        circle_3.style.backgroundColor = 'green';
        circle_4.style.backgroundColor = 'purple';
        div_ele_3.style.backgroundColor = 'green';
        btn_next.innerText = "Finish";
    }else{
        btn_next.style.color = 'black';
        btn_next.innerText = 'Next'
        para.innerText = "Complete Payment to complete the order"
        circle_3.innerText = "3"
        circle_3.style.color = 'black';
        circle_3.style.backgroundColor = 'purple';
        circle_4.innerText = "4";
        circle_4.style.backgroundColor = 'lightgray';
        div_ele_3.style.backgroundColor = 'black';
    }
    return index;
}

function five_block(index,check){
    index = index + check;
    if(check == 1){
        para.innerText = "Order succesfully deliveried!"
        btn_previous.style.color = 'black'
        btn_next.style.color = 'gray';
        circle_4.innerHTML = "&#10003;"
        circle_4.style.color = 'white';
        circle_4.style.backgroundColor = 'green';
    }else{
        btn_next.style.color = 'black';
        btn_next.innerText = 'Next'
        para.innerText = "Ready to deliverd!"
        btn_previous.style.color = 'black'
        circle_4.innerText = "4"
        circle_4.style.color = 'black';
        circle_4.style.backgroundColor = 'purple';
    }
    return index;
}