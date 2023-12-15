# World Map assignment

## Team CodeRed

### Folder structure

We have created four folders for storing our contents.

1. htmlpages - We have stored oou html pages in this folder

2. css -  We have stored our css files for styling the webpage in this folder

3. Assets - We are using the assets folder for storing our images and gifs

4. script - Here we are storing our javascript file


### html pages

index.html - Starting point of our map game where users need to enter the name and no of questions required

gam.html - Here is where users can view questions and select answers

congrats.html - This page will be rendered if mark >= 50% 

sad.html - This page will be rendered if mark < 50% 

### game.js file

This file contains all the functionalities

The functions defined in this file are:

setName() and setNoOfQuestions() :  Used for setting name and questioncount in local storage

generateRandomQuestion() : For generating random questions and displaying it

generateRandomNumber() : To generate random number for questions without duplicates

generateResult() - For redirecting to corresponding pages after attending

checkAnswer() - For checking answers against the user clicked ones and displaying whether right or wrong

# Screenshots


