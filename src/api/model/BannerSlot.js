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
 * The BannerSlot model module.
 * @module model/BannerSlot
 * @version 2.0.1
 */
class BannerSlot {
    /**
     * Constructs a new <code>BannerSlot</code>.
     * Изображение и url для перехода
     * @alias module:model/BannerSlot
     * @param imageUrl {String} 
     * @param targetUrl {String} 
     */
    constructor(imageUrl, targetUrl) { 
        
        BannerSlot.initialize(this, imageUrl, targetUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, imageUrl, targetUrl) { 
        obj['image_url'] = imageUrl;
        obj['target_url'] = targetUrl;
    }

    /**
     * Constructs a <code>BannerSlot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BannerSlot} obj Optional instance to populate.
     * @return {module:model/BannerSlot} The populated <code>BannerSlot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BannerSlot();

            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('target_url')) {
                obj['target_url'] = ApiClient.convertToType(data['target_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} image_url
 */
BannerSlot.prototype['image_url'] = undefined;

/**
 * @member {String} target_url
 */
BannerSlot.prototype['target_url'] = undefined;






export default BannerSlot;

