import swaggerJSDoc from 'swagger-jsdoc'
import type { SwaggerUiOptions } from 'swagger-ui-express'

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi : '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations realted to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    }, 
    apis: ['./src/router.ts']
}
const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
      customCss : `
          .topbar-wrapper  .link {
             content: url('https://www.rollingstone.com/wp-content/uploads/2021/05/R1352_FEA_BTS_A_Opener.jpg?w=1600&h=900&crop=1');
             height: auto;
             width: auto;
          }
             .swagger-ui .topbar {
                background-color: purple;
             }
      `,
      customSiteTitle: 'Documentacion REST API Express / TypeScript'

}

export default swaggerSpec
export {
    swaggerUiOptions
}