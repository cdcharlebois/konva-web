import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Konva.css";

export function Konva({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
