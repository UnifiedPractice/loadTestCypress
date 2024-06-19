
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9e534924-584b-4722-9382-2c54381e713d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9e534924-584b-4722-9382-2c54381e713d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      