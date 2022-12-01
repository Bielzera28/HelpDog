import { Box, Modal as ModalMUI, ModalProps } from "@mui/material"

export type Props = ModalProps & {
  borderRadius?: string
  backgroundColor?: string
}

export default function Modal({ backgroundColor = "#ffffff", borderRadius = "5px", children, open, ...rest }: Props) {
  const centerModalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <ModalMUI open={open} {...rest}>
      <Box sx={{ ...centerModalStyle, backgroundColor, borderRadius }}>{children}</Box>
    </ModalMUI>
  )
}