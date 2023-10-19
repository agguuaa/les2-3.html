function displayWelcomeMessage() {
  var name = prompt("What's your name?");
  var yearOfBirth = prompt("What year were you born?");
  var currentYear = new Date().getFullYear();
  var age = currentYear - yearOfBirth;

  var welcomeMessage = "Hello " + name + "! You are " + age + " years old.";

  var welcomeElement = document.createElement("h1");
  var textNode = document.createTextNode(welcomeMessage);
  welcomeElement.appendChild(textNode);

  document.body.appendChild(welcomeElement);

  // Calculate the number of characters
  var code = document.documentElement.outerHTML;
  var charCount = code.length;
  console.log("The code consists of " + charCount + " characters.");
}

displayWelcomeMessage();
