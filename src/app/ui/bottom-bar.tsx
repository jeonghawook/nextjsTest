import Link from 'next/link';

const BottomBar = () => {
  return (
    <div className="flex justify-evenly ">
      <Link href="/public">
        <span className="text-white">Home</span>
      </Link>
      <Link href="/list">
        <span className="text-white mr-4">List</span>
      </Link>
      <Link href="/profile">
        <span className="text-white">Profile</span>
      </Link>
    </div>
  );
};


export default BottomBar;