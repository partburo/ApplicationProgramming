(function () {
  let form = document.querySelector('#form');
  let editButton = document.querySelector('#editButton');
  let firstNameInput = document.querySelector('#firstNameInput');
  let firstNameText = document.querySelector('#firstNameText');
  let lastNameInput = document.querySelector('#lastNameInput');
  let lastNameText = document.querySelector('#lastNameText');
  let helloText = document.querySelector('#helloText');

  // form.onsubmit = handleFormSubmit;
  // firstNameInput.oninput = handleFirstNameChange;
  // lastNameInput.oninput = handleLastNameChange;

  let state = setState({
    firstName: 'Jane',
    lastName: 'Jacobs',
    isEditing: false
  }, render)

  function setState(initialState, render) {
    return new Proxy(initialState, {
      set(target, key, value) {
        target[key] = value
        render()
        return true
      }
    })
  }

  function render() {
    let { isEditing, firstName, lastName } = state
    if (!isEditing) {
      firstNameInput.value = firstName
      lastNameInput.value = lastName
    }
    firstNameText.textContent = firstName
    lastNameText.textContent = lastName
    helloText.textContent = `Hello, ${firstName} ${lastName}!`

    editButton.textContent = isEditing ? 'Save Profile' : 'Edit Profile'
    toggleVisibility(firstNameInput, isEditing)
    toggleVisibility(lastNameInput, isEditing)
    toggleVisibility(firstNameText, !isEditing)
    toggleVisibility(lastNameText, !isEditing)
  }

  function toggleVisibility(element, show) {
    element.style.display = show ? '' : 'none'
  }

  form.addEventListener('submit', e => {
    e.preventDefault()
    state.isEditing = !state.isEditing
  })

  firstNameInput.addEventListener('input', e => {
    state.firstName = e.target.value
  })

  lastNameInput.addEventListener('input', e => {
    state.lastName = e.target.value
  })
})()