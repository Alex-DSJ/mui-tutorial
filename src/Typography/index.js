import React from 'react';
import Typography from '@mui/material/Typography'

export default function TypographyPage() {
  return (
    <div>
        <Typography
          variant='h1'
          component='h3'
          color='primary'
          align='center'
          gutterBottom    // this will increase the margin-bottom of this componnent
        >
            H1 primary center Typography
        </Typography>
        <Typography
          variant='h2'
          color='secondary'
          align='left'
        >
            H2 secondary left Typography
        </Typography>
        <Typography
          variant='h3'
          color='error'
          align='right'
        >
            H3 error right Typography
        </Typography>
        <Typography
          variant='h4'
          color='textPrimary'
          gutterBottom
        >
            H4 error textPrimary alignment Typography
        </Typography>
        <Typography
          variant='h5'
          color='textSecondary'
          align='left'
          noWrap
        >
            SUPER LONG TEXT WITH noWrap property LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG
        </Typography>
    </div>
  )
}
