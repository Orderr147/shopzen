
import styles from "./EmptyCart.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link} from "react-router-dom"

function EmptyCart() {
  return (
    <>
      <div className={styles.empty_cart_maindiv}>
        <p>السله فارغه </p>
        <p>اذهب للتسوق أولا </p>
        
        <div >
        <Link to="/product">
        <Button colorScheme='green' borderRadius={0} m="auto" size='lg'  >
          تصفح المنتجات
        </Button>
        </Link>
        </div>

       
      </div>
    </>
  )
}

export default EmptyCart
