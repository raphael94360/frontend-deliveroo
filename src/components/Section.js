const Section = ({ categorie, addToCart }) => {
  return (
    <section>
      <h2>{categorie.name}</h2>
      <div className="meals-container">
        {categorie.meals.map(meal => {
          const reduce = string => {
            let result = ""
            for (let i = 0; i < string.length; i++) {
              result = result + string[i]
              if (result.length > 60) {
                return result
              }
            }
          }

          return (
            <div
              className="meals-content"
              key={meal.id}
              onClick={() => {
                addToCart(meal)
              }}
            >
              <div className="meals-content--right">
                <h3>{meal.title}</h3>
                <p>
                  {reduce(meal.description)}
                  <span></span>
                </p>

                <span> {meal.price} € </span>
                {meal.popular && <span className="popular">popular</span>}
              </div>
              <div className="meals-content--left">{meal.picture ? <img src={meal.picture} alt="meal" /> : " "}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Section
