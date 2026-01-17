---
layout: home
title: Home

hero:
  name: "moddev.zone"
  tagline: "Home of the Mod Dev Zone community, modding together in the zone!"
  actions:
    - theme: brand
      text: Discord
      link: https://discord.moddev.zone
    - theme: brand
      text: GitHub
      link: https://github.com/moddevzone

features:
  - title: Community Documentation
    details: This is where you'll find our rules, Code of Conduct, Discord tips and more, please make sure you give them a read before joining either our Discord or game servers
    link: /docs/moddevzone
  - title: Modding Minecraft
    details: Documentation and guides on how to get started modding Minecraft, along with resources and links to help you on your modding journey.
    link: /docs/guides/minecraft
  - title: Modding Hytale
    details: Documentation and guides on how to get started modding Hytale, along with resources and links to help you on your modding journey.
    link: /docs/guides/hytale

---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/kiricattus.png',
    name: 'KiriCattus',
    title: 'Manager',
    links: [
      { icon: 'github', link: 'https://github.com/kiricattus' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/tophatcat.dev' }
    ]
  },
  {
    avatar: 'https://www.github.com/thecurle.png',
    name: 'Curle',
    title: 'Manager',
    links: [
      { icon: 'github', link: 'https://github.com/thecurle' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/gemwire.uk' }
    ]
  },
  {
    avatar: 'https://www.github.com/upcraftlp.png',
    name: 'Up',
    title: 'Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/upcraftlp' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/up-is.gay' }
    ]
  },
  {
    avatar: 'https://www.github.com/gigaherz.png',
    name: 'gigaherz',
    title: 'Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/gigaherz' }
    ]
  },
  {
    avatar: 'https://www.github.com/commoble.png',
    name: 'Commoble',
    title: 'Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/commoble' }
    ]
  },
  {
    avatar: 'https://www.github.com/macintoshiba.png',
    name: 'macintoshiba',
    title: 'Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/macintoshiba' }
    ]
  },
  {
    avatar: 'https://www.github.com/matyrobbrt.png',
    name: 'Matyrobbrt',
    title: 'Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/matyrobbrt' }
    ]
  },
  {
    avatar: 'https://www.github.com/zaweri.png',
    name: 'Zaweri',
    title: 'Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/zaweri' }
    ]
  },
  {
    avatar: 'https://www.github.com/sciwhiz12.png',
    name: 'sciwhiz12',
    title: 'Game Manager',
    links: [
      { icon: 'github', link: 'https://github.com/sciwhiz12' }
    ]
  },
  {
    avatar: 'https://www.github.com/cartoonishvillain.png',
    name: 'MariTheVillian',
    title: 'Game Manager',
    links: [
      { icon: 'github', link: 'https://github.com/cartoonishvillain' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Meet the Team
    </template>
    <template #lead>
      The team behind Mod Dev Zone are people from all over the world! People who share the same desire to mod games and have fun in a safe and friendly zone!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>