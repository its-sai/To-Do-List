document.getElementById('add-task-button').addEventListener('click',function(){
    const taskinput =document.getElementById('task-input');
    const dateinput =document.getElementById('date-input');
    const timeinput =document.getElementById('time-input');
    const ampminput =document.getElementById('ampm-input');

    const tasktext = taskinput.value.trim();
    const taskdate = dateinput.value;
    const tasktime = timeinput.value;
    const taskampm = ampminput.value;

    if(tasktext && taskdate && tasktime){

        const tasklist = document.getElementById('task-list');
        const newtask = document.createElement('li');

        newtask.innerHTML= `
        <div class ="task-info">
            <span><i class="fa-solid fa-list-check"></i>${tasktext}</span>
            <span><i class="fa-solid fa-calendar"></i>${taskdate}</span>
            <span><i class="fa-solid fa-clock"></i>${tasktime} ${taskampm}</span>
        </div>

        <div class="task-action">
            <input type="checkbox" class="complete-checkbox">
            <button class ="delete-button"><i class="fas fa-trash-alt"></i></button>
        </div>
        `;

        tasklist.appendChild(newtask);

        const deletebutton = newtask.querySelector('.delete-button');
        const completeCheckbox = newtask.querySelector('.complete-checkbox');

        deletebutton.addEventListener('click', function(){

            tasklist.removeChild(newtask);
        });

        completeCheckbox.addEventListener('click', function() {
            if (completeCheckbox.checked) {
                newtask.classList.add('completed');
                confettiAnimation();
            } else {
                newtask.classList.remove('completed');
            }
        });


        taskinput.value ='';
        dateinput.value ='';
        timeinput.value ='';

    }

});

function confettiAnimation() {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}