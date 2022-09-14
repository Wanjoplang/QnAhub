
export default function Books() {
  return (
    <div>
      <div className="font-semibold my-4">Books</div>
      <div className="flex gap-2 flex-wrap">
        <button className="p-2 border-2 rounded-md" onClick={(e)=>{
          window.open("/Topics","_self");
        }}>
          <div className="text-lg">Mathematics for Class 7</div>
        </button>
      </div>
    </div>
  );
}
