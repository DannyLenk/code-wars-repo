"use strict"



      const primePrimes = n => {
      
      const isPrime = n => {
         for ( let i = 2; i < n; i++ ) {
            if ( n % i === 0 ) {
                  return false;
            }
            }
         return true;
         }

      const arr = [2];
      for ( let i = 3; i < n; i+=2 ) {
         if ( isPrime(i) ) {
            arr.push(i);
         }
      }
      console.log(arr);
      
      const fractions = [];
      arr.forEach(num => {
         for (let i = 0; i < arr.length; i++) {
            if (num < arr[i]) {
            fractions.push(num / arr[i]);
            }
         }
      })
      
      const first = fractions.length
      const sum = fractions.reduce((a,b) => a+b, 0);
      
      console.log(first)
      console.log(Math.floor(sum));
      
      return [first, Math.floor(sum)];
      };

      console.log(primePrimes(100));
