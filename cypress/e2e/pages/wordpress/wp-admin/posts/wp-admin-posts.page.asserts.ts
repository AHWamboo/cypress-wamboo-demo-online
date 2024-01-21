import { wpAdminPostsPageSelectors } from './wp-admin-posts.page.selectors';

export class WpAdminPostsPageAsserts {
    verifyIfPostExists(postName: string): void {
        cy.get(wpAdminPostsPageSelectors.postsTable.columnTitle).should('have.text', postName);
    }
}
