import React from "react";
import PropertyList from "../components/PropertyList";
import Footer from "../components/footer";

const Properties = () => {
  return (
<>
  <main className="main">
      {/* Page Title Section */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1>Our Properties</h1>
                <p className="mb-0">
                  Explore properties that blend comfort with style, tailored to fit your lifestyle and budget.From prime locations to premium finishes, discover homes designed to exceed expectations."Want it more modern, luxurious, or friendly? I can tweak the tone!
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Properties</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Property Section */}
      <section id="real-estate" className="real-estate section">
        <div className="container">
          <PropertyList />
        </div>
      </section>
    </main>
    <Footer/>
    </>
  
  );
};

export default Properties;
