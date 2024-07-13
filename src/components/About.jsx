const About = () => {
  const aboutData = [
    {
      title: "Mission",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officia cupiditate provident, ipsum eligendi ab accusamus tempore, sed, sit nobis id commodi aperiam earum doloribus labore nam rem iste magni.",
      image:
        "https://img.freepik.com/free-photo/man-giving-business-presentation-using-high-technology-digital-pen_53876-104783.jpg",
    },
    {
      title: "Vision",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officia cupiditate provident, ipsum eligendi ab accusamus tempore, sed, sit nobis id commodi aperiam earum doloribus labore nam rem iste magni.",
      image:
        "https://img.freepik.com/free-photo/retinal-biometrics-technology-with-man-s-eye-digital-remix_53876-108518.jpg",
    },
    {
      title: "Culture",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officia cupiditate provident, ipsum eligendi ab accusamus tempore, sed, sit nobis id commodi aperiam earum doloribus labore nam rem iste magni.",
      // image:"https://img.freepik.com/free-photo/retinal-biometrics-technology-with-man-s-eye-digital-remix_53876-108518.jpg"
    },
  ];
  return (
    <>
      <div className="container my-5 border-bottom p-4 border-5">
        <div className="row text-dark">
         {
             aboutData.map((val, index)=>{
                 return  <div className="col-md-4" key={index}>
                 <div className="card">
                   <div className="card-header">
                     <img src={val.image} alt="" className="img-fluid" />
                   </div>
                   <div className="card-body">
                     <h4> {val.title} </h4>
                   </div>
                   <div className="card-footer">
                     <p> {val.desc} </p>
                   </div>
                 </div>
               </div>
             })
         }
        </div>
      </div>
    </>
  );
};

export default About;
