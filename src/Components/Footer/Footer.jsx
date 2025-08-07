const Footer = () => {
    return (
        <div>
           <footer className="flex justify-center footer bg-base-200 text-base-content p-10 ">
            <div>
              {/* footer heading start */}
              <div className="lg:text-center ml-0 mt-3        
    sm:ml-0  
    md:ml-16 
    lg:ml-52
    xl:ml-60 
    2xl:ml-62">
                <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                <p>Loading the way in cutting -edge technology innovation</p>
                
                 

              </div>
              
           
               {/* footer heading End*/}
              {/* Company services container start*/}
             
              <div>
              <hr className="font-bold" />
              <div className="grid md:grid-cols-3 lg:grid-cols-3  lg:gap-52">
                
              <nav>
                  <h6 className=" text-black font-medium text-xl">Services</h6>
                  <a className="link link-hover">Shipping & Delivery</a><br />
                  <a className="link link-hover">Order Tracking</a><br />
                  <a className="link link-hover">Product Support</a><br />
                  <a className="link link-hover">Services</a><br />
             </nav>
              <nav>
                  <h6 className=" text-black font-medium text-xl">Company</h6>
                  <a className="link link-hover">About Us</a><br />
                  <a className="link link-hover">Careers</a><br />
                  <a className="link link-hover">Contact</a><br />
                  
             </nav>
              <nav>
                  <h6 className=" text-black font-medium text-xl">Terms of Service</h6>
                  <a className="link link-hover">Privacy Policy</a><br />
                  <a className="link link-hover">Cookie Policy</a><br />
                  
             </nav>
            
              </div>
              </div>
              
              {/* Company services container End*/}
            </div>
          </footer>

            
            
        </div>
    );
};

export default Footer;