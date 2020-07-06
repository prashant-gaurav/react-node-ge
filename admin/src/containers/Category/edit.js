import React from 'react';
import clsx from 'clsx';
import Menu from '../../components/Menu';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../components/Copyright';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {editCategory, updateCategory} from '../../services/category';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import {useHistory} from 'react-router';
import Notification from '../../components/Notification';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    minHeight: 350,
  },
  button: {
    marginTop: 50,
    background:
      'linear-gradient(90deg, rgba(131, 3, 139, 1) 0%, rgba(121, 9, 94, 1) 43%, rgba(98, 11, 126, 1) 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(131, 3, 139, 0.3)',
    textTransform: 'capitalize',
  },
  formControl: {
    marginTop: theme.spacing(2),
  },
}));

const NotificationScreen = props => {
  const {match} = props;
  const history = useHistory();
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [categoryTitle, setCreateTitle] = React.useState(null);
  const [categoryDetails, setCategoryDetails] = React.useState(null);
  const [isNewIcon, setIsNewIcon] = React.useState(false);
  const [categoryIcon, setCategoryIcon] = React.useState(
    'https://i.ibb.co/whP0RqX/upload.png'
  );
  const [notification, setNotification] = React.useState(null);
  const setFile = images => {
    setCategoryIcon(images[0]);
    setIsNewIcon(true);
  };

  React.useEffect(() => {
    let {categoryId} = match.params;
    editCategory(categoryId).then(
      d => {
        if (d.success) {
          setCreateTitle(d.data.categoryTitle);
          setCategoryDetails(d.data.categoryDetails);
          setCategoryIcon(d.data.categoryIcon);
        } else {
          setNotification({
            title: d.message,
            type: 'error',
          });
        }
      },
      error => {
        setNotification({
          title: 'something went wrong',
          type: 'error',
        });
      }
    );
  }, []);

  const onFormSubmit = async event => {
    event.preventDefault();
    let {categoryId} = match.params;
    setNotification(null);
    if (categoryTitle && categoryIcon) {
      const data = new FormData();
      data.append('isNewIcon', isNewIcon);
      data.append('title', categoryTitle);
      data.append('details', categoryDetails);
      data.append('icons', categoryIcon);
      await updateCategory(categoryId, data).then(
        d => {
          if (d.success) {
            setNotification({
              title: d.message,
              type: 'success',
            });
            history.push('/category');
          } else {
            setNotification({
              title: d.message,
              type: 'error',
            });
          }
        },
        error => {
          setNotification({
            title: 'Something went wrong',
            type: 'error',
          });
        }
      );
    } else {
      setNotification({
        title: 'title and icon is required',
        type: 'error',
      });
    }
  };

  const view = (
    <Container maxWidth="lg" className={classes.container}>
      {notification && (
        <Notification
          visible={true}
          title={notification.title}
          type={notification.type}
        />
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <Dropzone onDrop={setFile} noKeyboard>
              {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                  <AvatarEditor
                    width={285}
                    height={260}
                    color={[131, 3, 139, 1]} // RGBA
                    scale={0.8}
                    rotate={0}
                    image={categoryIcon}
                  />
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={fixedHeightPaper}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              // autoFocus
              label="Category Title"
              type="text"
              autoComplete="userName"
              autoFocus
              onChange={e => setCreateTitle(e.target.value)}
              value={categoryTitle}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Category Details"
              type="text"
              autoComplete="userName"
              // autoFocus
              required
              fullWidth
              multiline={true}
              rows={3}
              rowsMax={5}
              onChange={e => setCategoryDetails(e.target.value)}
              value={categoryDetails}
            />
            <Button
              onClick={onFormSubmit}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
            >
              UPDATE CATEGORY
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
    </Container>
  );
  return <Menu screen={view} />;
};
export default NotificationScreen;
