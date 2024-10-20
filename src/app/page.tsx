"use client";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header
        tag="admin"
        title="タイトル"
        onPress={() => {}}
        leftButton={
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
            adminのボタンです
          </button>
        }
      />
      <br />
      <Header
        tag="user"
        title="タイトル"
        onPress={() => {}}
        rightButton={
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
            userのボタンです
          </button>
        }
      />
    </>
  );
}
