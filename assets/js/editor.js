wp.domReady(() => {
  wp.blocks.registerBlockStyle("core/paragraph", {
    name: "default",
    label: "Default"
  });

  wp.blocks.registerBlockStyle("core/paragraph", {
    name: "with-container",
    label: "With Container",
    isDefault: true
  });
});
