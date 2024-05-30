import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
        <Image src="/images/blog-banner.jpg" alt="Blog Banner" boxSize="300px" objectFit="cover" borderRadius="md" />
        <Text fontSize="xl" textAlign="center">
          Dive into my personal thoughts, experiences, and stories. Stay tuned for more updates!
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;