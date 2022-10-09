import { AiOutlineBuild, AiOutlineAlert } from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa";

import { DisplayBox } from "./DisplayBox";
import { Service } from "./Service";

export const Marketing = () => (
  <Service imgSrc="/marketing.svg">
    <DisplayBox
      icon={FaAppStoreIos}
      title="iOS & Android apps"
      desc="Mobile Apps can help your brand gain visibility, improve internal
            processes and launch a new service. We build apps for Android and iOS
            that can do all these things and more."
    />
    <DisplayBox
      icon={AiOutlineBuild}
      title="Packed full of features"
      desc="These include
            notifications, offline access, downloads and more. Whatever you're
            building an app for we'll build it with accessibility, ease of use and
            ease of distribution in mind."
    />
    <DisplayBox
      icon={AiOutlineAlert}
      title="Fully managed"
      desc="We'll manage your store listings, images, and copy. We regularly update our apps making sure they are on the latest security patches. We manage in-app purchases and reviews."
    />
  </Service>
);
