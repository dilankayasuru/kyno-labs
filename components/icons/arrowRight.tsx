import {IconProps} from "@/components/icons/iconProps";

export default function ArrowRight(props: IconProps) {
    const {height, width, color} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
             fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path
                d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>
        </svg>
    )
}