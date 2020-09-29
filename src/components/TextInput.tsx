import React from 'react'
import TextField from '@material-ui/core/TextField'

type TextFieldProps = { label: string }

export default ({ label }: TextFieldProps) => <TextField
  label={label}
  margin="normal"
  InputLabelProps={{ shrink: true }}
  variant="outlined"
  fullWidth
/>
