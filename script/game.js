let questions = new Map([

    [1, "Which continent is India part of?"],

    [2, "Which is the largest continent in area?"],

    [3, "Which is the smallest continent in area?"],

    [4, "Which continent is also called as an 'Island-Continent'?"],

    [5, "The largest mountain in the world, Mount Everest is situated in which continent?"],

    [6, "On Which Continent Is Egypt?"],

    [7, "On which continent can you find France?"],

    [8, "Which is the Second biggest continent of the world?"],

    [9, "Columbus found which continent?"],

    [10, "Where is Amazon River?"]
]);

let answers = new Map([

    [1, "Asia"],

    [2, "Asia"],

    [3, "Australia"],

    [4, "Australia"],

    [5, "Asia"],

    [6, "Africa"],

    [7, "Europe"],

    [8, "Africa"],

    [9, "North America"],

    [10, "South America"]
]);

let descriptions= new Map([
    [1,"India is located in the southern part of Asia."],
    [2,"Asia is the largest continent with a land area of 44.48 million km sq."],
    [3,"Australia is the smallest with a land area of 7686884 km sq."],
    [4,"Since Australia lies between the Pacific and the Indian Ocean, it is called as the 'Island Continent'."],
    [5,"Mt. Everest is located in Asia precisely in the Khumbu region of Nepal."],
    [6,"Egypt is located in African continent having coastlines on the Mediterranean Sea, the River Nile, and the Red Sea."],
    [7,"France is located in the western edge of Europe."],
    [8,"Africa, the second-largest continent, covers an area more than three times that of the United States."],
    [9,"Christopher Columbus founded North America.s known for his 1492 'discovery' of the 'new world' of the Americas on board his ship Santa Maria."],
    [10,"The Amazon River is located in the northern portion of South America, flowing from west to east."]
 
])


//variable declarations

let randomNumberArray = [];
let randomNo;
let index = 1;
let count =  localStorage.getItem('noofQuestions');
let mark = 0;

//Function to store the name from input field to the local storage

function setName(name) 
{
    
    if (name.trim() === "") {
        alert("Please enter a name.");
        return;
    }
    else
    {
        const firstLetter = name.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase();
        const remainingLetters = name.slice(1)
        const newName = firstLetterCap + remainingLetters;
        localStorage.setItem("user", newName);
    }
}


//This function adds number of questions to local storage

function setNoOfQuestions(noOfQuestions)
{
    localStorage.setItem('noofQuestions', noOfQuestions);
}

//function to generate random number without duplicates

function generateRandomNumber()
{
    flag = true;
    let newRandomNo;
    do{
        newRandomNo = Math.floor(Math.random() * 10) + 1;
        if(randomNumberArray.indexOf(newRandomNo)<0)
        {
            randomNumberArray.push(newRandomNo);
            flag = false;
        }
    }while(flag)
    return newRandomNo;
}

//function for generating random questions and displaying it

function generateRandomQuestion(){
    document.getElementById('map-image').style.pointerEvents = 'auto';
    console.log(count);
    if(index<=count)
    {
        console.log(index);
        if(index == count)
        {
            console.log(count);
            document.getElementById('nextButton').style.backgroundColor = "red";
            document.getElementById('nextButton').innerText = "Finish";
            document.getElementById('nextButton').addEventListener('click',generateResult);
        }
        document.getElementById('correctanswer').innerHTML = "";
        document.getElementById('nextButton').setAttribute('disabled','true');
        randomNo = generateRandomNumber();
        if(index == count)
        {
            localStorage.setItem('randomnumberarray',randomNumberArray);
        }
        document.getElementById('question').innerText = questions.get(randomNo);
        document.getElementById('answer1').innerHTML = "";
        index++;
        
    }
    else
    {
        alert(`${localStorage.getItem('user')}, you have scored ${Math.round((mark/count)*100)}% mark`);
    }
    document.querySelector('#description').textContent="";
}

//function for redirecting to animation page 

function generateResult()
{
    if(((mark/count)*100)<50)
    {
        location.replace("sad.html");
    }
    else
    {
        location.replace("congrats.html");
    }
}

//function for checking whether answer is correct on map click.
// Make the next button enable and map disabled.

let keyw;
function checkAnswer(answer)
{
    document.getElementById('map-image').style.pointerEvents = 'none';
    if(answer === answers.get(randomNo))
    {
        mark++;
        console.log(mark);
        let displaystatus=document.getElementById('answer1');
        displaystatus.style.color="green";
        displaystatus.innerHTML="Correct";
        keyw=1;

    }
    
    else
    {

        let displaystatus=document.getElementById('answer1');
        displaystatus.style.color="red";
        displaystatus.innerHTML="Wrong";
        keyw=0;
    
    }
    document.getElementById('correctanswer').innerHTML = `Correct answer : ${answers.get(randomNo)}`;
 
    let nextButton=document.getElementById("nextButton");

    nextButton.removeAttribute("disabled");

    addDescription(keyw);
}

//for setting the description

function addDescription(keyw)
{
    console.log(keyw,"check")
    if(keyw===1)
    {   let audio1 = document.getElementById('successans');
        audio1.play()
        document.querySelector('#description').textContent="GOOD Work! "+descriptions.get(randomNo);
    }
    else
    {   
        let audio2 = document.getElementById('wrongans');
        audio2.play()
        document.querySelector('#description').textContent="ALAS! "+descriptions.get(randomNo);
    }
 
}

