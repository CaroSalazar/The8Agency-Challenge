import {Information} from "../information/Information";
import {Form} from "../form/Form";
import "./ContainerMain.styles.css";

const ContainerMain = () =>{
    return(
        <div className="container-main">
        <Information/>
        <Form/>
        </div>
    )
};
export default ContainerMain;