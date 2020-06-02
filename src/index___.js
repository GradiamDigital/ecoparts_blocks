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
	MediaUpload
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	SelectControl
} from '@wordpress/components';
import classnames from 'classnames';

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
registerBlockType( 'ecoparts-blocks/ep-calltoaction', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Hubatka Peyer Call To Action', 'ecoparts-blocks' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom call to action block for Hubatka Peyer theme',
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
	icon: 'phone',

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
		ctaContent: {
			source: 'text',
			selector: '.ctaContent'
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
			attributes: { ctaContent, blockClass, url, text },
			setAttributes,
		} = props;
		const onChangectaContent = (value) => {
			setAttributes({
				ctaContent: value,
				alt: value,
			});
		};
		setAttributes({ blockClass: 'ep-block-child ep-calltoaction' });
		return (
			<>
				<div className={className}>
					<InspectorControls>
						<PanelBody title={__('Place link')}>
							<URLInputButton
								url={url}
								onChange={(url, post) => setAttributes({ url, text: (post && post.title) || 'Click here' })}
							/>
						</PanelBody>
					</InspectorControls>
					<RichText
						className="copy-edit ctaContent"
						tagName="div"
						placeholder="Enter your text here"
						value={ctaContent}
						onChange={onChangectaContent}
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
			attributes: { ctaContent, blockClass, url },
		} = props;
		if (!url) {
			return (
				<div className={classnames(className, blockClass)}>
					<div class="ep-calltoaction__copy">
						<RichText.Content
							className="ep-calltoaction__copy__text ctaContent"
							tagName="div"
							value={ctaContent}
						/>
					</div>
				</div>
			);
		} else {
			return (
				<div className={classnames(className, blockClass)}>
					<a className="ep-calltoaction__copy" href={url}>
						<RichText.Content
							className="ep-calltoaction__copy__text ctaContent"
							tagName="span"
							value={ctaContent}
						/>
						<div class="ep-calltoaction__copy__arrow"></div>
					</a>
				</div>
			);
		}
	},
} );

registerBlockType('ecoparts-blocks/ep-container', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('Hubatka Peyer Container', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom container block for Hubatka Peyer theme',
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
		verticalAlignment: {
			type: 'string',
		},
		blockClass: {
			type: 'string',
		},
	},


	edit: (props) => {
		const {
			className,
			attributes: { verticalAlignment, blockClass },
			setAttributes,
		} = props;
		if (!verticalAlignment) {
			setAttributes({ verticalAlignment: 'top' });
		}
		const onVertivalAllignmentChange = (alignment) => {
			setAttributes({
				verticalAlignment: alignment
			});
		};
		const ALLOWED_BLOCKS = [
			'ecoparts-blocks/ep-image',
			'ecoparts-blocks/ep-header',
			'ecoparts-blocks/ep-text',
			'ecoparts-blocks/ep-calltoaction',
			'ecoparts-blocks/ep-scroll-left-arrow',
			'core/paragraph',
		];
		setAttributes({ blockClass: 'ep-block' });
		return (
			<>
				<BlockControls>
					<BlockVerticalAlignmentToolbar
						value={verticalAlignment}
						onChange={onVertivalAllignmentChange}
					/>
				</BlockControls>
				<div className={className}>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						renderAppender={() => (
							<InnerBlocks.ButtonBlockAppender />
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
			attributes: { verticalAlignment, blockClass },
		} = props;
		return (
			<div className={classnames(className, blockClass, verticalAlignment)}>
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-header', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('Hubatka Peyer Header', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom header block for Hubatka Peyer theme',
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
	icon: 'lightbulb',

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
		headerContent: {
			source: 'html',
			selector: '.headerContent'
		},
		blockClass: {
			type: 'string',
		},
		headerType: {
			type: 'string',
		}
	},
	edit: (props) => {
		const {
			className,
			attributes: { headerContent, blockClass, headerType },
			setAttributes,
		} = props;
		const onChangeHeaderContent = (value) => {
			setAttributes({
				headerContent: value,
			});
		};
		setAttributes({ blockClass: 'ep-block-child ep-header' });
		const onHeaderTypeChange = (value) => {
			setAttributes({
				headerType: value,
			});
		};
		if (!headerType) {
			setAttributes({ headerType: 'small' });
		};
		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Header type')}>
						<SelectControl
							label={__('Set header type', 'ecoparts-blocks')}
							value={headerType}
							options={
								[
									{ label: 'Small header', value: 'small' },
									{ label: 'Main header', value: 'main' },
								]
							}
							onChange={onHeaderTypeChange}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={classnames(className, headerType)}>
					<RichText
						className={`header headerContent ${headerType}`}
						tagName="h2"
						placeholder="Enter your text here"
						value={headerContent}
						onChange={onChangeHeaderContent}
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
			attributes: { headerContent, blockClass, headerType },
		} = props;
		return (
			<div className={classnames(className, blockClass, headerType)}>
				<RichText.Content
					className="ep-header__copy headerContent"
					tagName="h2"
					value={headerContent}
				/>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-image', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('Hubatka Peyer Image', 'ecoparts-blocks'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom image block for Hubatka Peyer theme',
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
		bodyContent: {
			source: 'html',
			selector: '.bodyContent'
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.mediaContent',
			attribute: 'src',
		},
		imageHeight: {
			type: 'string',
		},
		imageHref: {
			type: 'string',
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
		alt: {
			type: 'string',
		},
	},

	edit: (props) => {
		const {
			className,
			attributes: { mediaID, mediaURL, bodyContent, imageHeight, blockClass, url, text, alt },
			setAttributes,
		} = props;
		const onChangeBodyContent = (value) => {
			setAttributes({
				bodyContent: value,
				alt: value,
			});
		};
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		const onImageHeightChange = (value) => {
			setAttributes({
				imageHeight: value,
			});
		};
		if (!imageHeight) {
			setAttributes({ imageHeight: '50%' });
		};
		if (!bodyContent) {
			setAttributes({ alt: 'Hubatka Peyer' });
		}
		setAttributes({ blockClass: 'ep-block-child ep-image' });
		return (
			<>
				<div className={className}>
					<InspectorControls>
						<PanelBody title={__('Image Height in % of page content height')}>
							<SelectControl
								label={__('Set image block height', 'ecoparts-blocks')}
								value={imageHeight}
								options={
									[
										{ label: '10%', value: '10%' },
										{ label: '20%', value: '20%' },
										{ label: '30%', value: '30%' },
										{ label: '40%', value: '40%' },
										{ label: '50%', value: '50%' },
										{ label: '60%', value: '60%' },
										{ label: '70%', value: '70%' },
										{ label: '80%', value: '80%' },
										{ label: '90%', value: '90%' },
										{ label: '100%', value: '100%' },
									]
								}
								onChange={onImageHeightChange}
							/>
							<URLInputButton
								url={url}
								onChange={(url, post) => setAttributes({ url, text: (post && post.title) || 'Click here' })}
							/>
						</PanelBody>
					</InspectorControls>
					<div className="media-edit">
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
												alt={alt}
												className="mediaContent"
											/>
										)}
								</Button>
							)}
						/>
					</div>
					<RichText
						className="copy-edit bodyContent"
						tagName="div"
						placeholder="Enter your text here"
						value={bodyContent}
						onChange={onChangeBodyContent}
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
			attributes: { mediaID, mediaURL, bodyContent, imageHeight, blockClass, url, alt },
		} = props;
		const blockStyle = {
			height: imageHeight,
		};
		if (!url) {
			return (
				<figure className={classnames(className, blockClass)} style={blockStyle}>
					<a href={mediaURL} className="ep-image__media">
						<img id={mediaID} src={mediaURL} alt={alt} className="mediaContent" />
					</a>
					{/* <div class="ep-image__copy"> */}
					<RichText.Content
						className="ep-image__copy__text bodyContent"
						tagName="figcaption"
						value={bodyContent}
					/>
					{/* </div> */}
				</figure>
			);
		} else {
			return (
				<div className={classnames(className, blockClass)} style={blockStyle}>
					<div className="ep-image__media">
						<img id={mediaID} src={mediaURL} alt={alt} className="mediaContent" />
					</div>
					<a className="ep-image__copy" href={url}>
						<RichText.Content
							className="ep-image__copy__text bodyContent"
							tagName="span"
							value={bodyContent}
						/>
						<div class="ep-image__copy__arrow"></div>
					</a>
				</div>
			);
		}
	},
});

registerBlockType("ecoparts-blocks/ep-scroll-left-arrow", {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("Hubatka Peyer Scroll Left Arrow", "ecoparts-blocks"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		"Custom left arrow block for Hubatka Peyer theme",
		"ecoparts-blocks"
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: "ecoparts-blocks",

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: "arrow-left-alt2",

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
			selector: ".arrowContent",
			attribute: "src",
		},
	},

	edit: (props) => {
		const {
			className,
			attributes: {
				mediaID,
				mediaURL,
			},
			setAttributes,
		} = props;
		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};
		return (
			<div className={className}>
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
										className="arrowContent"
									/>
								)}
						</Button>
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
			attributes: { mediaID, mediaURL },
		} = props;
		return (
			<div className={className}>
				<div className="js-scrollLeft">
					<img id={mediaID} src={mediaURL} className="arrowContent" />
				</div>
			</div>
		);
	},
});

registerBlockType('ecoparts-blocks/ep-text', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __(
		'Hubatka Peyer Text',
		'ecoparts-blocks'
	),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Custom text block for Hubatka Peyer theme',
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
	icon: 'editor-paragraph',

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
		textContent: {
			source: 'html',
			selector: '.textContent'
		},
		blockClass: {
			type: 'string',
		},
		columnCount: {
			type: 'string',
		},
		parentWidith: {
			type: 'number',
		}
	},
	edit: (props) => {
		const {
			className,
			attributes: { textContent, blockClass, columnCount },
			setAttributes,
		} = props;
		const onChangeTextContent = (value) => {
			setAttributes({
				textContent: value,
			});
		};
		const onColumnCountChange = (value) => {
			setAttributes({
				columnCount: value,
			});
		};
		if (!columnCount) {
			setAttributes({ columnCount: 'cc-1' });
		};
		setAttributes({ blockClass: 'ep-block-child ep-text' });
		return (
			<div className={className}>
				<InspectorControls>
					<PanelBody title={__('Number of colums text is to be split into')}>
						<SelectControl
							label={__('Set number of colums text is to be split into', 'ecoparts-blocks')}
							value={columnCount}
							options={
								[
									{ label: 'non columnised', value: 'cc-0' },
									{ label: '1 column', value: 'cc-1' },
									{ label: '2 columns', value: 'cc-2' },
									{ label: '3 columns', value: 'cc-3' },
									{ label: '4 columns', value: 'cc-4' },
									{ label: '5 columns', value: 'cc-5' },
									{ label: '6 columns', value: 'cc-6' },
									{ label: '7 columns', value: 'cc-7' },
									{ label: '8 columns', value: 'cc-8' },
									{ label: '9 columns', value: 'cc-9' },
									{ label: '10 columns', value: 'cc-10' },
								]
							}
							onChange={onColumnCountChange}
						/>
					</PanelBody>
				</InspectorControls>
				<RichText
					className="edit-text textContent"
					tagName="div"
					placeholder="Enter your text here"
					value={textContent}
					onChange={onChangeTextContent}
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
			attributes: { textContent, blockClass, columnCount },
		} = props;
		return (
			<div className={classnames(className, blockClass, columnCount)}>
				<RichText.Content
					className={classnames('ep-text__copy textContent', columnCount)}
					tagName="div"
					value={textContent}
				/>
			</div>
		);
	},
});


