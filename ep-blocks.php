<?php
/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

class Ep_Blocks {

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	public function ecoparts_blocks_ep_blocks_init() {
		$dir = dirname( __FILE__ );

		$script_asset_path = "$dir/build/index.asset.php";
		if ( ! file_exists( $script_asset_path ) ) {
			throw new Error(
				'You need to run `npm start` or `npm run build` for the "ecoparts-blocks/ep-blocks" block first.'
			);
		}
		$index_js     = 'build/index.js';
		$script_asset = require( $script_asset_path );
		wp_register_script(
			'ecoparts-blocks-ep-blocks-editor',
			plugins_url( $index_js, __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);

		$editor_css = 'editor.css';
		wp_register_style(
			'ecoparts-blocks-ep-blocks-editor',
			plugins_url( $editor_css, __FILE__ ),
			array(),
			filemtime( "$dir/$editor_css" )
		);

		$style_css = 'style.css';
		wp_register_style(
			'ecoparts-blocks-ep-blocks',
			plugins_url( $style_css, __FILE__ ),
			array(),
			filemtime( "$dir/$style_css" )
		);

		register_block_type(
			'ecoparts-blocks/ep-blocks',
			array(
				'editor_script' => 'ecoparts-blocks-ep-blocks-editor',
				'editor_style'  => 'ecoparts-blocks-ep-blocks-editor',
				'style'         => 'ecoparts-blocks-ep-blocks',
			)
		);
	}

}
