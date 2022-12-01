import { Button as ButtonMUI, ButtonProps } from "@mui/material"

export default function Button({
  children,
  color = "primary",
  size = "large",
  variant = "contained",
  ...rest
}: ButtonProps) {
  return (
    <ButtonMUI {...rest} color={color} size={size} sx={{ whiteSpace: "nowrap", ...rest.sx }} variant={variant}>
      {children}
    </ButtonMUI>
  )
}