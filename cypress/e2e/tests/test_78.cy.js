
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f4e446d4-dbf1-4d43-8e30-136b8125cd92&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f4e446d4-dbf1-4d43-8e30-136b8125cd92&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      