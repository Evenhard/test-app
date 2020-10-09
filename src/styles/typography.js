import { Platform } from 'react-native';
import { COLORS } from '.';

const fontFamily = Platform.select({ android: 'sans-serif', ios: 'Helvetica' });
const fontWeightRegular = 'normal';
const fontWeightBold = 'bold';

export default {
  /**
   * Use the Heading style for card titles.
   */
  headingText: {
    fontFamily,
    color: COLORS.headingTextColor,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  headingTextBold: {
    fontFamily,
    color: COLORS.headingTextColor,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: {
    fontFamily,
    color: COLORS.subHeadingTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  subheadingTextBold: {
    fontFamily,
    color: COLORS.subHeadingTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label
   * would generally use the Body style.
   */
  bodyText: {
    fontFamily,
    color: COLORS.bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  bodyTextBold: {
    fontFamily,
    color: COLORS.bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use labels with form field and input elements to
   * signify the element’s function to the user.
   */
  labelText: {
    fontFamily,
    color: COLORS.labelTextColor,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  labelTextBold: {
    fontFamily,
    color: COLORS.labelTextColor,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Text style meant to be used only for Button component when size = "md"
   */
  buttonText: {
    fontFamily,
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1,
  },
  /**
   * Text style meant to be used only for Button component when size = "sm"
   */
  buttonTextSmall: {
    fontFamily,
    fontSize: 12,
    textAlign: 'center',
  },
  /**
   * Form label text style used only in TextInput component
   */
  formLabel: {
    fontFamily,
    fontSize: 16,
    color: COLORS.labelTextColor,
    fontWeight: fontWeightBold,
  },
  /**
   * Text style meant only for TextInput component
   */
  formInput: {
    fontFamily,
    fontSize: 16,
    color: COLORS.bodyTextColor,
  },
  /**
   * Form Error text style used only in TextInput component
   */
  formError: {
    fontFamily,
    fontSize: 13,
    color: COLORS.errorColor,
  },
};
