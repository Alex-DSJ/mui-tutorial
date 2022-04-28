import React from 'react'
import { ListItemButton, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function NavItem({ text, pathname, open, handlePathChange }) {
  return (
    <div>
        <ListItemButton
          key={text}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => handlePathChange(pathname)}
        >
          <NavLink
            to={pathname}
          >
            <ListItemText primary={text} sx={{ opacity: 1 }} />
          </NavLink>
        </ListItemButton>
    </div>
  )
}
