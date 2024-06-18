
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d8925444-8828-43f8-b2d8-19c67097cb55&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d8925444-8828-43f8-b2d8-19c67097cb55&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      