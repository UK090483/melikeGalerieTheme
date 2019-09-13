<?php

function mytheme_setup()
{

    add_theme_support('align-wide');
}
add_action('after_setup_theme', 'mytheme_setup');

function themeprefix_wrap_alignment($block_content, $block)
{

    if (isset($block['attrs']['align']) && in_array($block['attrs']['align'], array('wide', 'full'))) {
        $block_content = sprintf(
            '<div class="%1$s">%2$s</div>',
            'align-wrap align-wrap-' . esc_attr($block['attrs']['align']),
            $block_content
        );
    }
    return $block_content;
}

add_filter('render_block', 'themeprefix_wrap_alignment', 10, 2);
