const rawBridge = {
    registeredModules: [],
    register(type, module, name, classs) {
        if (!(module in this)) this[module] = new Proxy({}, safeNotInstanciatedWarningProxy('module'));
        this.registeredModules.push(module);
        if (!(type in this[module])) this[module][type] = new Proxy({}, safeNotInstanciatedWarningProxy('type'));
        if (!(name in this[module][type])) this[module][type][name] = new Proxy({}, safeNotInstanciatedWarningProxy('functionName'));
        this[module][type][name] = classs;
    },
    hasModule(moduleName) {
        return this.registeredModules.includes(moduleName)
    }
};

const safeNotInstanciatedWarningProxy = (msg = 'property') => ({
    get: function (object, prop) {
        if (prop in object) return object[prop];
        else throw new Error(`Error: not instanciated ${msg}:${prop} in bridgeService`)
    }
})

module.exports = new Proxy(rawBridge, safeNotInstanciatedWarningProxy('module'));