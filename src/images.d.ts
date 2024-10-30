import { StaticImageData } from "next/image";

declare module '*.png' {
    const value: string | StaticImageData;
    export default value;
}

declare module '*.jpg' {
    const value: string | StaticImageData;
    export default value;
}

declare module '*.jpeg' {
    const value: string | StaticImageData;
    export default value;
}

declare module '*.gif' {
    const value: string | StaticImageData;
    export default value;
}
