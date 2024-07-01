
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=b6a483d6-f9bc-4f3d-9186-de6aeea3b55b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=b6a483d6-f9bc-4f3d-9186-de6aeea3b55b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      