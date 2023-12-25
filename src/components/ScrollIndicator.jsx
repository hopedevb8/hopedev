import React,{useEffect,useState} from "react";
const ProgressIndicator = (props) => {
    const [progress, setProgress] = useState(0);
    function updateProgressIndicator() {
  const windowHeight = window.innerHeight;
  const documentFullHeight = document.body.clientHeight;

  const scrolled = window.scrollY;

  const percentageScrolled =
    (scrolled / (documentFullHeight - windowHeight)) * 100;

  setProgress(percentageScrolled);
    }
useEffect(() => {

  updateProgressIndicator();

  window.addEventListener("scroll", updateProgressIndicator);

  return () => {
    window.removeEventListener("scroll", updateProgressIndicator);
  };
}, [progress]);
    return (
        <div
            className="NavBar__ScrollIndicator"
            id="scrollIndicator"
            style={{ width: `${progress}%` }}
        ></ div>)
}
 export default ProgressIndicator;