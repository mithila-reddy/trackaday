![Screenshot](https://github.com/SahithiAmmana/trackaday/blob/main/images/Trackaday_Home.png?raw=true)


<h2 align="center">Track-a-Day</h2>

<a href="https://github.com/SahithiAmmana/trackaday/actions"><img alt="Build Status" src="https://github.com/SahithiAmmana/trackaday/actions/workflows/node.js.yml/badge.svg"></a> <a href="https://github.com/SahithiAmmana/trackaday/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/SahithiAmmana/trackaday"></a> [![DOI](https://zenodo.org/badge/568992783.svg)](https://zenodo.org/badge/latestdoi/568992783) [![GitHub top language](https://img.shields.io/github/languages/top/SahithiAmmana/trackaday)](https://docs.python.org/3/) [![GitHub last commit](https://img.shields.io/github/last-commit/SahithiAmmana/trackaday)](https://github.com/SahithiAmmana/trackaday/commits/main) [![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/SahithiAmmana/trackaday.svg?)](https://codecov.io/github/SahithiAmmana/trackaday?branch=master) [![Github](https://img.shields.io/badge/language-typescript-red.svg)](https://www.typescriptlang.org/)



> “Your accountability partner for focused work.”



This desktop programme helps you monitor and enhance your productivity.

A desktop programme called Track-a-Day can be utilized to keep track of daily tasks. The tasks that users wish to finish are added.
The user then adjusts the timer to retain track of their progress. Every hour, a pop-up encourages the user with an encouraging phrase. After the timer has begun, a pause and stop button is presented. The timer can be halted by users for breaks. Users can suspend the timer at the end of the day to get an overview of the current session.
User can access a report on their session evaluation. Users receive up to 30 sessions to assess.


## Demo Video
https://drive.google.com/file/d/1V_Ozf5wHDBGzXGYqmpQZyYhj04yhkL1g/view?usp=sharing

## Documentation:
https://mithila-reddy.github.io/mithila.github.io/

## Installation and Usage

You must have npm installed on your system.

Run the following commands to install Angular and Electron.js-

```sh
npm install -g @angular/cli
```
```sh
npm install --save-dev electron@latest
```

Clone the repository and cd into the root directory. Then run the following commands -
```sh
npm install
```
```sh
npm start
```
The desktop application should open in a new window.

The home page has a timer and a ToDo List. You can add your items in the ToDo list and press START to begin tracking your progress.

Click PAUSE if you want to take a break and STOP if you want to close out the work session.

When you click STOP and close out the session, the amount of time you worked, took a break and the number of activities you completed will be logged in the database.

When you click on the Analytics tab, you can see information about your weekly performance.

![Screenshot](https://github.com/vishalsh94/trackaday/blob/main/images/graphs.png?raw=true)

It shows you the number of hours worked per day as well as when you usually work during the day.


## Improvements over legacy code

### Scale 1000x

\- No Users in Legacy Code

\+ User Based Data scalable to more than 1000 users

### Authentication

\- No Authentication in Legacy Code

\+ Firebase is used for Authentication

### Cloud Storage

\- Local Storage in Legacy Code

\+ Firebase Realtime Database is used for storing user data

### Hour Specific Analysis

\- Negative values for usage in Legacy Code

\+ Fixed Analysis part to calculate and display the data properly

## Features Introduced

### Archive Todo

- A new view added to display Archived todos which can be re-used

### Re-use Archived Todo

- Archived Todos can be re-used which essentially creates a todo with the same title but updated timestamps and a unique id

### Delete Archived Todo

- Archived Todos can be deleted completely and be removed from database

### Favorite Todo

- Users can make Todos Favorites in both Todo view and Archive View which are segregated in Archived Todos for quick access to re-use

### Pin Todo

- Users can Pin Todos in Todo view which is pinned to top for prioritizing the tasks

### Analysis - Todo Time

-  Time taken for each Todo task with Title is displayed to keep track


## Legacy Team members (Group 38) - Project 1
Arnab Datta

Vishal Sharma

Atharva Gole

Dakshil Kanakia

Dhanya Dasari

## Current Team members (Group 2) - Project 2

Sahithi Ammana

Mithila Reddy Tatigotla

Sunandini Medisetti

Sai Pavan Yalla

Vineeth Dasi

## Reach Us At

### track-a-day

trackaday.mail@gmail.com

