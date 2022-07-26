import React from "react";

const ListItem = props => {
  //props.highlight
    /*let X = parseFloat(props.item.coords.x);
    let Y = parseFloat(props.item.coords.y);
    let Z = parseFloat(props.item.coords.z);*/

    let X = props.item.coords.x;
    let Y = props.item.coords.y;
    let Z = props.item.coords.z; 
    /*if (props.item.coords.x.length > 6) {
      X = X.toExponential();
    }
    if (props.item.coords.y.length > 6) {
      Y = Y.toExponential();
    }
    if (props.item.coords.z.length > 6) {
      Z = Z.toExponential();
    }*/

    return (
      <li class = "liList" style={{backgroundColor: ( props.item.highlight ) ? "yellow":"white"}}>
        <style>
        </style>

        <table className="tableinputlist" border="7" cellspacing="7">
          <tr>

              <td className="tdcheck">
                  <input className="checkboxinputlarger" type="checkbox" checked={props.item.check} className="checkboxinputlarger" value={props.itemIndex} onChange={() => {props.handleCheck(props.itemIndex)}}/>
              </td>

          <td className="tdinputlist">


            <input
                className = "inputList"
                type = "text"
                iindex = {props.itemIndex}
                onChange = {props.handleItemEdit}
                value = {X}
                placeholder = "x"
            />

            <input
                className = "inputList"
                type = "text"
                iindex = {props.itemIndex}
                onChange = {props.handleItemEdit}
                value = {Y}
                placeholder = "y"
            />

            <input
                className = "inputList"
                type = "text"
                iindex = {props.itemIndex}
                onChange = {props.handleItemEdit}
                value = {Z}
                placeholder = "z"
            />
            
        
            {/*
            <button className="buttonlistitem" onClick={() => {props.handleEditClick(props.itemIndex)}}>
              {X}, 
              <br/>{Y},
              <br/>{Z}
            </button>*/
            }
          </td>
          
          <td className="tdinputlist">
            <button className="buttonlistitem" onClick={
              () => {props.handleRemove(props.itemIndex)}
              }>
                ❌
            </button>
          </td>

          </tr>

        </table>
      </li>
    );
};

export default ListItem;