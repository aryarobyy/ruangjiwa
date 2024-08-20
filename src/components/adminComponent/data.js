import {
  LuAlertOctagon,
  LuBookOpen,
  LuComponent,
  LuMessagesSquare,
  LuRadar,
  LuShieldOff,
  LuSnowflake,
  LuTarget,
} from 'react-icons/lu'

import github from '@/assets/images/brand/github.png'
import bitbucket from '@/assets/images/brand/bitbucket.png'
import dropbox from '@/assets/images/brand/dropbox.png'
import slack from '@/assets/images/brand/slack.png'
import dribble from '@/assets/images/brand/dribbble.png'
import behance from '@/assets/images/brand/behance.png'
import { BookOpenText } from 'lucide-react'

const adminMenu = [
  {
    name: 'Dashboard',
    link: '/admin/dashboard',
    icon: LuRadar,
  },
  {
    name: 'Artikel',
    link: '/admin/artikel',
    icon: LuBookOpen,
  },
  {
    name: 'Ui Components',
    link: '/admin/ui-components',
    icon: LuComponent,
  },
  {
    name: 'Landing',
    link: '/',
    icon: LuSnowflake,
  },
]

const messages = [
  {
    title: 'Check this out!',
    description: ' Please review this file.',
    variant: 'primary',
    icon: LuAlertOctagon,
  },
  {
    title: 'Congratulations!',
    description: 'Your OS System successfully updated.',
    variant: 'teal-500',
    icon: LuShieldOff,
  },
  {
    title: 'An error occurred',
    description: ' There was a problem in your code.',
    variant: 'red-500',
    icon: LuShieldOff,
  },
]

const apps= [
  {
    name: 'GitHub',
    image: github,
  },
  {
    name: 'Bitbucket',
    image: bitbucket,
  },
  {
    name: 'Dropbox',
    image: dropbox,
  },
  {
    name: 'Slack',
    image: slack,
  },
  {
    name: 'Dribble',
    image: dribble,
  },
  {
    name: 'Behance',
    image: behance,
  },
]

export const artikel = [
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
  {
    creatorId: '123',
    name: 'Irzi',
    artikelId: 'lorem ipsum',
    title: 'Cara mencegah kesepian di tengah gempuran sosial media',
    description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime in dolore corrupti, cupiditate voluptate officia nihil non numquam aut molestias! Tempore itaque odit animi et sunt officiis repellat? Magnam, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem asperiores modi error enim omnis molestias dolores, sapiente consequuntur deleniti velit sunt assumenda labore hic amet esse odio quibusdam animi.",
    image: 'https://via.placeholder.com/600/771796',
    date: new Date()
  },
]

export const forum = [
  {
    forumId: '123',
    createdBy: 'zaxchaxs',
    name: "Irzi",
    createdAt: ''
  }
]

export { adminMenu, messages, apps }
