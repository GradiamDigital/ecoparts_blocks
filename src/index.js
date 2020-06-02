/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
	InspectorControls,
	URLInputButton,
	InnerBlocks,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	MediaUpload,
	TextControl,
	PlainText
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	SelectControl
} from '@wordpress/components';
import classnames from 'classnames';
import React from 'react';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

registerBlockType('ecoparts-blocks/ep-section', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Section', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom section block for Ecoparts theme',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'welcome-add-page',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockClass: {
			type: 'string',
		},
	},


	edit: (props) => {
		const {
			className,
			attributes: { blockClass },
			setAttributes,
		} = props;
		setAttributes({ blockClass: 'section' });
		return (
			<div className={classnames(className, blockClass)}>
				<InnerBlocks
					renderAppender={() => (
						<InnerBlocks.ButtonBlockAppender />
					)}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockClass },
		} = props;
		return (
			<section className={classnames(className, blockClass)}>
				<InnerBlocks.Content />
			</section>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-separator', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Separator', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom elements separator for Ecoparts theme',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'minus',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockClass: {
			type: 'string',
		},
	},


	edit: (props) => {
		const {
			className,
			attributes: { blockClass },
			setAttributes,
		} = props;
		setAttributes({ blockClass: 'separator' });
		return (
			<div className={classnames(className, blockClass)} />
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)} />
		);
	},
});

registerBlockType( 'ecoparts-blocks/ep-teaser-grey', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'EP Teaser Grey', 'ecoparts-blocks' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Light Grey Teaser',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'format-aside',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockContent: {
			source: 'text',
			selector: '.content',
		},
		blockTitle: {
			title: 'text',
			selector: '.header',
		},
		buttonText: {
			title: 'textText',
			selector: '.link',
		},
		blockClass: {
			type: 'string',
		},
		url: {
			type: 'string',
		},
		text: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockContent, blockTitle, buttonText, blockClass, url, text, siteurl },
			setAttributes,
		} = props;
		const onChangeBlockContent = (value) => {
			setAttributes({
				blockContent: value,
			});
		};
		const onChangeBlockTitle = (value) => {
			setAttributes({
				blockTitle: value,
			});
		};
		const onChangeButtonText = (value) => {
			setAttributes({
				buttonText: value,
			});
		};
		setAttributes({ blockClass: 'epTeaserGrey' });
		const su = window.location.origin + '/wp-content/plugins/ecoparts-blocks/images/silver-button.png';
		setAttributes({ siteurl: su });
		return (
			<>
				<div className={classnames(blockClass, className)}>
					<InspectorControls>
						<PanelBody title={__('Place link')}>
							<URLInputButton
								url={url}
								onChange={(url, post) => setAttributes({ url, text: (post && post.title) || 'Click here' })}
							/>
						</PanelBody>
					</InspectorControls>
					<RichText
						className="header"
						tagName="h3"
						placeholder="Enter block title here"
						value={blockTitle}
						onChange={onChangeBlockTitle}
					/>
					<RichText
						className="content"
						tagName="div"
						placeholder="Enter block content here"
						value={blockContent}
						onChange={onChangeBlockContent}
					/>
					<RichText
						className="linkText"
						tagName="p"
						placeholder="Enter text to be displayed on button"
						value={buttonText}
						onChange={onChangeButtonText}
					/>
				</div>
			</>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockContent, blockTitle, buttonText, blockClass, url, text, siteurl },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<h3 className="header">{blockTitle}</h3>
				{/* <RichText.Content
					className="header"
					tagName="h3"
					value={blockTitle}
				/> */}

				<RichText.Content
					className="content"
					tagName="div"
					value={blockContent}
				/>
				{/* <div className="content">
					{blockContent}
				</div> */}
				<a className="link" href={url}>
					<span className="linkText">
						{buttonText}
					</span>
				</a>
			</div>
		);
	},
} );

registerBlockType('ecoparts-blocks/ep-container-outer', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Container Outer', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom outer container block for Ecoparts theme',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'welcome-add-page',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockClass: {
			type: 'string',
		},
	},


	edit: (props) => {
		const {
			className,
			attributes: { blockClass },
			setAttributes,
		} = props;
		setAttributes({ blockClass: 'containerOuter' });
		return (
			<div className={classnames(className, blockClass)}>
				<InnerBlocks
					renderAppender={() => (
						<InnerBlocks.ButtonBlockAppender />
					)}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-container-inner', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Container Inner', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom inner container block for Ecoparts theme',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'welcome-add-page',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockClass: {
			type: 'string',
		},
		innerWidth: {
			type: 'string',
		},
	},


	edit: (props) => {
		const {
			className,
			attributes: { blockClass, innerWidth },
			setAttributes,
		} = props;
		const onInnerWidthChange = (newValue) => {
			props.setAttributes({
				innerWidth: newValue,
			});
		};
		setAttributes({ blockClass: 'containerInner' });
		return (
			<div className={classnames(className, blockClass)}>
				<InspectorControls>
					<PanelBody title={__('Inner width in % of parent width')}>
						<PlainText
							className='ec-attr-edit-textarea'
							value={innerWidth}
							onChange={onInnerWidthChange}
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					renderAppender={() => (
						<InnerBlocks.ButtonBlockAppender />
					)}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockClass, innerWidth },
		} = props;
		return (
			<div className={classnames(className, blockClass)} style={{ width: innerWidth}}>
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-parallax', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('Ep Parallax container', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Parallax container for theme',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'format-image',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.bcgImage',
		},
		blockClass: {
			type: 'string',
		},
	},

	edit: (props) => {
		const {
			className,
			backgroundImage,
			attributes: { mediaID, mediaURL, blockClass },
			setAttributes,
		} = props;
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		setAttributes({ blockClass: 'epParallax' });
		return (
			<div className={classnames(className, blockClass)} >
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes="image"
					value={mediaID}
					render={({ open }) => (
						<Button
							className={
								mediaID
									? 'image-button'
									: 'button button-large'
							}
							onClick={open}
						>
							{!mediaID ? (
								__('Upload Image', 'ecoparts-blocks')
							) : (
									<img
										src={mediaURL}
										className="bcgImage"
									/>
								)}
						</Button>
					)}
				/>
				<InnerBlocks
					renderAppender={() => (
						<InnerBlocks.ButtonBlockAppender />
					)}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { mediaID, mediaURL, blockClass },
		} = props;
		return (
			<div className={classnames(blockClass)}>
				<img src={mediaURL} class="bcgImage" />
				<InnerBlocks.Content />
			</div>

		);
	},
});

registerBlockType('ecoparts-blocks/ep-quote', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Quote', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Quote',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'format-quote',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		quoteText: {
			source: 'text',
			selector: '.quote',
		},
		quoteAuthor: {
			title: 'text',
			selector: '.author',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { quoteText, quoteAuthor, blockClass },
			setAttributes,
		} = props;
		const onChangeQuoteText = (value) => {
			setAttributes({
				quoteText: value,
			});
		};
		const onChangeQuoteAuthor = (value) => {
			setAttributes({
				quoteAuthor: value,
			});
		};
		setAttributes({ blockClass: 'epQuote' });
		return (
			<div className={classnames(className, blockClass)}>
				<RichText
					className="quote"
					tagName="p"
					placeholder="Enter quote here"
					value={quoteText}
					onChange={onChangeQuoteText}
				/>
				<RichText
					className="author"
					tagName="p"
					placeholder="Enter quote author here"
					value={quoteAuthor}
					onChange={onChangeQuoteAuthor}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { quoteText, quoteAuthor, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="quote"
					tagName="p"
					value={quoteText}
				/>
				<RichText.Content
					className="author"
					tagName="p"
					value={quoteAuthor}
				/>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-innermenu', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Inner Menu', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Inner Menu',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'media-text',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockText: {
			title: 'html',
			selector: '.text',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockText, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				blockHeader: value,
			});
		};
		const onChangeblockText = (value) => {
			setAttributes({
				blockText: value,
			});
		};
		setAttributes({ blockClass: 'epInnerMenu' });
		return (
			<div className={classnames(className, blockClass)}>
				<RichText
					className="text"
					tagName="div"
					placeholder="Enter text here"
					multiline="p"
					value={blockText}
					onChange={onChangeblockText}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockHeader, blockText, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="text"
					tagName="div"
					value={blockText}
				/>
			</div>
		);
	},
});
registerBlockType('ecoparts-blocks/ep-textblock', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Text Block', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Text Block',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'media-text',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockHeader: {
			source: 'text',
			selector: '.header',
		},
		blockText: {
			title: 'html',
			selector: '.text',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockText, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				blockHeader: value,
			});
		};
		const onChangeblockText = (value) => {
			setAttributes({
				blockText: value,
			});
		};
		setAttributes({ blockClass: 'epTextBlock' });
		return (
			<div className={classnames(className, blockClass)}>
				<RichText
					className="header"
					tagName="h3"
					placeholder="Enter header here"
					value={blockHeader}
					onChange={onChangeBlockHeader}
				/>
				<RichText
					className="text"
					tagName="div"
					placeholder="Enter text here"
					multiline="p"
					value={blockText}
					onChange={onChangeblockText}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockHeader, blockText, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="header"
					tagName="h3"
					value={blockHeader}
				/>
				<RichText.Content
					className="text"
					tagName="div"
					value={blockText}
				/>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-vorurteil-block', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Vorurteil Block', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Vorurteil Block',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'media-text',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockHeader: {
			source: 'text',
			selector: '.header',
		},
		blockText: {
			title: 'html',
			selector: '.text',
		},
		blockQuote: {
			title: 'html',
			selector: '.quote',
		},
		blockCta: {
			title: 'text',
			selector: '.cta',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockText, blockQuote, blockCta, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				blockHeader: value,
			});
		};
		const onChangeblockText = (value) => {
			setAttributes({
				blockText: value,
			});
		};
		const onChangeblockQuote = (value) => {
			setAttributes({
				blockQuote: value,
			});
		};
		const onChangeblockCta = (value) => {
			setAttributes({
				blockCta: value,
			});
		};
		setAttributes({ blockClass: 'epVorurteilBlock' });
		return (
			<div className={classnames(className, blockClass)}>
				<div>
					<RichText
						className="header"
						tagName="p"
						placeholder="Enter header here"
						value={blockHeader}
						onChange={onChangeBlockHeader}
					/>
					<RichText
						className="text"
						tagName="div"
						placeholder="Enter text here"
						multiline="p"
						value={blockText}
						onChange={onChangeblockText}
					/>
				</div>
				<div>
					<RichText
						className="quote"
						tagName="div"
						placeholder="Enter quote here"
						multiline="p"
						value={blockQuote}
						onChange={onChangeblockQuote}
					/>
					<RichText
						className="cta"
						tagName="p"
						placeholder="Enter cta here"
						value={blockCta}
						onChange={onChangeblockCta}
					/>
				</div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockHeader, blockText, blockQuote, blockCta, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<div>
					<RichText.Content
						className="header"
						tagName="p"
						value={blockHeader}
					/>
					<RichText.Content
						className="text"
						tagName="div"
						value={blockText}
					/>
				</div>
				<div>
					<RichText.Content
						className="quote"
						tagName="div"
						value={blockQuote}
					/>
					<RichText.Content
						className="cta"
						tagName="p"
						value={blockCta}
					/>
				</div>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-teaser-horizontal', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Teaser Horizontal', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Teaser Horizontal',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'id',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockHeader: {
			source: 'text',
			selector: '.header',
		},
		blockText: {
			source: 'html',
			selector: '.text',
		},
		buttonText: {
			source: 'text',
			selector: '.buttonText',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.image',
			attribute: 'src',
		},
		url: {
			type: 'string',
		},
		direction: {
			type: 'string',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockText, mediaID, mediaURL, buttonText, url, direction, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				blockHeader: value,
			});
		};
		const onChangeBlockText = (value) => {
			setAttributes({
				blockText: value,
			});
		};
		const onChangeButtonText = (value) => {
			setAttributes({
				buttonText: value,
			});
		};
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		const onDirectionChange = (value) => {
			setAttributes({
				direction: value,
			});
		};
		if (!direction) {
			setAttributes({ direction: 'ltr' });
		};
		setAttributes({ blockClass: 'epTeaserH' });
		return (
			<>
				<div className={classnames(className, blockClass, direction)}>
					<InspectorControls>
						<PanelBody title={__('Content direction')}>
							<SelectControl
								label={__('Set content direction', 'ecoparts-blocks')}
								value={direction}
								options={
									[
										{ label: 'text left, image right', value: 'ltr' },
										{ label: 'text right, image left', value: 'rtl' },
									]
								}
								onChange={onDirectionChange}
							/>
							<URLInputButton
								url={url}
								onChange={(url, post) => setAttributes({ url, text: (post && post.title) || '' })}
							/>
						</PanelBody>
					</InspectorControls>
					<div>
						<RichText
							className="header"
							tagName="h3"
							placeholder="Enter header here"
							value={blockHeader}
							onChange={onChangeBlockHeader}
						/>
						<RichText
							className="text"
							tagName="div"
							placeholder="Enter text here"
							multiline="p"
							value={blockText}
							onChange={onChangeBlockText}
						/>
						<RichText
							className="buttonText"
							tagName="p"
							placeholder="Enter button text here"
							value={buttonText}
							onChange={onChangeButtonText}
						/>
					</div>
					<div>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes="image"
							value={mediaID}
							render={({ open }) => (
								<Button
									className={
										mediaID
											? 'image-button'
											: 'button button-small'
									}
									onClick={open}
								>
									{!mediaID ? (
										__('Upload Image', 'ecoparts-blocks')
									) : (
											<img
												src={mediaURL}
												alt={blockHeader}
												className="image"
											/>
										)}
								</Button>
							)}
						/>
					</div>
				</div>
			</>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockHeader, blockText, mediaID, mediaURL, url, buttonText, direction, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass, direction)}>
				<div className="textContainer">
					<RichText.Content
						className="header"
						tagName="h3"
						value={blockHeader}
					/>
					<RichText.Content
						className="text"
						tagName="div"
						value={blockText}
					/>
				</div>
				<div className="imageContainerOuter">
					<div class="imageContainerInner">
						<img className="image" src={mediaURL} alt={blockHeader} />
						<a href={url} className="blockLink">
							<span class="buttonText">{buttonText}</span>
						</a>
					</div>
				</div>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-teaser-vertical', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Teaser Vertical', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Teaser Vertical',
		'ecoparts-blocks'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'ecoparts-blocks',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'id',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */

	attributes: {
		blockHeader: {
			source: 'text',
			selector: '.header',
		},
		blockText: {
			source: 'html',
			selector: '.text',
		},
		buttonText: {
			source: 'text',
			selector: '.buttonText',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.image',
			attribute: 'src',
		},
		url: {
			type: 'string',
		},
		date: {
			type: 'string',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockText, mediaID, mediaURL, buttonText, url, date, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				blockHeader: value,
			});
		};
		const onChangeBlockText = (value) => {
			setAttributes({
				blockText: value,
			});
		};
		const onChangeButtonText = (value) => {
			setAttributes({
				buttonText: value,
			});
		};
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		const onDateChange = (value) => {
			setAttributes({
				date: value,
			});
		};
		setAttributes({ blockClass: 'epTeaserV' });
		return (
			<>
				<div className={classnames(className, blockClass)}>
					<InspectorControls>
						<PanelBody title={__('Content url')}>
							<URLInputButton
								url={url}
								onChange={(url, post) => setAttributes({ url, text: (post && post.title) || '' })}
							/>
						</PanelBody>
					</InspectorControls>
					<div>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes="image"
							value={mediaID}
							render={({ open }) => (
								<Button
									className={
										mediaID
											? 'image-button'
											: 'button button-small'
									}
									onClick={open}
								>
									{!mediaID ? (
										__('Upload Image', 'ecoparts-blocks')
									) : (
											<img
												src={mediaURL}
												alt={blockHeader}
												className="image"
											/>
										)}
								</Button>
							)}
						/>
					</div>
					<div>
						<PlainText
							className="date"
							placeholder="Enter date here"
							value={date}
							onChange={onDateChange}
						/>
						<RichText
							className="header"
							tagName="h3"
							placeholder="Enter header here"
							value={blockHeader}
							onChange={onChangeBlockHeader}
						/>
						<RichText
							className="text"
							tagName="div"
							placeholder="Enter text here"
							multiline="p"
							value={blockText}
							onChange={onChangeBlockText}
						/>
						<RichText
							className="buttonText"
							tagName="p"
							placeholder="Enter button text here"
							value={buttonText}
							onChange={onChangeButtonText}
						/>
					</div>
				</div>
			</>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save(props) {
		const {
			className,
			attributes: { blockHeader, blockText, mediaID, mediaURL, url, buttonText, date, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<div className="imageContainerOuter">
					<div class="imageContainerInner">
						<img className="image" src={mediaURL} alt={blockHeader} />
					</div>
				</div>
				<div className="textContainer">
					<p class="date">{date}</p>
					<RichText.Content
						className="header"
						tagName="h3"
						value={blockHeader}
					/>
					<RichText.Content
						className="text"
						tagName="div"
						value={blockText}
					/>
					<a href={url} className="blockLink">
						<span class="buttonText">{buttonText}</span>
					</a>
				</div>
			</div>
		);
	},
});
