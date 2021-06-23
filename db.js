// Mock database for project

let adjectives = ["fin", "rar", "høy", "spesiell", "troverdig"];

let nouns = ["bil", "båt", "hodetelefon", "hundrelapp"];

const getRandomAdj = () => {
  const num = Math.random() * adjectives.length;
  const adj = adjectives[Math.floor(num)];
  return adj;
};

const getRandomNoun = () => {
  const num = Math.random() * nouns.length;
  const adj = nouns[Math.floor(num)];
  return adj;
};

exports.getRandomAdj = getRandomAdj;
exports.getRandomNoun = getRandomNoun;
