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

/**
 * The Ingredient model module.
 * @module model/Ingredient
 * @version 2.0.1
 */
class Ingredient {
    /**
     * Constructs a new <code>Ingredient</code>.
     * null
     * @alias module:model/Ingredient
     * @param id {Number} 
     * @param variationId {Number} Вариация ингредиента
     * @param name {String} 
     * @param price {Number} 
     */
    constructor(id, variationId, name, price) { 
        
        Ingredient.initialize(this, id, variationId, name, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, variationId, name, price) { 
        obj['id'] = id;
        obj['variation_id'] = variationId;
        obj['name'] = name;
        obj['price'] = price;
    }

    /**
     * Constructs a <code>Ingredient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ingredient} obj Optional instance to populate.
     * @return {module:model/Ingredient} The populated <code>Ingredient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ingredient();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('variation_id')) {
                obj['variation_id'] = ApiClient.convertToType(data['variation_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Ingredient.prototype['id'] = undefined;

/**
 * Вариация ингредиента
 * @member {Number} variation_id
 */
Ingredient.prototype['variation_id'] = undefined;

/**
 * @member {String} name
 */
Ingredient.prototype['name'] = undefined;

/**
 * @member {Number} price
 */
Ingredient.prototype['price'] = undefined;






export default Ingredient;

