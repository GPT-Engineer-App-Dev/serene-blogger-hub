// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Heading, Box, HStack, IconButton, Link, Image } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg" textAlign="center">Sharing thoughts, experiences, and insights on various topics.</Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <HStack spacing={4}>
          <Link href="https://twitter.com/yourprofile" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://github.com/yourprofile" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
