const fs = require('fs/promises');
const MongoClient = require('mongodb').MongoClient;
const contentType = require('./contentType.js');

// export MONGO_DB_URL="mongodb+srv://helptecharchon:TechArch0n^46@testdb.tgirles.mongodb.net"
const MongoDbUrl = process.env.MONGO_DB_URL || "mongodb+srv://kaivalya:kaivalya@cooking.b5upd1k.mongodb.net/";
const MongoDb =  process.env.MONGO_DB || "cooking_recepies";
const MongoDbCollection = process.env.MONGO_DB_TABLE || "recepie_details";

const connection = new MongoClient(MongoDbUrl);

const ApiHandler = async (req, res) => {

	const header = {
        'Content-Type': contentType['.json'],
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      };

	try {
    await connection.connect();
    const db = connection.db(MongoDb);
    const collection = db.collection(MongoDbCollection);

    if (req.method === 'GET') {
      const data = await collection.find({}).toArray();
      const json = JSON.stringify(data, null, 2);
      await fs.writeFile('./public/db.json', json, 'utf8');
      res.writeHead(200, header);
      res.end(json);
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  } finally {
    await connection.close();
  }
	
};


module.exports = ApiHandler;
