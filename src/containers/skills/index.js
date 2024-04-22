import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/pageHeaderConent";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

const skillData = [
  {
    label: "Front End",
    data: [
      {
        skillName: "HTML",
        percentage: " 90",
      },
      {
        skillName: "CSS",
        percentage: " 50",
      },

      {
        skillName: "Javascript",
        percentage: " 75",
      },
      {
        skillName: "React",
        percentage: " 65",
      },
    ],
  },

  {
    label: "BACK END",
    data: [
      {
        skillName: "JAVA",
        percentage: " 60",
      },
      {
        skillName: "Node.js.",
        percentage: " 50",
      },

      {
        skillName: "Express. js.",
        percentage: " 75",
      },
    ],
  },

  {
    label: "DATABASE",
    data: [
      {
        skillName: "SQL",
        percentage: " 60",
      },
      {
        skillName: "MONGO DB",
        percentage: " 65",
      },
    ],
  },
];
const index = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1 ", "opacity :0 "]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={2}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
