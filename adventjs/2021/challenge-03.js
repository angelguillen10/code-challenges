// https://adventjs.dev/challenges/03

const isValidLetterCharacter = (str, characterOpen) => {
    let regExp = /\(([^)]+)\)/;
    let matches = regExp.exec(str);
    console.log(matches)
    return (matches[1].includes(characterOpen)) ? true : false;
}
  
export default function isValid(letter) {
    if (letter.includes("(") 
      && letter.includes(")") 
      && !letter.includes("[") 
      && !letter.includes("{") 
      && !letter.includes("()")) {
      return true;
    }
    else if (letter.includes("(") || letter.includes("()") || isValidLetterCharacter(letter, "[") || isValidLetterCharacter(letter, "{") ){
      return false;
    } 
}