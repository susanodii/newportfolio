import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import "./experiencestepper.css";

const steps = [
  {
    title: "Tiidelab Fellowship, Nigeria",
    duration: "June, 2022 - December, 2022",
    description: "Select Rooms",
    position: "Frontend Developer Intership",
    location: "Remote",
  },
  {
    title: "KSolutions Technology, Nigeria",
    duration: "August, 2023 - present",
    description: "Date & Time",
    position: "Frontend Developer",
    location: "Remote",
  },
].reverse();

function ExperienceStepper() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <div
      style={{
        display: "grid",
        maxWidth: "1440px",
        marginTop: "4rem",
        placeContent: "center",
        placeItems: "center",
      }}
    >
      <h2>My Experience</h2>
      <div className='experinece_stepper_wrapper'>
        <Stepper
          index={activeStep}
          orientation='vertical'
          height='400px'
          gap='0'
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <Box marginRight={20}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepNumber />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
              </Box>

              <Box
                flexShrink='0'
                display={"flex"}
                gap={"10"}
                justifyContent={"center"}
              >
                <Box>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.position}</StepDescription>
                  <StepDescription>{step.duration}</StepDescription>
                  <StepDescription>{step.location}</StepDescription>
                </Box>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}

export default ExperienceStepper;
