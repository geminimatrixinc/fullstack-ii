
const progressBar = require('progress');
const chalk = require('chalk');

var downloadBar = new progressBar('Downloading [:bar]  :percent :etas', {
    complete: chalk.green.bgGreen(' '),
    incomplete: chalk.black.bgBlack(' '),
    width: 20,
    total: 100
});

var timer;

const startProgress = () => {
    console.log(chalk.greenBright.bgBlack(`Downloaded --> Started.`));
    timer = setInterval(function () {
        downloadBar.tick();
        if (downloadBar.complete) {
            console.log(chalk.greenBright.bgBlack(`Downloaded --> Completed.`));
            clearInterval(timer);
        }
    }, 500); // Issue #5 - increase timeout to a value greater than zero
};

const stopProgress = () => {
    console.log(chalk.redBright.bgBlack(`Downloaded --> Stopped!`));
    clearInterval(timer);
};

// Issue #4 - module.exports needs to include stopProgress method
module.exports = {
    startProgress,
    stopProgress
}