(function($){

	$(document).ready(function (){
		var counter=0;
		if(JSON.parse(localStorage.getItem('task'))){
			tmp = JSON.parse(localStorage.getItem('task')).length;
			var task=JSON.parse(localStorage.getItem('task'));
			counter = task[(tmp-1)].id;
			counter++;
			for (var i = 0; i <JSON.parse(localStorage.getItem('task')).length; i++) {
	  			$('.task-list').append("<li class='"+task[i].priority+"'><input type='checkbox'/><label for=task"+i+">"+task[i].text+"</label><i onclick=borrar("+i+") id="+i+" class='x-large delete icon'></i></li>");
	  		};
		}else{
			counter = 0;
		}

		//reseta localstorage
	  	//localStorage.clear();
	  	//console.log(localStorage);


	  	$('body').keypress(function (e) {
		  if (e.which == 13) {
		    if($('#task-text').val()){
		    	tmp = localStorage.getItem('task');
             	tmp = (tmp === null) ? [] : JSON.parse(tmp);
		    	var task = {};
				task.id = counter;
				task.priority = $('#priority').val();
				task.text=$("#task-text").val();
				tmp.push(task);
             	localStorage.setItem('task', JSON.stringify(tmp));
				$('.task-list').append("<li class='"+$('#priority').val()+"'><input type='checkbox'/><label for=task"+counter+">"+$("#task-text").val()+"</label><i onclick=borrar("+counter+") id="+counter+" class='x-large delete icon'></i></li>");
				counter++;
				$("#task-text").val('');
		    }else{
		    	alert("write something");
		    }
		    return false;
		  }
		});


		/*$('.delete').on('click', function() {
			alert("hola")
			$(this).closest('li')
				.addClass('remove')
				.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(){
					$(this).remove();
				});
			var id=$(this).attr('id');
			var task_tmp = localStorage.getItem('task');
            task_tmp = (task_tmp === null) ? [] : JSON.parse(task_tmp);
            task_tmp.splice((id-1),1);
            localStorage.setItem('task', JSON.stringify(task_tmp));
		});*/

	});
	
	$(window).load(function() {
	});
	
	$(window).resize(function() {
		
	});

})(window.jQuery);


function borrar(id){
	var task_tmp = localStorage.getItem('task');
	console.log(task_tmp);
	console.log(id);
	$("#"+id).closest('li')
		.addClass('remove')
		.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(){
		$(this).remove();
	});

    //saca el arreglo de localstorage lo guarda en una variable y hace el splice segun la posición
	var task_tmp = localStorage.getItem('task');
    task_tmp = (task_tmp === null) ? [] : JSON.parse(task_tmp);
    task_tmp.splice(id,1);
    localStorage.setItem('task', JSON.stringify(task_tmp));

    //resetea el localstorage cuando ya no haya nada para que no falle
    if(JSON.parse(localStorage.getItem('task'))==0){
    	localStorage.clear();
    }
}

