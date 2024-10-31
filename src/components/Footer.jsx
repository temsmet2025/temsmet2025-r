function Footer() {
    return (
        <div className=" absolute w-full h-20 bg-slate-950 flex justify-center items-center">
            <span className="text-xl text-amber-100">&copy; {new Date().getFullYear()} TEMSMET. All rights reserved.</span>
        </div>
    )
}
export default Footer