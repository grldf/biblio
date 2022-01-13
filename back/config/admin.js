module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4aec9b563234e5ef677b499d91824536'),
  },
});
