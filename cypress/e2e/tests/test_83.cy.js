
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4f629788-d9d0-49cb-afc0-aa2e55438f44&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4f629788-d9d0-49cb-afc0-aa2e55438f44&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      