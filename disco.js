var now = moment();
var buttonT = document.getElementById("saveBtn");
var time = document.getElementById("time");
let text = $("textarea").val();


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//turn row into array
//loop through array
//if stements monetjs hour to current hour time 
//24 hr format 
//current hour moment moment().hours()
//grab current hour from time block 
// x.getAttribute("id or class or ")
//$(x).attr("id")
//moment has its own comparsion true/false
//javascript querry slector all("class") loop through
//jquery how to loop?
//keybinding pdf


//changes color----------------------------
$(".row").each(function(index, value){
    console.log(index, value)
    var currentHour = moment().hours();
    var rowHour = parseInt($(value).attr("id"))
    console.log(currentHour ,  rowHour)
    if(currentHour === rowHour){
$(value).children("textarea ").addClass("present")
    }if(currentHour > rowHour){
        $(value).children("textarea").addClass("past")
    }else if(currentHour < rowHour){
        $(value).children("textarea").addClass("future")
    }
})



 

//save button-----------------------------------------------
$(".saveBtn").on("click", function(){
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".toDo").val())
    
});





//loads JSON--------------------------------------------------
function load(){
    localStorage.getItem($(".toDo").val());
    $("#9 .toDo").val(localStorage.getItem("9"));

    localStorage.getItem($(".toDo").val());
    $("#10 .toDo").val(localStorage.getItem("10"));

    localStorage.getItem($(".toDo").val());
    $("#11 .toDo").val(localStorage.getItem("11"));

    localStorage.getItem($(".toDo").val());
    $("#12 .toDo").val(localStorage.getItem("12"));

    localStorage.getItem($(".toDo").val());
    $("#13 .toDo").val(localStorage.getItem("13"));

    localStorage.getItem($(".toDo").val());
    $("#14 .toDo").val(localStorage.getItem("14"));

    localStorage.getItem($(".toDo").val());
    $("#15 .toDo").val(localStorage.getItem("15"));

    localStorage.getItem($(".toDo").val());
    $("#16 .toDo").val(localStorage.getItem("16"));

    localStorage.getItem($(".toDo").val());
    $("#17 .toDo").val(localStorage.getItem("17"));

    for  (var i = 0; i< 9; i++){
        $("#" + [i] + " .toDo").val(localStorage.getItem([i]));
    }
};

load()












