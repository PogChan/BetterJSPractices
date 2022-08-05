const turtle = {
  name: 'TUTS 🐢',
  legs: 4,
  shell: true,
  type: 'amphibious',
  meal: 10,
  diet: 'cactus',
};

//accessing each with animal.name, animal.legs ... is too redunant

function feed(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} PIECES of ${diet}`;
}

console.log(feed(turtle));
