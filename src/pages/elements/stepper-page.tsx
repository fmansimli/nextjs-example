import Stepper from "@/components/MyStepper";

import FirstStep from "@/_features/elements/steps/FirstStep";
import SecondStep from "@/_features/elements/steps/SecondStep";
import ThirdStep from "@/_features/elements/steps/ThirdStep";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col p-24">
      <Stepper.Root
        onSubmit={(data) => console.log("submitted", data)}
        labels={["First step", "Second Step", "Third Step", "Fourth Step"]}>
        <Stepper.Step step={1}>
          <FirstStep />
        </Stepper.Step>

        <Stepper.Step step={2}>
          <SecondStep />
        </Stepper.Step>

        <Stepper.Step step={3}>
          <ThirdStep />
        </Stepper.Step>

        <Stepper.Step step={4}>
          <ThirdStep />
        </Stepper.Step>
      </Stepper.Root>
    </div>
  );
};

export default Page;
