export const notEmpty = (s: string) => !!s.length
export const geThanZero = (n: any) => parseInt(n) >= 0

export const validateOnChange = ({ validate, setValue, setHasError }: {
  validate: (value: any) => boolean,
  setValue: (value: any) => void,
  setHasError: (hasError: boolean) => void
}) => (e: any) => {
  const value = e.target.value

  setValue(value)
  setHasError(!validate(value))
}
