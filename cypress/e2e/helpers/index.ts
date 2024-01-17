/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
declare namespace Cypress {
    interface Chainable {
        getFixtureData(fixtureFilePath: string): Chainable<void>;
        APILoginJWT(userName: string, userApiPassword: string): Chainable<void>;
    }
}
