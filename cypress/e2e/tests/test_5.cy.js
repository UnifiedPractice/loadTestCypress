
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a83fbc16-28e3-46a3-9c0b-ef402f0c35b3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a83fbc16-28e3-46a3-9c0b-ef402f0c35b3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      