let allTask = document.querySelector('.info_list');
document.querySelector('.plus').addEventListener('click' ,function(){
	//craete block (task)
	let task = document.createElement('div');
	task.classList.add('task');
	allTask.prepend(task);
	//create input in task
	let taskInput = document.createElement('input');
	taskInput.classList.add('taskInput');
	task.prepend(taskInput);
	//create button in task
	let readyBtn = document.createElement('button');
	readyBtn.textContent = "Готово";
	readyBtn.classList.add('btn_ready');
	task.append(readyBtn);

	function aaa(readyBtn , taskInput){
		readyBtn.addEventListener('click' ,function(){
			task.classList.remove('task');
			task.classList.add('make_task');
			let val = taskInput.value;

			task.removeChild(readyBtn);		
			task.removeChild(taskInput);

			let taskP = document.createElement('p');
			taskP.classList.add('taskP');
			taskP.textContent = val;
			task.append(taskP);	
			//create change 
			let change = document.createElement('div');
			change.classList.add('change');
			task.append(change);

			let pen = document.createElement('img');
			pen.classList.add('img_pen');
			pen.setAttribute('src' , 'img/pen.png');
			change.append(pen);	
			function edit(pen){
				pen.addEventListener('click' ,function(){	
					change.removeChild(cross);
					task.removeChild(change);
					task.classList.remove('make_task');
					task.classList.add('task');
					let new_taskInput = document.createElement('input');
					new_taskInput.classList.add('taskInput');
					task.prepend(new_taskInput);
					let val_ready_task = taskP.textContent;
					new_taskInput.value = val_ready_task;

					task.removeChild(taskP);	
					change.removeChild(pen);	
					let tick = document.createElement('img');
					tick.classList.add('tick');
					tick.setAttribute('src' , 'img/tick.png');
					task.append(tick);
					function tick1(tick){
						tick.addEventListener('click' ,function(){
							task.prepend(change);
							let bbb = new_taskInput.value;
							task.removeChild(new_taskInput);
							task.removeChild(tick);
							taskP.textContent = bbb;
							task.prepend(taskP);
							change.append(pen);	
							change.append(cross);
						});
					};
					tick1(tick);
				})
			}
			edit(pen);
			let cross = document.createElement('img');
			cross.classList.add('img_cross');
			cross.setAttribute('src' , 'img/cross.png');
			change.append(cross);
			function del(cross){
				cross.addEventListener('click' ,function(){
					allTask.removeChild(task);
				});
			}
			del(cross);
		});
	}
	aaa(readyBtn , taskInput);
});



