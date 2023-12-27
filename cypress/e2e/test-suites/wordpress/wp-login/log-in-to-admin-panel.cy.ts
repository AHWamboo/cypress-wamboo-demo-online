import {
    WP_LOG_IN_PAGE_URL,
    WpLoginActions,
    WpLoginAsserts,
} from '../../../pages/wordpress/wp-login';
import { WP_ADMIN, WP_ADMIN_PASSWORD, WP_USER1, WP_USER1_PASSWORD } from '../../../../.config';
import { WpAdminBarAsserts } from '../../../components/wordpress/wp-admin-bar';

const wpLoginActions: WpLoginActions = new WpLoginActions();
const wpLoginAsserts: WpLoginAsserts = new WpLoginAsserts();
const wpAdminBarAsserts: WpAdminBarAsserts = new WpAdminBarAsserts();

describe('Wordpress log in website - user log in options', () => {
    beforeEach(() => {
        cy.visit(WP_LOG_IN_PAGE_URL);
    });

    it('User can log in using the wordpress login form', () => {
        wpLoginActions.logIn(WP_ADMIN, WP_ADMIN_PASSWORD);
        wpAdminBarAsserts.verifyAdminPanelHelpLinkExists();
    });

    it('User can not log in using wordpress login form, the wrong user should display the correct error label.', () => {
        wpLoginActions.logIn(WP_USER1, WP_USER1_PASSWORD);
        wpLoginAsserts.verifyLoginErrorLabel(WP_USER1);
    });
});
