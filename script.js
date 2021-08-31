var generateBtn = document.querySelector("#generate");
const specialCharacters = "!@#$%^&*";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generator:
function generatePassword() {
  // Prompts for password criteria:
  var pwLength = prompt("How many characters should your password be?");
  var pwCharacters = confirm("Do you want to use special characters?");
  var pwUppers = confirm("Do you want to use upper-case letters?");
  var pwLowers = confirm("Do you want to use lower-case letters?");
  var pwNumbers = confirm("Do you want to use numbers?");

  // Minimum input for special characters, upper-case letters, lower-case letters and numbers:
  var minimumCount = 0;

  // Sets the minimum as "blank" so that any character feature that is waived will not display in the password:
  var minimumCharacters = "";
  var minimumUppers = "";
  var minimumLowers = "";
  var minimumNumbers = "";

  var functionArray = {
    getCharacters: function() {
      return pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random()));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random()));
    },

    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random()));
    }
  };

  // Confirms all criteria selected and applies minimums for each criteria type:
  if (pwCharacters === true) {
    minimumCharacters = functionArray.getCharacters();
    minimumCount++;
  };

  if (pwUppers === true) {
    minimumUppers = functionArray.getUpperCases();
    minimumCount++;
  };

  if (pwLowers === true) {
    minimumLowers = functionArray.getLowerCases();
    minimumCount++;
  };

  if (pwNumbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  };

  // Variable (to be filled) for the following "for loop":
  var randomPasswordGenerated = "";

  // "For loop" to retrieve characters:
  for (let i = 0; i < parseInt(pwLength) - minimumCount; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  };

  // Characters added to the password:
  randomPasswordGenerated += minimumCharacters;
  randomPasswordGenerated += minimumUppers;
  randomPasswordGenerated += minimumLowers;
  randomPasswordGenerated += minimumNumbers;

  return randomPasswordGenerated;

  // if (randomPasswordGenerated === true) {
  //   window.alert(
  //     "Password: " + randomPasswordGenerated
  //   );
  // } else {
  //   window.alert("Error");
  // };
};
