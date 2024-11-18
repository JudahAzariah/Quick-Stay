import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Warwick Melrose Dallas",
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/319745275.jpg?k=74b6ef4dfef3418e2385dca778dda2932e457cf80208af88d0c13bd3377b5ae8&o=",
    desc: "Relax, Unwind Take a Dip Experience Dallas from its most iconic, luxury boutique hotel in downtown. Take a dip or lounge poolside at the outdoor pool.",
  },
  {
    id: 2,
    title: "Embassy Suites by Hilton Dallas Near the Galleria",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/65/9d/da/embassy-suites-dallas.jpg?w=700&h=-1&s=1",
    desc: "Spacious Suites with Indoor Pool ,All-suite hotel steps from The Galleria Mall. Enjoy free WiFi & cooked to order breakfast. Close to Addison Restaurant Row.",
  },
  {
    id: 3,
    title: "Fairfield Inn & Suites Dallas",
    img: "https://cache.marriott.com/content/dam/marriott-renditions/DALMC/dalmc-guestroom-0035-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
    desc: "Prime location- Dallas Convention Center Experience Texas charm with spacious rooms, free Wi-Fi, breakfast, & a fitness center. Close to major attractions and conventions.",
  },
  {
    id: 4,
    title: "Studio 6 Dallas, TX",
    img: "https://images.trvl-media.com/lodging/14000000/13320000/13319800/13319774/bfa166c4.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    desc: "We're All Business, Mostly Boost your productivity, feel inspired and fully recharge with flexible spaces and modern design.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Book now </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Quick Search Recommendations</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
