
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=7e019eef-e1ae-4be8-b7d9-233ce0bc2663&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=7e019eef-e1ae-4be8-b7d9-233ce0bc2663&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      