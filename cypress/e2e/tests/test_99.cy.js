
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a5fddca7-e318-43ef-87e6-171addeedea5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a5fddca7-e318-43ef-87e6-171addeedea5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      