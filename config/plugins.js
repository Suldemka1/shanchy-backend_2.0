module.exports = ({ env }) => ({
  'transformer': {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
  localazy: {
    enabled: true,
    // resolve: "./src/plugins/localazy",
    config: {
      default: () => {},
      validator: () => {},
    },
  },
});