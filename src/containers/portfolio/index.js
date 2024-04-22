import React from "react";
import PageHeaderContent from "../../component/pageHeaderConent";
import { BsInfoCircleFill } from "react-icons/bs";

const portfolioData = [
  {
    id: 1,
    name: "Ecommerce",
    image: "imageOne",
  },
  {
    id: 2,
    name: "Notes App",
    image: "imagetwo",
  },
  {
    id: 3,
    name: "Supplier Design",
    image: "imageThree",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData.map((item) => (
            <div className="portfolio__content__cards__item" key={item.id}>
              <div className="portfolio__content__cards__item__image-wrapper">
                <a href="/about">
                  <image src="dummy data" alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
