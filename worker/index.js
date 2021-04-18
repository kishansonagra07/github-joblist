const cronJob = require("cron").CronJob;
const fetchGithub = require('./fetchGithub');
new cronJob('*/1 * * * *', fetchGithub, null, true, 'Asia/Kolkata'); 
// cron will run every minute. for betterment set 6 hours like (ex. 0 */6 * * *)
