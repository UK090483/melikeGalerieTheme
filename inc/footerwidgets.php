<?php
/**
 * Register all Footer Widget areas
 *
 * @return void
 */
function melike_gallery_theme_register_footer_widgets()
{
    // Register Footer Column 1 widget area.
    register_sidebar(array(
        'name' => __('Footer Column 1', 'theme-slug'),
        'id' => 'footer-1',
        'description' => __('Appears on the first footer column.', 'theme-slug'),
        'before_widget' => '<aside id="%1$s" class="widget %2$s clearfix">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    // Register Footer Column 2 widget area.
    register_sidebar(array(
        'name' => __('Footer Column 2', 'theme-slug'),
        'id' => 'footer-2',
        'description' => __('Appears on the second footer column.', 'theme-slug'),
        'before_widget' => '<aside id="%1$s" class="widget %2$s clearfix">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    // Register Footer Column 3 widget area.
    register_sidebar(array(
        'name' => __('Footer Column 3', 'theme-slug'),
        'id' => 'footer-3',
        'description' => __('Appears on the third footer column.', 'theme-slug'),
        'before_widget' => '<aside id="%1$s" class="widget %2$s clearfix">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    // Register Footer Column 4 widget area.
    register_sidebar(array(
        'name' => __('Footer Column 4', 'theme-slug'),
        'id' => 'footer-4',
        'description' => __('Appears on the fourth footer column.', 'theme-slug'),
        'before_widget' => '<aside id="%1$s" class="widget %2$s clearfix">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'melike_gallery_theme_register_footer_widgets', 20);
