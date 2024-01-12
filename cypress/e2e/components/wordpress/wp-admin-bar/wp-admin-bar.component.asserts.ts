import { wpAdminBarSelectors } from './wp-admin-bar.component.selectors';

export class WpAdminBarAsserts {
    verifyAdminPanelHelpLinkExists(): void {
        cy.get(wpAdminBarSelectors.adminPanelHelpLink, { timeout: 10000 }).should('exist').should('be.visible');
    }
}
