# Data Types
12. Given the above Object, write the notation for:
    
    A. Accessing the value of the name property in the student object

    - `student.name`

    B. Accessing the value of the Grad Year property in the student object

    - `student['Grad Year']`

    C. Calling the function for the greeting property in the student object

    - `student.greeting()`

    D. Accessing the name property of the object in the Favorite Teacher property in student

    - `student['Favorite Teacher'].name`

    E. Access index zero in the array of the courseLoad property of the student object

    - `student.courseLoad[0]`

# Basic Operators & Type Conversion 
13. Arithmetic
    
    A. ‘3’ + 2

    - Output: `'32'`
    - Explaination: Because '3' is a string, the *+* operation is used for concatenation.
  
    B. ‘3’ - 2

    - Output: `1`
    - Explaination: Because the *-* operation is used for subtraction, the string *'3'* maps to 3, leading the output = 3 - 2 = 1.
  
    C. 3 + null

    - Output: `3`
    - Explaination: Because the *+* operation is used for addition (no operand is string), the *null* operand in this case maps to 0, leading the output = 3 + 0 = 3.
  
    D. ‘3’ + null
    
    - Output: `'3null'`
    - Explaination: Because '3' is a string, the *+* operation is used for concatenation.
  
    E. true + 3
    
    - Output: `4`
    - Explaination: Because the *+* operation is used for addition, the *true* operand maps to 1, leading the output = 1 + 3 = 4.
  
    F. false + null
    
    - Output: `0`
    - Explaination: Becasue the *false* operand maps to 0 and the *null* operand maps to 0, the output = 0 + 0 = 0.
  
    G. '3' + undefined
    
    - Output: `'3undefined'`
    - Explaination: Because '3' is a string, the *+* operation is used for concatenation.
  
    H. '3' - undefined

    - Output: `NaN`
    - Explaination: Because the *-* operation is used for subtraction, the string *'3'* maps to 3 and the *undefined* can not maps to a number, leading the output = NaN.
  
14. Comparison
    
    A. ‘2’ > 1
    
    - Output: `true`
    - Explaination: Because the string *'2'* maps to 2 and 2 > 1, the ouput is True. 
  
    B. ‘2’ < ‘12’
    
    - Output:  `false`
    - Explaination: By comparing the first character of 2 strings, '2' > '1', leading '2' > '12'
    
    C. 2 == ‘2’ 
    
    - Output: `true`
    - Explaination: Because string '2' becomes a number 2, the output is true.
  
    D. 2 === ‘2’
    
    - Output: `false`
    - Explaination: Because the types are different.
  
    E. true == 2
    
    - Output: `false`
    - Explaination: Because true maps to 1 and 1 != 2, the output is false.
  
    F. true === Boolean(2)

    - Output: `false`
    - Explaination: Because the types are different.
  
15. Explain the difference between the == and === operators.
    - The operation `==` is used for a non-strict check, which allows the operands coverting to a common type before comparing.
    - The operation `===` is used for a strict equality check which does not allow the operands coverting to a common type before comparing. Therefore, if the operands are different, the output returns false.


# Loop

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
    
# Functions
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.
    
    - Result: `newArr = [2, 4, 6]`  
    - Explaination: 
  
        -  modifyArray([1,2,3], doSomething) takes [1,2,3] as the *array* parameter and doSomething as the *callback* parameter. 
        -  for loop:
   
            - i = 0: callback(array[i]) is doSomething(1). And doSomething(1) returns 2 * 1 = 2 --> newArr = [2].
            - i = 1: Similarly, --> newArr = [2, 4].
            - i = 2: Similarly, --> newArr = [2, 4, 6].
  
# setInterval(), setTimeout(), clearTimeout()
18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. (This should be a JS file - part2-question18.js)


19. What is the output of the above code? (This should be in your part2.md)
    - Output: 
        ```
        1
        4
        2
        3
        ```
    - Explaination: when the printNum() is called,
        - Line 2 `console.log(1)` will log `1` to the console.
        - Line 3 `setTimeout(function() { console.log(2); }, 1000);`  will set timer and plan log `2` to the console after 1000ms delay time.
        - Line 4 `setTimeout(function() { console.log(3); }, 1000);` will also set timer and plan  log `3` to the console after 1000ms delay time.
        - Line 5 `console.log(4);` will log `4` to the console.
        - Once the delay time of 1000ms has passed, the *setTimout* in line 3 log `2` to the console. Then, the *setTimout* in line 4 log `3` to the console.

