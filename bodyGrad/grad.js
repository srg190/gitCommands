
const colorCal =(i)=>{
    const value = document.querySelector(`#value${i}`);
    const input = document.querySelector(`#pi_input${i}`);
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });
}
