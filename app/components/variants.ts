const variants = {
    offscreen: {
        y: 50,
        opacity: 0,
        scale: 0.5
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "fading",
            duration: 0.3
        }
    }
}

export default variants;