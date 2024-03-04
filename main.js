/* 1. Display a message to user indicating they have been chosen to open a important vault.
 2. Explain that the message will reveal the secret combination.
 3. Generate three codes for the vault combination.
 4 Display the generated codes to the user.
*/

//this is to display the message to the user
alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination:");

//subtract 30 from 40 to get the first code
const code1 = 40 - 30;

//multiply 4 by 10 to get the second code
const code2 = 4 * 10;

//add 20 and 19 to get the third code
const code3 = 20 + 19;

//Display the Combination to user
alert("The combination is: " + code1 + " - " + code2 + " - " + code3);