
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9f62af9a-cda7-4944-a6ca-3bc53b308a84&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9f62af9a-cda7-4944-a6ca-3bc53b308a84&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      