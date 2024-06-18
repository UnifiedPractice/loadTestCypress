
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d950bd73-60bf-451c-a6c1-1bb34dbdbf81&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d950bd73-60bf-451c-a6c1-1bb34dbdbf81&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      