
export function TermSection({ id, number, title, content }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-[#231F20] leading-tight">
        {number}. {title}
      </h2>
      <div className="prose prose-base sm:prose-lg max-w-none">
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">{content}</p>
      </div>
    </section>
  )
}
