
const Title = (probs) => {
  return (
    <div>
        <h2 className="text-[#69E2A9] text-lg uppercase">{probs.title}</h2>
        <h1 className="font-semibold text-3xl text-[#1F252F]">{probs.des}</h1>
    </div>
  )
}

export default Title