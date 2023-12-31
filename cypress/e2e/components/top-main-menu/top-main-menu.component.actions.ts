import { topMainMenuSelectors } from '.';

export class TopMainMenuActions {
    chooseAndClickMainMenuNavItem(itemName: string): void {
        cy.get(topMainMenuSelectors.logo).click();
        cy.get(topMainMenuSelectors.nav.items).contains(itemName).click({ force: true });
    }
}
