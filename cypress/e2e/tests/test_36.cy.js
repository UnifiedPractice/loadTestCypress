
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=db5c37ed-053d-46ce-b27e-f6a796e3eefe&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=db5c37ed-053d-46ce-b27e-f6a796e3eefe&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      