// Code your solution here
const findMatching = (array,names) => array.filter((element)=> element.toLowerCase() == names.toLowerCase());

const fuzzyMatch = (array, letter) => array.filter((element) => (element.charAt(0)).toLowerCase() === letter[0].toLowerCase())

const matchName = (person, string) => person.filter((element) => element.name === string)