import "./App.css";
import { useState } from "react";

const notifications = [
  { id: 1, message: "Payment received", read: false },
  { id: 2, message: "New comment", read: true },
  { id: 3, message: "Server alert", read: false },
  { id: 4, message: "Server alert hai bhai mere", read: false },
  { id: 5, message: "Server alert , fix kro jldi ", read: false },
];

const App = () => {
  const [notification, setnotification] = useState(notifications);

  const unReadNotification = notification.filter((n) => !n.read).length;

  const sortNotification = [...notification].sort((a, b) => a.read - b.read);

  function onToggleRead(id) {
    setnotification(
      notification.map((n) => (n.id === id ? { ...n, read: !n.read } : n)),
    );
  }

  return (
    <div>
      <h3>Unread Notification: {unReadNotification}</h3>
      {sortNotification.map((n) => (
        <div>
          <span>
            {n.message}
            <span
              className={`ml-2 font-medium ${
                n.read ? "text-green-500" : "text-red-500"
              }`}
            >
              {n.read ? "Read" : "Unread"}
            </span>
          </span>
          <button
            className="text-center items-center h-6 w-25 m-2  border-2 bg-violet-400"
            onClick={() => {
              onToggleRead(n.id);
            }}
          >
            Toggle{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
