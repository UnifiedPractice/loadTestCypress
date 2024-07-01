
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=df2bc17a-1450-484b-af3a-b41d976350f6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=df2bc17a-1450-484b-af3a-b41d976350f6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      