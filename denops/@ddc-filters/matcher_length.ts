import {
  BaseFilter,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v4.0.4/types.ts";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    sourceOptions: SourceOptions,
    completeStr: string,
    items: Item[],
  }): Promise<Item[]> {
    return Promise.resolve(args.items.filter(
      (item) => item.word.length > args.completeStr.length
    ));
  }

  override params(): Params { return {}; }
}
