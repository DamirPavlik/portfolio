import { ReactSVG } from "react-svg";
import { ExperienceTabsContentProps } from "../../types/types";

const ExperienceTabsContent: React.FC<ExperienceTabsContentProps> = ({
  activeTab,
}) => {
  return (
    <div className="lg:col-span-8 col-span-12">
      <div className={`${activeTab === 1 ? "" : "hidden"} lg:ml-16`}>
        <h4 className="text-xl text-brown mb-0 font-semibold">
          Front End Engineer — OmniStreak Digital Solutions
        </h4>
        <p className="text-silver text-sm">Jun 2023 - Present</p>
        <ul className="lg:mt-8 lg:ml-16">
          <li className="flex text-gray text-base lg:mb-8">
            <ReactSVG src="triangle.svg" className="mr-4 mt-1" />I have been
            actively engaged in front-end development, specializing in
            JavaScript. <br className="lg:block hidden" />
            Additionally, I have demonstrated versatility by contributing to PHP
            and WordPress projects. <br className="lg:block hidden" /> My
            primary focus has been on product launches and the development of
            JavaScript-based applications.
          </li>
          <li className="flex text-gray text-base">
            <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
            This experience has been instrumental in deepening my understanding
            of web technologies, particularly in the realms of PHP and
            JavaScript. I am proud to have secured this position at the age of
            18, a testament to my dedication and proficiency in the field.
          </li>
        </ul>
      </div>
      <div className={`${activeTab === 2 ? "" : "hidden"} lg:ml-16`}>
        <div className="lg:mb-16">
          <h4 className="text-xl text-brown mb-0 font-semibold">
            Crveno Vino Restaurant
          </h4>
          <p className="text-silver text-sm">UI/UX Design & Development</p>
          <ul className="lg:mt-8 lg:ml-16">
            <li className="flex text-gray text-base lg:mb-8">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />I have been
              actively engaged in front-end development, specializing in
              JavaScript. <br className="lg:block hidden" />
              Additionally, I have demonstrated versatility by contributing to
              PHP and WordPress projects. <br className="lg:block hidden" /> My
              primary focus has been on product launches and the development of
              JavaScript-based applications.
            </li>
            <li className="flex text-gray text-base">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
              This experience has been instrumental in deepening my
              understanding of web technologies, particularly in the realms of
              PHP and JavaScript. I am proud to have secured this position at
              the age of 18, a testament to my dedication and proficiency in the
              field.
            </li>
          </ul>
          <div className="flex lg:ml-[88px] lg:mt-6">
            <a
              href="https://github.com/DamirPavlik/crvenovino.rs"
              target="_blank"
            >
              <img src="/github.png" alt="" className="mr-1 w-8" />
            </a>
            <a href="https://crvenovino.rs/" target="_blank">
              <img src="/web.png" alt="" className="mr-1 w-8" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl text-brown mb-0 font-semibold">
            Gimnazija “Mihajlo Pupin” Kovacica
          </h4>
          <p className="text-silver text-sm">UI/UX Design & Development</p>
          <ul className="lg:mt-8 lg:ml-16">
            <li className="flex text-gray lg:mb-8">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
              The gymnasium in Kovacica already had a website, but they needed a
              fresh new look. I provided a design in Figma and once they
              approved it, I began developing the website. The end result was a
              modern, user-friendly website that accurately represented the
              school's values and mission.
            </li>
            <li className="flex  text-gray">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
              Technologies used: <br />
              PHP, WordPress, jQuery, JavaScript, Sass, Bootstrap
            </li>
          </ul>
          <div className="flex lg:ml-[88px] lg:mt-6">
            <a
              href="https://github.com/DamirPavlik/gymko.edu.rs"
              target="_blank"
            >
              <img src="/github.png" alt="" className="mr-1 w-8" />
            </a>
            <a href="https://gymko.edu.rs/" target="_blank">
              <img src="/web.png" alt="" className="mr-1 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabsContent;