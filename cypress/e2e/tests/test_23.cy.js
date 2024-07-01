
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=52c45b34-9ab4-497e-aacb-728ce99fbe65&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=52c45b34-9ab4-497e-aacb-728ce99fbe65&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      