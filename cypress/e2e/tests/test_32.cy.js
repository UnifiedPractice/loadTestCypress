
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=229b9501-96e9-4a2d-95e7-a16abd12f4b5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=229b9501-96e9-4a2d-95e7-a16abd12f4b5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      