
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d1d7761d-0a02-428f-9024-567a31efa3ed&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d1d7761d-0a02-428f-9024-567a31efa3ed&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      