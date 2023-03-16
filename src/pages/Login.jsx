import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Stack,
  Link,
  InputAdornment,
} from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import images from '../assets/01.jpg'
import {
  CopyrightOutlined,
  PasswordOutlined,
  Person,
  Person2Outlined,
  VisibilityOutlined,
} from '@mui/icons-material'
import { positions } from '@mui/system'
const Login = () => {
  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      {/* <CssBaseline /> */}

      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        component={Paper}
        // elevation={2}
        variant={'outlined'}
        square
        // minWidth={'400px'}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component='h1'
            variant='h4'
            fontSize={'32px'}
            fontWeight={800}
            lineHeight={'44px'}
            color={'#030037'}
          >
            Welcome
          </Typography>
          <Typography
            component='h1'
            variant='h4'
            fontSize={'14px'}
            fontWeight={400}
            lineHeight={'20px'}
            color={'#686687'}
          >
            Enter your Username and Password
          </Typography>
          <Box
            component='form'
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              fullWidth
              id='email'
              label='Username'
              name='text'
              autoComplete='email'
              autoFocus
            />
            <Person2Outlined />
            <LockOutlinedIcon />
            <VisibilityOutlined />
            <CopyrightOutlined />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              margin='normal'
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2, typography: 'capitalize' }}
            >
              Login
            </Button>

            <Grid item xs textAlign={'center'}>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundColor: 'blueviolet',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>
    </Grid>
  )
}
export default Login
