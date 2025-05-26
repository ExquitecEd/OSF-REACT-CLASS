import Content from "../components/Content"


const Rotate = () => (    <div className="rotate">
    <div className="butt">
        <button type="button">CSS</button>
    </div>
    <div className="">
        <button type="menu">HTML 5</button>
    </div>
  </div>)

export default function Home() {
  return (
  <>
    <Rotate />
    {[1,2,3].map((index)=><Content index={index} key={`myRowIndex-${index}`} />)}
    
  </>
)
}

