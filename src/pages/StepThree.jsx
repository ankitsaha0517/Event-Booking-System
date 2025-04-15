import { useDispatch } from "react-redux";
import { addEvent } from "../store/reducers/eventSlice";

const StepThree = ({ formData, prevStep, setFormData,setStep }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    const sentFrom =  {
      name: formData.eventName,
      date: formData.date,
    }
    dispatch(addEvent(sentFrom))
  
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventName: "",
      date: "",
      time: "",
      message: "",
    });

    // Go back to step 1
    setStep(1);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-800 p-4 rounded-md">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
        <p>
          <strong>Event:</strong> {formData.eventName}
        </p>
        <p>
          <strong>Date:</strong> {formData.date}
        </p>
        <p>
          <strong>Time:</strong> {formData.time}
        </p>
      </div>
      <div className="flex gap-4">
        <button onClick={prevStep} className="btn-secondary">
          Back
        </button>
        <button onClick={handleSubmit} className="btn-primary">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default StepThree;
