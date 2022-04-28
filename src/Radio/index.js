import React from 'react'
import { Container, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material'

export default function RadioPage() {

  const [ int, setInt ] = React.useState('002')

  return (
    <Container>
      <Typography variant='h1' color='primary'>This is Radio page</Typography>
      <div style={{ padding: "20px" }}>
        <Radio value='001' label='001' />
      </div>
      <div style={{ padding: "20px", display: "flex", justifyContent: "flex-start" }}>
        <FormControl>
          <FormLabel>ID</FormLabel>
          <RadioGroup value={int} onChange={(e) => setInt(e.target.value)}>
            <FormControlLabel value='001' control={<Radio />} label='001' />
            <FormControlLabel value='002' control={<Radio />} label='002' />
            <FormControlLabel value='003' control={<Radio />} label='003' />
            <FormControlLabel value='004' control={<Radio />} label='004' />
          </RadioGroup>
        </FormControl>
      </div>
    </Container>
  )
}
