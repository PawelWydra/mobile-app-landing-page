function FeatureItem({ icon, title, description, className }) {
  return (
    <div className="flex flex-col gap-4 flex-1 p-8 rounded-2xl shadow-2xl">
      <div className={`flex justify-center items-center rounded-full size-14 ${className}`}>{icon}</div>
      <h3 className="text-lg font-semibold font-serif">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureItem;
