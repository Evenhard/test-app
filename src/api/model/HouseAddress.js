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
import Coordinates from './Coordinates';

/**
 * The HouseAddress model module.
 * @module model/HouseAddress
 * @version 2.0.1
 */
class HouseAddress {
    /**
     * Constructs a new <code>HouseAddress</code>.
     * Адрес дома
     * @alias module:model/HouseAddress
     */
    constructor() { 
        
        HouseAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HouseAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HouseAddress} obj Optional instance to populate.
     * @return {module:model/HouseAddress} The populated <code>HouseAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HouseAddress();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('metro')) {
                obj['metro'] = ApiClient.convertToType(data['metro'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('house')) {
                obj['house'] = ApiClient.convertToType(data['house'], 'String');
            }
            if (data.hasOwnProperty('coordinates')) {
                obj['coordinates'] = Coordinates.constructFromObject(data['coordinates']);
            }
        }
        return obj;
    }


}

/**
 * Адрес целиком
 * @member {String} address
 */
HouseAddress.prototype['address'] = undefined;

/**
 * @member {String} city
 */
HouseAddress.prototype['city'] = undefined;

/**
 * @member {String} metro
 */
HouseAddress.prototype['metro'] = undefined;

/**
 * @member {String} street
 */
HouseAddress.prototype['street'] = undefined;

/**
 * @member {String} house
 */
HouseAddress.prototype['house'] = undefined;

/**
 * @member {module:model/Coordinates} coordinates
 */
HouseAddress.prototype['coordinates'] = undefined;






export default HouseAddress;
