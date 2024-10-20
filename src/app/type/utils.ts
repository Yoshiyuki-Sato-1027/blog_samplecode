/**
 * 大元となるPropsと判定したいPropsのtagを指定して、判定したいPropsかどうかを判定する
 * @param props 大元となるProps
 * @param tag 判定したいPropsのtag
 */
export function isPropsOfType<
  Props extends { tag: string }, // 大元となるPropsの型
  Tag extends Props["tag"] // 判定したいPropsのtagの型
>(props: Props, tag: Tag): props is Props & { tag: Tag } {
  return props.tag === tag;
}
