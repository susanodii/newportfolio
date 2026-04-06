import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Tag,
  Stack,
  SimpleGrid,
  Badge,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaFileAlt, FaUsers, FaCodeBranch, FaRobot, FaBlog } from "react-icons/fa";

const TechnicalWriting = () => {
  const articles = [
    {
      title: "Mautic Community Handbook",
      platform: "Open Source Contribution",
      description: "Contributed documentation to the Mautic community handbook",
      role: "Technical Writer - Added and improved documentation for the open source marketing automation platform",
      impact: "Helped improve community documentation for Mautic users worldwide",
      link: "https://github.com/mautic/mautic-community-handbook/pull/260",
      type: "open-source",
      buttonText: "View Pull Request",
    },
    {
      title: "Code Funhouse User Guide",
      platform: "Technical Documentation",
      description: "Step-by-step user guide on how to navigate the Code Funhouse platform",
      role: "Technical Writer - Created comprehensive navigation guide for new users",
      impact: "Helped users easily navigate the platform and access learning materials",
      link: "https://www.codefunhouse.com/",
      type: "user-guide",
      buttonText: "View Site",
    },
    {
      title: "Usability Testing Documentation",
      platform: "HMIP Project",
      description: "Detailed usability test plans, scripts, and results documentation",
      role: "Created test cases, user scenarios, and compiled findings",
      impact: "Identified 15+ UX improvements before launch",
      link: "https://docs.google.com/document/d/1YjVVQLciQVJSf7R7DDBgpAlfw-oRJapq/edit",
      type: "documentation",
      buttonText: "View Documentation",
    },
    {
      title: "Enwuit User Guide",
      platform: "Enwuit Platform",
      description: "Step-by-step user manual for platform features",
      role: "Wrote comprehensive user documentation on how to navigate and use platform features",
      impact: "Reduced support tickets by 30% through clear instructions",
      link: "https://docs.google.com/document/d/10ykZliNkGbCnYaDfkGEhnifbmsUnSk20OgYSmGUCAR4/edit?tab=t.0#heading=h.euqhmpyrvxqn",
      type: "guide",
      buttonText: "View Guide",
    },
  ];

  return (
    <Box mt={16}>
      {/* Section Header */}
      <VStack spacing={4} mb={12} textAlign="center">
        <Badge colorScheme="purple" px={3} py={1} borderRadius="full" fontSize="sm">
          📝 Technical Writing
        </Badge>
        <Heading as="h2" size="2xl" fontWeight="bold">
          Documentation & Content
        </Heading>
        <Text color="gray.600" maxW="550px" fontSize="lg">
          Bridging the gap between complex technology and users through clear, accessible documentation
        </Text>
      </VStack>

      {/* Hashnode Blog Section */}
      <Box
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="md"
        mb={8}
        transition="0.3s"
        _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
      >
        <Box bg="purple.600" p={4}>
          <HStack spacing={3}>
            <FaBlog color="white" size="24px" />
            <Text color="white" fontSize="lg" fontWeight="bold">Technical Blog</Text>
          </HStack>
        </Box>
        <Box p={6}>
          <HStack spacing={3} mb={3}>
            <Badge colorScheme="purple" fontSize="sm">Active Writer</Badge>
            <Badge colorScheme="green" fontSize="sm">Hashnode</Badge>
          </HStack>
          <Heading as="h3" size="md" mb={3}>
            Hashnode Blog - @Susanodii1
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Writing technical articles about frontend development, React, Next.js, 
            and software engineering best practices. Sharing knowledge and experiences 
            from real-world projects.
          </Text>
          <Button
            as="a"
            href="https://hashnode.com/@Susanodii1"
            target="_blank"
            colorScheme="purple"
            variant="solid"
            rightIcon={<FaExternalLinkAlt />}
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
          >
            Visit My Blog
          </Button>
        </Box>
      </Box>

      {/* Writing Grid */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {articles.map((article, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            transition="0.3s"
            _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
          >
            <Box bg={article.type === "open-source" ? "purple.500" : "teal.500"} p={3}>
              <HStack spacing={2}>
                {article.type === "open-source" ? <FaCodeBranch color="white" /> : <FaFileAlt color="white" />}
                <Text color="white" fontSize="sm" fontWeight="medium">{article.platform}</Text>
              </HStack>
            </Box>
            <Box p={5}>
              {article.type === "open-source" && (
                <HStack spacing={2} mb={2}>
                  <FaRobot color="#805AD5" />
                  <Text fontSize="xs" color="purple.500" fontWeight="semibold">Open Source Contribution</Text>
                </HStack>
              )}
              <Heading as="h3" size="md" mb={2}>
                {article.title}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={3}>
                {article.description}
              </Text>
              <Divider my={3} />
              <VStack align="start" spacing={1} mb={4}>
                <Text fontSize="xs">
                  <strong>My Role:</strong> {article.role}
                </Text>
                <Text fontSize="xs">
                  <strong>Impact:</strong> {article.impact}
                </Text>
              </VStack>
              <Button
                size="sm"
                colorScheme={article.type === "open-source" ? "purple" : "teal"}
                variant="solid"
                width="100%"
                rightIcon={<FaExternalLinkAlt />}
                as="a"
                href={article.link}
                target="_blank"
                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
              >
                {article.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Skills & Tools */}
      <Box mt={8} p={5} bg="gray.50" borderRadius="xl" _dark={{ bg: "gray.700" }}>
        <Heading as="h3" size="sm" mb={3}>
          Technical Writing Skills & Tools
        </Heading>
        <HStack spacing={2} wrap="wrap" mb={4}>
          {[
            "Markdown", "GitHub Markdown", "Technical Documentation", 
            "User Guides", "Usability Testing", 
             "Technical Editing", "Open Source Contribution"
          ].map((skill) => (
            <Tag key={skill} size="sm" colorScheme="purple" variant="subtle">
              {skill}
            </Tag>
          ))}
        </HStack>
        <Text fontSize="sm" color="gray.600">
          💡 <strong>Why this matters:</strong> My technical writing background means I document my code, 
          communicate clearly with teams, and create user-friendly experiences. This has saved teams 
          hundreds of hours in onboarding and support.
        </Text>
      </Box>
    </Box>
  );
};

export default TechnicalWriting;