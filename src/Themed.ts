import { registerModule, modules } from "./Base/Modules";
import { GUI } from "./Base/SettingUtils";
import { ModName, ModVersion } from "./Utilities/Definition";
import { ColorsModule } from "./Modules/Colors";
import { GlobalModule } from "./Modules/Global";
import { conLog, conDebug } from "./Utilities/Console";
import { dataTake, dataStore } from "./Utilities/Data";
import { RibbonMenu } from "./Utilities/RibbonMenu";
import { hookFunction } from "./Utilities/SDK";
import { Style } from "./Utilities/Style";
import { IntegrationModule } from "./Modules/Integration";

function initWait() {
  conLog("Init wait");
  if (CurrentScreen == null || CurrentScreen === "Login") {
    hookFunction("LoginResponse", 0, (args, next) => {
      conDebug(`Init! LoginResponse caught: `, args);
      next(args);
      const response = args[0];
      if (response && typeof response.Name === "string" && typeof response.AccountName === "string") {
        init();
      }
    });
  } else {
    conLog(`Already logged in, init`);
    init();
  }
}

export function init() {
  if (window.ThemedLoaded) return;

  RibbonMenu.registerMod(ModName);

  dataTake();

  if (!initModules()) {
    unload();
    return;
  }

  GlobalModule.checkIfNewVersion();

  dataStore();

  Style.injectAll();

  window.ThemedLoaded = true;
  conLog(`Loaded! Version: ${ModVersion}`);
}

function initModules(): boolean {
  registerModule(new GUI());
  registerModule(new GlobalModule());
  registerModule(new ColorsModule());
  registerModule(new IntegrationModule());

  for (const m of modules()) {
    m.Init();
  }

  for (const m of modules()) {
    m.Load();
  }

  for (const m of modules()) {
    m.Run();
  }

  conLog("Modules Loaded.");
  return true;
}

export function unload(): true {
  unloadModules();

  delete window.ThemedLoaded;
  conLog("Unloaded.");
  return true;
}

function unloadModules() {
  for (const m of modules()) {
    m.Unload();
  }
}

initWait();
