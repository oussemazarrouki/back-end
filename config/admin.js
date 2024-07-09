module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fZ681tf4h0I9DOKifW8gYg=='), // Replace with your generated secret
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'tJkokwEliSS6AaHAC1zDgg=='), // Replace with your generated salt
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
