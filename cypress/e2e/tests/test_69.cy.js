
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a9f50bf1-f2f0-45d6-b958-34ea322d6c87&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a9f50bf1-f2f0-45d6-b958-34ea322d6c87&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      