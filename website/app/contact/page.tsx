import { ContactForm } from "@/components/sections/ContactForm";
import { contactContent } from "@/content/contact";

export default function ContactPage() {
  return (
    <ContactForm 
      panel={contactContent.panel} 
      labels={contactContent.form} 
    />
  );
}
