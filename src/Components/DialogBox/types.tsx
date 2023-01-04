
import React , { ReactNode } from "react";

type Props = {
    open? : boolean,
    titleColor?: string,
    title? :string ,
    buttonTitle?: string,
    children? : ReactNode,
    primaryAction: ()=> {},
    handleClose : any,
    buttonSize : string,
    sx : {},
}
export default Props;