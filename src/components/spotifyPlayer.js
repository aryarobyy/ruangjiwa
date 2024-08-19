const SpotifyPlayer = ({ playlistId }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-[var(--title-color)] mb-4">
        Musik untuk Relaksasi
      </h2>
      <iframe
        src={`https://open.spotify.com/embed/album/${playlistId}`}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
