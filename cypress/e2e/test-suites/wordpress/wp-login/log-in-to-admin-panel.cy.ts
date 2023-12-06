import { WP_LOG_IN_PAGE_URL, WpLoginActions } from '../../../pages/wordpress/wp-login';

const wpLoginActions: WpLoginActions = new WpLoginActions();

describe('Wordpress log in website - user log in options', () => {
    beforeEach(() => {
        cy.visit(WP_LOG_IN_PAGE_URL);
    });

    it('User can log in using the wordpress login form', () => {
        wpLoginActions.logIn();
    });

    it('User can not log in using wordpress login form, the wrong user should display the correct error label.', () => {
        wpLoginActions.logIn();
    });
});
