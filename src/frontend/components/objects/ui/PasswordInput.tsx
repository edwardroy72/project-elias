import React, { ChangeEventHandler } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PropTypes from "prop-types";
import { SxProps } from "@mui/system";

interface PasswordProps {
  sx: SxProps;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
}

const PasswordInput = (props: PasswordProps) => {
  const { sx, onChange, label } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  return (
    <FormControl sx={{ ...sx }}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput
        id={label}
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

PasswordInput.propTypes = {
  sx: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default PasswordInput;
