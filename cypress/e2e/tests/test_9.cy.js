
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=b58d5788-29e5-402b-9ce5-b65f934fb2a2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=b58d5788-29e5-402b-9ce5-b65f934fb2a2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      