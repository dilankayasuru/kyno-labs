import {IconProps} from "@/components/icons/iconProps";

export default function ArrowUp(props: IconProps) {
    const {height, width, color} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 -960 960 960" width={`${width}px`}
             fill={color}>
            <path
                d="M480-545.33 310.67-376q-9.67 9.67-23.34 9.33-13.66-.33-23.33-10-9.67-9.66-9.67-23.66T264-424l192.67-192.67q10-10 23.33-10 13.33 0 23.33 10l193.34 193.34q9.66 9.66 9.66 23.33 0 13.67-9.66 23.33Q687-367 673-367q-14 0-23.67-9.67L480-545.33Z"/>
        </svg>
    )
}