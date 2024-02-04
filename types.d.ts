import { type Processor } from "unified";
import { type Plugin } from "vite";

export interface UnifiedPluginConfig {
  processor: Processor | undefined;
  fileRegex: RegExp | undefined;
}
declare function unifiedPlugin(config: UnifiedPluginConfig): Plugin;

export { unifiedPlugin };
