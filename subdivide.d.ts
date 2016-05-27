import * as React from "react";

interface SubdivideProps {
    DefaultComponent: {new(...args: any[]): React.Component<any, any>}
}

declare class Subdivide extends React.Component<SubdivideProps, any> {}

export default Subdivide;