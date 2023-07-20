import { Box,Divider, Heading, Image, List, ListItem} from '@chakra-ui/react'
import React from 'react'
import { FooterWrapper } from '../../css/footer'
import {giftByBudget,giftByPersona, bags, cases, downloadApp, helpdesk, homeoffice, knowus, network, others, paymentlogo, socialMediaLogo, straps, wallets,giftsByOccasion,giftByRelationship } from './footerData'
import AccordionComponent from './AccordionComponent'

const Footer = () => {
  return (
        <FooterWrapper>
        {/* <Heading fontWeight={"500"} textAlign={"center"} fontSize={"24px"}> GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</Heading> */}
        {/* <Box style={{width:"400px"}}>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        placeholder='Enter your email'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' >
          Subscribe
        </Button>
      </InputRightElement>
    </InputGroup>
        </Box> */}
        {/* <Box>
            <Heading fontWeight={"500"} textAlign={"center"} fontSize={"24px"}>FEATURED IN</Heading>
            <Image className='footer-img1-handler' src='https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1' alt='partner'/>
            <Image className='footer-img2-handler' src='https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1' alt='partner'/>
        </Box>
        <Divider/>
        <Box>
            <Heading fontWeight={"500"} textAlign={"center"} fontSize={"24px"}>HONEST REVIEWS. NOTHING ELSE.</Heading>
            <Image className='footer-img1-handler' src = "https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1" alt = "ratings"/>
            <Image className='footer-img2-handler' src = "https://images.dailyobjects.com/marche/assets/images/other/reviews-mobile-updateds-15.png?tr=cm-pad_resize,v-2,w-359,h-200,dpr-2,q-60 " alt = "ratings"/>
        </Box> */}
        <Divider/>
        <Box className='delivery-wrapper'>
            <Box className='delivery-flex-box'>
                <Box><Image src ="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" alt="icon1"/></Box>
                <Box>توصيل سريع</Box>
            </Box>
            <Box className='delivery-flex-box'>
                <Box><Image src ="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" alt="icon2"/></Box>
                <Box>خدمه استرجاع</Box>
            </Box>
            <Box className='delivery-flex-box'>
                <Box><Image src ="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" alt="icon3"/></Box>
                <Box>اعلي جوده</Box>
            </Box>
        </Box>
        <Divider/>
        <Box className='knowsus-wrapper'>
            <Box className='knowus-main-left'>
                <Box>
                    <Heading m={"16px 0px 24px"} fontSize={"16px"} >معرفه المزيد </Heading>
                    <Box>
                    <List className='knowus-li-css' >
                    {knowus?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
                <Box>
                <Heading m={"16px 0px 24px"} fontSize={"16px"} >للدعم</Heading>
                <Box>
                    <List className='knowus-li-css'>
                    {helpdesk?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
                <Box>
                <Heading m={"16px 0px 24px"} fontSize={"16px"} >للتواصل </Heading>
                <Box>
                    <List className='knowus-li-css'>
                    {network?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
            </Box>
            <Divider h={"auto"} orientation='vertical'/>
            <Box className='knowus-main-right'>
                <Box className='follous-main'>
                <Heading mb={"12px"} fontSize={"26px"}>تابعونا</Heading>
                <Box className='followus-css'>
                    {socialMediaLogo?.map((item,i)=>{
                        return <Box key={i+4}>
                            <Image w="100%" src={item.url} alt={item.name} />
                        </Box>
                    })}
                </Box>
                </Box>
                <Divider/>
                <Box className='download-main'>
                <Heading mb={"12px"} fontSize={"26px"}>
              تنزيل التطبيق     
                </Heading>
                <Box className='download-app'>
                {downloadApp?.map((item,i)=>{
                        return <Box key={i+4}>
                            <Image w="100%" src={item.url} alt={item.name} />
                        </Box>
                    })}
                </Box>
                </Box>
            </Box>
        </Box>
        <Divider/>
        <Box className="payment-main-css">
            <Heading fontSize={"16px"} mb={"15px"} textAlign={"center"}>وسائل دفع امانه%  ١٠٠</Heading>
            <Box className='payment-css'>
                {paymentlogo?.map((item,i)=>{
                    return <Box key ={i+2}>
                        <Image maxW={"86px"} src={item.url} alt={item.name}/>
                    </Box>
                })}
            </Box>
        </Box>
        <Box className='most-search-wraper'>
               <Box>
               <Heading m="16px 0px 24px" fontSize={"16px"}>الأكثر بحثا </Heading>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>الالكترونيات</Heading>
                <Box>
                <List className='footer-li-css'>
                    {cases?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
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
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>حقائب</Heading>
                <Box>
                <List className='footer-li-css'>
                    {bags?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>حافظه نقود</Heading>
                <Box>
                <List className='footer-li-css'>
                    {wallets?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>اخري</Heading>
                <Box>
                <List className='footer-li-css'>
                    {others?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
            <Divider/>
            <Box>
            <Box>
            <Heading m="16px 0px 24px" fontSize={"16px"}>هدايا</Heading>
            </Box>
            <Box>
                <Heading className='footer-serched-object-heading'>هدايا حسب المناسبه</Heading>
                <Box>

                <List className='footer-li-css'>

                    {giftsByOccasion?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
            </Box>
            <Box>
                <Heading className='footer-serched-object-heading'>هدايا</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByRelationship?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'></Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByPersona?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>هدايا متواضعه التكلفه</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByBudget?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
            </Box>
        </Box>
        <Box>
            <AccordionComponent/>
        </Box>
        <Box className='footer-last-conainer'>
        © July 2023 Developed by Manar.Adel💥Thank you for using our websit.
        </Box>
        </FooterWrapper>
  )
}

export default Footer
