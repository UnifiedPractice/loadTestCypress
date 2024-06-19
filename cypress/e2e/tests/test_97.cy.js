
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=eb9e6fa6-6adb-4083-a71c-55d293580721&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=eb9e6fa6-6adb-4083-a71c-55d293580721&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      