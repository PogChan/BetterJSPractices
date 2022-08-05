// Objects

const pikachu = { name: 'Pikachu 🐹' };
const stats = { hp: 40, attack: 60, defense: 45 };

//instead of this:

// pikachu['hp'] = stats.hp
// pikachu['attack'] = stats.attack
// pikachu['defense'] = stats.defense

// OR

// const lvl0 = Object.assign(pikachu, stats);
// const lvl1 = Object.assign(pikachu, { hp: 45 });

//Better to use this syntax for a better look.
//After the pikapika levels up it gains 60 hp
const lvl0 = { ...pikachu, ...stats };
const lvl1 = { ...pikachu, ...stats, hp: 100 };

console.table([lvl0, lvl1]);

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

// Push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];

// Shift

pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle'];
