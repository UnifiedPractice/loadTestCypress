
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9f173387-bc1b-48bf-8957-2f9b5cc42ca4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9f173387-bc1b-48bf-8957-2f9b5cc42ca4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      