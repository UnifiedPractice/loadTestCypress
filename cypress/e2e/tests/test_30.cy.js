
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8ee6ed18-fce4-492f-8a75-b4f2c65fe6ac&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8ee6ed18-fce4-492f-8a75-b4f2c65fe6ac&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      