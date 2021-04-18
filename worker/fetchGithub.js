const fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient({
    host: '127.0.0.1',
    port: 16379,
});
const {promisify} = require("util");
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
    console.log("asdasdad")
    let totalCount = 1;
    let currentPage = 0;
    const jobs = [];

    // fetch all job pages
    while(totalCount > 0){
        const res = await fetch(`${baseURL}?page=${currentPage}`);
        const jobResult = await res.json();
        jobs.push(...jobResult);
        totalCount = jobResult.length;
        currentPage++;
    }

    // store in redis
    await setAsync('jobs-list', JSON.stringify(jobs));
}

module.exports = fetchGithub;