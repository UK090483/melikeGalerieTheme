/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  if (typeof settings.attributes !== "undefined") {
    settings.attributes = Object.assign(settings.attributes, {
      visibleOnMobile: {
        type: "boolean",
        default: true
      }
    });
  }
  //   console.log(settings);

  return settings;
}

addFilter(
  "blocks.registerBlockType",
  "editorskit/custom-attributes",
  addAttributes
);
