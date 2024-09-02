let user_score = 0;
let comp_score = 0;
let userwin;
let com_ch;

const ur_move= document.querySelector('#ur-move');
const com_move= document.querySelector('#com-move');
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const user_s_m = document.querySelector('#ur_s');
const comp_s_m = document.querySelector('#comp_s');
const restscore = document.querySelector('#rest');
const imageElement = document.getElementById("image");
const imageElement2 = document.getElementById("image2");



restscore.addEventListener('click', () => {
    user_score = 0;
    comp_score = 0;
    comp_s_m.innerText = '0';
    user_s_m.innerText = '0';
    msg.style.backgroundColor = 'aqua';
    msg.innerText = "Play game";
    imageElement.src='image.png';
    imageElement2.src='image.png';
    ur_move.style.backgroundColor='';
    com_move.style.backgroundColor='';
    ur_move.innerText="Your's move";
    com_move.innerText="Computer's move";
})




choices.forEach((choice) => {

    choice.addEventListener('click', () => {
        const user_choice = choice.getAttribute('id');
        playgame(user_choice);
       
    })


})



const playgame = (user_choice) => {

    
    com_ch = gen_com_ch();
    console.log('user:',user_choice)
    console.log('comp:',com_ch)
       
    if (user_choice === com_ch) {
        draw(user_choice)
    } else {
        userwin = true;
        if (user_choice === 'rock') {
            userwin = com_ch === 'paper' ? false : true;

        } else if (user_choice === 'paper') {
            userwin = com_ch === 'scissor' ? false : true;
        } else {
            userwin = com_ch === 'rock' ? false : true;
        }
        
        
        showwiner(userwin, user_choice);
        
        
    }


}
const showwiner = (userwin,user_choice) => {

    
    if (userwin) {
        user_score++;
        console.log('win')
        msg.innerText = 'You won ! buddy';
        msg.style.backgroundColor = 'green';
        user_s_m.innerText = user_score;
        
        ur_move.style.backgroundColor='green';
        com_move.style.backgroundColor='red';
        ur_move.innerText='You choose '+ user_choice;
        com_move.innerText='Computer choose '+ com_ch;
        

       
    } else {
        comp_score++;
        console.log('lose')
        msg.innerText = 'BAD LUCK !';
        msg.style.backgroundColor = 'red';
        comp_s_m.innerText = comp_score;
        ur_move.style.backgroundColor='red';
        com_move.style.backgroundColor='green';
        ur_move.innerText='You choose '+ user_choice;
        com_move.innerText='Computer choose '+ com_ch;
        
      
    }
    console.log("this is comp:",com_ch);
    console.log("this is user:",user_choice);
   
    if(com_ch==='rock'){
        imageElement2.src='rock.png';
    }else if(com_ch==='paper'){
        imageElement2.src='paper.png';
    }else{
        imageElement2.src='scissor.png';
    }
    if(user_choice==='rock'){
        imageElement.src='rock.png';
    }else if(user_choice==='paper'){
        imageElement.src='paper.png';
    }else{
        imageElement.src='scissor.png';
    }
}
const gen_com_ch = () => {

    let option = ['rock', 'paper', 'scissor'];
    let index = Math.floor(Math.random() * 3);
    return option[index];
}
const draw = (user_choice) => {
    
    msg.innerText = 'Game has been DRAW';
    msg.style.backgroundColor = 'pink';
    ur_move.style.backgroundColor='pink';
    com_move.style.backgroundColor='pink';
    ur_move.innerText='You choose '+ user_choice;
    com_move.innerText='Computer choose '+ com_ch;
    if(user_choice==='rock'){
        imageElement.src='rock.png';
        imageElement2.src='rock.png';
    }else if(user_choice==='paper'){
        imageElement.src='paper.png';
        imageElement2.src='paper.png';
    }else{
        imageElement.src='scissor.png';
        imageElement2.src='scissor.png';
    }
}