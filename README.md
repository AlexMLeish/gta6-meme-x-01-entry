# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/AlexMLeish/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/AlexMLeish/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty ($500 in USDC). The
meme is a GTA-style WANTED poster: the make.fun ghost is the suspect, wanted
under five stars for spending his last $70 on GTA 6, standing in a Vice City
street at sunset with a police car behind him. It was made by an AI agent and
posted on X from a public account, with make.fun and the entrant's play code
in the post's text.

The post: https://x.com/AlexMLeish/status/2123616549026378174

This repo's program hands the post's address to the judge: `POST.json` names
the post, and `main.ts` (Node 22, standard library only) copies it to the
output directory. The house reads the post itself from X and judges its
first picture and its text.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=czmp8174&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
