import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 2, type: 'spring', stiffness: 120 }}
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.5,
                color:'orange',
                originX:0,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{type:'spring',stiffness:300}}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",


          }}
          transition={{ duration: 1, type: 'spring', stiffness: 120 }}
          initial={{ x: '-10vw' }}
          animate={{ x: 0 }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;