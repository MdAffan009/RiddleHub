import { Button, Heading, VStack, Text } from "@chakra-ui/react";


const Home = () => {

  return (
    <>
      <VStack>

        <Heading size="4xl" textAlign="center">
          Welcome to RiddleHub!
        </Heading>

        <Text fontSize="xl" paddingTop={10} marginX={6}>
          RiddleHub is a platform for riddle enthusiasts to challenge their
          minds and share clever solutions. Whether you're a seasoned
          puzzle-solver or just beginning your journey into the world of
          riddles, RiddleHub offers an engaging space where logic, wit, and
          creativity are celebrated. With a vast collection of classic brain
          teasers, modern enigmas, and community-generated content, users can
          explore riddles by category, difficulty, or popularity. Each riddle is
          designed to test different cognitive skills—from lateral thinking and
          problem-solving to language mastery and pattern recognition.
        </Text>

        <Text fontSize="xl" paddingTop={4} marginX={6}>
          At the core of RiddleHub is a dynamic user experience centered around
          interaction and learning. Users can solve riddles at their own pace,
          track their progress, and even compete in timed challenges or themed
          events. The platform provides hints and explanations for those who
          want to learn without frustration, making it both fun and educational.
          Registered members can submit their own riddles, receive feedback from
          the community, and rate other users' submissions. This active
          participation fosters a sense of collaboration and friendly
          competition, creating a vibrant community of puzzle lovers from around
          the world.
        </Text>

        <Text fontSize="xl" paddingTop={4} marginX={6}>
          What truly sets RiddleHub apart is its developer-friendly API
          functionality, which enables integration with third-party apps,
          websites, or educational platforms. Developers can access a wide range
          of features via the RiddleHub API, such as retrieving random riddles,
          filtering by difficulty or category, posting new riddles, and
          retrieving community statistics or user leaderboards. This makes it an
          excellent tool for educators looking to enhance digital learning
          platforms, app creators developing trivia games, or content curators
          wanting to enrich their blogs or social media with engaging brain
          teasers. Comprehensive documentation ensures that even those with
          limited coding experience can make use of the API effectively.
        </Text>


        <Text fontSize="xl" paddingTop={4} marginX={6}>
          If you're ready to test your brain, contribute your own puzzles, or
          explore the world of riddles like never before, sign up today and
          become part of the RiddleHub community. Joining is free, and you'll
          gain access to exclusive content, track your solving stats, and take
          your riddle-solving journey to the next level.
        </Text>


        <Button marginTop={4} size={"xl"} width="150px" colorPalette="green" variant="outline">
          <a href="/signin">Get Started</a>
        </Button>
      </VStack>
    </>
  );
};

export default Home;
