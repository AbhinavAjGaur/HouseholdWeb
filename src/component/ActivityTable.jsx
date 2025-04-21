import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";

const ActivityTable = () => {
  const activityData = [
    {
      timestamp: "2025-01-15 14:30",
      description: "Updated inventory item: Milk (2 gallons)",
      location: "Inventory Page",
      user: "Ananya Singh",
    },
    {
      timestamp: "2025-01-15 13:45",
      description: "Added new task: Clean living room",
      location: "Tasks Page",
      user: "Mahammad Ahadzade",
    },
    {
      timestamp: "2025-01-15 12:15",
      description: "User login successful",
      location: "Login Page",
      user: "Sanan Ismayilli",
    },
  ];

  return (
    <Box mt={6} bg="white" borderRadius="md" boxShadow="sm" p={4}>
      {/* Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Timestamp</Th>
            <Th>Description</Th>
            <Th>Location</Th>
            <Th>User</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {activityData.map((item, index) => (
            <Tr key={index}>
              <Td>{item.timestamp}</Td>
              <Td>{item.description}</Td>
              <Td color="gray">{item.location}</Td>
              <Td>{item.user}</Td>
              <Td>
                <Flex gap={2}>
                  <IconButton
                    icon={<RiInformation2Fill />}
                    variant="ghost"
                    size="sm"
                    aria-label="Info"
                    color="gray.600"
                  />
                  <IconButton
                    icon={<FaTrash />}
                    variant="ghost"
                    size="sm"
                    aria-label="Delete"
                    color="gray.600"
                  />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Pagination */}
      <Flex justify="flex-end" mt={4} gap={1} align="center">
        <Button size="sm" variant="ghost">
          Previous
        </Button>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            size="sm"
            variant={page === 1 ? "solid" : "outline"}
            colorScheme={page === 1 ? "gray" : "gray"}
            borderRadius="md"
          >
            {page}
          </Button>
        ))}
        <Button size="sm" variant="ghost">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default ActivityTable;
