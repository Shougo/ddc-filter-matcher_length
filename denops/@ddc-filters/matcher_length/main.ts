import type { Item } from "@shougo/ddc-vim/types";
import { BaseFilter } from "@shougo/ddc-vim/filter";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    completeStr: string;
    items: Item[];
  }): Item[] {
    return args.items.filter(
      (item) => item.word.length > args.completeStr.length,
    );
  }

  override params(): Params {
    return {};
  }
}
