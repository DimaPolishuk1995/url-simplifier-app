import React from "react";
import { Box } from "@mui/material";
import { FormTextField } from "@/components/form/FormTextField";
import { FormSubmitButton } from "@/components/form/FormSubmitButton";
import { useUrlForm } from "@/hooks/useUrlForm";

interface UrlFormProps {
  onSubmit: (originalUrl: string) => void;
}

export const UrlForm: React.FC<UrlFormProps> = ({ onSubmit }) => {
  const { register, handleFormSubmit, errors } = useUrlForm({ onSubmit });

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
      <FormTextField
        label="Enter a long URL"
        registration={register("originalUrl")}
        error={errors.originalUrl}
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.60)",
            },
          },
        }}
      />
      <FormSubmitButton label="Generate Short URL" />
    </Box>
  );
};
