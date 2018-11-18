// code for creating the table was taken from:   https://gist.github.com/jfreels/6814721

var tabulate = function (data,columns,pres) {

    var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var tbody = table.append('tbody')
	
	thead.append('tr')
	  .selectAll('th')
	  .data(columns)
	  .enter()
   	  .append('th')
      .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
 	    .append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
      .append('td')
      .text(function (d) { return d.value })
	  
	  .data(function(d) {return d.value==="Washington"})
	  .enter()
      .append('td')
      .text(function (d) { return d.value })
 
	var even = d3.selectAll('td')
	   .filter(function(d) { 
	    if (d=="Washington") {console.log('working')} }) 
      .enter()
      .append('tr')
      .text(function (d) { return d })
	  
  return table;
}




d3.csv('https://raw.githubusercontent.com/charleyferrari/CUNY_DATA_608/master/module5/js_examples/Hello%20World/data/presidents.csv',function (data) {

	var columns = ['Name','Height','Weight']

	

	var pres = ['Washington', 'Lincoln', 'J. Adams', 'Madison', 'Bush'];
    d3
    .select('#pres-selector')
    .selectAll('option')
    .data(pres)
    .enter()
    .append('option')
    .text(function(d) {
      return d;
    })
    .attr('value', function(d) {
      return d;
    });

	tabulate(data,columns,pres)
//	myText = document.getElementById('text');
	d3.select('#pres-selector').on('change')
	  
	var even = d3.selectAll('p')
	   
	   
	   
	   
	   .filter(function(d) { 
	    if (d=="Washington") {console.log('working')} }) 
      .enter()
      .append('p')
      .text(function (d) { return d })
	
})	
	
//	function createGraph(pres) {
    // Create arrays for pricing tiers and dates
 //   let Height = [];
 //     Weight = [];


   //       Height.push(+pres['Height']);
     //     Weight.push(+pres['Weight']);

       
//if (data['Name'] == pres) {       
 //   Height.push(+data['Height']);
//}
//d3
//  .select('body')
 // .selectAll('p')
  //.data(Height)
//  .enter()
 // .append('p')
 // .text(function(Height) {
  //  return Height;
  //});
  

 


