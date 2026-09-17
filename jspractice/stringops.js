function getLength(str) {
    console.log("original String: ", str);
    console.log("string Length: ", str.length);
}

getLength("faheem");

function findIndexof(str, target) {
    console.log("Original String: ", str);
    console.log("Index of " + target + " = ", str.indexOf(target));
}

findIndexof("Hello World", "World");

function findLastIndexOf(str, target) {
    console.log("Original String : " + str);
    console.log("Index of " + target + " = " + str.lastIndexOf(target));
}

findLastIndexOf("Hello Faheem", "Faheem");

function getSlice(str, start, end) {
    console.log("Original String: ", str);
    console.log("String after slicing: ", str.slice(start, end));
}

getSlice("Hello World", "1", "5");

function getSubstring(str, start, end) {
    console.log("original String:", str);
    console.log("Substring: ", str.substring(start, end));
}

getSubstring("Hello World!", 1, 5);

function replaceString(str, target, replacement) {
    console.log("string before replaceMent: ", str);
    console.log("string after replaceMent: ", str.replace(target, replacement));
}

replaceString("ilovepizza", "pizza", "burger");

function splitString(str, splitAdress1) {
    console.log("string before splitting: ");
    console.log("string after splitting: ", str.split(splitAdress1));
}

splitString("i$love$pizza", "$");

function trimString(str) {
    console.log(str, " <- string before trimmming!");
    console.log(str.trim(), " <- string after trimmming!");
}

trimString("  Hello, Faheem  ");

function toUpper(str) {
    console.log(str, "<-- string before applying toUpperCase()");
    console.log(str.toUpperCase(), " <-- string after applying toUpperCase()");
}

toUpper("hi faheem! what's up!");

function toLower(str) {
    console.log(str, "<-- string before applying toLowerCase()");
    console.log(str.toLowerCase(), "<-- string after applying toUpperCase()");
}

toLower("HI FAHEEM, WHAT'S UP");
