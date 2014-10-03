/**
 * 15 things I learned from JavaScript-Garden:
 *
 * 1. - Weak typing is what causes the equality operator to coerce types into being comparable. I guess it allows you to 
 *      fudge values and lets JS sort it out.
 * 2. - Weak typing results in performance loss because the types have to be converted before being compared.
 * 3. - The strict equality operator compares for identify if one or both operands are an object. This means that any 
 *      primitives or empty objects will return false if compared to each other, as they are not the same object. 
 *      "hi" and "hi" are not the same object. var hi = "hi" is not the same as "hi". But hi === hi is true because the
 *      variables refer to the same object. 
 * 4. - The typeof operator is almost completely useless.
 * 5. - Prototype is the correct way to refer to things you might refer to as 'classes' in other languages like Ruby.
 *      It seems that things like Arrays and Strings are sub-prototypes of the Object prototype? Right?
 * 6. - typeof is really only useful to determine a variable is defined with something like the following typeof foo !== 'undefined'
 * 7. - The instanceof operator is mostly used to compare custom made objects.
 * 8. - You can set for instance Bar.prototype = Foo (Foo being a previously defined function object), but when you create a new Bar object
 *      this doesn't mean that Bar is an instance of Foo, but that Bar.prototype refers to another Foo. If Bar.prototype= new Foo();, then it would be true?
 * 9. - All JS is weakly typed so it will try to apply type coercion WHEREVER possible. Not just in the case of the non-strict equality operator (==).
 * 10.- Leaving of "new" when using Number constructor results in a kind of weak type comparison. Number(10) should be an object and !=== 10 (a primitive), but
 *      without the "new", the equality operator treats Number(10) not as an object, but as a primitive, resulting in a (false!) true.
 * 11.- You can cast to a string by prepending an empty string to a value.
 * 12.- You can cast to a number by prepending the unary plus operator to a value.
 * 13.- You can cast to a boolean by prepending a double not operator (!!) to a value.
 * 14.- You can use Object.prototype.toString to access the [[Class]] value of an object.
 * 15.- Passing int literals or non-object values into constructors can result in even more type coercion, so it is best
 *      to cast your literals and non-object values into the explicit type you intend to (string, number, boolean... possibly more?)
 * 
 */


/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    if(a > b){
        console.log(a)
    } else {
        console.log(b)
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    if(a > b){
        if(a > c){
            console.log(a)
        } else {
            console.log(c)
        }
    } else if(a < b){
        if(b > c){
            console.log(b)
        } else {
            console.log(c)
        };
    };
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


function isVowel(char){
    "use strict";
        for (var i=0, vowel = ["a", "e", "i", "o", "u"]; i < vowel.length; i++){
            if (char===vowel[i]){
                return true;
        }
    }
        for (var i=0, vowel = ["a", "e", "i", "o", "u"]; i < vowel.length; i++){
            if (char!==vowel[i]){
                return false;
        }
    };
};

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
// double every consonant and place an occurrence of "o" in between
// 
function rovarspraket(text){
    "use strict";
    var textArray = text.split("");
    var resultArray = [];
    var vowels = ["a", "e", "i", "o", "u"]
    for (var i=0; i < textArray.length; i++){
        if (vowels.indexOf(textArray[i]) < 0) {
            resultArray.push(textArray[i] + "o" + textArray[i]);
        } else {
            resultArray.push(textArray[i]);
        }
    }
    return resultArray.join("");
}

function rovarspraket2(phrase){
    var resultArray = "";

    for(var i = 0; i < phrase.length; i++){
        resultArray +=
            "aeiouAEIOU \"'/\\".indexOf(phrase[i]) >= 0 ? phrase[i] : phrase[i]+"o"+phrase[i];
    }

    return resultArray;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var total = 0;
    for (var i=0; i<array.length; i++){
        total += array[i]
    }
    console.log(total)
}

function multiply(array){
    "use strict";
    var product = 1;
    for (var i=0; i<array.length; i++){
        product *= array[i]
    }
    console.log(product)
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    return string.split("").reverse().join("")
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    words.sort(function(a, b){
        return a.length> b.length ? -1 : 1;
    })
    return words;
    return words[0].length

    // for (var i=0; i<words.length; i++){
    //     if 
    // }
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i 
// and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var longWords = []
    words.map(function(word){
        if (word.length > i) {
            longWords.push(word)
        }
    })
    return longWords;

    // for (var x=0; x<words.length; x++){
        
    // }
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency 
// listing of the characters contained in it. 
// Represent the frequency listing as a Javascript object. 
// Try it with something like 
// charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------


function testFreq(string){
    var characters = {};

    for (var i=0; i<string.length; i++){

        characters[string[i]] = 
            (characters[string[i]] === undefined) ?
            1 : 
            characters[string[i]]+1;
    }
    return characters;    
}


// the object characters is empty

// we pass in a string called "hhllo"

// let's set this object characters equal to 

// Does the characters object have a property that is equal to the value of hello at index equal to 0 which is h?

// There is no property h in our characters object so let's define it and set it equal to a value of 1

// loop again with i equal to 1

// Does the characters object have a property that is equal to the value of hello at index equal to 1 which is h?

// Yes, this proprety is defined and has a value equal to 1, so set the value of the characters object whose property is the same
// as the value of the string at index=1 (which is also h) and let's increment it by 1. So now this property (which is h) is equal
// to 2.




function charFreq(string) {
    var freq = {};

    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};


function binaryCharFreq(string){
    "use strict";
    var charArray = [];

    for(var i = 0; i<string.length; i++){
        charArray[i] = string.charCodeAt(i);
    }

    // return charArray

    charArray.map(function binaryIndexOf(searchCharCode) {  // searchCharCode is the 
        'use strict';
     
        var minUpperCharCode = 65  // MinUpperCharCode is the lowest uppercase charcode, 'A'
        var maxUpperCharCode = 90  // MaxUpperCharCode is the highest uppercase charcode, 'Z'
        var currentCharCode        // This is the starting midpoint charcode between max and min (90 and 65)
        // var currentChar;           // This is the character that corresponds to the currentCharCode value 

        while (minUpperCharCode <= maxUpperCharCode) {                      // This will run until the function below increments minUpperCharCode to a value higher than maxUpperCharCode
            currentCharCode = (minUpperCharCode + maxUpperCharCode)/2 | 0;  // This sets the currentCharCode to an inital value halfway between min and max UpperCharCodes
            // currentChar = this.fromCharCode(currentCharCode);               // This gets us the character equal to the current CharCode.

            if (currentCharCode < searchCharCode) {                                 
                minUpperCharCode = currentCharCode + 1;                     // If the currentCharCode is less than the searchCharCode, then set the minUpperCharCode to currentCharCode +1
            }
            else if (currentCharCode > searchCharCode) {
                maxUpperCharCode = currentCharCode -1;                      // If the currentCharCode is more than the searchCharCode, then set the maxUpperCharCode to currentCharCode -1
            }
            else {
                return currentCharCode                                      // If the currentCharCode is neither more, nor less than searchCharCode, then return currentCharCode because it is equal to searchCharCode
            }
        }
        return -1;                                                          // The index of the element which defaults to -1 when not found.
    });
    return charArray

     // return charArray.map(binaryIndexOf())
}

// function binaryIndexOf(searchChar) {
//     'use strict';

 
//     var minUpperCharCode = 65  // MinUpperCharCode is the lowest uppercase charcode, 'A'
//     var maxUpperCharCode = 90  // MaxUpperCharCode is the highest uppercase charcode, 'Z'
//     var currentCharCode;       // This is the starting midpoint charcode between max and min (90 and 65)
//     var currentChar;           // This is the character that corresponds to the currentCharCode value 

//     while (minUpperCharCode <= maxUpperCharCode) {                      // This will run until the function below increments minUpperCharCode to a value higher than maxUpperCharCode
//         currentCharCode = (minUpperCharCode + maxUpperCharCode)/2 | 0;  // This sets the currentCharCode to an inital value halfway between min and max UpperCharCodes
//         currentChar = this.fromCharCode(currentCharCode);               // This gets us the character equal to the current CharCode.

//         if (currentChar < searchChar) {                                 
//             minUpperCharCode = currentCharCode + 1;                     // If the currentChar is less than the searched for 
//         }
//         else if (currentChar > searchChar) {
//             maxUpperCharCode = currentCharCode -1;
//         }
//         else {
//             return currentCharCode
//         }
//     }
//     return -1;
// }

/**
 * Pseudo-Code for my binary search attempt
 *
 * if 65 <= charCode <=90
 *     upperCase alpha
 * else if 97 <= charCode <= 122
 *     lowerCase alpha
 * else
 *     not alpha
 *
 *
     * if 65 <= upperCase <= 77
     *     A-M
         * if 65 <= A-M <= 71
         *     A-G
            * if 65 < A-G <= 68
            *     A-D
                * if 65 <= A-D < 67
                *     A-B
                    * if 65 = A-B
                    *     A
                    * else
                    *     B     
                * else
                *     C-D     
            * else
            *     E-G
         * else
         *     H-M  
     * else
     *     N-Z
     * 
     *     

     *
     *
     *
     * 
     * 
     * if 97 <= lowerCase <= 109
     *     a-m
     * else
     *     n-z
 *     
 *------------
 *some code from the internet:
 *
 * Performs a binary search on the host array. This method can either be
 * injected into Array.prototype or called with a specified scope like this:
 * binaryIndexOf.call(someArray, searchElement);
 *
 * @param {*} searchElement The item to search for within the array.
 * @return {Number} The index of the element which defaults to -1 when not found.
 *
    function binaryIndexOf(searchElement) {
        'use strict';
     
        var minIndex = 0;
        var maxIndex = this.length - 1;
        var currentIndex;
        var currentElement;
     
        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = this[currentIndex];
     
            if (currentElement < searchElement) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > searchElement) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
     
        return -1;
    }
 
 */

// function testTestFreq(string){  // this code doesn't work because it's looking for a property called the entire string parameter inside the empty object. but why doesn't it create a property called "string" in the empty object? Is it because it's trying to loop thru each property in the object? 

//     var emptyObj = {}

//     for (var prop in emptyObj){
//         if (emptyObj[string] === undefined){
//             emptyObj[string] = 1;
//         } else {
//             emptyObj[string] += 1;
//         }
//         return emptyObj;
//     }
// }

function testTestFreq(string){ 

    var emptyObj = {}

    for (var prop in string){
        if (emptyObj[string[prop]] === undefined){
            emptyObj[string[prop]] = 1;
        } else {
            emptyObj[string[prop]] += 1;
        }
    }
    
    return emptyObj;
}








