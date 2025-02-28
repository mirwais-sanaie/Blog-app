/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Notification.css";
import { useAuthContext } from "../context/FireAuthContext";

function Notification({ onClose }) {
  const { user } = useAuthContext();
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="notification">{`Welcome ${user.displayName}`}</div>;
}
export default Notification;
