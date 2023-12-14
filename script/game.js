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


//generating random questions
function generateRandomQuestion(){
    //generate questions only upto the required count
    if(index<=count)
    {
        
        document.getElementById('nextButton').setAttribute('disabled','true');
        randomNo = generateRandomNumber();
        document.getElementById('question').innerText = questions.get(randomNo);
        document.getElementById('answer1').innerHTML = "";
        index++;
        
    }
    else
    {
        //after finishing the questions
    }
        
} 

//function for generating random number
function generateRandomNumber()
{
    flag = true;
    let newRandomNo;
    do{
        newRandomNo = Math.floor(Math.random * 10) + 1;
        if(randomNumberArray.indexOf(newRandomNo)<0)
        {
            flag = false;
        }
    }while(flag)
    return newRandomNo;
}
var score=0;
var countChecker=0

//checking answer on click on map
function checkAnswer(answer)
    {
    document.getElementById("image-mapid").setAttribute("disabled");
    countChecker++;
    if(answer === answers.get(randomNo)){
        score++;
        let displayStatus=document.getElementById('answer1');
        displayStatus.style.color="green";
        displayStatus.innerHTML="Correct";
    }
    else{
        //if answer is wrong write code here
        let displayStatus=document.getElementById('answer1');
        displayStatus.style.color="red";
        displayStatus.innerHTML="Wrong";
    }
    if(countChecker===count){
        let percentage=(score/count)*100;
        if(percentage>=50)
            document.getElementById("finalWinScore").innerHTML='Score '+percentage;
        else
            document.getElementById("finalLooseScore").innerHTML='Score '+percentage;
    
    }
 
    document.getElementById("nextButton").removeAttribute("disabled");
 
}
