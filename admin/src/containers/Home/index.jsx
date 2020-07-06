import React, {useContext} from 'react';
import Menu from '../../components/Menu';
import Copyright from '../../components/Copyright';
import DashboardCard from './DashboardCard';
import GraphReports from './GraphReports';
import Notification from '../../components/Notification';
import {getDashboardData} from '../../services/dashboard';
import order from '../../assets/icons/order.svg';
import product from '../../assets/icons/product.svg';
import users from '../../assets/icons/users.svg';
import viewer from '../../assets/icons/viewer.svg';

function createData(time, amount) {
  return {time, amount};
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const Dashboard = () => {
  const [ordersCount, setOrdersCount] = React.useState(99899);
  const [productsCount, setProductsCount] = React.useState(79932);
  const [usersCount, setUsersCount] = React.useState(7879);
  const [visitorsCount, setVisitorsCount] = React.useState(66);
  const [notification, setNotification] = React.useState(66);

  React.useEffect(() => {
    const ss = window.sessionStorage.getItem('auth-session-data');
    const sessionData = JSON.parse(ss);
    setNotification({
      title: 'Welcome back',
      type: 'success',
    });
  }, []);

  const views = (
    <div className="container">
      <Notification
        visible={true}
        title={notification.title}
        type={notification.type}
      />
      <div className="row center">
        <DashboardCard
          count={ordersCount}
          title={'Orders'}
          icons={order}
          to={'/home'}
        />
        <DashboardCard
          count={productsCount}
          title={'Products'}
          icons={product}
          to={'/home'}
        />
        <DashboardCard
          count={usersCount}
          title={'Users'}
          icons={users}
          to={'/home'}
        />
        <DashboardCard
          count={visitorsCount}
          title={'Visitors'}
          icons={viewer}
          to={'/home'}
        />
      </div>
      <div className="row">
        <GraphReports title={'Sales report'} graphData={data} />
        <GraphReports title={'Visitors report'} graphData={data} />
      </div>

      <Copyright />
    </div>
  );
  return <Menu screen={views} />;
};
export default Dashboard;
