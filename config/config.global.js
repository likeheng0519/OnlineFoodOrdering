var config = module.exports = {};

config.env = 'dev';
config.hostname = 'dev.example.com';

//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || '192.168.4.22';
config.mongo.db = 'food_ordering';
config.mongo.port = 'food_ordering';