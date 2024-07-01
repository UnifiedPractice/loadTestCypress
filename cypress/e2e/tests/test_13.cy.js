
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=54822025-b956-4434-abcb-7bc2a66b880b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=54822025-b956-4434-abcb-7bc2a66b880b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      