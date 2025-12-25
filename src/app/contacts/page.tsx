import type { Metadata } from "next";
import ContactsClient from "@/app/contacts/ContactsClient";

export const metadata: Metadata = {
  title: "Contact Fiitsa",
  description: "Contactez Fiitsa pour une demo, un accompagnement ou une question.",
  alternates: {
    canonical: "https://fiitsa.com/contact",
  },
};

export default function ContactPage() {
  return <ContactsClient />;
}
