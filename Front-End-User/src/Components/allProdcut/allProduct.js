import React,{Component, useEffect, useState} from 'react'


import API from "../../API";
import Brand from '../brand';
import ItemProduct from "./itemProduct";
import './style.css'

function AllProduct(){
	const [Product,setProduct]=useState();
	
	const [error, setError]= useState(false);
    const [searchTerm, setSearchTerm] = useState(0);
    useEffect(()=>{
        try {
           
            API.getAll(searchTerm).then((res)=>{
                if(res.data.success){
                    if(searchTerm>0){
                        setProduct((p)=>([...p, ...res.data.result]))
                    }else{
                        setProduct(res.data.result)
                    }
                }
            })
            
        } catch (error) {
            console.log("false");
        }finally{
           console.log("false");
        }
    },[searchTerm])
	console.log(Product)

    return(

        <>
  <div className="banner-top">
            <div className="container">
              
           
               
            </div>
        </div>
	
		<div className="product">
			<div className="container">
			<div className="col-md-9">
	
				<div className="mid-popular">
				{
					Product&&Product.map((item,index)=>{
						return <ItemProduct 
							key={item.idProduct}
							id={item.idProduct}
							name={item.namProduct}
							image={item.image}
							priceOld={item.priceOld}
							priceNew={item.priceNew}
							type={item.nameCategories}
						>
					
						</ItemProduct>
					})
				}
				
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="col-md-3 product-bottom">
			
				<div className=" rsidebar span_1_of_left">
						<h4 className="cate">Thể Loại</h4>
							 <ul className="menu-drop">
							<li className="item1"><a href="">Nam </a>
								<ul className="cute">
									<li className="subitem1"><a href="product.html">Cute Kittens </a></li>
									<li className="subitem2"><a href="product.html">Strange Stuff </a></li>
									<li className="subitem3"><a href="product.html">Automatic Fails </a></li>
								</ul>
							</li>
							<li className="item2"><a href="">Nữ</a>
								<ul className="cute">
									<li className="subitem1"><a href="product.html">Cute Kittens </a></li>
									<li className="subitem2"><a href="product.html">Strange Stuff </a></li>
									<li className="subitem3"><a href="product.html">Automatic Fails </a></li>
								</ul>
							</li>
							<li className="item3"><a href="">trẻ em</a>
								<ul className="cute">
									<li className="subitem1"><a href="product.html">Cute Kittens </a></li>
									<li className="subitem2"><a href="product.html">Strange Stuff </a></li>
									<li className="subitem3"><a href="product.html">Automatic Fails</a></li>
								</ul>
							</li>
						
						</ul>
					</div>
				
 <section  className="sky-form">
					<h4 className="cate">Giảm giá</h4>
					 <div className="row row1 scroll-pane">
						 <div className="col col-4">
								<label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Upto - 10% (20)</label>
						 </div>
						 <div className="col col-4">
								<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>40% - 50% (5)</label>
								<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>30% - 20% (7)</label>
								<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>10% - 5% (2)</label>
								<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Other(50)</label>
						 </div>
					 </div>
				 </section> 				 				 
				 
					
				
					 <section  className="sky-form">
						<h4 className="cate">Loại hình</h4>
							<div className="row row1 scroll-pane">
								<div className="col col-4">
									<label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Sofa Cum Beds (30)</label>
								</div>
								<div className="col col-4">
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Bags  (30)</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Caps & Hats (30)</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Jackets & Coats   (30)</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Jeans  (30)</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Shirts   (30)</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Sunglasses  (30)</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Swimwear  (30)</label>
								</div>
							</div>
				   </section>
				   		<section  className="sky-form">
						<h4 className="cate">Thương hiệu</h4>
							<div className="row row1 scroll-pane">
								<div className="col col-4">
									<label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Roadstar</label>
								</div>
								<div className="col col-4">
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Levis</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Persol</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Nike</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Edwin</label>
									<label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>New Balance</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Paul Smith</label>
									<label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Ray-Ban</label>
								</div>
							</div>
				   </section>		
		</div>
			<div className="clearfix"></div>
			</div>
		<Brand/>
			
			
		</div>
        
        </>
    );

}
export default AllProduct;