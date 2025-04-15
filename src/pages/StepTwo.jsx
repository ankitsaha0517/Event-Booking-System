const StepTwo = ({ formData, handleChange, nextStep, prevStep }) => {
    return (
      <div className='space-y-4'>
        <input type='text' name='eventName' value={formData.eventName} onChange={handleChange} placeholder='Event Name' />
        
        <input type='text' name='time' value={formData.time} onChange={handleChange} placeholder='Time (e.g., 10:00 AM)' />
        <div className='flex gap-4'>
          <button onClick={prevStep} className='btn-secondary'>Back</button>
          <button onClick={nextStep} className='btn-primary'>Next</button>
        </div>
      </div>
    )
  }
  
  export default StepTwo