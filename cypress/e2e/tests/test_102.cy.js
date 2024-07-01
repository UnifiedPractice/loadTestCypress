
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=74aac0a1-0305-4634-ba1f-c9eb30821a1b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=74aac0a1-0305-4634-ba1f-c9eb30821a1b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      