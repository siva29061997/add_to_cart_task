function CardItem(CardItem,removeFromCart){
    return(
        <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{CardItem.tittle}</div>
                  {CardItem.price}
                </div>
                <button onClick={()=>removeFromCart(CardItem)} class="badge bg-primary rounded-pill">X</button>
              </li>
    )
}

export default CardItem;