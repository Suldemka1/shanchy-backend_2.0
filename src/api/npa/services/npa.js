'use strict';

/**
 * npa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::npa.npa');
