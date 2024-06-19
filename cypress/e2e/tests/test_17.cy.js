
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=986ddc71-dd1f-4581-99f3-1d0e972ac8bc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=986ddc71-dd1f-4581-99f3-1d0e972ac8bc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      