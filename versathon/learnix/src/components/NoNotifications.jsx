export default function NoNotifications() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <div className="bg-white border border-gray-300 rounded-xl shadow-md p-8 w-full max-w-md transition-transform duration-300 hover:scale-105">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1380/1380641.png"
          alt="No notifications"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-[#075985]">
          No New Notifications
        </h2>
        <p className="text-gray-500">
          You’re all caught up! Check back later for updates.
        </p>
      </div>
    </div>
  );
}