import { wpAdminBarSelectors } from './wp-admin-bar.component.selectors';

export class WpAdminBarAsserts {
    verifyAdminPanelHelpLinkExists(): void {
        cy.get(wpAdminBarSelectors.adminPanelHelpLink).should('exist');
    }
}
