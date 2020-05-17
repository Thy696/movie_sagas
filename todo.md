## Database
[x] Create junction table
[x] Connecting movies, genres, junction table


## Home/ List Page
    [x] Display all of the movie in DOM.
        [x] Create components (Home/ListPage, Detail)
        [x] Using HashRouter to able to moving between components with links
        [x] Using Saga to get data from database
        [x] Mapping through the data that got from Saga GET request
        [x] Handle click for each movie item to able to go to it's details page

## Details Page
    [x] show all details including genres
        [x] Using Saga to get title and description from MovieItem.js componend
        [x] Display genres for the selected movie
        [x] Create back to list button which have link to come back Home page
        [x] Create Edit button which bring to edit page
            
## Edit Page
    [x] Create Edit component
        [x] Create first inputs field for changing the movie title of selected movie
        [x] Create second inputs field for changing the movie description.
    [x] Create Cancel button to bring user to the Details Page
    [x] Create Save button to update the title and description by sending despatch to Index.js, cross throught reducer and in Details component get changes and append to DOM, also bring the user back to Details page. 

## General Tasks
    [] Invest some time in styling it up!
    [] Research grids for movie posters on the Move List page
    [] Add route change animations
    [] Commit code frequently! Should have at 15+ commits on a project of this size. Use branches to help break down the features.
    [] Commenting code.
    [] Update this README to include a description of the project.

## Stretch Goals
[x]  Display the current values in the input (title) and textarea (description) on the Edit Page
[x] Display all genres on movie list page. Research array_agg to make this possible.
[x]  Move sagas and reducers out of your index.js and into separate files (ideally in src/redux/reducers and src/redux/sagas folders).
[] Allow the user to refresh the details or edit page. The url for the details page would be something like /details/1 for movie with id of 1. Research react router params.
