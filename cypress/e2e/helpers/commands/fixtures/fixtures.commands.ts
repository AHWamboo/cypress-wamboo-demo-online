Cypress.Commands.add('getFixtureData', (fixtureFilePath: string) => {
    cy.fixture(fixtureFilePath);
});
