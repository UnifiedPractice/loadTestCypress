
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d36e8ab8-c562-4837-be7c-44c459ac1d3c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d36e8ab8-c562-4837-be7c-44c459ac1d3c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      