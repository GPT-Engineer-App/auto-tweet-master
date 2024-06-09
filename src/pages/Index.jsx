import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, Textarea, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaHeart, FaComment, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({ username: "", apiKey: "", apiSecret: "", accessToken: "", accessTokenSecret: "" });
  const [tweet, setTweet] = useState("");
  const [targetUser, setTargetUser] = useState("");
  const [comment, setComment] = useState("");

  const handleAddAccount = () => {
    setAccounts([...accounts, newAccount]);
    setNewAccount({ username: "", apiKey: "", apiSecret: "", accessToken: "", accessTokenSecret: "" });
  };

  const handlePostTweet = (account) => {
    // Call backend API to post tweet
    console.log(`Posting tweet for ${account.username}: ${tweet}`);
  };

  const handleLikeTweet = (account) => {
    // Call backend API to like tweet
    console.log(`Liking tweet for ${account.username}`);
  };

  const handleCommentTweet = (account) => {
    // Call backend API to comment on tweet
    console.log(`Commenting on tweet for ${account.username}: ${comment}`);
  };

  const handleFollowUser = (account) => {
    // Call backend API to follow user
    console.log(`Following user for ${account.username}: ${targetUser}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Twitter Automation Tool</Text>
        <Box width="100%">
          <Text>Add New Account</Text>
          <HStack spacing={2}>
            <Input placeholder="Username" value={newAccount.username} onChange={(e) => setNewAccount({ ...newAccount, username: e.target.value })} />
            <Input placeholder="API Key" value={newAccount.apiKey} onChange={(e) => setNewAccount({ ...newAccount, apiKey: e.target.value })} />
            <Input placeholder="API Secret" value={newAccount.apiSecret} onChange={(e) => setNewAccount({ ...newAccount, apiSecret: e.target.value })} />
            <Input placeholder="Access Token" value={newAccount.accessToken} onChange={(e) => setNewAccount({ ...newAccount, accessToken: e.target.value })} />
            <Input placeholder="Access Token Secret" value={newAccount.accessTokenSecret} onChange={(e) => setNewAccount({ ...newAccount, accessTokenSecret: e.target.value })} />
            <Button onClick={handleAddAccount}>Add</Button>
          </HStack>
        </Box>
        <Box width="100%">
          <Text>Post a Tweet</Text>
          <Textarea placeholder="What's happening?" value={tweet} onChange={(e) => setTweet(e.target.value)} />
        </Box>
        <Box width="100%">
          <Text>Target User</Text>
          <Input placeholder="Username" value={targetUser} onChange={(e) => setTargetUser(e.target.value)} />
        </Box>
        <Box width="100%">
          <Text>Comment</Text>
          <Textarea placeholder="Write a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        </Box>
        {accounts.map((account, index) => (
          <Box key={index} width="100%" borderWidth="1px" borderRadius="lg" padding={4} marginY={2}>
            <Text fontSize="lg">{account.username}</Text>
            <HStack spacing={2}>
              <Button leftIcon={<FaTwitter />} onClick={() => handlePostTweet(account)}>
                Tweet
              </Button>
              <IconButton aria-label="Like" icon={<FaHeart />} onClick={() => handleLikeTweet(account)} />
              <IconButton aria-label="Comment" icon={<FaComment />} onClick={() => handleCommentTweet(account)} />
              <IconButton aria-label="Follow" icon={<FaUserPlus />} onClick={() => handleFollowUser(account)} />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
