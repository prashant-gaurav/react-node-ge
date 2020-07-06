import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const AlertNotification = props => {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
};

const Notification = props => {
  const {visible, title, type} = props;
  const [isNotification, setIsNotification] = React.useState(visible);
  const closeNotification = () => {
    setIsNotification(!isNotification);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        key={{vertical: 'bottom', horizontal: 'right'}}
        open={isNotification}
        autoHideDuration={500}
        onClose={closeNotification}
      >
        <AlertNotification onClose={closeNotification} severity={type}>
          {title}
        </AlertNotification>
      </Snackbar>
    </div>
  );
};
export default Notification;
