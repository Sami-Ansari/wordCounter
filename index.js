import inquirer from "inquirer";
import showBanner from "node-banner";
import chalk from "chalk";
(async () => {
    await showBanner('Words-Counter', '');
})();
const wordCount = (string) => {
    const words = string.trim().split(/\s+/g);
    console.log(chalk.red("Total words in the Para are : " + words.length));
};
const getInput = async () => {
    const userInput = await inquirer.prompt([{
            type: "input",
            name: "para",
            message: "Enter your Para: "
        }
    ]);
    await wordCount(userInput.para);
};
setTimeout(async () => {
    await getInput();
}, 1000);
