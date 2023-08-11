const key = '72b016f620bbeae0a8560d797f2978fb';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
}

export default requests