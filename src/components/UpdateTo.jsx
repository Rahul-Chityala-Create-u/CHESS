import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
export default function UpdateTo() {
    const [classColor, setClassColor] = useState("white");
    const selectedpeiceglobal = useSelector((state)=>state.SelectedPeice);
    useEffect(()=>{
        const classColor =document.querySelectorAll("[data-player=me]")[0].classList[1]
        setClassColor(classColor);
    },[])
const playersMap ={"rook":<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M128 96L128 197.5C128 214.5 134.7 230.8 146.7 242.8L192 288L192 448L135.8 518.3C130.7 524.6 128 532.4 128 540.5C128 560.1 143.9 576 163.5 576L476.4 576C496 576 511.9 560.1 511.9 540.5C511.9 532.4 509.2 524.6 504.1 518.3L447.9 448L447.9 288L493.2 242.7C505.2 230.7 511.9 214.4 511.9 197.4L512 96C512 78.3 497.7 64 480 64L448 64C430.3 64 416 78.3 416 96L416 128L368 128L368 96C368 78.3 353.7 64 336 64L304 64C286.3 64 272 78.3 272 96L272 128L224 128L224 96C224 78.3 209.7 64 192 64L160 64C142.3 64 128 78.3 128 96z"/></svg>,
      "bishop":<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M224 448L208.3 432.3C177.4 401.4 160 359.4 160 315.7C160 277.1 173.5 239.8 198.2 210.1L266.7 128L256 128C238.3 128 224 113.7 224 96C224 78.3 238.3 64 256 64L384 64C401.7 64 416 78.3 416 96C416 113.7 401.7 128 384 128L373.3 128L420.9 185.1L335 271C325.6 280.4 325.6 295.6 335 304.9C344.4 314.2 359.6 314.3 368.9 304.9L451.2 222.6C469.9 249.9 479.9 282.3 479.9 315.6C479.9 359.3 462.5 401.3 431.6 432.2L416 448L472.2 518.3C477.2 524.6 480 532.4 480 540.5C480 560.1 464.1 576 444.5 576L195.5 576C175.9 576 160 560.1 160 540.5C160 532.4 162.7 524.6 167.8 518.3L224 448z"/></svg>,
      "knight":<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M320 32C426 32 512 118 512 224L512 357.5C512 374.5 505.2 390.7 493.3 402.7L448 448L498.8 498.7C507.3 507.2 512 518.7 512 530.7C512 555.7 491.7 575.9 466.8 576L173.3 576C148.3 576 128.1 555.7 128.1 530.7C128.1 518.7 132.9 507.2 141.3 498.7L192 448L192 413.4C192 394.7 200.2 377 214.3 364.8L304 288L256 288L243.9 300.1C231.2 312.8 213.9 320 195.9 320C158.4 320 128 289.6 128 252.1L128 243.4C128 220.6 136.2 198.5 151.1 181.1L224 96L224 64C224 46.3 238.3 32 256 32L320 32zM288 136C274.7 136 264 146.7 264 160C264 173.3 274.7 184 288 184C301.3 184 312 173.3 312 160C312 146.7 301.3 136 288 136z"/></svg>,
      "queen":<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M320 144C346.5 144 368 122.5 368 96C368 69.5 346.5 48 320 48C293.5 48 272 69.5 272 96C272 122.5 293.5 144 320 144zM69.5 249L192 448L135.8 518.3C130.8 524.6 128 532.4 128 540.5C128 560.1 143.9 576 163.5 576L476.4 576C496 576 511.9 560.1 511.9 540.5C511.9 532.4 509.2 524.6 504.1 518.3L448 448L570.5 249C574.1 243.1 576 236.3 576 229.4L576 228.8C576 208.5 559.5 192 539.2 192C531.9 192 524.8 194.2 518.8 198.2L501.9 209.5C489.2 218 472.3 216.3 461.5 205.5L427.4 171.4C420.1 164.1 410.2 160 400 160C389.8 160 379.9 164.1 372.7 171.3L342.6 201.4C330.1 213.9 309.8 213.9 297.3 201.4L267.2 171.3C260.1 164.1 250.2 160 240 160C229.8 160 219.9 164.1 212.7 171.3L178.6 205.4C167.8 216.2 150.9 217.9 138.2 209.4L121.3 198.2C115.2 194.2 108.1 192 100.9 192C80.6 192 64.1 208.5 64.1 228.8L64.1 229.4C64.1 236.3 66 243.1 69.6 249z"/></svg>,
    }
    const playersMapString ={"rook":`<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M128 96L128 197.5C128 214.5 134.7 230.8 146.7 242.8L192 288L192 448L135.8 518.3C130.7 524.6 128 532.4 128 540.5C128 560.1 143.9 576 163.5 576L476.4 576C496 576 511.9 560.1 511.9 540.5C511.9 532.4 509.2 524.6 504.1 518.3L447.9 448L447.9 288L493.2 242.7C505.2 230.7 511.9 214.4 511.9 197.4L512 96C512 78.3 497.7 64 480 64L448 64C430.3 64 416 78.3 416 96L416 128L368 128L368 96C368 78.3 353.7 64 336 64L304 64C286.3 64 272 78.3 272 96L272 128L224 128L224 96C224 78.3 209.7 64 192 64L160 64C142.3 64 128 78.3 128 96z"/></svg>`,
      "bishop":`<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M224 448L208.3 432.3C177.4 401.4 160 359.4 160 315.7C160 277.1 173.5 239.8 198.2 210.1L266.7 128L256 128C238.3 128 224 113.7 224 96C224 78.3 238.3 64 256 64L384 64C401.7 64 416 78.3 416 96C416 113.7 401.7 128 384 128L373.3 128L420.9 185.1L335 271C325.6 280.4 325.6 295.6 335 304.9C344.4 314.2 359.6 314.3 368.9 304.9L451.2 222.6C469.9 249.9 479.9 282.3 479.9 315.6C479.9 359.3 462.5 401.3 431.6 432.2L416 448L472.2 518.3C477.2 524.6 480 532.4 480 540.5C480 560.1 464.1 576 444.5 576L195.5 576C175.9 576 160 560.1 160 540.5C160 532.4 162.7 524.6 167.8 518.3L224 448z"/></svg>`,
      "knight":`<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M320 32C426 32 512 118 512 224L512 357.5C512 374.5 505.2 390.7 493.3 402.7L448 448L498.8 498.7C507.3 507.2 512 518.7 512 530.7C512 555.7 491.7 575.9 466.8 576L173.3 576C148.3 576 128.1 555.7 128.1 530.7C128.1 518.7 132.9 507.2 141.3 498.7L192 448L192 413.4C192 394.7 200.2 377 214.3 364.8L304 288L256 288L243.9 300.1C231.2 312.8 213.9 320 195.9 320C158.4 320 128 289.6 128 252.1L128 243.4C128 220.6 136.2 198.5 151.1 181.1L224 96L224 64C224 46.3 238.3 32 256 32L320 32zM288 136C274.7 136 264 146.7 264 160C264 173.3 274.7 184 288 184C301.3 184 312 173.3 312 160C312 146.7 301.3 136 288 136z"/></svg>`,
      "queen":`<svg className={classColor} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="black" strokeWidth="20" strokeLinejoin="round" d="M320 144C346.5 144 368 122.5 368 96C368 69.5 346.5 48 320 48C293.5 48 272 69.5 272 96C272 122.5 293.5 144 320 144zM69.5 249L192 448L135.8 518.3C130.8 524.6 128 532.4 128 540.5C128 560.1 143.9 576 163.5 576L476.4 576C496 576 511.9 560.1 511.9 540.5C511.9 532.4 509.2 524.6 504.1 518.3L448 448L570.5 249C574.1 243.1 576 236.3 576 229.4L576 228.8C576 208.5 559.5 192 539.2 192C531.9 192 524.8 194.2 518.8 198.2L501.9 209.5C489.2 218 472.3 216.3 461.5 205.5L427.4 171.4C420.1 164.1 410.2 160 400 160C389.8 160 379.9 164.1 372.7 171.3L342.6 201.4C330.1 213.9 309.8 213.9 297.3 201.4L267.2 171.3C260.1 164.1 250.2 160 240 160C229.8 160 219.9 164.1 212.7 171.3L178.6 205.4C167.8 216.2 150.9 217.9 138.2 209.4L121.3 198.2C115.2 194.2 108.1 192 100.9 192C80.6 192 64.1 208.5 64.1 228.8L64.1 229.4C64.1 236.3 66 243.1 69.6 249z"/></svg>`,
    }

    function updatepeiceTo(newPeice){
        document.getElementById("materialSelectionModal").classList.add("hide");
        console.log("updating peice to ", newPeice);
        document.querySelectorAll(`#${selectedpeiceglobal.peiceId}`)[0].innerHTML = playersMapString[newPeice];
         document.querySelectorAll(`#${selectedpeiceglobal.peiceId}`)[0].setAttribute("data-pawn-playing-as",newPeice);
    }
  return (
    <>
    <div className="overlay hide" id="materialSelectionModal">
        <div className="modalBox" >
        <div><h2>
            Update Your Pawn To 👉🏾
            </h2></div>
{
            Object.keys(playersMap).map((key,index)=>{ 
                return <>
                    <div className='holder' onClick={()=>{updatepeiceTo(key)}}>{playersMap[key]}</div>
                </>
             })
}
        </div>
        </div>
    </>
  )
}
