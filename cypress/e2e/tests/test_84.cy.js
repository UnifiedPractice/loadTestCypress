
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ed11bf33-c68d-470e-8a41-a1fd95359507&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ed11bf33-c68d-470e-8a41-a1fd95359507&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      