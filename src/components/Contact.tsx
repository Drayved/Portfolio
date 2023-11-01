import { useInView } from 'react-intersection-observer';

const Contact = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    return(
        <section id='contact' ref={ref} className={`section mt-32 px-5 w-full flex flex-col items-center ${inView ? 'visible' : ''}`}>
            <div>
                <h1 className="text-4xl text-cyan-500 text-center">Get In Touch</h1>
                <p className="mt-10 px-6 lg:max-w-[1200px] lg:text-center">
                    If you need a top-notch, user-friendly website to showcase your business or product, 
                    I've got you covered! Don't hesitate to get in touch, and I'll do my utmost to respond 
                    as quickly as possible. Drop me an email for the fastest and most efficient communication.
                    I'm really excited to hear from you and help you out!
                </p>
                <div className="flex justify-center">
                    <a href="mailto:David.Riley.Dev@gmail.com" className="mt-10 border p-5 hover:border-cyan-500 mx-auto">David.Riley.Dev@gmail.com</a>
                </div>
                
            </div>
        </section>
    )
}

export default Contact