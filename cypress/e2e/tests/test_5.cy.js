
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=5f320a3c-05b5-426b-918b-266b5057ec8e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=5f320a3c-05b5-426b-918b-266b5057ec8e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      