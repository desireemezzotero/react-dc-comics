import ProductCard from './productCard'
import comics from '../data/comicsData'

const productList = () => {
  return (
      <div className="container d-flex flex-wrap justify-content-center">
        {
          comics.map(e => (
            <ProductCard key={e.id} card={e} />
          ))
        }

      </div>
  )
}

export default productList