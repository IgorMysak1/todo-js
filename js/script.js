document.addEventListener('DOMContentLoaded', () => {
"use strict";
	
	let tasks = [];
	let allTask = document.querySelector('.info_list');
	function createTasks() {
		if (localStorage.getItem('Tasks')) {
			for (let i = 0; i < localStorage.getItem('Tasks').split(',').length; i++) {
				// Create div
				let task = document.createElement('div');
				task.classList.add('task');
				let taskName = document.createElement('p');
				taskName.classList.add('taskName');
				taskName.textContent = localStorage.getItem('Tasks').split(',')[i];
				task.prepend(taskName);
				allTask.prepend(task);
				//
				
				let change = document.createElement('div');
				change.classList.add('change');
				task.append(change);

				let pen = document.createElement('img');
				pen.classList.add('img_pen');
				pen.setAttribute('src' , 'img/pen_orange.png');
				change.append(pen);	

				let cross = document.createElement('img');
				cross.classList.add('img_cross');
				cross.setAttribute('src' , 'img/cross_orange.png');
				change.append(cross);
				function edit(pen){
					pen.addEventListener('click' ,function(){
						task.removeChild(change);
						task.removeChild(taskName);
						change.removeChild(cross);
						change.removeChild(pen);
						// task.classList.remove('make_task');
						// task.classList.add('task');
						let tick = document.createElement('img');
						tick.classList.add('tick');
						tick.setAttribute('src' , 'img/tick.png');
						task.prepend(tick);						
						let new_taskInput = document.createElement('input');
						new_taskInput.classList.add('taskInput');
						task.prepend(new_taskInput);
						new_taskInput.value = taskName.textContent;
						
						function tick1(){
							tick.addEventListener('click' ,function(){
								let bbb = new_taskInput.value;
								console.log(bbb);
								task.removeChild(tick);
								task.removeChild(new_taskInput);
								task.prepend(change);
								task.prepend(taskName);
								change.append(pen);
								change.append(cross);
								
								let recievArr = localStorage.getItem('Tasks').split(',');
								let ind = recievArr.indexOf(taskName.textContent); 
								console.log(ind);
								recievArr.splice(ind , 1 , bbb);
								taskName.textContent = bbb;
								localStorage.setItem('Tasks', recievArr);									
							});
						}
						tick1();	
					});
					
				}
				edit(pen);	
				
				function del(cross){
					cross.addEventListener('click' , function(){
						let recievArr = localStorage.getItem('Tasks').split(',');
						let ind = recievArr.indexOf(taskName.textContent); 
						recievArr.splice(ind , 1);
						localStorage.setItem('Tasks', recievArr);
						allTask.removeChild(task);
					});
					
				};
				del(cross);
			};
		};
	};

createTasks();


	document.querySelector('.block_plus').addEventListener('click' ,function(){
		//craete block (task)
		let task = document.createElement('div');
		task.classList.add('task');
		allTask.prepend(task);
		//create input in task
		let taskInput = document.createElement('input');
		taskInput.classList.add('taskInput');
		task.prepend(taskInput);
		//create button in task
		let readyBtn = document.createElement('img');
		readyBtn.classList.add('tick');
		readyBtn.setAttribute('src' , 'img/tick_orange.png');
		task.append(readyBtn);

		// taskInput.addEventListener("keydown", function() {
		// 	let val = taskInput.value;
		// 	val.style.fontSize = '20px';
		// 	taskInput.textContent = val;
		// });
		function aaa(readyBtn , taskInput){
			readyBtn.addEventListener('click' ,function(){
				if(taskInput.value == ""){
					let delCross = document.createElement('img');	 
					delCross.classList.add('img_cross');
					delCross.setAttribute('src' , 'img/cross_orange.png');
					task.prepend(delCross);
					let motivateText = document.createElement('p');
					motivateText.classList.add('motivateText');
					motivateText.textContent = "Криворукий інвалід , тепер видаляй"
					task.prepend(motivateText);					
					delCross.addEventListener('click' ,function(){
						task.removeChild(delCross);
						task.removeChild(motivateText);
						allTask.removeChild(task);
					});
				};

	
				let val = taskInput.value;


				task.removeChild(readyBtn);		
				task.removeChild(taskInput);

				let taskP = document.createElement('p');
				taskP.classList.add('taskP');
				if (val.length < 1) return;
				taskP.textContent = val;

				let arr = [];
				arr.push(localStorage.getItem('Tasks'));
				if(arr == ""){
					arr.splice(0, 1);
				}
				arr.push(val);
				tasks = arr;
				localStorage.setItem('Tasks', tasks);

				task.append(taskP);
				let change = document.createElement('div');
				change.classList.add('change');
				task.append(change);

				let pen = document.createElement('img');
				pen.classList.add('img_pen');
				pen.setAttribute('src' , 'img/pen_orange.png');
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
						tick.setAttribute('src' , 'img/tick_orange.png');
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
				cross.setAttribute('src' , 'img/cross_orange.png');
				change.append(cross);

				function del(cross){
					cross.addEventListener('click' , function(){
						let recievArr = localStorage.getItem('Tasks').split(',');
						let ind = recievArr.indexOf(taskP.textContent); 
						recievArr.splice(ind , 1);
						console.log(recievArr);
						localStorage.setItem('Tasks', recievArr);
						allTask.removeChild(task);
					});
					
				};
				del(cross);
			});
		}
		aaa(readyBtn , taskInput);

	});


});

