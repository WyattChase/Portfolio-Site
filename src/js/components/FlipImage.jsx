import { motion } from "framer-motion";
import { useState } from "react";
import profileImg from "../../../public/assets/jaysax.jpg";
import altLogo from "../../../public/assets/alt-jaysax.png";

const FlipImage = ({ front = profileImg, back = altLogo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-52 h-52 relative cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full absolute rounded-full border-4 border-teal-400 shadow-lg"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full rounded-full overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <img
            src={front}
            alt="front"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full rounded-full overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={back}
            alt="back"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipImage;
