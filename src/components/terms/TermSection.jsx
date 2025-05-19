
export default function TermSection({ number, title, term }) {

  return (
    <section className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-2 text-[#231F20]">
        {number}. {title}
      </h2>
 
        <p className="text-gray-700 text-xl leading-relaxed">{term}</p>
    
      
    </section>
  );
}
