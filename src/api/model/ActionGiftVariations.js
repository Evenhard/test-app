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
import GiftVariationBlock from './GiftVariationBlock';

/**
 * The ActionGiftVariations model module.
 * @module model/ActionGiftVariations
 * @version 2.0.1
 */
class ActionGiftVariations {
    /**
     * Constructs a new <code>ActionGiftVariations</code>.
     * Акция с вариантами выбора подарка
     * @alias module:model/ActionGiftVariations
     * @param id {Number} ID акции
     * @param name {String} Название акции
     */
    constructor(id, name) { 
        
        ActionGiftVariations.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ActionGiftVariations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionGiftVariations} obj Optional instance to populate.
     * @return {module:model/ActionGiftVariations} The populated <code>ActionGiftVariations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionGiftVariations();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('blocks')) {
                obj['blocks'] = ApiClient.convertToType(data['blocks'], [GiftVariationBlock]);
            }
        }
        return obj;
    }


}

/**
 * ID акции
 * @member {Number} id
 */
ActionGiftVariations.prototype['id'] = undefined;

/**
 * Название акции
 * @member {String} name
 */
ActionGiftVariations.prototype['name'] = undefined;

/**
 * Блоки для выбора одного из подарков. Пользователь должен выбрать один из подарков в каждом блоке.
 * @member {Array.<module:model/GiftVariationBlock>} blocks
 */
ActionGiftVariations.prototype['blocks'] = undefined;






export default ActionGiftVariations;
