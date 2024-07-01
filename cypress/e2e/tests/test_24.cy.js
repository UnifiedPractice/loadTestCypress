
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=fcc24a20-7fdc-4c76-a839-b04cbfe5a37d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=fcc24a20-7fdc-4c76-a839-b04cbfe5a37d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      