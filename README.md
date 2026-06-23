# ddc-filter-matcher_length

Length matcher for ddc.vim

It removes items shorter than or equal to the user input.

## Behavior

- The length check uses `item.word.length`.
- `string.length` is based on UTF-16 code units in JavaScript/TypeScript.
- If `completeStr` is empty, only items whose `word.length` is greater than `0` remain.
- In other words, empty input does not disable this matcher; it still filters out empty words.

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddc.vim

https://github.com/Shougo/ddc.vim

## Configuration

```vim
" Use both matcher_head and matcher_length.
call ddc#custom#patch_global('sourceOptions', #{
      \   _: #{
      \     matchers: ['matcher_head', 'matcher_length'],
      \ })
```
