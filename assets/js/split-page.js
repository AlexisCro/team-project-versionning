function renderContent(page, divId) {
    const content = document.getElementById(divId)
    const url = `./pages/${page}.html`
    fetch(url)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data
        })
}
