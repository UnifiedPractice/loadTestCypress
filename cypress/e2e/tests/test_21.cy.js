
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4e3bd75d-3ecd-4d80-80b0-9a06dcff4e41&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4e3bd75d-3ecd-4d80-80b0-9a06dcff4e41&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      