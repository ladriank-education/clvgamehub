const logger = (e, request, response, next) => {console.error(e); response.status(500).json({'message': 'internal server error'}); }; module.exports = logger;