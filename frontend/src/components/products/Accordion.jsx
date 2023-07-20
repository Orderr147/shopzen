import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";

function Acco(){
    return(
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        تفاصيل المنتج
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        تحديد
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text fontWeight="bold"></Text>
      <Text></Text>

      <Text fontWeight="bold"></Text>
      <Text></Text>

      <Text fontWeight="bold"></Text>
      <Text>  .</Text>

      <Text fontWeight="bold"></Text>
      <Text> </Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        خدمه التوصيل والاسترجاع 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text fontWeight="bold"></Text>
      <Text><br/></Text>

      <Text fontWeight="bold"></Text>
      <Text> LE.749.<br/></Text>

      <Text fontWeight="bold">CASH ON DELIVERY</Text>
      <Text></Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    )
}
export default Acco
