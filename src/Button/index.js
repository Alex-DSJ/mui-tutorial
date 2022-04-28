import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, ButtonGroup, Container } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles'

// makeStyles调整的是单个组件的style，而createTheme调整的是全局的样式
const useStyle = makeStyles({
  btn: {
    fontSize: '60px !important',
    backgroundColor: 'red !important',
    '&:hover': {
      backgroundColor: 'yellow !important'
    }
  }
})

// 也可以用一个callback function来定义makeStyles，
// 视频教程中的例子在最新的MUI版本中不起作用，用的话要查文档和API
// const useStyleCB = makeStyles(theme => {
//   console.log(theme)
//   return {
//     btn1: {
//       fontSize: '50px !important',
//       backgroundColor: theme.palette.secondary,
//       '&:hover': {
//         backgroundColor: theme.palette.textSecondary
//       }
//     }
//   }
// })

export default function ButtonPage(props) {


  const classes = useStyle();

  return (
    <Container>
      <Typography variant='h1' color='primary'>This is Button page</Typography>
      <div>
        <Typography variant='h2' color='primary'>Button</Typography>
        <Button variant='contained' color='primary' style={{ margin: "10px" }}>
          contained
        </Button>
        <Button variant='outlined' color='primary' style={{ margin: "10px" }}>
          outlined
        </Button>
        <Button variant='text' color='primary' style={{ margin: "10px" }}>
          text
        </Button>
        <Button variant='disabled' color='primary' style={{ margin: "10px" }}>
          disabled
        </Button>
        <Button type='submit' color='primary' style={{ margin: "10px" }}>
          submit
        </Button>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant='h2' color='secondary'>ButtonGroup</Typography>
        <ButtonGroup>
          <Button variant='outlined' color='secondary'>
            download
          </Button>
          <Button variant='outlined' color='secondary'>
            outlined
          </Button>
          <Button variant='outlined' color='secondary'>
            text
          </Button>
          <Button variant='outlined' color='secondary'>
            disabled
          </Button>
          <Button variant='outlined' type='submit' color='secondary'>
            submit
          </Button>
        </ButtonGroup>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant='h2' color='primary'>Icon Button</Typography>
        <Button variant='contained' color='primary' startIcon={<DownloadIcon />} style={{ margin: "10px" }}>
          download
        </Button>
        <Button variant='contained' color='primary' startIcon={<FileUploadIcon />} style={{ margin: "10px" }}>
          upload
        </Button>
        <Button variant='contained' color='primary' startIcon={<SaveIcon />} style={{ margin: "10px" }}>
          save
        </Button>
        <Button variant='contained' color='primary' startIcon={<CancelIcon />} style={{ margin: "10px" }}>
          cancel
        </Button>
        <Button variant='contained' color='error' startIcon={<DeleteForeverIcon />} style={{ margin: "10px" }}>
          delete
        </Button>
        <Button variant='outlined' color='primary' endIcon={<SendIcon />} style={{ margin: "10px" }}>
          send
        </Button>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography variant='h2' color='primary'>makeStyles to customized a component</Typography>
        <Button
          className={classes.btn}
        >
          useStyle
        </Button>
      </div>
    </Container>
  )

    
  
}
