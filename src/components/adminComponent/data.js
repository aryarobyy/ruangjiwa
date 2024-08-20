import {
  LuAlertOctagon,
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

const adminMenu = [
  {
    name: 'Dashboard',
    link: '/admin/dashboard',
    icon: LuRadar,
  },
  {
    name: 'Chat',
    link: '/admin/chat',
    icon: LuMessagesSquare,
  },
  {
    name: 'Project',
    link: '/admin/project',
    icon: LuTarget,
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

export { adminMenu, messages, apps }
