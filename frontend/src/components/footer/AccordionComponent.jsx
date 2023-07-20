import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import {knowus,helpdesk,network,blogs,giftByBudget,giftByPersona,giftByRelationship,giftsByOccasion,others,wallets,cases,homeoffice,straps,bags } from './footerData'

const AccordionComponent = () => {
  return (
    <Box>
    <Accordion allowToggle>
    <Box className='footermedia'>
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
      للمزيد
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>

    <Box>
                    <List className='knowus-li-css' >
                    {knowus?.map((item,i)=>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}</List></Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        للدعم 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
    <Box>
                    <List className='knowus-li-css'>
                    {helpdesk?.map((item,i)=>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}</List></Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        شبكه التواصل
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
                <Box>
                    <List className='knowus-li-css'>
                    {network?.map((item,i)=>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}</List></Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        
الأكثر بحثًا
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
               <Box>
                <Heading className='footer-serched-object-heading'>كفر هاتف</Heading>
                <Box>
                <List className='footer-li-css'>
                    {cases?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>الصفحه الرئيسيه </Heading>
                <Box>
                <List className='footer-li-css'>
                    {homeoffice?.map((item, i) =>{
                        return <ListItem  key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>ساعات</Heading>
                <Box>
                <List className='footer-li-css'>
                    {straps?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>حقائب</Heading>
                <Box>
                <List className='footer-li-css'>
                    {bags?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>محافظ</Heading>
                <Box>
                <List className='footer-li-css'>
                    {wallets?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>المزيد</Heading>
                <Box>
                <List className='footer-li-css'>
                    {others?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
        </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1'  >
        هدايا
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
            <Box>
                <Heading className='footer-serched-object-heading'>هدايا حسب المناسبات</Heading>
                <Box>

                <List className='footer-li-css'>

                    {giftsByOccasion?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
            </Box>
            <Box>
                <Heading className='footer-serched-object-heading'>الهدايا</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByRelationship?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'></Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByPersona?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'></Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByBudget?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
            </Box>
    </AccordionPanel>
  </AccordionItem>
</Box>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        مدونه
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
                <Heading className='footer-serched-object-heading'></Heading>
                <Box>
                <List className='footer-li-css'>
                    {blogs?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
  )
}

export default AccordionComponent
