document.querySelector('#push').onclick=function(){
    if (document.querySelector('.input input').value.length==0){
        alert('Please enter a task!');
    }
    else{
        document.querySelector('.items').innerHTML+= `
          <div class="item">
            <span id="taskname">
                ${document.querySelector('.input input').value}
            </span>
            
            <button class="complete">                
            <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/24/000000/external-tick-user-interface-flatart-icons-flat-flatarticons.png"/>
            </button>
            
            <button class="delete">             
            <img src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"/>
            </button>
            
          </div>
        `;
        var current_task=document.querySelectorAll(".delete");
        for(var i=0;i<current_task.length;i++){
          current_task[i].onclick=function(){
            this.parentNode.remove();
          }
        }
        var comp=document.querySelectorAll('.item');
        for(var j=0;j<comp.length;j++){
          comp[j].onclick=function(){
            this.classList.toggle('completed');
          }
        }
        document.querySelector(".input input").value="";
    }
}