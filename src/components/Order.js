import React from 'react';
import { motion } from 'framer-motion'


const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      initial={{ x: '-100vw'}}
      animate={{ x: 0 ,scale:1}}
      transition={{ delay:0.8,duration: 10, type: 'spring', stiffness: 120 }}
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;

