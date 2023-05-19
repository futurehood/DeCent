window.addEventListener("load", (e) => {

    const offsetY = window.scrollY

    console.log("Loaded", offsetY)

    if (offsetY === 0) {
        window.location.hash = "welcome"
    }


})