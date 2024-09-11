
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('animateButton');
    
    if (button) {
        button.addEventListener('click', function() {

            button.classList.add('animate');
            

            setTimeout(() => {
                button.classList.remove('animate');
            }, 300);

            alert('You clicked the button! More features coming soon.');

        });
    } else {
        console.error('Button with ID "animateButton" not found.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('animateButton');
    
    console.log('JavaScript loaded. Button:', button);
    
    if (button) {
        button.addEventListener('click', function() {
            console.log('Button clicked');
            
            button.classList.add('animate');
            
            setTimeout(() => {
                button.classList.remove('animate');
            }, 300);
            
            alert('You clicked the button! More features coming soon.');
        });
    } else {
        console.error('Button with ID "animateButton" not found.');
    }
});


