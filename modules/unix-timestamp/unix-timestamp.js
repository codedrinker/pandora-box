$(function(){
    $("#timestamp").on("input",function(){
		let timestamp = Number($("#timestamp").val())
		let date = moment(timestamp).format('YYYY-MM-DD hh:mm:ss');
		if(date == "Invalid date") {
			$("#date").val("转换失败");
		} else {
			$("#date").val(date);	
		}
	});
    $("#date").on("input",function(){
		let date = $("#date").val();
		let time = moment(date).valueOf();
		if(time == "NaN") {
			$("#timestamp").val("转换失败");
		} else {
			$("#timestamp").val(time);	
		}
	});
}) ;