import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cartIcon from './img/shoping-bag.png';

export default function Home() {
	function refreshPage() {
		window.location.reload(false);
	  }
	  function alertmessage(){
		  alert('Please submit the forms ....');
	  }



	  const productItem = [
		{
			productImage:'https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png',
			productname:'Samsung',
			productPrice:'$30',
		}, 
		{
			productImage:'https://cdn.pixabay.com/photo/2017/03/04/12/03/mobile-phone-2115903_960_720.png',
			productname:'Nokia',
			productPrice:'$20',
		}, 
		
		
	  ];
  return (
    <>
 
		
		<div className='myCart'>
			<img src={cartIcon} /><h5>Amount: $0</h5>
		</div>
			<div className="productListing">
			{productItem.map(pro => (
							<div className="prductItem">
							<img src={pro.productImage} />
							<p>{pro.productname}</p>
							<button>{pro.productPrice} Add To Cart</button>
							</div>
					   ))}			
			</div>
			<div className="red-color-bar">
				<line></line>
			</div>
    </>
  );
}
