(function () {
    'use strict';
    
    function factorial(n) {
        if(n === 0) {
            return 1;
        } else {
            return n * factorial(n -1);
        }
    }

    function fibonacci(n) {
        if(n <= 0) {
            return 0;
        } 
        if (n === 1) {
            return 1;
        } else {
            return fibbonaci(n - 1) + fibbonaci(n - 2)
        }
    }

    function revert(n){
        if(n < 10) {
            return n;
        } else {
            var index = n.toString().length - 1;
            return n%10*10** index + revert(parseInt(n/10));
        }
    }

    function revertTxt(txt) {
        if(txt.length === 1){
            return txt;
        } else {
            return txt.substr(-1) + revertTxt(txt.slice(0,-1))
        }
    }

    function binaryToDecimal(n,i) {
        if(!i){
            i = 0;
        }
        if(n === 0){
            return n;
        }else {
            return n%10*2**i + binaryToDecimal(parseInt(n/10), i+1);
        }
    }

    function decimalToBinary(n) {
        if(n <= 1){
            return n%2;
        }else {
            return decimalToBinary(parseInt(n/2)) + '' + n%2;
        }
    }

    function vowelsCountLoop(txt) {
        var count = 0;
        txt.split('').forEach(function (s) {
            if ((/^[aeiou]$/i).test(s)) {
                count++;
            }
        });
        return count;
    }

    function vowelsCount(txt) {
        var vowels = txt.match(/[aeiou]/gi);
        return vowels ? vowels.length : 0;
    }

    function vowelsCountRecursive(txt) {
        if(txt.length < 1){
            return (/^[aeiou]$/i).test(txt) ? 1 : 0;
        } else {
            var n = (/^[aeiou]$/i).test(txt.slice(-1)) ? 1 : 0;
            return n + vowelsCountRecursive(txt.slice(0,-1));
        }
    }

    function txtKindLoop(txt) {
        var lower = 0;
        var upper = 0;
        txt.split('').forEach(function (s) {
            var code = s.charCodeAt();
            if(code >= 97 && code <= 122) {
                lower++;
            }
            if(code >= 65 && code <= 90) {
                upper++;
            }
        });
        if(lower === 0 && upper > 0) {
            console.log('Text is all in UpperCase');
        }
        else if(lower > 0 && upper === 0) {
            console.log('Text is all in LowerCase');
        } else {
            console.log('Text is Mixed');
        }
    }

    function txtKind(txt) {
        var lowers = txt.match(/[a-z]/g) || [];
        var uppers = txt.match(/[A-Z]/g) || [];

        if(lowers.length === 0 && uppers.length > 0) {
            console.log('Text is all in UpperCase');
        }
        else if(lowers.length > 0 && uppers.length === 0) {
            console.log('Text is all in LowerCase');
        } else {
            console.log('Text is Mixed');
        }
    }

    //Pangram: it contains every letter in the English alphabet
    function listMissingLetters(txt) {
        var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','z','y','z'];
        var result = '';
        alphabet.forEach(function(c) {
            var index = txt.toLowerCase().split('').indexOf(c);
            if(index === -1){
                result += c;
            }
        });
        return result;

    }

})();