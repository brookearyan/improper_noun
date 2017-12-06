export const updateHaikuFormData = haikuFormData => {
  return {
    type: 'UPDATED_DATA',
    haikuFormData
  }
}

export const resetHaikuForm = () => {
  return {
    type: 'RESET_HAIKU_FORM'
  }
}
