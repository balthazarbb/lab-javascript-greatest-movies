// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    //map will return new array of the directors
    const directorsArr = movies.map(function(eachMovie){
        return eachMovie.director
    })
    //or ES6 Syntax
    // const directorsArr =  moviesArr.map(movie => movie.director)         
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManySteven(movies){
    //filter the movies directed by StevenSpielberg and drama (genre)
    filteredMovies = movies.filter(function(eachMovie){
        if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')){
            return true 
        }
    })
    return filteredMovies.length 
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function scoresAverage(movies){
      // to pass test in case there are no movies (0 is a falsy value so if movies.length is 0, then !movies.length is true)
    if (!movies.length){
        return 0;
    }
    //reduce to sum all the ratings
    let totalAverage = movies.reduce((a, b)=>{
        // conditional to sum only if they exist (if b.rate exists it returns true in the condition)
        if (b.score){
            return a + b.score;
        }else{
            return a;
        }
    }, 0)
    // return the average converted into a number and only two decimals
    return Number ((totalAverage / movies.length).toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
