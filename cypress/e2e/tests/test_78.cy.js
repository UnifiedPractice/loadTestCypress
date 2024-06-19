
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f5a8018a-fe0f-4ef3-bdf5-31c6f323c858&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f5a8018a-fe0f-4ef3-bdf5-31c6f323c858&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      