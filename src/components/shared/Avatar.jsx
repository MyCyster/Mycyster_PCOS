const Avatar = ({ src, name, size = 40, textSize = "text-sm m" }) => {
  const getInitial = (name) => name?.charAt(0).toUpperCase() || "?";

  if (src) {
    return (
      <img
        src={src}
        width={size}
        height={size}
        className="rounded-full object-cover border"
        alt="Profile"
      />
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-gray-400 text-white font-bold"
    >
      <span className={`${textSize}`}>{getInitial(name)}</span>
    </div>
  );
};

export default Avatar;
