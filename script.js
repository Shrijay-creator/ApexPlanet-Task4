// Load tasks when page opens
window.onload = function () {
    loadTasks();
};

// Add Task
function addTask() {

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    loadTasks();
}

// Load Tasks
function loadTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task, index){

        let li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });

}

// Delete Task
function deleteTask(index){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadTasks();

}
const products = [

{
    name:"Laptop",
    category:"Electronics",
    price:50000,
    image:"images/laptop.jpg"
},

{
    name:"Headphones",
    category:"Electronics",
    price:2500,
    image:"images/headphones.jpg"
},

{
    name:"T-Shirt",
    category:"Clothing",
    price:800,
    image:"images/T-Shirt.jpg"
},

{
    name:"Jeans",
    category:"Clothing",
    price:1500,
    image:"images/jeans.jpg"
}

];

displayProducts(products);

function displayProducts(items){

const container=document.getElementById("productContainer");

container.innerHTML="";

items.forEach(product=>{

container.innerHTML+=`

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Category : ${product.category}</p>

<p>₹${product.price}</p>

</div>

`;

});

}

function filterProducts(){

let value=document.getElementById("filter").value;

if(value==="all"){

displayProducts(products);

}

else{

let filtered=products.filter(product=>product.category===value);

displayProducts(filtered);

}

}