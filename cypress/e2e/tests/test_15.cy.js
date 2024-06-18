
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3b6bed86-5554-4634-9c29-c3b85c32c872&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3b6bed86-5554-4634-9c29-c3b85c32c872&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      