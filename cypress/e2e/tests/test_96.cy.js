
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=832d04b8-c9c2-4ff9-8394-2041ecf8bed5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=832d04b8-c9c2-4ff9-8394-2041ecf8bed5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      