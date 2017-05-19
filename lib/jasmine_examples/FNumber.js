


var read = function (wordArray ){
    return wordArray .reduce((array, word) =>{
            let entry = array.find((e) => e.word === word);
    if(entry){
        entry.count++;
    }
    else{
        array.push({word: word,count: 1});
    }
    return array;
}, []);
};
var split = function (words){
    return words.split(/\s+/);
}

var sort = function (groupWords) {
    groupWords .sort((x, y) => y.count - x.count);
}

var combie = function (groupWords) {
    return groupWords.map((e) => format(e.word, e.count)).join('\r\n');
}
var format = function (words, count){
    return words + ' ' + count;
}
function FNumber(words){
    if(words !== ''){
        let intArray = split(words);
        let  groupWords = read(intArray);
                 sort(groupWords);
        return combie(groupWords);
    }
    return '';
}
module.exports = FNumber;