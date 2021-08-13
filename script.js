const range = document.getElementById("range")

range.addEventListener("input", (e) => {
    const value = +e.target.value
    const lable = e.target.nextElementSibling
    lable.innerHTML = value
})