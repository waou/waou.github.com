$(test1);
function test1(){
	$.ajax({
		type:"POST",
		url:"js/Person.json",
		dataType:"json",
		error:function(e){
			alert(e);
		},
		success:function(data){
			var p= data || {};
			alert(p.name);
		}
	});
}
