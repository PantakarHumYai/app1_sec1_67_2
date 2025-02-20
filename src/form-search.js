import React from "react";

export default function FormSearch(){
    const textKw = React.useRef()
    const btOk = React.createRef()

    const OnchangeKw = () =>{
        if(text .current.valen.trim() !== ''){
            btOk.current.disabled = false
        } else {
            btOk.current.disabled = true
        }
    }
    return(
        <div style={{margin:'30px'}}>
            <form>
                <input type="text" name="kw" placeholder="ค้นหา"
                ref={textKw} onInput={OnchangeKw}/>&nbsp;
                <button ref={btOk} disabled>ตกลง</button>
            </form>
        </div>
    )
}