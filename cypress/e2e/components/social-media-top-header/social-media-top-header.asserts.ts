import { FACEBOOK, INSTAGRAM, TWITTER_X, socialMediaTopHeaderSelectors } from '.';
import { fixturesNames } from '../../../fixtures/fixtures-names';
import { SocialMediaTopHeaderActions } from './social-media-top-header.actions';

const socialMediaTopHeaderActions: SocialMediaTopHeaderActions = new SocialMediaTopHeaderActions();

export class SocialMediaTopHeaderAsserts {
    verifyIfSocialMediaAndContactElementsExist(): void {
        cy.get(socialMediaTopHeaderSelectors.phoneNumber).should('exist').and('be.visible');
        cy.get(socialMediaTopHeaderSelectors.emailAddress).should('exist').and('be.visible');
        cy.get(socialMediaTopHeaderSelectors.socialIcons.facebook).should('exist').and('be.visible');
        cy.get(socialMediaTopHeaderSelectors.socialIcons.x).should('exist').and('be.visible');
        cy.get(socialMediaTopHeaderSelectors.socialIcons.instagram).should('exist').and('be.visible');
        cy.get(socialMediaTopHeaderSelectors.socialIcons.rss).should('exist').and('be.visible');
    }

    verifyPhoneNumberValue(): void {
        cy.getFixtureData(fixturesNames.socialMediaTopHeader.phoneAndEmail).then((data: any) => {
            cy.get(socialMediaTopHeaderSelectors.phoneNumber).should('have.text', data.phone);
        });
    }

    verifyEmailAddressValue(): void {
        cy.getFixtureData(fixturesNames.socialMediaTopHeader.phoneAndEmail).then((data: any) => {
            cy.get(socialMediaTopHeaderSelectors.emailAddress).should('have.text', data.email);
        });
    }

    verifySocialAccountAccess(filePath: string, socialIconSelector: string, origin: string): void {
        cy.getFixtureData(filePath).then((profile: any) => {
            socialMediaTopHeaderActions.clickSocialMediaIcon(socialIconSelector);
            cy.origin(profile.socialMediaProfiles[origin], () => {
                cy.url().should('contain', origin);
            });
        });
    }

    verifyFacebookSocialAccountAccess(): void {
        this.verifySocialAccountAccess(
            fixturesNames.socialMediaTopHeader.socialMediaProfiles,
            socialMediaTopHeaderSelectors.socialIcons.facebook,
            FACEBOOK
        );
    }

    verifyXSocialAccountAccess(): void {
        this.verifySocialAccountAccess(
            fixturesNames.socialMediaTopHeader.socialMediaProfiles,
            socialMediaTopHeaderSelectors.socialIcons.x,
            TWITTER_X
        );
    }

    verifyInstagramSocialAccountAccess(): void {
        this.verifySocialAccountAccess(
            fixturesNames.socialMediaTopHeader.socialMediaProfiles,
            socialMediaTopHeaderSelectors.socialIcons.instagram,
            INSTAGRAM
        );
    }
}
