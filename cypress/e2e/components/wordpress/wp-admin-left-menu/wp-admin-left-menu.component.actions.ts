import { wpAdminLeftMenuSelectors } from './wp-admin-left-menu.component.selectors';

export class WpAdminLeftMenuActions {
    /** @menuPositionName {string} It must be defined with the division between the menu item as '|', example 'Posts|All Posts' */
    chooseAndClickMenuPosition(menuPositionName: string): void {
        const links: string[] = menuPositionName.split('|');
        cy.get(wpAdminLeftMenuSelectors.menu.mainLink).contains(links[0]).click();
        cy.get(wpAdminLeftMenuSelectors.menu.submenuLink).contains(links[1]).click();
    }
}
