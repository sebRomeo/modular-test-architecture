const serviceA = require('./a');
const serviceB = require('./b');
const bridgeService = require('./bridge-service')

function init() {
    try {
        console.log('\n\n===== Circular FILE dependency test =====\n')
        serviceA.fnA();
        // console.log('\n\n===== Circular FUNCTION dependency test =====\n')
        // serviceA.fnB();
    } catch (e) {
        console.error(e)
    }
}

init();