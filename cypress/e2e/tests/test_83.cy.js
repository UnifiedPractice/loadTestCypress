
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ede11f7f-c253-48db-91b2-1bfabc5a85cd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ede11f7f-c253-48db-91b2-1bfabc5a85cd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      