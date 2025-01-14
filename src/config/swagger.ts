const swaggerDefinition: any = {
    openapi: '3.0.0',
    info: {
      title: 'API de Pagamentos',
      version: '1.0.0',
      description: 'Documentação interativa para a API de pagamentos.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  };
  