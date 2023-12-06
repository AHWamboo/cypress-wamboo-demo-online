import { TopMainMenuActions, topMainMenuSelectors } from '.';
import { fixturesNames } from '../../../fixtures/fixtures-names';

const topMainMenuActions: TopMainMenuActions = new TopMainMenuActions();

export class TopMainMenuAsserts {
    verifyNavItemsLength(): void {
        cy.getFixtureData(fixturesNames.topMainMenu).then((data: any) => {
            cy.get(topMainMenuSelectors.nav.items).should('have.length', data.navItemsNames.length);
        });
    }

    verifyNavItemsNames(): void {
        cy.getFixtureData(fixturesNames.topMainMenu).then((data: any) => {
            cy.get(topMainMenuSelectors.nav.items)
                .then(($item: JQuery<HTMLElement>) => Cypress._.map($item, 'innerText'))
                .should('deep.equal', data.navItemsNames);
        });
    }

    verifyUrlPath(): void {
        cy.getFixtureData(fixturesNames.topMainMenu).then((data: any) => {
            data.navItemsNamesWithUrls.forEach((element: any) => {
                topMainMenuActions.chooseAndClickMainMenuNavItem(element.name);
                cy.location().should((location: Location) => {
                    expect(location.href).contain(element.url);
                });
            });
        });
    }
}
