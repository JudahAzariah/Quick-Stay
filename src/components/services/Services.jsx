import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Pay Less, Stay Smart, Save More
          
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/logo222.jpeg" alt="" height="175px"/>
          <h1>
            <motion.b whileHover={{color:"orange"}}>Our Range</motion.b> of Services
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> satisfaction.
          </h1>
          <button>What we offer?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Flexible Stays</h2>
          <p>
          Choose your check-in and check-out dates on your terms, no rigid schedules. Book short-term stays, with instant or flexible cancellation options.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Best Rates</h2>
          <p>
          Save more with affordable rates that adjust to your budget. Get access to exclusive deals and discounts that traditional booking sites can’t offer.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Easy Booking</h2>
          <p>
          Book your stay in just a few clicks! Our intuitive app and website make booking quick and hassle-free, so you can focus on enjoying your trip.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Maximize Occupancy</h2>
          <p>
          Help hotels increase their revenue by filling vacant rooms with flexible, short-term bookings. More guests, more revenue, it's a win-win!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
