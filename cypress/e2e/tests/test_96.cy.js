
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=cd20333d-90c6-413c-8bb8-ce9be85bf9ef&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=cd20333d-90c6-413c-8bb8-ce9be85bf9ef&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      