/**
 * PageSkeleton — Loading fallback component for page suspense.
 * Shows a minimal spinner with navbar structure to prevent layout shift.
 */
const PageSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navbar skeleton */}
      <div className="border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="w-12 h-8 bg-slate-200 rounded" />
          <div className="flex gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-20 h-4 bg-slate-100 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Page content skeleton with spinner */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center gap-8">
          {/* Spinner */}
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-slate-900 animate-spin" />
          </div>

          {/* Loading text */}
          <p className="text-slate-400 text-sm font-medium">Cargando...</p>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
