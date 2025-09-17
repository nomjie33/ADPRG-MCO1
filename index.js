const accountManager = require('./modules/accountManager');
const transactionHandler = require('./modules/transactionHandler');
const currencyExchange = require('./modules/currencyExchange');
const interestCalculator = require('./modules/interestCalculator');
const readline = require('readline-sync'); 

function mainMenu() {
    let choice = 0;
    while (choice !== 7) {
        console.log("Welcome to the Main Menu\n");
        console.log("Please select an option:\n");
        console.log("1. Register Account  Name\n");
        console.log("2. Deposit Amount\n");
        console.log("3. Withdraw Amount\n");
        console.log("4. Currency Exchange\n");
        console.log("5. Record Exchange Rates\n");
        console.log("6. Show Interest Record\n");
        console.log("7. Exit\n");

        let choice = readline.question("Enter your choice (1-7): ");

        switch (choice) {
            case "1":
                //accountManager.registerAccount();
                break;
            case "2":
                //transactionHandler.depositAmount();
                break;
            case "3":
                //transactionHandler.withdrawAmount();
                break;
            case "4":
                //currencyExchange.currencyExchange();
                break;
            case "5":
                //currencyExchange.recordExchangeRates();
                break;
            case "6":
                //interestCalculator.showInterestRecord();
                break;
            case "7":
                console.log("Exiting the application. Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
   
}

mainMenu();