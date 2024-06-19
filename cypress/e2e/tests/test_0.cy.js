
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=7df0e939-fbff-4985-8269-bb6d439a6ece&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=7df0e939-fbff-4985-8269-bb6d439a6ece&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      