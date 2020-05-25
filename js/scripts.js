$(document).ready(function(){
    $("#pizzaTopping1").append(
        '<label for="">Choose Pizza Topping: </label>'+
        '<select required class="form-control" id="Topping1">'+
         ' <option></option>'+
          '<option value="pineapple">Pineapple-mince @ 150</option>'+
          '<option value="Green">Green peper @50</option>'+
          '<option value="Mushroom">Mushroom sweet @ 100</option>'+
          '<option value="Chicken">Cheese mince @ 60</option>'+
          '<option value="Beef">Black Olive @ 80</option>'+
          '<option value="Sausage">Red Onions @ 100</option>'+
       "</select>"
    ) 
    $("#pizzaTopping2").append( 
        '<label for="">Additional Toppings: </label>'+
    '<select required class="form-control" id="Topping2>'+
      '<option></option>'+
      '<option value="Peparoni">Cheese peparoni @ 180</option>'+
      '<option value="Sausage">tomatoes @ 100</option>'+
      '<option value="Sausage">Bacon 30 @</option>'+
    "</select>"
    )
});
