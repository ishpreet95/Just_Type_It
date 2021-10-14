//HELPFUL VARIABLES
let i=0;let words=0;let start=0;let end=0
let score=document.querySelector('#scorebar')
const letters=document.querySelectorAll('span')
//BUTTON STYLE VARIABLES
// let button
let afterBtnColor="#000000";let afterBtnBackColor="#ffffff"
let beforeBtnColor="#fafcfd"; let beforeBtnBackColor="linear-gradient(to top right, #141414, #2b2b2b)"
//LETTER STYLE VARIABLES
let blur="#616161"; let unblur="#f1f1f1"

//WHENEVER A KEY IS PRESSED IN THE WINDOW
window.addEventListener('keypress', function(e)
{
    //example: code="KeyQ", key="q"
    const code=e.code
    const key=e.key
    let button=document.getElementById(`${code}`)
    blink(button)
    logic(key)
})
//BLINKING THE KEYBOARD KEYS
function blink(button)
{
    button.style.color=afterBtnColor
    button.style.background=afterBtnBackColor;//'tis background, not backgroundColor
    setTimeout(function()
    {
        button.style.color=beforeBtnColor;
        button.style.background=beforeBtnBackColor;//'tis background, not backgroundColor
    },110)
}
//LOGIC
function logic(key)
{
    if(i===0)
    {
        start=Date.now()
        console.log(start)
    }
    if(i<letters.length)
    {
        //IF THE PRESSED KEY AND LETTER CONCERNED ARE SAME THEN MOVE
        if(letters[i].innerText===key || (letters[i].innerText==='_' && key===' '))
        {
            letters[i].style.color=blur
            i++;console.log(i)
            if(letters[i].innerText==='_')
            {
                words++
            }
        }
    }
    else
    {
        //IF OUR LETTERS ARE FINISHED THEN RESET COLOR AND OUR POINTER
        for(let j=0;j<letters.length;j++)
        {
            letters[j].style.color=unblur
        }
        end=Date.now();console.log(end)
        score.innerText=`Speed : ${(words/((end-start)/60000)).toPrecision(4)} wpm`
        i=0;words=0;
    }
}