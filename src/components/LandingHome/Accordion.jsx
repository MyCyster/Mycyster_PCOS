import { useState } from "react";
import GreenArrow from "../../assets/GreenArrow.png";
import WhiteArrow from "../../assets/WhiteArrow.png";

const faqs = [
  {
    question: "What is MyCyster?",
    answer:
      "MyCyster is an open-source app designed to support people with PCOS by providing tools, resources, and a supportive community. It aims to help users manage their symptoms, track their health, and access reliable information tailored to their needs.",
  },
  {
    question: "What features does MyCyster offer?",
    answer: ` MyCyster provides a variety of features to assist users in managing PCOS, including:
Symptom tracking – Monitor menstrual cycles, mood changes, and other PCOS-related symptoms.
Personalized insights – Get tailored health recommendations based on your data.
Educational resources – Access medically reviewed articles, guides, and tips.
Community support – Connect with others experiencing PCOS in a safe and understanding space.
Medication and appointment reminders – Stay on top of your treatment and doctor visits.`,
  },
  {
    question: "Who can use MyCyster?",
    answer: `Anyone with PCOS or those looking to learn more about it can use MyCyster. Whether you're newly diagnosed or managing long-term symptoms, the app is designed to be a helpful tool for people at any stage of their PCOS journey.`,
  },
  {
    question: "Is MyCyster free to use?",
    answer: ` Yes! MyCyster is an open-source project, meaning it's freely accessible to users. There are no hidden fees, and it’s built by a community passionate about providing accessible PCOS support.`,
  },
  {
    question: "How can I contribute to MyCyster?",
    answer: `Since MyCyster is an open-source project, developers, medical writers, and designers can contribute by:
Improving app features and fixing bugs
Adding or reviewing medical content
Designing a user-friendly interface
Spreading awareness about MyCyster
If you're interested, visit MyCyster’s GitHub repository or join the contributor community for more details.
`,
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section>
      <h1 className="font-sora font-[700] text-3xl text-[#12141D] text-center mb-10">
        Frequently Asked Questions
      </h1>
      <div className="lg:w-[700px] mx-auto flex flex-col gap-6 mb-20 px-[2rem] lg:px-0">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`shadow-lg py-2 pr-4 pl-6 cursor-pointer  flex flex-col gap-y-4 rounded-2xl border-[1.5px] ${
        isOpen ? "border-[#069494] py-4" : " border-[#F0F2F5]"
      } `}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center">
        <p className="font-manrope font-[700] text-[#1D2739]">{question}</p>
        {isOpen ? (
          <img src={GreenArrow} alt="green arrow" className="w-9" />
        ) : (
          <img src={WhiteArrow} alt="white arrow" className="w-14" />
        )}
      </div>

      {isOpen && (
        <p className="font-manrope font-[400] text-[#98A2B3] text-sm leading-6 pb-3">
          {answer}
        </p>
      )}
    </div>
  );
}

export default Accordion;
