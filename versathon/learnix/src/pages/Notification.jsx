import NoNotifications from "../components/NoNotifications";
function Notification() {
  const notifications = [];

  return (
    <div>
      {notifications.length === 0 ? (
        <NoNotifications />
      ) : (
        // map your notifications here
        notifications.map((item) => <NotificationCard key={item.id} {...item} />)
      )}
    </div>
  );
}

export default Notification;