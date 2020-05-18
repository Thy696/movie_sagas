# Movie Sagas

## Description
Duration: 2 days

### Set up database
[x] Connecting data of movies table and genres table together by junction table
    - With Postico, I use JOIN to pull out the relationship data from two tables in the database.
### Display data from the database to DOM via Saga
[x] Display list of the movie from database
    [x] With Saga, I create a GET request in `index.js` by Axios to get movies list and name of genres from database. 
    [x] Using map to loop through the array of movies that got from database to append them to DOM
    [x] Using HashRouter to able to go to its detail place where have its title and description when the user clicks on the specific poster.
[x] Display title and description in Details component.
    [x] Using Saga to get title and description from MovieItem.js component.
[x] Display genres for each movie from database
    [x] Using Saga to get genres from MovieItem.js component.

    
[x] Edit the selected movie's title and description
    [x] Create Edit component
        [x] Create first inputs field for changing the movie title of the selected movie
        [x] Create a second inputs field for changing the movie description.
    [x] Create Cancel button to bring the user to the Details Page
    [x] Create Save button to update the title and description by sending despatch to Index.js, cross through reducer, and in Details component get changes and append to DOM, also bring the user back to Details page.

[x]   Use array_agg to display all genres on the movie list page.

[x] The page admin display a form to add genres to the database.
    [x] Take the input from the client, send that input data to index.js via dispatch. Then use Saga POST request to add new genres to the server. And to end the add new genres, I use the same action type of the one that we got genres data from database before to get the data back and append to the DOM. 
    [x] Using Saga DELETE request to delete the selected genres to server. By axios, use DELETE request to delete that genre in database and then refresh the DOM with the same way of add genres.


## Screen Shot

## Installation

## Built With

## Acknowledgement

## Support
