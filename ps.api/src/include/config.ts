export default {
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRETKEY || '89312212-099a-45a8-952f-588cc342aee7',
    publicRoutes: process.env.PUBLICROUTES || [
        'users',
        'auth'
      ]
}