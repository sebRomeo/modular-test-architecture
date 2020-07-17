const bridgeService = require('./bridge-service');

console.log('==> Call to not already instanciated module')
try {
    bridgeService.b.serviceB.fnA();
} catch (e) {
    console.error(e.message)
}

class serviceClass {
    fnA() {
        console.log('  * A fn called in service A')
        bridgeService.b.services.serviceA.fnA();
        console.log('  * SUCCESS serviceA.a() has called serviceB.a()')
        console.log(`==> bridgeService.hasModule('inexistant')`, bridgeService.hasModule('inexistant'))
        console.log(`==> bridgeService.hasModule('a')`, bridgeService.hasModule('a'))
        console.log(`==> bridgeService.hasModule('b')`, bridgeService.hasModule('b'))
    }
    fnB() {
        bridgeService.b.services.serviceA.fnB();
    }
    fnC() {
        console.log('  * C fn called in service A')
    }
}

const singleton = new serviceClass();

bridgeService.register('services', 'a', 'serviceA', singleton)

module.exports = singleton;