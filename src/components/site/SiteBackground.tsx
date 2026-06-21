export function SiteBackground() {
  return (
    <div className="absolute inset-x-0 top-0 z-[-1] bg-[#0B0F19] min-h-full pointer-events-none">
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{ overflow: "hidden", isolation: "isolate" }}
      >
        <video
          src="https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-19/1779181978164-de4c8727-3137-4d53-9127-2b0edc9e8318.mp4"
          poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a99ea2b7-ad5e-4188-bc7b-afa6b40c71ac_3840w.jpg"
          muted
          playsInline
          preload="metadata"
          loop
          autoPlay
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 0,
            maxWidth: "none",
          }}
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
    </div>
  );
}
