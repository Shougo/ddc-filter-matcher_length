import { type Item, type SourceOptions } from "jsr:@shougo/ddc-vim@~7.0.0/types";
import { BaseFilter } from "jsr:@shougo/ddc-vim@~7.0.0/filter";

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
