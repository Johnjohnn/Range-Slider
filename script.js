const range = document.getElementById("range")

range.addEventListener("input", (e) => {
    const value = +e.target.value
    const lable = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target). 
    getPropertyValue("width")
    const label_width = getComputedStyle(label). 
    getPropertyValue("width")

    const num_with = +range_width.substring(0, range_width.length - 2)
    lable.innerHTML = value
})