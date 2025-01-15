const productCard = (props) => {
  const {series, thumb} = props.card
  return (

    <div className="structureCard"> 
      <div className="img-card">
        <img src={thumb} alt={series} />
      </div>
      <div className="text-card">
       <p>
         {series.toUpperCase()}
       </p>
      </div>
    </div>
  
  )
}

export default productCard