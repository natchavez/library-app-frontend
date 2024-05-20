export const oktaConfig = {
  clientId: '0oah77oubydBmK4e65d7',
  issuer: 'https://dev-14523873.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: true,
};
