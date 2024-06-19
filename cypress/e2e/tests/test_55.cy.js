
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=94d5a68e-d63d-463f-bd28-3b6cd8b5a606&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=94d5a68e-d63d-463f-bd28-3b6cd8b5a606&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      