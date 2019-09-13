

    <footer class="blog-footer">
<hr>

<?php
// Check if there are footer widgets.
if (is_active_sidebar('footer-1') or is_active_sidebar('footer-2') or is_active_sidebar('footer-3') or is_active_sidebar('footer-4')): ?>

	<div id="footer-widgets-wrap" class="container footer-widgets-wrap">



			<?php if (is_active_sidebar('footer-1')): ?>

				<div class="footer-widget-column col-sm-6">
					<?php dynamic_sidebar('footer-1');?>
				</div>

			<?php endif;?>

			<?php if (is_active_sidebar('footer-2')): ?>

				<div class="footer-widget-column  col-sm-6">
					<?php dynamic_sidebar('footer-2');?>
				</div>

			<?php endif;?>

			<?php if (is_active_sidebar('footer-3')): ?>

				<div class="footer-widget-column  col-sm-6">
					<?php dynamic_sidebar('footer-3');?>
				</div>

			<?php endif;?>

			<?php if (is_active_sidebar('footer-4')): ?>

				<div class="footer-widget-column col-sm-6">
					<?php dynamic_sidebar('footer-4');?>
				</div>

			<?php endif;?>



	</div>

<?php endif;?>

<hr>

<?php
if (function_exists('the_privacy_policy_link')) {
    the_privacy_policy_link('<div class="flex-center footer-privacy-policy-link-wrapper">', '</div>');
}
?>

<?php $blog_info = get_bloginfo('name');?>
			<?php if (!empty($blog_info)): ?>
				<div class="flex-center footer-site-name" >&copy <?php bloginfo('name');?></div>
			<?php endif;?>

</footer>


  <?php wp_footer();?>
  </body>
</html>