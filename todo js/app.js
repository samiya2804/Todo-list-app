let task = document.querySelector('button');
let input = document.querySelector('input');
 let ul =document.querySelector('ul')
task.addEventListener('click',function(){
   let item= document.createElement("li");
   item.innerText = input.value;

   let deleteee = document.createElement("button");
   deleteee.innerText = "delete";
   deleteee.classList.add("delete");
   item.appendChild(deleteee);

   ul.appendChild(item);
   input.value="";
});
ul.addEventListener('click',function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
    console.log("deleted");
    }
});