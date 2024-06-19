
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=229d5e66-b071-4003-8a0b-d1097bfe00e9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=229d5e66-b071-4003-8a0b-d1097bfe00e9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      