import * as React from 'react';
import { AccordionElement } from './AccordionElement';

// 12. What are the signs that my dryer vent needs cleaning? Signs include longer
// drying times, clothes that are hot to the touch after a cycle, a burning smell
// while the dryer is running, and the outside vent flap not opening properly.

export default function AccordionList() {
  return (
    <div>
      <div className="mb-12">
        <h3 className="text-black text-3xl mb-10">
          Special Christmas questions:
        </h3>

        <AccordionElement
          title={'1. What services do you offer?'}
          answer={
            'We provide professional installation, maintenance, and removal of Christmas and special occasion lights for homes, businesses, and events. This includes design consultation, installation, and post-holiday removal.'
          }
        />

        <AccordionElement
          title={'2. What areas do you serve?'}
          answer={
            'We serve South and Central Jersey at this moment. If you are outside our service area, feel free to contact us, and we can discuss availability.'
          }
        />

        <AccordionElement
          title={'3. How much does it cost to install lights?'}
          answer={
            'The cost depends on the size of the project, the type of lights, and the complexity of the design. Contact us for a free estimate!'
          }
        />

        <AccordionElement
          title={'4. Do you provide the lights, or can I use my own?'}
          answer={
            'We offer both options. You can choose from our lights, or we can work with your existing lights provided if they meet safety standards.'
          }
        />

        <AccordionElement
          title={'5. When should I schedule my installation?'}
          answer={
            "It's best to book early! For Christmas lights, we recommend scheduling in October or early November to ensure availability."
          }
        />

        <AccordionElement
          title={'6. Do you offer maintenance if lights stop working?'}
          answer={
            'Yes! We offer ongoing maintenance throughout the season. If any lights go out or there’s an issue, just let us know and we’ll promptly fix it.'
          }
        />

        <AccordionElement
          title={'7. Are your installations weather-resistant?'}
          answer={
            'Yes, we use weatherproof materials and install lights securely to withstand harsh winter conditions.'
          }
        />

        <AccordionElement
          title={'8. Do you remove the lights after the holiday season?'}
          answer={
            'Yes, we offer light removal as part of our service. We’ll carefully take down the lights after the holidays and store them safely for you if requested.'
          }
        />

        <AccordionElement
          title={'9. When do you start removing lights after Christmas?'}
          answer={
            'We typically begin removals in early January, but we can accommodate specific dates if needed.'
          }
        />

        <AccordionElement
          title={'10. Can you store the lights for me?'}
          answer={
            'Yes, we offer a storage option for your lights. We’ll safely pack and store them until the next holiday season.'
          }
        />

        <AccordionElement
          title={
            '11. Can you install lights for special occasions other than Christmas?'
          }
          answer={
            'Absolutely! We offer lighting services for weddings, parties, birthdays, and other events throughout the year.'
          }
        />
      </div>

      <div className="">
        <h3 className="text-black text-3xl mb-10">Basic questions:</h3>

        <AccordionElement
          title={'1. Does Liberty Shine Services accept credit cards?'}
          answer={
            'Not at this moment. We accept checks, cash. We also accept PayPal, Venmo, Zelle and ApplePay.'
          }
        />

        <AccordionElement
          title={'2. How do you charge for windows?'}
          answer={`For windows we charge by the size of the window // pane, how many
              panes you have, what floor they are on, they type of window. We //
              give a free estimate, and if agreed on price, we do the service
              the same day.`}
        />

        <AccordionElement
          title={'3. Is Liberty Shine Services insured?'}
          answer={`Yes, we are fully insured. Selecting an insured company not only
              safeguards your home while we are on-site but also ensures that
              our employees are covered in case of any injuries on your
              property.`}
        />

        <AccordionElement
          title={`4. Do I need to be home during my window cleaning / dryer vent
              service?`}
          answer={`That is entirely up to you. Many of our clients leave us with with
              a code or key to let ourselves in and out. If you’d rather be home
              we will start with the inside so that you can leave if need be
              when we switch to the outside.`}
        />

        <AccordionElement
          title={`5. Do I need to prepare my home before the window washers arrive?`}
          answer={`Generally, you should remove any items or obstacles near the
              windows to provide easy access. Our team can handle the rest.`}
        />

        <AccordionElement
          title={`6. Will window cleaning help improve energy efficiency?`}
          answer={`Clean windows allow more natural light to enter your home, which
              can reduce the need for artificial lighting and potentially lower
              energy costs. Additionally, removing dirt and debris can help
              maintain the integrity of the window seals, improving overall
              insulation.`}
        />

        <AccordionElement
          title={`7. Do You wash screens and tracks? Is it included?`}
          answer={`We vacuum and wash tracks. We usually wipe screens with wet towel.
              Also we do a free screen inspections, and provide prescreening
              service if needed and agreed.`}
        />

        <AccordionElement
          title={`8. Do you repair damaged screens?`}
          answer={`Yes, we do. First we do a free inspection, discuss it with you,
              and if agreed we take screens with us, and deliver and install it
              within 1-3 business days.`}
        />

        <AccordionElement
          title={`9. Is hard water stains, paint, fungus removal included?`}
          answer={`These item take special chemicals and techniques to safely remove
              from your windows. They also take extra labor and time. For that
              reason we do charge more for these services. We also require
              waivers for services that require us to use a blade.`}
        />

        <AccordionElement
          title={`10. How do You charge for gutter cleaning?`}
          answer={`We charge for gutters by the linear foot. Our rate varies
              depending on what story the gutters on and if they have gutter
              guards or leaf guards on them.`}
        />

        <AccordionElement
          title={`10. How do You charge for gutter cleaning?`}
          answer={`We charge for gutters by the linear foot. Our rate varies
              depending on what story the gutters on and if they have gutter
              guards or leaf guards on them.`}
        />

        <AccordionElement
          title={`11. How Often Do I have to clean My dryer vent? How do You charge?`}
          answer={`Dryer vents should be cleaned at least once a year to prevent lint
              buildup, which can be a fire hazard and reduce the efficiency of
              your dryer.`}
        />
        <AccordionElement
          title={` 12. What are the signs that my dryer vent needs cleaning?`}
          answer={`Signs include longer drying times, clothes that are hot to the
              touch after a cycle, a burning smell while the dryer is running,
              and the outside vent flap not opening properly.`}
        />
      </div>
    </div>
  );
}
