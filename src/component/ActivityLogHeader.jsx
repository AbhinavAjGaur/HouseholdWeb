import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const ActivityLogHeader = () => {
  return (
    <Box px={6} py={4}>
      {/* Heading and Search Bar */}
      <Flex justify="space-between" align="center" flexWrap="wrap">
        <Box>
          <Heading size="md" mb={1}>
            Activity Logs
          </Heading>
          <Text fontSize="sm" color="gray.600">
            Track all activities and changes in your household
          </Text>
        </Box>

        <InputGroup maxW="250px" mt={{ base: 3, md: 0 }}>
          <InputLeftElement pointerEvents="none">
            <IoSearchOutline color="gray.400" />
          </InputLeftElement>
          <Input placeholder="Search activities" />
        </InputGroup>
      </Flex>

      {/* Filters Box */}
      <Box
        mt={6}
        bg="white"
        p={4}
        borderRadius="md"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.200"
      >
        <Flex
          gap={4}
          flexWrap="wrap"
          align="end"
          justify="flex-start"
        >
          <FormControl maxW="200px">
            <FormLabel fontSize="sm" color="gray.600">
              Location
            </FormLabel>
            <Select placeholder="All Locations">
              <option>Kitchen</option>
              <option>Living Room</option>
              <option>Garage</option>
            </Select>
          </FormControl>

          <FormControl maxW="200px">
            <FormLabel fontSize="sm" color="gray.600">
              User
            </FormLabel>
            <Select placeholder="All Users">
              <option>Ananya Singh</option>
              <option>Mahammad Ahadzade</option>
              <option>Sanan Ismayilli</option>
            </Select>
          </FormControl>

          <FormControl maxW="200px">
            <FormLabel fontSize="sm" color="gray.600">
              Date
            </FormLabel>
            <Input type="date" placeholder="mm/dd/yyyy" />
          </FormControl>

          {/* Push button to right */}
          <Box ml="auto">
            <Button colorScheme="gray" height="40px" px={6}>
              Apply Filters
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ActivityLogHeader;
