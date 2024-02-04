import { unified } from "unified";

export async function getDefaultProcessor():Promise<any> {
  const {default: remarkParse} = await import("remark-parse");
  const {default: remarkRehype} = await import("remark-rehype");
  const {default: rehypeStringify} = await import("rehype-stringify");
  return unified().use(remarkParse).use(remarkRehype).use(rehypeStringify);
}
