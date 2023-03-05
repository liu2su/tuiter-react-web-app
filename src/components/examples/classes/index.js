import './index.css';


const Classes = () => {
    const color = 'blue';
    const dangerous = true;// false
return(
    <div>
        <h2>Classes</h2>
        <div className= {`${dangerous ? 'fsd-bg-red' : 'fsd-bg-green'} fsd-fg-black fsd-padding-10px`}> Dangerous background</div>
        <div className={`fsd-bg-${color} fsd-fg-black fsd-padding-10px`}> Dynamic Blue background </div>
        <div className="fsd-bg-yellow fsd-fg-black fsd-padding-10px">Yellow background</div>
        <div className="fsd-bg-blue fsd-fg-black fsd-padding-10px">Blue background</div>
        <div className="fsd-bg-red fsd-fg-black fsd-padding-10px">Red background</div>
    </div>
)
};
export default Classes;