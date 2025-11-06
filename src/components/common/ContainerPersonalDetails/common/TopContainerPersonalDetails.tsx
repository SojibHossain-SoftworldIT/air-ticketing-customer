import { Check } from "lucide-react";

const steps = [
  { id: 1, label: "Search", completed: true, },
  { id: 2, label: "Select", completed: true },
  { id: 3, label: "Details", completed: true },
  { id: 4, label: "Payment", completed: false },
  { id: 5, label: "Confirmation", completed: false },
];

const TopContainerPersonalDetails = () => {
  return (
    <div className="flex items-center justify-center gap-4  w-full">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-2">
          {/* Circle */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full  
            ${step.completed ? "bg-green-500 border-green-500 text-white" : "bg-[#F0F2F5]  text-[#000B2F]"}`}
          >
            {  step.completed ? <Check /> :<>  {step.id}  </>  }
          </div>

          {/* Label */}
          <span
            className={`text-sm ${step.completed ? "text-green-600" : "text-[#000B2F]"}`}
          >
            {step.label}
          </span>

          {/* Line (Except Last One) */}
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-0.5 ${step.completed ? "bg-green-500" : "bg-gray-300"
                }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopContainerPersonalDetails;
