
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=302dc410-abbf-41fb-9e3b-0fc7c08e175d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=302dc410-abbf-41fb-9e3b-0fc7c08e175d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      