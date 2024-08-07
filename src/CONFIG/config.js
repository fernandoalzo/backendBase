require("dotenv").config();

const config = {
  // database config
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,

  // app config
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRES_MINUTES,

  // temporalities config
  temporalities: {
    // Diario
    temp1: process.env.TEMP1,
    // Semanal
    temp2: process.env.TEMP2,
    // Quincenal
    temp3: process.env.TEMP3,
    // Mensual
    temp4: process.env.TEMP4,
  },
  userRoles: {
    // Admin
    role1: process.env.ROLE1,
    // User
    role2: process.env.ROLE2,
  },
  userStatus: {
    // activo
    status1: true,
    // Bloqueado
    status2: false,
  },
  paymentStatus: {
    // Pendiente
    status1: process.env.PAYMENT_STATUS1,
    // Cerrado
    status2: process.env.PAYMENT_STATUS2,
    // Atrasado
    status3: process.env.PAYMENT_STATUS3,
    // Abonado
    status4: process.env.PAYMENT_STATUS4,
  },
  creditStatus: {
    // Abierto
    status1: process.env.CREDIT_STATUS1,
    // Cerrado
    status2: process.env.CREDIT_STATUS2,
    // Mora
    status3: process.env.CREDIT_STATUS3,
    // Cancelado
    status4: process.env.CREDIT_STATUS4,
  },
  userAdmin: {
    username: process.env.ADMIN_NAME,
    documentId: process.env.DOCUMENT_ID,
    email: process.env.EMAIL,
    phone: process.env.PHONE,
    address: process.env.ADDRESS,
    password: process.env.PASSWORD,
    enabled: process.env.ENABLED,
    reputation: process.env.REPUTATION,
    verified: process.env.VERIFIED,
  },
};

module.exports = { config };
