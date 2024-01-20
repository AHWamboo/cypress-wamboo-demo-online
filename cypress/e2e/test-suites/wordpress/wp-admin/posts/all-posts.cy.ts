import { WP_ADMIN, WP_ADMIN_PASSWORD } from '../../../../../.config';
import { LEFT_MENU, WpAdminLeftMenuActions } from '../../../../components/wordpress/wp-admin-left-menu';
import { WP_LOG_IN_PAGE_URL, WpLoginActions } from '../../../../pages/wordpress/wp-login';

const wpLoginActions: WpLoginActions = new WpLoginActions();
const wpAdminLeftMenuActions: WpAdminLeftMenuActions = new WpAdminLeftMenuActions();

describe('Wp admin panel - all posts page - verification of the operation of the basic functionalities', () => {
    beforeEach(() => {
        cy.visit(WP_LOG_IN_PAGE_URL);
        wpLoginActions.logIn(WP_ADMIN, WP_ADMIN_PASSWORD);
    });

    it('Open the all posts page and look for a specific post in it', () => {
        wpAdminLeftMenuActions.chooseAndClickMenuPosition(LEFT_MENU.POSTS.ALL_POSTS);
    });
});
