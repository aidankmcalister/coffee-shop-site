import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ContactForm = () => {
  return (
    <div className="">
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h2"
          color="white"
          className="font-bold font-playfair"
        >
          Get in touch!
        </Typography>
        <Typography className="mt-1 font-normal text-gray-500">
          Nice to meet you, we should respond within 24 hours.
        </Typography>
        <form className="w-full mt-8 lg:w-[38rem]">
          <div className="mb-6">
            <div className="lg:flex">
              <div className="flex flex-col w-full lg:w-1/2 lg:mr-5">
                <Typography variant="h6" color="white" className="">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Jeff Goldblum"
                  className="!border-t-gray-500 text-white focus:!border-main-yellow"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-5">
                <Typography variant="h6" color="white" className="">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="jeffgoldblum@gmail.com"
                  className="!border-t-gray-500 text-white focus:!border-main-yellow"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <div className="w-full mt-6">
              <Typography variant="h6" color="white" className="">
                Your Message
              </Typography>
              <Textarea
                size="lg"
                placeholder="Message"
                className="!border-t-gray-500 text-white focus:!border-main-yellow"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="my-3">
            <Button
              style={{ textTransform: "none" }}
              className="font-semibold text-lg text-main-yellow w-2/5 flex items-center justify-center"
            >
              Send
              <ArrowLongRightIcon className="h-8 w-8 ml-1" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
