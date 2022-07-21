import Meals from "./Meals";

const Section = ({ categories = [] }) => {
  return (
    <div className='section'>
      {categories.map((element, index) => {
        return (
          <>
            <div>
              <h2>{element.name}</h2>
              <div>
                <Meals meals={element.meals} key={index} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Section;
