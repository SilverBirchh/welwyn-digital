import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout/Grid";
import { Enquiry } from "~/features/landing/components/Enquiry";

export const meta: MetaFunction = () => ({
  title: "Welwyn Digital | Contact us | Website & App Agency Hertfordshire",
});

export default function Contact() {
  return (
    <Layout>
      <Enquiry theme="light" />
    </Layout>
  );
}
