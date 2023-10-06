import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CustomButtonProps {
  children: React.ReactNode;
  buttonClass?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}
const CustomButton = ({
  children,
  buttonClass,
  onClick,
  type,
  disabled,
}: CustomButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-indigo-600 rounded-[5px] caret-transparent shadow-md shadow-blue-600 hover:text-blue-600 hover:from-white hover:to-white",
        buttonClass
      )}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
