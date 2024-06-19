
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=79a6e880-270a-42ff-ab2d-e96786a5ce02&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=79a6e880-270a-42ff-ab2d-e96786a5ce02&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      