function admitNow() {
    for(let item of document.getElementsByTagName("span")) {
        if (item.innerHTML == "Admit" || "View All" || "Admit All") {
            item.click()
        }
    }
    
}

setInterval(admitNow, 500)