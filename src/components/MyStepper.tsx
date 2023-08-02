import React, { Fragment, useState } from "react";
import clsx from "clsx";

interface IProps {
  labels: string[];
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  prevName?: string;
  nextName?: string;
  finishName?: string;
}

const Root: React.FC<IProps> = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<any>(
    props.labels
      .map((_, index) => index + 1)
      .reduce((final: any, curr: number) => {
        final[curr] = {};
        return final;
      }, {})
  );

  const nextHandler = (step: number, data: any) => {
    if (data) {
      setFormData((old: any) => ({ ...old, [step]: data }));
      if (step < props.labels.length) {
        setActiveStep(step + 1);
      } else {
        props.onSubmit({ ...formData, [step]: data });
      }
    }
  };

  const prev = () => {
    setActiveStep((old) => (old === 1 ? 1 : old - 1));
  };

  return (
    <div className="flex flex-1 flex-col gap-y-10">
      <ul className="flex justify-between">
        {props.labels.map((label, key) => (
          <li
            key={key}
            className={clsx(
              "border-b-8 border-b-blue-500 py-5",
              activeStep === key + 1 ? "text-blue-700" : ""
            )}>
            {label}
          </li>
        ))}
      </ul>
      <div className="w-full">
        {React.Children.map(props.children, (child: any, index) => {
          if (index + 1 === activeStep) {
            return React.cloneElement(child.props.children, {
              next: (data: any) => nextHandler(child.props.step, data),
              step: child.props.step,
              allData: formData,
              actions: (
                <div className="flex flex-1 items-center justify-between">
                  <button
                    type="button"
                    onClick={prev}
                    disabled={activeStep === 1}
                    className="bg-blue-300 px-5 py-2">
                    {props.prevName}
                  </button>
                  <button type="submit" className="bg-blue-300 px-5 py-2">
                    {activeStep === props.labels.length ? props.finishName : props.nextName}
                  </button>
                </div>
              )
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

Root.defaultProps = {
  labels: [],
  nextName: "next",
  prevName: "prev",
  finishName: "finish"
};

interface IStepProps {
  children: React.ReactNode;
  step: number;
}

const Step: React.FC<IStepProps> = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

const Stepper = { Root, Step };

export default Stepper;
