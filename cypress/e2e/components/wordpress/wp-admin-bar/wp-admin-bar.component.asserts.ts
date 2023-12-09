import { wpAdminBarSelectors } from './wp-admin-bar.component.selectors';

export class WpAdminBarAsserts {
    verifyAdminPanelUserName(userName: string | undefined): void {
        cy.get(wpAdminBarSelectors.adminBarTopSecondary.userName).should('contain.text', userName);
    }
}
