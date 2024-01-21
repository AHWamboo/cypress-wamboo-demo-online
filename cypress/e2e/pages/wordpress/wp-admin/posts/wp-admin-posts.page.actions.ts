import { wpAdminPostsPageSelectors } from './wp-admin-posts.page.selectors';

export class WpAdminPostsPageActions {
    searchForPost(postName: string): void {
        cy.get(wpAdminPostsPageSelectors.searchPostsInput).type(postName);
        cy.get(wpAdminPostsPageSelectors.searchPostSubmitButton).click();
    }
}
