import styles from "./styles.module.scss"
import { InputAdornment as InputAdrnmentMUI, InputAdornmentProps } from "@mui/material"
import clsx from "clsx"

export type Props = InputAdornmentProps & {
  small?: boolean
}

export default function InputAdornment({ small, children, ...rest }: Props) {
  return (
    <InputAdrnmentMUI
      {...rest}
      classes={{
        root: clsx(styles.inputAdornmentRoot, small && styles.sizeSmall),
        positionStart: styles.inputAdornmentStart,
        positionEnd: styles.inputAdornmentEnd,
      }}
    >
      {children}
    </InputAdrnmentMUI>
  )
}
