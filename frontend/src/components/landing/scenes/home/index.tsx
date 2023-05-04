import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import Logo from "../../../../assets/logo.png";
import One from "../../../../assets/1.png";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  GlobeAltIcon,
  HeartIcon,
  HashtagIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-20 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-22 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="logo" src={Logo} />
              </div>
            </div><br/>
            <b className="text-center text-primary-500 flex text-lg">
            <HeartIcon className="h-6 w-6" />
            <HashtagIcon className="h-6 w-6" />Explore <MagnifyingGlassIcon className="h-6 w-6" />, 
            <HashtagIcon className="h-6 w-6" />Connect<UserGroupIcon className="h-6 w-6" />, 
            <HashtagIcon className="h-6 w-6" />Meet<GlobeAltIcon className="h-6 w-6" />
            <HeartIcon className="h-6 w-6" />
            </b>

            <p className="mt-8 text-sm text-center">
            Express yourself without words. 
            Simple, reliable and available all over the world for free. 
            Connect with everyone you love & who makes your life beautiful. 
            You could make friends with strangers too. 
            Express your thoughts and share your memories to your friends. 
            You could promote your business and make it grow and widely known.
            </p>
          </motion.div>
          <br/>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button className="rounded-md hover:bg-primary-200 px-10 py-2 bg-primary-500 hover:text-white">
              <Link to="/login" className="text-black">
                Login
              </Link>
            </button>

            <button className="rounded-md hover:bg-primary-200 px-10 py-2 bg-primary-500 hover:text-white">
              <Link to="/signup" className="text-black">
                Join Now
              </Link>
            </button>

          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={One} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
