// Page Object Model
class WelcomePage {
  constructor() {
    this.signUpButton = element(by.css('.hero-descriptor_btn'));
    this.signInButton = element(by.css('.sign-in'));
  }

  loginWithCredentials(username, password) {
    this.signInButton.click();
    // enter username and password
    // click login button
    // ...
  }
}

test('signup bytton should be visible and enabled', () => {
  const welcomePage = new WelcomePage();

  expect(welcomePage.signUpButton.isDisplayed()).toBe(true);
  expect(welcomePage.signUpButton.isEnabled()).toBe(true);
});

test('login with credentials', () => {
  const welcomePage = new WelcomePage();

  welcomePage.loginWithCredentials('username', 'password');
  expect(browser.getCurrentUrl()).toContain('dashboard');
});
