/**
 * ベースとなるPropsと抽出したいPropsを指定して、抽出したいPropsかどうかを判定する
 */
export function isPropsOfType<
  Props extends { tag: string }, // 大元となるPropsの型
  CheckProps extends Props // 判定したいPropsの型
>(props: Props, tag: CheckProps["tag"]): props is CheckProps {
  return props.tag === tag;
}
