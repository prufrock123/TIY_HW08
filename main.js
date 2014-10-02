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
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
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
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
// double every consonant and place an occurrence of "o" in between
// 
function rovarspraket(text){
    "use strict";
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var total = 0
    for (var i=0; i<array.length; i++){
        total += array[i]
    }
    console.log(total)
}

function multiply(array){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}