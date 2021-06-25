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

const addAdjToDB = (adj) => {
  if (!adjectives.includes(adj)) {
    adjectives.push(adj);
    console.log("adjective: " + adj + " added to db");
  } else {
    console.log(`Duplicate, ${adj} not added to db`);
  }
};

const addNounToDB = (noun) => {
  if (!nouns.includes(noun)) {
    nouns.push(noun);
    console.log("noun: " + noun + " added to db");
  } else {
    console.log(`Duplicate, ${noun} not added to db`);
  }
};

exports.getRandomAdj = getRandomAdj;
exports.getRandomNoun = getRandomNoun;
exports.addAdjToDB = addAdjToDB;
exports.addNounToDB = addNounToDB;
