export const getsection = (num) => {
    const getSpan = document.querySelector(`span[data-number='${num}']`);
    const getDiv = getSpan.closest('.box')
    return getDiv.getAttribute('data-section');
}

/* console.log(getsection(2)); */