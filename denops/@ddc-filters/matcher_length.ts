import {
  BaseFilter,
  Candidate,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v0.13.0/types.ts#^";

export class Filter extends BaseFilter<{}> {
  filter(args: {
    sourceOptions: SourceOptions,
    completeStr: string,
    candidates: Candidate[],
  }): Promise<Candidate[]> {
    return Promise.resolve(args.candidates.filter(
      (candidate) => candidate.word.length > args.completeStr.length
    ));
  }

  params(): {} { return {}; }
}
