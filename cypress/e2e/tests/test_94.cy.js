
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=24d0737f-69de-423f-8500-6d0ee8a7a485&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=24d0737f-69de-423f-8500-6d0ee8a7a485&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      