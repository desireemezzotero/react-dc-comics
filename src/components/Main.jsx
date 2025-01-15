import ProductList from "../product/productList"

const Main = () => {
  return (
    <main>
      <div className="container container-main">
        <h4>
          CURRENT SERIES
        </h4>
        <ProductList />
        <div className="d-flex justify-content-center pb-3">
        <button type="button" className="btn">LOAD MORE</button>
        </div>
      </div>
    </main>
  )
}

export default Main