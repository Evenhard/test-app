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
 * The Attribute model module.
 * @module model/Attribute
 * @version 2.0.1
 */
class Attribute {
    /**
     * Constructs a new <code>Attribute</code>.
     * null
     * @alias module:model/Attribute
     * @param slug {String} 
     * @param name {String} 
     * @param value {String} 
     * @param valueName {String} 
     */
    constructor(slug, name, value, valueName) { 
        
        Attribute.initialize(this, slug, name, value, valueName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, slug, name, value, valueName) { 
        obj['slug'] = slug;
        obj['name'] = name;
        obj['value'] = value;
        obj['value_name'] = valueName;
    }

    /**
     * Constructs a <code>Attribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attribute} obj Optional instance to populate.
     * @return {module:model/Attribute} The populated <code>Attribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Attribute();

            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('value_name')) {
                obj['value_name'] = ApiClient.convertToType(data['value_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} slug
 */
Attribute.prototype['slug'] = undefined;

/**
 * @member {String} name
 */
Attribute.prototype['name'] = undefined;

/**
 * @member {String} value
 */
Attribute.prototype['value'] = undefined;

/**
 * @member {String} value_name
 */
Attribute.prototype['value_name'] = undefined;






export default Attribute;
