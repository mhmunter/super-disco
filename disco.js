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

// var nineAmText = document.querySelector("#toDo");

// $(".9B").click(function () {
//     var taskText = $.trim($("#task-text-9").val());
//     localStorage.setItem("tasks.nineAm", JSON.stringify(taskText));
// });

 


$(".saveBtn").on("click", function(){
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".toDo").val())
    // $(this)siblings(".toDo").val()); 
    // //    text = $((text).val()) 
    //    $(localStorage.setItem("text", JSON.stringify(text))
});






function load(){
    localStorage.getItem($(".toDo").val());
    $("#9 .toDo").val(localStorage.getItem("9"));

    for  (var i = 0; i< 9; i++){
        $("#" + [i] + " .toDo").val(localStorage.getItem([i]));
    }
};

load()

// 5

    


// var loadTasks = function(){
//     time = JSON.parse(localStorage.getItem("#time"));

//     if(!tasks){
//         tasks = {
//             time:[],
//             buttonT: [],
//         }
//     }
// }






// var textSavstoreText = function(){
// var time = document.getElementById("time").value

// var textarea = document.getElementsByTagName("textarea".value)


// const time = {
// time : rowHour,
// textarea : textSv,

// }



    

// function getRecords(){
//     var records = window.localStorage.getItem(textSv); 
//     var text = document.getElementById("type")
//     var paragraph = text.append("textSv");
// }





