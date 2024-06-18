
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ef420ff1-be0b-4961-a170-66f697bc6110&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ef420ff1-be0b-4961-a170-66f697bc6110&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      