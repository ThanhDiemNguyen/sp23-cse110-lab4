# Variables & Scoping
## Part 1: A Quick Introduction

### var declaration

1. What is printed by line 9? If the code returns an error, explain why.
   - Line 9 will be printed ``` values added: 20```.
  
2. What is printed by line 13? If the code returns an error, explain why.
   -  Line 13 will be printed ``` final result: 20```.
  
### let declaration

3. What is printed by line 9? If the code returns an error, explain why. 
    - Line 9 will be printed ```values added: 20```.

4. What is printed by line 13? If the code returns an error, explain why. 
    - Line 13 will return the ```ReferenceError``` because the *result* variable is declared inside the *if* block using *let* declaration. Also, variables declared with *let* have block-level scope. Therefore, variable *result* is only accessible within the *if* block. Line 13 is outside the *if* block, then the variable *result* has not been defined yet, causing the *ReferenceError*.

### const declaration

5. What is printed by line 9? If the code returns an error, explain why.
    - Line 9 will return the ```TypeError``` because the code reassign a value to a constant variable(*result*).

6. What is printed by line 13? If the code returns an error, explain why.
    - Line 13 will not be reached, and no output will be printed to the console becasue this code throws an error on line 9.

## Part 2: A Little More of a Challenge

1. What will happen at line 12 and why? If the code causes an error, explain why.
    - The code will `log 3 to the console` at line 12. Because after the loop, the variable *i* equals *prices.length*. Also, *prices* = [100, 200, 300] --> *prices.length* = 3.

2. What will happen at line 13 and why? If the code causes an error, explain why. 
   - The code will `log 150 to the console` at line 13. In the last iteration of the loop, i = *prices.length* - 1 = 2, and the variable *discountedPrice* = *prices[i]* * (1 - *discount*) =  *prices[2]* * (1 - 0.5) = 300 * 0.5 = 150. Also, line 13 is outside the loop, and the *discountedPrice* is declared by var declaration(function-level scope). Therefore line 13 will log the last value of *discountedPrice*(150) to the console.

3. What will happen at line 14 and why? If the code causes an error, explain why. 
    - The code will `log 150 to the console` at line 14. It is similarly to the question 2, line 13 will log the last value of *finalPrice* to the console. In the last iteration of the loop, *finalPrice* = Math.round(*discountedPrice* * 100) /100 = Math.round(150 * 100) /100 = 150.

4.  What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    - This function will return `[50, 100, 150]`. Each iteration, this code add a computed *finalPrice* to *discounted* set. 
      - With *i* = 0, *discountedPrice* = *prices[i]* * (1 - *discount*) =  *prices[0]* * (1 - 0.5) = 100 * 0.5 = 50. *finalPrice* = Math.round(*discountedPrice* * 100) /100 = Math.round(50 * 100) /100 = 50. --> *discounted* = [50].
      - With *i* = 1, *discountedPrice* = *prices[i]* * (1 - *discount*) =  *prices[1]* * (1 - 0.5) = 200 * 0.5 = 100. *finalPrice* = Math.round(*discountedPrice* * 100) /100 = Math.round(100 * 100) /100 = 100. --> *discounted* = [50, 100].
      -  With *i* = 2, *finalPrice* = 150 (question 3). --> *discounted* = [50, 100, 150].

5.  What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    - Line 12 will return `ReferenceError` because the variable *i* is declared using *let* declaration which has block-level scope and is not accessible outside of the for-loop block. Also, line 12 is outside the loop; therefore, *i*  has not been defined yet, causing the *ReferenceError*.

6. What will happen at line 13 and why? If the code causes an error, explain why.
     - Line 13 will return `ReferenceError` because the variable *discountedPrice* is declared using *let* declaration which has block-level scope and is not accessible outside of the for-loop block. Also, line 12 is outside the loop; therefore, *discountedPrice*  has not been defined yet, causing the *ReferenceError*.

7. What will happen at line 14 and why? If the code causes an error, explain why. 
    - The code will `log 150 to the console` at line 14. It is similarly to the question 3 because line 14 is within the same block-level scope as the declaration of *finalPrice* variable.
  
8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
   - This function will return `[50, 100, 150]`. This question is  similar as question 4 because line 16 `return discounted;` and the process of pushing element into *discounted* in for-loop are within the same block-level scope as the declaration of *discounted* variable.  

9.  What will happen at line 11 and why? If the code causes an error, explain why.
    - Line 11 will return `ReferenceError` because the variable *i* is declared using *let* declaration which has block-level scope and is not accessible outside of the for-loop block. Also, line 11 is outside the loop; therefore, *i*  has not been defined yet, causing the *ReferenceError*.

10.  What will happen at line 12 and why? If the code causes an error, explain why.
    - The code will `log 3 to the console` at line 12. Because the variable *lenggh* equals *prices.length*. Also, *prices* = [100, 200, 300] --> *length* = *prices.length* = 3.

11.  What will this function return? Give a brief explanation. If the code causes an error, explain why. 
    - This function will return `[50, 100, 150]`. Each iteration, this code add a computed *finalPrice* to *discounted* set. 
      - With *i* = 0, *discountedPrice* = *prices[i]* * (1 - *discount*) =  *prices[0]* * (1 - 0.5) = 100 * 0.5 = 50 --> *discounted* = [50].
      - With *i* = 1, *discountedPrice* = *prices[i]* * (1 - *discount*) =  *prices[1]* * (1 - 0.5) = 200 * 0.5 = 100.--> *discounted* = [50, 100].
      -  With *i* = 2, discountedPrice* = *prices[i]* * (1 - *discount*) =  *prices[2]* * (1 - 0.5) = 300 * 0.5 = 150.--> *discounted* = [50, 100, 150].
