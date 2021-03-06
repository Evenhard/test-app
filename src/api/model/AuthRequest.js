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
 * The AuthRequest model module.
 * @module model/AuthRequest
 * @version 2.0.1
 */
class AuthRequest {
    /**
     * Constructs a new <code>AuthRequest</code>.
     * @alias module:model/AuthRequest
     * @param login {String} Email или телефон
     * @param field {module:model/AuthRequest.FieldEnum} 
     * @param password {String} 
     */
    constructor(login, field, password) { 
        
        AuthRequest.initialize(this, login, field, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, login, field, password) { 
        obj['login'] = login;
        obj['field'] = field;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>AuthRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthRequest} obj Optional instance to populate.
     * @return {module:model/AuthRequest} The populated <code>AuthRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthRequest();

            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Email или телефон
 * @member {String} login
 */
AuthRequest.prototype['login'] = undefined;

/**
 * @member {module:model/AuthRequest.FieldEnum} field
 */
AuthRequest.prototype['field'] = undefined;

/**
 * @member {String} password
 */
AuthRequest.prototype['password'] = undefined;





/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
AuthRequest['FieldEnum'] = {

    /**
     * value: "email"
     * @const
     */
    "email": "email",

    /**
     * value: "phone"
     * @const
     */
    "phone": "phone"
};



export default AuthRequest;

