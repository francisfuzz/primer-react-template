import {
  UnderlineNav2 as UnderlineNav
} from '@primer/react'

import {
  CodeIcon,
  CommentDiscussionIcon,
  GearIcon,
  GitPullRequestIcon,
  IssueOpenedIcon,
  PlayIcon,
  ProjectIcon,
  PulseIcon,
  ShieldIcon,
} from '@primer/octicons-react'


function AppHeader() {
  return (
    <UnderlineNav aria-label="Repository" sx={{ backgroundColor: '#F6F8FA' }}>
      <UnderlineNav.Item aria-current="page" icon={CodeIcon}>
        Code
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={IssueOpenedIcon} counter={21}>
        Issues
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={GitPullRequestIcon} counter={3}>
        Pull Requests
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={CommentDiscussionIcon}>Discussions</UnderlineNav.Item>
      <UnderlineNav.Item icon={PlayIcon}>
        Actions
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={ProjectIcon}>
        Projects
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={ShieldIcon}>
        Security
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={PulseIcon}>
        Insights
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={GearIcon}>
        Settings
      </UnderlineNav.Item>
    </UnderlineNav>
  )
}

export default AppHeader
