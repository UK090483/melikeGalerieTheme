<a class="artist" href='<?php the_permalink();?>'>

        <?php echo get_the_post_thumbnail($post); ?>
        <?php echo '<div class="artist-pic" style="background-image: url(' . wp_get_attachment_url(get_post_thumbnail_id($post->ID)) . ')"></div>'; ?>
        <h4 style='text-align:center'><?php the_title();?></h4>

</a>