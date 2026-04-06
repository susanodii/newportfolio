
import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./experiencestepper.css";

const steps = [
  {
    title: "KSolutions Technology, Nigeria",
    duration: "August, 2023 - January, 2026",
    position: "Frontend Developer",
    location: "Remote",
    description: "Frontend development for diverse client projects in a startup environment",
    responsibilities: [
      "💻 Development: Architected and built 15+ complete web applications from scratch",
      "🔧 Technical: Implemented authentication, API integration, and state management solutions",
      "📱 Responsive: Created pixel-perfect, mobile-first interfaces for all projects",
      "🚀 Process: Established Git workflows, code review processes, and documentation standards",
      "🎯 Delivery: Consistently met client requirements and tight deadlines",
    ],
  },
  {
    title: "Tiidelab Fellowship, Nigeria",
    duration: "June, 2022 - December, 2022",
    position: "Frontend Developer Intern",
    location: "Remote",
    description: "Comprehensive frontend development training program",
    responsibilities: [
      "📚 Learning: Mastered React, Next.js, and modern JavaScript (ES6+)",
      "🛠️ Building: Developed a complete full-stack application with user authentication",
      "👥 Collaboration: Participated in daily stand-ups and pair programming sessions",
      "📈 Growth: Received mentorship and conducted code reviews",
    ],
  },
];

function ExperienceStepper() {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <section className="experience-stepper-section">
      <div className="stepper-header">
        <span className="stepper-subtitle">My Journey</span>
        <h2 className="stepper-title">Work Experience</h2>
        <div className="stepper-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="experinece_stepper_wrapper">
        <Stepper
          index={activeStep}
          orientation='vertical'
          height='auto'
          gap='0'
          className="custom-stepper"
        >
          {steps.map((step, index) => (
            <Step key={step.title} className="stepper-step">
              <StepIndicator className="stepper-indicator">
                <StepStatus
                  complete={<StepNumber />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box className="stepper-content">
                <div className="experience-card">
                  <div className="experience-card-header">
                    <div className="company-icon">
                      <FaBriefcase />
                    </div>
                    <div>
                      <StepTitle className="company-name">
                        {step.title}
                      </StepTitle>
                      <StepDescription className="job-title">
                        {step.position}
                      </StepDescription>
                    </div>
                  </div>

                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{step.location}</span>
                    </div>
                  </div>

                  <div className="experience-description">
                    <p>{step.description}</p>
                  </div>

                  <div className="experience-responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {step.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Box>

              {index < steps.length - 1 && <StepSeparator className="stepper-separator" />}
            </Step>
          ))}
        </Stepper>
      </div>
    </section>
  );
}

export default ExperienceStepper;

// import {
//   Box,
//   Step,
//   StepDescription,
//   StepIcon,
//   StepIndicator,
//   StepNumber,
//   StepSeparator,
//   StepStatus,
//   StepTitle,
//   Stepper,
//   useSteps,
// } from "@chakra-ui/react";
// import "./experiencestepper.css";

// const steps = [
//   {
//     title: "Tiidelab Fellowship, Nigeria",
//     duration: "June, 2022 - December, 2022",
//     description: "Select Rooms",
//     position: "Frontend Developer Intership",
//     location: "Remote",
//   },
//   {
//     title: "KSolutions Technology, Nigeria",
//     duration: "August, 2023 - present",
//     description: "Date & Time",
//     position: "Frontend Developer",
//     location: "Remote",
//   },
// ].reverse();

// function ExperienceStepper() {
//   const { activeStep } = useSteps({
//     index: 1,
//     count: steps.length,
//   });

//   return (
//     <div
//       style={{
//         display: "grid",
//         maxWidth: "1440px",
//         marginTop: "4rem",
//         placeContent: "center",
//         placeItems: "center",
//       }}
//     >
//       <h2>My Experience</h2>
//       <div className='experinece_stepper_wrapper'>
//         <Stepper
//           index={activeStep}
//           orientation='vertical'
//           height='400px'
//           gap='0'
//         >
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <Box marginRight={20}>
//                 <StepIndicator>
//                   <StepStatus
//                     complete={<StepNumber />}
//                     incomplete={<StepNumber />}
//                     active={<StepNumber />}
//                   />
//                 </StepIndicator>
//               </Box>

//               <Box
//                 flexShrink='0'
//                 display={"flex"}
//                 gap={"10"}
//                 justifyContent={"center"}
//               >
//                 <Box>
//                   <StepTitle>{step.title}</StepTitle>
//                   <StepDescription>{step.position}</StepDescription>
//                   <StepDescription>{step.duration}</StepDescription>
//                   <StepDescription>{step.location}</StepDescription>
//                 </Box>
//               </Box>

//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       </div>
//     </div>
//   );
// }

// export default ExperienceStepper;
