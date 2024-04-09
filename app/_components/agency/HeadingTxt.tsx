

export default function  HeadingTxt({text}: {text: string}){

    return (
        <div>
            <span className=" w-24 py-1 bg-orange-500 mb-5 block"></span>
            <h2 className="text-4xl font-bold text-white">{text}</h2>
        </div>
    )
}