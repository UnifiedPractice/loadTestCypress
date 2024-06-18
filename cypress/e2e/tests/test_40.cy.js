
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9d68c7ed-de4b-48c7-9f0c-d0c7963a2252&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9d68c7ed-de4b-48c7-9f0c-d0c7963a2252&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      