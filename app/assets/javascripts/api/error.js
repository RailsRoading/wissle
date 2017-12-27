function handleApiError(error) {
  var text = (error.responseJSON ? error.responseJSON.errors.join(', ') : error.statusText) || error;
  showAlert(text);

  if (error.status && error.status === 401) {
    window.localStorage.clear();
    window.location = '/user';
  }
}
