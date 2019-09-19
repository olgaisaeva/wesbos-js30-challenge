const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Array.prototype.some() // is at least one person 19 or older?
const isOneAdult = () => {
  const currentYear = (new Date()).getFullYear();
  return people.some(person => (currentYear - person.year) > 18);
};

console.log('TCL: isOneAdult', isOneAdult());

// Array.prototype.every() // is everyone 19 or older?
const areAllAdults = () => {
  const currentYear = (new Date()).getFullYear();
  return people.every(person => (currentYear - person.year) > 18);
};

console.log('TCL: areAllAdults', areAllAdults());

// Array.prototype.find() // find the comment with the ID of 823423
const findCommentById = id => comments.find(comment => comment.id === id);
console.log('TCL: findCommentById', findCommentById(823423));

// Array.prototype.findIndex() // find the comment with the ID of 823423 and delete it
const deleteCommentById = (id) => {
  const index = comments.findIndex(comment => comment.id === id);
  console.log('TCL: deleteCommentById -> index', index);
  comments.splice(index, 1);
};

deleteCommentById(823423);
console.table(comments);
