const bridgeService = require('./bridge-service');

class serviceClass {
    fnA() {
        console.log('  * A fn called in service B')
        console.log('  * Now recall service a BUT function C')
        bridgeService.a.services.serviceA.fnC();
    }
    fnB() {
        bridgeService.a.services.serviceA.fnB();
    }
    fnC() {
        console.log('C fn called in service B')
    }
}

const singleton = new serviceClass();

bridgeService.register('services', 'b', 'serviceA', singleton)

module.exports = singleton;