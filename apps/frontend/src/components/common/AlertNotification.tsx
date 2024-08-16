import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface AlertNotificationProps {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
  onClose: () => void;
}

const AlertNotification: React.FC<AlertNotificationProps> = ({
  open,
  message,
  severity,
  onClose,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertNotification;
