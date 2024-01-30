function SectionContainer({ className, children }) {
  return (
    <section className={`flex justify-between max-w-6xl mx-auto mb-10 ${className}`}>
      {children}
    </section>
  );
}


export default SectionContainer;
