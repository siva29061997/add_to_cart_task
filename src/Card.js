function Card({value,CardItem,handdleAddToCart}) {
    return (
        <div className="col-lg-4 mb-2">
            <div class="card" style={{width: "15rem"}}>
                <img src={value.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{value.tittle}</h5>
                    <p class="card-text">INR {value.price}</p>
                    <button disabled={CardItem.some((obj)=>obj.id === value.id)} onClick={()=>{ handdleAddToCart(value) }} class="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Card;