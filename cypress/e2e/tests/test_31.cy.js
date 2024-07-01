
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=709961f8-bcac-4b4f-90ea-e8abcf44ba0e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=709961f8-bcac-4b4f-90ea-e8abcf44ba0e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      