const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }
  async getMovies({ tags }) {
    typeof tags == 'string'
      ? (tags = [tags]) //si es string lo paso como array
      : tags;

    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }
  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }
  async updateMovie({ movieId, movie } = {}) {
    const updateMovieId = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updateMovieId;
  }
  async deleteMovie({ movieId }) {
    const deleteMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deleteMovieId;
  }

  //   async partialUpdateMovie() {
  //     const updatedMovieId = await Promise.resolve(moviesMock[0].id);
  //     return updatedMovieId;
  //   }
}

module.exports = MoviesService;
