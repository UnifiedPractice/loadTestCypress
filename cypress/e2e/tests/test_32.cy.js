
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=841c298f-c460-426b-91fe-936a8384ab3b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=841c298f-c460-426b-91fe-936a8384ab3b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      