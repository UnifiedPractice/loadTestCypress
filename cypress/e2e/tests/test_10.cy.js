
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=87bde92e-7b5c-47bb-b692-3c8bf0e60c04&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=87bde92e-7b5c-47bb-b692-3c8bf0e60c04&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      