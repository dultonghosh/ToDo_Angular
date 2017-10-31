window.onload=function(){

    var input=document.getElementById('inp');
    var btn=document.getElementById('btn');
    btn.onclick=function()
    {
        var  value=input.value;
        Additem(value,"Active");
        input.value="";
        Display();
    }
    Display()
}









































// window.onload = function () {
//     var input = document.getElementById("todoInput").value
//     var btn = document.getElementById("btn")
//     var list = document.getElementById("activeTodoList")
//
//     btn.onclick = function(){
//         addTodos(input,"active",list.length);
//         //displayActiveTodos();
//     }
//
//
//
//
// }







// function addTodo(){
//     var item = document.getElementById("todoInput").value
//     var text = document.createTextNode(item)
//     var newItem = document.createElement("li")
//     newItem.appendChild(text)
//     document.getElementById("todoList").appendChild(newItem)
// }