// Back End:
// var number1 = number2 = 0;
var calculate = function(func, number1, number2) {
  if (func === "add") {
    return number1 + number2;
  } else if (func === "subtract") {
    return number1 - number2;
  } else if (func === "multiply") {
    return number1 * number2;
    } else if (func === "divide") {
        return number1 / number2;
      } else { return 0; }
  }
// Front End:

$(document).ready(function() {
  $("#franz").click(function(event) {
    event.preventDefault();
    number1 = parseInt($("#add1").val());
    number2 = parseInt($("#add2").val());
    console.log(number1);
  });

  $("#franz").click(function(event) {
    event.preventDefault();
    var func = $("input:radio[name=operator]:checked").val();
    var value = calculate(func, number1, number2);
    console.log(value);
    $("#addOutput").text(value);
  })

});
