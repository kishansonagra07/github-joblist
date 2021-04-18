const express = require('express')
const app = express()

const {promisify} = require("util");
const redis = require("redis");
const client = redis.createClient({
    host: '127.0.0.1',
    port: 16379,
});
const getAsync = promisify(client.get).bind(client);

app.get('/job-list', async(req, res) => {
  const jobs = await getAsync('jobs-list');
  res.header('Access-Control-Allow-Origin','http://localhost:3000');
  return res.send(jobs);
})

app.listen(5000, () => {
  console.log('API running on http://localhost:5000')
})