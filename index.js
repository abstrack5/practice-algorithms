const inquirer = require('inquirer');

const askForFriend = () => {
    inquirer.prompt({
      type: 'input',
      message: 'Enter a name:',
      name: 'friend'
    })
    .then(({ friend }) => {
      console.log(`Hello, ${friend}!`);
      askForFriend();
    });
   };

  // askForFriend();