import Image from "next/image"

interface Props{
    lightSrc : unknown
    darkSrc : unknown
    className?:string
    alt : string
    darkStatus : boolean
    width : string
    height : string
}

const ThemeImage = ({lightSrc, darkSrc, className, alt, darkStatus, width, height}: Props) => {
    return (
        <div>
            {darkStatus ? (
                <Image src={lightSrc as string} alt={alt} width={parseInt(width)} height={parseInt(height)} className={className} />
            ) : (
                <Image src={darkSrc as string} alt={alt} width={parseInt(width)} height={parseInt(height)} className={className} />
            )}
        </div>
    )
}

export default ThemeImage