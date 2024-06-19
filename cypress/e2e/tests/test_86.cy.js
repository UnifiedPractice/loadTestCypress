
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=bf942b18-1f9c-45e6-90e8-4cd51dc35455&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=bf942b18-1f9c-45e6-90e8-4cd51dc35455&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      