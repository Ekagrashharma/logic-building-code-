
import '../App.css'



const Laptop = ({product}) => {
    return (
    <div className="laptop">
        <h4>{product.name}</h4>
        <p>{product.price}</p>
    </div>
    )
}

export default Laptop
