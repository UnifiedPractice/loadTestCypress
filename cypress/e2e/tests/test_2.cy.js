
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=b0764181-1074-4d2d-8f27-236cd0d46e8f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=b0764181-1074-4d2d-8f27-236cd0d46e8f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      