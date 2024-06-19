
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=55488c68-3c6c-4948-be44-0f91807c598d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=55488c68-3c6c-4948-be44-0f91807c598d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      