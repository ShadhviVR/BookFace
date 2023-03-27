import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";


const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  image: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ image, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-4 border-gray-100 px-5 py-16 text-center hover:border-primary-200 card-zoom:hover"
    >
      <div className="mb-4 flex justify-center">

        <img src={image} alt={title} />
       
      </div>

      <h4 className="font-bold text-primary-200">{title}</h4>
      <p className="my-3">{description}</p>
      
    </motion.div>
  );
};

export default Benefit;
