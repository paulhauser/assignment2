/**
 * Created by paulhauser on 10/3/16.
 */
$(function(){
  $("#pizzaForm").submit(function(){
    $(".error").hide();

    var formData = $("#pizzaForm").serializeArray();
    var data = {};
    var validData = true;

    for(var i in formData) {
      data[formData[i].name] = formData[i].value;
    }

    if(data["age"] === "choose") {
      $("#ageErr").show();
      event.preventDefault();
      validData = false;
    }

    if(data["gender"] === "") {
      $("#gendErr").show();
      event.preventDefault();
      validData = false;
    }
    if(data["adjective"] === "") {
      $("#adjErr").show();
      event.preventDefault();
      validData = false;
    }

    if(validData === true) {
      $("#surveyForm").hide();
      $("#formSuccess").show();
      event.preventDefault();
    }

  });
});