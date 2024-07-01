
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d5407b31-2549-41c5-9163-636bf3642916&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d5407b31-2549-41c5-9163-636bf3642916&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      