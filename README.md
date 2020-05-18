# Movie Sagas

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description
Duration: 2 days sprint

### Set up database
[x] Connecting datas of movies table and genres table together by junction table
    - With Postico, I use JOIN to pull out the relationship data from two table in database.
### Display datas from database to DOM via Saga
[x] Display list of movie from database
    [x] With Saga, I create an GET request in `index.js` by axios to get movies list and name of genres from database. 
    [x] Using map to loop through the array of movies that got from database to append them to DOM
    [x] Using HashRouter to able to go to its detail place where have its title and description when the user clicks on the specific poster.
[x] Display title and description in Details component.
    [x] Using Saga to get title and description from MovieItem.js component.
[x] Display genres for each movie from database
    [x] Using Saga to get genres from MovieItem.js component.

    
[x] Edit the selected movie's title and description
    [x] Create Edit component
        [x] Create first inputs field for changing the movie title of selected movie
        [x] Create second inputs field for changing the movie description.
    [x] Create Cancel button to bring user to the Details Page
    [x] Create Save button to update the title and description by sending despatch to Index.js, cross throught reducer and in Details component get changes and append to DOM, also bring the user back to Details page.

[x]   Use array_agg to display all genres on movie list page.

[x] The page admin display a form to add genres to the database.
    [x] Take the input from client, send that input data to index.js via dispatch. Then use Saga POST request to add new genres to database. And to end the add new genres, I use the same action type of the one that we got genres data from database before to get the data back and append to the DOM. 


## Screen Shot

## Installation

## Built With

## Acknowledgement

## Support



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
