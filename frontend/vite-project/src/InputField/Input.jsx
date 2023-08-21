import "../Edit/edit.css"
import "../Posts/post.css"

const Input = (props) => {
    const {inputType,classStyle,label,data,setData} = props;
    return ( 
        <>
        <label>{label}</label>
        {inputType === 'textarea' ?(
            <textarea placeholder={data} className={classStyle} onChange={(e)=> setData(e.target.value)} ></textarea>
        ): (
            <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)}  />  
            )
        }
        </>
     );
}
 
export default Input;