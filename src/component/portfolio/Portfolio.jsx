
import {
  Box,
  Heading,
  Text,
  Button,
  Tag,
  
  SimpleGrid,
  Badge,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import TechnicalWriting from "../technicalWriting/technicalWriting";

// HMIP Assets
import portfolio3 from "../../assets/HMIP.PNG";
import calculator from "../../assets/calculator.png";
import dashboard from "../../assets/dashboard.png";
import dataManagement from "../../assets/dataManagement.png";
import roles from "../../assets/roles.png";

// Enwuit Asset
import enwuit from "../../assets/enwuit.PNG";

const Portfolio = () => {
  return (
    <Box maxW="1000px" mx="auto" py={16} px={4}>
      
      {/* ========== SECTION 1: HMIP - LIVE PROJECT ========== */}
      <VStack spacing={4} mb={12} textAlign="center">
        <Badge colorScheme="green" px={3} py={1} borderRadius="full" fontSize="sm">
          🟢 Live in Production
        </Badge>
        <Heading as="h2" size="2xl" fontWeight="bold">
          HMIP Housing Portal
        </Heading>
        <Text color="gray.600" maxW="550px" fontSize="lg">
          Enterprise-grade platform with RBAC, analytics, and interactive tools
        </Text>
      </VStack>

      {/* HMIP Main Image */}
      <Box borderRadius="2xl" overflow="hidden" mb={8} boxShadow="lg">
        <Box as="img" src={portfolio3} alt="HMIP Portal" w="100%" />
      </Box>

      {/* HMIP Details */}
      <VStack align="stretch" spacing={6} mb={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <Box>
            <Heading as="h3" size="md" mb={3} color="teal.600">
              About HMIP
            </Heading>
            <Text>
              A centralised housing market intelligence platform providing housing insights, 
              analytics dashboards, and secure administrative controls for real estate decision-making.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={3} color="teal.600">
              My Role
            </Heading>
            <Text>
              Frontend Developer – Implemented core admin systems, RBAC architecture, 
              reusable components, interactive dashboards, and a mortgage calculator.
            </Text>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading as="h3" size="md" mb={3} color="teal.600">
            Tech Stack
          </Heading>
          <HStack spacing={2} wrap="wrap">
            {["Next.js", "MUI", "Redux Toolkit", "TypeScript", "Chart.js", "JWT", "Axios"].map((tech) => (
              <Tag key={tech} colorScheme="teal" size="md" variant="subtle">
                {tech}
              </Tag>
            ))}
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Heading as="h3" size="md" mb={3} color="teal.600">
              Key Features
            </Heading>
            <VStack align="start" spacing={2}>
              {[
                "User & Role Management (RBAC)",
                "Category & Housing Data CRUD",
                "Real-time Analytics Dashboard",
                "Mortgage Calculator Modal",
                "Protected Routes & Permissions",
              ].map((item) => (
                <HStack key={item} spacing={2}>
                  <FaCheckCircle color="#2C7A7B" size="14px" />
                  <Text fontSize="sm">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          <Box>
            <Heading as="h3" size="md" mb={3} color="teal.600">
              Modules I Built
            </Heading>
            <SimpleGrid columns={2} spacing={4}>
              {[
                { name: "Analytics Dashboard", img: dashboard },
                { name: "Data Management", img: dataManagement },
                { name: "RBAC System", img: roles },
                { name: "Mortgage Calculator", img: calculator },
              ].map((module) => (
                <Box key={module.name} textAlign="center">
                  <Box 
                    as="img" 
                    src={module.img} 
                    alt={module.name} 
                    borderRadius="lg" 
                    mb={2}
                    h="80px"
                    w="100%"
                    objectFit="cover"
                    border="1px solid"
                    borderColor="gray.200"
                    _dark={{ borderColor: "gray.600" }}
                  />
                  <Text fontSize="sm" fontWeight="medium">{module.name}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Divider />

        <Box>
          <Heading as="h3" size="md" mb={3} color="teal.600">
            Key Challenges Solved
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {[
              "Complex RBAC permission logic across 15+ user roles",
              "Global state management with Redux Toolkit",
              "40% faster dashboard performance optimization",
              "Secure JWT authentication with protected routes",
            ].map((challenge) => (
              <Text key={challenge} fontSize="sm">• {challenge}</Text>
            ))}
          </SimpleGrid>
        </Box>

        <Button
          as="a"
          href="https://hmip.webhostingng.org/"
          target="_blank"
          colorScheme="teal"
          size="lg"
          rightIcon={<FaExternalLinkAlt />}
          _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
        >
          View Live Project
        </Button>
      </VStack>

      {/* ========== SECTION 2: ENWUIT - SAME DESIGN AS HMIP ========== */}
      <VStack spacing={4} mb={12} textAlign="center">
        <Badge colorScheme="blue" px={3} py={1} borderRadius="full" fontSize="sm">
          🌐 Frontend Deployed
        </Badge>
        <Heading as="h2" size="2xl" fontWeight="bold">
          Enwuit Platform
        </Heading>
        <Text color="gray.600" maxW="550px" fontSize="lg">
          Educator & Admin Portal with complete UI implementation and bug fixes
        </Text>
      </VStack>

      {/* Enwuit Main Image - Same style as HMIP */}
      <Box borderRadius="2xl" overflow="hidden" mb={8} boxShadow="lg">
        <Box as="img" src={enwuit} alt="Enwuit Landing Page" w="100%" />
      </Box>

      {/* Enwuit Details - Same structure as HMIP */}
      <VStack align="stretch" spacing={6} mb={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <Box>
            <Heading as="h3" size="md" mb={3} color="blue.600">
              About Enwuit
            </Heading>
            <Text>
              A comprehensive platform for educators and administrators, providing tools for 
              course management, user administration, and real-time communication.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={3} color="blue.600">
              My Role
            </Heading>
            <Text>
              Frontend Developer – Built educator and admin landing pages, fixed critical bugs, 
              resolved UI issues, and implemented responsive design improvements.
            </Text>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading as="h3" size="md" mb={3} color="blue.600">
            Tech Stack
          </Heading>
          <HStack spacing={2} wrap="wrap">
            {["React 18", "MUI", "Redux Toolkit", "Axios",  "React Router",  "TypeScript", "Tailwind CSS"].map((tech) => (
              <Tag key={tech} colorScheme="blue" size="md" variant="subtle">
                {tech}
              </Tag>
            ))}
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Heading as="h3" size="md" mb={3} color="blue.600">
              What I Worked On
            </Heading>
            <VStack align="start" spacing={2}>
              {[
                "Built complete Educator landing page",
                "Developed Admin portal interface",
                "Fixed critical authentication bugs",
                "Resolved UI/UX inconsistencies",
                "Implemented responsive design",
                "Optimized page performance",
              ].map((item) => (
                <HStack key={item} spacing={2}>
                  <FaCheckCircle color="#3182CE" size="14px" />
                  <Text fontSize="sm">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          <Box>
            <Heading as="h3" size="md" mb={3} color="blue.600">
              Key Fixes & Improvements
            </Heading>
            <VStack align="start" spacing={2}>
              {[
                "Fixed broken navigation and routing",
                "Improved form validation & error handling",
                "Ensured cross-browser compatibility",
                "Fixed mobile menu interactions",
                "Optimized component rendering",
                "Resolved API integration issues",
              ].map((item) => (
                <HStack key={item} spacing={2}>
                  <FaCheckCircle color="#3182CE" size="14px" />
                  <Text fontSize="sm">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        <Divider />

        <Box>
          <Heading as="h3" size="md" mb={3} color="blue.600">
            Key Challenges Solved
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {[
              "Fixed complex state management issues with Redux",
              "Resolved real-time communication bugs with Socket.io",
              "Optimized MUI component performance",
              "Implemented responsive tables for data display",
              "Fixed authentication flow and token handling",
            ].map((challenge) => (
              <Text key={challenge} fontSize="sm">• {challenge}</Text>
            ))}
          </SimpleGrid>
        </Box>

        {/* <Box bg="blue.50" _dark={{ bg: "blue.900" }} p={4} borderRadius="lg" textAlign="center">
          <Text fontSize="sm">
            💡 <strong>Project Status:</strong> Frontend fully deployed at{' '}
            <strong>enwuit.com</strong>. Complete UI/UX implementation is live. 
            Backend integration is planned for full functionality. All frontend features, 
            responsive design, and interactive components are fully functional.
          </Text>
        </Box> */}

        <Button
          as="a"
          href="https://enwuit.com"
          target="_blank"
          colorScheme="blue"
          size="lg"
          rightIcon={<FaExternalLinkAlt />}
          _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
        >
          Visit Landing Page
        </Button>
      </VStack>

      {/* ========== SECTION 3: OTHER PROJECTS NOTE ========== */}
      <Box textAlign="center" p={6} bg="gray.50" borderRadius="xl" _dark={{ bg: "gray.700" }}>
        <Text fontSize="sm" color="gray.600">
          📌 <strong>Additional Projects Available:</strong> I've worked on several other applications 
          including an E-Learning Platform, Hospital Management System, and Agro E-commerce platform. 
          Complete frontend code is available on GitHub. Contact me for demo access or code repository links.
        </Text>
      </Box>

<Box Box maxW="1000px" mx="auto" py={16} px={4}>
<TechnicalWriting />
</Box>
      
    </Box>
  );
};

export default Portfolio;