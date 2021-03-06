"use strict"


      function cakes(recipe, available) {
         const values = [];

         for (let key in recipe) {
            if (recipe.hasOwnProperty(key)) {

               if (recipe[key] > available[key]) {
               return 0;
               } else if (!available.hasOwnProperty(key)) {
               return 0;
               } else {
               values.push(Math.floor(available[key] / recipe[key]));
               }

            } 
         }
         return Math.min(...values)
      }

      console.log(cakes({"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100}, {"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000}));
      console.log(cakes({"apples":3,"flour":300,"sugar":150,"milk":100,"oil":100}, {"sugar":500,"flour":2000,"milk":2000,"apples":15,"oil":20}));