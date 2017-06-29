const log = console.log;
const Rx = require('rx');
const _ = require('lodash');

const webService = ()=> new Promise(success =>
{
    setTimeout(()=>
    {
        success([
            {firstName: "Jesse", lastName: "Warden", age: 38},
            {firstName: "Shanthosh", lastName: "Ramesh", age: 27}
        ]);
    }, 300);
});

const someCall = ()=>
{
    return Rx.Observable.fromPromise(webService());
};

const parseCall = ()=>
{
    return someCall()
    .map(json =>
    {
        const newMappedData = _.map(json, person =>
        {
            return {
                "name": person.firstName + " " + person.lastName
            };
        });
        // return Rx.Observable.from(newMappedData);
        return newMappedData;
    });
};

module.exports = {
    webService,
    someCall,
    parseCall
};