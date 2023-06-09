import {
  Box,
  Button,
} from '@primer/react'

import {
  SidebarCollapseIcon,
  GitBranchIcon,
  PlusIcon,
  SearchIcon,
  TriangleDownIcon,
} from '@primer/octicons-react'

function FileTree() {
  return (
    (
      <Box>
        <SidebarCollapseIcon size={16} />
        <Button leadingIcon={GitBranchIcon} trailingIcon={TriangleDownIcon}>main</Button>
        <PlusIcon size={16} />
        <SearchIcon size={16} />
      </Box>
    )
  )
}

export default FileTree
