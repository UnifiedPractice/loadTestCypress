
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=285f0ec5-53de-4324-9b23-170794a671db&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=285f0ec5-53de-4324-9b23-170794a671db&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      