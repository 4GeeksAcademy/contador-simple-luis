
export const Card = ({raza, img, descripcion})=> {

    return (
       
       <div className="col-12 col-md-6 col-lg-4  p-2">
                <div className="card d-flex justify-content-center card h-100">
                    <img src={img} className="card-img-top" alt="Imagen 1" />
                    
                    
                    <div className="card-body bg-secondary text-white ">
                        <h5 className="card-title">{raza}</h5>
                        <p className="card-text">
                            {descripcion}
                        </p>
                    </div>
                    

                    <div className="card-footer d-grid bg-secondary text-white">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>

       
       
    )
}



