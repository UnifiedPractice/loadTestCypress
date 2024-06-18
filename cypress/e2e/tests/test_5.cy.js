
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=35204d45-799b-473e-a399-c96c9e674d0b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=35204d45-799b-473e-a399-c96c9e674d0b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      