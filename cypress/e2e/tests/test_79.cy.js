
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=e8ee89c3-4ee5-4221-a3ed-82a0ca72acc3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=e8ee89c3-4ee5-4221-a3ed-82a0ca72acc3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      