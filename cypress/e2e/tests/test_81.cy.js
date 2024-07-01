
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=72dccb84-991d-47bf-85bd-6efa5529a97f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=72dccb84-991d-47bf-85bd-6efa5529a97f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      