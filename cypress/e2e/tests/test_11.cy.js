
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6493af33-c16b-4898-9997-378f31ec11b6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6493af33-c16b-4898-9997-378f31ec11b6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      