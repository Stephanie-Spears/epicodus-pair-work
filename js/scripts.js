var array= [];
function makeList(myList, myDeadLine) {
    this.someList = myList;
    this.someDeadLine = myDeadLine;
    array.push(myList);
    alert(array.join(","));
}

function removeItem(array)
{
  var updateArray = myArray;
    for (var i = 0; i < array.length; i++) {
    updateArray[i]
  }
}

makeList.prototype.taskName = function() {
  return this.someList + " " + this.someDeadLine;
}


$(document).ready(function(){
  $("form#taskForm").submit(function(event){
    event.preventDefault();

    var inputTask = $("input#taskLabel").val();
    var inputDeadLine = $("input#taskDeadLine").val();
    var newMakeList = new makeList(inputTask, inputDeadLine);


    $("ul#tasks").append("<li><span class ='toDoList'>" + newMakeList.taskName() + "</span></li>");
    $("input#taskLabel").val("");
    $("input#taskDeadLine").val("");


    $(".toDoList").last().click(function(){
      $("#displayBox").show();
      $("#displayBox h2").text(newMakeList.someList);
      $(".task-name").text(newMakeList.someList);
      $(".task-deadline").text(newMakeList.someDeadLine);
    })
  });
});
