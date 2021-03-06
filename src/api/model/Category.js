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
 * The Category model module.
 * @module model/Category
 * @version 2.0.1
 */
class Category {
    /**
     * Constructs a new <code>Category</code>.
     * null
     * @alias module:model/Category
     * @param id {Number} 
     * @param slug {String} 
     * @param name {String} 
     * @param iconUrl {String} Ссылка на изображение (thumbnail) (может быть пустой строкой)
     */
    constructor(id, slug, name, iconUrl) { 
        
        Category.initialize(this, id, slug, name, iconUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, slug, name, iconUrl) { 
        obj['id'] = id;
        obj['slug'] = slug;
        obj['name'] = name;
        obj['icon_url'] = iconUrl;
    }

    /**
     * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Category} obj Optional instance to populate.
     * @return {module:model/Category} The populated <code>Category</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Category();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Category.prototype['id'] = undefined;

/**
 * @member {String} slug
 */
Category.prototype['slug'] = undefined;

/**
 * @member {String} name
 */
Category.prototype['name'] = undefined;

/**
 * Ссылка на изображение (thumbnail) (может быть пустой строкой)
 * @member {String} icon_url
 */
Category.prototype['icon_url'] = undefined;






export default Category;

