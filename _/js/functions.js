(function($){

	$(document).ready(function (){
		var counter=0;
		if(JSON.parse(localStorage.getItem('task'))){
			tmp = JSON.parse(localStorage.getItem('task')).length;
			var task=JSON.parse(localStorage.getItem('task'));
			counter = task[(tmp-1)].id;
			counter++;
			for (var i = 0; i <JSON.parse(localStorage.getItem('task')).length; i++) {
	  			$('.task-list').append("<li class='"+task[i].priority+"'><input type='checkbox'/><label for=task"+task[i].id+">"+task[i].text+"</label><i onclick=borrar("+task[i].id+") id="+task[i].id+" class='x-large delete icon'></i></li>");
	  		};
		}else{
			counter = 0;
		}


		//reseta localstorage
	  	//localStorage.clear();


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
	$("#"+id).closest('li')
		.addClass('remove')
		.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(){
		$(this).remove();
	});

	//saca localstorage en un arreglo y busca el id del task para borrarlo
	var task_tmp = localStorage.getItem('task');
    task_tmp = (task_tmp === null) ? [] : JSON.parse(task_tmp);
	for (var i = 0; i < task_tmp.length; i++) {
		if( task_tmp[i].id == id) task_tmp.splice(i,1);
		console.log(task_tmp);
	};

	//vuelve a guardar ya el arreglo sin el task que se borro
	localStorage.setItem('task', JSON.stringify(task_tmp));


    //resetea el localstorage cuando ya no haya nada para que no falle
    if(JSON.parse(localStorage.getItem('task'))==0){
    	localStorage.clear();
    }
}

