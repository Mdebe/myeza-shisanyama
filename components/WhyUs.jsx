"use client";

export default function SocialFeeds() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* TikTok Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-4">
          <h3 className="text-2xl font-bold mb-3 text-center">Follow Us on TikTok</h3>

          {/* Replace "VIDEO_ID" with a real TikTok video ID */}
          <iframe
            src="https://www.tiktok.com/embed/v2/VIDEO_ID"
            className="w-full h-80 sm:h-96"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <a
            href="https://www.tiktok.com/@kwamyezashisacarwash"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Visit @kwamyezashisacarwash
          </a>
        </div>

        {/* Facebook Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-4 w-full">
          <h3 className="text-2xl font-bold mb-3 text-center">Follow Us on Facebook</h3>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D61584983372884&tabs=timeline&width=500&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="100%"
            height="400"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
