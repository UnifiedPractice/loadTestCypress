
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=63db0eb8-8705-4623-b35b-0c9ced71ac7e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=63db0eb8-8705-4623-b35b-0c9ced71ac7e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      