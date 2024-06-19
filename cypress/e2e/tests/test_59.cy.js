
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ca2342c1-3fd4-4dd2-87da-4ca4888c1648&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ca2342c1-3fd4-4dd2-87da-4ca4888c1648&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      