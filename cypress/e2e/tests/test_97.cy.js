
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9f8f2838-5b83-4cf5-a21b-aa5c4cacf413&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9f8f2838-5b83-4cf5-a21b-aa5c4cacf413&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      