
import dawn from "./assets/Dawn.png"
const Rate = () => {
  return (
    <>
      <section className="rate-container">
        <div className="parent">
          <div className="child">
            <div className="box-1">
              <span>90%</span>
              <p>Job Success</p>
              <p>Score on Upwork</p>
            </div>

            <img src={dawn} alt="" />

            <div className="box-2">
              <span>{">25.000"}</span>
              <p>Duplicates on Figma</p>
              <p>Community</p>
            </div>

             <img src={dawn} alt="" />
             
            <div className="box-3">
              <span>{">2k"}</span>
              <p>In Finished</p>
              <p>Works</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rate;
