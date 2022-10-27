$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let attackPoints = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.attack-btn').on('click', attackButtonPress);
 
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

//functions to handle button click events
function attackButtonPress(){
    let buttonType = $(this).attr('class').split(' ')[1];
    let attackPoints = 0;
    let hitPoints = 0;
    console.log('buttonType:', buttonType);
            if (buttonType == 'arcane-sceptre'){
                attackPoints = 12;
                hitPoints = 14;
                decrementsPoints(attackPoints, hitPoints);
                render();
            }else if(buttonType == 'entangle'){
                attackPoints = 23;
                hitPoints = 9;
                decrementsPoints(attackPoints, hitPoints);
                render();
            }else if(buttonType == 'dragon-blade'){
                attackPoints = 38;
                hitPoints = 47;
                decrementsPoints(attackPoints, hitPoints);
                render();
            }else{
                attackPoints = 33;
                hitPoints = 25;
                decrementsPoints(attackPoints, hitPoints);
                render();
            }

            
}
//function to decrement fungusHP and attackPoints
function decrementsPoints(attackCost, fungusCost){
    fungusHP -= fungusCost;
    attackPoints -= attackCost;
    if(fungusHP <0){
        fungusHP = 0;
    }
    if(attackPoints <0){
        attackPoints = 0;
    }
    //check if either player is dead
    isDead();
}

//function to check if either player is dead
function isDead(){
    //see if either player has 0 points
    if (fungusHP == 0){
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
    }
    if (attackPoints == 0){
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
    }

}

//function to update attackPopints and fungusHP on the DOM
function render(){
    //write new values
    $('.hp-text').text(fungusHP);
    $('.ap-text').text(attackPoints);
    //update progress bars
    $('#ap-meter').val(attackPoints);
    $('#hp-meter').val(fungusHP);
}