import axios from 'axios';

const TEST_API_KEY = "1806f13a-4c96-4856-88d4-5362eefee412";

const onlineMovieAPI = axios.create({
	baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
	headers: {
		'X-API-KEY': TEST_API_KEY,
		'Content-Type': 'application/json',
	}
})

export default class movieAPI {
	static async getMoviesByGenre(genre, page, moviesType, keyword = '', order) {
		const response = await onlineMovieAPI.get(`films?genres=${genre}&page=${page}&type=${moviesType}&keyword=${keyword}&order=${order}`);
		return response.data;
	}

	static async getPopularMovies(page) {
		const response = await onlineMovieAPI.get(`films/top?type=TOP_100_POPULAR_FILMS&page=${page}`);
		return response.data;
	}

	static async getMovieById(movieId) {
		const response = await onlineMovieAPI.get(`films/${movieId}`);
		return response.data;
	}

	static async getStaffInfoById(movieId) {
		const response = await onlineMovieAPI.get(`films/${movieId}/images?type=STILL&page=1`);
		return response.data;
	}
}