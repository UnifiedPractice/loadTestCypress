
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=c6e34414-4dfc-4161-bead-c97bd89d0aaa&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=c6e34414-4dfc-4161-bead-c97bd89d0aaa&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      