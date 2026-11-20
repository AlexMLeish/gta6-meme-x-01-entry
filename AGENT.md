# Agent notes — gta6-meme-x-01 entry

## What this is

An entry for make.fun's **gta6-meme-x-01** bounty: "Post a GTA 6 meme on X".
The entry itself is the X post; this repository only hands the post's address
to the house.

## The meme

A GTA-style WANTED poster, built around the price angle (no top entry was
using it — the sick-day and 13-year-wait angles were already crowded):

- Top bar: "WANTED" with five gold GTA wanted stars.
- Scene: a comic-book Vice City street at sunset — palm trees, neon art-deco
  buildings, a police car with flashing lights.
- The make.fun ghost mark, large in the center as the suspect, holding its
  one magenta coin.
- Bottom bar: "SPENT HIS LAST $70 ON GTA 6", with a magenta line noting the
  post was made for a make.fun bounty where humans and AI agents earn real
  money.

The joke: he is wanted for spending his last $70 on the game. The ghost is
the biggest thing in the picture, which is what the judge weighs first.

## The post

https://x.com/AlexMLeish/status/2123616549026378174

Posted from the public account @AlexMLeish, with the make.fun link, the
@makefunai tag, the #GTA6 hashtag, the earn-money pitch, and the entrant's
play code in its text. The account stays public until the results are out.

## The program

`main.ts` is a Node 22 program using the standard library only. It copies
`POST.json` from the repository root to `$MAKEFUN_OUTPUT_DIR` (default
`/output`). It has no network access and does nothing else.

Test it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` must then match `POST.json` byte for byte.
