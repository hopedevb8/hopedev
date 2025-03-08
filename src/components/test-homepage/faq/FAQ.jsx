import React, { useState } from "react";
import { FAQContainer } from "./StyledFAQ";
const FAQ = () => {
  const faqs = [
    {
      question: "How can I start using SolarVPN?",
      answer:
        "Simply download the app from our website, install it, and connect to one of our servers to get started.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we offer 24/7 customer support. Please visit our website for support options.",
    },
    {
      question: "Are there any speed limits?",
      answer:
        "No, SolarVPN does not impose any speed limits. Enjoy unrestricted browsing.",
    },
    {
      question: "Do I need to create an account to use SolarVPN?",
      answer:
        "No, you can use SolarVPN without creating an account. Just download the app and connect.",
    },
    {
      question: "How can SolarVPN be free?",
      answer:
        "We're committed to online privacy and security. Our operating costs are covered through voluntary donations and our own funding.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <FAQContainer>
      <div className="base-container">
        <div className="content">
          <div className="header">
            <h4 className="title">Frequently Asked Questions</h4>
            <p className="des">
              Got questions? We've got answers. Check out our FAQs — your
              curiosity might just be covered here.
            </p>
          </div>
          <div className="faq">
            {faqs.map((faq, index) => (
              <div key={index} className="">
                <button onClick={() => toggleFAQ(index)} className="">
                  <span className="ttitle text-lg font-medium">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <svg
                      style={{ transform: "rotate(180deg)" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                    </svg>
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                  }`}
                >
                  <p className="answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FAQContainer>
  );
};
export default FAQ;
