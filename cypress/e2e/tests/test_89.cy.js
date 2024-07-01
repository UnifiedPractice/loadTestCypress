
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4fde9074-0ad3-4fef-8ca3-87f8866f35af&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4fde9074-0ad3-4fef-8ca3-87f8866f35af&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      