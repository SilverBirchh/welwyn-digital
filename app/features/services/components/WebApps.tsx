import { AiOutlineApi } from "react-icons/ai";
import { BsSafe } from "react-icons/bs";
import { FiServer } from "react-icons/fi";

import { DisplayBox } from "./DisplayBox";
import { Service } from "./Service";

export const WebApps = () => (
  <Service imgSrc="/webapp.svg">
    <DisplayBox
      icon={AiOutlineApi}
      title="Connect anything"
      desc="We can build apps that
            include authentication, storage, API's, edge functions and subscriptions. We choose technologies that
            are right for the job and can work best for your needs."
    />
    <DisplayBox
      icon={FiServer}
      title="Scale to millions"
      desc="We have clear pricing models and hosting solutions that serve your
            site to users as fast as possible. Sites are distributed close to your
            users."
    />
    <DisplayBox
      icon={BsSafe}
      title="Safety first"
      desc="We take security very seriously. No unauthorized
            access, on high bills and no surprises. We'll keep your app safe."
    />
  </Service>
);
