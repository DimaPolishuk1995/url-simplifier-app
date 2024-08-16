import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { urlSchema, type UrlFormFields } from "@/schemas/validationSchema";

interface UseUrlFormProps {
  onSubmit: (originalUrl: string) => void;
}

export const useUrlForm = ({ onSubmit }: UseUrlFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UrlFormFields>({
    resolver: zodResolver(urlSchema),
  });

  const handleFormSubmit = handleSubmit((data: UrlFormFields) => {
    onSubmit(data.originalUrl);
    reset();
  });

  return {
    register,
    handleFormSubmit,
    errors,
  };
};
