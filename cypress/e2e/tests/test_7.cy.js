
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a267d414-041f-4ea3-b615-6294af8393b3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a267d414-041f-4ea3-b615-6294af8393b3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      