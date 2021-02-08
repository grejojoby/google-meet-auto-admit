function admitNow() {
    for (let item of document.getElementsByTagName("span")) {
        if (item.innerHTML == "View all") {
            item.click()
        }
        else if (item.innerHTML == "Admit") {
            item.click()
        }
    }
}

setInterval(admitNow, 500)