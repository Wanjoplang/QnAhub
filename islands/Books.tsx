
export default function Books() {
  return (
    <div>
      <div className="font-semibold my-4">Books</div>
      <button className="flex gap-2 flex-wrap">
        <div className="p-2 border-2 rounded-md" onClick={(e)=>{
          window.open("/Topics","_self");
        }}>
          <div className="text-lg">Mathematics for Class 7</div>
          <small>R S Aggarwal, MSc, PhD</small>
        </div>
      </button>
    </div>
  );
}
