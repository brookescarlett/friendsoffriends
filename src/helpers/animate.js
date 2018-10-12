export const animator = function() {
    let tester = document.getElementById('tester')
    for (let i = 0; i <= 1; i += 0.01) {
        setTimeout(() => { tester.style.opacity = `${i}` }, i * 700)
    }
}


export const reset = function() {
    let tester = document.getElementById('tester')
    tester.style.opacity = "0"
}
