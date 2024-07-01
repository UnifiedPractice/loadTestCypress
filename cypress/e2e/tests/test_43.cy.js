
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0d27d77f-f480-4144-9ed8-cc33100805d8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0d27d77f-f480-4144-9ed8-cc33100805d8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      