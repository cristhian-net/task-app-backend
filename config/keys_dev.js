module.exports = {
    mongoURI: `mongodb://${process.env.ENV === '___DEV___' ? 'localhost' : 'mongo'}:27017/truenorth-mongo-dev`
};