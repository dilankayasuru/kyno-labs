"use client";

import {useEffect, useMemo, useState} from "react";
import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.01,
        minSpeed: 0.005,
        // dragControl: false,
    },
};

export const renderCustomIcon = (icon: SimpleIcon) => {
    const bgHex = "#080510";
    const fallbackHex = "#ffffff";
    const minContrastRatio = 2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};

export type DynamicCloudProps = {
    iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({iconSlugs}: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        fetchSimpleIcons({slugs: iconSlugs}).then(setData);
    }, [iconSlugs, mounted]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;

        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon),
        );
    }, [data]);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    );
}
