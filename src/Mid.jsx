import React, {useState, useRef, useEffect} from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './Mid.css'

const One = ({where, setWhere}) => {
    return (
        <center>
        Do you not agree to the terms and conditions?
        <br />
        <button className="pri" onClick={() => setWhere(999)}>No</button>
        <button className="sec" onClick={() => setWhere(2)}>Yes</button>
        </center>
    )
}

const Two = ({where, setWhere}) => {
    return (
        <center>
        Do you agree to the terms and conditions?
        <br />
        <button className="sec" onClick={() => setWhere(999)}>Yes</button>
        <button className="sec" onClick={() => setWhere(999)}>Yes</button>
        <br />
        <button className="hidden" onClick={() => setWhere(3)}>No</button>
        </center>
    )
}

const Three = ({where, setWhere}) => {
    return (
        <center>
        Do you agree to the terms and conditions? Only one of the button is telling the truth.
        <br />
        <button className="sec" onClick={() => setWhere(999)}>This is the No button</button>
        <button className="pri" onClick={() => setWhere(4)}>The No button is red</button>
        </center>
    )
}

const Four = ({where, setWhere}) => {
    return (
        <center>
        To opt out of not rejecting the terms and conditions, avoiding not clicking Yes.
        <br />
        <button className="sec" onClick={() => setWhere(5)}>Yes</button>
        <button className="pri" onClick={() => setWhere(999)}>No</button>
        </center>
    )
}

const Five = ({where, setWhere}) => {
    return (
        <center>
        Do you agree to the terms and conditions?
        <br />
        <button className="sec" onClick={() => setWhere(999)}>Yes</button>
        <button className="pri" onClick={() => setWhere(6)}>No, I am stupid and bad at chess and short and I like being a loser and remain unsuccessful</button>
        </center>
    )
}

const Six = ({where, setWhere}) => {
    return (
        <center>
        คุณเห็นด้วยกับข้อกำหนดและเงื่อนไขหรือไม่?
        <br />
        <button className="pri" onClick={() => setWhere(7)}>เลขที่</button>
        <button className="sec" onClick={() => setWhere(999)}>ใช่</button>
        </center>
    )
}

const Seven = ({where, setWhere}) => {
    return (
        <center>
        Error
        <p className="smol">Click Retry to accept terms and conditions</p>
        <br />
        <button className="sec" onClick={() => setWhere(8)}>Cancel</button>
        <button className="pri" onClick={() => setWhere(999)}>Retry</button>
        </center>
    )
}

const Form = ({}) => {
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        // this reaches out to the hCaptcha JS API and runs the
        // execute function on it. you can use other functions as
        // documented here:
        // https://docs.hcaptcha.com/configuration#jsapi
        captchaRef.current.execute();
    };

    useEffect(() => {

        if (token)
        console.log(`hCaptcha Token: ${token}`);

    }, [token]);

    return (
        <form>
        <HCaptcha
            sitekey="your-sitekey"
            onLoad={onLoad}
            onVerify={setToken}
            ref={captchaRef}
        />
        </form>
    );
}

const Eight = ({where, setWhere}) => {
    return (
        <center>
        To reject terms and conditions, please complete the following captcha in 5 seconds without triggering an error.
        <br />
        <Form />
        </center>
    )
}

const End = ({}) => {
    return (
        <div className="">
            <p>Thank you for accepting the terms and conditions!</p>
            <br />
            <hr></hr>
            <br></br>
            <p>Oh wait you want to see the message? Hah! It doesn't exist! Ok, all jokes aside, I actually wrote something, but due to my sickness I could not complete it, so I thought it might be fun to prank you for a bit! Anyways, if I think of something good to write, I will tell you through secret texts to come back on 3 Apr. Apologies if this website is too poorly-made, I speedran making it in 1.5 hours.</p>
        </div>
    )
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

function Mid() {
    const [ where, setWhere ] = useState(0)

    let audio = new Audio("/rr.mp3")

    const start = () => {
      audio.play()
    }

    useEffect(() => {
        let timeoutId;
        if (where === 8) {
          // Set a timeout to run the function after 5 seconds
          timeoutId = setTimeout(() => {
            // Step 4: Define the function to run
            setWhere(999)
            // You can replace the console.log with your function
          }, 5000); // 5000 milliseconds = 5 seconds
        }
    
        // Cleanup function to clear the timeout if the component unmounts or the state changes before the timeout
        return () => clearTimeout(timeoutId);
     }, [where]); // Depend on myState to re-run the effect when it changes

    if (where === 1) {
        return <One where={where} setWhere={setWhere}/>
    } else if (where === 2) {
        return <Two where={where} setWhere={setWhere}/>
    } else if (where === 3) {
        return <Three where={where} setWhere={setWhere}/>
    } else if (where === 4) {
        return <Four where={where} setWhere={setWhere}/>
    } else if (where === 5) {
        return <Five where={where} setWhere={setWhere}/>
    } else if (where === 6) {
        return <Six where={where} setWhere={setWhere}/>
    } else if (where === 7) {
        return <Seven where={where} setWhere={setWhere}/>
    } else if (where === 8) {
        return <Eight where={where} setWhere={setWhere}/>
        
    } else if (where === 999) {
        return <End where={where} setWhere={setWhere}/>
        
    } 
  
    return (
        <center>
            Do you agree to the <a href="#" onClick={start}>terms and conditions?</a>
            <br />
            <button className="pri" onClick={() => setWhere(999)}>Yes</button>

            <button className="sec" onClick={() => setWhere(1)}>No</button>
        </center>
    );

}

export default Mid;
