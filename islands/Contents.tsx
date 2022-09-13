import Navbar from "./Navbar.tsx";

export default function Contents() {
  return (
    <div>
      <Navbar/>
      <div className="font-semibold my-4">Topics</div>
      <div className="flex gap-2 flex-wrap">
        <button className="border-2 rounded-md p-2">Integers</button>
        <button className="border-2 rounded-md p-2">Fractions</button>
        <button className="border-2 rounded-md p-2">Decimals</button>
        <button className="border-2 rounded-md p-2">Rational Numbers</button>
        <button className="border-2 rounded-md p-2">Exponents</button>
        <button className="border-2 rounded-md p-2">Algebraic Expressions</button>
        <button className="border-2 rounded-md p-2">Linear Equations in One Variable</button>
        <button className="border-2 rounded-md p-2">Ratio and Proportion</button>
        <button className="border-2 rounded-md p-2">Unitary Method</button>
        <button className="border-2 rounded-md p-2">Percentage</button>
        <button className="border-2 rounded-md p-2">Profit and Loss</button>
        <button className="border-2 rounded-md p-2">Simple Interest</button>
        <button className="border-2 rounded-md p-2">Lines and Angles</button>
        <button className="border-2 rounded-md p-2">Properties of Parallel Lines</button>
        <button className="border-2 rounded-md p-2">Properties of Triangles</button>
        <button className="border-2 rounded-md p-2">Congruence</button>
        <button className="border-2 rounded-md p-2">Constructions</button>
        <button className="border-2 rounded-md p-2">Reflection and Rotational Symmetry</button>
        <button className="border-2 rounded-md p-2">Three-Dimensional Shapes</button>
        <button className="border-2 rounded-md p-2">Mensuration</button>
        <button className="border-2 rounded-md p-2">Collection and Organisation of Data (Mean, Median and Mode)</button>
        <button className="border-2 rounded-md p-2">Bar Graphs</button>
        <button className="border-2 rounded-md p-2" onClick={(e)=>{
            window.open("/Books/Mathematics_for_Class_7/Probability","_self");
          }}>Probability</button>
      </div>
    </div>
  );
}
