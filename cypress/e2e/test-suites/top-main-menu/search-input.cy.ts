import { topMainMenuSelectors } from '../../components/top-main-menu';

describe('Search input field located in the top main menu - default behavior', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('The loupe glass icon, when pressed, should display the input field along with the X icon and placeholder', () => {
        cy.get(topMainMenuSelectors.search.loupeIcon).click({ force: true });
        cy.get(topMainMenuSelectors.search.inputField).should('be.visible');
        cy.get(topMainMenuSelectors.search.inputField).should('have.attr', 'placeholder', 'Search …');
        cy.get(topMainMenuSelectors.search.inputField).should('have.focus');
        cy.get(topMainMenuSelectors.search.xCloseIcon).should('exist');
    });

    it('The search should return the correct post', () => {
        cy.get(topMainMenuSelectors.search.loupeIcon).click({ force: true });
        cy.get(topMainMenuSelectors.search.inputField).type('e2e post{enter}');
    });
});
