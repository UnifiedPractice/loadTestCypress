
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4a549a31-c83a-4695-8eb3-44335ee1e88c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4a549a31-c83a-4695-8eb3-44335ee1e88c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      