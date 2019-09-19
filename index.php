<?php get_header();?>



<div class="container">

            <?php

if (have_posts()): while (have_posts()): the_post();
?>
        <div class="blog-post">
            <?php the_content();?>
        </div><!-- /.blog-post -->
<?php
    endwhile;endif;
?>
</div>

<?php get_footer();?>