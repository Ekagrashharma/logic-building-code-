

export function updateForm(state, field, value) {
  return {
    ...state,
    [field]: value
  }
}

