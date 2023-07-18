/* eslint-disable react/jsx-key */
import { useState } from "react";



const UseState_TODO = () => {

  
    const [inputText, setinputText] = useState("");
    const [list, setList] = useState([]);

    // Add Item
    const addList = (inputText) => {

        if (inputText !== '') {
            setList([...list, inputText])
            console.log(list);
        }
      
    
    }
    // item remove
    const removeItem = () => {
        let newList = [...list];

        newList.splice(list, 1);

        setList([...newList])
    }
  
    // Hendle Enter Press
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
             addList(inputText)
             setinputText("")
        }
    }
    return (
        <div>
            <h1 className="text-center">TODO Application</h1> <br /><br />
            
            <div className="todo text-center">
                <input onChange={(e)=> setinputText(e.target.value)} onKeyDown={handleEnterPress} type="text" placeholder="Item" value={inputText}/>
                <button className="btnt" onClick={() => {
                    addList(inputText)
                    setinputText("")
                }} >Add Task</button>
            </div>
             <div className="item_list mt-5">
                <ul className="item">
                    {
                        list.map((item, i) => {
                            return (
                                <li key={i}>{item}
                                    <span><i className="fa-solid fa-trash" onClick={removeItem}></i></span>
                                </li>
                            )
                        })
                    }
                   
                </ul>
            </div>
        </div>
    );
};

export default UseState_TODO;