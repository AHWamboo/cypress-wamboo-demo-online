import { SocialMediaTopHeaderAsserts } from '../../components/social-media-top-header/social-media-top-header.asserts';

const socialMediaTopHeaderAsserts: SocialMediaTopHeaderAsserts = new SocialMediaTopHeaderAsserts();

describe('Top header social media website elements, phone number and email address', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('The top header should include social media icons, phone number and email address', () => {
        socialMediaTopHeaderAsserts.verifyIfSocialMediaAndContactElementsExist();
    });

    it('The top header should include social media icons, phone number and email address', () => {
        socialMediaTopHeaderAsserts.verifyPhoneNumberValue();
        socialMediaTopHeaderAsserts.verifyEmailAddressValue();
    });

    it('Facebook Social media icons should redirect to social media account', () => {
        socialMediaTopHeaderAsserts.verifyFacebookSocialAccountAccess();
    });

    it('X Social media icons should redirect to social media account', () => {
        socialMediaTopHeaderAsserts.verifyXSocialAccountAccess();
    });

    it('Instagram Social media icons should redirect to social media account', () => {
        socialMediaTopHeaderAsserts.verifyInstagramSocialAccountAccess();
    });
});
