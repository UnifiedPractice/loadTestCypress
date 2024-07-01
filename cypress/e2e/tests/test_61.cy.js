
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=b21b52a3-4f8a-4f5e-ae1c-32792b5d06ca&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=b21b52a3-4f8a-4f5e-ae1c-32792b5d06ca&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      