import './header.css'

const header = ()=>{
    const today = new Date();
    const days = today.toDateString()
    return(
        <header>
            <h3><img src={`${process.env.PUBLIC_URL}/assets/logo.png`}/></h3>
            <div>
                <p>TODAY : </p>
                <span>{days}</span>
                <p>DEADLINE : </p>
                <span>{days}</span>
            </div>
        </header>
    )
}
export default header;