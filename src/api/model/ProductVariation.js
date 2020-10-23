/**
 * OpenAPI citypizza
 * This is sionic server
 *
 * The version of the OpenAPI document: 2.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Attribute from './Attribute';
import Ingredient from './Ingredient';

/**
 * The ProductVariation model module.
 * @module model/ProductVariation
 * @version 2.0.1
 */
class ProductVariation {
    /**
     * Constructs a new <code>ProductVariation</code>.
     * null
     * @alias module:model/ProductVariation
     * @param id {Number} 
     * @param price {Number} 
     * @param weight {String} 
     * @param attributes {Array.<module:model/Attribute>} 
     */
    constructor(id, price, weight, attributes) { 
        
        ProductVariation.initialize(this, id, price, weight, attributes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, price, weight, attributes) { 
        obj['id'] = id;
        obj['price'] = price;
        obj['weight'] = weight;
        obj['attributes'] = attributes;
    }

    /**
     * Constructs a <code>ProductVariation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductVariation} obj Optional instance to populate.
     * @return {module:model/ProductVariation} The populated <code>ProductVariation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Attribute]);
            }
            if (data.hasOwnProperty('ingredients')) {
                obj['ingredients'] = ApiClient.convertToType(data['ingredients'], [Ingredient]);
            }
            if (data.hasOwnProperty('ingredients_max_qty')) {
                obj['ingredients_max_qty'] = ApiClient.convertToType(data['ingredients_max_qty'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProductVariation.prototype['id'] = undefined;

/**
 * @member {Number} price
 */
ProductVariation.prototype['price'] = undefined;

/**
 * @member {String} weight
 */
ProductVariation.prototype['weight'] = undefined;

/**
 * @member {Array.<module:model/Attribute>} attributes
 */
ProductVariation.prototype['attributes'] = undefined;

/**
 * Поле заполняется только в запросе полной информации о продукте
 * @member {Array.<module:model/Ingredient>} ingredients
 */
ProductVariation.prototype['ingredients'] = undefined;

/**
 * Максимальное кол-во ингредиентов
 * @member {Number} ingredients_max_qty
 */
ProductVariation.prototype['ingredients_max_qty'] = undefined;






export default ProductVariation;

