const Alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
const number=[0,1,2,3,4,5,6,7,8,9]
const Characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 
    '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ';', 
    ':', '\'', '\"', '<', '>', ',', '.', '?', '/', '`', 
    '~'];

const randomIndex = Math.floor(Math.random() * Alphabet.length);
const randomLetter = Alphabet[randomIndex];
const randomIndex1 = Math.floor(Math.random() * Alphabet.length);
const randomLetter1 = Alphabet[randomIndex];
const randomIndex2 = Math.floor(Math.random() * Alphabet.length);
const randomLetter2 = Alphabet[randomIndex];

const randomnumber = Math.floor(Math.random() * number.length);
const randomnum= number[randomIndex];
const randomnumber1 = Math.floor(Math.random() * number.length);
const randomnum1= number[randomIndex];
const randomnumber2 = Math.floor(Math.random() * number.length);
const randomnum2= number[randomIndex];

const randomchar = Math.floor(Math.random() * Characters.length);
const randomsc= Characters[randomIndex];
const randomchar1 = Math.floor(Math.random() * Characters.length);
const randomsc1= Characters[randomIndex];
let RPG=randomLetter+randomnumber+randomsc+randomLetter1+randomnumber1+randomnumber2+randomsc1+randomLetter2;


document.querySelector("button").addEventListener("click",()=>
{
    document.querySelector("input").value=RPG;
})


document.querySelector(".copy").addEventListener("click", () => {
    let a = document.createElement("img");
    a.src = "clipboard-check-fill.svg";
    a.alt = "";
    document.querySelector(".d4").appendChild(a);
    let copy_passward=document.querySelector("input").value;
    navigator.clipboard.writeText(copy_passward);
});