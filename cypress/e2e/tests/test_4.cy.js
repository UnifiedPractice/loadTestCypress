
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=74fcee31-1b87-487a-b8f5-41a68fc46e97&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=74fcee31-1b87-487a-b8f5-41a68fc46e97&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      