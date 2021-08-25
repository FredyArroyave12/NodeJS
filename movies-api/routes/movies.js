const router = require('express').Router();
const { moviesMock } = require('../utils/mocks/movies');

const moviesApi = (app) => {
  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'movie listed',
      });
    } catch (err) {
      next(err);
    }
  });
  router.get('/:movieId', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movies,
        message: 'movie retrieve',
      });
    } catch (err) {
      next(err);
    }
  });
  router.post('/', async function (req, res, next) {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: createMovieId,
        message: 'movie create',
      });
    } catch (err) {
      next(err);
    }
  });
  router.put('/:movieId', async function (req, res, next) {
    try {
      const updateMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updateMovieId,
        message: 'movie update',
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete('/:movieId', async function (req, res, next) {
    try {
      const deleteMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: deleteMovieId,
        message: 'movie deleted',
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = moviesApi;
