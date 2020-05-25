$(document).ready(function(){
    $("#checkout").click(function(event){
    event.preventDefault();
    var size = parseInt($("#size option:selected").val());
    var crust = parseInt($("#crust option:selected").val());
    var toppings = parseInt($("#topping1 option:selected").val());
    var toppings1 = parseInt($("#topping2 option:selected").val());
    var number = parseInt($("#number").val());

    let myToppings = [];
    if(!isNaN(toppings)){
        myToppings.push(toppings);

    }

    if(!isNaN(toppings1)){
        myToppings.push(toppings1);

    }
    let costofToppings = 0
    if(myToppings.length){
      for(i in myToppings){
          costofToppings += myToppings[i];
      }
    }
    let cost = size + crust+ costofToppings
    var total = cost*number;
    var grandTotal = 0;

    $('table#tablecart').append('<tr>'+'<td>'+$("#flavour option:selected").text()+'</td>'+'<td>'+ $("#size option:selected").text()+'</td>'+'<td>'+$("#crust option:selected").text()+'</td>'+ '<td>'+$("#toppings option:selected").text()+'</td>'+'<td id="number">'+number+'</td>' +'<td id="total">'+total+'</td>'+'</tr>');
