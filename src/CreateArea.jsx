import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add"
function CreateArea(props)
{
    const [pieces,setpieces]=useState({
        title:" ",
        content: " "
    });
    function update(event)
    {
        const {name,value}=event.target;
        setpieces((prevValue) =>
        {
            return {
                ...prevValue,
                [name]:value
            };
        }
        );
    }
    function submit(event)
    {
        props.onAdd(pieces);
        setpieces({
            title:"",
            content:""
        });
     event.preventDefault();
    }
    return(
        <div>
            <form class="create-node">
                <input name="title" onChange={update} value={pieces.title} placeholder="Title" />
                <textarea name="content" onChange={update} value={pieces.content} placeholder="Take a note..." rows="3" />
                <button onClick={submit}><AddIcon /></button>                
            </form>
        </div>
    );

}
export default CreateArea;