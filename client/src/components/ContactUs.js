import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const details = {
  name: "Dhruv Patel",
  bio: "Frontend Developer",
  contact: {
    email: "dhruvpatel372004@gmail.com ",
    github: "https://github.com/dhruvpatel374/",
    linkedin: "",
    twitter: "",
  },
};

const ContactUs = () => {
  return (
    <div className="mt-5 ">
      <div>
        <h2 className="text-xl font-semibold flex justify-center">
          Hi 👋, I'm {details.name} 👩‍💻
        </h2>
        <p className="text-lg flex justify-center">{details.bio}</p>

        <div className="my-4 space-y-2">
          <h3 className="text-lg font-semibold flex justify-center">
            Connect with me
          </h3>
          <p className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-semibold flex justify-center">Gmail: </span>
            <a href={details.contact.email} className="flex items-center gap-1">
              {details.contact.email}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </p>
          <p className="flex flex-wrap justify-center items-center gap-2">
            <span className="font-semibold flex justify-center">Github: </span>{" "}
            <a
              href={details.contact.github}
              className="flex items-center gap-1"
            >
              {details.contact.github}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </p>
          <p className="flex flex-wrap justify-center items-center gap-2">
            <span className="font-semibold flex justify-center">
              Linkedin:{" "}
            </span>{" "}
            <a
              href={details.contact.linkedin}
              className="flex items-center gap-1"
            >
              {details.contact.linkedin}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </p>
          <p className="flex flex-wrap justify-center items-center gap-2">
            <span className="font-semibold">Twitter: </span>{" "}
            <a
              href={details.contact.twitter}
              className="flex items-center gap-1"
            >
              {details.contact.twitter}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
