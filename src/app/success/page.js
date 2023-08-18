import Image from "next/image"

export default function Success() {
    return (
        <div className='flex flex-col justify-center items-center p-5 bg-slate-700 h-screen'>
            <Image
                src="/DSC00852.JPG"
                width={500}
                height={500} 
                quality={30} 
                alt="打哈欠"></Image>
            <div className="text-3xl font-semibold m-8">收到了，我儘快．．．</div>
        </div>
    )
}