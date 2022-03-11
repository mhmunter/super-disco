var now = moment();
var button = document.getElementById("saveBtn")


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
let textSv = $("textarea").val();


// var textSavstoreText = function(){
// var time = document.getElementById("time").value

// var textarea = document.getElementsByTagName("textarea".value)


// const time = {
// time = time,
// textarea = textarea,

// }



    window.localStorage.setItem("time", JSON.stringify(textSv));

function getRecords(){
    var records = window.localStorage.getItem(textSv); 
    var text = document.getElementById("type")
    var paragraph = text.append("textSv");
}





