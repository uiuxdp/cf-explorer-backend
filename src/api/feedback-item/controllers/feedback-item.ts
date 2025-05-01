/**
 * feedback-item controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::feedback-item.feedback-item');


/**
 *  article controller
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::article.article');


export default factories.createCoreController('api::feedback-item.feedback-item', ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
    //   const { locale } = ctx.query;
      // Use the slug to find the page
      const entity = await strapi.db.query('api::feedback-item.feedback-item').findOne({
        where: { slug },
        populate: {
            source: true,
            insights:{
                populate: {
                    title: true
                }
            },
         
        }
      });
  
      if (!entity) {
        return ctx.notFound();
      }
  
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  }));



