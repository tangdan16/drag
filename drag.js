// JavaScript Document

function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;

	obj.onmousedown = function(ev){
		var num = 0;
		disX = ev.clienetX - disX;
		disY = ev.clienetY - disY;
		document.onmousemove = function(ev){
			var num=111111111;
		}
	}

	console.log('第n次提交了');
	console.log('烦躁');
}