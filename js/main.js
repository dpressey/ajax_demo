$(document).ready(function(){

	$.ajax({
		type: 'POST',
		url: 'http://rest.learncode.academy/api/denzel/books',
		data: {
			author: "bob", title: "the wizard of oz", year: 1920,
			author: "ralph barr", title: "sherlock holmes", year: 1895,
			author: "jimmy siegal", title: "mean streats", year: 1974
		},
		success: function(data, status){
			window.console.log(status);
		}
	});
});