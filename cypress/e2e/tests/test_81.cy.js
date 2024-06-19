
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=5c4642db-1fda-4e9b-9cb7-debde4a161e9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=5c4642db-1fda-4e9b-9cb7-debde4a161e9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      