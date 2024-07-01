
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=1f435acf-3569-40ea-8729-9d1ccf12bc8a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=1f435acf-3569-40ea-8729-9d1ccf12bc8a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      