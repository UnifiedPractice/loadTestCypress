
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0779de15-3832-4ea6-a7e6-fdff8ccaf359&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0779de15-3832-4ea6-a7e6-fdff8ccaf359&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      