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

    [2, "Africa"],

    [3, "Australia"],

    [4, "Australia"],

    [5, "Asia"],

    [6, "Asia"],

    [7, "Europe"],

    [8, "Africa"],

    [9, "North America"],

    [10, "South America"]
]);


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

    localStorage.setItem("user", name);

}


//This function adds number of questions to local storage
function setNoOfQuestions(noOfQuestions)
{
    localStorage.setItem('noofQuestions', noOfQuestions);
}

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


//generating random questions
function generateRandomQuestion(){
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
        alert(`${localStorage.getItem('user')}, you have scored ${(mark/count)*100}`);
    }
}



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

//checking answer on click on map
function checkAnswer(answer){
    if(answer === answers.get(randomNo)){
        mark++;
        console.log(mark);
        let displaystatus=document.getElementById('answer1');
        displaystatus.style.color="green";
        displaystatus.innerHTML="Correct";
    }
    else{
        let displaystatus=document.getElementById('answer1');
        displaystatus.style.color="red";
        displaystatus.innerHTML="Wrong";
    }
 
    let nextButton=document.getElementById("nextButton");
    nextButton.removeAttribute("disabled");
}

