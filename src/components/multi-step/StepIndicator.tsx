
type Step = {
  id: string
  name: string
}

type Props = {
  steps: Step[]
  currentStep: string
}

export function StepIndicator({ steps, currentStep }: Props) {
  return (
    <>
      <ul className="flex flex-col px-4 rounded py-8 text-white"
    style={{ backgroundImage: 'url(./assets/images/bg-sidebar-desktop.svg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
     
      {steps.map(step => (
        <li key={step.id} className="flex gap-x-2 my-3 px-5">
       <div
            className={`rounded-full border h-8 w-8 text-xs font-semibold e text-center p-2 ${
              step.id === currentStep
                ? 'text-marineBlue bg-lightBlue '
                : 'text-lightBlue hover:text-marineBlue hover:bg-lightBlue'
            }`}
          >{step.id}
        </div>
        <div className='pb-2'>
          <p className='text-xs text-coolGray '>STEP {step.id}</p>
          <p className='uppercase text-xs font-bold'>{step.name}</p>
        </div>
      </li>
      ))}      
      
    </ul>

    </>
  
  )
}
