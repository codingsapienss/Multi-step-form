let form = document.querySelector('.form')
let formSteps = [...form.querySelectorAll('.form-step')]

let currentStep = formSteps.findIndex(step=>{
    return step.classList.contains('active')
})

let inputs =  [...formSteps[currentStep].querySelectorAll('input')]

form.addEventListener('click' , (e)=>{
    let incrementor 
    if (e.target.classList.contains('next')){
        incrementor = 1
    }else if(e.target.classList.contains('prev')){
        incrementor = -1
    }

    if( incrementor == null) return

    let inputs =  [...formSteps[currentStep].querySelectorAll('input')]

    const allValid = inputs.every((input)=>{
        return input.reportValidity()
    })

     if(allValid){
        currentStep += incrementor
        showCurrentStep()
    }
})

function showCurrentStep(){
    formSteps.forEach((step, index)=>{
        step.classList.toggle('active', index === currentStep)
    })
}
