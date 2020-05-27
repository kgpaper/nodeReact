import React , {useState} from 'react';
import CustomComponent from './CustomComponent';

const CustomComponent2 = () => {
    
    const [name,setName] = useState("초기값");
    
    return(<div>
        {name}
    </div>)
};

export default CustomComponent2;