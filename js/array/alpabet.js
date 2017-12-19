//首字母大写
const capitalize = (str, lowerRest = false) => str.slice(0,1).toUpperCase()+(lowerRest?str.slice(1).toLowerCase():str.slice(1));
// capitalize('myName', true)

//大写每个单词首字母
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// capitalizeEveryWord('hello world!')
//\b是单词边界符

//检查回文
const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g,'');
    return s === s.split('').reverse().join('');
}
// palindrome('taco cat') -> true