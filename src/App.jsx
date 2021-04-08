import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// function Create(note)
// {
//     return (
//     <Note 
//     key={note.key}
//     className="note" 
//     head={note.title} 
//     des={note.content} />);

// }


function App()
{
    
    const [allNotes,setAllNotes]=useState([]);

    function AddNote(note)
    {
        setAllNotes((prevValue)=>
        {
           return [...prevValue,note];
        })
        
    }
    function DeleteNode(id)
    {
        setAllNotes((prevValue)=>
        {
            return (prevValue.filter((nodeItem,index)=>
            {
                return index!== id;

            }))
        })

    }
        return(<div>
        <Header  />
        <CreateArea onAdd={AddNote} />
        {allNotes.map((noteItem,index)=>
        {
            return <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={DeleteNode}
            />

        })}
        <Footer />
        </div>
        );   
}
export default App;