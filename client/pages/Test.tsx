export default function Test() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-romeo-orange font-poppins mb-4">
          Romeo Travel Guide
        </h1>
        <p className="text-lg text-gray-600 font-nunito">
          Your personal tour guide app is working!
        </p>
        <div className="mt-8 space-y-4">
          <div className="text-sm text-gray-500">
            Font test: <span className="font-nunito">Nunito</span> | <span className="font-poppins">Poppins</span>
          </div>
          <div className="bg-romeo-orange text-white px-6 py-3 rounded-full inline-block">
            Color Test: Romeo Orange
          </div>
        </div>
      </div>
    </div>
  );
}
