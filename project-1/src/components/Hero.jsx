
const HeroSection = () => {

    return (
        <main className="hero container">
            <div className="hero-content">

                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE ARE
                    HERE TO HELP YOU WITH OUR SHOES . YOUR FEET DESERVE THE BEST AND WE ARE
                    HERE TO HELP YOU WITH OUR SHOES . YOUR FEET DESERVE THE BEST AND WE ARE
                </p>
                <div className="hero-btn">
                    <button className="primary-btn" >Shop Now</button>
                    <button className="secondary-btn">Category</button>


                </div>

                <div className="shopping">

                    <p>also available on</p>

                      <div className="brand-icons">
                          <img src="/images/shops.png" alt="shops" />

                      </div>
                
                </div>


            </div>
            <div className="hero-image">

                <img src="/images/shoe_image.png" alt="shoes" />
            </div>
        </main>

    );
};
export default HeroSection;