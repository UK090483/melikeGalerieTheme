
<?php

function melike_gallery_theme_scripts()
{

    wp_enqueue_style('main', get_template_directory_uri() . '/public/css/main.css');
    wp_enqueue_script('main-js', get_template_directory_uri() . '/public/js/bundle.js', array(), '1.1', true);
    if (current_user_can('editor') || current_user_can('administrator')) {
        wp_enqueue_style('admin-style', get_template_directory_uri() . '/assets/css/admin-style.css');

    }
}

add_action('wp_enqueue_scripts', 'melike_gallery_theme_scripts');



function  melike_gallery_theme_register_menus()
{
    register_nav_menus(
        array(
            'header-menu' => __('Header Menu'),
            'extra-menu' => __('Extra Menu'),
        )
    );
}
add_action('init', 'melike_gallery_theme_register_menus');

require get_template_directory() . '/inc/widget.php';
require get_template_directory() . '/inc/footerwidgets.php';
require get_template_directory() . '/inc/aligneWide.php';
require get_template_directory() . '/inc/NavColor.php';
require get_template_directory() . '/inc/disableComments.php';

?>

