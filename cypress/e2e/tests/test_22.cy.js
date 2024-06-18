
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=2b2bede6-66c0-4d88-9a30-fa6948ed12a8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=2b2bede6-66c0-4d88-9a30-fa6948ed12a8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      