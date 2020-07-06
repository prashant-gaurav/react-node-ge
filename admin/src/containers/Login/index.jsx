import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {userLogin} from '../../services/auth';
import {useHistory} from 'react-router';
import Copyright from '../../components/Copyright';
import LoadingIndicator from '../../components/Loading';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '70%',
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:
      'linear-gradient(90deg, rgba(131, 3, 139, 1) 0%, rgba(121, 9, 94, 1) 43%, rgba(98, 11, 126, 1) 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  error: {
    color: '#f44336',
  },
}));

const LoginScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [userName, setUserId] = useState('prashantgaurav1994@gmail.com');
  const [password, setPassword] = useState('password');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState(null);
  const submitLoginForm = async e => {
    e.preventDefault();
    if (userName && password) {
      setLoading(true);
      await userLogin(userName, password).then(
        authRes => {
          console.log(authRes.success);
          setLoading(true);
          if (authRes.success) {
            history.push('/');
          } else {
            setError(authRes.message);
          }
        },
        error => setLoading(false)
      );
    } else {
      setError('User Id and Password is require');
    }
  };
  return (
    <div>
      {isLoading && <LoadingIndicator />}
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ADMIN LOGIN
            </Typography>
            <Typography className={classes.error} component="h5" variant="p">
              {error}
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={submitLoginForm}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="User Id"
                type="text"
                autoComplete="userName"
                autoFocus
                onChange={e => setUserId(e.target.value)}
                value={userName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    onChange={e => setRememberPassword(!rememberPassword)}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                LOGIN
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Box mt={10}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default LoginScreen;
