const Home = ()=>{
  return(
    <main>
      <div className="prod-content">
        <h1 className="heading">YOUR FEET DESERVE THE BEST</h1>
        <p className="content">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="btns">
          <button className="shop-btn">Shop Now</button>
          <button className="cat-btn">Category</button>
        </div>
        <div className="online-avail">
          <p className="online-head">Also available on</p>
          <div className="online-platforms">
            <img src="amazon.png" alt="amazon-icon" />
            <img src="flipkart.png" alt="flipkart-icon" />
          </div>
        </div>
      </div>
      <div className="prod-image">
        <img src="shoe_image.png" alt="prod-img" />
      </div>
    </main>
  )
}

export default Home;