import type { Item } from "@shougo/ddc-vim/types";
import { BaseFilter } from "@shougo/ddc-vim/filter";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    completeStr: string;
    items: Item[];
  }): Item[] {
    // `string.length` counts UTF-16 code units, not user-perceived characters.
    // This means emoji or some combined characters may be counted differently
    // from what users expect as "length".
    const inputLength = args.completeStr.length;
    return args.items.filter((item) => item.word.length > inputLength);
  }

  override params(): Params {
    return {};
  }
}
