import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FiLogOut} from "react-icons/fi";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { FaWrench } from "react-icons/fa6";
import { FaTasks,  FaBox } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

const navItems = [
  { label: "Dashboard", icon: RiDashboard3Fill },
  { label: "Household", icon: IoMdHome },
  { label: "Inventory", icon: FaBox },
  { label: "Maintenances", icon: FaWrench },
  {label: "My Tasks", icon: FaTasks},
  { label: "Activity Log", icon: FaClockRotateLeft },
];

const Sidebar = () => {
  const bg = "gray.50";

  return (
    <Box
      w="250px"
      h="100vh"
      bg={bg}
      p={4}
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Top - Logo + Nav */}
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={8}>
          HouseholdWeb
        </Text>
        <VStack spacing={4} align="stretch">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<Icon as={item.icon} />}
              _hover={{ bg: "gray.200" }}
            >
              {item.label}
            </Button>
          ))}
        </VStack>
      </Box>

      {/* Bottom - Email + Logout */}
      <Box>
        <Text fontSize="md" color="black" mb={2}>
          User Name
        </Text>
        <Text fontSize="sm" color="black" mb={2}>
          user@example.com
        </Text>
        <Button
          leftIcon={<FiLogOut />}
          width="100%"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
