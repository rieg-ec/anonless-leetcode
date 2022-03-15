exports.userStats = (username, userStats) => {
  const stats = userStats
    .map(data => `Difficulty: ${data.difficulty}, submissions: ${data.count}`)
    .join('\n');
  return `${username}'s submissions:\n\n${stats}`;
};
