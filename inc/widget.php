<?php
// Register and load the widget
function wpb_load_widget()
{
    register_widget('wpb_widget');

}
add_action('widgets_init', 'wpb_load_widget');

// Creating the widget
class wpb_widget extends WP_Widget
{

    public function __construct()
    {

        parent::__construct(

// Base ID of your widget
            'wpb_widget',

// Widget name will appear in UI
            __('WPBeginner Widget', 'wpb_widget_domain'),

// Widget description
            array('description' => __('Sample widget based on WPBeginner Tutorial', 'wpb_widget_domain'))
        );
    }

// Creating widget front-end

    public function widget($args, $instance)
    {
//         $title = apply_filters('widget_title', $instance['title']);
        //         $link = apply_filters('widget_link', $instance['link']);

        // before and after widget arguments are defined by themes
        echo $args['before_widget'];
        //         if (!empty($title)) {
        //             echo $args['before_title'] . $title . $args['after_title'];
        //         }
        echo '<div class=social-links-widget>';
        echo "<a href=>";
        require get_template_directory() . '/svg/facebook.svg';
        echo "</a>";
        echo "<a href=>";
        require get_template_directory() . '/svg/instagram.svg';
        echo "</a>";
        echo "</div>";

        echo $args['after_widget'];
    }

// Widget Backend
    public function form($instance)
    {
        if (isset($instance['title'])) {
            $title = $instance['title'];
        } else {
            $title = __('New title', 'wpb_widget_domain');
        }
        if (isset($instance['link'])) {
            $link = $instance['link'];
        } else {
            $link = __('New title', 'wpb_widget_domain');
        }

        cl($instance);
// Widget admin form
        $icons = array_diff(scandir(get_template_directory() . '/svg'), array('..', '.'));

        foreach ($icons as $icon) {

            echo "<h5>$icon</h5>";
            echo "<div style='width:30px; height:30px' >";
            require get_template_directory() . "/svg/$icon";
            echo "</div>";
        };

        ?>
<p>
<label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:');?></label>
<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
<label for="<?php echo $this->get_field_id('link'); ?>"><?php _e('link:');?></label>
<input class="widefat" id="<?php echo $this->get_field_id('link'); ?>" name="<?php echo $this->get_field_name('link'); ?>" type="text" value="<?php echo esc_attr($link); ?>" />
</p>

<?php

    }

// Updating widget replacing old instances with new
    public function update($new_instance, $old_instance)
    {

        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        $instance['link'] = (!empty($new_instance['link'])) ? strip_tags($new_instance['link']) : '';

        return $instance;
    }
} // Class wpb_widget ends here