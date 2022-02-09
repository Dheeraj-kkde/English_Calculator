import React,{useState} from 'react';

const About = (props) => {


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#073f90' : 'white'
    }

    // const [myStyle, setMyStyle] = useState( {
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

//     const [btnText, setBtnText] = useState("Enable Dark Mode");

//  const toggleStyle = ()=> {
     
//     if(myStyle.color==='black')
//     {
//         setBtnText("Disable Dark mode");
//         setMyStyle({color:'white', backgroundColor: 'black'});
//     }
//     else{
//         setBtnText('Enable Dark mode');
//         setMyStyle({color:'black', backgroundColor: 'white'});
//     }
//  }
    
  return (
    <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}> 
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    English Calculator gives you a way to analyze your text quickly and efficiently. Be it word count, character count or mintues to read the text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    English Calculator is a free character counter tool that provides instant character count & word count statistics for a given text. English Calculator reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.  
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Safari, Internet Explorer or Opera. It suits o count characters in facebook, blog, twitter, books, excel documents, pdf documents, essays, etc.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <strong>Provide multiple features for Text Manipulation</strong>
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This tool provides multiple features like turning the text to lowercase, uppercase, remove the extra spaces etc. Such features help to smoothens the process of making some powerpoint or word documents.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="buttonContainer my-3">
                <button className='button btn btn-dark' onClick = {toggleStyle} >{btnText}</button>
            </div> */}
    </div>
  );
};

export default About;
