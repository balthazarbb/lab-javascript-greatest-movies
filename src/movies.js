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
function howManyMovies(movies) {

    // a filter that will "filter" the movies only with director "Steven Spielberg" and that INCLUDES "Drama" in its genres (genres is an array).
    filteredMovies = movies.filter(function(eachMovie) {
        if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')) {
            return true // the filter method ALWAYS expects a boolean as a return
        } // indexOf could also work, however, .includes is more common in this cases.
    });
  
    return filteredMovies.length // return the length of the array (how many movies)
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

  // to pass test in case there are no movies (0 is a falsy value so if movies.length is 0, then !movies.length is true)
  function scoresAverage(movies) {

    // to pass test in case there are no movies (0 is a falsy value so if movies.length is 0, then !movies.length is true)
    if (!movies.length) {
      return 0;
    }
  
    // a reduce to sum all the rates
    let totalAverage = movies.reduce((a, b) => {
      // conditional to sum only if they exist (if b.rate exists it returns true in the condition)
      if (b.score) {
        return a + b.score;
      } else {
        return a;
      }
    }, 0);
  
    return Number((totalAverage / movies.length).toFixed(2)); // return the average converted into a number and only two decimals
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {

    // filter to "filter" only the movies that include drama
    let dramaMoviesArr = movies.filter(function(eachMovie) {
      return eachMovie.genre.includes('Drama')  // indexOf could also work, however, .includes is more common as it returns a boolean.
    });
  
    // or... ES6 reduced syntax
    // let dramaMoviesArr = movies.filter(eachMovie => eachMovie.genre.includes('Drama'));
  
    // here we could run a similar code of the one in iteration 3 (to get average of array) or... we can reuse that same function with the dramaMoviesArr we just created and return its value!
    return scoresAverage(dramaMoviesArr); // return value of running ratesAverage with new array
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesArr = JSON.parse(JSON.stringify(movies)); // deep clone to not mutate original
  
    // sort method by year and in case year is the same, by title. You don't need to save in a variable, as sort method will mutate the moviesArr we created above.
    moviesArr.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        }
        return 0;
      }
    });
  
    return moviesArr; // return the sorted array
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const moviesArr = JSON.parse(JSON.stringify(movies)); // deep clone to not mutate original
  
    // example of chaining methods: .sort to sort only by title, then .map to get only the movie title (not the whole object), then .slice to get only the first 20 elements
    sortedMoviesArr = moviesArr
      .sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      })
      .map(eachMovie => eachMovie.title)
      .slice(0, 20);
  
   return sortedMoviesArr // return the new array
  }
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
