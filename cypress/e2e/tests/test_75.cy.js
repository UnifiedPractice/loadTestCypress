
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f313051c-91cc-4dcf-8e06-670da712e7b5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f313051c-91cc-4dcf-8e06-670da712e7b5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      