export const environment = {
  production: false,
  useMockLogin: true, // Cambiar a false para usar Helipagos
  apiUrl: '/api',
  authToken: 'access_token',
  helipagos: {
    login: 'https://sandbox-be.helipagos.com/api/auth/login'
  },
  apiEndpoints: {
    login: '/auth/login',
    people: '/people/',
    planets: '/planets/',
    starships: '/starships/'
  }
};
