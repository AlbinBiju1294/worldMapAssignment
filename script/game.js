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



function setName(name)
{
    //Write code to set name to local storage
}

function setNoOfQuestions(noOfQuestions)
{
    //Write code to set no of questions to local storage
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

//checking answer on click on map
function checkAnswer(answer){
    if(answer === answers.get(randomNo)){
        //if answer is right write code here
    }
    else{
        //if answer is wrong write code here
    }
}