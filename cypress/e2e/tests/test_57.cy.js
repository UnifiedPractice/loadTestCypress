
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8a0b256e-0493-42c3-a75f-8c4e44f08798&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8a0b256e-0493-42c3-a75f-8c4e44f08798&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      