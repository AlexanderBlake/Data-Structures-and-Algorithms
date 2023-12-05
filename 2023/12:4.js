class Movie {
    constructor(movieName, genre, rating) {
        this.movieName = movieName;
        this.genre = genre;
        this.rating = rating;
    }
}

function bestMoviesbyGenre(movies) {
    let result = new Map();

    for (let i = 0; i < movies.length; i++) {
        if (!(result.has(movies[i].genre)) || result[movies[i].genre].rating < movies[i].rating) {
            result[movies[i].genre] = movies[i];
        }
    }

    return result;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function main() {
    let movies = [new Movie("A", "X", 1), new Movie("B", "X", 2), new Movie("C", "Y", 1), new Movie("D", "Z", 1)];

    console.log(bestMoviesbyGenre(movies));
}

main();