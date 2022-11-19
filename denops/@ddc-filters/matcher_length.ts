import {
  BaseFilter,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v3.2.0/types.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  filter(args: {
    sourceOptions: SourceOptions,
    completeStr: string,
    items: Item[],
  }): Promise<Item[]> {
    return Promise.resolve(args.items.filter(
      (item) => item.word.length > args.completeStr.length
    ));
  }

  params(): Params { return {}; }
}
