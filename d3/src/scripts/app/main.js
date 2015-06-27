requirejs(["scripts/thirdparty/d3.js"], function(d3) {
    //This function is called when /scripts/thirdparty/d3.js is loaded.
	var body = d3.select('body');	

	var dataset = [10,5, 11, 12, 13,22];

	body.selectAll('p').data(dataset).enter().append("p").text(function(d,i){return "Value is " + d;});	
});

