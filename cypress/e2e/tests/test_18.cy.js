
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=19a8c7d3-a496-442b-a9d2-527f8a7b0409&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=19a8c7d3-a496-442b-a9d2-527f8a7b0409&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      