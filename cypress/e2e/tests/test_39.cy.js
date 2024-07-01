
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9bde267e-5c3e-41fe-83f9-77b9f5c42cad&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9bde267e-5c3e-41fe-83f9-77b9f5c42cad&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      