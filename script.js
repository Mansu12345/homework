const apiKey = '6321dd620892cf5b666987854bfeb587';

const apiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzIxZGQ2MjA4OTJjZjViNjY2OTg3ODU0YmZlYjU4NyIsInN1YiI6IjY2MmI2OTg1NmUwZDcyMDExYzFmOWMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._dgDTMZHJBv2EzFTixtjpsRGEAu0X7ABz1lHPWvUiQs'
  }
   



fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {   
   
  }
  .catch(err => console.error(err));
}
