import React from 'react'
import { TextField, Container, Typography, Button } from '@mui/material'

export default function TextFieldPage() {

  const [ content, setContent ] = React.useState('');
  const [ error, setError ] = React.useState(false);

  const handleSubmit = () => {
    // 每次提交前先将所有的error都重置成false
    setError(false)
    if (content === '') setError(true)
  }

  return (
    <Container fullWidth>
      <Typography variant='h1' color='primary'>
        This is TextField page
        <div style={{ padding: "20px" }}>
          <TextField
            variant='outlined'
            label='outlined TextField'
            multiline
            rows={4}
            required
            fullWidth
            onChange={(e) => setContent(e.target.value)}
            error={error}
          />
          <Button
            type='submit'
            color='primary'
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <div style={{ height: "20px" }}></div>
          <TextField 
            variant='filled' 
            label='filled TextField'
            fullWidth
          />
        </div>
          <div style={{ padding: "20px" }}>
          <TextField 
            variant='standard' 
            label='standard TextField'
            fullWidth
          />
        </div>
        <div>
          <Typography
            variant='h4'
          >
            {content}
          </Typography>
        </div>
      </Typography>
    </Container>
  )
}
