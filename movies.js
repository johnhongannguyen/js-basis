const movies = [
    {
        title: 'a',
        year: 2018,
        rating: 4.5
    },
    {
        title:'b',
        year: 2018,
        rating: 3.5
    },
    {
        title: 'c',
        year: 2020,
        rating: 4
    },
    {
        title: 'd',
        year: 2018,
        rating: 4.5
    }
];

// console.log(getMovies(movies));

// write code to get all the movies in 2018, with greater rating than 4
// sort them by their rating 
// descending order - higher come first 
// pick their title property 

const titles = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a,b) => a.rating - b.rating )
    .reverse()
    .map(m => m.title)

    console.log(titles);

// function getMovies (movies) {
//    return movies.filter((year,rating) => {
//        year === 2018 , rating > 4
//        console.log
//    })
        
// }

