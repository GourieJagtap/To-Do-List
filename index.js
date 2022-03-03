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
          </div>
        `
    }
}