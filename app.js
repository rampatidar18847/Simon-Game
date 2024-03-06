let gameseq = [];
let userseq = [];
let Highscore = 0;

let btnlist = ["red", "green", "blue", "purple"];

let started = false;
let level = 0;

let h5 = document.querySelector('h5');
document.addEventListener('keypress', function()
{

    if(started == false)
    {
        console.log("btn was clicked");
        started = true;
        levelup();

    }
})

function flashbtn(randbtn)
{
    randbtn.classList.add("flash");
    setTimeout(function()
    {
        randbtn.classList.remove("flash");
    },250);
    
}

function levelup()
{
    userseq= [];
    level++;
    h5.innerText = `Level ${level}`;
    
    let i = Math.floor(Math.random() *3);
    let randcolor = btnlist[i];
    let randbtn = document.querySelector(`.${randcolor}`);
    
    gameseq.push(randcolor);
    console.log(gameseq);
    flashbtn(randbtn);
}

function checkans(idx)
{
   

    if(gameseq[idx] === userseq[idx])
    {
        if(gameseq.length == userseq.length)
        {
            setTimeout(levelup, 1000);
        }
    }else
    {
        let score = level*5;
        
        if(score > Highscore)
        {
            Highscore = score;
        }
        alert(`Game Over!, Your Score ${score} and Your Highscore ${Highscore}`);
        h5.innerText = "Press any key to Start Game";
        reset();
    }
}

function btnpress()
{
    let btn = this;
    flashbtn(btn);
    userbtn = btn.getAttribute("id");
    userseq.push(userbtn);
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll('.btn');

for(btn of allbtns)
{
    btn.addEventListener('click', btnpress);

}

function reset()
{
    score = 0;
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
}

