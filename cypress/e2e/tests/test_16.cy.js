
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=62a9a311-9409-4ead-b0d3-be6b67e7bbb3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=62a9a311-9409-4ead-b0d3-be6b67e7bbb3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      