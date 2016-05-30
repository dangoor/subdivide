import * as React from "react";
import {Dispatch} from "redux";

interface SubdivideProps {
    DefaultComponent: {new(...args: any[]): React.Component<any, any>};
    dispatch: Dispatch;
    subdivide: any;
    componentProps: any;
}

declare class Subdivide extends React.Component<SubdivideProps, any> {}

export function reducer(state: any, action: any): any;

export default Subdivide;