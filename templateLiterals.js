const horse = {
  name: 'Heee 🐴',
  size: 'large',
  skills: ['jousting', 'racing'],
  age: 7,
};

//INstead of doing horse.{attribute}

const { name, size, age, skills } = horse;
bio = `${name} is a ${age} year old ${size} horse skilled in ${skills.join(
  ' & '
)} `;
console.log(bio);

/**
 *
 * @param {Array of String} str String array to be parsed
 * @param {Int} age age of the horse
 * @returns Whether or not a horse is deemed as old or young (> or <= 5)
 */

function horseAge(str, age, size) {
  const ageStr = age > 5 ? 'old' : 'young';

  //This horse is old at 7 years. This is a large horse as well horse as well!
  return `${str[0]} ${ageStr} at ${age} years. ${str[1]} ${size} horse as well ${str[2]}`;
}

const bio2 = horseAge`This horse is${horse.age}This is a${horse.size}horse as well!`;
console.log(bio2);
