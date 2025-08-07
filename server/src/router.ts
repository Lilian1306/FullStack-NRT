import { Router } from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateAvailability, updateProduct } from './handlers/product'
import { body, param } from 'express-validator'
import { handleInputErrors } from './middleware'

const router = Router()

/**
 *  @swagger
 * components:
 *     schemas:  
 *       Product: 
 *            type: object
 *            properties:
 *                  id: 
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
 *                  name: 
 *                      type: string
 *                      descriptions: The Product name
 *                      example: Monitor Curvo de 49 pulgadas
 *                  price:
 *                      type: number
 *                      description: The product Price
 *                      exammple: 300
 *                  availability: 
 *                      type: boolean
 *                      description: The Product availability
 *                      example: true
 */

/**
 * @swagger
 * /api/products:
 *      get: 
 *          summary: Geet a alist of products
 *          tags: 
 *              - Products 
 *          descritption: Return a list of products
 *          responses:
 *              200: 
 *                  description: Successful response
 *                  content: 
 *                      application/json:
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                $ref: '#/components/schemas/Product'
 */



//Routing
router.get('/', getProduct )

/**
 * @swagger
 * /api/products/{id}:
 *      get:
 *          summary: Get a product by ID
 *          tags: 
 *              - Products
 *          description: Return a product based on its unique ID    
 *          parameters: 
 *            - in: path
 *              name: id
 *              description: The ID of the product to retrieve 
 *              required: true
 *              schema: 
 *                  type: integer
 *          responses: 
 *              200:
 *                  description: Successful Response
 *                  content: 
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Product'
 *              404: 
 *                  description: Not Found
 *              400: 
 *                  description: Bad Request - Invalid ID
 */


router.get('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    getProductById
)

/**
 * @swagger
 * /api/products: 
 *    post: 
 *      summary: Creates a new Product
 *      tags: 
 *          - Products
 *      description: Returns a new record in the database
 *      requestBody: 
 *          required: true
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      properties: 
 *                          name: 
 *                              type: string
 *                              example: "Monitor curvo 49 pulgadas"
 *                          price: 
 *                              type: numbeer
 *                              example: 399
 *      responses: 
 *          201:
 *              description: Successfuly Response
 *              content:
 *                  application/json:
 *                         schema:
 *                          $ref: '#/components/schemas/Product'
 * 
 *          400: 
 *              description: Bad Request - invalid input data
 */

router.post('/', 
    //validaciond
    body('name')
        .notEmpty().withMessage('EL nombre del producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El precio de producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no valido'),
        handleInputErrors,
    createProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *  put: 
 *      summary: Updates a product with user input
 *      tags:
 *          - Product   
 *      description: Return the updated product
 *      parameters: 
 *          - in: path
 *            name: id
 *            description: The ID of the product to retrieve
 *            required: true
 *            schema: 
 *              type: integer
 *      requestBody:
 *            required: true
 *            content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      properties: 
 *                          name: 
 *                              type: string
 *                              example: "Monitor Curvo 49 pulgadas"
 *                          price: 
 *                              type: number
 *                              example: 399
 *                          availability: 
 *                              type: boolean
 *                              example: true
 *      responses: 
 *          200: 
 *              description: successfully response
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400: 
 *              description: Bad Request -  Invalid ID or Invalid input data
 *          404: 
 *              description: Product Not  Found
 */

router.put('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    body('name')
        .notEmpty().withMessage('EL nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('valor no valido')
        .notEmpty().withMessage('El precio de producto no puede ir vacio')
        .custom(value => value > 0).withMessage('El precio no valido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no valido'),
    handleInputErrors,
    updateProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *  patch: 
 *      summary: Update product availability
 *      tags: 
 *          - Products
 *      description: Returns the update availability
 *      parameters: 
 *          - in: path
 *            name: id
 *            description: The ID of the product to retrieve
 *            required: true
 *            schema: 
 *                 type: integer
 *      responses: 
 *          200: 
 *              description: Successful response
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Product'
 *          400: 
 *              description: Bad Request - Invalid ID
 *          404: 
 *              description: Product Not Found       
 *          
 */

router.patch('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    updateAvailability
)

/**
 * @swagger
 * /api/products/{id}:
 *  delete: 
 *      summary: Delete a product by a given ID
 *      tags: 
 *          - Products
 *      description: Returns a confirmation message
 *      parameters: 
 *          - in: path
 *            name: id
 *            description: The ID of the product to delete
 *            required: true
 *            schema: 
 *                 type: integer
 *      responses: 
 *          200: 
 *              description: Successful delete product
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: string
 *                          value: 'Producto Eliminado'
 *          400: 
 *              description: Bad Request - Invalid ID
 *          404: 
 *              description: Product Not Found       
 *          
 */

router.delete('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    deleteProduct
)

export default router