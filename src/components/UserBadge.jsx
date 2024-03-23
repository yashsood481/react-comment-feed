const UserBadge = ({ username = "yash sood" }) => {
  const [firstName, lastName] = username.split(" ");
  return (
    <div className="bg-slate-600 w-12 h-12 rounded-full flex items-center justify-center">
      {`${firstName[0].toLocaleUpperCase()}${lastName[0].toLocaleUpperCase()}`}
    </div>
  );
};

export default UserBadge;
