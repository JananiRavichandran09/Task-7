# Day-7-Task

 ## Using Array Methods

 `Map` `reduce` and `filter`
  
 +  map() 
    - It transform array element.
  
       + For Example: If i have **3 buggers** in array by using `map function` i can change into **3 frenchFries**
       + In program,
              
              let array = [1,2,3,4,5]; 
              let result = array.map((value)=> value*2)
              console.log(result)

              // Expected output: Array [2,4,6,8,10]


   + filter()
      - It selects elements by a test.

        + For Example: If i have **3 buggers** and **1 frenchFies** in array by using `filter function` i can filter only the buggers. After the filteration, I have **3buggers**
        + In program,  

               const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
               const result = words.filter((word) => word.length > 6);
               console.log(result);  

               // Expected output: Array ["exuberant", "destruction", "present"]

   + reduce()
       - It combine array value into one.
         
          - In program,

                const number = [1,2,3,4,5]
                const sum = number.reduce((accumulator,currentValue)=>{
                return accumulator + currentValue;
                },0);
                console.log(sum);

                // Expected output: 15
                
                
  
                  