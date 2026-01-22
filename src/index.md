---
layout: home
title: Home

hero:
  name: "moddev.zone"
  tagline: "Modding Together in The Zone!"

features:
  - title: Who are we?
    details: We are a community who enjoy modding games like Minecraft, we aim to provide a friendly and safe environment for modders and community members of all skill levels to come together to learn, develop and have fun!

  - title: Community Built Documentation
    details: We encourage members of our community to contribute their knowledge and help grow our documentation and resources to help others get started or learn more about modding.

  - title: What can you do here?
    details: You can chat with other like-minded people, ask for help with modding, share your projects, and participate in community events. We also host game servers where you can sometimes test your mods and play with others.
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
    title: 'Manager',
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
    title: 'Minecraft Server Admin',
    links: [
      { icon: 'github', link: 'https://github.com/sciwhiz12' }
    ]
  },
  {
    avatar: 'https://www.github.com/cartoonishvillain.png',
    name: 'MariTheVillian',
    title: 'Minecraft Server Admin',
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