import React from "react";
import { Button } from "@mui/material";

interface FormSubmitButtonProps {
  label: string;
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  label,
}) => {
  return (
    <Button type="submit" variant="contained" color="primary" fullWidth>
      {label}
    </Button>
  );
};
