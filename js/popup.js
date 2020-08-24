$(function(){
    $.getJSON("/modules.json",function(result){
        $.each(result, function(i, field) {
        	let element = `
        	<a href="${field.page}" class="panel panel-default">
		        <div class="panel-body">
		            <div class="tool-image">
		                <img class="icon" src="${field.icon}">
		            </div>
		            <div class="tool-content">
		                <div>${field.title}</div>
		                <div class="text-muted small">${field.desc}</div>
		            </div>
		        </div>
		    </a>`
		    $("body").append(element);
        });
    });
}) ;