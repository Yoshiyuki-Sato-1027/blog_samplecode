import React from "react";
import { isPropsOfType } from "../utils/isPropsOfType";

type Tag = "admin" | "user";

type BaseHeaderProps = {
  tag: Tag;
  title: string;
  onPress: () => void;
};

type AdminHeaderProps = BaseHeaderProps & {
  tag: "admin";
  leftButton: React.ReactNode;
};
type UserHeaderProps = BaseHeaderProps & {
  tag: "user";
  rightButton: React.ReactNode;
};

type HeaderProps = AdminHeaderProps | UserHeaderProps;

function Header(props: HeaderProps) {
  const { title, onPress } = props;
  const isAdmin = isPropsOfType<HeaderProps, AdminHeaderProps["tag"]>(
    props,
    "admin"
  );
  const isUser = isPropsOfType<HeaderProps, UserHeaderProps["tag"]>(
    props,
    "user"
  );

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {isAdmin && props.leftButton}

        <div className="flex-1 text-center">
          <div className="text-2xl font-bold">{title}</div>
          <button
            className="bg-white text-blue-500 px-4 py-2 mt-4 rounded hover:bg-gray-100"
            onClick={() => onPress()}
          >
            onPress
          </button>
        </div>

        {isUser && props.rightButton}
      </div>
    </header>
  );
}

export default Header;
