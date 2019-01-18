var Twitter_Filter = require('./Filters/Account_Filter');
var account;


    //Use readline for Terminal input
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });


    readline.question("Type in Twitter Account name: \n", (name) => {
        account = name;
        readline.close();
        console.log("Worked " + account);
        Twitter_Filter(account);
    });











