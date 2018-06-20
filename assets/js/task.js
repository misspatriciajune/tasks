//Task is completed
$("ul").on("click", "li", function(){	//when an li inside a ul is clicked
	$(this).toggleClass("completed");	//call to strikethrough the completed task
});

//Add a new task
$("input[type='text']").keypress(function(event){
	if(event.which === 13){ 	//when 'enter' button is clicked

		var task = $(this).val();	//get the task entered
		$(this).val("");	//clears the input
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + task + "</li>"); //add the new task by creating a new li and append to ul

	}
});

$(".fa-plus").click(function(){		//when plus button is clicked
	$("input[type='text']").fadeToggle();	//toggle the text input section
});

//Delete a task
$("ul").on("click", "span", function(event){	//when a span inside a ul is clicked
	$(this).parent().fadeOut(500, function(){	//remove the task
		$(this).remove();
	});
	event.stopPropagation();					
});