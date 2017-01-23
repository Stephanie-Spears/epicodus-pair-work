function makeList(myList, myDeadLine) {
    this.someList = myList;
    this.someDeadLine = myDeadLine;
}

makeList.prototype.taskName = function() {
  return this.someList + " " + this.someDeadLine;
}


function initializeArray(newMakeList){
  var returnMyArray = [];
  for(var i = 0; i < newMakeLIst.length; i++){
    returnMyArray.push(returnMyArray[i]);
  }
  return (returnMyArray);
}


$(document).ready(function(){
  $("form#taskForm").submit(function(event){
    event.preventDefault();
    var inputTask = $("input#taskLabel").val();
    var inputDeadLine = $("input#taskDeadLine").val();

    var newMakeList = new makeList(inputTask, inputDeadLine);

    $("ul#tasks").append("<li><span class ='toDoList'>" + newMakeList.someList + "</span></li>");
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
