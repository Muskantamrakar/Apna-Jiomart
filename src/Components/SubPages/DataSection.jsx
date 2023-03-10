import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { SortButton } from "./SortButton";
import { v4 as uuidv4 } from "uuid";
import { ProductCard2 } from "./ProductCard2";
import { useState } from "react";
export const changeNumber = (val) => {
  let number = val.trim().split(" ");
  number = number[number.length - 1];
  return Number(number);
};
export const DataSection = ({ headerImage, cartdata }) => {
  const [data, setData] = useState(cartdata);

  let sortdata = [...cartdata];
  const handleSort = (text) => {
    if (text === "High to Low")
      sortdata.sort(
        (a, b) =>
          changeNumber(b["final-price"]) - changeNumber(a["final-price"])
      );
    if (text === "Low to High")
      sortdata.sort(
        (a, b) =>
          changeNumber(a["final-price"]) - changeNumber(b["final-price"])
      );
    if (text === "Discount")
      sortdata.sort(
        (a, b) => changeNumber(b["disc-price"]) - changeNumber(a["disc-price"])
      );
    if (text === "Popularity")
      sortdata.sort((a, b) => b["offer_value"] - a["offer_value"]);
    if (text === "All Products") setData(cartdata);
    setData(sortdata);
  };
  return (
    <Box w={["full", "full", "full", "78%", "75%", "75%"]} mx="auto" pt="20px">
      <Box
        w="100%"
        display={["none", "none", "none", "block", "block", "block"]}
      >
        <Image w="100%" h="100%" src={headerImage}></Image>
      </Box>
      <Flex
        align={"center"}
        justify="space-between"
        h="26px"
        mt="20px"
        fontSize={"14px"}
        display={["none", "none", "none", "flex", "flex", "flex"]}
      >
        <Flex gap={"4px"}>
          <Text>Showing</Text>
          <Text fontWeight={"black"}>20</Text> <Text>of</Text>{" "}
          <Text fontWeight={"black"}>3000000</Text> <Text>items</Text>
        </Flex>
        <HStack>
          <Text>Sort by :</Text>
          <SortButton
            onClick={() => handleSort("Popularity")}
            text="Popularity"
          />
          <SortButton
            onClick={() => handleSort("High to Low")}
            text="High to Low"
          />
          <SortButton
            onClick={() => handleSort("Low to High")}
            text="Low to High"
          />
          <SortButton onClick={() => handleSort("Discount")} text="Discount" />
          <SortButton
            onClick={() => handleSort("All Products")}
            text="All Products"
          />
        </HStack>
      </Flex>
      <Box w="100%" bg="white" mt="20px">
        <Heading p="10px 15px" fontSize="14px">
          ALL PRODUCTS
        </Heading>
        <Grid
          w="100%"
          bg="white"
          templateColumns={[
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
            `repeat(4,1fr)`,
            `repeat(4,1fr)`,
            `repeat(4,1fr)`,
          ]}
          gap="10px"
          p="10px"
        >
          {data.map((item) => (
            <GridItem key={uuidv4()}>
              <ProductCard data={item} />
              <ProductCard2 data={item} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
