import {
  Box,
  Button,
  FormControl,
  TextInput,
} from '@primer/react'

import {
  FilterIcon,
  SidebarCollapseIcon,
  GitBranchIcon,
  PlusIcon,
  SearchIcon,
  TriangleDownIcon,
} from '@primer/octicons-react'

function FileTreeHeader() {
  return (
    <>
      <Box sx={{ maxWidth: '320px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', px: 4, py: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SidebarCollapseIcon size={16} />
            <Button leadingIcon={GitBranchIcon} trailingIcon={TriangleDownIcon}>main</Button>
          </Box>
          <Box>
            <PlusIcon size={16} />
            <SearchIcon size={16} />
          </Box>
        </Box>
        <FormControl>
          <FormControl.Label visuallyHidden={true}>Jump to file</FormControl.Label>
          <TextInput
            leadingVisual={FilterIcon}
            aria-label="Jump to file"
            placeholder="Jump to file" />
        </FormControl>
      </Box>
    </>
  )
}


export default FileTreeHeader