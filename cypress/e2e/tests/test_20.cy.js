
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=840f1b9f-7f7f-488a-87e3-fc5a98c2daa3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=840f1b9f-7f7f-488a-87e3-fc5a98c2daa3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      