import React from 'react'
import Select from '@material-ui/core/Select'

export default ({ children, label, onChange, ...props }) => <Select
  native
  fullWidth
  onChange={onChange}
  label={label}
  inputProps={{
    name: 'age',
    id: 'outlined-age-native-simple',
  }}
  {...props}
>
  {children}
</Select>
