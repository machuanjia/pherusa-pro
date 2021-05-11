export const isPhoneNumber = (value: string): boolean => {
  const regex = /^((\+)?86|((\+)?86)?)0?1[3456789]\d{9}$/
  if (value) {
    return regex.test(value)
  }
  return false
}
