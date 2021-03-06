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
		blockID: {
			type: 'string',
		},
		sectionClass: {
			type: 'string',
		}
	},


	edit: (props) => {
		const {
			className,
			attributes: { blockClass, blockID, sectionClass },
			setAttributes,
		} = props;
		setAttributes({ blockClass: 'section' });
		const onIdChange = (newValue) => {
			props.setAttributes({
				blockID: newValue,
			});
		};
		const onClassChange = (newValue) => {
			props.setAttributes({
				sectionClass: newValue,
			});
		};
		return (
			<div id={blockID} className={classnames(className, blockClass, sectionClass)}>
				<InspectorControls>
					<PanelBody title={__('Section ID and class')}>
						<PlainText
							className='ec-attr-edit-textarea'
							value={blockID}
							onChange={onIdChange}
						/>
						<PlainText
							className='ec-attr-edit-textarea'
							value={sectionClass}
							onChange={onClassChange}
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
			attributes: { blockClass, blockID, sectionClass },
		} = props;
		return (
			<section id={blockID} className={classnames(className, blockClass, sectionClass)}>
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
			source: 'text',
			selector: '.header',
		},
		buttonText: {
			source: 'text',
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
		outerClass: {
			type: 'string',
		}
	},


	edit: (props) => {
		const {
			className,
			attributes: {
				blockClass,
				outerClass,
			},
			setAttributes,
		} = props;
		setAttributes({ blockClass: 'containerOuter' });
		const onOuterClassChange = (newValue) => {
			props.setAttributes({
				outerClass: newValue,
			});
		};
		return (
			<div className={classnames(className, blockClass, outerClass)}>
				<InspectorControls>
					<PanelBody title={__('Outer class')}>
						<PlainText
							className='ec-attr-edit-textarea'
							value={outerClass}
							onChange={onOuterClassChange}
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
			attributes: { blockClass, outerClass },
		} = props;
		return (
			<div className={classnames(className, blockClass, outerClass)}>
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
		innerClass: {
			type: 'string',
		},
		isSlider: {
			type: 'string',
		}
	},


	edit: (props) => {
		const {
			className,
			attributes: { blockClass, innerWidth, innerClass, isSlider },
			setAttributes,
		} = props;
		const onInnerWidthChange = (newValue) => {
			props.setAttributes({
				innerWidth: newValue,
			});
		};
		const onInnerClassChange = (newValue) => {
			props.setAttributes({
				innerClass: newValue,
			});
		};
		const onSliderChange = (newValue) => {
			props.setAttributes({
				isSlider: newValue,
			});
		};
		if (!isSlider || isSlider === '') {
			setAttributes({ isSlider: 'no' });
		}
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
					<PanelBody title={__('Inner class')}>
						<PlainText
							className='ec-attr-edit-textarea'
							value={innerClass}
							onChange={onInnerClassChange}
						/>
					</PanelBody>
					<SelectControl
						label={__('Is slider on mobile', 'ecoparts-blocks')}
						value={isSlider}
						options={
							[
								{ label: 'Is not slider', value: 'no' },
								{ label: 'Is slider on mobile', value: 'yes' },
							]
						}
						onChange={onSliderChange}
					/>
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
			attributes: { blockClass, innerWidth, innerClass, isSlider },
		} = props;
		return (
			<div className={classnames(className, blockClass, innerClass)} style={{ width: innerWidth}} slideattribute={isSlider}>
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
			source: 'text',
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
		blockClass: {
			type: 'string',
		},
		containerClass: {
			type: 'string',
		}
	},


	edit: (props) => {
		const {
			className,
			attributes: {
				blockClass,
				containerClass,
			},
			setAttributes,
		} = props;
		setAttributes({ blockClass: 'epInnerMenu' });
		const onOuterClassChange = (newValue) => {
			props.setAttributes({
				containerClass: newValue,
			});
		};
		return (
			<div className={classnames(className, blockClass, containerClass)}>
				<InspectorControls>
					<PanelBody title={__('Container class')}>
						<PlainText
							className='ec-attr-edit-textarea'
							value={containerClass}
							onChange={onOuterClassChange}
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
			attributes: { blockClass, containerClass },
		} = props;
		return (
			<div className={classnames(className, blockClass, containerClass)}>
				<InnerBlocks.Content />
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
			source: 'html',
			selector: '.header',
		},
		blockSubheader: {
			source: 'html',
			selector: '.subheader',
		},
		blockText: {
			source: 'html',
			selector: '.text',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockSubheader, blockText, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				blockHeader: value,
			});
		};
		const onChangeBlockSubheader = (value) => {
			setAttributes({
				blockSubheader: value,
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
					tagName="h2"
					placeholder="Enter header here"
					value={blockHeader}
					onChange={onChangeBlockHeader}
				/>
				<RichText
					className="subheader"
					tagName="h3"
					placeholder="Enter subheader here"
					value={blockSubheader}
					onChange={onChangeBlockSubheader}
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
			attributes: { blockHeader, blockSubheader, blockText, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="header"
					tagName="h2"
					value={blockHeader}
				/>
				<RichText.Content
					className="subheader"
					tagName="h3"
					value={blockSubheader}
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

registerBlockType('ecoparts-blocks/ep-textblock2', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Text Block 2', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Text Block 2',
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
			source: 'html',
			selector: '.header',
		},
		blockSubheader: {
			source: 'html',
			selector: '.subheader',
		},
		blockText: {
			source: 'html',
			selector: '.text',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockSubheader, blockText, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				blockHeader: value,
			});
		};
		const onChangeBlockSubheader = (value) => {
			setAttributes({
				blockSubheader: value,
			});
		};
		const onChangeblockText = (value) => {
			setAttributes({
				blockText: value,
			});
		};
		setAttributes({ blockClass: 'epTextBlock2' });
		return (
			<div className={classnames(className, blockClass)}>
				<RichText
					className="header"
					tagName="h2"
					placeholder="Enter header here"
					value={blockHeader}
					onChange={onChangeBlockHeader}
				/>
				<RichText
					className="subheader"
					tagName="h3"
					placeholder="Enter subheader here"
					value={blockSubheader}
					onChange={onChangeBlockSubheader}
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
			attributes: { blockHeader, blockSubheader, blockText, blockClass },
		} = props;
		if (!blockHeader) {
			return (
				<div className={classnames(className, blockClass)}>
					<RichText.Content
						className="subheader"
						tagName="h3"
						value={blockSubheader}
					/>
					<RichText.Content
						className="text"
						tagName="div"
						value={blockText}
					/>
				</div>
			);
		}
		if (!blockSubheader) {
			return (
				<div className={classnames(className, blockClass)}>
					<RichText.Content
						className="header"
						tagName="h2"
						value={blockHeader}
					/>
					<RichText.Content
						className="text"
						tagName="div"
						value={blockText}
					/>
				</div>
			);
		}
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="header"
					tagName="h2"
					value={blockHeader}
				/>
				<RichText.Content
					className="subheader"
					tagName="h3"
					value={blockSubheader}
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

registerBlockType('ecoparts-blocks/ep-event', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Event Block', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Event Block',
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
		eventHeader: {
			source: 'html',
			selector: '.header',
		},
		eventSubheader: {
			source: 'html',
			selector: '.subheader',
		},
		eventDate: {
			source: 'html',
			selector: '.date',
		},
		eventTime: {
			source: 'html',
			selector: '.time',
		},
		textHeader: {
			source: 'html',
			selector: '.textHeader',
		},
		eventText: {
			source: 'html',
			selector: '.text',
		},
		blockCta: {
			source: 'text',
			selector: '.cta',
		},
		url: {
			type: 'string',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { eventHeader, eventSubheader, eventDate, eventTime, textHeader, eventText, blockCta, url, blockClass },
			setAttributes,
		} = props;
		const onChangeEventHeader = (value) => {
			setAttributes({
				eventHeader: value,
			});
		};
		const onChangeEventSubheader = (value) => {
			setAttributes({
				eventSubheader: value,
			});
		};
		const onChangeEventDate = (value) => {
			setAttributes({
				eventDate: value,
			});
		};
		const onChangeEventTime = (value) => {
			setAttributes({
				eventTime: value,
			});
		};
		const onChangeTextHeader = (value) => {
			setAttributes({
				textHeader: value,
			});
		};
		const onChangeEventText = (value) => {
			setAttributes({
				eventText: value,
			});
		};
		const onChangeBlockCta = (value) => {
			setAttributes({
				blockCta: value,
			});
		};
		setAttributes({ blockClass: 'epEventBlock' });
		return (
			<div className={classnames(className, blockClass)}>
				<InspectorControls>
					<PanelBody title={__('Event url')}>
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
						value={eventHeader}
						onChange={onChangeEventHeader}
					/>
					<RichText
						className="subheader"
						tagName="h4"
						placeholder="Enter subheader here"
						value={eventSubheader}
						onChange={onChangeEventSubheader}
					/>
					<RichText
						className="date"
						tagName="h4"
						placeholder="Enter date here"
						value={eventDate}
						onChange={onChangeEventDate}
					/>
					<RichText
						className="time"
						tagName="h4"
						placeholder="Enter time here"
						value={eventTime}
						onChange={onChangeEventTime}
					/>
				</div>
				<div>
					<RichText
						className="textHeader"
						tagName="h3"
						placeholder="Enter text header here"
						value={textHeader}
						onChange={onChangeTextHeader}
					/>
					<RichText
						className="text"
						tagName="div"
						placeholder="Enter text here"
						value={eventText}
						onChange={onChangeEventText}
					/>
				</div>
				<div>
					<RichText
						className="cta"
						tagName="span"
						placeholder="Enter cta here"
						value={blockCta}
						onChange={onChangeBlockCta}
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
			attributes: { eventHeader, eventSubheader, eventDate, eventTime, textHeader, eventText, blockCta, url, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<div>
					<RichText.Content
						className="header"
						tagName="h3"
						value={eventHeader}
					/>
					<RichText.Content
						className="subheader"
						tagName="h4"
						value={eventSubheader}
					/>
					<RichText.Content
						className="date"
						tagName="h4"
						value={eventDate}
					/>
					<RichText.Content
						className="time"
						tagName="h4"
						value={eventTime}
					/>
				</div>
				<div>
					<RichText.Content
						className="textHeader"
						tagName="h3"
						value={textHeader}
					/>
					<RichText.Content
						className="text"
						tagName="div"
						value={eventText}
					/>
				</div>
				<a className="url" href={url}>
					<RichText.Content
						className="cta"
						tagName="span"
						value={blockCta}
					/>
				</a>
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
			source: 'html',
			selector: '.text',
		},
		blockQuote: {
			source: 'html',
			selector: '.quote',
		},
		blockCta: {
			source: 'text',
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

registerBlockType('ecoparts-blocks/ep-announcement', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Announcement', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Announcement',
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
	icon: 'index-card',

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
			source: 'html',
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
		url: {
			type: 'string',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { blockHeader, blockText, buttonText, url, blockClass },
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
		setAttributes({ blockClass: 'epAnnons' });
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
			attributes: { blockHeader, blockText, url, buttonText, blockClass },
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
				<a href={url} className="blockLink">
					<span class="buttonText">{buttonText}</span>
				</a>
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

registerBlockType('ecoparts-blocks/ep-event-ad', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Event Ad', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Event Ad',
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
	icon: 'pressthis',

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
			selector: '.image',
			attribute: 'src',
		},
		url: {
			type: 'string',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { mediaID, mediaURL, url, blockClass },
			setAttributes,
		} = props;
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		setAttributes({ blockClass: 'epEventAd' });
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
											className="image"
										/>
									)}
							</Button>
						)}
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
			attributes: { mediaID, mediaURL, url, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<a class="url" href={url} >
					<img className="image" src={mediaURL} alt="event" />
				</a>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-inner-header-1', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Inner Header 1', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Inner Header 1',
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
	icon: 'sticky',

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
		header: {
			source: 'html',
			selector: '.header',
		},
		subheader: {
			source: 'html',
			selector: '.subheader',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { header, subheader, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				header: value,
			});
		};
		const onChangeBlockSubheader = (value) => {
			setAttributes({
				subheader: value,
			});
		};
		setAttributes({ blockClass: 'epheader1' });
		return (
			<div className={classnames(className, blockClass)}>
				<RichText
					className="header"
					tagName="h2"
					placeholder="Enter header here"
					value={header}
					onChange={onChangeBlockHeader}
				/>
				<RichText
					className="subheader"
					tagName="h3"
					placeholder="Enter subheader here"
					value={subheader}
					onChange={onChangeBlockSubheader}
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
			attributes: { header, subheader, blockClass },
		} = props;
		if (!subheader) {
			return (
				<div className={classnames(className, blockClass)}>
					<RichText.Content
						className="header"
						tagName="h2"
						value={header}
					/>
				</div>
			);
		}
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="header"
					tagName="h2"
					value={header}
				/>
				<RichText.Content
					className="subheader"
					tagName="h3"
					value={subheader}
				/>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-inner-header-2', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Inner Header 2', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Inner Header 2',
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
	icon: 'sticky',

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
		header: {
			source: 'html',
			selector: '.header',
		},
		subheader: {
			source: 'html',
			selector: '.subheader',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { header, subheader, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				header: value,
			});
		};
		const onChangeBlockSubheader = (value) => {
			setAttributes({
				subheader: value,
			});
		};
		setAttributes({ blockClass: 'epheader2' });
		return (
			<div className={classnames(className, blockClass)}>
				<RichText
					className="header"
					tagName="h2"
					placeholder="Enter header here"
					value={header}
					onChange={onChangeBlockHeader}
				/>
				<RichText
					className="subheader"
					tagName="h3"
					placeholder="Enter subheader here"
					value={subheader}
					onChange={onChangeBlockSubheader}
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
			attributes: { header, subheader, blockClass },
		} = props;
		if (!subheader) {
			return (
				<div className={classnames(className, blockClass)}>
					<RichText.Content
						className="header"
						tagName="h2"
						value={header}
					/>
				</div>
			);
		}
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="header"
					tagName="h2"
					value={header}
				/>
				<RichText.Content
					className="subheader"
					tagName="h3"
					value={subheader}
				/>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-single-button', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Single Buttonl', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Single Button',
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
	icon: 'yes',

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
		buttonText: {
			source: 'text',
			selector: '.button',
		},
		url: {
			type: 'string',
		},
		blockClass: {
			type: 'string',
		},
		onClick: {
			type: 'string',
			source: 'meta',
			selector: '.button',
			meta: 'onclick'
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { buttonText, url, onClick, blockClass },
			setAttributes,
		} = props;
		const onChangeButtonText = (value) => {
			setAttributes({
				buttonText: value,
			});
		};
		const onChangeButtonOnclick = (value) => {
			setAttributes({
				onClick: value,
			});
		};
		setAttributes({ blockClass: 'epSingleBtn' });
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
					<PlainText
						placeholder="Enter button text"
						value={buttonText}
						onChange={onChangeButtonText}
					/>
					<PlainText
						placeholder="Enter button onclick"
						value={onClick}
						onChange={onChangeButtonOnclick}
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
			attributes: { buttonText, url, onClick, blockClass },
		} = props;
		return (
			<a href className={classnames(className, blockClass, 'button')} onclick={onClick} href={url}>
				{buttonText}
			</a>
		);
	},
});

registerBlockType("ecoparts-blocks/ep-single-image", {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("EP Single Image", "ecoparts-blocks"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __("Single Image", "ecoparts-blocks"),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: "ecoparts-blocks",

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: "format-image",

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
			type: "number",
		},
		mediaURL: {
			type: "string",
			source: "attribute",
			selector: ".image",
			attribute: "src",
		},
		alt: {
			type: "string",
		},
		blockClass: {
			type: "string",
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: {
				mediaID,
				mediaURL,
				alt,
				blockClass,
			},
			setAttributes,
		} = props;
		const onChangeAlt = (value) => {
			setAttributes({
				alt: value,
			});
		};
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		setAttributes({ blockClass: "epSingleImage" });
		return (
			<>
				<div className={classnames(className, blockClass)}>
					<PlainText
						className="alt"
						placeholder="Enter alt text here"
						value={alt}
						onChange={onChangeAlt}
					/>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes="image"
						value={mediaID}
						render={({ open }) => (
							<Button
								className={mediaID ? "image-button" : "button button-small"}
								onClick={open}
							>
								{!mediaID ? (
									__("Upload Image", "ecoparts-blocks")
								) : (
									<img src={mediaURL} alt={alt} className="image" />
								)}
							</Button>
						)}
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
			attributes: {
				mediaURL,
				alt,
				blockClass,
			},
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<img className="image" src={mediaURL} alt={alt} />
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-post-text', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Post Text', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom text container for Ecoparts theme',
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
		blockID: {
			type: 'string',
		},
		sectionClass: {
			type: 'string',
		}
	},


	edit: (props) => {
		const {
			className,
			attributes: { blockClass, blockID, sectionClass },
			setAttributes,
		} = props;
		setAttributes({ blockClass: 'epPostText' });
		const onIdChange = (newValue) => {
			props.setAttributes({
				blockID: newValue,
			});
		};
		const onClassChange = (newValue) => {
			props.setAttributes({
				sectionClass: newValue,
			});
		};
		return (
			<div id={blockID} className={classnames(className, blockClass, sectionClass)}>
				<InspectorControls>
					<PanelBody title={__('Container ID and class')}>
						<PlainText
							className='ec-attr-edit-textarea'
							value={blockID}
							onChange={onIdChange}
						/>
						<PlainText
							className='ec-attr-edit-textarea'
							value={sectionClass}
							onChange={onClassChange}
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
			attributes: { blockClass, blockID, sectionClass },
		} = props;
		return (
			<div id={blockID} className={classnames(className, blockClass, sectionClass)}>
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-team', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Team Member', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Team Member',
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
	icon: 'admin-users',

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
		name: {
			source: 'text',
			selector: '.name',
		},
		description: {
			source: 'html',
			selector: '.description',
		},
		position: {
			source: 'text',
			selector: '.position',
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
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { name, position, description, mediaURL, blockClass, mediaID },
			setAttributes,
		} = props;
		const onChangeName = (value) => {
			setAttributes({
				name: value,
			});
		};
		const onChangeDescription = (value) => {
			setAttributes({
				description: value,
			});
		};
		const onChangePosition = (value) => {
			setAttributes({
				position: value,
			});
		};
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		setAttributes({ blockClass: 'epTeam' });
		return (
			<>
				<div className={classnames(className, blockClass)}>
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
												alt={name}
												className="image"
											/>
										)}
								</Button>
							)}
						/>
					</div>
					<div>
						<RichText
							className="name"
							tagName="h3"
							placeholder="Enter name and surmane here"
							value={name}
							onChange={onChangeName}
						/>
						<RichText
							className="description"
							tagName="div"
							placeholder="Enter description here"
							multiline="p"
							value={description}
							onChange={onChangeDescription}
						/>
						<RichText
							className="position"
							tagName="p"
							placeholder="Enter work position"
							value={position}
							onChange={onChangePosition}
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
			attributes: { name, position, description, mediaURL, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<div className="imageContainer">
					<img className="image" src={mediaURL} alt={name} />
					<h3 className="name">{name}</h3>
					<p class="position">{position}</p>
				</div>
				<div className="textContainer">
					<RichText.Content
						className="description"
						tagName="div"
						value={description}
					/>
					<RichText.Content
						className="name"
						tagName="p"
						value={name}
					/>
				</div>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-team-textblock', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Team Textblock', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Team Textblock',
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
		description: {
			source: 'html',
			selector: '.description',
		},
		blockClass: {
			type: 'string',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { name, position, description, mediaURL, blockClass, mediaID },
			setAttributes,
		} = props;
		const onChangeDescription = (value) => {
			setAttributes({
				description: value,
			});
		};
		setAttributes({ blockClass: 'epTeamTextblock' });
		return (
			<>
				<div className={classnames(className, blockClass)}>
					<div>
						<RichText
							className="description"
							tagName="div"
							placeholder="Enter description here"
							multiline="p"
							value={description}
							onChange={onChangeDescription}
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
			attributes: { description, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<div className="textContainer">
					<RichText.Content
						className="description"
						tagName="div"
						value={description}
					/>
				</div>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-contact-form', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Contact Form', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Contact Form',
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
	icon: 'email',

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
		language: {
			type: 'string',
		},
		buttonText: {
			source: 'text',
			selector: '.button',
		},
		namePlaceholder: {
			source: 'text',
			selector: '.name',
		},
		emailPlaceholder: {
			source: 'text',
			selector: '.email',
		},
		phonePlaceholder: {
			source: 'text',
			selector: '.phone',
		},
		textareaPlaceholder: {
			source: 'text',
			selector: '.textarea',
		},
		error: {
			source: 'text',
			selector: '.error',
		},
		success: {
			source: 'text',
			selector: '.success',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: {
				blockClass,
				language,
				namePlaceholder,
				emailPlaceholder,
				phonePlaceholder,
				textareaPlaceholder,
				buttonText,
				error,
				success,
			},
			setAttributes,
		} = props;
		const onLanguageChange = (newValue) => {
			props.setAttributes({
				language: newValue,
			});
		};
		const onButtonTextChange = (newValue) => {
			props.setAttributes({
				buttonText: newValue,
			});
		};
		const onChangeNamePlaceholder = (newValue) => {
			props.setAttributes({
				namePlaceholder: newValue,
			});
		};
		const onChangeEmailPlaceholder = (newValue) => {
			props.setAttributes({
				emailPlaceholder: newValue,
			});
		};
		const onChangePhonePlaceholder = (newValue) => {
			props.setAttributes({
				phonePlaceholder: newValue,
			});
		};
		const onChangeTextareaPlaceholder = (newValue) => {
			props.setAttributes({
				textareaPlaceholder: newValue,
			});
		};
		const onChangeError = (newValue) => {
			props.setAttributes({
				error: newValue,
			});
		};
		const onChangeSuccess = (newValue) => {
			props.setAttributes({
				success: newValue,
			});
		};
		setAttributes({ blockClass: 'epContactForm' });
		return (
			<div className={classnames(className, blockClass)}>
				<InspectorControls>
					<SelectControl
						label={__('Language', 'ecoparts-blocks')}
						value={language}
						options={
							[
								{ label: 'German', value: 'DE' },
								{ label: 'English', value: 'EN' },
							]
						}
						onChange={onLanguageChange}
					/>
				</InspectorControls>
				<RichText
					className="namePlaceholder"
					tagName="p"
					placeholder="Enter placeholder for name input"
					value={namePlaceholder}
					onChange={onChangeNamePlaceholder}
				/>
				<RichText
					className="emailPlaceholder"
					tagName="p"
					placeholder="Enter placeholder for email input"
					value={emailPlaceholder}
					onChange={onChangeEmailPlaceholder}
				/>
				<RichText
					className="phonePlaceholder"
					tagName="p"
					placeholder="Enter placeholder for phone input"
					value={phonePlaceholder}
					onChange={onChangePhonePlaceholder}
				/>
				<RichText
					className="textareaPlaceholder"
					tagName="p"
					placeholder="Enter placeholder for textarea"
					value={textareaPlaceholder}
					onChange={onChangeTextareaPlaceholder}
				/>
				<RichText
					className="buttonText"
					tagName="p"
					placeholder="Enter button text"
					value={buttonText}
					onChange={onButtonTextChange}
				/>
				<RichText
					className="error"
					tagName="p"
					placeholder="Enter error note"
					value={error}
					onChange={onChangeError}
				/>
				<RichText
					className="success"
					tagName="p"
					placeholder="Enter success note"
					value={success}
					onChange={onChangeSuccess}
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
			attributes: {
				blockClass,
				language,
				namePlaceholder,
				emailPlaceholder,
				phonePlaceholder,
				textareaPlaceholder,
				buttonText,
				error,
				success,
			},
		} = props;
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="name"
					tagName="p"
					value={namePlaceholder}
				/>
				<RichText.Content
					className="email"
					tagName="p"
					value={emailPlaceholder}
				/>
				<RichText.Content
					className="phone"
					tagName="p"
					value={phonePlaceholder}
				/>
				<RichText.Content
					className="textarea"
					tagName="p"
					value={textareaPlaceholder}
				/>
				<RichText.Content
					className="button"
					tagName="p"
					value={buttonText}
				/>
				<RichText.Content
					className="error"
					tagName="p"
					value={error}
				/>
				<RichText.Content
					className="success"
					tagName="p"
					value={success}
				/>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-intro-header', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('EP Intro Header', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Intro Header',
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
	icon: 'carrot',

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
		header: {
			source: 'html',
			selector: '.header',
		},
		subheader: {
			source: 'html',
			selector: '.subheader',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: { header, subheader, blockClass },
			setAttributes,
		} = props;
		const onChangeBlockHeader = (value) => {
			setAttributes({
				header: value,
			});
		};
		const onChangeBlockSubheader = (value) => {
			setAttributes({
				subheader: value,
			});
		};
		setAttributes({ blockClass: 'introHeader' });
		return (
			<div className={classnames(className, blockClass)}>
				<RichText
					className="header"
					tagName="h2"
					placeholder="Enter header here"
					value={header}
					onChange={onChangeBlockHeader}
				/>
				<RichText
					className="subheader"
					tagName="h3"
					placeholder="Enter subheader here"
					value={subheader}
					onChange={onChangeBlockSubheader}
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
			attributes: { header, subheader, blockClass },
		} = props;
		if (!subheader) {
			return (
				<div className={classnames(className, blockClass)}>
					<RichText.Content
						className="header"
						tagName="h2"
						value={header}
					/>
				</div>
			);
		}
		return (
			<div className={classnames(className, blockClass)}>
				<RichText.Content
					className="header"
					tagName="h2"
					value={header}
				/>
				<RichText.Content
					className="subheader"
					tagName="h3"
					value={subheader}
				/>
			</div>
		);
	},
});
