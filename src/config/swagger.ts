const swaggerDefinition = {
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
  paths: {
    '/create-payment': {
      post: {
        summary: 'Criar um novo pagamento',
        description: 'Cria um novo pagamento no sistema',
        operationId: 'createPayment',
        tags: ['Pagamento'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'number',
                    format: 'float',
                    description: 'O valor do pagamento',
                  },
                  currency: {
                    type: 'string',
                    description: 'A moeda do pagamento (ex: USD)',
                  },
                  userId: {
                    type: 'integer',
                    description: 'ID do usuário associado ao pagamento',
                  },
                },
                required: ['amount', 'currency', 'userId'],
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Pagamento criado com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'ID do pagamento',
                    },
                    amount: {
                      type: 'number',
                      format: 'float',
                      description: 'Valor do pagamento',
                    },
                    currency: {
                      type: 'string',
                      description: 'Moeda do pagamento',
                    },
                    status: {
                      type: 'string',
                      description: 'Status do pagamento',
                    },
                    userId: {
                      type: 'integer',
                      description: 'ID do usuário associado ao pagamento',
                    },
                  },
                  example: {
                    id: 'pi_1HX2Wn2eZvKYlo2CFE6aLzDx',
                    amount: 100.0,
                    currency: 'usd',
                    status: 'succeeded',
                    userId: 1,
                  },
                },
              },
            },
          },
          500: {
            description: 'Erro interno no servidor',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Mensagem de erro',
                    },
                  },
                  example: {
                    message: 'Erro interno no servidor.',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/payment-status/{id}': {
      get: {
        summary: 'Obter status do pagamento',
        description: 'Retorna o status de um pagamento baseado no ID',
        operationId: 'getPaymentStatus',
        tags: ['Pagamento'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID do pagamento',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Status do pagamento obtido com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    status: { type: 'string' },
                  },
                  example: {
                    id: 'pi_1HX2Wn2eZvKYlo2CFE6aLzDx',
                    status: 'succeeded',
                  },
                },
              },
            },
          },
          404: {
            description: 'Pagamento não encontrado',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                  example: {
                    message: 'Pagamento não encontrado.',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/auth/login': {
      post: {
        summary: 'Realizar login',
        description: 'Autentica um usuário e retorna um token JWT para acessar a API',
        operationId: 'loginUser',
        tags: ['Autenticação'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    description: 'Email ou nome de usuário do usuário',
                  },
                  password: {
                    type: 'string',
                    description: 'Senha do usuário',
                  },
                },
                required: ['username', 'password'],
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Login realizado com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    token: {
                      type: 'string',
                      description: 'Token JWT para autenticação do usuário',
                    },
                  },
                  example: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidGVzdGVAY29tLmJyIiwiaWF0IjoxNjE2OTg0NzQyfQ.I1mXYdc7WJxf3sxdq8uqXZj34cQddVj5_ykxWJztgaI',
                  },
                },
              },
            },
          },
          400: {
            description: 'Erro de autenticação (usuário ou senha incorretos)',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                  example: {
                    message: 'Credenciais inválidas.',
                  },
                },
              },
            },
          },
          500: {
            description: 'Erro interno no servidor',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                  example: {
                    message: 'Erro interno no servidor.',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default swaggerDefinition;
