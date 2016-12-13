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

})();