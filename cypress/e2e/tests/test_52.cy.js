
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f33774ae-92bb-4e4e-8e83-a90e5c678fcf&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f33774ae-92bb-4e4e-8e83-a90e5c678fcf&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      