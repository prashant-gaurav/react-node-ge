import React from 'react';
import Menu from '../../components/Menu';
import {getCategory, deleteCategory} from '../../services/category';
import Copyright from '../../components/Copyright';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import {makeStyles} from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import {useHistory} from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Loading from '../../components/Loading';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  table: {
    minWidth: 650,
    minHeight: 200,
    padding: 30,
  },
  button: {
    background:
      'linear-gradient(90deg, rgba(131, 3, 139, 1) 0%, rgba(121, 9, 94, 1) 43%, rgba(98, 11, 126, 1) 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textTransform: 'capitalize',
  },
  userAvatar: {
    width: 60,
    height: 60,
    padding: 10,
  },
}));

const Category = () => {
  const styles = useStyles();
  const history = useHistory();
  const [categoryLists, setCategoryLists] = React.useState(null);
  React.useEffect(() => {
    getCategory().then(
      d => {
        console.log(d);
        if (d.success) {
          //   console.log(d.data);
          setCategoryLists(d.data);
        } else {
          console.log('error');
          console.log(d);
          // setError(authRes.message);
        }
      },
      error => {}
      // setLoading(false),
    );
  }, []);
  const columns = [
    {
      name: 'ID',
      label: 'ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Title',
      name: 'Title',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Description',
      name: 'Description',
      options: {
        filter: false,
      },
    },
    {
      name: 'Icons',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Avatar
              alt="User Avatar"
              src={tableMeta.rowData[3]}
              className={styles.userAvatar}
            />
          );
        },
      },
    },
    {
      name: 'Edit',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Link
              classes={{root: styles.button}}
              to={`/category/edit/${tableMeta.rowData[0]}`}
            >
              <Button
                classes={{root: styles.button}}
                type={'submit'}
                title={'edit'}
              >
                Edit
              </Button>
            </Link>
          );
        },
      },
    },
    {
      name: 'Delete',
      options: {
        filter: false,
        sort: false,
        display: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              classes={{root: styles.button}}
              type={'submit'}
              title={'disable'}
              onClick={() => {
                let isConfirm = prompt('Please type "delete" to delete?', '');
                if (isConfirm === 'delete') {
                  deleteCategory(tableMeta.rowData[0]).then(
                    d => {
                      if (d.success) {
                        alert('ok');
                        // setPostsData(
                        //   postsData.splice(
                        //     tableMeta.rowIndex + 1,
                        //     postsData.length
                        //   )
                        // );
                      } else {
                        // console.log(d);
                        // setError(authRes.message);
                      }
                    },
                    error => {}
                    // setLoading(false),
                  );
                } else {
                  alert('Interest is invalid or null');
                }
              }}
            >
              Delete
            </Button>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    selectableRows: false,
    filterType: 'dropdown',
    responsive: 'stacked',
    rowsPerPage: 10,
    responsive: 'stacked',
    fixedHeader: true,
  };
  const views = (
    <div className="container">
      <div className="column">
        <TableContainer className={styles.table}>
          {categoryLists ? (
            <MUIDataTable
              title={
                <Button
                  classes={{root: styles.button}}
                  type={'submit'}
                  title={'add new'}
                  onClick={() => {
                    history.push('/category/create');
                  }}
                >
                  ADD NEW
                </Button>
              }
              data={categoryLists}
              columns={columns}
              options={options}
            />
          ) : (
            <Loading />
          )}
        </TableContainer>
      </div>
      <Copyright />
    </div>
  );
  return <Menu screen={views} />;
};
export default Category;
