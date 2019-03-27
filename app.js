document.getElementsByTagName("form")[0].addEventListener("submit",
valueFunction);

let allTasks;
function valueFunction(e){
  const task = document.getElementById("inputTask").value;
  if(localStorage.getItem("tasksInLS") === null){
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem("tasksInLS"));
  }
  
  if(task === ""){
    alert("Add task!");
  } else {
    allTasks.push(task);
  }
  localStorage.setItem("tasksInLS", JSON.stringify(allTasks));
  
  document.getElementById("inputTask").value = "";
  
  e.preventDefault();

  printTask();

  function printTask(){
    let ul = document.getElementsByTagName("UL")[0];
    ul.innerHTML = "";
    let printTaskLS = JSON.parse(localStorage.getItem("tasksInLS"));
    if(!(localStorage.getItem("tasksInLS") === null)){
      printTaskLS.forEach(element => {
        const li = document.createElement('li');
        li.setAttribute("class", "list-group-item");
        li.textContent = element;
        ul.appendChild(li);
        // console.log(element);
      });
    }
  };
};

document.getElementById("clrTaskBtn").addEventListener("click", clearTasks);

function clearTasks(){
  document.getElementsByTagName("UL")[0].innerHTML = "";
  localStorage.clear();
}