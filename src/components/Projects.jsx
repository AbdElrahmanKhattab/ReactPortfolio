import React from "react";

function Projects() {
  return (
    <div className="work" id="work">
      <div className="work-header-text">
        <h1>projects</h1>
      </div>
      <div className="workhider">
        <div className="numbers_bg-grad"></div>
        <div className="numbers_grad"></div>
        <div className="numbers_grad is-right"></div>
        <div className="work-header-left">
          <div className="work-header-left-img">
            <img src="media/app.png" alt="" />
            <img src="media/Al-Hurriya.png" alt="" />
            <img
              src="media/Coza-Store-Free-HTML5-eCommerce-Website-Template-1.jpg"
              alt=""
            />
          </div>
          <div className="work-header-left-img">
            <img src="media/app.png" alt="" />
            <img
              src="media/Coza-Store-Free-HTML5-eCommerce-Website-Template-1.jpg"
              alt=""
            />
            <img src="media/Home-1-Tya-128.png" alt="" />
          </div>
        </div>
        <div className="work-header-right">
          <div className="work-header-right-img">
            <img src="media/Al-Hurriya.png" alt="" />
            <img
              src="media/Coza-Store-Free-HTML5-eCommerce-Website-Template-1.jpg"
              alt=""
            />
            <img src="media/app.png" alt="" />
          </div>
          <div className="work-header-right-img">
            <img src="media/Home-1-Tya-128.png" alt="" />
            <img
              src="media/Coza-Store-Free-HTML5-eCommerce-Website-Template-1.jpg"
              alt=""
            />
            <img src="media/app.png" alt="" />
          </div>
        </div>
      </div>
      <div className="projects">
        {/* You can map this from an array if you wish */}
        <div className="worksection norm2">
          <div className="leftwork">
            <img
              className="imgwork desigimg"
              src="media/Al-Hurriya.png"
              alt=""
            />
          </div>
          <div className="rightwork">
            <h4>Al-Hurriya</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
              laudantium cumque voluptas maiores ex amet inventore quas accusamus
              iusto fuga odio velit error natus, aliquam, pariatur cum, est
              officiis et.
            </p>
            <a href="https://al-horria.com/home" target="_blank" rel="noopener noreferrer">
              <button>visit →</button>
            </a>
          </div>
        </div>
        <div className="worksection reverse">
          <div className="leftwork">
            <img
              className="imgwork storeimg rightimg"
              src="media/Coza-Store-Free-HTML5-eCommerce-Website-Template-1.jpg"
              alt=""
            />
          </div>
          <div className="rightwork">
            <h4>Store</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              quibusdam voluptatem aspernatur hic ab numquam fuga voluptatum illo
              repellendus ratione iste reiciendis provident accusantium ut impedit
              possimus necessitatibus voluptas quas?
            </p>
            <a href="https://abdelrahmankhattab.github.io/store/" target="_blank" rel="noopener noreferrer">
              <button>visit →</button>
            </a>
          </div>
        </div>
        <div className="worksection norm1">
          <div className="leftwork">
            <img className="imgwork appimg" src="media/app.png" alt="" />
          </div>
          <div className="rightwork">
            <h4>App Web</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              aliquam ea nesciunt. Illum quae debitis consequuntur dicta
              perferendis, non, aliquid est nemo assumenda nobis expedita,
              molestiae similique. Maxime, modi quibusdam!
            </p>
            <a href="https://abdelrahmankhattab.github.io/app/" target="_blank" rel="noopener noreferrer">
              <button>visit →</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;