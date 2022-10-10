import { GiRunningShoe, GiSmart } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";

import { DisplayBox } from "./DisplayBox";
import { Service } from "./Service";

export const Websites = () => (
  <Service imgSrc="/website.svg">
    <DisplayBox
      icon={GiRunningShoe}
      title="Faster, better websites"
      desc="Our mission is is to create the kind of website that every
                company wants: easy to find, stylish, quick to load, responsive
                and simple to use. We can build you a brand new website or give
                an old site a face lift."
    />
    <DisplayBox
      icon={TbHeartHandshake}
      title="With you all the way"
      desc="We'll help you through initial research, first designs,
            development and post launch updates. We use battle tested
            technologies to make sure your site is always ready to go."
    />
    <DisplayBox
      icon={GiSmart}
      title="Full of knowledge"
      desc="We get the web. Responsive? Check. Great UX? Check. Top notch speed? Check. Accessible and useable? Check. Whatever your technical requirements, we can handle it."
    />
  </Service>
);
