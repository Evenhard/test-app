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
import CartCompositeSelected from './CartCompositeSelected';
import CartIngredient from './CartIngredient';

/**
 * The CartItem model module.
 * @module model/CartItem
 * @version 2.0.1
 */
class CartItem {
    /**
     * Constructs a new <code>CartItem</code>.
     * Элемент корзины
     * @alias module:model/CartItem
     * @param key {String} Уникальный ключ
     * @param productId {Number} 
     * @param variationId {Number} 
     * @param quantity {Number} 
     * @param price {Number} Фактическая цена
     * @param originalPrice {Number} Оригинальная Цена, без скидки
     * @param ingredients {Array.<module:model/CartIngredient>} 
     * @param compositeSelected {Array.<module:model/CartCompositeSelected>} 
     */
    constructor(key, productId, variationId, quantity, price, originalPrice, ingredients, compositeSelected) { 
        
        CartItem.initialize(this, key, productId, variationId, quantity, price, originalPrice, ingredients, compositeSelected);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, productId, variationId, quantity, price, originalPrice, ingredients, compositeSelected) { 
        obj['key'] = key;
        obj['product_id'] = productId;
        obj['variation_id'] = variationId;
        obj['quantity'] = quantity;
        obj['price'] = price;
        obj['original_price'] = originalPrice;
        obj['ingredients'] = ingredients;
        obj['composite_selected'] = compositeSelected;
    }

    /**
     * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartItem} obj Optional instance to populate.
     * @return {module:model/CartItem} The populated <code>CartItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItem();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('variation_id')) {
                obj['variation_id'] = ApiClient.convertToType(data['variation_id'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('original_price')) {
                obj['original_price'] = ApiClient.convertToType(data['original_price'], 'Number');
            }
            if (data.hasOwnProperty('ingredients')) {
                obj['ingredients'] = ApiClient.convertToType(data['ingredients'], [CartIngredient]);
            }
            if (data.hasOwnProperty('composite_selected')) {
                obj['composite_selected'] = ApiClient.convertToType(data['composite_selected'], [CartCompositeSelected]);
            }
        }
        return obj;
    }


}

/**
 * Уникальный ключ
 * @member {String} key
 */
CartItem.prototype['key'] = undefined;

/**
 * @member {Number} product_id
 */
CartItem.prototype['product_id'] = undefined;

/**
 * @member {Number} variation_id
 */
CartItem.prototype['variation_id'] = undefined;

/**
 * @member {Number} quantity
 */
CartItem.prototype['quantity'] = undefined;

/**
 * Фактическая цена
 * @member {Number} price
 */
CartItem.prototype['price'] = undefined;

/**
 * Оригинальная Цена, без скидки
 * @member {Number} original_price
 */
CartItem.prototype['original_price'] = undefined;

/**
 * @member {Array.<module:model/CartIngredient>} ingredients
 */
CartItem.prototype['ingredients'] = undefined;

/**
 * @member {Array.<module:model/CartCompositeSelected>} composite_selected
 */
CartItem.prototype['composite_selected'] = undefined;






export default CartItem;
