const log = console.log;
const chai = require('chai');
const should = chai.should();
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const {
    webService,
    someCall,
    parseCall
} = require('./index');

describe("#index", ()=>
{
    it('promise works', ()=>
    {
        return webService().should.eventually.be.fulfilled;
    });

    describe("#someCall", ()=>
    {
        it('some call is an observable', done =>
        {
            someCall().subscribe(
                json => {
                    log("json:", json);
                    done();
                },
                done
            );
        });
    });

    describe("#parseCall", ()=>
    {
        it.only("uh... gives us new data?", done =>
        {
            parseCall().subscribe(
                json =>
                {
                    log("json:", json);
                    done();
                },
                done
            )
        });
    });
});