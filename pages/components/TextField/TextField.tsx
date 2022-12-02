import styles from "./styles.module.scss";
import { Box, InputLabel, TextField as TextFieldMUI, TextFieldProps } from "@mui/material";
import Text from "../Text/Text";

export type Props = TextFieldProps & {
  topLabel?: string
  topLabelColor?: string
  maxWidth?: number
}

export default function TextField({ fullWidth = true, id, label, topLabel, topLabelColor, maxWidth, ...rest }: Props) {
  return (
    <Box className={styles.container} maxWidth={maxWidth} width="100%">
      {topLabel && (
        <InputLabel style={{ width: "fit-content", marginBottom: 8, cursor: "pointer" }} htmlFor={topLabel}>
          <Text fontWeight="600" color={topLabelColor}>
            {topLabel}
          </Text>
        </InputLabel>
      )}
      <TextFieldMUI
        InputProps={{ classes: { inputSizeSmall: styles.sizeSmall } }}
        {...rest}
        fullWidth
        classes={{ root: styles.textFieldRoot }}
        label={label}
        id={topLabel ?? id}
      />
    </Box>
  )
}
