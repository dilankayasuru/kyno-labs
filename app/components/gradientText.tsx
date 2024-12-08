export default function GradientText(props: {
    text: string,
    className?: string,
}) {

    const {text, className="from-white from-75% via-primary-blue via-100% to-white text-4xl font-semibold"} = props;

    return (
        <p className={`bg-gradient-to-r inline-block text-transparent bg-clip-text ${className}`}>
            {text}
        </p>
    )
}