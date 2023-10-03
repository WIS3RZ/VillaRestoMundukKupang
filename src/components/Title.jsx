import { Helmet } from "react-helmet";
function Title(props){
    const titleHere = props.titleHere;
    return(
        <>
            <Helmet>
                <title>{titleHere} - Villa & Resto Munduk Kupang</title>
            </Helmet>
        </>
    )
}

export default Title;