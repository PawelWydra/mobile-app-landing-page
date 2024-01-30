function SectionContainer({ children }) {
  return (
    <section className="flex justify-between max-w-7xl mx-auto">
      {children}
    </section>
  );
}

export default SectionContainer;
