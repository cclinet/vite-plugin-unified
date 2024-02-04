import { Plugin } from "vite";
import { UnifiedPluginConfig } from "./types";
import { getDefaultProcessor } from "./defaultProcessor";
import { Processor } from "unified";

export function unifiedPlugin(unifiedConfig: UnifiedPluginConfig): Plugin {
  const fileRegex = unifiedConfig.fileRegex || /.*?.md\?raw/;
  let processor: Processor;
  if (unifiedConfig.processor) {
    processor = unifiedConfig.processor;
  } else {
    getDefaultProcessor()
      .then((r) => {
        processor = r;
      })
      .catch(() => {
        throw new Error(
          "You are using the default processor but `remarkParse`, `remarkRehype` or 'rehypeStringify' are not installed"
        );
      });
  }
  return {
    name: "transform-using-unified",

    async transform(code: string, id: string) {
      if (fileRegex.test(id)) {
        // get real string from code
        const source = code.slice('export default "'.length, -1);
        // unescape string
        const result = await processor.process(source.replace(/\\n/g, "\n"));
        //escape
        const resultString = result.toString().replace(/\\/g, "$&");
        return {
          code: `export default \`${resultString}\``,
        };
      }
    },
  };
}
