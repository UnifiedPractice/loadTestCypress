
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=70539ee3-5aa8-47be-85b5-eeda9ee2fa4a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=70539ee3-5aa8-47be-85b5-eeda9ee2fa4a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      