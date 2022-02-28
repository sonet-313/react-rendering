import { memo } from "react";
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildArea");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
