# Welcome to the exercises

## READ ME FIRST

In this file you will find multiple exercises that will help you train different programming topics. In the file called `structure.ts` you will find the structure that Jacob suggests you use for your programs. This means that you make an App class that has a main function, and inside the main function you can put the code to solve the problem. You can use this structure for all the exercises.

Suggestion: If you put the code to solve the exercises in a GitHub repository that you share with Jacob, then it is easier for him to help you and give you feedback. You can just make one repository that has all the exercises inside of it.

## Exercise: A calculator class

Please create a class called `Calculator`. This class should have 4 methods: `plus()`, `minus()`, `divide()` and `multiply()`. Each of these methods should take in two numbers as parameters, and they should then calculate a result that makes sense for the function name. (The plus function should return the result of adding the first number to the second number, and the divide function should return the result of dividing the first number by the second) In the file `calculator.ts` you can find an example for how you can begin with solving the exercise, and you then need to add the rest of the missing methods. The purpose of the `App` class in that file is just to make the solution stick to the structure that Jacob recommends.

## Exercise: The word changer class

Please write a class called `WordChanger` that has two methods:

- `reverseWord()` this function should take in a string parameter and then it should return the string in reverse order. So the word 'hello' would be returned as 'olleh'.
- `swapEwithO` this function should take in a string parameter and then it should return the string but with all the instances of the letter `e` changed to the letter `o`. (Extra challenge: make sure that the casing stays correct, so an uppercase E becomes an upper case O, and a lower case e becomes a lower case o)

Tip 1: Maybe you can iterate over the characters in a string in a backwards order using for loops.
Tip 2: Google how to replace a character in a string with TS or JS.

## Exercise: The Guest list

In the file called `theGuestList.ts` you will find 2 arrays. 1 includes the people who are standing in a queue outside the party, and the other which is the actual guest list with the names of the people that are allowed to enter the party. Please write a program that goes through all the people in the queue array and checks if they are in the guest list or not. If they are in the guest list then print out a welcome message including the person's name. If they are not in the list then print out a message telling the person that they unfortunately cannot enter.

## Exercise: Odd or Even length

In the file `oddOrEvenLength.ts` you will find a list of 20 english words. Please write a program that goes through all the words and prints out if the length of each word is an even or an odd number. For example the word: `Ocean` has a length of 5 characters so it should print out that it is an odd length.

Tip: The modulo operator `%` might be useful for this. (Or you can google, how to check if a number is odd or even with JS or TS)

## Exercise: People from Australia

In the file `englishSpeakingPeople.csv` you will find data about some different people from countries where they speak english. Please write a program that reads the csv file and prints out the names of all the people that come from Australia.

Tip: The npm module `csv-parse` can be useful for solving this exercise. You can install it with `npm i csv-parse` and `npm i -D @types/csv-parse`.
