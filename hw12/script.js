

const createTooltip = (element, text) => {

    const tooltip = document.createElement('div');
    tooltip.classList.add('elemTooltip');

    tooltip.innerText = text;

    document.body.append(tooltip);

    let coords = element.getBoundingClientRect();
    
    tooltip.style.left = `${(coords.left + (element.offsetWidth  - tooltip.offsetWidth) / 2)}px`;
    tooltip.style.top = `${(coords.top - tooltip.offsetHeight - 10)}px`;

}


const button = document.getElementById('example');

createTooltip(button, 'example text bla bla bla');