import { DebugMode } from "./Utilities/Definition";
import { conDebug } from "./Utilities/Console";

/*
"": "",
*/

export type TextMapKeys = keyof typeof ENTextMap;

const ENTextMap = {
  /* Mod Button */
  "infosheet.button_popup": "Themed Settings",

  /* Main Menu */
  "MainMenu.title": "- Themed BC -",
  "mainmenu.button.Settings": "Settings",
  "mainmenu.button.Colors": "Color Settings",
  "mainmenu.button.Integration": "Integration",

  /* Settings */
  "Settings.title": "- Settings -",
  "settings.setting.themedEnabled.name": "Enable Themed:",
  "settings.setting.themedEnabled.desc": "Enables features of Themed.",
  "settings.setting.doVanillaGuiOverhaul.name": "Enable GUI Overhaul:",
  "settings.setting.doVanillaGuiOverhaul.desc": "Redraws interface using colors selected in Color Settings.",
  "settings.setting.doUseChatSpecialStyling.name": "Enable chat styling:",
  "settings.setting.doUseChatSpecialStyling.desc": "Enables chat messages styling like italic, bold, underlined, etc.",
  "settings.setting.doShowLocaleTime.name": "Enable locale-based time format:",
  "settings.setting.doShowLocaleTime.desc": "Displays time according to your PC's locale settings. Like 20:25 or 08:25 PM.",
  "settings.setting.doShowNewVersionMessage.name": "Enable new version message:",
  "settings.setting.doShowNewVersionMessage.desc": "Show message about new version of Themed, when it's out.",

  /* Colors */
  "Colors.title": "- Color Settings -",
  "settings.setting.primaryColor.name": "Primary color:",
  "settings.setting.primaryColor.desc": "",
  "settings.setting.secondaryColor.name": "Secondary color:",
  "settings.setting.secondaryColor.desc": "",
  "settings.setting.textColor.name": "Text color:",
  "settings.setting.textColor.desc": "",
  "settings.setting.textShadowColor.name": "Text shadow color:",
  "settings.setting.textShadowColor.desc": "",
  "settings.setting.accentColor1.name": "First accent color:",
  "settings.setting.accentColor1.desc": "",
  "settings.setting.accentColor2.name": "Second accent color:",
  "settings.setting.accentColor2.desc": "",

  /* Integration */
  "Integration.title": "- Integration -",
  "integration.setting.BC.name": "Enable BC \"integration\":",
  "integration.setting.BC.desc": "Changes CSS styles of BC to use Color Settings. Changes chat, friend list, inputs and text selection along with scrollbar.",
  "integration.setting.FBC.name": "Enable FBC \"integration\":",
  "integration.setting.FBC.desc": "Changes CSS styles of FBC to use Color Settings. Mostly changes Instant Messenger colors.",
  "integration.setting.FUSAM.name": "Enable FUSAM \"integration\":",
  "integration.setting.FUSAM.desc": "Changes CSS styles of FUSAM to use Color Settings. Changes FUSAM button with settings interface.",
  "integration.setting.TTS.name": "Enable TTS \"integration\":",
  "integration.setting.TTS.desc": "Changes CSS styles of TTS to use Color Settings. Changes settings interface with task window,",

  /* Reset */
  "reset.label.perma_reset_of_mod_data": "- Permanent reset of Themed data -",
  "reset.label.warning": "- Warning -",
  "reset.label.if_u_confirm_perma_reset": "If you confirm, all Responsive data (including settings, responses and profiles) will be permanently reset!",
  "reset.label.youll_able_to_use_mod": "You will be able to continue using Responsive, but all of your configuration will be reset to default!",
  "reset.label.action_cannot_be_undone": "This action cannot be undone!",

  "reset.button.confirm": "Confirm",
  "reset.button.cancel": "Cancel",

  /* Support */
  "support.title": "- Support -",
  "support.button.ko-fi": "Ko-fi",
  "support.button.patreon": "Patreon",
  "support.other.thankyou": "Thank you"
};

export function getText(translationTag: TextMapKeys): string {
  if (DebugMode) logSrcTags(translationTag);
  return [`${TranslationLanguage}TextMap`][translationTag] || ENTextMap[translationTag] || translationTag;
}

function logSrcTags(translationTag: TextMapKeys) {
  if (![`${TranslationLanguage}TextMap`][translationTag]) {
    conDebug(`${String(translationTag)} is not translated for ${TranslationLanguage}`);
  }
}
