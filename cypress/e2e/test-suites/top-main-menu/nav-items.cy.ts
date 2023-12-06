import { TopMainMenuAsserts } from '../../components/top-main-menu';

const topMainMenuAsserts: TopMainMenuAsserts = new TopMainMenuAsserts();

describe('Navigation elements of the top main menu - default behavior', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('The top main menu should contain the appropriate number of items and their names', () => {
        topMainMenuAsserts.verifyNavItemsLength();
        topMainMenuAsserts.verifyNavItemsNames();
    });

    it('Each top main menu item should redirect to the page of your choice when you click on it', () => {
        topMainMenuAsserts.verifyUrlPath();
    });
});
