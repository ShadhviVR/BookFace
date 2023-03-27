import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import Post from "../../../../assets/post.png";
import Like from "../../../../assets/like.png";
import Comments from "../../../../assets/comments.png";

const benefits: Array<BenefitType> = [
  {
    image: Post,
    title: "POST",
    description:
      "Post your favorite quotes or photos. Stay connected to your everyone. Never lose your memories.",
  },
  {
    image: Like,
    title: "LIKE",
    description:
      "Give a heart to the photos you love and make the person happy. Express your love & kindness.",
  },
  {
    image: Comments,
    title: "COMMENT",
    description:
      "Comment down your thoughts out about the post you view. Comments can help people know about their post.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
         <b className="text-center text-primary-200 flex text-lg">WHAT COULD MAKE YOU THINK THAT WORLD IS SMALL ?</b>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
};

export default Benefits;
