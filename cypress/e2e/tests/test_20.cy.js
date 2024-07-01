
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0af867ae-8564-42dd-8093-1ce5eb571fce&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0af867ae-8564-42dd-8093-1ce5eb571fce&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      