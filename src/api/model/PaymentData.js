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
 * The PaymentData model module.
 * @module model/PaymentData
 * @version 2.0.1
 */
class PaymentData {
    /**
     * Constructs a new <code>PaymentData</code>.
     * Реквизиты для оплаты
     * @alias module:model/PaymentData
     */
    constructor() { 
        
        PaymentData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentData} obj Optional instance to populate.
     * @return {module:model/PaymentData} The populated <code>PaymentData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentData();

            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Идентификатор выбранного метода оплаты
 * @member {String} payment_method_id
 */
PaymentData.prototype['payment_method_id'] = undefined;






export default PaymentData;

