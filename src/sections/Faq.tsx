import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="p-4 sm:px-6 md:px-8 lg:px-16 xl:px-30 bg-[#FBF6EF]">
      
       
          <div>
            <h5 className="uppercase text-[#932EFA] font-semibold text-xs sm:text-sm md:text-base">
              FAQ
            </h5>
            <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight sm:leading-snug md:leading-normal">
              Frequently Asked Questions <br className="hidden sm:block" />{" "}
              about our service
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-3 sm:gap-4 md:gap-5"
          >
            <AccordionItem
              value="item-1"
              className="border border-[#272932] rounded-lg px-3 sm:px-4 md:px-3 lg:px-3"
            >
              <AccordionTrigger className="flex justify-between items-center text-black text-sm sm:text-base md:text-lg lg:text-[18px] cursor-pointer">
                How secure is your payment system?
              </AccordionTrigger>
              <AccordionContent className="text-black text-xs sm:text-sm md:text-base font-medium">
                Our payment system uses bank-level encryption and two-factor
                authentication to ensure that all transactions are safe and
                secure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-[#272932] rounded-lg px-3 sm:px-4 md:px-3 lg:px-3"
            >
              <AccordionTrigger className="flex justify-between items-center text-black text-sm sm:text-base md:text-lg lg:text-[18px] cursor-pointer">
                What payment methods are supported?
              </AccordionTrigger>
              <AccordionContent className="text-black text-xs sm:text-sm md:text-base font-medium">
                We support credit/debit cards, digital wallets like PayPal and
                Apple Pay, and online bank transfers for seamless payments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-[#272932] rounded-lg px-3 sm:px-4 md:px-3 lg:px-3"
            >
              <AccordionTrigger className="flex justify-between items-center text-black text-sm sm:text-base md:text-lg lg:text-[18px] cursor-pointer">
                Are there any hidden fees or charges?
              </AccordionTrigger>
              <AccordionContent className="text-black text-xs sm:text-sm md:text-base font-medium">
                No hidden fees. Our pricing is fully transparent, and you can
                see all charges before confirming a payment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-[#272932] rounded-lg px-3 sm:px-4 md:px-3 lg:px-3"
            >
              <AccordionTrigger className="flex justify-between items-center text-black text-sm sm:text-base md:text-lg lg:text-[18px] cursor-pointer">
                How can I get support if a payment fails?
              </AccordionTrigger>
              <AccordionContent className="text-black text-xs sm:text-sm md:text-base font-medium">
                You can contact our support team via chat, email, or phone. We
                also provide a detailed help center to resolve common issues
                quickly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      
   
    </section>
  );
};

export default Faq;
