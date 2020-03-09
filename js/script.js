"use strict";

let taskList = document.querySelector('.info_list');

document.querySelector('.plus').addEventListener('click', () => createTask());

function createTask() {
	// Create div
	let task = document.createElement('div');
	task.classList.add('task');
  
	// Create input
	let taskInput = document.createElement('input');
	taskInput.classList.add('inp');
	task.prepend(taskInput);
  
	// Create p
	let readyBtn = document.createElement('button');
	readyBtn.textContent = "Готово";
	readyBtn.classList.add('btn_ready');
	task.append(readyBtn);
  
  // addEventListener
  readyBtn.addEventListener('click', () => {
    let taskValue = readyBtn.previousSibling.value;
    let taskName = document.createElement('p');
    taskName.textContent = readyBtn.previousSibling.value;
   
    readyBtn.previousSibling.remove();
    task.prepend(taskName)
  });
  
  taskList.prepend(task);
};