
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d6527abb-b822-49d8-a7ba-055c145b3034&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d6527abb-b822-49d8-a7ba-055c145b3034&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      