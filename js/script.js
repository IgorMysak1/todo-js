"use strict";

let taskList = document.querySelector('.info_list');

document.querySelector('.plus').addEventListener('click', () => createTask());

function createTask() {
	// Create div
	let task = document.createElement('div');
	task.classList.add('make_task');
  
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
    taskName.classList.add('name_task');
    taskName.textContent = readyBtn.previousSibling.value;
   
    readyBtn.previousSibling.remove();
    task.prepend(taskName);
    //change class
    task.classList.remove('make_task');
    task.classList.add('task');
    //remove button
   	task.removeChild(readyBtn);
    //create change
  	let change = document.createElement('div');
	change.classList.add('change');
	task.append(change);
	//create pen
	let pen = document.createElement('img');
	pen.classList.add('img_pen');
	pen.setAttribute('src' , 'img/pen.png');
	change.append(pen);
	//create pen
	let cross = document.createElement('img');
	cross.classList.add('img_cross');
	cross.setAttribute('src' , 'img/cross.png');
	change.append(cross);

	//delete task
	cross.addEventListener('click' , function(){
		taskList.removeChild(task);
	});
	pen.addEventListener('click' , function(){
		//delete everything
		task.removeChild(taskName);
		change.removeChild(pen);
		change.removeChild(cross);
		task.removeChild(change);
		//addClass
		task.classList.add('edit');
		//add input and tick
		//create tick
		let tick = document.createElement('img');
		tick.classList.add('tick');
		tick.setAttribute('src' , "img/tick.png");
		task.prepend(tick);
		//create input
		let inpEdit = document.createElement('input');
		inpEdit.classList.add('inp');
		task.prepend(inpEdit);
		inpEdit.value = taskValue;
		tick.addEventListener('click' , function(){
			task.classList.remove('edit');
			task.removeChild(tick);
			task.removeChild(inpEdit);
			//create p
			let newTaskName = document.createElement('p');
    		newTaskName.classList.add('name_task');
    		newTaskName.textContent = inpEdit.value;
    		task.prepend(newTaskName); 
			//create change
		  	let change = document.createElement('div');
			change.classList.add('change');
			task.append(change);
			//create pen
			let pen = document.createElement('img');
			pen.classList.add('img_pen');
			pen.setAttribute('src' , 'img/pen.png');
			change.append(pen);
			//create pen
			let cross = document.createElement('img');
			cross.classList.add('img_cross');
			cross.setAttribute('src' , 'img/cross.png');
			change.append(cross);
		});
	});
  });
  
  taskList.prepend(task);
};