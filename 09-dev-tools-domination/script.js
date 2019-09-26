const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

const makeGreen = () => {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};

// Regular
console.log('Hello World!');

// Interpolated
console.log('Some', 'Text', ':)');
console.log(`${dogs[0].name} is my favorite dog.`);

// Styled
console.log('%c I am big red text', 'color: #f00; font-size:20px');

// Warning!
console.warn('Achtung!');

// Error :|
console.error('You are wrong!');

// Info
console.info('Too Much Water Can Kill You.');

// Testing
console.assert(dogs[0].age === 200, 'That is false.');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd(`${dog.name}`);
});

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count('Snickers');
console.count('Hugo');
console.count('Hugo');
console.count('Snickers');
console.count('Snickers');

// Timing
console.time('fetching data');
fetch('https://api.github.com/users/olgaisaeva')
  .then(data => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// Table
console.table(dogs);
