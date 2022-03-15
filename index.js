require('dotenv').config();
const axios = require('axios');

const TelegramBot = require('node-telegram-bot-api');

const { userDataQuery } = require('./queries');
const { userStats } = require('./messages');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const fetchUserData = username => {
  return axios.post(
    LEETCODE_API_ENDPOINT,
    { query: userDataQuery(username), variables: { username: username } },
    { headers: { referrer: `https://leetcode.com/${username}` } }
  );
};

bot.onText(/\/user (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const username = match[1];
  const response = await fetchUserData(username);
  const { totalSubmissionNum } = response.data.data.matchedUser.submitStats;
  const message = userStats(username, totalSubmissionNum);

  bot.sendMessage(chatId, message);
});
