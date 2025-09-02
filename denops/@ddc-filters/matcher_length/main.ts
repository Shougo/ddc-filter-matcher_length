import type { Item, SourceOptions } from "@shougo/ddc-vim/types";
import { BaseFilter } from "@shougo/ddc-vim/filter";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    sourceOptions: SourceOptions;
    completeStr: string;
    items: Item[];
  }): Promise<Item[]> {
    return Promise.resolve(args.items.filter(
      (item) => item.word.length > args.completeStr.length,
    ));
  }

  override params(): Params {
    return {};
  }
}
