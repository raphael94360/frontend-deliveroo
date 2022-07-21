const Meals = ({ meals = [] }) => {
  return (
    <div className='meals'>
      {meals.map((element, index) => {
        return (
          <>
            <div index={index}>
              <p> {element.title}</p>
              <p> {element.description}</p>
              <p> {element.price}</p>
              <img src={element.picture} alt='brunch' />
              <p> {element.popular}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Meals;
