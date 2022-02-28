import { useState, useCallback } from "react";
import { ChildArea } from "./components/ChildArea";
import "./styles.css";

export default function App() {
  const [text, settext] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    settext(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
