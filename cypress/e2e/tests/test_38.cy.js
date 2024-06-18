
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=89690a7e-1382-484b-a4c2-050d778808c4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=89690a7e-1382-484b-a4c2-050d778808c4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      