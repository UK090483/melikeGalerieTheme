/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;

const { Fragment } = wp.element;
const { InspectorAdvancedControls } = wp.editor;
const { createHigherOrderComponent } = wp.compose;
const { ToggleControl } = wp.components;

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const { attributes, setAttributes, isSelected } = props;

    const { visibleOnMobile } = attributes;

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(BlockEdit, props),
      isSelected &&
        wp.element.createElement(
          InspectorAdvancedControls,
          null,
          wp.element.createElement(ToggleControl, {
            label: __("Mobile Devices Visibity"),
            checked: !!visibleOnMobile,
            onChange: function onChange() {
              return setAttributes({
                visibleOnMobile: !visibleOnMobile
              });
            },
            help: !!visibleOnMobile
              ? __("Showing on mobile devices.")
              : __("Hidden on mobile devices.")
          })
        )
    );
  };
}, "withAdvancedControls");

addFilter(
  "editor.BlockEdit",
  "editorskit/custom-advanced-control",
  withAdvancedControls
);

wp.blocks.registerBlockStyle("core/cover", {
  name: "fancy-quote",
  label: "Fancy Quote",
  isDefault: false
});
