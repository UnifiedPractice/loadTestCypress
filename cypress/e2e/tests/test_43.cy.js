
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=654ba95a-3cc4-4e8c-8e72-6b8c99c91e1b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=654ba95a-3cc4-4e8c-8e72-6b8c99c91e1b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      