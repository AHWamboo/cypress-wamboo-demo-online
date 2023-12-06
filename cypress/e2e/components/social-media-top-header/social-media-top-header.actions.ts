export class SocialMediaTopHeaderActions {
    clickSocialMediaIcon(selector: string): void {
        cy.get(selector).click();
    }
}
