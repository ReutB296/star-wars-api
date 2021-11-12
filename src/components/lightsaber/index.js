import './style.css';

export default function Lightsaber (){
   
    return(
        <section>
                <div>
                    <div className="lightsaber">
                        <label htmlFor="yoda-lightsaber"></label>
                        <input type="checkbox" id="yoda-lightsaber" defaultChecked={true}/>
                        <div className="switch"></div>
                        <div className="plasma yoda"></div>
                    </div>
                </div>
                <h4 className="clickMe">Click Me</h4>
        </section>
    )
}