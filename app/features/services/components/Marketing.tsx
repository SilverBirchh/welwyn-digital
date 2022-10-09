import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineGroups } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";

import { DisplayBox } from "./DisplayBox";
import { Service } from "./Service";

export const Marketing = () => (
  <Service imgSrc="/marketing.svg">
    <DisplayBox
      icon={TbHandClick}
      title="Pay-per-click"
      desc="Paid-for advertising on Google and across social media is an effective way to bring about measurable results. Using specialist techniques, we can make sure your advert is seen by the most relevant audience, taking into consideration factors like age, gender, location, personal interests and much more."
    />
    <DisplayBox
      icon={AiOutlineEye}
      title="Search engine optimisation"
      desc="Getting you site on top of the search rankings is vital. We deploy a whole host of strategies - from technical and usability improvements, through to optimisation techniques and re-writing content."
    />
    <DisplayBox
      icon={MdOutlineGroups}
      title="Social Media"
      desc="Social media accounts are vital for any business to survive these days. We can set up; optimise your existing accounts; or manage your marketing campaigns and strategies on a long-term basis."
    />
  </Service>
);
