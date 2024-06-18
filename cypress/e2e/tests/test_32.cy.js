
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=caf2f967-49fe-492c-8882-542759b9522a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=caf2f967-49fe-492c-8882-542759b9522a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      