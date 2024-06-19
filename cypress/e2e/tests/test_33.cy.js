
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8102705b-7c09-4902-8cb9-a54dde20605a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8102705b-7c09-4902-8cb9-a54dde20605a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      