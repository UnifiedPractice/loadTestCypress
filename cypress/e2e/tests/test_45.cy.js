
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4d682af9-bb15-4983-be4b-8b8fccd0fe71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4d682af9-bb15-4983-be4b-8b8fccd0fe71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      