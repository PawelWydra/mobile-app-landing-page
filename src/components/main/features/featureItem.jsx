function FeatureItem({ icon, title, description, className }) {
  return (
    <div className="min-w-80 max-w-[25rem] flex flex-col gap-4 flex-1 p-8 rounded-2xl shadow-custom hover:bg-gray-100 ease-in-out duration-300">
      <div
        className={`flex justify-center items-center rounded-full size-14 ${className} max-md:self-center`}
      >
        {icon}
      </div>
      <h2 className="max-md:text-center">
        {title}
      </h2>
      <p className="max-md:text-center text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureItem;
