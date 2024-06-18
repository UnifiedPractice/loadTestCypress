
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f9bd3f05-b47b-4330-80c0-fb7a9e7960ae&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f9bd3f05-b47b-4330-80c0-fb7a9e7960ae&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      